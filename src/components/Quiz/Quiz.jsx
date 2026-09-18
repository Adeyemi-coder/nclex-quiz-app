import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { questions as allQuestions } from '../../data/questions.js';
import Result from '../Result.jsx';
import { useProgress } from '../../hooks/useProgress.js';
import { sounds } from '../../utils/soundEffects.js';

export default function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { recordQuizAttempt } = useProgress();

  const activeQuestions = useMemo(() => {
    if (!category || category.toLowerCase() === 'all') {
      return allQuestions;
    }
    const decodedCategory = decodeURIComponent(category).toLowerCase();
    const filtered = allQuestions.filter(
      (q) => q.category?.toLowerCase() === decodedCategory
    );
    return filtered.length > 0 ? filtered : allQuestions;
  }, [category]);

  const [userAnswers, setUserAnswers] = useState(Array(activeQuestions.length).fill(null));
  // Store confidence per question: 'high' | 'medium' | 'low' | null
  const [confidenceLevels, setConfidenceLevels] = useState(Array(activeQuestions.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    setUserAnswers(Array(activeQuestions.length).fill(null));
    setConfidenceLevels(Array(activeQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setIsQuizSubmitted(false);
  }, [activeQuestions]);

  function handleSelectOption(answer) {
    sounds.playClick();
    setUserAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = answer;
      return updated;
    });

    // Default confidence to 'high' if none chosen yet
    if (!confidenceLevels[currentQuestionIndex]) {
      setConfidenceLevels((prev) => {
        const copy = [...prev];
        copy[currentQuestionIndex] = 'high';
        return copy;
      });
    }
  }

  function handleSetConfidence(level) {
    sounds.playClick();
    setConfidenceLevels((prev) => {
      const copy = [...prev];
      copy[currentQuestionIndex] = level;
      return copy;
    });
  }

  function handleSubmitQuiz() {
    sounds.playSubmissionGong();
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

  return (
    <div className="quiz">
      <div className="quiz-top-bar">
        <span className="quiz-category-badge">
          {currentQuestion?.category || 'Clinical Examination'}
        </span>
        <Link to="/" className="exit-home-btn">
          ← Exit to Courses
        </Link>
      </div>

      <div className="progress-meta">
        <span className="progress-label">
          Question {currentQuestionIndex + 1} of {activeQuestions.length}
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <h2 className="quiz-question">{currentQuestion?.question}</h2>

      <div className="answers">
        {currentQuestion?.answers.map((answer) => {
          const isSelected = selectedAnswer === answer;
          return (
            <button
              key={answer}
              type="button"
              className={`answer-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectOption(answer)}
            >
              <span className="answer-text">{answer}</span>
              {isSelected && <span className="selection-badge">✓ Selected</span>}
            </button>
          );
        })}
      </div>

      {/* Confidence Calibration Selector */}
      <div className="confidence-selector-container">
        <span className="confidence-label">Calibration Confidence:</span>
        <div className="confidence-chips">
          <button
            type="button"
            className={`conf-chip ${currentConfidence === 'high' ? 'active high' : ''}`}
            onClick={() => handleSetConfidence('high')}
          >
            🔥 High Confidence
          </button>
          <button
            type="button"
            className={`conf-chip ${currentConfidence === 'medium' ? 'active medium' : ''}`}
            onClick={() => handleSetConfidence('medium')}
          >
            🤔 Educated Guess
          </button>
          <button
            type="button"
            className={`conf-chip ${currentConfidence === 'low' ? 'active low' : ''}`}
            onClick={() => handleSetConfidence('low')}
          >
            🎲 Shot in the Dark
          </button>
        </div>
      </div>

      <div className="quiz-navigation">
        <button
          type="button"
          className="ghost-btn nav-btn"
          onClick={() => {
            sounds.playClick();
            setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
          }}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>

        {isLastQuestion ? (
          <button type="button" className="primary-btn nav-btn" onClick={handleSubmitQuiz}>
            Submit Exam
          </button>
        ) : (
          <button
            type="button"
            className="primary-btn nav-btn"
            onClick={() => {
              sounds.playClick();
              setCurrentQuestionIndex((prev) => Math.min(prev + 1, activeQuestions.length - 1));
            }}
          >
            Next
          </button>
        )}
      </div>

      <div className="jump-palette-bottom">
        <span className="jump-title">Question Navigator</span>
        <div className="jump-buttons">
          {activeQuestions.map((_, idx) => {
            const isAnswered = userAnswers[idx] !== null;
            const isCurrent = currentQuestionIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                className={`jump-btn ${isCurrent ? 'active' : ''} ${isAnswered ? 'answered' : ''}`}
                onClick={() => {
                  sounds.playClick();
                  setCurrentQuestionIndex(idx);
                }}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}