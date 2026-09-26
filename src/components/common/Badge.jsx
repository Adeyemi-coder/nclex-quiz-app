import React from 'react';

const VARIANTS = {
  neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  brand: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  danger: 'bg-rose-50 text-rose-700 border-rose-200',
};

export const Badge = ({ children, variant = 'neutral', className = '' }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${VARIANTS[variant] || VARIANTS.neutral} ${className}`}>
    {children}
  </span>
);

export default Badge;