import React, { useRef, useState } from 'react';
import { User, ShieldCheck } from 'lucide-react';

export default function HoloPortrait({
  caption = 'Built by Adeyemi Kehinde, RN Candidate',
  interactive = true,
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });

  function handleMouseMove(e) {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setCoords({ rotateX, rotateY, shineX, shineY });
  }

  function handleMouseLeave() {
    setCoords({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });
  }

  return (
    <div className="relative flex flex-col items-center justify-center p-4 [perspective:1000px]">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 w-full max-w-xs rounded-2xl border border-slate-200 bg-white p-4 shadow-xl transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dynamic Sheen */}
        <div 
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-40 transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle 200px at ${coords.shineX}% ${coords.shineY}%, rgba(255,255,255,0.9), transparent 70%)`,
          }}
        />

        {/* Clinical Portrait Canvas / Monogram */}
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1D2A59] text-white shadow-md">
            <User className="h-8 w-8 text-cyan-400" strokeWidth={1.8} />
          </div>

          <span className="mt-4 font-serif text-lg font-bold text-slate-800">
            Adeyemi Kehinde
          </span>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
            Registered Nurse Candidate
          </span>

          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-md border border-slate-200 bg-white/90 px-2 py-1 text-[10px] font-bold text-slate-700 shadow-2xs backdrop-blur-xs">
            <ShieldCheck className="h-3 w-3 text-cyan-700" strokeWidth={2.5} />
            <span>RN Verified</span>
          </div>
        </div>

        {caption && (
          <figcaption className="mt-3 text-center font-mono text-[11px] font-semibold text-slate-500">
            {caption}
          </figcaption>
        )}
      </div>
    </div>
  );
}