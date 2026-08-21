import React from 'react';

export const JerseyLogo = ({ className = "h-10 w-10", showText = true }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative flex items-center justify-center rounded-full border-2 border-[#0A192F] bg-[#0A192F] p-1 text-white shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer circle with dots */}
          <circle cx="50" cy="50" r="46" stroke="white" strokeWidth="3" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="41" stroke="white" strokeWidth="1.5" />
          
          {/* Circular Text */}
          <path id="textPath" d="M 18,50 A 32,32 0 1,1 82,50 A 32,32 0 1,1 18,50" fill="none" />
          <text fill="white" fontSize="9" fontWeight="bold" letterSpacing="2">
            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
              JERSEYVILLA
            </textPath>
          </text>
          
          {/* Center Shield with Jersey & Crown */}
          <path d="M 32 36 L 50 28 L 68 36 L 68 58 Q 50 74 50 74 Q 50 74 32 58 Z" fill="#0A192F" stroke="white" strokeWidth="2" />
          {/* Striped pattern inside shield */}
          <path d="M 42 33 L 42 66 M 50 30 L 50 72 M 58 33 L 58 66" stroke="white" strokeWidth="2.5" />
          
          {/* Stars */}
          <path d="M 50 18 L 52 23 L 57 23 L 53 26 L 55 31 L 50 28 L 45 31 L 47 26 L 43 23 L 48 23 Z" fill="#D4AF37" />
        </svg>
      </div>

      {showText && (
        <span className="font-montserrat text-xl sm:text-2xl font-black tracking-tight text-[#0A192F]">
          JERSEYVILLA
        </span>
      )}
    </div>
  );
};
