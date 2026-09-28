// src/pages/dashboard/ProgressPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  Flame, 
  Target, 
  Clock, 
  ArrowRight, 
  PlayCircle,
  AlertCircle
} from 'lucide-react';
import { getStoredProgress } from '../../utils/progressStorage';

// Standard NMCN curriculum categories to monitor
const CURRICULUM_DOMAINS = [
  'Anatomy & Physiology',
  'Primary Health Care (PHC)',
  'Emergency & Disaster Triage',
  'Nursing Ethics & Jurisprudence',
  'Fundamentals of Nursing',
  'Pharmacology Calculations'
];

export const ProgressPage = () => {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    // Read real user data from storage
    const data = getStoredProgress();
    setProgress(data);
  }, []);

  if (!progress) return null;

  const totalAnswered = progress.totalAnswered || 0;
  const totalCorrect = progress.totalCorrect || 0;
  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const averagePacingSec = totalAnswered > 0 ? Math.round((progress.totalTimeSpentSec || 0) / totalAnswered) : 0;
  const hasAttemptedExams = totalAnswered > 0;

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto font-sans text-slate-800 antialiased">
      
      {/* Page Header */}
      <div>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
          Candidate Telemetry
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Performance Analytics &amp; Mastery
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Real-time metrics aggregated directly from your practice sessions and council mock trials.
        </p>
      </div>

      {/* Top Telemetry KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Pass Probability / Accuracy */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase block">Average Accuracy</span>
          <div className="text-3xl font-black text-slate-900 mt-2 flex items-baseline gap-2">
            <span>{overallAccuracy}%</span>
            <span className={`text-xs font-mono font-bold ${overallAccuracy >= 75 ? 'text-emerald-600' : 'text-amber-600'}`}>
              Target: 75%
            </span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">
            {overallAccuracy >= 75 ? 'Meets Council standard' : 'Below 75% benchmark'}
          </span>
        </div>

        {/* Total Questions Solved */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase block">Items Answered</span>
          <div className="text-3xl font-black text-slate-900 mt-2">
            {totalAnswered}
          </div>
          <span className="text-xs text-slate-500 mt-1 block font-mono">
            {totalCorrect} correct answers
          </span>
        </div>

        {/* Study Streak */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Study Streak</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-black text-amber-500 mt-2">
            {progress.streakDays || (hasAttemptedExams ? 1 : 0)} {progress.streakDays === 1 ? 'Day' : 'Days'}
          </div>
          <span className="text-xs text-slate-500 mt-1 block font-mono">
            {progress.lastStudyDate ? `Last active: ${progress.lastStudyDate}` : 'No active streak yet'}
          </span>
        </div>

        {/* Average Pacing */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Average Cadence</span>
            <Clock className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-3xl font-black text-slate-900 mt-2">
            {averagePacingSec > 0 ? `${averagePacingSec}s` : '--'}
          </div>
          <span className="text-xs text-slate-500 mt-1 block font-mono">
            Benchmark: 72s / question
          </span>
        </div>
      </div>

      {/* Zero State Notice */}
      {!hasAttemptedExams && (
        <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-6 text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#071A3D] text-white flex items-center justify-center mx-auto">
            <PlayCircle className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">No exam sessions recorded yet</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Complete your first question bank drill or mock examination to populate your real clinical mastery analytics.
          </p>
          <Link
            to="/dashboard/exams"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#071A3D] text-white rounded text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#102D63] transition-colors"
          >
            <span>Start Practice Drill</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Curriculum Breakdown */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Curriculum Domain Performance</h3>
            <p className="text-xs text-slate-500">Live accuracy per tested NMCN discipline.</p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-400 uppercase">Target: 75%+</span>
        </div>

        <div className="space-y-4 font-mono text-xs">
          {CURRICULUM_DOMAINS.map((domain) => {
            const catData = progress.byCategory[domain] || { answered: 0, correct: 0 };
            const catAccuracy = catData.answered > 0 ? Math.round((catData.correct / catData.answered) * 100) : 0;
            const hasData = catData.answered > 0;

            return (
              <div key={domain} className="space-y-1.5 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between font-sans">
                  <span className="font-bold text-slate-800 text-sm">{domain}</span>
                  <div className="flex items-center gap-3 font-mono">
                    <span className={`text-xs font-bold ${
                      !hasData ? 'text-slate-400' : catAccuracy >= 75 ? 'text-emerald-700' : 'text-amber-600'
                    }`}>
                      {hasData ? `${catAccuracy}%` : 'Not Attempted'}
                    </span>
                    {hasData && (
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        catAccuracy >= 75 ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {catAccuracy >= 75 ? 'Mastered' : 'Needs Review'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      !hasData ? 'bg-transparent' : catAccuracy >= 75 ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${hasData ? catAccuracy : 0}%` }}
                  />
                </div>

                <div className="flex justify-between text-[11px] text-slate-400 font-mono pt-0.5">
                  <span>{catData.answered} items solved ({catData.correct} correct)</span>
                  {hasData && catAccuracy < 75 && (
                    <Link to="/dashboard/exams" className="text-blue-700 font-bold hover:underline font-sans">
                      Practice Remedial →
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Exam History Log */}
      {progress.history && progress.history.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900">Recent Completed Sessions</h3>
          <div className="divide-y divide-slate-100 font-mono text-xs">
            {progress.history.slice(0, 5).map((session) => (
              <div key={session.id} className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800 font-sans">{session.category}</div>
                  <div className="text-[11px] text-slate-400">
                    {new Date(session.date).toLocaleDateString()} • {session.score} of {session.total} items
                  </div>
                </div>
                <div className="text-right">
                  <span className={`font-bold text-sm ${session.accuracy >= 75 ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {session.accuracy}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ProgressPage;