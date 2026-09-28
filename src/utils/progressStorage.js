// src/utils/progressStorage.js

const STORAGE_KEY = 'nclex_user_progress';

// Default schema for empty stats
const initialProgress = {
  totalAnswered: 0,
  totalCorrect: 0,
  streakDays: 1,
  lastStudyDate: null,
  totalTimeSpentSec: 0,
  history: [], // [{ id, date, category, score, total, timeSec }]
  byCategory: {
    // [categoryKey]: { answered: 0, correct: 0 }
  }
};

export const getStoredProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProgress;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read user progress', e);
    return initialProgress;
  }
};

/**
 * Call this function whenever a user completes a quiz/test session
 * @param {Object} session
 * @param {string} session.category - e.g. "Emergency & Disaster Triage", "Anatomy & Physiology"
 * @param {number} session.score - number of correct answers
 * @param {number} session.total - total questions in the session
 * @param {number} session.timeSpentSec - total seconds taken
 */
export const recordQuizSession = ({ category = 'General', score, total, timeSpentSec = 0 }) => {
  const current = getStoredProgress();
  const today = new Date().toISOString().split('T')[0];

  // Calculate Streak
  let streak = current.streakDays || 1;
  if (current.lastStudyDate) {
    const lastDate = new Date(current.lastStudyDate);
    const diffDays = Math.round((new Date(today) - lastDate) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1;
    }
  }

  // Update category stats
  const catStats = current.byCategory[category] || { answered: 0, correct: 0 };
  const updatedCatStats = {
    answered: catStats.answered + total,
    correct: catStats.correct + score,
  };

  const newSessionRecord = {
    id: `sess_${Date.now()}`,
    date: new Date().toISOString(),
    category,
    score,
    total,
    timeSpentSec,
    accuracy: Math.round((score / total) * 100) || 0
  };

  const updatedProgress = {
    totalAnswered: (current.totalAnswered || 0) + total,
    totalCorrect: (current.totalCorrect || 0) + score,
    streakDays: streak,
    lastStudyDate: today,
    totalTimeSpentSec: (current.totalTimeSpentSec || 0) + timeSpentSec,
    history: [newSessionRecord, ...(current.history || [])],
    byCategory: {
      ...current.byCategory,
      [category]: updatedCatStats
    }
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProgress));
  return updatedProgress;
};