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

        // Simple formatter for markdown/json/text
        const renderContent = (text, format) => {
            if (!text) return null;

            if (format === 'json') {
                try {
                    return <pre className="bg-slate-50 p-4 rounded text-xs font-mono overflow-auto">{JSON.stringify(JSON.parse(text), null, 2)}</pre>;
                } catch {
                    return <div className="text-red-500 text-sm">Invalid JSON</div>;
                }
            }

            // Primitive Markdown handling (just line breaks and bold for now, can be expanded)
            if (format === 'markdown') {
                return (
                    <div className="prose prose-slate prose-lg max-w-none">
                        {text.split('\n').map((line, i) => (
                            <p key={i} className="mb-4 whitespace-pre-wrap">{line}</p>
                        ))}
                    </div>
                );
            }

            // Default Text
            return <div className="whitespace-pre-wrap">{text}</div>;
        };

        return (
            <div className={`relative group ${isFeatured ? 'mb-20' : 'mb-16'}`}>
                {isFeatured && (
                    <div className="flex items-center gap-2 mb-6 text-purple-600 font-medium text-sm uppercase tracking-wider">
                        <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
                        {language === 'id' ? 'Artikel Hari Ini' : 'Today\'s Read'}
                    </div>
                )}

                <article className={`
                    relative bg-white transition-all duration-300 flex flex-col gap-6
                    ${isFeatured
                        ? '' // Minimalist for featured
                        : 'border-b border-slate-100 pb-12'
                    }
                `}>
                    {/* Header Image */}
                    {post.image_url && (
                        <div className={`overflow-hidden rounded-xl bg-slate-100 ${isFeatured ? 'h-64 md:h-96 mb-6' : 'h-48 md:h-64 mb-4'}`}>
                            <img src={post.image_url} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                    )}

                    <div className="flex flex-col gap-4">
                        {/* Meta */}
                        <div className="flex items-center flex-wrap gap-3 text-slate-500 text-sm">
                            <span className="flex items-center gap-1.5 font-medium text-slate-800 bg-slate-50 px-2 py-1 rounded">
                                <Calendar className="w-3.5 h-3.5" />
                                {date}
                            </span>

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <>
                                    <span className="text-slate-300">•</span>
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-purple-600 hover:text-purple-700 font-medium capitalize">
                                            #{tag}
                                        </span>
                                    ))}
                                </>
                            )}
                        </div>

                        {/* Heading */}
                        <h2 className={`font-serif leading-tight text-slate-900 group-hover:text-purple-700 transition-colors ${isFeatured ? 'text-4xl md:text-5xl font-bold mb-2' : 'text-2xl md:text-3xl font-bold'}`}>
                            {title}
                        </h2>

                        {/* Content */}
                        <div className={`font-serif text-slate-600 leading-relaxed ${isFeatured ? 'text-lg md:text-xl' : 'text-base'}`}>
                            {renderContent(content, post.format)}
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
