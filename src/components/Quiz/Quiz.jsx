import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { questions as allQuestions } from '../../data/questions.js';
import Result from '../Result.jsx';
import { useProgress } from '../../hooks/useProgress.js';
import { sounds } from '../../utils/soundEffects.js';
import { ambientSound } from '../../utils/ambientAudio.js';
import './Quiz.css';

const SECONDS_PER_QUESTION = 72; // Standard NCLEX pace: 1.2 minutes per item
const SIMULATION_QUESTION_CAP = 85; // Standard Next-Gen NCLEX simulation benchmark
const SPECIALTY_QUESTION_CAP = 50;

export default function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { recordQuizAttempt } = useProgress();

  // 1. Slice & Randomize Question Pools
  const activeQuestions = useMemo(() => {
    if (!category || category.toLowerCase() === 'all') {
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, Math.min(SIMULATION_QUESTION_CAP, allQuestions.length));
    }

    const decoded = decodeURIComponent(category).toLowerCase();
    const filtered = allQuestions.filter(
      (q) => q.category?.toLowerCase() === decoded
    );
    const pool = filtered.length > 0 ? filtered : allQuestions;
    return pool.slice(0, Math.min(SPECIALTY_QUESTION_CAP, pool.length));
  }, [category]);

  // 2. Exam States
  const [examMode, setExamMode] = useState('timed'); // 'timed' | 'tutor'
  const [userAnswers, setUserAnswers] = useState(() => Array(activeQuestions.length).fill(null));
  const [confidenceLevels, setConfidenceLevels] = useState(() => Array(activeQuestions.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  // 3. Audio & Timer States
  const [isFocusAudioOn, setIsFocusAudioOn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => activeQuestions.length * SECONDS_PER_QUESTION);
  const [startTime] = useState(Date.now());
  const timerRef = useRef(null);

  // Sync state if active question set shifts
  useEffect(() => {
    setUserAnswers(Array(activeQuestions.length).fill(null));
    setConfidenceLevels(Array(activeQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setIsQuizSubmitted(false);
    setTimeLeft(activeQuestions.length * SECONDS_PER_QUESTION);
  }, [activeQuestions]);

  // Countdown Loop (Timed Mode Only)
  useEffect(() => {
    if (examMode === 'timed' && !isQuizSubmitted) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [examMode, isQuizSubmitted]);

  // Cleanup ambient focus audio on unmount
  useEffect(() => {
    return () => {
      ambientSound.stop();
    };
  }, []);

  function toggleFocusSound() {
    const active = ambientSound.toggle();
    setIsFocusAudioOn(active);
  }

  function handleSelectOption(answer) {
    sounds?.playClick?.();
    setUserAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = answer;
      return updated;
    });

    if (!confidenceLevels[currentQuestionIndex]) {
      setConfidenceLevels((prev) => {
        const copy = [...prev];
        copy[currentQuestionIndex] = 'high';
        return copy;
      });
    }
  }

  function handleSetConfidence(level) {
    sounds?.playClick?.();
    setConfidenceLevels((prev) => {
      const copy = [...prev];
      copy[currentQuestionIndex] = level;
      return copy;
    });
  }

  function handleSubmitQuiz() {
    ambientSound.stop();
    setIsFocusAudioOn(false);
    sounds?.playSubmissionGong?.();
    const elapsedSeconds = Math.round((Date.now() - startTime) / 1000);
    recordQuizAttempt({
      mode: category ? `${category} Specialty` : 'Comprehensive Simulation',
      category: category || 'Comprehensive',
      questions: activeQuestions,
      userAnswers,
      confidenceLevels,
      durationSeconds: elapsedSeconds
    });
    setIsQuizSubmitted(true);
  }

  function handleResetQuiz() {
    setUserAnswers(Array(activeQuestions.length).fill(null));
    setConfidenceLevels(Array(activeQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setIsQuizSubmitted(false);
    setTimeLeft(activeQuestions.length * SECONDS_PER_QUESTION);
  }

  if (isQuizSubmitted) {
    return (
      <Result
        userAnswers={userAnswers}
        confidenceLevels={confidenceLevels}
        questions={activeQuestions}
        onStartReview={() =>
          navigate('/review', {
            state: { questions: activeQuestions, userAnswers, confidenceLevels }
          })
        }
        onRetake={handleResetQuiz}
      />
    );
  }

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];
  const currentConfidence = confidenceLevels[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
  const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;
  const hasAnsweredCurrent = selectedAnswer !== null;

  // Format Timer Digits
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const formattedTime = hours > 0
    ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isTimeCritical = timeLeft < 300; // Under 5 minutes remaining

  return (
    <div className="quiz-interface-wrapper">
      {/* Mobile Sticky Bar */}
      <div className="quiz-mobile-header">
        <span className="quiz-category-badge">
          {currentQuestion?.category || 'Clinical Simulation'}
        </span>
        {examMode === 'timed' && (
          <div className={`countdown-clock ${isTimeCritical ? 'critical' : ''}`}>
            <span>⏳</span>
            <span>{formattedTime}</span>
          </div>
        )}
      </div>

      <div className="quiz-two-col-layout">
        {/* =========================================
            LEFT COLUMN: Primary Assessment Stage
           ========================================= */}
        <section className="quiz-main-stage">
          <div className="stage-meta-strip">
            <span className="category-pill-desktop">
              {currentQuestion?.category || 'Clinical Simulation'}
            </span>
            <div className="stage-progress-info">
              <span className="q-tracker-text">
                Item <strong>{currentQuestionIndex + 1}</strong> of {activeQuestions.length}
              </span>
              <span className="q-tracker-pct">{Math.round(progressPercent)}% Done</span>
            </div>
          </div>

          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>

          <h2 className="quiz-question-text">{currentQuestion?.question}</h2>

          {/* Answer Option Buttons */}
          <div className="answers-stack">
            {(currentQuestion?.answers || currentQuestion?.options || []).map((answer, optIdx) => {
              const letter = ['A', 'B', 'C', 'D', 'E', 'F'][optIdx] || optIdx + 1;
              const isSelected = selectedAnswer === answer;
              const isCorrect = answer === currentQuestion?.correctAnswer;

              let btnClass = 'answer-choice-btn';
              if (isSelected) btnClass += ' selected';
              if (examMode === 'tutor' && hasAnsweredCurrent) {
                if (isCorrect) btnClass += ' tutor-correct';
                if (isSelected && !isCorrect) btnClass += ' tutor-wrong';
              }

              return (
                <button
                  key={answer}
                  type="button"
                  className={btnClass}
                  onClick={() => handleSelectOption(answer)}
                >
                  <div className="choice-left">
                    <span className="choice-key-box">{letter}</span>
                    <span className="choice-text">{answer}</span>
                  </div>

                  {isSelected && !hasAnsweredCurrent && (
                    <span className="choice-status-pill selected">Selected</span>
                  )}
                  {examMode === 'tutor' && hasAnsweredCurrent && isCorrect && (
                    <span className="choice-status-pill correct">✓ Correct Key</span>
                  )}
                  {examMode === 'tutor' && isSelected && !isCorrect && (
                    <span className="choice-status-pill incorrect">✕ Incorrect</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tutor Mode Immediate Rationale Sheet */}
          {examMode === 'tutor' && hasAnsweredCurrent && (
            <div className="tutor-rationale-accordion">
              <div className="tutor-rationale-header">
                <span>✦ Immediate Clinical Rationale</span>
              </div>
              <p className="tutor-rationale-body">{currentQuestion?.rationale}</p>
            </div>
          )}

          {/* Metacognitive Confidence Selection */}
          <div className="confidence-calibration-strip">
            <span className="calibration-heading">CALIBRATION CONFIDENCE:</span>
            <div className="confidence-chips-cluster">
              <button
                type="button"
                className={`conf-pill ${currentConfidence === 'high' ? 'active high' : ''}`}
                onClick={() => handleSetConfidence('high')}
              >
                🔥 High Confidence
              </button>
              <button
                type="button"
                className={`conf-pill ${currentConfidence === 'medium' ? 'active medium' : ''}`}
                onClick={() => handleSetConfidence('medium')}
              >
                🤔 Educated Guess
              </button>
              <button
                type="button"
                className={`conf-pill ${currentConfidence === 'low' ? 'active low' : ''}`}
                onClick={() => handleSetConfidence('low')}
              >
                🎲 Shot in the Dark
              </button>
            </div>
          </div>

          {/* Navigation Prev / Next Action Controls */}
          <div className="quiz-action-bar">
            <button
              type="button"
              className="action-btn ghost"
              onClick={() => {
                sounds?.playClick?.();
                setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
              }}
              disabled={currentQuestionIndex === 0}
            >
              ← Previous
            </button>

            {isLastQuestion ? (
              <button type="button" className="action-btn primary" onClick={handleSubmitQuiz}>
                Submit Exam
              </button>
            ) : (
              <button
                type="button"
                className="action-btn primary"
                onClick={() => {
                  sounds?.playClick?.();
                  setCurrentQuestionIndex((prev) => Math.min(prev + 1, activeQuestions.length - 1));
                }}
              >
                Next Question →
              </button>
            )}
          </div>
        </section>

        {/* =========================================
            RIGHT COLUMN: Sticky Clinical Testing HUD
           ========================================= */}
        <aside className="quiz-sidebar-hud">
          {/* Controls & Ambient Sound HUD */}
          <div className="hud-card">
            <div className="hud-header-row">
              <span className="hud-label">EXAM CONTROLS</span>
              <Link to="/" className="hud-exit-link">Exit Exam</Link>
            </div>

            {/* Countdown Clock Display */}
            {examMode === 'timed' && (
              <div className={`hud-timer-box ${isTimeCritical ? 'critical' : ''}`}>
                <span className="hud-timer-icon">⏳</span>
                <span className="hud-timer-digits">{formattedTime}</span>
              </div>
            )}

            {/* Mode Switcher */}
            <div className="hud-mode-toggle">
              <button
                type="button"
                className={`mode-toggle-btn ${examMode === 'timed' ? 'active' : ''}`}
                onClick={() => setExamMode('timed')}
              >
                ⏱ Timed
              </button>
              <button
                type="button"
                className={`mode-toggle-btn ${examMode === 'tutor' ? 'active' : ''}`}
                onClick={() => setExamMode('tutor')}
              >
                💡 Tutor
              </button>
            </div>

            {/* Brown Noise Focus Player */}
            <button
              type="button"
              className={`hud-ambient-btn ${isFocusAudioOn ? 'active' : ''}`}
              onClick={toggleFocusSound}
              title="Hospital Brown Noise for Deep Concentration"
            >
              {isFocusAudioOn ? '🎧 Brown Noise: ON' : '🎧 Focus Brown Noise'}
            </button>
          </div>

          {/* Jump Navigation Palette */}
          <div className="hud-card palette-card">
            <div className="hud-header-row">
              <span className="hud-label">ITEM PALETTE</span>
              <span className="hud-sublabel">{activeQuestions.length} Items</span>
            </div>

            <div className="palette-grid-scroll">
              {activeQuestions.map((_, idx) => {
                const isAnswered = userAnswers[idx] !== null;
                const isCurrent = currentQuestionIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`palette-num-btn ${isCurrent ? 'active' : ''} ${isAnswered ? 'answered' : ''}`}
                    onClick={() => {
                      sounds?.playClick?.();
                      setCurrentQuestionIndex(idx);
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}