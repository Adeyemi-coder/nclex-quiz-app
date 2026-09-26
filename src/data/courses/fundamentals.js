// src/data/courses/fundamentals.js
// NMCN Fundamentals of Nursing (FON) - Part 1: Items 1 to 50

export const fundamentalsQuestions = [
  {
    id: "FON-001",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Process & Nursing Assessment",
    subtopic: "Types of Assessment Data",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During an initial admission assessment, the patient states, 'I feel dizzy and nauseous whenever I sit up.' How should the nurse document and categorize this finding?",
    options: [
      "Subjective data (symptoms reported by the patient)",
      "Objective data (signs directly observed or measured)",
      "Diagnostic inference",
      "Secondary historical hearsay"
    ],
    correctAnswer: 0,
    rationale: "Subjective data (symptoms) are sensations, feelings, values, beliefs, and perceptions that can be described or verified only by the patient. Dizziness and nausea are internal patient experiences that cannot be directly measured by an observer.",
    optionRationales: {
      A: "Correct. Sensations stated directly by the client represent primary subjective data.",
      B: "Objective data are measurable signs detected by an observer using senses or diagnostic tools (e.g., blood pressure, emesis volume).",
      C: "Diagnostic inference is the nurse's clinical interpretation of collected data.",
      D: "Secondary data come from family members, records, or other healthcare workers, not directly from the conscious patient."
    },
    clinicalPearl: "Subjective = what the patient Says; Objective = what the nurse Observes or measures.",
    tags: ["nursing-process", "assessment", "subjective-data", "documentation"]
  },
  {
    id: "FON-002",
    course: "Fundamentals of Nursing (FON)",
    topic: "Vital Signs & Clinical Monitoring",
    subtopic: "Blood Pressure Measurement Artifacts",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When measuring an adult patient's blood pressure with a manual sphygmomanometer, what measurement error will occur if the pneumatic cuff bladder is too narrow for the circumference of the upper arm?",
    options: [
      "Falsely high blood pressure reading",
      "Falsely low blood pressure reading",
      "A falsely widened pulse pressure",
      "Complete absence of Korotkoff sounds"
    ],
    correctAnswer: 0,
    rationale: "A blood pressure cuff bladder that is too narrow or applied too loosely requires excessive inflation pressure to compress the underlying brachial artery, resulting in a falsely elevated (high) reading. Conversely, a cuff that is too wide results in a falsely low reading.",
    optionRationales: {
      A: "Correct. A cuff that is too small or narrow produces an artifactually high blood pressure reading.",
      B: "A cuff that is too wide or large produces a falsely low reading.",
      C: "Narrow cuffs do not selectively widen pulse pressure; they artifactually shift both systolic and diastolic values upward.",
      D: "Korotkoff sounds will still be auscultated, but at falsely elevated pressure levels on the manometer."
    },
    clinicalPearl: "The width of the BP cuff bladder should encircle 40% of the upper arm circumference, and length should cover 80% to 100% of the arm circumference.",
    tags: ["vital-signs", "blood-pressure", "sphygmomanometer", "measurement-errors"]
  },
  {
    id: "FON-003",
    course: "Fundamentals of Nursing (FON)",
    topic: "Infection Prevention & Control",
    subtopic: "Hand Hygiene Protocols",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "According to standard hospital infection control protocols, when is handwashing with soap and running water strictly mandatory instead of using an alcohol-based hand rub?",
    options: [
      "When hands are visibly soiled with blood or body fluids, or after caring for patients with spore-forming organisms like Clostridioides difficile",
      "Immediately after documenting in electronic medical records",
      "Before palpating an intact radial pulse on a non-infectious client",
      "Between moving from the patient's clean forehead to their intact upper shoulder"
    ],
    correctAnswer: 0,
    rationale: "Alcohol-based hand rubs are effective for routine decontamination, but they do not eliminate physical dirt, organic matter, or bacterial endospores (such as C. difficile or Bacillus anthracis). Mechanical friction with running water and soap is required to physically rinse away spores and visible soiling.",
    optionRationales: {
      A: "Correct. Soap and water are mandatory whenever hands are visibly soiled or exposed to spore-forming pathogens.",
      B: "Alcohol-based hand rub is appropriate after charting if hands are clean.",
      C: "Alcohol-based rubs are standard before non-soiling physical assessments.",
      D: "Moving between clean body sites on the same patient does not require full soap-and-water washing unless hands become soiled."
    },
    clinicalPearl: "Alcohol does not kill C. diff spores. Wash with soap, water, and friction to mechanically wash them down the drain.",
    tags: ["infection-control", "hand-hygiene", "spores", "standard-precautions"]
  },
  {
    id: "FON-004",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Positioning & Mobility",
    subtopic: "Surgical & Examination Positions",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A patient with severe dyspnea and orthopnea is sitting upright on the side of the bed, leaning forward over a pillow placed on an overbed table. Which clinical position is this?",
    options: [
      "Orthopneic (Tripod) position",
      "Sims' position",
      "Trendelenburg position",
      "Lithotomy position"
    ],
    correctAnswer: 0,
    rationale: "The orthopneic (tripod) position involves sitting upright or leaning forward across a bedside table. This expands the thoracic cage, allows downward gravitational pull on the diaphragm, and enables accessory muscles (pectoralis major and minor) to assist ventilation.",
    optionRationales: {
      A: "Correct. Leaning forward over an overbed table defines the orthopneic position, common in acute respiratory distress.",
      B: "Sims' position is semi-prone, used for rectal examinations and enemas.",
      C: "Trendelenburg involves elevating the foot of the bed higher than the head.",
      D: "Lithotomy involves lying supine with thighs flexed and feet supported in stirrups, used for pelvic exams."
    },
    clinicalPearl: "The orthopneic position facilitates maximum lung expansion by relieving abdominal visceral pressure against the diaphragm.",
    tags: ["positioning", "orthopneic", "dyspnea", "respiratory-comfort"]
  },
  {
    id: "FON-005",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Process & Care Planning",
    subtopic: "Writing Diagnostic Statements (NANDA-I)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Which component of an actual (problem-focused) NANDA-I nursing diagnostic statement links the diagnostic label to the underlying etiology (cause)?",
    options: [
      "'Related to' (r/t) phrase",
      "'As evidenced by' (AEB) phrase",
      "'Secondary to' medical diagnosis phrase",
      "'At risk for' phrase"
    ],
    correctAnswer: 0,
    rationale: "A standard three-part problem-focused nursing diagnosis uses the PES format: Problem (NANDA label) + Etiology (related to) + Signs/Symptoms (as evidenced by). The 'related to' (r/t) phrase identifies the etiologic factor that the nurse can address through independent nursing interventions.",
    optionRationales: {
      A: "Correct. 'Related to' joins the diagnostic label to its contributing etiology.",
      B: "'As evidenced by' links the etiology to the defining characteristics (signs and symptoms).",
      C: "'Secondary to' is often appended to reference an underlying medical pathophysiology, but is not the core NANDA etiology connector.",
      D: "'At risk for' introduces a risk nursing diagnosis that has no current signs or symptoms."
    },
    clinicalPearl: "Formula: Problem (P) related to Etiology (E) as evidenced by Signs/Symptoms (S).",
    tags: ["nursing-process", "NANDA", "nursing-diagnosis", "care-plan"]
  },
  {
    id: "FON-006",
    course: "Fundamentals of Nursing (FON)",
    topic: "Medication Administration & Safety",
    subtopic: "The Rights of Drug Administration",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When preparing to administer an oral medication, when should the nurse complete the three mandatory checks of the medication label against the medication administration record (MAR)?",
    options: [
      "1) When taking the medication from the storage cart, 2) Before measuring or pouring the dose, and 3) Before returning the container or at the bedside before opening the unit dose",
      "1) At the start of the shift, 2) During handover, and 3) At the end of the shift",
      "Only after the patient has swallowed the medication",
      "Once at the bedside before pouring, without checking the storage bin"
    ],
    correctAnswer: 0,
    rationale: "The three medication label checks to prevent drug errors are: 1) Upon removing the container from the medication drawer or shelf; 2) Immediately before pouring, measuring, or preparing the medication; and 3) Before returning the container to storage or at the bedside immediately before administering.",
    optionRationales: {
      A: "Correct. Standard safety requires the 3 checks: upon retrieval, during preparation, and before administration.",
      B: "Shift handover checks do not fulfill the immediate safety checks required before administering each dose.",
      C: "Checking after administration cannot prevent a medication error.",
      D: "A single check skips the multi-step verification safeguards."
    },
    clinicalPearl: "Check the medication label 3 times: upon picking the container, during pouring/measuring, and before opening at the bedside.",
    tags: ["medication-safety", "pharmacology-foundation", "three-checks", "nursing-procedure"]
  },
  {
    id: "FON-007",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Elimination",
    subtopic: "Urinary Catheter Insertion",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During the insertion of an indwelling urethral (Foley) catheter in an adult female client, what immediate observation confirms that the catheter tip is inside the urinary bladder?",
    options: [
      "The flow of urine through the catheter lumen into the tubing",
      "A sudden release of resistance after inserting 2 inches",
      "The client reporting complete relief of abdominal pressure",
      "The catheter advancing to its full length up to the bifurcation"
    ],
    correctAnswer: 0,
    rationale: "Visual confirmation of urine drainage through the catheter lumen confirms that the tip and eyelet have entered the bladder. Once urine appears, the nurse advances the catheter an additional 1 to 2 inches (2.5–5 cm) to ensure the balloon is within the bladder cavity before inflating the retention balloon.",
    optionRationales: {
      A: "Correct. Urine flow confirms entry into the bladder lumen.",
      B: "Loss of resistance can occur in false passages; urine flow is the required objective marker.",
      C: "Relief of pressure is subjective and can take time as urine drains.",
      D: "Advancing to the bifurcation is standard technique for males to avoid urethral inflation, but urine appearance remains the primary placement confirmation."
    },
    clinicalPearl: "Always wait for urine return, then advance 1-2 inches further before inflating the retention balloon. Inflating inside the urethra causes severe trauma.",
    tags: ["catheterization", "urinary-elimination", "aseptic-technique", "procedures"]
  },
  {
    id: "FON-008",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Mobility",
    subtopic: "Pressure Injury Staging",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Assessment of an immobilized client's sacrum reveals an area of intact, non-blanchable erythema over a bony prominence. The skin is warm and painful to touch, with no visible dermis loss. Under NPUAP staging, which stage pressure injury is present?",
    options: [
      "Stage 1 Pressure Injury",
      "Stage 2 Pressure Injury",
      "Stage 3 Pressure Injury",
      "Unstageable Pressure Injury"
    ],
    correctAnswer: 0,
    rationale: "A Stage 1 pressure injury is characterized by intact skin with a localized area of non-blanchable erythema (does not turn white when pressed). Stage 2 involves partial-thickness skin loss with exposed dermis (blister/shallow ulcer); Stage 3 involves full-thickness skin loss with visible subcutaneous fat; Unstageable is obscured by slough or eschar.",
    optionRationales: {
      A: "Correct. Intact skin with localized non-blanchable erythema defines Stage 1.",
      B: "Stage 2 involves partial-thickness loss of dermis or an intact/ruptured serum-filled blister.",
      C: "Stage 3 involves full-thickness skin loss into subcutaneous fat.",
      D: "Unstageable ulcers have the wound bed covered by slough or eschar, obscuring true tissue depth."
    },
    clinicalPearl: "Non-blanchable redness over a bony prominence on intact skin is Stage 1. If the skin breaks or blisters, it becomes Stage 2.",
    tags: ["pressure-injury", "wound-care", "staging", "patient-safety"]
  },
  {
    id: "FON-009",
    course: "Fundamentals of Nursing (FON)",
    topic: "Vital Signs & Clinical Monitoring",
    subtopic: "Pulse Assessment & Deficit",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When evaluating an irregular cardiac rhythm, two nurses simultaneously count the apical pulse and the radial pulse for 60 seconds. The apical pulse is 96 beats/min and the radial pulse is 80 beats/min. What is the calculated pulse deficit, and what is its physiological significance?",
    options: [
      "Pulse deficit = 16 bpm; indicates that some ventricular contractions are too weak to transmit a palpable peripheral pulse wave",
      "Pulse deficit = 176 bpm; indicates life-threatening ventricular tachycardia",
      "Pulse deficit = 8 bpm; represents normal physiological variation",
      "Pulse deficit = 0 bpm; indicates accurate synchronized perfusion"
    ],
    correctAnswer: 0,
    rationale: "Pulse deficit is the difference between the apical pulse rate and the radial pulse rate (Apical - Radial = Deficit; 96 - 80 = 16 bpm). It occurs in dysrhythmias (e.g., atrial fibrillation) when cardiac contractions eject too little stroke volume to produce a palpable peripheral pulse wave at the wrist.",
    optionRationales: {
      A: "Correct. 96 minus 80 = 16 bpm deficit, reflecting unperfused ventricular contractions.",
      B: "Adding the two pulse rates is a calculation error.",
      C: "A difference of 16 bpm is pathological, not a normal variation.",
      D: "A deficit of zero occurs only when every apical contraction generates a palpable peripheral pulse."
    },
    clinicalPearl: "Apical pulse should be equal to or higher than the radial pulse. The radial pulse can never exceed the apical heart rate.",
    tags: ["vital-signs", "pulse-deficit", "apical-pulse", "cardiac-monitoring"]
  },
  {
    id: "FON-010",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Hygiene",
    subtopic: "Bed Making & Clean Linens",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When stripping and making an occupied hospital bed, what infection control precaution must the nurse observe when handling soiled bed linen?",
    options: [
      "Roll the soiled linen inward away from the uniform and place it directly into a laundry hamper without placing it on the floor",
      "Shake the soiled linen vigorously over the bed to aerate the mattress",
      "Hold the soiled sheets tightly against the nursing uniform for support",
      "Drop the soiled linen onto the floor until the bed frame is wiped clean"
    ],
    correctAnswer: 0,
    rationale: "Soiled linen should be rolled inward (dirty side enclosed inside) and held away from the nurse's uniform to prevent cross-contamination. Shaking linen spreads microbial aerosols into the air, and placing linen on the floor contaminates it with floor pathogens.",
    optionRationales: {
      A: "Correct. Roll dirty side inward, hold away from uniform, and place directly into the hamper.",
      B: "Shaking linen aerosolizes dust and microorganisms across the ward environment.",
      C: "Holding dirty linen against the uniform transfers pathogens to clothing and other patients.",
      D: "Placing linen on the floor violates hospital infection control standards."
    },
    clinicalPearl: "Never shake hospital linen; never hug linen against your uniform; never place linen on the ward floor.",
    tags: ["bed-making", "hygiene", "infection-prevention", "foundational-skills"]
  },
  {
    id: "FON-011",
    course: "Fundamentals of Nursing (FON)",
    topic: "Therapeutic Communication",
    subtopic: "Barriers vs Effective Techniques",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client scheduled for an exploratory laparotomy expresses fear: 'I am terrified that I might not wake up from the anesthesia.' Which response by the nurse demonstrates effective therapeutic communication?",
    options: [
      "'It sounds like you are feeling really anxious about the surgery. What worries you the most?'",
      "'Don't worry; our anesthesiologists are the best in the state and nobody dies here.'",
      "'You shouldn't feel that way; thousands of people have anesthesia every day.'",
      "'Why would you say something so negative right before surgery?'"
    ],
    correctAnswer: 0,
    rationale: "Therapeutic communication acknowledges the patient's feelings (validation/reflection) and uses open-ended questions to encourage further exploration of fears. Giving false reassurance ('don't worry'), minimizing feelings ('you shouldn't feel that way'), or asking confrontational 'why' questions are communication barriers.",
    optionRationales: {
      A: "Correct. Acknowledges anxiety and invites the patient to discuss concerns.",
      B: "False reassurance minimizes concerns and closes down communication.",
      C: "Dismisses the patient's valid emotional response.",
      D: "Asking 'why' puts the patient on the defensive and stops dialogue."
    },
    clinicalPearl: "Never offer false reassurance ('Everything will be fine'). Clarify and reflect feelings with open-ended prompts.",
    tags: ["therapeutic-communication", "open-ended", "active-listening", "empathy"]
  },
  {
    id: "FON-012",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Nutrition",
    subtopic: "Nasogastric (NG) Tube Insertion & Care",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "How should the nurse measure the correct insertion length of a nasogastric (NG) tube for an adult client before initiating insertion?",
    options: [
      "From the tip of the nose to the earlobe, and then down to the xiphoid process (NEX measurement)",
      "From the bridge of the nose straight down to the umbilicus",
      "From the corner of the mouth to the sternal notch",
      "From the earlobe to the right costal margin"
    ],
    correctAnswer: 0,
    rationale: "The standard anatomical measurement for gastric placement of an NG tube is the NEX method: measure from the tip of the Nose to the Earlobe, and then from the earlobe down to the Xiphoid process. This approximates the distance from the nares through the pharynx and esophagus into the stomach.",
    optionRationales: {
      A: "Correct. Nose to Earlobe to Xiphoid process (NEX) is the standard pre-insertion measurement.",
      B: "Measuring to the umbilicus results in excessive length, coiling the tube in the stomach.",
      C: "Measuring to the sternal notch leaves the tube in the mid-esophagus, risking aspiration.",
      D: "Does not account for nasopharyngeal distance."
    },
    clinicalPearl: "NEX: Nose to Earlobe to Xiphoid process. Mark the tube with tape before lubricating and inserting.",
    tags: ["NG-tube", "NEX-measurement", "nutrition", "enteral-care"]
  },
  {
    id: "FON-013",
    course: "Fundamentals of Nursing (FON)",
    topic: "Infection Prevention & Control",
    subtopic: "Transmission-Based Precautions",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client is admitted to the medical ward with active pulmonary tuberculosis. In addition to Standard Precautions, which transmission-based precautions and personal protective equipment (PPE) are required?",
    options: [
      "Airborne Precautions with an N95 particulate respirator mask and an airborne infection isolation room (negative pressure)",
      "Droplet Precautions with a standard surgical mask within 3 feet",
      "Contact Precautions with non-sterile gloves and gown only",
      "Protective (Neutropenic) isolation with a positive-pressure laminar airflow room"
    ],
    correctAnswer: 0,
    rationale: "Mycobacterium tuberculosis is transmitted via droplet nuclei (<5 microns) that remain suspended in the air. This requires Airborne Precautions: an Airborne Infection Isolation Room (AIIR) with negative pressure (at least 6–12 air exchanges per hour) and a fitted N95 respirator mask worn before entering the room.",
    optionRationales: {
      A: "Correct. TB requires Airborne Precautions, negative pressure ventilation, and an N95 respirator.",
      B: "Droplet precautions are used for larger droplets (>5 microns) like influenza or pertussis.",
      C: "Contact precautions target organisms spread by touch (e.g., MRSA, C. diff), not airborne TB.",
      D: "Neutropenic isolation protects immunocompromised clients from outside pathogens using positive pressure."
    },
    clinicalPearl: "Airborne = Measles, TB, Varicella (chickenpox). Remember 'MTV' on Airborne Precautions (N95 mask + negative pressure).",
    tags: ["airborne-precautions", "tuberculosis", "N95", "isolation"]
  },
  {
    id: "FON-014",
    course: "Fundamentals of Nursing (FON)",
    topic: "Vital Signs & Clinical Monitoring",
    subtopic: "Core vs Peripheral Temperature Sites",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which anatomical route provides the closest measurement to true central Core Body Temperature in a clinical ward setting?",
    options: [
      "Rectal / Tympanic measurement",
      "Axillary measurement",
      "Forehead skin adhesive strip",
      "Palpation of the radial artery"
    ],
    correctAnswer: 0,
    rationale: "Core temperature is the temperature of the deep tissues of the body (cranial, thoracic, and abdominal cavities). The rectal and tympanic routes reflect core temperature closely. The axillary route measures surface temperature and typically reads 0.5°C to 0.6°C (1°F) lower than oral readings and 1°C lower than core readings.",
    optionRationales: {
      A: "Correct. Rectal and tympanic readings approximate core temperature.",
      B: "Axillary temperature measures peripheral skin surface and is the least accurate core indicator.",
      C: "Forehead skin strips fluctuate with ambient temperature and diaphoresis.",
      D: "Palpating an artery checks pulse rate and rhythm, not body temperature."
    },
    clinicalPearl: "Axillary temperatures average 0.5°C lower than oral, and oral temperatures average 0.5°C lower than rectal.",
    tags: ["vital-signs", "temperature", "core-temperature", "thermometry"]
  },
  {
    id: "FON-015",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Sterile Field Principles",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "While preparing a sterile dressing tray for a surgical wound change, the nurse drops a sterile pair of forceps onto the outer 1-inch border of the sterile drape. What action must the nurse take?",
    options: [
      "Consider the forceps contaminated, discard them, and retrieve a new sterile instrument",
      "Pick up the forceps and use them because the border was covered by the drape",
      "Wipe the forceps with a 70% alcohol swab and continue the dressing",
      "Assume the entire dressing tray is contaminated and discard the entire pack"
    ],
    correctAnswer: 0,
    rationale: "According to surgical asepsis principles, the outer 1-inch (2.5 cm) border of a sterile field is considered unsterile/contaminated because it is adjacent to non-sterile boundaries. Any sterile item touching this 1-inch margin is contaminated and must be replaced.",
    optionRationales: {
      A: "Correct. The 1-inch margin is unsterile; items touching it are contaminated and must be replaced.",
      B: "Using items that contacted the non-sterile border breaks surgical asepsis.",
      C: "Wiping with alcohol does not re-sterilize a contaminated surgical instrument.",
      D: "Only the forceps are contaminated; the center of the field remains sterile if untouched."
    },
    clinicalPearl: "The 1-inch (2.5 cm) outer edge of a sterile field is considered non-sterile. Keep all sterile items in the center.",
    tags: ["aseptic-technique", "sterile-field", "wound-care", "surgical-asepsis"]
  },
  {
    id: "FON-016",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Positioning & Mobility",
    subtopic: "Preventing Contractures & Footdrop",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "An unconscious patient is maintained in a supine position. What supportive nursing device should be positioned against the soles of the patient's feet to prevent plantar flexion contracture (footdrop)?",
    options: [
      "Padded footboard or high-top sneakers",
      "Trochanter roll",
      "Abductor wedge pillow",
      "Sandbags placed along the lateral thighs"
    ],
    correctAnswer: 0,
    rationale: "Footdrop is a plantar flexion contracture of the ankle caused by prolonged relaxation and gravity. Using a padded footboard, foot boots, or high-top sneakers maintains the feet in functional dorsiflexion at a 90-degree angle to the lower leg.",
    optionRationales: {
      A: "Correct. A footboard or ankle-foot orthosis maintains the foot in a 90-degree dorsiflexion position.",
      B: "A trochanter roll prevents external rotation of the hips in supine patients.",
      C: "An abductor pillow maintains hip abduction following total hip arthroplasty.",
      D: "Sandbags along thighs immobilize fractures or reduce hip rotation."
    },
    clinicalPearl: "Footdrop results from peroneal nerve compression or prolonged unsupported plantar flexion. Use a footboard to keep feet at 90 degrees.",
    tags: ["mobility", "footdrop", "positioning", "contractures"]
  },
  {
    id: "FON-017",
    course: "Fundamentals of Nursing (FON)",
    topic: "Documentation & Reporting",
    subtopic: "Legal Principles of Nursing Documentation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The nurse makes an error while recording clinical notes in a paper-based patient chart. What is the legally accepted method for correcting this error?",
    options: [
      "Draw a single horizontal line through the incorrect entry, write 'mistaken entry' or 'error', and sign/initial with date and time",
      "Use correction fluid (Tipp-Ex) to paint over the error and write the new text on top",
      "Scratch out the error with heavy black ink until the underlying text is completely illegible",
      "Tear out the entire page from the chart and rewrite the entries from memory"
    ],
    correctAnswer: 0,
    rationale: "In legal and professional nursing standards, errors in paper records must never be erased, whited out, or blacked out. The correct procedure is drawing a single straight line through the text (leaving it legible), writing 'mistaken entry' or 'error', and signing/dating the correction.",
    optionRationales: {
      A: "Correct. Single line strike-through, labeled 'error' or 'mistaken entry', with signature and date.",
      B: "Correction fluid is illegal in medical records because it suggests tampering.",
      C: "Blacking out text obscures original records and implies concealment in court.",
      D: "Removing pages from a medical record constitutes intentional falsification and spoliation of evidence."
    },
    clinicalPearl: "Never white-out or scratch out an error. Draw a single line through it so it remains legible, label it 'mistaken entry', and sign it.",
    tags: ["documentation", "charting", "legal-nursing", "medical-records"]
  },
  {
    id: "FON-018",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Hygiene",
    subtopic: "Oral Care for the Unconscious Patient",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When providing mouth care to an unconscious, comatose patient, which nursing action is most critical to prevent pulmonary aspiration?",
    options: [
      "Position the patient in a lateral (side-lying) position with the head turned toward the mattress and keep suction ready",
      "Place the patient in a flat supine position and pour 50 mL of water into the oral cavity",
      "Keep the patient in High-Fowler position with the neck hyperextended",
      "Insert the nurse's bare fingers to force the patient's teeth open"
    ],
    correctAnswer: 0,
    rationale: "Unconscious patients lack cough and gag reflexes. Positioning them side-lying (lateral) with the head turned downward allows saliva, secretions, and cleaning solution to drain out of the mouth by gravity rather than entering the trachea, preventing aspiration pneumonia.",
    optionRationales: {
      A: "Correct. Lateral position with head tilted down uses gravity to drain fluids, preventing aspiration.",
      B: "A flat supine position with free water will cause immediate pulmonary aspiration.",
      C: "Hyperextending the neck opens the airway, increasing aspiration risk.",
      D: "Never place fingers between an unconscious patient's teeth; use a padded tongue blade."
    },
    clinicalPearl: "To prevent aspiration during mouth care on an unconscious patient: Lateral side-lying position, head tilted down, suction available.",
    tags: ["hygiene", "oral-care", "aspiration-prevention", "unconscious-patient"]
  },
  {
    id: "FON-019",
    course: "Fundamentals of Nursing (FON)",
    topic: "Medication Administration & Safety",
    subtopic: "Intramuscular (IM) Injection Technique",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the primary clinical purpose of utilizing the Z-track technique when administering deep intramuscular injections of irritating medications (such as iron dextran)?",
    options: [
      "Sealing the medication within the deep muscle tissue to prevent leakage into the subcutaneous tract and skin staining",
      "Accelerating the absorption of the drug into the venous circulation",
      "Eliminating the need to cleanse the skin with an antiseptic swab",
      "Allowing injection into superficial subcutaneous tissue without needle penetration"
    ],
    correctAnswer: 0,
    rationale: "The Z-track technique involves displacing skin and subcutaneous tissue laterally 1 to 1.5 inches before needle insertion, injecting, and releasing the tissue after withdrawal. This creates a zig-zag path that seals the drug within the muscle bed, preventing back-tracking into sensitive subcutaneous tissue.",
    optionRationales: {
      A: "Correct. Z-track creates a broken path that locks irritating medications in the muscle layer.",
      B: "It does not alter the biochemical absorption rate of the intramuscular vascular bed.",
      C: "Skin antisepsis remains mandatory regardless of injection technique.",
      D: "Z-track ensures deep muscle deposition; it does not target subcutaneous tissue."
    },
    clinicalPearl: "Use the Z-track method for irritating or staining IM medications (e.g., Iron). Do not massage the site after injection.",
    tags: ["medication-administration", "Z-track", "IM-injection", "injections"]
  },
  {
    id: "FON-020",
    course: "Fundamentals of Nursing (FON)",
    topic: "Vital Signs & Clinical Monitoring",
    subtopic: "Respiratory Patterns",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "During bedside observation, the nurse notes an alternating respiratory pattern characterized by rhythmic waxing and waning of respirations from very deep to very shallow breathing, punctuated by periodic apnea. What pattern is this?",
    options: [
      "Cheyne-Stokes respirations",
      "Kussmaul respirations",
      "Biot's (Ataxic) respirations",
      "Orthopnea"
    ],
    correctAnswer: 0,
    rationale: "Cheyne-Stokes breathing is a cyclic pattern where depth increases gradually, peaks, decreases, and is followed by a period of apnea (10–60 seconds). It is seen in severe heart failure, stroke, intracranial hypertension, and at end of life. Kussmaul respirations are deep and rapid (metabolic acidosis); Biot's are irregular clusters of breaths followed by apnea (brainstem damage).",
    optionRationales: {
      A: "Correct. Gradual waxing and waning of depth with periodic apnea describes Cheyne-Stokes respirations.",
      B: "Kussmaul breathing consists of deep, rapid, non-cyclic respirations characteristic of DKA.",
      C: "Biot's breathing consists of irregular periods of normal breathing followed by irregular periods of apnea.",
      D: "Orthopnea is difficulty breathing when lying flat, relieved by sitting upright."
    },
    clinicalPearl: "Cheyne-Stokes = rhythmic Waxing/Waning + Apnea. Kussmaul = Deep, Rapid hyperventilation (DKA).",
    tags: ["vital-signs", "respiratory-patterns", "Cheyne-Stokes", "clinical-assessment"]
  },
  {
    id: "FON-021",
    course: "Fundamentals of Nursing (FON)",
    topic: "Infection Prevention & Control",
    subtopic: "The Chain of Infection",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In the epidemiological 'Chain of Infection', which measure represents the single most effective intervention to break the link of 'Mode of Transmission'?",
    options: [
      "Performing thorough hand hygiene between patient contacts",
      "Administering prophylactic antibiotics to all admitted patients",
      "Administering high-dose vitamins to improve host resistance",
      "Sterilizing all bed frames with ultraviolet radiation once a month"
    ],
    correctAnswer: 0,
    rationale: "The chain of infection consists of: Infectious Agent → Reservoir → Portal of Exit → Mode of Transmission → Portal of Entry → Susceptible Host. The hands of healthcare workers are the primary vector for pathogen transmission in hospitals; hand hygiene breaks this transmission link.",
    optionRationales: {
      A: "Correct. Hand hygiene breaks the Mode of Transmission link in the chain of infection.",
      B: "Indiscriminate prophylactic antibiotics cause antimicrobial resistance and do not halt transmission.",
      C: "Vitamins target the Susceptible Host link, but are not the primary hospital-wide intervention.",
      D: "Monthly cleaning is too infrequent to prevent daily cross-transmission."
    },
    clinicalPearl: "Hand hygiene is the single most effective way to break the Mode of Transmission link in the chain of infection.",
    tags: ["chain-of-infection", "hand-hygiene", "infection-prevention", "transmission"]
  },
  {
    id: "FON-022",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Elimination",
    subtopic: "Enema Administration Mechanics",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "To administer a cleansing soap-suds enema to an adult client, how should the patient be positioned to facilitate the anatomical flow of solution by gravity into the sigmoid colon?",
    options: [
      "Left lateral Sims' position with the right knee flexed",
      "Right lateral side-lying position",
      "High-Fowler upright position",
      "Dorsal recumbent with knees abducted"
    ],
    correctAnswer: 0,
    rationale: "Positioning the client in the Left Lateral Sims' position follows the anatomical curve of the colon: the sigmoid colon and rectum are located on the left side of the pelvis. This allows the instillation fluid to flow downward along the sigmoid colon by gravity.",
    optionRationales: {
      A: "Correct. Left Sims' position places the sigmoid colon inferiorly, using gravity to aid fluid flow.",
      B: "Right lateral positions force fluid to flow upward against gravity into the left-sided sigmoid colon.",
      C: "Upright Fowler position prevents retention of enema fluids.",
      D: "Dorsal recumbent does not align with the descending colon's anatomical path."
    },
    clinicalPearl: "Enema position: Always LEFT lateral Sims' position. Left side = Left-sided sigmoid colon.",
    tags: ["enema", "elimination", "positioning", "Sims-position"]
  },
  {
    id: "FON-023",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Process & Care Planning",
    subtopic: "Prioritizing Interventions (Maslow's Hierarchy)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When applying Maslow's Hierarchy of Needs to prioritize care for a newly admitted client, which nursing problem must be addressed first?",
    options: [
      "Ineffective Airway Clearance related to retained tracheobronchial secretions",
      "Anxiety related to unfamiliar hospital environment",
      "Risk for Loneliness related to visitor restrictions",
      "Deficient Knowledge regarding post-discharge medication regimen"
    ],
    correctAnswer: 0,
    rationale: "Maslow's Hierarchy of Needs dictates that basic physiological survival needs (Airway, Breathing, Circulation, Oxygen, Fluid, Nutrition) must be met before addressing higher-level psychosocial needs (Safety, Love/Belonging, Self-Esteem, Self-Actualization). Airway clearance is a life-sustaining physiological priority.",
    optionRationales: {
      A: "Correct. Airway clearance is a physiological survival need, taking priority over psychosocial diagnoses.",
      B: "Anxiety is a higher-tier psychological safety/security need.",
      C: "Loneliness belongs to love and belonging needs.",
      D: "Knowledge deficit relates to cognitive self-actualization, which is addressed once physiological stability is established."
    },
    clinicalPearl: "Always prioritize Physiological survival needs (Airway, Breathing, Circulation) over Psychosocial needs.",
    tags: ["Maslow", "prioritization", "nursing-process", "airway"]
  },
  {
    id: "FON-024",
    course: "Fundamentals of Nursing (FON)",
    topic: "Vital Signs & Clinical Monitoring",
    subtopic: "Pulse Oximetry Accuracy Factors",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client who has just arrived in the emergency ward from cold winter weather has pale, cold hands with a weak peripheral pulse. The pulse oximeter on the index finger reads 82% SpO2, but the client is alert, oriented, breathing easily at 16 breaths/min, with clear lung sounds. What is the nurse's first action?",
    options: [
      "Assess local peripheral perfusion, warm the client's hands, and recheck the sensor on a warm site (earlobe or forehead)",
      "Immediately intubate the client for acute respiratory failure",
      "Administer 100% oxygen through a non-rebreather mask at 15 L/min",
      "Assume the client has carbon monoxide poisoning"
    ],
    correctAnswer: 0,
    rationale: "Pulse oximeters rely on pulsatile arterial blood flow to measure light absorption. Severe peripheral vasoconstriction, hypothermia, or poor perfusion can produce artifactual, falsely low readings. Because the client is asymptomatic with clear breath sounds, the nurse should assess perfusion and recheck on a central, warm site (earlobe or forehead) before escalating interventions.",
    optionRationales: {
      A: "Correct. Assess the patient and address local hypothermia/poor perfusion before treating an artifact.",
      B: "Intubation is unwarranted for an artifact in an alert, stable patient.",
      C: "Oxygen therapy should follow confirmed hypoxemia, not an unverified sensor artifact.",
      D: "Carbon monoxide poisoning typically produces falsely high SpO2 readings, not low ones."
    },
    clinicalPearl: "Always assess the patient FIRST before treating the monitor. Cold fingers produce falsely low pulse oximetry readings.",
    tags: ["pulse-oximetry", "vital-signs", "hypothermia", "clinical-judgment"]
  },
  {
    id: "FON-025",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Mobility",
    subtopic: "Fall Prevention Protocols",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is an essential environmental safety measure that must be confirmed for an elderly client identified as a high fall risk in the ward?",
    options: [
      "Keep the bed in the lowest locked position with the call bell placed within the client's reach",
      "Raise all four full-length side rails permanently and lock the room door",
      "Restrain both of the client's wrists to the side rails with gauze ties",
      "Turn off all nightlights to encourage deep sleep"
    ],
    correctAnswer: 0,
    rationale: "Standard fall prevention includes keeping the bed in its lowest position, locking the casters, placing the call bell within reach, keeping walkways clear, and providing adequate night lighting. Raising all four side rails can be considered a physical restraint and increases injury severity if the client climbs over them.",
    optionRationales: {
      A: "Correct. Bed in lowest locked position and call bell within reach are core universal fall safeguards.",
      B: "Raising all 4 rails acts as a restraint and increases fall heights when patients climb over.",
      C: "Tying wrist restraints requires a specific provider order; unauthorized restraints constitute false imprisonment.",
      D: "Adequate lighting prevents disorientation and falls during nighttime mobilization."
    },
    clinicalPearl: "Keep the bed in the lowest position, lock the wheels, and ensure the call bell is within reach.",
    tags: ["fall-prevention", "patient-safety", "bed-safety", "foundations"]
  },
  {
    id: "FON-026",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Wound Drainage Characteristics",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A post-operative surgical wound dressing displays a thin, watery, pale pink to light-red drainage. How should the nurse document this exudate?",
    options: [
      "Serosanguineous drainage",
      "Purulent drainage",
      "Serous drainage",
      "Sanguineous drainage"
    ],
    correctAnswer: 0,
    rationale: "Wound drainage types: 1) Serous: clear, watery plasma; 2) Sanguineous: bright red, indicating fresh blood; 3) Serosanguineous: pale, pink, watery mixture of clear fluid and red blood cells; 4) Purulent: thick, opaque, yellow, green, or brown fluid with a foul odor, indicating infection.",
    optionRationales: {
      A: "Correct. Pale pink, watery fluid is serosanguineous.",
      B: "Purulent drainage is thick, yellow/green, and indicates infection.",
      C: "Serous drainage is clear and amber/straw-colored.",
      D: "Sanguineous drainage is thick, opaque, and bright red."
    },
    clinicalPearl: "Serous = Clear; Sanguineous = Bloody (Red); Serosanguineous = Pink/Watery; Purulent = Pus (Infection).",
    tags: ["wound-care", "exudate", "serosanguineous", "documentation"]
  },
  {
    id: "FON-027",
    course: "Fundamentals of Nursing (FON)",
    topic: "Medication Administration & Safety",
    subtopic: "Subcutaneous Injection Anatomy & Technique",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When administering a subcutaneous injection of unfractionated Heparin into the abdominal wall, what practice must the nurse follow?",
    options: [
      "Inject at a 45- to 90-degree angle at least 2 inches away from the umbilicus, and avoid massaging the site after injection",
      "Aspirate for 10 seconds to confirm absence of blood return",
      "Rub the injection site firmly with dry gauze for 2 minutes to disperse the drug",
      "Inject directly into the periumbilical ring using an 18-gauge 1.5-inch needle"
    ],
    correctAnswer: 0,
    rationale: "Heparin is injected subcutaneously into the abdomen at least 2 inches away from the umbilicus at a 45- or 90-degree angle (depending on adipose depth). Massaging or rubbing the site causes capillary bleeding, bruising, and hematoma formation. Aspiration is not recommended for heparin injections.",
    optionRationales: {
      A: "Correct. Inject 2 inches from umbilicus and do not massage the site.",
      B: "Aspiration is contraindicated for subcutaneous heparin and insulin injections.",
      C: "Massaging causes tissue trauma, hematomas, and erratic absorption.",
      D: "18-gauge needles are for drawing up thick medications, not subcutaneous injections (use 25-27G)."
    },
    clinicalPearl: "Never massage a subcutaneous Heparin or Enoxaparin injection site; massaging causes bruising and hematoma formation.",
    tags: ["heparin", "subcutaneous", "injections", "pharmacology-safety"]
  },
  {
    id: "FON-028",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Nutrition",
    subtopic: "Confirming NG Tube Placement",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "What is the gold standard diagnostic method to confirm the correct anatomical placement of a newly inserted nasogastric tube before administering enteral feeding?",
    options: [
      "Anterior-posterior chest/abdominal radiograph (X-ray)",
      "Aspirating gastric contents and testing for a pH below 5.5",
      "Auscultating an air whoosh over the epigastrium with a stethoscope",
      "Immersing the distal end of the tube in water to check for bubbles"
    ],
    correctAnswer: 0,
    rationale: "Radiographic verification (X-ray) is the definitive gold standard to verify that an NG tube sits in the stomach and has not entered the bronchial tree. While pH testing of aspirate (pH < 5.5) is used for ongoing bedside verification, an initial X-ray is required before the first feeding.",
    optionRationales: {
      A: "Correct. Radiography is the definitive gold standard confirmation method.",
      B: "pH testing is acceptable for routine daily checks, but X-ray remains the definitive baseline standard.",
      C: "The 'air whoosh' test is unreliable and can sound identical if the tube is coiled in the lung or esophagus.",
      D: "Placing the tube in water risks fluid aspiration if the patient inhales."
    },
    clinicalPearl: "Never rely on the 'air whoosh' test alone before initiating feeds. Confirm initial placement with a chest X-ray.",
    tags: ["NG-tube", "X-ray", "enteral-feeding", "patient-safety"]
  },
  {
    id: "FON-029",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Positioning & Mobility",
    subtopic: "Fowler's Position Angles",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What bed elevation angle defines Semi-Fowler's position?",
    options: [
      "Head of the bed elevated 30 to 45 degrees",
      "Head of the bed elevated 60 to 90 degrees",
      "Head of the bed elevated 15 degrees",
      "Bed completely flat with feet elevated 30 degrees"
    ],
    correctAnswer: 0,
    rationale: "Fowler's positions: 1) Low-Fowler: 15–30 degrees; 2) Semi-Fowler: 30–45 degrees; 3) Standard Fowler: 45–60 degrees; 4) High-Fowler: 60–90 degrees.",
    optionRationales: {
      A: "Correct. Semi-Fowler is defined as 30 to 45 degrees of elevation.",
      B: "60 to 90 degrees defines High-Fowler position.",
      C: "15 degrees defines Low-Fowler position.",
      D: "Bed flat with feet elevated describes Trendelenburg position."
    },
    clinicalPearl: "Semi-Fowler (30–45 degrees) prevents aspiration during tube feedings and reduces ventilator-associated pneumonia.",
    tags: ["positioning", "Semi-Fowler", "bed-angles", "foundations"]
  },
  {
    id: "FON-030",
    course: "Fundamentals of Nursing (FON)",
    topic: "Vital Signs & Clinical Monitoring",
    subtopic: "Assessing Radial Pulse",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When assessing a client's radial pulse that feels regular in rhythm, how long should the nurse palpate and count the beats?",
    options: [
      "Count for 30 seconds and multiply the result by 2",
      "Count for 15 seconds and multiply by 4",
      "Count for 10 seconds and multiply by 6",
      "Count for 6 full minutes"
    ],
    correctAnswer: 0,
    rationale: "If the peripheral pulse is regular, counting for 30 seconds and multiplying by 2 provides an accurate rate. If the pulse is irregular, or if the client is receiving cardiovascular medications (e.g., Digoxin), the nurse must count for a full 60 seconds (preferably at the apical site).",
    optionRationales: {
      A: "Correct. 30 seconds multiplied by 2 is standard clinical practice for regular pulses.",
      B: "15 seconds multiplied by 4 introduces higher error margins.",
      C: "10 seconds provides an unreliable snapshot of pulse rate.",
      D: "Counting for 6 minutes is unnecessary during routine vital sign assessment."
    },
    clinicalPearl: "Regular pulse = Count for 30 seconds and multiply by 2. Irregular pulse = Count Apical pulse for a full 60 seconds.",
    tags: ["vital-signs", "pulse-rate", "radial-pulse", "clinical-skills"]
  },
  {
    id: "FON-031",
    course: "Fundamentals of Nursing (FON)",
    topic: "Infection Prevention & Control",
    subtopic: "Donning and Doffing PPE Sequences",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "What is the recommended sequence for removing (doffing) Personal Protective Equipment (PPE) to minimize self-contamination?",
    options: [
      "Gloves → Goggles/Face Shield → Gown → Mask/Respirator → Hand Hygiene",
      "Mask → Gown → Gloves → Goggles → Hand Hygiene",
      "Gown → Mask → Goggles → Gloves → Hand Hygiene",
      "Goggles → Mask → Gloves → Gown → Hand Hygiene"
    ],
    correctAnswer: 0,
    rationale: "According to the CDC and infection prevention guidelines, the most contaminated PPE items are removed first: 1) Gloves (most contaminated), 2) Goggles or face shield, 3) Gown (rolled inward), 4) Mask/Respirator (removed by ties from behind, outside the room for airborne isolation), followed immediately by 5) Hand Hygiene.",
    optionRationales: {
      A: "Correct. Doffing order: Gloves, Goggles, Gown, Mask, then Hand Hygiene.",
      B: "Never touch the mask first with contaminated gloves; this transfers pathogens directly to the face.",
      C: "Gloves should be removed before untying or removing the gown.",
      D: "Gloves are the most contaminated item and must be removed first."
    },
    clinicalPearl: "Doffing PPE (alphabetical order): Gloves, Goggles, Gown, Mask. Gloves come off first because they are dirtiest.",
    tags: ["PPE", "doffing-sequence", "infection-control", "safety"]
  },
  {
    id: "FON-032",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Elimination",
    subtopic: "Midstream Clean-Catch Urine Collection",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When instructing an ambulatory female client on collecting a clean-catch midstream urine specimen for microbiological culture, what instruction must be emphasized?",
    options: [
      "Cleanse the labia from front to back, void a small amount into the toilet, and collect the middle portion into the sterile container without stopping the stream",
      "Collect the very first drops of urine that leave the urethra directly into the cup",
      "Wash the perineum with perfumed disinfectant soap and save the final drops of the void",
      "Empty the bladder into an unsterile bedpan and transfer 50 mL into the sterile jar"
    ],
    correctAnswer: 0,
    rationale: "Clean-catch midstream collection: Cleanse labia from front to back with antiseptic to clear skin flora. The patient begins voiding into the toilet; the initial stream flushes out resident urethral bacteria. The sterile specimen cup is then moved into the stream to collect midstream urine, avoiding contact with skin margins.",
    optionRationales: {
      A: "Correct. Front-to-back cleansing, flush out initial stream, collect midstream volume.",
      B: "The initial stream contains contaminating urethral commensal bacteria.",
      C: "Perfumed soaps irritate the mucosa and can alter culture results.",
      D: "Collecting urine from a bedpan introduces environmental contamination."
    },
    clinicalPearl: "Midstream catch: The first stream washes out normal urethral flora; the midstream sample reflects true bladder urine.",
    tags: ["urinalysis", "clean-catch", "specimen-collection", "culture"]
  },
  {
    id: "FON-033",
    course: "Fundamentals of Nursing (FON)",
    topic: "Medication Administration & Safety",
    subtopic: "Dosage Calculations (Basic Metric)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The healthcare provider prescribes Paracetamol 500 mg orally every 6 hours PRN for fever. The ward pharmacy dispenses Paracetamol syrup labeled 125 mg / 5 mL. How many milliliters (mL) should the nurse administer per dose?",
    options: [
      "20 mL",
      "10 mL",
      "15 mL",
      "25 mL"
    ],
    correctAnswer: 0,
    rationale: "Using the formula: Desired / Have x Volume = (500 mg / 125 mg) x 5 mL = 4 x 5 mL = 20 mL.",
    optionRationales: {
      A: "Correct. (500 / 125) x 5 = 20 mL.",
      B: "10 mL provides only 250 mg.",
      C: "15 mL provides 375 mg.",
      D: "25 mL provides 625 mg, an overdose."
    },
    clinicalPearl: "Formula: (Desired dose / Stock dose) x Volume = Administered volume.",
    tags: ["drug-calculations", "pharmacology-foundation", "pediatric-dosing", "metric"]
  },
  {
    id: "FON-034",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Primary vs Secondary Intention Healing",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "How does wound healing by Secondary Intention differ from healing by Primary Intention?",
    options: [
      "Secondary intention involves significant tissue loss where wound edges cannot be approximated, healing slowly through granulation and contraction",
      "Secondary intention heals with minimal scar formation using surgical sutures",
      "Secondary intention never produces granulation tissue",
      "Secondary intention is reserved exclusively for clean surgical incisions"
    ],
    correctAnswer: 0,
    rationale: "Primary intention occurs in clean surgical wounds with approximated edges secured by sutures or staples, healing with minimal tissue loss and a small scar. Secondary intention involves extensive tissue loss (e.g., pressure injuries, open burns, infected wounds) where edges cannot be pulled together; it heals by filling from the base with granulation tissue, leaving a larger scar.",
    optionRationales: {
      A: "Correct. Secondary intention involves open wounds that heal from the base upward via granulation tissue.",
      B: "Surgical closure with sutures describes Primary Intention.",
      C: "Granulation tissue is the hallmark of secondary intention healing.",
      D: "Clean surgical incisions heal by Primary Intention."
    },
    clinicalPearl: "Primary Intention = Closed with sutures (clean, hairline scar). Secondary Intention = Left open to heal by granulation (large scar).",
    tags: ["wound-healing", "secondary-intention", "granulation", "tissue-repair"]
  },
  {
    id: "FON-035",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Positioning & Mobility",
    subtopic: "Body Mechanics for Nurses",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "To prevent lower back injury when lifting or transferring a dependent client from a bed to a wheelchair, what body mechanics rule must the nurse follow?",
    options: [
      "Bend at the knees and hips, keep a wide base of support, and lift with the legs while keeping the load close to the body",
      "Lock the knees straight and bend forward at the waist using back muscles",
      "Twist the spine and torso while lifting the client's weight",
      "Keep feet tightly together to minimize the base of support"
    ],
    correctAnswer: 0,
    rationale: "Safe body mechanics: Maintain a wide base of support with feet shoulder-width apart, bend at the knees and hips (lowering center of gravity), lift using the strong quadriceps and gluteal muscles rather than the lumbar spine, keep the weight close to the body, and pivot with the feet rather than twisting the spine.",
    optionRationales: {
      A: "Correct. Bending knees/hips, keeping a wide base, and lifting with legs protects the back.",
      B: "Bending at the waist with straight knees strains the lumbar spine, leading to disc herniation.",
      C: "Twisting during lifting is a leading cause of nurse back injuries; pivot with the feet instead.",
      D: "A narrow base of support reduces balance and stability."
    },
    clinicalPearl: "Lift with your legs, not your back. Pivot with your feet; never twist your spine while lifting.",
    tags: ["body-mechanics", "nurse-safety", "lifting-technique", "ergonomics"]
  },
  {
    id: "FON-036",
    course: "Fundamentals of Nursing (FON)",
    topic: "Vital Signs & Clinical Monitoring",
    subtopic: "Oxygen Delivery Devices & FiO2",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client is prescribed supplemental oxygen via a simple Nasal Cannula at a flow rate of 4 Liters/minute. Approximately what fraction of inspired oxygen (FiO2) is being delivered?",
    options: [
      "Approximately 36% FiO2",
      "Approximately 21% FiO2",
      "Approximately 60% FiO2",
      "Approximately 100% FiO2"
    ],
    correctAnswer: 0,
    rationale: "Room air delivers 21% FiO2. Each additional liter of oxygen flow through a nasal cannula adds roughly 4% FiO2: 1 L/min ~24%, 2 L/min ~28%, 3 L/min ~32%, 4 L/min ~36%, 5 L/min ~40%, and 6 L/min ~44%.",
    optionRationales: {
      A: "Correct. 4 L/min via nasal cannula provides approximately 36% FiO2.",
      B: "21% is the concentration of room air with zero supplemental oxygen.",
      C: "60% requires a simple face mask or Venturi mask.",
      D: "100% FiO2 requires a non-rebreather mask with reservoir bag running at 10–15 L/min."
    },
    clinicalPearl: "Rule of thumb for nasal cannulas: Start at room air (21%) and add 4% for every Liter of O2 flow (1L = 24%, 4L = 36%).",
    tags: ["oxygen-therapy", "FiO2", "nasal-cannula", "vital-signs"]
  },
  {
    id: "FON-037",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Hygiene",
    subtopic: "Bed Bath Principles",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When giving a complete bed bath to a bedbound client, in what direction should the nurse wash the client's extremities?",
    options: [
      "From distal to proximal (from hand toward shoulder, and foot toward hip)",
      "From proximal to distal",
      "In rapid circular motions over bony prominences",
      "Exclusively from the center of the chest outward"
    ],
    correctAnswer: 0,
    rationale: "Washing and drying extremities using firm, smooth strokes from distal to proximal (fingers to shoulder, toes to groin) follows venous flow, promoting venous return to the heart and reducing peripheral edema.",
    optionRationales: {
      A: "Correct. Distal-to-proximal strokes support venous return toward the heart.",
      B: "Proximal to distal works against venous return and can worsen venous stasis.",
      C: "Vigorous rubbing over bony prominences damages fragile capillaries, increasing skin breakdown.",
      D: "Does not describe the technique used for washing extremities."
    },
    clinicalPearl: "Always wash extremities from distal to proximal to promote venous return to the heart.",
    tags: ["bed-bath", "hygiene", "venous-return", "basic-care"]
  },
  {
    id: "FON-038",
    course: "Fundamentals of Nursing (FON)",
    topic: "Medication Administration & Safety",
    subtopic: "Administering Ophthalmic Drops",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the correct procedure for instilling prescribed eye drops (ophthalmic solution) into an adult client's eye?",
    options: [
      "Retract the lower eyelid and instill the drops into the lower conjunctival sac, then apply gentle pressure to the nasolacrimal duct for 30–60 seconds",
      "Drop the solution directly onto the sensitive central cornea",
      "Touch the dropper tip against the eyelashes to steady the hand",
      "Have the client squeeze their eyelids shut tightly immediately after instillation"
    ],
    correctAnswer: 0,
    rationale: "Eye drops are instilled into the lower conjunctival sac (never directly onto the sensitive cornea). Applying gentle pressure over the inner canthus (nasolacrimal duct) for 30–60 seconds prevents systemic absorption through the vascular nasal mucosa and keeps the drug in the conjunctival space.",
    optionRationales: {
      A: "Correct. Instill into the lower conjunctival sac and occlude the nasolacrimal duct to reduce systemic absorption.",
      B: "Instilling drops directly onto the cornea triggers discomfort, blinking, and can cause corneal abrasion.",
      C: "Touching the eye dropper to lashes contaminates the medication container.",
      D: "Squeezing the eye shut forces the medication out onto the cheek."
    },
    clinicalPearl: "Punctal occlusion: Press on the inner canthus (tear duct) for 1 minute after giving eye drops to prevent systemic absorption.",
    tags: ["ophthalmic", "eye-drops", "medication-technique", "nasolacrimal-duct"]
  },
  {
    id: "FON-039",
    course: "Fundamentals of Nursing (FON)",
    topic: "Therapeutic Communication",
    subtopic: "Active Listening Behaviors",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "The acronym 'SOLER' is widely taught to guide non-verbal active listening posture. What does the 'S' stand for in SOLER?",
    options: [
      "Sit facing the client squarely",
      "Speak loudly and assertively",
      "Smile continuously throughout the interview",
      "Stand upright over the bed"
    ],
    correctAnswer: 0,
    rationale: "SOLER framework: S = Sit facing the client squarely (signals presence); O = Open posture; L = Lean forward toward the client; E = Eye contact (culturally appropriate); R = Relaxed posture.",
    optionRationales: {
      A: "Correct. S stands for Sit facing the client squarely.",
      B: "Speaking loudly is not a non-verbal active listening posture.",
      C: "Continuous smiling can appear insincere or inappropriate when discussing serious topics.",
      D: "Standing over a bedbound patient reinforces a power imbalance; sitting puts you at eye level."
    },
    clinicalPearl: "SOLER: Squarely face the patient, Open posture, Lean in, Eye contact, Relaxed.",
    tags: ["SOLER", "active-listening", "therapeutic-communication", "non-verbal"]
  },
  {
    id: "FON-040",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Surgical Drain Types",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client returns from surgery with a closed bulb suction drainage system (Jackson-Pratt drain). What action maintains effective continuous wound suction?",
    options: [
      "Compressing the flexible bulb flat before replacing the drainage plug",
      "Leaving the drainage pour plug open to atmospheric air",
      "Connecting the bulb directly to wall suction at -120 mmHg",
      "Pinning the bulb above the level of the surgical incision"
    ],
    correctAnswer: 0,
    rationale: "Jackson-Pratt (JP) and Hemovac drains rely on low-pressure vacuum suction. After emptying and measuring the drainage, the nurse must compress the bulb or chamber flat to evacuate air, and insert the plug while it is compressed to re-establish negative suction pressure.",
    optionRationales: {
      A: "Correct. Compressing the bulb before capping creates the negative pressure that draws wound fluid into the chamber.",
      B: "Leaving the plug open vents the vacuum, stopping drainage suction.",
      C: "Jackson-Pratt drains are self-contained; connecting to high wall suction can tear internal healing tissue.",
      D: "Drains should be secured below incision level to promote gravity-assisted drainage."
    },
    clinicalPearl: "To maintain suction in a Jackson-Pratt (JP) drain, squeeze the bulb flat before closing the stopper.",
    tags: ["wound-drain", "Jackson-Pratt", "closed-suction", "post-op-care"]
  },
  {
    id: "FON-041",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Elimination",
    subtopic: "Stoma Assessment & Colostomy Care",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During an initial assessment of a newly created sigmoid colostomy on post-op day 1, which stoma appearance indicates a normal, healthy tissue perfusion?",
    options: [
      "Rose-red to beefy red, moist, and slightly edematous",
      "Pale, dry, and pinkish-white",
      "Dark purple to black and dry",
      "Dull gray with yellow slough"
    ],
    correctAnswer: 0,
    rationale: "A healthy, perfused new stoma is rose-red to beefy red, warm, and moist (similar to oral mucosa), with mild post-operative edema expected during the first few days. A pale stoma indicates anemia; a purple, black, or dusky stoma indicates ischemia or necrosis requiring immediate surgical escalation.",
    optionRationales: {
      A: "Correct. Rose-red to beefy red and moist confirms healthy mucosal vascular perfusion.",
      B: "Pale and dry indicates low hemoglobin or compromised arterial blood flow.",
      C: "Dark purple or black indicates tissue ischemia and necrosis.",
      D: "Dull gray slough indicates poor perfusion or infection."
    },
    clinicalPearl: "A healthy stoma is beefy red and moist. A dark purple or black stoma indicates ischemia and must be reported immediately.",
    tags: ["colostomy", "stoma-care", "elimination", "post-op-assessment"]
  },
  {
    id: "FON-042",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Mobility",
    subtopic: "Crutch Walking Gaits",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A client recovering from a right ankle fracture is prescribed non-weight-bearing (NWB) status on the right leg. Which crutch-walking gait should the nurse teach the client?",
    options: [
      "Three-point gait",
      "Four-point gait",
      "Two-point gait",
      "Swing-through gait"
    ],
    correctAnswer: 0,
    rationale: "The three-point gait is used when one extremity is completely non-weight-bearing. The patient advances both crutches along with the affected (non-weight-bearing) leg forward together, and then moves the unaffected, weight-bearing leg forward. Four-point and two-point gaits require partial weight-bearing on both legs.",
    optionRationales: {
      A: "Correct. Three-point gait is used for unilateral non-weight-bearing status.",
      B: "Four-point gait requires partial weight-bearing on both legs, moving crutches and legs alternately.",
      C: "Two-point gait requires partial weight-bearing on both extremities (opposite crutch and foot move together).",
      D: "Swing-through gait is used by paraplegics using leg braces, swinging both legs past the crutches."
    },
    clinicalPearl: "Non-weight-bearing on one leg = 3-Point Gait. Both crutches advance with the bad leg, followed by the good leg.",
    tags: ["crutch-walking", "mobility", "three-point-gait", "rehabilitation"]
  },
  {
    id: "FON-043",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Process & Care Planning",
    subtopic: "Evaluating Patient Outcomes",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In the 5-step Nursing Process (ADPIE), what is the primary focus of the Evaluation phase?",
    options: [
      "Comparing the patient's actual health status against the planned expected outcomes to determine goal attainment",
      "Administering prescribed medications and comfort treatments",
      "Formulating new diagnostic NANDA labels",
      "Collecting initial baseline physiological data upon admission"
    ],
    correctAnswer: 0,
    rationale: "Evaluation (the final step of ADPIE) is a continuous process where the nurse assesses the client's response to interventions and compares progress against the measurable expected outcome criteria to decide whether to terminate, continue, or modify the care plan.",
    optionRationales: {
      A: "Correct. Evaluation measures progress against planned goals to evaluate intervention success.",
      B: "Administering treatments is the Implementation phase.",
      C: "Formulating diagnostic labels is the Diagnosis phase.",
      D: "Collecting baseline data is the Assessment phase."
    },
    clinicalPearl: "Evaluation determines whether your interventions worked by comparing patient status directly to the planned goals.",
    tags: ["nursing-process", "evaluation", "ADPIE", "outcomes"]
  },
  {
    id: "FON-044",
    course: "Fundamentals of Nursing (FON)",
    topic: "Medication Administration & Safety",
    subtopic: "Parenteral Drug Reconstitution",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When reconstituting a powdered antibiotic in a multi-dose glass vial using sterile water for injection, what information must the nurse write on the vial label after mixing?",
    options: [
      "Date and time of reconstitution, resulting drug concentration, expiration date/time, and the nurse's initials",
      "The patient's bed number and hospital room rate",
      "Only the word 'mixed' without dates",
      "The name of the pharmaceutical sales representative"
    ],
    correctAnswer: 0,
    rationale: "To ensure medication safety on reconstituted multi-dose vials, the nurse must record: 1) Date and time reconstituted, 2) Concentration per mL (e.g., 250 mg/mL), 3) Expiration date and time based on package insert, and 4) Initials of the nurse who prepared it.",
    optionRationales: {
      A: "Correct. Reconstitution date/time, final concentration, expiration, and initials are required for multi-dose safety.",
      B: "Room rates and bed numbers have no clinical safety value on drug vials.",
      C: "Omitting the date, time, and concentration risks administering expired or incorrectly dosed drugs.",
      D: "Pharmaceutical sales details are irrelevant to clinical medication safety."
    },
    clinicalPearl: "Whenever you reconstitute a multi-dose vial: Write Date, Time, Concentration/mL, Expiration, and your Initials.",
    tags: ["medication-safety", "reconstitution", "labeling", "pharmacology-foundation"]
  },
  {
    id: "FON-045",
    course: "Fundamentals of Nursing (FON)",
    topic: "Vital Signs & Clinical Monitoring",
    subtopic: "Orthostatic Hypotension Assessment",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When assessing a client for Orthostatic (Postural) Hypotension, what diagnostic blood pressure change confirms this condition when moving from supine to standing?",
    options: [
      "A drop in Systolic BP of at least 20 mmHg or a drop in Diastolic BP of at least 10 mmHg within 3 minutes of standing",
      "A rise in Systolic BP of 30 mmHg accompanied by bradycardia",
      "No change in blood pressure with an isolated drop in respiratory rate",
      "A drop in mean arterial pressure of exactly 2 mmHg"
    ],
    correctAnswer: 0,
    rationale: "Orthostatic hypotension is defined as a drop in systolic blood pressure of >= 20 mmHg or a drop in diastolic blood pressure of >= 10 mmHg within 3 minutes of moving from a lying or sitting position to standing. It is often accompanied by compensatory tachycardia, dizziness, or lightheadedness.",
    optionRationales: {
      A: "Correct. A systolic drop of >=20 mmHg or diastolic drop of >=10 mmHg within 3 minutes confirms orthostatic hypotension.",
      B: "A blood pressure rise describes a hypertensive response, not hypotension.",
      C: "Absence of change indicates normal baroreceptor function.",
      D: "A 2 mmHg change is within normal measurement error and lacks diagnostic significance."
    },
    clinicalPearl: "Orthostatic drop: Systolic drops >=20 mmHg, or Diastolic drops >=10 mmHg. Always measure supine, sitting, then standing.",
    tags: ["vital-signs", "orthostatic-hypotension", "blood-pressure", "assessment"]
  },
  {
    id: "FON-046",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Elimination",
    subtopic: "Bedpan Administration Technique",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which type of bedpan is designed for clients who have undergone total hip replacement surgery or who cannot raise their hips due to spinal casts?",
    options: [
      "Fracture pan (slipper pan)",
      "Standard regular contoured bedpan",
      "Urinal bottle",
      "Commode chair"
    ],
    correctAnswer: 0,
    rationale: "A fracture pan (slipper pan) has a low, wedge-shaped posterior rim (approximately 1.3 cm high) that slides under the buttocks without requiring the client to raise their hips or flex their hips past 90 degrees. This protects surgical precautions in total hip arthroplasty, spinal injuries, or lower extremity casts.",
    optionRationales: {
      A: "Correct. The fracture pan has a low, flat rim designed for patients who cannot lift their hips.",
      B: "Regular bedpans have a deep, high rim that requires significant hip flexion and lifting.",
      C: "A urinal bottle collects male urine, but does not collect bowel movements.",
      D: "A commode chair requires transferring out of bed, which may violate early post-op hip precautions."
    },
    clinicalPearl: "Use a Fracture Pan for patients with hip replacements, back surgery, or pelvic fractures to avoid hip flexion over 90 degrees.",
    tags: ["elimination", "bedpan", "fracture-pan", "hip-precautions"]
  },
  {
    id: "FON-047",
    course: "Fundamentals of Nursing (FON)",
    topic: "Infection Prevention & Control",
    subtopic: "Sterilization vs Disinfection",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under standard medical terminology, how does 'Sterilization' differ from 'High-Level Disinfection'?",
    options: [
      "Sterilization destroys all viable forms of microbial life, including bacterial endospores, whereas disinfection reduces pathogens but does not reliably kill spores",
      "Disinfection kills bacterial spores, while sterilization does not",
      "Sterilization uses cold soapy water, while disinfection requires an autoclave",
      "Sterilization applies only to human skin; disinfection applies only to surgical instruments"
    ],
    correctAnswer: 0,
    rationale: "Sterilization is an absolute physical or chemical process (e.g., pressurized steam autoclaving at 121°C, ethylene oxide gas) that destroys all forms of microbial life, including resilient bacterial endospores. Disinfection eliminates many or all pathogenic microorganisms on inanimate objects, but cannot be relied upon to destroy bacterial spores.",
    optionRationales: {
      A: "Correct. Sterilization kills all microbes including spores; disinfection reduces pathogens but does not reliably destroy spores.",
      B: "This reverses the definition; only sterilization kills bacterial endospores.",
      C: "Autoclaving is a sterilization method; soap and water cleans, but does not sterilize.",
      D: "Living human skin cannot be sterilized (doing so would destroy tissue); skin undergoes Antisepsis.",
    },
    clinicalPearl: "Sterilization destroys everything, including bacterial spores. Disinfection reduces pathogens on inanimate surfaces, but spares endospores.",
    tags: ["sterilization", "disinfection", "infection-control", "microbiology-foundation"]
  },
  {
    id: "FON-048",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Surgical Wound Dehiscence and Evisceration",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client who underwent an open abdominal resection 6 days ago sneezes violently and reports feeling a 'pop' in the abdomen. The nurse observes complete separation of the wound layers with loops of small intestine protruding onto the skin. What is the nurse's immediate action?",
    options: [
      "Cover the exposed bowel with sterile saline-moistened dressings, place the client in Low-Fowler position with knees flexed, and notify the surgeon immediately",
      "Attempt to push the protruding loops of bowel back into the abdominal cavity using clean gloves",
      "Apply dry, tight adhesive tape across the wound edges to close the gap",
      "Instruct the client to get out of bed and walk to the surgical theater"
    ],
    correctAnswer: 0,
    rationale: "Wound evisceration (protrusion of internal organs through an open incision) is a surgical emergency. The nurse must: 1) Call for help and notify the surgeon immediately; 2) Cover the exposed viscera with sterile dressings soaked in warm sterile saline to keep tissues moist and viable; 3) Place the client in Low-Fowler position with knees bent to relieve tension on the abdominal wall; 4) Never attempt to reinsert protruding organs.",
    optionRationales: {
      A: "Correct. Cover with sterile saline-soaked dressings, flex the knees in low-Fowler position, and call the surgical team.",
      B: "Never attempt to push protruding viscera back inside; this introduces infection and causes bowel strangulation.",
      C: "Dry dressings stick to the serosa, tearing bowel tissue upon removal.",
      D: "Mobilizing the patient increases intra-abdominal pressure, causing further evisceration."
    },
    clinicalPearl: "Evisceration protocol: Cover organs with sterile saline-soaked gauze, bend the knees to relieve abdominal wall tension, and call the surgeon.",
    tags: ["evisceration", "wound-care", "surgical-emergency", "clinical-action"]
  },
  {
    id: "FON-049",
    course: "Fundamentals of Nursing (FON)",
    topic: "Therapeutic Communication",
    subtopic: "Orientation Phase of the Nurse-Client Relationship",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the primary objective of the Orientation (Introductory) Phase of the therapeutic nurse-client relationship?",
    options: [
      "Establishing rapport, defining roles, clarifying expectations, and setting parameters for confidentiality and the relationship's duration",
      "Executing deep psychotherapeutic behavioral interventions",
      "Reviewing goal achievement and saying final goodbyes",
      "Confronting the patient about non-compliant lifestyle behaviors"
    ],
    correctAnswer: 0,
    rationale: "Peplau's model outlines 4 phases: 1) Pre-interaction, 2) Orientation, 3) Working, and 4) Termination. The Orientation phase focuses on introducing the nurse, establishing rapport and trust, outlining roles and confidentiality boundaries, identifying patient needs, and agreeing on working goals.",
    optionRationales: {
      A: "Correct. The orientation phase establishes trust, parameters, goals, and confidentiality.",
      B: "Active interventions take place during the Working Phase.",
      C: "Reviewing goals and parting occurs during the Termination Phase.",
      D: "Confrontation without established rapport breaks the therapeutic relationship."
    },
    clinicalPearl: "The termination phase should be introduced during the Orientation phase so boundaries and expectations are clear from the start.",
    tags: ["therapeutic-relationship", "orientation-phase", "Peplau", "communication"]
  },
  {
    id: "FON-050",
    course: "Fundamentals of Nursing (FON)",
    topic: "Documentation & Reporting",
    subtopic: "SBAR Clinical Handoff Communication",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A nurse is using the SBAR (Situation, Background, Assessment, Recommendation) framework to escalate a deteriorating client's condition to the physician. Which statement represents the 'Assessment' component?",
    options: [
      "'The patient's blood pressure has dropped to 82/50 mmHg, heart rate is 126 bpm, and the surgical dressing has 150 mL of fresh sanguineous drainage'",
      "'This is Nurse Amaka calling from Ward 3 regarding Mr. Audu in Bed 12'",
      "'Mr. Audu is a 54-year-old male who had an open cholecystectomy 8 hours ago'",
      "'I recommend you come evaluate the patient immediately and order a stat cross-match for 2 units of packed red blood cells'"
    ],
    correctAnswer: 0,
    rationale: "In SBAR handoffs: S (Situation) identifies the caller, patient, and immediate concern; B (Background) provides medical history and recent procedures; A (Assessment) presents current objective vitals, physical findings, and the nurse's clinical interpretation; R (Recommendation) states what the nurse needs the provider to order or do.",
    optionRationales: {
      A: "Correct. Current vitals (BP 82/50, HR 126) and drainage data represent the Assessment (A).",
      B: "Introducing yourself and the patient represents the Situation (S).",
      C: "Explaining the surgical history represents the Background (B).",
      D: "Requesting immediate evaluation and blood products represents the Recommendation (R)."
    },
    clinicalPearl: "SBAR: Situation (What is happening now), Background (Context/history), Assessment (Vitals and findings), Recommendation (What you need done).",
    tags: ["SBAR", "handoff", "communication", "clinical-safety"]
  },
  {
    id: "FON-051",
    course: "Fundamentals of Nursing (FON)",
    topic: "Fluid, Electrolyte & Acid-Base Balance",
    subtopic: "IV Drip Rate Calculation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A healthcare provider prescribes 1,000 mL of 0.9% Normal Saline to be infused over 8 hours. The infusion tubing administration set has a drop factor of 15 drops/mL (gtt/mL). What is the calculated intravenous flow rate in drops per minute (gtt/min)?",
    options: [
      "31 drops/min (rounded to the nearest whole drop)",
      "21 drops/min",
      "42 drops/min",
      "50 drops/min"
    ],
    correctAnswer: 0,
    rationale: "Formula for IV drip rate: (Total Volume in mL × Drop Factor in gtt/mL) / (Time in Hours × 60 minutes). Here: (1,000 mL × 15 gtt/mL) / (8 hours × 60 min) = 15,000 / 480 = 31.25 gtt/min, which rounds to 31 drops/minute.",
    optionRationales: {
      A: "Correct. (1,000 × 15) / 480 = 31.25, rounding to 31 drops/min.",
      B: "21 gtt/min reflects a 12-hour infusion time instead of 8 hours.",
      C: "42 gtt/min reflects a 6-hour infusion calculation error.",
      D: "50 gtt/min is an incorrect mathematical calculation."
    },
    clinicalPearl: "IV Drip Rate Formula: (Volume in mL × Drop Factor) / Time in Minutes. Always round to the nearest whole drop when calculating manual gravity drip rates.",
    tags: ["IV-calculation", "drip-rate", "fluids", "dosage-calculations", "foundations"]
  },
  {
    id: "FON-052",
    course: "Fundamentals of Nursing (FON)",
    topic: "Oxygenation & Airway Management",
    subtopic: "Endotracheal and Tracheal Suctioning Standards",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "When performing open-system endotracheal suctioning on an adult patient with retained secretions, what is the maximum recommended duration for applying continuous suction during catheter withdrawal?",
    options: [
      "10 to 15 seconds",
      "30 to 45 seconds",
      "60 seconds",
      "2 to 3 minutes"
    ],
    correctAnswer: 0,
    rationale: "Suctioning removes oxygen along with tracheobronchial secretions. To prevent critical hypoxia, vagal-induced bradycardia, and mucosal trauma, suction must be applied intermittently/continuously only while rotating and withdrawing the catheter, for a maximum of 10 to 15 seconds. The patient must be hyperoxygenated with 100% O2 before and after each pass.",
    optionRationales: {
      A: "Correct. 10 to 15 seconds is the maximum safe duration of suction application to prevent hypoxia and bradycardia.",
      B: "30 to 45 seconds causes severe hypoxemia, cardiac dysrhythmias, and tissue trauma.",
      C: "60 seconds causes critical cerebral hypoxia and cardiac arrest.",
      D: "Prolonged suctioning causes severe anoxia and airway collapse."
    },
    clinicalPearl: "Suctioning rule: Pre-oxygenate with 100% O2, insert without suction, apply suction only while withdrawing and rotating, and never suction for more than 10–15 seconds.",
    tags: ["suctioning", "airway", "tracheostomy", "oxygenation", "clinical-safety"]
  },
  {
    id: "FON-053",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Environmental Hazards",
    subtopic: "Hospital Fire Safety (RACE Mnemonic)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "A staff nurse discovers a small electrical fire burning in an empty linen closet on the surgical ward. Under the standard hospital fire emergency protocol (RACE), what is the nurse's immediate first priority?",
    options: [
      "Rescue (Remove) any patients or individuals in immediate danger",
      "Activate the fire alarm system and call the operator",
      "Confine (Contain) the fire by closing all doors and windows",
      "Extinguish the fire using a fire extinguisher"
    ],
    correctAnswer: 0,
    rationale: "The fire safety response follows the RACE acronym: R = Rescue anyone in immediate danger; A = Alarm (activate the fire pull station and notify the switchboard); C = Contain/Confine the fire by closing doors and windows; E = Extinguish the fire if small, or Evacuate the area.",
    optionRationales: {
      A: "Correct. 'Rescue' is always the first priority in RACE to remove individuals from imminent harm.",
      B: "Alarming is the second step (A) after rescuing individuals from immediate danger.",
      C: "Confining (closing doors) is the third step (C).",
      D: "Extinguishing is the final step (E), attempted only if safe and trained."
    },
    clinicalPearl: "Fire response = RACE: Rescue patients first, Alarm/Alert the facility, Confine the smoke and fire by closing doors, Extinguish or Evacuate.",
    tags: ["RACE", "fire-safety", "patient-safety", "environmental-hazards"]
  },
  {
    id: "FON-054",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Elimination",
    subtopic: "Catheter-Associated Urinary Tract Infection (CAUTI) Prevention",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which evidence-based nursing practice is essential to prevent Catheter-Associated Urinary Tract Infections (CAUTI) in a client with an indwelling Foley catheter?",
    options: [
      "Maintain a closed drainage system, keep the drainage bag below the level of the bladder at all times, and avoid routine catheter irrigation",
      "Disconnect the drainage bag twice daily to flush the catheter tube with sterile water",
      "Hang the drainage collection bag on the bed side rail above the client's bladder",
      "Change the Foley catheter every 48 hours routinely"
    ],
    correctAnswer: 0,
    rationale: "CAUTI prevention guidelines dictate: 1) Maintain an uninterrupted closed drainage system; 2) Keep the collection bag below the level of the bladder to prevent urine backflow; 3) Secure the catheter tubing to prevent traction and urethral trauma; 4) Perform daily perineal hygiene with soap and water; 5) Avoid routine catheter irrigation unless blocked; 6) Remove the catheter as early as clinically indicated.",
    optionRationales: {
      A: "Correct. Maintaining a closed system and keeping the bag below bladder level prevents retrograde bacterial contamination.",
      B: "Breaking the closed connection introduces environmental bacteria directly into the bladder.",
      C: "Hanging the bag above bladder level causes backflow of contaminated urine into the bladder.",
      D: "Routine replacement every 48 hours causes mucosal trauma; change only when clinically indicated or per manufacturer schedule."
    },
    clinicalPearl: "To prevent CAUTI: Never let the drainage bag touch the floor, never hang it above the bladder, and keep the drainage system closed.",
    tags: ["CAUTI", "catheter-care", "infection-control", "elimination", "urinary-system"]
  },
  {
    id: "FON-055",
    course: "Fundamentals of Nursing (FON)",
    topic: "Fluid, Electrolyte & Acid-Base Balance",
    subtopic: "Hypokalemia Clinical Manifestations",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client who has been receiving high-dose intravenous loop diuretics (Furosemide) presents with generalized muscle weakness, fatigue, hypoactive bowel sounds, and a serum potassium of 2.8 mmol/L (Hypokalemia). What classic electrocardiogram (ECG) changes should the nurse monitor for?",
    options: [
      "Flattened T waves, ST-segment depression, and the appearance of prominent U waves",
      "Tall, peaked, tented T waves with widened QRS complexes",
      "Significant ST-segment elevations in all leads",
      "Shortened PR interval with absent P waves"
    ],
    correctAnswer: 0,
    rationale: "Hypokalemia (<3.5 mmol/L) impairs myocardial repolarization, producing classic ECG changes: flattened or inverted T waves, ST-segment depression, prolonged QT intervals, and prominent U waves (deflections following the T wave). Hyperkalemia, by contrast, causes tall, peaked T waves and widened QRS complexes.",
    optionRationales: {
      A: "Correct. Flattened T waves, ST depression, and prominent U waves are pathognomonic of hypokalemia.",
      B: "Tall, peaked T waves and wide QRS complexes characterize Hyperkalemia.",
      C: "ST-segment elevation indicates acute myocardial injury (infarction), not hypokalemia.",
      D: "Shortened PR with absent P waves is seen in junctional rhythms."
    },
    clinicalPearl: "Hypokalemia = Low, flat T waves and prominent U waves. Hyperkalemia = Tall, peaked T waves and wide QRS.",
    tags: ["hypokalemia", "electrolytes", "ECG", "potassium", "furosemide"]
  },
  {
    id: "FON-056",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Nutrition",
    subtopic: "Enteral Feeding Gastric Residual Volume (GRV)",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "Before administering an intermittent bolus enteral feeding through a nasogastric tube, the nurse aspirates a Gastric Residual Volume (GRV) of 250 mL of partially digested formula. What is the appropriate nursing action?",
    options: [
      "Return the aspirated residual to the stomach to prevent fluid and electrolyte loss, check institutional protocol regarding holding the feeding, and re-assess in 1 hour",
      "Discard all 250 mL of aspirated formula in the sink and increase the infusion rate",
      "Immediately pull out the nasogastric tube and insert a new one in the other nostril",
      "Position the patient in flat Trendelenburg position"
    ],
    correctAnswer: 0,
    rationale: "Current enteral feeding guidelines dictate: 1) Return the aspirate to the stomach unless it is abnormal (e.g., coffee-ground or purulent) to prevent metabolic alkalosis and fluid/electrolyte deficits; 2) Review institutional protocol (typically, feedings are held or adjusted if GRV is >250–500 mL accompanied by abdominal distension or nausea); 3) Elevate the head of the bed to 30–45 degrees and recheck residual in 1 hour.",
    optionRationales: {
      A: "Correct. Return the residual to maintain electrolyte balance, hold/evaluate the feed per protocol, and re-evaluate.",
      B: "Discarding large gastric residuals causes fluid, electrolyte, and nutrient depletion.",
      C: "High residual reflects delayed gastric emptying, not a dislodged tube requiring removal.",
      D: "Trendelenburg positioning causes massive pulmonary aspiration of gastric contents."
    },
    clinicalPearl: "Always return the aspirated gastric residual to prevent electrolyte depletion, keep the head of the bed elevated at 30–45 degrees, and assess for abdominal distension.",
    tags: ["enteral-feeding", "GRV", "gastric-residual", "NG-tube", "nutrition"]
  },
  {
    id: "FON-057",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Physical Hazards",
    subtopic: "Operating Fire Extinguishers (PASS Mnemonic)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When using a portable fire extinguisher to suppress a small trash can fire, what correct operational sequence is guided by the 'PASS' acronym?",
    options: [
      "Pull the pin → Aim at the base of the fire → Squeeze the handle → Sweep from side to side",
      "Push the lever → Air the room → Spray the flames → Stop when empty",
      "Point at the top of the flames → Activate alarm → Squeeze trigger → Shake extinguisher",
      "Pull the hose → Assess damage → Sound horn → Seal doors"
    ],
    correctAnswer: 0,
    rationale: "The standard operational technique for a fire extinguisher is PASS: P = Pull the locking pin; A = Aim low at the base of the fire (where the fuel is); S = Squeeze the operating handle/trigger; S = Sweep the nozzle from side to side across the base of the flames.",
    optionRationales: {
      A: "Correct. Pull pin, Aim at base, Squeeze handle, Sweep side-to-side (PASS).",
      B: "Incorrect sequence that fails to target the fuel base of the fire.",
      C: "Aiming at the top of flames wastes extinguisher agent; you must aim at the base.",
      D: "Does not describe the standard PASS extinguisher sequence."
    },
    clinicalPearl: "PASS: Pull the pin, Aim at the BASE of the fire, Squeeze the handle, Sweep side to side.",
    tags: ["PASS", "fire-extinguisher", "patient-safety", "foundations"]
  },
  {
    id: "FON-058",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Surgical Wound Cleansing Direction",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When cleansing a linear surgical incision closed with sutures during a sterile dressing change, in what direction should the nurse wipe with saline-moistened swabs?",
    options: [
      "From top to bottom along the incision line (least contaminated area to most contaminated), moving outward to the sides using a new swab for each stroke",
      "From the outer surrounding skin inward toward the center of the wound",
      "In rapid circular motions back and forth across the incision line with the same swab",
      "From bottom to top, rubbing vigorously across suture knots"
    ],
    correctAnswer: 0,
    rationale: "Aseptic principles require cleansing from the 'least contaminated area to the most contaminated area' (clean to dirty). The closed surgical incision is considered cleaner than the surrounding skin. The nurse cleans directly down the center of the incision first (top to bottom), and then cleans the outer margins using a new sterile swab for each stroke, moving outward.",
    optionRationales: {
      A: "Correct. Clean from least contaminated (incision line) to most contaminated (periphery), top to bottom, using a fresh swab each time.",
      B: "Moving from periphery inward drags resident skin flora from surrounding skin into the sterile incision.",
      C: "Using the same swab back and forth spreads microorganisms across the incision.",
      D: "Vigorous back-and-forth rubbing disrupts newly forming epithelial bridges."
    },
    clinicalPearl: "Clean from CLEAN to DIRTY. The incision is clean; the surrounding skin is dirty. Clean down the middle first, then wipe the sides outward.",
    tags: ["wound-cleansing", "sterile-technique", "asepsis", "surgical-wound"]
  },
  {
    id: "FON-059",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Elimination",
    subtopic: "Fecal Impaction Digital Removal",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "When performing digital disimpaction of hard stool in a client with severe fecal impaction, why must the nurse monitor the patient's pulse rate and stop immediately if significant bradycardia develops?",
    options: [
      "Vagal nerve stimulation from rectal wall manipulation can trigger a sudden parasympathetic surge, causing acute bradycardia and syncope",
      "Digital disimpaction causes sudden release of adrenaline from the adrenal cortex",
      "Rectal manipulation accelerates heart rate to over 200 beats per minute",
      "Digital removal forces stool back into the small intestine"
    ],
    correctAnswer: 0,
    rationale: "The rectal mucosa is heavily innervated by the parasympathetic nervous system via the pelvic splanchnic and vagus nerves. Digital stimulation of the rectum during disimpaction can trigger a powerful vagal response, resulting in acute bradycardia, hypotension, cardiac dysrhythmias, and syncope. The nurse must obtain baseline vitals, perform the procedure gently, and halt immediately if heart rate plummets.",
    optionRationales: {
      A: "Correct. Vagal stimulation drops the heart rate (bradycardia) and can trigger syncope.",
      B: "Vagal stimulation is parasympathetic (cholinergic), not an adrenal sympathetic catecholamine surge.",
      C: "Vagal nerve activation slows the heart rate (bradycardia), not tachycardia.",
      D: "Digital removal evacuates stool downward through the anal canal, not upward into the ileum."
    },
    clinicalPearl: "Digital stool disimpaction stimulates the Vagus nerve, which can drop heart rate and cause fainting. Monitor the pulse and stop if bradycardia occurs.",
    tags: ["fecal-impaction", "vagal-stimulation", "bradycardia", "elimination", "nursing-safety"]
  },
  {
    id: "FON-060",
    course: "Fundamentals of Nursing (FON)",
    topic: "Fluid, Electrolyte & Acid-Base Balance",
    subtopic: "Intravenous Fluid Overload Assessment",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "An elderly client receiving continuous intravenous Normal Saline at 150 mL/hour develops acute dyspnea, a cough productive of white sputum, bilateral basilar crackles, jugular venous distension, and a blood pressure rise to 170/95 mmHg. What is the nurse's priority action?",
    options: [
      "Slow the IV infusion to a keep-vein-open (KVO) rate, elevate the head of the bed to High-Fowler position, and notify the physician immediately",
      "Increase the IV infusion rate to 300 mL/hr to flush the kidneys",
      "Place the patient in supine Trendelenburg position",
      "Encourage the patient to drink 1 liter of cold tap water"
    ],
    correctAnswer: 0,
    rationale: "The client is manifesting circulatory fluid overload (hypervolemia) and early pulmonary edema (dyspnea, hypertension, crackles, jugular venous distension). The nurse must immediately: 1) Slow the IV infusion to a minimum keep-vein-open (KVO) rate (or stop it); 2) Sit the patient upright in High-Fowler position to facilitate lung expansion and reduce venous return; 3) Administer oxygen if hypoxemic; 4) Notify the physician for diuretic orders (e.g., Furosemide).",
    optionRationales: {
      A: "Correct. Slow the IV rate, sit the patient upright in High-Fowler, and notify the provider for diuretics.",
      B: "Increasing IV fluids accelerates lethal pulmonary edema and respiratory failure.",
      C: "Trendelenburg position increases venous return, overloading the failing left ventricle.",
      D: "Oral fluids worsen systemic hypervolemia and pulmonary capillary congestion."
    },
    clinicalPearl: "Signs of IV fluid overload: Crackles, dyspnea, high BP, and neck vein distension. Action: Slow the IV to KVO, sit the patient up in High-Fowler, and call the doctor.",
    tags: ["fluid-overload", "hypervolemia", "pulmonary-edema", "IV-therapy", "nursing-priority"]
  },
  {
    id: "FON-061",
    course: "Fundamentals of Nursing (FON)",
    topic: "Medication Administration & Safety",
    subtopic: "Intravenous Potassium Administration Safety",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A prescription reads: 'Potassium Chloride (KCl) 20 mEq IV stat for severe hypokalemia.' What fundamental safety rule governs intravenous potassium chloride administration?",
    options: [
      "Potassium chloride must NEVER be administered by direct IV push or bolus; it must always be diluted in IV fluids and infused slowly via an infusion pump (max 10–20 mEq/hr)",
      "Potassium chloride should be administered as a rapid 1-minute IV push to prevent heart block",
      "Potassium chloride is mixed only in pure sterile water without dilution",
      "Potassium chloride is administered intramuscularly into the deltoid"
    ],
    correctAnswer: 0,
    rationale: "Intravenous Potassium Chloride (KCl) administered by direct IV push or rapid bolus causes sudden massive hyperkalemia, depolarizing cardiac myocytes and triggering instant, fatal cardiac arrest (asystole or ventricular fibrillation). KCl must always be diluted in compatible IV fluids (e.g., 20 mEq in 1,000 mL or 100 mL piggyback), infused via an electronic pump, and never exceed 10 to 20 mEq per hour with continuous cardiac monitoring.",
    optionRationales: {
      A: "Correct. KCl must NEVER be given IV push; it must be diluted and infused slowly via pump (max 10–20 mEq/hr).",
      B: "Direct IV push potassium is used for lethal injection; it causes instant cardiac arrest.",
      C: "Pure sterile water causes massive red blood cell lysis (hemolysis).",
      D: "Potassium is extremely irritating and causes severe tissue necrosis if given intramuscularly."
    },
    clinicalPearl: "NEVER GIVE POTASSIUM IV PUSH! Potassium chloride must always be diluted and infused slowly on an IV pump.",
    tags: ["potassium", "IV-safety", "high-alert-medication", "cardiac-arrest-prevention"]
  },
  {
    id: "FON-062",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Physical Hazards",
    subtopic: "Physical Restraints Monitoring Protocol",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A violent, disoriented patient has bilateral soft wrist restraints applied to prevent dislodging a femoral dialysis catheter. According to patient safety and restraint monitoring standards, how frequently must the nurse release the restraints to assess skin integrity, pulse, and range of motion?",
    options: [
      "Every 2 hours",
      "Once every 24 hours during morning rounds",
      "Every 8 hours at shift change",
      "Only after the patient is discharged home"
    ],
    correctAnswer: 0,
    rationale: "Hospital safety standards mandate that physical restraints must be released at least every 2 hours (one limb at a time) to assess skin integrity, perform neurovascular checks (capillary refill, pulse, warmth, sensation), provide range-of-motion exercises, and offer toileting and fluids. Vital signs and safety checks are performed every 15 to 30 minutes.",
    optionRationales: {
      A: "Correct. Restraints must be removed at least every 2 hours for skin assessment, neurovascular checks, and joint range of motion.",
      B: "24 hours without release causes nerve palsy, skin breakdown, and circulatory compromise.",
      C: "8-hour intervals are dangerously long, predisposing to pressure necrosis and deep vein thrombosis.",
      D: "Failing to release restraints throughout admission constitutes gross patient neglect."
    },
    clinicalPearl: "Restraint safety: Check the patient every 15–30 minutes; remove restraints and check skin and pulses every 2 hours.",
    tags: ["restraints", "patient-safety", "neurovascular-checks", "monitoring-standards"]
  },
  {
    id: "FON-063",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Hygiene",
    subtopic: "Shaving the Male Patient (Anticoagulant Precautions)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When assisting a male client who is receiving therapeutic anticoagulant therapy (Warfarin / Heparin) with facial hygiene and shaving, which equipment should the nurse use?",
    options: [
      "An electric razor",
      "A sharp straight safety razor with a fresh disposable blade",
      "A straight barber's open razor blade",
      "Depilatory chemical cream applied for 2 hours"
    ],
    correctAnswer: 0,
    rationale: "Clients receiving anticoagulants or with thrombocytopenia (low platelet counts) are at high risk for prolonged cutaneous bleeding and hematoma formation from minor cuts. An electric razor should be used instead of a traditional straight or safety razor blade to eliminate the risk of accidental skin nicks and bleeding.",
    optionRationales: {
      A: "Correct. An electric razor prevents accidental skin nicks and bleeding in anticoagulated patients.",
      B: "Safety razor blades can nick the skin, causing persistent bleeding in anticoagulated patients.",
      C: "Straight razor blades carry a high risk of facial lacerations.",
      D: "Chemical depilatory creams cause severe skin irritation and chemical burns if left for hours."
    },
    clinicalPearl: "Bleeding precautions (low platelets or blood thinners): Use an electric razor for shaving and a soft-bristle toothbrush for oral care.",
    tags: ["bleeding-precautions", "anticoagulants", "hygiene", "shaving", "safety"]
  },
  {
    id: "FON-064",
    course: "Fundamentals of Nursing (FON)",
    topic: "Oxygenation & Airway Management",
    subtopic: "Tracheostomy Cuff Pressure Monitoring",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "What is the recommended safe cuff pressure range maintained in a cuffed tracheostomy tube to prevent both tracheal wall mucosal necrosis and aspiration?",
    options: [
      "20 to 25 cm H2O (or 15 to 20 mmHg)",
      "40 to 60 cm H2O",
      "5 to 10 cm H2O",
      "80 to 100 cm H2O"
    ],
    correctAnswer: 0,
    rationale: "Tracheostomy and endotracheal tube cuff pressure must be maintained between 20 and 25 cm H2O (equivalent to 15–20 mmHg). Pressure >25–30 cm H2O exceeds tracheal capillary perfusion pressure, causing mucosal ischemia, ulceration, and tracheal stenosis. Pressure <20 cm H2O allows aspiration of oral secretions and ventilator air leaks.",
    optionRationales: {
      A: "Correct. 20 to 25 cm H2O preserves capillary blood flow while sealing the airway.",
      B: "40 to 60 cm H2O exceeds capillary perfusion pressure, causing tracheal wall necrosis and fistula formation.",
      C: "5 to 10 cm H2O is too low to maintain an air seal, risking aspiration and hypoventilation.",
      D: "80 to 100 cm H2O causes rapid necrosis and tracheoesophageal fistula."
    },
    clinicalPearl: "Tracheostomy cuff pressure: 20 to 25 cm H2O (15–20 mmHg). Check it with a handheld manometer every shift.",
    tags: ["tracheostomy", "cuff-pressure", "airway-safety", "tracheal-necrosis"]
  },
  {
    id: "FON-065",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Surgical Wound Debridement Types",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A chronic pressure ulcer is dressed with an occlusive hydrocolloid dressing, allowing the body's own endogenous proteolytic enzymes and macrophages to slowly liquefy and digest necrotic tissue. What form of debridement is taking place?",
    options: [
      "Autolytic debridement",
      "Sharp (surgical) debridement",
      "Mechanical debridement (wet-to-dry)",
      "Enzymatic (chemical) debridement"
    ],
    correctAnswer: 0,
    rationale: "Autolytic debridement uses the body's own natural enzymes (proteases, collagenases) and phagocytic cells to liquefy necrotic tissue. It is promoted by moisture-retentive dressings (hydrocolloids, hydrogels, transparent films) that trap wound fluid against the slough. Mechanical debridement uses physical force (wet-to-dry dressings); enzymatic debridement uses topical exogenous chemical ointments (collagenase); sharp debridement uses scalpels.",
    optionRationales: {
      A: "Correct. Autolytic debridement uses endogenous enzymes under moisture-retentive dressings to digest necrotic tissue.",
      B: "Sharp debridement uses sterile scalpels, scissors, or curettes to excise eschar.",
      C: "Mechanical debridement uses physical wet-to-dry dressing tears or wound irrigation.",
      D: "Enzymatic debridement applies commercial topical enzyme ointments (e.g., Santyl)."
    },
    clinicalPearl: "Autolytic debridement is the body digesting its own necrotic tissue using its own enzymes under a moisture-retentive dressing.",
    tags: ["wound-care", "debridement", "autolytic", "hydrocolloid", "tissue-repair"]
  },
  {
    id: "FON-066",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Nutrition",
    subtopic: "Total Parenteral Nutrition (TPN) Complications",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client receiving a continuous infusion of central Total Parenteral Nutrition (TPN) has the infusion bag run dry before the replacement bag arrives from the pharmacy. To prevent rebound hypoglycemia, what solution should the nurse hang while awaiting the new TPN bag?",
    options: [
      "10% Dextrose in Water (D10W) at the same infusion rate",
      "0.9% Normal Saline at 500 mL/hr",
      "Sterile water for injection bolus",
      "5% Sodium Bicarbonate infusion"
    ],
    correctAnswer: 0,
    rationale: "TPN contains high glucose concentrations (20% to 50% dextrose), stimulating pancreatic beta cells to produce high baseline insulin levels. If TPN is abruptly stopped, circulating insulin remains high while glucose supply stops, precipitating severe Rebound Hypoglycemia. The nurse must infuse 10% Dextrose in Water (D10W) at the same rate to maintain blood glucose until the new TPN bag arrives.",
    optionRationales: {
      A: "Correct. Infusing 10% Dextrose in Water (D10W) prevents abrupt rebound hypoglycemia when TPN is temporarily unavailable.",
      B: "Normal saline contains zero glucose and will not prevent profound hypoglycemic coma.",
      C: "Sterile water without electrolytes causes red blood cell hemolysis.",
      D: "Sodium bicarbonate is an alkalinizing agent, not a carbohydrate replacement."
    },
    clinicalPearl: "If your TPN bag runs out before the new one arrives: Hang 10% Dextrose in Water (D10W) immediately to prevent rebound hypoglycemia.",
    tags: ["TPN", "rebound-hypoglycemia", "parenteral-nutrition", "dextrose", "nursing-priority"]
  },
  {
    id: "FON-067",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Mobility",
    subtopic: "Logrolling Spinal Trauma Patients",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When repositioning a patient with a confirmed lumbar spinal fusion or spinal trauma, what technique must the nursing team employ to prevent rotational twisting of the spine?",
    options: [
      "Logrolling with at least three to four caregivers moving the head, shoulders, and hips simultaneously as a single unit",
      "Having the patient pull on the overhead trapeze bar while twisting the pelvis",
      "Allowing the patient to roll independently onto the side",
      "Rolling the shoulders first and then moving the hips 5 minutes later"
    ],
    correctAnswer: 0,
    rationale: "Logrolling maintains straight anatomical alignment of the entire vertebral column. A team of 3 to 4 staff members coordinates the turn: one maintains in-line head/neck stabilization, two control the torso and hips, and one manages the legs. The patient is rolled as a single rigid unit (like a wooden log) without spinal twisting or lateral flexion.",
    optionRationales: {
      A: "Correct. Logrolling with multiple caregivers turns the body as a single rigid unit without spinal twisting.",
      B: "Using an overhead trapeze bar twists and strains the lumbar spine, disrupting fusion hardware.",
      C: "Independent rolling allows spinal rotation and flexion, risking cord compression.",
      D: "Rolling shoulders separately from hips twists the vertebral column."
    },
    clinicalPearl: "Logrolling = Spine stays straight like a wooden log. The head, chest, and hips must rotate at the EXACT same time.",
    tags: ["logrolling", "spinal-precautions", "mobility", "orthopedic-nursing", "positioning"]
  },
  {
    id: "FON-068",
    course: "Fundamentals of Nursing (FON)",
    topic: "Vital Signs & Clinical Monitoring",
    subtopic: "Assessing Apical Pulse (PMI Landmark)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Where is the Point of Maximal Impulse (PMI) anatomically located for auscultating an adult client's Apical Pulse with a stethoscope?",
    options: [
      "Fifth intercostal space at the left midclavicular line",
      "Second intercostal space at the right sternal border",
      "Fourth intercostal space at the left sternal border",
      "Second intercostal space at the left sternal border"
    ],
    correctAnswer: 0,
    rationale: "The Point of Maximal Impulse (PMI), corresponding to the apex of the left ventricle and the mitral valve area, is located at the 5th intercostal space (ICS) in the left midclavicular line (MCL). This is the standard landmark for counting the apical pulse for 60 seconds prior to administering cardiac glycosides (e.g., Digoxin).",
    optionRationales: {
      A: "Correct. 5th intercostal space, left midclavicular line is the anatomical landmark for the apical pulse/PMI.",
      B: "2nd ICS right sternal border is the aortic valve area.",
      C: "4th ICS left sternal border is the tricuspid valve area.",
      D: "2nd ICS left sternal border is the pulmonic valve area."
    },
    clinicalPearl: "Apical pulse landmark: 5th Intercostal Space, Left Midclavicular Line (Apex of the heart). Always listen for a full 60 seconds before giving Digoxin.",
    tags: ["apical-pulse", "PMI", "vital-signs", "cardiac-assessment", "auscultation"]
  },
  {
    id: "FON-069",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Elimination",
    subtopic: "Administering Retention Enemas",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client with chronic constipation is prescribed an Oil-Retention Enema. What instruction should the nurse provide to ensure the enema achieves its therapeutic effect?",
    options: [
      "Instruct the client to retain the mineral oil solution for at least 30 to 60 minutes (or several hours) to soften the stool",
      "Instruct the client to expel the oil immediately within 30 seconds",
      "Instruct the client to run around the ward to stimulate peristalsis",
      "Instruct the client to drink the enema solution orally"
    ],
    correctAnswer: 0,
    rationale: "An oil-retention enema introduces 100 to 200 mL of mineral or vegetable oil into the rectum. Unlike cleansing enemas that stimulate rapid defecation, oil-retention enemas work by lubricating and softening hard, impacted fecal matter. The patient must be instructed to retain the oil for at least 30 to 60 minutes (and ideally 1–3 hours) before defecating.",
    optionRationales: {
      A: "Correct. Retaining the oil for at least 30 to 60 minutes allows the oil to soften and lubricate hard stool.",
      B: "Expelling immediately prevents the oil from penetrating and softening the fecal mass.",
      C: "Ambulation can cause premature evacuation before the stool is lubricated.",
      D: "Enema solutions are instilled rectally, never administered orally."
    },
    clinicalPearl: "Oil-retention enema: Small volume (100–200 mL), instilled at body temperature, and retained for at least 30–60 minutes to soften the stool.",
    tags: ["enema", "oil-retention", "constipation", "elimination", "procedures"]
  },
  {
    id: "FON-070",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Signs of Wound Infection (Surgical Site Infection)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "On postoperative day 4 following an appendectomy, which combination of clinical findings indicates a surgical site wound infection (SSI)?",
    options: [
      "Purulent drainage, localized warmth, expanding erythema, edema, and foul odor",
      "Small amounts of clear serous drainage on a clean dry dressing",
      "A hairline scar that is pale pink and flat without pain",
      "A dry incision line with crusting and normal body temperature"
    ],
    correctAnswer: 0,
    rationale: "Classic cardinal signs of local surgical site infection (SSI) include: Purulent (pus) drainage, expanding erythema (redness) around the wound edges, localized warmth, induration/edema, foul odor, worsening pain, and systemic fever (>38°C) with leukocytosis.",
    optionRationales: {
      A: "Correct. Purulent exudate, heat, spreading redness, swelling, and odor indicate wound infection.",
      B: "Small amounts of serous drainage are normal in early healing incisions.",
      C: "A pale, flat, non-tender scar reflects clean primary intention healing.",
      D: "Dry, crusted, non-erythematous incisions represent healing tissue without active infection."
    },
    clinicalPearl: "Signs of wound infection: Redness, heat, swelling, worsening pain, and PURULENT (pus) drainage. Obtain a wound swab for culture before starting antibiotics.",
    tags: ["SSI", "wound-infection", "purulent-drainage", "surgical-care", "asepsis"]
  },
  {
    id: "FON-071",
    course: "Fundamentals of Nursing (FON)",
    topic: "Fluid, Electrolyte & Acid-Base Balance",
    subtopic: "Hyperkalemia Emergency Management",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client with acute renal failure has a critically elevated serum potassium level of 6.8 mmol/L with tall, peaked T waves on the cardiac monitor. What is the immediate first drug administered to stabilize the cardiac membrane and prevent fatal dysrhythmias?",
    options: [
      "Intravenous Calcium Gluconate (or Calcium Chloride)",
      "Oral Sodium Polystyrene Sulfonate (Kayexalate)",
      "Intravenous Regular Insulin with Dextrose",
      "Intravenous Furosemide bolus"
    ],
    correctAnswer: 0,
    rationale: "In severe hyperkalemia (>6.5 mmol/L) with ECG changes, the immediate priority is protecting the heart. Intravenous Calcium Gluconate (10 mL of 10% solution over 2–5 minutes) does not lower serum potassium, but antagonizes the cardiotoxic effects of hyperkalemia on cardiac cell membranes within 1 to 3 minutes, preventing ventricular fibrillation. Insulin/dextrose and Kayexalate are given subsequently to shift and eliminate potassium.",
    optionRationales: {
      A: "Correct. Calcium gluconate acts within minutes to stabilize the cardiac myocyte membrane against fatal arrhythmias.",
      B: "Kayexalate eliminates potassium through the bowel, but takes hours to days to lower levels.",
      C: "Insulin and dextrose shift potassium into cells, but take 15–30 minutes to work; calcium acts immediately.",
      D: "Loop diuretics eliminate potassium via urine, but fail in anuric acute renal failure."
    },
    clinicalPearl: "Hyperkalemia with tall peaked T-waves: Give CALCIUM GLUCONATE first to protect the heart. Then give Insulin + Dextrose to push potassium into the cells.",
    tags: ["hyperkalemia", "calcium-gluconate", "peaked-T-waves", "cardiac-protection", "electrolytes"]
  },
  {
    id: "FON-072",
    course: "Fundamentals of Nursing (FON)",
    topic: "Oxygenation & Airway Management",
    subtopic: "Incentive Spirometry Client Education",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When teaching a postoperative abdominal surgery patient how to use an Incentive Spirometer to prevent atelectasis and pneumonia, what instruction is correct?",
    options: [
      "Inhale slowly and deeply through the mouthpiece to raise the indicator balls, hold the breath for 3 to 5 seconds at peak inhalation, then exhale normally",
      "Blow out forcefully and rapidly through the mouthpiece like blowing out a candle",
      "Use the device only once a day before going to sleep",
      "Exhale forcefully into the device until dizzy"
    ],
    correctAnswer: 0,
    rationale: "Incentive spirometry encourages sustained maximal inspiration (SMI) to expand collapsed alveoli. Technique: 1) Sit upright; 2) Exhale normally; 3) Seal lips tightly around the mouthpiece; 4) Inhale slowly and deeply (raising the piston/balls); 5) Hold breath for 3 to 5 seconds at full inspiration; 6) Exhale passively; 7) Repeat 10 times every hour while awake.",
    optionRationales: {
      A: "Correct. Inhale slowly and deeply, hold for 3–5 seconds, and repeat 10 times per hour.",
      B: "Blowing out forcefully describes a peak flow meter (for asthma), not an incentive spirometer.",
      C: "Using it once a day is ineffective; it must be used 10 times every hour while awake.",
      D: "Exhaling into the spirometer does not open collapsed alveoli."
    },
    clinicalPearl: "Incentive spirometer = INHALE, don't exhale! Suck in slowly and hold for 3–5 seconds to pop open collapsed alveoli.",
    tags: ["incentive-spirometry", "atelectasis-prevention", "post-op-care", "oxygenation"]
  },
  {
    id: "FON-073",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Mobility",
    subtopic: "Transferring Hemiplegic Patients",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "A nurse is assisting a stroke patient with left-sided hemiplegia to transfer from the bed into a wheelchair. Where should the wheelchair be positioned relative to the bed?",
    options: [
      "At a 45-degree angle to the bed on the patient's strong, unaffected (right) side",
      "At a 90-degree angle facing the patient's weak, paralyzed (left) side",
      "Directly behind the head of the bed out of the patient's view",
      "10 feet away across the room"
    ],
    correctAnswer: 0,
    rationale: "When transferring a patient with unilateral weakness (hemiplegia), position the chair or wheelchair at a 45-degree angle to the bed on the patient's STRONG (unaffected) side. This allows the patient to pivot and bear weight on the functional leg and use the functional arm to grip the chair armrest.",
    optionRationales: {
      A: "Correct. Position the wheelchair on the patient's strong/unaffected side to allow weight-bearing and pivot.",
      B: "Placing the chair on the paralyzed side forces the patient to pivot on a non-functional limb, causing falls.",
      C: "Placing the chair behind the bed prevents a pivot transfer.",
      D: "Positioning the chair across the room requires unsupported ambulation."
    },
    clinicalPearl: "Transferring a stroke patient: Lead with the STRONG side. Place the wheelchair on the patient's good side so they can bear weight and grab the armrest.",
    tags: ["transfers", "hemiplegia", "stroke-rehabilitation", "patient-safety", "mobility"]
  },
  {
    id: "FON-074",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Elimination",
    subtopic: "Measuring Urine Specific Gravity",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client with severe dehydration from protracted vomiting has a urinalysis. What finding for Urine Specific Gravity should the nurse expect?",
    options: [
      "Elevated specific gravity above 1.030",
      "Low specific gravity below 1.005",
      "Fixed specific gravity of 1.010",
      "Specific gravity of 0.900"
    ],
    correctAnswer: 0,
    rationale: "Normal urine specific gravity ranges from 1.005 to 1.030. In dehydration, the kidneys reabsorb water under high antidiuretic hormone (ADH) drive, producing concentrated urine with high solute density (specific gravity > 1.030). A low specific gravity (<1.005) indicates dilute urine, seen in diabetes insipidus or fluid volume excess.",
    optionRationales: {
      A: "Correct. Concentrated urine in dehydration has an elevated specific gravity (>1.030).",
      B: "Low specific gravity (<1.005) indicates dilute urine, seen in fluid overload or diabetes insipidus.",
      C: "Fixed specific gravity of 1.010 indicates renal tubular inability to concentrate or dilute urine (isosthenuria).",
      D: "Specific gravity cannot drop below the density of pure water (1.000)."
    },
    clinicalPearl: "Urine Specific Gravity: Normal is 1.005–1.030. High (>1.030) = Dehydration (concentrated). Low (<1.005) = Fluid overload or Diabetes Insipidus (dilute).",
    tags: ["specific-gravity", "urinalysis", "dehydration", "renal-assessment", "elimination"]
  },
  {
    id: "FON-075",
    course: "Fundamentals of Nursing (FON)",
    topic: "Fluid, Electrolyte & Acid-Base Balance",
    subtopic: "Assessing Chvostek's and Trousseau's Signs",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client who underwent a subtotal thyroidectomy 24 hours ago develops neuromuscular irritability. Tapping the client's facial nerve anterior to the earlobe elicits an involuntary twitch of the facial muscles on the same side (Chvostek's sign). What electrolyte imbalance is indicated?",
    options: [
      "Hypocalcemia",
      "Hypernatremia",
      "Hypophosphatemia",
      "Hypermagnesemia"
    ],
    correctAnswer: 0,
    rationale: "Accidental surgical excision or devascularization of the parathyroid glands during thyroidectomy triggers acute Hypocalcemia (<2.2 mmol/L or <8.5 mg/dL). Signs of neuromuscular excitability include: 1) Chvostek's sign (facial spasm when tapping the facial nerve in front of the tragus), and 2) Trousseau's sign (carpal spasm induced by inflating a BP cuff above systolic pressure for 3 minutes).",
    optionRationales: {
      A: "Correct. Positive Chvostek's sign indicates neuromuscular irritability from Hypocalcemia.",
      B: "Hypernatremia causes thirst, restlessness, and dry mucous membranes, not focal facial tetany.",
      C: "Hypophosphatemia causes muscle weakness and rhabdomyolysis.",
      D: "Hypermagnesemia depresses neuromuscular function, causing loss of deep tendon reflexes."
    },
    clinicalPearl: "Tapping the cheek produces facial twitching = Chvostek's sign. Inflating a BP cuff causes carpal spasm = Trousseau's sign. Both indicate HYPOCALCEMIA.",
    tags: ["hypocalcemia", "Chvosteks-sign", "Trousseaus-sign", "thyroidectomy", "electrolytes"]
  },
  {
    id: "FON-076",
    course: "Fundamentals of Nursing (FON)",
    topic: "Medication Administration & Safety",
    subtopic: "Enteral Feeding Tube Medication Administration",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "When administering multiple oral medications through a nasogastric or gastrostomy feeding tube, what practice prevents tube clogging and drug interactions?",
    options: [
      "Crush each approved tablet separately, dissolve each in warm water, flush the tube with 15–30 mL of water before and after, and flush with 5–10 mL between individual medications",
      "Crush all medications together in one cup, mix with enteral formula, and pour into the tube",
      "Crush enteric-coated and sustained-release capsules together",
      "Never flush the tube with water to avoid fluid overload"
    ],
    correctAnswer: 0,
    rationale: "Tube medication administration rules: 1) Verify tube placement; 2) Never crush enteric-coated (EC) or sustained-release (SR/XL) medications; 3) Crush each tablet separately and dissolve in 15–30 mL warm water; 4) Flush tube with 15–30 mL water before and after administration, and flush with 5–10 mL between individual drugs; 5) Never mix medications directly into tube feeding formula.",
    optionRationales: {
      A: "Correct. Administer each medication separately, flushing with water before, between, and after.",
      B: "Mixing medications together can cause chemical precipitation and tube occlusion.",
      C: "Crushing enteric-coated or extended-release drugs causes immediate toxic drug dumping.",
      D: "Failing to flush causes formula and drug clumping, resulting in permanent tube blockage."
    },
    clinicalPearl: "Tube medication rules: Flush before, flush between, flush after. Never crush Enteric-Coated (EC) or Extended-Release (ER/XL) pills.",
    tags: ["enteral-medications", "NG-tube", "flushing", "pharmacology-safety"]
  },
  {
    id: "FON-077",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Wound Bed Tissue Types (RYB Color Code)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the Red-Yellow-Black (RYB) wound classification system, how should the nurse manage a chronic pressure ulcer bed that is predominantly covered with yellow slough?",
    options: [
      "Cleanse and debride the yellow slough (using irrigation, autolytic, or enzymatic dressings) to expose healthy underlying tissue",
      "Leave the yellow slough untouched to protect the wound",
      "Apply dry powder and seal with duct tape",
      "Surgically cauterize all yellow tissue with silver nitrate daily"
    ],
    correctAnswer: 0,
    rationale: "The RYB Wound Classification: 1) Red (protect): healthy granulation tissue, keep moist and protected; 2) Yellow (cleanse/debride): slough and non-viable cellular debris, cleanse and debride to allow granulation; 3) Black (debride): necrotic eschar, requires debridement before the wound can heal (except stable dry heel eschar).",
    optionRationales: {
      A: "Correct. Yellow indicates slough, which must be cleansed and debrided to allow granulation.",
      B: "Leaving slough in place delays healing and provides a culture medium for bacteria.",
      C: "Dry powders dehydrate the wound and duct tape is non-medical.",
      D: "Silver nitrate is used for hypergranulation, not routine slough debridement."
    },
    clinicalPearl: "RYB Wound Code: RED = Protect (healthy granulation). YELLOW = Cleanse (slough). BLACK = Debride (necrotic eschar).",
    tags: ["wound-care", "RYB-code", "slough", "debridement", "tissue-types"]
  },
  {
    id: "FON-078",
    course: "Fundamentals of Nursing (FON)",
    topic: "Oxygenation & Airway Management",
    subtopic: "Venturi Mask Precision Delivery",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why is a Venturi Mask the oxygen delivery device of choice for a client with chronic obstructive pulmonary disease (COPD) experiencing an acute exacerbation?",
    options: [
      "It delivers a precise, fixed, and reliable fraction of inspired oxygen (FiO2) regardless of the client's breathing pattern",
      "It delivers 100% pure oxygen at all times",
      "It acts as a mechanical CPAP ventilator",
      "It humidifies air without requiring oxygen tubing"
    ],
    correctAnswer: 0,
    rationale: "A Venturi mask uses color-coded entrainment adapters with calibrated orifices to entrain room air with oxygen, delivering a precise, consistent FiO2 (from 24% to 50%) regardless of the patient's respiratory rate or depth. This is vital for COPD patients who rely on hypoxic drive, where uncontrolled high oxygen levels can suppress ventilation and cause CO2 narcosis.",
    optionRationales: {
      A: "Correct. The Venturi mask provides precise, fixed concentrations of oxygen (24–50%), preventing CO2 narcosis.",
      B: "Non-rebreather masks deliver high concentrations (~90–100%), not Venturi masks.",
      C: "A Venturi mask is an oxygen entrainment mask, not a positive-pressure CPAP machine.",
      D: "Oxygen supply tubing is required to power the entrainment jet."
    },
    clinicalPearl: "Venturi mask = PRECISE oxygen delivery. It is the best mask for COPD patients because it delivers an exact, fixed FiO2.",
    tags: ["Venturi-mask", "COPD", "oxygen-therapy", "FiO2", "hypoxic-drive"]
  },
  {
    id: "FON-079",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Hygiene",
    subtopic: "Eye Care for Clients Lacking Blink Reflex",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "An unconscious ICU client lacks a corneal blink reflex. What nursing intervention prevents corneal drying, ulceration, and blindness?",
    options: [
      "Instilling prescribed methylcellulose lubricating artificial tears or ophthalmic ointment and gently taping the eyelids closed",
      "Leaving the eyes open to dry in the room air",
      "Wiping the corneas with dry cotton gauze every hour",
      "Irrigating the open eyes with 70% alcohol"
    ],
    correctAnswer: 0,
    rationale: "Patients in coma or receiving paralytic agents lose the protective corneal blink reflex. Without tears and blinking, the cornea dries out within hours, leading to exposure keratopathy, corneal abrasions, and permanent scarring. The nurse must instill prescribed lubricating drops/ointment every 2 to 4 hours and tape the eyelids closed in a natural anatomical position.",
    optionRationales: {
      A: "Correct. Instilling lubricating eye drops/ointment and taping eyelids closed prevents exposure keratopathy.",
      B: "Leaving eyes open leads to corneal drying, ulceration, and blindness.",
      C: "Wiping bare corneas with dry cotton causes severe mechanical abrasions.",
      D: "Alcohol on the cornea causes chemical burns and blindness."
    },
    clinicalPearl: "No blink reflex? Lubricate with artificial tears and tape the eyelids closed horizontally to protect the cornea.",
    tags: ["corneal-care", "eye-care", "unconscious-patient", "hygiene", "nursing-intervention"]
  },
  {
    id: "FON-080",
    course: "Fundamentals of Nursing (FON)",
    topic: "Fluid, Electrolyte & Acid-Base Balance",
    subtopic: "Intravenous Infiltration vs Phlebitis",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "During a routine shift assessment of a peripheral IV site, the nurse notes that the insertion site is pale, swollen, cool to the touch, and the IV fluid is running sluggishly. What complication has occurred, and what is the nurse's first action?",
    options: [
      "Infiltration; Stop the infusion immediately, remove the catheter, and elevate the extremity",
      "Phlebitis; Apply ice packs and increase the IV flow rate",
      "Air embolism; Place the patient in High-Fowler position",
      "Normal IV functioning; Tape the catheter more securely"
    ],
    correctAnswer: 0,
    rationale: "Infiltration occurs when an IV catheter dislodges from the vein, infusing non-vesicant fluid into subcutaneous tissue. Hallmark signs: skin is pale, blanched, cool to touch, and edematous. Action: Stop infusion immediately, remove the IV catheter, elevate the limb, and apply a compress. Phlebitis, by contrast, presents with erythema, warmth, pain, and a palpable cord along the vein.",
    optionRationales: {
      A: "Correct. Pale, cool, swollen skin indicates Infiltration; stop the infusion and remove the IV immediately.",
      B: "Phlebitis presents with warmth, erythema, and a palpable cord (not cool, pale skin).",
      C: "Air embolism causes sudden dyspnea, cyanosis, and hypotension, not localized pale edema.",
      D: "A cool, swollen site is abnormal and must not be left running."
    },
    clinicalPearl: "IV Infiltration = Cool, pale, and swollen. IV Phlebitis = Warm, red, and tender. In both cases: STOP the infusion and pull the IV.",
    tags: ["IV-complications", "infiltration", "phlebitis", "IV-therapy", "nursing-action"]
  },
  {
    id: "FON-081",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Mobility",
    subtopic: "Deep Vein Thrombosis (DVT) Prevention",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which non-pharmacological nursing intervention reduces venous stasis and prevents Deep Vein Thrombosis (DVT) in an immobilized postoperative client?",
    options: [
      "Applying Sequential Compression Devices (SCDs) / graduated compression stockings and encouraging active ankle-pumping exercises",
      "Massaging the patient's calves vigorously with lotion every 2 hours",
      "Placing pillows directly behind the patient's knees",
      "Keeping the patient completely immobile without leg movement for 2 weeks"
    ],
    correctAnswer: 0,
    rationale: "DVT prevention focuses on reducing venous stasis: applying Sequential Compression Devices (SCDs), graduated compression stockings (TED hose), encouraging active/passive ankle pumps and leg exercises, and early ambulation. Massaging calves is strictly contraindicated because it can dislodge an existing clot into a fatal pulmonary embolism. Placing pillows under knees flexes the popliteal vein, worsening stasis.",
    optionRationales: {
      A: "Correct. SCDs, compression stockings, and ankle pumps promote venous return and prevent DVT.",
      B: "Massaging calves can dislodge an occult thrombus into the pulmonary artery, causing a fatal pulmonary embolism.",
      C: "Pillows behind knees compress the popliteal vein, increasing venous stasis and clot formation.",
      D: "Immobility promotes Virchow's triad of venous stasis, accelerating thrombosis."
    },
    clinicalPearl: "NEVER massage a patient's calves. If a clot is forming, rubbing can dislodge it into a fatal Pulmonary Embolism.",
    tags: ["DVT-prevention", "SCDs", "venous-thromboembolism", "post-op-care", "mobility"]
  },
  {
    id: "FON-082",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Elimination",
    subtopic: "24-Hour Urine Collection Protocol",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When initiating a 24-hour urine collection for creatinine clearance, what instruction must the nurse follow regarding the very first voiding of the collection period?",
    options: [
      "Have the client void at the start time (e.g., 07:00), discard this first specimen completely, and collect all subsequent urine for the next 24 hours including the final void at 07:00 the next day",
      "Collect the first voiding and stop the test after 12 hours",
      "Discard all urine collected during the daytime and keep only nighttime voids",
      "Save only the first 50 mL of each voiding throughout the day"
    ],
    correctAnswer: 0,
    rationale: "Starting a 24-hour urine collection: 1) Instruct the client to void at the start time (e.g., 07:00) and DISCARD this first urine (the bladder was holding urine formed before the test began); 2) Collect all urine passed over the next 24 hours in a refrigerated or preserved container; 3) Exactly 24 hours later (07:00 the next morning), instruct the client to void a final time and ADD this specimen to the container.",
    optionRationales: {
      A: "Correct. Discard the first void at start time, collect all urine for 24 hours, and include the final void at the 24-hour mark.",
      B: "Stopping after 12 hours produces an incomplete timed collection, invalidating results.",
      C: "All urine during the 24-hour window must be collected.",
      D: "Splitting voids invalidates volumetric and chemical clearance calculations."
    },
    clinicalPearl: "24-hour urine collection: At 07:00, PEE AND FLUSH (start with an empty bladder). At 07:00 the next morning, PEE AND SAVE.",
    tags: ["24-hour-urine", "creatinine-clearance", "specimen-collection", "elimination"]
  },
  {
    id: "FON-083",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Wound Dehiscence Prevention (Splinting)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What postoperative coughing instruction should the nurse teach an obese client with a large midline abdominal incision to reduce intra-abdominal tension and prevent wound dehiscence?",
    options: [
      "Hold a folded bath blanket or pillow firmly against the incision (splinting) while taking a deep breath and coughing",
      "Cough forcefully while standing completely upright with arms raised",
      "Hold the breath and strain down forcefully without coughing",
      "Lie flat on the back with arms locked behind the head"
    ],
    correctAnswer: 0,
    rationale: "Splinting an abdominal incision involves holding a folded blanket or pillow firmly against the surgical site during coughing, deep breathing, and mobilization. The counter-pressure supports the abdominal wall, reduces pain, and prevents sudden increases in intra-abdominal pressure from tearing suture lines (dehiscence) or eviscerating internal organs.",
    optionRationales: {
      A: "Correct. Splinting with a pillow supports the incision line and prevents dehiscence during coughing.",
      B: "Coughing upright without support places maximum mechanical stress on fresh abdominal sutures.",
      C: "Straining (Valsalva) raises intra-abdominal pressure without clearing respiratory secretions.",
      D: "Supine positioning with arms up stretches the abdominal wall, increasing suture tension."
    },
    clinicalPearl: "Teach patients to SPLINT their incisions: Hug a pillow tightly against the belly when coughing or getting out of bed.",
    tags: ["splinting", "dehiscence-prevention", "coughing-exercises", "post-op-care"]
  },
  {
    id: "FON-084",
    course: "Fundamentals of Nursing (FON)",
    topic: "Oxygenation & Airway Management",
    subtopic: "Assessing Cyanosis (Central vs Peripheral)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Where should the nurse inspect to evaluate for true 'Central Cyanosis', which indicates systemic arterial hypoxemia rather than localized peripheral vasoconstriction?",
    options: [
      "The tongue, sublingual mucosa, and oral mucous membranes",
      "The tips of the fingernails and toenails",
      "The earlobes",
      "The skin overlying the patella"
    ],
    correctAnswer: 0,
    rationale: "Central cyanosis reflects a high concentration of deoxygenated hemoglobin in arterial blood (PaO2 < 50 mmHg, SaO2 < 85%) and is assessed in highly vascular mucosal tissues with high blood flow that are unaffected by ambient temperature: the tongue, sublingual tissue, and buccal mucosa. Peripheral cyanosis (blueness of fingernails, earlobes, toes) reflects localized vasoconstriction or cold exposure, even when arterial oxygenation is normal.",
    optionRationales: {
      A: "Correct. The tongue and oral mucous membranes are the definitive sites for evaluating central arterial cyanosis.",
      B: "Nailbed blueness reflects peripheral vasoconstriction or cold exposure (peripheral cyanosis).",
      C: "Earlobes reflect peripheral cutaneous circulation.",
      D: "Patellar skin reflects peripheral skin changes."
    },
    clinicalPearl: "To confirm true Central Cyanosis, look at the TONGUE and inside the mouth. Cold fingers can be blue while the lungs are perfectly fine.",
    tags: ["central-cyanosis", "hypoxemia", "oral-mucosa", "oxygenation", "clinical-assessment"]
  },
  {
    id: "FON-085",
    course: "Fundamentals of Nursing (FON)",
    topic: "Medication Administration & Safety",
    subtopic: "Sublingual Drug Administration Rules",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When administering a sublingual Nitroglycerin tablet to a client experiencing acute angina, what instruction must the nurse give?",
    options: [
      "Place the tablet under the tongue, allow it to dissolve completely, and do not swallow, chew, or drink water until it is absorbed",
      "Swallow the tablet immediately with a full 250 mL glass of water",
      "Chew the tablet into fine powder between the molars",
      "Dissolve the tablet in hot coffee before drinking"
    ],
    correctAnswer: 0,
    rationale: "Sublingual medications (e.g., Nitroglycerin) are placed beneath the tongue, where they dissolve and absorb directly into the systemic circulation through the extensive sublingual venous plexus. Swallowing the tablet exposes it to gastric acid and extensive first-pass hepatic metabolism, inactivating the drug. The client must not chew, swallow, or drink fluids until the tablet has dissolved.",
    optionRationales: {
      A: "Correct. Place under the tongue, let it dissolve, and do not swallow or drink until absorbed.",
      B: "Swallowing subjects nitroglycerin to first-pass liver destruction, rendering it ineffective.",
      C: "Chewing does not allow direct sublingual venous absorption.",
      D: "Hot liquids wash the drug into the stomach, destroying its rapid sublingual action."
    },
    clinicalPearl: "Sublingual drugs: Place UNDER THE TONGUE. Do not chew, do not swallow, and do not drink water until it dissolves completely.",
    tags: ["sublingual", "nitroglycerin", "medication-routes", "pharmacology-safety"]
  },
  {
    id: "FON-086",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Mobility",
    subtopic: "Cane (Walking Stick) Ambulation Technique",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When teaching a client with left leg hemiparesis how to ambulate with a single-point cane (walking stick), on which side of the body should the client hold the cane?",
    options: [
      "On the strong, unaffected (right) side of the body",
      "On the weak, affected (left) side of the body",
      "Held in both hands centered over the chest",
      "Alternating hands with every step"
    ],
    correctAnswer: 0,
    rationale: "A cane must always be held on the client's STRONG (unaffected) side. This provides a wide base of support and allows the cane to move forward simultaneously with the weak leg, redistributing body weight through the strong arm onto the cane and off the injured extremity (Cane Opposite Affected Leg = COAL).",
    optionRationales: {
      A: "Correct. Hold the cane on the strong/unaffected side to redistribute weight off the weak leg.",
      B: "Holding the cane on the weak side creates an unstable, narrow base and increases fall risk.",
      C: "Holding in both hands prevents arm swinging and balance.",
      D: "Switching hands creates gait instability and falls."
    },
    clinicalPearl: "Cane mnemonic: COAL (Cane Opposite Affected Leg). Always hold the cane on your GOOD side.",
    tags: ["cane-ambulation", "COAL", "assistive-devices", "rehabilitation", "mobility"]
  },
  {
    id: "FON-087",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Hygiene",
    subtopic: "Perineal Care in Uncircumcised Males",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When performing perineal hygiene on an uncircumcised adult male client, what critical action must the nurse complete after gently retracting and washing under the foreskin (prepuce)?",
    options: [
      "Return (pull back) the foreskin to its natural position over the glans penis immediately",
      "Leave the foreskin retracted permanently to let it air dry",
      "Apply tight adhesive tape around the retracted prepuce",
      "Powder the glans with cornstarch while retracted"
    ],
    correctAnswer: 0,
    rationale: "In uncircumcised males, the foreskin (prepuce) is retracted gently to clean smegma and bacteria from around the glans penis. After cleansing and drying, the nurse MUST immediately pull the foreskin forward back to its natural anatomical position. Leaving the foreskin retracted can constrict the glans, causing venous congestion, severe edema, and Paraphimosis, which can lead to ischemic necrosis of the glans.",
    optionRationales: {
      A: "Correct. Always replace the foreskin forward after cleaning to prevent Paraphimosis.",
      B: "Leaving the foreskin retracted causes venous constriction, swelling, and Paraphimosis.",
      C: "Taping causes tissue strangulation and necrosis.",
      D: "Powdering the glans causes chemical irritation and crusting."
    },
    clinicalPearl: "After cleaning an uncircumcised penis: ALWAYS PULL THE FORESKIN BACK DOWN. Leaving it retracted causes Paraphimosis (swelling and strangulation of the glans).",
    tags: ["perineal-care", "paraphimosis", "hygiene", "foreskin", "nursing-safety"]
  },
  {
    id: "FON-088",
    course: "Fundamentals of Nursing (FON)",
    topic: "Fluid, Electrolyte & Acid-Base Balance",
    subtopic: "Normal Blood Gas Values Identification",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which set of laboratory values represents normal physiological parameters for an adult Arterial Blood Gas (ABG)?",
    options: [
      "pH: 7.35–7.45; PaCO2: 35–45 mmHg; HCO3-: 22–26 mEq/L; PaO2: 80–100 mmHg",
      "pH: 7.10–7.20; PaCO2: 60–70 mmHg; HCO3-: 15–18 mEq/L; PaO2: 50–60 mmHg",
      "pH: 7.50–7.60; PaCO2: 20–25 mmHg; HCO3-: 30–35 mEq/L; PaO2: 120–150 mmHg",
      "pH: 6.80–7.00; PaCO2: 10–15 mmHg; HCO3-: 5–10 mEq/L; PaO2: 40–50 mmHg"
    ],
    correctAnswer: 0,
    rationale: "Normal adult arterial blood gas (ABG) reference values: pH: 7.35 to 7.45; PaCO2: 35 to 45 mmHg (respiratory component); HCO3- (Bicarbonate): 22 to 26 mEq/L (metabolic/renal component); PaO2: 80 to 100 mmHg; SaO2: 95% to 100%.",
    optionRationales: {
      A: "Correct. Standard normal reference ranges: pH 7.35–7.45, PaCO2 35–45, HCO3 22–26, PaO2 80–100.",
      B: "Represents severe respiratory and metabolic acidosis.",
      C: "Represents mixed alkalemia.",
      D: "Represents severe, life-threatening acidemia near death."
    },
    clinicalPearl: "Normal ABG memory hook: pH = 7.35–7.45. Drop the '7' and you get PaCO2 = 35–45. Bicarbonate (HCO3) = 22–26.",
    tags: ["ABG", "acid-base", "normal-values", "arterial-blood-gas", "respiratory"]
  },
  {
    id: "FON-089",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Pouring Sterile Solutions onto a Sterile Field",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When pouring a sterile saline solution into a sterile gallipot on a dressing tray, what technique preserves the sterility of the field?",
    options: [
      "Hold the bottle with the label facing the palm of the hand, pour without splashing from 4 to 6 inches above the bowl, and discard the first few drops if the bottle was previously opened ('lipping')",
      "Rest the unsterile bottle neck directly on the rim of the sterile gallipot",
      "Reach across the open sterile field to pour into the bowl",
      "Hold the bottle 2 feet high to pour rapidly"
    ],
    correctAnswer: 0,
    rationale: "Pouring sterile liquids: 1) Check expiration date and integrity; 2) Hold the bottle with the label facing the palm (so dribbles do not stain or obscure the label); 3) Discard a small amount ('lipping') if previously opened to clear the rim; 4) Pour from 4 to 6 inches (10–15 cm) above the gallipot without touching the sterile field; 5) Avoid splashing (moisture soaking through a drape creates a wick that contaminates the sterile field).",
    optionRationales: {
      A: "Correct. Label in palm, pour from 4–6 inches without splashing, and lip previously opened bottles.",
      B: "Touching the unsterile bottle to the sterile gallipot contaminates the bowl.",
      C: "Reaching across a sterile field contaminates it via falling microscopic shedding.",
      D: "Pouring from 2 feet high causes splashing; wet drapes become contaminated by strike-through."
    },
    clinicalPearl: "Hold the label in your palm when pouring liquids so medicine drips don't stain the label. Pour from 4–6 inches up—never splash!",
    tags: ["sterile-technique", "pouring-solutions", "asepsis", "wound-care"]
  },
  {
    id: "FON-090",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Mobility",
    subtopic: "Stair Ambulation with Crutches",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "When teaching a patient with a left ankle cast how to navigate stairs with crutches, what is the correct mnemonic and sequence for GOING UP the stairs?",
    options: [
      "'Up with the Good' (the unaffected strong leg steps up first, followed by the crutches and the affected leg)",
      "'Up with the Bad' (the injured leg steps up first, followed by the good leg)",
      "Both crutches step up first, followed by both legs simultaneously",
      "The patient should slide up the stairs on their stomach"
    ],
    correctAnswer: 0,
    rationale: "Stair ambulation with crutches follows the rule: 'Up with the Good, Down with the Bad.' Going UP stairs: 1) Step up with the strong, unaffected (good) leg first; 2) Push down on the crutches to bring the affected leg and crutches up to the same step. Going DOWN stairs: 1) Lower the crutches and affected (bad) leg down first; 2) Follow with the strong leg.",
    optionRationales: {
      A: "Correct. Going UP: Unaffected (good) leg steps up first, then crutches and bad leg follow.",
      B: "Stepping up with the injured leg first is incorrect; the good leg must bear weight to lift the body.",
      C: "Moving crutches up first removes balance and arm leverage.",
      D: "Sliding is undignified and unsuited for standard crutch training."
    },
    clinicalPearl: "Crutches on stairs: UP with the GOOD leg (good goes to heaven); DOWN with the BAD leg (bad goes to hell).",
    tags: ["crutches", "stairs", "up-with-the-good", "mobility", "rehabilitation"]
  },
  {
    id: "FON-091",
    course: "Fundamentals of Nursing (FON)",
    topic: "Oxygenation & Airway Management",
    subtopic: "Oropharyngeal vs Nasopharyngeal Airway Sizing",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "How should the nurse correctly measure an Oropharyngeal Airway (Guedel airway) before insertion in an unconscious adult client?",
    options: [
      "From the corner of the mouth to the tip of the earlobe (or angle of the jaw)",
      "From the tip of the nose to the xiphoid process",
      "From the center of the incisors to the sternal notch",
      "From the eyebrow to the chin"
    ],
    correctAnswer: 0,
    rationale: "To size an Oropharyngeal Airway (OPA): Measure from the corner of the patient's mouth to the angle of the jaw (mandible) or the tip of the earlobe. If too long, it pushes the epiglottis down, obstructing the larynx; if too short, it pushes the tongue base backward into the pharynx, worsening obstruction.",
    optionRationales: {
      A: "Correct. Corner of the mouth to the angle of the jaw/earlobe is the standard OPA measurement.",
      B: "Nose to xiphoid is the NEX formula for nasogastric tubes.",
      C: "Incisors to sternum is an incorrect measurement.",
      D: "Eyebrow to chin does not correspond to pharyngeal airway anatomy."
    },
    clinicalPearl: "Measure an OPA (Guedel): Corner of mouth to the angle of the jaw. Use only in UNCONSCIOUS patients without a gag reflex.",
    tags: ["OPA", "airway-sizing", "Guedel-airway", "oxygenation", "BLS"]
  },
  {
    id: "FON-092",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Nutrition",
    subtopic: "Refeeding Syndrome in Severe Malnutrition",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A severely malnourished client is started on aggressive nutritional therapy. Within 48 hours, the client develops acute muscular weakness, cardiac dysrhythmias, and respiratory failure. What electrolyte drop is the hallmark of 'Refeeding Syndrome'?",
    options: [
      "Severe Hypophosphatemia",
      "Severe Hypercalcemia",
      "Severe Hypernatremia",
      "Severe Hypermagnesemia"
    ],
    correctAnswer: 0,
    rationale: "Refeeding Syndrome occurs when carbohydrates are reintroduced too rapidly to a starved or malnourished patient. Glucose triggers an insulin surge, driving glucose, potassium, magnesium, and Phosphate into cells for glycolysis. Intracellular phosphate is consumed to make ATP, causing severe acute Hypophosphatemia (<0.6 mmol/L). This leads to respiratory muscle failure, cardiac arrest, seizures, and death.",
    optionRationales: {
      A: "Correct. Severe Hypophosphatemia is the hallmark of refeeding syndrome.",
      B: "Calcium shifts do not define refeeding syndrome.",
      C: "Hypernatremia does not drive refeeding syndrome; cellular phosphate, potassium, and magnesium drop.",
      D: "Magnesium drops (hypomagnesemia), not increases."
    },
    clinicalPearl: "Refeeding Syndrome: Introducing food too fast in starvation triggers insulin, which pushes Phosphate into cells. Severe HYPOPHOSPHATEMIA causes respiratory and cardiac failure.",
    tags: ["refeeding-syndrome", "hypophosphatemia", "nutrition", "malnutrition", "critical-care"]
  },
  {
    id: "FON-093",
    course: "Fundamentals of Nursing (FON)",
    topic: "Fluid, Electrolyte & Acid-Base Balance",
    subtopic: "Isotonic vs Hypotonic vs Hypertonic IV Fluids",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which intravenous fluid is classified as an Isotonic Crystalloid, expanding extracellular fluid volume without shifting water into or out of intracellular body cells?",
    options: [
      "0.9% Normal Saline (0.9% NaCl) and Lactated Ringer's",
      "0.45% Half-Normal Saline",
      "3% Hypertonic Saline",
      "10% Dextrose in Water (D10W)"
    ],
    correctAnswer: 0,
    rationale: "Isotonic solutions have an osmolality matching human blood plasma (~275–295 mOsm/kg), staying within the extracellular compartment (intravascular and interstitial) without shifting fluid across cell membranes. Examples: 0.9% Normal Saline and Lactated Ringer's. 0.45% Saline is hypotonic (swells cells); 3% Saline is hypertonic (shrinks cells).",
    optionRationales: {
      A: "Correct. 0.9% Normal Saline and Lactated Ringer's are isotonic solutions.",
      B: "0.45% Saline is hypotonic, shifting water into cells.",
      C: "3% Saline is hypertonic, drawing fluid out of cells into blood.",
      D: "10% Dextrose is hypertonic upon infusion."
    },
    clinicalPearl: "Isotonic fluids (0.9% Saline, Lactated Ringer's) stay where you put them (in the blood vessels). Use them for fluid resuscitation in dehydration and shock.",
    tags: ["IV-fluids", "crystalloids", "isotonic", "normal-saline", "lactated-ringers"]
  },
  {
    id: "FON-094",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Mobility",
    subtopic: "Restraint Alternatives",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Before considering physical restraints for a confused, wandering elderly patient on a hospital ward, which nursing intervention represents an appropriate non-restrictive alternative?",
    options: [
      "Place the patient in a room near the nurses' station, use bed/chair exit alarms, and encourage family presence",
      "Lock the patient in an empty utility closet",
      "Tie the patient's ankles together with a bedsheet",
      "Administer maximum doses of sedatives continuously"
    ],
    correctAnswer: 0,
    rationale: "Restraints must always be a last resort. Non-restrictive alternatives should be attempted and documented first: 1) Move the patient close to the nurses' station for frequent visual checks; 2) Install electronic bed/chair alarms; 3) Involve family members or sitters; 4) Reorient frequently; 5) Ensure basic comfort (toileting, hydration, pain management); 6) Camouflage IV sites.",
    optionRationales: {
      A: "Correct. Placing near the station, bed alarms, and family presence are evidence-based restraint alternatives.",
      B: "Locking patients in closets is false imprisonment and abuse.",
      C: "Tying ankles with bedsheets is an unapproved, dangerous physical restraint.",
      D: "Sedation without clinical indication is an unapproved chemical restraint."
    },
    clinicalPearl: "Always try and document RESTRAINT ALTERNATIVES first: Move the patient near the nurses' station, use bed alarms, and ask family to sit with them.",
    tags: ["restraint-alternatives", "fall-prevention", "patient-safety", "delirium"]
  },
  {
    id: "FON-095",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Hygiene",
    subtopic: "Instilling Otic (Ear) Drops Technique",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When instilling prescribed antibiotic ear drops into the external auditory canal of an ADULT client, how should the nurse manipulate the pinna (auricle)?",
    options: [
      "Pull the pinna UP and BACK",
      "Pull the pinna DOWN and BACK",
      "Push the pinna forward over the face",
      "Never touch the pinna"
    ],
    correctAnswer: 0,
    rationale: "To straighten the S-shaped external auditory canal: In adults and children older than 3 years, pull the pinna UP and BACK. In infants and children younger than 3 years, pull the pinna DOWN and BACK. This allows drops to flow directly into the canal toward the tympanic membrane.",
    optionRationales: {
      A: "Correct. Pull UP and BACK for adults and children >3 years.",
      B: "Pull DOWN and BACK is the technique for infants and children <3 years.",
      C: "Pushing forward folds the ear canal closed.",
      D: "The pinna must be manipulated to straighten the canal."
    },
    clinicalPearl: "Ear drops: Adult = UP and BACK. Child under 3 = DOWN and BACK.",
    tags: ["otic-drops", "ear-drops", "medication-technique", "administration"]
  },
  {
    id: "FON-096",
    course: "Fundamentals of Nursing (FON)",
    topic: "Wound Care & Sterile Technique",
    subtopic: "Wet-to-Dry Mechanical Debridement",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the clinical purpose of packing an open, slough-covered wound with a saline-moistened gauze that is allowed to dry completely before removal (Wet-to-Dry dressing)?",
    options: [
      "Mechanical debridement: as the gauze dries, necrotic tissue adheres to the mesh fibers and is pulled away when the dressing is removed",
      "Keeping the wound permanently sterile",
      "Preventing all pain during dressing changes",
      "Stimulating rapid scar formation over 2 hours"
    ],
    correctAnswer: 0,
    rationale: "A wet-to-dry dressing is a form of non-selective mechanical debridement. Sterile saline-moistened gauze is packed into the wound and left to dry. As it dries, necrotic slough and debris stick to the gauze mesh fibers; when the dry dressing is pulled out, the debris is mechanically stripped from the wound bed.",
    optionRationales: {
      A: "Correct. Wet-to-dry dressings mechanically peel adhered necrotic tissue from the wound bed as they dry.",
      B: "Open wounds are colonized, not permanently sterile.",
      C: "Wet-to-dry debridement is uncomfortable because it non-selectively pulls on tissue.",
      D: "Wound healing requires weeks of granulation, not hours."
    },
    clinicalPearl: "Wet-to-dry dressings are mechanical debridement: wet gauze dries, grabs the slough, and pulls it out when removed.",
    tags: ["wet-to-dry", "mechanical-debridement", "wound-care", "dressings"]
  },
  {
    id: "FON-097",
    course: "Fundamentals of Nursing (FON)",
    topic: "Fluid, Electrolyte & Acid-Base Balance",
    subtopic: "Third-Spacing of Fluids in Hypoalbuminemia",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A client with severe malnutrition has severe generalized edema and ascites, yet presents with tachycardia, low blood pressure (90/50 mmHg), and low urine output. What physiological phenomenon explains this intravascular fluid deficit despite whole-body fluid overload?",
    options: [
      "Third-spacing of fluids: low serum albumin drops intravascular oncotic pressure, shifting fluid out of blood vessels into interstitial and peritoneal spaces",
      "Total body dehydration with zero extracellular water",
      "Sudden evaporation of water through the skin",
      "Excessive red blood cell production"
    ],
    correctAnswer: 0,
    rationale: "Third-spacing occurs when fluid shifts from the intravascular space into non-functional potential spaces (peritoneal cavity, pleural cavity, interstitial tissues). In hypoalbuminemia (severe malnutrition, liver cirrhosis), loss of plasma colloid oncotic pressure prevents blood vessels from holding water, which leaks into the interstitium (edema/ascites), leaving the intravascular space depleted and in hypovolemic shock.",
    optionRationales: {
      A: "Correct. Low oncotic pressure shifts fluid into interstitial spaces, producing intravascular hypovolemia despite generalized edema.",
      B: "Total body water is elevated, but trapped in the wrong compartment (interstitial third-space).",
      C: "Fluid is retained in tissues, not evaporated.",
      D: "Erythropoiesis does not cause third-space fluid shifts."
    },
    clinicalPearl: "Third-spacing: The patient looks swollen and waterlogged on the outside, but their blood vessels are dry and in shock on the inside.",
    tags: ["third-spacing", "oncotic-pressure", "hypoalbuminemia", "edema", "fluids"]
  },
  {
    id: "FON-098",
    course: "Fundamentals of Nursing (FON)",
    topic: "Oxygenation & Airway Management",
    subtopic: "Simple Face Mask Flow Rate Requirements",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When applying a simple face mask for oxygen delivery, why must the oxygen flow meter be set to a MINIMUM of 5 to 6 Liters per minute?",
    options: [
      "To flush exhaled carbon dioxide out of the mask and prevent the client from rebreathing CO2",
      "To keep the mask cold against the face",
      "To prevent the mask strap from stretching",
      "Because flow meters do not operate below 5 L/min"
    ],
    correctAnswer: 0,
    rationale: "A simple face mask requires a minimum oxygen flow rate of 5 Liters/min (standard operating range is 5 to 8 L/min, delivering 40% to 60% FiO2). Flow rates below 5 L/min are insufficient to flush exhaled gas out of the mask's reservoir volume, causing carbon dioxide accumulation and dangerous CO2 rebreathing.",
    optionRationales: {
      A: "Correct. A minimum flow of 5 L/min flushes exhaled carbon dioxide out of the mask, preventing rebreathing.",
      B: "Oxygen flow does not cool the facial mask.",
      C: "Flow rates do not affect elastic mask straps.",
      D: "Flow meters can measure 1–4 L/min, but simple masks require >=5 L/min for safety."
    },
    clinicalPearl: "Simple face mask rule: NEVER set the flow meter below 5 L/min. Low flow allows carbon dioxide to build up inside the mask, which the patient rebreathes.",
    tags: ["simple-face-mask", "oxygen-therapy", "CO2-rebreathing", "flow-rate", "safety"]
  },
  {
    id: "FON-099",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Safety & Mobility",
    subtopic: "Crutch Sizing and Axillary Nerve Protection",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When sizing axillary crutches for an adult client, how much space should exist between the top axillary pad of the crutch and the client's axilla (armpit) when standing upright?",
    options: [
      "2 to 3 finger widths (approximately 1 to 1.5 inches / 2.5–3.8 cm)",
      "The crutch pad should press firmly upward against the axilla",
      "At least 12 inches (30 cm)",
      "Zero space (the body weight should rest entirely on the armpits)"
    ],
    correctAnswer: 0,
    rationale: "When properly fitted, axillary crutches should have 2 to 3 finger widths (roughly 1 to 1.5 inches / 2.5–3.8 cm) between the crutch pad and the axilla when the client stands upright. Body weight must be borne on the handgrips (with elbows flexed at 15–30 degrees), NEVER on the axillary pads. Resting weight on the axillary pads compresses the brachial plexus and radial nerve, causing 'crutch palsy' and wrist drop.",
    optionRationales: {
      A: "Correct. 2 to 3 finger widths space prevents compression of the brachial plexus and radial nerve.",
      B: "Pressing against the armpit compresses the radial nerve, causing crutch palsy and wrist drop.",
      C: "12 inches leaves the crutches too short to provide support.",
      D: "Weight must be borne by the hands and arms, never resting on the armpits."
    },
    clinicalPearl: "Crutch fitting: Keep 2–3 finger widths between the crutch pad and the armpit. Bear weight on your HANDS, never your armpits, to avoid Radial Nerve paralysis (crutch palsy).",
    tags: ["crutch-fitting", "crutch-palsy", "radial-nerve", "mobility", "patient-safety"]
  },
  {
    id: "FON-100",
    course: "Fundamentals of Nursing (FON)",
    topic: "Basic Nursing Procedures & Hygiene",
    subtopic: "Handwashing Duration for Medical Asepsis",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "According to the World Health Organization (WHO) and standard infection control guidelines, what is the minimum duration of mechanical friction required when washing hands with soap and water for routine medical asepsis?",
    options: [
      "At least 15 to 20 seconds (rubbing all surfaces: palms, backs, between fingers, and under nails)",
      "3 seconds",
      "5 minutes with a sterile stiff brush",
      "30 minutes of boiling"
    ],
    correctAnswer: 0,
    rationale: "Routine handwashing for medical asepsis requires rubbing hands together vigorously with soap and running water for at least 15 to 20 seconds (covering palms, dorsum, interdigital spaces, thumbs, and fingernails). 5-minute scrubs with brushes are reserved for surgical asepsis before entering operating theaters.",
    optionRationales: {
      A: "Correct. At least 15 to 20 seconds of mechanical friction removes transient skin flora.",
      B: "3 seconds is insufficient to emulsify oils and lift transient microbes.",
      C: "5-minute brush scrubbing is reserved for surgical theater asepsis.",
      D: "Boiling hands destroys human tissue."
    },
    clinicalPearl: "Handwashing: Rub with soap and water for at least 15–20 seconds (about the time it takes to sing 'Happy Birthday' twice).",
    tags: ["handwashing", "medical-asepsis", "infection-control", "WHO-guidelines"]
  },
  {
    id: "FON-101",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Theories & Conceptual Models",
    subtopic: "Florence Nightingale's Environmental Theory",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Florence Nightingale, the founder of modern professional nursing, proposed the Environmental Theory of nursing. According to her model, what is the primary role of the nurse?",
    options: [
      "To manipulate the patient's environment (clean air, light, warmth, cleanliness, quiet, and nutrition) so that nature can act upon the patient to facilitate healing",
      "To prescribe and administer complex experimental pharmaceutical drugs",
      "To replace the physician in performing major surgical procedures",
      "To manage hospital financial accounts and billing ledgers"
    ],
    correctAnswer: 0,
    rationale: "Florence Nightingale's Environmental Theory posits that nursing's role is to put the patient in the best possible condition for nature to act upon him. This is achieved by altering the external environment: ensuring pure fresh air, pure water, efficient drainage, cleanliness, adequate light, and proper diet.",
    optionRationales: {
      A: "Correct. Nightingale emphasized managing environmental factors so nature can restore health.",
      B: "Pharmacological prescription is a medical role, not the core of Nightingale's environmental philosophy.",
      C: "Nightingale defined nursing as distinct and separate from surgical medicine.",
      D: "Financial billing is an administrative hospital function, not Nightingale's clinical theory."
    },
    clinicalPearl: "Nightingale's Environmental Theory focuses on 5 environmental essentials: Pure air, pure water, efficient drainage, cleanliness, and light.",
    tags: ["nursing-theory", "Florence-Nightingale", "environmental-theory", "history-of-nursing"]
  },
  {
    id: "FON-102",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Theories & Conceptual Models",
    subtopic: "Virginia Henderson's Need Theory",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Virginia Henderson, known as the 'First Lady of Nursing', defined the unique function of the nurse as assisting the individual, sick or well, in the performance of those activities contributing to health or recovery (or peaceful death) that they would perform unaided if they had the necessary strength, will, or knowledge. How many fundamental human needs did Henderson identify?",
    options: [
      "14 fundamental human needs",
      "5 hierarchical stages",
      "21 nursing problems",
      "4 conservation principles"
    ],
    correctAnswer: 0,
    rationale: "Virginia Henderson identified 14 Fundamental Human Needs that form the basis of nursing care, spanning biological, psychological, social, and spiritual realms (e.g., breathe normally, eat and drink adequately, eliminate body wastes, move and maintain posture, sleep and rest, maintain body temperature, communicate, and worship).",
    optionRationales: {
      A: "Correct. Virginia Henderson formulated the 14 Fundamental Human Needs.",
      B: "5 stages describes Maslow's hierarchy of needs.",
      C: "21 nursing problems was formulated by Faye Glenn Abdellah.",
      D: "4 conservation principles were proposed by Myra Estrin Levine."
    },
    clinicalPearl: "Virginia Henderson = 14 Fundamental Needs. The nurse acts as substitute, helper, or partner to help the patient gain independence.",
    tags: ["Virginia-Henderson", "Need-Theory", "14-needs", "nursing-models"]
  },
  {
    id: "FON-103",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Theories & Conceptual Models",
    subtopic: "Dorothea Orem's Self-Care Deficit Theory",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under Dorothea Orem's Self-Care Deficit Nursing Theory, when is professional nursing care required?",
    options: [
      "When the patient's therapeutic self-care demands exceed their self-care agency (ability to care for themselves)",
      "Only when the patient is declared completely comatose by a court",
      "Whenever a physician orders daily physical therapy",
      "Only after an invasive surgical incision has been made"
    ],
    correctAnswer: 0,
    rationale: "Dorothea Orem's theory consists of three interrelated theories: the theory of self-care, the self-care deficit theory, and the theory of nursing systems. Nursing care is required when an adult patient experiences a 'Self-Care Deficit'—meaning their personal self-care agency is unable to meet their therapeutic self-care demands due to illness, injury, or disease.",
    optionRationales: {
      A: "Correct. Nursing is required when self-care demands exceed the patient's personal self-care agency.",
      B: "Orem's theory covers wholly compensatory, partly compensatory, and supportive-educative systems, not just coma.",
      C: "Nursing need is determined by self-care limitations, not physical therapy orders alone.",
      D: "Self-care deficits occur in both medical and surgical patients across all settings."
    },
    clinicalPearl: "Dorothea Orem = Self-Care Deficit Theory. The nurse steps in when the patient cannot meet their own self-care demands.",
    tags: ["Dorothea-Orem", "self-care-deficit", "nursing-theory", "conceptual-models"]
  },
  {
    id: "FON-104",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Theories & Conceptual Models",
    subtopic: "Sister Callista Roy's Adaptation Model",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Sister Callista Roy's Adaptation Model views the human being as an adaptive open system that responds to environmental stimuli through coping mechanisms. What are the four adaptive modes described by Roy?",
    options: [
      "Physiological-physical, Self-concept-group identity, Role function, and Interdependence modes",
      "Oral, Anal, Phallic, and Genital modes",
      "Cognitive, Affective, Psychomotor, and Spiritual modes",
      "Sensory, Motor, Autonomic, and Reflexive modes"
    ],
    correctAnswer: 0,
    rationale: "Roy's Adaptation Model identifies four adaptive modes through which a person copes with environmental stimuli: 1) Physiological-physical mode (basic biological processes), 2) Self-concept-group identity mode (psychological and spiritual integrity), 3) Role function mode (social roles performed in society), and 4) Interdependence mode (relationships with significant others and support systems).",
    optionRationales: {
      A: "Correct. Physiological, Self-concept, Role function, and Interdependence are Roy's 4 adaptive modes.",
      B: "These are Sigmund Freud's psychosexual developmental stages.",
      C: "These describe Bloom's educational taxonomy domains.",
      D: "These describe neurological functional categories, not Roy's model."
    },
    clinicalPearl: "Sister Callista Roy = Adaptation Model. The patient adapts to environmental stimuli across 4 modes: Physiological, Self-concept, Role function, and Interdependence.",
    tags: ["Callista-Roy", "adaptation-model", "adaptive-modes", "nursing-theory"]
  },
  {
    id: "FON-105",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Theories & Conceptual Models",
    subtopic: "Jean Watson's Theory of Human Caring",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Jean Watson's Philosophy and Science of Caring emphasizes the transpersonal caring relationship between the nurse and patient. What core conceptual elements form the structural foundation of Watson's model?",
    options: [
      "10 Carative Factors (developed into Caritas Processes)",
      "14 Activities of Daily Living",
      "5 Biological Conservation Principles",
      "4 Behavioral System Subsystems"
    ],
    correctAnswer: 0,
    rationale: "Jean Watson formulated the Philosophy and Science of Caring, built upon 10 Carative Factors (later evolved into 10 Clinical Caritas Processes). Watson's theory posits that caring is central to nursing practice, promoting health, personal growth, and healing through human-to-human transpersonal connections.",
    optionRationales: {
      A: "Correct. Jean Watson's model is founded upon the 10 Carative Factors / Caritas Processes.",
      B: "14 basic needs/activities was formulated by Virginia Henderson.",
      C: "Conservation principles were developed by Myra Levine.",
      D: "Behavioral systems were formulated by Dorothy Johnson."
    },
    clinicalPearl: "Jean Watson = Human Caring Theory. Centered around the 10 Caritas Processes and transpersonal caring moments.",
    tags: ["Jean-Watson", "caring-theory", "caritas-processes", "nursing-philosophy"]
  },
  {
    id: "FON-106",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Theories & Conceptual Models",
    subtopic: "Imogene King's Goal Attainment Theory",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Under Imogene King's Conceptual System and Theory of Goal Attainment, how is the core nursing process operationalized?",
    options: [
      "The nurse and client engage in mutual interaction, perceive each other, communicate, set mutual goals, and agree upon the means to achieve them",
      "The nurse unilaterally dictates all health behaviors to the passive patient",
      "The nurse manipulates only the external physical sunlight and ventilation",
      "The patient writes their own hospital discharge orders without staff input"
    ],
    correctAnswer: 0,
    rationale: "Imogene King's Theory of Goal Attainment focuses on interpersonal systems. The dynamic interaction involves: Perception → Judgment → Action → Reaction → Interaction → Transaction (mutual goal setting). Nurse and client communicate, share information, set mutual health goals, and collaborate on the means to attain them.",
    optionRationales: {
      A: "Correct. King's model centers on mutual goal attainment through purposeful interpersonal interaction and transaction.",
      B: "Unilateral dictation is paternalistic and contradicts King's mutual transaction concept.",
      C: "Manipulating physical ventilation alone reflects Nightingale's environmental focus.",
      D: "King's theory requires mutual collaboration between nurse and client, not uncoordinated patient isolation."
    },
    clinicalPearl: "Imogene King = Goal Attainment Theory. Key concept: Transaction and MUTUAL GOAL SETTING between nurse and patient.",
    tags: ["Imogene-King", "goal-attainment", "transaction", "nursing-theories"]
  },
  {
    id: "FON-107",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pain Assessment & Management",
    subtopic: "Gate Control Theory of Pain",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "According to the Gate Control Theory of Pain (Melzack and Wall), why does rubbing, massaging, or applying gentle pressure to a painful stubbed toe reduce the sensation of pain?",
    options: [
      "Stimulation of large-diameter myelinated A-beta sensory fibers activates inhibitory interneurons in the dorsal horn (substantia gelatinosa) of the spinal cord, closing the 'gate' to small-diameter pain fibers (A-delta and C fibers)",
      "Rubbing mechanically severs the sciatic nerve permanently",
      "Massaging stops all arterial blood flow to the lower extremity",
      "Touch fibers increase the transmission of Substance P to the brain"
    ],
    correctAnswer: 0,
    rationale: "The Gate Control Theory states that pain signals carried by small, unmyelinated or lightly myelinated fibers (A-delta and C fibers) must pass through a neurological 'gate' in the substantia gelatinosa of the spinal dorsal horn. Non-painful mechanical touch or rubbing activates large-diameter myelinated A-beta fibers, which stimulate inhibitory interneurons. These interneurons 'close the gate,' inhibiting the transmission of pain impulses up the spinothalamic tract to the brain.",
    optionRationales: {
      A: "Correct. A-beta tactile fiber stimulation closes the dorsal horn gate to noxious A-delta and C fiber transmission.",
      B: "Massage stimulates cutaneous mechanoreceptors; it does not transect nerves.",
      C: "Rubbing promotes localized cutaneous circulation, not arterial cessation.",
      D: "Substance P is a pain neurotransmitter released by C-fibers, which is inhibited by closing the gate."
    },
    clinicalPearl: "Gate Control Theory explains why massage, TENS units, heat, and cold work: Large A-beta touch fibers close the spinal gate on small A-delta and C pain fibers.",
    tags: ["gate-control-theory", "pain-physiology", "A-beta-fibers", "TENS", "comfort-care"]
  },
  {
    id: "FON-108",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pain Assessment & Management",
    subtopic: "Comprehensive Pain Assessment (PQRST Mnemonic)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When conducting a comprehensive clinical pain assessment using the 'PQRST' mnemonic, what clinical characteristic is evaluated under the 'R' component?",
    options: [
      "Region and Radiation (where the pain is located and whether it spreads to other areas)",
      "Respiratory rate and Rhythm",
      "Response to religious prayers",
      "Remission duration over ten years"
    ],
    correctAnswer: 0,
    rationale: "The PQRST pain assessment mnemonic stands for: P = Provoking / Palliating factors (what makes it better or worse); Q = Quality (sharp, dull, burning, aching); R = Region and Radiation (where is it, does it shoot elsewhere); S = Severity (pain scale 0–10); T = Timing / Time of onset, duration, and frequency.",
    optionRationales: {
      A: "Correct. R evaluates Region (location) and Radiation.",
      B: "Respiratory rate is an objective vital sign, not the R in the PQRST pain tool.",
      C: "Spiritual history is an adjunct, not the PQRST location assessment.",
      D: "Remission over decades relates to oncology history, not acute pain assessment."
    },
    clinicalPearl: "PQRST Pain Assessment: Provocation, Quality, Region/Radiation, Severity (0–10 scale), and Timing.",
    tags: ["PQRST", "pain-assessment", "region-radiation", "comfort", "vital-signs"]
  },
  {
    id: "FON-109",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pain Assessment & Management",
    subtopic: "The WHO Analgesic Ladder",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the World Health Organization (WHO) Three-Step Analgesic Ladder for cancer and chronic pain management, what is the appropriate pharmacological class for Step 1 (Mild Pain, score 1–3)?",
    options: [
      "Non-opioid analgesics (e.g., Paracetamol, NSAIDs) with or without adjuvant medications",
      "Weak opioids (e.g., Codeine, Tramadol)",
      "Strong opioids (e.g., Morphine, Fentanyl, Oxycodone)",
      "General intravenous anesthesia"
    ],
    correctAnswer: 0,
    rationale: "The WHO Three-Step Analgesic Ladder: Step 1 (Mild pain, 1–3): Non-opioid analgesics (Paracetamol, NSAIDs like Ibuprofen) +/- adjuvant drugs (antidepressants, anticonvulsants); Step 2 (Moderate pain, 4–6): Weak opioids (Codeine, Tramadol) + Non-opioid +/- adjuvant; Step 3 (Severe pain, 7–10): Strong opioids (Morphine, Fentanyl) + Non-opioid +/- adjuvant.",
    optionRationales: {
      A: "Correct. Step 1 utilizes non-opioid analgesics (paracetamol, NSAIDs) with optional adjuvants.",
      B: "Weak opioids belong to Step 2 for moderate pain.",
      C: "Strong opioids belong to Step 3 for severe, intractable pain.",
      D: "General anesthesia is for surgical operations, not routine pain step-ladders."
    },
    clinicalPearl: "WHO Pain Ladder: Step 1 = Non-opioid (Paracetamol/NSAIDs). Step 2 = Weak opioid (Codeine/Tramadol). Step 3 = Strong opioid (Morphine).",
    tags: ["WHO-ladder", "pain-management", "analgesia", "pharmacology", "comfort"]
  },
  {
    id: "FON-110",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pain Assessment & Management",
    subtopic: "Nociceptive vs Neuropathic Pain",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A diabetic client describes a persistent sensation in both feet as 'intense burning, tingling, electric shocks, and numbness' that worsens at night. How should the nurse categorize this type of pain?",
    options: [
      "Neuropathic pain (caused by nerve damage or dysfunction in the somatosensory nervous system)",
      "Somatic nociceptive pain (from bone or skeletal muscle injury)",
      "Visceral pain (from distension of hollow internal organs)",
      "Psychogenic phantom pain without biological basis"
    ],
    correctAnswer: 0,
    rationale: "Neuropathic pain is caused by a primary lesion or disease affecting the peripheral or central somatosensory nervous system (e.g., diabetic peripheral neuropathy, post-herpetic neuralgia). It is characteristically described as burning, shooting, electric shocks, tingling (paresthesia), and pins-and-needles, often responding poorly to standard opioids but responsive to anticonvulsants (Gabapentin) and tricyclics.",
    optionRationales: {
      A: "Correct. Burning, tingling, and electric-shock sensations from nerve injury characterize Neuropathic pain.",
      B: "Somatic nociceptive pain is aching, throbbing, and localized to skin, muscle, or bone.",
      C: "Visceral pain is dull, cramping, poorly localized, and arises from internal organs.",
      D: "Diabetic neuropathy is an established biological microvascular complication, not imagined psychogenic pain."
    },
    clinicalPearl: "Neuropathic pain = Burning, shooting, electric shocks, numbness. First-line treatments are Gabapentin, Pregabalin, or Duloxetine, not traditional opioids.",
    tags: ["neuropathic-pain", "diabetic-neuropathy", "pain-classification", "pharmacology"]
  },
  {
    id: "FON-111",
    course: "Fundamentals of Nursing (FON)",
    topic: "Hemorrhage & Fluid Loss Management",
    subtopic: "Classification of Hemorrhage by Vessel Origin",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "A patient sustains a deep laceration across the forearm. The nurse observes blood that is dark red in color and flows in a steady, continuous, non-pulsatile stream. Which type of vessel is the source of this hemorrhage?",
    options: [
      "Venous hemorrhage",
      "Arterial hemorrhage",
      "Capillary hemorrhage",
      "Lymphatic oozing"
    ],
    correctAnswer: 0,
    rationale: "Classification of hemorrhage by vessel: 1) Arterial: Bright red, oxygen-rich blood that spurts or pulsates synchronously with the heartbeat under high pressure; 2) Venous: Dark red, deoxygenated blood that flows in a steady, continuous, non-pulsatile stream under lower pressure; 3) Capillary: Slow, oozing of reddish blood from minor superficial wounds.",
    optionRationales: {
      A: "Correct. Venous hemorrhage is dark red and flows in a continuous, steady stream.",
      B: "Arterial hemorrhage is bright red and spurts vigorously under pulsatile pressure.",
      C: "Capillary hemorrhage slowly oozes from minor surface abrasions.",
      D: "Lymphatic fluid is clear or milky, not dark red whole blood."
    },
    clinicalPearl: "Hemorrhage types: Arterial = Bright red and SPURTING. Venous = Dark red and STEADY FLOW. Capillary = Slow OOZING.",
    tags: ["hemorrhage", "venous-bleeding", "first-aid", "blood-loss", "trauma"]
  },
  {
    id: "FON-112",
    course: "Fundamentals of Nursing (FON)",
    topic: "Hemorrhage & Fluid Loss Management",
    subtopic: "Classifications of Hemorrhage by Timing",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the classical clinical classification of surgical hemorrhage by time of occurrence, what is 'Reactionary Hemorrhage'?",
    options: [
      "Bleeding that occurs within the first 24 hours post-operatively as the patient recovers from shock, blood pressure rises, and slipped ligatures or dislodged clots release",
      "Bleeding that occurs at the exact moment of initial surgical incision",
      "Bleeding that occurs 7 to 14 days post-operatively due to bacterial infection and sloughing of a vessel wall",
      "Bleeding that occurs prior to any traumatic event"
    ],
    correctAnswer: 0,
    rationale: "Surgical hemorrhage timing: 1) Primary Hemorrhage: Occurs immediately at the time of injury or operation; 2) Reactionary Hemorrhage: Occurs within 24 hours post-op, caused by rising blood pressure as the patient recovers from anesthesia/shock, which blows off soft clots or loosens imperfect ligatures; 3) Secondary Hemorrhage: Occurs 7 to 14 days later, usually caused by localized wound infection eroding a blood vessel.",
    optionRationales: {
      A: "Correct. Reactionary hemorrhage occurs within 24 hours post-op as blood pressure rises and dislodges clots.",
      B: "Bleeding at the moment of incision is Primary Hemorrhage.",
      C: "Bleeding 7–14 days later due to infection is Secondary Hemorrhage.",
      D: "Bleeding requires a mechanical, vascular, or pathological disruption."
    },
    clinicalPearl: "Hemorrhage timing: Primary = At time of surgery. Reactionary = Within 24 hours (BP rises). Secondary = 7–14 days later (Infection erodes vessel).",
    tags: ["reactionary-hemorrhage", "secondary-hemorrhage", "surgical-nursing", "post-op-care"]
  },
  {
    id: "FON-113",
    course: "Fundamentals of Nursing (FON)",
    topic: "Hemorrhage & Fluid Loss Management",
    subtopic: "Compensatory Physiological Response to Blood Loss",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "When a client acutely loses 750 mL to 1,000 mL of blood from an open wound, which early compensatory neuroendocrine reflex maintains blood flow to the brain and heart?",
    options: [
      "Arterial baroreceptors detect decreased stretch, triggering sympathetic catecholamine release, tachycardia, and peripheral vasoconstriction",
      "Immediate release of insulin causing systemic vasodilation",
      "Parasympathetic vagal stimulation slowing the heart rate to 40 bpm",
      "Total shutdown of the adrenal medulla"
    ],
    correctAnswer: 0,
    rationale: "Acute blood loss decreases venous return and cardiac output, dropping arterial pressure. Carotid sinus and aortic arch baroreceptors detect decreased stretch and signal the medulla. The sympathetic nervous system discharges: releasing epinephrine and norepinephrine, which increases heart rate (tachycardia) and constricts peripheral arterioles, shunting blood from skin and viscera to the brain and heart.",
    optionRationales: {
      A: "Correct. Baroreceptor unloading triggers sympathetic activation, tachycardia, and vasoconstriction to preserve central perfusion.",
      B: "Insulin does not mediate acute compensatory hemodynamic reflexes in shock.",
      C: "Parasympathetic vagal stimulation would cause bradycardia, worsening hypoperfusion.",
      D: "The adrenal medulla increases catecholamine secretion during hemorrhagic shock."
    },
    clinicalPearl: "The body's first response to bleeding is Sympathetic: Heart rate goes UP (tachycardia) and skin vessels CLAMP DOWN (pale, cold, clammy skin).",
    tags: ["hemorrhage-physiology", "baroreceptors", "sympathetic-response", "shock-compensation"]
  },
  {
    id: "FON-114",
    course: "Fundamentals of Nursing (FON)",
    topic: "Hemorrhage & Fluid Loss Management",
    subtopic: "External Hemorrhage Control Hierarchy",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary, most effective first-line nursing intervention to arrest severe external active bleeding from a limb wound?",
    options: [
      "Continuous, firm Direct Pressure applied over the bleeding site with a sterile dressing or clean cloth",
      "Immediate blind exploration with metal hemostats to clamp unseen vessels",
      "Pouring cold milk into the open wound cavity",
      "Elevating the limb without applying any pressure"
    ],
    correctAnswer: 0,
    rationale: "Direct pressure over the bleeding site is the first-line and most effective method for controlling external hemorrhage. It compresses the severed blood vessel against underlying muscles and bones, slowing blood flow and allowing platelets and fibrin to form a clot. Blind clamping in pools of blood can crush nerves and healthy tissue.",
    optionRationales: {
      A: "Correct. Direct manual pressure over the wound is the immediate, primary first-aid intervention.",
      B: "Blind clamping can crush adjacent major peripheral nerves and damage healthy tissue.",
      C: "Milk contaminates the wound and increases infection risk.",
      D: "Elevation is an adjunct, but cannot stop active bleeding without direct pressure."
    },
    clinicalPearl: "Direct pressure stops over 90% of external bleeding. Press hard directly on the wound. If blood soaks through, add more gauze—never take the first layer off.",
    tags: ["direct-pressure", "hemorrhage-control", "first-aid", "nursing-intervention"]
  },
  {
    id: "FON-115",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pre-Operative Nursing Care",
    subtopic: "NPO (Nothing by Mouth) Guidelines",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "According to standard preoperative guidelines, why are adult surgical clients placed on 'NPO' (nil per os / nothing by mouth) status for at least 6 to 8 hours prior to elective general anesthesia?",
    options: [
      "To ensure complete gastric emptying, preventing pulmonary aspiration of acidic gastric contents during endotracheal intubation",
      "To dehydrate the patient so urine output is zero during surgery",
      "To starve intestinal commensal bacteria so they do not replicate",
      "Because anesthetic gases do not work in the presence of digested carbohydrates"
    ],
    correctAnswer: 0,
    rationale: "General anesthesia blunts pharyngeal protective reflexes and relaxes the lower esophageal sphincter. If food or fluid remains in the stomach, regurgitation can occur during induction or intubation, leading to pulmonary aspiration of acidic gastric juice (Mendelson's syndrome), producing chemical pneumonitis, lung destruction, and death.",
    optionRationales: {
      A: "Correct. Fasting ensures gastric emptying, preventing fatal aspiration of stomach acid during anesthesia.",
      B: "Dehydration is dangerous; patients receive IV maintenance fluids during surgery.",
      C: "Preoperative fasting does not sterilize normal gut microbiome flora.",
      D: "Anesthetics function through central neuroreceptors regardless of gastric content."
    },
    clinicalPearl: "NPO guidelines: 2 hours for clear liquids, 6 hours for light meals, 8 hours for heavy/fried meals. The goal is an EMPTY STOMACH to prevent aspiration.",
    tags: ["NPO", "preoperative-care", "aspiration-prevention", "Mendelson-syndrome"]
  },
  {
    id: "FON-116",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pre-Operative Nursing Care",
    subtopic: "Preoperative Skin Preparation & Hair Removal",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "According to evidence-based surgical site infection (SSI) prevention guidelines, how should surgical site hair removal be handled prior to an operation if hair interferes with the incision?",
    options: [
      "Do not remove hair unless strictly necessary; if removal is required, use electric clippers with a single-use head immediately before surgery, NOT razors",
      "Shave the skin closely with a straight razor 24 hours before surgery",
      "Wax the entire operative region using hot paraffin wax",
      "Apply chemical depilatory creams across all open mucous membranes"
    ],
    correctAnswer: 0,
    rationale: "Modern surgical guidelines dictate: 1) Avoid hair removal unless it directly interferes with surgery; 2) If removal is required, use Electric Surgical Clippers with a disposable blade immediately before surgery. Shaving with razors produces microscopic epidermal cuts (micro-abrasions) that become colonized with bacteria, multiplying surgical site infection rates.",
    optionRationales: {
      A: "Correct. Use electric clippers immediately before surgery; never shave with razors.",
      B: "Shaving with razors 24 hours prior allows bacteria to multiply in microscopic skin nicks, increasing infection rates.",
      C: "Waxing causes severe skin irritation, folliculitis, and epidermal stripping.",
      D: "Depilatory creams cause chemical burns and allergic contact dermatitis."
    },
    clinicalPearl: "Never shave a surgical site with a razor! Razors create microscopic cuts where bacteria multiply. Use ELECTRIC CLIPPERS right before surgery.",
    tags: ["pre-op-skin-prep", "clippers-vs-razor", "SSI-prevention", "surgical-asepsis"]
  },
  {
    id: "FON-117",
    course: "Fundamentals of Nursing (FON)",
    topic: "Intra-Operative Nursing Care",
    subtopic: "Surgical Team Roles: Scrub Nurse vs Circulating Nurse",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During a surgical procedure in the operating room, which responsibility belongs exclusively to the unscrubbed Circulating Nurse rather than the sterile Scrub Nurse?",
    options: [
      "Managing the overall theater environment, documenting the nursing record, coordinating equipment, and counting sponges with the scrub nurse while remaining non-sterile",
      "Passing sterile scalpels and forceps directly to the surgeon within the sterile field",
      "Draping the patient using sterile towels",
      "Handling the surgical retractor inside the open wound cavity"
    ],
    correctAnswer: 0,
    rationale: "Operating room roles: The Scrub Nurse is scrubbed, gowned, gloved, and works inside the sterile field, passing instruments, sponges, and sutures to the surgeon. The Circulating Nurse remains unscrubbed (non-sterile), manages theater logistics, coordinates patient positioning, connects suction and electrosurgical cables, documents the perioperative record, and conducts sponge/instrument counts with the scrub nurse.",
    optionRationales: {
      A: "Correct. The Circulating Nurse manages the non-sterile environment, charting, positioning, and counts.",
      B: "Passing sterile instruments to the surgeon is the role of the sterile Scrub Nurse.",
      C: "Sterile draping is executed by scrubbed personnel.",
      D: "Retracting tissue inside wounds is performed by the surgical assistant or scrub nurse."
    },
    clinicalPearl: "Scrub Nurse = Sterile, inside the field, passes instruments. Circulating Nurse = Non-sterile, manages the room, charts, and counts with the scrub nurse.",
    tags: ["circulating-nurse", "scrub-nurse", "operating-room", "perioperative-roles"]
  },
  {
    id: "FON-118",
    course: "Fundamentals of Nursing (FON)",
    topic: "Intra-Operative Nursing Care",
    subtopic: "WHO Surgical Safety Checklist ('Time Out')",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "According to the WHO Surgical Safety Checklist, when is the 'Time Out' phase performed in the operating room?",
    options: [
      "Immediately before skin incision, where the entire team pauses to confirm patient identity, surgical site, and procedure",
      "Before the induction of anesthesia while the patient is entering the room",
      "After the patient is awakened from anesthesia in the recovery room",
      "Only after the surgical incision has already been sutured closed"
    ],
    correctAnswer: 0,
    rationale: "The WHO Surgical Safety Checklist has three phases: 1) Sign In: Before induction of anesthesia (verifies identity, site, consent, pulse oximeter, airway risk, allergies); 2) Time Out: Immediately BEFORE skin incision (entire team pauses to confirm patient name, procedure, operative site, antibiotic prophylaxis, and imaging); 3) Sign Out: Before patient leaves theater (confirms instrument/sponge counts, specimen labeling, and recovery concerns).",
    optionRationales: {
      A: "Correct. Time Out occurs immediately BEFORE the skin incision is made.",
      B: "Before induction of anesthesia is the 'Sign In' phase.",
      C: "After waking in recovery is post-anesthetic handoff.",
      D: "Before closing/leaving theater is the 'Sign Out' phase."
    },
    clinicalPearl: "WHO Surgical Checklist: 1) Sign In (before anesthesia), 2) Time Out (immediately before incision), 3) Sign Out (before leaving theater).",
    tags: ["WHO-checklist", "time-out", "surgical-safety", "wrong-site-surgery"]
  },
  {
    id: "FON-119",
    course: "Fundamentals of Nursing (FON)",
    topic: "Post-Operative Nursing Care",
    subtopic: "Aldrete Scoring System for PACU Discharge",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In the Post-Anesthesia Care Unit (PACU), the nurse assesses a client recovering from general anesthesia using the modified Aldrete Scoring System. What five physiological parameters are evaluated?",
    options: [
      "Activity (motor movement), Respiration, Circulation (blood pressure), Consciousness, and Oxygen saturation",
      "Blood glucose, White blood cell count, Urine output, Weight, and Height",
      "Pupil size, Bowel sounds, Hair color, Muscle tone, and Reflexes",
      "Body temperature, Platelet count, Liver enzymes, Vision, and Hearing"
    ],
    correctAnswer: 0,
    rationale: "The modified Aldrete Score evaluates recovery from anesthesia across five criteria (scored 0, 1, or 2): 1) Activity (moves extremities voluntarily or on command), 2) Respiration (breathes deeply and coughs freely), 3) Circulation (BP within 20% of pre-op baseline), 4) Consciousness (fully awake), and 5) Oxygen Saturation (SpO2 >92% on room air). A total score of 9 or 10 is required for discharge from the PACU.",
    optionRationales: {
      A: "Correct. Activity, Respiration, Circulation, Consciousness, and O2 Saturation constitute the Aldrete criteria.",
      B: "Laboratory blood values are not components of the bedside Aldrete scoring tool.",
      C: "These are physical exam findings, not the Aldrete PACU discharge criteria.",
      D: "Liver enzymes and platelets are laboratory tests, not the immediate Aldrete metrics."
    },
    clinicalPearl: "Aldrete Score evaluates PACU recovery: Activity, Respiration, Circulation, Consciousness, and O2 saturation. A score of 9 or 10 is needed to return to the ward.",
    tags: ["Aldrete-score", "PACU", "post-anesthesia", "discharge-criteria", "monitoring"]
  },
  {
    id: "FON-120",
    course: "Fundamentals of Nursing (FON)",
    topic: "Post-Operative Nursing Care",
    subtopic: "Postoperative Atelectasis vs Pulmonary Embolism",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "On postoperative day 1 following an open cholecystectomy, a client develops a low-grade temperature of 38.0°C (100.4°F), shallow breathing, and decreased breath sounds at the lung bases. What is the most common cause of this early postoperative fever?",
    options: [
      "Atelectasis (alveolar collapse from shallow breathing and pain)",
      "Deep surgical site wound infection",
      "Urinary tract infection from a removed catheter",
      "Deep vein thrombosis with septic phlebitis"
    ],
    correctAnswer: 0,
    rationale: "The surgical '5 W's of Postoperative Fever': 1) Wind (Day 1–2): Atelectasis; 2) Water (Day 3): Urinary tract infection; 3) Wound (Day 5–7): Surgical site infection; 4) Walking (Day 7+): Deep vein thrombosis / pulmonary embolism; 5) Wonder drugs (Any day): Drug fever. Fever on Postoperative Day 1 is almost always 'Wind' (Atelectasis due to hypoventilation, anesthesia, and splinted diaphragmatic pain).",
    optionRationales: {
      A: "Correct. Atelectasis is the most common cause of fever in the first 24–48 hours post-op.",
      B: "Surgical site wound infections typically manifest on Days 5 to 7.",
      C: "Catheter-associated UTIs typically emerge around Day 3.",
      D: "DVT typically manifests around Day 7 or later."
    },
    clinicalPearl: "The 5 W's of post-op fever: Day 1–2: Wind (Atelectasis). Day 3: Water (UTI). Day 5: Wound (Infection). Day 7: Walking (DVT). Any day: Wonder drugs.",
    tags: ["post-op-fever", "atelectasis", "5-Ws", "respiratory-care", "cholecystectomy"]
  },
  {
    id: "FON-121",
    course: "Fundamentals of Nursing (FON)",
    topic: "Post-Operative Nursing Care",
    subtopic: "Paralytic Ileus Assessment",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "On postoperative day 3 following bowel resection, the client has a distended, tympanic abdomen, nausea, absent bowel sounds across all 4 quadrants for 5 continuous minutes, and has passed no flatus. What postoperative complication is indicated?",
    options: [
      "Paralytic (Adynamic) Ileus",
      "Acute diarrhea",
      "Normal active peristalsis",
      "Gastrocolic fistula"
    ],
    correctAnswer: 0,
    rationale: "Paralytic (adynamic) ileus is the temporary arrest of intestinal peristalsis following abdominal surgery, caused by surgical manipulation, peritoneal irritation, electrolyte imbalances (hypokalemia), and opioid analgesics. Manifestations include abdominal distension, nausea, vomiting, failure to pass flatus or stool, and completely absent bowel sounds confirmed by auscultating for 5 continuous minutes.",
    optionRationales: {
      A: "Correct. Absent bowel sounds, distension, nausea, and absent flatus define Paralytic Ileus.",
      B: "Diarrhea produces hyperactive, rushing, high-pitched bowel sounds.",
      C: "Normal peristalsis produces 5 to 30 gurgling bowel sounds per minute and passage of flatus.",
      D: "Fistulas produce abnormal anatomical tracts, not generalized silent bowel arrest."
    },
    clinicalPearl: "To document 'absent bowel sounds', you must listen continuously for at least 5 FULL MINUTES. A silent belly + distension = Paralytic Ileus.",
    tags: ["paralytic-ileus", "bowel-sounds", "post-op-complications", "gastrointestinal"]
  },
  {
    id: "FON-122",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pain Assessment & Management",
    subtopic: "Patient-Controlled Analgesia (PCA) Safety",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A postoperative client is receiving intravenous morphine via a Patient-Controlled Analgesia (PCA) pump. The client's well-meaning family member states, 'Whenever he groans in his sleep, I press the PCA button for him so he stays comfortable.' What critical patient safety education must the nurse provide?",
    options: [
      "Only the patient is legally and clinically permitted to press the PCA button ('PCA by Proxy' is strictly forbidden because it causes fatal respiratory depression)",
      "Encourage the family member to press the button every 5 minutes",
      "Instruct the family member to press the button while the nurse takes vitals",
      "No education is needed as PCA pumps are completely impossible to overdose"
    ],
    correctAnswer: 0,
    rationale: "A major safety safeguard of PCA is that a patient who becomes overly sedated will fall asleep and stop pressing the button, preventing an overdose. When family members or nurses press the button for a sleeping patient ('PCA by Proxy'), this safety mechanism is bypassed, leading to severe opioid overdose, respiratory depression, and arrest. Only the conscious patient may push the button.",
    optionRationales: {
      A: "Correct. PCA by proxy is strictly forbidden; only the patient may press the button to prevent fatal overdoses.",
      B: "Encouraging relatives to press the button causes lethal opioid overdoses.",
      C: "Pressing the button for a patient is dangerous regardless of vital sign schedules.",
      D: "PCA pumps have lockout intervals, but repeated unauthorized pushes during sleep cause severe toxicity."
    },
    clinicalPearl: "PCA Safety Rule: ONLY THE PATIENT PRESSES THE BUTTON! Family members must never press the button for a sleeping patient ('PCA by Proxy').",
    tags: ["PCA", "patient-controlled-analgesia", "opioid-safety", "respiratory-depression", "patient-education"]
  },
  {
    id: "FON-123",
    course: "Fundamentals of Nursing (FON)",
    topic: "Rest, Sleep & Comfort",
    subtopic: "Stages of the Sleep Cycle (NREM vs REM)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During which phase of the human sleep cycle does active dreaming occur, accompanied by rapid eye movements, high cerebral metabolic activity, irregular breathing, and profound somatic muscle atonia (paralysis)?",
    options: [
      "Rapid Eye Movement (REM) Sleep",
      "NREM Stage 1 (Light sleep)",
      "NREM Stage 2 (Sleep spindles)",
      "NREM Stage 3 (Slow-wave deep sleep)"
    ],
    correctAnswer: 0,
    rationale: "The sleep cycle alternates between Non-Rapid Eye Movement (NREM) and Rapid Eye Movement (REM) sleep. REM sleep (paradoxical sleep) is characterized by high EEG activity, dreaming, rapid saccadic eye movements, autonomic fluctuations (irregular pulse and breathing), and skeletal muscle paralysis/atonia, preventing individuals from physically acting out dreams.",
    optionRationales: {
      A: "Correct. REM sleep is characterized by dreaming, brain activity, and somatic muscle atonia.",
      B: "NREM Stage 1 is light, transitional sleep where hypnic jerks occur.",
      C: "NREM Stage 2 is deeper sleep marked by sleep spindles and K-complexes.",
      D: "NREM Stage 3 is delta slow-wave sleep responsible for physical tissue repair."
    },
    clinicalPearl: "REM sleep = Mental restoration and Dreaming (paralyzed body, active brain). NREM Stage 3 (Delta) = Physical restoration and growth hormone release.",
    tags: ["sleep-cycle", "REM-sleep", "NREM", "rest-and-comfort", "physiology"]
  },
  {
    id: "FON-124",
    course: "Fundamentals of Nursing (FON)",
    topic: "Rest, Sleep & Comfort",
    subtopic: "Sleep Hygiene Principles",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When counseling a client suffering from chronic insomnia on effective 'Sleep Hygiene', which recommendation should the nurse include?",
    options: [
      "Maintain a consistent sleep-wake schedule daily, keep the bedroom cool, dark, and quiet, and avoid caffeine, nicotine, and screens for 4–6 hours before bedtime",
      "Consume a heavy, spicy meal and high-proof alcohol right before climbing into bed",
      "Engage in vigorous high-intensity weightlifting 15 minutes before sleeping",
      "Watch television in bed with bright fluorescent lights on"
    ],
    correctAnswer: 0,
    rationale: "Evidence-based sleep hygiene: 1) Go to bed and wake up at the same time every day; 2) Keep the bedroom quiet, dark, and cool; 3) Reserve the bed only for sleep and intimacy (no screens, work, or television); 4) Avoid caffeine, nicotine, and alcohol 4 to 6 hours before bedtime; 5) Avoid heavy meals and vigorous workouts within 2 to 3 hours of sleep.",
    optionRationales: {
      A: "Correct. Consistent schedules, dark cool rooms, and avoiding evening stimulants are the pillars of sleep hygiene.",
      B: "Alcohol disrupts REM sleep and causes nocturnal awakenings; spicy food triggers reflux.",
      C: "Vigorous exercise elevates core body temperature and catecholamines, delaying sleep onset.",
      D: "Blue light from screens suppresses melatonin release from the pineal gland, worsening insomnia."
    },
    clinicalPearl: "Sleep hygiene rules: Reserve the bed for sleep only. No caffeine, no alcohol, and NO SCREENS for at least 4 hours before bedtime.",
    tags: ["sleep-hygiene", "insomnia", "rest-and-comfort", "health-promotion"]
  },
  {
    id: "FON-125",
    course: "Fundamentals of Nursing (FON)",
    topic: "Loss, Grief & End-of-Life Care",
    subtopic: "Kübler-Ross Stages of Grief",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client diagnosed with terminal lung cancer states to the nurse: 'If God will just let me live long enough to see my daughter graduate from the university next year, I will donate all my money to charity and never complain again.' Which of Elisabeth Kübler-Ross's stages of grief is the client demonstrating?",
    options: [
      "Bargaining",
      "Denial",
      "Anger",
      "Depression"
    ],
    correctAnswer: 0,
    rationale: "Elisabeth Kübler-Ross's Five Stages of Grief (DABDA): 1) Denial ('Not me, the lab made an error'), 2) Anger ('Why me? It's not fair!'), 3) Bargaining ('If I can just live to see my daughter graduate, I'll do anything'), 4) Depression ('What's the point? Everything is lost'), 5) Acceptance ('I am ready; I have made my peace'). Bargaining involves seeking an extension of life in exchange for promises or lifestyle reform.",
    optionRationales: {
      A: "Correct. Attempting to negotiate more time in exchange for good behavior represents Bargaining.",
      B: "Denial is refusing to believe the clinical diagnosis.",
      C: "Anger projects frustration onto healthcare workers, family, or God.",
      D: "Depression involves profound sadness, crying, and withdrawal over impending loss."
    },
    clinicalPearl: "Kübler-Ross Stages of Grief: DABDA = Denial, Anger, Bargaining, Depression, Acceptance.",
    tags: ["Kubler-Ross", "stages-of-grief", "bargaining", "end-of-life", "palliative-care"]
  },
  {
    id: "FON-126",
    course: "Fundamentals of Nursing (FON)",
    topic: "Loss, Grief & End-of-Life Care",
    subtopic: "Clinical Manifestations of Impending Death",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During the final 24 to 48 hours of life in a dying palliative care client, what respiratory pattern causes the loud, gurgling sound often called the 'Death Rattle'?",
    options: [
      "Accumulation of salivary and tracheobronchial secretions in the pharynx due to loss of the cough and swallowing reflexes",
      "Acute pulmonary embolism blocking both main pulmonary arteries",
      "Spontaneous pneumothorax tearing through the visceral pleura",
      "Active foreign body aspiration of food"
    ],
    correctAnswer: 0,
    rationale: "The 'death rattle' (terminal respiratory secretions) occurs when a moribund, dying patient becomes too weak to swallow or clear normal salivary and mucosal secretions from the posterior pharynx. As air passes through these pooled fluids during breathing, a characteristic rattling or gurgling sound is produced. Treatment includes gentle repositioning (side-lying) and anticholinergic drops (Hyoscine / Glycopyrrolate) to dry secretions. Deep suctioning is avoided as it causes discomfort.",
    optionRationales: {
      A: "Correct. Pooling of secretions in the pharynx due to loss of swallowing/cough reflexes causes the death rattle.",
      B: "Pulmonary embolism causes sudden chest pain and arrest, not gradual terminal rattling.",
      C: "Pneumothorax causes absent breath sounds, not salivary gurgling.",
      D: "Dying patients are not consuming solid food, ruling out acute food aspiration."
    },
    clinicalPearl: "The 'Death Rattle': Secretions pool because the dying patient can no longer swallow. Turn the patient on their side and give Glycopyrrolate/Hyoscine. Avoid deep suctioning.",
    tags: ["death-rattle", "end-of-life", "palliative-care", "terminal-secretions"]
  },
  {
    id: "FON-127",
    course: "Fundamentals of Nursing (FON)",
    topic: "Loss, Grief & End-of-Life Care",
    subtopic: "Post-Mortem Care Protocol",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Following the physician's pronouncement of death on a hospital ward, what is the appropriate initial nursing action when preparing the deceased body for family viewing (post-mortem care)?",
    options: [
      "Close the eyelids gently, place a pillow under the head to prevent facial venous pooling/discoloration, cleanse the body, and replace soiled dressings",
      "Leave the body in the exact position of death with mouth open and lights off",
      "Pack the body immediately in an airtight plastic body bag before the family arrives",
      "Strip the mattress and leave the deceased patient on the bare metal frame"
    ],
    correctAnswer: 0,
    rationale: "Post-mortem care preserves the dignity of the deceased and prepares the body for family viewing: 1) Close the eyelids gently; 2) Insert dentures if available and close the mouth (a rolled towel under the chin helps); 3) Elevate the head of the bed slightly (or place a pillow under the head) to prevent post-mortem hypostasis (lividity) and dark purple pooling of venous blood in the face; 4) Wash soiled areas, change dirty sheets, remove non-autopsy lines/catheters, and cover the body to the shoulders with a clean sheet.",
    optionRationales: {
      A: "Correct. Closing eyes, elevating the head to prevent facial lividity, cleaning, and clean sheets preserves dignity.",
      B: "Leaving the head flat causes blood to pool in the face (hypostasis), producing purple facial discoloration.",
      C: "Packing in a shroud or body bag should occur AFTER the family has had time for viewing and grieving.",
      D: "Removing the mattress is undignified and disrespectful."
    },
    clinicalPearl: "Post-mortem care: Place a pillow under the head immediately after death. This prevents blood from pooling in the face (facial hypostasis) so the patient looks peaceful for the family.",
    tags: ["post-mortem-care", "death-and-dying", "hypostasis", "palliative-care", "dignity"]
  },
  {
    id: "FON-128",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Positioning & Mobility",
    subtopic: "Sims' Position Clinical Indications",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "A client is scheduled for the administration of a rectal suppository and an enema. What is the standard clinical position for this procedure?",
    options: [
      "Sims' position (Left lateral semi-prone position with the right knee and thigh flexed)",
      "High-Fowler position",
      "Prone position with arms extended",
      "Dorsal recumbent position with legs abducted"
    ],
    correctAnswer: 0,
    rationale: "Sims' position (semi-prone position where the client lies on the left side with the left leg straight and the right knee and thigh flexed upward toward the chest) exposes the anal area and aligns the anatomical pathway of the sigmoid colon downward with gravity, making it the position of choice for rectal examinations, enemas, and suppository insertion.",
    optionRationales: {
      A: "Correct. Left Sims' position facilitates rectal visualization and follows the anatomical curve of the sigmoid colon.",
      B: "High-Fowler is an upright sitting position for respiratory comfort, not rectal instillation.",
      C: "Prone positioning impairs access and breathing comfort.",
      D: "Dorsal recumbent is for female catheterization or abdominal exams, not rectal enemas."
    },
    clinicalPearl: "Sims' position = Patient lies on their LEFT side with the RIGHT knee bent up. Used for rectal exams, enemas, and suppositories.",
    tags: ["Sims-position", "positioning", "enema", "rectal-care", "foundations"]
  },
  {
    id: "FON-129",
    course: "Fundamentals of Nursing (FON)",
    topic: "Patient Positioning & Mobility",
    subtopic: "Trendelenburg Position and Contraindications",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The Trendelenburg position involves lowering the head of the bed and elevating the foot of the bed. In which clinical scenario is the Trendelenburg position strictly CONTRAINDICATED?",
    options: [
      "A client with severe Traumatic Brain Injury and increased Intracranial Pressure (ICP)",
      "A client with an umbilical cord prolapse during labor",
      "A client undergoing central venous catheter placement in the internal jugular vein",
      "A client with acute postural hypotension without head trauma"
    ],
    correctAnswer: 0,
    rationale: "Trendelenburg position tilts the head down and feet up, increasing cerebral venous pressure and volume. In clients with head trauma, intracranial hemorrhage, or increased ICP, Trendelenburg is strictly contraindicated because it impairs cerebral venous drainage through the internal jugular veins, causing an acute spike in intracranial pressure that can trigger brain herniation.",
    optionRationales: {
      A: "Correct. Trendelenburg increases cerebral venous pressure, worsening elevated ICP and triggering brain herniation.",
      B: "Trendelenburg is used in cord prolapse to relieve fetal presenting part pressure off the umbilical cord.",
      C: "Trendelenburg engorges the internal jugular vein, facilitating central line placement and preventing air emboli.",
      D: "Mild Trendelenburg can temporarily augment venous return in simple orthostatic hypotension."
    },
    clinicalPearl: "NEVER put a head injury patient in Trendelenburg! Lowering the head raises pressure inside the skull (ICP) and can cause fatal brain herniation.",
    tags: ["Trendelenburg", "contraindications", "increased-ICP", "positioning", "head-injury"]
  },
  {
    id: "FON-130",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Theories & Conceptual Models",
    subtopic: "Hildegard Peplau's Interpersonal Relations Theory",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Hildegard Peplau, regarded as the 'Mother of Psychiatric Nursing', formulated the Interpersonal Relations Theory. In her model, what are the four sequential phases of the therapeutic nurse-patient relationship?",
    options: [
      "Orientation → Identification → Exploitation (Working) → Resolution (Termination)",
      "Assessment → Diagnosis → Planning → Implementation",
      "Denial → Anger → Bargaining → Acceptance",
      "Input → Throughput → Output → Feedback"
    ],
    correctAnswer: 0,
    rationale: "Hildegard Peplau's Interpersonal Relations Model outlines four developmental phases in the therapeutic relationship: 1) Orientation (patient seeks assistance, nurse clarifies the problem and establishes boundaries), 2) Identification (patient identifies with the nurse and expresses feelings), 3) Exploitation / Working (patient makes full use of professional services and explores solutions), and 4) Resolution / Termination (old goals are met, independence is achieved, and the professional relationship concludes).",
    optionRationales: {
      A: "Correct. Orientation, Identification, Exploitation, and Resolution are Peplau's 4 relationship phases.",
      B: "These are the steps of the clinical Nursing Process.",
      C: "These are Kübler-Ross's stages of grief.",
      D: "These describe General Systems Theory operational terms."
    },
    clinicalPearl: "Hildegard Peplau = Interpersonal Relations Theory. 4 phases: Orientation → Identification → Exploitation → Resolution.",
    tags: ["Hildegard-Peplau", "interpersonal-relations", "therapeutic-phases", "nursing-theory"]
  },
  {
    id: "FON-131",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pain Assessment & Management",
    subtopic: "Pain Tolerance vs Pain Threshold",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In neurophysiological pain terminology, what is the precise distinction between 'Pain Threshold' and 'Pain Tolerance'?",
    options: [
      "Pain threshold is the lowest intensity of a noxious stimulus at which a person first perceives pain (relatively uniform across individuals); Pain tolerance is the maximum intensity or duration of pain a person is willing to endure (varies widely)",
      "Pain threshold varies widely based on culture, while pain tolerance is identical in all humans",
      "Pain threshold applies only to infants; Pain tolerance applies only to adults",
      "There is no difference; both terms describe the same physiological metric"
    ],
    correctAnswer: 0,
    rationale: "Pain Threshold is the minimum point along a continuum at which a stimulus is first perceived as painful. Because it is physiological, it remains relatively constant within an individual and across populations. Pain Tolerance is the maximum duration or intensity of pain an individual is willing to endure before seeking relief. Tolerance varies widely between individuals and is influenced by culture, psychological state, past experiences, and fatigue.",
    optionRationales: {
      A: "Correct. Threshold is the point where pain is first felt (uniform); Tolerance is how much pain a person can endure (variable).",
      B: "Reverses the definitions; tolerance varies culturally, while threshold is physiological.",
      C: "Both concepts apply across the human lifespan.",
      D: "They are distinct clinical concepts in pain physiology."
    },
    clinicalPearl: "Pain Threshold = 'I just felt that pain' (physiological, uniform). Pain Tolerance = 'I can't take this pain anymore!' (psychological, varies widely).",
    tags: ["pain-threshold", "pain-tolerance", "neurophysiology", "comfort"]
  },
  {
    id: "FON-132",
    course: "Fundamentals of Nursing (FON)",
    topic: "Hemorrhage & Fluid Loss Management",
    subtopic: "External Tourniquet Safety Rules",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "When applying an arterial combat/commercial Tourniquet to control life-threatening hemorrhage from a mangled lower extremity, what safety rule must the nurse follow regarding documentation and removal?",
    options: [
      "Write the exact time of tourniquet application directly on the client's forehead or on the tourniquet band (e.g., 'T 14:30'), and do NOT loosen or remove it until surgical teams are prepared",
      "Loosen the tourniquet every 10 minutes for 30 seconds to let blood flush the wound",
      "Hide the tourniquet under heavy blankets so the patient does not see it",
      "Leave the tourniquet loose so a finger fits easily beneath the band"
    ],
    correctAnswer: 0,
    rationale: "Tourniquet safety: 1) Apply 2–3 inches proximal to the bleeding site (not over a joint); 2) Tighten until bleeding stops and distal pulses vanish; 3) Document the EXACT TIME OF APPLICATION on the tourniquet tag or patient's forehead (e.g., 'TK 14:15'); 4) Never periodically loosen or release a tourniquet (releasing it causes massive re-bleeding, dislodges clots, and releases built-up acidotic toxins into circulation); 5) Keep it uncovered so receiving teams see it immediately.",
    optionRationales: {
      A: "Correct. Document the application time clearly and never release the tourniquet in the field.",
      B: "Periodically loosening a tourniquet is an outdated, dangerous practice that causes fatal re-bleeding and shock.",
      C: "Tourniquets must remain visible so receiving trauma teams recognize ischemic limb time limits.",
      D: "A loose tourniquet acts as a venous tourniquet, increasing arterial bleeding."
    },
    clinicalPearl: "Tourniquet rule: Mark the TIME of application on the forehead ('T = 14:30'). Never cover it up, and NEVER loosen it periodically in the field.",
    tags: ["tourniquet", "hemorrhage-control", "first-aid", "trauma", "application-time"]
  },
  {
    id: "FON-133",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pre-Operative Nursing Care",
    subtopic: "Deep Breathing and Diaphragmatic Exercises",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When teaching a client preoperative diaphragmatic breathing exercises to practice before an exploratory laparotomy, what instruction should the nurse provide?",
    options: [
      "Place hands on the abdomen, inhale deeply through the nose feeling the abdomen push outward, hold for 3 seconds, and exhale slowly through pursed lips feeling the abdomen sink",
      "Breathe as rapidly and shallowly as possible through the mouth",
      "Hold the breath for 2 minutes until dizzy",
      "Inhale while puffing out only the upper chest without moving the belly"
    ],
    correctAnswer: 0,
    rationale: "Diaphragmatic (deep) breathing: 1) Place the client in semi-Fowler position; 2) Place hands lightly on the lower abdomen; 3) Inhale deeply through the nose, allowing the diaphragm to descend and pushing the abdomen outward; 4) Hold breath for 2 to 3 seconds; 5) Exhale slowly through pursed lips while contracting abdominal muscles; 6) Repeat 5 to 10 times every hour.",
    optionRationales: {
      A: "Correct. Deep nasal inhalation with abdominal expansion followed by slow pursed-lip exhalation teaches diaphragmatic excursion.",
      B: "Rapid shallow breathing promotes alveolar collapse and hyperventilation.",
      C: "Prolonged breath holding causes hypoxia and vagal bradycardia.",
      D: "Shallow chest breathing fails to ventilate lung bases where post-op atelectasis occurs."
    },
    clinicalPearl: "Teach deep breathing BEFORE surgery. Inhale through the nose (belly expands out), hold for 3 seconds, exhale through pursed lips (belly sinks in).",
    tags: ["diaphragmatic-breathing", "pre-op-teaching", "atelectasis-prevention", "respiratory-exercises"]
  },
  {
    id: "FON-134",
    course: "Fundamentals of Nursing (FON)",
    topic: "Post-Operative Nursing Care",
    subtopic: "Postoperative Pain Management: Pre-emptive Analgesia",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why is scheduled, round-the-clock administration of prescribed analgesics (or early PRN dosing at the first onset of pain) superior to waiting until a postoperative client experiences severe 10/10 pain before medicating?",
    options: [
      "Managing mild pain requires smaller medication doses, prevents central pain wind-up sensitization, and allows early ambulation and deep breathing",
      "Waiting for severe pain makes patients morally stronger",
      "Medications are toxic if given before severe pain develops",
      "Administering pain relief before severe pain causes instant kidney failure"
    ],
    correctAnswer: 0,
    rationale: "Pre-emptive and early multimodal analgesia prevents 'central sensitization' (wind-up phenomenon where spinal neurons become hyper-excitable to pain). Once pain becomes severe (10/10), it requires higher opioid doses to bring under control, increases adverse side effects (sedation, nausea, respiratory depression), and prevents the patient from coughing, deep breathing, and ambulating.",
    optionRationales: {
      A: "Correct. Medicated early, pain requires smaller doses, prevents central sensitization, and promotes recovery.",
      B: "Withholding analgesia until pain is excruciating is uncompassionate and causes systemic stress responses.",
      C: "Analgesics are safer and more effective when titrated before severe pain escalates.",
      D: "Preventive analgesia protects renal perfusion by reducing sympathetic catecholamine vasoconstriction."
    },
    clinicalPearl: "Do NOT wait for post-op pain to become severe! It takes much more medication to bring severe pain down than to prevent it from spiking in the first place.",
    tags: ["pain-management", "preemptive-analgesia", "post-op-care", "central-sensitization"]
  },
  {
    id: "FON-135",
    course: "Fundamentals of Nursing (FON)",
    topic: "Rest, Sleep & Comfort",
    subtopic: "Effects of Sleep Deprivation on Healing",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "An intensive care client subjected to continuous loud alarms, bright lighting, and hourly interruptions for 5 days develops acute hospital-acquired sleep deprivation. What physiological consequences impair this client's wound healing and recovery?",
    options: [
      "Suppression of cellular immune function, decreased growth hormone release, elevated cortisol levels, and heightened pain sensitivity",
      "Immediate doubling of the red blood cell count",
      "Accelerated bone mineralization and rapid tissue repair",
      "Permanent loss of hearing within 24 hours"
    ],
    correctAnswer: 0,
    rationale: "Sleep deprivation impairs healing through neuroendocrine disruptions: Growth hormone (which stimulates protein synthesis and wound granulation) is primarily released during deep slow-wave NREM sleep; sleep deprivation blunts this release. Concurrently, sympathetic tone and cortisol spike, suppressing lymphocyte proliferation, increasing insulin resistance, and lowering pain tolerance.",
    optionRationales: {
      A: "Correct. Sleep deprivation suppresses growth hormone, spikes stress cortisol, impairs immune repair, and worsens pain.",
      B: "Sleep deprivation does not double erythrocyte production.",
      C: "Tissue repair is delayed, not accelerated, during sleep deprivation.",
      D: "Noise causes fatigue and delirium, not instant bilateral sensorineural deafness."
    },
    clinicalPearl: "Growth hormone repairs tissue during DEEP SLEEP. Cluster nursing care at night to give hospitalized patients uninterrupted sleep blocks.",
    tags: ["sleep-deprivation", "wound-healing", "growth-hormone", "rest-and-comfort", "ICU-psychosis"]
  },
  {
    id: "FON-136",
    course: "Fundamentals of Nursing (FON)",
    topic: "Loss, Grief & End-of-Life Care",
    subtopic: "Anticipatory Grief vs Complicated Grief",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A family whose father was diagnosed with terminal Alzheimer's disease begins mourning, crying, and grieving the loss of his personality and memories two years before his physical death occurs. What form of grief are they experiencing?",
    options: [
      "Anticipatory Grief",
      "Complicated (Prolonged) Grief",
      "Disenfranchised Grief",
      "Inhibited Grief"
    ],
    correctAnswer: 0,
    rationale: "Anticipatory Grief is the cognitive, emotional, and psychosocial mourning that occurs in advance of an impending, predictable loss or death (e.g., in progressive terminal cancer or advanced dementia). It allows individuals to begin processing emotional pain, resolving conflicts, and saying goodbyes before physical demise.",
    optionRationales: {
      A: "Correct. Grieving a loss before it physically happens is Anticipatory Grief.",
      B: "Complicated grief is debilitating, prolonged grief lasting over 12 months after a death that impairs daily functioning.",
      C: "Disenfranchised grief is a loss that cannot be publicly acknowledged, socially mourned, or supported.",
      D: "Inhibited grief occurs when feelings are suppressed and manifest as somatic symptoms."
    },
    clinicalPearl: "Anticipatory grief happens BEFORE the death occurs. It is common in families facing chronic terminal illnesses like cancer or dementia.",
    tags: ["anticipatory-grief", "grief-and-loss", "palliative-care", "family-support"]
  },
  {
    id: "FON-137",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Theories & Conceptual Models",
    subtopic: "Madeline Leininger's Transcultural Nursing Theory",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Madeline Leininger founded Transcultural Nursing and developed the Culture Care Diversity and Universality Theory (the Sunrise Model). According to Leininger, what is the goal of culturally congruent nursing care?",
    options: [
      "To provide care that aligns with the client's cultural values, beliefs, and lifeways to support their health, well-being, or peaceful death",
      "To force all patients to abandon their cultural traditions and adopt Western hospital rules",
      "To provide care exclusively to patients of the nurse's personal ethnic group",
      "To eliminate the use of scientific pharmaceuticals in favor of unverified folklore"
    ],
    correctAnswer: 0,
    rationale: "Madeleine Leininger's Culture Care Diversity and Universality Theory asserts that caring is the essence of nursing. Culturally Congruent Care is achieved through three modes of nursing action: 1) Cultural care preservation/maintenance, 2) Cultural care accommodation/negotiation, and 3) Cultural care repatterning/restructuring, ensuring care respects the patient's cultural lifeways.",
    optionRationales: {
      A: "Correct. Leininger's theory aims to deliver culturally congruent care that respects the patient's values and beliefs.",
      B: "Forcing patients to abandon cultural practices constitutes cultural imposition, which Leininger rejected.",
      C: "Transcultural nursing prepares nurses to care for diverse cultural groups worldwide.",
      D: "Culturally congruent care integrates scientific evidence with safe cultural practices."
    },
    clinicalPearl: "Madeleine Leininger = Transcultural Nursing (Sunrise Model). Care must be culturally congruent with the patient's beliefs and values.",
    tags: ["Madeleine-Leininger", "transcultural-nursing", "cultural-competence", "nursing-theory"]
  },
  {
    id: "FON-138",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pain Assessment & Management",
    subtopic: "Non-Pharmacological Pain Comfort Strategies",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which non-pharmacological comfort strategy uses cold application (cryotherapy) to reduce localized acute musculoskeletal pain and swelling?",
    options: [
      "Vasoconstriction of local blood vessels, decreasing blood flow, slowing nerve conduction velocity, and reducing tissue edema",
      "Increasing arterial blood flow to wash away red blood cells",
      "Melting underlying adipose tissue into oil",
      "Permanently anesthetizing the spinal cord"
    ],
    correctAnswer: 0,
    rationale: "Cryotherapy (cold packs) applied during the first 24 to 48 hours of an acute injury causes local vasoconstriction, reducing blood flow, microvascular permeability, and inflammatory edema. Cold also slows sensory nerve conduction velocity and decreases muscle spindle spasms, numbing the pain area.",
    optionRationales: {
      A: "Correct. Cold causes vasoconstriction, slows nerve conduction, and reduces localized swelling and inflammation.",
      B: "Heat causes vasodilation and increases blood flow; cold does the opposite.",
      C: "Cold freezes or chills tissues; it does not melt fat.",
      D: "Cold packs act locally on cutaneous peripheral nerves, not the central spinal cord."
    },
    clinicalPearl: "Cold for acute injuries (first 24–48 hours) to reduce swelling. Heat for chronic muscle stiffness to increase blood flow and relax spasms.",
    tags: ["cryotherapy", "non-pharmacological-pain", "cold-application", "inflammation", "comfort"]
  },
  {
    id: "FON-139",
    course: "Fundamentals of Nursing (FON)",
    topic: "Hemorrhage & Fluid Loss Management",
    subtopic: "Hypovolemic Shock Positioning (Modified Trendelenburg)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client actively hemorrhaging from an open wound develops dizziness, tachycardia (120 bpm), and a blood pressure drop to 85/50 mmHg. What position should the nurse place the client in while IV fluid resuscitation is prepared?",
    options: [
      "Modified Trendelenburg position (patient flat on back with lower extremities elevated 20 to 30 degrees)",
      "High-Fowler sitting position at 90 degrees",
      "Prone position with a pillow under the chest",
      "Full steep Trendelenburg with head tilted down 45 degrees"
    ],
    correctAnswer: 0,
    rationale: "The Modified Trendelenburg position (supine with legs elevated 20 to 30 degrees while keeping the head and trunk flat) promotes gravity-assisted venous return from the lower extremities to the central circulation, providing an autotransfusion of roughly 300–500 mL of blood to support cardiac preload and blood pressure without compromising respiratory mechanics or raising intracranial pressure.",
    optionRationales: {
      A: "Correct. Modified Trendelenburg (legs up 20–30 degrees, trunk flat) enhances venous return to the heart.",
      B: "Sitting upright pools blood in the legs, dropping blood pressure further and causing syncope.",
      C: "Prone positioning impairs airway monitoring, chest expansion, and IV access.",
      D: "Steep full Trendelenburg pushes abdominal organs against the diaphragm, impairing breathing and raising ICP."
    },
    clinicalPearl: "Shock positioning: MODIFIED Trendelenburg (trunk flat, legs elevated 20–30 degrees). Do NOT tilt the whole bed steep head-down.",
    tags: ["shock-positioning", "modified-Trendelenburg", "hypovolemia", "venous-return", "hemorrhage"]
  },
  {
    id: "FON-140",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pre-Operative Nursing Care",
    subtopic: "Preoperative Antiembolic Stockings (TED Hose)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When applying Thromboembolic Deterrent (TED) compression stockings to an adult client before surgical theater transfer, what measurement and application rule must the nurse follow?",
    options: [
      "Measure the calf/thigh circumference and leg length according to manufacturer charts, and ensure there are no wrinkles or rolled-down edges",
      "Select the smallest available pediatric size to maximize tight pressure",
      "Roll the tops of the stockings down to the knees like tight rubber bands",
      "Apply the stockings over thick woolen trousers"
    ],
    correctAnswer: 0,
    rationale: "Graduated compression stockings (TED hose) must be measured properly (calf circumference and leg length from heel to gluteal fold or popliteal crease). If stockings are too tight, they impede arterial blood flow; if too loose, they fail to prevent stasis. Rolling down the tops creates a tight constriction band that acts like a venous tourniquet, causing venous stasis and increasing DVT risk.",
    optionRationales: {
      A: "Correct. Accurate measurement and keeping stockings smooth without rolled edges ensures graduated compression.",
      B: "Undersized stockings cut off arterial circulation and cause skin necrosis.",
      C: "Rolling stockings down turns them into a tourniquet, predisposing to blood clots.",
      D: "Stockings must be applied directly against bare, clean, dry skin."
    },
    clinicalPearl: "Never let TED hose roll down at the top! A rolled stocking acts like a tourniquet and CAUSES the very blood clots you are trying to prevent.",
    tags: ["TED-hose", "compression-stockings", "DVT-prevention", "pre-op-care", "patient-safety"]
  },
  {
    id: "FON-141",
    course: "Fundamentals of Nursing (FON)",
    topic: "Intra-Operative Nursing Care",
    subtopic: "Surgical Electrocautery Dispersive Pad (Grounding Pad) Placement",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "During surgical setup for monopolar electrosurgery (electrocautery), where should the circulating nurse place the patient dispersive grounding pad (return electrode) to prevent accidental surgical skin burns?",
    options: [
      "Over a well-vascularized, clean, dry, large muscular area (e.g., lateral thigh) close to the operative site, away from bony prominences, scars, and metal implants",
      "Directly over a metal total hip replacement prosthesis",
      "Over a bony prominence like the sacrum or iliac spine",
      "Over a hairy, wet scar on the lower back"
    ],
    correctAnswer: 0,
    rationale: "In monopolar electrosurgery, electrical current passes from the active pencil through the patient's body to the dispersive return grounding pad. To prevent severe electrical burns, the pad must be placed over a large, well-vascularized muscle mass (e.g., thigh or flank) close to the surgical site. Bony prominences, scar tissue, metal implants, and hair have high electrical resistance and poor contact, concentrating current and causing deep thermal burns.",
    optionRationales: {
      A: "Correct. Large muscular vascular bed close to operative site, free of metal, bones, and scars, safely disperses electrical current.",
      B: "Placing grounding pads over metal implants diverts current through the prosthesis, causing deep internal bone and tissue burns.",
      C: "Bony prominences lack uniform flat contact, creating high-resistance burn hotspots.",
      D: "Hair and moisture prevent uniform adhesive contact, causing electrical arcing."
    },
    clinicalPearl: "Electrosurgery grounding pad placement: Put it over a large MUSCLE (like the thigh). Never put it over bone, hairy skin, or metal implants.",
    tags: ["electrosurgery", "grounding-pad", "burn-prevention", "operating-room", "patient-safety"]
  },
  {
    id: "FON-142",
    course: "Fundamentals of Nursing (FON)",
    topic: "Post-Operative Nursing Care",
    subtopic: "Malignant Hyperthermia Emergency Protocol",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "During emergence from general anesthesia with Halothane and Succinylcholine, a surgical patient develops masseter muscle rigidity (jaw clenching), severe hypercapnia (rising end-tidal CO2), tachycardia, and a core body temperature spiking to 42°C (Malignant Hyperthermia). What is the specific life-saving skeletal muscle relaxant antidote?",
    options: [
      "Intravenous Dantrolene Sodium",
      "Intravenous Atropine sulfate",
      "Intravenous Naloxone",
      "Intravenous Regular Insulin alone"
    ],
    correctAnswer: 0,
    rationale: "Malignant Hyperthermia (MH) is a pharmacogenetic crisis triggered by volatile inhalational anesthetics (Halothane, Isoflurane) and depolarizing muscle relaxants (Succinylcholine). Ryanodine receptor (RYR1) defects trigger uncontrolled calcium release from the sarcoplasmic reticulum into muscle cytoplasm, driving hypermetabolism, muscle rigidity, acidosis, rhabdomyolysis, and hyperpyrexia. The specific antidote is Dantrolene Sodium, which blocks ryanodine receptors, halting calcium release.",
    optionRationales: {
      A: "Correct. Dantrolene Sodium is the specific life-saving antidote that halts calcium release from the sarcoplasmic reticulum.",
      B: "Atropine is an anticholinergic that worsens extreme tachycardia and hyperpyrexia.",
      C: "Naloxone reverses opioids, not genetic ryanodine receptor crises.",
      D: "Insulin and glucose treat secondary hyperkalemia, but do not stop the underlying ryanodine calcium dump."
    },
    clinicalPearl: "Malignant Hyperthermia first sign = Rising end-tidal CO2 (hypercapnia) and jaw rigidity. Late sign = High fever. The antidote is DANTROLENE.",
    tags: ["malignant-hyperthermia", "dantrolene", "anesthesia-complications", "ryanodine-receptor", "operating-room"]
  },
  {
    id: "FON-143",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pain Assessment & Management",
    subtopic: "Pain Scale Selection in Cognitively Impaired Clients",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When assessing pain in an elderly client with advanced vascular dementia who cannot speak or understand a 0–10 numeric rating scale, which validated behavioral assessment tool should the nurse use?",
    options: [
      "PAINAD (Pain Assessment in Advanced Dementia) or FLACC scale",
      "Visual Analog Scale requiring mathematical calculation",
      "Numeric 0 to 10 rating scale",
      "Glasgow Coma Scale"
    ],
    correctAnswer: 0,
    rationale: "For non-verbal, cognitively impaired adults with advanced dementia, observational behavioral pain scales are used. The PAINAD scale evaluates five behavioral indicators (Breathing, Negative vocalization, Facial expression, Body language, and Consolability), each scored 0 to 2. The FLACC scale (Face, Legs, Activity, Cry, Consolability) is also used in non-verbal populations.",
    optionRationales: {
      A: "Correct. The PAINAD tool evaluates behavioral indicators in non-verbal patients with dementia.",
      B: "Visual analog and numeric scales require abstract cognitive comprehension.",
      C: "Numeric 0–10 scales require intact cognitive verbal processing.",
      D: "Glasgow Coma Scale assesses level of consciousness, not pain intensity."
    },
    clinicalPearl: "Non-verbal dementia patient in pain? Use the PAINAD scale: Watch their breathing, facial grimacing, body tensing, and consolability.",
    tags: ["PAINAD", "FLACC", "dementia", "pain-assessment", "non-verbal-pain"]
  },
  {
    id: "FON-144",
    course: "Fundamentals of Nursing (FON)",
    topic: "Hemorrhage & Fluid Loss Management",
    subtopic: "Internal Hemorrhage Clinical Indicators",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "A client who underwent an open splenectomy 4 hours ago has no external bleeding on the abdominal dressing, but is increasingly restless, thirsty, and pale. Vitals demonstrate: Heart rate rising from 80 to 126 bpm, blood pressure dropping from 120/80 to 86/52 mmHg, and abdominal girth increasing by 4 cm. What complication is occurring?",
    options: [
      "Concealed internal (intra-abdominal) hemorrhage",
      "Normal postoperative recovery from anesthesia",
      "Acute urinary retention with full bladder",
      "Surgical site wound dehiscence"
    ],
    correctAnswer: 0,
    rationale: "Internal (concealed) hemorrhage occurs inside a body cavity (e.g., peritoneal cavity) without external drainage. Tachycardia (126 bpm) is the earliest sign of compensatory shock. Hypotension (86/52), restlessness, pallor, thirst, and an expanding abdominal girth indicate blood pooling in the peritoneal cavity from a slipped splenic pedicle ligature.",
    optionRationales: {
      A: "Correct. Tachycardia, hypotension, pallor, and expanding abdominal girth indicate concealed internal bleeding.",
      B: "Tachycardia and hypotension are signs of circulatory shock, not normal recovery.",
      C: "Urinary retention causes suprapubic fullness and pain, but does not cause acute hypovolemic hypotension.",
      D: "Dehiscence is separation of wound edges, not internal hemoperitoneum."
    },
    clinicalPearl: "Internal bleeding warning signs: The pulse goes UP, the blood pressure goes DOWN, the belly gets bigger, and the patient becomes thirsty and restless.",
    tags: ["internal-hemorrhage", "concealed-bleeding", "hypovolemic-shock", "post-op-complications"]
  },
  {
    id: "FON-145",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pre-Operative Nursing Care",
    subtopic: "Informed Consent Verification for Anesthesia",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A preoperative client receives an intramuscular premedication containing Atropine and Diazepam (Valium) at 07:00. At 07:20, the surgical resident arrives with the operative consent form that was forgotten earlier and asks the nurse to get the patient to sign it. What is the nurse's legal and ethical responsibility?",
    options: [
      "Refuse to have the patient sign; once psychoactive sedatives or narcotics are administered, the patient is legally incapacitated and cannot provide valid informed consent",
      "Have the patient sign quickly before the sedative reaches peak effect",
      "Hold the patient's hand and guide the pen to write the signature",
      "Ask the surgical orderly to sign on the patient's behalf"
    ],
    correctAnswer: 0,
    rationale: "Informed consent requires a lucid mind. Once a patient receives pre-anesthetic sedatives, narcotics, or tranquilizers (Diazepam, Midazolam, Morphine), cognitive capacity is legally impaired. Any consent signed under the influence of mind-altering drugs is legally invalid. Consent must be obtained BEFORE administering pre-op sedatives, or delayed until legal surrogate consent is secured.",
    optionRationales: {
      A: "Correct. Sedated patients are legally incapacitated; consent obtained after pre-op sedation is void.",
      B: "Obtaining signatures after sedative administration invalidates the consent in court.",
      C: "Guiding a sedated person's hand is coercion and fraud.",
      D: "Hospital orderlies do not hold legal surrogate proxy authority."
    },
    clinicalPearl: "Consent must be signed BEFORE giving pre-op sedatives. Once the Valium or Morphine is injected, the patient can no longer legally sign.",
    tags: ["informed-consent", "pre-op-sedation", "legal-nursing", "patient-capacity"]
  },
  {
    id: "FON-146",
    course: "Fundamentals of Nursing (FON)",
    topic: "Post-Operative Nursing Care",
    subtopic: "Prevention of Postoperative Urinary Retention",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Following spinal anesthesia and an inguinal hernia repair, a client has not voided for 8 hours postoperatively. The client feels bladder fullness and palpation reveals a smooth, firm suprapubic mass. What non-invasive nursing measures should be attempted first before performing urinary catheterization?",
    options: [
      "Assist the male client to stand at the bedside, run warm water in the sink, place warm water over the perineum, and provide privacy",
      "Immediately insert an indwelling 18 Fr Foley catheter without assessment",
      "Press down with both fists on the bladder with maximum force",
      "Administer three doses of IV furosemide"
    ],
    correctAnswer: 0,
    rationale: "Anesthetics and anticholinergics depress detrusor muscle tone, predisposing to postoperative urinary retention. The nurse should try non-invasive measures first: 1) Assist the patient to assume a normal anatomical voiding position (standing for males, sitting for females); 2) Provide privacy; 3) Run water in the sink or place hands in warm water; 4) Pour warm water over the perineum. If these measures fail and bladder scanning shows >400–500 mL, catheterize.",
    optionRationales: {
      A: "Correct. Promoting normal voiding position, sensory triggers (running water), and privacy are first-line non-invasive measures.",
      B: "Catheterization carries infection risks and is indicated only after non-invasive measures fail.",
      C: "Forceful Credé compression on an over-distended bladder risks bladder rupture.",
      D: "Diuretics increase urine production, worsening bladder over-distension and discomfort."
    },
    clinicalPearl: "Before catheterizing for post-op urinary retention: Stand the male patient up, run the tap water, provide privacy, and try non-invasive techniques first.",
    tags: ["urinary-retention", "post-op-care", "bladder-care", "elimination", "non-invasive"]
  },
  {
    id: "FON-147",
    course: "Fundamentals of Nursing (FON)",
    topic: "Loss, Grief & End-of-Life Care",
    subtopic: "Rigor Mortis Physiology and Timing",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why does the body of a deceased individual undergo 'Rigor Mortis' (temporary post-mortem stiffening of skeletal muscles) beginning 2 to 4 hours after biological death?",
    options: [
      "Cellular ATP depletion prevents the detachment of myosin heads from actin filaments in muscle sarcomeres, leaving cross-bridges locked",
      "Extracellular potassium turns into solid bone mineral",
      "The body freezes due to loss of environmental air conditioning",
      "Muscle fibers permanently contract under massive sympathetic adrenaline surges"
    ],
    correctAnswer: 0,
    rationale: "Rigor mortis occurs because muscle relaxation requires ATP. Following death, cellular metabolism and ATP synthesis cease. Without ATP, myosin heads cannot detach from actin binding sites, leaving muscle cross-bridges locked in a rigid state. Rigor mortis begins in small muscles of the face and jaw within 2 to 4 hours, peaks at roughly 12 hours, and dissipates after 24 to 48 hours as autolytic muscle enzymes break down.",
    optionRationales: {
      A: "Correct. ATP depletion prevents cross-bridge detachment, locking actin and myosin in rigor mortis.",
      B: "Potassium diffuses out of cells, but does not turn into bone mineral.",
      C: "Rigor mortis is a biochemical cross-bridge event, not physical ice freezing.",
      D: "Sympathetic output ceases with brainstem death."
    },
    clinicalPearl: "Rigor mortis begins 2–4 hours after death because the body runs out of ATP, locking muscles stiff. Perform post-mortem positioning early before rigor sets in.",
    tags: ["rigor-mortis", "post-mortem", "ATP-depletion", "death-physiology", "muscle-stiffness"]
  },
  {
    id: "FON-148",
    course: "Fundamentals of Nursing (FON)",
    topic: "Nursing Theories & Conceptual Models",
    subtopic: "Jean Watson's Transpersonal Caring Moments",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In Jean Watson's caring theory, what is a 'Transpersonal Caring Moment'?",
    options: [
      "A focal human-to-human connection where the nurse and patient connect at a spiritual, heart-centered level that transcends physical space and time, promoting mutual healing",
      "A scheduled 15-minute administrative meeting with hospital management",
      "The physical transfer of a patient from an ambulance to a stretcher",
      "A commercial financial transaction when paying for hospital prescriptions"
    ],
    correctAnswer: 0,
    rationale: "Jean Watson defines a 'Caring Moment' or 'Caring Occasion' as an authentic, human-to-human encounter where nurse and patient connect at a deeper, emotional, and spiritual level. Both are influenced by the interaction, creating an energetic field that fosters healing, dignity, and wholeness beyond physical medical tasks.",
    optionRationales: {
      A: "Correct. A caring moment is an authentic, spiritual, transpersonal human connection fostering mutual healing.",
      B: "Administrative meetings do not embody Watson's therapeutic caring moment.",
      C: "Physical stretcher transfers are mechanical logistics, not the caring encounter.",
      D: "Financial billing is commercial, whereas Watson's model is transpersonal."
    },
    clinicalPearl: "Jean Watson: A 'Caring Moment' is when nurse and patient connect on a soul-to-soul level that heals both the patient and the nurse.",
    tags: ["Jean-Watson", "caring-moment", "transpersonal", "nursing-philosophy"]
  },
  {
    id: "FON-149",
    course: "Fundamentals of Nursing (FON)",
    topic: "Pain Assessment & Management",
    subtopic: "Addiction vs Physical Dependence vs Tolerance",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A chronic cancer patient receiving high-dose morphine requires progressive dosage increases over six months to maintain the same level of pain relief. How should the nurse define this pharmacological phenomenon?",
    options: [
      "Drug Tolerance (a state of physiological adaptation where exposure to a drug induces changes resulting in diminished effects over time)",
      "Psychological Addiction / Substance Use Disorder",
      "Pseudo-addiction",
      "Malingering"
    ],
    correctAnswer: 0,
    rationale: "Drug Tolerance is a normal neurobiological adaptation where repeated exposure to an opioid results in diminished analgesic effect, requiring higher doses to achieve the original pain relief. It is NOT addiction. Addiction (Substance Use Disorder) is a chronic behavioral neurobiological disease characterized by impaired control over drug use, compulsive use, craving, and continued use despite harm.",
    optionRationales: {
      A: "Correct. Tolerance is a predictable physiological adaptation where higher doses are needed to produce the same effect.",
      B: "Addiction is psychological dependence and compulsive drug-seeking behavior despite harm.",
      C: "Pseudo-addiction is drug-seeking behavior driven by under-treated pain that resolves when pain is relieved.",
      D: "Malingering is fabricating symptoms for secondary financial or legal gain."
    },
    clinicalPearl: "Tolerance is NOT addiction! Needing a higher opioid dose to control worsening cancer pain is normal physiological tolerance. Do not withhold pain relief.",
    tags: ["opioid-tolerance", "addiction", "pain-management", "pharmacology", "comfort"]
  },
  {
    id: "FON-150",
    course: "Fundamentals of Nursing (FON)",
    topic: "Hemorrhage & Fluid Loss Management",
    subtopic: "Summary of Nursing Priorities in Severe Hemorrhage",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When managing an adult client admitted in severe, acute active hemorrhage, what is the correct sequential order of emergency nursing priorities?",
    options: [
      "Apply direct pressure to stop active external bleeding → Ensure airway and high-flow oxygen → Establish two large-bore IV lines (14–16G) and infuse warm fluids/blood → Position in modified Trendelenburg → Monitor vitals and urine output",
      "Take a 40-minute family medical history before touching the bleeding wound",
      "Administer oral water to drink while waiting for the pharmacy to open",
      "Elevate the head 90 degrees and encourage ambulation around the ward"
    ],
    correctAnswer: 0,
    rationale: "Priorities in acute severe hemorrhage: 1) Stop the bleeding immediately via direct pressure or tourniquet; 2) Maintain Airway and Breathing with high-flow oxygen; 3) Resuscitate circulation: secure two large-bore peripheral IV lines (14 or 16 gauge) and infuse warm crystalloids/blood products; 4) Position in modified Trendelenburg (legs elevated, trunk flat); 5) Monitor vital signs and insert a Foley catheter to track end-organ perfusion (urine output >=0.5 mL/kg/hr).",
    optionRationales: {
      A: "Correct. Stop bleeding → Airway/Oxygen → Two large-bore IV lines with warm fluids/blood → Shock positioning → Monitor vitals and urine.",
      B: "Taking non-urgent history while a patient bleeds to death is fatal clinical negligence.",
      C: "Oral water in a shock patient risks aspiration and fails to restore intravascular blood volume.",
      D: "Sitting upright and ambulating causes circulatory collapse and syncope."
    },
    clinicalPearl: "Hemorrhage priorities: Stop the bleed, give oxygen, start two large-bore IVs (16-gauge), give warm fluids/blood, and watch the urine output.",
    tags: ["hemorrhage-management", "nursing-priorities", "hypovolemic-shock", "large-bore-IV", "resuscitation"]
  }
];

export default fundamentalsQuestions;

