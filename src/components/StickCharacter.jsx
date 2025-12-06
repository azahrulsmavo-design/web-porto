import React from 'react';
import { motion } from 'framer-motion';

const StickCharacter = ({ side, cursor }) => {
    // Base position
    const baseX = side === 'left' ? 0.08 : 0.92;
    const baseY = 0.65;

    const dx = cursor.x - baseX;
    const dy = cursor.y - baseY;

    // Clamp helper
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    // Pupil movement
    const eyeOffsetX = clamp(dx * 12, -5, 5);
    const eyeOffsetY = clamp(dy * 10, -4, 4);

    // Body rotation (subtle lean towards mouse)
    const leanAngle = clamp(dx * 15, -10, 10);

    return (
        <div
            className={`
        fixed top-1/2 -translate-y-1/2
        ${side === 'left' ? 'left-4 sm:left-8' : 'right-4 sm:right-8'}
        pointer-events-none z-30
      `}
        >
            <motion.div
                animate={{ rotate: leanAngle }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                className="relative w-24 h-24 sm:w-28 sm:h-28"
            >
                {/* HAIR / FEATHERS */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-6 bg-red-600 rounded-full rotate-[-15deg] origin-bottom border-2 border-red-800" />
                <div className="absolute -top-3 left-1/2 -translate-x-1/3 w-4 h-5 bg-red-600 rounded-full rotate-[15deg] origin-bottom border-2 border-red-800" />

                {/* BODY (MAIN CIRCLE) */}
                <div className="absolute inset-0 bg-red-600 rounded-full border-[3px] border-red-900 shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.2),0_6px_10px_rgba(0,0,0,0.5)] overflow-hidden">
                    {/* BELLY */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-red-100 rounded-t-full opacity-80 blur-[1px]" />
                </div>

                {/* FACE CONTAINER */}
                <div className="absolute inset-0">

                    {/* EYEBROWS (Unibrow feel) */}
                    <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[60%] h-4 flex justify-center z-20">
                        <div className="w-1/2 h-full bg-black rotate-[15deg] translate-y-1 rounded-sm" />
                        <div className="w-1/2 h-full bg-black rotate-[-15deg] translate-y-1 rounded-sm" />
                    </div>

                    {/* EYES */}
                    <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[65%] flex justify-between px-1 z-10">
                        {/* Left Eye */}
                        <div className="relative w-9 h-9 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                            <motion.div
                                animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                                className="w-3 h-3 bg-black rounded-full"
                            />
                        </div>
                        {/* Right Eye */}
                        <div className="relative w-9 h-9 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                            <motion.div
                                animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                                className="w-3 h-3 bg-black rounded-full"
                            />
                        </div>
                    </div>

                    {/* BEAK */}
                    <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-6 h-6 z-20">
                        {/* Upper beak */}
                        <div className="absolute top-0 w-full h-4 bg-yellow-400 rounded-t-lg border border-yellow-600 clip-path-triangle" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
                        {/* Simple CSS triangle approach for beak */}
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-yellow-400 absolute top-0 left-1/2 -translate-x-1/2 drop-shadow-md"></div>
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-amber-600 absolute top-[10px] left-1/2 -translate-x-1/2"></div>
                    </div>

                    {/* CHEEK SPOTS */}
                    <div className="absolute top-[55%] left-2 w-3 h-3 bg-red-800/30 rounded-full blur-[1px]" />
                    <div className="absolute top-[55%] right-2 w-3 h-3 bg-red-800/30 rounded-full blur-[1px]" />

                </div>
            </motion.div>
        </div>
    );
};

export default StickCharacter;
