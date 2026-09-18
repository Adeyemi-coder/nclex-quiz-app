import { useState, useEffect } from 'react';
import { storage } from '../utils/storage.js';
import { calculateStreaks, aggregateCategories } from '../utils/stats.js';

const INITIAL_STATE = {
  version: 1,
  history: [],          // [{ id, date, mode, category, score, total, duration, questions, userAnswers }]
  bookmarks: [],        // [questionId]
  missedQuestions: {},  // { [questionId]: { count, lastMissed, question } }
  overall: {
    totalAnswered: 0,
    totalCorrect: 0
  }
};

export function useProgress() {
  const [state, setState] = useState(() => {
    const saved = storage.get();
    return saved || INITIAL_STATE;
  });

  useEffect(() => {
    storage.set(state);
  }, [state]);

  function recordQuizAttempt({ mode, category, questions, userAnswers, durationSeconds }) {
    let correctCount = 0;
    const newMissed = { ...state.missedQuestions };

    questions.forEach((q, idx) => {
      const isCorrect = userAnswers[idx] === q.correctAnswer;
      if (isCorrect) {
        correctCount++;
        // If answered correctly now, decrease missed count
        if (newMissed[q.id]) {
          delete newMissed[q.id];
        }
      } else if (userAnswers[idx] !== null) {
        newMissed[q.id] = {
          count: (newMissed[q.id]?.count || 0) + 1,
          lastMissed: new Date().toISOString(),
          question: q
        };
      }
    });

    const scorePercent = Math.round((correctCount / questions.length) * 100);
    const newAttempt = {
      id: 'attempt_' + Date.now(),
      date: new Date().toISOString(),
      mode: mode || 'Standard',
      category: category || 'Comprehensive',
      score: scorePercent,
      correct: correctCount,
      total: questions.length,
      duration: durationSeconds || 0,
      questions,
      userAnswers
    };

    setState(prev => ({
      ...prev,
      history: [newAttempt, ...prev.history].slice(0, 50), // Store up to 50 attempts
      missedQuestions: newMissed,
      overall: {
        totalAnswered: prev.overall.totalAnswered + questions.length,
        totalCorrect: prev.overall.totalCorrect + correctCount
      }
    }));

    return newAttempt;
  }

  function toggleBookmark(questionId) {
    setState(prev => {
      const exists = prev.bookmarks.includes(questionId);
      return {
        ...prev,
        bookmarks: exists
          ? prev.bookmarks.filter(id => id !== questionId)
          : [...prev.bookmarks, questionId]
      };
    });
  }

  function isBookmarked(questionId) {
    return state.bookmarks.includes(questionId);
  }

  function resetAllProgress() {
    storage.clear();
    setState(INITIAL_STATE);
  }

  // Derived metrics
  const overallAccuracy = state.overall.totalAnswered > 0
    ? Math.round((state.overall.totalCorrect / state.overall.totalAnswered) * 100)
    : 0;

  const dates = state.history.map(h => h.date);
  const { currentStreak, longestStreak } = calculateStreaks(dates);
  const categoryStats = aggregateCategories(state.history);
  const missedCount = Object.keys(state.missedQuestions).length;
  const bookmarkCount = state.bookmarks.length;

  return {
    history: state.history,
    bookmarks: state.bookmarks,
    missedQuestions: state.missedQuestions,
    overallAccuracy,
    totalAnswered: state.overall.totalAnswered,
    currentStreak,
    longestStreak,
    categoryStats,
    missedCount,
    bookmarkCount,
    recordQuizAttempt,
    toggleBookmark,
    isBookmarked,
    resetAllProgress
  };
}