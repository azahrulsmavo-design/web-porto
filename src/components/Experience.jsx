import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="section-container bg-[var(--color-domino-bg)]">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">What I've been doing in the real world.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        role: 'Business Development & Operations',
                        company: 'Kevin Book Store',
                        period: 'Aug 2024 – Present',
                        bullets: [
                            'Manage marketplace listings and pricing for 300+ SKUs across Shopee and TikTok Shop.',
                            'Design and document systems including SOPs and Excel/PowerQuery workflows.',
                            'Analyze sales and inventory data to support purchasing decisions and marketing campaigns.',
                        ],
                    },
                    {
                        role: 'Volunteer Tutor — Marginalized School Program',
                        company: 'Mathematics Tutor',
                        period: '2022 – 2023',
                        bullets: [
                            'Provided mathematics tutoring for students from underserved school communities.',
                            'Developed simplified learning materials tailored to student needs.',
                            'Supported confidence-building and learning motivation through a personalized approach.',
                            'Collaborated with volunteer teams to review student progress.',
                        ],
                    },
                ].map((exp, index) => (
                    <motion.div
                        key={exp.role}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[var(--color-domino-blue)] hover:shadow-md transition-shadow h-full"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-[var(--color-domino-text-dark)]">{exp.role}</h3>
                                <div className="text-[var(--color-domino-blue)] font-medium mt-1">{exp.company}</div>
                            </div>
                            <div className="text-sm font-semibold text-gray-500 mt-2 md:mt-0 uppercase tracking-wide">
                                {exp.period}
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {exp.bullets.map((b) => (
                                <li key={b} className="flex gap-3 text-[var(--color-domino-text-light)]">
                                    <span className="text-[var(--color-domino-blue)] mt-1.5">•</span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
