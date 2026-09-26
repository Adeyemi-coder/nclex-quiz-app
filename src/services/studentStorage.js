// src/services/studentStorage.js

const getActiveUserKey = (prefix) => {
  try {
    const active = JSON.parse(localStorage.getItem('nclex_active_session') || '{}');
    const userId = active.id || 'default_user';
    return `${prefix}_${userId}`;
  } catch {
    return `${prefix}_default_user`;
  }
};

export const SUBJECT_METRICS_MAP = {
  'Anatomy & Physiology': { slug: 'anatomyPhysiology', total: 150 },
  'Primary Health Care (PHC)': { slug: 'primaryHealthCare', total: 150 },
  'Nursing Ethics & Jurisprudence': { slug: 'nursingEthics', total: 150 },
  'Emergency & Disaster Nursing': { slug: 'emergency', total: 150 },
  'Fundamentals of Nursing (FON)': { slug: 'fundamentals', total: 150 },
  'Politics & Policy in Nursing': { slug: 'politicsInNursing', total: 150 },
  'Pharmacology': { slug: 'fundamentals', total: 150 },
  'Medical-Surgical Nursing': { slug: 'fundamentals', total: 150 },
};

export const getStudentProfile = () => {
  const active = localStorage.getItem('nclex_active_session');
  if (active) {
    return JSON.parse(active);
  }
  return {
    name: 'Adeyemi Kehinde',
    email: 'adeyemi@clinicalmaster.com',
    indexNumber: 'NMCN/UITH/2026/0491',
    targetExam: 'NMCN RN Professional Exam',
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split('T')[0]
  };
};

export const updateStudentProfile = (updatedData) => {
  const current = getStudentProfile();
  const merged = { ...current, ...updatedData };
  localStorage.setItem('nclex_active_session', JSON.stringify(merged));
  return merged;
};

export const getExamHistory = () => {
  const key = getActiveUserKey('nclex_exam_history');
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const recordExamAttempt = ({
  subjectName,
  slug,
  score,
  totalQuestions,
  correctCount,
  timeSpentSeconds,
  mode = 'Timed Exam',
  missedQuestions = []
}) => {
  const key = getActiveUserKey('nclex_exam_history');
  const history = getExamHistory();
  const now = new Date();

  const record = {
    id: `EX-${Math.floor(1000 + Math.random() * 9000)}`,
    exam: `${subjectName} Assessment`,
    subject: subjectName,
    slug: slug || 'fundamentals',
    questions: totalQuestions,
    correctCount,
    score: Math.round(score),
    date: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    timestamp: now.toISOString(),
    status: score >= 75 ? 'Completed' : 'Needs Review',
    mode,
    timeSpentSeconds,
    missedQuestions,
  };

  const updatedHistory = [record, ...history];
  localStorage.setItem(key, JSON.stringify(updatedHistory));
  return record;
};

export const getDashboardMetrics = () => {
  const history = getExamHistory();
  const profile = getStudentProfile();

  if (history.length === 0) {
    return {
      profile,
      totalAnswered: 0,
      overallAccuracy: 0,
      examsCompleted: 0,
      averageScore: 0,
      streakDays: profile.streakDays || 1,
      subjectBreakdown: Object.keys(SUBJECT_METRICS_MAP).map((key) => ({
        name: key,
        accuracy: 0,
        attempted: 0,
        total: SUBJECT_METRICS_MAP[key].total,
        progress: 0,
      })),
      recentExams: [],
      recentActivity: [],
    };
  }

  const examsCompleted = history.length;
  const totalAnswered = history.reduce((acc, h) => acc + (h.questions || 0), 0);
  const sumCorrect = history.reduce(
    (acc, h) => acc + (h.correctCount || Math.round((h.score / 100) * h.questions)),
    0
  );
  const overallAccuracy = totalAnswered > 0 ? Math.round((sumCorrect / totalAnswered) * 100) : 0;
  const averageScore = Math.round(
    history.reduce((acc, h) => acc + h.score, 0) / examsCompleted
  );

  const subjectBreakdown = Object.keys(SUBJECT_METRICS_MAP).map((subjectName) => {
    const subjectExams = history.filter(
      (h) => h.subject.toLowerCase() === subjectName.toLowerCase()
    );
    const totalBank = SUBJECT_METRICS_MAP[subjectName].total;

    if (subjectExams.length === 0) {
      return {
        name: subjectName,
        accuracy: 0,
        attempted: 0,
        total: totalBank,
        progress: 0,
      };
    }

    const attempted = subjectExams.reduce((sum, e) => sum + e.questions, 0);
    const correct = subjectExams.reduce(
      (sum, e) => sum + (e.correctCount || Math.round((e.score / 100) * e.questions)),
      0
    );
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const progress = Math.min(100, Math.round((attempted / totalBank) * 100));

    return {
      name: subjectName,
      accuracy,
      attempted,
      total: totalBank,
      progress,
    };
  });

  const recentActivity = history.slice(0, 4).map((h) => ({
    title: `Completed ${h.exam}`,
    desc: `${h.score}% score on ${h.questions} items`,
    time: h.date,
    status: h.status,
  }));

  return {
    profile,
    totalAnswered,
    overallAccuracy,
    examsCompleted,
    averageScore,
    streakDays: profile.streakDays || 1,
    subjectBreakdown,
    recentExams: history.slice(0, 6),
    recentActivity,
  };
};

export const getPerformanceChartData = (timeframe = '7d') => {
  const daysToShow = timeframe === '7d' ? 7 : timeframe === '30d' ? 14 : 30;
  const history = getExamHistory();
  const result = [];

  for (let i = daysToShow - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const dayLabel = d.toLocaleDateString('en-US', { weekday: 'short' });

    const matchingExams = history.filter((h) => h.date === dateStr);
    if (matchingExams.length > 0) {
      const count = matchingExams.reduce((sum, e) => sum + e.questions, 0);
      const avgScore = Math.round(
        matchingExams.reduce((sum, e) => sum + e.score, 0) / matchingExams.length
      );
      result.push({ day: dayLabel, count, accuracy: avgScore });
    } else {
      result.push({ day: dayLabel, count: 0, accuracy: 0 });
    }
  }

  return result;
};