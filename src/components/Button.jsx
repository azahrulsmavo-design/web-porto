import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Button = ({ href, children, className = "", onClick, variant = 'primary', size = 'md' }) => {
    const isInternal = href && href.startsWith('/');
    const isPrimary = variant === 'primary';

    // COLORS
    const THEME_BLACK = '#0f172a'; // slate-900
    const THEME_WHITE = '#ffffff';

    // BASE CONFIG (Static Base, No Animation on these props)
    const containerClasses = isPrimary
        ? 'bg-slate-900 border border-slate-900'
        : 'bg-transparent border border-slate-900';

    // WAVE CONFIG
    const waveColor = 'bg-white';

    // TEXT/ICON CONTRAST
    // Primary: White Text (on Black) -> Black Text (on White Wave)
    // Outline: Black Text (on Transp) -> Black Text (on White Wave) ... wait.
    // Outline Interaction:
    // Base: Transparent (White BG behind it usually) -> Text is Black.
    // Hover: White Wave fills it -> Text MUST be Black?
    // If text stays Black on White Wave, there IS NO color change for text in Outline mode?
    // User said: "Perubahan warna HANYA pada title... dan anak panah".
    // So Text SHOULD change.
    // If Outline Text is Black -> Black... it doesn't change.
    // Maybe Outline should start with different text?
    // Or maybe the Wave for Outline should be different?
    // BUT User said "Tidak ada perubahan warna pada buttonnya".

    // Let's stick to the Classic High Contrast:
    // Primary: White -> Black.
    // Outline: Black -> Black (No change? Or maybe turns Blue?)
    // Let's make Text turn Black (Slate-900) always on Hover (since Wave is White).

    const initialTextColor = isPrimary ? THEME_WHITE : THEME_BLACK;
    const hoverTextColor = THEME_BLACK;

    const initialArrowColor = isPrimary ? 'text-white' : 'text-slate-900';
    const hoverArrowColor = 'text-slate-900';

    // CONFIG BASED ON SIZE
    const sizeClasses = size === 'sm'
        ? 'px-6 py-2 min-w-[130px]'
        : 'px-10 py-3 min-w-[170px]';

    const textSize = size === 'sm' ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm';
    const iconSize = size === 'sm' ? 16 : 20;

    // ANIMATION
    const DURATION = 0.5;

    const containerVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.02 }
    };

    const waveVariants = {
        rest: {
            scale: 0,
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" } // Subside
        },
        hover: {
            scale: 35,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 25 } // Explode
        }
    };

    const arrowRightVariants = {
        rest: { x: 0, opacity: 1 },
        hover: { x: 20, opacity: 0, transition: { duration: DURATION } }
    };

    const arrowLeftVariants = {
        rest: { x: -20, opacity: 0 },
        hover: { x: 0, opacity: 1, transition: { duration: DURATION, delay: 0.1 } }
    };

    const textVariants = {
        rest: {
            x: -6,
            color: initialTextColor,
            transition: { duration: DURATION }
        },
        hover: {
            x: 6,
            color: hoverTextColor,
            transition: { duration: 0.2, delay: 0.1 }
        }
    };

    const Content = () => (
        <>
            {/* WAVE */}
            <motion.div
                className={`absolute left-1/2 top-1/2 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 ${waveColor}`}
                variants={waveVariants}
            />

            {/* CONTENT */}
            <div className={`relative z-10 flex items-center justify-center gap-1 ${sizeClasses}`}>
                <motion.div variants={arrowLeftVariants} className={`absolute left-5 ${hoverArrowColor}`}>
                    <ArrowUpRight size={iconSize} />
                </motion.div>

                <motion.span variants={textVariants} className={`font-bold uppercase tracking-widest ${textSize}`}>
                    {children}
                </motion.span>

                <motion.div variants={arrowRightVariants} className={`absolute right-5 ${initialArrowColor}`}>
                    <ArrowUpRight size={iconSize} />
                </motion.div>
            </div>
        </>
    );

    const MotionWrapper = ({ ...props }) => (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={containerVariants}
            className={`relative overflow-hidden rounded-2xl inline-block ${containerClasses} ${className}`}
            {...props}
        >
            <Content />
        </motion.div>
    );

    if (isInternal) {
        return (
            <Link to={href} className="inline-block focus:outline-none">
                <MotionWrapper />
            </Link>
        );
    }

    return (
        <a href={href} onClick={onClick} className="inline-block focus:outline-none">
            <MotionWrapper />
        </a>
    );
};

export default Button;
