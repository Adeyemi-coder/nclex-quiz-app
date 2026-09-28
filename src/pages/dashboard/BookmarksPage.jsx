// src/pages/dashboard/BookmarksPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bookmark, 
  Trash2, 
  Play, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Filter
} from 'lucide-react';

export const BookmarksPage = () => {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  // Load real bookmarks saved by the user
  const loadBookmarks = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('nclex_bookmarked_questions') || '[]');
      setBookmarks(stored);
    } catch (e) {
      console.error('Failed to load bookmarks', e);
      setBookmarks([]);
    }
  };

  useEffect(() => {
    loadBookmarks();
    window.addEventListener('focus', loadBookmarks);
    return () => window.removeEventListener('focus', loadBookmarks);
  }, []);

  const handleRemoveBookmark = (idToRemove) => {
    const updated = bookmarks.filter((b) => b.id !== idToRemove);
    setBookmarks(updated);
    localStorage.setItem('nclex_bookmarked_questions', JSON.stringify(updated));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to remove all saved bookmarks?')) {
      setBookmarks([]);
      localStorage.removeItem('nclex_bookmarked_questions');
    }
  };

  // Launch a custom quiz containing ONLY the user's bookmarked questions
  const handlePracticeBookmarks = () => {
    if (bookmarks.length === 0) return;
    navigate('/quiz/customDrill', {
      state: {
        customQuestions: bookmarks,
        categoryTitle: 'Bookmarked Questions Drill',
        config: {
          examMode: 'tutor',
          itemCount: bookmarks.length,
          secondsPerQuestion: 72,
        },
      },
    });
  };

  // Distinct category filters from actual saved items
  const categories = ['all', ...new Set(bookmarks.map((b) => b.category).filter(Boolean))];

  const filteredBookmarks = selectedCategory === 'all'
    ? bookmarks
    : bookmarks.filter((b) => b.category === selectedCategory);

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 sm:p-6 font-sans text-slate-800 antialiased">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
            Saved Question Bank
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 mt-1">
            <Bookmark className="w-6 h-6 text-amber-500 fill-amber-500" />
            Bookmarked Questions ({bookmarks.length})
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            High-yield and challenging items you flagged during examinations for clinical review.
          </p>
        </div>

        {bookmarks.length > 0 && (
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleClearAll}
              className="text-xs font-semibold text-slate-500 hover:text-rose-600 px-3 py-2 transition-colors cursor-pointer"
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={handlePracticeBookmarks}
              className="px-4 py-2.5 rounded bg-[#071A3D] hover:bg-[#102D63] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Practice Bookmarks ({bookmarks.length})</span>
            </button>
          </div>
        )}
      </div>

      {/* Filter Tabs if multiple categories exist */}
      {categories.length > 2 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full capitalize whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#071A3D] text-white font-bold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'All Subjects' : cat}
            </button>
          ))}
        </div>
      )}

      {/* Bookmarks List */}
      {filteredBookmarks.length > 0 ? (
        <div className="space-y-3">
          {filteredBookmarks.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id || idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs transition-all hover:border-slate-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold text-[10px]">
                        ITEM {idx + 1}
                      </span>
                      <span className="text-blue-700 font-semibold">{item.category}</span>
                      {item.type === 'sata' && (
                        <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold">
                          SATA
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                      title={isExpanded ? 'Hide explanation' : 'Show explanation & options'}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRemoveBookmark(item.id)}
                      className="p-1.5 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                      title="Remove from bookmarks"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Collapsible Details: Options & Rationale */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-3 text-xs">
                    {/* Answer choices */}
                    {item.options && item.options.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                          Options
                        </span>
                        {item.options.map((opt, optIdx) => {
                          const letter = String.fromCharCode(65 + optIdx);
                          const isCorrect = Array.isArray(item.correctAnswer)
                            ? item.correctAnswer.includes(optIdx)
                            : item.correctAnswer === optIdx || item.correctAnswer === letter;

                          return (
                            <div
                              key={optIdx}
                              className={`p-2.5 rounded border text-xs flex items-center justify-between ${
                                isCorrect
                                  ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold'
                                  : 'border-slate-200 bg-slate-50/50 text-slate-700'
                              }`}
                            >
                              <span>
                                <strong className="font-mono mr-2">{letter}.</strong> {opt}
                              </span>
                              {isCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Rationale & Pearl */}
                    {item.rationale && (
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 block font-semibold mb-0.5">Clinical Rationale:</strong>
                        {item.rationale}
                      </div>
                    )}

                    {item.clinicalPearl && (
                      <div className="p-2.5 bg-amber-50 border border-amber-200 text-amber-950 rounded text-[11px]">
                        <strong>Clinical Pearl:</strong> {item.clinicalPearl}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* Dynamic Zero-State */
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">No bookmarked questions yet</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              While taking any exam or practice drill, click the bookmark icon on the top right to save questions here for revision.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/dashboard/exams')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#071A3D] text-white rounded text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#102D63] transition-colors cursor-pointer shadow-xs"
          >
            <span>Start Practice Drill</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BookmarksPage;