import React, { useMemo } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  BarChart2, 
  ArrowRight, 
  ShieldCheck, 
  FileText,
  AlertCircle,
  HelpCircle,
  Check,
  X
} from 'lucide-react';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract session telemetry
  const { 
    score = 0, 
    total = 0, 
    category = 'Comprehensive Simulation', 
    mode = 'tutor',
    missedQuestions = [],
    questions = [],
    userAnswers = []
  } = location.state || {};

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const isPassing = percentage >= 65;

  // Deduplicate and sanitize remediation list
  const cleanMissedList = useMemo(() => {
    const list = missedQuestions.length > 0 ? missedQuestions : [];
    const seen = new Set();
    const result = [];

    list.forEach((item, index) => {
      const uniqueKey = item.id ?? item.question ?? item.stem ?? `item-${index}`;
      if (!seen.has(uniqueKey)) {
        seen.add(uniqueKey);
        result.push({
          ...item,
          stableId: uniqueKey,
          displayNumber: item.itemIndex ?? (index + 1)
        });
      }
    });

    return result;
  }, [missedQuestions]);

  // Fallback state if page is visited directly
  if (!location.state) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 shadow-xs">
          <AlertCircle className="h-7 w-7 text-amber-600" strokeWidth={1.8} />
        </div>
        <h2 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
          No Examination Log Found
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Complete a practice drill or adaptive mock simulation to review clinical scoring.
        </p>
        <Link
          to="/quiz"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-6 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-slate-800"
        >
          Launch Practice Suite
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* 1. TOP METRIC DEBRIEF HERO */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs">
          
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                <ShieldCheck className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Examination Assessment
                </span>
                <h2 className="text-base font-bold text-slate-900">
                  {category}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-semibold text-slate-600 uppercase">
                Mode: {mode}
              </span>
              <span className={`rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${
                isPassing 
                  ? 'border border-emerald-200 bg-emerald-50 text-emerald-800' 
                  : 'border border-red-200 bg-red-50 text-red-800'
              }`}>
                {isPassing ? 'Passing Standard Met' : 'Remediation Required'}
              </span>
            </div>
          </div>

          {/* Core Score Callout Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Verdict Summary */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  isPassing ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                }`}>
                  {isPassing ? (
                    <CheckCircle2 className="h-7 w-7" strokeWidth={2.2} />
                  ) : (
                    <AlertTriangle className="h-7 w-7" strokeWidth={2.2} />
                  )}
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                    {isPassing ? 'Clinical Benchmark Achieved' : 'Remediation Threshold Not Met'}
                  </h1>
                  <span className="text-xs text-slate-500">
                    NCSBN Clinical Judgment Standard: 65.0%
                  </span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 pt-2">
                {isPassing 
                  ? 'The candidate demonstrated consistent hypothesis prioritization and risk reduction within standard safety boundaries.'
                  : 'Critical decision cues were missed in priority scenarios. Review the evidence-based rationales below before retesting.'}
              </p>
            </div>

            {/* Structured Telemetry Tiles */}
            <div className="md:col-span-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Score
                </span>
                <p className="mt-1 font-mono text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {score}<span className="text-sm font-normal text-slate-400">/{total}</span>
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Accuracy
                </span>
                <p className={`mt-1 font-mono text-2xl sm:text-3xl font-extrabold ${
                  isPassing ? 'text-emerald-700' : 'text-red-600'
                }`}>
                  {percentage}%
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Target
                </span>
                <p className="mt-1 font-mono text-2xl sm:text-3xl font-bold text-slate-700">
                  65%
                </p>
              </div>
            </div>

          </div>

          {/* Primary Action Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate(category && category !== 'Comprehensive Simulation' ? `/quiz/${encodeURIComponent(category)}` : '/quiz')}
                className="inline-flex h-11 items-center justify-center gap-2.5 rounded-lg bg-slate-900 px-6 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-slate-800"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Retake Drill &amp; Remediate</span>
              </button>

              {questions.length > 0 && (
                <button
                  type="button"
                  onClick={() => navigate('/result', { state: { questions, userAnswers } })}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                  <FileText className="h-4 w-4 text-slate-500" />
                  <span>Review All Question Cards</span>
                </button>
              )}
            </div>

            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition-colors hover:text-slate-900"
            >
              <BarChart2 className="h-4 w-4 text-slate-400" />
              <span>Return to Diagnostic Dashboard</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </section>

        {/* 2. CLINICAL REMEDIATION LEDGER (Natural Document Flow, Zero Nested Scroll) */}
        {cleanMissedList.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-red-100 text-red-700">
                  <FileText className="h-4 w-4" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Priority Remediation Cases ({cleanMissedList.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Scenarios where clinical judgment or safety protocol was compromised
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs text-slate-400">
                Full Rationales Expanded
              </span>
            </div>

            {/* List of Missed Items */}
            <div className="space-y-4">
              {cleanMissedList.map((item) => {
                const stem = item.question || item.stem || 'Scenario stem unavailable.';
                const rationale = item.rationale || item.explanation || 'No rationale logged for this item.';
                const options = item.options || item.choices || [];
                const correctIdx = item.correctAnswerIndex ?? item.correctAnswer ?? item.correct ?? item.answer;

                return (
                  <article 
                    key={item.stableId}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-colors hover:border-slate-300"
                  >
                    {/* Item Heading */}
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 rounded-md bg-slate-900 px-2.5 py-1 font-mono text-xs font-bold text-white">
                        Item {item.displayNumber}
                      </span>
                      <h4 className="text-sm font-semibold leading-relaxed text-slate-900 sm:text-base">
                        {stem}
                      </h4>
                    </div>

                    {/* Options Breakdown if present */}
                    {options.length > 0 && (
                      <div className="mt-5 grid grid-cols-1 gap-2 pt-2 border-t border-slate-100 sm:grid-cols-2">
                        {options.map((opt, oIdx) => {
                          const isUserPick = item.selectedAnswer === oIdx;
                          const isCorrectPick = correctIdx === oIdx;

                          let stateClasses = 'border-slate-200 bg-slate-50 text-slate-700';
                          if (isCorrectPick) {
                            stateClasses = 'border-emerald-300 bg-emerald-50 text-emerald-900 font-semibold';
                          } else if (isUserPick) {
                            stateClasses = 'border-red-300 bg-red-50 text-red-900 line-through';
                          }

                          return (
                            <div 
                              key={oIdx}
                              className={`flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-xs ${stateClasses}`}
                            >
                              <span className="flex items-center gap-2">
                                <span className="font-mono text-[10px] text-slate-400">
                                  {String.fromCharCode(65 + oIdx)}.
                                </span>
                                <span>{opt}</span>
                              </span>

                              {isCorrectPick && (
                                <Check className="h-4 w-4 shrink-0 text-emerald-700" strokeWidth={2.5} />
                              )}
                              {isUserPick && !isCorrectPick && (
                                <X className="h-4 w-4 shrink-0 text-red-600" strokeWidth={2.5} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Grounded Clinical Rationale */}
                    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                        <HelpCircle className="h-3.5 w-3.5 text-slate-500" strokeWidth={2} />
                        <span>Clinical Rationale &amp; Evidence</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700">
                        {rationale}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}