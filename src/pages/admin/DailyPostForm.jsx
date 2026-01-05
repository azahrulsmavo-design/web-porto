import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import Button from '../../components/Button';
import RevealTitle from '../../components/RevealTitle';
import { RefreshCw, Save, ArrowLeft, Tag, Calendar, Image as ImageIcon, FileType } from 'lucide-react';

const DailyPostForm = () => {
    const { id } = useParams();
    const isEditMode = !!id;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        slug: '',
        status: 'draft',
        author: 'Azahrul',
        published_at: '',
        title_en: '',
        content_en: '',
        title_id: '',
        content_id: '',
        image_url: '',
        format: 'text',
        post_type: 'daily', // default
        tags: '', // string for input, converted to array on submit
    });

    useEffect(() => {
        if (isEditMode) {
            fetchPost();
        }
    }, [id]);

    const fetchPost = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('daily_posts')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            setFormData({
                ...data,
                tags: data.tags ? data.tags.join(', ') : '',
                // ensure format is set
                format: data.format || 'text',
                post_type: data.post_type || 'daily'
            });
        } catch (error) {
            console.error('Error fetching post:', error);
            alert('Failed to load post');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generateSlug = () => {
        const sourceTitle = formData.title_id || formData.title_en;
        if (!sourceTitle) return alert('Enter a Title (ID or EN) first');

        const slug = sourceTitle
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
        setFormData(prev => ({ ...prev, slug }));
    };

    const normalizeTags = () => {
        if (!formData.tags) return;
        const tags = formData.tags
            .split(',')
            .map(t => t.trim())
            .filter(Boolean)
            .map(t => t.toLowerCase()); // or proper case

        // Re-join for display
        setFormData(prev => ({ ...prev, tags: tags.join(', ') }));
    };

    // Helper: UTCTimestamp/ISOString -> Local "YYYY-MM-DDTHH:mm" for input
    const toLocalISOString = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);

        // Check if date is valid
        if (isNaN(date.getTime())) return '';

        const pad = (num) => num.toString().padStart(2, '0');
        const year = date.getFullYear(); // Local year
        const month = pad(date.getMonth() + 1); // Local month
        const day = pad(date.getDate()); // Local day
        const hours = pad(date.getHours()); // Local hours
        const minutes = pad(date.getMinutes()); // Local minutes

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        normalizeTags();

        try {
            const tagsArray = formData.tags
                ? formData.tags.split(',').map(t => t.trim()).filter(Boolean)
                : [];

            // Handle Date: If from Input (Local ISO) or DB (UTC ISO), ensure it is saved as UTC ISO
            const publishedAtUTC = formData.published_at
                ? new Date(formData.published_at).toISOString()
                : (formData.status === 'published' ? new Date().toISOString() : null);

            const payload = {
                ...formData,
                tags: tagsArray,
                updated_at: new Date().toISOString(),
                published_at: publishedAtUTC
            };

            let error;
            if (isEditMode) {
                const { error: updateError } = await supabase
                    .from('daily_posts')
                    .update(payload)
                    .eq('id', id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('daily_posts')
                    .insert([payload]);
                error = insertError;
            }

            if (error) throw error;
            navigate('/admin/dashboard');
        } catch (error) {
            console.error('Error saving post:', error);
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate('/admin/dashboard')} className="text-slate-400 hover:text-slate-600">
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <RevealTitle text={isEditMode ? 'Edit Article' : 'New Article'} className="text-2xl font-bold text-slate-900" />
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    {/* 1. Meta / Settings */}
                    <div className="bg-slate-50 p-6 rounded-lg space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Status</label>
                                <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Type</label>
                                <select name="post_type" value={formData.post_type} onChange={handleChange} className="w-full p-2 border rounded">
                                    <option value="daily">Daily Post</option>
                                    <option value="learn">Learn Progress</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Format</label>
                                <div className="flex items-center gap-2">
                                    <FileType className="w-4 h-4 text-slate-500" />
                                    <select name="format" value={formData.format} onChange={handleChange} className="w-full p-2 border rounded">
                                        <option value="text">Plain Text</option>
                                        <option value="markdown">Markdown</option>
                                        <option value="json">JSON (Advanced)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Published Date</label>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-slate-500" />
                                    <input
                                        type="datetime-local"
                                        name="published_at"
                                        value={toLocalISOString(formData.published_at)}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Author</label>
                                <input name="author" value={formData.author} onChange={handleChange} className="w-full p-2 border rounded" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Slug</label>
                            <div className="flex gap-2">
                                <input name="slug" value={formData.slug} onChange={handleChange} className="w-full p-2 border rounded font-mono text-sm" required />
                                <button type="button" onClick={generateSlug} className="px-3 py-2 bg-slate-100 border rounded hover:bg-slate-200">
                                    <RefreshCw size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 2. Media & Tags */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-slate-900 border-b pb-2">Media & Taxonomy</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Image URL</label>
                                <div className="flex items-center gap-2">
                                    <ImageIcon className="w-4 h-4 text-slate-500" />
                                    <input name="image_url" value={formData.image_url || ''} onChange={handleChange} className="w-full p-2 border rounded" placeholder="https://..." />
                                </div>
                                {formData.image_url && <img src={formData.image_url} alt="Preview" className="mt-2 h-20 w-auto rounded object-cover shadow-sm" />}
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Tags (Comma separated)</label>
                                <div className="flex items-center gap-2">
                                    <Tag className="w-4 h-4 text-slate-500" />
                                    <input name="tags" value={formData.tags} onChange={handleChange} onBlur={normalizeTags} className="w-full p-2 border rounded" placeholder="life, tech, philosophy" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <hr className="border-slate-100" />

                    {/* 3. Content EN */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-slate-900 border-b pb-2">English Content</h3>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Headline (Title)</label>
                            <input name="title_en" value={formData.title_en} onChange={handleChange} className="w-full p-2 border rounded text-lg font-serif" placeholder="e.g. The Art of Persistence" required />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Article Body ({formData.format})</label>
                            <textarea
                                name="content_en"
                                value={formData.content_en}
                                onChange={handleChange}
                                rows={8}
                                className={`w-full p-2 border rounded font-serif text-slate-600 leading-relaxed ${formData.format === 'markdown' || formData.format === 'json' ? 'font-mono text-sm bg-slate-50' : ''}`}
                                placeholder="Write your thoughts..."
                            />
                        </div>
                    </div>

                    {/* 4. Content ID */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-slate-900 border-b pb-2">Indonesian Content</h3>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Headline (Judul)</label>
                            <input name="title_id" value={formData.title_id} onChange={handleChange} className="w-full p-2 border rounded text-lg font-serif" placeholder="Contoh: Seni Ketekunan" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Article Body ({formData.format})</label>
                            <textarea
                                name="content_id"
                                value={formData.content_id}
                                onChange={handleChange}
                                rows={8}
                                className={`w-full p-2 border rounded font-serif text-slate-600 leading-relaxed ${formData.format === 'markdown' || formData.format === 'json' ? 'font-mono text-sm bg-slate-50' : ''}`}
                                placeholder="Tulis pemikiran anda..."
                            />
                        </div>
                    </div>

                    <div className="flex justify-end pt-4 bg-white sticky bottom-0 border-t border-slate-100 py-4">
                        <Button onClick={handleSubmit} disabled={loading} size="lg">
                            <Save size={18} className="mr-2" />
                            {loading ? 'Saving...' : 'Save Article'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DailyPostForm;
