import React from 'react';

export default function StatCard({ label, value, subtext, highlight }) {
  return (
    <div className="stat-glass-card">
      <div className="stat-card-label">{label}</div>
      <div className={`stat-card-hero-val ${highlight ? 'gold-gradient-text' : ''}`}>
        {value}
      </div>
      {subtext && <div className="stat-card-sub">{subtext}</div>}
    </div>
  );
}