import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animation Utility: Scramble Text (Triggered when in view)
const ScrambleText = ({ text, className, delay = 0 }) => {
    const [display, setDisplay] = useState(text);
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        const startTimeout = setTimeout(() => {
            let iterations = 0;
            const interval = setInterval(() => {
                setDisplay(
                    text
                        .split('')
                        .map((char, index) => {
                            if (index < iterations) return text[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                if (iterations >= text.length) clearInterval(interval);
                iterations += 1 / 5;
            }, 30);
            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(startTimeout);
    }, [text, isInView, delay]);

    return <span ref={ref} className={className}>{display}</span>;
};

const About = () => {
    return (
        <section id="about" className="section-container bg-white">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Background, focus, and what I'm working on.</p>

            <div className="grid md:grid-cols-2 gap-12 items-center text-lg leading-relaxed text-[var(--color-domino-text-light)]">
                <div>
                    <p className="mb-6">
                        I’m a Math Education graduate who fell in love with data and systems.
                        Over the last few years, I’ve been building and running Kevin Book
                        Store, an education-focused online business, while learning data
                        analytics and machine learning.
                    </p>
                    <p>
                        I enjoy turning messy, real-world data into clear insights and simple
                        tools that people actually use. My background in education helps me
                        communicate complex findings effectively.
                    </p>
                </div>

                <div className="grid gap-6">
                    {[
                        {
                            label: 'Background',
                            value: 'B.Ed. in Mathematics Education (UNY)',
                            icon: '🎓'
                        },
                        {
                            label: 'Focus',
                            value: 'Data analysis and business operations',
                            icon: '🎯'
                        },
                        {
                            label: 'Currently',
                            value: 'Building portfolio projects & prep for data roles',
                            icon: '🚀'
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            <span className="text-3xl">{item.icon}</span>
                            <div>
                                <div className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-1">{item.label}</div>
                                <div className="font-semibold text-gray-800">
                                    <ScrambleText text={item.value} delay={index * 0.2 + 0.5} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
