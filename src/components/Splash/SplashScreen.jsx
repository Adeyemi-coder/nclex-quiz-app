import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Stethoscope, Home, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SplashScreen({ onFinish }) {
  const [stage, setStage] = useState(0); // 0: init, 1: brand reveal, 2: button ready, 3: exiting
  const [isDismounted, setIsDismounted] = useState(false);
  const voicePlayedRef = useRef(false);
  const canvasRef = useRef(null);

  // 1. Safe, Professional Voice Welcome Protocol
  const playWelcomeSpeech = useCallback(() => {
    if (voicePlayedRef.current) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("Welcome to NCLEX Clinical Master.");
      utterance.rate = 0.92; // Calm, measured cadence
      utterance.pitch = 1.0;
      utterance.volume = 0.95;

      const voices = window.speechSynthesis.getVoices();
      // Prioritize natural, polished human English voices
      const preferred = voices.find(
        (v) => (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Karen') || v.name.includes('Google US English')))
      ) || voices.find((v) => v.lang === 'en-US' || v.lang === 'en-GB');

      if (preferred) utterance.voice = preferred;

      utterance.onstart = () => {
        voicePlayedRef.current = true;
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      // Gracefully handle browser autoplay blocks without popups
      voicePlayedRef.current = true;
    }
  }, []);

  // 2. Smooth Ambient Depth Particles (Micro-canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -Math.random() * 0.3 - 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) p.y = canvas.height;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 238, 220, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // 3. Precision 3.0s Choreography
  useEffect(() => {
    // 0.1s - Attempt voice
    const voiceTimer = setTimeout(() => {
      playWelcomeSpeech();
    }, 150);

    // 0.5s - Stage 1: Brand title and mark depth reveal
    const s1Timer = setTimeout(() => {
      setStage(1);
    }, 500);

    // 1.5s - Stage 2: Tactile 3D Home button appears
    const s2Timer = setTimeout(() => {
      setStage(2);
    }, 1500);

    // 3.2s - Stage 3: Smooth automatic forward exit into the Home workspace
    const autoExitTimer = setTimeout(() => {
      handleProceed();
    }, 3200);

    return () => {
      clearTimeout(voiceTimer);
      clearTimeout(s1Timer);
      clearTimeout(s2Timer);
      clearTimeout(autoExitTimer);
    };
  }, [playWelcomeSpeech]);

  // Handle immediate or automated transition
  const handleProceed = () => {
    if (stage === 3) return;
    playWelcomeSpeech(); // Backup execution if blocked earlier
    setStage(3);

    setTimeout(() => {
      setIsDismounted(true);
      if (onFinish) onFinish();
    }, 600);
  };

  if (isDismounted) return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome Splash Screen"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] select-none transition-all duration-700 ease-out ${
        stage === 3 ? 'opacity-0 scale-[1.03] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background: Subtle Indigo-to-Dark Ambient Depth Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 45%, #1D2A59 0%, #121B3B 55%, #0B1120 100%)'
        }}
      />

      {/* Floating Medical Micro-Particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 pointer-events-none opacity-60" 
      />

      {/* Subtle Center Specular Beam */}
      <div 
        className="absolute h-96 w-96 rounded-full pointer-events-none opacity-20 blur-3xl transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, #F4EEDC 0%, #283A78 60%, transparent 80%)',
          transform: stage >= 1 ? 'scale(1.2)' : 'scale(0.8)'
        }}
      />

      {/* Center Clinical Identity Container */}
      <div className="relative z-20 flex flex-col items-center px-6 text-center">
        
        {/* Layered 3D Beveled Medical Insignia */}
        <div 
          className={`relative mb-6 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl transition-all duration-700 ease-out ${
            stage >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}
          style={{
            background: 'linear-gradient(145deg, #24346E 0%, #17224A 100%)',
            boxShadow: `
              inset 0 1px 1px rgba(244, 238, 220, 0.35),
              inset 0 -2px 4px rgba(11, 17, 32, 0.8),
              0 12px 28px -6px rgba(0, 0, 0, 0.65),
              0 4px 12px rgba(29, 42, 89, 0.4)
            `,
            border: '1px solid rgba(221, 217, 204, 0.15)'
          }}
        >
          {/* Subtle Top Specular Rim */}
          <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#F4EEDC]/40 to-transparent" />
          
          <Stethoscope className="h-10 w-10 sm:h-11 sm:w-11 text-[#F4EEDC] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" strokeWidth={1.75} />

          {/* Verification Badge */}
          <div 
            className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-[#F4EEDC]/25 bg-[#283A78] text-[#F4EEDC]"
            style={{
              boxShadow: '0 3px 6px rgba(0,0,0,0.45)'
            }}
          >
            <ShieldCheck className="h-3.5 w-3.5 text-[#B89A5A]" strokeWidth={2.4} />
          </div>
        </div>

        {/* Typographic Identity Hierarchy */}
        <div 
          className={`flex flex-col items-center transition-all duration-700 delay-150 ease-out ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="text-[11px] font-semibold tracking-[0.28em] text-[#B89A5A] uppercase drop-shadow-xs">
            Clinical Licensure Architecture
          </span>

          <h1 className="mt-1.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#FBF8EF]">
            NCLEX <span className="font-light text-[#DDD9CC]/90">Clinical Master</span>
          </h1>

          <p className="mt-2 max-w-xs text-xs font-normal leading-relaxed text-[#DDD9CC]/70 sm:max-w-sm">
            NCSBN Next-Gen &amp; NMCN Licensure Environment
          </p>
        </div>

        {/* 3D TACTILE HOME BUTTON */}
        <div 
          className={`mt-10 transition-all duration-500 ease-out ${
            stage >= 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
          }`}
        >
          <button
            type="button"
            onClick={handleProceed}
            className="group relative inline-flex items-center gap-3 rounded-xl px-7 py-3 text-xs font-semibold tracking-wider uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B89A5A] focus:ring-offset-2 focus:ring-offset-[#0F172A] hover:-translate-y-0.5 active:translate-y-[1px]"
            style={{
              background: 'linear-gradient(180deg, #2D4085 0%, #1E2B5A 100%)',
              color: '#F4EEDC',
              border: '1px solid rgba(244, 238, 220, 0.22)',
              boxShadow: `
                0 1px 0 rgba(244, 238, 220, 0.3) inset,
                0 -2px 0 rgba(15, 23, 42, 0.8) inset,
                0 8px 20px -2px rgba(10, 15, 30, 0.75),
                0 3px 6px rgba(0, 0, 0, 0.5)
              `
            }}
          >
            {/* Subtle Light Reflection moving across the button on hover */}
            <div 
              aria-hidden="true" 
              className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
            >
              <div className="absolute -inset-full top-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[350%]" />
            </div>

            {/* Embedded 3D Home Icon */}
            <div 
              className="flex h-5 w-5 items-center justify-center rounded-md bg-[#162045]/60 text-[#F4EEDC] transition-colors group-hover:text-[#FBF8EF]"
              style={{
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <Home className="h-3.5 w-3.5" strokeWidth={2.2} />
            </div>

            <span className="font-semibold tracking-widest text-[#FBF8EF]">
              Enter Workspace
            </span>

            <ArrowRight className="h-3.5 w-3.5 text-[#B89A5A] transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.4} />
          </button>
        </div>

        {/* Minimal Progress Indicator Line */}
        <div 
          className={`mt-8 w-28 h-0.5 rounded-full overflow-hidden bg-[#1E2B5A] transition-opacity duration-500 ${
            stage >= 1 ? 'opacity-70' : 'opacity-0'
          }`}
        >
          <div 
            className="h-full bg-gradient-to-r from-[#B89A5A] to-[#F4EEDC] transition-all duration-[3000ms] ease-out"
            style={{ width: stage === 3 ? '100%' : stage >= 1 ? '85%' : '0%' }}
          />
        </div>

      </div>
    </div>
  );
}