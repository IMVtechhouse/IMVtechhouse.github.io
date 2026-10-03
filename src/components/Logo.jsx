import React from 'react';

export default function Logo({ size = 'default', showText = true, className = '' }) {
  // Size variants
  const isLarge = size === 'large';
  const iconSize = isLarge ? 48 : 38;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric IMV Monogram SVG */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="imvCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="imvAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>

          {/* Background Card */}
          <rect width="120" height="120" rx="26" fill="#0C1322" stroke="url(#imvCyanGrad)" strokeWidth="2.5" strokeOpacity="0.4" />

          {/* Letter 'I' - Solid Vertical Bar */}
          <rect x="22" y="30" width="13" height="60" rx="3.5" fill="url(#imvCyanGrad)" />

          {/* Letter 'M' & 'V' Interlocking Geometry */}
          {/* M Left Stem */}
          <rect x="42" y="30" width="13" height="60" rx="3.5" fill="url(#imvCyanGrad)" />

          {/* M Central Diagonal Down: from (55, 30) down to (68, 64) */}
          <polygon 
            points="52,30 68,66 79,66 61,30" 
            fill="url(#imvAccentGrad)" 
          />

          {/* M Central Diagonal Up: from (68, 66) up to (85, 30) */}
          <polygon 
            points="68,66 85,30 96,30 79,66" 
            fill="url(#imvCyanGrad)" 
          />

          {/* Connected 'V' Right Diagonal: from (83, 62) down to (88, 90) and up to (104, 30) */}
          <polygon 
            points="76,64 88,90 100,90 87,62" 
            fill="url(#imvAccentGrad)" 
          />
          <polygon 
            points="88,90 100,90 108,30 96,30" 
            fill="url(#imvCyanGrad)" 
          />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className={`font-heading font-black tracking-tight text-white ${isLarge ? 'text-2xl' : 'text-xl'}`}>
              IMV<span className="text-cyan-400 font-medium">techHouse</span>
            </span>
          </div>
          <span className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold font-mono -mt-0.5">
            Software & Apps Studio
          </span>
        </div>
      )}
    </div>
  );
}
