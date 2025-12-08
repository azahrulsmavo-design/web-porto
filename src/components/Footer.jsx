import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-domino-dark-blue)] text-white py-12 mt-auto">
            <div className="w-full px-8 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">Portfolio</h3>
                        <p className="text-blue-200 text-sm">
                            © {new Date().getFullYear()} Muhammad Azahrul Ramadhan. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
