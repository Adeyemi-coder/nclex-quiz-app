import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sliders, Clock, HelpCircle, X, ArrowRight, BookOpen } from 'lucide-react';

export default function ExamConfigModal({ isOpen, onClose, defaultCategory = 'all' }) {
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(25);
  const [examMode, setExamMode] = useState('tutor'); // 'tutor' | 'timed'
  const [secondsPerQuestion, setSecondsPerQuestion] = useState(72); // standard NCSBN 1.2 min/q
  const [category, setCategory] = useState(defaultCategory);

  if (!isOpen) return null;

  function handleStartExam() {
    onClose();
    navigate(`/quiz/${category.toLowerCase()}`, {
      state: {
        config: {
          itemCount,
          examMode,
          secondsPerQuestion,
          categoryTitle: category === 'all' ? 'Comprehensive Licensure Simulation' : category,
        },
      },
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1D2A59] text-white">
              <Sliders className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Custom Exam Calibration</h3>
              <p className="text-xs text-slate-500">Configure parameters for this test session</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Configuration Controls */}
        <div className="mt-5 space-y-4">
          {/* Question Count */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Session Item Count
            </label>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {[15, 25, 50, 85].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setItemCount(count)}
                  className={`rounded-lg border py-2 text-xs font-semibold transition-all ${
                    itemCount === count
                      ? 'border-[#1D2A59] bg-[#1D2A59] text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {count} Qs
                </button>
              ))}
            </div>
          </div>

          {/* Exam Mode: Tutor vs Real-Time Simulation */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Exam Delivery Mode
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setExamMode('tutor')}
                className={`flex flex-col items-start rounded-xl border p-3 text-left transition-all ${
                  examMode === 'tutor'
                    ? 'border-[#1D2A59] bg-[#1D2A59]/5 ring-1 ring-[#1D2A59]'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                  <BookOpen className="h-3.5 w-3.5 text-[#1D2A59]" />
                  <span>Tutor Mode</span>
                </div>
                <span className="mt-1 text-[11px] text-slate-500">
                  Instant rationales after each selection
                </span>
              </button>

              <button
                type="button"
                onClick={() => setExamMode('timed')}
                className={`flex flex-col items-start rounded-xl border p-3 text-left transition-all ${
                  examMode === 'timed'
                    ? 'border-[#1D2A59] bg-[#1D2A59]/5 ring-1 ring-[#1D2A59]'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                  <Clock className="h-3.5 w-3.5 text-[#A65353]" />
                  <span>Timed Test Center</span>
                </div>
                <span className="mt-1 text-[11px] text-slate-500">
                  Pearson VUE standard (72s/q pacing clock)
                </span>
              </button>
            </div>
          </div>

          {/* Time Pacing Selector if Timed */}
          {examMode === 'timed' && (
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Pacing Cadence
              </label>
              <select
                value={secondsPerQuestion}
                onChange={(e) => setSecondsPerQuestion(Number(e.target.value))}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none"
              >
                <option value={72}>Standard Pacing (72 sec / item)</option>
                <option value={60}>Speed Drill (60 sec / item)</option>
                <option value={45}>High-Intensity Blitz (45 sec / item)</option>
              </select>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={handleStartExam}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-slate-800"
          >
            <span>Start Calibrated Exam</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}