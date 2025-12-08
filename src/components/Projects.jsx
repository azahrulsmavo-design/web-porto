import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal } from 'lucide-react';

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
            'A dashboard for a local bookstore to visualize sales trends, inventory turnover, and customer preferences.',
        stack: ['Power BI', 'SQL', 'Excel'],
    }
];

const Projects = () => {
    return (
        <section id="projects" className="w-full bg-transparent min-h-screen relative px-8 lg:px-16 text-slate-900">
            {/* Header - No Sticky, Split Layout */}
            <div className="mb-16 border-b border-gray-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h2 className="text-4xl font-bold text-slate-900">Featured Projects</h2>
                <p className="text-gray-500 max-w-md md:text-right text-lg">
                    Small but real projects that connect data and business.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 relative z-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="glass-monitor flex flex-col h-full bg-slate-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                    >
                        {/* Monitor Header / Window Controls */}
                        <div className="bg-gray-100 border-b border-gray-200 p-3 flex items-center justify-between">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="text-[10px] uppercase font-mono tracking-widest text-gray-400">bash</div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold mb-3 text-slate-800 font-mono">
                                    &gt; {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white text-blue-600 text-sm font-medium rounded-full border border-blue-100"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-auto pt-6 border-t border-gray-200 flex justify-end">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider font-mono"
                                >
                                    [ View Code ]
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
