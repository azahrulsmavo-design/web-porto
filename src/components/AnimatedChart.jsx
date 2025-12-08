import React from 'react';
import { motion } from 'framer-motion';

const AnimatedChart = () => {
    return (
        <div className="w-64 h-48 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 flex flex-col justify-end relative overflow-hidden shadow-2xl">
            {/* Grid Lines */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="border-b border-white"></div>
                <div className="border-b border-white"></div>
                <div className="border-b border-white"></div>
                <div className="border-b border-white"></div>
            </div>

            {/* Bars */}
            <div className="flex items-end justify-between h-full gap-2 z-10">
                {[40, 70, 50, 90, 60].map((height, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                            duration: 1,
                            delay: i * 0.2,
                            ease: "backOut",
                            repeat: Infinity,
                            repeatDelay: 3,
                            repeatType: "reverse"
                        }}
                        className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-90"
                    />
                ))}
            </div>

            {/* Trend Line (overlay) */}
            <svg className="absolute inset-0 w-full h-full p-6 z-20 pointer-events-none overflow-visible">
                <motion.path
                    d="M 20 120 L 60 70 L 100 100 L 140 40 L 180 80"
                    fill="none"
                    stroke="#fbbf24" // Amber/Yellow
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: 1,
                        repeat: Infinity,
                        repeatDelay: 3.5
                    }}
                />
                {/* Floating Points */}
                <motion.circle cx="140" cy="40" r="4" fill="#fbbf24"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2, duration: 0.3, repeat: Infinity, repeatDelay: 4.7 }}
                />
            </svg>

            <div className="absolute top-4 left-4 text-xs font-mono text-blue-200 font-bold tracking-widest uppercase">
                Data Analysis
            </div>
        </div>
    );
};

export default AnimatedChart;
