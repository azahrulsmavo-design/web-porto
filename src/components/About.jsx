import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/locales';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <section id="about" className="w-full px-6 lg:px-16 py-12 lg:py-24 bg-white text-slate-900">

            {/* 1. HEADER: Full Width - Top */}
            <div className="mb-20 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tight text-left"
                >
                    {t.title}
                </motion.h2>
                <div className="text-2xl md:text-3xl text-slate-400 font-light text-left">
                    <ScrambleText text={t.subtitle} delay={0.2} speed="fast" />
                </div>

                {/* Profile Image & Bio Container */}
                <div className="grid md:grid-cols-2 gap-12 mt-16 items-start">
                    {/* Left: Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="text-lg md:text-xl leading-relaxed text-slate-700 font-medium space-y-6"
                    >
                        <p>
                            {t.bio1}
                            <span className="block mt-4">
                                {t.bio2}
                            </span>
                        </p>
                        <p className="text-slate-500">
                            {t.bio3}
                        </p>
                    </motion.div>

                    {/* Right: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/profile.jpg"
                            alt="Muhammad Azahrul Ramadhan"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>

            {/* 3. DETAILS: List Layout */}
            <div className="space-y-16">
                {t.details.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-10%" }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-8 items-start border-t border-slate-200 pt-8 lg:pt-16"
                    >
                        {/* Left: Header/Context */}
                        <div>
                            <div className="text-4xl mb-4 text-blue-600">{item.icon}</div>
                            <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-2">{item.label}</h3>
                            <div className="text-2xl font-bold text-slate-900">
                                <ScrambleText text={item.value} delay={0.1} speed="fast" />
                            </div>
                        </div>

                        {/* Right: Explanation */}
                        <div className="text-xl text-slate-600 leading-relaxed md:pt-14">
                            {item.desc}
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default About;
