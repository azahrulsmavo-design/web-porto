import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="bg-slate-800/30 py-20">
            <div className="section-container py-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Experience</h2>

                    <div className="max-w-3xl mx-auto">
                        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 py-4 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-900 flex items-center justify-center">
                                    <Briefcase size={12} className="text-white" />
                                </span>

                                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                                        <h3 className="text-xl font-bold text-white">Business Development & Operations</h3>
                                        <span className="text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full text-sm w-fit">Aug 2024 – Present</span>
                                    </div>
                                    <h4 className="text-lg text-slate-300 mb-4">Kevin Book Store</h4>

                                    <ul className="space-y-2 text-slate-400 list-disc list-inside">
                                        <li>Manage marketplace listings and pricing for 300+ SKUs across Shopee and TikTok Shop.</li>
                                        <li>Design and document systems including SOPs and Excel/PowerQuery workflows.</li>
                                        <li>Analyze sales and inventory data to support purchasing decisions and marketing campaigns.</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Placeholder for future experience */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative opacity-50"
                            >
                                <span className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 bg-slate-700 rounded-full border-2 border-slate-900" />
                                <p className="text-slate-500 italic">More to come...</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
