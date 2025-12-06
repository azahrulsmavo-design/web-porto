import React from 'react';
import { motion } from 'framer-motion';
import TetrisSection from './TetrisSection';
import { useTetrisTheme } from '../utils/themeUtils';

const Experience = () => {
    const theme = useTetrisTheme();

    return (
        <TetrisSection
            id="experience"
            title="Experience"
            subtitle="What I've been doing in the real world."
            theme={theme}
        >
            <div className="space-y-6 text-sm">
                {[
                    {
                        role: 'Business Development & Operations',
                        meta: 'Aug 2024 – Present · Kevin Book Store',
                        bullets: [
                            'Manage marketplace listings and pricing for 300+ SKUs across Shopee and TikTok Shop.',
                            'Design and document systems including SOPs and Excel/PowerQuery workflows.',
                            'Analyze sales and inventory data to support purchasing decisions and marketing campaigns.',
                        ],
                    },
                    {
                        role: 'Volunteer Tutor — Marginalized School Program',
                        meta: '2022 – 2023 · Mathematics Tutor',
                        bullets: [
                            'Provided mathematics tutoring for students from underserved school communities.',
                            'Developed simplified learning materials tailored to student needs.',
                            'Supported confidence-building and learning motivation through a personalized approach.',
                            'Collaborated with volunteer teams to review student progress.',
                        ],
                    },
                ].map((exp) => (
                    <motion.div
                        key={exp.role}
                        whileHover={{ translateY: -6, rotateX: -4, rotateY: 4 }}
                        transition={{
                            type: 'spring',
                            stiffness: 230,
                            damping: 18,
                            mass: 0.7,
                        }}
                        className={`border-[3px] p-4 ${theme.subCardBg} ${theme.subCardBorder}`}
                    >
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                            <h3 className={`font-semibold ${theme.pageText}`}>{exp.role}</h3>
                            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] opacity-70">
                                {exp.meta}
                            </span>
                        </div>
                        <ul className={`list-disc pl-4 space-y-1.5 ${theme.textSecondary}`}>
                            {exp.bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </TetrisSection>
    );
};

export default Experience;
