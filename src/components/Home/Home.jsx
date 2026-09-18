import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { questions } from '../../data/questions.js';
import { useProgress } from '../../hooks/useProgress.js';
import HoloPortrait from '../Hero/HoloPortrait.jsx';
import './Home.css';

const FEATURED_MODULES = [
  {
    id: 'Pharmacology',
    title: 'Pharmacology & Parenteral Therapies',
    icon: '💊',
    tag: 'High Yield',
    desc: 'High-alert titrations, toxicities, and drug interactions.'
  },
  {
    id: 'Cardiovascular',
    title: 'Cardiovascular Nursing',
    icon: '🫀',
    tag: 'Priority',
    desc: 'Hemodynamic compromise, dysrhythmias, and ACS protocols.'
  },
  {
    id: 'Emergency Nursing',
    title: 'Emergency & Critical Care',
    icon: '🚨',
    tag: 'Essential',
    desc: 'ACLS algorithms, trauma resuscitation, and shock staging.'
  },
  {
    id: 'Maternal Nursing',
    title: 'Maternal & Newborn Health',
    icon: '👶',
    tag: 'Core',
    desc: 'Intrapartum complications, fetal monitoring, and neonatal care.'
  }
];

export default function Home() {
  const navigate = useNavigate();
  const {
    history,
    missedCount,
    bookmarkCount,
    overallAccuracy,
    totalAnswered,
    currentStreak,
    missedQuestions,
    bookmarks
  } = useProgress();

  function handleReviewMissed() {
    const missedList = Object.values(missedQuestions).map((m) => m.question);
    if (missedList.length === 0) return;
    navigate('/review', {
      state: {
        questions: missedList,
        userAnswers: Array(missedList.length).fill(null),
      },
    });
  }

  function handleReviewBookmarked() {
    const bookmarkedList = questions.filter((q) => bookmarks.includes(q.id));
    if (bookmarkedList.length === 0) return;
    navigate('/review', {
      state: {
        questions: bookmarkedList,
        userAnswers: Array(bookmarkedList.length).fill(null),
      },
    });
  }

  const latestAttempt = history && history.length > 0 ? history[0] : null;

  return (
    <div className="home-command-container">
      {/* 1. Hero Command Section with 3D Holographic Portrait */}
      <section className="home-hero-section">
        <div className="home-hero-content">
          <div className="hero-streak-pill">
            <span>🔥</span>
            <span>{currentStreak} Day Study Streak</span>
          </div>

          <h1 className="home-hero-title">
            NCLEX Clinical <span className="gold-shimmer-text">Master</span>
          </h1>

          <p className="home-hero-subtitle">
            Next-Generation NCLEX &amp; NMCN clinical preparation platform. Access 550 verified rationales, adaptive CAT testing, and systematic remediation.
          </p>

          <div className="home-hero-cta-group">
            <Link to="/cat-simulator" className="primary-hero-btn">
              ⚡ Start CAT Simulation (85–150 Qs)
            </Link>
            <Link to="/modules" className="secondary-hero-btn">
              📚 Browse All 11 Modules
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="home-inline-stats">
            <div className="inline-stat-item">
              <span className="inline-stat-label">Clinical Accuracy</span>
              <span className="inline-stat-val">{overallAccuracy}%</span>
            </div>
            <div className="inline-stat-divider" />
            <div className="inline-stat-item">
              <span className="inline-stat-label">Questions Logged</span>
              <span className="inline-stat-val">{totalAnswered}</span>
            </div>
            {latestAttempt && (
              <>
                <div className="inline-stat-divider" />
                <div className="inline-stat-item">
                  <span className="inline-stat-label">Recent Test</span>
                  <span
                    className="inline-stat-val"
                    style={{
                      color: latestAttempt.score >= 75 ? 'var(--emerald-teal)' : 'var(--crimson-garnet)',
                    }}
                  >
                    {latestAttempt.score}%
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 3D Holographic Portrait Card */}
        <div className="home-hero-visual">
          <HoloPortrait
            caption="Built by Adeyemi Kehinde, RN Candidate"
            alt="NCLEX Clinical Master Founder"
            showParticles={true}
            interactive={true}
          />
        </div>
      </section>

      {/* 2. Diagnostic & Remediation Cards */}
      <section className="home-quick-actions-section">
        <span className="section-label">Remediation &amp; Diagnostics</span>

        <div className="quick-access-banner-grid">
          {/* Missed Questions */}
          <div
            className={`quick-card ${missedCount > 0 ? 'active' : 'disabled'}`}
            onClick={handleReviewMissed}
            role="button"
            tabIndex={0}
          >
            <div className="quick-card-left">
              <span className="quick-icon">⚠️</span>
              <div>
                <div className="quick-title">Review Missed Items</div>
                <div className="quick-count">
                  {missedCount > 0 ? `${missedCount} Questions to Remediate` : 'No Missed Items'}
                </div>
              </div>
            </div>
            <span className="quick-arrow">→</span>
          </div>

          {/* Bookmarks */}
          <div
            className={`quick-card ${bookmarkCount > 0 ? 'active' : 'disabled'}`}
            onClick={handleReviewBookmarked}
            role="button"
            tabIndex={0}
          >
            <div className="quick-card-left">
              <span className="quick-icon">★</span>
              <div>
                <div className="quick-title">Bookmarked Questions</div>
                <div className="quick-count">
                  {bookmarkCount > 0 ? `${bookmarkCount} Questions Saved` : '0 Saved Questions'}
                </div>
              </div>
            </div>
            <span className="quick-arrow">→</span>
          </div>

          {/* Dashboard Shortcut */}
          <Link to="/dashboard" className="quick-card active highlight">
            <div className="quick-card-left">
              <span className="quick-icon">📊</span>
              <div>
                <div className="quick-title">Performance Analytics</div>
                <div className="quick-count">{overallAccuracy}% Candidate Competency</div>
              </div>
            </div>
            <span className="quick-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* 3. Fast-Launch Specialty Modules */}
      <section className="home-featured-section">
        <div className="section-header-row">
          <div>
            <span className="section-label">High-Yield Specialties</span>
            <h2 className="section-subheading">Jump straight into core clinical modules</h2>
          </div>
          <Link to="/modules" className="view-all-link">
            View All 11 Modules ({questions.length} Questions) →
          </Link>
        </div>

        <div className="featured-modules-grid">
          {FEATURED_MODULES.map((item) => (
            <div key={item.id} className="featured-module-card">
              <div>
                <div className="feat-header">
                  <span className="feat-icon">{item.icon}</span>
                  <span className="feat-tag">{item.tag}</span>
                </div>
                <h3 className="feat-title">{item.title}</h3>
                <p className="feat-desc">{item.desc}</p>
              </div>

              <div className="feat-footer">
                <span className="feat-meta">50 Questions</span>
                <Link
                  to={`/quiz/${encodeURIComponent(item.id)}`}
                  className="feat-start-btn"
                >
                  Launch Module →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}