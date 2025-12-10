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
        <section id="skills" className="w-full px-6 lg:px-16 py-12 lg:py-24 bg-white text-slate-900 border-t border-slate-100">
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
                {t.items.map((group, index) => {
                    const Icon = getIcon(group.iconKey);
                    return (
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
                                    <Icon size={32} />
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
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
