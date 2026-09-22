import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  CheckCircle2, 
  Layers,
  Sparkles,
  Bookmark
} from 'lucide-react';
import { questions as allQuestions } from '../../data/questions.js';

export default function FlashcardDeck() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState(() => {
    try {
      const saved = localStorage.getItem('nclex_mastered_flashcards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isShuffled, setIsShuffled] = useState(false);

  // 1. Build flashcards from verified question bank
  const rawCards = useMemo(() => {
    return allQuestions.map((q, idx) => ({
      id: q.id || idx,
      category: q.category || 'General Clinical',
      question: q.question || q.stem,
      answer: q.options ? q.options[q.correctAnswer ?? 0] : (q.answer || 'Key Clinical Concept'),
      rationale: q.rationale || q.explanation || 'Prioritize ABCs, patient safety, and provider notification.'
    }));
  }, []);

  // 2. Extract Category List
  const categories = useMemo(() => {
    const set = new Set(rawCards.map((c) => c.category));
    return ['All', ...Array.from(set).slice(0, 8)];
  }, [rawCards]);

  // 3. Filter & Shuffle Logic
  const activeDeck = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? rawCards 
      : rawCards.filter((c) => c.category.toLowerCase() === selectedCategory.toLowerCase());
    
    if (isShuffled) {
      filtered = [...filtered].sort(() => 0.5 - Math.random());
    }
    return filtered.length > 0 ? filtered : rawCards.slice(0, 30);
  }, [rawCards, selectedCategory, isShuffled]);

  const currentCard = activeDeck[currentIndex] || activeDeck[0] || {};
  const isMastered = masteredIds.includes(currentCard.id);

  // Keyboard navigation & spacebar flip
  const handleFlip = useCallback(() => setIsFlipped((prev) => !prev), []);
  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % activeDeck.length);
  }, [activeDeck.length]);
  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + activeDeck.length) % activeDeck.length);
  }, [activeDeck.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight') {
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev]);

  function toggleMastery(id) {
    setMasteredIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('nclex_mastered_flashcards', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  }

  const progressPercent = Math.round(((currentIndex + 1) / activeDeck.length) * 100);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      
      {/* 1. Header & Quick Controls */}
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-700">
            <Layers className="h-3.5 w-3.5" strokeWidth={2} />
            <span>Spaced Repetition Protocol</span>
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Clinical Recall Decks
          </h1>
          <p className="mt-0.5 text-xs text-slate-500">
            Review core pathophysiological concepts and drug actions with rapid-fire cue retrieval.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsShuffled((prev) => !prev)}
            className={`inline-flex h-9 items-center gap-2 rounded-lg border px-3.5 text-xs font-medium transition-all ${
              isShuffled
                ? 'border-cyan-700 bg-cyan-50 text-cyan-800'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Shuffle className="h-3.5 w-3.5" />
            <span>{isShuffled ? 'Shuffled' : 'Shuffle Deck'}</span>
          </button>
        </div>
      </div>

      {/* 2. Standardized Category Filter Strip */}
      <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-xs'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Progress Tracking Rail */}
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-slate-900">
              CARD {currentIndex + 1} OF {activeDeck.length}
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-medium text-slate-500">{currentCard.category}</span>
          </div>
          <span className="font-mono text-xs font-semibold text-slate-400">
            {progressPercent}% Complete
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div 
            className="h-full bg-cyan-700 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 4. The Unified Clinical Card Surface */}
      <div 
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        aria-label="Clinical flashcard surface. Click or press spacebar to flip."
        className="group relative mt-4 flex min-h-[380px] cursor-pointer flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 shadow-xs transition-all hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 sm:p-9"
      >
        {/* Top Card Status Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 text-xs">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase ${
              isFlipped 
                ? 'bg-emerald-50 text-emerald-700' 
                : 'bg-cyan-50 text-cyan-800'
            }`}>
              <Sparkles className="h-3 w-3" />
              {isFlipped ? 'Clinical Rationale & Mechanism' : 'Clinical Scenario / Patient Cue'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-slate-600">
            <RotateCw className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
            <span className="hidden sm:inline">Click or Space to flip</span>
          </div>
        </div>

        {/* Card Main Body */}
        <div className="my-auto py-6">
          {!isFlipped ? (
            <p className="text-lg font-medium leading-relaxed tracking-tight text-slate-900 sm:text-xl">
              {currentCard.question}
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Target Response / Diagnosis
                </span>
                <p className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
                  {currentCard.answer}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 border border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Pathophysiology &amp; Nursing Actions
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                  {currentCard.rationale}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Card Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${isMastered ? 'bg-emerald-500' : 'bg-amber-400'}`} />
            {isMastered ? 'Mastered in Question Bank' : 'Requires Spaced Review'}
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
            ← Prev | Next →
          </span>
        </div>
      </div>

      {/* 5. Standardized Navigation & Mastery Control Bar */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Step Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mastery Toggle Button */}
        <button
          type="button"
          onClick={() => toggleMastery(currentCard.id)}
          className={`inline-flex h-10 items-center justify-center gap-2 rounded-lg px-5 text-xs font-semibold shadow-xs transition-all ${
            isMastered
              ? 'bg-emerald-700 text-white hover:bg-emerald-800'
              : 'border border-slate-200 bg-white text-slate-700 hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50/50'
          }`}
        >
          <CheckCircle2 className={`h-4 w-4 ${isMastered ? 'text-white' : 'text-slate-400'}`} />
          <span>{isMastered ? 'Marked Mastered' : 'Mark as Mastered'}</span>
        </button>

      </div>

    </div>
  );
}