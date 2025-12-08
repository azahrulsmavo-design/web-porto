import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-container bg-[var(--color-domino-bg)]">
            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden grid lg:grid-cols-2">
                <div className="p-10 lg:p-16">
                    <h2 className="text-4xl font-bold mb-6 text-[var(--color-domino-text-dark)]">Get In Touch</h2>
                    <p className="text-[var(--color-domino-text-light)] mb-10 leading-relaxed text-lg">
                        If you’d like to talk about data, internships, or collaboration, feel
                        free to reach out. I’m especially interested in roles that mix data,
                        education, and e-commerce.
                    </p>

                    <div className="mt-8">
                        <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">STATUS</div>
                        <div className="flex items-center gap-3 text-green-700 font-bold bg-green-50 w-fit px-4 py-2 rounded-full border border-green-200">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                            <span>Open to Work</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[var(--color-domino-dark-blue)] text-white p-10 lg:p-16 flex flex-col justify-center">
                    <div className="mb-12">
                        <div className="opacity-70 text-sm uppercase tracking-widest mb-3">Contact</div>
                        <a href="mailto:azahrulsmavo@gmail.com" className="flex items-center gap-4 text-2xl font-bold hover:text-blue-200 transition-colors">
                            <Mail size={28} />
                            azahrulsmavo@gmail.com
                        </a>
                    </div>

                    <div>
                        <div className="opacity-70 text-sm uppercase tracking-widest mb-3">Social</div>
                        <div className="flex flex-col gap-6">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-blue-200 transition-colors">
                                <Github size={24} />
                                <span>GitHub</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-blue-200 transition-colors">
                                <Linkedin size={24} />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
