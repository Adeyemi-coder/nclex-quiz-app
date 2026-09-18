import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress.js';
import ReviewCard from './ReviewCard.jsx';
import './ReviewScreen.css';

export default function ReviewScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookmarks = [], toggleBookmark } = useProgress();

  const questions = location.state?.questions || [];
  const userAnswers = location.state?.userAnswers || Array(questions.length).fill(null);

  if (questions.length === 0) {
    return (
      <div className="review-empty-state">
        <h2>No Review Data Found</h2>
        <p>No questions are currently queued for remediation.</p>
        <Link to="/" className="primary-hero-btn">Return to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="review-screen-container">
      <div className="review-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back
        </button>
        <h1 className="review-title">Clinical Remediation &amp; Rationale Review</h1>
        <span className="review-count-badge">{questions.length} Items</span>
      </div>

      <div className="review-items-list">
        {questions.map((q, idx) => (
          <ReviewCard
            key={q.id || idx}
            question={q}
            index={idx}
            userAnswer={userAnswers[idx]}
            isBookmarked={bookmarks.includes(q.id)}
            onToggleBookmark={toggleBookmark}
          />
        ))}
      </div>
    </div>
  );
}