import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { title: 'Home', href: '/', type: 'page' },
        { title: 'About', href: '/#about', type: 'section' },
        { title: 'Skills', href: '/#skills', type: 'section' },
        { title: 'Cases', href: '/cases', type: 'page' },
        { title: 'Experience', href: '/#experience', type: 'section' },
        { title: 'Contact', href: '/#contact', type: 'section' },
    ];

    // Scroll Logic for visibility
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
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

    // Handle Hash Scrolling if landing on Home with a hash
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const handleNavigation = (link) => {
        setIsMenuOpen(false);
        if (link.type === 'section' && location.pathname !== '/') {
            // Should navigate to Home then scroll
            // Link component handles the URL change, useEffect handles the scroll
        } else if (link.type === 'section' && location.pathname === '/') {
            // Already on home, just scroll
            const element = document.getElementById(link.href.substring(2)); // remove '/#'
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="bg-white/90 backdrop-blur-md shadow-sm w-full px-8 py-4 flex justify-between items-center max-w-7xl mx-auto rounded-none lg:rounded-b-2xl mt-0">
                    <Link to="/" className="flex items-center gap-3 no-underline">
                        <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover border-2 border-slate-900" />
                        <span className="text-[1.25rem] font-bold text-slate-900 hidden sm:block">
                            Azahrul.
                        </span>
                    </Link>

                    <nav className="hidden lg:flex gap-8 items-center">
                        {navLinks.map((link) => {
                            // Determine if active
                            const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname + location.hash === link.href);

                            return (
                                <Link
                                    key={link.title}
                                    to={link.href}
                                    onClick={() => handleNavigation(link)}
                                    className={`font-medium transition-colors duration-300 no-underline text-sm uppercase tracking-wide cursor-pointer ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                                        }`}
                                >
                                    {link.title}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">
                            <Button href="#contact">HIRE ME</Button>
                        </div>

                        <button
                            className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[99] bg-white pt-24 px-8">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.href}
                                onClick={() => handleNavigation(link)}
                                className="text-2xl font-bold text-slate-900"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;
