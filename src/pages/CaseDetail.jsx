import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const CaseDetail = () => {
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen text-slate-900">
            <Navbar />

            <section className="w-full py-32 px-8 lg:px-16 pt-40">
                <Link to="/cases" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Cases
                </Link>

                <h1 className="text-6xl font-bold mb-4 capitalize">Case Study: {slug?.replace('-', ' ')}</h1>
                <p className="text-xl text-slate-600 max-w-2xl">
                    Detailed breakdown of the project flow, challenges, and solutions will be displayed here.
                </p>

                {/* Placeholder Content Area */}
                <div className="mt-16 grid gap-8">
                    <div className="h-96 w-full bg-slate-100 rounded-3xl flex items-center justify-center text-slate-300 text-4xl font-bold">
                        Hero Image
                    </div>
                    <div className="h-64 w-full bg-slate-50 rounded-3xl p-8">
                        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                        <p className="text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseDetail;
