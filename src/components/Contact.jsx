import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-xl text-slate-300 mb-10">
                    If you’d like to talk about data, internships, or collaboration, feel free to reach out.
                </p>

                <motion.a
                    href="mailto:azahrulsmavo@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors mb-12"
                >
                    <Mail size={24} />
                    <span>azahrulsmavo@gmail.com</span>
                    <ArrowRight size={20} />
                </motion.a>

                <div className="flex justify-center gap-8">
                    <a
                        href="https://github.com/azahrulsmavo-design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2"
                    >
                        <div className="p-3 bg-slate-800 rounded-full border border-slate-700 hover:border-blue-500/50 transition-colors">
                            <Github size={24} />
                        </div>
                        <span className="text-sm">GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/muhammad-azahrul-ramadhan-9728bb252/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors flex flex-col items-center gap-2"
                    >
                        <div className="p-3 bg-slate-800 rounded-full border border-slate-700 hover:border-blue-500/50 transition-colors">
                            <Linkedin size={24} />
                        </div>
                        <span className="text-sm">LinkedIn</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
