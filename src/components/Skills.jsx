import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="skills" className="w-full px-8 lg:px-16 py-20 bg-[var(--color-domino-bg)]">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Data, tools, and domain knowledge I use.</p>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: 'Data & Analytics',
                        icon: 'fas fa-chart-line', // Placeholder for actual icon library if wanted
                        items: [
                            'Python (pandas, numpy)',
                            'SQL',
                            'Data Cleaning & EDA',
                            'Matplotlib & Seaborn',
                            'Basic Machine Learning',
                        ],
                    },
                    {
                        title: 'Tools & Technologies',
                        icon: 'fas fa-laptop-code',
                        items: [
                            'Jupyter Notebook',
                            'VS Code',
                            'Excel (Advanced)',
                            'PowerQuery',
                            'Git & GitHub',
                            'Power BI',
                        ],
                    },
                    {
                        title: 'Domain & Business',
                        icon: 'fas fa-briefcase',
                        items: [
                            'E-commerce Operations',
                            'Inventory Planning',
                            'Pricing Strategy',
                            'Education Materials',
                            'Business Analysis',
                        ],
                    },
                ].map((group, index) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="card-domino p-8 text-center hover:-translate-y-2"
                    >
                        <h3 className="text-xl font-bold mb-6 text-[var(--color-domino-text-dark)] uppercase tracking-wide">
                            {group.title}
                        </h3>
                        <ul className="space-y-3 text-[var(--color-domino-text-light)]">
                            {group.items.map((it) => (
                                <li key={it} className="pb-2 border-b border-gray-100 last:border-0">{it}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
