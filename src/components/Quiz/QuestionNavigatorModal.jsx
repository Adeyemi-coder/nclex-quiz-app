import React from 'react';
import { X, Bookmark } from 'lucide-react';

export default function QuestionNavigatorModal({
  isOpen,
  onClose,
  totalQuestions = 0,
  currentIdx = 0,
  userAnswers = {},
  savedItems = [],
  onSelectQuestion,
}) {
  if (!isOpen) return null;

  // Safe fallback to ensure count is always an integer >= 1
  const count = Number.isInteger(totalQuestions) && totalQuestions > 0 
    ? totalQuestions 
    : 0;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Examination Item Navigator</h3>
            <p className="text-xs text-slate-500">
              Jump directly to any clinical scenario ({count} total items)
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-4 border-b border-slate-100 pb-3 text-[11px] font-medium text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded border border-cyan-800 bg-cyan-700" />
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded border border-amber-400 bg-amber-100" />
            <span>Marked for Review</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded border border-slate-300 bg-slate-100" />
            <span>Unanswered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded border-2 border-slate-900 bg-white" />
            <span>Current Item</span>
          </div>
        </div>

        {/* Numeric Grid */}
        {count === 0 ? (
          <div className="py-12 text-center text-xs text-slate-400">
            No questions loaded in active session.
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-5 gap-2 max-h-72 overflow-y-auto p-1 sm:grid-cols-10">
            {Array.from({ length: count }, (_, idx) => {
              const isAnswered = userAnswers[idx] !== undefined;
              const isMarked = savedItems.includes(idx);
              const isCurrent = currentIdx === idx;

              let btnStyle = 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100';
              if (isAnswered) {
                btnStyle = 'border-cyan-800 bg-cyan-700 text-white font-bold';
              }
              if (isMarked) {
                btnStyle = 'border-amber-400 bg-amber-100 text-amber-900 font-bold';
              }
              if (isCurrent) {
                btnStyle += ' ring-2 ring-slate-900 ring-offset-1';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    if (typeof onSelectQuestion === 'function') {
                      onSelectQuestion(idx);
                    }
                    onClose();
                  }}
                  className={`relative flex h-10 flex-col items-center justify-center rounded-lg border text-xs transition-all ${btnStyle}`}
                >
                  <span>{idx + 1}</span>
                  {isMarked && (
                    <Bookmark className="absolute top-1 right-1 h-2.5 w-2.5 fill-amber-600 text-amber-600" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 flex justify-end border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-5 py-2 text-xs font-semibold text-white hover:bg-slate-800"
          >
            Resume Examination
          </button>
        </div>
      </div>
    </div>
  );
}