import React, { useState, useEffect } from 'react';

const IconLoader = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 1800);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    };
  }, []);

  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Loader Logo</title>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6ff3ff" />
          <stop offset="100%" stopColor="#66ffd1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
        />
        {phase >= 1 && (
          <text x="50" y="45" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor">WELCOME</text>
        )}
        {phase >= 2 && (
          <text x="50" y="58" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="currentColor">TO MY PORTFOLIO</text>
        )}
        {phase >= 3 && (
          <circle cx="50" cy="50" r="20" stroke="url(#grad)" strokeWidth="3" fill="none" filter="url(#glow)" />
        )}
      </g>
    </svg>
  );
};

export default IconLoader;
