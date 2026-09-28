// src/components/common/MetricCard.jsx
import React from 'react';

export const MetricCard = ({ label, value, subtext, icon: Icon, trend }) => (
  <div className="bg-white dark:bg-[#151D30] border border-slate-200 dark:border-[#232E4A] rounded-none p-5 shadow-xs flex flex-col justify-between transition-colors">
    <div className="flex items-center justify-between">
      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </span>
      {Icon && (
        <div className="w-8 h-8 rounded-none bg-slate-50 dark:bg-[#1C263D] border border-slate-200 dark:border-[#232E4A] flex items-center justify-center text-slate-600 dark:text-slate-300">
          <Icon className="w-4 h-4 stroke-[2]" />
        </div>
      )}
    </div>

    <div className="mt-4">
      <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-sans">
        {value}
      </div>

      {(subtext || trend) && (
        <div className="mt-1 flex items-center text-xs text-slate-500 dark:text-slate-400 gap-1.5 font-medium">
          {trend && (
            <span
              className={
                trend.positive
                  ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'text-rose-600 dark:text-rose-400 font-bold'
              }
            >
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