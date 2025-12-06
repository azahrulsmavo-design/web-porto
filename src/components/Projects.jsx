import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TetrisSection from './TetrisSection';
import { useTetrisTheme } from '../utils/themeUtils';

const projects = [
    {
        title: 'AWING Body Repair & Cat',
        description:
            'Official landing page for a body repair shop in Depok. Features a modern premium design, WhatsApp conversion focus, and local SEO optimization.',
        stack: ['Next.js 16', 'React 19', 'Tailwind CSS 4', 'Framer Motion'],
    },
    {
        title: 'Road Traffic Analysis',
        description:
            'Exploratory data analysis on a road traffic dataset to understand the relationship between occupancy and speed across time.',
        stack: ['Python', 'pandas', 'matplotlib', 'seaborn'],
    },
    {
        title: 'Internship Vacancy Intelligence',
        description:
            'Built a pipeline to fetch internship vacancies, clean and score them based on skills, and serve results via a simple web app.',
        stack: ['Python', 'requests', 'pandas', 'Streamlit'],
    },
    {
        title: 'Kevin Book Store Dashboard',
        description:
            'Combined Shopee and TikTok order exports into a unified dataset using PowerQuery, then created views for GMV, shipping status, and claims.',
        stack: ['Excel', 'PowerQuery', 'Dashboarding'],
    },
];

const Projects = () => {
    const theme = useTetrisTheme();

    return (
        <TetrisSection
            id="projects"
            title="Featured Projects"
            subtitle="Small but real projects that connect data and business."
            theme={theme}
        >
            <div className="grid md:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        whileHover={{
                            translateY: -6,
                            rotateX: -5,
                            rotateY: 6,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 240,
                            damping: 18,
                            mass: 0.7,
                        }}
                        className={`
              border-[3px] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden
              ${theme.subCardBg} ${theme.subCardBorder}
            `}
                    >
                        <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.5),transparent_60%)]" />
                        <div className="relative z-10">
                            <h3
                                className={`text-sm sm:text-base font-semibold mb-2 ${theme.pageText}`}
                            >
                                {project.title}
                            </h3>
                            <p className={`text-xs sm:text-sm mb-3 ${theme.textSecondary}`}>
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.stack.map((item) => (
                                    <span
                                        key={item}
                                        className={`
                      px-2 py-1 text-[0.65rem] rounded-sm border
                      ${theme.chipBg} ${theme.chipText} border-slate-500/40
                    `}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end relative z-10">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                  inline-flex items-center gap-1 text-[0.7rem] sm:text-xs font-mono uppercase tracking-[0.18em]
                  ${theme.accent} hover:underline
                `}
                            >
                                View on GitHub
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </TetrisSection>
    );
};

export default Projects;
