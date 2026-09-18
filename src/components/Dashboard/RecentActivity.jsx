import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecentActivity({ attempts }) {
  const navigate = useNavigate();

  if (!attempts || attempts.length === 0) return null;

  return (
    <div className="recent-activity-stack">
      {attempts.slice(0, 10).map(attempt => {
        const isPass = attempt.score >= 75;

        return (
          <div key={attempt.id} className="activity-row-card">
            <div className="activity-col main">
              <span className="activity-title">{attempt.category || 'Comprehensive Mock'}</span>
              <span className="activity-meta">
                {new Date(attempt.date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}{' '}
                · {attempt.mode || 'Standard Mode'}
              </span>
            </div>

            <div className="activity-col score">
              <span className={`activity-score-badge ${isPass ? 'pass' : 'review'}`}>
                {attempt.score}%
              </span>
              <span className="activity-fraction">
                {attempt.correct}/{attempt.total}
              </span>
            </div>

            <div className="activity-col actions">
              <button
                type="button"
                className="ghost-btn sm"
                onClick={() =>
                  navigate('/review', {
                    state: {
                      questions: attempt.questions,
                      userAnswers: attempt.userAnswers
                    }
                  })
                }
              >
                Review Exam →
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}