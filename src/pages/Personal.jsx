import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Book, Heart, Coffee, Star, MapPin, Music } from 'lucide-react';

const Personal = () => {
    const { language } = useLanguage();

    const favorites = {
        books: [
            { title: "Atomic Habits", author: "James Clear", desc: "Building good habits, breaking bad ones." },
            { title: "Sapiens", author: "Yuval Noah Harari", desc: "A brief history of humankind." },
            { title: "The Psychology of Money", author: "Morgan Housel", desc: "Timeless lessons on wealth, greed, and happiness." }
        ],
        hobbies: [
            { name: language === 'id' ? "Koding" : "Coding", icon: <Star className="w-5 h-5" /> },
            { name: language === 'id' ? "Membaca" : "Reading", icon: <Book className="w-5 h-5" /> },
            { name: language === 'id' ? "Musik" : "Music", icon: <Music className="w-5 h-5" /> },
            { name: language === 'id' ? "Travel" : "Travel", icon: <MapPin className="w-5 h-5" /> }
        ]
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">
                            {language === 'id' ? 'Tentang Saya' : 'Personal Details'}
                        </h1>
                        <p className="text-xl text-slate-500 font-serif italic">
                            {language === 'id' ? 'Di luar pekerjaan dan kode.' : 'Beyond the code and projects.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Books Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                                <Book className="w-6 h-6 text-purple-600" />
                                <h2 className="text-2xl font-bold text-slate-900">
                                    {language === 'id' ? 'Buku Favorit' : 'Favorite Books'}
                                </h2>
                            </div>
                            <div className="space-y-6">
                                {favorites.books.map((book, idx) => (
                                    <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                        <h3 className="font-bold text-lg text-slate-900 mb-1">{book.title}</h3>
                                        <p className="text-sm text-purple-600 mb-2">{book.author}</p>
                                        <p className="text-slate-600 text-sm">{book.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hobbies & Interests */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                                <Heart className="w-6 h-6 text-red-500" />
                                <h2 className="text-2xl font-bold text-slate-900">
                                    {language === 'id' ? 'Minat & Hobi' : 'Interests & Hobbies'}
                                </h2>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {favorites.hobbies.map((hobby, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                                        {hobby.icon}
                                        <span>{hobby.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Additional Info Block */}
                            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center gap-2 mb-4 text-blue-800 font-bold">
                                    <Coffee className="w-5 h-5" />
                                    <h3>{language === 'id' ? 'Filosofi Saya' : 'My Philosophy'}</h3>
                                </div>
                                <p className="text-blue-900/80 leading-relaxed font-serif italic">
                                    "{language === 'id'
                                        ? 'Belajar terus menerus, berbagi pengetahuan, dan menciptakan dampak positif melalui teknologi.'
                                        : 'Continuous learning, sharing knowledge, and creating positive impact through technology.'}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Personal;
