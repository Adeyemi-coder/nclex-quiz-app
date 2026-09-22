import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';

export default function TimeWarningBanner({ timeLeft, isVisible, onDismiss }) {
  if (!isVisible) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div 
      role="alert"
      className="mb-6 flex items-center justify-between rounded-xl border border-red-200 bg-red-50/90 px-4 py-3 text-red-900 shadow-xs transition-all animate-pulse"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-700">
          <AlertTriangle className="h-4 w-4" strokeWidth={2.2} />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-red-800">
            Critical Pacing Warning
          </h4>
          <p className="text-xs text-red-700">
            Fewer than {minutes + 1} minutes remain. Pacing calibration suggests finalizing pending decisions.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-extrabold text-red-900">
          {timeFormatted}
        </span>
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="text-[11px] font-semibold text-red-700 hover:text-red-900 underline"
          >
            Acknowledge
          </button>
        )}
      </div>
    </div>
  );
}