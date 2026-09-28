// src/components/Quiz/ResultsView.jsx
import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  Clock, 
  FileText, 
  ArrowRight,
  Filter,
  Check,
  X
} from 'lucide-react';

export const ResultsView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filterView, setFilterView] = useState('all'); // 'all' | 'missed' | 'correct'

  // Hydrate from router state with localStorage fallback
  const results = useMemo(() => {
    if (location.state?.totalQuestions) return location.state;
    if (location.state?.state?.totalQuestions) return location.state.state;
    try {
      const stored = localStorage.getItem('nclex_last_result');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }, [location.state]);

  if (!results) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-6 text-center font-sans">
        <div className="bg-white border border-slate-200 rounded-xl p-8 max-w-md shadow-xs space-y-4">
          <FileText className="w-10 h-10 text-slate-400 mx-auto" />
          <h2 className="text-lg font-bold text-slate-900">No active exam results found</h2>
          <p className="text-xs text-slate-500">
            Take a computerized mock exam to generate your score report and full rationale breakdown.
          </p>
          <button
            onClick={() => navigate('/dashboard/exams')}
            className="w-full py-2.5 bg-[#071A3D] text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-[#102D63] transition-colors cursor-pointer"
          >
            Go to Question Banks
          </button>
        </div>
      </div>
    );
  }

  const {
    score = 0,
    totalQuestions = 0,
    correctCount = 0,
    incorrectCount = 0,
    timeSpent = '0m',
    subject = 'Clinical Examination',
    categorySlug = 'all',
    reviewList = [],
    mode = 'Timed Exam',
  } = results;

  const isPass = score >= 75;

  const filteredReviewList = reviewList.filter((item) => {
    if (filterView === 'missed') return !item.isCorrect;
    if (filterView === 'correct') return item.isCorrect;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F7F9FC] py-8 sm:py-12 px-4 sm:px-6 font-sans text-slate-800 antialiased">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Score & Pacing Header Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">
                Official Attempt Diagnostics • {mode}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                {subject}
              </h1>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => navigate(`/quiz/${categorySlug}`)}
                className="px-4 py-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Exam</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2.5 rounded bg-[#071A3D] hover:bg-[#102D63] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <span>Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* KPI Summary Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-400 uppercase block">Score Percentage</span>
              <div className={`text-3xl font-black mt-1 ${isPass ? 'text-emerald-600' : 'text-amber-600'}`}>
                {score}%
              </div>
              <span className={`text-[10px] font-bold mt-0.5 block ${isPass ? 'text-emerald-700' : 'text-amber-700'}`}>
                {isPass ? 'Qualified (≥75%)' : 'Needs Practice (<75%)'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-400 uppercase block">Correct Questions</span>
              <div className="text-3xl font-black text-slate-900 mt-1">
                {correctCount} / {totalQuestions}
              </div>
              <span className="text-[10px] text-slate-500 mt-0.5 block font-sans">
                {incorrectCount} missed questions
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-400 uppercase block">Time Spent</span>
              <div className="text-3xl font-black text-slate-900 mt-1">
                {timeSpent}
              </div>
              <span className="text-[10px] text-slate-500 mt-0.5 block font-sans">
                Cadence tracked
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-400 uppercase block">Licensure Standing</span>
              <div className="text-3xl font-black text-slate-900 mt-1">
                {isPass ? 'Meets Bar' : 'Remedial'}
              </div>
              <span className="text-[10px] text-blue-700 mt-0.5 block font-bold font-sans">
                NMCN / NGN Standard
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Question Review Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Question-by-Question Review</h2>
              <p className="text-xs text-slate-500">
                Inspect your selections, correct answers, and clinical rationales.
              </p>
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-mono">
              <button
                type="button"
                onClick={() => setFilterView('all')}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  filterView === 'all' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({reviewList.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterView('missed')}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  filterView === 'missed' ? 'bg-white text-rose-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Missed ({incorrectCount})
              </button>
              <button
                type="button"
                onClick={() => setFilterView('correct')}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  filterView === 'correct' ? 'bg-white text-emerald-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Correct ({correctCount})
              </button>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-6">
            {filteredReviewList.map((item, idx) => {
              const userPicks = Array.isArray(item.rawSelected)
                ? item.rawSelected
                : item.rawSelected !== undefined
                ? [item.rawSelected]
                : [];

              return (
                <div 
                  key={item.id || idx}
                  className={`p-5 rounded-xl border text-xs space-y-4 transition-colors ${
                    item.isCorrect 
                      ? 'border-emerald-200 bg-emerald-50/20' 
                      : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="font-bold text-slate-600 tracking-wider">
                      ITEM {idx + 1} OF {reviewList.length}
                    </span>
                    <span className={`font-bold uppercase flex items-center gap-1.5 px-2.5 py-0.5 rounded ${
                      item.isCorrect 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {item.isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct Selection
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> Incorrect
                        </>
                      )}
                    </span>
                  </div>

                  <p className="text-base font-bold text-slate-900 leading-snug">
                    {item.question}
                  </p>

                  {/* Options List */}
                  {item.options && item.options.length > 0 && (
                    <div className="space-y-2 pt-1 font-sans">
                      {item.options.map((optText, optIdx) => {
                        const letter = String.fromCharCode(65 + optIdx);
                        const isCorrectOption = (item.correctIndices || []).includes(optIdx);
                        const isChosenByUser = userPicks.includes(optIdx);

                        let optClasses = 'border-slate-200 bg-white text-slate-700';
                        if (isCorrectOption) {
                          optClasses = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-600';
                        } else if (isChosenByUser && !isCorrectOption) {
                          optClasses = 'border-rose-600 bg-rose-50 text-rose-950 font-semibold ring-1 ring-rose-600';
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`p-3 rounded-lg border text-xs flex items-center justify-between transition-colors ${optClasses}`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-[10px] ${
                                isCorrectOption
                                  ? 'bg-emerald-600 text-white'
                                  : isChosenByUser
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-slate-100 text-slate-600'
                              }`}>
                                {letter}
                              </span>
                              <span>{optText}</span>
                            </div>

                            <div className="flex items-center gap-2 font-mono text-[10px]">
                              {isChosenByUser && !isCorrectOption && (
                                <span className="text-rose-700 font-bold flex items-center gap-1">
                                  <X className="w-3 h-3" /> Your Choice
                                </span>
                              )}
                              {isCorrectOption && (
                                <span className="text-emerald-700 font-bold flex items-center gap-1">
                                  <Check className="w-3 h-3" /> Correct Answer
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Clinical Rationale Box */}
                  {item.rationale && (
                    <div className="p-4 bg-white border border-slate-200 rounded-lg text-slate-700 leading-relaxed font-sans text-xs space-y-1 mt-3">
                      <div className="flex items-center gap-1.5 text-blue-700 font-bold font-mono text-[10px] uppercase">
                        <span>Clinical Rationale</span>
                      </div>
                      <p>{item.rationale}</p>

                      {item.clinicalPearl && (
                        <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-amber-900 bg-amber-50/60 p-2 rounded">
                          <strong>Clinical Pearl: </strong>{item.clinicalPearl}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResultsView;