import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Road Traffic Analysis",
            description: "Exploratory data analysis on a road traffic dataset to understand the relationship between occupancy and speed across time.",
            tech: ["Python", "pandas", "matplotlib", "seaborn"],
            github: "https://github.com/azahrulsmavo-design/road-traffic-analysis-pangyo",
            color: "border-blue-500"
        },
        {
            title: "Internship Vacancy Intelligence",
            description: "Built a pipeline to fetch internship vacancies, clean and score them based on skills, and serve results via a simple web app.",
            tech: ["Python", "requests", "pandas", "Streamlit"],
            github: "https://github.com/azahrulsmavo-design/magang_intel",
            color: "border-green-500"
        },
        {
            title: "Kevin Book Store Dashboard",
            description: "Combined Shopee and TikTok order exports into a unified dataset using PowerQuery, then created views for GMV, shipping status, and claims.",
            tech: ["Excel", "PowerQuery", "Dashboarding"],
            github: "https://github.com",
            color: "border-purple-500"
        }
    ];

    return (
        <section id="projects" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-slate-400 mb-6 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-slate-900 text-blue-400 text-xs font-medium rounded-full border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary w-full justify-center group"
                                >
                                    <Github size={18} />
                                    <span>View on GitHub</span>
                                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
