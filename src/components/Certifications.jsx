import React from 'react';
import { motion } from 'framer-motion';
import TetrisSection from './TetrisSection';
import { useTetrisTheme } from '../utils/themeUtils';

const Certifications = () => {
    const theme = useTetrisTheme();

    return (
        <TetrisSection
            id="certifications"
            title="Certifications"
            subtitle="Structured learning I've completed."
            theme={theme}
        >
            <div className="grid md:grid-cols-2 gap-5 text-sm">
                <motion.div
                    whileHover={{ translateY: -5, rotateX: -4, rotateY: 4 }}
                    transition={{
                        type: 'spring',
                        stiffness: 230,
                        damping: 18,
                        mass: 0.7,
                    }}
                    className={`border-[3px] p-4 ${theme.subCardBg} ${theme.subCardBorder}`}
                >
                    <h3 className={`font-semibold mb-1 ${theme.pageText}`}>
                        Google Analytics Certification
                    </h3>
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] opacity-70 mb-2">
                        SkillsUp · Issued 2024
                    </p>
                    <p className={theme.textSecondary}>
                        Completed a data analytics certification focused on fundamentals of
                        web analytics, tracking, interpreting traffic, behavior, conversion
                        metrics, building dashboards, and funnel analysis.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ translateY: -5, rotateX: -4, rotateY: 4 }}
                    transition={{
                        type: 'spring',
                        stiffness: 230,
                        damping: 18,
                        mass: 0.7,
                    }}
                    className={`border-[3px] p-4 ${theme.subCardBg} ${theme.subCardBorder}`}
                >
                    <h3 className={`font-semibold mb-1 ${theme.pageText}`}>
                        Power BI for Beginners
                    </h3>
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] opacity-70 mb-2">
                        SimpleLearn Technologies · Issued Nov 2025
                    </p>
                    <p className={theme.textSecondary}>
                        Foundational certification covering data import/transformation with
                        Power Query, data modeling, interactive dashboard creation, and
                        introductory DAX calculations.
                    </p>
                </motion.div>
            </div>
        </TetrisSection>
    );
};

export default Certifications;
