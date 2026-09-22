import React, { useState } from 'react';
import { Layers, Clock, CheckCircle2, Play } from 'lucide-react';

export default function ExamConfigModal({ isOpen, onClose, onStartExam, availableCount = 85 }) {
  const [selectedLength, setSelectedLength] = useState(25);
  const [selectedMode, setSelectedMode] = useState('timed');

  if (!isOpen) return null;

  const lengths = [10, 25, 50, 85].filter((n) => n <= availableCount);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        <h3 className="text-base font-bold text-slate-900">Configure Examination Session</h3>
        <p className="mt-1 text-xs text-slate-500">
          Calibrate test duration and scoring feedback parameters.
        </p>

        {/* Question Count Selector */}
        <div className="mt-5">
          <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Select Question Volume
          </label>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {lengths.map((len) => (
              <button
                key={len}
                type="button"
                onClick={() => setSelectedLength(len)}
                className={`rounded-lg border py-2.5 text-xs font-bold transition-all ${
                  selectedLength === len
                    ? 'border-cyan-800 bg-cyan-700 text-white shadow-xs'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {len} Qs
              </button>
            ))}
          </div>
        </div>

        {/* Study Mode Selector */}
        <div className="mt-5">
          <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Testing Environment Mode
          </label>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedMode('timed')}
              className={`flex flex-col items-start rounded-xl border p-3 text-left transition-all ${
                selectedMode === 'timed'
                  ? 'border-cyan-800 bg-cyan-50/50 ring-1 ring-cyan-800'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <Clock className="h-3.5 w-3.5 text-cyan-700" />
                <span>Timed Exam</span>
              </div>
              <span className="mt-1 text-[11px] text-slate-500">
                Strict 72s/item pacing without immediate rationales.
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMode('tutor')}
              className={`flex flex-col items-start rounded-xl border p-3 text-left transition-all ${
                selectedMode === 'tutor'
                  ? 'border-cyan-800 bg-cyan-50/50 ring-1 ring-cyan-800'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-700" />
                <span>Tutor Mode</span>
              </div>
              <span className="mt-1 text-[11px] text-slate-500">
                Immediate answers with detailed clinical rationales.
              </span>
            </button>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => onStartExam({ length: selectedLength, mode: selectedMode })}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-slate-800"
          >
            <Play className="h-3.5 w-3.5 fill-white" />
            <span>Begin Simulation</span>
          </button>
        </div>
      </div>
    </div>
  );
}