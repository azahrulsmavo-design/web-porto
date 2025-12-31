import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import RevealTitle from '../components/RevealTitle';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/locales';

// Categories can be dynamic too, but static is fine for now
const categories = ['All Projects', 'Web App', 'Data Analysis', 'Website'];

const Cases = () => {
    const { language } = useLanguage();
    const t = translations[language].casesPage;

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All Projects');

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('status', 'published')
                .order('sort_order', { ascending: true })
                .order('created_at', { ascending: false });

            if (error) throw error;
            setProjects(data || []);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    // Helper to get display name for category
    const getCategoryDisplayName = (cat) => {
        if (cat === 'All Projects') return t.categories.all;
        if (cat === 'Web App') return t.categories.webApp;
        if (cat === 'Data Analysis') return t.categories.dataAnalysis;
        if (cat === 'Website') return t.categories.website;
        return cat;
    };

    const filteredCases = activeCategory === 'All Projects'
        ? projects
        : projects.filter(c => c.category === activeCategory);

    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans">
            <Navbar />

            {/* Page Header */}
            <section className="w-full pt-24 pb-4 px-8 lg:px-16">
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                        <RevealTitle text={t.title} className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight" />
                        <div>
                            <Button href="mailto:contact@azahrul.com" variant="outline">
                                {t.getInTouch}
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 border-b border-slate-200 pb-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-sm font-bold uppercase tracking-widest pb-4 transition-colors relative ${activeCategory === cat ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                {getCategoryDisplayName(cat)}
                                {activeCategory === cat && (
                                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sticky Scroll Showcase List */}
            <div className="w-full min-h-[50vh]">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-blue-600"></div>
                    </div>
                ) : filteredCases.length > 0 ? (
                    filteredCases.map((project, index) => {
                        // Resolve localized content
                        const title = language === 'en' ? project.title_en : project.title_id;
                        const desc = language === 'en' ? project.desc_en : project.desc_id;

                        // Fallback
                        const displayTitle = title || 'Untitled Project';
                        const displayDesc = desc || '';

                        return (
                            <section
                                key={project.slug}
                                className="relative flex flex-col lg:flex-row border-t border-slate-100"
                            >
                                {/* LEFT COLUMN: IMAGE */}
                                <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[400px] relative flex items-center justify-center p-4 lg:p-8 overflow-hidden bg-slate-50/50">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className={`relative w-full aspect-[16/10] max-w-md rounded-none bg-gradient-to-br ${project.image_gradient || 'from-gray-100 to-gray-50'} flex items-center justify-center shadow-lg overflow-hidden group`}
                                    >
                                        {project.cover_image ? (
                                            <img
                                                src={project.cover_image}
                                                alt={displayTitle}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="text-slate-900/10 text-6xl font-bold select-none">
                                                {project.category === 'Web App' ? '</>' : 'DATA'}
                                            </div>
                                        )}

                                        {/* Case ID */}
                                        <div className="absolute top-4 right-4 text-2xl font-mono font-bold text-slate-900/5">
                                            0{index + 1}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* RIGHT COLUMN: CONTENT */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-12 bg-white">
                                    <div className="max-w-lg">
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">
                                            {(project.tags || []).map(tag => (
                                                <span key={tag}>#{tag}</span>
                                            ))}
                                        </div>

                                        {/* Title */}
                                        <RevealTitle text={displayTitle} className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4" />

                                        {/* Description */}
                                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                            {displayDesc}
                                        </p>

                                        {/* Meta Grid */}
                                        <div className="grid grid-cols-2 gap-4 border-t border-slate-200 py-4 mb-6">
                                            <div>
                                                <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">{t.client}</div>
                                                <div className="font-semibold text-slate-900 text-xs">{project.client || '-'}</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">{t.location}</div>
                                                <div className="font-semibold text-slate-900 text-xs">{project.location || '-'}</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">{t.techStack}</div>
                                                <div className="font-semibold text-slate-900 text-xs">{(project.tech_stack || []).join(', ')}</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">{t.timeline}</div>
                                                <div className="font-semibold text-slate-900 text-xs">{project.timeline || '-'}</div>
                                            </div>
                                        </div>

                                        {/* ACTION BUTTONS */}
                                        <div className="flex gap-4">
                                            <Button href={`/cases/${project.slug}`} size="sm">
                                                {t.explore}
                                            </Button>
                                            {project.demo_url && (
                                                <Button href={project.demo_url} variant="outline" size="sm" target="_blank">
                                                    {t.visitSite}
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    })
                ) : (
                    <div className="flex justify-center items-center h-64 text-slate-400">
                        No projects found.
                    </div>
                )}
            </div>


            <Footer />
        </div>
    );
};

export default Cases;
