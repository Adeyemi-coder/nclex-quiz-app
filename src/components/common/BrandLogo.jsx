// src/components/common/BrandLogo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function BrandLogo({ to = '/', showSubtitle = true }) {
  return (
    <Link to={to} className="flex items-center gap-3.5 group select-none py-1">
      {/* Precision Geometric Mark */}
      <div className="w-10 h-10 bg-[#1D2A59] rounded-xl flex items-center justify-center p-2 shadow-sm group-hover:scale-105 transition-transform duration-200">
        <svg viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#F4F1E8" d="M 0,110 L 0,38 L 38,0 L 38,72 L 74,72 L 74,110 Z" />
          <path fill="#F4F1E8" d="M 46,0 L 84,0 L 120,36 L 120,74 L 82,74 L 82,38 L 46,38 Z" />
          <rect fill="#F4F1E8" x="46" y="46" width="28" height="28" rx="3" />
        </svg>
      </div>

      {/* Structured Wordmark Lockup */}
      <div className="flex flex-col">
        <span className="font-black text-lg text-[#1D2A59] tracking-[0.12em] leading-none">
          NCLEX
        </span>
        {showSubtitle && (
          <span className="text-[10px] font-bold text-[#1D2A59]/75 tracking-[0.32em] uppercase mt-1 leading-none">
            CLINICAL MASTER
          </span>
        )}
      </div>
    </Link>
  );
}

export default BrandLogo;