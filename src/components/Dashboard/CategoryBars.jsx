import React from 'react';
import { Target, AlertCircle, TrendingUp, Layers } from 'lucide-react';

export default function CategoryBars({ categories }) {
  // Empty state guard, respecting the neutral slate workspace colors
  if (!categories || categories.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 py-10 px-4 text-center">
        <Target className="h-8 w-8 text-slate-300" strokeWidth={1.5} />
        <h4 className="mt-3 text-sm font-semibold text-slate-700">No category data available yet</h4>
        <p className="mt-1 text-xs text-slate-500 max-w-xs">
          Complete more curriculum modules or adaptive simulations to generate a detailed domain mastery profile.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
      
      {/* List Header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-6 py-3">
        <div className="flex items-center gap-2">
          <Layers className="h-3.5 w-3.5 text-cyan-800" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Domain Mastery Breakdown
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-500">
          <TrendingUp className="h-3.5 w-3.5 text-slate-400" />
          <span>Metric: Accuracy %</span>
        </div>
      </div>

      {/* Domain Rows */}
      <div className="divide-y divide-slate-100">
        {categories.map((cat, idx) => {
          // NCLEX Passing Cut-Off is ~60-65% benchmark
          const isRemediationNeeded = cat.accuracy < 65;

          return (
            <div 
              key={cat.name ?? idx} 
              className={`p-6 transition-colors ${
                isRemediationNeeded ? 'bg-red-50/40' : 'bg-white'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                
                {/* Name, Items Count, and Status Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                    {cat.name || 'Unclassified Domain'}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-medium text-slate-500">
                      ({cat.correct}/{cat.total} Items)
                    </span>
                    
                    {isRemediationNeeded && (
                      <span className="inline-flex items-center gap-1 rounded bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-800 border border-red-200">
                        <AlertCircle className="h-3 w-3" strokeWidth={2.5} />
                        Remediation Target
                      </span>
                    )}
                  </div>
                </div>

                {/* Accuracy Callout */}
                <div className={`shrink-0 font-mono text-xl font-bold ${
                  isRemediationNeeded ? 'text-red-700' : 'text-slate-900'
                }`}>
                  {cat.accuracy}%
                </div>
              </div>

              {/* Mastery Track & Fill */}
              <div className="relative h-2.5 w-full rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                
                {/* Subdued benchmark markers (e.g. 50%, 65%) */}
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/50 z-10" />
                <div className="absolute inset-y-0 left-[65%] w-px bg-red-300 z-10" />

                <div
                  className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out ${
                    isRemediationNeeded
                      ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]'
                      : 'bg-cyan-700 shadow-[0_0_10px_rgba(14,116,144,0.3)]'
                  }`}
                  style={{ width: `${Math.max(cat.accuracy, 3)}%` }} // Minimum 3% visible fill
                />
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}