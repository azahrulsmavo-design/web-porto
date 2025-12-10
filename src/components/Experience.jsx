import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import ScrambleText from './ScrambleText';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/locales';

const Experience = () => {
    const { language } = useLanguage();
    const t = translations[language].experience;

    return (
        <section id="experience" className="w-full px-6 lg:px-16 py-12 lg:py-24 bg-transparent text-slate-900 border-t border-slate-100">
            {/* HEADER: Full Width - Top */}
            <div className="mb-20 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight text-left"
                >
                    {t.title}
                </motion.h2>
                <div className="text-2xl md:text-3xl text-slate-400 font-light text-left">
                    <ScrambleText text={t.subtitle} delay={0.2} speed="fast" />
                </div>
            </div>

            <div className="space-y-16">
                {t.list.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="grid md:grid-cols-2 gap-8 items-start border-t border-slate-200 pt-8 lg:pt-10"
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
