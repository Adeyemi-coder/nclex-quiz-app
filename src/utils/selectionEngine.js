// src/utils/selectionEngine.js

/**
 * True Fisher-Yates (Knuth) In-Place Shuffle
 */
export function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffles options for a single question and updates the correctAnswer index
 */
export function shuffleQuestionOptions(question) {
  const rawOptions = question.options || [];
  if (!rawOptions.length) return question;

  const rawCorrect = question.correctAnswer;
  let correctIndices = [];

  if (Array.isArray(rawCorrect)) {
    correctIndices = rawCorrect;
  } else if (typeof rawCorrect === 'number') {
    correctIndices = [rawCorrect];
  } else if (typeof rawCorrect === 'string') {
    const upper = rawCorrect.trim().toUpperCase();
    if (upper.length === 1 && upper >= 'A' && upper <= 'Z') {
      correctIndices = [upper.charCodeAt(0) - 65];
    } else if (!isNaN(Number(upper))) {
      correctIndices = [Number(upper)];
    }
  }

  const mapped = rawOptions.map((text, idx) => ({
    text,
    isCorrect: correctIndices.includes(idx)
  }));

  const shuffledMapped = fisherYatesShuffle(mapped);

  const newCorrectIndices = shuffledMapped
    .map((item, idx) => (item.isCorrect ? idx : null))
    .filter((idx) => idx !== null);

  return {
    ...question,
    options: shuffledMapped.map((m) => m.text),
    correctAnswer: Array.isArray(rawCorrect) ? newCorrectIndices : (newCorrectIndices[0] ?? 0)
  };
}

/**
 * Core Algorithm: Selects N non-repetitive questions from a pool
 * using candidate history stored in LocalStorage.
 */
export function selectAdaptiveExamSet(courseId, fullPool, countToSelect = 50) {
  if (!fullPool || fullPool.length === 0) return [];
  if (fullPool.length <= countToSelect) {
    return fisherYatesShuffle(fullPool).map(shuffleQuestionOptions);
  }

  const STORAGE_KEY = `nmcn_history_${courseId}`;
  let seenIds = [];

  try {
    seenIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (e) {
    seenIds = [];
  }

  // Filter pool into unseen vs recently seen
  const unseenQuestions = fullPool.filter((q) => !seenIds.includes(q.id));
  let selectedPool = [];

  if (unseenQuestions.length >= countToSelect) {
    // If enough unseen questions exist, select from them
    selectedPool = fisherYatesShuffle(unseenQuestions).slice(0, countToSelect);
  } else {
    // Pool exhausted: use all remaining unseen questions and backfill from shuffled seen pool
    const needed = countToSelect - unseenQuestions.length;
    const seenQuestions = fullPool.filter((q) => seenIds.includes(q.id));
    const backfill = fisherYatesShuffle(seenQuestions).slice(0, needed);
    
    selectedPool = [...unseenQuestions, ...backfill];
    // Reset history tracking when pool cycles
    seenIds = [];
  }

  // Update history in LocalStorage
  const newSeenIds = [...new Set([...seenIds, ...selectedPool.map((q) => q.id)])];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSeenIds));
  } catch (e) {
    console.error('LocalStorage write failed:', e);
  }

  // Randomize question sequence and shuffle choices
  return fisherYatesShuffle(selectedPool).map(shuffleQuestionOptions);
}