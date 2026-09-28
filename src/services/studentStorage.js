// src/services/studentStorage.js

const DEFAULT_PROFILE = {
  name: 'Candidate',
  indexNumber: 'NMCN/2026/RN-PRO',
  targetExam: 'General Nursing Licensure (NMCN)',
  targetDate: 'November 2026',
};

// Course catalog to calculate real bank totals & subject matrix
const SUBJECT_CATALOG = [
  { name: 'Anatomy & Physiology', slug: 'anatomyPhysiology', total: 60 },
  { name: 'Medical-Surgical Nursing', slug: 'medicalSurgicalNursing', total: 100 },
  { name: 'Maternal & Child Health', slug: 'maternalChildHealth', total: 75 },
  { name: 'Primary Health Care (PHC)', slug: 'primaryHealthCare', total: 80 },
  { name: 'Nursing Ethics & Jurisprudence', slug: 'nursingEthics', total: 50 },
  { name: 'Emergency & Disaster Triage', slug: 'emergencyDisaster', total: 45 },
  { name: 'Pharmacology in Nursing', slug: 'pharmacology', total: 70 },
  { name: 'Fundamentals of Nursing', slug: 'fundamentalsOfNursing', total: 85 },
];

export function getStudentProfile() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const savedProfile = JSON.parse(localStorage.getItem('studentProfile') || '{}');
    return {
      ...DEFAULT_PROFILE,
      ...savedProfile,
      name: user?.name || savedProfile?.name || DEFAULT_PROFILE.name,
    };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function updateStudentProfile(updates) {
  try {
    const current = getStudentProfile();
    const updated = { ...current, ...updates };
    localStorage.setItem('studentProfile', JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to update student profile', e);
    return DEFAULT_PROFILE;
  }
}

export function getDashboardMetrics() {
  const profile = getStudentProfile();

  // Read actual exam history written by Quiz.jsx
  let history = [];
  try {
    history = JSON.parse(
      localStorage.getItem('studyHistory') || 
      localStorage.getItem('quizResults') || 
      localStorage.getItem('nclex_quiz_history') || 
      '[]'
    );
    if (!Array.isArray(history)) history = [];
  } catch {
    history = [];
  }

  // Read aggregated user progress
  let progress = { totalAnswered: 0, totalCorrect: 0, byCategory: {} };
  try {
    const rawProg = localStorage.getItem('nclex_user_progress');
    if (rawProg) progress = JSON.parse(rawProg);
  } catch {
    // fallback
  }

  // Derive verified metrics directly from history
  const examsCompleted = history.length;
  
  // Total answered questions across all taken sessions
  const totalAnswered = history.reduce((sum, h) => sum + (h.totalQuestions || h.total || 0), 0) 
    || progress.totalAnswered 
    || 0;

  const totalCorrect = history.reduce((sum, h) => sum + (h.correctCount ?? 0), 0) 
    || progress.totalCorrect 
    || 0;

  const overallAccuracy = totalAnswered > 0 
    ? Math.round((totalCorrect / totalAnswered) * 100) 
    : 0;

  const averageScore = examsCompleted > 0
    ? Math.round(history.reduce((sum, h) => sum + (h.score ?? 0), 0) / examsCompleted)
    : 0;

  // Calculate real streak (days where an exam was completed)
  const uniqueDates = [...new Set(history.map(h => (h.date || '').split('T')[0]).filter(Boolean))];
  const streakDays = uniqueDates.length;
  const lastActiveDate = uniqueDates.length > 0 ? uniqueDates[0] : null;

  // Build subject breakdown matrix dynamically from actual attempts
  const subjectBreakdown = SUBJECT_CATALOG.map((subject) => {
    // Find attempts matching this subject
    const subjectAttempts = history.filter((h) => {
      const matchTarget = `${h.subjectName || ''} ${h.category || ''} ${h.slug || ''}`.toLowerCase();
      const sName = subject.name.toLowerCase();
      const sSlug = subject.slug.toLowerCase();
      return matchTarget.includes(sSlug) || matchTarget.includes(sName.split(' ')[0]);
    });

    const attempted = subjectAttempts.reduce((sum, h) => sum + (h.totalQuestions || h.total || 0), 0);
    const correct = subjectAttempts.reduce((sum, h) => sum + (h.correctCount || 0), 0);
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const progressPercent = Math.min(100, Math.round((attempted / subject.total) * 100));

    return {
      name: subject.name,
      slug: subject.slug,
      total: subject.total,
      attempted,
      accuracy,
      progress: progressPercent,
    };
  });

  // Recent Exams Table format
  const recentExams = history.slice(0, 5).map((h, idx) => ({
    id: h.id || `EX-${idx + 1}`,
    subject: h.subjectName || h.category || 'Comprehensive Examination',
    slug: h.slug || 'medicalSurgicalNursing',
    questions: h.totalQuestions || h.total || 50,
    score: h.score ?? 0,
    date: h.date ? new Date(h.date).toLocaleDateString() : 'Today',
    status: (h.score ?? 0) >= 75 ? 'Passed' : 'Needs Practice',
  }));

  // Activity stream based on actual test records
  const recentActivity = history.slice(0, 4).map((h) => ({
    title: `Completed ${h.subjectName || h.category || 'Practice Drill'}`,
    desc: `Scored ${h.score ?? 0}% (${h.correctCount ?? 0}/${h.totalQuestions || h.total || 0} items) in ${h.mode || 'Simulation'}`,
    time: h.date ? new Date(h.date).toLocaleDateString() : 'Just now',
  }));

  return {
    profile: {
      ...profile,
      lastActiveDate,
    },
    totalAnswered,
    overallAccuracy,
    examsCompleted,
    streakDays,
    averageScore,
    subjectBreakdown,
    recentExams,
    recentActivity,
  };
}

export function getPerformanceChartData(timeframe = '7d') {
  let history = [];
  try {
    history = JSON.parse(
      localStorage.getItem('studyHistory') || 
      localStorage.getItem('quizResults') || 
      '[]'
    );
    if (!Array.isArray(history)) history = [];
  } catch {
    history = [];
  }

  const numDays = timeframe === '90d' ? 30 : timeframe === '30d' ? 14 : 7;
  const days = [];

  for (let i = numDays - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayLabel = d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric' });

    // Aggregate sessions that occurred on this specific date
    const daySessions = history.filter((h) => (h.date || '').startsWith(dateStr));
    const count = daySessions.reduce((sum, h) => sum + (h.totalQuestions || h.total || 0), 0);
    const correct = daySessions.reduce((sum, h) => sum + (h.correctCount || 0), 0);
    const accuracy = count > 0 ? Math.round((correct / count) * 100) : 0;

    days.push({
      day: dayLabel,
      date: dateStr,
      count,
      accuracy,
    });
  }

  return days;
}