import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ReviewCard from './ReviewCard.jsx';
import { useProgress } from '../../hooks/useProgress.js';
import './ReviewScreen.css';

export default function ReviewScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useProgress();

  // Load questions and answers from router state or fallback
  const questions = location.state?.questions || [];
  const userAnswers = location.state?.userAnswers || [];

  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'incorrect' | 'correct' | 'bookmarked'
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Keyboard navigation support: Left/Right arrows + B to bookmark
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowRight') {
        setActiveCardIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        setActiveCardIndex(prev => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'b' || e.key === 'B') {
        const currentQ = filteredItems[activeCardIndex]?.question;
        if (currentQ) toggleBookmark(currentQ.id);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCardIndex, filteredItems]);

  const items = questions.map((q, idx) => ({
    question: q,
    userAnswer: userAnswers[idx],
    originalIndex: idx,
    isCorrect: userAnswers[idx] === q.correctAnswer,
    bookmarked: isBookmarked(q.id)
  }));

  const filteredItems = items.filter(item => {
    if (activeFilter === 'incorrect') return !item.isCorrect;
    if (activeFilter === 'correct') return item.isCorrect;
    if (activeFilter === 'bookmarked') return item.bookmarked;
    return true;
  });

  const incorrectCount = items.filter(i => !i.isCorrect).length;
  const correctCount = items.filter(i => i.isCorrect).length;
  const bookmarkedCount = items.filter(i => i.bookmarked).length;

  if (questions.length === 0) {
    return (
      <div className="review-screen-layout" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h2 className="review-hero-title">No Review Session Active</h2>
        <p className="review-subtext">Complete an exam module to review answers and rationales.</p>
        <Link to="/" className="course-btn" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="review-screen-layout">
      <div className="review-screen-top">
        <div>
          <span className="review-eyebrow">NCLEX Diagnostic Review</span>
          <h1 className="review-hero-title">Performance & Rationales</h1>
          <p className="review-subtext">Exam completed with {correctCount} of {questions.length} correct</p>
        </div>
        <div>
          <button type="button" onClick={() => navigate(-1)} className="ghost-btn" style={{ marginRight: '0.75rem' }}>
            ← Back
          </button>
          <Link to="/dashboard" className="primary-btn">
            View Dashboard
          </Link>
        </div>
      </div>

      <div className="keyboard-hint-banner">
        <span>Quick Navigation:</span>
        <div className="keyboard-keys">
          Use <kbd>←</kbd> <kbd>→</kbd> to navigate cards · <kbd>B</kbd> to toggle bookmark
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="review-filters-bar">
        <button
          type="button"
          className={`filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => { setActiveFilter('all'); setActiveCardIndex(0); }}
        >
          All Items ({items.length})
        </button>
        <button
          type="button"
          className={`filter-chip ${activeFilter === 'incorrect' ? 'active' : ''}`}
          onClick={() => { setActiveFilter('incorrect'); setActiveCardIndex(0); }}
        >
          Incorrect ({incorrectCount})
        </button>
        <button
          type="button"
          className={`filter-chip ${activeFilter === 'correct' ? 'active' : ''}`}
          onClick={() => { setActiveFilter('correct'); setActiveCardIndex(0); }}
        >
          Correct ({correctCount})
        </button>
        <button
          type="button"
          className={`filter-chip ${activeFilter === 'bookmarked' ? 'active' : ''}`}
          onClick={() => { setActiveFilter('bookmarked'); setActiveCardIndex(0); }}
        >
          ★ Bookmarked ({bookmarkedCount})
        </button>
      </div>

      {/* Render Cards */}
      <div className="review-cards-list">
        {filteredItems.map((item, idx) => (
          <ReviewCard
            key={item.question.id}
            question={item.question}
            userAnswer={item.userAnswer}
            index={item.originalIndex}
            isBookmarked={item.bookmarked}
            onToggleBookmark={toggleBookmark}
          />
        ))}
      </div>
    </div>
  );
}