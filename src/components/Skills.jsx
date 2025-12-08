import React from 'react';
import { motion } from 'framer-motion';
import { Database, Terminal, Briefcase } from 'lucide-react';
import ScrambleText from './ScrambleText';

const skills = [
    {
        title: 'Technical Skills',
        icon: Database,
        items: [
            'Python (pandas, numpy)',
            'SQL',
            'Data Cleaning & EDA',
            'Matplotlib & Seaborn',
            'Basic Machine Learning',
        ],
        desc: "Core stack for transforming raw data into actionable insights."
    },
    {
        title: 'Tools & Technologies',
        icon: Terminal,
        items: [
            'Jupyter Notebook',
            'VS Code',
            'Excel (Advanced)',
            'PowerQuery',
            'Git & GitHub',
            'Power BI',
        ],
        desc: "The daily drivers I use to build, analyze, and visualize."
    },
    {
        title: 'Domain & Business',
        icon: Briefcase,
        items: [
            'E-commerce Operations',
            'Inventory Planning',
            'Pricing Strategy',
            'Education Materials',
            'Business Analysis',
        ],
        desc: "Contextual knowledge connecting data to real-world business value."
    },
];

const Skills = () => {
    return (
        <section id="skills" className="w-full px-8 lg:px-16 py-24 bg-white text-slate-900 border-t border-slate-100">
            {/* HEADER: Full Width - Top */}
            <div className="mb-20 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight text-left"
                >
                    Skills.
                </motion.h2>
                <div className="text-2xl md:text-3xl text-slate-400 font-light text-left">
                    <ScrambleText text="Data, tools, and domain knowledge." delay={0.2} speed="fast" />
                </div>
            </div>

            <div className="space-y-16">
                {skills.map((group, index) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="grid md:grid-cols-2 gap-8 items-start border-t border-slate-200 pt-10"
                    >
                        {/* Left: Category Title */}
                        <div>
                            <div className="flex items-center gap-3 mb-4 text-blue-600">
                                <group.icon size={32} />
                                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
                                    {group.title}
                                </h3>
                            </div>
                            <div className="text-slate-500 pr-8 min-h-[3rem]">
                                {group.desc}
                            </div>
                        </div>

                        {/* Right: Skills List */}
                        <div>
                            <ul className="flex flex-wrap gap-3">
                                {group.items.map((it) => (
                                    <li key={it} className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 hover:bg-blue-100 transition-colors cursor-default">
                                        {it}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
