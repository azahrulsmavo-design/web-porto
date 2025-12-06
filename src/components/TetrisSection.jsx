import React from 'react';
import { motion } from 'framer-motion';

const TetrisSection = ({ id, title, subtitle, children, theme }) => (
    <section id={id} className={`py-16 scroll-mt-24`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-100px' }}
                style={{ perspective: 1400, transformStyle: 'preserve-3d' }}
            >
                <motion.div
                    whileHover={{
                        rotateX: -3,
                        rotateY: 4,
                        translateY: -4,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.7 }}
                    className={`
            rounded-2xl border-[4px] p-5 sm:p-8 lg:p-10 relative overflow-hidden
            ${theme.frameBg} ${theme.frameBorder} ${theme.frameShadow}
          `}
                >
                    {/* subtle scanline overlay */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light bg-[linear-gradient(to_bottom,rgba(148,163,184,0.35)_1px,transparent_1px)] bg-[length:0.5px_3px]" />

                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-dashed border-slate-500/30 relative z-10">
                        <div>
                            <h2
                                className={`
                  text-xl sm:text-2xl font-black tracking-[0.25em] uppercase
                  ${theme.accent}
                `}
                            >
                                {title}
                            </h2>
                            {subtitle && (
                                <p className={`mt-2 text-xs sm:text-sm font-mono ${theme.textSecondary}`}>
                                    {subtitle}
                                </p>
                            )}
                        </div>
                        <div className="hidden sm:flex flex-col items-end text-[0.6rem] font-mono uppercase tracking-[0.25em] opacity-60">
                            <span>Tetris System</span>
                            <span>Section {title}</span>
                        </div>
                    </div>
                    <div className="relative z-10">{children}</div>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default TetrisSection;
