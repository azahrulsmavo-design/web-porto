import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Book, Heart, MessageCircle, Clock, Zap, Target, RefreshCw } from 'lucide-react';

const Personal = () => {
    const { language } = useLanguage();

    const sections = {
        now: {
            title: "Now",
            content: "I’m currently learning data engineering fundamentals and building small projects that help me understand real pipelines."
        },
        values: {
            title: "Values",
            items: [
                { text: "Clarity over complexity", icon: <Target className="w-5 h-5 text-blue-500" /> },
                { text: "Consistency beats intensity", icon: <Clock className="w-5 h-5 text-green-500" /> },
                { text: "Build → reflect → improve", icon: <RefreshCw className="w-5 h-5 text-orange-500" /> }
            ]
        },
        books: [
            { title: "Atomic Habits", author: "James Clear", learned: "Small habits compound over time." },
            { title: "Sapiens", author: "Yuval Noah Harari", learned: "Shared myths enable large-scale cooperation." },
            { title: "The Psychology of Money", author: "Morgan Housel", learned: "Wealth is what you don't see." }
        ],
        interests: ["Coding", "Reading", "Music", "Travel", "Data Engineering"],
        contact: {
            title: "Say Hi",
            text: "If you want to talk about data, books, or career growth, feel free to reach out."
        }
    };

    return (
        <div className="bg-white min-h-screen flex flex-col font-sans text-slate-900">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6 max-w-3xl mx-auto w-full">

                {/* Header Intro */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        {language === 'id' ? 'Tentang Saya' : 'Personal Details'}
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-serif">
                        {language === 'id' ? 'Di luar pekerjaan dan kode.' : 'Beyond the code and projects.'}
                    </p>
                </header>

                <div className="space-y-16">

                    {/* Now Section */}
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">
                            {sections.now.title}
                        </h2>
                        <p className="text-lg text-slate-800 leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-100 italic">
                            "{sections.now.content}"
                        </p>
                    </section>

                    {/* Philosophy / Values */}
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">
                            {sections.values.title}
                        </h2>
                        <div className="grid gap-4">
                            {sections.values.items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-2 bg-slate-50 rounded-full">{item.icon}</div>
                                    <span className="font-medium text-lg text-slate-800">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Favorite Books */}
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">
                            Favorite Books
                        </h2>
                        <div className="space-y-4">
                            {sections.books.map((book, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex items-baseline justify-between mb-1">
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {book.title}
                                        </h3>
                                        <span className="text-sm text-slate-500 font-medium">{book.author}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">
                                        <span className="font-semibold text-slate-400 mr-2">Learning:</span>
                                        {book.learned}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Interests & Hobbies */}
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">
                            Interests & Hobbies
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {sections.interests.map((interest, idx) => (
                                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-default">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Timeline (Mini) */}
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">
                            Mini Timeline
                        </h2>
                        <div className="border-l-2 border-slate-200 pl-4 space-y-6 ml-2">
                            <div className="relative">
                                <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                                <span className="text-xs font-bold text-blue-600 uppercase">2024 - Present</span>
                                <h3 className="font-bold text-slate-900">Focusing on Data Engineering</h3>
                                <p className="text-sm text-slate-500">Building pipelines and learning the modern data stack.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-slate-300 rounded-full border-2 border-white"></div>
                                <span className="text-xs font-bold text-slate-500 uppercase">2023</span>
                                <h3 className="font-bold text-slate-900">Web Development Deep Dive</h3>
                                <p className="text-sm text-slate-500">Mastering React, Node.js, and Fullstack development.</p>
                            </div>
                        </div>
                    </section>

                    {/* Say Hi */}
                    <section className="bg-[var(--color-domino-dark-blue)] text-white p-8 rounded-2xl text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4">
                            <MessageCircle className="w-6 h-6 text-blue-200" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">{sections.contact.title}</h2>
                        <p className="text-blue-100 mb-6 max-w-md mx-auto">
                            {sections.contact.text}
                        </p>
                        <a
                            href="mailto:muhammadazahrulramadhan@gmail.com"
                            className="inline-block px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            Contact Me
                        </a>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Personal;
