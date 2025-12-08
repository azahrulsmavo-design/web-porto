import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="w-full px-8 lg:px-16 py-20 bg-transparent text-slate-900">
            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden grid lg:grid-cols-2">
                <div className="p-10 lg:p-16">
                    <h2 className="text-4xl font-bold mb-6 text-slate-900">Get In Touch</h2>
                    <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                        If you’d like to talk about data, internships, or collaboration, feel
                        free to reach out. I’m especially interested in roles that mix data,
                        education, and e-commerce.
                    </p>

                    <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold tracking-wide">
                        ● AVAILABLE FOR OPPORTUNITIES
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-10 lg:p-16 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                    <div className="space-y-6">
                        <a href="mailto:azahrulsmavo@gmail.com" className="flex items-center gap-4 hover:text-blue-300 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <Mail size={20} />
                            </div>
                            <span className="text-lg">azahrulsmavo@gmail.com</span>
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-blue-300 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <Linkedin size={20} />
                            </div>
                            <span className="text-lg">LinkedIn Profile</span>
                            <ExternalLink size={16} className="opacity-50" />
                        </a>

                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-blue-300 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <Github size={20} />
                            </div>
                            <span className="text-lg">GitHub Profile</span>
                            <ExternalLink size={16} className="opacity-50" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
