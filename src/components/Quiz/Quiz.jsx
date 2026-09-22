import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  ChevronRight, 
  ChevronLeft, 
  MinusCircle, 
  AlertCircle, 
  LayoutGrid, 
  CheckSquare, 
  Pause
} from 'lucide-react';
import QuestionNavigatorModal from './QuestionNavigatorModal.jsx';
import TimeWarningBanner from './TimeWarningBanner.jsx';
import PauseExamModal from './PauseExamModal.jsx';
import { questions as allQuestions } from '../../data/questions.js';

export default function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Dynamic Question Set Selection (Custom Remediation Set vs Category vs Full Bank)
  const activeQuestions = useMemo(() => {
    if (location.state?.customQuestions?.length > 0) {
      return location.state.customQuestions;
    }
    if (!category || category.toLowerCase() === 'all') {
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 85);
    }
    const filtered = allQuestions.filter(
      (q) => q.category?.toLowerCase() === category.toLowerCase()
    );
    return filtered.length > 0 ? filtered : allQuestions.slice(0, 50);
  }, [category, location.state]);

  // 2. Exam State Tracking
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [savedItems, setSavedItems] = useState([]);
  const [examMode, setExamMode] = useState('tutor'); // 'tutor' | 'timed'
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => activeQuestions.length * 72);
  const [struckOptions, setStruckOptions] = useState({});
  const [showNavigator, setShowNavigator] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [warningDismissed, setWarningDismissed] = useState(false);

  // 3. Current Question Schema & SATA Normalization
  const currentQ = activeQuestions[currentIdx] || {};
  const questionOptions = useMemo(() => {
    return currentQ.options || currentQ.choices || currentQ.answers || [];
  }, [currentQ]);

  const isSATA = useMemo(() => {
    if (currentQ.type === 'sata' || currentQ.type === 'multiple-response') return true;
    const val = currentQ.correctAnswer ?? currentQ.correct ?? currentQ.answer;
    return Array.isArray(val);
  }, [currentQ]);

  const correctOptionIndices = useMemo(() => {
    const val = currentQ.correctAnswer ?? currentQ.correct ?? currentQ.answer;
    if (Array.isArray(val)) {
      return val.map((v) => {
        if (typeof v === 'string' && v.length === 1) {
          const code = v.toUpperCase().charCodeAt(0);
          if (code >= 65 && code <= 90) return code - 65;
        }
        return Number(v);
      });
    }
    if (typeof val === 'string' && val.length === 1) {
      const code = val.toUpperCase().charCodeAt(0);
      if (code >= 65 && code <= 90) return [code - 65];
    }
    return typeof val === 'number' ? [val] : [];
  }, [currentQ]);

  const currentAnswer = userAnswers[currentIdx];
  const hasAnswered = isSATA
    ? Array.isArray(currentAnswer) && currentAnswer.length > 0
    : currentAnswer !== undefined;

  const isCorrect = useMemo(() => {
    if (!hasAnswered) return false;
    if (isSATA) {
      const selected = Array.isArray(currentAnswer) ? currentAnswer : [];
      if (selected.length !== correctOptionIndices.length) return false;
      return selected.every((idx) => correctOptionIndices.includes(idx));
    }
    return currentAnswer === correctOptionIndices[0];
  }, [hasAnswered, isSATA, currentAnswer, correctOptionIndices]);

  // 4. Timer Logic
  useEffect(() => {
    if (examMode === 'timed' && !isSubmitted && !isPaused) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleFinalSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [examMode, isSubmitted, isPaused]);

  function handleSelectOption(optionIndex) {
    if (examMode === 'tutor' && hasAnswered && !isSATA) return;

    if (isSATA) {
      const currentSelected = Array.isArray(userAnswers[currentIdx])
        ? userAnswers[currentIdx]
        : [];
      const updated = currentSelected.includes(optionIndex)
        ? currentSelected.filter((i) => i !== optionIndex)
        : [...currentSelected, optionIndex].sort((a, b) => a - b);

      setUserAnswers((prev) => ({
        ...prev,
        [currentIdx]: updated
      }));
    } else {
      setUserAnswers((prev) => ({
        ...prev,
        [currentIdx]: optionIndex
      }));
    }
  }

  function toggleStrikethrough(optIdx, e) {
    e.stopPropagation();
    setStruckOptions((prev) => {
      const currentStruck = prev[currentIdx] || [];
      const updated = currentStruck.includes(optIdx)
        ? currentStruck.filter((i) => i !== optIdx)
        : [...currentStruck, optIdx];
      return { ...prev, [currentIdx]: updated };
    });
  }

  function toggleBookmark() {
    setSavedItems((prev) =>
      prev.includes(currentIdx)
        ? prev.filter((i) => i !== currentIdx)
        : [...prev, currentIdx]
    );
  }

  // 5. Final Submission -> Evaluates NGN Standard & Routes to /result
  function handleFinalSubmit() {
    setIsSubmitted(true);

    let calculatedScore = 0;
    const missedQuestionsList = [];

    activeQuestions.forEach((q, idx) => {
      const val = q.correctAnswer ?? q.correct ?? q.answer;
      const isQuesSATA = q.type === 'sata' || Array.isArray(val);
      const userSelected = userAnswers[idx];

      let correctList = [];
      if (Array.isArray(val)) {
        correctList = val.map((v) => (typeof v === 'string' ? v.charCodeAt(0) - 65 : Number(v)));
      } else {
        correctList = [typeof val === 'string' ? val.charCodeAt(0) - 65 : Number(val)];
      }

      if (isQuesSATA) {
        const selected = Array.isArray(userSelected) ? userSelected : [];
        const correctPicks = selected.filter((i) => correctList.includes(i)).length;
        const incorrectPicks = selected.filter((i) => !correctList.includes(i)).length;
        const rawPoints = Math.max(0, correctPicks - incorrectPicks);
        const itemScore = rawPoints / Math.max(correctList.length, 1);

        if (itemScore === 1) {
          calculatedScore += 1;
        } else {
          missedQuestionsList.push({
            ...q,
            itemIndex: idx + 1,
            selectedAnswer: selected,
            correctAnswerIndex: correctList,
            isSATA: true
          });
        }
      } else {
        if (userSelected !== undefined && userSelected === correctList[0]) {
          calculatedScore += 1;
        } else {
          missedQuestionsList.push({
            ...q,
            itemIndex: idx + 1,
            selectedAnswer: userSelected,
            correctAnswerIndex: correctList[0],
            isSATA: false
          });
        }
      }
    });

    const sessionCategory = location.state?.categoryTitle || category || 'Comprehensive CAT Simulation';

    const historyRecord = {
      id: Date.now(),
      date: new Date().toISOString(),
      category: sessionCategory,
      score: calculatedScore,
      total: activeQuestions.length,
      mode: examMode
    };

    try {
      const existing = JSON.parse(localStorage.getItem('nclex_quiz_history') || '[]');
      localStorage.setItem('nclex_quiz_history', JSON.stringify([historyRecord, ...existing]));
    } catch (e) {
      console.error('Failed to update quiz history in localStorage:', e);
    }

    navigate('/result', {
      state: {
        score: calculatedScore,
        total: activeQuestions.length,
        category: sessionCategory,
        mode: examMode,
        missedQuestions: missedQuestionsList,
        questions: activeQuestions,
        userAnswers: userAnswers
      }
    });
  }

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  if (!activeQuestions.length) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <AlertCircle className="mx-auto h-8 w-8 text-[#62697A]" strokeWidth={1.8} />
        <h2 className="mt-3 text-sm font-semibold text-[#202535]">No questions available for this module</h2>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      
      {/* 1. Subtle Telemetry & Tools Bar */}
      <div className="mb-8 flex items-center justify-between border-b border-[#DDD9CC] pb-4">
        
        {/* Left: Item Counter & Category */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold tracking-wider text-[#1D2A59]">
            ITEM {currentIdx + 1} OF {activeQuestions.length}
          </span>
          <span className="text-[#DDD9CC]">•</span>
          <span className="text-xs font-medium text-[#62697A]">
            {location.state?.categoryTitle || currentQ.category || 'Clinical Adaptation'}
          </span>
        </div>

        {/* Right: Mode Toggle, Timer, Pause, Grid Navigator, Bookmark */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center rounded border border-[#DDD9CC] bg-[#FBF8EF] p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setExamMode('tutor')}
              className={`rounded px-2.5 py-1 font-medium transition-colors ${
                examMode === 'tutor'
                  ? 'bg-[#1D2A59] text-[#F4EEDC]'
                  : 'text-[#62697A] hover:text-[#202535]'
              }`}
            >
              Tutor
            </button>
            <button
              type="button"
              onClick={() => setExamMode('timed')}
              className={`rounded px-2.5 py-1 font-medium transition-colors ${
                examMode === 'timed'
                  ? 'bg-[#1D2A59] text-[#F4EEDC]'
                  : 'text-[#62697A] hover:text-[#202535]'
              }`}
            >
              Timed
            </button>
          </div>

          {examMode === 'timed' && (
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 font-mono text-xs font-semibold ${
                timeLeft < 300 ? 'text-[#A65353]' : 'text-[#202535]'
              }`}>
                <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
                <span>{formatTime(timeLeft)}</span>
              </div>

              <button
                type="button"
                onClick={() => setIsPaused(true)}
                title="Pause simulation"
                className="flex h-8 w-8 items-center justify-center rounded border border-[#DDD9CC] bg-[#FBF8EF] text-[#62697A] hover:border-[#1D2A59] hover:text-[#1D2A59]"
              >
                <Pause className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowNavigator(true)}
            title="Open Question Navigator Grid"
            className="flex h-8 items-center gap-1.5 rounded border border-[#DDD9CC] bg-[#FBF8EF] px-2.5 text-xs font-semibold text-[#202535] transition-colors hover:border-[#1D2A59] hover:text-[#1D2A59]"
          >
            <LayoutGrid className="h-3.5 w-3.5" strokeWidth={1.8} />
            <span className="hidden sm:inline">Grid</span>
          </button>

          <button
            type="button"
            onClick={toggleBookmark}
            title={savedItems.includes(currentIdx) ? 'Bookmarked' : 'Bookmark item'}
            className={`flex h-8 w-8 items-center justify-center rounded border transition-colors ${
              savedItems.includes(currentIdx)
                ? 'border-[#B89A5A] bg-[#B89A5A] text-white'
                : 'border-[#DDD9CC] bg-[#FBF8EF] text-[#62697A] hover:border-[#1D2A59] hover:text-[#1D2A59]'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* 2. Critical Pacing Warning Banner (< 5 min remaining) */}
      <TimeWarningBanner
        timeLeft={timeLeft}
        isVisible={examMode === 'timed' && timeLeft <= 300 && !warningDismissed && !isSubmitted}
        onDismiss={() => setWarningDismissed(true)}
      />

      {/* 3. Clinical Workspace */}
      <main>
        <div className="flex items-center justify-between text-xs text-[#62697A]">
          <span className="font-semibold uppercase tracking-wider text-[#283A78]">
            NCSBN Clinical Judgment • {currentQ.subCategory || 'Prioritize Hypotheses'}
          </span>
          <span className={`font-semibold ${isSATA ? 'text-[#B89A5A]' : 'text-slate-500'}`}>
            {isSATA ? 'Select All That Apply (Multi-Response)' : 'Single Best Response'}
          </span>
        </div>

        <h1 className="mt-4 text-lg font-medium leading-relaxed tracking-tight text-[#202535] sm:text-xl">
          {currentQ.question || currentQ.stem || 'Scenario details currently unavailable.'}
        </h1>

        {isSATA && (
          <p className="mt-2 text-xs font-semibold text-[#283A78] italic">
            Select all choices that are clinically indicated.
          </p>
        )}

        {/* 4. Options List */}
        <div className="mt-6 space-y-3">
          {questionOptions.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = isSATA
              ? Array.isArray(currentAnswer) && currentAnswer.includes(idx)
              : currentAnswer === idx;
            const isStruck = (struckOptions[currentIdx] || []).includes(idx);

            let rowStyle = 'border-[#DDD9CC] bg-[#FBF8EF] hover:border-[#62697A]';
            let badgeStyle = 'text-[#62697A] border-[#DDD9CC] bg-[#F4EEDC]';

            if (isSelected) {
              rowStyle = 'border-[#283A78] bg-[#FBF8EF] ring-1 ring-[#283A78]';
              badgeStyle = 'text-[#F4EEDC] border-[#283A78] bg-[#283A78]';
            }

            if (examMode === 'tutor' && hasAnswered) {
              const isOptionCorrect = correctOptionIndices.includes(idx);
              if (isOptionCorrect) {
                rowStyle = 'border-[#47705A] bg-[#47705A]/10 ring-1 ring-[#47705A]';
                badgeStyle = 'text-white border-[#47705A] bg-[#47705A]';
              } else if (isSelected && !isOptionCorrect) {
                rowStyle = 'border-[#A65353] bg-[#A65353]/10 ring-1 ring-[#A65353]';
                badgeStyle = 'text-white border-[#A65353] bg-[#A65353]';
              }
            }

            return (
              <div
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`group relative flex cursor-pointer items-center justify-between rounded border px-4 py-3.5 transition-colors ${rowStyle}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${isSATA ? 'rounded-md' : 'rounded-full'} border font-mono text-xs font-semibold ${badgeStyle}`}>
                    {isSATA && isSelected ? (
                      <CheckSquare className="h-3.5 w-3.5" />
                    ) : (
                      letter
                    )}
                  </span>

                  <span className={`text-sm font-medium leading-normal ${
                    isStruck ? 'line-through text-[#62697A]/40' : 'text-[#202535]'
                  }`}>
                    {option}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => toggleStrikethrough(idx, e)}
                  title={isStruck ? 'Restore choice' : 'Eliminate choice'}
                  className={`p-1 transition-opacity ${
                    isStruck 
                      ? 'text-[#A65353] opacity-100' 
                      : 'text-[#62697A]/40 opacity-0 group-hover:opacity-100 hover:text-[#202535]'
                  }`}
                >
                  <MinusCircle className="h-4 w-4" strokeWidth={1.8} />
                </button>
              </div>
            );
          })}
        </div>

        {/* 5. Tutor Mode Rationale Drawer */}
        {examMode === 'tutor' && hasAnswered && (
          <div className="mt-8 rounded border border-[#DDD9CC] bg-[#FBF8EF] p-5">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-[#47705A]" strokeWidth={2} />
                  <span className="text-xs font-bold tracking-wide uppercase text-[#47705A]">
                    Correct Clinical Judgment
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4 text-[#A65353]" strokeWidth={2} />
                  <span className="text-xs font-bold tracking-wide uppercase text-[#A65353]">
                    Remediation Required
                  </span>
                </>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[#202535]">
              <strong className="font-semibold text-[#1D2A59]">Rationale: </strong>
              {currentQ.rationale || currentQ.explanation || 'Assess ABCs, monitor vital signs, and initiate emergency protocols according to clinical guidelines.'}
            </p>
          </div>
        )}

        {/* 6. Navigation Controls */}
        <div className="mt-10 flex items-center justify-between border-t border-[#DDD9CC] pt-6">
          <button
            type="button"
            disabled={currentIdx === 0}
            onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
            className="inline-flex h-11 items-center justify-center gap-2 rounded border border-[#DDD9CC] bg-[#FBF8EF] px-5 text-xs font-semibold text-[#202535] transition-colors hover:bg-[#F4EEDC] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
            <span>Previous Item</span>
          </button>

          {currentIdx === activeQuestions.length - 1 ? (
            <button
              type="button"
              onClick={handleFinalSubmit}
              className="inline-flex h-11 items-center justify-center gap-2 rounded bg-[#47705A] px-6 text-xs font-semibold text-[#F4EEDC] transition-colors hover:bg-[#47705A]/90 focus:outline-none"
            >
              <span>Finish Examination</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrentIdx((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
              className="inline-flex h-11 items-center justify-center gap-2 rounded bg-[#1D2A59] px-6 text-xs font-semibold text-[#F4EEDC] transition-colors hover:bg-[#283A78] focus:outline-none"
            >
              <span>Next Item</span>
              <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
          )}
        </div>
      </main>

      {/* 7. Question Navigator Modal */}
      <QuestionNavigatorModal
        isOpen={showNavigator}
        onClose={() => setShowNavigator(false)}
        totalQuestions={activeQuestions ? activeQuestions.length : 0}
        currentIdx={currentIdx}
        userAnswers={userAnswers}
        savedItems={savedItems}
        onSelectQuestion={(idx) => setCurrentIdx(idx)}
      />

      {/* 8. Pause Simulation Modal */}
      <PauseExamModal
        isOpen={isPaused}
        onResume={() => setIsPaused(false)}
        answeredCount={Object.keys(userAnswers).length}
        totalCount={activeQuestions.length}
      />

    </div>
  );
}