import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin, FileText, Mail, Database, ShoppingBag, BarChart2, Code2, Search } from 'lucide-react';
import AnimatedChart from './AnimatedChart';
import TypingCode from './TypingCode';
import AnimatedTable from './AnimatedTable';
import Button from './Button';

// Animation Utility: Scramble Text
const ScrambleText = ({ text, className }) => {
    const [display, setDisplay] = useState(text);
    const chars = 'abcdefghijklmnopqrstuvwxyz';

    useEffect(() => {
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
            iterations += 1;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{display}</span>;
};

const Hero = () => {
    return (
        <section
            id="home"
            className="relative pt-12 pb-12 lg:pt-20 lg:pb-20 overflow-hidden bg-slate-50 text-slate-900 min-h-[85vh] flex items-center"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.05),transparent_70%)]" />

            {/* Floating Background Icons (Subtle) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                {[Database, Code2, BarChart2].map((Icon, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, delay: i, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute text-blue-600"
                        style={{ top: `${20 + i * 30}%`, left: `${10 + i * 40}%` }}
                    >
                        <Icon size={48} />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column: Text */}
                <div className="text-left z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <p className="text-blue-600 font-mono tracking-widest uppercase mb-3 text-xs md:text-sm font-bold">
                            // <ScrambleText text="Hello, I'm" />
                        </p>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4">
                            <motion.span
                                className="block text-slate-900"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            >
                                Muhammad
                            </motion.span>
                            <motion.span
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                Azahrul R
                            </motion.span>
                        </h1>

                        <div className="text-lg md:text-xl text-slate-600 mb-6 font-light max-w-lg leading-relaxed">
                            <p><ScrambleText text="Aspiring Data Analyst." className="font-medium text-slate-800" /></p>
                            <p className="text-sm md:text-base text-slate-500 mt-2">
                                <ScrambleText text="I use data and systems thinking to solve real problems in education and online retail." />
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
                            <Button href="#cases">
                                VIEW WORK
                            </Button>
                            <Button href="/resume.pdf" variant="outline" target="_blank">
                                DOWNLOAD CV
                            </Button>
                        </div>

                        <div className="flex gap-5">
                            {[
                                { icon: Github, href: "https://github.com" },
                                { icon: Linkedin, href: "https://linkedin.com" },
                                { icon: Mail, href: "mailto:azahrulsmavo@gmail.com" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                                >
                                    <item.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Visual Composition */}
                <div className="relative h-full min-h-[400px] flex items-center justify-center lg:justify-end perspective-1000 scale-90 lg:scale-100">

                    {/* 1. Animated Chart (Scatter Icon) - Top Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -10 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute top-10 right-0 z-20 hover:scale-105 transition-transform duration-500"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-50 animate-pulse" />
                        <AnimatedChart />
                    </motion.div>

                    {/* 2. Typing Code - Bottom Left (of container) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 50 }}
                        animate={{ opacity: 1, x: -20, y: 40 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute bottom-10 left-0 z-10 hidden sm:block scale-90"
                    >
                        <TypingCode />
                    </motion.div>

                    {/* 3. New Table Component - Bottom Right / Floating */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 60 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="absolute bottom-32 right-10 z-30"
                    >
                        <AnimatedTable />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
