import React, { useState } from 'react';

export default function ScoreSparkline({ attempts }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  if (!attempts || attempts.length === 0) {
    return null;
  }

  // Take the last 10 attempts in chronological order (oldest to newest)
  const data = [...attempts].slice(0, 10).reverse();

  const width = 640;
  const height = 160;
  const padding = 28;

  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1 || 1)) * innerWidth;
    const y = height - padding - (d.score / 100) * innerHeight;
    return { x, y, score: d.score, date: d.date };
  });

  const pathString = points.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  return (
    <div className="sparkline-container">
      <svg viewBox={`0 0 ${width} ${height}`} className="sparkline-svg">
        <defs>
          <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--gold-deep)" />
            <stop offset="50%" stopColor="var(--gold-default)" />
            <stop offset="100%" stopColor="var(--gold-light)" />
          </linearGradient>
        </defs>

        {/* 75% Passing Benchmark Line */}
        <line
          x1={padding}
          y1={height - padding - (75 / 100) * innerHeight}
          x2={width - padding}
          y2={height - padding - (75 / 100) * innerHeight}
          stroke="rgba(45, 212, 191, 0.35)"
          strokeDasharray="4 4"
        />
        <text
          x={width - padding + 4}
          y={height - padding - (75 / 100) * innerHeight + 3}
          fill="var(--emerald-teal)"
          fontSize="9"
          fontWeight="600"
        >
          75%
        </text>

        {/* Sparkline Path */}
        <path d={pathString} fill="none" stroke="url(#goldLineGrad)" strokeWidth="3.5" strokeLinecap="round" />

        {/* Interactive Data Dots */}
        {points.map((pt, idx) => (
          <g key={idx} onMouseEnter={() => setHoveredIdx(idx)} onMouseLeave={() => setHoveredIdx(null)}>
            <circle
              cx={pt.x}
              cy={pt.y}
              r={hoveredIdx === idx ? 7 : 4.5}
              fill="var(--midnight-deep)"
              stroke="var(--gold-default)"
              strokeWidth="2.5"
              style={{ cursor: 'pointer', transition: 'r 0.15s ease' }}
            />
            {hoveredIdx === idx && (
              <g>
                <rect
                  x={pt.x - 30}
                  y={pt.y - 34}
                  width="60"
                  height="22"
                  rx="4"
                  fill="var(--midnight-surface)"
                  stroke="var(--gold-border)"
                />
                <text x={pt.x} y={pt.y - 19} textAnchor="middle" fill="var(--ivory-silk)" fontSize="11" fontWeight="700">
                  {pt.score}%
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>

      {/* Date Labels Underneath */}
      <div className="sparkline-dates-row">
        {data.map((d, i) => (
          <span key={i} className="spark-date">
            {new Date(d.date).toLocaleDateString(undefined, { month: 'numeric', day: 'numeric' })}
          </span>
        ))}
      </div>
    </div>
  );
}