import { useTheme } from '../context/ThemeContext';

export const useTetrisTheme = () => {
    const { isDark } = useTheme();

    return {
        sectionBg: isDark ? 'bg-slate-950' : 'bg-slate-100',
        pageText: isDark ? 'text-slate-100' : 'text-slate-900',
        textPrimary: isDark ? 'text-lime-300' : 'text-emerald-800',
        textSecondary: isDark ? 'text-slate-300' : 'text-slate-700',
        accent: isDark ? 'text-cyan-300' : 'text-sky-700',
        frameBg: isDark ? 'bg-slate-900/95' : 'bg-slate-50/95',
        frameBorder: isDark ? 'border-slate-700' : 'border-slate-300',
        frameShadow: 'shadow-[0_0_0_2px_rgba(15,23,42,0.7),12px_14px_0_0_rgba(15,23,42,1)]',
        subCardBg: isDark ? 'bg-slate-900/80' : 'bg-slate-100',
        subCardBorder: isDark ? 'border-slate-700' : 'border-slate-300',
        chipBg: isDark ? 'bg-slate-800' : 'bg-slate-200',
        chipText: isDark ? 'text-slate-100' : 'text-slate-800',
        pixelButtonPrimary: isDark
            ? 'bg-gradient-to-br from-lime-400 to-emerald-400 text-slate-950 border-lime-600 shadow-[5px_6px_0_0_rgba(22,163,74,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_4px_0_0_rgba(22,163,74,1)]'
            : 'bg-gradient-to-br from-emerald-600 to-emerald-500 text-emerald-50 border-emerald-900 shadow-[5px_6px_0_0_rgba(6,95,70,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_4px_0_0_rgba(6,95,70,1)]',
        pixelButtonSecondary: isDark
            ? 'bg-slate-900 text-slate-100 border-slate-500 shadow-[4px_5px_0_0_rgba(148,163,184,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_3px_0_0_rgba(148,163,184,1)]'
            : 'bg-white text-slate-800 border-slate-400 shadow-[4px_5px_0_0_rgba(148,163,184,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_3px_0_0_rgba(148,163,184,1)]',
        isDark
    };
};
