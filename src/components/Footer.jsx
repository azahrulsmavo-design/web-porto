import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-slate-500">
                    © {new Date().getFullYear()} Muhammad Azahrul Ramadhan. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
