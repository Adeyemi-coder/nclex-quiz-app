import React, { useState } from 'react';
import './ReviewCard.css';

export default function ReviewCard({
  question,
  userAnswer,
  index = 0,
  isBookmarked = false,
  onToggleBookmark
}) {
  const [expandedDistractors, setExpandedDistractors] = useState({});

  if (!question) return null;

  // Support both 'answers' and 'options' keys flexibly across question data structures
  const answerChoices = question.answers || question.options || [];
  const correctAnswer = question.correctAnswer || '';
  const questionStem = question.question || 'Question prompt unavailable';
  const rationale = question.rationale || 'No rationale available for this clinical item.';

  const isCorrect = userAnswer !== null && userAnswer !== undefined && userAnswer === correctAnswer;
  const isUnanswered = userAnswer === null || userAnswer === undefined;

  function toggleDistractor(optKey) {
    setExpandedDistractors(prev => ({
      ...prev,
      [optKey]: !prev[optKey]
    }));
  }

  function handleBookmarkClick() {
    if (typeof onToggleBookmark === 'function') {
      onToggleBookmark(question.id);
    }
  }

  const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div className={`review-card-item ${isCorrect ? 'correct' : 'incorrect'}`}>
      <div className="review-card-meta">
        <span className="q-index-pill">
          Question {index + 1} · {question.category || 'General Clinical'}
        </span>
        <div className="review-card-actions">
          {typeof onToggleBookmark === 'function' && (
            <button
              type="button"
              className={`bookmark-star-btn ${isBookmarked ? 'bookmarked' : ''}`}
              onClick={handleBookmarkClick}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark Question'}
            >
              {isBookmarked ? '★' : '☆'}
            </button>
          )}
          <span className={`outcome-badge ${isCorrect ? 'correct' : isUnanswered ? 'unanswered' : 'incorrect'}`}>
            {isCorrect ? '✓ Correct' : isUnanswered ? '○ Unanswered' : '✕ Incorrect'}
          </span>
        </div>
      </div>

      <h3 className="review-stem">{questionStem}</h3>

      <div className="options-stack">
        {answerChoices.map((answerText, optIdx) => {
          const letter = optionLetters[optIdx] || String(optIdx + 1);
          const isRightAnswer = answerText === correctAnswer;
          const isUserChoice = answerText === userAnswer;

          let rowClass = 'option-row';
          if (isRightAnswer) rowClass += ' is-correct';
          if (isUserChoice && !isRightAnswer) rowClass += ' is-user-wrong';

          const distractorText = question.distractorRationales?.[letter];

          return (
            <div key={answerText || optIdx} className={rowClass}>
              <div className="option-header">
                <span className={`opt-indicator ${isRightAnswer ? 'emerald' : isUserChoice ? 'garnet' : 'neutral'}`}>
                  {isRightAnswer ? '✓' : isUserChoice ? '✕' : '○'}
                </span>
                <span className="opt-text">{answerText}</span>
                {isUserChoice && <span className="user-badge">Your Choice</span>}
                {isRightAnswer && !isUserChoice && <span className="correct-badge">Correct Answer</span>}
              </div>

              {distractorText && (
                <>
                  <button
                    type="button"
                    className="toggle-distractor-btn"
                    onClick={() => toggleDistractor(letter)}
                  >
                    {expandedDistractors[letter] ? '▲ Hide Analysis' : '▼ View Option Breakdown'}
                  </button>
                  {expandedDistractors[letter] && (
                    <div className="distractor-text">{distractorText}</div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="master-rationale-box">
        <div className="rationale-title">
          <span>✦</span> Clinical Rationale &amp; NCLEX Insight
        </div>
        <p className="rationale-content">{rationale}</p>
      </div>
    </div>
  );
}