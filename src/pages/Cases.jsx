import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    const navigate = useNavigate();

    const filteredCases = activeCategory === 'All Projects'
        ? cases
        : cases.filter(c => c.category === activeCategory);

    return (
        <div className="bg-white min-h-screen text-slate-900">
            <Navbar />

            <section className="w-full py-32 px-8 lg:px-16 pt-40">
                {/* Header & Filter */}
                <div className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Explore our projects</h2>
                        <a href="mailto:contact@azahrul.com" className="hidden md:inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">
                            GET IN TOUCH <ArrowUpRight size={20} />
                        </a>
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

                {/* Cases List */}
                <div className="space-y-32">
                    {filteredCases.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center group cursor-pointer"
                            onClick={() => navigate(`/cases/${project.slug}`)}
                        >
                            {/* Left: Image Card */}
                            <div className={`aspect-[4/3] rounded-[2rem] bg-gradient-to-br ${project.imageGradient} flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                                {/* Placeholder content for image */}
                                <div className="text-slate-900/10 text-9xl font-bold select-none">
                                    {project.category === 'Web App' ? '</>' : 'DATA'}
                                </div>

                                <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <div className="font-bold text-slate-900 flex justify-between items-center">
                                        View Case Study
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="flex flex-col justify-center">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag}>#{tag}</span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Client Buttons */}
                                <div className="flex gap-4 mb-12">
                                    <span className="px-6 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg">
                                        {project.client}
                                    </span>
                                    <span className="px-6 py-3 bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                        {project.location}
                                    </span>
                                </div>

                                {/* Tech & Timeline Grid */}
                                <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
                                    <div>
                                        <div className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-3">Tech Stack</div>
                                        <div className="text-slate-900 font-medium text-lg">
                                            {project.tech.join(', ')}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-3">Timeline</div>
                                        <div className="text-slate-900 font-medium text-lg">
                                            {project.timeline}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Cases;
