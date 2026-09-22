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

  // SATA Demo Item placed INSIDE the array
  {
    id: 'sata-101',
    type: 'sata',
    category: 'Pharmacology',
    subCategory: 'High-Alert Medications',
    question: 'A nurse is preparing to administer intravenous furosemide to a client in acute congestive heart failure. Which clinical assessments should the nurse complete prior to and during administration? Select all that apply.',
    options: [
      'Assess serum potassium and electrolyte levels',
      'Verify baseline blood pressure and fluid balance',
      'Administer over a rapid 5-second intravenous push',
      'Monitor urine output via strict intake and output tracking',
      'Instruct the client to remain flat in bed for 4 hours'
    ],
    correctAnswer: [0, 1, 3], // A, B, and D are correct
    rationale: 'Furosemide is a potent loop diuretic that causes rapid potassium wasting and diuresis. The nurse must assess serum potassium (hypokalemia risk), baseline BP (hypotension risk), and urine output. IV push furosemide must be administered slowly (no faster than 20 mg/min or 4 mg/min for high doses) to prevent permanent ototoxicity. Patients should not remain flat, as upright positioning optimizes respiratory excursion.'
  }
];