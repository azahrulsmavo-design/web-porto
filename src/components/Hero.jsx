import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';
import { useTetrisTheme } from '../utils/themeUtils';
import FloatingBlock from './FloatingBlock';

const Hero = () => {
    const theme = useTetrisTheme();
    const [cursor, setCursor] = useState({ x: 0.5, y: 0.5 });

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = e.clientX / innerWidth;
        const y = e.clientY / innerHeight;
        setCursor({ x, y });
    };

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-28 sm:pt-32 ${theme.sectionBg}`}
        >
            {/* Global grid background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="w-full h-full opacity-20"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.3) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>



            {/* Floating Tetris blocks track cursor (behind hero frame) */}
            <FloatingBlock
                className="top-24 left-4 sm:left-10 grid grid-cols-2 z-10"
                colors={['bg-cyan-400', 'bg-cyan-500', 'bg-cyan-400', 'bg-cyan-400']}
                duration={8}
                cursor={cursor}
                parallax={60}
            />
            <FloatingBlock
                className="bottom-32 right-4 sm:right-16 grid grid-cols-3 z-10"
                colors={[
                    'bg-purple-400',
                    'bg-purple-500',
                    'bg-purple-400',
                    'bg-purple-500',
                ]}
                duration={7}
                delay={1}
                reverse
                cursor={cursor}
                parallax={70}
            />
            <FloatingBlock
                className="top-1/2 -left-6 hidden md:block grid grid-cols-1 z-10"
                colors={[
                    'bg-amber-400',
                    'bg-amber-400',
                    'bg-amber-400',
                    'bg-amber-500',
                ]}
                duration={10}
                cursor={cursor}
                parallax={50}
            />

            {/* Glow behind main frame */}
            <div className="absolute -z-10 inset-0 flex items-center justify-center">
                <div className="w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] bg-emerald-400/10 blur-3xl rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div
                    style={{ perspective: 1500, transformStyle: 'preserve-3d' }}
                    className="w-full"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30, rotateX: 8, rotateY: -8 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className={`
              rounded-2xl border-[4px] p-4 sm:p-8 lg:p-10 relative overflow-hidden
              ${theme.frameBg} ${theme.frameBorder} ${theme.frameShadow}
            `}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* crt scanline + vignette */}
                        <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.3),transparent_55%)]" />
                        <div className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-soft-light bg-[linear-gradient(to_bottom,rgba(15,23,42,0.7),transparent_32%,transparent_70%,rgba(15,23,42,0.9))]" />
                        <div className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-soft-light bg-[linear-gradient(to_bottom,rgba(148,163,184,0.35)_1px,transparent_1px)] bg-[length:0.5px_3px]" />

                        {/* Top bar: game label */}
                        <div className="flex items-center justify-between mb-6 text-xs sm:text-sm tracking-[0.25em] uppercase relative z-10">
                            <div
                                className={`${theme.accent} font-semibold flex items-center gap-2`}
                            >
                                <span className="px-2 py-1 border border-current bg-slate-950/60">
                                    TETRIS-PORTFOLIO
                                </span>
                                <span className="hidden sm:inline text-[0.65rem]">
                                    PLAYER 1: AZAHRUL
                                </span>
                            </div>

                            <div className="hidden sm:flex items-center gap-4 font-mono text-[0.65rem] text-slate-400 uppercase">
                                <span>Hi-score: 002024</span>
                                <span>Credit: 01</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[3fr,1.4fr] gap-8 md:gap-10 items-start relative z-10">
                            {/* Left: Text */}
                            <div className="text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p
                                        className={`mb-3 text-xs sm:text-sm font-mono tracking-[0.35em] ${theme.accent}`}
                                    >
                                        HELLO, I&apos;M
                                    </p>
                                    <h1
                                        className={`
                      mb-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight
                      ${theme.textPrimary}
                    `}
                                        style={{ letterSpacing: '0.05em', textTransform: 'uppercase' }}
                                    >
                                        Muhammad <br className="hidden sm:block" />
                                        Azahrul <br className="hidden sm:block" />
                                        Ramadhan
                                    </h1>

                                    <p
                                        className={`text-base sm:text-lg mb-3 font-mono ${theme.textSecondary}`}
                                    >
                                        ▌Aspiring Data Analyst ▌ Education & E-commerce Enthusiast
                                    </p>

                                    <p
                                        className={`text-sm sm:text-base mb-8 leading-relaxed ${theme.textSecondary}`}
                                    >
                                        I use data and systems thinking to solve real problems in
                                        education and online retail — turning raw numbers into
                                        decisions you can act on.
                                    </p>
                                </motion.div>

                                {/* Buttons with 3D Tilt */}
                                <div
                                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
                                    style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
                                >
                                    <motion.a
                                        href="#projects"
                                        whileHover={{
                                            rotateX: -10,
                                            rotateY: 10,
                                            translateY: -4,
                                        }}
                                        whileTap={{ scale: 0.97, translateY: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 220,
                                            damping: 18,
                                            mass: 0.7,
                                        }}
                                        className={`
                      inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold
                      uppercase tracking-[0.2em] border-[3px]
                      ${theme.pixelButtonPrimary}
                    `}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        ▶ Start Game / View Projects
                                    </motion.a>

                                    <motion.a
                                        href="/cv.pdf"
                                        whileHover={{
                                            rotateX: -8,
                                            rotateY: -8,
                                            translateY: -3,
                                        }}
                                        whileTap={{ scale: 0.97, translateY: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 220,
                                            damping: 18,
                                            mass: 0.7,
                                        }}
                                        className={`
                      inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-bold
                      uppercase tracking-[0.2em] border-[3px]
                      ${theme.pixelButtonSecondary}
                    `}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        <FileText size={18} />
                                        CV / Stats
                                    </motion.a>
                                </div>

                                {/* Status bar */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className={`
                    grid grid-cols-3 gap-2 text-[0.65rem] sm:text-xs font-mono uppercase
                    border-[3px] px-3 py-2
                    ${theme.isDark
                                            ? 'border-slate-600 bg-slate-900/80 text-slate-200'
                                            : 'border-slate-400 bg-slate-100 text-slate-800'
                                        }
                  `}
                                >
                                    <div className="flex flex-col">
                                        <span className="opacity-70">Level</span>
                                        <span className="text-sm sm:text-base">01</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="opacity-70">Lines</span>
                                        <span className="text-sm sm:text-base">007</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="opacity-70">Focus</span>
                                        <span className="text-[0.7rem] sm:text-xs">
                                            Data · Edu · E-Com
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right: side panel */}
                            <motion.div
                                initial={{ opacity: 0, x: 24, rotateY: 12 }}
                                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{
                                    rotateX: -6,
                                    rotateY: 8,
                                    translateY: -4,
                                }}
                                style={{ transformStyle: 'preserve-3d' }}
                                className={`
                  border-[3px] rounded-md p-4 sm:p-5 font-mono text-xs sm:text-sm relative overflow-hidden
                  ${theme.isDark
                                        ? 'border-slate-600 bg-slate-950/90 text-slate-100'
                                        : 'border-slate-400 bg-slate-50 text-slate-800'
                                    }
                `}
                            >
                                <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),transparent_55%)]" />

                                <div className="mb-4 flex items-center justify-between relative z-10">
                                    <span className="tracking-[0.25em] uppercase">Next</span>
                                    <span className="tracking-[0.25em] uppercase opacity-70">
                                        Piece
                                    </span>
                                </div>

                                <div className="mb-5 flex justify-center relative z-10">
                                    <div
                                        style={{
                                            perspective: 1000,
                                            transformStyle: 'preserve-3d',
                                        }}
                                    >
                                        <motion.div
                                            animate={{
                                                rotateX: [18, 26, 18],
                                                rotateY: [-28, -12, -28],
                                                y: [0, -8, 0],
                                            }}
                                            transition={{
                                                duration: 8,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                            className="grid grid-cols-4 gap-0.5 p-1 rounded-md bg-slate-900/80 border border-slate-700"
                                            style={{
                                                boxShadow:
                                                    '10px 14px 18px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,0.6)',
                                            }}
                                        >
                                            <div className="w-5 h-5 bg-sky-400 rounded-[3px]" />
                                            <div className="w-5 h-5 bg-sky-400 rounded-[3px]" />
                                            <div className="w-5 h-5 bg-sky-400 rounded-[3px]" />
                                            <div className="w-5 h-5 bg-sky-400 rounded-[3px]" />
                                        </motion.div>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-5 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <span className="opacity-70">Location</span>
                                        <span className="font-semibold">Bogor, Indonesia</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="opacity-70">Status</span>
                                        <span className="flex items-center gap-2 font-semibold">
                                            <span className="w-2 h-2 rounded-sm bg-green-400 animate-pulse" />
                                            Open to Work
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t border-dashed pt-4 mt-4 border-slate-500/60 relative z-10">
                                    <p className="mb-3 uppercase tracking-[0.2em] text-[0.6rem] opacity-70">
                                        Connect
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <a
                                            href="https://github.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`
                        ${theme.textSecondary} transition-colors
                        ${theme.isDark
                                                    ? 'hover:text-lime-300'
                                                    : 'hover:text-emerald-700'
                                                }
                      `}
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`
                        ${theme.textSecondary} transition-colors
                        ${theme.isDark ? 'hover:text-cyan-300' : 'hover:text-sky-700'}
                      `}
                                        >
                                            <Linkedin size={20} />
                                        </a>
                                        <a
                                            href="mailto:azahrulsmavo@gmail.com"
                                            className={`
                        ${theme.textSecondary} transition-colors
                        ${theme.isDark ? 'hover:text-red-300' : 'hover:text-red-600'
                                                }
                      `}
                                        >
                                            <Mail size={20} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
