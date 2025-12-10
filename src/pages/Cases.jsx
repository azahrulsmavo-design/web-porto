import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import RevealTitle from '../components/RevealTitle';
import { cases, categories } from '../data/cases';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/locales';

const Cases = () => {
    const { language } = useLanguage();
    const t = translations[language].casesPage;
    const [activeCategory, setActiveCategory] = useState('All Projects');
    // const navigate = useNavigate(); // Not needed if using Link/Button href

    // Helper to get display name for category
    const getCategoryDisplayName = (cat) => {
        if (cat === 'All Projects') return t.categories.all;
        if (cat === 'Web App') return t.categories.webApp;
        if (cat === 'Data Analysis') return t.categories.dataAnalysis;
        if (cat === 'Website') return t.categories.website;
        return cat;
    };

    const filteredCases = activeCategory === 'All Projects'
        ? cases
        : cases.filter(c => c.category === activeCategory);

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
            <div className="w-full">
                {filteredCases.map((project, index) => {
                    const projectTrans = translations[language].projects[project.slug];
                    // Fallback if translation missing (safety)
                    if (!projectTrans) return null;

                    return (
                        <section
                            key={project.slug}
                            className="relative min-h-screen flex flex-col lg:flex-row border-t border-slate-100"
                        >
                            {/* LEFT COLUMN: STICKY IMAGE */}
                            {/* sticky top-0 ensures it stays in view while the right column scrolls */}
                            <div className="w-full lg:w-1/2 h-[40vh] lg:h-screen relative lg:sticky top-0 flex items-center justify-center p-6 lg:p-16 overflow-hidden bg-slate-50/50">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }} // Or remove 'once' if you want it to animate every time
                                    className={`relative w-full aspect-[19/9] max-w-xl rounded-none bg-gradient-to-br ${project.imageGradient} flex items-center justify-center shadow-2xl overflow-hidden`}
                                >
                                    {project.coverImage ? (
                                        <img
                                            src={project.coverImage}
                                            alt={projectTrans.title}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    ) : (
                                        <div className="text-slate-900/10 text-9xl font-bold select-none">
                                            {project.category === 'Web App' ? '</>' : 'DATA'}
                                        </div>
                                    )}

                                    {/* Case ID (Retro Style similar to example) */}
                                    <div className="absolute top-8 right-8 text-4xl font-mono font-bold text-slate-900/5">
                                        0{index + 1}
                                    </div>
                                </motion.div>
                            </div>

                            {/* RIGHT COLUMN: SCROLLABLE CONTENT */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-24 min-h-[auto] lg:min-h-screen bg-white">
                                <div className="max-w-xl">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-3 text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag}>#{tag}</span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <RevealTitle text={projectTrans.title} className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8" />

                                    {/* Description */}
                                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                        {projectTrans.desc}
                                    </p>

                                    {/* Meta Grid */}
                                    <div className="grid grid-cols-2 gap-8 border-t border-slate-200 py-8 mb-8">
                                        <div>
                                            <div className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">{t.client}</div>
                                            <div className="font-bold text-slate-900">{projectTrans.client || project.client}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">{t.location}</div>
                                            <div className="font-bold text-slate-900">{projectTrans.location || project.location}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">{t.techStack}</div>
                                            <div className="font-bold text-slate-900">{project.tech.join(', ')}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">{t.timeline}</div>
                                            <div className="font-bold text-slate-900">{project.timeline}</div>
                                        </div>
                                    </div>

                                    {/* EXPLORE BUTTON & VISIT BUTTON */}
                                    <div className="flex gap-4">
                                        <Button href={`/cases/${project.slug}`}>
                                            {t.explore}
                                        </Button>
                                        {project.demoUrl && (
                                            <Button href={project.demoUrl} variant="outline" target="_blank">
                                                {t.visitSite}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>


            <Footer />
        </div>
    );
};

export default Cases;
