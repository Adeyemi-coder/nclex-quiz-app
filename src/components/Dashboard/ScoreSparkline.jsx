import React, { useState } from 'react';
import { TrendingUp, Award } from 'lucide-react';

export default function ScoreSparkline({ attempts }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  if (!attempts || attempts.length === 0) {
    return null;
  }

  // Display up to the last 10 attempts chronologically (oldest to newest)
  const data = [...attempts].slice(0, 10).reverse();

  const width = 640;
  const height = 180;
  const paddingX = 36;
  const paddingTop = 32;
  const paddingBottom = 28;

  const innerWidth = width - paddingX * 2;
  const innerHeight = height - paddingTop - paddingBottom;

  const points = data.map((d, i) => {
    const x = paddingX + (i / Math.max(data.length - 1, 1)) * innerWidth;
    const clampedScore = Math.min(Math.max(d.score || 0, 0), 100);
    const y = height - paddingBottom - (clampedScore / 100) * innerHeight;
    return { x, y, score: clampedScore, date: d.date };
  });

  const pathString = points.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  // Closed area path for subtle gradient fill under the curve
  const areaString = points.length > 0
    ? `${pathString} L ${points[points.length - 1].x} ${height - paddingBottom} L ${points[0].x} ${height - paddingBottom} Z`
    : '';

  const benchmarkY = height - paddingBottom - (65 / 100) * innerHeight;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
      
      {/* Header telemetry */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-cyan-800" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Performance Trend Telemetry
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-500">
          <span className="h-2 w-2 rounded-full bg-cyan-700" />
          <span>Last {data.length} Attempt{data.length === 1 ? '' : 's'}</span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full">
        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full overflow-visible"
        >
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0E7490" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#0E7490" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* 65% NCLEX Benchmark Target Line */}
          <line
            x1={paddingX}
            y1={benchmarkY}
            x2={width - paddingX}
            y2={benchmarkY}
            stroke="#94A3B8"
            strokeDasharray="4 4"
            strokeWidth="1.2"
          />
          <text
            x={width - paddingX + 6}
            y={benchmarkY + 3}
            fill="#64748B"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="700"
          >
            65% PASS
          </text>

          {/* Area Fill */}
          {areaString && (
            <path d={areaString} fill="url(#curveGradient)" />
          )}

          {/* Sparkline Stroke */}
          <path 
            d={pathString} 
            fill="none" 
            stroke="#0E7490" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Data Points */}
          {points.map((pt, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAboveBenchmark = pt.score >= 65;

            return (
              <g 
                key={idx} 
                onMouseEnter={() => setHoveredIdx(idx)} 
                onMouseLeave={() => setHoveredIdx(null)}
                className="cursor-pointer"
              >
                {/* Hit target radius */}
                <circle cx={pt.x} cy={pt.y} r={14} fill="transparent" />

                {/* Visible Data Dot */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 6 : 4}
                  className={`transition-all duration-150 ${
                    isAboveBenchmark 
                      ? 'fill-white stroke-cyan-800' 
                      : 'fill-white stroke-red-600'
                  }`}
                  strokeWidth="2.5"
                />

                {/* Tactile Tooltip Callout */}
                {isHovered && (
                  <g className="transition-all duration-150">
                    <rect
                      x={pt.x - 28}
                      y={pt.y - 32}
                      width="56"
                      height="22"
                      rx="6"
                      fill="#0F172A"
                      className="shadow-md"
                    />
                    <text 
                      x={pt.x} 
                      y={pt.y - 18} 
                      textAnchor="middle" 
                      fill="#F8FAFC" 
                      fontSize="10" 
                      fontFamily="monospace" 
                      fontWeight="700"
                    >
                      {pt.score}%
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Dynamic Dates Baseline */}
        <div className="relative mt-2 h-4 w-full text-[10px] font-mono text-slate-400">
          {points.map((pt, i) => {
            const leftPercent = (pt.x / width) * 100;
            const dateStr = data[i]?.date 
              ? new Date(data[i].date).toLocaleDateString(undefined, { month: 'numeric', day: 'numeric' })
              : `A${i + 1}`;

            return (
              <span
                key={i}
                className="absolute -translate-x-1/2 whitespace-nowrap"
                style={{ left: `${leftPercent}%` }}
              >
                {dateStr}
              </span>
            );
          })}
        </div>

      </div>

    </div>
  );
}