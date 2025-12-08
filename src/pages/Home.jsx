import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="relative bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full">
                <Hero />
            </div>

            {/* Main Content */}
            <main className="relative z-10 bg-white min-h-screen text-slate-900">
                <About />
                <Skills />
                <Experience />
                <Certifications />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
