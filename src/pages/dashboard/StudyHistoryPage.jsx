// src/pages/dashboard/StudyHistoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  History, 
  Clock, 
  Award, 
  Calendar, 
  ChevronRight, 
  RotateCcw, 
  Trash2, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Filter,
  FileText
} from 'lucide-react';

export const StudyHistoryPage = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [filterMode, setFilterMode] = useState('all');

  const loadHistory = () => {
    try {
      // Check all possible keys populated by Quiz.jsx
      const raw = localStorage.getItem('studyHistory') || 
                  localStorage.getItem('quizResults') || 
                  localStorage.getItem('nclex_quiz_history') || 
                  '[]';
      const parsed = JSON.parse(raw);
      setHistory(Array.isArray(parsed) ? parsed : []);
    } catch (e) {
      console.error('Failed to load study history:', e);
      setHistory([]);
    }
  };

  useEffect(() => {
    loadHistory();
    window.addEventListener('focus', loadHistory);
    return () => window.removeEventListener('focus', loadHistory);
  }, []);

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your study history log? This cannot be undone.')) {
      localStorage.removeItem('studyHistory');
      localStorage.removeItem('quizResults');
      localStorage.removeItem('nclex_quiz_history');
      setHistory([]);
      setSelectedSession(null);
    }
  };

  const filteredHistory = filterMode === 'all' 
    ? history 
    : history.filter((item) => (filterMode === 'passed' ? (item.score ?? 0) >= 75 : (item.score ?? 0) < 75));

  // Compute aggregate stats across real user history
  const totalExams = history.length;
  const avgScore = totalExams > 0 
    ? Math.round(history.reduce((acc, curr) => acc + (curr.score || 0), 0) / totalExams) 
    : 0;
  const passedExams = history.filter((h) => (h.score || 0) >= 75).length;

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 sm:p-6 font-sans text-slate-800 antialiased">
      
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
            Audit Trail & Logs
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 mt-1">
            <History className="w-6 h-6 text-[#071A3D]" />
            Study History ({totalExams})
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Verified candidate examination attempts, scoring diagnostics, and question telemetry.
          </p>
        </div>

        {totalExams > 0 && (
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleClearHistory}
              className="text-xs font-semibold text-slate-500 hover:text-rose-600 px-3 py-2 transition-colors cursor-pointer"
            >
              Clear Log
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard/exams')}
              className="px-4 py-2.5 rounded bg-[#071A3D] hover:bg-[#102D63] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Take Another Exam</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Aggregate Performance Cards */}
      {totalExams > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Sessions Completed</span>
            <div className="text-2xl font-black text-slate-900 mt-1">{totalExams}</div>
            <span className="text-xs text-slate-500 mt-0.5 block">{passedExams} met 75% pass mark</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Average Score</span>
            <div className={`text-2xl font-black mt-1 ${avgScore >= 75 ? 'text-emerald-600' : 'text-amber-600'}`}>
              {avgScore}%
            </div>
            <span className="text-xs text-slate-500 mt-0.5 block">NMCN Benchmark: 75%</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Council Qualification</span>
            <div className="text-2xl font-black text-slate-900 mt-1">
              {passedExams >= 3 ? 'Qualified' : 'In Progress'}
            </div>
            <span className="text-xs text-emerald-600 font-medium mt-0.5 block">
              {passedExams} verified passing mocks
            </span>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      {totalExams > 0 && (
        <div className="flex items-center gap-2 text-xs font-mono">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-1" />
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
              filterMode === 'all' 
                ? 'bg-[#071A3D] text-white font-bold' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            All Sessions ({totalExams})
          </button>
          <button
            onClick={() => setFilterMode('passed')}
            className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
              filterMode === 'passed' 
                ? 'bg-emerald-600 text-white font-bold' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Passed (≥75%)
          </button>
          <button
            onClick={() => setFilterMode('remedial')}
            className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
              filterMode === 'remedial' 
                ? 'bg-amber-600 text-white font-bold' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Needs Practice (&lt;75%)
          </button>
        </div>
      )}

      {/* Main Table or Zero State */}
      {filteredHistory.length > 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-semibold text-slate-700 uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Subject / Course</th>
                  <th className="py-3 px-4">Mode</th>
                  <th className="py-3 px-4 font-mono">Items</th>
                  <th className="py-3 px-4 font-mono">Score</th>
                  <th className="py-3 px-4 font-mono">Pacing</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredHistory.map((item, idx) => {
                  const score = item.score ?? 0;
                  const isPass = score >= 75;
                  const dateStr = item.date ? new Date(item.date).toLocaleDateString() : 'Recent';

                  return (
                    <tr key={item.id || idx} className="hover:bg-slate-50/75 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900 text-xs sm:text-sm">
                          {item.subjectName || item.category || 'Comprehensive Examination'}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                          ID: {item.id || `exam-${idx + 1}`}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 font-mono">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">
                          {item.mode || 'Tutor Mode'}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-slate-700">
                        {item.correctCount !== undefined 
                          ? `${item.correctCount}/${item.totalQuestions || item.total}` 
                          : `${item.total || item.totalQuestions} Qs`}
                      </td>

                      <td className="py-3.5 px-4 font-mono font-bold">
                        <span className={`inline-flex items-center gap-1 ${isPass ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {isPass ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {score}%
                        </span>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-slate-500">
                        {item.timeSpent || (item.timeSpentSeconds ? `${Math.floor(item.timeSpentSeconds / 60)}m` : '--')}
                      </td>

                      <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">
                        {dateStr}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedSession(item)}
                            className="text-blue-700 hover:underline font-bold text-xs cursor-pointer"
                          >
                            Breakdown
                          </button>
                          <span className="text-slate-200">|</span>
                          <button
                            type="button"
                            onClick={() => navigate(`/quiz/${item.slug || 'medicalSurgicalNursing'}`)}
                            className="text-slate-600 hover:text-slate-900 font-semibold text-xs flex items-center gap-1 cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" />
                            Retake
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Empty / Zero-State */
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mx-auto">
            <History className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">No examination history recorded</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Completed tests and mock trials will automatically log their scores, pacing, and questions here for your audit records.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/dashboard/exams')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#071A3D] text-white rounded text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#102D63] transition-colors cursor-pointer shadow-xs"
          >
            <span>Start Your First Exam</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Session Diagnostics Modal */}
      {selectedSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setSelectedSession(null)}
            className="absolute inset-0 bg-[#071A3D]/70 backdrop-blur-xs" 
          />
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-2xl z-10 space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">
                  Attempt Diagnostics • {selectedSession.id}
                </span>
                <h3 className="text-lg font-black text-slate-900 tracking-tight mt-0.5">
                  {selectedSession.subjectName || selectedSession.category}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSession(null)}
                className="text-slate-400 hover:text-slate-700 text-xs font-bold p-1 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-xs">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Score</span>
                <div className={`text-xl font-bold mt-1 ${selectedSession.score >= 75 ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {selectedSession.score}%
                </div>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Items Correct</span>
                <div className="text-xl font-bold text-slate-900 mt-1">
                  {selectedSession.correctCount ?? 0} / {selectedSession.totalQuestions || selectedSession.total}
                </div>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Time Used</span>
                <div className="text-xl font-bold text-slate-900 mt-1">
                  {selectedSession.timeSpent || '--'}
                </div>
              </div>
            </div>

            {/* Missed Questions Breakdown */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-slate-900">
                Missed Items Review ({selectedSession.missedQuestions?.length || 0})
              </h4>
              {selectedSession.missedQuestions && selectedSession.missedQuestions.length > 0 ? (
                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {selectedSession.missedQuestions.map((mq, mIdx) => (
                    <div key={mIdx} className="p-3.5 bg-rose-50/50 border border-rose-200 rounded-lg text-xs space-y-1.5">
                      <div className="flex items-center justify-between font-mono text-[10px]">
                        <span className="font-bold text-rose-800">ITEM {mq.itemIndex || mIdx + 1}</span>
                        <span className="text-slate-500">{mq.category || selectedSession.category}</span>
                      </div>
                      <p className="font-bold text-slate-900 leading-snug">{mq.question || mq.stem}</p>
                      {mq.rationale && (
                        <p className="text-slate-600 text-[11px] leading-relaxed pt-1 border-t border-rose-100">
                          <strong className="text-slate-800">Rationale: </strong>{mq.rationale}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-center text-xs text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                  <strong>Zero missed questions!</strong> You achieved a perfect score on this attempt.
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedSession(null)}
                className="px-4 py-2 border border-slate-300 rounded text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const targetSlug = selectedSession.slug || 'anatomyPhysiology';
                  setSelectedSession(null);
                  navigate(`/quiz/${targetSlug}`);
                }}
                className="px-4 py-2 bg-[#071A3D] text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-[#102D63] cursor-pointer"
              >
                Retake Exam
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default StudyHistoryPage;