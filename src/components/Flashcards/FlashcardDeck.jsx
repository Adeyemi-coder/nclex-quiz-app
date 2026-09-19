import React, { useState, useMemo, useEffect, useRef } from 'react';
import { questions } from '../../data/questions.js';
import { sounds } from '../../utils/soundEffects.js';
import './FlashcardDeck.css';

const STORAGE_KEY = 'nclex_flashcards_mastery_v1';

export default function FlashcardDeck() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [masteryData, setMasteryData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const categories = useMemo(() => {
    const set = new Set(questions.map((q) => q.category).filter(Boolean));
    return ['all', ...Array.from(set)];
  }, []);

  const deck = useMemo(() => {
    if (selectedCategory === 'all') return questions;
    return questions.filter(
      (q) => q.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  const currentCard = deck[currentIndex] || null;
  const currentCardStats = currentCard ? masteryData[currentCard.id] : null;

  function advanceCard() {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1 < deck.length ? prev + 1 : 0));
  }

  function handlePrev() {
    sounds?.playClick?.();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : deck.length - 1));
  }

  function toggleFlip() {
    sounds?.playClick?.();
    setIsFlipped((prev) => !prev);
  }

  function handleRateCard(rating) {
    sounds?.playClick?.();
    if (!currentCard) return;

    setMasteryData((prev) => {
      const current = prev[currentCard.id] || { count: 0 };
      const updated = {
        ...prev,
        [currentCard.id]: {
          rating,
          count: current.count + 1,
          lastReviewed: Date.now()
        }
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not save flashcard progress:', e);
      }
      return updated;
    });

    advanceCard();
  }

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Space' || e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFlip();
      } else if (e.code === 'ArrowRight') {
        advanceCard();
      } else if (e.code === 'ArrowLeft') {
        handlePrev();
      } else if (isFlipped) {
        if (e.key === '1') handleRateCard('again');
        if (e.key === '2') handleRateCard('hard');
        if (e.key === '3') handleRateCard('good');
        if (e.key === '4') handleRateCard('easy');
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deck.length, isFlipped, currentCard]);

  const masteredCount = useMemo(() => {
    return deck.filter((q) => masteryData[q.id]?.rating === 'easy' || masteryData[q.id]?.rating === 'good').length;
  }, [deck, masteryData]);

  return (
    <div className="flashcards-experience-container">
      {/* Editorial Header */}
      <header className="fc-hero-header">
        <div className="fc-header-top-tag">
          <span className="fc-kicker">SPACED RECALL ENGINE</span>
          <span className="fc-retention-rate">
            {masteredCount}/{deck.length} Retained ({deck.length ? Math.round((masteredCount / deck.length) * 100) : 0}%)
          </span>
        </div>
        <h1 className="fc-main-title">Clinical Recall Deck</h1>
        <p className="fc-sub-instructions">
          Tap card to flip • Swipe left/right to navigate
        </p>

        {/* Filter Pills with Horizontal Scroll */}
        <div className="fc-filter-container">
          <div className="fc-filter-track">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`fc-category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
              >
                {cat === 'all' ? 'All Specialties' : cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {currentCard ? (
        <div className="fc-stage-wrapper">
          <div
            className={`fc-flip-canvas ${isFlipped ? 'flipped' : ''}`}
            onClick={toggleFlip}
            role="button"
            tabIndex={0}
            onTouchStart={(e) => { touchStartX.current = e.targetTouches[0].clientX; }}
            onTouchMove={(e) => { touchEndX.current = e.targetTouches[0].clientX; }}
            onTouchEnd={() => {
              const diff = touchStartX.current - touchEndX.current;
              if (diff > 50) advanceCard();
              if (diff < -50) handlePrev();
              touchStartX.current = 0;
              touchEndX.current = 0;
            }}
          >
            <div className="fc-card-body">
              {/* FRONT: Clinical Prompt */}
              <div className="fc-card-face fc-front">
                <div className="fc-meta-bar">
                  <span className="fc-badge-specialty">
                    {currentCard.category || 'Clinical Practice'}
                  </span>
                  <div className="fc-meta-right">
                    {currentCardStats && (
                      <span className={`fc-status-tag ${currentCardStats.rating}`}>
                        {currentCardStats.rating.toUpperCase()}
                      </span>
                    )}
                    <span className="fc-counter-pill">
                      #{currentIndex + 1} <span className="dim">/ {deck.length}</span>
                    </span>
                  </div>
                </div>

                <div className="fc-stem-body">
                  <p className="fc-stem-prose">{currentCard.question}</p>
                </div>

                <div className="fc-footer-hint">
                  <span className="hint-pill">
                    <span className="hint-icon">↻</span> Tap to Reveal Key &amp; Rationale
                  </span>
                </div>
              </div>

              {/* BACK: Verified Key & Mechanism */}
              <div className="fc-card-face fc-back">
                <div className="fc-meta-bar">
                  <span className="fc-badge-specialty gold">Clinical Answer Key</span>
                  <span className="fc-counter-pill">
                    #{currentIndex + 1} <span className="dim">/ {deck.length}</span>
                  </span>
                </div>

                <div className="fc-answer-container">
                  <span className="fc-answer-label">PRIMARY INTERVENTION / FINDING</span>
                  <h3 className="fc-answer-heading">{currentCard.correctAnswer}</h3>
                  <div className="fc-rationale-wrapper">
                    <p className="fc-rationale-prose">{currentCard.rationale}</p>
                  </div>
                </div>

                <div className="fc-footer-hint">
                  <span className="hint-pill">
                    <span className="hint-icon">↻</span> Tap to view question prompt
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC ACTION DOCK */}
          {!isFlipped ? (
            <div className="fc-action-dock">
              <button
                type="button"
                className="fc-dock-btn secondary"
                onClick={handlePrev}
              >
                ← Previous
              </button>

              <button
                type="button"
                className="fc-dock-btn flip"
                onClick={toggleFlip}
              >
                Flip for Key
              </button>

              <button
                type="button"
                className="fc-dock-btn primary"
                onClick={advanceCard}
              >
                Next Card →
              </button>
            </div>
          ) : (
            <div className="fc-rating-dock">
              <span className="fc-rating-heading">RATE RECALL CONFIDENCE:</span>
              <div className="fc-rating-button-grid">
                <button
                  type="button"
                  className="fc-rate-btn again"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRateCard('again');
                  }}
                >
                  <span className="rate-num">1</span>
                  <span className="rate-label">Again</span>
                  <span className="rate-interval">&lt; 1 min</span>
                </button>

                <button
                  type="button"
                  className="fc-rate-btn hard"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRateCard('hard');
                  }}
                >
                  <span className="rate-num">2</span>
                  <span className="rate-label">Hard</span>
                  <span className="rate-interval">12 hrs</span>
                </button>

                <button
                  type="button"
                  className="fc-rate-btn good"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRateCard('good');
                  }}
                >
                  <span className="rate-num">3</span>
                  <span className="rate-label">Good</span>
                  <span className="rate-interval">1 day</span>
                </button>

                <button
                  type="button"
                  className="fc-rate-btn easy"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRateCard('easy');
                  }}
                >
                  <span className="rate-num">4</span>
                  <span className="rate-label">Easy</span>
                  <span className="rate-interval">4 days</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="fc-empty-state">
          <p>No flashcards found for this module selection.</p>
        </div>
      )}
    </div>
  );
}