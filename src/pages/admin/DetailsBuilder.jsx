import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp, LayoutTemplate } from 'lucide-react';
import { CATEGORY_CONFIG, CATEGORIES } from '../../config/categoryConfig';

const DetailsBuilder = ({ initialData, onChange, language, category }) => {
    // Parse initial data
    const [data, setData] = useState(() => {
        try {
            return typeof initialData === 'string' ? JSON.parse(initialData) : initialData || {};
        } catch {
            return {};
        }
    });

    const [expandedSection, setExpandedSection] = useState('overview');

    useEffect(() => {
        onChange(JSON.stringify(data, null, 2));
    }, [data]);

    // Use Web App as default if category not matched
    const config = CATEGORY_CONFIG[category] || CATEGORY_CONFIG[CATEGORIES.WEB_APP];

    // Merge generic sections (Overview, Stats, Images) with Config specific ones? 
    // Or fully rely on config? User asked for "Smart fields".
    // Let's implement a Hybrid approach: Basic Header/Overview + Configurable Sections + Images (Global)

    const updateField = (path, value) => {
        // Simple update for top-level keys
        setData(prev => ({ ...prev, [path]: value }));
    };

    const updateNestedField = (path, key, value) => {
        setData(prev => ({
            ...prev,
            [path]: {
                ...(prev[path] || {}),
                [key]: value
            }
        }));
    };

    // Lists
    const addListItem = (key, template = "") => {
        setData(prev => ({
            ...prev,
            [key]: [...(prev[key] || []), template]
        }));
    };

    const removeListItem = (key, index) => {
        setData(prev => ({
            ...prev,
            [key]: (prev[key] || []).filter((_, i) => i !== index)
        }));
    };

    const updateListItem = (key, index, subkey, value) => {
        // If subkey is null, it's a list of strings
        setData(prev => ({
            ...prev,
            [key]: (prev[key] || []).map((item, i) => {
                if (i !== index) return item;
                if (!subkey) return value; // String list
                return { ...item, [subkey]: value }; // Object list
            })
        }));
    };

    const applyTemplate = () => {
        if (window.confirm(`Apply Standard Template for ${category}? This will overwrite current details.`)) {
            setData(config.template);
        }
    };

    const toggleSection = (sec) => setExpandedSection(expandedSection === sec ? null : sec);

    return (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-slate-700">Details Builder ({language})</h4>
                <button type="button" onClick={applyTemplate} className="text-xs flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1.5 rounded hover:bg-blue-200 font-bold transition-colors">
                    <LayoutTemplate size={14} /> Apply {category} Template
                </button>
            </div>

            {/* --- 1. GLOBAL: HEADER & OVERVIEW --- */}
            <Section title="Overview & Metadata (Global)" expanded={expandedSection === 'overview'} onToggle={() => toggleSection('overview')}>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold mb-1">Big Header</label>
                            <input
                                value={data.header || ''}
                                onChange={e => updateField('header', e.target.value)}
                                className="w-full text-sm p-2 border rounded" placeholder="E.g. REDESIGNING THE EXPERIENCE"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold mb-1">Subheader</label>
                            <input
                                value={data.subheader || ''}
                                onChange={e => updateField('subheader', e.target.value)}
                                className="w-full text-sm p-2 border rounded" placeholder="E.g. UI/UX CASE STUDY"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold mb-1">Overview Title</label>
                        <input
                            value={data.overview?.title || ''}
                            onChange={e => updateNestedField('overview', 'title', e.target.value)}
                            className="w-full text-sm p-2 border rounded mb-2"
                        />
                        <label className="block text-xs font-bold mb-1">Overview Content</label>
                        <textarea
                            value={data.overview?.content || ''}
                            onChange={e => updateNestedField('overview', 'content', e.target.value)}
                            rows={3}
                            className="w-full text-sm p-2 border rounded"
                        />
                    </div>
                </div>
            </Section>

            {/* --- 2. DYNAMIC SECTIONS FROM CONFIG --- */}
            {config.sections.map((sectionConfig) => (
                <Section
                    key={sectionConfig.key}
                    title={sectionConfig.title}
                    expanded={expandedSection === sectionConfig.key}
                    onToggle={() => toggleSection(sectionConfig.key)}
                >
                    {/* TYPE: TEXT / TEXTAREA */}
                    {['text', 'textarea'].includes(sectionConfig.type) && (
                        <textarea
                            value={data[sectionConfig.key] || ''}
                            onChange={e => updateField(sectionConfig.key, e.target.value)}
                            className="w-full text-sm p-2 border rounded"
                            rows={sectionConfig.type === 'textarea' ? 4 : 2}
                        />
                    )}

                    {/* TYPE: OBJECT-TEXT (Title/Content Map) */}
                    {sectionConfig.type === 'object-text' && (
                        <div className="space-y-2">
                            <input
                                placeholder={`${sectionConfig.title} Title`}
                                value={data[sectionConfig.key]?.title || ''}
                                onChange={e => updateNestedField(sectionConfig.key, 'title', e.target.value)}
                                className="w-full text-sm p-2 border rounded font-bold"
                            />
                            <textarea
                                placeholder="Content..."
                                value={data[sectionConfig.key]?.content || ''}
                                onChange={e => updateNestedField(sectionConfig.key, 'content', e.target.value)}
                                rows={3}
                                className="w-full text-sm p-2 border rounded"
                            />
                        </div>
                    )}

                    {/* TYPE: OBJECT-MIXED (Defined Fields) */}
                    {sectionConfig.type === 'object-mixed' && (
                        <div className="space-y-3">
                            {sectionConfig.fields.map(f => (
                                <div key={f.key}>
                                    <label className="block text-xs font-bold mb-1 capitalize">{f.key.replace('_', ' ')}</label>
                                    <input
                                        value={data[sectionConfig.key]?.[f.key] || ''}
                                        onChange={e => updateNestedField(sectionConfig.key, f.key, e.target.value)}
                                        className="w-full text-sm p-2 border rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* TYPE: LIST-STRING (Simple Array) */}
                    {sectionConfig.type === 'list-string' && (
                        <div className="space-y-2">
                            {(data[sectionConfig.key] || []).map((item, i) => (
                                <div key={i} className="flex gap-2">
                                    <input
                                        value={item}
                                        onChange={e => updateListItem(sectionConfig.key, i, null, e.target.value)}
                                        className="flex-1 text-sm p-2 border rounded"
                                    />
                                    <button type="button" onClick={() => removeListItem(sectionConfig.key, i)} className="text-red-400">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                            <button type="button" onClick={() => addListItem(sectionConfig.key, "")} className="text-xs text-blue-600 font-bold flex items-center gap-1">
                                <Plus size={14} /> Add Item
                            </button>
                        </div>
                    )}

                    {/* TYPE: LIST-OBJECT (Title/Desc) */}
                    {sectionConfig.type === 'list-object' && (
                        <div className="space-y-3">
                            {(data[sectionConfig.key] || []).map((item, i) => (
                                <div key={i} className="bg-white p-2 border rounded relative">
                                    <button type="button" onClick={() => removeListItem(sectionConfig.key, i)} className="absolute top-2 right-2 text-red-400">
                                        <Trash2 size={14} />
                                    </button>
                                    {sectionConfig.fields.map(f => (
                                        <input
                                            key={f}
                                            placeholder={f}
                                            value={item[f] || ''}
                                            onChange={e => updateListItem(sectionConfig.key, i, f, e.target.value)}
                                            className={`w-full p-1 border-b mb-1 outline-none ${f === 'title' ? 'font-bold' : 'text-xs'}`}
                                        />
                                    ))}
                                </div>
                            ))}
                            <button type="button" onClick={() => addListItem(sectionConfig.key, {})} className="text-xs text-blue-600 font-bold flex items-center gap-1">
                                <Plus size={14} /> Add Item
                            </button>
                        </div>
                    )}

                    {/* TYPE: MAP-LIST (e.g. Frontend: [], Backend: []) */}
                    {sectionConfig.type === 'map-list' && (
                        <div className="space-y-4">
                            {sectionConfig.keys.map(k => (
                                <div key={k}>
                                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">{k}</label>
                                    <input
                                        value={(data[sectionConfig.key]?.[k] || []).join(', ')}
                                        onChange={e => updateNestedField(sectionConfig.key, k, e.target.value.split(','))}
                                        className="w-full text-sm p-2 border rounded placeholder:text-slate-300"
                                        placeholder="Comma separated..."
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </Section>
            ))}

            {/* --- 3. GLOBAL: IMAGES --- */}
            <Section title="Project Gallery (Global)" expanded={expandedSection === 'images'} onToggle={() => toggleSection('images')}>
                <div className="space-y-4">
                    {(data.images || []).map((img, i) => (
                        <div key={i} className="flex gap-4 items-start bg-white p-3 border rounded relative group">
                            <div className="w-20 h-16 bg-slate-100 rounded overflow-hidden flex-shrink-0 border border-slate-200">
                                {img.src ? <img src={img.src} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-xs text-slate-300">No Img</div>}
                            </div>
                            <div className="flex-1 space-y-2">
                                <input
                                    placeholder="Image URL"
                                    className="w-full text-xs font-mono p-1 border rounded bg-slate-50"
                                    value={img.src}
                                    onChange={e => updateListItem('images', i, 'src', e.target.value)}
                                />
                                <input
                                    placeholder="Caption / Title"
                                    className="w-full text-xs p-1 border-b outline-none"
                                    value={img.title || ''}
                                    onChange={e => updateListItem('images', i, 'title', e.target.value)}
                                />
                            </div>
                            <button type="button" onClick={() => removeListItem('images', i)} className="text-red-400 hover:text-red-600">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addListItem('images', { src: "", title: "" })} className="w-full py-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded border border-blue-200 dashed flex items-center justify-center gap-1">
                        <Plus size={14} /> Add Image Slot
                    </button>
                </div>
            </Section>

        </div>
    );
};

const Section = ({ title, children, expanded, onToggle }) => (
    <div className="border border-slate-200 rounded-lg overflow-hidden mb-2 bg-slate-50/50">
        <button
            type="button"
            onClick={onToggle}
            className="w-full flex items-center justify-between p-3 bg-white hover:bg-slate-50 transition-colors text-left"
        >
            <span className="text-xs font-bold uppercase tracking-wide text-slate-700">{title}</span>
            {expanded ? <ChevronUp size={14} className="text-slate-400" /> : <ChevronDown size={14} className="text-slate-400" />}
        </button>
        {expanded && (
            <div className="p-3 border-t border-slate-200">
                {children}
            </div>
        )}
    </div>
);

export default DetailsBuilder;
