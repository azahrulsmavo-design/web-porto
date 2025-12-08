import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const cases = [
    {
        slug: 'isora-governance',
        title: 'Isora – Optimizing governance, risk & compliance',
        client: 'SALTYCLOUD',
        location: 'TEXAS, USA',
        tags: ['UX AUDIT', 'PRODUCT REDESIGN', 'WEB DEVELOPMENT'],
        desc: 'Official landing page for a body repair shop in Depok. Features a modern premium design, WhatsApp conversion focus, and local SEO optimization.',
        tech: ['React', 'Python', 'AWS'],
        timeline: '12 months, ongoing',
        imageGradient: 'from-blue-100 to-blue-50',
        category: 'Web App'
    },
    {
        slug: 'road-traffic',
        title: 'Road Traffic Analysis',
        client: 'OPEN DATA',
        location: 'GLOBAL',
        tags: ['DATA ANALYSIS', 'VISUALIZATION', 'PYTHON'],
        desc: 'Exploratory data analysis on a road traffic dataset to understand the relationship between occupancy and speed across time.',
        tech: ['Python', 'Pandas', 'Seaborn'],
        timeline: '2 months',
        imageGradient: 'from-emerald-100 to-emerald-50',
        category: 'Data Analysis'
    },
    {
        slug: 'internship-intelligence',
        title: 'Internship Intelligence',
        client: 'PERSONAL',
        location: 'INDONESIA',
        tags: ['AUTOMATION', 'WEB APP', 'SCRAPING'],
        desc: 'Built a pipeline to fetch internship vacancies, clean and score them based on skills, and serve results via a simple web app.',
        tech: ['Python', 'Streamlit', 'Requests'],
        timeline: '1 month',
        imageGradient: 'from-orange-100 to-orange-50',
        category: 'Web App'
    },
    {
        slug: 'kevin-bookstore',
        title: 'Kevin Book Store Dashboard',
        client: 'KEVIN BOOKS',
        location: 'YOGYAKARTA',
        tags: ['BUSINESS INTELLIGENCE', 'DASHBOARD'],
        desc: 'A dashboard for a local bookstore to visualize sales trends, inventory turnover, and customer preferences.',
        tech: ['Power BI', 'SQL', 'Excel'],
        timeline: '3 months',
        imageGradient: 'from-purple-100 to-purple-50',
        category: 'Data Analysis'
    }
];

const categories = ['All Projects', 'Web App', 'Data Analysis', 'Website'];

const Cases = () => {
    const [activeCategory, setActiveCategory] = useState('All Projects');
    // const navigate = useNavigate(); // Not needed if using Link/Button href

    const filteredCases = activeCategory === 'All Projects'
        ? cases
        : cases.filter(c => c.category === activeCategory);

    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans">
            <Navbar />

            {/* Page Header */}
            <section className="w-full pt-40 pb-20 px-8 lg:px-16">
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Explore our projects</h2>
                        <div>
                            <Button href="mailto:contact@azahrul.com" variant="outline">
                                GET IN TOUCH
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
                                {cat}
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
                {filteredCases.map((project, index) => (
                    <section
                        key={project.slug}
                        className="relative min-h-screen flex flex-col lg:flex-row border-t border-slate-100"
                    >
                        {/* LEFT COLUMN: STICKY IMAGE */}
                        {/* sticky top-0 ensures it stays in view while the right column scrolls */}
                        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-slate-50/50">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }} // Or remove 'once' if you want it to animate every time
                                className={`relative w-full aspect-[4/3] max-w-xl rounded-[2.5rem] bg-gradient-to-br ${project.imageGradient} flex items-center justify-center shadow-2xl overflow-hidden`}
                            >
                                {/* Decorative / Placeholder */}
                                <div className="text-slate-900/10 text-9xl font-bold select-none">
                                    {project.category === 'Web App' ? '</>' : 'DATA'}
                                </div>

                                {/* Case ID (Retro Style similar to example) */}
                                <div className="absolute top-8 right-8 text-4xl font-mono font-bold text-slate-900/5">
                                    0{index + 1}
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN: SCROLLABLE CONTENT */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-24 min-h-screen bg-white">
                            <div className="max-w-xl">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag}>#{tag}</span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                    {project.desc}
                                </p>

                                {/* Meta Grid */}
                                <div className="grid grid-cols-2 gap-8 border-t border-slate-200 py-8 mb-8">
                                    <div>
                                        <div className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Client</div>
                                        <div className="font-bold text-slate-900">{project.client}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Location</div>
                                        <div className="font-bold text-slate-900">{project.location}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Tech Stack</div>
                                        <div className="font-bold text-slate-900">{project.tech.join(', ')}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Timeline</div>
                                        <div className="font-bold text-slate-900">{project.timeline}</div>
                                    </div>
                                </div>

                                {/* EXPLORE BUTTON */}
                                <div>
                                    <Button href={`/cases/${project.slug}`}>
                                        EXPLORE
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Cases;
