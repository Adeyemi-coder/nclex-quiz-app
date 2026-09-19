import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMuted, setIsMuted] = useState(false);

  function toggleAudio() {
    setIsMuted((prev) => !prev);
  }

  return (
    <>
      {/* Top Header */}
      <header className="master-header">
        <div className="header-container">
          <Link to="/" className="brand-group">
            <div className="brand-mark">
              <span>⚕</span>
            </div>
            <div className="brand-titles">
              <span className="brand-name">
                NCLEX Clinical <span className="brand-accent">Master</span>
              </span>
              <span className="brand-badge">RN Candidate Suite</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-links-cluster">
            <NavLink
              to="/modules"
              className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            >
              Modules
            </NavLink>
            <NavLink
              to="/flashcards"
              className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            >
              Flashcards
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            >
              Analytics
            </NavLink>
          </nav>

          {/* Audio Toggle */}
          <div className="header-right-actions">
            <button
              type="button"
              className={`audio-toggle-btn ${isMuted ? 'muted' : 'active'}`}
              onClick={toggleAudio}
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              <span className="audio-icon">{isMuted ? '✕' : '🔊'}</span>
              <span className="audio-label">{isMuted ? 'Muted' : 'Audio On'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Icon Navigator */}
      <nav className="mobile-bottom-bar" aria-label="Mobile Navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `m-nav-item ${isActive ? 'active' : ''}`}
        >
          <span className="m-icon">🏠</span>
          <span className="m-label">Home</span>
        </NavLink>

        <NavLink
          to="/modules"
          className={({ isActive }) => `m-nav-item ${isActive ? 'active' : ''}`}
        >
          <span className="m-icon">📚</span>
          <span className="m-label">Modules</span>
        </NavLink>

        <NavLink
          to="/flashcards"
          className={({ isActive }) => `m-nav-item ${isActive ? 'active' : ''}`}
        >
          <span className="m-icon">🃏</span>
          <span className="m-label">Cards</span>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) => `m-nav-item ${isActive ? 'active' : ''}`}
        >
          <span className="m-icon">📊</span>
          <span className="m-label">Stats</span>
        </NavLink>
      </nav>
    </>
  );
}