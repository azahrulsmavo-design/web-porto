import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import TetrisSection from './TetrisSection';
import { useTetrisTheme } from '../utils/themeUtils';

const Contact = () => {
    const theme = useTetrisTheme();

    return (
        <TetrisSection
            id="contact"
            title="Get In Touch"
            subtitle="If you’d like to talk about data, internships, or collaboration."
            theme={theme}
        >
            <div className="grid md:grid-cols-[2fr,1.5fr] gap-6 text-sm items-start">
                <p className={theme.textSecondary}>
                    If you’d like to talk about data, internships, or collaboration, feel
                    free to reach out. I’m especially interested in roles that mix data,
                    education, and e-commerce.
                </p>

                <motion.div
                    whileHover={{ translateY: -5, rotateX: -4, rotateY: 4 }}
                    transition={{
                        type: 'spring',
                        stiffness: 230,
                        damping: 18,
                        mass: 0.7,
                    }}
                    className={`border-[3px] p-4 ${theme.subCardBg} ${theme.subCardBorder} font-mono text-xs`}
                >
                    <div className="mb-3">
                        <div className="opacity-70 uppercase tracking-[0.2em] mb-1">
                            Email
                        </div>
                        <a
                            href="mailto:azahrulsmavo@gmail.com"
                            className={`
                text-sm underline underline-offset-4
                ${theme.isDark
                                    ? 'text-lime-300 hover:text-lime-200'
                                    : 'text-emerald-700 hover:text-emerald-600'
                                }
              `}
                        >
                            azahrulsmavo@gmail.com
                        </a>
                    </div>

                    <div className="mb-3">
                        <div className="opacity-70 uppercase tracking-[0.2em] mb-1">
                            Social
                        </div>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                  flex items-center gap-1
                  ${theme.textSecondary} transition-colors
                  ${theme.isDark ? 'hover:text-lime-300' : 'hover:text-emerald-700'}
                `}
                            >
                                <Github size={16} />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                  flex items-center gap-1
                  ${theme.textSecondary} transition-colors
                  ${theme.isDark ? 'hover:text-cyan-300' : 'hover:text-sky-700'}
                `}
                            >
                                <Linkedin size={16} />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-4 border-t border-dashed border-slate-500/60 pt-3">
                        <div className="opacity-70 uppercase tracking-[0.2em] mb-1">
                            Status
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-sm bg-green-400 animate-pulse" />
                            <span>Open to Work</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </TetrisSection>
    );
};

export default Contact;
