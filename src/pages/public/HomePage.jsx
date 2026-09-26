// src/pages/public/HomePage.jsx
//
// Requires: npm install framer-motion
//
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { QuestionOfTheDay } from '../../components/QuestionOfTheDay';
import { useCountUp } from '../../hooks/useCountUp';
import {
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Scroll-reveal wrapper. Skips animation entirely under prefers-reduced-motion.
// ---------------------------------------------------------------------------
function Reveal({ children, className = '', delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Highlighted clinical cue — plain text until the hero's "cues" step, then
// takes on a highlighted style. Purely presentational.
// ---------------------------------------------------------------------------
function Cue({ active, children }) {
  return (
    <span
      className="transition-colors duration-500 rounded px-0.5"
      style={{
        backgroundColor: active ? 'rgba(16,185,129,0.15)' : 'transparent',
        color: active ? '#065F46' : 'inherit',
        fontWeight: active ? 700 : 700,
      }}
    >
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------------
// LOGIN MODAL — gates any action that requires an account.
// ---------------------------------------------------------------------------
function LoginModal({ open, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-sm bg-white rounded-lg shadow-2xl p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h2 id="login-modal-title" className="text-lg font-black text-slate-900 tracking-tight">
              Log in to continue
            </h2>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Log in or create a free account to start practising and see the full question banks.
            </p>

            <form
              className="mt-6 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                navigate('/login');
              }}
            >
              <div className="space-y-1">
                <label htmlFor="login-email" className="text-xs font-bold text-slate-700 block">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#071A3D] focus:border-transparent"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="login-password" className="text-xs font-bold text-slate-700 block">
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-3 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#071A3D] focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded bg-[#071A3D] hover:bg-[#102D63] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Log In
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-4 text-center">
              New here?{' '}
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="text-[#071A3D] font-bold hover:underline"
              >
                Create an account
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// HERO AUTOPLAY STATE MACHINE
// Stages: assemble -> cues -> select -> reveal -> rationale -> update -> loop
// ---------------------------------------------------------------------------
const HERO_TIMELINE = [
  { key: 'assemble', duration: 1800 },
  { key: 'cues', duration: 2200 },
  { key: 'select', duration: 1800 },
  { key: 'reveal', duration: 1800 },
  { key: 'rationale', duration: 2600 },
  { key: 'update', duration: 1800 },
];

const HERO_CHOICES = [
  { text: 'Perform immediate needle chest decompression', correct: true },
  { text: 'Send the patient to radiology for an erect chest radiograph', correct: false },
  { text: 'Administer 40 mg IV furosemide for pulmonary congestion', correct: false },
  { text: 'Order a 12-lead electrocardiogram (ECG)', correct: false },
];

function useHeroTimeline() {
  const shouldReduceMotion = useReducedMotion();
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return undefined; // stay on a single static frame
    const current = HERO_TIMELINE[stepIndex];
    const id = setTimeout(() => {
      setStepIndex((i) => (i + 1) % HERO_TIMELINE.length);
    }, current.duration);
    return () => clearTimeout(id);
  }, [stepIndex, shouldReduceMotion]);

  // Under reduced motion, park on the most informative frame (rationale open).
  const stageKey = shouldReduceMotion ? 'rationale' : HERO_TIMELINE[stepIndex].key;
  return stageKey;
}

// ---------------------------------------------------------------------------
// SIMULATOR PREVIEW DATA (sample only — clearly labeled as a preview)
// ---------------------------------------------------------------------------
const SIM_QUESTIONS = [
  {
    id: 'PHC-051',
    tag: 'Primary Health Care & Infant Care',
    question:
      'Which topical formulation is recommended for routine umbilical cord care to prevent newborn infection?',
    options: [
      { letter: 'A', text: 'Chlorhexidine digluconate 7.1% gel (delivering 4% free chlorhexidine)', correct: true },
      { letter: 'B', text: '70% surgical methylated spirit applied three times daily until detachment', correct: false },
      { letter: 'C', text: 'Sterile petroleum jelly with zinc oxide barrier cream', correct: false },
      { letter: 'D', text: 'Topical 10% povidone-iodine solution on open cord tissue', correct: false },
    ],
    rationale:
      'Chlorhexidine 7.1% gel is the current evidence-based standard for cord care. Methylated spirit dries the cord out through evaporation and actually delays healing.',
    pearl:
      'Methylated spirit is no longer the recommended option under updated guidance — chlorhexidine gel is applied once a day until the cord falls off.',
  },
  {
    id: 'EMR-014',
    tag: 'Emergency & Disaster Nursing',
    question:
      'A patient with a suspected spinal injury is found unresponsive but breathing. What is the priority nursing action?',
    options: [
      { letter: 'A', text: 'Immobilize the spine and open the airway using a jaw-thrust maneuver', correct: true },
      { letter: 'B', text: 'Place the patient in the recovery position immediately', correct: false },
      { letter: 'C', text: 'Perform a head-tilt, chin-lift to open the airway', correct: false },
      { letter: 'D', text: 'Sit the patient upright to assess breathing', correct: false },
    ],
    rationale:
      'The jaw-thrust maneuver opens the airway without extending or moving the cervical spine, which is essential when a spinal injury is suspected.',
    pearl:
      'Head-tilt, chin-lift is fine when spinal injury is ruled out — but never use it when trauma is suspected.',
  },
];

export const HomePage = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  // Login gate
  const [showLoginModal, setShowLoginModal] = useState(false);
  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  // Animated in-viewport stats
  const statQuestions = useCountUp(900, 1600);
  const statDisciplines = useCountUp(6, 1200);
  const statCadence = useCountUp(72, 1400);

  // Reasoning pathway state
  const [activePathwayStep, setActivePathwayStep] = useState(2);

  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState(0);

  // Hero autoplay
  const heroStage = useHeroTimeline();
  const heroSelectedIndex = 0; // the demo always "selects" the correct option
  const heroItemNumber = heroStage === 'update' ? 19 : 18;
  const cuesActive = heroStage !== 'assemble';
  const isSelected = ['select', 'reveal', 'rationale', 'update'].includes(heroStage);
  const isRevealed = ['reveal', 'rationale', 'update'].includes(heroStage);
  const showRationale = ['rationale', 'update'].includes(heroStage);
  const showUpdateChip = heroStage === 'update';

  // Hero card cursor tilt (independent of the autoplay state machine)
  const heroCardRef = useRef(null);
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const el = heroCardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroTilt({ x: py * -4, y: px * 6 });
  };
  const handleHeroMouseLeave = () => setHeroTilt({ x: 0, y: 0 });

  // ---------------------------------------------------------------------
  // Simulator preview — fully interactive: select -> submit -> reveal -> next
  // ---------------------------------------------------------------------
  const [simIndex, setSimIndex] = useState(0);
  const [simSelected, setSimSelected] = useState(null);
  const [simRevealed, setSimRevealed] = useState(false);

  const simQuestion = SIM_QUESTIONS[simIndex];
  const simChosen = simSelected !== null ? simQuestion.options[simSelected] : null;

  const handleSimSelect = (i) => {
    if (simRevealed) return;
    setSimSelected(i);
  };

  const handleSimSubmit = useCallback(() => {
    if (simSelected === null || simRevealed) return;
    setSimRevealed(true);
  }, [simSelected, simRevealed]);

  const handleSimNext = () => {
    setSimIndex((i) => (i + 1) % SIM_QUESTIONS.length);
    setSimSelected(null);
    setSimRevealed(false);
  };

  const pathwayNodes = [
    {
      id: 'cue',
      step: '01',
      label: 'NOTICE THE CUES',
      cue: 'Tachycardia, tracheal shift to right, absent left breath sounds, BP 70/40.',
      actionDesc: 'Pick out the life-threatening signs from the baseline vitals.',
    },
    {
      id: 'priority',
      step: '02',
      label: 'PRIORITIZE',
      cue: 'Obstructive shock vs. hypovolemic shock.',
      actionDesc: 'Work out which condition explains the whole picture before acting.',
    },
    {
      id: 'action',
      step: '03',
      label: 'ACT',
      cue: 'Emergency needle thoracostomy (2nd ICS, midclavicular line).',
      actionDesc: "Do the thing that fixes the immediate threat — don't wait on imaging.",
    },
    {
      id: 'evaluate',
      step: '04',
      label: 'CHECK THE RESULT',
      cue: 'Rush of air, BP rebounds to 114/72, breath sounds return on both sides.',
      actionDesc: 'Confirm the intervention worked and plan the next step.',
    },
    {
      id: 'rationale',
      step: '05',
      label: 'UNDERSTAND WHY',
      cue: 'A one-way pleural valve was collapsing venous return to the heart.',
      actionDesc: 'Learn the mechanism so you recognize it faster next time.',
    },
  ];

  const candidateFaqs = [
    {
      q: 'Can I practise under exam conditions?',
      a: 'Yes. Timed mode gives you 72 seconds per question, matching the pace of a real computerized licensing exam.',
    },
    {
      q: 'What\u2019s the difference between Tutor mode and Timed mode?',
      a: 'Tutor mode shows you the explanation right after you answer. Timed mode holds the explanations back until you finish, so you can test yourself under real pressure.',
    },
    {
      q: 'Can I focus on one subject at a time?',
      a: 'Yes — practise a single subject like Emergency Nursing or Primary Health Care on its own, or mix subjects in a full-length mock exam.',
    },
    {
      q: 'Can I review questions after a test?',
      a: 'Yes. Every finished session gives you a full breakdown: what you picked, what was correct, and why.',
    },
    {
      q: 'How are my weak areas identified?',
      a: 'We track your accuracy by subject. When you fall below 75% in an area, we flag it and put together a short set of targeted questions to help.',
    },
    {
      q: 'Can institutions use this for a whole class?',
      a: 'Yes. Schools can track student progress, pacing, and readiness across a whole cohort.',
    },
  ];

  return (
    <>
      <div className="space-y-24 md:space-y-28 py-8 md:py-12 overflow-hidden bg-[#F7F9FC] text-slate-800 antialiased font-sans">
        {/* =========================================================================
            1. HERO — auto-playing state machine
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Nigerian Nursing Exam Prep
              </span>

              <h1 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.02]">
                PRACTICE THE
                <br />
                DECISION.
              </h1>

              <p className="text-base text-slate-600 leading-relaxed font-normal max-w-md">
                Work through realistic nursing cases, make the call, and see why the answer was right — or wrong.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="px-6 py-3.5 rounded bg-[#071A3D] hover:bg-[#102D63] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 active:scale-98 shadow-xs"
                >
                  <span>Start Practising</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={openLoginModal}
                  className="px-6 py-3.5 rounded bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  See All Subjects
                </button>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex items-center gap-8 text-xs font-mono text-slate-500">
                <div>
                  <span className="font-bold text-slate-900 text-sm block">{statQuestions}+</span>
                  <span>Practice questions</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 text-sm block">{statDisciplines}</span>
                  <span>Core subjects</span>
                </div>
                <div>
                  <span className="font-bold text-emerald-600 text-sm block">{statCadence}s</span>
                  <span>Per question, timed</span>
                </div>
              </div>
            </div>

            {/* Right: exam interface — self-playing demo */}
            <div className="lg:col-span-7 relative perspective-view">
              <div className="absolute -inset-6 bg-blueprint-grid opacity-60 rounded-xl pointer-events-none" />

              <AnimatePresence>
                {showUpdateChip && !shouldReduceMotion && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="hidden sm:flex items-center gap-2 absolute -top-5 right-8 z-30 bg-white border border-slate-200 px-3.5 py-1.5 rounded shadow-md font-mono text-[10px]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-400 uppercase">Sample accuracy:</span>
                    <span className="text-emerald-700 font-bold">84%</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div
                ref={heroCardRef}
                onMouseMove={handleHeroMouseMove}
                onMouseLeave={handleHeroMouseLeave}
                style={{
                  transform: `perspective(1400px) rotateX(${heroTilt.x}deg) rotateY(${heroTilt.y}deg)`,
                  transition: 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                className="relative bg-white border border-slate-300 rounded-lg shadow-2xl p-6 sm:p-8 z-20"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <motion.span
                      key={heroItemNumber}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#071A3D] text-white px-2 py-0.5 rounded font-bold text-[10px]"
                    >
                      ITEM {heroItemNumber} OF 150
                    </motion.span>
                    <span className="text-slate-700 font-bold">Emergency Nursing</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-900 bg-slate-100 border border-slate-200 px-2 py-1 rounded">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>07:42 REMAINING</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase font-bold text-blue-700 block">
                    Thoracic Trauma • Prioritization
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    A trauma patient arrives with <Cue active={cuesActive}>severe dyspnea</Cue>,{' '}
                    <Cue active={cuesActive}>tracheal deviation to the right</Cue>,{' '}
                    <Cue active={cuesActive}>absent breath sounds over the left chest</Cue>, and{' '}
                    <Cue active={cuesActive}>BP 70/40 mmHg</Cue>. Which action must the nurse execute first?
                  </p>
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  {HERO_CHOICES.map((choice, i) => {
                    const selected = isSelected && i === heroSelectedIndex;
                    const revealedCorrect = isRevealed && choice.correct;
                    const revealedWrongButSelected = isRevealed && selected && !choice.correct;
                    const fadedOut = isRevealed && !choice.correct && !selected;

                    let classes = 'border-slate-200 bg-slate-50/50 text-slate-700';
                    if (revealedCorrect) {
                      classes = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-600';
                    } else if (revealedWrongButSelected) {
                      classes = 'border-rose-600 bg-rose-50 text-rose-950 font-bold ring-1 ring-rose-600';
                    } else if (selected) {
                      classes = 'border-slate-900 bg-white text-slate-900 font-bold ring-1 ring-slate-900';
                    }

                    return (
                      <motion.div
                        key={choice.text}
                        animate={{ opacity: fadedOut ? 0.4 : 1 }}
                        transition={{ duration: 0.4 }}
                        className={`p-3 rounded border flex items-center justify-between font-medium transition-colors duration-300 ${classes}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-5 h-5 rounded flex items-center justify-center font-mono font-bold text-[10px] ${
                              revealedCorrect ? 'bg-emerald-600 text-white' : selected ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span>{choice.text}</span>
                        </div>
                        {revealedCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </motion.div>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {showRationale && (
                    <motion.div
                      initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 -mx-3 -mb-3 p-4 bg-slate-50 border-t border-slate-200 rounded-b-lg text-xs leading-relaxed space-y-1 shadow-inner">
                        <div className="flex items-center gap-1.5 text-emerald-700 font-bold font-mono text-[10px] uppercase">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Why this is the answer</span>
                        </div>
                        <p className="text-[11px] text-slate-600">
                          A tension pneumothorax causes fatal obstructive shock. Relieving the pressure comes before
                          imaging — waiting for an X-ray can cost the patient's life.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {showUpdateChip && (
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.35 }}
                    className="hidden sm:block absolute -bottom-5 left-4 z-30 bg-[#071A3D] text-white border border-[#102D63] rounded px-4 py-2 shadow-lg font-mono text-[11px]"
                  >
                    <span className="text-amber-400 font-bold block uppercase text-[9px]">Needs attention (sample)</span>
                    <span>Pharmacology • 61%, 10 questions recommended</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. STATUS STRIP
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6">
          <Reveal className="border-y border-slate-200 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left text-xs font-mono">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Curriculum</span>
              <span className="font-bold text-slate-900 mt-0.5 block">Modeled on NMCN-style topics</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Question format</span>
              <span className="font-bold text-slate-900 mt-0.5 block">Next-Gen-style judgment items</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Pacing</span>
              <span className="font-bold text-slate-900 mt-0.5 block">72 sec per question</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Feedback</span>
              <span className="font-bold text-emerald-600 mt-0.5 block">An explanation for every answer</span>
            </div>
          </Reveal>
        </section>
              {/* after the status strip section, before the pathway section */}
        <Reveal>
          <QuestionOfTheDay />
        </Reveal>

        {/* =========================================================================
            3. REASONING PATHWAY
            ========================================================================= */}
        <section id="pathway" className="bg-[#071A3D] text-white py-20 bg-blueprint-grid-dark relative">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="max-w-2xl mb-12">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-2">
                How practice works
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                PRACTICE THE DECISIONS —<br />NOT JUST THE ANSWERS.
              </h2>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Most study apps test memory. Here, every case walks you through the five steps a working nurse actually
                uses.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-2">
                {pathwayNodes.map((node, idx) => {
                  const isActive = activePathwayStep === idx;
                  return (
                    <Reveal key={node.id} delay={idx * 0.06}>
                      <div
                        onClick={() => setActivePathwayStep(idx)}
                        className={`p-4 rounded border cursor-pointer transition-all duration-150 ${
                          isActive
                            ? 'bg-[#0D2452] border-blue-400 shadow-lg translate-x-2'
                            : 'bg-[#071A3D] border-slate-800 hover:border-slate-700 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center justify-between font-mono text-xs mb-1">
                          <span className="font-bold text-white tracking-wider">
                            {node.step} // {node.label}
                          </span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                              isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            Step {idx + 1}
                          </span>
                        </div>
                        <p className={`text-xs mt-1 leading-snug ${isActive ? 'text-slate-200 font-medium' : 'text-slate-400'}`}>
                          {node.actionDesc}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal className="lg:col-span-7" delay={0.1}>
                <div className="bg-[#0D2452] border border-slate-700 rounded-lg p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-3 text-xs font-mono text-slate-400">
                    <span className="text-blue-400 font-bold uppercase">
                      Step {activePathwayStep + 1}: {pathwayNodes[activePathwayStep].label}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePathwayStep}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="border border-slate-700 bg-[#071A3D] p-4 rounded text-xs leading-relaxed space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">The case</span>
                        <p className="text-slate-200 font-semibold">
                          Femur fracture patient develops sudden severe fast breathing, cyanosis, and petechiae across
                          the chest, 48 hours after surgery.
                        </p>
                      </div>

                      <div className="border border-blue-500/40 bg-[#102D63] p-4 rounded space-y-2">
                        <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">What to do</span>
                        <p className="text-xs text-white leading-relaxed font-mono">
                          {pathwayNodes[activePathwayStep].cue}
                        </p>
                      </div>

                      <div className="border border-slate-700 bg-[#071A3D] p-3 rounded font-mono text-xs flex items-center justify-between text-slate-300">
                        <span className="text-[11px] text-blue-300">Frequently tested concept</span>
                        <span className="text-emerald-400 font-bold text-[11px]">Fat embolism syndrome</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 text-[11px]">Full case walkthrough</span>
                    <button
                      type="button"
                      onClick={openLoginModal}
                      className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1.5"
                    >
                      <span>Open this case</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. LIVE SIMULATOR PREVIEW — fully interactive, sample data
            ========================================================================= */}
        <section id="simulator" className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="border border-slate-300 rounded-lg bg-white overflow-hidden shadow-xs">
              <div className="bg-[#071A3D] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">
                    Try it now — sample preview
                  </span>
                  <h2 className="text-base font-bold">This is the actual simulator</h2>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="bg-[#102D63] text-slate-200 px-3 py-1 rounded">Mode: Tutor</span>
                  <span className="text-slate-300">
                    Question {simIndex + 1} of {SIM_QUESTIONS.length}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-12 space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={simQuestion.id}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-100 pb-3">
                      <span className="font-bold text-[#071A3D]">Case • {simQuestion.id}</span>
                      <span>{simQuestion.tag}</span>
                    </div>

                    <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug max-w-4xl">
                      {simQuestion.question}
                    </p>

                    <div className="space-y-3">
                      {simQuestion.options.map((choice, i) => {
                        const selected = simSelected === i;
                        let classes = 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-800';
                        if (simRevealed && choice.correct) {
                          classes = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-600';
                        } else if (simRevealed && selected && !choice.correct) {
                          classes = 'border-rose-600 bg-rose-50 text-rose-950 font-bold ring-1 ring-rose-600';
                        } else if (!simRevealed && selected) {
                          classes = 'border-slate-900 bg-white text-slate-900 font-bold ring-1 ring-slate-900';
                        }

                        return (
                          <button
                            type="button"
                            key={choice.letter}
                            onClick={() => handleSimSelect(i)}
                            disabled={simRevealed}
                            className={`w-full text-left p-4 rounded border text-sm font-medium transition-all flex items-center justify-between disabled:cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 ${classes}`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-xs ${
                                  simRevealed && choice.correct
                                    ? 'bg-emerald-600 text-white'
                                    : simRevealed && selected
                                    ? 'bg-rose-600 text-white'
                                    : selected
                                    ? 'bg-slate-900 text-white'
                                    : 'bg-slate-200 text-slate-700'
                                }`}
                              >
                                {choice.letter}
                              </span>
                              <span>{choice.text}</span>
                            </div>
                            {simRevealed && choice.correct && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                            {simRevealed && selected && !choice.correct && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {!simRevealed ? (
                      <button
                        type="button"
                        onClick={handleSimSubmit}
                        disabled={simSelected === null}
                        className="w-full sm:w-auto px-6 py-3 rounded bg-[#071A3D] hover:bg-[#102D63] text-white text-sm font-bold disabled:bg-slate-200 disabled:text-slate-400 transition-colors"
                      >
                        Submit answer
                      </button>
                    ) : (
                      <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden space-y-4"
                      >
                        <div
                          className={`p-4 rounded border text-xs leading-relaxed space-y-2 ${
                            simChosen?.correct ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'
                          }`}
                        >
                          <div
                            className={`font-bold font-mono text-[11px] uppercase flex items-center gap-2 ${
                              simChosen?.correct ? 'text-emerald-700' : 'text-rose-700'
                            }`}
                          >
                            {simChosen?.correct ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                            <span>{simChosen?.correct ? 'Correct' : 'Why?'}</span>
                          </div>
                          <p className="text-slate-700">{simQuestion.rationale}</p>
                          <div className="p-2.5 bg-amber-50 border border-amber-200 text-amber-950 rounded text-[11px]">
                            <strong>Remember:</strong> {simQuestion.pearl}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleSimNext}
                          className="px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold flex items-center gap-2"
                        >
                          Next question <ArrowRight className="w-4 h-4" />
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =========================================================================
            5. PROGRESS DASHBOARD
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="bg-[#071A3D] rounded-xl text-white p-8 sm:p-12 shadow-2xl space-y-8">
              <div className="max-w-2xl">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  Your progress
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">KNOW WHERE YOU STAND.</h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Strongest in Ethics & Jurisprudence, still working on Emergency & Disaster Triage.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 bg-[#0D2452] border border-slate-700 rounded-lg p-6 space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-slate-700 font-mono text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">Target</span>
                      <div className="text-2xl font-bold text-white mt-1">78%</div>
                      <span className="text-[10px] text-emerald-400">On track</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">Questions solved</span>
                      <div className="text-2xl font-bold text-white mt-1">1,248</div>
                      <span className="text-[10px] text-slate-400">Goal: 5,000</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">Study streak</span>
                      <div className="text-2xl font-bold text-amber-400 mt-1">12 days</div>
                      <span className="text-[10px] text-slate-400">Best: 18</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">Subjects tested</span>
                      <div className="text-2xl font-bold text-white mt-1">8 / 18</div>
                      <span className="text-[10px] text-blue-300">In progress</span>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <span className="text-xs text-slate-400 uppercase font-bold block">By subject</span>
                    {[
                      { name: 'Nursing Ethics & Jurisprudence', score: 92 },
                      { name: 'Anatomy & Physiology', score: 88 },
                      { name: 'Primary Health Care (PHC)', score: 84 },
                      { name: 'Emergency & Disaster Triage', score: 76 },
                    ].map((row, idx) => (
                      <div key={row.name} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-300">{row.name}</span>
                          <span className="text-emerald-400 font-bold">{row.score}%</span>
                        </div>
                        <div className="w-full bg-[#071A3D] h-2 rounded-full overflow-hidden">
                          <motion.div
                            initial={shouldReduceMotion ? false : { width: 0 }}
                            whileInView={{ width: `${row.score}%` }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-emerald-500 h-full rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <div className="p-5 bg-[#0D2452] border border-amber-500/50 rounded-lg space-y-2">
                    <span className="text-[10px] text-amber-400 font-bold uppercase">Needs attention</span>
                    <div className="text-sm font-bold text-white">Pharmacology Calculations</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      61% accuracy across 45 questions. 10 targeted questions are ready when you are.
                    </p>
                    <button
                      type="button"
                      onClick={openLoginModal}
                      className="mt-2 text-xs font-bold text-amber-400 hover:text-amber-300 underline block font-mono"
                    >
                      Start these questions →
                    </button>
                  </div>

                  <div className="p-5 bg-[#0D2452] border border-slate-700 rounded-lg space-y-2 font-mono text-xs">
                    <span className="text-[10px] text-slate-400 uppercase">In progress</span>
                    <div className="text-sm font-bold text-white font-sans">General Nursing Mock #4</div>
                    <div className="text-xs text-slate-300">48 / 150 items • 32:18 remaining</div>
                    <button
                      type="button"
                      onClick={openLoginModal}
                      className="mt-2 w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold rounded text-xs transition-colors"
                    >
                      Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =========================================================================
            6. FAQ
            ========================================================================= */}
        <section className="max-w-4xl mx-auto px-6">
          <Reveal className="mb-10 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-1">
              Common questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Still wondering?</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-slate-200 divide-y divide-slate-200">
              {candidateFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={faq.q} className="py-4">
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                      className="w-full text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-700 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </section>

        {/* =========================================================================
            7. FINAL CTA
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="bg-[#071A3D] text-white p-10 sm:p-14 rounded-xl text-center space-y-5 border border-slate-800 shadow-xl relative bg-blueprint-grid-dark">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                Ready when you are
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                OPEN YOUR NEXT CLINICAL CASE.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Practice the scenario. Make the decision. See the reasoning.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="px-6 py-3.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs active:scale-98"
                >
                  <span>Start Practising</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={openLoginModal}
                  className="px-6 py-3.5 rounded border border-slate-700 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  See All Subjects
                </button>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <LoginModal open={showLoginModal} onClose={closeLoginModal} />
    </>
  );
};

export default HomePage;