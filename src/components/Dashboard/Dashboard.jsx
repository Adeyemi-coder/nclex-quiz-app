import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  RotateCcw, 
  Flame, 
  Sparkles,
  Sliders
} from 'lucide-react';
import WeakAreasBanner from './WeakAreasBanner.jsx';
import CategoryBars from './CategoryBars.jsx';
import ScoreSparkline from './ScoreSparkline.jsx';
import HoloPortrait from './HoloPortrait.jsx';
import CertificateModal from '../Result/CertificateModal.jsx';
import AIExamModal from '../Quiz/AIExamModal.jsx';
import ExamConfigModal from '../Quiz/ExamConfigModal.jsx';

export default function Dashboard() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);

  // Load telemetry from localStorage
  useEffect(() => {
    try {
      const records = JSON.parse(localStorage.getItem('nclex_quiz_history') || '[]');
      setHistory(records);
    } catch (e) {
      console.error('Failed to load session history:', e);
      setHistory([]);
    }
  }, []);

  // Compute aggregate statistics
  const metrics = useMemo(() => {
    let totalItems = 0;
    let totalScore = 0;

    history.forEach((rec) => {
      totalItems += Number(rec.total) || 0;
      totalScore += Number(rec.score) || 0;
    });

    const accuracy = totalItems > 0 ? Math.round((totalScore / totalItems) * 100) : 0;
    const isPassing = accuracy >= 65;

    return {
      totalItems,
      totalScore,
      accuracy,
      isPassing,
      totalSessions: history.length
    };
  }, [history]);

  // Aggregate accuracy per clinical category
  const categoryBreakdown = useMemo(() => {
    const map = {};

    history.forEach((rec) => {
      const cat = rec.category || 'General Clinical Practice';
      if (!map[cat]) {
        map[cat] = { correct: 0, total: 0 };
      }
      map[cat].correct += Number(rec.score) || 0;
      map[cat].total += Number(rec.total) || 0;
    });

    return Object.entries(map).map(([name, data]) => ({
      name,
      correct: data.correct,
      total: data.total,
      accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
    }));
  }, [history]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* 1. Header Profile & Action Strip */}
        <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1D2A59] text-white shadow-xs">
              <ShieldCheck className="h-6 w-6 text-cyan-400" strokeWidth={2} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                  Candidate Clinical Registry
                </span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-700 border border-amber-200">
                  <Flame className="h-3 w-3 fill-amber-500" />
                  Active Streak
                </span>
              </div>
              <h1 className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                Licensure Readiness Dashboard
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* AI Generator Modal Trigger */}
            <button
              type="button"
              onClick={() => setShowAIModal(true)}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-cyan-800 bg-cyan-700 px-4 text-xs font-bold text-white shadow-xs transition-colors hover:bg-cyan-800"
            >
              <Sparkles className="h-4 w-4 text-cyan-200" />
              <span>AI Custom Drill</span>
            </button>

            {/* Official Credential Modal Trigger */}
            {metrics.isPassing && metrics.totalItems >= 50 && (
              <button
                type="button"
                onClick={() => setShowCertificate(true)}
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-4 text-xs font-bold text-amber-900 transition-colors hover:bg-amber-100"
              >
                <Award className="h-4 w-4 text-amber-700" />
                <span>View Certificate</span>
              </button>
            )}

            {/* Calibrated Exam Configuration Modal Trigger */}
            <button
              type="button"
              onClick={() => setShowConfigModal(true)}
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#1D2A59] px-5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-[#283A78]"
            >
              <Sliders className="h-4 w-4 text-cyan-400" />
              <span>Launch CAT Exam</span>
            </button>
          </div>
        </header>

        {/* 2. Top-Level Metric Summary Tiles */}
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Diagnostic Accuracy
            </span>
            <p className={`mt-2 font-mono text-3xl font-extrabold ${
              metrics.isPassing ? 'text-emerald-700' : 'text-slate-900'
            }`}>
              {metrics.accuracy}%
            </p>
            <span className="mt-1 block text-xs text-slate-500">
              Benchmark Target: 65.0%
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Calibrated Items Cleared
            </span>
            <p className="mt-2 font-mono text-3xl font-extrabold text-slate-900">
              {metrics.totalItems}
            </p>
            <span className="mt-1 block text-xs text-slate-500">
              Total Questions Answered
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Clinical Standard Met
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className={`inline-flex items-center gap-1 rounded px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${
                metrics.isPassing 
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {metrics.isPassing ? 'Above Passing Line' : 'Remediation Alert'}
              </span>
            </div>
            <span className="mt-2 block text-xs text-slate-500">
              NCSBN Cut-Off Calibrated
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Recorded Sessions
            </span>
            <p className="mt-2 font-mono text-3xl font-extrabold text-slate-900">
              {metrics.totalSessions}
            </p>
            <span className="mt-1 block text-xs text-slate-500">
              Simulations Completed
            </span>
          </div>
        </section>

        {/* 3. Adaptive Weak Areas Calibration Banner */}
        <WeakAreasBanner />

        {/* 4. Analytics Grid & Holographic Card Column */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <ScoreSparkline attempts={history} />
            <CategoryBars categories={categoryBreakdown} />
          </div>

          <div className="lg:col-span-4 flex flex-col items-center">
            <HoloPortrait />
          </div>
        </div>

      </div>

      {/* Official Certificate Credential Modal */}
      {showCertificate && (
        <CertificateModal
          score={metrics.accuracy}
          totalQuestions={metrics.totalItems}
          onClose={() => setShowCertificate(false)}
        />
      )}

      {/* AI Dynamic Generation Modal */}
      <AIExamModal
        isOpen={showAIModal}
        onClose={() => setShowAIModal(false)}
      />

      {/* Exam Configuration Parameters Modal */}
      <ExamConfigModal
        isOpen={showConfigModal}
        onClose={() => setShowConfigModal(false)}
        defaultCategory="all"
      />
    </div>
  );
}