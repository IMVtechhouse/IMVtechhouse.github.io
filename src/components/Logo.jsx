import React from 'react';

export default function Logo({ size = 'default', showText = true, className = '' }) {
  const isLarge = size === 'large';
  const iconSize = isLarge ? 46 : 38;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric IMV Monogram on High-Contrast Card */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-all duration-300"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logoCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F8FAFC" />
            </linearGradient>
            <linearGradient id="logoCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>

          {/* Crisp White Card for High Visibility */}
          <rect width="120" height="120" rx="26" fill="url(#logoCardBg)" stroke="#38BDF8" strokeWidth="3" />

          {/* Letter 'I' (Deep Navy) */}
          <rect x="18" y="26" width="16" height="68" rx="4" fill="#091E42" />

          {/* Letter 'M' Left Stem (Deep Navy) */}
          <rect x="40" y="26" width="16" height="68" rx="4" fill="#091E42" />

          {/* 'M' Center Diagonal Down (Vibrant Cyan) */}
          <polygon points="54,26 71,68 83,68 66,26" fill="url(#logoCyan)" />

          {/* 'M' Center Diagonal Up (Deep Navy) */}
          <polygon points="71,68 88,26 100,26 83,68" fill="#091E42" />

          {/* Connected 'V' Chevron (Vibrant Electric Cyan & Navy) */}
          <polygon points="78,64 90,94 102,94 90,64" fill="#00B4D8" />
          <polygon points="90,94 102,94 112,26 100,26" fill="#091E42" />
        </svg>
      </div>

      {/* Brand Typography */}
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
