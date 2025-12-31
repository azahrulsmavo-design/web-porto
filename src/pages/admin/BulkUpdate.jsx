import React, { useMemo, useState } from "react";
import Papa from "papaparse";
import { supabase } from "../../lib/supabase";
import RevealTitle from "../../components/RevealTitle";
import Button from "../../components/Button";
import { UploadCloud, AlertCircle, CheckCircle, FileText, Download, Info } from "lucide-react";

function parseList(value) {
    if (!value) return [];
    return value
        .split("|")
        .map((s) => s.trim())
        .filter(Boolean);
}

function normalizeTags(tags) {
    return [...new Set(tags.map((t) => t.toUpperCase()))];
}

function normalizeTechStack(stack) {
    // simple title-case (capitalize first letter of each word if handled loosely, or just first letter)
    // Let's stick to the previous logic: Title Case
    return [...new Set(stack.map((s) => s.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())))];
}

function isValidUrl(url) {
    if (!url) return true; // Optional field validity
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

export default function BulkUpdate() {
    const [rows, setRows] = useState([]);
    const [errors, setErrors] = useState([]);
    const [mode, setMode] = useState("update_only"); // update_only | upsert
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const parsed = useMemo(() => {
        const valid = [];
        const invalid = [];

        rows.forEach((r, idx) => {
            // Row Number (1-based header is 1, so first data row is 2)
            const rowNum = idx + 2;

            const slug = (r.slug || "").trim();
            if (!slug) {
                invalid.push({ row: rowNum, slug: "", reason: "Slug is required" });
                return;
            }

            const status = (r.status || "").toLowerCase().trim();
            if (status && !["draft", "published"].includes(status)) {
                invalid.push({ row: rowNum, slug, reason: `Invalid status: '${status}'. Must be 'draft' or 'published'` });
                return;
            }

            const sort_order =
                r.sort_order === undefined || r.sort_order === ""
                    ? 0 // Default to 0? Or null? Let's default to 0 to be safe for integers
                    : Number(r.sort_order);

            if (Number.isNaN(sort_order)) {
                invalid.push({ row: rowNum, slug, reason: "sort_order must be number" });
                return;
            }

            if (r.demo_url && !isValidUrl(r.demo_url)) {
                invalid.push({ row: rowNum, slug, reason: "Invalid demo_url" });
                return;
            }
            if (r.github_url && !isValidUrl(r.github_url)) {
                invalid.push({ row: rowNum, slug, reason: "Invalid github_url" });
                return;
            }

            const tech_stack = normalizeTechStack(parseList(r.tech_stack || ""));
            const tags = normalizeTags(parseList(r.tags || ""));

            // Clean Object
            const cleanObj = {
                slug,
                status: status || undefined,
                sort_order: sort_order, // keep as 0 if 0
                category: r.category?.trim() || undefined,
                timeline: r.timeline?.trim() || undefined, // Added
                cover_image: r.cover_image?.trim() || undefined,
                image_gradient: r.image_gradient?.trim() || undefined,
                demo_url: r.demo_url?.trim() || undefined,
                github_url: r.github_url?.trim() || undefined,

                // Content
                title_en: r.title_en?.trim() || undefined,
                desc_en: r.desc_en?.trim() || undefined,
                title_id: r.title_id?.trim() || undefined,
                desc_id: r.desc_id?.trim() || undefined,

                tech_stack: tech_stack.length ? tech_stack : undefined,
                tags: tags.length ? tags : undefined,
                updated_at: new Date().toISOString()
            };

            // Remove undefined keys to avoid overriding with nulls if we want partial updates?
            // ... (same comments as before)

            // Filter out undefined values to support partial updates
            const payload = Object.fromEntries(
                Object.entries(cleanObj).filter(([_, v]) => v !== undefined)
            );

            valid.push(payload);
        });

        return { valid, invalid };
    }, [rows]);

    function handleUpload(file) {
        setResult(null);
        setErrors([]);
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (res) => {
                setRows(res.data);
                if (res.errors && res.errors.length > 0) {
                    setErrors(res.errors.map(e => `Row ${e.row}: ${e.message}`));
                } else {
                    setErrors([]);
                }
            },
            error: (err) => {
                setErrors([err.message]);
            }
        });
    }

    const downloadTemplate = () => {
        const headers = [
            "slug", "status", "sort_order", "category", "timeline",
            "title_en", "desc_en", "title_id", "desc_id",
            "cover_image", "image_gradient", "demo_url", "github_url", "tech_stack", "tags"
        ];
        const example = [
            "my-project", "draft", "1", "Web App", "Ongoing",
            "My Project Title", "Short description...", "Judul Proyek", "Deskripsi singkat...",
            "https://...", "from-blue-100 to-blue-50", "https://demo.com", "https://github.com", "React|Tailwind", "FRONTEND|WEB"
        ];
        const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), example.map(s => `"${s}"`).join(",")].join("\n"); // Quote values
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "projects_template.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    async function applyChanges() {
        setLoading(true);
        setResult(null);

        try {
            if (parsed.valid.length === 0) {
                setResult({ ok: false, message: "No valid rows to apply." });
                return;
            }

            // update_only means: only update rows that exist
            if (mode === "update_only") {
                // fetch existing slugs
                const slugs = parsed.valid.map((v) => v.slug);
                const { data: existing, error: fetchErr } = await supabase
                    .from("projects")
                    .select("slug")
                    .in("slug", slugs);

                if (fetchErr) throw fetchErr;

                const existingSet = new Set(existing.map((e) => e.slug));
                const updates = parsed.valid.filter((v) => existingSet.has(v.slug));

                if (updates.length === 0) {
                    setResult({
                        ok: true,
                        message: `No matching projects found to update. (Updates: 0, Skipped: ${parsed.valid.length})`,
                    });
                    return;
                }

                const { error } = await supabase
                    .from("projects")
                    .upsert(updates, { onConflict: "slug" });

                if (error) throw error;

                setResult({
                    ok: true,
                    message: `Successfully Updated ${updates.length} projects. (Skipped ${parsed.valid.length - updates.length} new slugs)`,
                });
                return;
            }

            // upsert mode (update + create)
            const { error } = await supabase
                .from("projects")
                .upsert(parsed.valid, { onConflict: "slug" });

            if (error) throw error;

            setResult({ ok: true, message: `Successfully Upserted ${parsed.valid.length} projects.` });
            // Reset after success? Maybe keep for review.

        } catch (e) {
            setResult({ ok: false, message: e.message || "Bulk update failed." });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
                    <div>
                        <RevealTitle text="Bulk Update" className="text-2xl font-bold text-slate-900" />
                        <p className="text-xs text-slate-500 mt-1">Mass update projects via CSV (Title Case Tech, Uppercase Tags).</p>
                    </div>
                    <Button href="/admin/dashboard" variant="outline" size="sm">Back to Dashboard</Button>
                </div>

                <div className="p-8 space-y-8">

                    {/* 1. Template & Upload */}
                    <section className="space-y-4">
                        <div className="flex justify-between items-end">
                            <h3 className="font-bold text-slate-700 flex items-center gap-2">
                                <UploadCloud size={20} /> Upload CSV
                            </h3>
                            <button onClick={downloadTemplate} className="text-xs text-blue-600 font-bold flex items-center gap-1 hover:underline">
                                <Download size={14} /> Download Template
                            </button>
                        </div>

                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors relative cursor-pointer">
                            <input
                                type="file"
                                accept=".csv"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
                            />
                            <div className="pointer-events-none">
                                <FileText className="mx-auto text-slate-400 mb-2" size={32} />
                                <p className="text-sm text-slate-600 font-medium">Click to select or drag CSV file here</p>
                                <p className="text-xs text-slate-400 mt-1">Delimiter: Comma (,), List Delimiter: Pipe (|)</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Options */}
                    <section className="bg-slate-50 p-4 rounded border border-slate-200">
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                            <Info size={16} /> Update Mode
                        </label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="mode"
                                    value="update_only"
                                    checked={mode === 'update_only'}
                                    onChange={(e) => setMode(e.target.value)}
                                />
                                <span className="text-sm"><b>Update Only</b> (Safe - Skips new slugs)</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="mode"
                                    value="upsert"
                                    checked={mode === 'upsert'}
                                    onChange={(e) => setMode(e.target.value)}
                                />
                                <span className="text-sm"><b>Upsert</b> (Update + Create new)</span>
                            </label>
                        </div>
                    </section>

                    {/* 3. Preview */}
                    {(rows.length > 0 || errors.length > 0) && (
                        <section className="space-y-4 border-t border-slate-100 pt-8">
                            <div className="flex gap-8">
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-slate-400">Valid Rows</h4>
                                    <p className="text-2xl font-bold text-emerald-600">{parsed.valid.length}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-slate-400">Invalid Rows</h4>
                                    <p className={`text-2xl font-bold ${parsed.invalid.length > 0 ? 'text-red-600' : 'text-slate-600'}`}>
                                        {parsed.invalid.length}
                                    </p>
                                </div>
                            </div>

                            {parsed.invalid.length > 0 && (
                                <div className="bg-red-50 text-red-700 p-4 rounded text-sm border border-red-100">
                                    <h5 className="font-bold flex items-center gap-2 mb-2"><AlertCircle size={16} /> Validation Errors</h5>
                                    <ul className="list-disc pl-5 space-y-1">
                                        {parsed.invalid.slice(0, 10).map((x, i) => (
                                            <li key={i}>
                                                Row {x.row} ({x.slug || "No Slug"}): {x.reason}
                                            </li>
                                        ))}
                                        {parsed.invalid.length > 10 && <li>...and {parsed.invalid.length - 10} more</li>}
                                    </ul>
                                </div>
                            )}

                            {errors.length > 0 && (
                                <div className="bg-amber-50 text-amber-700 p-4 rounded text-sm border border-amber-100">
                                    <h5 className="font-bold flex items-center gap-2 mb-2"><AlertCircle size={16} /> CSV Parse Errors</h5>
                                    <ul className="list-disc pl-5">
                                        {errors.slice(0, 5).map((e, i) => <li key={i}>{e}</li>)}
                                    </ul>
                                </div>
                            )}

                            {/* Action */}
                            <div className="flex justify-end pt-4">
                                <Button onClick={applyChanges} disabled={loading || parsed.valid.length === 0} size="lg">
                                    {loading ? "Applying..." : `Apply ${mode === 'update_only' ? 'Updates' : 'Upsert'}`}
                                </Button>
                            </div>

                            {/* Result Message */}
                            {result && (
                                <div className={`p-4 rounded border ${result.ok ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
                                    <div className="flex items-center gap-2 font-bold mb-1">
                                        {result.ok ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                        {result.ok ? "Success" : "Failed"}
                                    </div>
                                    <p className="text-sm">{result.message}</p>
                                </div>
                            )}
                        </section>
                    )}

                </div>
            </div>
        </div>
    );
}
