// src/components/Quiz/Quiz.jsx
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

import * as coursesModule from '../../data/coursesIndex.js';
import * as questionsModule from '../../data/questions.js';
import { selectAdaptiveExamSet, shuffleQuestionOptions } from '../../utils/selectionEngine.js';
import QuestionNavigatorModal from './QuestionNavigatorModal.jsx';
import TimeWarningBanner from './TimeWarningBanner.jsx';
import PauseExamModal from './PauseExamModal.jsx';

// Safe resolution of data exports
const COURSE_REGISTRY = coursesModule.COURSE_REGISTRY || coursesModule.default || {};
const allQuestions = questionsModule.questions || questionsModule.default || [];

export default function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const config = location.state?.config;

  // 1. Question Set Slicing with Multi-Strategy Resolution
  const activeQuestions = useMemo(() => {
    if (location.state?.customQuestions?.length > 0) {
      return location.state.customQuestions.map(shuffleQuestionOptions);
    }

    const cleanParam = (category || 'all').toLowerCase().trim();
    let targetCourseKey = category || 'medicalSurgicalNursing';
    let courseData = COURSE_REGISTRY ? COURSE_REGISTRY[targetCourseKey] : null;

    if (!courseData && COURSE_REGISTRY) {
      const matchingKey = Object.keys(COURSE_REGISTRY).find((key) => {
        const k = key.toLowerCase();
        return k === cleanParam || 
               k.replace(/nursing|practice/g, '') === cleanParam.replace(/nursing|practice/g, '');
      });
      if (matchingKey) {
        targetCourseKey = matchingKey;
        courseData = COURSE_REGISTRY[matchingKey];
      }
    }

    if (courseData && Array.isArray(courseData.questions) && courseData.questions.length > 0) {
      const attemptCount = config?.itemCount || courseData.questionsPerAttempt || 50;
      return selectAdaptiveExamSet(targetCourseKey, courseData.questions, attemptCount);
    }

    if (!Array.isArray(allQuestions) || allQuestions.length === 0) {
      return [];
    }

    if (cleanParam === 'all') {
      const attemptCount = config?.itemCount || 50;
      return selectAdaptiveExamSet('all', allQuestions, attemptCount);
    }

    const filtered = allQuestions.filter((q) => {
      const qCat = (q.category || q.subject || q.discipline || q.course || '').toLowerCase().trim();
      const qSub = (q.subCategory || q.subtopic || q.topic || '').toLowerCase().trim();
      const combined = `${qCat} ${qSub}`;

      if (qCat === cleanParam) return true;
      if (cleanParam.includes('medicalsurgical') || cleanParam.includes('medsurg')) {
        return combined.includes('medical') || combined.includes('surgical') || combined.includes('med-surg');
      }
      if (cleanParam.includes('maternal') || cleanParam.includes('midwifery') || cleanParam.includes('obstetric')) {
        return combined.includes('maternal') || combined.includes('obstetric') || combined.includes('midwifery') || combined.includes('labor');
      }
      if (cleanParam.includes('reproductive')) {
        return combined.includes('reproductive') || combined.includes('family planning') || combined.includes('contraceptive');
      }
      if (cleanParam.includes('paediatric') || cleanParam.includes('pediatric')) {
        return combined.includes('paediatric') || combined.includes('pediatric') || combined.includes('child');
      }
      if (cleanParam.includes('mental') || cleanParam.includes('psych')) {
        return combined.includes('mental') || combined.includes('psychiatric') || combined.includes('psych');
      }
      if (cleanParam.includes('emergency') || cleanParam.includes('trauma') || cleanParam.includes('triage')) {
        return combined.includes('emergency') || combined.includes('disaster') || combined.includes('triage') || combined.includes('trauma');
      }
      if (cleanParam.includes('primary') || cleanParam.includes('phc') || cleanParam.includes('community')) {
        return combined.includes('primary') || combined.includes('phc') || combined.includes('community');
      }
      if (cleanParam.includes('homehealth') || cleanParam.includes('geriatric') || cleanParam.includes('palliative')) {
        return combined.includes('home') || combined.includes('geriatric') || combined.includes('palliative');
      }
      if (cleanParam.includes('research') || cleanParam.includes('biostatistics')) {
        return combined.includes('research') || combined.includes('biostat');
      }
      if (cleanParam.includes('informatics') || cleanParam.includes('digital')) {
        return combined.includes('informatics') || combined.includes('digital') || combined.includes('telehealth');
      }
      if (cleanParam.includes('seminar') || cleanParam.includes('ebp')) {
        return combined.includes('seminar') || combined.includes('evidence-based');
      }
      if (cleanParam.includes('social') || cleanParam.includes('behavioral') || cleanParam.includes('sociology')) {
        return combined.includes('social') || combined.includes('behavior') || combined.includes('sociology');
      }
      if (cleanParam.includes('nutrition') || cleanParam.includes('diet')) {
        return combined.includes('nutrition') || combined.includes('diet');
      }
      if (cleanParam.includes('anatomy') || cleanParam.includes('physiology') || cleanParam.includes('anp')) {
        return combined.includes('anatomy') || combined.includes('physiology') || combined.includes('anp');
      }
      if (cleanParam.includes('pharmacology') || cleanParam.includes('pharma') || cleanParam.includes('drug')) {
        return combined.includes('pharmacology') || combined.includes('pharma') || combined.includes('drug');
      }
      if (cleanParam.includes('microbiology') || cleanParam.includes('infection')) {
        return combined.includes('microbiology') || combined.includes('parasitology') || combined.includes('infection');
      }
      if (cleanParam.includes('fundamental') || cleanParam.includes('foundation')) {
        return combined.includes('fundamental') || combined.includes('foundation');
      }
      if (cleanParam.includes('ethic') || cleanParam.includes('jurisprudence') || cleanParam.includes('legal')) {
        return combined.includes('ethic') || combined.includes('jurisprudence') || combined.includes('legal') || combined.includes('n143');
      }
      if (cleanParam.includes('politic') || cleanParam.includes('policy') || cleanParam.includes('management') || cleanParam.includes('leadership')) {
        return combined.includes('politic') || combined.includes('policy') || combined.includes('management') || combined.includes('leadership');
      }
      if (cleanParam.includes('cardio')) return combined.includes('cardio') || combined.includes('hemodynamic');
      if (cleanParam.includes('respiratory')) return combined.includes('respiratory') || combined.includes('abg') || combined.includes('ventilation');
      if (cleanParam.includes('dosage')) return combined.includes('dosage') || combined.includes('calculation') || combined.includes('drip');
      if (cleanParam.includes('obstetricemergencies')) return combined.includes('obstetric') || combined.includes('pph') || combined.includes('eclampsia');

      return false;
    });

    const fallbackPool = filtered.length > 0 ? filtered : allQuestions;
    const attemptCount = Math.min(config?.itemCount || 50, fallbackPool.length);

    return selectAdaptiveExamSet(category || 'defaultPool', fallbackPool, attemptCount);
  }, [category, location.state, config]);

  // 2. Exam States
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [examMode, setExamMode] = useState(config?.examMode || 'tutor');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sataSubmittedMap, setSataSubmittedMap] = useState({});

  const [savedItems, setSavedItems] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('nclex_bookmarked_questions') || '[]');
      return stored.map((b) => b.id || b.question);
    } catch {
      return [];
    }
  });

  const initialTime = useMemo(() => {
    const cadence = config?.secondsPerQuestion || 72;
    return (activeQuestions.length || 50) * cadence;
  }, [config, activeQuestions]);

  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [struckOptions, setStruckOptions] = useState({});
  const [showNavigator, setShowNavigator] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [warningDismissed, setWarningDismissed] = useState(false);

  useEffect(() => {
    if (config?.examMode) {
      setExamMode(config.examMode);
    }
    if (activeQuestions.length > 0) {
      const cadence = config?.secondsPerQuestion || 72;
      setTimeLeft(activeQuestions.length * cadence);
    }
  }, [config, activeQuestions]);

  // 3. Question Normalization
  const currentQ = activeQuestions[currentIdx] || {};
  const questionOptions = useMemo(() => {
    return currentQ.options || currentQ.choices || currentQ.answers || [];
  }, [currentQ]);

  const isSATA = useMemo(() => {
    if (currentQ.type === 'sata' || currentQ.type === 'multiple-response') return true;
    const val = currentQ.correctAnswer ?? currentQ.correct ?? currentQ.answer ?? currentQ.correctOption;
    return Array.isArray(val);
  }, [currentQ]);

  const currentIdentifier = useMemo(() => {
    return currentQ.id || `q-${currentIdx}-${currentQ.question?.slice(0, 25)}`;
  }, [currentQ, currentIdx]);

  const isBookmarked = useMemo(() => {
    return (
      savedItems.includes(currentIdx) ||
      savedItems.includes(currentIdentifier) ||
      savedItems.includes(currentQ.question)
    );
  }, [savedItems, currentIdx, currentIdentifier, currentQ]);

  const correctOptionIndices = useMemo(() => {
    const raw = currentQ.correctAnswer ?? currentQ.correct ?? currentQ.answer ?? currentQ.correctOption;
    const opts = questionOptions.map((o) => {
      if (typeof o === 'string') return o.trim().toLowerCase();
      if (o && typeof o === 'object') return (o.text || o.label || '').trim().toLowerCase();
      return '';
    });

    const resolveItem = (val) => {
      if (val === undefined || val === null) return null;
      if (typeof val === 'number') return val;
      if (typeof val === 'string') {
        const trimmed = val.trim();
        if (trimmed.length === 1) {
          const upper = trimmed.toUpperCase();
          if (upper >= 'A' && upper <= 'Z') return upper.charCodeAt(0) - 65;
        }
        if (!isNaN(Number(trimmed))) return Number(trimmed);
        const textIdx = opts.indexOf(trimmed.toLowerCase());
        if (textIdx !== -1) return textIdx;
      }
      return null;
    };

    if (Array.isArray(raw)) {
      return raw.map(resolveItem).filter((v) => v !== null);
    }

    const single = resolveItem(raw);
    return single !== null ? [single] : [];
  }, [currentQ, questionOptions]);

  const currentAnswer = userAnswers[currentIdx];
  const hasAnswered = isSATA
    ? examMode === 'tutor' 
      ? Boolean(sataSubmittedMap[currentIdx])
      : Array.isArray(currentAnswer) && currentAnswer.length > 0
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

  // 4. Timer Countdown
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
  }, [examMode, isSubmitted, isPaused, activeQuestions, userAnswers]);

  function handleSelectOption(optionIndex) {
    if (examMode === 'tutor' && hasAnswered && !isSATA) return;
    if (examMode === 'tutor' && isSATA && sataSubmittedMap[currentIdx]) return;

    if (isSATA) {
      const currentSelected = Array.isArray(userAnswers[currentIdx])
        ? userAnswers[currentIdx]
        : [];
      const updated = currentSelected.includes(optionIndex)
        ? currentSelected.filter((i) => i !== optionIndex)
        : [...currentSelected, optionIndex].sort((a, b) => a - b);

      setUserAnswers((prev) => ({
        ...prev,
        [currentIdx]: updated,
      }));
    } else {
      setUserAnswers((prev) => ({
        ...prev,
        [currentIdx]: optionIndex,
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
    if (!currentQ.question && !currentQ.stem) return;

    try {
      const existing = JSON.parse(localStorage.getItem('nclex_bookmarked_questions') || '[]');
      const alreadySaved = existing.some(
        (b) => (b.id && b.id === currentIdentifier) || b.question === currentQ.question
      );

      let updatedList;
      if (alreadySaved) {
        updatedList = existing.filter(
          (b) => (b.id ? b.id !== currentIdentifier : b.question !== currentQ.question)
        );
        setSavedItems((prev) =>
          prev.filter((item) => item !== currentIdentifier && item !== currentIdx && item !== currentQ.question)
        );
      } else {
        const bookmarkPayload = {
          id: currentIdentifier,
          question: currentQ.question || currentQ.stem,
          options: questionOptions,
          correctAnswer: currentQ.correctAnswer ?? currentQ.correct ?? currentQ.answer,
          rationale: currentQ.rationale || currentQ.explanation,
          clinicalPearl: currentQ.clinicalPearl,
          category: currentQ.category || currentQ.subject || courseDisplayName,
          topic: currentQ.topic || 'Clinical Nursing Judgment',
          type: currentQ.type || (isSATA ? 'sata' : 'single'),
          savedAt: new Date().toISOString(),
        };
        updatedList = [bookmarkPayload, ...existing];
        setSavedItems((prev) => [...prev, currentIdentifier, currentIdx]);
      }

      localStorage.setItem('nclex_bookmarked_questions', JSON.stringify(updatedList));
    } catch (err) {
      console.error('Failed to update bookmarks in storage:', err);
    }
  }

  // 5. Final Submission
  function handleFinalSubmit() {
    setIsSubmitted(true);

    let calculatedScore = 0;
    const missedQuestionsList = [];

    activeQuestions.forEach((q, idx) => {
      const val = q.correctAnswer ?? q.correct ?? q.answer ?? q.correctOption;
      const isQuesSATA = q.type === 'sata' || q.type === 'multiple-response' || Array.isArray(val);
      const userSelected = userAnswers[idx];

      const rawOpts = q.options || q.choices || q.answers || [];
      const opts = rawOpts.map((o) => {
        if (typeof o === 'string') return o.trim().toLowerCase();
        if (o && typeof o === 'object') return (o.text || o.label || '').trim().toLowerCase();
        return '';
      });

      const resolveItem = (v) => {
        if (v === undefined || v === null) return null;
        if (typeof v === 'number') return v;
        if (typeof v === 'string') {
          const trimmed = v.trim();
          if (trimmed.length === 1 && trimmed.toUpperCase() >= 'A' && trimmed.toUpperCase() <= 'Z') {
            return trimmed.toUpperCase().charCodeAt(0) - 65;
          }
          if (!isNaN(Number(trimmed))) return Number(trimmed);
          const matchIdx = opts.indexOf(trimmed.toLowerCase());
          if (matchIdx !== -1) return matchIdx;
        }
        return null;
      };

      let correctList = [];
      if (Array.isArray(val)) {
        correctList = val.map(resolveItem).filter((v) => v !== null);
      } else if (val !== undefined && val !== null) {
        const item = resolveItem(val);
        if (item !== null) correctList = [item];
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
            isSATA: true,
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
            isSATA: false,
          });
        }
      }
    });

    const activeCourseConfig = COURSE_REGISTRY ? COURSE_REGISTRY[category] : null;
    const sessionCategory =
      config?.categoryTitle ||
      location.state?.categoryTitle ||
      activeCourseConfig?.name ||
      category ||
      'Comprehensive Licensure Simulation';

    const percentageScore = activeQuestions.length > 0 
      ? Math.round((calculatedScore / activeQuestions.length) * 100) 
      : 0;
    const totalTimeAllowed = (activeQuestions.length || 50) * (config?.secondsPerQuestion || 72);
    const timeSpentSeconds = Math.max(0, totalTimeAllowed - timeLeft);

    const formatDuration = (secs) => {
      const mins = Math.floor(secs / 60);
      const rem = secs % 60;
      return `${mins}m ${rem}s`;
    };

    const nowIso = new Date().toISOString();
    const sessionRecord = {
      id: `exam-${Date.now()}`,
      date: nowIso,
      category: sessionCategory,
      subjectName: sessionCategory,
      slug: category || 'fundamentals',
      score: percentageScore,
      correctCount: calculatedScore,
      total: activeQuestions.length,
      totalQuestions: activeQuestions.length,
      timeSpent: formatDuration(timeSpentSeconds),
      timeSpentSeconds: timeSpentSeconds,
      mode: examMode === 'timed' ? 'Timed Exam' : 'Tutor Mode',
      missedQuestions: missedQuestionsList,
    };

    try {
      const existingHistory = JSON.parse(localStorage.getItem('studyHistory') || '[]');
      localStorage.setItem('studyHistory', JSON.stringify([sessionRecord, ...existingHistory]));
      const existingQuizResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
      localStorage.setItem('quizResults', JSON.stringify([sessionRecord, ...existingQuizResults]));
      const existingLegacy = JSON.parse(localStorage.getItem('nclex_quiz_history') || '[]');
      localStorage.setItem('nclex_quiz_history', JSON.stringify([sessionRecord, ...existingLegacy]));
    } catch (e) {
      console.warn('Could not write exam history', e);
    }

    try {
      const rawUserProg = localStorage.getItem('nclex_user_progress');
      const prog = rawUserProg ? JSON.parse(rawUserProg) : {
        totalAnswered: 0,
        totalCorrect: 0,
        streakDays: 1,
        lastStudyDate: null,
        totalTimeSpentSec: 0,
        history: [],
        byCategory: {}
      };

      const today = nowIso.split('T')[0];
      const catStats = prog.byCategory[sessionCategory] || { answered: 0, correct: 0 };
      
      const updatedProg = {
        ...prog,
        totalAnswered: (prog.totalAnswered || 0) + activeQuestions.length,
        totalCorrect: (prog.totalCorrect || 0) + calculatedScore,
        lastStudyDate: today,
        totalTimeSpentSec: (prog.totalTimeSpentSec || 0) + timeSpentSeconds,
        history: [sessionRecord, ...(prog.history || [])],
        byCategory: {
          ...prog.byCategory,
          [sessionCategory]: {
            answered: catStats.answered + activeQuestions.length,
            correct: catStats.correct + calculatedScore
          }
        }
      };

      localStorage.setItem('nclex_user_progress', JSON.stringify(updatedProg));
    } catch (e) {
      console.warn('Could not update user progress', e);
    }

    const reviewList = activeQuestions.map((q, idx) => {
      const selected = userAnswers[idx];
      const rawOptions = q.options || q.choices || q.answers || [];
      
      const optionTexts = rawOptions.map((opt) => {
        if (typeof opt === 'string') return opt;
        if (opt && typeof opt === 'object') return opt.text || opt.label || '';
        return String(opt);
      });

      const val = q.correctAnswer ?? q.correct ?? q.answer ?? q.correctOption;
      const isThisQuesSATA = q.type === 'sata' || q.type === 'multiple-response' || Array.isArray(val);

      const resolveSingle = (v) => {
        if (typeof v === 'number') return v;
        if (typeof v === 'string') {
          const t = v.trim().toUpperCase();
          if (t.length === 1 && t >= 'A' && t <= 'Z') return t.charCodeAt(0) - 65;
          if (!isNaN(Number(t))) return Number(t);
        }
        return 0;
      };

      let qCorrectIndices = [];
      if (Array.isArray(val)) {
        qCorrectIndices = val.map(resolveSingle);
      } else {
        qCorrectIndices = [resolveSingle(val)];
      }

      let isAnsCorrect = false;
      if (isThisQuesSATA) {
        const userPicks = Array.isArray(selected) ? selected : [];
        isAnsCorrect =
          userPicks.length === qCorrectIndices.length &&
          userPicks.every((i) => qCorrectIndices.includes(i));
      } else {
        isAnsCorrect = selected !== undefined && selected === qCorrectIndices[0];
      }

      const formatSelectedText = () => {
        if (selected === undefined || selected === null) return 'Unanswered / Skipped';
        if (Array.isArray(selected)) {
          if (selected.length === 0) return 'Unanswered / Skipped';
          return selected
            .map((i) => `${String.fromCharCode(65 + i)}. ${optionTexts[i] || ''}`)
            .join(' | ');
        }
        return `${String.fromCharCode(65 + selected)}. ${optionTexts[selected] || ''}`;
      };

      const formatCorrectText = () => {
        return qCorrectIndices
          .map((i) => `${String.fromCharCode(65 + i)}. ${optionTexts[i] || ''}`)
          .join(' | ');
      };

      return {
        id: q.id || `ITEM-${idx + 1}`,
        question: q.question || q.stem,
        options: optionTexts,
        rawSelected: selected,
        correctIndices: qCorrectIndices,
        userAnswer: formatSelectedText(),
        correctAnswerText: formatCorrectText(),
        isCorrect: isAnsCorrect,
        isSATA: isThisQuesSATA,
        rationale: q.rationale || q.explanation,
        clinicalPearl: q.clinicalPearl,
      };
    });

    const resultsData = {
      score: percentageScore,
      totalQuestions: activeQuestions.length,
      correctCount: calculatedScore,
      incorrectCount: activeQuestions.length - calculatedScore,
      timeSpent: formatDuration(timeSpentSeconds),
      subject: sessionCategory,
      categorySlug: category,
      reviewList: reviewList,
      mode: examMode === 'timed' ? 'Timed Exam' : 'Tutor Mode',
      missedQuestions: missedQuestionsList,
    };

    try {
      localStorage.setItem('nclex_last_result', JSON.stringify(resultsData));
    } catch (e) {
      console.warn('Could not save last result fallback', e);
    }

    navigate('/results', { state: resultsData, replace: true });
  }

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  if (!activeQuestions.length) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 text-center">
        <AlertCircle className="mx-auto h-8 w-8 text-[#62697A]" strokeWidth={1.8} />
        <h2 className="mt-3 text-sm font-semibold text-[#202535]">No clinical questions available for this module</h2>
        <p className="mt-1 text-xs text-slate-500 font-mono">Category query: "{category}"</p>
        <button
          onClick={() => navigate('/exams')}
          className="mt-4 px-4 py-2.5 bg-[#071A3D] text-white text-xs font-bold rounded-lg cursor-pointer"
        >
          Return to All Question Banks
        </button>
      </div>
    );
  }

  const courseDisplayName =
    config?.categoryTitle ||
    location.state?.categoryTitle ||
    (COURSE_REGISTRY && COURSE_REGISTRY[category]?.name) ||
    currentQ.course ||
    currentQ.category ||
    'Licensure Simulation';

  return (
    <div className="mx-auto max-w-3xl px-3 py-4 sm:px-6 sm:py-8">
      
      {/* Top Telemetry & Tools Bar: Mobile-First Responsive Layout */}
      <div className="mb-6 flex flex-col gap-3 border-b border-[#DDD9CC] pb-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pb-4">
        
        {/* Row 1 on Mobile: Home, Counter & Category */}
        <div className="flex items-center justify-between sm:justify-start sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => navigate('/')}
              title="Exit exam and return Home"
              className="flex items-center gap-1 text-xs font-bold text-[#1D2A59] hover:underline cursor-pointer"
            >
              <span>← Home</span>
            </button>
            <span className="text-[#DDD9CC]">•</span>
            <span className="font-mono text-xs font-bold tracking-wider text-[#1D2A59]">
              ITEM {currentIdx + 1} OF {activeQuestions.length}
            </span>
          </div>

          <span className="text-xs font-medium text-[#62697A] truncate max-w-[130px] sm:max-w-[200px] md:max-w-none text-right">
            {courseDisplayName}
          </span>
        </div>

        {/* Row 2 on Mobile: Mode, Timer, Navigator Grid, Bookmark */}
        <div className="flex items-center justify-between sm:justify-end gap-2">
          
          {/* Mode Switcher */}
          <div className="flex items-center rounded-lg border border-[#DDD9CC] bg-[#FBF8EF] p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setExamMode('tutor')}
              className={`rounded-md px-2.5 py-1 font-medium transition-colors cursor-pointer text-xs ${
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
              className={`rounded-md px-2.5 py-1 font-medium transition-colors cursor-pointer text-xs ${
                examMode === 'timed'
                  ? 'bg-[#1D2A59] text-[#F4EEDC]'
                  : 'text-[#62697A] hover:text-[#202535]'
              }`}
            >
              Timed
            </button>
          </div>

          {/* Timed Controls */}
          {examMode === 'timed' && (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className={`flex items-center gap-1 font-mono text-xs font-semibold ${
                timeLeft < 300 ? 'text-[#A65353]' : 'text-[#202535]'
              }`}>
                <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
                <span>{formatTime(timeLeft)}</span>
              </div>

              <button
                type="button"
                onClick={() => setIsPaused(true)}
                title="Pause simulation"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#DDD9CC] bg-[#FBF8EF] text-[#62697A] hover:border-[#1D2A59] hover:text-[#1D2A59] cursor-pointer"
              >
                <Pause className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* Quick Matrix Grid & Bookmark */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setShowNavigator(true)}
              title="Open Question Navigator Grid"
              className="flex h-8 items-center gap-1 rounded-lg border border-[#DDD9CC] bg-[#FBF8EF] px-2.5 text-xs font-semibold text-[#202535] transition-colors hover:border-[#1D2A59] hover:text-[#1D2A59] cursor-pointer"
            >
              <LayoutGrid className="h-3.5 w-3.5" strokeWidth={1.8} />
              <span className="inline text-xs">Grid</span>
            </button>

            <button
              type="button"
              onClick={toggleBookmark}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark item'}
              className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'border-[#B89A5A] bg-[#B89A5A] text-white'
                  : 'border-[#DDD9CC] bg-[#FBF8EF] text-[#62697A] hover:border-[#1D2A59] hover:text-[#1D2A59]'
              }`}
            >
              <Bookmark className="h-3.5 w-3.5" strokeWidth={1.8} />
            </button>
          </div>

        </div>
      </div>

      {/* Pacing Warning Banner */}
      <TimeWarningBanner
        timeLeft={timeLeft}
        isVisible={examMode === 'timed' && timeLeft <= 300 && !warningDismissed && !isSubmitted}
        onDismiss={() => setWarningDismissed(true)}
      />

      {/* Main Clinical Question Workspace */}
      <main className="w-full">
        {/* Metadata Indicators: Responsive Flex */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-xs text-[#62697A]">
          <span className="font-semibold uppercase tracking-wider text-[#283A78] break-words">
            {currentQ.topic || 'Clinical Nursing Judgment'} • {currentQ.subtopic || currentQ.subCategory || 'Application'}
          </span>
          <span className={`font-semibold shrink-0 ${isSATA ? 'text-[#B89A5A]' : 'text-slate-500'}`}>
            {isSATA ? 'Select All That Apply' : 'Single Best Response'}
          </span>
        </div>

        {/* Stem / Vignette */}
        <h1 className="mt-3 text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-tight text-[#202535]">
          {currentQ.question || currentQ.stem || 'Vignette stem details unavailable.'}
        </h1>

        {isSATA && (
          <p className="mt-1.5 text-xs font-semibold text-[#283A78] italic">
            Select all choices that are clinically indicated.
          </p>
        )}

        {/* Option Selection List */}
        <div className="mt-5 space-y-2.5 sm:space-y-3">
          {questionOptions.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = isSATA
              ? Array.isArray(currentAnswer) && currentAnswer.includes(idx)
              : currentAnswer === idx;
            const isStruck = (struckOptions[currentIdx] || []).includes(idx);
            const isOptionCorrect = correctOptionIndices.includes(idx);

            const optText = typeof option === 'string' ? option : option?.text || option?.label || String(option);

            let rowStyle = 'border border-[#DDD9CC] bg-[#FBF8EF] hover:border-[#62697A] text-[#202535]';
            let badgeStyle = 'text-[#62697A] border-[#DDD9CC] bg-[#F4EEDC]';

            if (isSelected && (examMode !== 'tutor' || !hasAnswered)) {
              rowStyle = 'border-2 border-[#1D2A59] bg-[#FBF8EF] ring-1 ring-[#1D2A59] text-[#202535]';
              badgeStyle = 'text-[#F4EEDC] border-[#1D2A59] bg-[#1D2A59]';
            }

            if (examMode === 'tutor' && hasAnswered) {
              if (isOptionCorrect) {
                rowStyle = 'border-2 border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold';
                badgeStyle = 'text-white border-emerald-600 bg-emerald-600';
              } else if (isSelected && !isOptionCorrect) {
                rowStyle = 'border-2 border-rose-600 bg-rose-50 text-rose-950 font-semibold';
                badgeStyle = 'text-white border-rose-600 bg-rose-600';
              } else {
                rowStyle = 'border border-slate-200 bg-slate-50/70 text-slate-400 opacity-60';
                badgeStyle = 'text-slate-400 border-slate-200 bg-slate-100';
              }
            }

            return (
              <div
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`group relative flex cursor-pointer items-start justify-between rounded-xl p-3 sm:px-4 sm:py-3.5 transition-all gap-3 ${rowStyle}`}
              >
                <div className="flex items-start gap-3 w-full min-w-0">
                  {/* Badge aligned to top of multiline text */}
                  <span
                    className={`mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg border font-mono text-xs font-bold transition-colors ${badgeStyle}`}
                  >
                    {isSATA && isSelected ? (
                      <CheckSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    ) : (
                      letter
                    )}
                  </span>

                  {/* Option Text: Allow natural wrap and breaking */}
                  <span
                    className={`text-xs sm:text-sm leading-relaxed break-words flex-1 ${
                      isStruck ? 'line-through text-slate-400 opacity-60' : ''
                    }`}
                  >
                    {optText}
                  </span>
                </div>

                {/* Strikethrough action button: Visible & accessible on touch devices */}
                <button
                  type="button"
                  onClick={(e) => toggleStrikethrough(idx, e)}
                  title={isStruck ? 'Restore choice' : 'Eliminate choice'}
                  className={`shrink-0 p-1.5 rounded-md transition-all cursor-pointer ${
                    isStruck 
                      ? 'text-rose-600 opacity-100' 
                      : 'text-slate-400 opacity-70 hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:text-slate-700'
                  }`}
                >
                  <MinusCircle className="h-4 w-4" strokeWidth={1.8} />
                </button>
              </div>
            );
          })}
        </div>

        {/* SATA Tutor Mode Check Button */}
        {examMode === 'tutor' && isSATA && !sataSubmittedMap[currentIdx] && (
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              disabled={!Array.isArray(currentAnswer) || currentAnswer.length === 0}
              onClick={() => setSataSubmittedMap((prev) => ({ ...prev, [currentIdx]: true }))}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#1D2A59] text-white text-xs font-bold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#283A78] cursor-pointer transition-colors"
            >
              Confirm Choices &amp; Check Answer
            </button>
          </div>
        )}

        {/* Tutor Rationale Drawer */}
        {examMode === 'tutor' && hasAnswered && (
          <div className="mt-6 rounded-xl border border-[#DDD9CC] bg-[#FBF8EF] p-4 sm:p-5 shadow-xs">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.2} />
                  <span className="text-xs font-bold tracking-wide uppercase text-emerald-700">
                    Correct Clinical Judgment
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4 text-rose-600 shrink-0" strokeWidth={2.2} />
                  <span className="text-xs font-bold tracking-wide uppercase text-rose-700">
                    Remediation Required
                  </span>
                </>
              )}
            </div>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#202535]">
              <strong className="font-semibold text-[#1D2A59]">Rationale: </strong>
              {currentQ.rationale || currentQ.explanation || 'Assess patient vitals, verify contraindications, and intervene according to established clinical nursing protocols.'}
            </p>

            {currentQ.clinicalPearl && (
              <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-900 leading-relaxed">
                <span className="font-bold uppercase tracking-wider text-amber-800">Clinical Pearl: </span>
                {currentQ.clinicalPearl}
              </div>
            )}
          </div>
        )}

        {/* Bottom Pagination: Stack on extra small, flex on sm+ */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#DDD9CC] pt-5">
          <button
            type="button"
            disabled={currentIdx === 0}
            onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
            className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#DDD9CC] bg-[#FBF8EF] px-5 text-xs font-semibold text-[#202535] transition-colors hover:bg-[#F4EEDC] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
            <span>Previous Item</span>
          </button>

          {currentIdx === activeQuestions.length - 1 ? (
            <button
              type="button"
              onClick={handleFinalSubmit}
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 text-xs font-semibold text-[#F4EEDC] transition-colors hover:bg-emerald-800 focus:outline-none cursor-pointer"
            >
              <span>Finish Examination</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrentIdx((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1D2A59] px-6 text-xs font-semibold text-[#F4EEDC] transition-colors hover:bg-[#283A78] focus:outline-none cursor-pointer"
            >
              <span>Next Item</span>
              <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
          )}
        </div>
      </main>

      {/* Question Matrix Navigator Modal */}
      <QuestionNavigatorModal
        isOpen={showNavigator}
        onClose={() => setShowNavigator(false)}
        totalQuestions={activeQuestions ? activeQuestions.length : 0}
        currentIdx={currentIdx}
        userAnswers={userAnswers}
        savedItems={savedItems}
        onSelectQuestion={(idx) => setCurrentIdx(idx)}
      />

      {/* Session Pause Modal */}
      <PauseExamModal
        isOpen={isPaused}
        onResume={() => setIsPaused(false)}
        answeredCount={Object.keys(userAnswers).length}
        totalCount={activeQuestions.length}
      />

    </div>
  );
}