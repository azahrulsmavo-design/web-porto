import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="w-full px-8 lg:px-16 py-24 bg-transparent text-slate-900">

            {/* 1. HEADER: Full Width - Top */}
            <div className="mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tight text-left"
                >
                    About Me.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl text-slate-400 font-light text-left"
                >
                    Background, focus, and what I'm working on.
                </motion.p>
            </div>

            {/* 2. BIO & IMAGE: Split Layout */}
            <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl leading-relaxed text-slate-700 font-medium space-y-6"
                >
                    <p>
                        I’m a Math Education graduate who fell in love with data and systems.
                        Over the last few years, I’ve been building and running Kevin Book Store,
                        an education-focused online business, while learning data analytics and machine learning.
                    </p>
                    <p>
                        I enjoy turning messy, real-world data into clear insights and simple tools that people actually use.
                        My background in education helps me communicate complex findings effectively.
                    </p>
                </motion.div>

                {/* Profile Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden bg-slate-200 shadow-xl"
                >
                    {/* Replace with actual image: <img src="/profile.jpg" className="w-full h-full object-cover" /> */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center text-slate-400">
                        <span className="text-lg font-bold">[Profile Image Placeholder]</span>
                    </div>
                </motion.div>
            </div>

            {/* 3. DETAILS: Split Layout with "Parallax Explanation" on Right */}
            <div className="space-y-16">
                {[
                    {
                        label: 'Background',
                        value: 'B.Ed. in Mathematics Education (UNY)',
                        icon: '🎓',
                        desc: 'Solid foundation in logic, statistics, and teaching complex concepts.'
                    },
                    {
                        label: 'Focus',
                        value: 'Data Analysis & Business Operations',
                        icon: '🎯',
                        desc: 'Bridging the gap between raw data and actionable business strategies.'
                    },
                    {
                        label: 'Currently',
                        value: 'Building Portfolio & Upskilling',
                        icon: '🚀',
                        desc: 'Preparing for full-time Data Analyst roles and expanding my ML toolkit.'
                    },
                ].map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-8 items-start border-t border-slate-200 pt-16"
                    >
                        {/* Left: Header/Context */}
                        <div>
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-2">{item.label}</h3>
                            <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                        </div>

                        {/* Right: Explanation (Parallax-style entering) */}
                        <div className="text-xl text-slate-600 leading-relaxed md:pt-14">
                            <motion.p
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {item.desc}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default About;
