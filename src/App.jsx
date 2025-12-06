import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickCharacter from './components/StickCharacter';
import { ThemeProvider } from './context/ThemeContext';
import { useTetrisTheme } from './utils/themeUtils';

const PortfolioLayout = () => {
  const theme = useTetrisTheme();
  const [cursor, setCursor] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = e.clientX / innerWidth;
    const y = e.clientY / innerHeight;
    setCursor({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`
        min-h-screen ${theme.sectionBg} ${theme.pageText}
        font-sans antialiased transition-colors duration-300
      `}
    >
      {/* 🔹 STICK CHARACTERS LEFT & RIGHT */}
      <StickCharacter side="left" cursor={cursor} theme={theme} />
      <StickCharacter side="right" cursor={cursor} theme={theme} />
      {/* Global background grid (subtle) */}
      <div className="fixed inset-0 -z-10 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <PortfolioLayout />
    </ThemeProvider>
  );
}

export default App;
