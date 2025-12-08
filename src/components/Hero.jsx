import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin, FileText, Mail, Database, ShoppingBag, BarChart2, Code2, Search } from 'lucide-react';

// Animation Utility: Scramble Text
const ScrambleText = ({ text, className }) => {
    const [display, setDisplay] = useState(text);
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~';

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
            iterations += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{display}</span>;
};

// Animation Utility: Subtitle with Loading Pause
const SteppedSubtitle = () => {
    const [step, setStep] = useState(0); // 0: part1, 1: loading, 2: full

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 1500); // Wait after Part 1
        const timer2 = setTimeout(() => setStep(2), 3000); // Finish loading after 1.5s
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <p className="text-xl sm:text-3xl text-blue-100 mb-8 font-light max-w-2xl leading-relaxed h-[3.5rem] flex items-center gap-2">
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Aspiring Data Analyst
            </motion.span>

            {step === 1 && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-1 items-center bg-blue-500/20 px-2 py-0.5 rounded text-sm text-[var(--color-accent-purple)]"
                >
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                </motion.span>
            )}

            {step === 2 && (
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                >
                    <span className="text-gray-400">•</span>
                    <span className="text-[var(--color-accent-purple)] font-semibold">
                        Education & E-commerce Enthusiast
                    </span>
                </motion.span>
            )}
        </p>
    );
};

const EnhancedWaves = () => {
    return (
        <div className="absolute right-[-10%] top-[-10%] w-[120%] h-[120%] pointer-events-none opacity-80 mix-blend-screen">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 800"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#d946ef" stopOpacity="1" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Big Bold Waves */}
                <motion.path
                    d="M-100,200 C200,400 500,0 800,200 S1200,600 1400,300"
                    fill="none"
                    stroke="url(#neonGradient2)"
                    strokeWidth="4"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                />
                <motion.path
                    d="M-100,350 C250,550 550,150 850,350 S1250,750 1450,450"
                    fill="none"
                    stroke="url(#neonGradient2)"
                    strokeWidth="2"
                    opacity="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 4, ease: "easeOut", delay: 0.5 }}
                />
            </svg>
        </div>
    );
};

// Floating Icons Animation
const FloatingIcons = () => {
    const icons = [
        { Icon: Database, color: "text-blue-400", x: 20, y: -20, delay: 0 },
        { Icon: ShoppingBag, color: "text-orange-400", x: -30, y: 40, delay: 1 },
        { Icon: BarChart2, color: "text-purple-400", x: 40, y: 60, delay: 2 },
        { Icon: Code2, color: "text-gray-300", x: -20, y: -50, delay: 1.5 },
        { Icon: Search, color: "text-green-400", x: 60, y: -30, delay: 0.5 },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.6,
                        scale: 1,
                        x: [item.x, item.x + 20, item.x],
                        y: [item.y, item.y - 20, item.y],
                    }}
                    transition={{
                        opacity: { duration: 1, delay: item.delay },
                        scale: { duration: 1, delay: item.delay },
                        x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                        y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: item.delay }
                    }}
                    className={`absolute ${item.color} hidden lg:block`}
                    style={{
                        top: `${40 + (index * 15)}%`,
                        left: `${50 + (index * 10)}%`, // Distribute roughly in right side
                    }}
                >
                    <item.Icon size={40} className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                </motion.div>
            ))}
        </div>
    );
};

const Hero = () => {
    return (
        <section
            id="home"
            className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-[var(--color-domino-dark-blue)] text-white min-h-[90vh] flex items-center"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(29,78,216,0.15),transparent_70%)]" />
            <FloatingIcons />

            <div className="w-full px-8 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Column: Text */}
                <div className="text-left z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <p className="text-[var(--color-accent-orange)] font-mono tracking-widest uppercase mb-6 text-base sm:text-lg font-bold">
                            // <ScrambleText text="Hello, I'm" />
                        </p>
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
                            Muhammad <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                                Azahrul
                            </span>
                        </h1>

                        <SteppedSubtitle />

                        <p className="text-lg text-blue-100/80 mb-10 max-w-xl leading-relaxed">
                            I use data and systems thinking to solve real problems in education and online retail — turning raw numbers into decisions you can act on.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-5">
                            <a
                                href="#projects"
                                className="btn-accent px-10 py-4 text-lg rounded-md font-bold hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                            >
                                VIEW PROJECTS
                            </a>
                            <a
                                href="/cv.pdf"
                                className="px-10 py-4 bg-transparent border border-white/30 text-white rounded-md font-bold hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <FileText size={20} />
                                CV / RESUME
                            </a>
                        </div>

                        <div className="mt-16 flex gap-8">
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
                                    className="text-blue-300/60 hover:text-[var(--color-accent-purple)] hover:scale-110 transition-all duration-300"
                                >
                                    <item.icon size={32} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Visual */}
                <div className="relative h-full min-h-[500px] flex items-center justify-center lg:justify-end">
                    <EnhancedWaves />

                    {/* Floating Badge (optional "Striking" element) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute right-10 top-20 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl hidden lg:block"
                    >
                        <div className="flex gap-4 items-center mb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="font-mono text-xs text-blue-200 space-y-2">
                            <p><span className="text-[var(--color-accent-purple)]">const</span> skills <span className="text-[var(--color-accent-orange)]">=</span> [</p>
                            <p className="pl-4">'Data Analysis',</p>
                            <p className="pl-4">'Business Intel',</p>
                            <p className="pl-4">'Machine Learning'</p>
                            <p>];</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
