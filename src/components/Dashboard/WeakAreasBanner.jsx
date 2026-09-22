import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Target, ArrowRight, Zap } from 'lucide-react';
import { getWeakAreaQuestions } from '../../utils/remediationEngine.js';

export default function WeakAreasBanner() {
  const navigate = useNavigate();
  const { targetCategories, questions } = getWeakAreaQuestions(25);

  function handleStartDrill() {
    navigate('/quiz/remediation-adaptive', {
      state: {
        customQuestions: questions,
        categoryTitle: 'Adaptive Weak-Area Calibration'
      }
    });
  }

  return (
    <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 shadow-xs">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left: Indicator & Description */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-200 bg-red-100 text-red-700">
            <Target className="h-6 w-6" strokeWidth={2} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-700">
                Cognitive Diagnostic Engine
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-semibold text-red-800">
                <AlertCircle className="h-3 w-3" />
                Under 65% Standard
              </span>
            </div>
            <h3 className="mt-1 text-base font-bold text-slate-900">
              Targeted Remediation Auto-Drill
            </h3>
            <p className="mt-0.5 text-xs text-slate-600">
              Focus areas detected: <strong className="text-slate-800">{targetCategories.slice(0, 3).join(', ')}</strong>
            </p>
          </div>
        </div>

        {/* Right: Quick Launch Button */}
        <button
          type="button"
          onClick={handleStartDrill}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-red-700 px-5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-red-800 focus:outline-none"
        >
          <Zap className="h-4 w-4 fill-white" />
          <span>Launch Adaptive Drill (25 Qs)</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

      </div>
    </div>
  );
}