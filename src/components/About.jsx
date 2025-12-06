import React from 'react';
import { motion } from 'framer-motion';
import TetrisSection from './TetrisSection';
import { useTetrisTheme } from '../utils/themeUtils';

const About = () => {
    const theme = useTetrisTheme();

    return (
        <TetrisSection
            id="about"
            title="About Me"
            subtitle="Background, focus, and what I'm working on."
            theme={theme}
        >
            <div className={`space-y-6 text-sm sm:text-base ${theme.textSecondary}`}>
                <p>
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

                <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm font-mono uppercase tracking-[0.12em]">
                    {[
                        {
                            label: 'Background',
                            value: 'B.Ed. in Mathematics Education (UNY)',
                        },
                        {
                            label: 'Focus',
                            value: 'Data analysis and business operations',
                        },
                        {
                            label: 'Currently',
                            value: 'Building portfolio projects & prep for data roles',
                        },
                    ].map((item) => (
                        <motion.div
                            key={item.label}
                            whileHover={{ translateY: -4, rotateX: -4, rotateY: 4 }}
                            transition={{
                                type: 'spring',
                                stiffness: 230,
                                damping: 18,
                                mass: 0.6,
                            }}
                            className={`border-[3px] p-3 ${theme.subCardBg} ${theme.subCardBorder}`}
                        >
                            <div className="opacity-70 mb-1">{item.label}</div>
                            <div className="font-semibold">{item.value}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </TetrisSection>
    );
};

export default About;
