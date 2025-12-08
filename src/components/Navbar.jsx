import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Skills', href: '#skills' },
        { title: 'Projects', href: '#projects' },
        { title: 'Experience', href: '#experience' },
        { title: 'Contact', href: '#contact' },
    ];

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Smart Navbar Logic:
            // Show if scrolling UP or at the very top (< 10px)
            // Hide if scrolling DOWN and > 10px
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Sliding Navbar Part (Background + Links + Logo) */}
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="bg-white/90 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.1)] w-full px-8 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#home" className="text-[1.5rem] font-bold text-[var(--color-domino-blue)] no-underline">
                        Portfolio
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-[var(--color-domino-text-light)] font-medium hover:text-[var(--color-domino-blue)] transition-colors duration-300 no-underline text-sm uppercase tracking-wide"
                            >
                                {link.title}
                            </a>
                        ))}
                    </nav>

                    {/* Spacer for the fixed button to sit in */}
                    <div className="hidden lg:block w-[120px]"></div>
                    <div className="lg:hidden w-8"></div>
                </div>
            </header>

            {/* Persistent Button Layer (Fixed, never hides) */}
            <div className="fixed top-0 right-0 z-[101] p-4 px-8 pointer-events-none w-full flex justify-end">
                {/* 
                  Wrapper for button that catches pointer events. 
                  Added a small transclucent bg only when navbar is hidden to ensure contrast? 
                  User said: "biarkan stay".
                */}
                <div className="pointer-events-auto flex items-center gap-4">
                    {/* HIRE ME Button (Desktop) */}
                    <a
                        href="#contact"
                        className={`btn btn-primary hidden lg:inline-flex shadow-xl transition-all duration-300 ${!isVisible ? 'translate-y-2' : ''}`}
                    >
                        HIRE ME
                    </a>

                    {/* Mobile Menu Button (Always visible too) */}
                    <button
                        className={`lg:hidden pointer-events-auto p-2 rounded-full transition-all duration-300 ${!isVisible ? 'bg-white/90 shadow-lg' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6 text-[var(--color-domino-text-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[99] bg-white pt-24 px-8">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl font-bold text-[var(--color-domino-text-dark)]"
                            >
                                {link.title}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;
