import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillGroups = [
        {
            title: "Data & Analytics",
            skills: ["Python (pandas, numpy)", "SQL", "Data Cleaning & EDA", "Matplotlib & Seaborn", "Basic Machine Learning"]
        },
        {
            title: "Tools & Technologies",
            skills: ["Jupyter Notebook", "VS Code", "Excel (Advanced)", "PowerQuery", "Git & GitHub", "Power BI"]
        },
        {
            title: "Domain & Business",
            skills: ["E-commerce Operations", "Inventory Planning", "Pricing Strategy", "Education Materials", "Business Analysis"]
        }
    ];

    return (
        <section id="skills" className="bg-slate-800/30 py-20">
            <div className="section-container py-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skillGroups.map((group, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-blue-400 mb-6">{group.title}</h3>
                                <ul className="space-y-3">
                                    {group.skills.map((skill, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-slate-300">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
