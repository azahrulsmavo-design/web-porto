import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award } from 'lucide-react';
import ScrambleText from './ScrambleText';

const certifications = [
    {
        title: 'Google Analytics Certification',
        issuer: 'Google',
        year: 'Nov 2025 – Nov 2026',
        desc: 'Completed a data analytics certification focused on fundamentals of web analytics, tracking, interpreting traffic, behavior, conversion metrics, building dashboards, and funnel analysis.'
    },
    {
        title: 'Power BI for Beginners',
        issuer: 'Simplilearn',
        year: 'Issued 2025',
        desc: 'Foundational certification covering data import/transformation with Power Query, data modeling, interactive dashboard creation, and introductory DAX calculations.'
    },
    {
        title: 'A/B Testing Fundamentals',
        issuer: 'Udacity',
        year: 'Issued 2025',
        desc: 'Learned the principles of designing and analyzing A/B tests to make data-driven decisions.'
    }
];

const CertificationCard = ({ cert, index }) => {
    return (
        <div className="sticky top-0 min-h-[50vh] md:h-screen w-full bg-white border-t border-slate-200 flex items-center justify-center overflow-hidden py-12 md:py-0">
            <div className="max-w-7xl w-full px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Left: Checkered Flag / Badge Visual? keeping it simple text as per previous */}
                <div>
                    <div className="flex items-center gap-3 text-blue-600 mb-4 md:mb-6 font-bold uppercase tracking-widest text-xs md:text-sm">
                        <Award size={20} className="md:w-6 md:h-6" />
                        Certification {index + 1}
                    </div>

                    <h3 className="text-3xl md:text-6xl font-bold text-slate-900 mb-2 md:mb-4 leading-tight">{cert.title}</h3>
                    <div className="text-lg md:text-2xl text-slate-500 font-light">{cert.issuer}</div>
                    <div className="mt-4 inline-block px-3 py-1.5 md:px-4 md:py-2 bg-slate-100 text-slate-900 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg">
                        {cert.year}
                    </div>
                </div>

                {/* Right: Description */}
                <div className="bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="text-slate-600 text-base md:text-xl leading-relaxed font-light">
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
            <div className="w-full px-5 md:px-6 lg:px-16 py-12 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-4xl md:text-7xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight"
                    >
                        Certifications.
                    </motion.h2>
                    <div className="text-xl md:text-3xl text-slate-400 font-light">
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
