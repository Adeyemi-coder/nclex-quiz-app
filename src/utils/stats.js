/**
 * Computes consecutive calendar day streak based on ISO date strings
 * @param {string[]} dates - Array of ISO date strings
 * @returns {{ currentStreak: number, longestStreak: number }}
 */
export function calculateStreaks(dates) {
  if (!dates || dates.length === 0) return { currentStreak: 0, longestStreak: 0 };

  const uniqueDays = Array.from(
    new Set(dates.map(d => new Date(d).toISOString().split('T')[0]))
  ).sort().reverse();

  if (uniqueDays.length === 0) return { currentStreak: 0, longestStreak: 0 };

  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  const mostRecent = uniqueDays[0];
  const isActive = mostRecent === today || mostRecent === yesterday;

  for (let i = 0; i < uniqueDays.length; i++) {
    if (i === 0) {
      tempStreak = 1;
    } else {
      const prevDate = new Date(uniqueDays[i - 1]);
      const currDate = new Date(uniqueDays[i]);
      const diffDays = Math.round((prevDate - currDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        tempStreak++;
      } else {
        if (tempStreak > longestStreak) longestStreak = tempStreak;
        tempStreak = 1;
      }
    }
  }

  if (tempStreak > longestStreak) longestStreak = tempStreak;
  currentStreak = isActive ? tempStreak : 0;

  return { currentStreak, longestStreak };
}

/**
 * Aggregates answers by category and calculates accuracy percentages
 */
export function aggregateCategories(history) {
  const categories = {};

  history.forEach(quiz => {
    quiz.questions.forEach((q, idx) => {
      const cat = q.category || 'General';
      if (!categories[cat]) {
        categories[cat] = { total: 0, correct: 0 };
      }
      categories[cat].total += 1;
      if (quiz.userAnswers[idx] === q.correctAnswer) {
        categories[cat].correct += 1;
      }
    });
  });

  return Object.keys(categories)
    .map(name => {
      const item = categories[name];
      const percent = Math.round((item.correct / item.total) * 100);
      return {
        name,
        total: item.total,
        correct: item.correct,
        accuracy: percent
      };
    })
    .sort((a, b) => a.accuracy - b.accuracy);
}
