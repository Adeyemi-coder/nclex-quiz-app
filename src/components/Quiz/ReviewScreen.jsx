import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ReviewCard from './ReviewCard.jsx';
import * as ProgressModule from '../../hooks/useProgress.js';
import './ReviewScreen.css';

export default function ReviewScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle both named and default exports safely
  const useProgressHook = ProgressModule.useProgress || ProgressModule.default;
  let hookBookmarks = [];
  let hookToggleBookmark = null;

  try {
    if (typeof useProgressHook === 'function') {
      const p = useProgressHook();
      if (p) {
        hookBookmarks = Array.isArray(p.bookmarks) ? p.bookmarks : [];
        hookToggleBookmark = p.toggleBookmark;
      }
    }
  } catch (e) {
    console.warn('useProgress fallback engaged:', e);
  }

  // Local fallback if hook is unavailable
  const [localBookmarks, setLocalBookmarks] = useState(hookBookmarks);

  function handleToggleBookmark(id) {
    if (typeof hookToggleBookmark === 'function') {
      hookToggleBookmark(id);
    }
    setLocalBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  }

  const rawQuestions = location.state?.questions;
  const questions = Array.isArray(rawQuestions) ? rawQuestions : [];
  const rawAnswers = location.state?.userAnswers;
  const userAnswers = Array.isArray(rawAnswers)
    ? rawAnswers
    : Array(questions.length).fill(null);

  if (!questions.length) {
    return (
      <div style={{ textAlign: 'center', padding: '6rem 1.5rem', color: '#f7f4ed' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#d4af7a' }}>
          No Review Session Found
        </h2>
        <p style={{ color: '#a0aec0', marginBottom: '2rem' }}>
          Session data is cleared upon refresh. Take a quiz to view real-time rationales.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.8rem',
            background: '#d4af7a',
            color: '#050814',
            fontWeight: 'bold',
            borderRadius: '9999px',
            textDecoration: 'none'
          }}
        >
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 5rem', color: '#f7f4ed' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(212,175,122,0.3)',
            color: '#fff',
            padding: '0.5rem 1.2rem',
            borderRadius: '9999px',
            cursor: 'pointer',
            fontSize: '0.9rem'
          }}
        >
          ← Back to Results
        </button>
        <span style={{ color: '#d4af7a', fontWeight: 'bold' }}>
          Reviewing {questions.length} Items
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {questions.map((q, idx) => (
          <ReviewCard
            key={q.id || idx}
            question={q}
            index={idx}
            userAnswer={userAnswers[idx]}
            isBookmarked={localBookmarks.includes(q.id)}
            onToggleBookmark={() => handleToggleBookmark(q.id || idx)}
          />
        ))}
      </div>
    </div>
  );
}