import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const codeSnippet = `const azahrul = {
  role: "Data Scientist",
  skills: ["Python", "SQL"],
  passion: "Problem Solving",
  status: "Ready to Build"
};

return azahrul.createImpact();`;

const TypingCode = () => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + codeSnippet.charAt(index));
            index++;
            if (index >= codeSnippet.length) {
                clearInterval(intervalId);
                // Optional: Restart animation after delay?
                setTimeout(() => {
                    setDisplayedText('');
                    index = 0;
                    // Re-trigger by just letting effect exist? No, this is simple.
                    // For continuous loop, might need a more robust hook, but let's keep it simple: type once then wait.
                }, 5000);
            }
        }, 50); // Typing speed

        return () => clearInterval(intervalId);
        // This simple effect runs once on mount. To loop, we'd need dependency on a 'loop' state.
    }, []);

    // Better loop implementation
    const [text, setText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        let timeout;

        const typeChar = () => {
            if (currentIndex < codeSnippet.length) {
                setText(codeSnippet.slice(0, currentIndex + 1));
                currentIndex++;
                timeout = setTimeout(typeChar, 40); // 40ms per char
            } else {
                timeout = setTimeout(() => {
                    currentIndex = 0;
                    setText('');
                    typeChar();
                }, 3000); // Wait 3s before restarting
            }
        };

        typeChar();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="w-80 h-auto min-h-[14rem] bg-[#1e293b] rounded-xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm relative">
            {/* Window Header */}
            <div className="bg-slate-800 p-2 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-slate-400">script.js</span>
            </div>

            {/* Code Area */}
            <div className="p-4 text-blue-300 leading-relaxed whitespace-pre-wrap">
                {text}
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-blue-400 ml-1 align-middle"
                />
            </div>

            <div className="absolute bottom-2 right-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                Coding
            </div>
        </div>
    );
};

export default TypingCode;
