import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-blue-500 font-medium text-lg mb-4">Hello, I'm</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Muhammad Azahrul Ramadhan
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
                            Aspiring Data Analyst · Education & E-commerce Enthusiast
                        </p>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            I use data and systems thinking to solve real problems and online retail.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <a href="#projects" className="btn-primary w-full sm:w-auto justify-center">
                            View My Projects
                        </a>
                        <a href="/cv.pdf" className="btn-secondary w-full sm:w-auto justify-center">
                            <FileText size={20} />
                            Download CV
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="flex items-center gap-6 text-slate-400">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span>Open to Work</span>
                            </div>
                            <span className="hidden sm:inline">•</span>
                            <span>Bogor, Indonesia</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:azahrulsmavo@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
