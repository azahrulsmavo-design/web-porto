import React from 'react';
import { motion } from 'framer-motion';

const RevealTitle = ({ text, className = "" }) => {
    // Split text into words
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 40,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h2
            className={`flex flex-wrap gap-x-4 ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.h2>
    );
};

export default RevealTitle;
