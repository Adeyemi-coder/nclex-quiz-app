import React, { useRef, useState } from 'react';
import { User, ShieldCheck } from 'lucide-react';
import { useMouseTilt } from '../../hooks/useMouseTilt';
import Ken from '../../assets/Ken.png';

export default function HoloPortrait({
  imageSrc = Ken,
  caption = 'Built by Adeyemi Kehinde, RN Candidate',
  alt = 'Candidate Hero Portrait',
  showParticles = true,
  interactive = true,
}) {
  const cardRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const { rotateX, rotateY, shineX, shineY } = useMouseTilt(cardRef, {
    maxTilt: 8,
    enabled: interactive,
  });

  return (
    <div className="relative flex flex-col items-center justify-center p-4 [perspective:1000px]">
      
      {/* 1. Soft Ambient Back-Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -inset-2 rounded-3xl bg-cyan-500/10 opacity-60 blur-2xl transition-opacity duration-500"
      />

      {/* 2. Micro-Particle Atmosphere (Subtle medical ambient depth) */}
      {showParticles && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <span className="absolute top-4 left-6 h-1 w-1 rounded-full bg-cyan-400/40 blur-[0.5px] animate-pulse" />
          <span className="absolute bottom-8 right-10 h-1.5 w-1.5 rounded-full bg-amber-400/30 blur-[0.5px] animate-pulse [animation-delay:1s]" />
          <span className="absolute top-1/2 right-4 h-1 w-1 rounded-full bg-slate-300/30 blur-[0.5px]" />
          <span className="absolute bottom-4 left-1/3 h-1 w-1 rounded-full bg-cyan-300/30 blur-[0.5px] [animation-delay:2s]" />
        </div>
      )}

      {/* 3. 3D Tilt Card Container */}
      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-xs rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xl transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle Architectural Corner Ticks */}
        <div className="pointer-events-none absolute top-2 left-2 h-2.5 w-2.5 border-t-2 border-l-2 border-slate-300" />
        <div className="pointer-events-none absolute top-2 right-2 h-2.5 w-2.5 border-t-2 border-r-2 border-slate-300" />
        <div className="pointer-events-none absolute bottom-2 left-2 h-2.5 w-2.5 border-b-2 border-l-2 border-slate-300" />
        <div className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b-2 border-r-2 border-slate-300" />

        {/* Dynamic Specular Sheen (Driven by useMouseTilt) */}
        <div 
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-40 transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle 220px at ${shineX}% ${shineY}%, rgba(255,255,255,0.85), transparent 70%)`,
          }}
        />

        {/* Image Viewport Frame */}
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-100">
          {!imageError ? (
            <img
              src={imageSrc}
              alt={alt}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50 p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 shadow-xs">
                <User className="h-6 w-6 text-slate-500" strokeWidth={1.8} />
              </div>
              <span className="mt-3 font-mono text-xs font-semibold text-slate-700">Image Asset Missing</span>
              <p className="mt-1 font-mono text-[10px] text-slate-400 break-all">{imageSrc}</p>
            </div>
          )}

          {/* Verification Badge */}
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-md border border-white/40 bg-slate-900/80 px-2 py-1 text-[10px] font-bold text-white shadow-md backdrop-blur-xs">
            <ShieldCheck className="h-3 w-3 text-cyan-400" strokeWidth={2.5} />
            <span>RN Credentialed</span>
          </div>
        </div>

        {/* Credential Caption Footnote */}
        {caption && (
          <figcaption className="mt-3 text-center font-mono text-[11px] font-semibold tracking-tight text-slate-600">
            {caption}
          </figcaption>
        )}
      </div>

    </div>
  );
}