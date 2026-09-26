import React, { useMemo } from 'react';
import { FullScreenHospitalCinema } from '../../components/Home/FullScreenHospitalCinema';
import { Play } from 'lucide-react';

import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Play, 
  CreditCard, 
  Layers, 
  BarChart2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles,
  Flame,
  Activity
} from 'lucide-react';
export const HomePage = () => {
  const navigate = useNavigate();

  // Full-Screen Cinema Popout State
  const [cinemaOpen, setCinemaOpen] = useState(false);
}
import { questions as allQuestions } from '../../data/questions.js';

export default function Home() {
  // 1. Pull dynamic candidate telemetry from session records
  const quizHistory = useMemo(() => {
    try {
      const saved = localStorage.getItem('nclex_quiz_history');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, []);

  const totalAnswered = useMemo(() => {
    return quizHistory.reduce((acc, curr) => acc + (curr.total || 0), 0);
  }, [quizHistory]);

  const totalCorrect = useMemo(() => {
    return quizHistory.reduce((acc, curr) => acc + (curr.score || 0), 0);
  }, [quizHistory]);

  const candidateAccuracy = useMemo(() => {
    if (!totalAnswered) return 0;
    return Math.round((totalCorrect / totalAnswered) * 100);
  }, [totalAnswered, totalCorrect]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* 1. Candidate Hero & Launch Console */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-10">
        
        {/* Subtle Background Structural Accent */}
        <div 
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, #283A78 0%, #E2E8F0 70%, transparent 100%)' }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          {/* Left: Academic Identity */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-700" strokeWidth={2} />
              <span>NCSBN NCJMM &amp; NMCN Calibrated Suite</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Next Generation NCLEX &amp; Licensure Examination Suite
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              A clinical decision-making simulation environment. Practice with 550 verified case scenarios, prioritized hypotheses, and evidence-based rationales designed to Pearson VUE standards.
            </p>

            {/* Quick Action Group */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/quiz/all"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-cyan-700 px-6 text-xs font-bold tracking-wide text-white shadow-xs transition-colors hover:bg-cyan-800 focus:outline-none"
              >
                <Play className="h-4 w-4 fill-white" />
                <span>Launch Comprehensive CAT (85 Qs)</span>
              </Link>

              <Link
                to="/modules"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                <Layers className="h-4 w-4 text-slate-500" strokeWidth={1.8} />
                <span>Select Specialty Module</span>
              </Link>
            </div>
          </div>

          {/* Right: Real-time Diagnostic Snapshot Card */}
          <div className="w-full lg:w-80 shrink-0 rounded-xl border border-slate-200 bg-slate-50/70 p-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Licensure Readiness
              </span>
              <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold uppercase ${
                candidateAccuracy >= 65 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {totalAnswered < 20 ? 'Calibrating' : candidateAccuracy >= 65 ? 'Passing Benchmark' : 'Review Target'}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-slate-500">Cumulative Accuracy</span>
                  <span className="font-mono font-bold text-slate-900">{candidateAccuracy}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div 
                    className="h-full bg-cyan-700 transition-all duration-300"
                    style={{ width: `${Math.max(candidateAccuracy, 5)}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-500">Items Practiced</span>
                <span className="font-mono font-semibold text-slate-900">{totalAnswered} / {allQuestions.length}</span>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-500">Target Pace</span>
                <span className="font-mono font-semibold text-emerald-700">72s / item</span>
              </div>
            </div>

            <Link
              to="/dashboard"
              className="mt-5 flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-100"
            >
              <span>View Full NCJMM Report</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* 2. Structured Clinical Quick-Paths */}
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        
        {/* Path 1: High Acuity Cardiovascular & Shock */}
        <Link
          to="/quiz/Cardiovascular"
          className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-slate-300 hover:shadow-md"
        >
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-700 border border-rose-100">
              <Activity className="h-5 w-5" strokeWidth={2} />
            </div>
            <h2 className="mt-4 text-base font-bold tracking-tight text-slate-900 group-hover:text-cyan-800 transition-colors">
              Cardiovascular &amp; Hemodynamics
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Practice STEMI recognition, cardiogenic shock titration, and complex dysrhythmia management.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-cyan-700">
            <span>Start Cardiovascular Drill</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Path 2: Pharmacology & Titration Drills */}
        <Link
          to="/quiz/Pharmacology"
          className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-slate-300 hover:shadow-md"
        >
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 border border-amber-100">
              <Sparkles className="h-5 w-5" strokeWidth={2} />
            </div>
            <h2 className="mt-4 text-base font-bold tracking-tight text-slate-900 group-hover:text-cyan-800 transition-colors">
              Pharmacology &amp; Parenteral Safety
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              High-alert titrations, narrow therapeutic index toxicity, and medication reversal antidotes.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-cyan-700">
            <span>Start Pharmacology Drill</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Path 3: Spaced Repetition Flashcards */}
        <Link
          to="/flashcards"
          className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-slate-300 hover:shadow-md"
        >
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-100">
              <CreditCard className="h-5 w-5" strokeWidth={2} />
            </div>
            <h2 className="mt-4 text-base font-bold tracking-tight text-slate-900 group-hover:text-cyan-800 transition-colors">
              Active Recall Flashcards
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Review essential pathophysiological cues, lab reference ranges, and critical nursing actions.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-cyan-700">
            <span>Review Flashcard Deck</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

      </div>
     

      {/* 3. NCSBN Examination Blueprint Distribution */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            NCSBN Licensure Blueprint &amp; Client Needs Framework
          </h2>
          <p className="text-xs text-slate-500">
            Proportional representation of clinical judgment competencies assessed on the NCLEX-RN and NMCN examinations.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-100 bg-slate-50/60 p-4">
            <span className="text-xs font-semibold text-slate-900">Safe &amp; Effective Care</span>
            <div className="mt-2 flex items-baseline justify-between text-xs">
              <span className="text-slate-500">Exam Weight</span>
              <span className="font-mono font-bold text-slate-900">26–38%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-cyan-700" style={{ width: '32%' }} />
            </div>
          </div>

          <div className="rounded-lg border border-slate-100 bg-slate-50/60 p-4">
            <span className="text-xs font-semibold text-slate-900">Physiological Integrity</span>
            <div className="mt-2 flex items-baseline justify-between text-xs">
              <span className="text-slate-500">Exam Weight</span>
              <span className="font-mono font-bold text-slate-900">38–62%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-cyan-700" style={{ width: '50%' }} />
            </div>
          </div>

          <div className="rounded-lg border border-slate-100 bg-slate-50/60 p-4">
            <span className="text-xs font-semibold text-slate-900">Psychosocial Integrity</span>
            <div className="mt-2 flex items-baseline justify-between text-xs">
              <span className="text-slate-500">Exam Weight</span>
              <span className="font-mono font-bold text-slate-900">6–12%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-cyan-700" style={{ width: '9%' }} />
            </div>
          </div>

          <div className="rounded-lg border border-slate-100 bg-slate-50/60 p-4">
            <span className="text-xs font-semibold text-slate-900">Health Promotion</span>
            <div className="mt-2 flex items-baseline justify-between text-xs">
              <span className="text-slate-500">Exam Weight</span>
              <span className="font-mono font-bold text-slate-900">6–12%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-cyan-700" style={{ width: '9%' }} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}