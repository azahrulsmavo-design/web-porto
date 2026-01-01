import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/locales';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <section id="contact" className="w-full px-5 md:px-6 lg:px-16 py-8 lg:py-20 bg-transparent text-slate-900">
            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden grid lg:grid-cols-2">
                <div className="p-6 md:p-8 lg:p-16">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4 md:mb-6 text-slate-900">{t.title}</h2>
                    <p className="text-slate-600 mb-6 md:mb-10 leading-relaxed text-base md:text-lg">
                        {t.desc}
                    </p>

                    <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-semibold tracking-wide">
                        ● {t.available}
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-6 md:p-8 lg:p-16 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">{t.infoTitle}</h3>

                    <div className="space-y-4 md:space-y-6">
                        <a href="mailto:azahrulsmavo@gmail.com" className="flex items-center gap-3 md:gap-4 hover:text-blue-300 transition-colors group">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <Mail size={18} className="md:w-5 md:h-5" />
                            </div>
                            <span className="text-base md:text-lg">azahrulsmavo@gmail.com</span>
                        </a>

                        <a href="https://linkedin.com/in/muhammad-azahrul-ramadhan-9728bb252" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 hover:text-blue-300 transition-colors group">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <Linkedin size={18} className="md:w-5 md:h-5" />
                            </div>
                            <span className="text-base md:text-lg">LinkedIn Profile</span>
                            <ExternalLink size={14} className="opacity-50 md:w-4 md:h-4" />
                        </a>

                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 hover:text-blue-300 transition-colors group">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <Github size={18} className="md:w-5 md:h-5" />
                            </div>
                            <span className="text-base md:text-lg">GitHub Profile</span>
                            <ExternalLink size={14} className="opacity-50 md:w-4 md:h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
