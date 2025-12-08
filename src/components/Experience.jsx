import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import ScrambleText from './ScrambleText';

const experiences = [
    {
        id: 1,
        role: 'Data Analyst & Operator',
        company: 'Kevin Book Store (Self-Employed)',
        period: '2020 - Present',
        description:
            'Founded and managed an online bookstore focusing on educational materials. Leveraged data analysis to optimize inventory and pricing strategies.',
        tasks: [
            'Analyzed sales data to forecast demand and reduce overstock by 20%.',
            'Implemented automated pricing rules based on competitor analysis.',
            'Managed end-to-end e-commerce operations on Shopee and Tokopedia.',
        ],
    },
    {
        id: 2,
        role: 'Mathematics Education Student',
        company: 'Universitas Negeri Yogyakarta',
        period: '2016 - 2023',
        description:
            'Developed strong analytical and problem-solving skills through rigorous mathematics training. Learned how to break down complex concepts for different audiences.',
        tasks: [
            'Specialized in statistical analysis for educational research.',
            'Completed thesis on quantitative methods in student assessment.',
            'Assistant Lecturer for basic statistics courses.',
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="w-full px-8 lg:px-16 py-24 bg-transparent text-slate-900 border-t border-slate-100">
            {/* HEADER: Full Width - Top */}
            <div className="mb-20 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight text-left"
                >
                    Experience.
                </motion.h2>
                <div className="text-2xl md:text-3xl text-slate-400 font-light text-left">
                    <ScrambleText text="My professional journey so far." delay={0.2} speed="fast" />
                </div>
            </div>

            <div className="space-y-16">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="grid md:grid-cols-2 gap-8 items-start border-t border-slate-200 pt-10"
                    >
                        {/* Left: Role & Company */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                            <div className="text-xl text-blue-600 font-medium mb-4">{exp.company}</div>
                            <div className="flex items-center gap-2 text-slate-400 text-sm tracking-widest uppercase font-bold">
                                <Calendar size={14} />
                                {exp.period}
                            </div>
                        </div>

                        {/* Right: Description & Tasks */}
                        <div>
                            <div className="text-slate-600 text-lg leading-relaxed mb-6">
                                {exp.description}
                            </div>
                            <ul className="space-y-2">
                                {exp.tasks.map((task, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                        <span>{task}</span>
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

export default Experience;
