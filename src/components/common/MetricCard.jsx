import React from 'react';

export const MetricCard = ({ label, value, subtext, icon: Icon, trend }) => (
  <div className="bg-surface-card border border-surface-border rounded-lg p-5 shadow-subtle flex flex-col justify-between">
    <div className="flex items-center justify-between">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</span>
      {Icon && (
        <div className="w-8 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600">
          <Icon className="w-4 h-4" />
        </div>
      )}
    </div>
    <div className="mt-4">
      <div className="text-2xl font-bold tracking-tight text-slate-900">{value}</div>
      {(subtext || trend) && (
        <div className="mt-1 flex items-center text-xs text-slate-500 gap-1.5">
          {trend && (
            <span className={trend.positive ? 'text-emerald-600 font-semibold' : 'text-rose-600 font-semibold'}>
              {trend.value}
            </span>
          )}
          {subtext && <span>{subtext}</span>}
        </div>
      )}
    </div>
  </div>
);

export default MetricCard;