import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onFinish }) {
  const [fadingOut, setFadingOut] = useState(false);

 useEffect(() => {
    // 1. Hold on screen for 4.0 seconds (was 2.5s)
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 4000);

    // 2. Unmount after fade-out transition finishes at 4.6 seconds
    const exitTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 4600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);
  return (
    <div className={`clinical-splash-viewport ${fadingOut ? 'splash-exit' : ''}`}>
      {/* Background Volumetric Mesh & Vignette */}
      <div className="splash-ambient-mesh" />
      <div className="splash-radial-light" />

      {/* Main 3D Composition Stage */}
      <div className="splash-stage-3d">
        {/* Ambient Depth Micro-Particles */}
        <div className="splash-depth-particles" aria-hidden="true">
          <span className="particle p-1">+</span>
          <span className="particle p-2">✦</span>
          <span className="particle p-3">+</span>
          <span className="particle p-4">✦</span>
          <span className="particle p-5">+</span>
        </div>

        {/* Orbiting Glass Clinical Glyphs */}
        <div className="floating-elements-orbit" aria-hidden="true">
          {/* Subtle DNA Strand Loop */}
          <div className="orbit-item dna-glyph">
            <svg viewBox="0 0 40 40" fill="none" className="dna-svg">
              <path d="M8 12C14 12 16 28 22 28C28 28 30 12 36 12" stroke="rgba(56, 189, 248, 0.45)" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 28C14 28 16 12 22 12C28 12 30 28 36 28" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="2" strokeLinecap="round" />
              <line x1="14" y1="18" x2="14" y2="22" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" />
              <line x1="22" y1="12" x2="22" y2="28" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
              <line x1="30" y1="18" x2="30" y2="22" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Precision Stethoscope Silhouette */}
          <div className="orbit-item steth-glyph">
            <svg viewBox="0 0 44 44" fill="none" className="steth-svg">
              <path d="M12 8V18C12 23.5228 16.4772 28 22 28C27.5228 28 32 23.5228 32 18V8" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M22 28V33C22 35.2091 23.7909 37 26 37H28" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="31" cy="37" r="3.5" stroke="rgba(56, 189, 248, 0.85)" strokeWidth="2" fill="rgba(6, 182, 212, 0.2)" />
              <circle cx="12" cy="7" r="2" fill="rgba(255, 255, 255, 0.7)" />
              <circle cx="32" cy="7" r="2" fill="rgba(255, 255, 255, 0.7)" />
            </svg>
          </div>
        </div>

        {/* The Central 3D Medical Cross Core */}
        <div className="medical-monolith-anchor">
          <div className="glass-monolith-slab">
            {/* Front Prismatic Layer */}
            <div className="slab-face slab-front">
              {/* Embossed Medical Plus */}
              <div className="cross-geometry">
                <div className="cross-beam vertical" />
                <div className="cross-beam horizontal" />
              </div>

              {/* Glowing Real-Time Vector ECG Ribbon */}
              <div className="ecg-track-frame">
                <svg viewBox="0 0 240 60" className="ecg-svg" preserveAspectRatio="none">
                  <path
                    className="ecg-pulse-shadow"
                    d="M 0 30 L 75 30 L 85 24 L 95 34 L 105 30 L 115 8 L 125 52 L 135 26 L 145 34 L 155 30 L 240 30"
                  />
                  <path
                    className="ecg-pulse-laser"
                    d="M 0 30 L 75 30 L 85 24 L 95 34 L 105 30 L 115 8 L 125 52 L 135 26 L 145 34 L 155 30 L 240 30"
                  />
                </svg>
              </div>

              <div className="slab-lens-glare" />
            </div>

            {/* Simulated 3D Specular Extrusion & Ground Reflection */}
            <div className="slab-extrusion-depth" />
          </div>

          <div className="monolith-pedestal-shadow" />
        </div>

        {/* Central Typographic Lockup */}
        <div className="splash-brand-lockup">
          <h1 className="splash-app-title">
            NCLEX <span className="title-emphasis">Clinical Master</span>
          </h1>
          <p className="splash-tagline">
            Think Like a Nurse. Answer Like a Clinician.
          </p>
        </div>
      </div>
    </div>
  );
}