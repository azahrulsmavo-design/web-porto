import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useTetrisTheme } from '../utils/themeUtils';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
];

const TETRIS_SHAPES = [
    { color: 'bg-cyan-400', shape: [[1, 1, 1, 1]] }, // I
    { color: 'bg-amber-400', shape: [[1, 1], [1, 1]] }, // O
    { color: 'bg-purple-400', shape: [[0, 1, 0], [1, 1, 1]] }, // T
    { color: 'bg-lime-400', shape: [[0, 1, 1], [1, 1, 0]] }, // S
    { color: 'bg-red-400', shape: [[1, 1, 0], [0, 1, 1]] }, // Z
    { color: 'bg-blue-400', shape: [[1, 0, 0], [1, 1, 1]] }, // J
    { color: 'bg-orange-400', shape: [[0, 0, 1], [1, 1, 1]] }, // L
];

const Navbar = () => {
    const { toggleTheme } = useTheme();
    const theme = useTetrisTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [drops, setDrops] = useState([]);

    const spawnDrop = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const randomShape = TETRIS_SHAPES[Math.floor(Math.random() * TETRIS_SHAPES.length)];

        const newDrop = {
            id: Date.now() + Math.random(),
            x: center,
            shape: randomShape.shape,
            color: randomShape.color,
            rotation: Math.random() > 0.5 ? 90 : 0
        };

        setDrops(prev => [...prev, newDrop]);
    };

    const removeDrop = (id) => {
        setDrops(prev => prev.filter(d => d.id !== id));
    };

    return (
        <header
            className={`
        fixed top-0 inset-x-0 z-50 border-b-[3px] px-4 sm:px-6 lg:px-8
        ${theme.frameBg} ${theme.frameBorder}
        backdrop-blur transition-colors duration-300
      `}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between h-16 gap-4 relative">
                {/* Visual Drops */}
                <div className="absolute top-16 left-0 w-full h-screen pointer-events-none overflow-hidden -z-10">
                    <AnimatePresence>
                        {drops.map(drop => (
                            <motion.div
                                key={drop.id}
                                initial={{ y: -20, x: drop.x - 20, opacity: 1, rotate: drop.rotation }}
                                animate={{ y: '100vh', rotate: drop.rotation + 180 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5, ease: 'linear' }}
                                onAnimationComplete={() => removeDrop(drop.id)}
                                className="absolute top-0 flex flex-col"
                            >
                                {drop.shape.map((row, rIdx) => (
                                    <div key={rIdx} className="flex">
                                        {row.map((cell, cIdx) => (
                                            <div
                                                key={cIdx}
                                                className={`
                                                  w-4 h-4 border border-black/20
                                                  ${cell ? drop.color : 'bg-transparent'}
                                                `}
                                                style={{ opacity: cell ? 1 : 0 }}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Logo / Brand */}
                <div className="flex items-center gap-3">
                    <a href="#home" className={`
            px-2 py-1 border-[3px] text-xs font-black uppercase tracking-[0.18em]
            ${theme.frameBorder} ${theme.isDark ? 'text-lime-300' : 'text-slate-800'}
            hover:scale-105 transition-transform
          `}>
                        Azahrul
                    </a>
                    <div className="hidden lg:flex flex-col text-[0.6rem] font-mono uppercase tracking-[0.22em] text-slate-400">
                        <span>TETRIS-PORTFOLIO</span>
                        <span>PLAYER 1: AZAHRUL</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="flex items-center gap-3">
                    <nav className="hidden md:flex items-center gap-1 text-xs font-mono uppercase tracking-[0.1em]">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onMouseEnter={spawnDrop}
                                className={`
                  px-3 py-2 rounded-sm transition-colors relative
                  ${theme.isDark
                                        ? 'text-slate-300 hover:text-lime-300 hover:bg-slate-800/50'
                                        : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-100'
                                    }
                `}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={`
              flex items-center gap-2 px-3 py-1.5 border-[2px] text-[0.7rem] font-semibold uppercase tracking-wider ml-2
              ${theme.isDark
                                ? 'border-yellow-500/50 bg-yellow-500/10 text-yellow-200 hover:bg-yellow-500/20'
                                : 'border-slate-400 bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }
              rounded-sm transition-all
            `}
                    >
                        {theme.isDark ? <Moon size={14} /> : <Sun size={14} />}
                        <span className="hidden sm:inline">{theme.isDark ? 'Dark Mode' : 'Light Mode'}</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-500"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={`md:hidden border-t ${theme.frameBorder} ${theme.frameBg}`}>
                    <nav className="flex flex-col p-4 space-y-2 text-sm font-mono uppercase tracking-[0.1em]">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`
                  px-3 py-3 border border-transparent hover:border-current
                  ${theme.textSecondary}
                `}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
