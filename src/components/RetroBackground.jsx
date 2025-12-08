import React from 'react';

const RetroBackground = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full bg-[#0f0f1a] overflow-hidden text-neutral-200 selection:bg-cyan-500/30">

            {/* --- PARALLAX LAYER 1: THE GRID (FIXED) --- 
          Key: 'fixed inset-0'. This layer stays static while content scrolls.
      */}
            <div className="fixed inset-0 z-0 pointer-events-none">

                {/* 1. Grid Pattern with Fade Mask */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                {/* 2. Top Glow (Atmosphere) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen"></div>

                {/* 3. Floating Decorative Elements (Animation-based Parallax) */}
                <div className="absolute top-1/4 left-10 w-24 h-24 border-2 border-dashed border-cyan-500/20 rounded animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-40 w-4 h-4 bg-cyan-400/30 rounded-full blur-[2px] animate-ping"></div>

            </div>

            {/* --- CONTENT LAYER (SCROLLABLE) --- 
          'relative z-10' ensures content sits atop the fixed background.
      */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {children}
            </div>

        </div>
    );
};

export default RetroBackground;
