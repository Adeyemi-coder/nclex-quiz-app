import { questions as allQuestions } from '../data/questions.js';

/**
 * Analyzes local quiz history, identifies categories below the 65% benchmark,
 * and generates a targeted practice bank from underperforming topics.
 */
export function getWeakAreaQuestions(limit = 25) {
  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('nclex_quiz_history') || '[]');
  } catch (e) {
    console.error('Failed to parse quiz history:', e);
  }

  // 1. Calculate accuracy per category across past attempts
  const categoryStats = {};

  history.forEach((record) => {
    const cat = record.category || 'General';
    if (!categoryStats[cat]) {
      categoryStats[cat] = { correct: 0, total: 0 };
    }
    categoryStats[cat].correct += Number(record.score) || 0;
    categoryStats[cat].total += Number(record.total) || 0;
  });

  // 2. Identify weak categories (< 65% accuracy, minimum 5 items attempted)
  const weakCategories = Object.entries(categoryStats)
    .filter(([_, stats]) => {
      if (stats.total < 3) return false;
      const acc = (stats.correct / stats.total) * 100;
      return acc < 65;
    })
    .map(([cat]) => cat.toLowerCase());

  // 3. Fallback: If no history exists or no weak category detected,
  // target high-cognitive-load clinical specialties
  const targetCategories = weakCategories.length > 0 
    ? weakCategories 
    : ['pharmacology', 'emergency nursing', 'cardiovascular', 'maternal & newborn'];

  // 4. Filter master pool for target topics and shuffle
  const matchingQuestions = allQuestions.filter((q) => {
    const cat = (q.category || '').toLowerCase();
    return targetCategories.some((target) => cat.includes(target) || target.includes(cat));
  });

  const pool = matchingQuestions.length >= 10 ? matchingQuestions : allQuestions;
  const shuffled = [...pool].sort(() => 0.5 - Math.random());

  return {
    targetCategories: weakCategories.length > 0 ? weakCategories : ['High-Yield Remediation Topics'],
    questions: shuffled.slice(0, limit)
  };
}