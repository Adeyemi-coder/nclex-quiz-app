import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sounds } from '../../utils/soundEffects.js';

export default function Header() {
  const [isMuted, setIsMuted] = useState(sounds.isMuted());

  function handleToggleSound() {
    const updated = sounds.toggleMute();
    setIsMuted(updated);
    if (!updated) {
      sounds.playClick();
    }
  }

  return (
    <header className="app-header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="header-brand">NCLEX Clinical Master</h1>
      </Link>
      <nav className="header-nav" style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
        <button
          type="button"
          onClick={handleToggleSound}
          className="header-dash-link"
          title={isMuted ? 'Unmute Luxury Audio' : 'Mute Audio'}
          style={{ cursor: 'pointer', background: 'transparent' }}
        >
          {isMuted ? '🔇 Audio Off' : '🔔 Audio On'}
        </button>
        <Link to="/modules" className="header-dash-link">
          📚 Modules
        </Link>
        <Link to="/dashboard" className="header-dash-link">
          📊 Dashboard
        </Link>
      </nav>
    </header>
  );
}