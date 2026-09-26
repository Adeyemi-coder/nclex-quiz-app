// src/data/courses/emergency.js
// NMCN Emergency & Disaster Nursing - Part 1: Questions EMG-001 to EMG-050

export const emergencyQuestions = [
  {
    id: "EMG-001",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "Simple Triage and Rapid Treatment (START) Algorithm",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During a mass casualty explosion incident, a triage nurse evaluates an adult casualty who is initially apneic. After the nurse manually positions and opens the airway, the patient begins breathing spontaneously at 28 breaths per minute. Under the START triage protocol, which color-coded category should the nurse assign to this victim?",
    options: [
      "RED Tag (Immediate)",
      "BLACK Tag (Deceased/Expectant)",
      "YELLOW Tag (Delayed)",
      "GREEN Tag (Minor/Walking Wounded)"
    ],
    correctAnswer: 0,
    rationale: "In the START algorithm: 1) Can the patient walk? If yes → Green. 2) If spontaneous breathing is absent, open the airway. If breathing does not start → Black. If the patient starts breathing after opening the airway (or if respiratory rate is >30 bpm) → RED Tag (Immediate).",
    optionRationales: {
      A: "Correct. A casualty who starts breathing after airway opening is assigned an immediate RED tag.",
      B: "Black is assigned only if the patient remains apneic after manually opening the airway.",
      C: "Yellow is reserved for casualties with delayed priority who can wait hours for surgery.",
      D: "Green is for ambulatory 'walking wounded' individuals."
    },
    clinicalPearl: "START Rule: If an apneic casualty starts breathing after you open the airway, tag them RED immediately. If they stay apneic, tag them BLACK.",
    tags: ["START-triage", "disaster", "mass-casualty", "red-tag", "airway"]
  },
  {
    id: "EMG-002",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Primary Survey (ABCDE Sequence)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In the Advanced Trauma Life Support (ATLS) primary survey protocol, what is the mandatory immediate action that must be taken while securing the 'A' (Airway)?",
    options: [
      "Simultaneously maintaining manual in-line cervical spine stabilization or immobilization",
      "Infusing 2 liters of ice-cold normal saline through a central line",
      "Inserting a nasogastric tube to evacuate stomach contents",
      "Splinting closed fractures of the lower extremities"
    ],
    correctAnswer: 0,
    rationale: "In trauma care, 'A' stands for Airway with Cervical Spine Protection. Any blunt trauma victim is presumed to have an unstable cervical spine fracture until proven otherwise. The airway must never be opened with a head-tilt chin-lift; it must be assessed using a jaw-thrust maneuver while maintaining manual in-line cervical stabilization.",
    optionRationales: {
      A: "Correct. Cervical spine protection must be maintained simultaneously while securing the airway.",
      B: "Large-bore fluid resuscitation occurs during 'C' (Circulation), using warmed fluids.",
      C: "Nasogastric tube insertion is an adjunct to the secondary survey and is contraindicated if basilar skull fracture is suspected.",
      D: "Extremity splinting occurs later in 'E' (Exposure) or the secondary survey."
    },
    clinicalPearl: "In blunt trauma: Airway always means 'Airway AND Cervical Spine Stabilization'. Use a modified jaw-thrust, never a head-tilt.",
    tags: ["primary-survey", "ATLS", "airway", "cervical-spine", "trauma"]
  },
  {
    id: "EMG-003",
    course: "Emergency & Disaster Nursing",
    topic: "Thoracic Trauma Emergencies",
    subtopic: "Tension Pneumothorax Emergency Decompression",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A trauma patient presents with extreme respiratory distress, tracheal deviation to the right, absent breath sounds over the left hemithorax, distended neck veins, and a blood pressure of 70/40 mmHg (Tension Pneumothorax). What is the nurse's immediate emergency action before a chest radiograph is performed?",
    options: [
      "Assist with immediate emergency needle thoracostomy (decompression) using a large-bore needle in the 2nd intercostal space midclavicular line (or 4th/5th space anterior axillary line)",
      "Send the unstable patient to the radiology department for an urgent erect chest X-ray",
      "Administer an intravenous bolus of furosemide to reduce pulmonary vascular congestion",
      "Perform endotracheal intubation and start positive pressure ventilation with 100% PEEP"
    ],
    correctAnswer: 0,
    rationale: "Tension pneumothorax is a clinical diagnosis that causes obstructive shock by compressing the superior and inferior vena cava. Waiting for a chest X-ray is lethal negligence. Immediate life-saving needle decompression converts the tension pneumothorax into a simple pneumothorax, restoring venous return and cardiac output, followed by tube thoracostomy.",
    optionRationales: {
      A: "Correct. Immediate needle decompression restores venous return and prevents cardiac arrest.",
      B: "Never transport an unstable tension pneumothorax patient to radiology; it is a clinical diagnosis.",
      C: "Furosemide worsens hypoperfusion in obstructive shock.",
      D: "Positive-pressure ventilation increases intrathoracic pressure, worsening circulatory collapse."
    },
    clinicalPearl: "Tension pneumothorax = Clinical diagnosis (tracheal shift + hypotension + absent breath sounds). Decompress immediately with a needle; NEVER wait for an X-ray.",
    tags: ["tension-pneumothorax", "needle-decompression", "thoracic-trauma", "ATLS", "obstructive-shock"]
  },
  {
    id: "EMG-004",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "Triage Color Coding Categories",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under the international disaster triage tagging system, what clinical status does a YELLOW Tag signify?",
    options: [
      "Delayed Priority (serious injuries requiring medical care, but can wait hours without immediate threat to life or limb)",
      "Immediate Priority (life-threatening airway, breathing, or circulatory compromise needing intervention within minutes)",
      "Minor Priority (walking wounded with abrasions and superficial sprains)",
      "Expectant / Deceased (dead or catastrophic non-survivable injuries)"
    ],
    correctAnswer: 0,
    rationale: "Triage categories: 1) Red (Immediate): Life-threatening, needs care within 1 hour; 2) Yellow (Delayed): Serious, non-immediately life-threatening (e.g., closed fractures, stable abdominal pain), care can be delayed 2 to 4 hours; 3) Green (Minor): Ambulatory walking wounded; 4) Black (Expectant/Morgue): Dead or unsalvageable.",
    optionRationales: {
      A: "Correct. Yellow indicates delayed priority; treatment is needed, but life is not in immediate danger.",
      B: "Immediate life threats are tagged RED.",
      C: "Walking wounded are tagged GREEN.",
      D: "Deceased or non-survivable casualties are tagged BLACK."
    },
    clinicalPearl: "Triage colors: Red = 1st priority (Immediate); Yellow = 2nd priority (Delayed); Green = 3rd priority (Minor); Black = Expectant/Dead.",
    tags: ["triage", "yellow-tag", "mass-casualty", "disaster-management"]
  },
  {
    id: "EMG-005",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Anaphylactic Shock Management",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "Two minutes after an intravenous injection of ampicillin, a client develops stridor, facial angioedema, widespread hives, wheezing, and a blood pressure of 75/40 mmHg. What is the drug, dose, and route of choice to administer immediately?",
    options: [
      "Epinephrine (Adrenaline) 1:1,000 (0.5 mg / 0.5 mL) administered Intramuscularly into the anterolateral mid-thigh",
      "Hydrocortisone 200 mg administered orally with a glass of water",
      "Diphenhydramine 50 mg administered subcutaneously into the deltoid",
      "Epinephrine 1:10,000 (10 mg) administered by rapid intravenous push"
    ],
    correctAnswer: 0,
    rationale: "Intramuscular Epinephrine (1:1,000 concentration, 0.3 to 0.5 mg in adults) into the anterolateral thigh (vastus lateralis) is the first-line medication for anaphylaxis. Epinephrine stimulates alpha-1 (vasoconstriction, raises BP), beta-1 (inotropic/chronotropic), and beta-2 receptors (bronchodilation and stabilizes mast cell membranes). Antihistamines and steroids are secondary adjuncts.",
    optionRationales: {
      A: "Correct. Epinephrine 1:1,000 IM (0.3–0.5 mg) into the mid-thigh is the first-line treatment for anaphylactic shock.",
      B: "Steroids take hours to take effect and cannot be swallowed during acute airway angioedema.",
      C: "Antihistamines are secondary adjuncts; they do not reverse life-threatening airway collapse or shock.",
      D: "A 10 mg IV bolus of Epinephrine is a lethal overdose that triggers cerebral hemorrhage and ventricular fibrillation."
    },
    clinicalPearl: "Anaphylaxis first-line treatment: Epinephrine 1:1,000 (0.5 mL IM in adults) into the anterolateral thigh. Repeat every 5 to 15 minutes if unreversed.",
    tags: ["anaphylaxis", "epinephrine", "distributive-shock", "emergency-drugs"]
  },
  {
    id: "EMG-006",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "BLS Adult Chest Compression Standards",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under the Basic Life Support (BLS) guidelines for adult cardiopulmonary resuscitation (CPR), what are the correct rate and depth parameters for high-quality chest compressions?",
    options: [
      "Rate of 100 to 120 compressions per minute, and depth of at least 2 inches (5 cm) but not more than 2.4 inches (6 cm)",
      "Rate of 60 compressions per minute, and depth of 1 inch (2.5 cm)",
      "Rate of 150 compressions per minute, and depth of 4 inches (10 cm)",
      "Rate of 80 compressions per minute with incomplete recoil allowed"
    ],
    correctAnswer: 0,
    rationale: "High-quality CPR standards: 1) Rate of 100–120 compressions/min, 2) Depth of at least 2 inches (5 cm) to a maximum of 2.4 inches (6 cm) in adults, 3) Allow full chest recoil between compressions, 4) Minimize interruptions (<10 seconds), and 5) Avoid excessive ventilation.",
    optionRationales: {
      A: "Correct. 100–120 compressions per minute at a depth of 5–6 cm defines high-quality CPR.",
      B: "60 compressions/min and 1 inch depth provide inadequate cerebral and coronary perfusion.",
      C: "150 compressions/min impairs ventricular filling, and 4 inches causes cardiac rupture and lung trauma.",
      D: "Incomplete recoil raises intrathoracic pressure and impairs venous return to the heart."
    },
    clinicalPearl: "High-quality CPR: Push hard (at least 2 inches/5 cm), push fast (100–120 bpm), allow full recoil, and minimize interruptions.",
    tags: ["CPR", "BLS", "chest-compressions", "cardiac-arrest", "resuscitation"]
  },
  {
    id: "EMG-007",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "Parkland Fluid Resuscitation Formula",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A 70 kg adult patient sustains full-thickness thermal burns over 40% of Total Body Surface Area (TBSA). Using the standard Parkland (Baxter) Formula (4 mL x kg x % TBSA), what is the total volume of Ringer's Lactate to be administered in the first 24 hours, and how much is given in the first 8 hours post-injury?",
    options: [
      "Total volume = 11,200 mL; Give 5,600 mL in the first 8 hours, and remaining 5,600 mL over the next 16 hours",
      "Total volume = 5,600 mL; Give 2,800 mL in the first 8 hours",
      "Total volume = 22,400 mL; Give all volume within the first 4 hours",
      "Total volume = 4,000 mL administered at a constant rate of 100 mL/hr"
    ],
    correctAnswer: 0,
    rationale: "Parkland Formula: 4 mL x weight (kg) x % TBSA = 4 x 70 x 40 = 11,200 mL of Ringer's Lactate. Administration timing: Give half (50% = 5,600 mL) in the first 8 hours calculated from the time of the burn, and the remaining half (5,600 mL) over the subsequent 16 hours.",
    optionRationales: {
      A: "Correct. 4 x 70 x 40 = 11,200 mL. Half (5,600 mL) in the first 8 hours, and half in the next 16 hours.",
      B: "5,600 mL uses a 2 mL formula rather than the standard 4 mL Parkland calculation.",
      C: "22,400 mL is an overdose that causes burn shock pulmonary edema and abdominal compartment syndrome.",
      D: "Constant infusion rates fail to counteract early massive capillary leak."
    },
    clinicalPearl: "Parkland clock starts at the TIME OF INJURY, not hospital arrival. Half the total volume must be infused within the first 8 hours of the burn.",
    tags: ["burns", "Parkland-formula", "fluid-resuscitation", "Ringers-lactate", "TBSA"]
  },
  {
    id: "EMG-008",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Organophosphate Insecticide Poisoning",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A farmer is brought to the emergency department after spraying agricultural insecticides without protective equipment. He presents with pinpoint pupils (miosis), profuse salivation, lacrimation, urination, diarrhea, bronchorrhea with wheezing, and bradycardia (cholinergic toxidrome). What is the antidote of choice?",
    options: [
      "Atropine sulfate IV (titrated until tracheobronchial secretions are dry), followed by Pralidoxime (2-PAM)",
      "Naloxone IV push",
      "N-acetylcysteine orally",
      "Flumazenil IV bolus"
    ],
    correctAnswer: 0,
    rationale: "Organophosphates inhibit acetylcholinesterase, producing acetylcholine accumulation and massive cholinergic crisis (SLUDGEM: Salivation, Lacrimation, Urination, Defecation, GI cramping, Emesis, Miosis/Muscle spasms). Atropine is a muscarinic antagonist given to clear bronchorrhea and bronchoconstriction. Pralidoxime (2-PAM) reactivates cholinesterase if administered early.",
    optionRationales: {
      A: "Correct. Atropine reverses lethal bronchorrhea and bradycardia; Pralidoxime reactivates acetylcholinesterase.",
      B: "Naloxone is the antidote for opioid overdose, not organophosphates.",
      C: "N-acetylcysteine is the antidote for acetaminophen (paracetamol) hepatotoxicity.",
      D: "Flumazenil is the antidote for benzodiazepines."
    },
    clinicalPearl: "In organophosphate poisoning, titrate Atropine to clear LUNG SECRETIONS (bronchorrhea), not to dilate pupils or control tachycardia.",
    tags: ["organophosphate", "toxicology", "atropine", "pralidoxime", "SLUDGEM"]
  },
  {
    id: "EMG-009",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Shockable vs Non-Shockable Cardiac Rhythms",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A monitor attached to a pulseless, unresponsive adult in the emergency ward shows a flat baseline without electrical activity (Asystole). What is the correct initial resuscitation intervention?",
    options: [
      "Continue high-quality CPR, secure vascular access, administer Epinephrine 1 mg IV every 3–5 minutes, and search for reversible causes (do NOT defibrillate)",
      "Deliver an immediate unsynchronized 200 Joules biphasic shock",
      "Perform synchronized cardioversion at 50 Joules",
      "Discontinue all resuscitation immediately because asystole is irreversible"
    ],
    correctAnswer: 0,
    rationale: "ACLS cardiac arrest rhythms are divided into: 1) Shockable: Ventricular Fibrillation (VF) and Pulseless Ventricular Tachycardia (pVT); 2) Non-Shockable: Asystole and Pulseless Electrical Activity (PEA). Asystole cannot be shocked (defibrillation is useless on an empty electrical baseline). Management requires CPR, Epinephrine 1 mg IV every 3–5 minutes, and identifying reversible causes (H's and T's).",
    optionRationales: {
      A: "Correct. Asystole is non-shockable; provide CPR, Epinephrine, and treat reversible causes.",
      B: "Defibrillating asystole causes myocardial thermal damage and does not restore electrical rhythms.",
      C: "Synchronized cardioversion requires an identified R-wave, which is absent in asystole.",
      D: "Asystole can be reversed if treated early, especially if caused by hypoxia, hypovolemia, or hyperkalemia."
    },
    clinicalPearl: "Shockable = VF and Pulseless VT. Non-Shockable = Asystole and PEA. Never shock asystole; give CPR and Epinephrine.",
    tags: ["asystole", "ACLS", "cardiac-arrest", "non-shockable", "epinephrine"]
  },
  {
    id: "EMG-010",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "The Rule of Nines in Adults",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "An adult patient sustains partial-thickness burns involving the entire anterior torso (chest and abdomen) and the entire right upper extremity. Using Wallace's Rule of Nines, what is the estimated burn percentage of Total Body Surface Area (TBSA)?",
    options: [
      "27% TBSA",
      "18% TBSA",
      "36% TBSA",
      "9% TBSA"
    ],
    correctAnswer: 0,
    rationale: "According to the adult Rule of Nines: Entire anterior torso (chest + abdomen) = 18%; Entire right upper extremity (arm + forearm + hand, front and back) = 9%. Total TBSA burned = 18% + 9% = 27%.",
    optionRationales: {
      A: "Correct. 18% (anterior torso) + 9% (entire arm) = 27% TBSA.",
      B: "18% accounts for the anterior torso alone, missing the right arm.",
      C: "36% overestimates by counting both anterior and posterior torsos.",
      D: "9% accounts only for the arm."
    },
    clinicalPearl: "Rule of Nines (Adult): Head = 9%, Each Arm = 9%, Anterior Trunk = 18%, Posterior Trunk = 18%, Each Leg = 18%, Perineum = 1%.",
    tags: ["burns", "Rule-of-Nines", "TBSA", "assessment"]
  },
  {
    id: "EMG-011",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "Phases of the Disaster Management Cycle",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In public safety and disaster nursing, what are the four sequential phases of the comprehensive Disaster Management Cycle?",
    options: [
      "Mitigation (Prevention) → Preparedness → Response → Recovery",
      "Triage → Transportation → Treatment → Billing",
      "Accident → Evacuation → Autopsy → Settlement",
      "Warning → Shock → Panic → Resignation"
    ],
    correctAnswer: 0,
    rationale: "The Disaster Management Cycle consists of four phases: 1) Mitigation (prevention activities to reduce the likelihood of disaster impact), 2) Preparedness (training drills, stockpiling, planning before disaster occurs), 3) Response (immediate search, rescue, triage, and emergency medical care during the event), and 4) Recovery (rebuilding infrastructure and long-term rehabilitation).",
    optionRationales: {
      A: "Correct. Mitigation, Preparedness, Response, and Recovery form the classic disaster cycle.",
      B: "This describes hospital clinical operational steps, not the comprehensive disaster cycle.",
      C: "These are forensic legal stages following an accident.",
      D: "These describe emotional psychological crisis phases."
    },
    clinicalPearl: "Disaster cycle: Mitigation (prevent) → Preparedness (plan/train) → Response (rescue/treat) → Recovery (rebuild).",
    tags: ["disaster-cycle", "mitigation", "preparedness", "response", "recovery"]
  },
  {
    id: "EMG-012",
    course: "Emergency & Disaster Nursing",
    topic: "Thoracic Trauma Emergencies",
    subtopic: "Flail Chest and Paradoxical Breathing",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A driver involved in a frontal motor collision presents with severe thoracic pain, cyanosis, and paradoxical chest wall movement (the injured chest segment sucks inward on inspiration and bulges outward on expiration). What thoracic pathology has occurred?",
    options: [
      "Flail Chest (fracture of three or more adjacent ribs in two or more places)",
      "Simple clavicular fracture",
      "Tracheal transection",
      "Diaphragmatic hernia"
    ],
    correctAnswer: 0,
    rationale: "Flail chest occurs when three or more contiguous ribs are fractured in two or more places, creating a detached, floating segment of the chest wall. The segment moves paradoxically with intrapleural pressure swings: sucked inward during negative-pressure inspiration and pushed outward during positive-pressure expiration, causing hypoxemia and underlying pulmonary contusion.",
    optionRationales: {
      A: "Correct. Flail chest creates a floating segment that displays paradoxical breathing.",
      B: "A clavicular fracture produces localized pain and shoulder drop, not paradoxical breathing.",
      C: "Tracheal transection causes massive surgical emphysema and rapid airway obstruction.",
      D: "Diaphragmatic rupture displaces abdominal viscera into the thorax, but does not cause detached paradoxical rib motion."
    },
    clinicalPearl: "Paradoxical motion (inward on inspiration, outward on expiration) is the hallmark of Flail Chest. Management focuses on pain control, oxygenation, and positive-pressure ventilation if needed.",
    tags: ["flail-chest", "paradoxical-breathing", "thoracic-trauma", "rib-fractures"]
  },
  {
    id: "EMG-013",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Neurogenic Shock vs Hypovolemic Shock",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A client who sustained a high cervical spinal cord injury (C5) following a diving accident presents with a blood pressure of 80/40 mmHg. Which clinical sign distinguishes Neurogenic Shock from Hypovolemic Shock?",
    options: [
      "Bradycardia and warm, dry skin below the level of the injury",
      "Severe tachycardia and cold, clammy, pale skin",
      "Marked tachypnea with flat neck veins",
      "Profuse generalized diaphoresis across all extremities"
    ],
    correctAnswer: 0,
    rationale: "Neurogenic shock is a form of distributive shock caused by the loss of sympathetic vasomotor tone below the level of a high spinal cord injury (T6 or above). Unlike hypovolemic shock (which produces compensatory tachycardia and cold, clammy vasoconstriction), neurogenic shock presents with the triad of Hypotension, Bradycardia (unopposed vagal tone), and Warm, dry skin (widespread peripheral vasodilation).",
    optionRationales: {
      A: "Correct. Neurogenic shock is characterized by hypotension with Bradycardia and warm, dry skin.",
      B: "Tachycardia and cold, clammy skin are classic signs of hypovolemic or cardiogenic shock.",
      C: "Tachypnea is absent if high cervical injury paralyzes the diaphragm and intercostals.",
      D: "Sympathetic disruption eliminates sweating below the cord lesion, leaving skin dry."
    },
    clinicalPearl: "Hypovolemic Shock = Low BP + FAST pulse + Cold skin. Neurogenic Shock = Low BP + SLOW pulse + Warm/dry skin.",
    tags: ["neurogenic-shock", "spinal-cord-injury", "bradycardia", "shock-syndromes"]
  },
  {
    id: "EMG-014",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "External Massive Hemorrhage Control",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In catastrophic extremity trauma with pulsatile, life-threatening arterial hemorrhage, what is the recommended immediate first-line intervention under tactical combat casualty and modern trauma care guidelines?",
    options: [
      "Application of direct manual pressure over the bleeding site, and placement of a commercial arterial Tourniquet proximal to the wound if bleeding is uncontrolled",
      "Immediate immersion of the limb in boiling water to coagulate blood",
      "Applying warm sand onto the open wound bed",
      "Waiting for cross-matched blood before touching the limb"
    ],
    correctAnswer: 0,
    rationale: "Life-threatening external arterial bleeding (catastrophic hemorrhage) must be controlled immediately (the 'C' in modern <C>ABC protocols). First apply direct manual pressure with gauze; if bleeding continues from an extremity, apply a mechanical arterial tourniquet 2 to 3 inches proximal to the wound (tightened until bleeding stops and distal pulse vanishes).",
    optionRationales: {
      A: "Correct. Direct pressure followed by proximal arterial tourniquet placement is standard protocol for limb hemorrhage.",
      B: "Boiling water burns tissue and worsens hemorrhage.",
      C: "Sand causes gross wound infection and foreign body contamination.",
      D: "Waiting for donor blood while a patient bleeds to death from an uncompressed artery is fatal neglect."
    },
    clinicalPearl: "In severe limb bleeding: Apply direct pressure. If arterial bleeding continues, apply a Tourniquet proximal to the wound and note the application time.",
    tags: ["hemorrhage-control", "tourniquet", "trauma", "arterial-bleed", "first-aid"]
  },
  {
    id: "EMG-015",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Paracetamol (Acetaminophen) Poisoning",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A teenager ingests 40 tablets of Paracetamol (20 grams) in a suicide attempt 4 hours ago. What specific antidote must be administered to replenish hepatic glutathione and prevent centrilobular liver failure?",
    options: [
      "N-Acetylcysteine (NAC)",
      "Deferoxamine",
      "Atropine sulfate",
      "Dimercaprol (BAL)"
    ],
    correctAnswer: 0,
    rationale: "Paracetamol toxicity occurs when the toxic metabolite N-acetyl-p-benzoquinone imine (NAPQI) depletes hepatic glutathione, causing centrilobular hepatic necrosis. N-Acetylcysteine (NAC) acts as a glutathione precursor and substitute, binding and detoxifying NAPQI. It is most effective when administered within 8 hours of ingestion.",
    optionRationales: {
      A: "Correct. N-Acetylcysteine (NAC) replenishes glutathione stores, preventing toxic liver necrosis.",
      B: "Deferoxamine is the chelating antidote for acute iron poisoning.",
      C: "Atropine is the antidote for organophosphates and cholinergic poisoning.",
      D: "Dimercaprol (BAL) is a chelator for arsenic, mercury, and lead poisoning."
    },
    clinicalPearl: "Paracetamol antidote = N-Acetylcysteine (NAC). Administer as early as possible (ideally within 8 hours) to prevent fatal liver failure.",
    tags: ["paracetamol", "acetaminophen", "antidote", "N-acetylcysteine", "toxicology"]
  },
  {
    id: "EMG-016",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Defibrillation Waveforms and Safety",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Before discharging an electrical shock from a manual defibrillator to a patient in Ventricular Fibrillation (VF), what safety command must the nurse announce loudly to prevent accidental electrocution of staff?",
    options: [
      "'I am clear, you are clear, everybody is clear!' (while visually confirming no team member is touching the bed or patient)",
      "'Shocking now, everyone hold the patient tight!'",
      "'Turn on the oxygen tanks to full flow!'",
      "'Please start chest compressions while the shock delivers!'"
    ],
    correctAnswer: 0,
    rationale: "Defibrillator safety is essential to prevent operator and bystander injury. The operator must loudly issue the 'CLEAR' warning ('I'm clear, you're clear, all clear!'), perform a 360-degree visual scan to ensure no one is touching the bed, patient, or IV poles, and verify oxygen sources are disconnected or diverted away from the chest before pressing the shock buttons.",
    optionRationales: {
      A: "Correct. Announcing the clear command and visually verifying no contact prevents electric shock to the team.",
      B: "Touching the patient during a shock conducts electrical current to the rescuer.",
      C: "Free flowing oxygen near defibrillator paddles can spark an open flash fire.",
      D: "Compressing during discharge shocks the rescuer."
    },
    clinicalPearl: "Defibrillator safety: Say 'CLEAR', look around 360 degrees to verify no one is touching the bed, and move open oxygen away before delivering the shock.",
    tags: ["defibrillation", "safety", "VF", "ACLS", "cardiac-arrest"]
  },
  {
    id: "EMG-017",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "Carbon Monoxide (CO) Poisoning",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A firefighter rescued from an enclosed burning building presents with headache, confusion, tachypnea, and bright cherry-red skin lips. His pulse oximeter reads 99% SpO2. What is the pathophysiological cause of this reading, and what is the definitive emergency treatment?",
    options: [
      "Carbon monoxide has 200 times higher affinity for hemoglobin than oxygen, forming Carboxyhemoglobin; standard pulse oximeters cannot distinguish carboxyhemoglobin from oxyhemoglobin; Treat with 100% High-Flow Oxygen via non-rebreather mask",
      "The pulse oximeter reading confirms normal arterial oxygen delivery; No treatment is required",
      "The firefighter is in hyperventilation alkalosis; Have him breathe into a paper bag",
      "Treat with nebulized salbutamol alone"
    ],
    correctAnswer: 0,
    rationale: "Carbon monoxide (CO) binds to hemoglobin with an affinity >200 times greater than oxygen, forming carboxyhemoglobin (HbCO) and shifting the dissociation curve to the left, preventing oxygen delivery to tissues. Standard two-wavelength pulse oximeters read HbCO as oxyhemoglobin, producing a falsely normal or high SpO2 (99%). Treatment is immediate 100% High-Flow Oxygen via a non-rebreather mask (which reduces the half-life of HbCO from 320 minutes to roughly 80 minutes) or hyperbaric oxygen.",
    optionRationales: {
      A: "Correct. High affinity forms HbCO, falsely elevating SpO2; treatment requires 100% high-flow O2.",
      B: "SpO2 is a false reading; the patient is experiencing severe tissue hypoxia.",
      C: "Rebreathing CO2 from a paper bag increases acidosis and hypoxic death.",
      D: "Bronchodilators do not displace carbon monoxide from hemoglobin."
    },
    clinicalPearl: "In smoke inhalation, never trust a normal pulse oximeter. CO poisoning gives a falsely high SpO2. Administer 100% high-flow oxygen immediately.",
    tags: ["carbon-monoxide", "inhalation-injury", "carboxyhemoglobin", "burns", "hyperbaric"]
  },
  {
    id: "EMG-018",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "BLACK Tag Criteria in Mass Casualties",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During a train derailment disaster with 200 casualties, a triage nurse assesses a victim with catastrophic open cranial trauma, exposed brain matter, and absent respirations despite positioning the airway. Under mass casualty triage principles, what tag should be applied?",
    options: [
      "BLACK Tag (Deceased/Expectant)",
      "RED Tag (Immediate)",
      "YELLOW Tag (Delayed)",
      "GREEN Tag (Minor)"
    ],
    correctAnswer: 0,
    rationale: "In disaster triage, the goal is doing the greatest good for the greatest number of salvageable victims. Casualties who are dead or who have catastrophic injuries with zero chance of survival given available field resources are tagged Black (Expectant/Morgue) to avoid diverting scarce resources away from salvageable Red-tag victims.",
    optionRationales: {
      A: "Correct. Non-breathing victims with catastrophic brain trauma are tagged Black (Expectant).",
      B: "Red tags are reserved for salvageable victims with life-threatening airway, breathing, or bleeding issues.",
      C: "Yellow tags are for stable casualties who can wait hours for surgery.",
      D: "Green tags are for ambulatory walking wounded."
    },
    clinicalPearl: "In disaster triage, Black tags are assigned to the dead or expectant (injuries incompatible with survival given available resources), preserving care for salvageable lives.",
    tags: ["triage", "black-tag", "mass-casualty", "expectant", "ethics"]
  },
  {
    id: "EMG-019",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Hypovolemic Shock Staging (Class III Shock)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Under the American College of Surgeons classification of hemorrhagic shock, what clinical parameters characterize Class III Hemorrhage (30% to 40% blood volume loss, roughly 1,500 to 2,000 mL in an adult)?",
    options: [
      "Marked hypotension, tachycardia (>120 bpm), tachypnea (30–40/min), oliguria (<20 mL/hr), and confusion/anxiety",
      "Normal blood pressure, normal pulse (<100 bpm), and normal urine output",
      "Slight tachycardia (100–120 bpm) with normal blood pressure and mild anxiety",
      "Complete absence of pulses with dilated fixed pupils"
    ],
    correctAnswer: 0,
    rationale: "Hemorrhagic shock stages: Class I (<15% loss): Normal vitals; Class II (15–30% loss): Tachycardia (>100), narrow pulse pressure, normal systolic BP; Class III (30–40% loss): Systolic blood pressure drops (hypotension), marked tachycardia (>120 bpm), tachypnea (30–40), marked oliguria (5–15 mL/hr), and confusion; Class IV (>40% loss): Severe hypotension, bradycardia, lethargy/coma.",
    optionRationales: {
      A: "Correct. Class III shock features marked hypotension, tachycardia >120 bpm, tachypnea, and oliguria.",
      B: "Describes Class I hemorrhage (<15% blood loss).",
      C: "Describes Class II compensated hemorrhage (15–30% loss).",
      D: "Describes terminal Class IV decompensation / perimortem arrest."
    },
    clinicalPearl: "Blood pressure drops in Class III hemorrhagic shock (30–40% blood loss). At this stage, crystalloid fluids alone are insufficient—the patient needs Blood products.",
    tags: ["hypovolemic-shock", "hemorrhage-classes", "Class-III-shock", "ATLS"]
  },
  {
    id: "EMG-020",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Snakebite Envenomation Management in Nigeria",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A farmer is bitten on the ankle by a Carpet Viper (Echis ocellatus) in rural Nigeria. He presents with local fang marks, non-clotting blood, bleeding gums, and swelling. What is the definitive emergency treatment, and what traditional practice is contraindicated?",
    options: [
      "Administer Polyvalent Snake Antivenom (SAV) IV; do NOT apply a tight arterial tourniquet, make incisional cuts, or attempt wound suctioning",
      "Apply a tight rubber tourniquet for 12 hours and cut the puncture site with a razor blade",
      "Apply black 'snake stones' and pour raw kerosene into the wound",
      "Amputate the lower extremity immediately"
    ],
    correctAnswer: 0,
    rationale: "Echis ocellatus venom causes severe consumption coagulopathy and tissue necrosis. Definitive treatment is Polyvalent Antivenom (SAV) given intravenously, evaluated using the 20-minute Whole Blood Clotting Test (20WBCT). Harmful traditional practices (cutting the wound, sucking out venom, applying snake stones, or tying arterial tourniquets) accelerate tissue gangrene, cause massive local hemorrhage, and do not stop systemic venom spread.",
    optionRationales: {
      A: "Correct. IV Antivenom is the definitive antidote; incisions, suction, and tourniquets are harmful.",
      B: "Arterial tourniquets and razor cuts cause tissue ischemia, limb gangrene, and uncontrolled bleeding.",
      C: "Snake stones and kerosene contaminate wounds and accelerate infection.",
      D: "Amputation is contraindicated; antivenom reverses the coagulopathy."
    },
    clinicalPearl: "Snakebite management: Immobilize the limb below heart level, avoid cuts or tight tourniquets, perform a 20-minute Whole Blood Clotting Test, and give Antivenom IV.",
    tags: ["snakebite", "antivenom", "Echis-ocellatus", "toxicology", "first-aid"]
  },
  {
    id: "EMG-021",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Secondary Survey & 'AMPLE' History",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "During the Secondary Survey of an alert trauma patient, the nurse gathers a focused history using the 'AMPLE' mnemonic. What does the 'M' in AMPLE stand for?",
    options: [
      "Medications currently taken",
      "Mechanism of catastrophic injury",
      "Medical insurance coverage",
      "Marital and family history"
    ],
    correctAnswer: 0,
    rationale: "The AMPLE mnemonic in trauma secondary assessment stands for: A = Allergies, M = Medications currently taken (especially anticoagulants, insulin, cardiovascular drugs), P = Past medical history / Pregnancy, L = Last meal or oral intake (important for anesthesia/aspiration risks), E = Events / Environment preceding the injury.",
    optionRationales: {
      A: "Correct. M stands for Medications currently taken.",
      B: "Mechanism of injury is assessed in the 'E' (Events) component.",
      C: "Insurance is an administrative detail, not a clinical trauma mnemonic component.",
      D: "Family lineage is not a priority during acute trauma assessment."
    },
    clinicalPearl: "AMPLE History: Allergies, Medications, Past history/Pregnancy, Last oral intake, Events leading to injury.",
    tags: ["AMPLE", "secondary-survey", "trauma-history", "ATLS"]
  },
  {
    id: "EMG-022",
    course: "Emergency & Disaster Nursing",
    topic: "Thoracic Trauma Emergencies",
    subtopic: "Open Pneumothorax ('Sucking Chest Wound')",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A trauma victim has an open penetrating chest wound with air audibly hissing in and out of the thoracic wall ('sucking chest wound'). What is the immediate first-aid dressing intervention before chest tube placement?",
    options: [
      "Apply a sterile occlusive dressing taped on THREE sides only (creating a flutter-valve effect)",
      "Cover the wound with porous open dry gauze taped firmly on all four sides",
      "Leave the hole open to atmospheric air without any cover",
      "Pack the hole with unsterile cotton wool soaked in methylated spirit"
    ],
    correctAnswer: 0,
    rationale: "An open pneumothorax allows air to enter the pleural space through the chest wall defect during inspiration. Covering the wound with an occlusive dressing (plastic wrap or petrolatum gauze) taped on THREE sides creates a one-way flutter valve: it closes against the wound on inspiration (preventing air from entering) and opens on expiration (allowing trapped air and blood to escape). Taping all four sides can convert it into a fatal tension pneumothorax.",
    optionRationales: {
      A: "Correct. A three-sided occlusive dressing acts as a one-way flutter valve, venting air on expiration.",
      B: "Taping all 4 sides traps intrapleural air, converting it into a lethal tension pneumothorax.",
      C: "Leaving it open allows continuous air sucking and progressive lung collapse.",
      D: "Packing with cotton introduces foreign bodies and chemical trauma."
    },
    clinicalPearl: "Sucking chest wound: Tape an occlusive dressing on THREE sides. On inspiration it seals; on expiration it flaps open to let trapped air escape.",
    tags: ["open-pneumothorax", "flutter-valve", "three-sided-dressing", "chest-trauma"]
  },
  {
    id: "EMG-023",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Reversible Causes of Cardiac Arrest (H's and T's)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "During active resuscitation of a patient in Pulseless Electrical Activity (PEA), the team searches for reversible underlying etiologies using the 'H's and T's' framework. Which grouping represents the reversible 'H's'?",
    options: [
      "Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, and Hypothermia",
      "Hypertension, Hyperglycemia, Hepatitis, Hemorrhoids, and Headache",
      "Hernia, Hydrocele, Hypercalcemia, Hematoma, and Hives",
      "Histamine, Hemophilia, Hyperthermia, Hallucinations, and Heartburn"
    ],
    correctAnswer: 0,
    rationale: "The ACLS reversible causes of cardiac arrest: 5 H's: 1) Hypovolemia, 2) Hypoxia, 3) Hydrogen ion (acidosis), 4) Hypo-/Hyperkalemia, 5) Hypothermia. 5 T's: 1) Tension pneumothorax, 2) Tamponade (cardiac), 3) Toxins, 4) Thrombosis (pulmonary - PE), 5) Thrombosis (coronary - MI).",
    optionRationales: {
      A: "Correct. Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, and Hypothermia.",
      B: "These are outpatient chronic medical conditions, not the ACLS cardiac arrest H's.",
      C: "These are anatomical and surgical conditions.",
      D: "These are miscellaneous symptoms unrelated to cardiac arrest arrest etiologies."
    },
    clinicalPearl: "In PEA and Asystole, you cannot shock. Search for and fix the 5 H's (fluids for Hypovolemia, oxygen for Hypoxia, bicarbonate/ventilation for Acidosis) and 5 T's.",
    tags: ["Hs-and-Ts", "PEA", "ACLS", "cardiac-arrest", "reversible-causes"]
  },
  {
    id: "EMG-024",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiovascular Emergencies",
    subtopic: "Cardiac Tamponade & Beck's Triad",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A patient sustains a penetrating stab wound to the precordium. The nurse observes Beck's Triad: profound hypotension with narrow pulse pressure, distended jugular neck veins, and muffled/distant heart sounds. What life-saving procedure is indicated?",
    options: [
      "Immediate emergency Pericardiocentesis (subxiphoid needle aspiration of the pericardial sac)",
      "High-dose intravenous loop diuretic therapy",
      "Immediate placement of bilateral intercostal chest tubes",
      "Inhalation of nebulized racemic epinephrine"
    ],
    correctAnswer: 0,
    rationale: "Beck's Triad (Hypotension, Muffled heart sounds, Jugular Venous Distension) indicates Acute Cardiac Tamponade: blood collects inside the rigid fibrous pericardium, compressing the ventricles and stopping diastolic filling. Emergency Pericardiocentesis (inserting an 18-gauge needle at a 45-degree angle beneath the xiphoid process toward the left shoulder) aspirates pericardial blood, relieving compression and restoring cardiac output.",
    optionRationales: {
      A: "Correct. Pericardiocentesis aspirates pericardial fluid to decompress the heart.",
      B: "Diuretics lower preload further, causing cardiovascular collapse in tamponade.",
      C: "Chest tubes drain the pleural space, but do not relieve blood trapped inside the pericardial sac.",
      D: "Racemic epinephrine treats laryngeal edema, not cardiac tamponade."
    },
    clinicalPearl: "Beck's Triad: 1) Low BP, 2) Distended neck veins, 3) Muffled heart sounds. Emergency fix: Pericardiocentesis (subxiphoid tap).",
    tags: ["cardiac-tamponade", "Becks-triad", "pericardiocentesis", "obstructive-shock"]
  },
  {
    id: "EMG-025",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Corrosive / Caustic Chemical Ingestions",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A child accidentally ingests concentrated liquid caustic soda (sodium hydroxide drain cleaner) 20 minutes ago. The child is crying, drooling, and has oral mucosal burns. Which intervention is strictly CONTRAINDICATED?",
    options: [
      "Inducing vomiting (emesis) with syrup of ipecac or administering gastric lavage",
      "Maintaining an open airway and assessing for stridor",
      "Providing intravenous fluid hydration",
      "Requesting an urgent endoscopic evaluation of the esophagus"
    ],
    correctAnswer: 0,
    rationale: "In corrosive/caustic ingestions (strong acids or alkalis), inducing vomiting or performing gastric lavage is strictly contraindicated. Vomiting forces the caustic agent back up through the esophagus and pharynx a second time, causing additional chemical liquefaction burns, esophageal perforation, and pulmonary aspiration. Neutralizing with acids or bases is also contraindicated due to exothermic heat release.",
    optionRationales: {
      A: "Correct. Inducing emesis or gastric lavage is contraindicated; it re-exposes the esophagus to caustic burns and risks perforation.",
      B: "Airway assessment is vital because laryngeal edema can develop rapidly.",
      C: "IV hydration supports circulation when oral intake is suspended.",
      D: "Early endoscopy (within 24 hours) evaluates the degree of esophageal mucosal necrosis."
    },
    clinicalPearl: "Caustic ingestion rule: NEVER induce vomiting, NEVER give activated charcoal, and NEVER try to neutralize with acids. It re-burns the esophagus on the way up.",
    tags: ["corrosive-ingestion", "caustic-poisoning", "contraindications", "airway-safety"]
  },
  {
    id: "EMG-026",
    course: "Emergency & Disaster Nursing",
    topic: "Neurological & Head Trauma Emergencies",
    subtopic: "Cushing's Triad (Increased Intracranial Pressure)",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A patient with severe traumatic brain injury demonstrates a deteriorating Glasgow Coma Scale score. The nurse detects Cushing's Triad on vital sign assessment. Which combination of signs constitutes this life-threatening indicator of impending brainstem herniation?",
    options: [
      "Systolic hypertension with widening pulse pressure, Bradycardia, and Irregular/depressed respirations",
      "Hypotension, Tachycardia, and Rapid shallow tachypnea",
      "Severe hypothermia, Flat neck veins, and Polyuria",
      "Bilateral constricted pinpoint pupils with hyperreflexia"
    ],
    correctAnswer: 0,
    rationale: "Cushing's Triad is a late physiological response to severely elevated Intracranial Pressure (ICP) and impending transtentorial herniation: 1) Systolic Hypertension with a widened pulse pressure (a compensatory sympathetic reflex to overcome high ICP and maintain cerebral perfusion pressure), 2) Bradycardia (baroreceptor response to high systolic pressure), and 3) Irregular, Cheyne-Stokes, or depressed respirations (compression of the medullary respiratory center).",
    optionRationales: {
      A: "Correct. High systolic BP with wide pulse pressure + Bradycardia + Irregular respirations = Cushing's Triad.",
      B: "Hypotension with tachycardia characterizes hypovolemic or septic shock.",
      C: "These signs suggest hypovolemic or diabetic ketoacidosis states, not intracranial herniation.",
      D: "Uncal herniation typically produces an ipsilateral dilated, fixed pupil, not bilaterally pinpoint pupils."
    },
    clinicalPearl: "Cushing's Triad is the opposite of Shock: Shock = Low BP + Fast Pulse. Cushing's Triad (High ICP) = High BP + Slow Pulse + Irregular breathing.",
    tags: ["Cushings-triad", "increased-ICP", "head-trauma", "brainstem-herniation", "neurology"]
  },
  {
    id: "EMG-027",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "Circumferential Extremity Burns & Escharotomy",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client with full-thickness circumferential burns to the right forearm develops cyanotic fingers, absent radial pulses on Doppler ultrasound, severe pain, and paresthesia. What emergency surgical bedside intervention is required to restore arterial perfusion?",
    options: [
      "Bedside Escharotomy (surgical incision through the leathery, non-elastic burn eschar to relieve compartment pressure)",
      "Application of hot wet towels to soften the eschar",
      "Elevating the limb on four pillows above the head without surgery",
      "Immediate mid-forearm amputation"
    ],
    correctAnswer: 0,
    rationale: "Full-thickness circumferential burns form a tough, unyielding, leathery eschar. As post-burn interstitial edema accumulates beneath the eschar, tissue pressure rises within the limb, compressing veins, nerves, and arteries (burn compartment syndrome). Emergency Escharotomy (linear surgical incisions through the burned, insensitive eschar down into subcutaneous fat) releases the constriction, restoring arterial blood flow.",
    optionRationales: {
      A: "Correct. Escharotomy releases the tourniquet-like effect of the leathery eschar to restore distal circulation.",
      B: "Wet towels do not relieve mechanical compartment pressure.",
      C: "Elevation alone is insufficient when tissue pressure exceeds arteriolar perfusion pressure.",
      D: "Amputation is an unnecessary and irreversible step; escharotomy salvages the limb."
    },
    clinicalPearl: "Circumferential full-thickness burns act like a tightening tourniquet as edema builds up. Loss of distal pulses warrants an immediate Escharotomy.",
    tags: ["escharotomy", "compartment-syndrome", "circumferential-burns", "limb-salvage"]
  },
  {
    id: "EMG-028",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Adult Automated External Defibrillator (AED) Pad Placement",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Where should the two adhesive defibrillator pads of an Automated External Defibrillator (AED) be placed on an adult in cardiac arrest?",
    options: [
      "Right upper chest (below the right clavicle) and Left lower chest (midaxillary line below the left nipple)",
      "Directly over the center of the sternum and over the spine",
      "Across both lower abdominal quadrants",
      "Over the left anterior shoulder and over the right knee"
    ],
    correctAnswer: 0,
    rationale: "The standard anterolateral pad position for defibrillation: 1) One pad on the patient's upper right chest directly below the clavicle; 2) The other pad on the lateral left chest, midaxillary line, roughly 7 cm below the axilla (beside the left nipple). This aligns the electrical vector directly through the ventricular myocardium.",
    optionRationales: {
      A: "Correct. Anterolateral position: Right infraclavicular and Left lower lateral chest (midaxillary).",
      B: "Placing a pad over the sternal bone creates high electrical impedance.",
      C: "Abdominal placement misses the heart vector entirely.",
      D: "Shoulder and knee placement does not direct current through the myocardium."
    },
    clinicalPearl: "AED pad positions: Upper right chest (below collarbone) and Lower left side (ribs below armpit).",
    tags: ["AED", "pad-placement", "defibrillation", "BLS", "cardiac-arrest"]
  },
  {
    id: "EMG-029",
    course: "Emergency & Disaster Nursing",
    topic: "Abdominal & Pelvic Trauma Emergencies",
    subtopic: "Unstable Pelvic Fractures & Pelvic Binders",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A pedestrian struck by a vehicle presents in hemorrhagic shock with an unstable 'open-book' pelvic fracture. What immediate stabilizing intervention reduces retroperitoneal pelvic volume and controls venous hemorrhage?",
    options: [
      "Application of a commercial Pelvic Binder (or bedsheet wrapped tightly) centered over the Greater Trochanters of the femurs",
      "Forcibly rocking the iliac crests back and forth every 5 minutes to verify instability",
      "Placing the patient in High-Fowler position",
      "Immediate manual reduction of the hip joint"
    ],
    correctAnswer: 0,
    rationale: "Open-book pelvic fractures disrupt the pelvic ring, expanding internal retroperitoneal volume and tearing presacral venous plexuses and internal iliac arterial branches, which can accommodate up to 4 liters of blood. Applying a Pelvic Binder or tightly secured folded bedsheet centered directly over the Greater Trochanters (not over the soft iliac crests) closes the pelvic ring, tamponading venous bleeding and reducing pelvic volume.",
    optionRationales: {
      A: "Correct. Applying a pelvic binder over the Greater Trochanters closes the pelvic ring, tamponading venous hemorrhage.",
      B: "Rocking or springing an unstable pelvis dislodges clots, worsening internal bleeding.",
      C: "Sitting upright distorts pelvic mechanics and accelerates shock.",
      D: "Hip reduction does not stabilize retroperitoneal bleeding from the disrupted pelvic ring."
    },
    clinicalPearl: "Apply pelvic binders over the GREATER TROCHANTERS (the bony prominence of the upper hip), NOT the waist or iliac crests.",
    tags: ["pelvic-fracture", "pelvic-binder", "hemorrhage", "trauma", "open-book"]
  },
  {
    id: "EMG-030",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "GREEN Tag ('Walking Wounded') Management",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "At the initial scene of a mass casualty disaster, how does the triage officer quickly isolate and identify the 'GREEN' tag (Minor / Walking Wounded) casualties?",
    options: [
      "Announcing loudly: 'Anyone who can hear my voice and can walk, please walk to that safe designated triage tent over there!'",
      "Checking the pupillary light reflex on all victims simultaneously",
      "Drawing blood samples from everyone at the scene",
      "Placing all unconscious casualties into a commercial bus"
    ],
    correctAnswer: 0,
    rationale: "The first step in START triage is calling out to the crowd: 'Anyone who is injured and can walk, move to the designated area.' Those who can follow commands and walk independently are tagged GREEN (Minor / Walking Wounded). This clears the scene of ambulatory victims, allowing responders to focus on non-ambulatory Red and Yellow casualties.",
    optionRationales: {
      A: "Correct. Calling ambulatory casualties to move to a designated area isolates Green-tag walking wounded.",
      B: "Pupil exams on walking patients waste critical minutes during early scene triage.",
      C: "Phlebotomy has no place during early scene search and rescue.",
      D: "Unconscious casualties are non-ambulatory and require immediate Red/Black triage evaluations."
    },
    clinicalPearl: "Step 1 of START triage: Ask the walking wounded to walk to a safe area. That isolates all your GREEN tags in 30 seconds.",
    tags: ["START-triage", "green-tag", "walking-wounded", "mass-casualty"]
  },
  {
    id: "EMG-031",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Opioid Overdose & Naloxone Titration",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "A client is brought to the emergency department unconscious following an overdose of intravenous heroin. Assessment reveals the classic opioid overdose triad: coma, pinpoint pupils (miosis), and respiratory depression (4 breaths/min). What is the priority intervention?",
    options: [
      "Ventilate with a bag-valve-mask with oxygen, and administer Naloxone (0.4 to 2 mg IV/IM) titrated to restore spontaneous breathing",
      "Administer oral activated charcoal via nasogastric tube",
      "Administer intravenous flumazenil bolus",
      "Perform a rapid gastric lavage with iced saline"
    ],
    correctAnswer: 0,
    rationale: "Opioid toxicity causes life-threatening respiratory depression and hypoxemia. Priority management: Support ventilation immediately using a bag-valve-mask with 100% oxygen, and administer the pure opioid antagonist Naloxone (0.4 to 2 mg IV, IM, or intranasal). Titrate Naloxone to restore adequate spontaneous breathing without precipitating acute opioid withdrawal.",
    optionRationales: {
      A: "Correct. Bag-valve-mask ventilation and titrated Naloxone restores ventilation and reverses opioid depression.",
      B: "Oral charcoal in an un-intubated comatose patient carries high risk of fatal pulmonary aspiration.",
      C: "Flumazenil reverses benzodiazepines, not opioids, and can precipitate status epilepticus.",
      D: "Gastric lavage is useless for parenteral (intravenous) overdoses."
    },
    clinicalPearl: "Opioid Triad: Coma + Pinpoint pupils + Respiratory depression. Ventilate first, then give Naloxone to restore breathing.",
    tags: ["opioid-overdose", "naloxone", "respiratory-depression", "toxicology"]
  },
  {
    id: "EMG-032",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Glasgow Coma Scale (GCS) Calculation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A head trauma patient opens his eyes to verbal command (E3), uses inappropriate words during speech (V3), and withdraws his arm from a painful stimulus (M4). What is the patient's calculated Glasgow Coma Scale (GCS) score?",
    options: [
      "GCS 10 (Moderate Brain Injury)",
      "GCS 8 (Severe Brain Injury)",
      "GCS 14 (Mild Brain Injury)",
      "GCS 6 (Comatose)"
    ],
    correctAnswer: 0,
    rationale: "Glasgow Coma Scale: 1) Eye opening (E): Spontaneous=4, To verbal=3, To pain=2, None=1 (Here = 3); 2) Verbal response (V): Oriented=5, Confused=4, Inappropriate words=3, Incomprehensible sounds=2, None=1 (Here = 3); 3) Motor response (M): Obeys commands=6, Localizes pain=5, Withdraws from pain=4, Decorticate flexion=3, Decerebrate extension=2, None=1 (Here = 4). Total GCS = 3 + 3 + 4 = 10.",
    optionRationales: {
      A: "Correct. Eye (3) + Verbal (3) + Motor (4) = GCS 10 (Moderate head injury: 9–12).",
      B: "GCS 8 or less defines severe head injury requiring intubation.",
      C: "GCS 14 represents mild injury.",
      D: "GCS 6 represents severe neurological coma."
    },
    clinicalPearl: "GCS score breakdown: Mild = 13–15; Moderate = 9–12; Severe = 3–8. Remember: 'GCS of 8, we intubate!'",
    tags: ["GCS", "Glasgow-Coma-Scale", "head-trauma", "neurology", "ATLS"]
  },
  {
    id: "EMG-033",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "Airway Management in Facial & Inhalation Burns",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client who escaped a house fire presents with singed facial hair, carbonaceous soot in the sputum, hoarseness of voice, and an audible inspiratory stridor. What is the priority nursing intervention?",
    options: [
      "Prepare for immediate prophylactic endotracheal intubation before upper airway edema causes complete glottic closure",
      "Administer cough syrup and discharge the client home",
      "Apply ice packs over the anterior neck",
      "Encourage the patient to drink cold water"
    ],
    correctAnswer: 0,
    rationale: "Stridor, hoarseness, facial burns, singed nasal hairs, and carbonaceous sputum indicate severe supraglottic thermal inhalation injury. Thermal airway edema progresses rapidly over the first 2 to 24 hours. Once complete laryngeal edema develops, endotracheal intubation becomes impossible, requiring emergency surgical cricothyroidotomy. Early prophylactic intubation is essential.",
    optionRationales: {
      A: "Correct. Early prophylactic intubation secures the airway before progressive edema closes the vocal cords.",
      B: "Discharging an inhalation burn patient with stridor leads to asphyxiation and death within hours.",
      C: "Ice packs do not stop subglottic thermal mucosal edema.",
      D: "Drinking fluids does not relieve mechanical upper airway swelling."
    },
    clinicalPearl: "Signs of inhalation injury: Singed nasal hairs, soot in mouth, hoarseness, and stridor. Intubate EARLY before airway edema closes the throat.",
    tags: ["inhalation-injury", "stridor", "intubation", "burns", "airway-emergency"]
  },
  {
    id: "EMG-034",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiovascular Emergencies",
    subtopic: "Acute Myocardial Infarction MONA Protocol",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client arrives in the emergency department with acute, crushing substernal chest pain radiating to the jaw, diaphoresis, and ST-segment elevations on 12-lead ECG. What immediate pharmacological interventions constitute the classic initial 'MONA' management?",
    options: [
      "Morphine, Oxygen (if SpO2 <90%), Nitroglycerin (sublingual), and chewable Aspirin (162–325 mg)",
      "Metoprolol, Omeprazole, Naloxone, and Atropine",
      "Midazolam, Ondansetron, Neostigmine, and Amoxicillin",
      "Magnesium, Oxytocin, Nifedipine, and Aminophylline"
    ],
    correctAnswer: 0,
    rationale: "The initial clinical protocol for acute coronary syndrome (ACS) is MONA: 1) Morphine (for pain refractory to nitrates and to reduce sympathetic preload/afterload), 2) Oxygen (indicated if hypoxemic with SpO2 <90%), 3) Nitroglycerin (sublingual vasodilator to reduce preload and relieve coronary spasm), and 4) Aspirin (162–325 mg chewed immediately for platelet inhibition).",
    optionRationales: {
      A: "Correct. Morphine, Oxygen, Nitroglycerin, and chewable Aspirin constitute the classic MONA package.",
      B: "Contains non-acute GI and opioid reversal drugs.",
      C: "These are sedation and antiemetic agents, not acute coronary therapies.",
      D: "These are obstetric and respiratory drugs."
    },
    clinicalPearl: "Aspirin is the most important drug in MONA: have the patient CHEW 300 mg immediately to inhibit platelet aggregation.",
    tags: ["MONA", "myocardial-infarction", "STEMI", "chest-pain", "cardiac-emergency"]
  },
  {
    id: "EMG-035",
    course: "Emergency & Disaster Nursing",
    topic: "Environmental & Climate Emergencies",
    subtopic: "Heat Stroke vs Heat Exhaustion",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "During a hot military march (ambient temperature 42°C), a soldier collapses. Examination reveals a core body temperature of 41.2°C (106.1°F), hot, dry, flushed skin with complete absence of sweating (anhidrosis), confusion, and delirium. What is the diagnosis, and what is the primary nursing intervention?",
    options: [
      "Heat Stroke; Initiate immediate aggressive evaporative and conductive cooling (strip clothing, spray lukewarm water with high-flow fans, place ice packs on neck, axillae, and groin)",
      "Heat Exhaustion; Give warm tea and wrap in woolen blankets",
      "Septic Shock; Administer antipyretic paracetamol and wait",
      "Heat Cramps; Massage the calf muscles"
    ],
    correctAnswer: 0,
    rationale: "Heat Stroke is a life-threatening medical emergency characterized by thermoregulatory breakdown, hyperthermia (core temp >40°C / 104°F), and central nervous system dysfunction (delirium, convulsions, coma), often accompanied by anhidrosis (dry skin). Heat exhaustion features a normal sensorium with profuse sweating. Heat stroke requires immediate whole-body cooling to lower the core temperature below 39°C within 30 minutes to prevent multiorgan failure.",
    optionRationales: {
      A: "Correct. Core temperature >40°C with CNS dysfunction defines Heat Stroke; cool aggressively immediately.",
      B: "Blankets trap heat and accelerate fatal hyperthermic brain injury.",
      C: "Antipyretics (paracetamol, aspirin) do not work in heat stroke because the hypothalamic set-point is normal.",
      D: "Muscle massage does not treat life-threatening systemic hyperpyrexia."
    },
    clinicalPearl: "Heat exhaustion = Sweating, normal mental status. Heat stroke = Core temp >40°C + Confusion/Coma. Cool immediately with water and fans.",
    tags: ["heat-stroke", "hyperthermia", "environmental-emergencies", "cooling"]
  },
  {
    id: "EMG-036",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Foreign Body Airway Obstruction (Heimlich Maneuver)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "A conscious adult dining in a restaurant suddenly grasps his throat with both hands (universal choking sign), cannot speak, cannot cough, and turns cyanotic. What immediate first-aid intervention should the nurse perform?",
    options: [
      "Stand behind the victim and deliver rapid Abdominal Thrusts (Heimlich Maneuver) inward and upward until the foreign body is expelled",
      "Slap the victim's face and offer a glass of water to wash down the food",
      "Perform a blind finger sweep inside the pharynx while standing in front",
      "Administer an intramuscular injection of adrenaline"
    ],
    correctAnswer: 0,
    rationale: "In complete foreign body airway obstruction in a conscious adult (indicated by the universal choking sign, inability to vocalize or cough, and cyanosis), the rescuer stands behind the patient, places a fist thumb-side against the mid-abdomen (above the umbilicus and below the xiphoid), and delivers rapid upward and inward abdominal thrusts (Heimlich maneuver) to elevate the diaphragm and force air out of the lungs to expel the object.",
    optionRationales: {
      A: "Correct. Abdominal thrusts (inward and upward) are the standard first-aid intervention for conscious choking adults.",
      B: "Giving water to an obstructed airway triggers fluid aspiration.",
      C: "Blind finger sweeps can push the foreign object deeper into the larynx.",
      D: "Medications do not clear mechanical food bolus airway blockages."
    },
    clinicalPearl: "Never do a blind finger sweep—you can push the foreign object deeper. Use abdominal thrusts (Heimlich maneuver) until the object pops out or the patient loses consciousness.",
    tags: ["choking", "Heimlich-maneuver", "airway-obstruction", "first-aid"]
  },
  {
    id: "EMG-037",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiovascular Emergencies",
    subtopic: "Hypertensive Crisis: Emergency vs Urgency",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client presents to the emergency room with a blood pressure of 210/120 mmHg, accompanied by acute pulmonary edema, chest pain, and confusion. How is this clinical state classified?",
    options: [
      "Hypertensive Emergency (severe BP elevation WITH acute target organ damage)",
      "Hypertensive Urgency (severe BP elevation WITHOUT acute target organ damage)",
      "Essential stage 1 hypertension",
      "Compensated orthostatic hypotension"
    ],
    correctAnswer: 0,
    rationale: "A hypertensive crisis (BP >180/120 mmHg) is divided into: 1) Hypertensive Emergency: Elevated BP accompanied by acute, life-threatening target organ damage (e.g., encephalopathy, acute pulmonary edema, aortic dissection, acute MI, AKI), requiring immediate admission and IV titratable antihypertensives (e.g., Labetalol, Nitroprusside); 2) Hypertensive Urgency: Elevated BP without acute target organ damage, managed over 24 to 48 hours with oral medications.",
    optionRationales: {
      A: "Correct. BP >180/120 WITH acute organ damage (pulmonary edema, confusion) defines a Hypertensive Emergency.",
      B: "Hypertensive Urgency lacks acute target organ damage.",
      C: "Stage 1 hypertension ranges from 130–139 / 80–89 mmHg.",
      D: "The client is severely hypertensive, the opposite of hypotension."
    },
    clinicalPearl: "Hypertensive Emergency = High BP + ORGAN DAMAGE (Chest pain, Pulmonary edema, Encephalopathy). Requires IV medication and ICU admission.",
    tags: ["hypertensive-emergency", "target-organ-damage", "cardiovascular", "hypertension"]
  },
  {
    id: "EMG-038",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Hypothermia Prevention (The Lethal Triad)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In the resuscitation of severe polytrauma casualties, what are the three interconnected physiological components that constitute the 'Trauma Lethal Triad'?",
    options: [
      "Hypothermia, Acidosis, and Coagulopathy",
      "Hypotension, Tachycardia, and Tachypnea",
      "Hyperglycemia, Hypokalemia, and Hypernatremia",
      "Infection, Sepsis, and Multiorgan failure"
    ],
    correctAnswer: 0,
    rationale: "The Trauma Lethal Triad consists of Hypothermia, Metabolic Acidosis, and Coagulopathy. Hypothermia impairs coagulation enzyme cascades; acidosis reduces myocardial contractility and worsens clotting; coagulopathy accelerates blood loss, worsening hypothermia and acidosis. Breaking this lethal cycle requires damage control surgery, warm blood products, and aggressive warming.",
    optionRationales: {
      A: "Correct. Hypothermia, Acidosis, and Coagulopathy form the Trauma Lethal Triad.",
      B: "These are vital sign markers of shock, not the biochemical lethal triad.",
      C: "These are electrolyte shifts, not the trauma triad.",
      D: "Infection and sepsis occur in late systemic inflammatory states."
    },
    clinicalPearl: "The Trauma Lethal Triad: Hypothermia + Acidosis + Coagulopathy. Keep trauma patients warm and infuse warm fluids to prevent blood from losing its ability to clot.",
    tags: ["lethal-triad", "hypothermia", "coagulopathy", "acidosis", "trauma-resuscitation"]
  },
  {
    id: "EMG-039",
    course: "Emergency & Disaster Nursing",
    topic: "Neurological & Head Trauma Emergencies",
    subtopic: "Epidural vs Subdural Hematoma",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A young adult sustains a blow to the temporal region of the skull during an assault, experiences a brief loss of consciousness, wakes up completely alert for 2 hours (the 'Lucid Interval'), and then deteriorates into a deep coma with an ipsilateral dilated pupil. What acute intracranial lesion has occurred?",
    options: [
      "Epidural (Extradural) Hematoma (arterial bleeding, typically from the Middle Meningeal Artery)",
      "Chronic Subdural Hematoma (venous tear from bridging veins)",
      "Subarachnoid Hemorrhage from a ruptured berry aneurysm",
      "Post-concussive syndrome"
    ],
    correctAnswer: 0,
    rationale: "An Epidural Hematoma is caused by a fracture of the pterion in the temporal bone, lacerating the Middle Meningeal Artery. High-pressure arterial bleeding strips the dura away from the skull. The classic clinical hallmark is a 'Lucid Interval'—initial loss of consciousness followed by transient recovery, followed by rapid deterioration into coma and uncal herniation (blown pupil) as the arterial hematoma expands.",
    optionRationales: {
      A: "Correct. Middle meningeal arterial laceration producing a classic Lucid Interval defines an Epidural Hematoma.",
      B: "Subdural hematomas involve bridging venous tears, usually developing over days or weeks in elderly patients.",
      C: "Subarachnoid hemorrhage presents with sudden 'thunderclap' headache without a temporary lucid trauma interval.",
      D: "Post-concussive syndrome causes headaches and memory lapses weeks later, not acute fatal herniation."
    },
    clinicalPearl: "Head trauma + 'Lucid Interval' (knocked out, woke up fine, then collapsed comatose) = Epidural Hematoma (Middle Meningeal Artery).",
    tags: ["epidural-hematoma", "lucid-interval", "middle-meningeal-artery", "head-trauma"]
  },
  {
    id: "EMG-040",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "Secondary Triage at the Hospital Reception",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Casualties triaged at a disaster site arrive at the receiving hospital's emergency department. Why must 'Secondary Triage' be repeated at the hospital entrance triage post?",
    options: [
      "A patient's physiological status is dynamic and can improve or deteriorate during transit, requiring re-categorization and priority reassignment",
      "Field triage tags are considered illegal inside hospital buildings",
      "To verify that all arriving patients have settled their insurance copayments",
      "Hospital nurses are legally prohibited from looking at field triage ribbons"
    ],
    correctAnswer: 0,
    rationale: "Triage is an ongoing, dynamic process. A casualty tagged 'Yellow' (Delayed) at the disaster scene may bleed out internally during transport and deteriorate into 'Red' (Immediate), while an over-triaged 'Red' patient may stabilize. Secondary triage at the hospital gates re-evaluates vitals and physiological status, ensuring immediate operating room space is prioritized for the most critically unstable.",
    optionRationales: {
      A: "Correct. Physiological status changes dynamically over time, requiring continuous re-triage.",
      B: "Field triage tags provide vital baseline data and are recognized by hospitals.",
      C: "In mass casualty incidents, billing is suspended until lives are stabilized.",
      D: "Hospital teams review field tags as baseline handover indicators."
    },
    clinicalPearl: "Triage is NEVER a one-time event. Patients deteriorate or improve; always re-triage casualties upon hospital arrival.",
    tags: ["re-triage", "secondary-triage", "mass-casualty", "dynamic-assessment"]
  },
  {
    id: "EMG-041",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "Chemical Burn Decontamination",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the immediate, primary first-aid intervention for a chemical burn caused by industrial acid or alkali splashed onto the skin?",
    options: [
      "Copious, continuous irrigation with running tap water or saline for at least 20 to 30 minutes, after removing contaminated clothing",
      "Pouring chemical neutralizing bases over acid burns immediately",
      "Applying thick petroleum ointment and wrapping tightly with plastic",
      "Applying dry talcum powder across the entire chemical burn surface"
    ],
    correctAnswer: 0,
    rationale: "Emergency management of liquid chemical burns requires immediate removal of contaminated clothing followed by copious, low-pressure water irrigation for at least 20 to 30 minutes (or longer for alkalis, which cause deep liquefaction necrosis). Attempting chemical neutralization is contraindicated because the resulting exothermic reaction produces thermal burns on top of chemical injury.",
    optionRationales: {
      A: "Correct. Copious irrigation with water for 20–30 minutes dilutes and removes the chemical agent.",
      B: "Chemical neutralization creates an exothermic reaction that burns tissue with heat.",
      C: "Ointments seal the chemical agent against the skin, worsening tissue destruction.",
      D: "Powder should only be brushed off if it is a dry chemical; liquid burns require water flushing."
    },
    clinicalPearl: "Chemical burns: Flush with water for at least 20 to 30 minutes. NEVER try to neutralize acids with bases—it creates heat that worsens the burn.",
    tags: ["chemical-burns", "water-irrigation", "decontamination", "first-aid"]
  },
  {
    id: "EMG-042",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiovascular Emergencies",
    subtopic: "Aortic Dissection Clinical Presentation",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A 60-year-old male with chronic uncontrolled hypertension presents with sudden, catastrophic, tearing/ripping chest pain radiating between the shoulder blades into the back. Assessment reveals a blood pressure of 190/110 mmHg in the right arm and 130/80 mmHg in the left arm, with an asymmetric radial pulse. What vascular catastrophe has occurred?",
    options: [
      "Acute Aortic Dissection",
      "Acute Pericarditis",
      "Uncomplicated Costochondritis",
      "Spontaneous Pneumothorax"
    ],
    correctAnswer: 0,
    rationale: "Acute Aortic Dissection involves a tear in the aortic intima, allowing high-pressure blood to split the media layer. Clinical hallmarks: Sudden onset of excruciating 'tearing' or 'ripping' chest pain radiating to the interscapular back, accompanied by marked blood pressure differentials (>20 mmHg difference between arms) or pulse asymmetry when the dissection flap compromises the brachiocephalic or left subclavian arteries.",
    optionRationales: {
      A: "Correct. Sudden tearing chest/back pain with unequal blood pressures between arms is diagnostic of Aortic Dissection.",
      B: "Pericarditis produces pleuritic, positional chest pain relieved by sitting forward, without blood pressure differentials.",
      C: "Costochondritis is localized, reproducible chest wall tenderness.",
      D: "Pneumothorax produces acute pleurisy and absent breath sounds, not inter-arm blood pressure differentials."
    },
    clinicalPearl: "Sudden tearing chest/back pain + unequal blood pressures between the right and left arms = Acute Aortic Dissection. Do NOT give blood thinners.",
    tags: ["aortic-dissection", "chest-pain", "pulse-deficit", "vascular-emergency"]
  },
  {
    id: "EMG-043",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Basilar Skull Fracture Physical Signs",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A head trauma patient presents with periorbital ecchymosis ('Raccoon Eyes'), mastoid ecchymosis behind the ears ('Battle's Sign'), and clear fluid leaking from the nose (rhinorrhea). What cranial injury is indicated, and which nursing procedure is contraindicated?",
    options: [
      "Basilar Skull Fracture; Nasogastric (NG) tube insertion is strictly contraindicated",
      "Depressed frontal fracture; Endotracheal intubation is contraindicated",
      "Simple nasal bone fracture; Intravenous fluids are contraindicated",
      "Mandibular fracture; Oral suctioning is contraindicated"
    ],
    correctAnswer: 0,
    rationale: "Battle's sign (mastoid bruising), Raccoon eyes (periorbital bruising), hemotympanum, and CSF rhinorrhea/otorrhea are classic signs of a Basilar Skull Fracture (fracture of the cribriform plate or petrous temporal bone). Nasogastric (NG) tubes and nasotracheal intubation are strictly contraindicated because the tube can inadvertently pass through the fractured cribriform plate directly into the frontal brain parenchyma.",
    optionRationales: {
      A: "Correct. Basilar skull fracture signs present; blind nasogastric tubes are contraindicated to prevent intracranial entry.",
      B: "Oral endotracheal intubation is safe and indicated if airway protection is needed.",
      C: "IV fluids are required for trauma resuscitation.",
      D: "Careful oral suctioning can be performed under direct vision."
    },
    clinicalPearl: "Signs of basilar skull fracture: Raccoon eyes and Battle's sign. NEVER insert a Nasogastric tube—it can penetrate into the brain. Use an Orogastric (OG) tube instead.",
    tags: ["basilar-skull-fracture", "Battle-sign", "raccoon-eyes", "NG-tube-contraindication"]
  },
  {
    id: "EMG-044",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Septic Shock Definition and Resuscitation",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Under the Surviving Sepsis Campaign guidelines, what defines Septic Shock, and what is the target initial crystalloid fluid bolus volume to infuse within the first 3 hours of resuscitation?",
    options: [
      "Sepsis with persistent hypotension requiring vasopressors to maintain MAP >= 65 mmHg and serum lactate > 2 mmol/L despite fluid resuscitation; Infuse 30 mL/kg of IV crystalloids within 3 hours",
      "Sepsis with a blood pressure of 120/80 mmHg; Infuse 100 mL of 50% dextrose",
      "Sepsis caused exclusively by fungal pathogens; Withhold all intravenous fluids",
      "Sepsis responsive to oral paracetamol alone"
    ],
    correctAnswer: 0,
    rationale: "Septic Shock is a subset of sepsis with profound circulatory, cellular, and metabolic abnormalities, defined clinically by persistent hypotension requiring vasopressors (Norepinephrine) to maintain Mean Arterial Pressure (MAP) >= 65 mmHg, and a serum lactate > 2 mmol/L despite adequate fluid resuscitation. The recommended initial resuscitation bundle mandates administering at least 30 mL/kg of balanced IV crystalloids within the first 3 hours.",
    optionRationales: {
      A: "Correct. Vasopressor dependence + Lactate > 2 despite fluids defines septic shock; resuscitation target is 30 mL/kg crystalloids.",
      B: "Septic shock features refractory hypotension, not normal blood pressure.",
      C: "IV fluid loading is the cornerstone of early sepsis resuscitation.",
      D: "Septic shock requires intensive care, vasopressors, and broad-spectrum antibiotics."
    },
    clinicalPearl: "Sepsis hour-1 bundle: Measure lactate, obtain blood cultures before antibiotics, give broad-spectrum antibiotics, and infuse 30 mL/kg crystalloid for hypotension.",
    tags: ["septic-shock", "surviving-sepsis", "crystalloids", "lactate", "norepinephrine"]
  },
  {
    id: "EMG-045",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Ventricular Fibrillation ACLS Management",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "During cardiac arrest resuscitation, the monitor shows chaotic, disorganized electrical waveforms without distinct QRS complexes (Ventricular Fibrillation). The team delivers an immediate defibrillation shock. What must the nurse and resuscitation team do IMMEDIATELY after the shock is delivered?",
    options: [
      "Resume high-quality chest compressions immediately for 2 minutes without stopping to check pulses or rhythm",
      "Pause for 60 seconds to inspect the rhythm monitor",
      "Palpate the carotid pulse for 30 seconds",
      "Administer an immediate IV bolus of sodium bicarbonate"
    ],
    correctAnswer: 0,
    rationale: "Modern ACLS protocols mandate that immediately after delivering a defibrillation shock, the team must resume chest compressions immediately, starting with compressions, without pausing to check the rhythm or pulse. The stunned, defibrillated myocardium takes time to re-establish an organized perfusion rhythm; checking pulses immediately wastes critical perfusion time. The rhythm is re-evaluated only after completing 2 full minutes of CPR.",
    optionRationales: {
      A: "Correct. Resume CPR immediately for 2 minutes post-shock; do not stop to check pulse or rhythm.",
      B: "Pausing to inspect monitors wastes coronary perfusion pressure.",
      C: "Checking pulses immediately post-shock is prohibited; resume compressions first.",
      D: "Routine sodium bicarbonate is not recommended in early cardiac arrest protocols."
    },
    clinicalPearl: "After every shock: Resume chest compressions IMMEDIATELY. Do not look at the monitor, do not check a pulse—compress for 2 minutes first.",
    tags: ["defibrillation", "VF", "ACLS", "chest-compressions", "resuscitation"]
  },
  {
    id: "EMG-046",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Activated Charcoal Indications & Contraindications",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Activated charcoal (1 g/kg orally) is an effective gastrointestinal decontaminant when administered within 1 hour of poison ingestion. However, which category of ingested toxins does Activated Charcoal FAIL to bind?",
    options: [
      "Heavy metals (iron, lead), Alcohols (ethanol, methanol), Lithium, Corrosives, and Hydrocarbons (the 'PHAILS' mnemonic)",
      "Oral paracetamol tablets",
      "Barbiturates and tricyclic antidepressants",
      "Oral cardiovascular beta-blockers"
    ],
    correctAnswer: 0,
    rationale: "Activated charcoal is an adsorbent with a porous surface area that binds non-polar organic compounds. It does NOT bind small, polar, inorganic molecules or corrosive substances: Pesticides, Hydrocarbons, Acids/Alkalis (corrosives), Iron/heavy metals, Lithium, and Solvents/alcohols (the PHAILS mnemonic). Ingesting hydrocarbons risks chemical aspiration pneumonitis.",
    optionRationales: {
      A: "Correct. Charcoal does not bind heavy metals, lithium, simple alcohols, or corrosives.",
      B: "Paracetamol is adsorbed by activated charcoal if given within 1–2 hours.",
      C: "Tricyclic antidepressants and barbiturates bind to charcoal.",
      D: "Beta-blockers bind to charcoal."
    },
    clinicalPearl: "Charcoal does NOT work on: Iron, Lithium, Alcohols, Corrosives, or Petroleum/Kerosene.",
    tags: ["activated-charcoal", "toxicology", "poisoning", "contraindications"]
  },
  {
    id: "EMG-047",
    course: "Emergency & Disaster Nursing",
    topic: "Environmental & Climate Emergencies",
    subtopic: "Near-Drowning / Drowning Pathophysiology",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the emergency management of a victim rescued from a freshwater submersion incident (drowning), what is the primary pathophysiological mechanism causing profound hypoxemia?",
    options: [
      "Inhaled freshwater washes out and dilutes pulmonary surfactant, causing alveolar collapse, atelectasis, and massive intrapulmonary shunt",
      "Excessive absorption of water into red blood cells, causing whole-body freezing",
      "Permanent calcification of bronchial cartilages",
      "Direct destruction of the phrenic nerve by water pressure"
    ],
    correctAnswer: 0,
    rationale: "In drowning, aspirated water (whether fresh or salt) damages the lung: freshwater dilutes and washes out pulmonary surfactant, increasing alveolar surface tension and causing widespread microatelectasis and alveolar flooding. This produces a massive ventilation-perfusion mismatch and intrapulmonary shunt, leading to severe refractory hypoxemia and Acute Respiratory Distress Syndrome (ARDS).",
    optionRationales: {
      A: "Correct. Surfactant washout leads to diffuse alveolar atelectasis and severe intrapulmonary shunting.",
      B: "Hemolysis can occur with massive hypotonic absorption, but surfactant collapse is the primary cause of hypoxemia.",
      C: "Water exposure does not calcify cartilage.",
      D: "Phrenic nerve function remains intact; pulmonary parenchyma is the injured site."
    },
    clinicalPearl: "Drowning victims suffer from surfactant washout and alveolar collapse. Priority: Clear airway, provide rescue breaths, and administer positive end-expiratory pressure (PEEP).",
    tags: ["drowning", "surfactant", "hypoxemia", "respiratory-failure", "first-aid"]
  },
  {
    id: "EMG-048",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Log-Roll Technique for Spinal Trauma",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When performing a 'Log-Roll' maneuver to examine the posterior spine of a suspected cervical spine trauma patient, who coordinates and directs the movements of the team?",
    options: [
      "The person holding manual in-line stabilization at the patient's head and neck",
      "The nurse holding the patient's feet",
      "The orderly pushing the stretcher wheels",
      "The radiology technician operating the X-ray machine"
    ],
    correctAnswer: 0,
    rationale: "The person positioned at the head of the bed holding manual in-line cervical spine stabilization is in command of the log-roll. That rescuer leads the movement, gives clear verbal commands (e.g., 'Roll on the count of three'), and coordinates the torso and lower-extremity holders so the entire spine rolls as an unbroken unit.",
    optionRationales: {
      A: "Correct. The rescuer maintaining cervical in-line stabilization at the head directs all log-roll maneuvers.",
      B: "The rescuer at the feet follows the lead of the rescuer controlling the neck.",
      C: "Orderlies assist with torso roll under the head rescuer's command.",
      D: "Radiology technicians do not lead trauma spinal turns."
    },
    clinicalPearl: "During a log-roll: The person holding the head is in charge. The head, shoulders, and pelvis must rotate at the exact same instant.",
    tags: ["log-roll", "spinal-precautions", "trauma", "cervical-spine"]
  },
  {
    id: "EMG-049",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Pediatric vs Adult Cardiac Arrest Etiology",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "How does the primary underlying etiology of cardiac arrest in infants and young children differ from that in adult populations?",
    options: [
      "Pediatric arrest is primarily asphyxial (respiratory failure and shock progressing to arrest), while adult arrest is primarily cardiac (sudden dysrhythmias like VF/pVT from coronary artery disease)",
      "Pediatric arrest is caused exclusively by electrical lightning strikes",
      "Adult arrest is caused entirely by foreign body aspiration",
      "There is no difference; all age groups arrest from acute coronary thrombosis"
    ],
    correctAnswer: 0,
    rationale: "Pediatric cardiac arrest rarely stems from primary heart disease. In infants and children, arrest is almost always secondary (asphyxial arrest) caused by progressive respiratory failure (e.g., croup, foreign body, pneumonia) or uncompensated shock (dehydration, sepsis) leading to prolonged hypoxia, bradycardia, and asystole. In adults, arrest is typically sudden cardiac arrest (arrhythmic VF/VT from coronary artery disease).",
    optionRationales: {
      A: "Correct. Pediatric arrest is primarily respiratory/hypoxic; adult arrest is primarily cardiac/ischemic.",
      B: "Lightning strikes are rare environmental causes, not the primary pediatric etiology.",
      C: "Coronary artery disease is the leading cause of adult arrest, not foreign body aspiration.",
      D: "Atherosclerotic plaque rupture is a disease of adults, not young children."
    },
    clinicalPearl: "Children don't arrest from heart attacks—they arrest because they stop breathing. In pediatric resuscitation: OXYGENATION and VENTILATION come first.",
    tags: ["pediatric-arrest", "PALS", "hypoxia", "respiratory-failure", "cardiac-arrest"]
  },
  {
    id: "EMG-050",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "Hospital Incident Command System (HICS)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When a hospital activates its internal Disaster and Mass Casualty Incident Plan, who holds ultimate operational authority and accountability for coordinating all hospital activities under the Hospital Incident Command System (HICS)?",
    options: [
      "The Incident Commander (IC)",
      "The chief security guard at the gate",
      "The public relations journalist",
      "The head chef of the dietary department"
    ],
    correctAnswer: 0,
    rationale: "Under the Hospital Incident Command System (HICS), the Incident Commander (IC) has overall operational authority, responsibility, and accountability for managing the hospital's disaster response. The IC directs the four functional sections: Operations, Planning, Logistics, and Finance/Administration.",
    optionRationales: {
      A: "Correct. The Incident Commander directs hospital operations, logistics, planning, and resource management during disasters.",
      B: "Security oversees safety and access control under the Operations Section.",
      C: "Public relations officers act as the Public Information Officer (PIO) under the Incident Commander's oversight.",
      D: "Dietary staff support logistics, but do not command clinical disaster response."
    },
    clinicalPearl: "HICS structure: The Incident Commander (IC) leads the disaster response and oversees Operations, Planning, Logistics, and Finance.",
    tags: ["HICS", "incident-commander", "hospital-disaster-plan", "mass-casualty"]
  },
  {
    id: "EMG-051",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Blast Injuries",
    subtopic: "Four Categories of Blast Injury",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Following an improvised explosive device (IED) blast in a crowded market, a survivor presents without external lacerations but with bilateral ruptured tympanic membranes, hemoptysis, dyspnea, and bilateral pulmonary infiltrates ('blast lung'). Which blast injury mechanism caused this internal tissue destruction?",
    options: [
      "Primary Blast Injury (direct supersonic overpressure wave barotrauma impacting air-filled hollow organs)",
      "Secondary Blast Injury (penetrating fragmentation and flying shrapnel trauma)",
      "Tertiary Blast Injury (physical displacement of the victim's body against solid walls or ground)",
      "Quaternary Blast Injury (burns, inhalation of toxic dust, and crush asphyxia)"
    ],
    correctAnswer: 0,
    rationale: "Blast trauma is categorized into four mechanisms: 1) Primary Blast: Caused by the supersonic high-pressure wave compressing air-filled hollow organs (ruptured tympanic membranes, blast lung contusions, and bowel perforation); 2) Secondary Blast: Trauma from flying bomb fragments and shrapnel; 3) Tertiary Blast: Body thrown by the blast wind into stationary objects; 4) Quaternary Blast: Burns, chemical/toxic smoke inhalation, and structural crush injuries.",
    optionRationales: {
      A: "Correct. Primary blast injury results from direct overpressure shockwaves striking air-filled cavities (ears, lungs, intestines).",
      B: "Secondary blast injury involves ballistic wounds from bomb casings and flying debris.",
      C: "Tertiary blast injury occurs when the victim's body is physically propelled through the air.",
      D: "Quaternary blast injury includes burns, asphyxia, and chemical inhalation not caused by the primary shockwave."
    },
    clinicalPearl: "Primary blast injury strikes hollow gas-containing organs first: Tympanic membranes rupture first, followed by Blast Lung and bowel perforation.",
    tags: ["blast-injuries", "primary-blast", "barotrauma", "disaster-nursing", "mass-casualty"]
  },
  {
    id: "EMG-052",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Massive Transfusion Protocol (MTP) Ratios",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A severely injured trauma casualty is actively exsanguinating from multiple pelvic and abdominal lacerations. When activating the hospital's Massive Transfusion Protocol (MTP), what balanced blood product ratio is administered to prevent trauma-induced coagulopathy?",
    options: [
      "1:1:1 Ratio (1 unit of Packed Red Blood Cells : 1 unit of Fresh Frozen Plasma : 1 unit of Platelets)",
      "6 units of Packed Red Blood Cells followed by 5 liters of 0.9% Normal Saline only",
      "10 units of whole blood with zero plasma or platelets",
      "5 units of Cryoprecipitate mixed with 50% Dextrose"
    ],
    correctAnswer: 0,
    rationale: "Modern trauma damage control resuscitation uses a balanced 1:1:1 component ratio: for every 1 unit of Packed Red Blood Cells (PRBCs), 1 unit of Fresh Frozen Plasma (FFP) and 1 unit of Platelets are transfused simultaneously. This mimics whole blood, prevents hemodilution, replaces consumed clotting factors and platelets, and stops the trauma lethal triad.",
    optionRationales: {
      A: "Correct. 1:1:1 (PRBCs, FFP, Platelets) is the evidence-based standard for massive transfusion in exsanguinating trauma.",
      B: "Infusing large volumes of saline with unbuffered red cells causes severe dilutional coagulopathy and hypothermia.",
      C: "Packed red cells alone lack clotting factors and platelets, accelerating hemorrhage.",
      D: "Dextrose provides calories and cryoprecipitate provides fibrinogen, but they do not provide volume or oxygen carrying capacity."
    },
    clinicalPearl: "Massive Transfusion Protocol (MTP) rule: 1 unit PRBCs : 1 unit Plasma : 1 unit Platelets (1:1:1) to keep the blood balanced and able to clot.",
    tags: ["MTP", "massive-transfusion", "coagulopathy", "damage-control-resuscitation", "trauma"]
  },
  {
    id: "EMG-053",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Tranexamic Acid (TXA) Administration (CRASH-2 Protocol)",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "Under the CRASH-2 trial protocol for bleeding trauma patients, how and when should the antifibrinolytic agent Tranexamic Acid (TXA) be administered?",
    options: [
      "1 gram IV infused over 10 minutes within the first 3 hours of injury, followed by a second 1 gram IV infused over 8 hours",
      "5 grams rapid IV push given 12 hours after the trauma incident",
      "500 mg orally once weekly for three months",
      "10 grams injected subcutaneously into the abdomen"
    ],
    correctAnswer: 0,
    rationale: "The CRASH-2 landmark study demonstrated that Tranexamic Acid (TXA)—an antifibrinolytic that blocks plasminogen activation to prevent clot breakdown—significantly reduces all-cause trauma mortality when given early. The protocol is: 1 gram IV loading dose infused over 10 minutes within 3 hours of injury, followed by a maintenance infusion of 1 gram over 8 hours. Giving TXA after 3 hours increases mortality.",
    optionRationales: {
      A: "Correct. 1g IV over 10 mins within 3 hours of injury, then 1g IV over 8 hours.",
      B: "Giving TXA more than 3 hours after injury is associated with increased thrombotic mortality.",
      C: "Oral long-term regimens are used for menorrhagia, not acute trauma hemorrhage.",
      D: "TXA must be administered intravenously in acute trauma, not subcutaneously."
    },
    clinicalPearl: "TXA timing window: Give the 1g IV loading dose within 3 HOURS of injury. If more than 3 hours have passed, do NOT start TXA.",
    tags: ["TXA", "tranexamic-acid", "CRASH-2", "antifibrinolytic", "hemorrhage"]
  },
  {
    id: "EMG-054",
    course: "Emergency & Disaster Nursing",
    topic: "Neurological & Head Trauma Emergencies",
    subtopic: "Incomplete Spinal Cord Injury Syndromes",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "An elderly client sustains a hyperextension cervical spine injury following a forward fall. Assessment demonstrates profound motor weakness in the upper extremities (arms and hands) with near-complete preservation of motor strength in the lower extremities (legs), accompanied by variable sensory loss. What spinal syndrome is this?",
    options: [
      "Central Cord Syndrome",
      "Anterior Cord Syndrome",
      "Brown-Séquard Syndrome",
      "Cauda Equina Syndrome"
    ],
    correctAnswer: 0,
    rationale: "Central Cord Syndrome (the most common incomplete cord injury, often seen after hyperextension in elderly patients with cervical spondylosis) damages the centrally situated corticospinal and spinothalamic tracts. Because the cervical somatotopic fibers controlling upper extremities lie more centrally in the lateral corticospinal tract than lumbosacral leg fibers, motor impairment is disproportionately greater in the upper limbs than in the lower limbs.",
    optionRationales: {
      A: "Correct. Disproportionately greater weakness in arms and hands than in legs following hyperextension characterizes Central Cord Syndrome.",
      B: "Anterior cord syndrome causes complete bilateral motor paralysis and loss of pain/temperature below the lesion, sparing proprioception.",
      C: "Brown-Séquard is a hemisection causing ipsilateral motor/vibration loss and contralateral pain/temperature loss.",
      D: "Cauda equina syndrome involves lumbosacral root compression producing saddle anesthesia and bowel/bladder incontinence."
    },
    clinicalPearl: "Central Cord Syndrome: Weakness is worse in the ARMS than in the LEGS ('hands and arms paralyzed, but feet can still move').",
    tags: ["spinal-cord-injury", "central-cord", "incomplete-cord", "neurology", "trauma"]
  },
  {
    id: "EMG-055",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "ACLS Unstable Tachycardia Management",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "An adult patient presents with a regular, narrow-complex tachycardia at a rate of 190 beats per minute on the cardiac monitor. The patient is pale, diaphoretic, confused, with a blood pressure of 78/46 mmHg and ongoing ischemic chest pain (unstable tachycardia). What is the immediate treatment of choice?",
    options: [
      "Immediate Synchronized Electrical Cardioversion (starting at 50–100 Joules) with sedation if time permits",
      "Immediate unsynchronized defibrillation at 360 Joules",
      "Oral administration of diltiazem tablets",
      "Instructing the patient to perform the Valsalva maneuver for 30 minutes"
    ],
    correctAnswer: 0,
    rationale: "ACLS tachycardia algorithm: Assess for signs of hemodynamic instability (Hypotension, Acutely altered mental status, Signs of shock, Ischemic chest discomfort, Acute heart failure). If unstable tachycardia is present with a pulse, immediate Synchronized Cardioversion is required. Synchronizing ensures the electrical shock delivers on the R-wave of the QRS complex, avoiding the vulnerable T-wave which could trigger ventricular fibrillation.",
    optionRationales: {
      A: "Correct. Synchronized cardioversion is the immediate treatment for unstable tachycardias with serious signs of hypoperfusion.",
      B: "Unsynchronized defibrillation is reserved for pulseless rhythms (VF / pulseless VT); delivered on a T-wave, it induces VF.",
      C: "Oral medications take 30–60 minutes to absorb and cannot rescue an acutely collapsing hypotensive patient.",
      D: "Vagal maneuvers are first-line for STABLE narrow-complex supraventricular tachycardia, not unstable hypotension."
    },
    clinicalPearl: "Tachycardia rule: If the patient is UNSTABLE (low BP, chest pain, confusion), shock immediately with SYNCHRONIZED cardioversion.",
    tags: ["tachycardia", "synchronized-cardioversion", "ACLS", "hemodynamic-instability", "arrhythmias"]
  },
  {
    id: "EMG-056",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Hazardous Materials (HAZMAT)",
    subtopic: "HAZMAT Decontamination Zones",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "At a chemical industrial disaster scene, the incident area is demarcated into three concentric operational zones. In which zone does primary triage and physical decontamination (removing contaminated clothes and warm water showering) take place?",
    options: [
      "The Warm Zone (Contamination Reduction Zone)",
      "The Hot Zone (Exclusion Zone)",
      "The Cold Zone (Support Zone)",
      "The Off-site Community Evacuation Shelter"
    ],
    correctAnswer: 0,
    rationale: "HAZMAT zoning: 1) Hot Zone (Exclusion Zone): The innermost, contaminated area requiring full chemical-resistant Personal Protective Equipment (Level A/B); 2) Warm Zone (Contamination Reduction Zone): The intermediate buffer area where life-safety decontamination (stripping clothes, showering, gross decontamination) and initial triage take place; 3) Cold Zone (Support Zone): Clean, uncontaminated area where decontaminated casualties receive advanced medical treatment and transport.",
    optionRationales: {
      A: "Correct. Primary decontamination and triage occur in the Warm Zone before patients enter the clean Cold Zone.",
      B: "The Hot Zone is the dangerous epicenter of chemical release; non-decontaminated treatment cannot occur here.",
      C: "The Cold Zone must remain clean and chemical-free; contaminated casualties are strictly barred until washed.",
      D: "Shelters receive fully cleared, non-toxic citizens."
    },
    clinicalPearl: "HAZMAT Zones: Hot = Danger/Release; Warm = Decontamination (wash and strip clothes); Cold = Clean medical treatment and transport.",
    tags: ["HAZMAT", "decontamination", "warm-zone", "chemical-disaster", "triage"]
  },
  {
    id: "EMG-057",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Airway Management",
    subtopic: "Surgical Cricothyroidotomy Indications",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A trauma patient with massive maxillofacial fractures and severe pharyngeal swelling cannot be ventilated with a bag-valve-mask and cannot be intubated after three failed direct laryngoscopy attempts ('Cannot Intubate, Cannot Oxygenate' scenario). What emergency surgical intervention is indicated?",
    options: [
      "Emergency Surgical Cricothyroidotomy",
      "Elective formal surgical tracheostomy in an operating theater",
      "Inserting an oropharyngeal airway and waiting 20 minutes",
      "Chest tube insertion in the 5th intercostal space"
    ],
    correctAnswer: 0,
    rationale: "In a 'Cannot Intubate, Cannot Oxygenate' (CICO) crisis, irreversible brain death occurs within 3 to 5 minutes without oxygenation. When bag-mask ventilation, supraglottic airways (LMA), and endotracheal intubation fail, the emergency rescue procedure is Surgical Cricothyroidotomy: an incisional opening through the cricothyroid membrane to secure a cuffed airway tube directly into the subglottic trachea.",
    optionRationales: {
      A: "Correct. Surgical cricothyroidotomy is the immediate emergency airway rescue of choice in a CICO crisis.",
      B: "Formal open tracheostomy is a slow, complex surgical procedure performed electively, not during acute CICO arrest.",
      C: "Waiting when oxygenation has failed leads to asystole and fatal anoxic brain injury.",
      D: "Chest tubes drain the pleural space, but do not bypass upper airway obstruction."
    },
    clinicalPearl: "When you 'Cannot Intubate, Cannot Oxygenate' (CICO): Cut the cricothyroid membrane. A surgical cricothyroidotomy bypasses the obstructed upper airway in seconds.",
    tags: ["cricothyroidotomy", "CICO", "airway-emergency", "maxillofacial-trauma", "intubation"]
  },
  {
    id: "EMG-058",
    course: "Emergency & Disaster Nursing",
    topic: "Orthopedic & Extremity Trauma Emergencies",
    subtopic: "Acute Compartment Syndrome Assessment",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "A patient with a closed tibial fracture placed in a plaster cast 6 hours ago complains of excruciating, severe leg pain that is completely unrelieved by IV morphine. Passive extension of the toes triggers extreme pain. The foot is warm with palpable pulses. What is the priority nursing action?",
    options: [
      "Suspect Acute Compartment Syndrome, bivalve (split) the cast immediately, keep the limb at heart level, and alert the orthopedic surgeon for urgent fasciotomy",
      "Elevate the limb on three pillows high above the head and apply ice packs",
      "Administer double the dose of morphine and tell the patient to sleep",
      "Apply a tight elastic tensor bandage over the plaster cast"
    ],
    correctAnswer: 0,
    rationale: "Pain out of proportion to the injury and pain on passive stretch of the digits are the earliest, most sensitive signs of Acute Compartment Syndrome (fascial swelling compressing capillaries and nerves). The nurse must relieve external pressure immediately by bivalving (cutting) the cast and underlying padding, maintaining the limb neutral at heart level (elevating above heart level reduces arteriolar perfusion pressure, worsening ischemia), and preparing for emergency Fasciotomy.",
    optionRationales: {
      A: "Correct. Bivalve the cast, maintain limb at heart level, and prepare for emergency decompressive fasciotomy.",
      B: "Elevating the limb above heart level lowers arterial perfusion pressure, accelerating muscle necrosis.",
      C: "Masking escalating ischemic pain with analgesics delays diagnosis and causes permanent Volkmann's contracture.",
      D: "Applying elastic wraps increases internal compartment pressure."
    },
    clinicalPearl: "The 6 P's of Compartment Syndrome: Pain (out of proportion, on passive stretch), Paresthesia, Pallor, Paralysis, Pulselessness, Poikilothermia. Pulselessness is a late sign of irreversible tissue death.",
    tags: ["compartment-syndrome", "fasciotomy", "orthopedic-emergency", "tibial-fracture", "6-Ps"]
  },
  {
    id: "EMG-059",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "ACLS Unstable Bradycardia Algorithm",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client presents with symptomatic sinus bradycardia at 34 beats per minute, severe dizziness, cold diaphoresis, and a blood pressure of 72/40 mmHg. While preparing transcutaneous pacing pads, what is the first-line intravenous drug and dose to administer?",
    options: [
      "Atropine sulfate 1 mg IV push (may repeat every 3–5 minutes up to a maximum total of 3 mg)",
      "Adenosine 6 mg rapid IV push",
      "Amiodarone 300 mg IV bolus",
      "Metoprolol 5 mg slow IV push"
    ],
    correctAnswer: 0,
    rationale: "According to the ACLS Bradycardia Algorithm: For symptomatic, unstable bradycardia (hypotension, acute heart failure, ischemic chest pain), the first-line pharmacological treatment is Atropine sulfate 1 mg IV push (repeated every 3–5 minutes to a maximum of 3 mg). If atropine fails or in high-degree (Type II second-degree or third-degree) AV blocks, initiate Transcutaneous Pacing (TCP) or dopamine/epinephrine infusions.",
    optionRationales: {
      A: "Correct. Atropine 1 mg IV push is the first-line medication for symptomatic, unstable bradycardia.",
      B: "Adenosine is an AV nodal blocker used to terminate SVT; giving it in severe bradycardia causes prolonged asystole.",
      C: "Amiodarone is an antiarrhythmic for ventricular fibrillation or stable VT.",
      D: "Metoprolol is a beta-blocker that slows heart rate further, leading to cardiac arrest."
    },
    clinicalPearl: "Unstable Bradycardia first-line drug: Atropine 1 mg IV push. If Atropine doesn't work, go straight to Transcutaneous Pacing (TCP).",
    tags: ["bradycardia", "atropine", "ACLS", "transcutaneous-pacing", "arrhythmias"]
  },
  {
    id: "EMG-060",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "High-Voltage Electrical Burn Injuries",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A worker survives contact with a 11,000-volt power line, presenting with small entrance and exit puncture burns on the hands and feet. Why must the emergency nurse monitor continuous ECG and maintain high urine output (100–150 mL/hr) with aggressive fluid resuscitation?",
    options: [
      "Deep electrical current conducts through muscle and bone, causing massive hidden deep tissue necrosis, Rhabdomyolysis, and acute myoglobinuric renal failure",
      "Electrical current converts blood into pure alcohol",
      "High voltage causes permanent calcification of skin pores",
      "Electrical burns only affect the superficial epidermal layer"
    ],
    correctAnswer: 0,
    rationale: "High-voltage electrical current travels through internal deep tissues along paths of least resistance (nerves, blood vessels, muscles), generating heat that causes extensive internal muscle coagulation and necrosis (an 'iceberg' injury: small entrance/exit skin marks, but massive internal muscle death). This releases massive amounts of myoglobin and potassium into circulation, predisposing the patient to cardiac dysrhythmias and acute tubular necrosis from myoglobinuria.",
    optionRationales: {
      A: "Correct. High-voltage current causes massive deep muscle rhabdomyolysis, requiring high urine output (100–150 mL/hr) to flush myoglobin.",
      B: "Biological electrocution causes thermal injury and hemolysis, not ethanol synthesis.",
      C: "Tissue damage is coagulative thermal necrosis, not dermal calcification.",
      D: "Electrical burns damage deep muscle, bone, and organs, the opposite of superficial injuries."
    },
    clinicalPearl: "Electrical burns are 'iceberg' injuries: the skin wounds look tiny, but deep muscles are cooked. Titrate fluids to keep urine output at 100–150 mL/hr to prevent kidney shutdown from myoglobin.",
    tags: ["electrical-burns", "rhabdomyolysis", "myoglobinuria", "acute-kidney-injury", "burns"]
  },
  {
    id: "EMG-061",
    course: "Emergency & Disaster Nursing",
    topic: "Neurological & Head Trauma Emergencies",
    subtopic: "Spinal Shock vs Neurogenic Shock",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In acute spinal cord trauma, what clinical findings differentiate 'Spinal Shock' from 'Neurogenic Shock'?",
    options: [
      "Spinal shock is a temporary loss of all reflex, sensory, and motor activity below the level of the cord lesion (flaccid paralysis and areflexia); Neurogenic shock is a hemodynamic loss of sympathetic vasomotor tone producing hypotension and bradycardia",
      "Spinal shock causes severe hypertension, while neurogenic shock causes high fever",
      "Spinal shock is permanent, while neurogenic shock resolves in 5 seconds",
      "Both terms describe the exact same physiological hemodynamics"
    ],
    correctAnswer: 0,
    rationale: "Spinal Shock is an electrical and reflex phenomenon: transient loss of all neurological function (sensory, motor, and autonomic reflexes, with flaccid paralysis and absent bulbocavernosus reflex) below the injury, lasting days to weeks until reflexes return. Neurogenic Shock is a hemodynamic distributive shock state: loss of sympathetic tone causing widespread vasodilation (hypotension) and loss of cardiac accelerator nerves (bradycardia).",
    optionRationales: {
      A: "Correct. Spinal shock = Electrical/reflex shutdown (areflexia). Neurogenic shock = Hemodynamic collapse (hypotension + bradycardia).",
      B: "Spinal shock produces flaccid areflexia, not severe hypertension.",
      C: "Spinal shock can resolve over weeks as spinal reflexes return, presenting as hyperreflexic spasticity.",
      D: "They are distinct clinical entities that frequently occur together after high spinal cord trauma."
    },
    clinicalPearl: "Spinal shock = Loss of REFLEXES (flaccid paralysis). Neurogenic shock = Loss of BLOOD PRESSURE and HEART RATE (hemodynamic distributive shock).",
    tags: ["spinal-shock", "neurogenic-shock", "spinal-cord-injury", "reflexes", "neurology"]
  },
  {
    id: "EMG-062",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Carbon Monoxide vs Cyanide in Smoke Inhalation",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A victim pulled from a closed structure fire presents with severe lactic acidosis (lactate > 10 mmol/L), refractory hypotension, and an odor of bitter almonds on the breath. What co-intoxication from burning synthetic upholstery is suspected, and what specific antidote should be administered?",
    options: [
      "Cyanide Poisoning; Administer Hydroxocobalamin (Cyanokit) IV",
      "Methanol toxicity; Administer high-dose oral ethanol",
      "Arsenic poisoning; Administer penicillamine",
      "Iron overdose; Administer deferoxamine"
    ],
    correctAnswer: 0,
    rationale: "Combustion of synthetic plastics, wool, and polyurethane foam generates hydrogen cyanide (HCN) gas alongside carbon monoxide. Cyanide arrests cellular respiration by inhibiting mitochondrial cytochrome c oxidase, switching cells to anaerobic metabolism and producing severe refractory lactic acidosis (>8-10 mmol/L). The modern first-line antidote is Hydroxocobalamin (Cyanokit), which binds cyanide to form non-toxic cyanocobalamin (Vitamin B12), excreted in urine.",
    optionRationales: {
      A: "Correct. Cyanide from burning plastics causes severe lactic acidosis; Hydroxocobalamin is the first-line antidote.",
      B: "Methanol is found in toxic bootleg alcohol, not combustion smoke.",
      C: "Arsenic causes gastroenteritis and neuropathy, not rapid smoke-inhalation collapse.",
      D: "Iron overdose causes hemorrhagic gastritis, not fire-associated cyanide poisoning."
    },
    clinicalPearl: "Smoke inhalation + Severe lactic acidosis = Cyanide poisoning. The antidote is Hydroxocobalamin (turns the patient's urine dark red).",
    tags: ["cyanide", "hydroxocobalamin", "smoke-inhalation", "toxicology", "lactic-acidosis"]
  },
  {
    id: "EMG-063",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Psychological First Aid",
    subtopic: "Psychological First Aid (PFA) Principles",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When delivering Psychological First Aid (PFA) to distressed disaster survivors in an emergency shelter, which intervention is recommended to promote recovery?",
    options: [
      "Providing practical assistance for basic physical needs (food, water, shelter), reuniting families, and listening compassionately without forcing survivors to recount traumatic details",
      "Forcing survivors to undergo mandatory group debriefing and describe vivid horrors of the event",
      "Administering intravenous sedatives to every crying survivor",
      "Isolating all survivors in dark individual holding rooms"
    ],
    correctAnswer: 0,
    rationale: "Psychological First Aid (PFA) core principles (Look, Listen, Link): Ensure safety, address immediate basic survival needs (water, blankets, food), connect survivors with loved ones, listen supportively, and provide factual information. Psychological debriefing that forces survivors to recount graphic trauma details is contraindicated because it retraumatizes survivors and increases rates of Post-Traumatic Stress Disorder (PTSD).",
    optionRationales: {
      A: "Correct. PFA emphasizes practical comfort, safety, family reunification, and non-intrusive emotional support.",
      B: "Mandatory psychological debriefing is harmful and increases PTSD rates.",
      C: "Chemical sedation disrupts natural emotional processing and is reserved only for severe psychosis.",
      D: "Isolation exacerbates panic and acute stress reactions."
    },
    clinicalPearl: "Psychological First Aid (PFA): Meet basic needs, connect families, and listen. NEVER force disaster victims to recount traumatic details.",
    tags: ["PFA", "psychological-first-aid", "disaster-mental-health", "PTSD", "survivor-care"]
  },
  {
    id: "EMG-064",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "ACLS Epinephrine Dosing Interval",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During active adult cardiac arrest resuscitation (for either shockable or non-shockable rhythms), what is the standard dose and administration interval for intravenous Epinephrine?",
    options: [
      "1 mg (10 mL of 1:10,000 solution) IV/IO every 3 to 5 minutes, followed by a 20 mL saline flush",
      "5 mg IV push every 60 seconds continuously",
      "0.1 mg subcutaneously once an hour",
      "10 mg via endotracheal tube every 10 minutes"
    ],
    correctAnswer: 0,
    rationale: "ACLS guidelines mandate Epinephrine 1 mg (10 mL of 1:10,000 concentration) administered via IV or intraosseous (IO) access every 3 to 5 minutes during cardiac arrest. Each dose is followed by a 20 mL sterile saline flush and brief limb elevation to accelerate central venous delivery. In VF/pVT, it is given after the second shock; in Asystole/PEA, it is given as early as possible.",
    optionRationales: {
      A: "Correct. 1 mg IV/IO every 3–5 minutes with a 20 mL saline flush is the universal ACLS cardiac arrest standard.",
      B: "5 mg every minute is a massive overdose that causes severe myocardial ischemia and refractory fibrillation.",
      C: "Subcutaneous absorption is zero during cardiac arrest due to lack of peripheral perfusion.",
      D: "10 mg is a lethal overdose."
    },
    clinicalPearl: "ACLS Epinephrine: 1 mg IV every 3 to 5 minutes. Always flush with 20 mL of normal saline to push the drug into central circulation.",
    tags: ["epinephrine", "ACLS", "cardiac-arrest", "resuscitation", "pharmacology"]
  },
  {
    id: "EMG-065",
    course: "Emergency & Disaster Nursing",
    topic: "Thoracic Trauma Emergencies",
    subtopic: "Underwater Seal Chest Drainage Management",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A patient with a hemopneumothorax has a functional chest tube connected to an underwater seal drainage system. While turning the patient in bed, the chest tube accidentally pulls completely out of the patient's thoracic cavity. What is the immediate nursing action?",
    options: [
      "Immediately cover the insertion site with a sterile occlusive dressing (petrolatum gauze) taped on three sides, or cover with gloved fingers while instructing the patient to exhale",
      "Attempt to reinsert the dirty plastic chest tube back through the skin hole",
      "Clamp the patient's trachea to prevent air leakage",
      "Pour 500 mL of sterile saline into the open chest hole"
    ],
    correctAnswer: 0,
    rationale: "If a chest tube pulls out of the chest wall: 1) Immediately seal the insertion site with a gloved hand or sterile occlusive dressing (petrolatum gauze) taped on THREE sides. This creates a one-way flutter valve, preventing atmospheric air from rushing in and collapsing the lung while allowing exiting air to escape; 2) If the tube disconnects from the drainage bottle (not pulled out of the chest), submerge the distal open tube tip into a bottle of sterile water to re-establish an underwater seal. Never try to push a dislodged tube back into the chest.",
    optionRationales: {
      A: "Correct. Seal the site with an occlusive dressing taped on 3 sides to prevent air entry while venting trapped pressure.",
      B: "Reinserting a dislodged tube introduces severe intrathoracic bacterial contamination and lacerates lung tissue.",
      C: "Tracheal occlusion causes immediate asphyxiation.",
      D: "Pouring saline into the pleural space causes iatrogenic pleural effusion and empyema."
    },
    clinicalPearl: "Tube pulled OUT of chest = Cover site with occlusive gauze taped on 3 sides. Tube disconnected from BOTTLE = Drop end into a bottle of sterile water.",
    tags: ["chest-tube", "underwater-seal", "pneumothorax", "emergency-action", "thoracic-trauma"]
  },
  {
    id: "EMG-066",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Focused Assessment with Sonography for Trauma (FAST)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the resuscitation bay, a bedside FAST (Focused Assessment with Sonography for Trauma) ultrasound scan is performed on a hypotensive blunt abdominal trauma patient. What four anatomical acoustic windows are evaluated to detect free intraperitoneal fluid (hemoperitoneum) or pericardial tamponade?",
    options: [
      "Hepatorenal space (Morison's pouch), Splenorenal recess, Subxiphoid pericardial window, and Pelvic (suprapubic) pouch",
      "Bilateral popliteal fossae and antecubital spaces",
      "Cerebral ventricles and carotid arteries",
      "Bilateral plantar arches and wrists"
    ],
    correctAnswer: 0,
    rationale: "A standard FAST exam evaluates four anatomical areas for free pathological fluid (blood): 1) Perihepatic / Morison's Pouch (space between liver and right kidney—the most dependent space in the supine abdomen), 2) Perisplenic / Splenorenal recess, 3) Subxiphoid / Pericardial window (evaluates for cardiac tamponade), and 4) Suprapubic / Pelvic pouch (pouch of Douglas in females, rectovesical pouch in males). Extended FAST (eFAST) adds anterior chest windows to detect pneumothorax.",
    optionRationales: {
      A: "Correct. Morison's pouch, splenorenal recess, subxiphoid pericardium, and pelvic window constitute the 4 FAST views.",
      B: "Peripheral joint fossae are not acoustic windows for internal cavitary bleeding.",
      C: "Intracranial imaging is not evaluated during an abdominal trauma FAST scan.",
      D: "Extremity vascular checks are physical exams, not FAST sonography windows."
    },
    clinicalPearl: "Morison's Pouch (between liver and right kidney) is the most sensitive abdominal ultrasound window for detecting internal bleeding in a supine trauma patient.",
    tags: ["FAST-scan", "trauma-ultrasound", "Morisons-pouch", "hemoperitoneum", "ATLS"]
  },
  {
    id: "EMG-067",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Cardiogenic Shock Pathophysiology & Management",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client who suffered an extensive anterior wall myocardial infarction develops cardiogenic shock with a blood pressure of 76/40 mmHg, cold clammy extremities, pulmonary crackles, and severe pulmonary edema. Why is aggressive rapid fluid bolusing contraindicated in this shock state?",
    options: [
      "The primary failure is a damaged left ventricular mechanical pump; infusing large fluid volumes overloads the failing ventricle, increasing pulmonary capillary wedge pressure and worsening pulmonary edema",
      "Fluid administration neutralizes endogenous cardiac hormones",
      "Cardiogenic shock causes blood vessels to evaporate",
      "Fluids turn into gastric acid in cardiogenic shock"
    ],
    correctAnswer: 0,
    rationale: "Cardiogenic shock is a pump failure problem, not a volume deficit problem. The infarcted left ventricle cannot eject blood forward (low ejection fraction). Administering rapid fluid boluses increases venous return and preload against a failing heart, raising pulmonary capillary wedge pressure (PCWP >18 mmHg) and worsening alveolar pulmonary edema and hypoxemia. Management requires inotropes (Dobutamine), vasopressors (Norepinephrine), or mechanical circulatory support (intra-aortic balloon pump).",
    optionRationales: {
      A: "Correct. The failing pump cannot handle volume; fluid boluses worsen left ventricular wall stress and pulmonary edema.",
      B: "Fluid infusions do not chemically neutralize cardiac hormones.",
      C: "Vascular evaporation is biologically impossible.",
      D: "Intravenous crystalloids enter the bloodstream, not the stomach."
    },
    clinicalPearl: "Hypovolemic Shock = Empty tank (Needs FLUIDS). Cardiogenic Shock = Broken pump (Needs INOTROPES and VASOPRESSORS, not fluid boluses).",
    tags: ["cardiogenic-shock", "pump-failure", "pulmonary-edema", "hemodynamics", "inotropes"]
  },
  {
    id: "EMG-068",
    course: "Emergency & Disaster Nursing",
    topic: "Orthopedic & Extremity Trauma Emergencies",
    subtopic: "Traumatic Amputation First Aid",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A worker sustains a complete traumatic amputation of the right hand in an industrial machine. What is the correct protocol for preserving the amputated hand for potential surgical replantation?",
    options: [
      "Wrap the amputated part in sterile gauze moistened with saline, place it in a sealed watertight plastic bag, and put that bag on crushed ice (keep cold, but do NOT freeze or immerse directly in water/ice)",
      "Immerse the bare amputated hand directly into a bucket of dry ice until frozen solid",
      "Submerge the hand in a basin of pure 70% surgical methylated spirit",
      "Wrap the hand in a warm electric heating pad"
    ],
    correctAnswer: 0,
    rationale: "Preserving an amputated part: 1) Gently rinse gross dirt with sterile saline; 2) Wrap in sterile gauze moistened (not soaked) with saline; 3) Place the wrapped part in a clean, watertight plastic bag and seal it; 4) Place the sealed bag into an insulated container or cooler filled with a mixture of ice and water (slurry). Never place tissue directly on ice (causes frostbite/cellular freezing), never immerse directly in water (causes tissue maceration), and never freeze.",
    optionRationales: {
      A: "Correct. Wrap in moist gauze, place in a sealed plastic bag, and put the bag on ice slurry (cold, dry preservation).",
      B: "Direct contact with dry ice causes irreversible tissue freezing and cellular lysis, preventing replantation.",
      C: "Alcohol denatures proteins and destroys microvascular endothelial tissue.",
      D: "Warm pads accelerate ischemic cellular metabolism and warm ischemia necrosis."
    },
    clinicalPearl: "Amputated parts: Wrap in damp gauze, put in a sealed bag, and float the bag on ICE WATER. Never let the tissue touch bare ice or water directly.",
    tags: ["amputation", "replantation", "tissue-preservation", "orthopedics", "first-aid"]
  },
  {
    id: "EMG-069",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "START Triage: Assessment Parameters",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the START (Simple Triage and Rapid Treatment) protocol for adult disaster casualties, what three physiological parameters are evaluated in sequence to determine triage tag categorization?",
    options: [
      "Respirations, Perfusion (radial pulse or capillary refill), and Mental Status (RPM)",
      "Blood pressure, Temperature, and Urine output",
      "Pupil diameter, Weight, and Height",
      "Blood glucose, White cell count, and Hemoglobin"
    ],
    correctAnswer: 0,
    rationale: "The START triage algorithm evaluates non-ambulatory casualties using the 'RPM' parameters in order: 1) R = Respirations (If >30/min → Red; if 0 → open airway; if still 0 → Black); 2) P = Perfusion (Radial pulse absent or capillary refill >2 seconds → Red; control bleeding); 3) M = Mental Status (Cannot follow simple commands → Red; can follow commands → Yellow).",
    optionRationales: {
      A: "Correct. RPM: Respirations, Perfusion (radial pulse/capillary refill), and Mental status.",
      B: "Measuring blood pressure and urine output takes too long in 30-second mass casualty field triage.",
      C: "Weight and height are non-emergency anthropometric parameters.",
      D: "Laboratory blood work cannot be conducted on a disaster field scene."
    },
    clinicalPearl: "START triage mnemonic: RPM (Respirations, Perfusion, Mental Status). Assess each casualty in 30 seconds or less.",
    tags: ["START-triage", "RPM", "mass-casualty", "perfusion", "respiration"]
  },
  {
    id: "EMG-070",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "Assessing Burn Depth (Full-Thickness vs Superficial)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "How is a Third-Degree (Full-Thickness) burn distinguished clinically from a Second-Degree (Partial-Thickness) burn during wound assessment?",
    options: [
      "Full-thickness burns destroy the entire dermis and nerve endings, appearing leathery, white or charred, dry, and are completely insensitive to pinprick (painless), whereas partial-thickness burns form blisters, are weeping, and are exquisitely painful",
      "Full-thickness burns form fluid-filled blisters and are extremely painful to light touch",
      "Partial-thickness burns appear charred black and require immediate skin grafting",
      "Full-thickness burns heal spontaneously within 3 days without scars"
    ],
    correctAnswer: 0,
    rationale: "Burn depth: 1) Superficial (1st degree): Epidermis only, red, dry, painful (sunburn); 2) Partial-thickness (2nd degree): Epidermis and dermis involved, forms fluid-filled blisters, pink/red, weeping, exquisitely painful; 3) Full-thickness (3rd degree): Destroys epidermis, dermis, and cutaneous nerve endings; appears waxy white, leathery, charred black, dry, and is anesthetic/insensitive to pinprick (painless) because sensory nerves are destroyed.",
    optionRationales: {
      A: "Correct. Full-thickness = Leathery, charred/white, dry, and painless (anesthetic). Partial-thickness = Blisters, weeping, and painful.",
      B: "Blistering and severe pain characterize second-degree partial-thickness burns.",
      C: "Charred black appearance defines full-thickness third-degree burns.",
      D: "Full-thickness burns cannot heal on their own from dermal edges; they require surgical debridement and skin grafting."
    },
    clinicalPearl: "If a deep burn does NOT hurt when pricked with a needle, it is a 3rd-degree (Full-Thickness) burn. The pain nerves have been destroyed.",
    tags: ["burn-depth", "full-thickness", "partial-thickness", "burn-assessment"]
  },
  {
    id: "EMG-071",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "ACLS Antiarrhythmic for Shock-Refractory VF",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "During cardiopulmonary resuscitation for persistent Ventricular Fibrillation (VF) that fails to convert after three defibrillation shocks and epinephrine, what is the first-line antiarrhythmic medication and dose to administer?",
    options: [
      "Amiodarone 300 mg IV/IO bolus (may follow with a second dose of 150 mg)",
      "Lidocaine 10 mg/kg rapid IV bolus",
      "Adenosine 12 mg rapid IV push",
      "Calcium gluconate 10 grams IV push"
    ],
    correctAnswer: 0,
    rationale: "In the ACLS pulseless arrest algorithm for shock-refractory VF or pulseless VT (persisting after the 2nd or 3rd shock and epinephrine): The primary antiarrhythmic of choice is Amiodarone. The first dose is 300 mg IV/IO bolus; a second dose of 150 mg IV/IO can be given if VF persists. (Lidocaine 1 to 1.5 mg/kg is an acceptable alternative if amiodarone is unavailable).",
    optionRationales: {
      A: "Correct. Amiodarone 300 mg IV bolus is the first-line antiarrhythmic for shock-refractory VF/pVT.",
      B: "Lidocaine dose is 1 to 1.5 mg/kg; 10 mg/kg is a toxic overdose causing seizures.",
      C: "Adenosine is used for stable supraventricular tachycardia, not pulseless ventricular fibrillation.",
      D: "Calcium gluconate is indicated for hyperkalemia or calcium-channel blocker toxicity, not routine VF arrest."
    },
    clinicalPearl: "Refractory VF: Shock → Shock → Shock + Epinephrine (1 mg) → Shock + Amiodarone (300 mg bolus).",
    tags: ["amiodarone", "VF", "ACLS", "antiarrhythmic", "cardiac-arrest"]
  },
  {
    id: "EMG-072",
    course: "Emergency & Disaster Nursing",
    topic: "Abdominal & Pelvic Trauma Emergencies",
    subtopic: "Blunt Splenic Injury & Kehr's Sign",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A patient involved in a motor vehicle collision sustains blunt left upper quadrant abdominal trauma. During assessment, the patient reports referred, sharp pain in the left shoulder tip when lying supine ('Kehr's Sign'). What internal organ injury is indicated?",
    options: [
      "Ruptured Spleen with hemoperitoneum irritating the left hemidiaphragm",
      "Acute duodenal perforation",
      "Fractured right clavicle",
      "Bladder rupture"
    ],
    correctAnswer: 0,
    rationale: "Kehr's sign is classic referred pain to the left shoulder tip caused by blood and hemoperitoneum pooling in the left subdiaphragmatic space (most commonly from a ruptured spleen). Blood irritates the peritoneal lining of the left hemidiaphragm, which shares phrenic nerve sensory innervation (C3, C4, C5) with the supraclavicular cutaneous nerves supplying the shoulder tip.",
    optionRationales: {
      A: "Correct. Kehr's sign (left shoulder pain) indicates splenic rupture with blood irritating the diaphragm.",
      B: "Duodenal perforation irritates retroperitoneal nerves, causing back pain.",
      C: "Clavicular fractures cause localized bony crepitus over the clavicle, not referred diaphragmatic pain.",
      D: "Bladder rupture causes suprapubic tenderness and inability to void."
    },
    clinicalPearl: "Kehr's sign: Left upper abdominal blunt trauma + Pain radiating to the LEFT SHOULDER = Ruptured Spleen until proven otherwise.",
    tags: ["Kehrs-sign", "splenic-rupture", "abdominal-trauma", "hemoperitoneum", "phrenic-nerve"]
  },
  {
    id: "EMG-073",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiovascular Emergencies",
    subtopic: "Ventricular Tachycardia with a Pulse Management",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client with a wide-complex, monomorphic Ventricular Tachycardia on the monitor has a palpable carotid pulse, is alert and oriented, with a blood pressure of 124/82 mmHg and no chest pain (Stable VT with a pulse). What is the recommended pharmacological treatment?",
    options: [
      "Intravenous antiarrhythmic infusion (e.g., Procainamide, Amiodarone 150 mg IV over 10 minutes, or Sotalol)",
      "Immediate unsynchronized defibrillation at 360 Joules",
      "Immediate chest compressions at 100 per minute",
      "Emergency pericardiocentesis"
    ],
    correctAnswer: 0,
    rationale: "In Ventricular Tachycardia WITH A PULSE, the clinical fork depends on stability: 1) Unstable (hypotension, chest pain, altered mental status) → Immediate Synchronized Cardioversion; 2) Stable (alert, normal BP, asymptomatic) → Medical antiarrhythmic therapy: Amiodarone 150 mg IV infused over 10 minutes, Procainamide infusion, or Sotalol. Defibrillation and CPR are reserved for pulseless arrest.",
    optionRationales: {
      A: "Correct. Stable VT with a pulse is managed with antiarrhythmic infusions like Amiodarone 150 mg over 10 minutes.",
      B: "Unsynchronized defibrillation is used for pulseless rhythms; shocking an alert patient with an unsynchronized shock risks precipitating VF.",
      C: "Chest compressions are indicated only when a pulse is ABSENT.",
      D: "Pericardiocentesis treats tamponade, not stable monomorphic ventricular tachycardia."
    },
    clinicalPearl: "Ventricular Tachycardia: Check for a pulse! If NO pulse → Shock (Defibrillate). If HAS a pulse and stable → Infuse Amiodarone (150 mg IV over 10 mins).",
    tags: ["ventricular-tachycardia", "amiodarone", "ACLS", "stable-VT", "antiarrhythmic"]
  },
  {
    id: "EMG-074",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Carbon Monoxide Hyperbaric Oxygen Indications",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In severe Carbon Monoxide (CO) poisoning from an enclosed fire, which clinical indicator warrants transfer for Hyperbaric Oxygen (HBO) therapy rather than normobaric oxygen alone?",
    options: [
      "Carboxyhemoglobin (HbCO) level >25%, loss of consciousness/coma, severe metabolic acidosis, or pregnancy",
      "A normal carboxyhemoglobin level of 2%",
      "A minor singed eyebrow with normal mental status",
      "A pulse oximeter reading of 98%"
    ],
    correctAnswer: 0,
    rationale: "Hyperbaric Oxygen (HBO) therapy delivers 100% oxygen at 2.5 to 3 atmospheres of pressure, reducing the half-life of carboxyhemoglobin to roughly 20 minutes and displacing CO from intracellular cytochrome oxidases. Indications for HBO transfer: 1) HbCO level >25% (or >15% in pregnant women, as fetal hemoglobin binds CO more avidly); 2) History of loss of consciousness; 3) Neurological deficits, coma, or seizures; 4) Severe metabolic acidosis; 5) Ischemic cardiac changes.",
    optionRationales: {
      A: "Correct. HbCO >25%, loss of consciousness, neurological deficits, or pregnancy are criteria for hyperbaric oxygen.",
      B: "HbCO of 2% is normal in non-smokers and does not require hyperbaric therapy.",
      C: "Mild singeing without systemic toxicity is treated with room air or simple observation.",
      D: "Standard pulse oximetry is unreliable in CO poisoning and cannot determine HBO need."
    },
    clinicalPearl: "Pregnant women with carbon monoxide poisoning are referred for Hyperbaric Oxygen at lower thresholds (HbCO >15%) because fetal hemoglobin binds CO tightly.",
    tags: ["carbon-monoxide", "hyperbaric-oxygen", "carboxyhemoglobin", "pregnancy", "toxicology"]
  },
  {
    id: "EMG-075",
    course: "Emergency & Disaster Nursing",
    topic: "Environmental & Climate Emergencies",
    subtopic: "Severe Hypothermia Rewarming Standards",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A hypothermic patient rescued from cold water has a core body temperature of 28°C (82.4°F), is comatose, bradycardic, and has barely detectable pulses. Why must the rescue team handle the patient gently and avoid vigorous active external rewarming of extremities before the core?",
    options: [
      "Rough handling and peripheral vasodilation can trigger lethal Ventricular Fibrillation and 'Rewarming Shock' (afterdrop of cold acidemic blood returning to the heart)",
      "Cold extremities melt into blisters if touched",
      "The patient's blood turns into solid crystals if moved",
      "Bradycardia is a healthy sign that should be preserved"
    ],
    correctAnswer: 0,
    rationale: "In severe hypothermia (<30°C / 86°F), the myocardium is irritable. Rough movement, rough intubation, or jostling can trigger refractory Ventricular Fibrillation. Furthermore, active external rewarming of cold extremities before the core causes peripheral vasodilation: cold, acidotic blood from the extremities rushes back to the core ('Core Temperature Afterdrop'), cooling the heart further and causing vasodilation-induced 'Rewarming Shock'.",
    optionRationales: {
      A: "Correct. Gentle handling prevents VF, and active core rewarming prevents afterdrop and rewarming shock.",
      B: "Skin does not melt; tissue injury is cold-induced frostbite.",
      C: "Intravascular blood does not freeze into solid crystals in living patients.",
      D: "Hypothermic bradycardia reflects reduced metabolic rate, but requires rewarming to prevent arrest."
    },
    clinicalPearl: "In severe hypothermia: Handle the patient like fragile glass. Rough movements can trigger Ventricular Fibrillation. Warm the CORE first, not the extremities.",
    tags: ["hypothermia", "rewarming-shock", "afterdrop", "ventricular-fibrillation", "environmental-emergencies"]
  },
  {
    id: "EMG-076",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "The Incident Command Post (ICP) Location",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In disaster scene management, where should the Incident Command Post (ICP) be geographically established relative to the hazard site?",
    options: [
      "Upwind, uphill, and upstream in a safe, accessible area outside the hazard perimeter",
      "Directly inside the contaminated chemical hot zone",
      "Downwind and downhill in the path of the toxic gas plume",
      "Inside an underground drainage culvert"
    ],
    correctAnswer: 0,
    rationale: "Safety rules in disaster management dictate that the Incident Command Post (ICP) and staging areas must be sited: 1) Upwind (so blowing toxic smoke or chemical vapors blow away from responders), 2) Uphill (so heavier-than-air chemical vapors and liquid spills flow away), 3) Upstream (preventing waterborne contamination), and 4) In an easily accessible location with reliable communications outside the active hazard zone.",
    optionRationales: {
      A: "Correct. Upwind, uphill, and upstream ensures the command post remains safe from toxic plumes and liquid runoff.",
      B: "Siting command inside the hot zone leads to early commander incapacitation and command collapse.",
      C: "Downwind/downhill positions place responders directly in the path of toxic chemical plumes and spills.",
      D: "Underground culverts accumulate heavy toxic gases and pose drowning risks."
    },
    clinicalPearl: "Command post siting: Always position UPWIND, UPHILL, and UPSTREAM from the disaster scene.",
    tags: ["incident-command", "ICP", "scene-safety", "disaster-management", "HAZMAT"]
  },
  {
    id: "EMG-077",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Airway Management",
    subtopic: "Rapid Sequence Intubation (RSI) Pre-oxygenation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the primary physiological purpose of providing 3 to 5 minutes of 100% High-Flow Oxygen (Pre-oxygenation) to an emergency patient before administering induction and paralytic agents during Rapid Sequence Intubation (RSI)?",
    options: [
      "Denitrogenating the Functional Residual Capacity (FRC) of the lungs, creating an oxygen reservoir that delays desaturation during the apneic period",
      "Paralyzing the vocal cords chemically",
      "Neutralizing stomach hydrochloric acid to prevent chemical burns",
      "Raising the patient's blood pressure by 50 mmHg"
    ],
    correctAnswer: 0,
    rationale: "Pre-oxygenation (denitrogenation) washes out nitrogen from the alveoli and fills the patient's Functional Residual Capacity (FRC) with 100% oxygen. This creates an oxygen reservoir, providing several minutes of safe apnea time during laryngoscopy and tube placement without the patient desaturating into critical hypoxemia.",
    optionRationales: {
      A: "Correct. Washing out nitrogen from the FRC creates an oxygen buffer that prevents hypoxemia during intubation apnea.",
      B: "Paralysis is achieved by neuromuscular blocking agents (Succinylcholine, Rocuronium), not oxygen.",
      C: "Oxygen does not alter gastric pH; sodium citrate or H2 blockers neutralize acid.",
      D: "Pre-oxygenation maintains oxygenation; it does not intentionally induce hypertension."
    },
    clinicalPearl: "Pre-oxygenation replaces nitrogen with 100% oxygen in the lungs (denitrogenation), buying 3 to 8 minutes of safe apnea time during intubation.",
    tags: ["RSI", "pre-oxygenation", "denitrogenation", "airway-management", "intubation"]
  },
  {
    id: "EMG-078",
    course: "Emergency & Disaster Nursing",
    topic: "Orthopedic & Extremity Trauma Emergencies",
    subtopic: "Fat Embolism Syndrome (FES)",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "Forty-eight hours after sustaining a closed comminuted femur fracture, a young adult develops sudden tachypnea, acute confusion, hypoxemia (PaO2 < 60 mmHg), and a petechial rash across the chest, axillae, and conjunctivae. What life-threatening post-traumatic complication has developed?",
    options: [
      "Fat Embolism Syndrome (FES)",
      "Acute bacterial meningitis",
      "Simple postoperative atelectasis",
      "Deep vein phlebitis"
    ],
    correctAnswer: 0,
    rationale: "Fat Embolism Syndrome (FES) is a complication of long bone (femur, tibia) and pelvic fractures. Fat globules released from disrupted bone marrow enter the venous circulation and lodge in pulmonary microvessels. The classic diagnostic triad: 1) Respiratory compromise (dyspnea, hypoxemia), 2) Neurological changes (confusion, restlessness), and 3) A petechial rash appearing on the anterior chest, neck, axillae, and conjunctivae 24 to 72 hours after injury.",
    optionRationales: {
      A: "Correct. Respiratory distress + Confusion + Petechial rash following long-bone fracture defines Fat Embolism Syndrome.",
      B: "Meningitis features fever and nuchal rigidity, without the classic axillary petechial rash of bone trauma.",
      C: "Atelectasis produces mild hypoxemia, but does not cause petechial skin rashes or acute delirium.",
      D: "Phlebitis causes localized vein tenderness without systemic cerebral/pulmonary fat emboli."
    },
    clinicalPearl: "Fat Embolism Triad: Hypoxemia + Confusion + Petechial rash on the chest/axillae 24–72 hours after a Femur Fracture.",
    tags: ["fat-embolism", "femur-fracture", "petechiae", "orthopedic-trauma", "hypoxemia"]
  },
  {
    id: "EMG-079",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiovascular Emergencies",
    subtopic: "Acute Pulmonary Edema Management",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "A client in acute decompensated heart failure presents gasping for breath, coughing up pink frothy sputum, with bilateral pulmonary crackles and a blood pressure of 180/100 mmHg. What position should the nurse place the client in immediately?",
    options: [
      "High-Fowler position with legs dangling over the edge of the bed",
      "Flat supine position with feet elevated",
      "Left lateral Trendelenburg position",
      "Prone position with a pillow under the abdomen"
    ],
    correctAnswer: 0,
    rationale: "Positioning for acute pulmonary edema: Place the client in High-Fowler position (sitting upright at 90 degrees) with legs dependent (dangling over the side of the bed). This maximizes thoracic expansion, lowers the diaphragm, and uses gravity to pool venous blood in the lower extremities, reducing venous return (preload) to the overwhelmed failing heart.",
    optionRationales: {
      A: "Correct. High-Fowler with dependent legs maximizes lung expansion and pools venous blood to reduce cardiac preload.",
      B: "Supine positioning increases venous return, worsening pulmonary congestion and pulmonary edema.",
      C: "Trendelenburg shifts blood to the chest, exacerbating pulmonary edema.",
      D: "Prone positioning restricts thoracic expansion and impedes airway suctioning."
    },
    clinicalPearl: "In acute pulmonary edema with pink frothy sputum: Sit the patient upright in High-Fowler and let the legs dangle. Gravity pools blood in the legs, reducing cardiac work.",
    tags: ["pulmonary-edema", "heart-failure", "High-Fowler", "preload-reduction", "positioning"]
  },
  {
    id: "EMG-080",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Hypovolemic Shock Fluid Resuscitation Endpoints",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During fluid resuscitation of an adult patient in hypovolemic shock, what objective clinical endpoint indicates adequate organ perfusion and end-organ resuscitation?",
    options: [
      "A consistent urine output of at least 0.5 mL/kg/hour (roughly 30–50 mL/hour)",
      "A systolic blood pressure of exactly 200 mmHg",
      "A serum lactate level greater than 10 mmol/L",
      "Complete cessation of peripheral sweating"
    ],
    correctAnswer: 0,
    rationale: "Urine output is the most reliable, non-invasive indicator of adequate end-organ perfusion during shock resuscitation. The target endpoint in an adult is a minimum urine output of 0.5 mL/kg/hour (or 30 to 50 mL/hr). Other resuscitation goals: Mean Arterial Pressure (MAP) >=65 mmHg, normalizing serum lactate (<2 mmol/L), and improving base deficit.",
    optionRationales: {
      A: "Correct. Urine output >=0.5 mL/kg/hr confirms adequate renal cortical and microvascular perfusion.",
      B: "200 mmHg represents severe iatrogenic hypertension and increases vascular blowout risks.",
      C: "Lactate >10 mmol/L indicates severe anaerobic shock and ongoing cellular hypoperfusion.",
      D: "Cessation of sweating is not an objective endpoint of microvascular resuscitation."
    },
    clinicalPearl: "The kidney is the window to shock resuscitation. A urine output of at least 0.5 mL/kg/hr confirms the organs are receiving adequate blood flow.",
    tags: ["urine-output", "shock-resuscitation", "endpoints", "hypovolemia", "perfusion"]
  },
  {
    id: "EMG-081",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Traumatic Brain Injury & Uncal Herniation",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A head trauma patient with an expanding right-sided intracranial hematoma develops an acutely dilated, non-reactive (blown) right pupil. What pathophysiological mechanism produces this ipsilateral pupillary dilation?",
    options: [
      "Uncal herniation of the temporal lobe compressing the ipsilateral Oculomotor Nerve (Cranial Nerve III) against the tentorial cerebelli",
      "Direct traumatic transection of the optic chiasm",
      "Facial nerve paralysis involving the buccal branch",
      "Sympathetic chain paralysis in the cervical spine"
    ],
    correctAnswer: 0,
    rationale: "Uncal (transtentorial) herniation occurs when an expanding supratentorial mass (e.g., epidural or subdural hematoma) forces the medial temporal lobe (the uncus) downward through the tentorial notch. The herniating tissue compresses the ipsilateral Oculomotor Nerve (CN III), paralyzing its parasympathetic constrictor fibers, leaving sympathetic pupillodilator tone unopposed, producing a fixed, dilated pupil on the same side as the lesion.",
    optionRationales: {
      A: "Correct. Uncal herniation compresses the ipsilateral CN III, paralyzing parasympathetic constriction and producing a blown pupil.",
      B: "Optic chiasm compression causes bitemporal hemianopsia, not an isolated unilateral dilated pupil.",
      C: "CN VII innervates facial expression muscles, not pupillary sphincter muscles.",
      D: "Sympathetic paralysis produces miosis (constricted pupil), not dilation."
    },
    clinicalPearl: "A unilaterally dilated, fixed pupil after head trauma is an emergency sign of Uncal Herniation compressing Cranial Nerve III. Emergency neurosurgical decompression is required.",
    tags: ["uncal-herniation", "blown-pupil", "cranial-nerve-III", "head-trauma", "increased-ICP"]
  },
  {
    id: "EMG-082",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Ethylene Glycol (Antifreeze) Toxicity",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A patient is brought to the emergency department comatose with severe high anion gap metabolic acidosis after drinking automotive antifreeze (Ethylene Glycol). Urine microscopy reveals envelope-shaped calcium oxalate crystals. What specific competitive inhibitor of alcohol dehydrogenase is the antidote of choice?",
    options: [
      "Fomepizole (4-methylpyrazole)",
      "N-acetylcysteine",
      "Methylene blue",
      "Flumazenil"
    ],
    correctAnswer: 0,
    rationale: "Ethylene glycol itself is non-toxic, but is metabolized by the enzyme Alcohol Dehydrogenase into glycolic acid and oxalic acid, which bind calcium to form calcium oxalate crystals that cause renal failure. Fomepizole (4-methylpyrazole) is a competitive inhibitor of alcohol dehydrogenase that blocks this toxic metabolism, allowing ethylene glycol to be excreted safely. (Ethanol can be used as an alternative competitor if fomepizole is unavailable).",
    optionRationales: {
      A: "Correct. Fomepizole inhibits alcohol dehydrogenase, preventing toxic oxalate formation.",
      B: "N-acetylcysteine treats paracetamol toxicity.",
      C: "Methylene blue treats methemoglobinemia.",
      D: "Flumazenil reverses benzodiazepine sedation."
    },
    clinicalPearl: "Antifreeze (Ethylene Glycol) poisoning causes acute renal failure from calcium oxalate crystals. The antidote is Fomepizole (or IV ethanol).",
    tags: ["ethylene-glycol", "fomepizole", "calcium-oxalate", "antidote", "toxicology"]
  },
  {
    id: "EMG-083",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Maternal Cardiac Arrest (Perimortem Cesarean Delivery)",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A woman at 32 weeks gestation suffers a sudden cardiac arrest in the emergency room. Resuscitation teams manual-displace the gravid uterus to the left. If spontaneous circulation (ROSC) is not restored within 4 minutes of cardiac arrest, what emergency intervention should be initiated by minute 5?",
    options: [
      "Resuscitative Hysterotomy / Perimortem Cesarean Delivery (PMCD) at the bedside",
      "Abandoning all chest compressions and pronouncing death",
      "Administering double the standard adult electrical shock energy",
      "Placing the woman in a prone position"
    ],
    correctAnswer: 0,
    rationale: "In maternal cardiac arrest past 20 weeks gestation, the gravid uterus compresses the inferior vena cava and aorta, reducing venous return and rendering chest compressions largely ineffective. If ROSC is not achieved within 4 minutes of arrest, Resuscitative Hysterotomy (Perimortem Cesarean Delivery) must be performed immediately at the bedside by minute 5. Delivering the baby relieves aortocaval compression, increasing maternal cardiac output and offering the best chance of survival for both mother and infant.",
    optionRationales: {
      A: "Correct. Bedside Resuscitative Hysterotomy at minute 5 relieves aortocaval compression, facilitating maternal and fetal survival.",
      B: "Terminating resuscitation at 4 minutes without delivery guarantees both maternal and fetal death.",
      C: "Standard adult defibrillation energy (120–200J biphasic) is maintained; energy is not doubled.",
      D: "Prone positioning prevents effective chest compressions and access."
    },
    clinicalPearl: "The 4-Minute Rule in Maternal Cardiac Arrest: If the pregnant patient (>20 weeks) does not have a pulse within 4 minutes, deliver the baby by minute 5 to save the mother.",
    tags: ["maternal-arrest", "perimortem-cesarean", "resuscitative-hysterotomy", "ACLS", "obstetric-emergency"]
  },
  {
    id: "EMG-084",
    course: "Emergency & Disaster Nursing",
    topic: "Thoracic Trauma Emergencies",
    subtopic: "Massive Hemothorax Definition & Autotransfusion",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "Following placement of an intercostal chest tube for traumatic chest injury, the nurse immediately drains 1,600 mL of dark whole blood, and drainage continues at 250 mL/hour for the next 2 hours. What diagnosis is confirmed, and what is the definitive surgical management?",
    options: [
      "Massive Hemothorax; Prepare for immediate emergency exploratory thoracotomy",
      "Simple pneumothorax; Clamp the chest tube and monitor for 24 hours",
      "Tracheoesophageal fistula; Give oral barium swallow",
      "Cardiac rupture; Administer oral aspirin"
    ],
    correctAnswer: 0,
    rationale: "Massive Hemothorax is defined as the rapid accumulation of >=1,500 mL of blood (or >200 mL/hour for 2 to 4 consecutive hours) in the pleural space, typically caused by disruption of systemic vessels (internal mammary or intercostal arteries). It causes hemorrhagic and respiratory compromise. Definitive management requires urgent surgical Exploratory Thoracotomy to cross-clamp and ligate bleeding vessels, alongside volume replacement.",
    optionRationales: {
      A: "Correct. Blood loss >=1,500 mL upon insertion or >200 mL/hr over 2–4 hours is a Massive Hemothorax requiring emergent thoracotomy.",
      B: "Clamping a chest tube in active bleeding causes blood to accumulate, triggering mediastinal shift and tension hemothorax.",
      C: "Fistulas do not produce acute massive pleural hemorrhage.",
      D: "Aspirin is an antiplatelet agent that worsens traumatic hemorrhage."
    },
    clinicalPearl: "Thoracotomy criteria in Hemothorax: >1,500 mL of blood drained immediately, OR continuous bleeding >200 mL/hr for 2–4 hours. Call the thoracic surgeon.",
    tags: ["hemothorax", "massive-hemothorax", "thoracotomy", "chest-tube", "trauma"]
  },
  {
    id: "EMG-085",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "JumpSTART Pediatric Triage Tool",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "How does the 'JumpSTART' disaster triage tool modified for pediatric casualties under 8 years old differ from the adult START triage algorithm when assessing an apneic child with a palpable pulse?",
    options: [
      "The rescuer delivers 5 rescue breaths; if spontaneous breathing resumes, the child is tagged RED (Immediate); if still apneic, tagged BLACK",
      "The child is immediately tagged Black without any airway interventions",
      "The child is tagged Green and sent to the walking area",
      "The rescuer performs 30 minutes of closed-chest CPR on the field"
    ],
    correctAnswer: 0,
    rationale: "Unlike adults who arrest primarily from cardiac arrhythmias, pediatric arrest is overwhelmingly secondary to respiratory failure and hypoxia. In JumpSTART, if a child is apneic after manual airway positioning and has a palpable pulse, the rescuer administers 5 rescue breaths. If breathing resumes, the child is tagged RED (Immediate). If the child remains apneic, they are tagged BLACK (Deceased).",
    optionRationales: {
      A: "Correct. JumpSTART includes 5 rescue breaths for an apneic child with a pulse before assigning a Black tag.",
      B: "Tagging an apneic child with a pulse Black without rescue breaths ignores the reversible respiratory etiology of pediatric arrest.",
      C: "Non-breathing casualties are not ambulatory Green walking wounded.",
      D: "Prolonged individual CPR is not performed on mass casualty triage scenes."
    },
    clinicalPearl: "JumpSTART difference: For an apneic child with a pulse, give 5 RESCUE BREATHS. If breathing starts, tag RED. If not, tag BLACK.",
    tags: ["JumpSTART", "pediatric-triage", "mass-casualty", "rescue-breaths", "disaster"]
  },
  {
    id: "EMG-086",
    course: "Emergency & Disaster Nursing",
    topic: "Orthopedic & Extremity Trauma Emergencies",
    subtopic: "Pelvic Fracture Hemorrhage & Retroperitoneal Bleeding",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Why do unstable 'Vertical Shear' and 'Open-Book' pelvic fractures frequently result in fatal hemorrhagic shock, even without visible external bleeding?",
    options: [
      "The disrupted retroperitoneal pelvic space can accommodate up to 4 to 5 liters of blood from torn presacral venous plexuses and branches of the internal iliac artery",
      "Pelvic fractures convert blood into synovial fluid",
      "The pelvis contains the thoracic aorta",
      "The bone marrow of the ilium produces instant cardiac arrest"
    ],
    correctAnswer: 0,
    rationale: "The retroperitoneum surrounding the pelvic ring is a non-contained space. Disruption of the posterior sacroiliac ligaments tears the presacral venous plexus and internal iliac arterial branches. Because the pelvic volume expands when the ring opens, it can hide 4 to 5 liters of blood—the body's entire blood volume—resulting in fatal exsanguination without external hemorrhage.",
    optionRationales: {
      A: "Correct. The expanded retroperitoneal pelvis can hold 4–5 liters of concealed blood from torn presacral veins and internal iliac branches.",
      B: "Fractures do not convert blood into joint synovial fluid.",
      C: "The thoracic aorta resides in the chest, not the pelvis.",
      D: "Marrow release causes fat emboli, but not instant cardiac arrest without hemorrhage."
    },
    clinicalPearl: "An unstable open-book pelvic fracture can conceal the patient's ENTIRE blood volume in the retroperitoneum. Apply a pelvic binder immediately.",
    tags: ["pelvic-fracture", "retroperitoneal-hemorrhage", "internal-bleeding", "trauma", "ATLS"]
  },
  {
    id: "EMG-087",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Targeted Temperature Management (TTM) Post-Cardiac Arrest",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Following successful resuscitation from out-of-hospital cardiac arrest, a comatose adult patient with Return of Spontaneous Circulation (ROSC) is initiated on Targeted Temperature Management (TTM). What is the evidence-based target core temperature range maintained for at least 24 hours to prevent post-ischemic cerebral reperfusion injury?",
    options: [
      "32°C to 36°C (actively preventing fever)",
      "25°C to 28°C (inducing severe hypothermia)",
      "38.5°C to 40°C",
      "Exactly 0°C"
    ],
    correctAnswer: 0,
    rationale: "Targeted Temperature Management (TTM, formerly therapeutic hypothermia) is indicated for comatose post-cardiac arrest adults with ROSC. Maintaining a constant core body temperature between 32°C and 36°C for at least 24 hours reduces cerebral metabolic rate (by ~6% per degree drop), decreases free radical release, prevents cerebral edema, and avoids fever, improving neurological survival.",
    optionRationales: {
      A: "Correct. 32°C to 36°C maintained for 24 hours optimizes post-arrest neuroprotection and avoids fever.",
      B: "Temperatures <30°C induce severe coagulopathy, dysrhythmias, and electrolyte collapse.",
      C: "Hyperthermia (>38°C) worsens ischemic brain injury and is avoided.",
      D: "0°C causes cellular crystallization and biological death."
    },
    clinicalPearl: "Post-cardiac arrest care: Keep the comatose patient cool (32°C to 36°C) for at least 24 hours. NEVER allow a post-arrest brain to develop a fever.",
    tags: ["TTM", "targeted-temperature-management", "ROSC", "post-cardiac-arrest", "neuroprotection"]
  },
  {
    id: "EMG-088",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "Burn Shock Fluid Resuscitation Monitoring",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During Parkland fluid resuscitation of a severe burn patient, what is the most reliable clinical indicator used by the nurse to titrate hourly intravenous fluid rates up or down?",
    options: [
      "Hourly urine output via an indwelling Foley catheter (target: 0.5 mL/kg/hr, or 30–50 mL/hr in adults)",
      "Daily body weight measurement",
      "Hourly measurement of serum cholesterol",
      "Skin color of the unburned legs"
    ],
    correctAnswer: 0,
    rationale: "The Parkland formula provides an initial estimate of fluid requirements, but the actual fluid infusion rate must be titrated dynamically every hour based on physiological response. In an adult, maintaining a strict hourly urine output of 0.5 mL/kg/hr (30 to 50 mL/hr) is the most reliable indicator of adequate end-organ perfusion, preventing both under-resuscitation (acute kidney injury) and over-resuscitation (pulmonary and compartment edema).",
    optionRationales: {
      A: "Correct. Hourly urine output (target 0.5 mL/kg/hr or 30–50 mL/hr) is the standard metric for titrating burn fluids.",
      B: "Daily weights reflect massive third-space fluid retention, not hourly intravascular perfusion.",
      C: "Serum cholesterol has no role in acute burn shock fluid titration.",
      D: "Skin color does not reflect glomerular filtration rate or microvascular hydration."
    },
    clinicalPearl: "Burn fluid titration rule: The Parkland formula is just a starting estimate. Adjust the IV rate every hour to maintain urine output at 30 to 50 mL/hr.",
    tags: ["burn-shock", "urine-output", "fluid-titration", "Parkland-formula", "monitoring"]
  },
  {
    id: "EMG-089",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Digoxin Toxicity & ECG Findings",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "An elderly heart failure patient taking Digoxin presents with nausea, vomiting, yellow-green visual halos (xanthopsia), confusion, and an irregular heart rate of 42 bpm. Serum potassium is 6.2 mmol/L. What is the definitive life-saving antidote for severe Digoxin toxicity?",
    options: [
      "Digoxin-specific antibody fragments (DigiFab / Digibind)",
      "Naloxone IV",
      "Calcium chloride IV bolus",
      "Atropine infusion alone"
    ],
    correctAnswer: 0,
    rationale: "Digoxin toxicity causes life-threatening cardiac dysrhythmias (e.g., bidirectional VT, severe bradycardia, AV blocks) and hyperkalemia by inhibiting the Na+/K+ ATPase pump. The definitive antidote is Digoxin Immune Fab (DigiFab / Digibind) fragments, which bind free intravascular digoxin molecules and eliminate them through the kidneys. Note: Calcium administration is contraindicated in digoxin toxicity ('stone heart').",
    optionRationales: {
      A: "Correct. Digoxin-specific antibody fragments (DigiFab) bind and neutralize free digoxin molecules.",
      B: "Naloxone reverses opioids, not cardiac digitalis glycosides.",
      C: "IV Calcium is contraindicated in digoxin toxicity because high intracellular calcium can trigger fatal contracture ('stone heart').",
      D: "Atropine may provide transient chronotropic support, but does not neutralize the underlying glycoside molecules."
    },
    clinicalPearl: "Digoxin toxicity: Visual halos (yellow-green vision) + Bradycardia + High Potassium. Antidote = DigiFab. Avoid IV Calcium!",
    tags: ["digoxin-toxicity", "DigiFab", "antidote", "cardiac-glycosides", "toxicology"]
  },
  {
    id: "EMG-090",
    course: "Emergency & Disaster Nursing",
    topic: "Environmental & Climate Emergencies",
    subtopic: "Lightning Strike Injury Mechanics",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A soccer player struck by lightning is found in cardiopulmonary arrest. Rescuers observe superficial dendritic, fern-like branching patterns on the skin. What are these cutaneous markings called, and what is the resuscitation priority?",
    options: [
      "Lichtenberg Figures (keraunographic skin markings); Initiate immediate CPR and defibrillation (reverse triage applies, as victims have high survival rates if resuscitated early)",
      "Third-degree full-thickness burns; Discontinue CPR immediately",
      "Petechial hemorrhages; Administer subcutaneous heparin",
      "Erysipelas rash; Administer IV penicillin"
    ],
    correctAnswer: 0,
    rationale: "Lichtenberg figures (ferning or feathering) are pathognomonic cutaneous patterns produced by the electrical flashover of a lightning strike tracking across the skin, resolving within 24–48 hours. Lightning acts as an instantaneous direct-current countershock, depolarizing the myocardium into asystole. In mass lightning incidents, 'Reverse Triage' applies: attend to the dead and pulseless FIRST, because lightning arrest victims often recover spontaneous cardiac function with early ventilation and CPR.",
    optionRationales: {
      A: "Correct. Lichtenberg figures are typical of lightning strikes; reverse triage applies because lightning-induced arrest has high recovery rates with early CPR.",
      B: "Lichtenberg figures are superficial cutaneous marks, not full-thickness burns; CPR must not be abandoned.",
      C: "These are electrical arborization marks, not thrombocytopenic petechiae.",
      D: "Bacterial cellulitis is unrelated to acute lightning electrocution."
    },
    clinicalPearl: "Lightning triage is REVERSE TRIAGE: In mass lightning events, treat the pulseless casualties FIRST! Their hearts can restart with early CPR and breathing support.",
    tags: ["lightning-strike", "Lichtenberg-figures", "reverse-triage", "cardiac-arrest", "environmental-emergencies"]
  },
  {
    id: "EMG-091",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiovascular Emergencies",
    subtopic: "Right Ventricular Infarction Hemodynamics",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A patient with an acute inferior myocardial infarction (ST elevation in II, III, aVF) has right-sided ECG leads showing ST elevation in V4R (Right Ventricular Infarction). The blood pressure is 82/50 mmHg with clear lung sounds and elevated jugular venous distension. Why are Nitrates, Morphine, and Diuretics strictly CONTRAINDICATED?",
    options: [
      "Right ventricular infarction depends heavily on high venous return (preload) to fill the left heart; nitrates and diuretics drop preload, precipitating cardiovascular collapse",
      "Nitrates accelerate electrical conduction through the AV node, causing ventricular tachycardia",
      "Morphine destroys right ventricular muscle fibers",
      "Diuretics cause immediate myocardial rupture"
    ],
    correctAnswer: 0,
    rationale: "In Right Ventricular (RV) Infarction, the stunned, non-compliant right ventricle cannot pump blood forward into the pulmonary circulation unless maintained by high right-atrial filling pressures (preload-dependent). Administering venodilators (Nitroglycerin, Morphine) or Diuretics causes venous pooling, reducing preload and dropping left ventricular filling, which triggers cardiogenic shock. Treatment requires IV Normal Saline fluid boluses to maintain preload.",
    optionRationales: {
      A: "Correct. RV infarction is preload-dependent; nitrates and diuretics drop preload, causing circulatory collapse.",
      B: "Nitrates cause peripheral vasodilation, not direct AV nodal acceleration.",
      C: "Morphine reduces sympathetic vascular tone; it does not destroy myocardium.",
      D: "Diuretics reduce intravascular fluid volume, not myocardial wall rupture."
    },
    clinicalPearl: "Right Ventricular Infarction (ST elevation in V4R): AVOID Nitroglycerin and Morphine! Give IV Fluids (Normal Saline) to maintain preload.",
    tags: ["RV-infarction", "preload-dependent", "nitrates-contraindicated", "inferior-MI", "cardiovascular"]
  },
  {
    id: "EMG-092",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "Decontamination of Radiologically Contaminated Casualties",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Following a 'Dirty Bomb' radiological explosion, casualties arrive contaminated with radioactive dust. What simple field decontamination step removes approximately 80% to 90% of external radiological contamination before washing?",
    options: [
      "Carefully removing (stripping) all outer clothing and footwear and sealing them in marked plastic hazardous bags",
      "Scrubbing the body with wire metal brushes until skin bleeds",
      "Administering a high-dose potassium iodide tablet orally",
      "Shaving off all body hair with dry razors"
    ],
    correctAnswer: 0,
    rationale: "In radiological and chemical particulate incidents, carefully removing the victim's outer clothing, shoes, and jewelry eliminates 80% to 90% of external radiological contamination. This is followed by gentle washing with lukewarm water and mild soap, taking care not to abrade the skin (which would facilitate transdermal radionuclide absorption).",
    optionRationales: {
      A: "Correct. Removing outer clothing removes 80–90% of external radiological contamination.",
      B: "Abrasive scrubbing breaks skin integrity, allowing radioactive particles to enter the bloodstream.",
      C: "Potassium iodide protects the thyroid from radioactive iodine; it does not remove external radiological dust.",
      D: "Dry shaving causes micro-abrasions that facilitate internal radiological absorption."
    },
    clinicalPearl: "Radiological decontamination: Stripping off clothing removes up to 90% of radioactive dust. Wash gently with soap and water—do NOT scrub hard.",
    tags: ["radiological-disaster", "dirty-bomb", "decontamination", "CBRN", "disaster-nursing"]
  },
  {
    id: "EMG-093",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Traumatic Diaphragmatic Rupture",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A victim of a blunt high-speed motor collision presents with dyspnea, a scaphoid (sunken) abdomen, absent breath sounds over the left lower chest, and bowel sounds auscultated inside the left thoracic cavity. What traumatic injury is indicated?",
    options: [
      "Traumatic Rupture of the Diaphragm (with herniation of abdominal viscera into the chest)",
      "Simple acute gastroenteritis",
      "Bilateral fractured clavicles",
      "Ruptured urinary bladder"
    ],
    correctAnswer: 0,
    rationale: "Traumatic diaphragmatic rupture (more common on the left side because the liver protects the right hemidiaphragm) occurs from blunt compression of the abdomen. Abdominal viscera (stomach, spleen, colon) herniate through the diaphragmatic tear into the negative-pressure thoracic cavity, producing a scaphoid abdomen, respiratory distress, mediastinal shift, and audible bowel sounds upon thoracic auscultation.",
    optionRationales: {
      A: "Correct. Scaphoid abdomen + bowel sounds in the chest cavity confirms diaphragmatic rupture with visceral herniation.",
      B: "Gastroenteritis causes diarrhea and hyperactive abdominal sounds, not intrathoracic bowel sounds.",
      C: "Clavicular fractures do not displace abdominal organs into the thorax.",
      D: "Bladder rupture causes pelvic pain and peritonitis, not intrathoracic herniation."
    },
    clinicalPearl: "Hearing bowel sounds inside the CHEST after blunt trauma = Diaphragmatic Rupture. Avoid bag-mask ventilation, which inflates the herniated stomach and compresses the heart.",
    tags: ["diaphragmatic-rupture", "thoracic-trauma", "scaphoid-abdomen", "bowel-sounds-in-chest"]
  },
  {
    id: "EMG-094",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Advanced Airway Management During CPR",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During adult cardiopulmonary resuscitation, an endotracheal tube is placed and secured. How should ventilations and chest compressions be coordinated once this advanced airway is in place?",
    options: [
      "Provide continuous chest compressions at 100–120/min without pausing, and deliver 1 breath every 6 seconds (10 breaths/min)",
      "Maintain the 30:2 ratio, pausing compressions for every 2 breaths",
      "Deliver 30 breaths per minute while stopping compressions completely",
      "Ventilate only once every 30 seconds"
    ],
    correctAnswer: 0,
    rationale: "Once an advanced airway (endotracheal tube or supraglottic airway like an LMA) is placed during CPR, the 30:2 cycle is discontinued. The compressor delivers continuous chest compressions at 100 to 120 compressions/min without pausing for ventilations. The ventilator delivers 1 breath every 6 seconds (10 breaths per minute) asynchronously, avoiding hyperventilation.",
    optionRationales: {
      A: "Correct. Continuous compressions without pauses + 1 breath every 6 seconds (10 breaths/min) is the advanced airway CPR standard.",
      B: "The 30:2 cycle is used only for basic CPR before an advanced airway is placed.",
      C: "30 breaths/min causes severe hyperventilation, raising intrathoracic pressure and dropping coronary perfusion.",
      D: "One breath every 30 seconds causes severe hypercapnia and hypoxemia."
    },
    clinicalPearl: "Advanced airway in place: NO MORE PAUSES for breaths. Continuous compressions at 100–120/min, and give 1 breath every 6 seconds.",
    tags: ["advanced-airway", "CPR", "ACLS", "continuous-compressions", "ventilation-rate"]
  },
  {
    id: "EMG-095",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Systemic Inflammatory Response Syndrome (SIRS) Criteria",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A post-trauma emergency patient is evaluated for Systemic Inflammatory Response Syndrome (SIRS). Which combination of two or more criteria fulfills the clinical definition of SIRS?",
    options: [
      "Temperature >38°C or <36°C; Heart rate >90 bpm; Respiratory rate >20 bpm (or PaCO2 <32 mmHg); White blood cell count >12,000/mm3 or <4,000/mm3 (or >10% bands)",
      "Blood pressure >180/120 mmHg; Blood glucose <40 mg/dL; Platelets >500,000/mm3",
      "Urine output >200 mL/hr; Bilateral pinpoint pupils; Diarrhea",
      "Serum sodium >160 mEq/L; Glasgow coma scale = 15; SpO2 = 100%"
    ],
    correctAnswer: 0,
    rationale: "SIRS criteria require at least two of the following four physiological parameters: 1) Core temperature >38°C (100.4°F) or <36°C (96.8°F); 2) Heart rate >90 beats/min; 3) Respiratory rate >20 breaths/min or PaCO2 <32 mmHg; 4) White Blood Cell (WBC) count >12,000/mm3, <4,000/mm3, or >10% immature band forms. Sepsis is defined as SIRS with a suspected or confirmed infection.",
    optionRationales: {
      A: "Correct. Temperature extremes, tachycardia >90, tachypnea >20, and abnormal WBC counts define SIRS.",
      B: "Describes hypertensive urgency and hypoglycemia, not SIRS inflammatory criteria.",
      C: "These are parasympathetic/cholinergic signs.",
      D: "These describe hypernatremia with normal neurological status."
    },
    clinicalPearl: "SIRS Criteria (Need 2 or more): Temp >38°C or <36°C, Heart Rate >90, Respiratory Rate >20, WBC >12,000 or <4,000.",
    tags: ["SIRS", "sepsis", "inflammatory-response", "vital-signs", "critical-care"]
  },
  {
    id: "EMG-096",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Tracheobronchial Rupture & Subcutaneous Emphysema",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "Following a crushing chest injury, a patient develops severe dyspnea, cyanosis, and massive subcutaneous emphysema (skin crackles like bubble wrap on palpation over the neck, face, and chest). A chest tube is inserted, but reveals a massive, continuous air leak with failure of the lung to re-expand. What injury is suspected?",
    options: [
      "Major Tracheobronchial Tree Rupture (bronchial tear near the carina)",
      "Simple fractured clavicle",
      "Uncomplicated superficial laceration",
      "Ruptured appendix"
    ],
    correctAnswer: 0,
    rationale: "Major tracheobronchial rupture occurs from high-energy blunt trauma compressing the airway against the spine. Clinical hallmarks: Rapidly expanding massive subcutaneous emphysema (crepitus across neck and chest), hemoptysis, and a persistent massive air leak through a thoracostomy tube with failure of the lung to re-expand. Fiberoptic bronchoscopy confirms the tear, and emergency thoracotomy is required for surgical repair.",
    optionRationales: {
      A: "Correct. Massive continuous chest tube air leak, extensive subcutaneous emphysema, and unexpanded lung indicate tracheobronchial rupture.",
      B: "Clavicular fractures do not cause massive continuous thoracic air leaks.",
      C: "Superficial lacerations do not leak air from the respiratory tree.",
      D: "Appendiceal rupture causes peritonitis in the lower abdomen, not massive thoracic subcutaneous emphysema."
    },
    clinicalPearl: "Massive subcutaneous emphysema (crackling skin) + Chest tube with continuous massive air bubbles that won't stop = Tracheobronchial Tear.",
    tags: ["tracheobronchial-rupture", "subcutaneous-emphysema", "air-leak", "thoracic-trauma"]
  },
  {
    id: "EMG-097",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Beta-Blocker Toxicity & Glucagon Antidote",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client ingests a massive overdose of Propranolol (a non-selective beta-blocker), presenting in cardiogenic shock with a heart rate of 32 bpm, blood pressure of 68/40 mmHg, and profound hypoglycemia. Atropine fails to raise the heart rate. What is the specific first-line antidote?",
    options: [
      "Intravenous Glucagon (bypasses blocked beta-receptors to increase intracellular cAMP)",
      "Intravenous Naloxone",
      "Oral activated charcoal alone",
      "Intravenous Flumazenil"
    ],
    correctAnswer: 0,
    rationale: "Glucagon is the first-line antidote for severe beta-blocker overdose. Glucagon stimulates adenylate cyclase through non-adrenergic glucagon receptors on myocytes, bypassing the blocked beta-adrenergic receptors. This increases intracellular cyclic AMP (cAMP), exerting positive inotropic and chronotropic effects that increase heart rate, myocardial contractility, and blood pressure, while also correcting hypoglycemia.",
    optionRationales: {
      A: "Correct. Glucagon bypasses blocked beta-receptors, raising cAMP to restore heart rate and contractility.",
      B: "Naloxone treats opioid toxicity, not beta-blocker poisoning.",
      C: "Charcoal in a comatose patient without airway protection risks fatal aspiration.",
      D: "Flumazenil reverses benzodiazepines, but has no effect on beta-blockers."
    },
    clinicalPearl: "Beta-blocker overdose antidote = GLUCAGON. It bypasses blocked beta-receptors to increase heart rate and force of contraction.",
    tags: ["beta-blocker-toxicity", "glucagon", "antidote", "toxicology", "bradycardia"]
  },
  {
    id: "EMG-098",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "Critical Incident Stress Debriefing (CISD)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Following a mass casualty bus crash involving multiple pediatric fatalities, the hospital activates support for its emergency nursing team. What is the purpose of a Critical Incident Stress Debriefing (CISD) session held 24 to 72 hours post-event?",
    options: [
      "To provide a structured, confidential forum for healthcare responders to process emotions, mitigate acute stress reactions, and identify staff at risk for PTSD",
      "To conduct a legal investigation to identify which nurse made clinical errors",
      "To terminate staff who expressed sadness or emotional distress",
      "To assign administrative blame for hospital financial losses"
    ],
    correctAnswer: 0,
    rationale: "Critical Incident Stress Debriefing (CISD) is a supportive, peer-driven, psycho-educational meeting conducted 24 to 72 hours after a critical incident. It provides a structured, non-judgmental environment for first responders to process thoughts, normalize stress reactions, review coping mechanisms, and identify individuals requiring clinical referral for Acute Stress Disorder or PTSD.",
    optionRationales: {
      A: "Correct. CISD helps healthcare responders process emotional trauma, review coping strategies, and identify acute stress risks.",
      B: "CISD is non-evaluative and confidential; it is not a disciplinary or legal fault-finding inquest.",
      C: "Expressing emotional reactions to horrific trauma is normal; CISD supports staff rather than penalizing them.",
      D: "CISD is a psychological support process, not a financial audit."
    },
    clinicalPearl: "Critical Incident Stress Debriefing (CISD) supports the RESCUERS. Held 24–72 hours after a disaster, it helps prevent PTSD and burnout in nurses.",
    tags: ["CISD", "stress-debriefing", "nurse-wellbeing", "PTSD", "disaster-management"]
  },
  {
    id: "EMG-099",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Pulseless Ventricular Tachycardia (pVT) Initial Energy",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When delivering an initial unsynchronized defibrillation shock to an adult in pulseless Ventricular Tachycardia using a modern biphasic defibrillator, what is the recommended energy dose?",
    options: [
      "Manufacturer's recommended dose (typically 120 to 200 Joules biphasic)",
      "Exactly 10 Joules",
      "360 Joules monophasic only",
      "50 Joules synchronized"
    ],
    correctAnswer: 0,
    rationale: "ACLS guidelines for defibrillation in adult cardiac arrest (VF or Pulseless VT) specify: 1) Biphasic defibrillators: Use the manufacturer's recommended initial energy dose (typically 120 to 200 Joules; if unknown, use maximum available energy, e.g., 200J); 2) Monophasic defibrillators: Deliver 360 Joules for all shocks.",
    optionRationales: {
      A: "Correct. 120 to 200 Joules is the standard initial biphasic defibrillation energy.",
      B: "10 Joules is inadequate to terminate adult ventricular fibrillation.",
      C: "360 Joules applies to older monophasic units, not standard biphasic initial shocks.",
      D: "50 Joules synchronized is used for atrial flutter or SVT with a pulse, not pulseless VT arrest."
    },
    clinicalPearl: "Initial biphasic shock for VF / Pulseless VT: 120 to 200 Joules. If unsure of the manufacturer's setting, shock at the MAXIMUM energy available on the machine.",
    tags: ["defibrillation", "biphasic-energy", "pulseless-VT", "ACLS", "cardiac-arrest"]
  },
  {
    id: "EMG-100",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Trauma Resuscitation Golden Hour Concept",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Pioneered by Dr. R. Adams Cowley, what is the foundational clinical concept of the 'Golden Hour' in emergency trauma nursing?",
    options: [
      "The critical first 60 minutes following severe traumatic injury, during which rapid surgical intervention and definitive hemorrhage control yield the highest survival rates",
      "The statutory time window allowed for patients to pay hospital admission bills",
      "The duration of time an ambulance is permitted to drive on the highway",
      "The daily hour when hospital visiting is open to families"
    ],
    correctAnswer: 0,
    rationale: "The 'Golden Hour' is a fundamental trauma principle: casualties with internal hemorrhage, airway compromise, or intracranial bleeding have the highest probability of survival if definitive surgical care, damage control resuscitation, and bleeding control are achieved within the first 60 minutes post-injury. Delays past this window correlate with irreversible shock and multiorgan failure.",
    optionRationales: {
      A: "Correct. The Golden Hour emphasizes that definitive resuscitation and surgical hemorrhage control within 60 minutes saves the most lives.",
      B: "Financial billing is secondary to emergency trauma survival.",
      C: "The Golden Hour refers to the biological window of survival, not ambulance transit limits.",
      D: "Visiting hours are routine administrative schedules."
    },
    clinicalPearl: "The Golden Hour: Every minute counts. Getting the bleeding trauma patient to the operating theater within the first 60 minutes determines life or death.",
    tags: ["Golden-Hour", "trauma-resuscitation", "ATLS", "damage-control", "emergency-care"]
  },
  {
    id: "EMG-101",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Calcium Channel Blocker (CCB) Toxicity Management",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client presents with profound bradycardia, hypotension (BP 66/38 mmHg), and hyperglycemia following an intentional overdose of sustained-release Amlodipine. After atropine and IV calcium gluconate fail to restore hemodynamic stability, what is the next-line antidote therapy?",
    options: [
      "High-Dose Insulin Euglycemic Therapy (HIET) with continuous dextrose infusion",
      "Intravenous bolus of flumazenil",
      "Immediate administration of oral activated charcoal with sorbitol",
      "Continuous infusion of furosemide"
    ],
    correctAnswer: 0,
    rationale: "High-Dose Insulin Euglycemic Therapy (HIET) is the treatment of choice for severe, refractory calcium channel blocker toxicity. CCBs block L-type calcium channels in pancreatic beta cells (suppressing insulin release and causing hyperglycemia) and in cardiac myocytes (impairing glucose uptake). High-dose insulin (1 unit/kg bolus, then 0.5–1 unit/kg/hr with titrated dextrose) switches stressed myocardial metabolism from free fatty acids to glucose, acting as a potent inotrope.",
    optionRationales: {
      A: "Correct. HIET provides direct myocardial metabolic support, reversing CCB-induced cardiogenic shock.",
      B: "Flumazenil reverses benzodiazepines, not calcium channel blockers, and can trigger seizures.",
      C: "Charcoal is contraindicated in lethargic/unstable patients without an established airway.",
      D: "Furosemide drops intravascular volume and worsens profound cardiogenic and distributive shock."
    },
    clinicalPearl: "CCB overdose classic clue: Bradycardia + Hypotension + HYPERGLYCEMIA (due to blocked insulin release). The antidote is High-Dose Insulin (HIET).",
    tags: ["calcium-channel-blocker", "HIET", "insulin-therapy", "toxicology", "bradycardia"]
  },
  {
    id: "EMG-102",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Chemical Weapons",
    subtopic: "Nerve Agent Toxidromes & Mark I Auto-Injectors",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In a terrorist chemical attack using Sarin gas (a potent organophosphate nerve agent), military and disaster response teams deploy the Mark I NAAK (Nerve Agent Antidote Kit). What two medications are pre-loaded in this dual auto-injector kit?",
    options: [
      "Atropine sulfate and Pralidoxime chloride (2-PAM)",
      "Epinephrine and Diphenhydramine",
      "Morphine sulfate and Naloxone",
      "Diazepam and Midazolam"
    ],
    correctAnswer: 0,
    rationale: "Nerve agents (Sarin, Soman, Tabun, VX) irreversibly inhibit acetylcholinesterase, producing an acute cholinergic crisis. The Mark I Nerve Agent Antidote Kit (NAAK) contains two auto-injectors: 1) Atropine (2 mg) to block excess muscarinic acetylcholine receptors and dry lethal pulmonary secretions, and 2) Pralidoxime chloride (2-PAM, 600 mg) to reactivate the acetylcholinesterase enzyme at nicotinic receptor sites.",
    optionRationales: {
      A: "Correct. The Mark I kit delivers Atropine (muscarinic blocker) and Pralidoxime (enzyme reactivator).",
      B: "Epinephrine and diphenhydramine are used for anaphylaxis, not organophosphate nerve gas poisoning.",
      C: "Morphine worsens respiratory depression in cholinergic toxidromes.",
      D: "Benzodiazepines control nerve agent seizures, but are administered via separate auto-injectors (CANA/diazepam)."
    },
    clinicalPearl: "Mark I Kit = Atropine (dries secretions) + Pralidoxime/2-PAM (reactivates acetylcholinesterase). Inject through clothing into the anterolateral thigh.",
    tags: ["nerve-agents", "Sarin", "Mark-I-kit", "CBRN", "pralidoxime"]
  },
  {
    id: "EMG-103",
    course: "Emergency & Disaster Nursing",
    topic: "Pediatric Trauma & Resuscitation",
    subtopic: "Pediatric Shock Compensation Mechanics",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why can an injured infant or young child in hemorrhagic shock maintain a normal systolic blood pressure until suddenly deteriorating into catastrophic, uncompensated circulatory collapse?",
    options: [
      "Children have potent vascular compensatory mechanisms that increase systemic vascular resistance and heart rate, masking up to 25–30% blood volume loss",
      "Children have five times more circulating blood volume per kilogram than adults",
      "Pediatric red blood cells do not require oxygen for cellular metabolism",
      "Infants naturally lack baroreceptor reflexes"
    ],
    correctAnswer: 0,
    rationale: "Pediatric physiology features strong compensatory sympathetic mechanisms. Severe peripheral vasoconstriction and vigorous tachycardia maintain systolic blood pressure within normal limits until 25% to 30% of circulating blood volume is lost. Once these mechanisms exhaust, hypotension develops as a late, ominous sign rapidly followed by cardiac arrest.",
    optionRationales: {
      A: "Correct. Children compensate with intense vasoconstriction and tachycardia, maintaining BP until late decompensation.",
      B: "Children have a smaller total absolute volume (~70–80 mL/kg), making small volumetric losses clinically critical.",
      C: "All human cells depend on aerobic oxygenation; children consume oxygen at twice the adult rate.",
      D: "Pediatric baroreceptors are active and drive the marked tachycardia seen in early shock."
    },
    clinicalPearl: "In children: Hypotension is a LATE sign of shock. Never wait for blood pressure to drop; rely on tachycardia, weak peripheral pulses, and delayed capillary refill (>2 sec).",
    tags: ["pediatric-shock", "compensation", "hypovolemia", "PALS", "vital-signs"]
  },
  {
    id: "EMG-104",
    course: "Emergency & Disaster Nursing",
    topic: "Obstetric Emergencies & Maternal Trauma",
    subtopic: "Trauma Resuscitation in Late Pregnancy",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "A pregnant trauma patient at 36 weeks gestation is immobilized supine on a rigid spinal backboard. The nurse notes acute maternal hypotension (BP 78/44 mmHg) and fetal bradycardia. What is the immediate, life-saving corrective action?",
    options: [
      "Manually displace the gravid uterus to the left (or tilt the backboard 15–30 degrees to the left) to relieve aortocaval compression",
      "Infuse 100% pure alcohol through a peripheral vein",
      "Elevate the head of the bed 90 degrees immediately",
      "Administer an immediate intravenous dose of oxytocin"
    ],
    correctAnswer: 0,
    rationale: "In the supine position after 20 weeks gestation, the heavy gravid uterus compresses the Inferior Vena Cava (IVC) and abdominal aorta against the spine (Supine Hypotensive Syndrome), reducing venous return to the heart by up to 30% and causing maternal hypotension and uteroplacental hypoperfusion. Manually tilting the board or manually displacing the uterus to the left restores venous return.",
    optionRationales: {
      A: "Correct. Left uterine displacement relieves IVC compression, immediately restoring venous return and cardiac output.",
      B: "Ethanol is toxic and worsens CNS and hemodynamic instability.",
      C: "Sitting upright on a spinal backboard worsens spinal instability and drops cerebral perfusion.",
      D: "Oxytocin causes uterine contractions and will not relieve mechanical caval compression."
    },
    clinicalPearl: "In pregnant trauma patients (>20 weeks): Always perform LEFT UTERINE DISPLACEMENT. Relieving IVC compression can restore up to 30% of cardiac output.",
    tags: ["maternal-trauma", "aortocaval-compression", "left-uterine-displacement", "trauma", "ATLS"]
  },
  {
    id: "EMG-105",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Tricyclic Antidepressant (TCA) Overdose & Sodium Bicarbonate",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A client who ingested an overdose of Amitriptyline (a tricyclic antidepressant) presents comatose with a wide-complex QRS duration of 140 milliseconds and an elevated R wave in lead aVR on ECG. What is the antidote of choice to prevent fatal ventricular dysrhythmias?",
    options: [
      "Sodium Bicarbonate IV bolus (titrated to achieve a serum pH of 7.45–7.55)",
      "Flumazenil IV push",
      "Physostigmine IV infusion",
      "Potassium chloride IV push"
    ],
    correctAnswer: 0,
    rationale: "TCA toxicity blocks fast cardiac sodium channels (prolonging QRS duration >100 ms and predisposing to torsades de pointes or ventricular fibrillation) and inhibits alpha-1 adrenergic receptors (causing hypotension). Hypertonic Sodium Bicarbonate (1–2 mEq/kg IV bolus) floods the sodium channels with high extracellular sodium and induces alkalemia (pH 7.45–7.55), which unbinds the drug from the sodium channel receptor.",
    optionRationales: {
      A: "Correct. Sodium bicarbonate overcomes fast sodium channel blockade and narrows the QRS complex.",
      B: "Flumazenil is contraindicated in TCA toxicity because it triggers refractory seizures.",
      C: "Physostigmine is contraindicated in TCA overdose; it causes severe asystole and conduction arrest.",
      D: "Potassium chloride boluses cause cardiac arrest; TCA overdose requires sodium and alkalemia."
    },
    clinicalPearl: "TCA overdose sign: Wide QRS (>100 ms) + Terminal R wave in aVR. The antidote is SODIUM BICARBONATE to narrow the QRS.",
    tags: ["TCA-overdose", "sodium-bicarbonate", "amitriptyline", "QRS-widening", "toxicology"]
  },
  {
    id: "EMG-106",
    course: "Emergency & Disaster Nursing",
    topic: "Environmental & Climate Emergencies",
    subtopic: "Severe Frostbite Rewarming Protocol",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "A climber presents with severe, deep frostbite of both feet; the toes are pale, hard, cold, and numb. What is the standard protocol for active rewarming of the frozen tissue?",
    options: [
      "Rapid rewarming by immersion in a circulating warm water bath maintained at 37°C to 40°C (98.6°F to 104°F) for 15–30 minutes until tissue thaws",
      "Vigorously rubbing and massaging the toes with coarse snow",
      "Exposing the feet directly to an open open-flame campfire or radiant dry heat",
      "Walking on the frozen feet for 2 miles to stimulate blood circulation"
    ],
    correctAnswer: 0,
    rationale: "Definitive rewarming for frostbite requires rapid water immersion: the affected part is immersed in circulating water maintained at 37°C to 40°C (98.6°F to 104°F) until the distal tissue becomes pliable and erythematous (usually 15–30 minutes). Vigorously rubbing with snow or applying dry radiant heat (fires, heaters) causes mechanical tissue shearing, severe burns on anesthetic skin, and permanent necrosis.",
    optionRationales: {
      A: "Correct. Rapid immersion in warm water (37–40°C) is the evidence-based protocol for frostbite rewarming.",
      B: "Rubbing with snow produces mechanical trauma from ice crystals, shredding delicate tissues.",
      C: "Radiant dry heat causes thermal burns because frostbitten skin has lost protective sensation.",
      D: "Walking on frozen feet fractures tissue architecture and accelerates permanent amputation."
    },
    clinicalPearl: "Never rub frostbitten skin with snow. Rewarm in a warm water bath (37°C–40°C). Rewarming is intensely painful—administer IV analgesia first.",
    tags: ["frostbite", "hypothermia", "rewarming", "environmental-emergencies", "tissue-injury"]
  },
  {
    id: "EMG-107",
    course: "Emergency & Disaster Nursing",
    topic: "Penetrating Neck & Cervical Trauma",
    subtopic: "Anatomical Zones of the Neck",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A penetrating stab wound to the neck located between the cricoid cartilage and the angle of the mandible falls into which surgical trauma zone?",
    options: [
      "Zone II of the Neck",
      "Zone I of the Neck",
      "Zone III of the Neck",
      "Zone IV of the Neck"
    ],
    correctAnswer: 0,
    rationale: "Penetrating neck trauma is divided into three surgical zones: 1) Zone I: From the clavicles and sternal notch to the cricoid cartilage (carries high mortality due to great vessels, lung apices, and trachea); 2) Zone II: From the cricoid cartilage to the angle of the mandible (contains carotid and vertebral arteries, internal jugular veins, larynx, pharynx, and esophagus; surgically most accessible); 3) Zone III: From the angle of the mandible to the base of the skull.",
    optionRationales: {
      A: "Correct. Zone II spans from the cricoid cartilage to the angle of the mandible.",
      B: "Zone I extends from the sternal notch and clavicles up to the cricoid cartilage.",
      C: "Zone III extends from the angle of the mandible to the base of the skull.",
      D: "Zone IV is a distractor; anatomical neck trauma systems classify only three zones."
    },
    clinicalPearl: "Neck trauma zones: Zone I (Base of neck/chest inlet), Zone II (Mid-neck: Cricoid to Mandible—most commonly injured), Zone III (Mandible to skull base).",
    tags: ["neck-trauma", "Zone-II", "penetrating-trauma", "ATLS", "surgical-zones"]
  },
  {
    id: "EMG-108",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Incident Command",
    subtopic: "Span of Control in Emergency Management",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the Incident Command System (ICS) organizational principles used during disaster operations, what is the optimal recommended 'Span of Control' for any single supervisor?",
    options: [
      "5 subordinates (with an acceptable operating range of 3 to 7 individuals)",
      "15 to 20 subordinates",
      "Exactly 1 subordinate only",
      "An unlimited number of subordinates"
    ],
    correctAnswer: 0,
    rationale: "In the Incident Command System (ICS), Span of Control refers to the number of individuals or resources that one supervisor can manage effectively during an emergency. The optimal ratio is 1 supervisor to 5 subordinates (1:5), with an acceptable operating range between 3 and 7. Ratios exceeding 7 lead to communication breakdowns and supervisory failure.",
    optionRationales: {
      A: "Correct. The optimal span of control under ICS standards is 1:5 (range 3 to 7).",
      B: "15 to 20 subordinates overwhelms a supervisor during acute disaster communications.",
      C: "1:1 is an inefficient use of managerial resources.",
      D: "An unlimited span of control leads to command chaos and safety failures."
    },
    clinicalPearl: "ICS Span of Control: 1 supervisor to 5 subordinates (ideal). Range is 3 to 7.",
    tags: ["ICS", "span-of-control", "disaster-management", "HICS", "command-structure"]
  },
  {
    id: "EMG-109",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Post-Cardiac Arrest Syndrome & Hyperoxia Avoidance",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Following Return of Spontaneous Circulation (ROSC) in an adult patient, why do updated ACLS post-resuscitation guidelines recommend titrating inspired oxygen (FiO2) down to maintain an SpO2 of 92% to 98% rather than leaving the patient on 100% oxygen indefinitely?",
    options: [
      "Prolonged hyperoxia generates high levels of reactive oxygen free radicals, causing cerebral vasoconstriction and worsening reperfusion brain injury",
      "100% oxygen causes instant cardiac arrest in post-ROSC patients",
      "Oxygen gas corrodes endotracheal tubes within 10 minutes",
      "High oxygen levels convert hemoglobin into bile pigments"
    ],
    correctAnswer: 0,
    rationale: "Once ROSC is established, Hyperoxia (excessive arterial PaO2 > 300 mmHg) is toxic to ischemic neurons. Reperfusion of ischemic tissue with excessive oxygen generates massive amounts of reactive oxygen species (ROS / free radicals), causes cerebral arteriolar vasoconstriction, and accelerates neuronal apoptosis. Guidelines mandate titrating FiO2 to maintain SpO2 between 92% and 98% (or PaO2 80–100 mmHg).",
    optionRationales: {
      A: "Correct. Hyperoxia causes free radical damage and cerebral vasoconstriction; titrate to SpO2 92–98%.",
      B: "100% oxygen does not cause instant cardiac arrest, but induces secondary reperfusion brain injury.",
      C: "Medical oxygen does not corrode medical-grade polyvinyl chloride tubes.",
      D: "Oxygen does not metabolize hemoglobin into bile; that occurs via heme oxygenase in macrophages."
    },
    clinicalPearl: "Post-ROSC rule: Avoid both Hypoxia AND Hyperoxia. Once you have a pulse, titrate oxygen down to keep SpO2 between 92% and 98%.",
    tags: ["ROSC", "hyperoxia", "free-radicals", "post-cardiac-arrest", "ACLS"]
  },
  {
    id: "EMG-110",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Methanol (Toxic Alcohol) Poisoning & Visual Snow",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A patient presents with severe metabolic acidosis, an elevated anion gap, and complaints of blurred vision describing 'being caught in a snowstorm' (visual snow) following consumption of illicit, adulterated gin. What toxic metabolite is responsible for causing permanent optic nerve atrophy and blindness?",
    options: [
      "Formic Acid (Formate)",
      "Glycolic acid",
      "Acetone",
      "Lactic acid"
    ],
    correctAnswer: 0,
    rationale: "Methanol (wood alcohol) is metabolized by alcohol dehydrogenase into formaldehyde, and then rapidly by aldehyde dehydrogenase into Formic Acid (formate). Formic acid inhibits mitochondrial cytochrome oxidase, causing severe metabolic acidosis and tissue hypoxia with a specific affinity for the retina and basal ganglia (putamen), producing optic disc edema and permanent blindness ('snowstorm vision').",
    optionRationales: {
      A: "Correct. Formic acid is the toxic metabolite that selectively damages the optic nerve and causes blindness.",
      B: "Glycolic acid is the primary toxic metabolite of ethylene glycol (antifreeze), causing renal failure.",
      C: "Acetone is a metabolite of isopropanol (rubbing alcohol), which causes ketosis without severe acidosis.",
      D: "Lactic acid accumulates in anaerobic shock, but does not cause the specific optic atrophy of methanol."
    },
    clinicalPearl: "Methanol toxicity clue: 'Snowstorm' visual loss + High anion gap acidosis. Formic acid destroys the optic nerve. Antidote = Fomepizole or IV Ethanol.",
    tags: ["methanol", "formic-acid", "blindness", "toxic-alcohol", "fomepizole"]
  },
  {
    id: "EMG-111",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Airway Management",
    subtopic: "Failed Airway Algorithm: Supraglottic Devices",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During emergency resuscitation, a physician fails twice to intubate a patient's trachea using direct laryngoscopy, and bag-valve-mask ventilation is becoming increasingly difficult. What is the immediate, non-surgical rescue airway device that should be inserted next?",
    options: [
      "A Supraglottic Airway device (e.g., Laryngeal Mask Airway [LMA] or i-gel)",
      "A nasopharyngeal trumpet airway into both nostrils simultaneously",
      "A rigid esophagoscope",
      "A metal tracheostomy cannula into the mouth"
    ],
    correctAnswer: 0,
    rationale: "In the Difficult Airway Society / ACLS algorithm: When direct laryngoscopy fails and bag-mask ventilation is compromised, the first-line non-surgical rescue step is the insertion of a Supraglottic Airway (SGA) device, such as a second-generation Laryngeal Mask Airway (LMA) or i-gel. SGAs seat over the laryngeal inlet, enabling rapid oxygenation without requiring visualization of the vocal cords.",
    optionRationales: {
      A: "Correct. Supraglottic airways (LMA, i-gel) provide immediate non-surgical rescue oxygenation when intubation fails.",
      B: "Nasopharyngeal airways maintain nasal patency, but do not solve supraglottic or pharyngeal collapse during failed intubation.",
      C: "Esophagoscopy is an operative diagnostic procedure, not an emergency airway rescue tool.",
      D: "Tracheostomy tubes are designed for surgical stomas, not oral blind placement."
    },
    clinicalPearl: "When you can't intubate: Drop in a Supraglottic Airway (LMA or i-gel). It blind-seats over the larynx and restores oxygenation in seconds.",
    tags: ["LMA", "supraglottic-airway", "difficult-airway", "i-gel", "resuscitation"]
  },
  {
    id: "EMG-112",
    course: "Emergency & Disaster Nursing",
    topic: "Abdominal & Pelvic Trauma Emergencies",
    subtopic: "Traumatic Abdominal Wall Evisceration",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "A victim of penetrating abdominal trauma presents with loops of small bowel protruding through a 10 cm midline wound (evisceration). What is the mandatory immediate nursing action at the bedside?",
    options: [
      "Cover the exposed viscera with sterile gauze soaked in warm sterile saline, cover with an occlusive plastic wrap, and keep the patient supine with knees flexed",
      "Gently push the bowel loops back inside the abdominal cavity using clean gloved hands",
      "Apply dry, tight adhesive tape directly over the bowel to flatten the protrusion",
      "Instruct the patient to sit upright and drink warm fluids"
    ],
    correctAnswer: 0,
    rationale: "Emergency management of abdominal evisceration: 1) Never attempt to reinsert protruding organs (doing so introduces infection and causes bowel strangulation); 2) Cover the viscera immediately with sterile dressings soaked in warm normal saline to prevent tissue desiccation and ischemia; 3) Cover with sterile plastic wrap to retain heat and moisture; 4) Position the patient supine with hips and knees flexed to relax abdominal wall musculature.",
    optionRationales: {
      A: "Correct. Sterile saline-soaked dressings, occlusive covering, and flexing knees relieves abdominal tension and protects the bowel.",
      B: "Pushing bowel back inside causes perforation, bacterial peritonitis, and vascular twisting.",
      C: "Dry dressings stick to the serosa; removal tears bowel walls.",
      D: "Sitting upright raises intra-abdominal pressure, forcing more bowel loops out of the wound."
    },
    clinicalPearl: "Evisceration rule: NEVER push organs back in. Cover with warm, sterile saline-soaked gauze, wrap with plastic, and bend the knees.",
    tags: ["evisceration", "abdominal-trauma", "saline-dressing", "first-aid", "ATLS"]
  },
  {
    id: "EMG-113",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Permissive Hypotension in Trauma Resuscitation",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In the resuscitation of an adult patient with ongoing, uncontrolled internal hemorrhagic shock (e.g., ruptured liver or penetrating torso wound), why does modern trauma care advocate for 'Permissive Hypotension' (targeting a systolic BP of 80–90 mmHg or MAP ~50–60 mmHg) until surgical hemostasis is achieved?",
    options: [
      "Aggressive fluid administration raises blood pressure, dislodging newly formed hemostatic blood clots ('popping the clot') and diluting clotting factors",
      "Hypotension converts whole blood into lymphatic fluid",
      "High blood pressure cures internal vascular lacerations",
      "Low blood pressure eliminates the need for surgical repair"
    ],
    correctAnswer: 0,
    rationale: "Permissive Hypotension (or balanced resuscitation) deliberately maintains systolic BP around 80 to 90 mmHg (or MAP 50–60 mmHg, ensuring palpable radial pulse and mentation) until active bleeding is surgically controlled. Aggressive crystalloid fluid boluses to reach 'normal' BP (120/80) increases intravascular hydrostatic pressure, which dislodges delicate platelet plugs ('pops the clot'), dilutes remaining coagulation factors, and causes hypothermia.",
    optionRationales: {
      A: "Correct. Permissive hypotension preserves early hemostatic clots and avoids hemodilution until surgical control is achieved.",
      B: "Blood does not convert to lymph under hydrostatic changes.",
      C: "High blood pressure blows clots off torn vessels, accelerating exsanguination.",
      D: "Permissive hypotension is a temporary bridge to definitive surgical or angiographic repair."
    },
    clinicalPearl: "Don't 'pop the clot'! In active bleeding without head injury, keep systolic BP at 80–90 mmHg until the surgeon cross-clamps the bleeding vessel.",
    tags: ["permissive-hypotension", "damage-control", "hemorrhage", "popping-the-clot", "ATLS"]
  },
  {
    id: "EMG-114",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Incident Command",
    subtopic: "Safety Officer Role in HICS",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the Hospital Incident Command System (HICS), which command staff officer has the autonomous legal authority to immediately halt any unsafe operational activity that poses an imminent hazard to personnel or patients?",
    options: [
      "The Safety Officer",
      "The Public Information Officer (PIO)",
      "The Liaison Officer",
      "The Hospital Cashier"
    ],
    correctAnswer: 0,
    rationale: "Under HICS, the Safety Officer is a member of the Command Staff who monitors operational safety, assesses hazardous environments (CBRN contamination, structural collapse, fire hazards), and has the absolute autonomous authority to bypass standard command hierarchy and immediately halt, suspend, or alter any unsafe activity that threatens responder or patient life.",
    optionRationales: {
      A: "Correct. The Safety Officer holds sole autonomous authority to immediately stop unsafe operational activities.",
      B: "The PIO manages media relations and public releases.",
      C: "The Liaison Officer coordinates communication with external outside agencies.",
      D: "The cashier handles billing and lacks emergency operational command authority."
    },
    clinicalPearl: "The Safety Officer in HICS has the power to shout 'STOP!' and shut down any operation immediately if responders are in physical danger.",
    tags: ["HICS", "Safety-Officer", "command-staff", "incident-management", "disaster"]
  },
  {
    id: "EMG-115",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Acute Iron Toxicity and Deferoxamine Vin Rose Urine",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A 2-year-old child ingests a full bottle of adult ferrous sulfate iron tablets. She presents with severe vomiting, hematemesis, and shock. Chelation therapy with intravenous Deferoxamine is initiated. What characteristic change in urine appearance confirms that iron is being actively chelated and excreted?",
    options: [
      "The urine turns a characteristic reddish-orange or rose color ('Vin Rosé' urine)",
      "The urine turns cloudy white like milk",
      "The urine turns neon green",
      "The urine becomes completely clear like pure water"
    ],
    correctAnswer: 0,
    rationale: "Deferoxamine binds free ferric iron (Fe3+) in the bloodstream to form a stable, water-soluble complex called ferrioxamine. Ferrioxamine is excreted via the kidneys, imparting a distinctive reddish-orange or salmon-pink color to the urine, classically described in clinical toxicology as 'Vin Rosé' (rose wine) urine.",
    optionRationales: {
      A: "Correct. Ferrioxamine complex excretion turns the urine a classic 'Vin Rosé' (reddish-pink) color.",
      B: "Cloudy white urine suggests severe pyuria or chyluria, not iron chelation.",
      C: "Neon green urine can result from propofol infusions, not deferoxamine.",
      D: "Clear urine indicates absence of colored ferrioxamine excretion."
    },
    clinicalPearl: "Iron antidote = Deferoxamine. A positive sign that it is working is 'Vin Rosé' urine (the urine turns reddish-pink as bound iron is excreted).",
    tags: ["iron-toxicity", "deferoxamine", "vin-rose-urine", "toxicology", "chelation"]
  },
  {
    id: "EMG-116",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Cardiac Arrest in Hypothermia ('Not Dead Until Warm and Dead')",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A severely hypothermic casualty (core body temperature 24°C) pulled from an icy river is in asystolic cardiac arrest. Resuscitation guidelines dictate that prolonged CPR and rewarming must continue before considering death pronouncement, based on which clinical maxim?",
    options: [
      "'A hypothermic patient is not dead until they are warm and dead' (core temperature >= 32°C to 35°C with failed resuscitation)",
      "Hypothermia causes irreversible brain death within 1 minute",
      "Defibrillate 50 times consecutively at sub-zero temperatures",
      "Pronounce death immediately if the pupils are fixed and dilated at 24°C"
    ],
    correctAnswer: 0,
    rationale: "Severe hypothermia depresses cerebral oxygen consumption by ~6% for every 1°C drop in temperature, providing remarkable neuroprotection against prolonged anoxia. Hypothermic patients can appear clinically dead (asystolic, unrecordable pulses, fixed dilated pupils, cold stiff body) and still recover neurologically intact once rewarmed. The clinical rule is: 'No one is dead until warm and dead' (core temp rewarmed to at least 32°C–35°C before declaring death).",
    optionRationales: {
      A: "Correct. Patients must be rewarmed to at least 32–35°C before termination of resuscitation can be legally/clinically declared.",
      B: "Deep hypothermia protects the brain from anoxia, the opposite of rapid brain death.",
      C: "The cold myocardium is refractory to defibrillation and antiarrhythmics until rewarmed above 30°C.",
      D: "Fixed dilated pupils are common in severe hypothermia and do NOT indicate brain death until rewarmed."
    },
    clinicalPearl: "The golden rule of hypothermia arrest: 'The patient is NOT dead until they are WARM and dead.' Rewarm to 32°C–35°C before terminating CPR.",
    tags: ["hypothermia-arrest", "warm-and-dead", "neuroprotection", "resuscitation", "ACLS"]
  },
  {
    id: "EMG-117",
    course: "Emergency & Disaster Nursing",
    topic: "Thoracic Trauma Emergencies",
    subtopic: "Tracheostomy Tube Accidental Decannulation",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "On postoperative day 2 following a surgical tracheostomy, a disoriented patient coughs violently and accidentally pulls the tracheostomy tube completely out of the stoma. The patient develops acute respiratory distress. What is the nurse's immediate action?",
    options: [
      "Call for emergency help, hyperextend the neck, use a tracheal dilator or hemostat to spread the stoma open, and gently insert a replacement tube with obturator (or ventilate with a mask over the mouth/nose while occluding the stoma)",
      "Push the dirty tube back blindly into the neck using extreme force",
      "Tape the stoma tightly shut with adhesive plaster and leave the room",
      "Pour sterile water into the open tracheal hole"
    ],
    correctAnswer: 0,
    rationale: "A fresh tracheostomy stoma (<5 to 7 days old) has not formed a mature epithelial tract. If the tube dislodges, the tissue layers can collapse. Immediate action: 1) Call for help; 2) Maintain oxygenation; 3) Use tracheal dilators or hemostat to hold the stoma open and carefully reinsert an identical or smaller cuffed tracheostomy tube with obturator; 4) If reinsertion fails, bag-mask ventilate through the mouth and nose while an assistant covers the open stoma with a gloved hand.",
    optionRationales: {
      A: "Correct. Dilate the stoma to reinsert with an obturator, or provide bag-mask ventilation while occluding the stoma.",
      B: "Blind forceful reinsertion creates a false passage into the pretracheal space, causing total asphyxiation.",
      C: "Taping the stoma closed suffocates a patient with an obstructed upper airway.",
      D: "Pouring water into the trachea causes immediate drowning and aspiration pneumonia."
    },
    clinicalPearl: "Fresh tracheostomy dislodged: Keep the stoma open with a tracheal dilator and reinsert with the obturator. If you can't get it in, bag-mask ventilate from the face while covering the neck hole.",
    tags: ["tracheostomy", "accidental-decannulation", "airway-emergency", "false-passage", "resuscitation"]
  },
  {
    id: "EMG-118",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Blast Injuries",
    subtopic: "Blast Lung Injury Clinical Monitoring",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "What is the leading cause of delayed morbidity and mortality among survivors of high-explosive enclosed blast detonations who survive the initial blast event?",
    options: [
      "Blast Lung Injury (pulmonary contusion, diffuse alveolar hemorrhage, and air embolism developing over 24–48 hours)",
      "Simple skin abrasions",
      "Temporary tinnitus",
      "Minor muscle sprains of the ankle"
    ],
    correctAnswer: 0,
    rationale: "Blast Lung is the most common fatal primary blast injury in initial survivors. The high-velocity shockwave tears alveolar-capillary membranes, producing pulmonary contusions, alveolar hemorrhage, and alveolar-venous fistulae (which can cause fatal systemic air emboli to the coronary or cerebral arteries). Symptoms (hemoptysis, dyspnea, hypoxia, 'bat-wing' infiltrates on X-ray) often evolve and worsen 24 to 48 hours post-blast.",
    optionRationales: {
      A: "Correct. Blast lung injury and systemic air embolism are the primary causes of delayed mortality in blast survivors.",
      B: "Superficial abrasions carry low mortality.",
      C: "Tinnitus reflects tympanic acoustic trauma, but is non-fatal.",
      D: "Peripheral sprains do not cause life-threatening pulmonary collapse."
    },
    clinicalPearl: "Blast survivors can look completely fine at first, but deteriorate 24 hours later from Blast Lung (pulmonary hemorrhage). Admit and monitor all enclosed blast survivors.",
    tags: ["blast-lung", "primary-blast", "pulmonary-contusion", "disaster", "air-embolism"]
  },
  {
    id: "EMG-119",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Penetrating Abdominal Trauma & Impaled Objects",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "A construction worker arrives in the emergency department with a large metal reinforcing bar (rebar) impaled through the right upper quadrant of the abdomen. What is the fundamental nursing rule regarding the impaled object?",
    options: [
      "Do NOT remove the impaled object; stabilize it manually with bulky sterile dressings in place, and transport immediately to the surgical theater",
      "Pull the metal bar out immediately in the triage area to examine the wound",
      "Push the bar in deeper to see if it touches bone",
      "Twist the bar 180 degrees to stop internal bleeding"
    ],
    correctAnswer: 0,
    rationale: "Golden rule for impaled objects: Never remove an impaled object in the field or emergency bay. The impaled object is currently tamponading (compressing) the lacerated blood vessels it penetrated. Removing it releases the tamponade, causing catastrophic internal hemorrhage and death. The object must be stabilized in place using bulky dressings and removed only under direct vision in an operating theater.",
    optionRationales: {
      A: "Correct. Stabilize the object with bulky dressings and leave it in place until removed in the operating room.",
      B: "Pulling the object out releases vascular tamponade, causing rapid exsanguination.",
      C: "Advancing the object deeper causes further organ lacerations.",
      D: "Twisting the object shreds internal organs and major vessels."
    },
    clinicalPearl: "NEVER remove an impaled object. Stabilize it with bulky dressings and let the surgeon remove it under direct vision in the operating room.",
    tags: ["impaled-object", "abdominal-trauma", "stabilization", "ATLS", "first-aid"]
  },
  {
    id: "EMG-120",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiovascular Emergencies",
    subtopic: "Wolff-Parkinson-White (WPW) with Atrial Fibrillation",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "An adult with known Wolff-Parkinson-White (WPW) syndrome presents with an irregularly irregular, wide-complex tachycardia at a rate of 220 bpm (pre-excited Atrial Fibrillation). Why are standard AV-nodal blocking drugs (Adenosine, Digoxin, Diltiazem, Verapamil) strictly CONTRAINDICATED?",
    options: [
      "Blocking the AV node diverts all rapid electrical impulses down the bypass accessory pathway (Bundle of Kent), precipitating Ventricular Fibrillation and cardiac arrest",
      "These drugs convert electrical current into chemical gas",
      "These drugs cause immediate cerebral calcification",
      "WPW patients naturally lack potassium channels"
    ],
    correctAnswer: 0,
    rationale: "In WPW with Atrial Fibrillation, electrical impulses travel down both the normal AV node and an accessory pathway (Bundle of Kent). If AV-nodal blockers (Adenosine, Calcium Channel Blockers, Digoxin, Beta-blockers) are given, conduction through the AV node is blocked. This forces all atrial fibrillatory impulses (up to 300/min) down the refractory-free accessory pathway directly into the ventricles, triggering Ventricular Fibrillation and fatal cardiac arrest. Treatment requires electrical cardioversion or IV Procainamide.",
    optionRationales: {
      A: "Correct. Blocking the AV node channels all impulses down the accessory pathway, triggering Ventricular Fibrillation.",
      B: "Pharmacological drugs do not generate chemical gas.",
      C: "These agents do not calcify brain tissue.",
      D: "WPW involves an anatomical muscular bypass tract, not an absence of potassium channels."
    },
    clinicalPearl: "In WPW with Atrial Fibrillation (irregular, wide-complex tachycardia): NEVER give Adenosine, Beta-blockers, or Calcium Channel Blockers. It can trigger Ventricular Fibrillation.",
    tags: ["WPW", "atrial-fibrillation", "accessory-pathway", "contraindications", "ACLS"]
  },
  {
    id: "EMG-121",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Hydrocarbon (Kerosene) Ingestion Management",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "In rural Nigeria, a 3-year-old child accidentally swallows 50 mL of kerosene stored in an unlabelled soft-drink bottle. The child is coughing and smells of fuel, but is alert. Why are gastric lavage, syrup of ipecac, and activated charcoal strictly CONTRAINDICATED?",
    options: [
      "Hydrocarbons have high volatility and low viscosity; inducing vomiting or inserting a lavage tube risks chemical aspiration into the lungs, producing fatal chemical pneumonitis",
      "Kerosene turns into solid plastic when it touches stomach acid",
      "Activated charcoal dissolves the esophageal mucosa",
      "Gastric lavage neutralizes systemic antibiotics"
    ],
    correctAnswer: 0,
    rationale: "Kerosene and petroleum hydrocarbons cause little harm in the stomach, but have low surface tension and low viscosity. If the child vomits or if a nasogastric tube triggers retching, the liquid easily aspirates into the larynx and lungs, causing severe Chemical Pneumonitis, pulmonary edema, surfactant destruction, and necrosis. Activated charcoal does not bind hydrocarbons. Management is supportive: keep the child calm, monitor SpO2, and observe for respiratory distress.",
    optionRationales: {
      A: "Correct. Inducing vomiting or lavaging causes aspiration of kerosene into the lungs, leading to chemical pneumonitis.",
      B: "Hydrocarbons remain liquid in gastric acid; they do not polymerize into plastic.",
      C: "Activated charcoal does not dissolve mucosa, but fails to adsorb hydrocarbons and adds aspiration risks.",
      D: "Hydrocarbons are non-polar petroleum distillates; lavage does not impact antibiotics."
    },
    clinicalPearl: "Kerosene ingestion rule: NEVER make them vomit, NEVER pump the stomach (lavage), and DO NOT give charcoal. The danger is chemical pneumonia from aspiration.",
    tags: ["kerosene", "hydrocarbon-ingestion", "chemical-pneumonitis", "contraindications", "toxicology"]
  },
  {
    id: "EMG-122",
    course: "Emergency & Disaster Nursing",
    topic: "Orthopedic & Extremity Trauma Emergencies",
    subtopic: "Open Fracture Management and Infection Prevention",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A motorcycle accident victim presents with a Gustilo-Anderson Grade III open compound fracture of the femur, with bone ends protruding through dirty, torn skin. What is the emergency nursing wound management protocol in the trauma bay?",
    options: [
      "Irrigate gross surface contamination with sterile saline, cover with a sterile moist dressing, administer IV prophylactic antibiotics and tetanus toxoid, and splint the limb without pushing bone ends back in",
      "Push the dirty protruding bone ends back beneath the skin using an unsterile wooden stick",
      "Scrub the bone with a wire brush soaked in pure methylated spirit",
      "Pour dry cement powder over the open bone to seal the wound"
    ],
    correctAnswer: 0,
    rationale: "Emergency open fracture management: 1) Remove gross surface debris; 2) Irrigate with sterile saline; 3) Cover with a sterile, saline-moistened dressing; 4) Do NOT push exposed, contaminated bone back into the deep wound bed (which inoculates surface bacteria into deep tissues); 5) Splint the limb in alignment; 6) Administer IV broad-spectrum antibiotics (e.g., Ceftriaxone) and Tetanus prophylaxis early.",
    optionRationales: {
      A: "Correct. Irrigate, dress with sterile moist gauze, give IV antibiotics and tetanus, and splint without reducing bone into the wound.",
      B: "Pushing dirty bone fragments back in causes severe osteomyelitis.",
      C: "Scrubbing with alcohol damages viable osteogenic cells and periosteum.",
      D: "Foreign powders cause severe tissue necrosis."
    },
    clinicalPearl: "Open fractures: Cover with sterile saline-soaked gauze, give IV antibiotics and Tetanus within 1 hour, splint the limb, and call the orthopedic surgeon.",
    tags: ["open-fracture", "compound-fracture", "tetanus", "osteomyelitis", "ATLS"]
  },
  {
    id: "EMG-123",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Chemical Weapons",
    subtopic: "Vesicant / Blister Agent Decontamination (Mustard Gas)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "During a chemical incident involving Sulfur Mustard (a vesicant/blister agent), casualties present hours later with erythema, large fluid-filled skin blisters, and conjunctivitis. Why does sulfur mustard have a delayed clinical onset, and what is the decontamination rule?",
    options: [
      "Mustard is an alkylating agent that causes cellular DNA damage with an asymptomatic latency period of 2 to 24 hours; decontamination must occur within minutes of exposure before the liquid absorbs into the skin",
      "Mustard gas only works when mixed with milk",
      "It dissolves skin instantly within 1 millisecond",
      "Mustard gas is an oral digestive enzyme"
    ],
    correctAnswer: 0,
    rationale: "Sulfur mustard is an oily, persistent blister agent. It penetrates cells rapidly (within 2 to 5 minutes of contact), alkylating DNA. However, clinical signs (pain, burning, erythema, and large, debilitating fluid-filled bullae) are delayed, appearing after an asymptomatic latent period of 2 to 24 hours. Physical decontamination (blotting with absorbent powders and showering with water) is effective only if performed within minutes of exposure.",
    optionRationales: {
      A: "Correct. Mustard gas has a 2–24 hour latency period; decontamination must occur within minutes to prevent cellular absorption.",
      B: "Mustard is an oily chemical warfare agent, unrelated to food items.",
      C: "Unlike Lewisite, which causes immediate pain, mustard is painless at first, producing delayed blisters.",
      D: "Mustard agents are alkylating chemical weapons, not biological digestive enzymes."
    },
    clinicalPearl: "Mustard gas is insidious: it causes NO immediate pain on skin contact. Blisters and blindness appear hours later. Decontamination must happen within minutes.",
    tags: ["mustard-gas", "vesicant", "blister-agent", "CBRN", "decontamination"]
  },
  {
    id: "EMG-124",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Intraosseous (IO) Access Standards",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During cardiac arrest resuscitation of an adult when peripheral intravenous (IV) access cannot be established within two attempts or 90 seconds, what anatomical site is the most accessible first-line landmark for manual or powered Intraosseous (IO) needle insertion?",
    options: [
      "Proximal Tibia (approximately 2 cm medial to the tibial tuberosity on the flat anteromedial surface)",
      "Mid-shaft of the femur",
      "Over the center of the patella",
      "The spinous process of the C7 vertebra"
    ],
    correctAnswer: 0,
    rationale: "When IV access fails during resuscitation, Intraosseous (IO) access provides an uncollapsible venous plexus capable of infusing any drug, fluid, or blood product at rates comparable to central lines. The preferred adult landmarks are: 1) Proximal Tibia: 2 cm medial and 1–2 cm proximal/distal to the tibial tuberosity on the flat bony surface; and 2) Proximal Humerus (greater tubercle).",
    optionRationales: {
      A: "Correct. Proximal tibia (flat anteromedial surface medial to the tuberosity) is the classic landmark.",
      B: "Femoral shaft has dense cortical bone and deep overlying muscle, making penetration difficult.",
      C: "The patella is a mobile sesamoid bone with no medullary cavity.",
      D: "Vertebral spinous processes lack accessible venous sinusoids and carry spinal cord trauma risks."
    },
    clinicalPearl: "Can't get an IV in a cardiac arrest? Go IO (Intraosseous)! Landmark: Flat bone surface 2 cm medial to the tibial tuberosity.",
    tags: ["intraosseous", "IO-access", "vascular-access", "ACLS", "tibia-landmark"]
  },
  {
    id: "EMG-125",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "Pediatric Lund and Browder Burn Chart",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Why is the adult 'Rule of Nines' inaccurate for estimating burn surface area in infants and young children, requiring the use of the Lund and Browder chart?",
    options: [
      "An infant's head represents a significantly larger proportion of Total Body Surface Area (roughly 18% in a newborn), while the lower extremities represent a smaller proportion",
      "Infants do not have dermal layers in their skin",
      "Pediatric burns never exceed 5% total body surface area",
      "Children only burn on their posterior surfaces"
    ],
    correctAnswer: 0,
    rationale: "Body surface proportions change dynamically with growth. In a newborn, the head accounts for ~18% of TBSA and each leg only ~14%. As the child grows, the head proportion decreases while lower extremities increase until reaching adult proportions (head 9%, each leg 18%). The Lund and Browder chart adjusts burn percentages by age, preventing fluid miscalculations.",
    optionRationales: {
      A: "Correct. Infants have relatively larger heads (up to 18%) and smaller legs, making adult formulas inaccurate.",
      B: "Infants possess the same anatomical skin layers (epidermis and dermis), though thinner.",
      C: "Burns in children frequently involve large surface areas from scalds.",
      D: "Burns occur anywhere on the body depending on the exposure mechanism."
    },
    clinicalPearl: "In infants: The HEAD is much bigger (18% of body surface), and the LEGS are smaller. Use the Lund and Browder chart for pediatric burns.",
    tags: ["Lund-Browder", "pediatric-burns", "Rule-of-Nines", "TBSA", "fluid-estimation"]
  },
  {
    id: "EMG-126",
    course: "Emergency & Disaster Nursing",
    topic: "Neurological & Head Trauma Emergencies",
    subtopic: "Traumatic Brain Injury Target Ventilation Parameters",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "When managing a mechanically ventilated client with severe Traumatic Brain Injury (TBI) and elevated intracranial pressure, why is routine, aggressive prophylactic hyperventilation (driving PaCO2 < 30 mmHg) strictly avoided?",
    options: [
      "Severe hypocapnia causes profound cerebral vasoconstriction, causing secondary cerebral ischemia and stroke in vulnerable brain tissue",
      "Hyperventilation turns cerebrospinal fluid into solid crystals",
      "Hypocapnia causes immediate cardiac rupture",
      "High ventilation rates blow the endotracheal tube out of the trachea"
    ],
    correctAnswer: 0,
    rationale: "Cerebral blood flow is sensitive to arterial carbon dioxide (PaCO2). While hypocapnia constricts cerebral arterioles and lowers ICP, severe hyperventilation (PaCO2 < 30–35 mmHg) produces profound vasoconstriction, severely reducing cerebral perfusion and triggering secondary ischemic brain injury. Guidelines recommend Normocapnia (PaCO2 35–40 mmHg). Hyperventilation (<35 mmHg) is used only as a brief, temporary bridge for active herniation.",
    optionRationales: {
      A: "Correct. Low PaCO2 causes cerebral vasoconstriction, starving the brain of blood flow and causing ischemic stroke.",
      B: "CSF does not crystallize under hypocapnic conditions.",
      C: "Hypocapnia does not cause structural cardiac wall rupture.",
      D: "Endotracheal tube security is maintained by pilot balloons and tape, not respiratory rates."
    },
    clinicalPearl: "In head trauma: Keep the PaCO2 normal (35–40 mmHg). Do NOT aggressively hyperventilate—it constricts cerebral blood vessels and starves the brain of oxygen.",
    tags: ["TBI", "hyperventilation", "PaCO2", "cerebral-ischemia", "ICP"]
  },
  {
    id: "EMG-127",
    course: "Emergency & Disaster Nursing",
    topic: "Thoracic Trauma Emergencies",
    subtopic: "Tracheobronchial Foreign Body: Back Blows and Chest Thrusts in Infants",
    difficulty: "Moderate",
    type: "Clinical Judgment",
    question: "An alert, conscious 8-month-old infant suddenly chokes on a small marble, becomes aphonic, and struggles to breathe. What is the correct first-aid sequence under BLS guidelines?",
    options: [
      "Deliver 5 Back Blows with the heel of the hand (infant prone, head lower than trunk), followed by 5 Chest Thrusts (infant supine, head down); repeat until cleared",
      "Deliver rapid abdominal thrusts (Heimlich maneuver) over the infant's liver",
      "Perform a blind finger sweep into the back of the pharynx",
      "Hang the infant upside down by the feet and shake vigorously"
    ],
    correctAnswer: 0,
    rationale: "In conscious choking infants (<1 year old): 1) Support the infant prone along the forearm, resting on the thigh with the head lower than the chest; 2) Deliver up to 5 firm Back Blows between the shoulder blades with the heel of the hand; 3) Turn the infant supine (head down) and deliver up to 5 Chest Thrusts (compressing the sternum with two fingers). Abdominal thrusts are contraindicated in infants because they can rupture the liver and spleen.",
    optionRationales: {
      A: "Correct. 5 Back Blows alternating with 5 Chest Thrusts (head lower than trunk) is standard for infants under 1 year.",
      B: "Abdominal thrusts (Heimlich) are contraindicated in infants due to the risk of lacerating the liver or spleen.",
      C: "Blind finger sweeps can push the foreign body deeper into the subglottic airway.",
      D: "Shaking an infant causes severe shaken baby syndrome and brain hemorrhage."
    },
    clinicalPearl: "Choking infant under 1 year: 5 BACK BLOWS followed by 5 CHEST THRUSTS (head down). NEVER do abdominal thrusts on a baby.",
    tags: ["infant-choking", "back-blows", "chest-thrusts", "PALS", "foreign-body"]
  },
  {
    id: "EMG-128",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "START Triage Scenario: Extremity Fractures",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During a building collapse disaster, a casualty is found trapped with a closed, deformed femur fracture. The casualty is non-ambulatory, has a respiratory rate of 22 breaths/min, a strong palpable radial pulse (capillary refill 1.5 seconds), and obeys commands appropriately. Under the START triage algorithm, what tag should be applied?",
    options: [
      "YELLOW Tag (Delayed)",
      "RED Tag (Immediate)",
      "GREEN Tag (Minor)",
      "BLACK Tag (Deceased)"
    ],
    correctAnswer: 0,
    rationale: "Applying START triage parameters (RPM): 1) Can the patient walk? No (femur fracture); 2) Respirations: 22/min (normal, <30 bpm); 3) Perfusion: Palpable radial pulse present (capillary refill <2 seconds); 4) Mental Status: Obeys commands. Because the casualty passes all three RPM checks (Respirations <30, Pulse present, Mental status intact), the casualty is categorized as YELLOW Tag (Delayed Priority: serious injury, but not an immediate life threat).",
    optionRationales: {
      A: "Correct. Passes all RPM criteria, making the casualty a Yellow (Delayed) priority.",
      B: "Red is assigned only if Respirations >30, Radial pulse is absent, or the patient cannot follow commands.",
      C: "Green is restricted to ambulatory walking wounded.",
      D: "Black is for dead or unsalvageable casualties."
    },
    clinicalPearl: "START triage formula: Non-walking + Normal breathing (<30) + Pulse present + Obeys commands = YELLOW Tag.",
    tags: ["START-triage", "yellow-tag", "RPM", "femur-fracture", "mass-casualty"]
  },
  {
    id: "EMG-129",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiovascular Emergencies",
    subtopic: "Pericardiocentesis Procedure Complications",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "During emergency subxiphoid needle pericardiocentesis for cardiac tamponade, an ECG lead is attached with an alligator clamp to the aspirating metal needle. What ECG change warns the operator that the needle tip has advanced too far and is touching the ventricular myocardium?",
    options: [
      "Marked ST-segment elevations on the needle-monitoring lead ('injury current')",
      "Instant flattening of the baseline into asystole",
      "Appearance of delta waves",
      "Complete disappearance of P-waves"
    ],
    correctAnswer: 0,
    rationale: "When performing needle pericardiocentesis, connecting lead V of an ECG machine to the metal aspirating needle provides real-time guidance. As long as the needle is in the pericardial fluid, the ECG is stable. If the needle tip penetrates the visceral pericardium and touches the epicardium of the ventricle, a marked, dramatic ST-segment elevation ('Current of Injury') appears, warning the operator to withdraw the needle slightly.",
    optionRationales: {
      A: "Correct. ST-segment elevation on the needle ECG lead indicates contact with the ventricular epicardium.",
      B: "Touching the epicardium produces an injury current, not immediate electrical asystole.",
      C: "Delta waves represent ventricular pre-excitation (WPW), not acute needle puncture.",
      D: "P-wave morphology reflects atrial depolarization, whereas the subxiphoid needle contacts ventricular muscle."
    },
    clinicalPearl: "During pericardiocentesis: An ECG clamp on the needle shows marked ST elevation if the needle touches the heart muscle. If you see this, pull back slightly.",
    tags: ["pericardiocentesis", "cardiac-tamponade", "injury-current", "ST-elevation", "procedure-safety"]
  },
  {
    id: "EMG-130",
    course: "Emergency & Disaster Nursing",
    topic: "Orthopedic & Extremity Trauma Emergencies",
    subtopic: "Traction Splints in Mid-Shaft Femur Fractures",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A client sustains an isolated closed mid-shaft femur fracture with severe muscle spasms and shortening of the thigh. What is the clinical purpose of applying a Hare or Sager Traction Splint in the field?",
    options: [
      "Realigning bone ends, reducing painful quadriceps spasms, restoring cylindrical thigh volume, and tamponading internal hemorrhage from the femoral vessels",
      "Permanently fusing the fracture without surgical plating",
      "Allowing the patient to walk immediately on the injured leg",
      "Stretching the sciatic nerve to induce anesthesia"
    ],
    correctAnswer: 0,
    rationale: "When a femur fractures, the strong quadriceps and hamstring muscles go into spasm, causing bone fragments to override and telescope, tearing muscular vessels and creating a rounded thigh compartment that can hold up to 1.5 to 2 liters of blood. Applying a Traction Splint pulls mechanical inline traction, realigning fragments, relieving muscle spasms, and restoring cylindrical geometry to tamponade internal thigh bleeding.",
    optionRationales: {
      A: "Correct. Traction splinting realigns bone, stops muscle spasms, and tamponades internal hemorrhage.",
      B: "Traction splints provide temporary pre-hospital stabilization, not permanent surgical fixation.",
      C: "Patients with fractured femurs remain strictly non-ambulatory.",
      D: "Nerve traction causes neuropraxia; the goal is bone realignment, not nerve stretching."
    },
    clinicalPearl: "A fractured femur can bleed 1.5 liters into the thigh. Applying a Traction Splint straightens the leg, stops muscle spasms, and tamponades the bleeding.",
    tags: ["traction-splint", "femur-fracture", "orthopedic-trauma", "hemorrhage-control"]
  },
  {
    id: "EMG-131",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Septic Shock: Vasopressor of Choice",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Under the international Surviving Sepsis Campaign guidelines, which vasopressor is the first-line agent of choice to restore Mean Arterial Pressure (MAP >= 65 mmHg) in septic shock refractory to fluid resuscitation?",
    options: [
      "Norepinephrine (Noradrenaline)",
      "Dopamine",
      "Epinephrine bolus",
      "Phenylephrine"
    ],
    correctAnswer: 0,
    rationale: "Norepinephrine is the first-line vasopressor for septic shock. It is a potent alpha-1 agonist with modest beta-1 inotropic activity. It increases systemic vascular resistance (vasoconstriction) and mean arterial pressure with a lower incidence of tachyarrhythmias and lower mortality compared to dopamine.",
    optionRationales: {
      A: "Correct. Norepinephrine is the first-line vasopressor for septic shock.",
      B: "Dopamine is associated with significantly higher rates of tachyarrhythmias and increased mortality in shock.",
      C: "Epinephrine is a secondary add-on agent when norepinephrine alone fails to achieve target MAP.",
      D: "Phenylephrine is a pure alpha-agonist that can reflexively reduce heart rate and stroke volume."
    },
    clinicalPearl: "First-line vasopressor in Septic Shock = NOREPINEPHRINE. Target Mean Arterial Pressure (MAP) is >= 65 mmHg.",
    tags: ["norepinephrine", "septic-shock", "vasopressor", "surviving-sepsis", "critical-care"]
  },
  {
    id: "EMG-132",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Blast Injuries",
    subtopic: "Quaternary Blast Injuries",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which clinical condition sustained during a bomb detonation in an industrial facility represents a 'Quaternary Blast Injury'?",
    options: [
      "Severe flash burns and toxic cyanide smoke inhalation",
      "Tympanic membrane rupture from the supersonic shockwave",
      "Penetrating shrapnel wounds to the liver from flying steel nails",
      "Skull fracture sustained when the body was thrown against a concrete wall"
    ],
    correctAnswer: 0,
    rationale: "Blast injury classification: Primary = Direct overpressure wave (ruptured eardrums, blast lung); Secondary = Flying shrapnel and projectiles; Tertiary = Body thrown against hard surfaces; Quaternary = All other blast-related injuries, including thermal burns, toxic smoke/gas inhalation, crush asphyxia under rubble, and exacerbations of chronic asthma or angina.",
    optionRationales: {
      A: "Correct. Burns and toxic smoke inhalation are categorized as Quaternary Blast Injuries.",
      B: "Tympanic membrane rupture is a Primary blast injury.",
      C: "Shrapnel penetration is a Secondary blast injury.",
      D: "Body displacement against a wall is a Tertiary blast injury."
    },
    clinicalPearl: "Blast categories: Primary = Pressure wave. Secondary = Flying shrapnel. Tertiary = Body thrown. Quaternary = Burns, smoke, and crush injuries.",
    tags: ["quaternary-blast", "blast-mechanics", "disaster-nursing", "burns", "inhalation"]
  },
  {
    id: "EMG-133",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Pelvic Fracture: Genitourinary Urethral Trauma",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A male patient with an unstable pelvic fracture has blood at the external urethral meatus, a high-riding prostate on rectal exam, and perineal butterfly ecchymosis. What standard emergency nursing intervention is strictly CONTRAINDICATED?",
    options: [
      "Blind insertion of an indwelling urethral (Foley) catheter",
      "Application of a pelvic circumferential binder",
      "Intravenous fluid resuscitation",
      "Cross-matching 4 units of packed red blood cells"
    ],
    correctAnswer: 0,
    rationale: "Blood at the urethral meatus, scrotal/perineal hematoma, and a high-riding prostate indicate a partial or complete rupture of the membranous urethra associated with pelvic fracture. Blindly inserting a Foley catheter is strictly contraindicated because it can convert a partial urethral tear into a complete transection. The bladder must be evaluated via retrograde urethrography or drained via a suprapubic catheter.",
    optionRationales: {
      A: "Correct. Blind Foley catheterization is contraindicated; it can convert a partial tear into a complete urethral transection.",
      B: "Pelvic binders stabilize the pelvic ring and tamponade bleeding.",
      C: "Fluid resuscitation is required to manage pelvic fracture shock.",
      D: "Blood cross-matching is standard in pelvic trauma."
    },
    clinicalPearl: "Triad of urethral rupture: Blood at the meatus + Scrotal bruising + High-riding prostate. NEVER pass a Foley catheter blindly; obtain a retrograde urethrogram first.",
    tags: ["urethral-trauma", "pelvic-fracture", "catheter-contraindication", "ATLS", "urology"]
  },
  {
    id: "EMG-134",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "ACLS Pediatric Cardiac Arrest Defibrillation Energy",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When delivering manual defibrillation shocks to an infant or child in cardiac arrest with Ventricular Fibrillation, what is the recommended energy dosing sequence under PALS guidelines?",
    options: [
      "Initial shock of 2 Joules/kg, second shock of 4 Joules/kg, and subsequent shocks at >= 4 Joules/kg (up to maximum 10 J/kg)",
      "200 Joules for all children regardless of body weight",
      "50 Joules/kg for the first shock",
      "Defibrillation is strictly contraindicated in pediatric patients"
    ],
    correctAnswer: 0,
    rationale: "Pediatric Advanced Life Support (PALS) defibrillation algorithm: Initial shock = 2 Joules/kg; Second shock = 4 Joules/kg; Subsequent shocks = at least 4 Joules/kg (titrated up to a maximum of 10 Joules/kg or standard adult dose, whichever is lower). Manual defibrillators with pediatric paddles are preferred to dose energy accurately.",
    optionRationales: {
      A: "Correct. PALS standard: 2 J/kg initially, then 4 J/kg, with subsequent shocks >= 4 J/kg up to 10 J/kg.",
      B: "200 Joules on an infant causes myocardial thermal necrosis.",
      C: "50 J/kg is a massive overdose.",
      D: "Defibrillation is indicated for shockable pediatric rhythms (VF and pulseless VT)."
    },
    clinicalPearl: "Pediatric defibrillation energy: First shock = 2 Joules/kg. Second shock = 4 Joules/kg. Subsequent shocks = 4–10 Joules/kg.",
    tags: ["PALS", "pediatric-defibrillation", "Joules-per-kg", "VF", "cardiac-arrest"]
  },
  {
    id: "EMG-135",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "Chemical Eye Burns Emergency Irrigation",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "An industrial worker sustains an accidental splash of liquid battery acid directly into both eyes. What is the immediate first-aid priority?",
    options: [
      "Copious, continuous eye irrigation with normal saline, lactated Ringer's, or clean tap water for at least 15 to 30 minutes, checking pH before and after",
      "Covering both eyes with dry gauze pads and driving to an eye specialist clinic",
      "Instilling alkaline chemical eye drops into the eyes",
      "Instilling topical steroid drops and keeping the eyelids squeezed shut"
    ],
    correctAnswer: 0,
    rationale: "Ocular chemical burns are true emergencies where treatment takes precedence over visual acuity testing. Immediate, copious, continuous irrigation with saline, Ringer's, or clean water must begin immediately at the scene for at least 15 to 30 minutes (using a Morgan lens or IV tubing) to flush the chemical and restore normal conjunctival pH (7.0 to 7.4). Neutralization with other chemicals is contraindicated.",
    optionRationales: {
      A: "Correct. Immediate continuous irrigation with saline or clean water for 15–30 minutes until pH normalizes saves vision.",
      B: "Delaying irrigation to travel to a clinic allows deep corneal penetration and permanent blindness.",
      C: "Chemical neutralization creates an exothermic reaction that burns the cornea.",
      D: "Steroids without initial irrigation do not stop progressive chemical corneal liquefaction."
    },
    clinicalPearl: "Chemical eye burns: IRRIGATE IMMEDIATELY. Do not test vision first, do not wait for an eye doctor—flush the eye with water or saline for 30 minutes.",
    tags: ["ocular-burns", "eye-irrigation", "chemical-burn", "Morgan-lens", "first-aid"]
  },
  {
    id: "EMG-136",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Mushroom Poisoning: Amatoxin / Amanita phalloides",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A family presents with severe cholera-like vomiting and diarrhea 12 hours after eating wild forest mushrooms (Amanita phalloides / Death Cap). After transient recovery, what organ failure develops 48 to 72 hours later due to RNA polymerase II inhibition by Amatoxin?",
    options: [
      "Fulminant Hepatic Failure and Acute Tubular Necrosis",
      "Bilateral sensorineural deafness",
      "Cerebral calcification",
      "Spontaneous pneumothorax"
    ],
    correctAnswer: 0,
    rationale: "Amanita phalloides (Death Cap) contains Amatoxins, which inhibit cellular RNA polymerase II, halting protein synthesis. The poisoning has three stages: 1) Latent phase (6–12 hours asymptomatic); 2) Gastrointestinal phase (severe abdominal pain, cholera-like diarrhea, vomiting); 3) Apparent recovery phase (24–48 hours); 4) Hepatorenal phase (48–72 hours: massive transaminitis, jaundice, encephalopathy, fulminant hepatic necrosis, and acute renal failure). Treatment requires high-dose Silibinin (milk thistle), N-acetylcysteine, and liver transplantation.",
    optionRationales: {
      A: "Correct. Amatoxins destroy hepatocytes and renal tubules, producing fulminant liver and kidney failure.",
      B: "Amanita toxins do not target the acoustic nerve.",
      C: "Amatoxins cause soft-tissue organ necrosis, not brain calcification.",
      D: "Pneumothorax is a thoracic mechanical issue unrelated to amatoxins."
    },
    clinicalPearl: "Wild mushroom poisoning with delayed GI symptoms (>6 hours after ingestion) indicates the deadly Amanita phalloides. It leads to fulminant liver failure 3 days later.",
    tags: ["amatoxin", "Amanita-phalloides", "liver-failure", "toxicology", "mushroom-poisoning"]
  },
  {
    id: "EMG-137",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "Secondary Disasters / Cascading Hazards",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In disaster science, what is a 'Cascading Hazard' (Secondary Disaster)?",
    options: [
      "A secondary disaster triggered as a direct consequence of a primary disaster event (e.g., an earthquake rupturing gas pipelines, triggering massive urban fires and flash flooding from dam failures)",
      "A disaster that affects only wild forest animals",
      "A routine scheduled fire drill in a primary school",
      "A minor rain shower that lasts less than 2 minutes"
    ],
    correctAnswer: 0,
    rationale: "Cascading hazards occur when a primary natural or technological disaster triggers a chain of secondary and tertiary disasters. Classic examples: An earthquake (primary) ruptures municipal gas mains and fractures dams, triggering citywide fires, chemical spills, and tsunamis/flash floods (cascading hazards), overwhelming disaster response systems.",
    optionRationales: {
      A: "Correct. A cascading hazard is a secondary disaster triggered in sequence by an initial primary catastrophic event.",
      B: "Cascading disasters devastate human populations and civil infrastructure.",
      C: "Fire drills are planned educational preparedness exercises.",
      D: "Minor routine weather events do not constitute cascading disasters."
    },
    clinicalPearl: "Disaster planners must prepare for cascading hazards: An earthquake doesn't just shake buildings; it breaks gas pipes (fires), cuts power (hospital blackout), and breaks dams (flooding).",
    tags: ["cascading-hazards", "secondary-disaster", "disaster-management", "risk-mitigation"]
  },
  {
    id: "EMG-138",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Massive Transfusion Complication: Citrate Toxicity and Hypocalcemia",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "During rapid transfusion of 10 units of Packed Red Blood Cells (PRBCs) in a trauma patient, the nurse observes prolonged QT intervals on the monitor, tingling in the lips, and carpopedal muscle spasms (Trousseau's sign). What metabolic complication has occurred?",
    options: [
      "Hypocalcemia caused by excess Citrate preservative in donor blood binding ionized calcium",
      "Severe Hypercalcemia from excess calcium in red blood cells",
      "Hypernatremia from sodium bicarbonate preservatives",
      "Acute carbon monoxide poisoning from donor blood"
    ],
    correctAnswer: 0,
    rationale: "Stored donor blood components (PRBCs and FFP) are preserved with Citrate (citric acid/sodium citrate) to prevent coagulation by chelating calcium. When massive volumes are transfused rapidly (especially in hypothermic or shock states with impaired hepatic citrate clearance), unbound citrate accumulates, binding circulating free Ionized Calcium. This causes severe acute Hypocalcemia, presenting with prolonged QT intervals, tetany, and decreased myocardial contractility. Treat with IV Calcium Chloride or Calcium Gluconate.",
    optionRationales: {
      A: "Correct. Citrate preservative binds ionized calcium, producing acute hypocalcemia and tetany.",
      B: "Stored blood depletes free calcium; it does not induce hypercalcemia.",
      C: "Citrate toxicity causes hypocalcemia, not primary hypernatremia.",
      D: "Donor blood does not contain carbon monoxide."
    },
    clinicalPearl: "Massive transfusion complication: Stored blood contains Citrate, which binds calcium. For every 4 units of blood transfused rapidly, anticipate giving 1 gram of IV Calcium.",
    tags: ["citrate-toxicity", "hypocalcemia", "massive-transfusion", "blood-transfusion", "MTP"]
  },
  {
    id: "EMG-139",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "Post-Cardiac Arrest Brain Death Reflexes",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "When evaluating a patient in the intensive care unit for Brainstem Death following prolonged cardiac arrest, which clinical test evaluates the integrity of Cranial Nerves III, VI, and VIII (the vestibulo-ocular reflex)?",
    options: [
      "The Cold Caloric Test (Oculovestibular Reflex: instilling ice-cold water into the external auditory canal)",
      "The Babinski reflex on the sole of the foot",
      "The Patellar knee-jerk reflex",
      "The Abdominal cutaneous reflex"
    ],
    correctAnswer: 0,
    rationale: "The Oculovestibular Reflex (Cold Caloric Test) evaluates the brainstem (cranial nerves III, VI, and VIII through the pontine medial longitudinal fasciculus). In an intact brainstem, instilling 30–50 mL of ice-cold water into an ear canal (after confirming the tympanic membrane is intact) induces conjugate deviation of the eyes toward the irrigated ear with nystagmus. In brainstem death, the eyes remain fixed in the midline with zero movement.",
    optionRationales: {
      A: "Correct. The Cold Caloric test evaluates the vestibulo-ocular reflex across CN III, VI, and VIII in brainstem death testing.",
      B: "Babinski tests the corticospinal motor tract, not brainstem cranial nerve reflexes.",
      C: "Patellar reflex is a lumbar spinal reflex (L2–L4) that can remain intact in brain-dead patients.",
      D: "Abdominal cutaneous reflex evaluates thoracic spinal roots (T8–T12)."
    },
    clinicalPearl: "Cold Caloric Test for brainstem death: Flush the ear with ice water. If the eyes do NOT move, the brainstem vestibulo-ocular reflex is dead.",
    tags: ["brain-death", "cold-caloric", "vestibulo-ocular", "cranial-nerves", "neuro-assessment"]
  },
  {
    id: "EMG-140",
    course: "Emergency & Disaster Nursing",
    topic: "Orthopedic & Extremity Trauma Emergencies",
    subtopic: "Anterior Shoulder Dislocation & Axillary Nerve Check",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A basketball player sustains an Anterior Dislocation of the Glenohumeral (Shoulder) Joint. Which terminal peripheral nerve is at highest risk of compression or traction neuropraxia, requiring sensory testing over the 'regimental badge' area of the lateral deltoid prior to reduction?",
    options: [
      "Axillary Nerve",
      "Radial Nerve",
      "Median Nerve",
      "Ulnar Nerve"
    ],
    correctAnswer: 0,
    rationale: "The Axillary Nerve (C5, C6) winds tightly around the surgical neck of the humerus, immediately adjacent to the inferior glenohumeral joint capsule. Anterior and inferior dislocations stretch or compress this nerve. Before and after reduction, the nurse must assess the axillary nerve by testing cutaneous sensation over the lateral deltoid muscle ('regimental badge' patch) and motor contraction of the deltoid.",
    optionRationales: {
      A: "Correct. The Axillary nerve curves around the surgical neck of the humerus and is vulnerable in anterior shoulder dislocations.",
      B: "The radial nerve is vulnerable in mid-shaft humeral fractures, causing wrist drop.",
      C: "The median nerve is vulnerable in supracondylar fractures of the elbow.",
      D: "The ulnar nerve is vulnerable in medial epicondyle elbow trauma."
    },
    clinicalPearl: "Dislocated shoulder? Test sensation over the lateral deltoid muscle ('regimental badge' area) to verify the Axillary Nerve is not damaged.",
    tags: ["shoulder-dislocation", "axillary-nerve", "orthopedic-trauma", "neurovascular-check"]
  },
  {
    id: "EMG-141",
    course: "Emergency & Disaster Nursing",
    topic: "Thoracic Trauma Emergencies",
    subtopic: "Aortic Rupture: Radiographic Clues",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A high-speed motor collision victim with severe deceleration chest trauma has an initial supine trauma chest radiograph. What classic mediastinal silhouette abnormality on the chest X-ray raises strong suspicion of Traumatic Aortic Transection?",
    options: [
      "A widened superior mediastinum (>8 cm) with loss of the distinct aortic knob contour and deviation of the trachea to the right",
      "A pneumoperitoneum air crescent under the right diaphragm",
      "Multiple fluid levels inside the small intestine",
      "Complete absence of both lung fields"
    ],
    correctAnswer: 0,
    rationale: "Traumatic Aortic Rupture (usually occurring at the aortic isthmus just distal to the left subclavian artery due to deceleration shear) carries high pre-hospital mortality. On an erect or supine portable trauma chest X-ray, the classic radiographic signs include: 1) Widened mediastinum (>8 cm on supine film), 2) Loss of the distinct aortic knob contour, 3) Deviation of the trachea/esophagus to the right, 4) Depression of the left mainstem bronchus, and 5) Left apical pleural cap. Immediate CT angiography is indicated.",
    optionRationales: {
      A: "Correct. Widened mediastinum >8 cm with loss of aortic knob contour and rightward tracheal shift strongly suggests traumatic aortic rupture.",
      B: "Subdiaphragmatic free air indicates hollow abdominal bowel perforation, not aortic disruption.",
      C: "Small bowel air-fluid levels indicate intestinal obstruction.",
      D: "Bilateral whiteout reflects massive bilateral hemothorax or diffuse atelectasis."
    },
    clinicalPearl: "Deceleration crash + Widened mediastinum (>8 cm on chest X-ray) = Traumatic Aortic Rupture until proven otherwise. Keep blood pressure controlled.",
    tags: ["aortic-rupture", "widened-mediastinum", "thoracic-trauma", "ATLS", "deceleration-injury"]
  },
  {
    id: "EMG-142",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "Secondary Blast Injury Mechanics: Puncture Wounds",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A survivor of a nail-bomb blast arrives in the triage bay with hundreds of small puncture lacerations from embedded metal nails and ball bearings. What primary and secondary clinical management must be verified?",
    options: [
      "X-ray imaging to locate radio-opaque foreign bodies, administration of Tetanus Toxoid / TIG, and broad-spectrum antibiotic prophylaxis",
      "Pouring kerosene over all open puncture holes",
      "Immediate discharge home because puncture wounds never become infected",
      "Using a strong neodymium magnet to rip all metal nails out through the skin simultaneously"
    ],
    correctAnswer: 0,
    rationale: "Secondary blast injuries are caused by flying shrapnel, nails, screws, and building debris. These projectiles cause dirty, deep penetrating puncture wounds inoculated with bacterial spores (Clostridium tetani, Clostridium perfringens). Proper management: 1) Radiographic screening to locate radio-opaque shrapnel; 2) Tetanus prophylaxis (toxoid + Tetanus Immunoglobulin if unimmunized); 3) Prophylactic broad-spectrum antibiotics; 4) Surgical wound exploration and debridement.",
    optionRationales: {
      A: "Correct. Radiography for foreign bodies, tetanus prophylaxis, and prophylactic antibiotics prevent secondary blast complications.",
      B: "Kerosene causes chemical burns and does not sterilize deep puncture wounds.",
      C: "Puncture wounds have high rates of tetanus and gas gangrene.",
      D: "Magnets can rip shrapnel through adjacent major blood vessels, causing fatal internal lacerations."
    },
    clinicalPearl: "Bomb shrapnel wounds are contaminated with dirt and bacteria. Always give Tetanus Toxoid and IV antibiotics early to prevent tetanus and gas gangrene.",
    tags: ["secondary-blast", "shrapnel", "tetanus-prophylaxis", "puncture-wounds", "disaster"]
  },
  {
    id: "EMG-143",
    course: "Emergency & Disaster Nursing",
    topic: "Shock Syndromes & Resuscitation",
    subtopic: "Obstructive Shock Etiologies",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which trio of life-threatening clinical emergencies represents primary forms of 'Obstructive Shock' (physical block to cardiac filling or outflow)?",
    options: [
      "Tension Pneumothorax, Cardiac Tamponade, and Massive Pulmonary Embolism",
      "Acute blood loss, severe diarrhea, and burn shock",
      "Anaphylaxis, septic shock, and neurogenic shock",
      "Myocardial infarction, dilated cardiomyopathy, and myocarditis"
    ],
    correctAnswer: 0,
    rationale: "Shock is categorized into four physiological classes: 1) Hypovolemic (hemorrhage, dehydration); 2) Cardiogenic (MI, heart failure); 3) Distributive (septic, anaphylactic, neurogenic); 4) Obstructive (a physical mechanical barrier that prevents cardiac chamber filling or ventricular outflow: Tension Pneumothorax, Cardiac Tamponade, and Massive Pulmonary Embolism).",
    optionRationales: {
      A: "Correct. Tension pneumothorax, cardiac tamponade, and massive PE are the three classic obstructive shock etiologies.",
      B: "These are causes of Hypovolemic shock (intravascular volume loss).",
      C: "These are causes of Distributive shock (pathological vasodilation).",
      D: "These are causes of Cardiogenic shock (direct pump failure)."
    },
    clinicalPearl: "Obstructive Shock Triad: 1) Tension Pneumothorax, 2) Cardiac Tamponade, 3) Massive Pulmonary Embolism. Relieving the mechanical obstruction is the cure.",
    tags: ["obstructive-shock", "cardiac-tamponade", "tension-pneumothorax", "PE", "shock-classification"]
  },
  {
    id: "EMG-144",
    course: "Emergency & Disaster Nursing",
    topic: "Cardiopulmonary Arrest & Resuscitation",
    subtopic: "ACLS Transcutaneous Pacing Technique",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "When initiating Transcutaneous Pacing (TCP) for an adult in symptomatic complete heart block (3rd degree AV block), how does the nurse verify true 'Electrical and Mechanical Capture'?",
    options: [
      "Verifying on the monitor that each pacing spike is followed by a wide QRS complex and T wave (electrical capture), AND palpating a matching femoral or right radial pulse for each paced beat (mechanical capture)",
      "Observing muscle twitching on the patient's anterior chest wall",
      "Checking the blood pressure cuff reading once every 3 hours",
      "Noting that the defibrillator pacing rate knob is set to 80"
    ],
    correctAnswer: 0,
    rationale: "Transcutaneous pacing requires confirming two milestones: 1) Electrical Capture: Each pacing artifact/spike on the monitor is followed consistently by a wide QRS complex and a prominent T-wave; 2) Mechanical Capture: Palpating a mechanical pulse (e.g., right radial, femoral, or listening to heart sounds) that matches every paced beat. Rescuers must not mistake pacing muscle twitches in the chest wall for true mechanical perfusion.",
    optionRationales: {
      A: "Correct. Verifying pacing spikes with wide QRS waves AND palpating matching peripheral pulses confirms true mechanical capture.",
      B: "Chest wall muscle contractions occur with electrical stimulation, but do not prove the heart is pumping blood.",
      C: "Continuous pulse verification is required during pacing titration.",
      D: "Setting the knob sets the target rate, but does not confirm physiological capture."
    },
    clinicalPearl: "Transcutaneous pacing: Do NOT just look at the monitor. Palpate the pulse at the femoral or radial artery. The chest will twitch, but you must feel a real pulse to confirm capture.",
    tags: ["transcutaneous-pacing", "mechanical-capture", "heart-block", "ACLS", "bradycardia"]
  },
  {
    id: "EMG-145",
    course: "Emergency & Disaster Nursing",
    topic: "Environmental & Climate Emergencies",
    subtopic: "Submersion Injury: Cold Water Protective Reflex",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Why do young children who experience prolonged submersion in ice-cold water (<5°C) occasionally survive with intact neurological recovery after 30 to 45 minutes of submersion, unlike adults?",
    options: [
      "Activation of the Mammalian Diving Reflex (bradycardia, peripheral vasoconstriction, shunting blood to brain/heart) combined with rapid brain hypothermia before anoxia develops",
      "Infants naturally breathe water through gill-like lung adaptations",
      "Cold water converts carbon dioxide into glucose",
      "Children lack blood circulation until 10 years of age"
    ],
    correctAnswer: 0,
    rationale: "Young children who submerge in cold water (<5°C) benefit from: 1) The Mammalian Diving Reflex: sudden cold water contact on the trigeminal facial nerves induces intense bradycardia, peripheral vasoconstriction, and selective blood shunting exclusively to the brain and heart; 2) Rapid cooling: because children have high surface-area-to-mass ratios and thin subcutaneous fat, rapid brain cooling occurs BEFORE circulatory arrest, dropping the cerebral metabolic rate and protecting neurons from anoxic death.",
    optionRationales: {
      A: "Correct. The mammalian diving reflex and rapid hypothermic brain cooling protect neurons during cold water drowning.",
      B: "Humans possess no aquatic gill structures.",
      C: "Gas chemistry does not convert carbon dioxide into carbohydrates in human blood.",
      D: "Infants have active, closed cardiovascular circulations."
    },
    clinicalPearl: "Cold water drowning in young children has high neurological recovery rates due to the Mammalian Diving Reflex and rapid brain cooling. Resuscitate aggressively.",
    tags: ["drowning", "mammalian-diving-reflex", "submersion-injury", "hypothermia", "PALS"]
  },
  {
    id: "EMG-146",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Log-Roll Precautions in Thoracolumbar Trauma",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When performing a 4-person log-roll on an immobilized spinal trauma patient to inspect the posterior back and perform a digital rectal examination, which axis of the patient's body must be maintained perfectly straight?",
    options: [
      "The entire anatomical Head, Neck, Thorax, and Pelvis as a single, unbroken rigid unit without twisting or flexion",
      "The knees flexed at 90 degrees while twisting the thoracic spine",
      "The head rotated to the left while keeping the body flat",
      "The neck hyperextended with the shoulders elevated"
    ],
    correctAnswer: 0,
    rationale: "During a log-roll, the head, cervical spine, thoracic torso, and pelvis must be maintained in alignment as a single, rigid, continuous axis. The person at the head commands the maneuver, while assistants at the chest, hips, and lower limbs turn the patient simultaneously without twisting, rotational shear, or spinal flexion, preventing spinal cord transection.",
    optionRationales: {
      A: "Correct. Head, neck, thorax, and pelvis must roll as a single unbroken axis without rotational twist.",
      B: "Twisting the thoracic spine can displace unstable vertebral fractures and transect the spinal cord.",
      C: "Rotating the head independently causes cervical cord shear.",
      D: "Hyperextension narrows the spinal canal and worsens cervical cord compression."
    },
    clinicalPearl: "The log-roll rule: Head, shoulders, and hips move at the EXACT same instant like a wooden log. No twisting of the spine.",
    tags: ["log-roll", "spinal-immobilization", "ATLS", "cervical-spine", "trauma"]
  },
  {
    id: "EMG-147",
    course: "Emergency & Disaster Nursing",
    topic: "Toxicology & Poisoning Emergencies",
    subtopic: "Cyanide Poisoning: Mechanism of Lactic Acidosis",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "At the cellular level, how does acute Cyanide Poisoning from structure fire smoke inhalation cause rapid cardiovascular collapse and severe lactic acidosis?",
    options: [
      "Cyanide binds to the ferric iron (Fe3+) in Cytochrome c Oxidase (Complex IV), halting the mitochondrial electron transport chain and aerobic ATP production",
      "Cyanide dissolves red blood cell membranes within 5 seconds",
      "Cyanide causes immediate destruction of the liver gallbladder",
      "Cyanide converts hemoglobin into pure nitrogen"
    ],
    correctAnswer: 0,
    rationale: "Cyanide binds with high affinity to the ferric iron (Fe3+) in the heme group of mitochondrial Cytochrome c Oxidase (Complex IV of the electron transport chain). This inhibits oxidative phosphorylation: cells cannot utilize oxygen to produce ATP, shifting metabolism to anaerobic glycolysis, producing massive lactic acid accumulation and cellular histotoxic hypoxia, despite high blood oxygen saturation.",
    optionRationales: {
      A: "Correct. Cyanide blocks Cytochrome c Oxidase in mitochondria, halting aerobic respiration and causing severe lactic acidosis.",
      B: "Cyanide causes intracellular enzyme poisoning, not direct mechanical hemolysis.",
      C: "Gallbladder disease is unrelated to acute cyanide-mediated histotoxic hypoxia.",
      D: "Cyanide does not convert hemoglobin into nitrogen gas."
    },
    clinicalPearl: "Cyanide causes 'Histotoxic Hypoxia': The blood is full of oxygen, but the cells CANNOT use it because mitochondrial Cytochrome c Oxidase is blocked. Treat with Hydroxocobalamin.",
    tags: ["cyanide", "cytochrome-c-oxidase", "histotoxic-hypoxia", "lactic-acidosis", "cellular-respiration"]
  },
  {
    id: "EMG-148",
    course: "Emergency & Disaster Nursing",
    topic: "Disaster Management & Mass Casualty Triage",
    subtopic: "Hospital Evacuation: Vertical vs Horizontal Evacuation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During an internal hospital disaster (such as a fire on an inpatient surgical floor), what is the difference between 'Horizontal Evacuation' and 'Vertical Evacuation'?",
    options: [
      "Horizontal evacuation moves patients across the same floor through fire-barrier smoke doors into a safe adjacent wing; Vertical evacuation moves patients down stairwells to lower floors or ground level",
      "Horizontal evacuation uses helicopters; Vertical evacuation uses water boats",
      "Horizontal evacuation is for deceased patients; Vertical evacuation is for doctors",
      "There is no difference; both require jumping out of windows"
    ],
    correctAnswer: 0,
    rationale: "Hospital fire and evacuation protocols prioritize progressive movement: 1) Horizontal Evacuation: The preferred first step, moving patients laterally on the same level through fire/smoke barrier compartment doors into an adjacent, safe smoke-compartment wing. This is faster and avoids negotiating stairs with bedbound patients; 2) Vertical Evacuation: Moving patients down stairs or ramps to lower floors or outside ground level, used if fire threatens the entire floor.",
    optionRationales: {
      A: "Correct. Horizontal moves across the same floor past fire doors; Vertical moves downward to lower floors or outside.",
      B: "Evacuation nomenclature relates to architectural vectors, not aviation vs maritime transport.",
      C: "Evacuation paths are designed to move living patients out of harm's way.",
      D: "Jumping is unsafe; structured horizontal compartmentation saves lives in hospital fires."
    },
    clinicalPearl: "In hospital fires: Evacuate HORIZONTALLY first (move past fire doors into the next wing on the same floor). Go VERTICAL (down stairs) only if the whole floor is compromised.",
    tags: ["hospital-evacuation", "horizontal-evacuation", "fire-safety", "disaster-management", "HICS"]
  },
  {
    id: "EMG-149",
    course: "Emergency & Disaster Nursing",
    topic: "Thermal Burns & Inhalation Injury",
    subtopic: "Chemical Burn of Skin: Dry Lime (Calcium Oxide)",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A construction worker is coated in Dry Lime (Calcium Oxide) powder after a bag burst. What is the mandatory first-aid step before flushing with water?",
    options: [
      "Brush off all dry powder completely from skin and clothes before irrigating (adding water to dry lime creates an exothermic reaction that produces severe thermal burns)",
      "Pour 100 mL of water immediately onto the dry powder on the chest",
      "Instruct the patient to scrub the dry powder into his skin",
      "Apply vinegar directly to the dry lime powder"
    ],
    correctAnswer: 0,
    rationale: "Dry chemicals such as Dry Lime (Calcium Oxide) and elemental sodium react exothermically with water: adding small amounts of water to dry calcium oxide produces Calcium Hydroxide, generating high heat that causes severe secondary thermal burns. The rescuer must first brush off all dry powder from the skin and clothes with a dry cloth or brush, and only then flush with copious, high-volume running water.",
    optionRationales: {
      A: "Correct. Brush off dry powder first; adding water to dry lime releases heat that worsens thermal burns.",
      B: "Adding water to unbrushed dry lime triggers a thermal exothermic reaction.",
      C: "Scrubbing drives corrosive lime crystals deeper into the epidermis.",
      D: "Vinegar releases exothermic heat and acid-base neutralization reactions on the skin."
    },
    clinicalPearl: "Dry chemical burns (like Dry Lime): BRUSH FIRST, THEN FLUSH. If you add water to dry lime, it creates intense heat that burns the skin.",
    tags: ["dry-lime", "chemical-burns", "brush-first", "exothermic-reaction", "first-aid"]
  },
  {
    id: "EMG-150",
    course: "Emergency & Disaster Nursing",
    topic: "Emergency Trauma Assessment",
    subtopic: "Summary of the Primary Survey Sequence (<C>ABCDE)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under updated tactical combat casualty care (TCCC) and advanced trauma life support (ATLS) standards, what is the correct sequential order of the life-saving Primary Survey in trauma resuscitation?",
    options: [
      "<C> Catastrophic Hemorrhage → A (Airway with Cervical Spine Protection) → B (Breathing and Ventilation) → C (Circulation and Hemorrhage Control) → D (Disability / Neurological) → E (Exposure / Environmental Control)",
      "A (Airway) → E (Exposure) → D (Disability) → C (Circulation) → B (Breathing)",
      "E (Exposure) → D (Disability) → C (Circulation) → B (Breathing) → A (Airway)",
      "D (Disability) → C (Circulation) → A (Airway) → B (Breathing) → E (Exposure)"
    ],
    correctAnswer: 0,
    rationale: "Modern trauma systems follow the <C>ABCDE sequence: 1) <C> Catastrophic Hemorrhage: Exsanguinating external arterial bleeding is stopped immediately with tourniquets/pressure before airway management; 2) A = Airway with manual in-line cervical spine stabilization; 3) B = Breathing and ventilation (rule out tension pneumothorax, flail chest); 4) C = Circulation with hemorrhage control and balanced fluid/blood resuscitation; 5) D = Disability (rapid GCS, pupils); 6) E = Exposure and environmental hypothermia prevention.",
    optionRationales: {
      A: "Correct. <C> Catastrophic Bleeding → A (Airway/C-Spine) → B (Breathing) → C (Circulation) → D (Disability) → E (Exposure).",
      B: "Disrupts the physiological priority hierarchy of resuscitation.",
      C: "Runs backward from exposure to airway.",
      D: "Airway and hemorrhage control must precede neurological scoring."
    },
    clinicalPearl: "Trauma order of priority: Stop catastrophic bleeding first (<C>), then secure the Airway with C-spine (A), assess Breathing (B), check Circulation (C), evaluate Disability/GCS (D), and Expose while preventing hypothermia (E).",
    tags: ["primary-survey", "ABCDE", "ATLS", "TCCC", "trauma-priorities"]
  }
];

export default emergencyQuestions;
