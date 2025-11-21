import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Code } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <BookOpen className="w-6 h-6 text-blue-400" />,
            title: "Background",
            description: "B.Sc. in Mathematics Education (UNY)"
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-green-400" />,
            title: "Focus",
            description: "Data analysis, business operations, and education"
        },
        {
            icon: <Code className="w-6 h-6 text-purple-400" />,
            title: "Currently",
            description: "Building portfolio projects and preparing for data roles"
        }
    ];

    return (
        <section id="about" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                        <p>
                            I’m a Math Education graduate who fell in love with data and systems. Over the last few years, I’ve been building and running Kevin Book Store, an education-focused online business, while learning data analytics and machine learning.
                        </p>
                        <p>
                            I enjoy turning messy, real-world data into clear insights and simple tools that people actually use. My background in education helps me communicate complex findings effectively.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center gap-4 hover:border-blue-500/30 transition-colors"
                            >
                                <div className="p-3 bg-slate-900 rounded-lg">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
