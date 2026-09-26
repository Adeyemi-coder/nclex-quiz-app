// src/pages/dashboard/DashboardHome.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetricCard } from '../../components/common/MetricCard';
import { Badge } from '../../components/common/Badge';
import {
  getDashboardMetrics,
  getPerformanceChartData,
  updateStudentProfile
} from '../../services/studentStorage';
import {
  GraduationCap,
  Target,
  Flame,
  CheckCircle2,
  ArrowRight,
  Play,
  RotateCcw,
  Bookmark,
  Award,
  Activity,
  FileQuestion,
  Edit2
} from 'lucide-react';

export const DashboardHome = () => {
  const navigate = useNavigate();
  const [chartTimeframe, setChartTimeframe] = useState('7d');
  const [metrics, setMetrics] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState('');

  // Reload metrics on mount or when window regains focus (e.g. Returning from a test)
  const loadData = () => {
    const data = getDashboardMetrics();
    setMetrics(data);
    setNewName(data.profile.name);
    setChartData(getPerformanceChartData(chartTimeframe));
  };

  useEffect(() => {
    loadData();
    window.addEventListener('focus', loadData);
    return () => window.removeEventListener('focus', loadData);
  }, [chartTimeframe]);

  const handleSaveName = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    updateStudentProfile({ name: newName.trim() });
    setIsEditingName(false);
    loadData();
  };

  if (!metrics) return null;

  return (
    <div className="space-y-6">
      {/* 1. GREETING & REAL STUDENT IDENTITY HEADER */}
      <div className="bg-white border border-surface-border rounded p-6 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            {isEditingName ? (
              <form onSubmit={handleSaveName} className="flex items-center gap-2">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="text-lg font-bold text-slate-900 border border-brand-primary rounded px-2 py-0.5 focus:outline-none"
                  autoFocus
                />
                <button type="submit" className="text-xs bg-brand-primary text-white px-2 py-1 rounded font-bold">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingName(false)}
                  className="text-xs text-slate-500 hover:text-slate-700"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                  Good morning, {metrics.profile.name}
                </h1>
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-slate-400 hover:text-brand-primary p-1"
                  title="Change student name"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Registered Index: <span className="font-mono font-semibold text-slate-700">{metrics.profile.indexNumber}</span> • Target: <span className="font-semibold text-slate-700">{metrics.profile.targetExam}</span>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => navigate('/quiz/primaryHealthCare')}
            className="text-xs font-bold uppercase tracking-wider bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2.5 rounded transition-colors flex items-center gap-2 shadow-subtle"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Continue Studying</span>
          </button>
          <button
            onClick={() => navigate('/dashboard/exams')}
            className="text-xs font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-4 py-2.5 rounded transition-colors"
          >
            Start New Exam
          </button>
        </div>
      </div>

      {/* 2. REAL STUDENT METRICS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        <MetricCard
          label="Questions Answered"
          value={metrics.totalAnswered.toLocaleString()}
          subtext="Goal: 5,000 items"
          icon={FileQuestion}
          trend={{ value: `${Math.round((metrics.totalAnswered / 5000) * 100)}% of goal`, positive: true }}
        />
        <MetricCard
          label="Overall Accuracy"
          value={`${metrics.overallAccuracy}%`}
          subtext="Council threshold: 75%"
          icon={Target}
          trend={{ value: metrics.overallAccuracy >= 75 ? 'Above Pass Target' : 'Below Benchmark', positive: metrics.overallAccuracy >= 75 }}
        />
        <MetricCard
          label="Exams Completed"
          value={metrics.examsCompleted}
          subtext="Verified session logs"
          icon={GraduationCap}
        />
        <MetricCard
          label="Study Streak"
          value={`${metrics.streakDays} Day${metrics.streakDays > 1 ? 's' : ''}`}
          subtext={`Last active: ${metrics.profile.lastActiveDate}`}
          icon={Flame}
          trend={{ value: 'Active', positive: true }}
        />
        <MetricCard
          label="Average Score"
          value={`${metrics.averageScore}%`}
          subtext="Passing grade: 75%"
          icon={Award}
          trend={{ value: metrics.averageScore >= 75 ? 'Passing standard' : 'Needs practice', positive: metrics.averageScore >= 75 }}
        />
      </div>

      {/* 3. PERFORMANCE VELOCITY CHART & STUDY PROGRESS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Overview Chart */}
        <div className="lg:col-span-2 bg-white border border-surface-border rounded p-5 shadow-subtle flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-surface-border">
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">Performance Overview</h3>
              <p className="text-xs text-slate-500 mt-0.5">Real accuracy and question completions recorded in study sessions</p>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded text-[11px] font-semibold text-slate-600">
              <button
                onClick={() => setChartTimeframe('7d')}
                className={`px-2.5 py-1 rounded transition-colors ${chartTimeframe === '7d' ? 'bg-white text-slate-900 shadow-subtle' : 'hover:text-slate-900'}`}
              >
                7 Days
              </button>
              <button
                onClick={() => setChartTimeframe('30d')}
                className={`px-2.5 py-1 rounded transition-colors ${chartTimeframe === '30d' ? 'bg-white text-slate-900 shadow-subtle' : 'hover:text-slate-900'}`}
              >
                14 Days
              </button>
              <button
                onClick={() => setChartTimeframe('90d')}
                className={`px-2.5 py-1 rounded transition-colors ${chartTimeframe === '90d' ? 'bg-white text-slate-900 shadow-subtle' : 'hover:text-slate-900'}`}
              >
                30 Days
              </button>
            </div>
          </div>

          {/* Dynamic Velocity Bars */}
          <div className="py-6">
            <div className="h-44 flex items-end justify-between gap-2 px-2 pt-6">
              {chartData.map((item, idx) => {
                const maxVal = Math.max(...chartData.map(d => d.count), 50);
                const heightPercent = item.count > 0 ? Math.max(15, (item.count / maxVal) * 100) : 4;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-mono font-bold text-slate-500">
                      {item.count > 0 ? `${item.accuracy}%` : '-'}
                    </span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-t transition-all cursor-pointer relative group ${
                        item.count > 0 ? 'bg-brand-primary/90 hover:bg-brand-primary' : 'bg-slate-100'
                      }`}
                    >
                      {item.count > 0 && (
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                          {item.count} Questions ({item.accuracy}%)
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 truncate">{item.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs text-slate-500">
            <span>Logged Attempts: {metrics.examsCompleted} sessions</span>
            <span className="font-semibold text-emerald-600">
              {metrics.overallAccuracy >= 75 ? 'Pass Benchmark Achieved' : 'Need Practice on Missed Items'}
            </span>
          </div>
        </div>

        {/* Study Progress Box */}
        <div className="bg-white border border-surface-border rounded p-5 shadow-subtle flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Study Progress</h3>
            <p className="text-xs text-slate-500 mt-0.5">Calculated student readiness</p>

            <div className="mt-5 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Overall Preparation</span>
                  <span className="text-brand-primary font-mono font-bold">
                    {Math.min(100, Math.round((metrics.totalAnswered / 900) * 100))}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${Math.min(100, Math.round((metrics.totalAnswered / 900) * 100))}%` }}
                    className="bg-brand-primary h-full rounded-full transition-all duration-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Questions Completed</span>
                  <span className="text-slate-900 font-mono">{metrics.totalAnswered} / 900</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${Math.min(100, Math.round((metrics.totalAnswered / 900) * 100))}%` }}
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Disciplines Attempted</span>
                  <span className="text-slate-900 font-mono">
                    {metrics.subjectBreakdown.filter(s => s.attempted > 0).length} / {metrics.subjectBreakdown.length}
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    style={{
                      width: `${(metrics.subjectBreakdown.filter(s => s.attempted > 0).length / metrics.subjectBreakdown.length) * 100}%`
                    }}
                    className="bg-brand-subtle h-full rounded-full transition-all duration-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Current Study Streak</span>
                  <span className="text-amber-600 font-mono font-bold">{metrics.streakDays} Days</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${Math.min(100, (metrics.streakDays / 14) * 100)}%` }}
                    className="bg-amber-500 h-full rounded-full transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-surface-border text-center">
            <button
              onClick={() => navigate('/dashboard/progress')}
              className="text-xs font-bold text-brand-primary hover:underline"
            >
              View Full Analytics Report →
            </button>
          </div>
        </div>
      </div>

      {/* 4. SUBJECT PERFORMANCE MATRIX & ACTIVITY LOGS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subject Matrix */}
        <div className="lg:col-span-2 bg-white border border-surface-border rounded p-5 shadow-subtle">
          <div className="flex items-center justify-between pb-3 border-b border-surface-border mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">Subject Performance</h3>
              <p className="text-xs text-slate-500 mt-0.5">Calculated student accuracy based on taken tests</p>
            </div>
            <button
              onClick={() => navigate('/dashboard/exams')}
              className="text-xs font-bold text-brand-primary hover:underline"
            >
              Browse All Banks
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
            {metrics.subjectBreakdown.map((sub) => (
              <div key={sub.name} className="py-1">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-800 truncate pr-2">{sub.name}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-slate-400 text-[11px]">{sub.attempted}/{sub.total}</span>
                    <span className={`font-mono font-bold ${sub.accuracy >= 80 ? 'text-emerald-600' : sub.accuracy >= 75 ? 'text-slate-800' : 'text-amber-600'}`}>
                      {sub.accuracy}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${sub.progress}%` }}
                    className={`h-full rounded-full transition-all duration-500 ${
                      sub.accuracy >= 85 ? 'bg-emerald-500' : sub.accuracy >= 75 ? 'bg-brand-primary' : 'bg-amber-500'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Activity Stream */}
        <div className="bg-white border border-surface-border rounded p-5 shadow-subtle flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Study Activity</h3>
            <p className="text-xs text-slate-500 mt-0.5">Actual candidate practice history</p>

            <div className="mt-4 space-y-3.5">
              {metrics.recentActivity.length > 0 ? (
                metrics.recentActivity.map((act, idx) => (
                  <div key={idx} className="flex gap-3 text-xs">
                    <div className="w-7 h-7 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block leading-tight">{act.title}</span>
                      <p className="text-slate-500 text-[11px] mt-0.5 leading-snug">{act.desc}</p>
                      <span className="text-[10px] text-slate-400 font-mono block mt-1">{act.time}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-xs text-slate-400">
                  No exam activity recorded yet. Start an exam below to record your performance.
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-surface-border">
            <button
              onClick={() => navigate('/dashboard/history')}
              className="w-full text-center text-xs font-bold text-slate-600 hover:text-slate-900"
            >
              View Full History Log
            </button>
          </div>
        </div>
      </div>

      {/* 5. REAL RECENT EXAMS RECORDED TABLE */}
      <div className="bg-white border border-surface-border rounded shadow-subtle overflow-hidden">
        <div className="p-5 border-b border-surface-border flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Recent Exams</h3>
            <p className="text-xs text-slate-500 mt-0.5">Verified candidate test submissions stored locally</p>
          </div>
          <button
            onClick={() => navigate('/dashboard/exams')}
            className="text-xs font-bold text-brand-primary hover:underline"
          >
            Start Another Simulation
          </button>
        </div>

        <div className="overflow-x-auto">
          {metrics.recentExams.length > 0 ? (
            <table className="w-full text-left text-xs text-slate-600 border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-surface-border font-semibold text-slate-700 uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Exam ID</th>
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4 font-mono">Questions</th>
                  <th className="py-3 px-4 font-mono">Score</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {metrics.recentExams.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/75 transition-colors">
                    <td className="py-3 px-4 font-mono font-medium text-slate-900">{row.id}</td>
                    <td className="py-3 px-4 font-bold text-slate-800">{row.subject}</td>
                    <td className="py-3 px-4 font-mono">{row.questions}</td>
                    <td className="py-3 px-4 font-mono font-bold">
                      <span className={row.score >= 75 ? 'text-emerald-600' : 'text-amber-600'}>
                        {row.score}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500">{row.date}</td>
                    <td className="py-3 px-4">
                      <Badge variant={row.score >= 75 ? 'success' : 'warning'}>
                        {row.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => navigate(`/quiz/${row.slug}`)}
                        className="text-xs font-bold text-brand-primary hover:underline"
                      >
                        Retake
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-8 text-center text-xs text-slate-400">
              No exams completed yet. Take an exam to generate your verifiable score records.
            </div>
          )}
        </div>
      </div>

      {/* 6. QUICK ACTIONS BAR */}
      <div className="bg-white border border-surface-border rounded p-5 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Actions</h4>
          <span className="text-sm font-bold text-slate-900">Directly launch focused examination drills</span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => navigate('/quiz/anatomyPhysiology')}
            className="px-3.5 py-2 rounded bg-brand-primary hover:bg-brand-secondary text-white text-xs font-bold transition-colors shadow-subtle"
          >
            Start Full Exam
          </button>
          <button
            onClick={() => navigate('/dashboard/exams')}
            className="px-3.5 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
          >
            Practice Questions
          </button>
          <button
            onClick={() => navigate('/dashboard/history')}
            className="px-3.5 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
          >
            Review Mistakes
          </button>
          <button
            onClick={() => navigate('/dashboard/bookmarks')}
            className="px-3.5 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-600" />
            <span>Bookmarked Questions</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;