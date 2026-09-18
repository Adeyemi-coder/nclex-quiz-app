import React, { useState } from 'react';
import './ReviewCard.css';

export default function ReviewCard({
  question,
  userAnswer,
  index,
  isBookmarked,
  onToggleBookmark
}) {
  const [expandedDistractors, setExpandedDistractors] = useState({});
  const isCorrect = userAnswer === question.correctAnswer;
  const isUnanswered = userAnswer === null || userAnswer === undefined;

  function toggleDistractor(optKey) {
    setExpandedDistractors(prev => ({
      ...prev,
      [optKey]: !prev[optKey]
    }));
  }

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className={`review-card-item ${isCorrect ? 'correct' : 'incorrect'}`}>
      <div className="review-card-meta">
        <span className="q-index-pill">
          Question {index + 1} · {question.category || 'General'}
        </span>
        <div className="review-card-actions">
          <button
            type="button"
            className={`bookmark-star-btn ${isBookmarked ? 'bookmarked' : ''}`}
            onClick={() => onToggleBookmark(question.id)}
            title={isBookmarked ? 'Bookmarked (Press B)' : 'Bookmark (Press B)'}
          >
            {isBookmarked ? '★' : '☆'}
          </button>
          <span className={`outcome-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '✓ Correct' : isUnanswered ? '○ Unanswered' : '✕ Incorrect'}
          </span>
        </div>
      </div>

      <h3 className="review-stem">{question.question}</h3>

      <div className="options-stack">
        {question.answers.map((answerText, optIdx) => {
          const letter = optionLetters[optIdx] || String(optIdx);
          const isRightAnswer = answerText === question.correctAnswer;
          const isUserChoice = answerText === userAnswer;

          let rowClass = 'option-row';
          if (isRightAnswer) rowClass += ' is-correct';
          if (isUserChoice && !isRightAnswer) rowClass += ' is-user-wrong';

          const distractorText = question.distractorRationales?.[letter];

          return (
            <div key={answerText} className={rowClass}>
              <div className="option-header">
                <span className={`opt-indicator ${isRightAnswer ? 'emerald' : isUserChoice ? 'garnet' : 'neutral'}`}>
                  {isRightAnswer ? '✓' : isUserChoice ? '✕' : '○'}
                </span>
                <span className="opt-text">{answerText}</span>
                {isUserChoice && <span className="user-badge">Your Choice</span>}
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
          <span>✦</span> Clinical Rationale & NCLEX Insight
        </div>
        <p className="rationale-content">{question.rationale}</p>
      </div>
    </div>
  );
}