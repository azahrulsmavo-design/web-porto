import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import ScrambleText from './ScrambleText';

const projects = [
    {
        title: 'Sentiment Analysis',
        desc: 'Text classification model (Positive/Negative) using Logistic Regression & TF-IDF.',
        tech: ['Python', 'Logistic Regression', 'TF-IDF', 'Scikit-learn'],
        links: { code: '#' },
        type: 'AI/ML',
        quickStart: `To run a project, navigate to its directory and follow the internal README.md.`
    },
    {
        title: 'Image Deployment',
        desc: 'Image classification (CIFAR-10) using CNN and FastAPI.',
        tech: ['Python', 'CNN', 'FastAPI', 'TensorFlow/PyTorch'],
        links: { code: '#' },
        type: 'AI/ML',
        quickStart: `cd project2_image_deploy
pip install -r requirements.txt
# Run the FastAPI server
uvicorn main:app --reload`
    },
    {
        title: 'AWING Body Repair & Cat',
        desc: 'Official landing page for a body repair shop in Depok. Features a modern premium design, WhatsApp conversion focus, and local SEO optimization.',
        tech: ['Next.js 16', 'React 19', 'Tailwind CSS 4', 'Framer Motion'],
        links: { live: '#', code: '#' },
        type: 'bash'
    },
    {
        title: 'Road Traffic Analysis',
        desc: 'Exploratory data analysis on a road traffic dataset to understand the relationship between occupancy and speed across time.',
        tech: ['Python', 'pandas', 'matplotlib', 'seaborn'],
        links: { code: '#' },
        type: 'bash'
    },
    {
        title: 'Internship Vacancy Intelligence',
        desc: 'Built a pipeline to fetch internship vacancies, clean and score them based on skills, and serve results via a simple web app.',
        tech: ['Python', 'requests', 'pandas', 'Streamlit'],
        links: { code: '#' },
        type: 'bash'
    },
    {
        title: 'Kevin Book Store Dashboard',
        desc: 'A dashboard for a local bookstore to visualize sales trends, inventory turnover, and customer preferences.',
        tech: ['Power BI', 'SQL', 'Excel'],
        links: { live: '#' },
        type: 'bash'
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <div className="sticky top-0 min-h-screen w-full bg-white border-t border-slate-200 flex items-center justify-center overflow-hidden py-24">
            <div className="max-w-7xl w-full px-8 grid md:grid-cols-2 gap-16 items-start md:items-center">
                {/* Left: Project Title & Type */}
                <div>
                    <div className="font-mono text-blue-600 text-sm mb-4 font-bold uppercase tracking-wider">
                        &gt; {project.type}
                    </div>
                    <h3 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">{project.title}</h3>

                    <div className="flex gap-4 mt-8">
                        {project.links.live && (
                            <a href={project.links.live} className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3">
                                View Live <ArrowRight size={20} />
                            </a>
                        )}
                        {project.links.code && (
                            <a href={project.links.code} className="px-8 py-4 border border-slate-300 rounded-full font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-3">
                                View Code <Github size={20} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Right: Description & Tech */}
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="text-slate-600 text-xl leading-relaxed mb-10 font-light">
                        {project.desc}
                    </div>

                    {/* Quick Start Section */}
                    {project.quickStart && (
                        <div className="mb-8 p-4 bg-slate-900 rounded-xl overflow-x-auto">
                            <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-3 border-b border-slate-700 pb-2">Quick Start</div>
                            <pre className="text-sm font-mono text-green-400 whitespace-pre-wrap">
                                {project.quickStart}
                            </pre>
                        </div>
                    )}

                    <div className="mb-4 text-xs font-bold uppercase text-slate-400 tracking-widest">Technologies</div>
                    <ul className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                            <li key={tech} className="px-4 py-2 bg-white text-blue-600 text-sm font-mono rounded-lg border border-blue-100 font-bold shadow-sm">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="relative w-full bg-white">
            {/* Sticky Header Block */}
            <div className="w-full px-8 lg:px-16 py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        Projects.
                    </motion.h2>
                    <div className="text-2xl md:text-3xl text-slate-400 font-light">
                        <ScrambleText text="Applying skills to solve real problems." delay={0.2} speed="fast" />
                    </div>
                </div>
            </div>

            {/* Stacking Cards Container */}
            <div className="w-full">
                {projects.map((project, i) => (
                    <ProjectCard key={i} index={i} project={project} />
                ))}
            </div>

            {/* The next section (Experience) will naturally flow after the last sticky card */}
        </section>
    );
};

export default Projects;
