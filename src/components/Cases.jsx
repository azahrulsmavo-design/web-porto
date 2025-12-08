import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const cases = [
    {
        title: 'Web Portfolio',
        client: 'PERSONAL',
        location: 'INDONESIA',
        tags: ['REACT', 'TAILWIND', 'PORTFOLIO'],
        desc: 'Personal portfolio website built with modern web technologies to showcase projects and skills.',
        tech: ['JavaScript', 'React', 'Tailwind'],
        timeline: 'Ongoing',
        imageGradient: 'from-blue-100 to-blue-50',
        category: 'Web App'
    },
    {
        title: 'Antropics Interview',
        client: 'PERSONAL',
        location: 'GLOBAL',
        tags: ['ALGORITHMS', 'PYTHON', 'PROBLEM SOLVING'],
        desc: 'Technical interview project focusing on problem-solving and algorithms using Python.',
        tech: ['Python'],
        timeline: '1 week',
        imageGradient: 'from-emerald-100 to-emerald-50',
        category: 'Data Analysis'
    },
    {
        title: 'Internship Intelligence',
        client: 'PERSONAL',
        location: 'INDONESIA',
        tags: ['DATA ANALYSIS', 'ETL', 'API'],
        desc: 'Data analysis of tech job vacancies to identify skill trends. Involves data fetching (API), ETL, and analysis using Python.',
        tech: ['Python', 'Jupyter', 'Pandas'],
        timeline: '1 month',
        imageGradient: 'from-orange-100 to-orange-50',
        category: 'Data Analysis'
    },
    {
        title: 'Ivy Design System',
        client: 'OPEN SOURCE',
        location: 'GLOBAL',
        tags: ['DESIGN SYSTEM', 'CSS', 'ANIMATION'],
        desc: 'A responsive web implementation of the "Ivy" design system. Features offset-grid layouts, noise textures, and smooth spring physics animations.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        timeline: '2 weeks',
        imageGradient: 'from-purple-100 to-purple-50',
        category: 'Website'
    },
    {
        title: 'Kevin Book Store',
        client: 'KEVIN BOOKS',
        location: 'YOGYAKARTA',
        tags: ['WEB APP', 'DASHBOARD', 'TYPESCRIPT'],
        desc: 'Landing page and dashboard for a local bookstore to manage sales and inventory.',
        tech: ['TypeScript', 'React'],
        timeline: '1 month',
        imageGradient: 'from-pink-100 to-pink-50',
        category: 'Web App'
    },
    {
        title: 'AWING Body Repair',
        client: 'AWING',
        location: 'DEPOK',
        tags: ['LANDING PAGE', 'SEO', 'TYPESCRIPT'],
        desc: 'Official landing page for AWING Body Repair & Cat. Features WhatsApp conversion focus and local SEO optimization.',
        tech: ['TypeScript', 'Next.js', 'Tailwind'],
        timeline: '2 weeks',
        imageGradient: 'from-cyan-100 to-cyan-50',
        category: 'Website'
    },
    {
        title: 'Road Traffic Analysis Pangyo',
        client: 'RESEARCH',
        location: 'KOREA',
        tags: ['DATA ANALYSIS', 'VISSIM', 'PYTHON'],
        desc: 'Data analysis of IEEE Pangyo autonomous driving traffic dataset (VISSIM simulation).',
        tech: ['Python', 'Pandas', 'Jupyter'],
        timeline: '1 month',
        imageGradient: 'from-indigo-100 to-indigo-50',
        category: 'Data Analysis'
    }
];

const categories = ['All Projects', 'Web App', 'Data Analysis', 'Website'];

const Cases = () => {
    const [activeCategory, setActiveCategory] = useState('All Projects');

    const filteredCases = activeCategory === 'All Projects'
        ? cases
        : cases.filter(c => c.category === activeCategory);

    return (
        <section id="cases" className="w-full bg-white text-slate-900 py-24 px-8 lg:px-16">

            {/* Header & Filter */}
            <div className="mb-20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Explore our projects</h2>
                    <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">
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
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                    >
                        {/* Left: Image Card */}
                        <div className={`aspect-[4/3] rounded-[2rem] bg-gradient-to-br ${project.imageGradient} flex items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}>
                            {/* Placeholder content for image */}
                            <div className="text-slate-900/10 text-9xl font-bold select-none">
                                {project.category === 'Web App' ? '</>' : 'DATA'}
                            </div>

                            <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <div className="font-bold text-slate-900">View Case Study</div>
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
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
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

                            {/* Description (Static) */}
                            {/* <div className="text-slate-600 text-xl leading-relaxed mb-12 border-t border-slate-200 pt-8">
                                {project.desc}
                            </div> */}

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
    );
};

export default Cases;
