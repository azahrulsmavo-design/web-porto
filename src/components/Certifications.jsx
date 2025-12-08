import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    return (
        <section id="certifications" className="section-container bg-white">
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">Structured learning I've completed.</p>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="card-domino p-8 border-l-4 border-[var(--color-domino-blue)]"
                >
                    <h3 className="font-bold text-lg mb-2 text-[var(--color-domino-text-dark)]">
                        Google Analytics Certification
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-domino-blue)] mb-4">
                        SkillsUp · Issued 2024
                    </p>
                    <p className="text-[var(--color-domino-text-light)] leading-relaxed">
                        Completed a data analytics certification focused on fundamentals of
                        web analytics, tracking, interpreting traffic, behavior, conversion
                        metrics, building dashboards, and funnel analysis.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="card-domino p-8 border-l-4 border-[var(--color-domino-blue)]"
                >
                    <h3 className="font-bold text-lg mb-2 text-[var(--color-domino-text-dark)]">
                        Power BI for Beginners
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-domino-blue)] mb-4">
                        SimpleLearn Technologies · Issued Nov 2025
                    </p>
                    <p className="text-[var(--color-domino-text-light)] leading-relaxed">
                        Foundational certification covering data import/transformation with
                        Power Query, data modeling, interactive dashboard creation, and
                        introductory DAX calculations.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
