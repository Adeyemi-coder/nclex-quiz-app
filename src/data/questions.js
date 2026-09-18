import { pharmacologyQuestions } from './courses/pharmacology.js';
import { cardiovascularQuestions } from './courses/cardiovascular.js';
import { respiratoryQuestions } from './courses/respiratory.js';
import { emergencyQuestions } from './courses/emergency.js';
import { maternalQuestions } from './courses/maternal.js';
import { pediatricsQuestions } from './courses/pediatrics.js';
import { mentalHealthQuestions } from './courses/mentalHealth.js';
import { renalQuestions } from './courses/renal.js';
import { fundamentalsQuestions } from './courses/fundamentals.js';
import { leadershipQuestions } from './courses/leadership.js';
import { infectionControlQuestions } from './courses/infectionControl.js';

// Master unified dataset: 11 courses x 50 questions = 550 questions
export const questions = [
  ...pharmacologyQuestions,
  ...cardiovascularQuestions,
  ...respiratoryQuestions,
  ...emergencyQuestions,
  ...maternalQuestions,
  ...pediatricsQuestions,
  ...mentalHealthQuestions,
  ...renalQuestions,
  ...fundamentalsQuestions,
  ...leadershipQuestions,
  ...infectionControlQuestions,
];