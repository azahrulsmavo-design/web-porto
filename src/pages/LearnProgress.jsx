import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { Copy, Check, Calendar, BookOpen, Search, ArrowUpDown, X, TrendingUp, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LearnProgress = () => {
    const { language } = useLanguage();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [copiedId, setCopiedId] = useState(null);

    // Filters
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('desc'); // 'desc' or 'asc'
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            // Filter by post_type = 'learn'
            // NOTE: Only if post_type column exists. If not, this might fail or return nothing if we don't select it.
            // Since we added the column in SQL but maybe not applied, we should be careful.
            // However, Supabase usually ignores columns that don't exist in select unless explicitly vetted? 
            // Actually, if I filter .eq('post_type', 'learn'), and the column doesn't exist, it will throw error.
            // I'll assume the user runs the SQL.
            const { data, error } = await supabase
                .from('daily_posts')
                .select('*')
                .eq('status', 'published')
                .eq('post_type', 'learn')
                .order('published_at', { ascending: false });

            if (error) {
                // Fallback: if post_type doesn't exist yet, we might want to show nothing or handle gracefully.
                console.error('Error loading posts (might be missing column):', error);
                throw error;
            }
            setPosts(data || []);
        } catch (error) {
            console.error('Error loading learn progress:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        });
    };

    const filteredPosts = useMemo(() => {
        let result = [...posts];

        // Search
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter(post => {
                const title = (language === 'id' ? (post.title_id || post.title_en) : post.title_en).toLowerCase();
                const content = (language === 'id' ? (post.content_id || post.content_en) : post.content_en).toLowerCase();
                return title.includes(lowerQuery) || content.includes(lowerQuery);
            });
        }

        // Date Filter
        if (selectedDate) {
            result = result.filter(post => {
                const postDate = new Date(post.published_at).toISOString().split('T')[0];
                return postDate === selectedDate;
            });
        }

        // Sort
        result.sort((a, b) => {
            const dateA = new Date(a.published_at).getTime();
            const dateB = new Date(b.published_at).getTime();
            return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
        });

        return result;
    }, [posts, searchQuery, selectedDate, sortOrder, language]);

    const ArticleCard = ({ post }) => {
        const title = language === 'id' ? (post.title_id || post.title_en) : post.title_en;
        const content = language === 'id' ? (post.content_id || post.content_en) : post.content_en;
        const date = new Date(post.published_at).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return (
            <div className="relative group mb-12">
                <article className="relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 flex flex-col gap-4">
                    <Link to={`/daily-post/${post.slug}`} className="block group cursor-pointer">
                        {/* Header Image */}
                        {post.image_url && (
                            <div className="overflow-hidden rounded-xl bg-slate-100 h-48 md:h-64 mb-6">
                                <img src={post.image_url} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        )}

                        <div className="flex flex-col gap-3">
                            {/* Meta */}
                            <div className="flex items-center flex-wrap gap-3 text-slate-500 text-xs md:text-sm">
                                <span className="flex items-center gap-1.5 font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                                    <Code className="w-3.5 h-3.5" />
                                    {language === 'id' ? 'Progress Belajar' : 'Learn Progress'}
                                </span>
                                <span className="flex items-center gap-1.5 font-medium text-slate-600">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {date}
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-xl md:text-2xl font-bold font-serif leading-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                                {title}
                            </h2>

                            {/* Content Preview */}
                            <div className="font-serif text-slate-500 leading-relaxed line-clamp-3 text-base">
                                {(() => {
                                    let raw = content || '';
                                    if (post.format === 'json') {
                                        try {
                                            const parsed = JSON.parse(raw);
                                            raw = typeof parsed === 'string' ? parsed : JSON.stringify(parsed);
                                        } catch { }
                                    }
                                    const plain = raw
                                        .replace(/[#*`]/g, '')
                                        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
                                        .replace(/\n+/g, ' ')
                                        .trim();
                                    return plain.length > 200 ? plain.substring(0, 200) + '...' : plain;
                                })()}
                            </div>
                        </div>
                    </Link>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
                        <Link to={`/daily-post/${post.slug}`} className="text-emerald-600 font-medium text-sm hover:underline">
                            {language === 'id' ? 'Baca Selengkapnya →' : 'Read Update →'}
                        </Link>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCopy(title, post.id);
                            }}
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-600 transition-colors text-xs md:text-sm font-medium"
                            title="Copy Headline"
                        >
                            {copiedId === post.id ? (
                                <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </article>
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <div className="pt-24 pb-12 md:pt-32 md:pb-20">
                {/* Header */}
                <div className="max-w-3xl mx-auto px-5 mb-8 md:mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-2.5 md:p-3 bg-emerald-50 rounded-full mb-4 md:mb-6">
                        <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />
                    </div>
                    <h1 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight font-serif">
                        {language === 'id' ? 'Jurnal Belajar' : 'Learning Progress'}
                    </h1>
                    <p className="text-base md:text-xl text-slate-500 max-w-xl mx-auto font-serif italic">
                        {language === 'id'
                            ? 'Catatan harian perjalanan saya mempelajari teknologi baru.'
                            : 'Daily updates on my journey learning new technologies.'}
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-3xl mx-auto px-6">
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-emerald-600"></div>
                        </div>
                    ) : (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={sortOrder + searchQuery + selectedDate}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {filteredPosts.length > 0 ? (
                                    <div className="space-y-2">
                                        {filteredPosts.map((post) => (
                                            <ArticleCard key={post.id} post={post} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                                        <p className="text-slate-500 font-medium">
                                            {language === 'id' ? 'Belum ada update progress.' : 'No learning updates yet.'}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LearnProgress;
