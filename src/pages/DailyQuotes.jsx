import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { Copy, Check, Calendar, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DailyQuotes = () => {
    const { language } = useLanguage();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [copiedId, setCopiedId] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const { data, error } = await supabase
                .from('daily_posts')
                .select('*')
                .eq('status', 'published')
                .order('published_at', { ascending: false });

            if (error) throw error;
            setPosts(data || []);
        } catch (error) {
            console.error('Error loading posts:', error);
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

    const ArticleCard = ({ post, isFeatured = false }) => {
        const title = language === 'id' ? (post.title_id || post.title_en) : post.title_en;
        const content = language === 'id' ? (post.content_id || post.content_en) : post.content_en;
        const date = new Date(post.published_at).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return (
            <div className={`relative group ${isFeatured ? 'mb-16' : 'mb-12'}`}>
                {isFeatured && (
                    <div className="flex items-center gap-2 mb-4 text-purple-600 font-medium text-sm uppercase tracking-wider">
                        <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
                        {language === 'id' ? 'Artikel Hari Ini' : 'Today\'s Read'}
                    </div>
                )}

                <article className={`
                    relative bg-white transition-all duration-300
                    ${isFeatured
                        ? '' // Minimalist for featured, let typography stand out
                        : 'border-b border-slate-100 pb-8'
                    }
                `}>
                    <div className="flex flex-col gap-4">
                        {/* Meta */}
                        <div className="flex items-center gap-3 text-slate-500 text-sm">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {date}
                            </span>
                            <span>•</span>
                            <span className="font-medium text-slate-700">{post.author}</span>
                        </div>

                        {/* Heading */}
                        <h2 className={`font-serif leading-tight text-slate-900 group-hover:text-purple-700 transition-colors ${isFeatured ? 'text-4xl md:text-5xl font-bold mb-2' : 'text-2xl md:text-3xl font-bold'}`}>
                            {title}
                        </h2>

                        {/* Content Preview / Body */}
                        <div className={`font-serif text-slate-600 leading-relaxed whitespace-pre-wrap ${isFeatured ? 'text-lg md:text-xl' : 'text-base'}`}>
                            {content}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4 pt-4">
                            <button
                                onClick={() => handleCopy(title, post.id)} // Copy Title as the "Quote"
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-600 transition-colors text-sm font-medium"
                                title="Copy Headline"
                            >
                                {copiedId === post.id ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        <span>{language === 'id' ? 'Tersalin' : 'Copied'}</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                        <span>{language === 'id' ? 'Salin Judul' : 'Copy Headline'}</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20">
                {/* Header */}
                <div className="max-w-3xl mx-auto px-6 mb-16 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-slate-50 rounded-full mb-6">
                        <BookOpen className="w-6 h-6 text-slate-900" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-serif">
                        {language === 'id' ? 'Jurnal Harian' : 'Daily Journal'}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto font-serif italic">
                        {language === 'id'
                            ? 'Kumpulan pemikiran pendek, refleksi, dan ide-ide yang layak dibagikan.'
                            : 'A collection of short thoughts, reflections, and ideas worth sharing.'}
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-3xl mx-auto px-6">
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-purple-600"></div>
                        </div>
                    ) : (
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {posts.length > 0 ? (
                                    <>
                                        {/* Featured (Latest) */}
                                        <ArticleCard post={posts[0]} isFeatured={true} />

                                        {/* Divider */}
                                        {posts.length > 1 && (
                                            <div className="flex items-center gap-4 mb-12">
                                                <div className="h-px bg-slate-200 flex-1"></div>
                                                <span className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                                                    {language === 'id' ? 'Tulisan Terdahulu' : 'Previous Reads'}
                                                </span>
                                                <div className="h-px bg-slate-200 flex-1"></div>
                                            </div>
                                        )}

                                        {/* Archive */}
                                        <div className="space-y-2">
                                            {posts.slice(1).map(post => (
                                                <ArticleCard key={post.id} post={post} />
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                                        <p className="text-slate-500 font-medium">
                                            {language === 'id' ? 'Belum ada tulisan.' : 'No articles yet.'}
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

export default DailyQuotes;
