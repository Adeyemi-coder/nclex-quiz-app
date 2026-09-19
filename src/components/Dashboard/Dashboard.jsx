import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress.js';
import './Dashboard.css';

export default function Dashboard() {
  const {
    history = [],
    overallAccuracy = 0,
    totalAnswered = 0,
    currentStreak = 0,
    longestStreak = 0,
    categoryStats = {},
    resetProgress,
  } = useProgress();

  // Passing probability benchmark calculation
  const passingProbability = useMemo(() => {
    if (totalAnswered < 20) return { label: 'Calibrating...', pct: null, tier: 'calibrating' };
    if (overallAccuracy >= 75) return { label: 'High Pass Likelihood', pct: 94, tier: 'high' };
    if (overallAccuracy >= 65) return { label: 'Moderate Pass Likelihood', pct: 72, tier: 'moderate' };
    return { label: 'Remediation Required', pct: 38, tier: 'low' };
  }, [overallAccuracy, totalAnswered]);

  // Ranked specialties by weakness
  const sortedCategories = useMemo(() => {
    const entries = Object.entries(categoryStats || {});
    return entries.map(([cat, stats]) => {
      const total = stats.total || 0;
      const correct = stats.correct || 0;
      const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
      return { category: cat, total, correct, pct };
    }).sort((a, b) => a.pct - b.pct);
  }, [categoryStats]);

  return (
    <div className="analytics-page-container">
      {/* 1. Header & Actions */}
      <header className="analytics-header">
        <div>
          <span className="analytics-kicker">CANDIDATE DIAGNOSTIC INTELLIGENCE</span>
          <h1 className="analytics-title">Performance Analytics</h1>
        </div>
        <div className="analytics-header-actions">
          <button
            type="button"
            className="reset-data-btn"
            onClick={() => {
              if (window.confirm('Reset all tracked test attempts and streak history?')) {
                resetProgress?.();
              }
            }}
          >
            Reset All Data
          </button>
        </div>
      </header>

      {/* 2. Top-Level Metric Strip (4 Columns) */}
      <section className="metrics-strip-grid">
        <div className="metric-tile">
          <span className="metric-label">Overall Accuracy</span>
          <div className="metric-value-row">
            <span className={`metric-num ${overallAccuracy >= 70 ? 'emerald' : overallAccuracy > 0 ? 'gold' : ''}`}>
              {overallAccuracy}%
            </span>
          </div>
          <span className="metric-foot">Across all test disciplines</span>
        </div>

        <div className="metric-tile">
          <span className="metric-label">Questions Completed</span>
          <div className="metric-value-row">
            <span className="metric-num">{totalAnswered}</span>
          </div>
          <span className="metric-foot">Logged in question bank</span>
        </div>

        <div className="metric-tile">
          <span className="metric-label">Current Study Streak</span>
          <div className="metric-value-row">
            <span className="metric-num">{currentStreak} <span className="unit">Days</span></span>
            <span className="streak-flame">🔥</span>
          </div>
          <span className="metric-foot">Consecutive days active</span>
        </div>

        <div className="metric-tile benchmark-tile">
          <span className="metric-label">Pass Probability</span>
          <div className="metric-value-row">
            <span className={`metric-num ${passingProbability.tier}`}>
              {passingProbability.pct !== null ? `${passingProbability.pct}%` : '—'}
            </span>
          </div>
          <span className="metric-foot">{passingProbability.label}</span>
        </div>
      </section>

      {/* 3. 2-Column Split: Specialty Diagnostic Bars vs. Trend / Readiness */}
      <div className="analytics-main-grid">
        {/* Left: Ranked Clinical Specialty Breakdown */}
        <section className="dashboard-card">
          <div className="card-heading-bar">
            <div>
              <span className="card-kicker">DIAGNOSTIC PROFILING</span>
              <h2 className="card-title">Accuracy by Clinical Specialty</h2>
            </div>
            <span className="card-sub-hint">Weakest Disciplines First</span>
          </div>

          <div className="specialty-breakdown-list">
            {sortedCategories.length > 0 ? (
              sortedCategories.map((item) => (
                <div key={item.category} className="specialty-row-item">
                  <div className="row-meta-line">
                    <span className="row-title">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      <span className="row-counts"> ({item.correct}/{item.total} Qs)</span>
                    </span>
                    <div className="row-badge-group">
                      {item.pct < 65 && <span className="focus-pill">Focus Area</span>}
                      <span className="row-pct">{item.pct}%</span>
                    </div>
                  </div>

                  <div className="specialty-bar-track">
                    <div
                      className={`specialty-bar-fill ${
                        item.pct >= 75 ? 'green' : item.pct >= 60 ? 'gold' : 'crimson'
                      }`}
                      style={{ width: `${Math.max(item.pct, 4)}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-diagnostic-box">
                <p>Complete at least one practice module or simulation to generate specialty diagnostics.</p>
              </div>
            )}
          </div>
        </section>

        {/* Right: Trend & Recent Attempts */}
        <section className="dashboard-card">
          <div className="card-heading-bar">
            <div>
              <span className="card-kicker">LONGITUDINAL TRACKING</span>
              <h2 className="card-title">Recent Exam History</h2>
            </div>
            <span className="card-sub-hint">Last {history.length} Sessions</span>
          </div>

          <div className="history-entries-list">
            {history.length > 0 ? (
              history.slice(0, 5).map((attempt, idx) => (
                <div key={idx} className="history-item-row">
                  <div className="history-info">
                    <span className="history-mode-title">{attempt.mode || 'Clinical Session'}</span>
                    <span className="history-timestamp">
                      {attempt.timestamp ? new Date(attempt.timestamp).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : 'Recent Attempt'} · {attempt.questions?.length || 50} Qs
                    </span>
                  </div>

                  <div className="history-score-cluster">
                    <span
                      className={`history-score-badge ${
                        attempt.score >= 75 ? 'pass' : 'fail'
                      }`}
                    >
                      {attempt.score}%
                    </span>
                    <Link
                      to="/review"
                      state={{
                        questions: attempt.questions,
                        userAnswers: attempt.userAnswers,
                        confidenceLevels: attempt.confidenceLevels
                      }}
                      className="history-review-btn"
                    >
                      Review →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-diagnostic-box">
                <p>No exams logged yet. Launch a test to review your remediations.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}