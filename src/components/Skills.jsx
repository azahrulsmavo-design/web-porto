import React from 'react';
import { motion } from 'framer-motion';
import { Database, Terminal, Briefcase } from 'lucide-react';
import ScrambleText from './ScrambleText';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/locales';

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language].skills;

    const getIcon = (key) => {
        switch (key) {
            case 'Database': return Database;
            case 'Terminal': return Terminal;
            case 'Briefcase': return Briefcase;
            default: return Database;
        }
    };

    return (
        <section id="skills" className="w-full px-5 md:px-6 lg:px-16 py-8 lg:py-24 bg-white text-slate-900 border-t border-slate-100">
            {/* HEADER: Full Width - Top */}
            <div className="mb-12 md:mb-20 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl md:text-7xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight text-left"
                >
                    {t.title}
                </motion.h2>
                <div className="text-xl md:text-3xl text-slate-400 font-light text-left">
                    <ScrambleText text={t.subtitle} delay={0.2} speed="fast" />
                </div>
            </div>

            <div className="space-y-8 md:space-y-16">
                {t.items.map((group, index) => {
                    const Icon = getIcon(group.iconKey);
                    return (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="grid md:grid-cols-2 gap-6 md:gap-8 items-start border-t border-slate-200 pt-6 md:pt-10"
                        >
                            {/* Left: Category Title */}
                            <div>
                                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4 text-blue-600">
                                    <Icon size={24} className="md:w-8 md:h-8" />
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-wide">
                                        {group.title}
                                    </h3>
                                </div>
                                <div className="text-slate-500 pr-4 md:pr-8 min-h-[auto] md:min-h-[3rem] text-sm md:text-base mb-4 md:mb-0">
                                    {group.desc}
                                </div>
                            </div>

                            {/* Right: Skills List */}
                            <div>
                                <ul className="flex flex-wrap gap-2 md:gap-3">
                                    {group.items.map((it) => (
                                        <li key={it} className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-100 rounded-full text-xs md:text-sm font-medium text-slate-700 hover:bg-blue-100 transition-colors cursor-default">
                                            {it}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
