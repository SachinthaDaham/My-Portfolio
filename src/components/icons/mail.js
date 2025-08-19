import React from 'react';

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24" aria-hidden>
    <defs>
      <linearGradient id="gmailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ea4335" />
        <stop offset="50%" stopColor="#fbbc05" />
        <stop offset="100%" stopColor="#34a853" />
      </linearGradient>
    </defs>
    <rect x="4" y="8" width="40" height="30" rx="4" fill="none" stroke="url(#gmailGrad)" strokeWidth="3" />
    <path d="M6 12 L24 24 L42 12" fill="none" stroke="url(#gmailGrad)" strokeWidth="3" />
  </svg>
);

export default IconMail;


