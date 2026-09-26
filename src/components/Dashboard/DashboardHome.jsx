// src/pages/dashboard/DashboardHome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MetricCard } from '../../components/common/MetricCard';
import { Badge } from '../../components/common/Badge';
import {
  GraduationCap,
  Target,
  Flame,
  CheckCircle2,
  ArrowRight,
  Play,
  RotateCcw,
  Filter
} from 'lucide-react';

export const DashboardHome = () => {
  const navigate = useNavigate();

  const subjectProgress = [
    { name: 'Anatomy & Physiology', attempted: 150, total: 150, accuracy: 88, status: 'Mastered' },
    { name: 'Primary Health Care (PHC)', attempted: 150, total: 150, accuracy: 84, status: 'Proficient' },
    { name: 'Nursing Ethics & Jurisprudence', attempted: 150, total: 150, accuracy: 92, status: 'Mastered' },
    { name: 'Emergency & Disaster Nursing', attempted: 150, total: 150, accuracy: 76, status: 'Proficient' },
    { name: 'Politics & Policy in Nursing', attempted: 150, total: 150, accuracy: 80, status: 'Proficient' },
    { name: 'Fundamentals of Nursing (FON)', attempted: 150, total: 150, accuracy: 82, status: 'Proficient' },
    { name: 'Clinical Pharmacology', attempted: 34, total: 150, accuracy: 68, status: 'Needs Review' },
    { name: 'Medical-Surgical Nursing', attempted: 45, total: 150, accuracy: 71, status: 'In Progress' },
  ];

  const recentExams = [
    {
      id: 'EX-9041',
      title: 'Anatomy & Physiology Full Drill',
      subject: 'Anatomy & Physiology',
      items: 50,
      score: 88,
      date: 'Today, 10:14 AM',
      mode: 'Timed Exam',
      status: 'Passed'
    },
    {
      id: 'EX-9038',
      title: 'NMCN Nursing Ethics Jurisprudence Review',
      subject: 'Nursing Ethics',
      items: 50,
      score: 92,
      date: 'Yesterday, 4:30 PM',
      mode: 'Tutor Mode',
      status: 'Passed'
    },
    {
      id: 'EX-8991',
      title: 'Primary Health Care Clinical Test',
      subject: 'Primary Health Care (PHC)',
      items: 50,
      score: 84,
      date: '22 Sep 2026',
      mode: 'Timed Exam',
      status: 'Passed'
    },
    {
      id: 'EX-8854',
      title: 'Emergency Shock & Trauma Resuscitation Drill',
      subject: 'Emergency Nursing',
      items: 50,
      score: 76,
      date: '20 Sep 2026',
      mode: 'Timed Exam',
      status: 'Needs Review'
    }
  ];

  return (
    <div className="space-y-6">
      {/* 1. Header Banner */}
      <div className="bg-white border border-surface-border rounded-lg p-6 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider block">Candidate Dashboard</span>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight mt-1">Good morning, Adeyemi Kehinde</h1>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
            Your readiness score is currently tracking in the 84th percentile for the upcoming Council qualification exam. Resume where you stopped in your clinical modules.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => navigate('/quiz/primaryHealthCare')}
            className="text-xs font-semibold bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2.5 rounded-md transition-colors flex items-center gap-2 shadow-subtle"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Continue Active Exam</span>
          </button>
          <button
            onClick={() => navigate('/app/exams')}
            className="text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-4 py-2.5 rounded-md transition-colors"
          >
            Browse Test Banks
          </button>
        </div>
      </div>

      {/* 2. Primary Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Total Questions Answered"
          value="1,248"
          subtext="across 6 curriculum modules"
          icon={GraduationCap}
          trend={{ value: '+150 this week', positive: true }}
        />
        <MetricCard
          label="Overall Accuracy"
          value="82.4%"
          subtext="benchmark: 75.0% passing score"
          icon={Target}
          trend={{ value: '+3.2%', positive: true }}
        />
        <MetricCard
          label="Consecutive Study Streak"
          value="14 Days"
          subtext="personal record: 18 days"
          icon={Flame}
          trend={{ value: 'On track', positive: true }}
        />
        <MetricCard
          label="Full-Length Exams Done"
          value="24"
          subtext="average score: 84.6%"
          icon={CheckCircle2}
        />
      </div>

      {/* 3. Performance Velocity & Quick Action */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-surface-border rounded-lg p-5 shadow-subtle flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-surface-border">
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">Study Velocity & Accuracy Trend</h3>
              <p className="text-xs text-slate-500 mt-0.5">Calculated over recent standardized exam attempts</p>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded text-xs font-medium text-slate-600">
              <span className="px-2 py-0.5 rounded bg-white font-semibold text-slate-900 shadow-subtle">7 Days</span>
              <span className="px-2 py-0.5 cursor-pointer hover:text-slate-900">30 Days</span>
              <span className="px-2 py-0.5 cursor-pointer hover:text-slate-900">All Time</span>
            </div>
          </div>

          <div className="py-6">
            <div className="h-44 flex items-end justify-between gap-3 px-2 pt-6">
              {[
                { day: 'Mon', count: 65, acc: 80 },
                { day: 'Tue', count: 110, acc: 85 },
                { day: 'Wed', count: 85, acc: 82 },
                { day: 'Thu', count: 140, acc: 88 },
                { day: 'Fri', count: 95, acc: 79 },
                { day: 'Sat', count: 180, acc: 91 },
                { day: 'Sun', count: 150, acc: 84 },
              ].map((bar) => (
                <div key={bar.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">{bar.acc}%</span>
                  <div
                    style={{ height: `${(bar.count / 200) * 100}%` }}
                    className="w-full bg-brand-primary/90 hover:bg-brand-primary rounded-t transition-all cursor-pointer relative group"
                  >
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {bar.count} Questions
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-600">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-slate-500">
            <span>Weekly Target: 800 Questions</span>
            <span className="font-semibold text-emerald-600">825 / 800 Completed (103%)</span>
          </div>
        </div>

        <div className="bg-white border border-surface-border rounded-lg p-5 shadow-subtle flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Rapid Assessment Launch</h3>
            <p className="text-xs text-slate-500 mt-0.5">Quick testing protocols</p>

            <div className="mt-4 space-y-2.5">
              <button
                onClick={() => navigate('/quiz/anatomyPhysiology')}
                className="w-full text-left p-3 rounded border border-surface-border hover:border-slate-300 hover:bg-slate-50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-brand-primary">Anatomy & Physiology 50-Item Drill</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-[11px] text-slate-500 block mt-1">Ross & Wilson clinical framework • 50 items</span>
              </button>

              <button
                onClick={() => navigate('/quiz/primaryHealthCare')}
                className="w-full text-left p-3 rounded border border-surface-border hover:border-slate-300 hover:bg-slate-50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-brand-primary">Primary Health Care (PHC) Drill</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-[11px] text-slate-500 block mt-1">Ward Health System & NPI Schedules • 50 items</span>
              </button>

              <button
                onClick={() => navigate('/quiz/emergency')}
                className="w-full text-left p-3 rounded border border-surface-border hover:border-slate-300 hover:bg-slate-50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-brand-primary">Emergency & Disaster Triage</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-[11px] text-slate-500 block mt-1">START triage, burns & trauma protocols • 50 items</span>
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-surface-border flex items-center justify-between text-xs">
            <span className="text-slate-500">Practice Mistakes Pool</span>
            <button onClick={() => navigate('/app/bookmarks')} className="text-brand-primary font-semibold hover:underline flex items-center gap-1">
              <RotateCcw className="w-3 h-3" />
              <span>Review (34)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Subject Mastery Breakdown */}
      <div className="bg-white border border-surface-border rounded-lg p-5 shadow-subtle">
        <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Curriculum Mastery Breakdown</h3>
            <p className="text-xs text-slate-500 mt-0.5">Evaluation across statutory nursing disciplines</p>
          </div>
          <button onClick={() => navigate('/app/exams')} className="text-xs font-semibold text-brand-primary hover:underline">
            View All Subjects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {subjectProgress.map((sub) => (
            <div key={sub.name} className="py-2 border-b border-slate-100 last:border-0">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-800">{sub.name}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-500 text-[11px]">{sub.attempted}/{sub.total} answered</span>
                  <span className={`font-bold font-mono ${sub.accuracy >= 80 ? 'text-emerald-600' : 'text-slate-700'}`}>
                    {sub.accuracy}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  style={{ width: `${(sub.attempted / sub.total) * 100}%` }}
                  className={`h-full rounded-full ${
                    sub.accuracy >= 85
                      ? 'bg-emerald-500'
                      : sub.accuracy >= 75
                      ? 'bg-brand-primary'
                      : 'bg-amber-500'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Recent Examination Activity Table */}
      <div className="bg-white border border-surface-border rounded-lg shadow-subtle overflow-hidden">
        <div className="p-5 border-b border-surface-border flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Recent Examination Activity</h3>
            <p className="text-xs text-slate-500 mt-0.5">Verified test attempts and score records</p>
          </div>
          <button className="text-xs border border-surface-border rounded px-2.5 py-1 text-slate-600 hover:bg-slate-50 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>Filter Attempts</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-surface-border font-semibold text-slate-700 uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4">Exam Identifier</th>
                <th className="py-3 px-4">Subject Domain</th>
                <th className="py-3 px-4">Mode</th>
                <th className="py-3 px-4">Items</th>
                <th className="py-3 px-4">Score</th>
                <th className="py-3 px-4">Date & Time</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {recentExams.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/75 transition-colors">
                  <td className="py-3 px-4 font-mono font-medium text-slate-900">{row.id}</td>
                  <td className="py-3 px-4 font-semibold text-slate-800">{row.title}</td>
                  <td className="py-3 px-4">
                    <Badge variant={row.mode === 'Timed Exam' ? 'brand' : 'neutral'}>
                      {row.mode}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 font-mono">{row.items} Qs</td>
                  <td className="py-3 px-4 font-mono font-bold">
                    <span className={row.score >= 80 ? 'text-emerald-600' : 'text-amber-600'}>
                      {row.score}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-500">{row.date}</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => navigate('/results')}
                      className="text-xs font-semibold text-brand-primary hover:text-brand-secondary hover:underline"
                    >
                      Audit Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;