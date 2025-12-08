import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import ScrambleText from './ScrambleText';

const certifications = [
    {
        title: 'Google Analytics Certification',
        issuer: 'SkillsUp',
        year: 'Issued 2024',
        desc: 'Completed a data analytics certification focused on fundamentals of web analytics, tracking, interpreting traffic, behavior, conversion metrics, building dashboards, and funnel analysis.'
    },
    {
        title: 'Power BI for Beginners',
        issuer: 'SimpleLearn Technologies',
        year: 'Issued Nov 2025',
        desc: 'Foundational certification covering data import/transformation with Power Query, data modeling, interactive dashboard creation, and introductory DAX calculations.'
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="w-full px-8 lg:px-16 py-24 bg-transparent text-slate-900 border-t border-slate-100">
            {/* HEADER: Full Width - Top */}
            <div className="mb-20 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight text-left"
                >
                    Certifications.
                </motion.h2>
                <div className="text-2xl md:text-3xl text-slate-400 font-light text-left">
                    <ScrambleText text="Structured learning I've completed." delay={0.2} speed="fast" />
                </div>
            </div>

            <div className="space-y-16">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="grid md:grid-cols-2 gap-8 items-start border-t border-slate-200 pt-10"
                    >
                        {/* Left: Certificate Title & Issuer */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{cert.title}</h3>
                            <div className="text-xl text-blue-600 font-medium mb-4">{cert.issuer}</div>
                            <div className="flex items-center gap-2 text-slate-400 text-sm tracking-widest uppercase font-bold">
                                <Award size={16} />
                                {cert.year}
                            </div>
                        </div>

                        {/* Right: Description */}
                        <div>
                            <div className="text-slate-600 text-lg leading-relaxed">
                                {cert.desc}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
