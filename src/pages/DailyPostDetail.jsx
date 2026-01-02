import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Calendar, User, Clock, Share2, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DailyPostDetail = () => {
    const { slug } = useParams();
    const { language } = useLanguage();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        fetchPost();
    }, [slug]);

    const fetchPost = async () => {
        try {
            const { data, error } = await supabase
                .from('daily_posts')
                .select('*')
                .eq('slug', slug)
                .single();

            if (error) throw error;
            setPost(data);
        } catch (err) {
            console.error('Error fetching post:', err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    // Calculate reading time
    const calculateReadingTime = (text) => {
        const wordsPerMinute = 200;
        const words = text ? text.split(/\s+/).length : 0;
        return Math.ceil(words / wordsPerMinute);
    };

    if (loading) {
        return (
            <div className="bg-white min-h-screen">
                <Navbar />
                <div className="flex justify-center items-center h-screen pt-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-slate-900"></div>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="bg-white min-h-screen">
                <Navbar />
                <div className="flex flex-col justify-center items-center h-screen pt-20 px-6 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h2>
                    <p className="text-slate-500 mb-8">The article you are looking for does not exist or has been removed.</p>
                    <Link to="/daily-post" className="text-slate-900 border-b border-slate-900 pb-0.5 hover:opacity-70 transition-opacity">
                        Back to Daily Posts
                    </Link>
                </div>
            </div>
        );
    }

    const title = language === 'id' ? (post.title_id || post.title_en) : post.title_en;
    const content = language === 'id' ? (post.content_id || post.content_en) : post.content_en;
    const date = new Date(post.published_at).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const readingTime = calculateReadingTime(content);

    // Medium-style Content Renderer
    const renderContent = (text, format) => {
        if (!text) return null;

        // Simple Paragraph Splitter for now (Basic Markdown-ish)
        return (
            <div className="prose prose-lg prose-slate max-w-none font-serif leading-loose">
                {text.split('\n').map((paragraph, index) => {
                    const cleanPara = paragraph.trim();
                    if (!cleanPara) return <br key={index} />;

                    // Simple Headers (replaces # with h2 style)
                    if (cleanPara.startsWith('# ')) {
                        return <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-slate-900 font-sans tracking-tight">{cleanPara.replace('# ', '')}</h2>
                    }
                    if (cleanPara.startsWith('## ')) {
                        return <h3 key={index} className="text-2xl font-bold mt-10 mb-4 text-slate-900 font-sans tracking-tight">{cleanPara.replace('## ', '')}</h3>
                    }

                    // Blockquotes
                    if (cleanPara.startsWith('> ')) {
                        return <blockquote key={index} className="border-l-4 border-slate-900 pl-6 italic text-slate-600 my-8 text-xl font-serif">{cleanPara.replace('> ', '')}</blockquote>
                    }

                    // Lists
                    if (cleanPara.startsWith('- ')) {
                        return <li key={index} className="ml-4 pl-2 list-disc marker:text-slate-400 mb-2">{cleanPara.replace('- ', '')}</li>
                    }

                    return <p key={index} className="mb-6 text-slate-800 text-[1.15rem]">{cleanPara}</p>;
                })}
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />

            <article className="pt-24 pb-12 md:pt-32 md:pb-24">
                {/* Hero / Header */}
                <div className="max-w-3xl mx-auto px-5 md:px-6 mb-8 md:mb-12">
                    {/* Back Link */}
                    <div className="mb-6 md:mb-8">
                        <Link to="/daily-post" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium uppercase tracking-wider">{language === 'id' ? 'KEMBALI KE BERANDA' : 'BACK TO FEED'}</span>
                        </Link>
                    </div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight tracking-tight"
                    >
                        {title}
                    </motion.h1>

                    {/* Meta Data */}
                    <div className="flex items-center justify-between border-y border-slate-100 py-6">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                                <User className="w-5 h-5 text-slate-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900">Azahrul</span>
                                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                                    <span>{date}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {readingTime} {language === 'id' ? 'menit baca' : 'min read'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={handleShare}
                                className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                                title="Share"
                            >
                                {copied ? <Check className="w-5 h-5 text-green-600" /> : <Share2 className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                {post.image_url && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="max-w-5xl mx-auto px-6 mb-16"
                    >
                        <div className="aspect-video w-full bg-slate-50 rounded-lg overflow-hidden">
                            <img src={post.image_url} alt={title} className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                )}

                {/* Content Body */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="max-w-3xl mx-auto px-6"
                >
                    {renderContent(content, post.format)}

                    {/* Footnotes / Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-16 flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm rounded-full capitalize hover:bg-slate-100 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </motion.div>
            </article>

            <Footer />
        </div>
    );
};

export default DailyPostDetail;
