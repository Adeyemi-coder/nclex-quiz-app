// src/components/Quiz/ResultsView.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  LayoutDashboard, 
  Award, 
  Clock, 
  Target,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { MetricCard } from '../common/MetricCard';
import { Badge } from '../common/Badge';

export const ResultsView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fallback demonstration/state extraction
  const {
    score = 82,
    correctCount = 41,
    totalQuestions = 50,
    timeSpent = '42m 18s',
    subject = 'Clinical Examination Assessment',
    categorySlug = 'primaryHealthCare',
    reviewItems = []
  } = location.state || {};

  const isPassing = score >= 75;

  return (
    <div className="min-h-screen bg-surface-canvas text-slate-800 p-6 md:p-10 font-sans antialiased">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Top Header & Verdict Banner */}
        <div className="bg-white border border-surface-border rounded-lg p-6 md:p-8 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
              isPassing ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-rose-50 text-rose-600 border border-rose-200'
            }`}>
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant={isPassing ? 'success' : 'danger'}>
                  {isPassing ? 'Examination Passed (Qualified)' : 'Remediation Required'}
                </Badge>
                <span className="text-xs font-mono text-slate-400">NMCN / NGN Benchmark: 75.0%</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{subject}</h1>
              <p className="text-xs text-slate-500 mt-1">
                Formal candidate performance audit and clinical rationale breakdown.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => navigate(`/quiz/${categorySlug}`)}
              className="flex-1 md:flex-initial text-xs font-semibold bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2.5 rounded-md transition-colors flex items-center justify-center gap-2 shadow-subtle"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Drill</span>
            </button>
            <button
              onClick={() => navigate('/app/dashboard')}
              className="flex-1 md:flex-initial text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-4 py-2.5 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>
          </div>
        </div>

        {/* Primary Score Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            label="Overall Score" 
            value={`${score}%`} 
            subtext={isPassing ? 'Satisfies Council threshold' : 'Below pass threshold'} 
            icon={Target} 
          />
          <MetricCard 
            label="Correct Responses" 
            value={`${correctCount} / ${totalQuestions}`} 
            subtext="Validated answers" 
            icon={CheckCircle2} 
          />
          <MetricCard 
            label="Total Time Elapsed" 
            value={timeSpent} 
            subtext="Avg ~51 sec / question" 
            icon={Clock} 
          />
          <MetricCard 
            label="Clinical Proficiency" 
            value={isPassing ? 'Proficient' : 'Needs Practice'} 
            subtext="Based on question weight" 
            icon={BookOpen} 
          />
        </div>

        {/* Diagnostic Action Summary */}
        <div className="bg-white border border-surface-border rounded-lg p-6 shadow-subtle space-y-6">
          <div className="border-b border-surface-border pb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Clinical Feedback & Item Breakdown</h3>
              <p className="text-xs text-slate-500 mt-0.5">Recommendations for focused remediation before your next exam.</p>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-500">
              Exam Audit Ref: AUD-{Math.floor(100000 + Math.random() * 900000)}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded border border-emerald-100 bg-emerald-50/30 space-y-1.5">
              <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Demonstrated Strengths
              </span>
              <p className="text-slate-600 leading-relaxed">
                Accurate identification of emergency primary assessment sequences, core pharmacological mechanisms, and statutory nursing legal boundaries.
              </p>
            </div>

            <div className="p-4 rounded border border-amber-100 bg-amber-50/30 space-y-1.5">
              <span className="font-bold text-amber-900 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-amber-600" />
                Remediation Priorities
              </span>
              <p className="text-slate-600 leading-relaxed">
                Review fluid calculation formulas (e.g., Parkland formula in burn resuscitation), IV drop rate mathematics, and detailed contraindications.
              </p>
            </div>
          </div>

          {/* Quick Navigations */}
          <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-500">Want to review saved or flagged questions?</span>
            <button
              onClick={() => navigate('/app/bookmarks')}
              className="text-brand-primary font-semibold hover:underline flex items-center gap-1"
            >
              <span>Inspect Saved Bookmarks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResultsView;