// src/pages/dashboard/DashboardHome.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { MetricCard } from '../../components/common/MetricCard';
import { Badge } from '../../components/common/Badge';
import {
  getDashboardMetrics,
  getPerformanceChartData,
  updateStudentProfile,
} from '../../services/studentStorage';
import {
  GraduationCap,
  Target,
  Flame,
  CheckCircle2,
  Play,
  Bookmark,
  Award,
  FileQuestion,
  Edit2,
  Check,
  X
} from 'lucide-react';

export const DashboardHome = () => {
  const navigate = useNavigate();
  const auth = useAuth() || {};
  const { currentUser, updateUser } = auth;

  const [chartTimeframe, setChartTimeframe] = useState('7d');
  const [metrics, setMetrics] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState('');

  const activeName = useMemo(() => {
    if (currentUser?.name) return currentUser.name;
    try {
      const stored = JSON.parse(localStorage.getItem('user'));
      if (stored?.name) return stored.name;
    } catch {
      // ignore JSON parse fallback
    }
    return metrics?.profile?.name || 'Candidate';
  }, [currentUser, metrics]);

  const loadData = () => {
    const data = getDashboardMetrics();
    setMetrics(data);

    let currentActiveName = 'Candidate';
    try {
      const stored = JSON.parse(localStorage.getItem('user'));
      currentActiveName = currentUser?.name || stored?.name || data?.profile?.name || 'Candidate';
    } catch {
      currentActiveName = currentUser?.name || data?.profile?.name || 'Candidate';
    }

    setNewName(currentActiveName);
    setChartData(getPerformanceChartData(chartTimeframe));
  };

  useEffect(() => {
    loadData();
    window.addEventListener('focus', loadData);
    return () => window.removeEventListener('focus', loadData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartTimeframe, currentUser]);

  const handleSaveName = (e) => {
    e.preventDefault();
    const trimmed = newName.trim();
    if (!trimmed) return;

    if (typeof updateUser === 'function') {
      updateUser({ name: trimmed });
    }

    updateStudentProfile({ name: trimmed });

    try {
      const stored = JSON.parse(localStorage.getItem('user')) || {};
      localStorage.setItem('user', JSON.stringify({ ...stored, name: trimmed }));
    } catch {
      // storage fallback
    }

    setIsEditingName(false);
    loadData();
  };

  if (!metrics) return null;

  const hasActivity = metrics.totalAnswered > 0;
  const hasExamHistory = metrics.examsCompleted > 0;
  const hasStreak = hasActivity && metrics.streakDays > 0;

  const totalBankQuestions = metrics.subjectBreakdown?.reduce((sum, s) => sum + s.total, 0) || 1;
  const chartHasData = chartData.some((d) => d.count > 0);

  return (
    <div className="space-y-6 antialiased font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Candidate Header */}
      <div className="bg-white dark:bg-[#11192C] border border-slate-200 dark:border-[#232E4A] rounded-none p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors">
        <div>
          <div className="flex items-center gap-2">
            {isEditingName ? (
              <form onSubmit={handleSaveName} className="flex items-center gap-2">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="text-lg font-bold text-slate-900 dark:text-white border border-[#1D2A59] dark:border-blue-400 bg-white dark:bg-[#151D30] rounded-none px-2.5 py-0.5 focus:outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  title="Save name"
                  className="p-1.5 bg-[#1D2A59] hover:bg-[#102047] text-white rounded-none cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  title="Cancel"
                  onClick={() => setIsEditingName(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-none cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Good day, {activeName}
                </h1>
                <button
                  type="button"
                  onClick={() => setIsEditingName(true)}
                  className="text-slate-400 hover:text-[#1D2A59] dark:hover:text-blue-400 p-1 cursor-pointer transition-colors"
                  title="Edit display name"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
            <span>
              Registered Index: <strong className="font-mono text-slate-700 dark:text-slate-300">{metrics.profile?.indexNumber || 'NMCN/2026/CAND'}</strong>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span>
              Target: <strong className="text-slate-700 dark:text-slate-300">{metrics.profile?.targetExam || 'General Nursing Examination'}</strong>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => navigate('/quiz/primaryHealthCare')}
            className="text-xs font-bold uppercase tracking-wider bg-[#1D2A59] hover:bg-[#102047] text-white px-4 py-2.5 rounded-none transition-all flex items-center gap-2 shadow-xs cursor-pointer active:scale-98"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{hasActivity ? 'Continue Studying' : 'Start Studying'}</span>
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard/exams')}
            className="text-xs font-bold uppercase tracking-wider bg-white dark:bg-[#151D30] hover:bg-slate-50 dark:hover:bg-[#1A243D] text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-[#232E4A] px-4 py-2.5 rounded-none transition-colors cursor-pointer"
          >
            Start New Exam
          </button>
        </div>
      </div>

      {/* 2. Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        <MetricCard
          label="Questions Answered"
          value={metrics.totalAnswered.toLocaleString()}
          subtext={`of ${totalBankQuestions.toLocaleString()} in the bank`}
          icon={FileQuestion}
          trend={
            hasActivity
              ? { value: `${Math.round((metrics.totalAnswered / totalBankQuestions) * 100)}% covered`, positive: true }
              : { value: 'Not started', positive: null }
          }
        />
        <MetricCard
          label="Overall Accuracy"
          value={hasActivity ? `${metrics.overallAccuracy}%` : '—'}
          subtext="Council threshold: 75%"
          icon={Target}
          trend={
            hasActivity
              ? { value: metrics.overallAccuracy >= 75 ? 'Above Pass Target' : 'Below Benchmark', positive: metrics.overallAccuracy >= 75 }
              : { value: 'No data yet', positive: null }
          }
        />
        <MetricCard
          label="Exams Completed"
          value={metrics.examsCompleted}
          subtext="Verified session logs"
          icon={GraduationCap}
        />
        <MetricCard
          label="Study Streak"
          value={hasStreak ? `${metrics.streakDays} Day${metrics.streakDays > 1 ? 's' : ''}` : '0 Days'}
          subtext={
            hasStreak && metrics.profile?.lastActiveDate
              ? `Last active: ${metrics.profile.lastActiveDate}`
              : 'Answer a question to start streak'
          }
          icon={Flame}
          trend={hasStreak ? { value: 'Active', positive: true } : undefined}
        />
        <MetricCard
          label="Average Score"
          value={hasExamHistory ? `${metrics.averageScore}%` : '—'}
          subtext="Passing grade: 75%"
          icon={Award}
          trend={
            hasExamHistory
              ? { value: metrics.averageScore >= 75 ? 'Passing standard' : 'Needs practice', positive: metrics.averageScore >= 75 }
              : { value: 'No exams yet', positive: null }
          }
        />
      </div>

      {/* 3. Performance Velocity Chart & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-[#11192C] border border-slate-200 dark:border-[#232E4A] rounded-none p-5 shadow-xs flex flex-col justify-between transition-colors">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-[#232E4A]">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Performance Overview</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Real accuracy and question completions recorded in study sessions</p>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#151D30] p-0.5 rounded-none text-[11px] font-semibold text-slate-600 dark:text-slate-300">
              <button
                type="button"
                onClick={() => setChartTimeframe('7d')}
                className={`px-2.5 py-1 rounded-none transition-colors cursor-pointer ${chartTimeframe === '7d' ? 'bg-white dark:bg-[#1C263D] text-slate-900 dark:text-white shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'}`}
              >
                7 Days
              </button>
              <button
                type="button"
                onClick={() => setChartTimeframe('30d')}
                className={`px-2.5 py-1 rounded-none transition-colors cursor-pointer ${chartTimeframe === '30d' ? 'bg-white dark:bg-[#1C263D] text-slate-900 dark:text-white shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'}`}
              >
                14 Days
              </button>
              <button
                type="button"
                onClick={() => setChartTimeframe('90d')}
                className={`px-2.5 py-1 rounded-none transition-colors cursor-pointer ${chartTimeframe === '90d' ? 'bg-white dark:bg-[#1C263D] text-slate-900 dark:text-white shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'}`}
              >
                30 Days
              </button>
            </div>
          </div>

          <div className="py-6 relative">
            {!chartHasData && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xs text-slate-400 bg-white/80 dark:bg-[#151D30]/80 px-3 py-1.5 border border-slate-200 dark:border-[#232E4A]">
                  No study sessions yet — answer a question to see your trend
                </span>
              </div>
            )}
            <div className="h-44 flex items-end justify-between gap-2 px-2 pt-6">
              {chartData.map((item, idx) => {
                const maxVal = Math.max(...chartData.map((d) => d.count), 50);
                const heightPercent = item.count > 0 ? Math.max(15, (item.count / maxVal) * 100) : 4;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400">
                      {item.count > 0 ? `${item.accuracy}%` : '-'}
                    </span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-t-none transition-all cursor-pointer relative group ${
                        item.count > 0 ? 'bg-[#1D2A59] dark:bg-blue-500 hover:bg-[#102047]' : 'bg-slate-100 dark:bg-[#151D30]'
                      }`}
                    >
                      {item.count > 0 && (
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] px-1.5 py-0.5 rounded-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 font-bold">
                          {item.count} Questions ({item.accuracy}%)
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 truncate">{item.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-[#232E4A] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Logged Attempts: {metrics.examsCompleted} sessions</span>
            {hasActivity ? (
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                {metrics.overallAccuracy >= 75 ? 'Pass Benchmark Achieved' : 'Need Practice on Missed Items'}
              </span>
            ) : (
              <span className="text-slate-400">Complete a session to see recommendations</span>
            )}
          </div>
        </div>

        {/* Study Progress Box */}
        <div className="bg-white dark:bg-[#11192C] border border-slate-200 dark:border-[#232E4A] rounded-none p-5 shadow-xs flex flex-col justify-between transition-colors">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Study Progress</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Calculated student readiness</p>

            <div className="mt-5 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700 dark:text-slate-300">Overall Preparation</span>
                  <span className="text-[#1D2A59] dark:text-blue-400 font-mono font-bold">
                    {Math.min(100, Math.round((metrics.totalAnswered / totalBankQuestions) * 100))}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-[#151D30] h-2 rounded-none overflow-hidden">
                  <div
                    style={{ width: `${Math.min(100, Math.round((metrics.totalAnswered / totalBankQuestions) * 100))}%` }}
                    className="bg-[#1D2A59] dark:bg-blue-500 h-full transition-all duration-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700 dark:text-slate-300">Questions Completed</span>
                  <span className="text-slate-900 dark:text-slate-100 font-mono">
                    {metrics.totalAnswered}/{totalBankQuestions}
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-[#151D30] h-2 rounded-none overflow-hidden">
                  <div
                    style={{ width: `${Math.min(100, Math.round((metrics.totalAnswered / totalBankQuestions) * 100))}%` }}
                    className="bg-emerald-500 h-full transition-all duration-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700 dark:text-slate-300">Disciplines Attempted</span>
                  <span className="text-slate-900 dark:text-slate-100 font-mono">
                    {metrics.subjectBreakdown?.filter((s) => s.attempted > 0).length || 0}/{metrics.subjectBreakdown?.length || 0}
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-[#151D30] h-2 rounded-none overflow-hidden">
                  <div
                    style={{
                      width: `${((metrics.subjectBreakdown?.filter((s) => s.attempted > 0).length || 0) / (metrics.subjectBreakdown?.length || 1)) * 100}%`,
                    }}
                    className="bg-blue-500 h-full transition-all duration-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700 dark:text-slate-300">Current Study Streak</span>
                  <span className="text-amber-600 dark:text-amber-400 font-mono font-bold">
                    {hasStreak ? `${metrics.streakDays} Days` : '0 Days'}
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-[#151D30] h-2 rounded-none overflow-hidden">
                  <div
                    style={{ width: `${hasStreak ? Math.min(100, (metrics.streakDays / 14) * 100) : 0}%` }}
                    className="bg-amber-500 h-full transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-100 dark:border-[#232E4A] text-center">
            <button
              type="button"
              onClick={() => navigate('/dashboard/progress')}
              className="text-xs font-bold text-[#1D2A59] dark:text-blue-400 hover:underline cursor-pointer"
            >
              View Full Analytics Report →
            </button>
          </div>
        </div>
      </div>

      {/* 4. Subject Performance Matrix & Activity Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-[#11192C] border border-slate-200 dark:border-[#232E4A] rounded-none p-5 shadow-xs transition-colors">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#232E4A] mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Subject Performance</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Calculated accuracy based on completed tests</p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/dashboard/exams')}
              className="text-xs font-bold text-[#1D2A59] dark:text-blue-400 hover:underline cursor-pointer"
            >
              Browse All Banks
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
            {metrics.subjectBreakdown?.map((sub) => {
              const subAttempted = sub.attempted > 0;
              return (
                <div key={sub.name} className="py-1">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate pr-2">{sub.name}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-slate-400 text-[11px]">
                        {sub.attempted}/{sub.total}
                      </span>
                      {subAttempted ? (
                        <span
                          className={`font-mono font-bold ${
                            sub.accuracy >= 80 ? 'text-emerald-600 dark:text-emerald-400' : sub.accuracy >= 75 ? 'text-slate-800 dark:text-slate-200' : 'text-amber-600 dark:text-amber-400'
                          }`}
                        >
                          {sub.accuracy}%
                        </span>
                      ) : (
                        <span className="font-mono text-slate-400">Not started</span>
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-[#151D30] h-1.5 rounded-none overflow-hidden">
                    <div
                      style={{ width: subAttempted ? `${sub.progress}%` : '0%' }}
                      className={`h-full transition-all duration-500 ${
                        !subAttempted ? '' : sub.accuracy >= 85 ? 'bg-emerald-500' : sub.accuracy >= 75 ? 'bg-[#1D2A59] dark:bg-blue-500' : 'bg-amber-500'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Activity Stream */}
        <div className="bg-white dark:bg-[#11192C] border border-slate-200 dark:border-[#232E4A] rounded-none p-5 shadow-xs flex flex-col justify-between transition-colors">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Study Activity</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Actual candidate practice history</p>

            <div className="mt-4 space-y-3.5">
              {metrics.recentActivity && metrics.recentActivity.length > 0 ? (
                metrics.recentActivity.map((act, idx) => (
                  <div key={idx} className="flex gap-3 text-xs">
                    <div className="w-7 h-7 rounded-none bg-slate-100 dark:bg-[#151D30] border border-slate-200 dark:border-[#232E4A] flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1D2A59] dark:text-blue-400" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block leading-tight">{act.title}</span>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 leading-snug">{act.desc}</p>
                      <span className="text-[10px] text-slate-400 font-mono block mt-1">{act.time}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-xs text-slate-400">
                  No exam activity recorded yet. Start an exam to record your performance.
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#232E4A]">
            <button
              type="button"
              onClick={() => navigate('/dashboard/history')}
              className="w-full text-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              View Full History Log
            </button>
          </div>
        </div>
      </div>

      {/* 5. Recent Exams Table */}
      <div className="bg-white dark:bg-[#11192C] border border-slate-200 dark:border-[#232E4A] rounded-none shadow-xs overflow-hidden transition-colors">
        <div className="p-5 border-b border-slate-100 dark:border-[#232E4A] flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Recent Exams</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Verified candidate test submissions stored locally</p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/dashboard/exams')}
            className="text-xs font-bold text-[#1D2A59] dark:text-blue-400 hover:underline cursor-pointer"
          >
            Start Another Simulation
          </button>
        </div>

        <div className="overflow-x-auto">
          {metrics.recentExams && metrics.recentExams.length > 0 ? (
            <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300 border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-[#151D30] border-b border-slate-100 dark:border-[#232E4A] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Exam ID</th>
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4 font-mono">Questions</th>
                  <th className="py-3 px-4 font-mono">Score</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-[#232E4A]">
                {metrics.recentExams.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/75 dark:hover:bg-[#151D30]/60 transition-colors">
                    <td className="py-3 px-4 font-mono font-medium text-slate-900 dark:text-white">{row.id}</td>
                    <td className="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">{row.subject}</td>
                    <td className="py-3 px-4 font-mono">{row.questions}</td>
                    <td className="py-3 px-4 font-mono font-bold">
                      <span className={row.score >= 75 ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}>
                        {row.score}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{row.date}</td>
                    <td className="py-3 px-4">
                      <Badge variant={row.score >= 75 ? 'success' : 'warning'}>{row.status}</Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => navigate(`/quiz/${row.slug}`)}
                        className="text-xs font-bold text-[#1D2A59] dark:text-blue-400 hover:underline cursor-pointer"
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

      {/* 6. Quick Actions */}
      <div className="bg-white dark:bg-[#11192C] border border-slate-200 dark:border-[#232E4A] rounded-none p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Actions</h4>
          <span className="text-sm font-bold text-slate-900 dark:text-white">Directly launch focused examination drills</span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => navigate('/quiz/anatomyPhysiology')}
            className="px-3.5 py-2 rounded-none bg-[#1D2A59] hover:bg-[#102047] text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-98"
          >
            Start Full Exam
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard/exams')}
            className="px-3.5 py-2 rounded-none bg-slate-100 dark:bg-[#151D30] hover:bg-slate-200 dark:hover:bg-[#1A243D] text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer"
          >
            Practice Questions
          </button>
          <button
            type="button"
            onClick={() => hasExamHistory && navigate('/dashboard/history')}
            disabled={!hasExamHistory}
            title={hasExamHistory ? undefined : 'Complete an exam first to review mistakes'}
            className={`px-3.5 py-2 rounded-none text-xs font-bold transition-colors ${
              hasExamHistory
                ? 'bg-slate-100 dark:bg-[#151D30] hover:bg-slate-200 dark:hover:bg-[#1A243D] text-slate-800 dark:text-slate-200 cursor-pointer'
                : 'bg-slate-50 dark:bg-[#151D30]/40 text-slate-300 dark:text-slate-600 cursor-not-allowed'
            }`}
          >
            Review Mistakes
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard/bookmarks')}
            className="px-3.5 py-2 rounded-none bg-slate-100 dark:bg-[#151D30] hover:bg-slate-200 dark:hover:bg-[#1A243D] text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-500" />
            <span>Bookmarked Questions</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default DashboardHome;