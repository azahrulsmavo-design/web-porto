import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { Copy, Check, Calendar, BookOpen, Search, ArrowUpDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DailyPost = () => {
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

            // Primitive Markdown handling
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
                {isFeatured && !searchQuery && !selectedDate && (
                    <div className="flex items-center gap-2 mb-6 text-purple-600 font-medium text-sm uppercase tracking-wider">
                        <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
                        {language === 'id' ? 'Artikel Hari Ini' : 'Today\'s Read'}
                    </div>
                )}

                <article className={`
                    relative bg-white transition-all duration-300 flex flex-col gap-4 md:gap-6
                    ${isFeatured
                        ? '' // Minimalist for featured
                        : 'border-b border-slate-100 pb-8 md:pb-12'
                    }
                `}>
                    <Link to={`/daily-post/${post.id}`} className="block group cursor-pointer">
                        {/* Header Image */}
                        {post.image_url && (
                            <div className={`overflow-hidden rounded-xl bg-slate-100 ${isFeatured ? 'h-48 md:h-96 mb-4 md:mb-6' : 'h-40 md:h-64 mb-3 md:mb-4'}`}>
                                <img src={post.image_url} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        )}

                        <div className="flex flex-col gap-2 md:gap-4">
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

                            {/* Content Preview */}
                            <div className={`font-serif text-slate-600 leading-relaxed line-clamp-3 ${isFeatured ? 'text-lg md:text-xl' : 'text-base'}`}>
                                {language === 'id' ? 'Klik untuk membaca selengkapnya...' : 'Click to read more...'}
                            </div>
                        </div>
                    </Link>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCopy(title, post.id);
                            }}
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-600 transition-colors text-sm font-medium z-10"
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
                    <div className="inline-flex items-center justify-center p-2.5 md:p-3 bg-slate-50 rounded-full mb-4 md:mb-6">
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />
                    </div>
                    <h1 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight font-serif">
                        {language === 'id' ? 'Postingan Harian' : 'Daily Post'}
                    </h1>
                    <p className="text-base md:text-xl text-slate-500 max-w-xl mx-auto font-serif italic">
                        {language === 'id'
                            ? 'Kumpulan pemikiran pendek, refleksi, dan ide-ide yang layak dibagikan.'
                            : 'A collection of short thoughts, reflections, and ideas worth sharing.'}
                    </p>
                </div>

                {/* Controls */}
                <div className="max-w-3xl mx-auto px-6 mb-16">
                    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder={language === 'id' ? 'Cari judul...' : 'Search titles...'}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-slate-900 placeholder:text-slate-400"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        <div className="flex gap-2">
                            {/* Date Picker */}
                            <div className="relative">
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-slate-900 cursor-pointer"
                                />
                            </div>

                            {/* Sort Toggle */}
                            <button
                                onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 font-medium"
                            >
                                <ArrowUpDown className="w-4 h-4" />
                                <span className="hidden sm:inline">
                                    {sortOrder === 'desc'
                                        ? (language === 'id' ? 'Terbaru' : 'Newest')
                                        : (language === 'id' ? 'Terlama' : 'Oldest')
                                    }
                                </span>
                            </button>

                            {selectedDate && (
                                <button
                                    onClick={() => setSelectedDate('')}
                                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                                    title="Reset Date"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>
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
                                key={sortOrder + searchQuery + selectedDate} // Re-animate on filter change
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {filteredPosts.length > 0 ? (
                                    <>
                                        {/* Display all matching posts */}
                                        <div className="space-y-2">
                                            {filteredPosts.map((post, index) => (
                                                <ArticleCard
                                                    key={post.id}
                                                    post={post}
                                                    isFeatured={index === 0 && !searchQuery && !selectedDate} // Only feature first item if no filter active
                                                />
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                                        <p className="text-slate-500 font-medium">
                                            {language === 'id' ? 'Tidak ada postingan yang ditemukan.' : 'No posts found.'}
                                        </p>
                                        {(searchQuery || selectedDate) && (
                                            <button
                                                onClick={() => { setSearchQuery(''); setSelectedDate(''); }}
                                                className="mt-4 text-purple-600 hover:text-purple-700 font-medium text-sm"
                                            >
                                                {language === 'id' ? 'Bersihkan filter' : 'Clear filters'}
                                            </button>
                                        )}
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

export default DailyPost;
