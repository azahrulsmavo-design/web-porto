import React from 'react';
import { useTetrisTheme } from '../utils/themeUtils';

const Footer = () => {
    const theme = useTetrisTheme();

    return (
        <footer className={`py-10 mt-auto ${theme.sectionBg} transition-colors duration-300`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`
            border-t-[3px] pt-6 text-[0.7rem] sm:text-xs font-mono flex flex-col sm:flex-row items-center justify-between gap-4
            ${theme.isDark ? 'border-slate-800 text-slate-500' : 'border-slate-300 text-slate-500'}
          `}
                >
                    <span>
                        © {new Date().getFullYear()} Muhammad Azahrul Ramadhan. All rights reserved.
                    </span>
                    <span className="uppercase tracking-[0.2em] animate-pulse">
                        Insert coin to continue ▌
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
