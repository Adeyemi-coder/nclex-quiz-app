// src/components/home/FullScreenHospitalCinema.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Maximize2 
} from 'lucide-react';

export const FullScreenHospitalCinema = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [stage, setStage] = useState(0); // 0=CUE, 1=PRIORITY, 2=ACTION, 3=RATIONALE
  const [progress, setProgress] = useState(0);

  // Synchronized cinematic text sequence timed to the video loop (12 seconds cycle)
  useEffect(() => {
    if (!isOpen) return;

    let startTime = performance.now();
    let frameId;

    const tick = (now) => {
      const elapsed = (now - startTime) % 12000;
      setProgress((elapsed / 12000) * 100);

      if (elapsed < 3000) {
        setStage(0); // Stage 1: Recognition of acute decompensation
      } else if (elapsed < 6000) {
        setStage(1); // Stage 2: Emergency triage prioritization
      } else if (elapsed < 9000) {
        setStage(2); // Stage 3: Immediate procedural action
      } else {
        setStage(3); // Stage 4: Mechanistic physiological rationale
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isOpen]);

  // Handle ESC key to dismiss
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const stageData = [
    {
      step: 'STAGE 01 // CLINICAL RECOGNITION',
      headline: 'Acute Thoracic Trauma Detected.',
      subtext: 'Tracheal displacement to right hemithorax • Absent breath sounds • BP 70/40 mmHg.',
      tag: 'TENSION PNEUMOTHORAX SUSPECTED'
    },
    {
      step: 'STAGE 02 // PRIORITY HIERARCHY',
      headline: 'Differentiate Obstructive Shock.',
      subtext: 'Preload collapse imminent. Do not delay for diagnostic imaging or transport.',
      tag: 'AIRWAY / BREATHING PRIORITY'
    },
    {
      step: 'STAGE 03 // PROCEDURAL ACTION',
      headline: 'Immediate Needle Thoracostomy.',
      subtext: 'Decompress 2nd intercostal space, midclavicular line. Convert to open pneumothorax.',
      tag: 'MECHANICAL PRE-ARREST PROTOCOL'
    },
    {
      step: 'STAGE 04 // EVIDENCE-BASED RATIONALE',
      headline: 'Restoration of Cardiac Preload.',
      subtext: 'Intrapleural pressure relieved. Venous return to right atrium restored.',
      tag: 'VERIFIED COUNCIL COMPETENCY'
    }
  ];

  const currentStage = stageData[stage];

  const handleStartPracticing = () => {
    onClose();
    navigate('/dashboard');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-500 animate-fade-in select-none">
      
      {/* 1. Background Full-Screen 4K/HD Hospital Emergency B-Roll */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover object-center filter saturate-80 contrast-115 scale-105 transition-transform duration-1000"
        >
          {/* Real trauma resuscitation, clinical nursing & emergency surgical room footage */}
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-surgeons-performing-an-operation-in-an-operating-room-41551-large.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Deep Clinical Vignette & Gradient Shrouds to ensure 100% text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D] via-[#071A3D]/70 to-[#071A3D]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,26,61,0.7)_100%)]" />
      </div>

      {/* 2. Top Cinema Control Bar */}
      <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between z-20 font-mono text-xs text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
          </div>
          <span className="font-bold tracking-wider text-rose-300">LIVE CLINICAL IMMERSION</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300 hidden sm:inline">TRAUMA EMERGENCY UNIT 04</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition-colors"
            title={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
          
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs font-bold text-xs flex items-center gap-1.5 transition-colors border border-white/10"
          >
            <span>Exit Cinema (ESC)</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Center Screen Cinematic Typography & Sequence Storyteller */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        
        {/* Animated Phase Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/10 border border-white/20 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase backdrop-blur-md animate-pulse">
          <Activity className="w-3.5 h-3.5 text-blue-400" />
          <span>{currentStage.step}</span>
        </div>

        {/* Dynamic Synchronized Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
          {currentStage.headline}
        </h2>

        {/* Supporting Clinical Rationale Description */}
        <p className="text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
          {currentStage.subtext}
        </p>

        {/* Clinical Alert Chip */}
        <div className="inline-block px-3 py-1 rounded bg-rose-500/20 border border-rose-500/40 text-rose-300 font-mono text-[11px] font-bold tracking-wider">
          {currentStage.tag}
        </div>

        {/* Progress Tracker Line across bottom of text */}
        <div className="w-48 sm:w-64 mx-auto bg-white/20 h-1 rounded-full overflow-hidden mt-6">
          <div 
            style={{ width: `${progress}%` }} 
            className="bg-blue-400 h-full rounded-full transition-all duration-100 ease-linear shadow-[0_0_8px_rgba(96,165,250,0.8)]"
          />
        </div>

        {/* Primary Action Button */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleStartPracticing}
            className="px-6 py-3.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Enter Examination Engine</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="px-6 py-3.5 rounded border border-white/30 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors backdrop-blur-xs"
          >
            Return to Homepage
          </button>
        </div>
      </div>

      {/* 4. Bottom Clinical Telemetry Strip */}
      <div className="absolute bottom-0 inset-x-0 p-6 hidden md:flex items-center justify-between z-20 font-mono text-[11px] text-slate-400 border-t border-white/10 bg-black/40 backdrop-blur-xs">
        <div>COUNCIL ALIGNED: NMCN PROFESSIONAL QUALIFYING STANDARDS</div>
        <div className="flex items-center gap-4 text-slate-300">
          <span>SPATIAL AUDIO: STEREO VIRTUAL</span>
          <span>•</span>
          <span>RESOLUTION: 1080P CLINICAL</span>
        </div>
      </div>

    </div>
  );
};

export default FullScreenHospitalCinema;