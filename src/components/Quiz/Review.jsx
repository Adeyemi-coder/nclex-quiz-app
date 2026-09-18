import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Review.css';

export default function Review({ userAnswers, questions, onRetake }) {
  const [filter, setFilter] = useState('all');

  const mappedQuestions = questions.map((q, idx) => ({
    ...q,
    originalIndex: idx,
    selectedAnswer: userAnswers[idx],
  }));

  const filteredQuestions = mappedQuestions.filter((item) => {
    const isCorrect = item.selectedAnswer === item.correctAnswer;
    if (filter === 'correct') return isCorrect;
    if (filter === 'incorrect') return !isCorrect;
    return true;
  });

  const incorrectCount = userAnswers.filter(
    (ans, idx) => ans !== questions[idx].correctAnswer
  ).length;

  const correctCount = userAnswers.filter(
    (ans, idx) => ans === questions[idx].correctAnswer
  ).length;

  return (
    <div className="review-container">
      <div className="review-header">
        <div>
          <span className="review-eyebrow">NCLEX Comprehensive Review</span>
          <h2 className="review-title">Clinical Performance & Rationales</h2>
        </div>
        <div className="review-actions-top">
          {onRetake ? (
            <button type="button" onClick={onRetake} className="ghost-btn">
              Retake Exam
            </button>
          ) : (
            <Link to="/quiz" className="ghost-btn">
              Retake Exam
            </Link>
          )}
          <Link to="/" className="primary-btn">
            Exit to Home
          </Link>
        </div>
      </div>

      <div className="review-tabs">
        <button
          type="button"
          className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Questions ({questions.length})
        </button>
        <button
          type="button"
          className={`tab-btn ${filter === 'incorrect' ? 'active' : ''}`}
          onClick={() => setFilter('incorrect')}
        >
          Incorrect ({incorrectCount})
        </button>
        <button
          type="button"
          className={`tab-btn ${filter === 'correct' ? 'active' : ''}`}
          onClick={() => setFilter('correct')}
        >
          Correct ({correctCount})
        </button>
      </div>

      <div className="review-list">
        {filteredQuestions.map((q) => {
          const isCorrect = q.selectedAnswer === q.correctAnswer;
          const isUnanswered = q.selectedAnswer === null;

          return (
            <div
              key={q.id || q.originalIndex}
              className={`review-card ${isCorrect ? 'status-correct' : 'status-incorrect'}`}
            >
              <div className="card-top-meta">
                <span className="q-badge">Question {q.originalIndex + 1}</span>
                <span className={`result-tag ${isCorrect ? 'correct' : 'incorrect'}`}>
                  {isCorrect ? '✓ Correct' : isUnanswered ? '○ Unanswered' : '✕ Incorrect'}
                </span>
              </div>

              <h3 className="review-stem">{q.question}</h3>

              <div className="review-options">
                {q.answers.map((opt) => {
                  const isUserSelection = opt === q.selectedAnswer;
                  const isRightAnswer = opt === q.correctAnswer;

                  let optionClass = 'review-option';
                  if (isRightAnswer) optionClass += ' is-correct-answer';
                  if (isUserSelection && !isRightAnswer) optionClass += ' is-user-wrong';

                  return (
                    <div key={opt} className={optionClass}>
                      <div className="option-indicator">
                        {isRightAnswer && <span className="icon-emerald">✓</span>}
                        {isUserSelection && !isRightAnswer && <span className="icon-garnet">✕</span>}
                        {!isRightAnswer && !isUserSelection && <span className="icon-neutral">○</span>}
                      </div>
                      <span className="option-text">{opt}</span>
                      {isUserSelection && (
                        <span className="user-choice-pill">Your Answer</span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="rationale-box">
                <div className="rationale-header">
                  <span className="gold-sparkle">✦</span>
                  <h4>Clinical Rationale & NCLEX Insight</h4>
                </div>
                <p className="rationale-text">
                  {q.rationale || 'No detailed rationale provided for this question.'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}