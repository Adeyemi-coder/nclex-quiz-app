// src/data/courses/medicalSurgical.js

export const medicalSurgicalQuestions = [
  {
    id: "MSN-001",
    course: "Medical-Surgical Nursing",
    topic: "Cardiovascular Disorders",
    subtopic: "Acute Coronary Syndromes",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A 58-year-old male with acute anterior wall STEMI reports sudden dyspnea and cough productive of pink, frothy sputum. Physical examination reveals bilateral pulmonary crackles and a new pansystolic murmur at the apex. Blood pressure is 88/54 mmHg, HR is 128 bpm. What complication must the nurse prioritize for immediate surgical and medical escalation?",
    options: [
      "Ventricular septal rupture causing right heart failure",
      "Acute mitral valve regurgitation secondary to papillary muscle rupture",
      "Dressler syndrome with constrictive pericarditis",
      "Right ventricular infarction with volume depletion"
    ],
    correctAnswer: 1,
    rationale: "Acute mitral regurgitation secondary to papillary muscle rupture typically occurs 2 to 7 days post-infarction in anterior or inferior STEMIs. The sudden loss of mitral valve integrity floods the left atrium, causing catastrophic cardiogenic pulmonary edema (pink frothy sputum, bibasilar crackles, apical pansystolic murmur) and cardiogenic shock. Immediate cardiothoracic surgical consultation and arterial vasodilator/intra-aortic balloon pump (IABP) stabilization are critical.",
    optionRationales: {
      A: "Ventricular septal rupture presents with a loud, harsh holosystolic murmur best heard at the lower left sternal border with a palpable thrill, not predominantly an apical pansystolic murmur.",
      B: "Correct. Apical pansystolic murmur, sudden flash pulmonary edema, and refractory hypotension confirm acute mitral regurgitation from papillary muscle ischemia/rupture.",
      C: "Dressler syndrome is an autoimmune pericarditis that develops 2 to 6 weeks after infarction and presents with pleuritic chest pain and friction rub, not acute cardiogenic pulmonary edema.",
      D: "Right ventricular infarction presents with clear lung fields, elevated jugular venous pressure, and severe hypotension, not pulmonary crackles and pink frothy sputum."
    },
    clinicalPearl: "Sudden pulmonary edema accompanied by a new apical systolic murmur following myocardial infarction is acute mitral regurgitation until proven otherwise. Avoid beta-blockers in cardiogenic shock.",
    tags: ["cardiovascular", "prioritization", "complications", "emergency"]
  },
  {
    id: "MSN-002",
    course: "Medical-Surgical Nursing",
    topic: "Endocrine Disorders",
    subtopic: "Diabetic Ketoacidosis (DKA)",
    difficulty: "Hard",
    type: "Prioritization",
    question: "A client with Type 1 Diabetes Mellitus is admitted with DKA. Blood glucose is 480 mg/dL (26.6 mmol/L), arterial blood pH is 7.15, HCO3- is 11 mEq/L, and serum potassium is 3.1 mEq/L. The medical intern writes an order for an immediate IV bolus of Regular Insulin 0.1 units/kg followed by continuous infusion. What action must the nurse execute first?",
    options: [
      "Initiate the regular insulin infusion as ordered to reverse profound ketoacidosis",
      "Hold the insulin infusion, notify the provider, and initiate IV potassium replacement",
      "Administer 50 mL of 8.4% Sodium Bicarbonate IV over 30 minutes",
      "Check the patient's urine output for ketones prior to questioning the prescription"
    ],
    correctAnswer: 1,
    rationale: "Insulin drives glucose and potassium intracellularly. Administering insulin when serum potassium is < 3.3 mEq/L can cause fatal hypokalemia, culminating in ventricular dysrhythmias, respiratory muscle arrest, and cardiac standstill. Protocol demands holding insulin, infusing isotonic crystalloids, and replenishing potassium to at least 3.3-3.5 mEq/L before starting insulin therapy.",
    optionRationales: {
      A: "Starting insulin immediately in the presence of hypokalemia (3.1 mEq/L) can trigger fatal cardiac arrest due to an acute intracellular potassium shift.",
      B: "Correct. Clinical guidelines mandate withholding insulin therapy until serum potassium is replenished to > 3.3 mEq/L to prevent lethal dysrhythmias.",
      C: "Sodium bicarbonate is not indicated unless arterial pH drops below 6.9; premature administration exacerbates hypokalemia and produces paradoxical cerebral acidosis.",
      D: "Verifying urine ketones delays urgent intervention; the serum blood gas and potassium level already provide definitive data requiring action."
    },
    clinicalPearl: "In DKA management, never start insulin if potassium is under 3.3 mEq/L. Potassium always takes precedence over hyperglycemia.",
    tags: ["endocrine", "pharmacology-safety", "critical-care", "electrolytes"]
  },
  {
    id: "MSN-003",
    course: "Medical-Surgical Nursing",
    topic: "Respiratory Disorders",
    subtopic: "Thoracic Trauma & Chest Drains",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "A client who sustained blunt thoracic trauma has a closed water-seal chest tube drainage system to the left pleural cavity. During assessment, the nurse notes vigorous, continuous bubbling in the water-seal chamber. The client's trachea is midline and breath sounds are present bilaterally. Which intervention should the nurse perform first?",
    options: [
      "Clamp the chest tube close to the insertion site using padded hemostats to isolate an air leak",
      "Immediately strip the drainage tubing from the patient downward to evacuate blood clots",
      "Increase suction pressure on the regulator from -20 cm H2O to -40 cm H2O",
      "Submerge the distal end of the chest tube in a bottle of sterile water"
    ],
    correctAnswer: 0,
    rationale: "Continuous bubbling in the water-seal chamber indicates an active air leak. Momentarily clamping the tube near the insertion site with padded hemostats helps identify the location: if bubbling stops, the air leak originates within the patient's thorax or insertion site; if bubbling persists, the leak is located along the tubing connections or within the collection unit itself.",
    optionRationales: {
      A: "Correct. Cross-clamping briefly near the thoracic exit site isolates whether the leak is patient-derived (bronchopleural fistula/tear) or system-derived (loose connection).",
      B: "Tubing stripping creates excessive intrathoracic negative pressure up to -400 cm H2O, risking pleural tissue invagination and hemorrhage.",
      C: "Increasing suction pressure does not address the source of an air leak and can worsen air entrainment.",
      D: "Submerging in sterile water is the emergency procedure used when the collection unit breaks or disconnects from the main catheter."
    },
    clinicalPearl: "Intermittent bubbling in the water-seal chamber occurs during expiration or coughing; continuous bubbling indicates a leak in the system or patient.",
    tags: ["respiratory", "procedures", "safety", "assessment"]
  },
  {
    id: "MSN-004",
    course: "Medical-Surgical Nursing",
    topic: "Neurological Disorders",
    subtopic: "Increased Intracranial Pressure (ICP)",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A 32-year-old female post-craniotomy for epidural hematoma is being monitored in the neuro-ICU. Her ICP monitor displays a sustained reading of 24 mmHg (normal: 5-15 mmHg). Her BP is 170/60 mmHg, HR is 48 bpm, and respiratory pattern is irregular. Which pathophysiological phenomenon does this triad reflect, and what is the primary risk?",
    options: [
      "Autonomic dysreflexia; risk of hypertensive encephalopathy",
      "Cushing's triad; imminent brainstem herniation through the foramen magnum",
      "Spinal shock; acute loss of sympathetic vasomotor tone",
      "Kernig's and Brudzinski's sign; bacterial meningitis exacerbation"
    ],
    correctAnswer: 1,
    rationale: "Cushing's Triad (systolic hypertension with widening pulse pressure, bradycardia, and irregular respirations) is a late sign of critical intracranial hypertension. It indicates ischemia of the brainstem vasomotor centers and represents imminent transtentorial or tonsillar herniation through the foramen magnum, requiring immediate osmolar therapy and neurosurgical decompression.",
    optionRationales: {
      A: "Autonomic dysreflexia occurs with spinal cord injuries at T6 or above and involves diaphoresis, severe headache, and hypertension, not post-craniotomy herniation signs.",
      B: "Correct. Systolic hypertension with widened pulse pressure, profound bradycardia, and Cheyne-Stokes respirations represent Cushing's Triad, signaling imminent fatal herniation.",
      C: "Spinal shock causes flaccid paralysis, loss of reflexes, hypotension, and bradycardia, not severe intracranial hypertension.",
      D: "Meningeal signs evaluate nuchal rigidity and meningeal irritation, not brainstem compression dynamics."
    },
    clinicalPearl: "Cushing's Triad is the physiological opposite of hypovolemic shock (which presents with hypotension, tachycardia, and tachypnea). It is a late, emergency sign of ICP.",
    tags: ["neurological", "critical-care", "pathophysiology", "monitoring"]
  },
  {
    id: "MSN-005",
    course: "Medical-Surgical Nursing",
    topic: "Renal Disorders",
    subtopic: "Acute Kidney Injury & Dialysis",
    difficulty: "Hard",
    type: "Prioritization",
    question: "A client with acute oliguric kidney injury has a serum creatinine of 6.2 mg/dL, BUN 84 mg/dL, and serum potassium 6.8 mEq/L. The 12-lead ECG reveals tall, peaked T-waves and widening of the QRS complex. Which medication should the nurse prepare to administer first?",
    options: [
      "Sodium Polystyrene Sulfonate 30 g orally in 20% sorbitol",
      "Calcium Gluconate 10% 10 mL IV over 3 to 5 minutes",
      "Regular Insulin 10 units IV with 50 mL of 50% Dextrose",
      "Furosemide 80 mg IV push over 4 minutes"
    ],
    correctAnswer: 1,
    rationale: "While insulin/dextrose and sodium polystyrene sulfonate reduce serum potassium, Calcium Gluconate must be given first when ECG changes (peaked T waves, widened QRS) are present. Calcium antagonizes the cardiotoxic effects of hyperkalemia by stabilizing the myocardial cell membrane and restoring normal threshold potential, preventing lethal ventricular fibrillation.",
    optionRationales: {
      A: "Sodium polystyrene sulfonate takes 1 to 2 hours to begin removing potassium via the gastrointestinal tract and does not provide immediate myocardial protection.",
      B: "Correct. Calcium gluconate acts within 1 to 3 minutes to stabilize cardiac membranes against hyperkalemic dysrhythmias.",
      C: "Regular insulin with dextrose shifts potassium into cells, but does not provide immediate stabilization to cardiac membranes.",
      D: "Loop diuretics have minimal efficacy in oliguric renal failure and do not provide immediate membrane stabilization."
    },
    clinicalPearl: "Calcium saves the heart; insulin shifts the potassium; kayexalate/dialysis clears it from the body.",
    tags: ["renal", "pharmacology", "emergency", "cardiac"]
  }
];