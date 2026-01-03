import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/locales';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].navbar;

    const navLinks = [
        { title: t.home, href: '/', type: 'page' },
        { title: t.about, href: '/#about', type: 'section' },
        { title: t.cases, href: '/cases', type: 'page' },
        { title: t.personal, href: '/personal', type: 'page' },
        { title: t.quotes, href: '/daily-post', type: 'page' },
    ];

    // Scroll Logic for visibility
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
                setIsVisible(false);
                setIsMenuOpen(false); // Close menu on scroll down
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
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="relative bg-white/90 backdrop-blur-md shadow-sm w-full px-5 py-3 md:px-8 md:py-4 flex justify-between items-center max-w-7xl mx-auto rounded-none lg:rounded-b-2xl mt-0">
                <Link to="/" className="flex items-center gap-3 no-underline">
                    <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover border-2 border-slate-900" />
                    <span className="text-[1.25rem] font-bold text-slate-900 hidden sm:block">
                        Azahrul.
                    </span>
                </Link>

                <nav className="hidden lg:flex gap-8 items-center">
                    {navLinks.map((link) => {
                        // Determine if active
                        const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

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
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors uppercase"
                    >
                        {language === 'en' ? 'ID' : 'EN'}
                    </button>

                    <div className="hidden lg:block">
                        <Button href="#contact">{t.hireMe}</Button>
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

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-5 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden lg:hidden"
                        >
                            <nav className="flex flex-col">
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                                    return (
                                        <Link
                                            key={link.title}
                                            to={link.href}
                                            onClick={() => handleNavigation(link)}
                                            className={`px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-50 ${isActive ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'
                                                }`}
                                        >
                                            {link.title}
                                        </Link>
                                    );
                                })}
                                <div className="border-t border-slate-100 mt-1 pt-1 pb-1 px-2">
                                    <Button href="#contact" className="w-full text-center text-xs py-2 justify-center">
                                        {t.hireMe}
                                    </Button>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
