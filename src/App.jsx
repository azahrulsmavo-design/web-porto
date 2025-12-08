import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="relative bg-white min-h-screen">
      <Navbar />

      {/* Sticky Hero Section (Bottom Layer) */}
      <div className="sticky top-0 z-0 h-screen w-full">
        <Hero />
      </div>

      {/* Spacer to push content down so it doesn't cover Hero buttons immediately */}
      <div className="h-[20vh] w-full pointer-events-none sticky top-0 z-0" />

      {/* Scrollable Content Section (Top Layer) */}
      <main className="relative z-10 bg-white rounded-t-[50px] mt-[-50px] shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.1)] min-h-screen pb-20 text-slate-900">
        {/* Notch/Curve Effect Wrapper */}
        <div className="pt-16">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </div>
      </main>

      <div className="relative z-10 bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default App;
