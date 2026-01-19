import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award } from 'lucide-react';
import ScrambleText from './ScrambleText';

const certifications = [
    {
        title: 'Introduction to Data Engineering',
        issuer: 'IBM',
        year: 'Issued Jan 2026',
        credentialId: 'UPP5XJWN8XGQ',
        image: '/images/certificates/introduction-data-engineering.png',
        desc: 'Foundational course covering the data engineering ecosystem, lifecycle, and key concepts ensuring data security and compliance.'
    },
    {
        title: 'Python Project for Data Engineering',
        issuer: 'IBM',
        year: 'Issued Jan 2026',
        credentialId: 'U32T07XBX07U',
        skills: 'Web Scrapping',
        image: '/images/certificates/python-project-data-engineering.png',
        desc: 'Practical project demonstrating proficiency in extracting data from the web (web scraping) and building data pipelines.'
    },
    {
        title: 'Python for Data Science, AI & Development',
        issuer: 'IBM',
        year: 'Issued Jan 2026',
        credentialId: 'HMGX37OI9Z0T',
        skills: 'Web Scrapping',
        image: '/images/certificates/python-data-science-ai-development.png',
        desc: 'Comprehensive Python training covering data structures, logic, and libraries like Pandas and Numpy for data science and AI applications.'
    },
    {
        title: 'Google Analytics Certification',
        issuer: 'Google',
        year: 'Nov 2025 – Nov 2026',
        credentialId: 'gmp-ma-mastery-lp01',
        skills: 'Data Analysis',
        desc: 'Professional certification demonstrating mastery of Google Analytics 4, including tracking, reporting, and analyzing user behavior.'
    },
    {
        title: 'Power BI for Beginners',
        issuer: 'Simplilearn',
        year: 'Issued 2025',
        credentialId: '9330500',
        skills: 'Microsoft Power BI',
        desc: 'Foundational training in data visualization and business intelligence using Microsoft Power BI.'
    }
];

const CertificationCard = ({ cert, index }) => {
    return (
        <div className="sticky top-0 min-h-[50vh] md:h-screen w-full bg-white border-t border-slate-200 flex items-center justify-center overflow-hidden py-12 md:py-0">
            <div className="max-w-7xl w-full px-5 md:px-8 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Left: Details */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-blue-600 mb-4 md:mb-6 font-bold uppercase tracking-widest text-xs md:text-sm">
                        <Award size={20} className="md:w-6 md:h-6" />
                        Certification {index + 1}
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2 md:mb-4 leading-tight">{cert.title}</h3>
                    <div className="text-lg md:text-2xl text-slate-500 font-light mb-4">{cert.issuer}</div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        <div className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-100 text-slate-900 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg">
                            {cert.year}
                        </div>
                        {cert.credentialId && (
                            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 border border-slate-200 text-slate-500 text-[10px] md:text-xs font-medium tracking-wide rounded-lg truncate max-w-[200px]" title={cert.credentialId}>
                                ID: {cert.credentialId}
                            </div>
                        )}
                        {cert.skills && (
                            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg">
                                {cert.skills}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Image & Description */}
                <div className="md:col-span-7 flex flex-col gap-6">
                    {cert.image && (
                        <div className="relative w-full aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 group">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                            />
                        </div>
                    )}
                    <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                            {cert.desc}
                        </div>
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
