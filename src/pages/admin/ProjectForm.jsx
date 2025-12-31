import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import Button from '../../components/Button';
import RevealTitle from '../../components/RevealTitle';
import DetailsBuilder from './DetailsBuilder';
import { RefreshCw, LayoutTemplate } from 'lucide-react';
import { CATEGORY_CONFIG, CATEGORIES } from '../../config/categoryConfig';

const GRADIENTS = [
    { label: 'Blue (Standard)', value: 'from-blue-100 to-blue-50', class: 'bg-gradient-to-br from-blue-100 to-blue-50' },
    { label: 'Purple (Creative)', value: 'from-purple-100 to-pink-50', class: 'bg-gradient-to-br from-purple-100 to-pink-50' },
    { label: 'Emerald (Growth)', value: 'from-emerald-100 to-teal-50', class: 'bg-gradient-to-br from-emerald-100 to-teal-50' },
    { label: 'Orange (Warm)', value: 'from-orange-100 to-amber-50', class: 'bg-gradient-to-br from-orange-100 to-amber-50' },
    { label: 'Slate (Modern)', value: 'from-slate-100 to-gray-50', class: 'bg-gradient-to-br from-slate-100 to-gray-50' },
];

const ProjectForm = () => {
    const { slug } = useParams();
    const isEditMode = !!slug;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        slug: '',
        category: 'Web App',
        status: 'draft',
        sort_order: 0,
        timeline: '',
        client: '',
        location: '',
        demo_url: '',
        github_url: '',
        cover_image: '',
        image_gradient: 'from-blue-100 to-blue-50',
        tech_stack: '', // transformed to array on submit
        tags: '', // transformed to array on submit

        // English
        title_en: '',
        desc_en: '',
        details_en: JSON.stringify({}, null, 2),

        // Indonesian
        title_id: '',
        desc_id: '',
        details_id: JSON.stringify({}, null, 2),
    });

    useEffect(() => {
        if (isEditMode) {
            fetchProject();
        }
    }, [slug]);

    const fetchProject = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('slug', slug)
                .single();

            if (error) throw error;

            setFormData({
                ...data,
                tech_stack: data.tech_stack ? data.tech_stack.join(', ') : '',
                tags: data.tags ? data.tags.join(', ') : '',
                details_en: JSON.stringify(data.details_en || {}, null, 2),
                details_id: JSON.stringify(data.details_id || {}, null, 2),
            });
        } catch (error) {
            console.error('Error fetching project:', error);
            setFetchError('Could not load project.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // --- UTILITIES ---
    const generateSlug = () => {
        if (!formData.title_en) return alert('Please enter an English Title first.');
        const slug = formData.title_en
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
        setFormData(prev => ({ ...prev, slug }));
    };

    const normalizeTags = () => {
        const stackRaw = formData.tech_stack.split(',');
        const tagsRaw = formData.tags.split(',');

        // Title Case for Tech Stack
        const cleanStack = [...new Set(stackRaw.map(s => s.trim())
            .filter(Boolean)
            .map(s => s.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()))
        )];

        // Uppercase for Tags
        const cleanTags = [...new Set(tagsRaw.map(s => s.trim())
            .filter(Boolean)
            .map(s => s.toUpperCase())
        )];

        setFormData(prev => ({
            ...prev,
            tech_stack: cleanStack.join(', '),
            tags: cleanTags.join(', ')
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // --- VALIDATION ---
        normalizeTags(); // Normalize before saving

        if (formData.status === 'published') {
            const errors = [];
            if (!formData.slug) errors.push('Slug is required.');
            if (formData.title_en.length < 3) errors.push('English Title is too short.');
            if (!formData.desc_en) errors.push('English Short Description is required.');
            if (!formData.cover_image) errors.push('Cover Image URL is required.');

            // Category-Specific Validation
            const categoryConfig = CATEGORY_CONFIG[formData.category];
            if (categoryConfig && categoryConfig.validate) {
                const catErrors = categoryConfig.validate(formData);
                errors.push(...catErrors);
            }

            if (errors.length > 0) {
                alert(`Cannot Publish:\n- ${errors.join('\n- ')}`);
                return;
            }
        }

        setLoading(true);

        try {
            // Transform arrays for payload (use current state directly as normalization runs on setState which is async, better to re-run logic)
            const stackRaw = formData.tech_stack.split(',');
            const tagsRaw = formData.tags.split(',');

            const tech_stack = [...new Set(stackRaw.map(s => s.trim()).filter(Boolean))];
            const tags = [...new Set(tagsRaw.map(s => s.trim()).filter(Boolean))];

            const payload = {
                ...formData,
                tech_stack,
                tags,
                details_en: JSON.parse(formData.details_en),
                details_id: JSON.parse(formData.details_id),
                updated_at: new Date().toISOString(),
                published_at: formData.status === 'published' && !formData.published_at ? new Date().toISOString() : formData.published_at
            };

            // Don't update slug if it would break PK? (Supabase auto PK is ID, so OK if Slug changes as long as unique)

            let error;
            if (isEditMode) {
                // We use slug from params to find record, but update might change slug
                const { error: updateError } = await supabase
                    .from('projects')
                    .update(payload)
                    .eq('slug', slug); // OLD slug to identify
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('projects')
                    .insert([payload]);
                error = insertError;
            }

            if (error) throw error;
            navigate('/admin/dashboard');

        } catch (error) {
            console.error('Error saving:', error);
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    if (fetchError) return <div className="p-8 text-red-600">{fetchError}</div>;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                    <div>
                        <RevealTitle text={isEditMode ? 'Edit Project' : 'New Project'} className="text-2xl font-bold text-slate-900" />
                        <p className="text-xs text-slate-500 mt-1">Fill in the project details. Use the builders for complex sections.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button href="/admin/dashboard" variant="outline" size="sm">Cancel</Button>
                        <Button onClick={handleSubmit} disabled={loading} size="sm">
                            {loading ? 'Saving...' : 'Save Project'}
                        </Button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-12">

                    {/* --- 1. CORE METADATA --- */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4">
                            <h3 className="text-lg font-bold text-slate-900">1. Core Metadata</h3>
                            <p className="text-sm text-slate-500 mt-2">Basic info for listing cards and URLs.</p>
                        </div>
                        <div className="md:col-span-8 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Project Slug (URL)</label>
                                    <div className="flex gap-2">
                                        <input
                                            name="slug"
                                            value={formData.slug}
                                            onChange={handleChange}
                                            required
                                            className="flex-1 p-2 border rounded font-mono text-sm"
                                            placeholder="e.g. ecommerce-redesign"
                                        />
                                        <button
                                            type="button"
                                            onClick={generateSlug}
                                            className="px-3 py-2 bg-slate-100 border border-slate-200 rounded hover:bg-slate-200 text-slate-600"
                                            title="Generate from Title"
                                        >
                                            <RefreshCw size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Status</label>
                                    <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Order</label>
                                    <input type="number" name="sort_order" value={formData.sort_order} onChange={handleChange} className="w-full p-2 border rounded" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Category</label>
                                    <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded">
                                        <option value={CATEGORIES.WEB_APP}>{CATEGORIES.WEB_APP}</option>
                                        <option value={CATEGORIES.DATA_ANALYSIS}>{CATEGORIES.DATA_ANALYSIS}</option>
                                        <option value={CATEGORIES.DATA_ENGINEERING}>{CATEGORIES.DATA_ENGINEERING}</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Timeline</label>
                                    <input name="timeline" value={formData.timeline} onChange={handleChange} className="w-full p-2 border rounded" placeholder="e.g. 3 Weeks" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-100" />

                    {/* --- 2. VISUALS --- */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4">
                            <h3 className="text-lg font-bold text-slate-900">2. Visuals & Tech</h3>
                            <p className="text-sm text-slate-500 mt-2">Appearance and technical details.</p>

                            {/* Preview */}
                            <div className={`mt-6 aspect-video rounded-lg shadow-sm flex items-center justify-center p-4 border border-slate-200 ${GRADIENTS.find(g => g.value === formData.image_gradient)?.class || 'bg-gray-100'}`}>
                                {formData.cover_image ? (
                                    <img src={formData.cover_image} className="max-h-full shadow-lg rounded" alt="Preview" />
                                ) : (
                                    <span className="text-xs text-slate-500 font-bold">Preview Area</span>
                                )}
                            </div>
                        </div>
                        <div className="md:col-span-8 space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Cover Image URL</label>
                                <input name="cover_image" value={formData.cover_image} onChange={handleChange} className="w-full p-2 border rounded" placeholder="https://..." />
                                <p className="text-xs text-slate-400 mt-1">Use a public URL from your storage bucket.</p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Background Gradient</label>
                                <select name="image_gradient" value={formData.image_gradient} onChange={handleChange} className="w-full p-2 border rounded">
                                    {GRADIENTS.map(g => (
                                        <option key={g.value} value={g.value}>{g.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Tech Stack</label>
                                <div className="flex gap-2">
                                    <input
                                        name="tech_stack"
                                        value={formData.tech_stack}
                                        onChange={handleChange}
                                        onBlur={normalizeTags}
                                        className="w-full p-2 border rounded"
                                        placeholder="React, Supabase, Tailwind"
                                    />
                                    <button type="button" onClick={normalizeTags} className="px-3 py-2 bg-slate-100 border rounded text-slate-600" title="Normalize">
                                        <RefreshCw size={16} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Tags (Uppercase)</label>
                                <input
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleChange}
                                    onBlur={normalizeTags}
                                    className="w-full p-2 border rounded"
                                    placeholder="FRONTEND, FULLSTACK"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Demo URL</label>
                                    <input name="demo_url" value={formData.demo_url} onChange={handleChange} className="w-full p-2 border rounded" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">GitHub URL</label>
                                    <input name="github_url" value={formData.github_url} onChange={handleChange} className="w-full p-2 border rounded" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-100" />

                    {/* --- 3. DETAILS BUILDER (EN) --- */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4">
                            <h3 className="text-lg font-bold text-slate-900">3. English Content</h3>
                            <p className="text-sm text-slate-500 mt-2">The main content of your case study.</p>
                        </div>
                        <div className="md:col-span-8 space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Title (EN)</label>
                                <input name="title_en" value={formData.title_en} onChange={handleChange} className="w-full p-2 border rounded" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Short Description (EN)</label>
                                <textarea name="desc_en" value={formData.desc_en} onChange={handleChange} rows={3} className="w-full p-2 border rounded" required />
                            </div>

                            <hr className="border-slate-100" />

                            <DetailsBuilder
                                language="EN"
                                category={formData.category} // Pass Category
                                initialData={formData.details_en}
                                onChange={(jsonString) => setFormData(prev => ({ ...prev, details_en: jsonString }))}
                            />
                        </div>
                    </section>

                    <hr className="border-slate-100" />

                    {/* --- 4. DETAILS BUILDER (ID) --- */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4">
                            <h3 className="text-lg font-bold text-slate-900">4. Indonesian Content</h3>
                            <p className="text-sm text-slate-500 mt-2">Translate your content.</p>
                        </div>
                        <div className="md:col-span-8 space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Title (ID)</label>
                                <input name="title_id" value={formData.title_id} onChange={handleChange} className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Short Description (ID)</label>
                                <textarea name="desc_id" value={formData.desc_id} onChange={handleChange} rows={3} className="w-full p-2 border rounded" />
                            </div>

                            <hr className="border-slate-100" />

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (window.confirm("Copy simplified English structure to Indonesian?")) {
                                            setFormData(prev => ({ ...prev, details_id: prev.details_en }));
                                        }
                                    }}
                                    className="text-xs text-blue-600 hover:underline flex items-center gap-1 mb-2"
                                >
                                    <LayoutTemplate size={14} /> Copy Config from EN
                                </button>
                            </div>

                            <DetailsBuilder
                                language="ID"
                                category={formData.category} // Pass Category
                                initialData={formData.details_id}
                                onChange={(jsonString) => setFormData(prev => ({ ...prev, details_id: jsonString }))}
                            />
                        </div>
                    </section>

                    <div className="flex justify-end ">
                        <Button onClick={handleSubmit} disabled={loading} size="lg">
                            {loading ? 'Saving Project...' : 'Save All Changes'}
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
