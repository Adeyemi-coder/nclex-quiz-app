import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  AlertCircle, 
  RotateCcw,
  CheckCircle2,
  XCircle,
  Bookmark
} from 'lucide-react';
import ReviewCard from './ReviewCard.jsx';
import * as ProgressModule from '../../hooks/useProgress.js';

export default function ReviewScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  // Safe hook handling
  const useProgressHook = ProgressModule.useProgress || ProgressModule.default;
  let hookBookmarks = [];
  let hookToggleBookmark = null;

  try {
    if (typeof useProgressHook === 'function') {
      const p = useProgressHook();
      if (p) {
        hookBookmarks = Array.isArray(p.bookmarks) ? p.bookmarks : [];
        hookToggleBookmark = p.toggleBookmark;
      }
    }
  } catch (e) {
    console.warn('useProgress fallback engaged:', e);
  }

  const [localBookmarks, setLocalBookmarks] = useState(hookBookmarks);

  function handleToggleBookmark(id) {
    if (typeof hookToggleBookmark === 'function') {
      hookToggleBookmark(id);
    }
    setLocalBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  }

  // Parse questions from location.state safely
  const rawQuestions = location.state?.questions || location.state?.missedQuestions;
  const questions = Array.isArray(rawQuestions) ? rawQuestions : [];
  
  // Normalize userAnswers whether passed as an object ({0: 1}) or array ([1, null])
  const rawAnswers = location.state?.userAnswers;
  const userAnswers = Array.isArray(rawAnswers)
    ? rawAnswers
    : typeof rawAnswers === 'object' && rawAnswers !== null
    ? questions.map((_, idx) => rawAnswers[idx] ?? null)
    : Array(questions.length).fill(null);

  // Fallback if accessed directly without state
  if (!questions.length) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 shadow-xs">
          <AlertCircle className="h-6 w-6" strokeWidth={1.8} />
        </div>
        <h2 className="mt-4 text-base font-bold text-slate-900">No Review Session Found</h2>
        <p className="mt-1 text-xs text-slate-500">
          Session data resets on page refresh. Finish a quiz attempt to review clinical items with active rationales.
        </p>
        <Link
          to="/quiz"
          className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-cyan-700 px-5 text-xs font-semibold text-white transition-colors hover:bg-cyan-800"
        >
          Take Practice Drill
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      
      {/* Top Header & Navigation Bar */}
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Results</span>
          </button>

          <span className="font-mono text-xs font-semibold text-slate-400">
            {questions.length} Scenario{questions.length === 1 ? '' : 's'} Logged
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-800">
            <FileText className="h-3.5 w-3.5" />
            <span>Clinical Rationale Audit</span>
          </span>
        </div>
      </div>

      {/* Review Cards Stack */}
      <div className="mt-6 flex flex-col gap-5">
        {questions.map((q, idx) => (
          <ReviewCard
            key={q.id ?? q.stem ?? idx}
            question={q}
            index={idx}
            userAnswer={userAnswers[idx]}
            isBookmarked={localBookmarks.includes(q.id ?? idx)}
            onToggleBookmark={() => handleToggleBookmark(q.id ?? idx)}
          />
        ))}
      </div>

      {/* Bottom Sticky Action Footer */}
      <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs font-medium text-slate-500 hover:text-slate-900"
        >
          ↑ Return to Top
        </button>

        <button
          type="button"
          onClick={() => navigate('/quiz')}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-cyan-700 px-5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-cyan-800"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Launch Next CAT Drill</span>
        </button>
      </div>

    </div>
  );
}