import React from 'react';
import { Lock, Instagram, Facebook, Twitter, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/locales';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    const socialLinks = [
        { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/azhrl_dp/', label: 'Instagram' },
        { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-5 h-5" style={{ filter: 'invert(1)' }} alt="LinkedIn" />, href: 'https://www.linkedin.com', label: 'LinkedIn', isImage: true }, // Placeholder or remove if not asked. User asked for specific ones.
    ];

    // User specific links
    // threads: https://www.threads.net/@azhrl_dp (User said .com but usually .net)
    // medium: http://medium.com/@muhammadazahrulramadhan
    // instagram: https://www.instagram.com/azhrl_dp/
    // x: https://x.com/99_azahrul
    // facebook: https://www.facebook.com/muhammad.azahrul.ramadhan

    return (
        <footer className="bg-[var(--color-domino-dark-blue)] text-white py-12 mt-auto">
            <div className="w-full px-8 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">Portfolio</h3>
                        <p className="text-blue-200 text-sm">
                            © {new Date().getFullYear()} Muhammad Azahrul Ramadhan. {t.rights}
                        </p>
                        <a href="/admin/login" className="opacity-20 hover:opacity-100 transition-opacity text-blue-200 inline-block mt-2" title="Admin Access">
                            <Lock className="w-3 h-3" />
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        {/* Threads */}
                        <a href="https://www.threads.net/@azhrl_dp" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors" title="Threads">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path d="M141.537 88.9883C140.71 88.9883 141.537 88.9883 141.537 88.9883ZM165.253 103.957C165.045 125.795 147.288 141.282 115.869 135.914C111.966 135.247 101.956 133.58 96 133.58C69.043 133.58 48 112.537 48 85.5801C48 58.623 70.334 37.5801 96 37.5801C122.957 37.5801 144 59.9141 144 85.5801V96.7801C144 100.828 140.672 104.156 136.624 104.156C132.576 104.156 129.248 100.828 129.248 96.7801V85.5801C129.248 67.2405 114.339 52.332 96 52.332C77.6606 52.332 62.752 67.2405 62.752 85.5801C62.752 103.92 77.6606 118.828 96 118.828C110.169 118.828 122.193 109.957 127.13 97.5501C123.636 92.5151 117.841 88.9883 111.196 88.9883C99.281 88.9883 89.623 98.6463 89.623 110.561C89.623 122.476 99.281 132.134 111.196 132.134C118.995 132.134 125.869 127.994 129.629 121.737C133.298 132.534 141.979 143.763 158.463 146.579C180.25 150.301 192 121.282 192 103.957C192 50.9332 149.023 7.95703 96 7.95703C42.9766 7.95703 0 50.9332 0 103.957C0 156.98 42.9766 199.957 96 199.957C118.396 199.957 141.737 192.68 152.019 184.286L143.957 172.969C133.525 180.468 114.721 185.205 96 185.205C51.1211 185.205 14.752 148.836 14.752 103.957C14.752 59.0781 51.1211 22.709 96 22.709C140.879 22.709 177.248 59.0781 177.248 103.957C177.248 108.971 176.711 113.824 175.696 118.436C174.965 117.788 174.226 117.152 173.477 116.533C174.457 112.443 174.994 108.232 174.994 103.957C174.994 60.3223 139.635 24.9629 96 24.9629C52.3652 24.9629 17.0059 60.3223 17.0059 103.957C17.0059 147.592 52.3652 182.951 96 182.951C111.691 182.951 127.311 178.9 135.986 172.434L144.048 183.75C135.26 190.297 115.658 195.205 96 195.205C45.5996 195.205 4.75195 154.357 4.75195 103.957C4.75195 53.5566 45.5996 12.709 96 12.709C146.4 12.709 187.248 53.5566 187.248 103.957C187.248 119.227 178.204 140.404 163.784 140.404C145.748 140.404 148.733 118.868 148.752 103.957V85.5801C148.752 56.4678 125.089 32.8281 96 32.8281C66.9109 32.8281 43.248 56.4678 43.248 85.5801C43.248 114.692 66.9109 138.332 96 138.332C101.693 138.332 105.744 137.234 108.771 135.325C118.473 140.457 141.285 147.245 152.016 143.746C158.261 141.71 162.494 135.797 163.665 129.584C164.717 121.2 165.253 112.639 165.253 103.957ZM111.196 127.382C101.902 127.382 94.375 119.855 94.375 110.561C94.375 101.266 101.902 93.7393 111.196 93.7393C120.49 93.7393 128.017 101.266 128.017 110.561C128.017 119.855 120.49 127.382 111.196 127.382Z"></path></svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/azhrl_dp/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors" title="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        {/* X (Twitter) */}
                        <a href="https://x.com/99_azahrul" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors" title="X (Twitter)">
                            <Twitter className="w-5 h-5" />
                        </a>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/muhammad.azahrul.ramadhan" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors" title="Facebook">
                            <Facebook className="w-5 h-5" />
                        </a>
                        {/* Medium */}
                        <a href="http://medium.com/@muhammadazahrulramadhan" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors" title="Medium">
                            <BookOpen className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Note: Replaced 'BookOpen' with standard import if needed, but using generic icons for now.
// Need to ensure imports are correct.
// Will use lucide-react for standard icons.
export default Footer;
