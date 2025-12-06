import React from 'react';
import { motion } from 'framer-motion';
import TetrisSection from './TetrisSection';
import { useTetrisTheme } from '../utils/themeUtils';

const Skills = () => {
    const theme = useTetrisTheme();

    return (
        <TetrisSection
            id="skills"
            title="Skills & Expertise"
            subtitle="Data, tools, and domain knowledge I use."
            theme={theme}
        >
            <div className="grid md:grid-cols-3 gap-4 text-sm">
                {[
                    {
                        title: 'Data & Analytics',
                        items: [
                            'Python (pandas, numpy)',
                            'SQL',
                            'Data Cleaning & EDA',
                            'Matplotlib & Seaborn',
                            'Basic Machine Learning',
                        ],
                    },
                    {
                        title: 'Tools & Technologies',
                        items: [
                            'Jupyter Notebook',
                            'VS Code',
                            'Excel (Advanced)',
                            'PowerQuery',
                            'Git & GitHub',
                            'Power BI',
                        ],
                    },
                    {
                        title: 'Domain & Business',
                        items: [
                            'E-commerce Operations',
                            'Inventory Planning',
                            'Pricing Strategy',
                            'Education Materials',
                            'Business Analysis',
                        ],
                    },
                ].map((group) => (
                    <motion.div
                        key={group.title}
                        whileHover={{ translateY: -4, rotateX: -4, rotateY: 4 }}
                        transition={{
                            type: 'spring',
                            stiffness: 230,
                            damping: 18,
                            mass: 0.6,
                        }}
                        className={`border-[3px] p-4 ${theme.subCardBg} ${theme.subCardBorder}`}
                    >
                        <h3
                            className={`font-mono text-xs uppercase tracking-[0.2em] mb-3 ${theme.accent}`}
                        >
                            {group.title}
                        </h3>
                        <ul className={`space-y-1.5 ${theme.textSecondary}`}>
                            {group.items.map((it) => (
                                <li key={it}>{it}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </TetrisSection>
    );
};

export default Skills;
