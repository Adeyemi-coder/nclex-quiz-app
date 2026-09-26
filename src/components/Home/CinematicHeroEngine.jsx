// src/components/home/CinematicHeroEngine.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  Activity, 
  Volume2, 
  VolumeX 
} from 'lucide-react';

export const CinematicHeroEngine = () => {
  const [scene, setScene] = useState(0);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [questionNum, setQuestionNum] = useState(18);
  const [isHovered, setIsHovered] = useState(false);
  const [userSelectedOption, setUserSelectedOption] = useState(null);
  const [userExpandedRationale, setUserExpandedRationale] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isVisibleRef = useRef(true);

  // Safeguard DOM node autoplay attributes
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('muted', '');
      video.play().catch(() => {});
    }
  }, []);

  // Pause playback when scrolled out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.25 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 14-Second Cinematic Loop Synchronization
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setScene(3);
      return;
    }

    let lastTime = performance.now();
    let frameId;

    const tick = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isHovered && isVisibleRef.current) {
        setElapsedMs((prev) => {
          const next = (prev + delta) % 14000;

          if (next < 2000) setScene(0);
          else if (next < 5000) setScene(1);
          else if (next < 8000) setScene(2);
          else if (next < 11000) setScene(3);
          else if (next < 13000) setScene(4);
          else setScene(5);

          if (prev > 13500 && next < 500) {
            setQuestionNum((q) => (q === 18 ? 19 : 18));
            setUserSelectedOption(null);
            setUserExpandedRationale(false);
          }

          return next;
        });
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isHovered]);

  const showCues = scene >= 1;
  const isSelected = userSelectedOption !== null ? userSelectedOption === 0 : scene >= 2;
  const showRationale = userExpandedRationale || scene >= 3;
  const showTelemetry = scene === 4;

  const currentSeconds = Math.max(0, 462 - Math.floor((elapsedMs / 1000) % 60));
  const formatTime = (s) => `07:${s < 10 ? '0' : ''}${s % 60}`;

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setUserSelectedOption(null);
        setUserExpandedRationale(false);
      }}
      className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-700/80 bg-[#071A3D] select-none"
    >
      {/* ========================================================
          BACKGROUND LAYER: Clinical Hospital Video Canvas
          ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=80"
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-85 contrast-125 scale-105"
        >
          <source 
            src="https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d7/Surgical_Operation_in_Hospital.webm/Surgical_Operation_in_Hospital.webm.720p.vp9.webm" 
            type="video/webm" 
          />
          <source 
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Deep Medical Grade Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D] via-[#071A3D]/80 to-[#071A3D]/60 backdrop-blur-[1px]" />
      </div>

      {/* Video Diagnostics Bar */}
      <div className="relative z-10 px-6 pt-4 flex items-center justify-between text-[11px] font-mono text-slate-300">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <span className="font-bold tracking-wider text-rose-300">LIVE WARD TELEMETRY</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">BED 04 TRAUMA RESUS</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              const video = videoRef.current;
              if (video) {
                video.muted = !video.muted;
                setVideoMuted(video.muted);
              }
            }}
            className="p-1 rounded bg-[#102D63]/70 hover:bg-[#102D63] text-slate-300 transition-colors pointer-events-auto"
            title={videoMuted ? "Unmute audio" : "Mute audio"}
          >
            {videoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
          </button>
        </div>
      </div>

      {/* ========================================================
          FOREGROUND LAYER: Active Examination Software Card
          ======================================================== */}
      <div className="relative z-10 p-5 sm:p-6 space-y-4">
        
        {/* Software Panel Surface */}
        <div className="bg-white/95 backdrop-blur-md border border-white/40 rounded-lg p-5 shadow-xl text-slate-900 transition-all duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="bg-[#071A3D] text-white px-2 py-0.5 rounded font-bold text-[10px]">
                ITEM {questionNum} / 150
              </span>
              <span className="text-slate-700 font-bold uppercase text-[11px]">Emergency Triage</span>
            </div>

            <div className="flex items-center gap-1.5 font-bold font-mono text-xs text-slate-900 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
              <Clock className="w-3 h-3 text-amber-600" />
              <span>{formatTime(currentSeconds)}</span>
            </div>
          </div>

          {/* Vignette with Clinical Cues */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="font-bold uppercase tracking-wider text-blue-700">
                Thoracic Trauma • Prioritization
              </span>
              <span className="text-slate-400">Single Best Response</span>
            </div>

            <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              A trauma patient arrives with severe dyspnea, tracheal deviation to the right, absent breath sounds over the left chest, and BP 70/40 mmHg. Which action must the nurse execute first?
            </p>

            {/* Cues Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                showCues ? 'bg-rose-100 text-rose-800 border border-rose-300' : 'bg-slate-100 text-slate-400'
              }`}>
                CUE: TRACHEAL DEVIATION
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                showCues ? 'bg-rose-100 text-rose-800 border border-rose-300' : 'bg-slate-100 text-slate-400'
              }`}>
                CUE: ABSENT BREATH SOUNDS
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                showCues ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-slate-100 text-slate-400'
              }`}>
                CUE: BP 70/40 SHOCK
              </span>
            </div>
          </div>

          {/* Options */}
          <div className="mt-3.5 space-y-2 text-xs">
            {[
              { text: 'Perform immediate needle chest decompression', priority: true },
              { text: 'Send the patient to radiology for an erect chest radiograph', priority: false },
              { text: 'Administer 40 mg IV furosemide for pulmonary congestion', priority: false },
              { text: 'Order an emergency 12-lead electrocardiogram (ECG)', priority: false }
            ].map((choice, i) => {
              const activeChoice = userSelectedOption !== null ? userSelectedOption === i : (i === 0 && isSelected);
              return (
                <div
                  key={i}
                  onClick={() => {
                    setUserSelectedOption(i);
                    setUserExpandedRationale(true);
                  }}
                  className={`p-2.5 rounded border flex items-center justify-between font-medium cursor-pointer transition-all ${
                    activeChoice
                      ? choice.priority
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-600'
                        : 'border-rose-600 bg-rose-50 text-rose-950 font-bold ring-1 ring-rose-600'
                      : 'border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-5 h-5 rounded flex items-center justify-center font-mono font-bold text-[10px] ${
                      activeChoice
                        ? choice.priority ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{choice.text}</span>
                  </div>

                  {activeChoice && choice.priority && (
                    <span className="text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1 uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>PRIORITY ACTION</span>
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Rationale Drawer */}
          <div 
            onClick={() => setUserExpandedRationale(!userExpandedRationale)}
            className={`mt-3.5 p-3 bg-slate-50 border border-slate-200 rounded text-xs leading-relaxed transition-all duration-300 ${
              showRationale ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            <div className="flex items-center justify-between text-emerald-800 font-bold font-mono text-[10px] uppercase mb-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Physiological Rationale</span>
              </span>
              <span className="text-slate-400">Click to dismiss</span>
            </div>
            <p className="text-[11px] text-slate-700">
              Tension pneumothorax produces fatal obstructive shock. Immediate needle decompression converts a life-threatening closed tension state into an open pneumothorax. Never delay decompression for confirmatory X-rays.
            </p>
          </div>
        </div>

        {/* Telemetry Card */}
        {showTelemetry && (
          <div className="bg-[#071A3D]/95 border border-[#102D63] text-white p-4 rounded-lg shadow-xl font-mono text-xs flex items-center justify-between animate-fade-in">
            <div>
              <span className="text-[10px] text-slate-400 uppercase block">Candidate Reasoning Metric</span>
              <div className="text-emerald-400 font-bold text-sm">+12% Emergency Accuracy</div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-amber-400 uppercase block">Adaptive Queue</span>
              <div className="text-white text-xs font-sans">10 Pharmacology Qs Next</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CinematicHeroEngine;