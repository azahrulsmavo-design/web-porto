import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award } from 'lucide-react';
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

const CertificationCard = ({ cert, index }) => {
    return (
        <div className="sticky top-0 h-screen w-full bg-white border-t border-slate-200 flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl w-full px-8 grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Checkered Flag / Badge Visual? keeping it simple text as per previous */}
                <div>
                    <div className="flex items-center gap-3 text-blue-600 mb-6 font-bold uppercase tracking-widest text-sm">
                        <Award size={24} />
                        Certification {index + 1}
                    </div>

                    <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">{cert.title}</h3>
                    <div className="text-2xl text-slate-500 font-light">{cert.issuer}</div>
                    <div className="mt-4 inline-block px-4 py-2 bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-lg">
                        {cert.year}
                    </div>
                </div>

                {/* Right: Description */}
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="text-slate-600 text-xl leading-relaxed font-light">
                        {cert.desc}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Certifications = () => {
    return (
        <section id="certifications" className="relative w-full bg-white">
            {/* Header Section (Scrolls naturally) */}
            <div className="w-full px-8 lg:px-16 py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        Certifications.
                    </motion.h2>
                    <div className="text-2xl md:text-3xl text-slate-400 font-light">
                        <ScrambleText text="Structured learning I've completed." delay={0.2} speed="fast" />
                    </div>
                </div>
            </div>

            {/* Stacking Cards Container */}
            <div className="w-full">
                {certifications.map((cert, i) => (
                    <CertificationCard key={i} index={i} cert={cert} />
                ))}
            </div>

            {/* Spacer/Transition to Next Section (Contact) */}
            <div className="h-[20vh] bg-white" />
        </section>
    );
};

export default Certifications;
