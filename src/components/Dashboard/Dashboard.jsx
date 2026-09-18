import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from './StatCard.jsx';
import CategoryBars from './CategoryBars.jsx';
import ScoreSparkline from './ScoreSparkline.jsx';
import RecentActivity from './RecentActivity.jsx';
import { useProgress } from '../../hooks/useProgress.js';
import './Dashboard.css';

export default function Dashboard() {
  const {
    history,
    overallAccuracy,
    totalAnswered,
    currentStreak,
    longestStreak,
    categoryStats,
    resetAllProgress // <--- Add this
  } = useProgress();

  function handleReset() {
    if (window.confirm("Are you sure you want to clear all exam history, streaks, and bookmarks?")) {
      resetAllProgress();
    }
  }

  if (history.length === 0) {
    return (
      <div className="dashboard-container">
        <div className="dash-section empty-dash-card">
          <div className="empty-icon-art">⚡</div>
          <h2 className="dashboard-title">Unlock Your Performance Analytics</h2>
          <p style={{ color: 'var(--muted-platinum)', maxWidth: '480px', margin: '0.5rem auto 1.75rem' }}>
            Take your first NCLEX exam module to generate real-time metrics, clinical accuracy charts, and category diagnostic insights.
          </p>
          <Link to="/" className="course-btn" style={{ display: 'inline-block' }}>
            Start Your First Exam →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <span className="review-eyebrow">Candidate Diagnostic Intelligence</span>
          <h1 className="dashboard-title">Performance Analytics</h1>
        </div>
        {/* Reset Action Button */}
        <button
          type="button"
          onClick={handleReset}
          className="ghost-btn"
          style={{ borderColor: 'rgba(251, 113, 133, 0.3)', color: 'var(--crimson-garnet)', fontSize: '0.8rem' }}
        >
          Reset All Data
        </button>
      </div>

      {/* 1. Hero Stats Row */}
      <div className="stats-hero-grid">
        <StatCard label="Overall Accuracy" value={`${overallAccuracy}%`} subtext="Across all disciplines" highlight />
        <StatCard label="Questions Answered" value={totalAnswered} subtext="Total completed" />
        <StatCard label="Current Streak" value={`${currentStreak} Days 🔥`} subtext="Consecutive days active" />
        <StatCard label="Longest Streak" value={`${longestStreak} Days`} subtext="Personal record" />
      </div>

      {/* 2. Category Breakdown */}
      <div className="dash-section">
        <h2 className="dash-section-title">Accuracy by Clinical Specialty (Weakest First)</h2>
        <CategoryBars categories={categoryStats} />
      </div>

      {/* 3. Sparkline */}
      <div className="dash-section">
        <h2 className="dash-section-title">Score Performance Over Time (Last 10 Quizzes)</h2>
        <ScoreSparkline attempts={history} />
      </div>

      {/* 4. Recent Activity */}
      <div className="dash-section">
        <h2 className="dash-section-title">Recent Exam History</h2>
        <RecentActivity attempts={history} />
      </div>
    </div>
  );
}