import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: "Google Data Analytics Professional Certificate",
            issuer: "Coursera",
            date: "2024",
            description: "Complete data analytics training covering SQL, R, Tableau, and data cleaning/visualization.",
            link: "https://coursera.org",
            color: "border-yellow-500"
        },
        {
            title: "SQL for Data Science",
            issuer: "University of California, Davis",
            date: "2023",
            description: "In-depth course on SQL fundamentals, distributed computing, and querying large datasets.",
            link: "https://coursera.org",
            color: "border-blue-500"
        },
        {
            title: "Machine Learning Specialization",
            issuer: "DeepLearning.AI",
            date: "2024",
            description: "Foundational machine learning concepts including supervised and unsupervised learning.",
            link: "https://coursera.org",
            color: "border-red-500"
        }
    ];

    return (
        <section id="certifications" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Certifications</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-opacity-100 transition-all duration-300 group hover:${cert.color}`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-lg bg-slate-900 ${cert.color.replace('border', 'text')}`}>
                                    <Award size={24} />
                                </div>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-white transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                            <p className="text-blue-400 text-sm font-medium mb-4">{cert.issuer}</p>

                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                {cert.description}
                            </p>

                            <div className="flex items-center gap-2 text-slate-500 text-sm mt-auto pt-4 border-t border-slate-700">
                                <Calendar size={14} />
                                <span>Issued {cert.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Certifications;
