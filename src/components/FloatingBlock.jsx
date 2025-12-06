import React from 'react';
import { motion } from 'framer-motion';

const FloatingBlock = ({
    className = '',
    colors,
    duration = 9,
    delay = 0,
    reverse,
    cursor = { x: 0.5, y: 0.5 },
    parallax = 40,
}) => {
    // normalize cursor: 0..1 -> -0.5..0.5
    const offsetX = (cursor.x - 0.5) * parallax;
    const startY = reverse ? -40 : -20;
    const endY = reverse ? 80 : 100;

    return (
        <div
            className={`absolute ${className}`}
            style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
        >
            <motion.div
                style={{
                    x: offsetX, // Follow cursor (parallax)
                    transformStyle: 'preserve-3d',
                    boxShadow: '8px 10px 18px rgba(15,23,42,0.75)',
                }}
                initial={{
                    y: startY,
                    rotateX: reverse ? -10 : 8,
                    rotateY: reverse ? 12 : -12,
                    rotateZ: reverse ? 4 : -4,
                }}
                animate={{
                    y: [startY, endY], // Continuous fall
                    rotateX: reverse ? [-10, -4, -10] : [8, 12, 8],
                    rotateY: reverse ? [12, 6, 12] : [-12, -6, -12],
                    rotateZ: reverse ? [4, 1, 4] : [-4, -1, -4],
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay,
                    ease: 'linear',
                }}
                className="grid gap-0.5 p-1 rounded-md bg-slate-900/70 border border-slate-700/70"
            >
                {colors.map((c, i) => (
                    <div
                        key={i}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-[3px] ${c}`}
                        style={{
                            boxShadow:
                                'inset 0 0 0 1px rgba(15,23,42,0.6), 0 3px 0 rgba(15,23,42,0.8)',
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default FloatingBlock;
