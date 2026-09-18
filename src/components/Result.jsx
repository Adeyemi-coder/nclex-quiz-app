import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CertificateModal from './Result/CertificateModal.jsx';
import { sounds } from '../utils/soundEffects.js';

export default function Result({ userAnswers, confidenceLevels, questions, onStartReview, onRetake }) {
  const [showCertificate, setShowCertificate] = useState(false);

  const correctAnswersCount = userAnswers.reduce((count, answer, index) => {
    if (answer === questions[index]?.correctAnswer) {
      return count + 1;
    }
    return count;
  }, 0);

  const percentage = questions.length > 0
    ? Math.round((correctAnswersCount / questions.length) * 100)
    : 0;

  const isPassed = percentage >= 75;

  useEffect(() => {
    if (isPassed) {
      sounds.playCorrect();
    } else {
      sounds.playMiss();
    }
  }, [isPassed]);

  // Calibration stats
  let confidentCorrect = 0;
  let confidentWrong = 0;
  let guessedCount = 0;

  if (confidenceLevels) {
    questions.forEach((q, idx) => {
      const isRight = userAnswers[idx] === q.correctAnswer;
      const conf = confidenceLevels[idx] || 'medium';
      if (conf === 'high' && isRight) confidentCorrect++;
      if (conf === 'high' && !isRight) confidentWrong++;
      if (conf === 'low' || conf === 'medium') guessedCount++;
    });
  }

  return (
    <div id="summary">
      <div className="score-badge" style={{ borderColor: isPassed ? 'var(--emerald-teal)' : 'var(--crimson-garnet)' }}>
        {percentage}%
      </div>
      <p className="score-sub">
        {correctAnswersCount} of {questions.length} questions answered correctly
      </p>

      {/* Main Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Accuracy</div>
          <div className="stat-value">{percentage}%</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">NCLEX Status</div>
          <div
            className="stat-value"
            style={{ color: isPassed ? 'var(--emerald-teal)' : 'var(--crimson-garnet)' }}
          >
            {isPassed ? 'Pass' : 'Review'}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Items</div>
          <div className="stat-value">{questions.length}</div>
        </div>
      </div>

      {/* Confidence Calibration Matrix Card */}
      {confidenceLevels && (
        <div className="calibration-summary-card">
          <div className="calib-header">
            <span>🎯 Confidence Calibration Matrix</span>
          </div>
          <div className="calib-stats-row">
            <div className="calib-col">
              <span className="calib-val emerald">{confidentCorrect}</span>
              <span className="calib-desc">Confidently Mastered</span>
            </div>
            <div className="calib-col">
              <span className="calib-val gold">{guessedCount}</span>
              <span className="calib-desc">Educated Guesses</span>
            </div>
            <div className="calib-col">
              <span className="calib-val garnet">{confidentWrong}</span>
              <span className="calib-desc">Confidently Wrong (Blind Spots)</span>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="results-actions">
        {isPassed && (
          <button
            type="button"
            className="primary-btn"
            onClick={() => setShowCertificate(true)}
            style={{ background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold-default) 100%)', color: '#050814' }}
          >
            🏆 Claim Certificate of Readiness
          </button>
        )}

        <button type="button" onClick={onStartReview} className="ghost-btn">
          Review Answers &amp; Rationales
        </button>

        <button type="button" onClick={onRetake} className="primary-btn">
          Retake Exam
        </button>

        <Link to="/" className="ghost-btn" style={{ textAlign: 'center', textDecoration: 'none' }}>
          Back to Home
        </Link>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <CertificateModal
          score={percentage}
          totalQuestions={questions.length}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
}