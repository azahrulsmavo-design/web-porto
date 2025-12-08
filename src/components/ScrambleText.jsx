import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const ScrambleText = ({ text, className, delay = 0, speed = 'fast', replay = true }) => {
    const [display, setDisplay] = useState(text);
    // Alphabet only as requested
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: !replay, margin: "-10%" });

    useEffect(() => {
        if (!isInView) return;

        const startTimeout = setTimeout(() => {
            let iterations = 0;
            // Faster settings
            const intervalDuration = speed === 'fast' ? 10 : 30; // 10ms for super fast
            const stepSize = speed === 'fast' ? 1 : 0.5; // Resolve 1 char per tick

            const interval = setInterval(() => {
                setDisplay(
                    text
                        .split('')
                        .map((char, index) => {
                            if (index < iterations) return text[index];
                            if (char === ' ') return ' '; // Preserve spaces
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                if (iterations >= text.length) clearInterval(interval);
                iterations += stepSize;
            }, intervalDuration);
            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(startTimeout);
    }, [text, isInView, delay, speed, replay]);

    return <span ref={ref} className={className}>{display}</span>;
};

export default ScrambleText;
