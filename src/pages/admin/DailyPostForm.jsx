import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import Button from '../../components/Button';
import RevealTitle from '../../components/RevealTitle';
import { RefreshCw, Save, ArrowLeft } from 'lucide-react';

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
        content_id: ''
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
            setFormData(data);
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
        if (!formData.title_en) return alert('Enter Title EN first');
        const slug = formData.title_en
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
        setFormData(prev => ({ ...prev, slug }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = {
                ...formData,
                updated_at: new Date().toISOString(),
                published_at: formData.status === 'published' && !formData.published_at
                    ? new Date().toISOString()
                    : formData.published_at
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
                    {/* Meta */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Status</label>
                            <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
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

                    <hr className="border-slate-100" />

                    {/* Content EN */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-slate-900 border-b pb-2">English Content</h3>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Headline (Title)</label>
                            <input name="title_en" value={formData.title_en} onChange={handleChange} className="w-full p-2 border rounded text-lg font-serif" placeholder="e.g. The Art of Persistence" required />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Article Body</label>
                            <textarea name="content_en" value={formData.content_en} onChange={handleChange} rows={6} className="w-full p-2 border rounded font-serif text-slate-600 leading-relaxed" placeholder="Write your thoughts..." />
                        </div>
                    </div>

                    {/* Content ID */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-slate-900 border-b pb-2">Indonesian Content</h3>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Headline (Judul)</label>
                            <input name="title_id" value={formData.title_id} onChange={handleChange} className="w-full p-2 border rounded text-lg font-serif" placeholder="Contoh: Seni Ketekunan" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Article Body (Isi)</label>
                            <textarea name="content_id" value={formData.content_id} onChange={handleChange} rows={6} className="w-full p-2 border rounded font-serif text-slate-600 leading-relaxed" placeholder="Tulis pemikiran anda..." />
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
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
