import React from 'react';
import { PauseCircle, Play, ShieldAlert } from 'lucide-react';

export default function PauseExamModal({ isOpen, onResume, answeredCount, totalCount }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-200">
          <PauseCircle className="h-7 w-7" strokeWidth={1.8} />
        </div>

        <h3 className="mt-4 text-lg font-bold text-slate-900">
          Simulation Session Suspended
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Timer telemetry and item progress are preserved in memory.
        </p>

        {/* Progress Snapshot */}
        <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-around">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Resolved Items
            </span>
            <p className="font-mono text-xl font-bold text-slate-800">
              {answeredCount} <span className="text-xs font-normal text-slate-400">/ {totalCount}</span>
            </p>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Clinical Protocol
            </span>
            <p className="font-mono text-sm font-semibold text-slate-700">
              Active CAT Drill
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6">
          <button
            type="button"
            onClick={onResume}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-slate-800"
          >
            <Play className="h-4 w-4 fill-white" />
            <span>Resume Clinical Simulation</span>
          </button>
        </div>
      </div>
    </div>
  );
}