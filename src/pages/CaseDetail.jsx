import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Github } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';

const CaseDetail = () => {
    const { slug } = useParams();
    const { language } = useLanguage();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProject();
    }, [slug]);

    const fetchProject = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('slug', slug)
                .single(); // Use single() to get object instead of array

            if (error) throw error;
            setProject(data);
        } catch (err) {
            console.error('Error fetching project:', err);
            setError('Project not found');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="bg-white min-h-screen text-slate-900 flex items-center justify-center">
                <Navbar />
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-12 bg-slate-200 rounded-full mb-4"></div>
                    <div className="h-4 w-32 bg-slate-200 rounded"></div>
                </div>
            </div>
        );
    }

    if (error || !project) {
        return (
            <div className="bg-white min-h-screen text-slate-900 flex items-center justify-center">
                <Navbar />
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
                    <Link to="/cases" className="text-blue-600 underline">Return to Cases</Link>
                </div>
            </div>
        );
    }

    // Resolve localized content
    const title = language === 'en' ? project.title_en : project.title_id;
    const desc = language === 'en' ? project.desc_en : project.desc_id;
    const details = language === 'en' ? project.details_en : project.details_id;

    // Fallback for details if null (should be protected by schema defaults but good safety)
    const safeDetails = details || {};

    // Fallback for meta if missing
    const meta = safeDetails.meta || { projectType: 'Project', services: [] };

    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Header / Hero */}
            <section className="w-full pt-24 pb-12 lg:pt-40 lg:pb-20 px-6 lg:px-16 max-w-7xl mx-auto">
                <Link to="/cases" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold mb-12 transition-colors uppercase tracking-widest text-xs">
                    <ArrowLeft size={16} /> {language === 'en' ? 'Back to Projects' : 'Kembali'}
                </Link>

                {safeDetails.header ? (
                    <>
                        <div className="space-y-4 mb-16">
                            <h2 className="text-blue-600 font-bold tracking-widest uppercase">{safeDetails.subheader}</h2>
                            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase max-w-5xl">
                                {safeDetails.header}
                            </h1>
                            {project.github_url && (
                                <a href={project.github_url} className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors mt-4">
                                    [ VIEW GITHUB ] <Github size={18} />
                                </a>
                            )}
                        </div>

                        {/* Stats Grid */}
                        {safeDetails.stats && (
                            <div className="grid md:grid-cols-3 gap-8 mb-12 lg:mb-24 border-y border-slate-200 py-8 lg:py-12">
                                {safeDetails.stats.map((stat, i) => (
                                    <div key={i}>
                                        <h3 className="text-2xl font-bold mb-3">{stat.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">{stat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Main Content Layout */}
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                            {/* Left Sidebar (Meta) */}
                            <div className="lg:col-span-4 space-y-12">
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-slate-400 mb-4">Project Type</h4>
                                    <div className="text-xs font-bold uppercase text-slate-900">{meta.projectType}</div>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-slate-400 mb-4">Services</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {(meta.services || []).map(s => (
                                            <span key={s} className="px-3 py-1 bg-slate-100 rounded text-xs font-bold uppercase">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                {(meta.technologies || project.tech_stack) && (
                                    <div>
                                        <h4 className="font-bold uppercase tracking-widest text-xs text-slate-400 mb-4">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {(meta.technologies || project.tech_stack || []).map(t => (
                                                <span key={t} className="px-3 py-1 bg-slate-100 rounded text-xs font-bold uppercase">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Content */}
                            <div className="lg:col-span-8 space-y-12 lg:space-y-24">
                                {/* Overview */}
                                {safeDetails.overview && (
                                    <div>
                                        <h3 className="text-3xl font-bold mb-6">{safeDetails.overview.title}</h3>
                                        <p className="text-lg text-slate-600 leading-relaxed">{safeDetails.overview.content}</p>
                                    </div>
                                )}

                                {/* Context / Challenge */}
                                {safeDetails.context && (
                                    <div>
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="h-px w-12 bg-slate-300"></span>
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Context & Challenge</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-6">{safeDetails.context.title}</h3>
                                        <p className="text-lg text-slate-600 leading-relaxed mb-6">{safeDetails.context.content}</p>
                                        {safeDetails.context.role && (
                                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                                <h4 className="font-bold mb-2 text-sm uppercase tracking-wide text-blue-600">Our Role</h4>
                                                <p className="text-slate-700 italic">{safeDetails.context.role}</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Process */}
                                {safeDetails.process && (
                                    <div>
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="h-px w-12 bg-slate-300"></span>
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">The Process</span>
                                        </div>
                                        <div className="space-y-12">
                                            {safeDetails.process.map((step, i) => (
                                                <div key={i} className="group">
                                                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                                                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Findings */}
                                {safeDetails.findings && (
                                    <div>
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="h-px w-12 bg-slate-300"></span>
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Key Findings (The "Wins")</span>
                                        </div>
                                        <div className="grid gap-8">
                                            {safeDetails.findings.map((item, i) => (
                                                <div key={i} className="bg-slate-900 text-white p-8 rounded-2xl">
                                                    <h3 className="text-xl font-bold mb-4 text-blue-400">{item.title}</h3>
                                                    <div className="text-slate-300 leading-relaxed whitespace-pre-line">{item.desc}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Project Gallery */}
                                {safeDetails.images && safeDetails.images.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="h-px w-12 bg-slate-300"></span>
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Project Gallery</span>
                                        </div>
                                        <div className="grid gap-8">
                                            {safeDetails.images.map((img, i) => (
                                                <div key={i} className="space-y-4">
                                                    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                                                        <img src={img.src} alt={img.title} className="w-full h-auto" />
                                                    </div>
                                                    {img.title && <p className="text-sm text-slate-500 font-bold tracking-wide uppercase text-center">{img.title}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    // Default / Placeholder view for projects without details
                    <div className="space-y-8">
                        <h1 className="text-5xl font-bold mb-4">{title || project.slug}</h1>
                        <p className="text-xl text-slate-600">{desc}</p>
                        <div className="p-12 bg-slate-100 rounded-3xl text-center text-slate-400">
                            {language === 'en' ? 'Detailed case study content coming soon.' : 'Konten studi kasus detail akan segera hadir.'}
                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
};

export default CaseDetail;
