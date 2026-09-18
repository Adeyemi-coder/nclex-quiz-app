export const emergencyQuestions = [
  {
    id: "emerg_1",
    category: "Emergency Nursing",
    question: "An adult client in the intensive care unit becomes unresponsive and pulseless. The cardiac monitor displays fine ventricular fibrillation. After initiating high-quality chest compressions and delivering a first unsynchronized defibrillation shock of 200 J (biphasic), what is the immediate priority nursing action?",
    answers: [
      "Immediately resume chest compressions for 2 minutes before checking the rhythm or pulse",
      "Pause for 10 seconds to palpate the carotid pulse and re-analyze the rhythm",
      "Administer IV epinephrine 1 mg rapid bolus immediately",
      "Deliver a second consecutive shock to ensure myocardial capture"
    ],
    correctAnswer: "Immediately resume chest compressions for 2 minutes before checking the rhythm or pulse",
    rationale: "According to ACLS guidelines, chest compressions must be resumed immediately following any defibrillation shock without pausing for pulse checks or rhythm analysis. Post-shock myocardial stun prevents immediate generation of an effective pulse even if electrical defibrillation is successful. CPR is maintained for a full 2-minute cycle (approx. 5 cycles of 30:2 or continuous compressions with an advanced airway) before pausing briefly for a rhythm and pulse check."
  },
  {
    id: "emerg_2",
    category: "Emergency Nursing",
    question: "A client who sustained blunt polytrauma is in hemorrhagic shock with an active pelvic fracture. Two wide-bore 14-gauge peripheral IV lines are established. Which intravenous resuscitation strategy aligns with current damage control resuscitation principles while awaiting crossmatched blood?",
    answers: [
      "Target permissive hypotension (mean arterial pressure ~65 mmHg or SBP 80-90 mmHg) with balanced blood product ratios (1:1:1)",
      "Infuse 3,000 mL of 0.9% normal saline rapidly under pressure to normalize blood pressure to 120/80 mmHg",
      "Administer IV norepinephrine infusion as first-line therapy before fluid resuscitation",
      "Administer rapid infusions of 5% dextrose in water to maintain renal perfusion"
    ],
    correctAnswer: "Target permissive hypotension (mean arterial pressure ~65 mmHg or SBP 80-90 mmHg) with balanced blood product ratios (1:1:1)",
    rationale: "Damage control resuscitation for uncontrolled traumatic hemorrhage prioritizes permissive hypotension (maintaining SBP around 80–90 mmHg or MAP ~65 mmHg) to avoid 'popping the clot' and diluting clotting factors until surgical or angiographic hemostasis is achieved. Resuscitation relies on balanced blood products (1:1:1 ratio of packed red blood cells, fresh frozen plasma, and platelets) rather than large volumes of crystalloids, which worsen hypothermia, coagulopathy, and acidosis (the lethal triad)."
  },
  {
    id: "emerg_3",
    category: "Emergency Nursing",
    question: "During adult cardiopulmonary resuscitation for pulseless electrical activity (PEA), the nurse prepares medications. Which medication and administration protocol are indicated by current ACLS guidelines?",
    answers: [
      "Epinephrine 1 mg IV/IO administered as soon as feasible and repeated every 3 to 5 minutes",
      "Atropine 1 mg IV/IO push every 3 minutes up to a total dose of 3 mg",
      "Amiodarone 300 mg IV push after the second cycle of CPR",
      "Sodium bicarbonate 1 mEq/kg routinely administered during the first 2 minutes"
    ],
    correctAnswer: "Epinephrine 1 mg IV/IO administered as soon as feasible and repeated every 3 to 5 minutes",
    rationale: "For non-shockable rhythms (PEA and asystole), epinephrine 1 mg IV/IO should be administered as early as possible and repeated every 3 to 5 minutes. Atropine is no longer recommended in routine cardiac arrest algorithms. Antiarrhythmic agents (amiodarone or lidocaine) are indicated only for refractory shockable rhythms (VF/pulseless VT), not PEA."
  },
  {
    id: "emerg_4",
    category: "Emergency Nursing",
    question: "A client with septic shock has received 30 mL/kg of IV balanced crystalloids. The blood pressure remains 76/44 mmHg (MAP 55 mmHg). The nurse prepares to initiate vasopressor therapy via a central venous catheter. Which medication is the first-line vasopressor of choice?",
    answers: [
      "Norepinephrine",
      "Dopamine",
      "Phenylephrine",
      "Epinephrine"
    ],
    correctAnswer: "Norepinephrine",
    rationale: "Surviving Sepsis Campaign guidelines recommend norepinephrine as the first-choice vasopressor to restore and maintain a target mean arterial pressure (MAP) >=65 mmHg. Norepinephrine provides potent alpha-1 vasoconstriction to reverse pathological vasodilation with modest beta-1 inotropic support, producing fewer dysrhythmias and lower mortality than dopamine."
  },
  {
    id: "emerg_5",
    category: "Emergency Nursing",
    question: "A client who sustained a full-thickness electrical burn from a 10,000-volt power line arrives in the emergency department. The urine output is 20 mL/hr and reddish-brown in color. What clinical diagnosis must the nurse anticipate, and what is the target hourly urine output for resuscitation?",
    answers: [
      "Myoglobinuria secondary to rhabdomyolysis; target urine output 75 to 100 mL/hr",
      "Acute hemoglobinuria; target urine output 30 mL/hr",
      "Prerenal azotemia; target urine output 0.5 mL/kg/hr",
      "Postrenal obstructive uropathy; target urine output 150 to 200 mL/hr"
    ],
    correctAnswer: "Myoglobinuria secondary to rhabdomyolysis; target urine output 75 to 100 mL/hr",
    rationale: "High-voltage electrical injuries cause massive hidden deep muscle necrosis, releasing myoglobin and potassium into circulation. Pigment nephropathy leads to acute tubular obstruction and acute kidney injury. In the presence of myoglobinuria (tea- or reddish-brown urine), standard burn resuscitation is escalated to achieve an hourly urine output of 75–100 mL/hr (or 1–2 mL/kg/hr) until the urine clears, often combined with aggressive isotonic crystalloids."
  },
  {
    id: "emerg_6",
    category: "Emergency Nursing",
    question: "During a mass casualty incident following an industrial explosion, the triage nurse uses the Simple Triage and Rapid Treatment (START) algorithm. An adult victim is unconscious, has no spontaneous respirations initially, but begins breathing at 18 breaths/min after simple manual airway repositioning. How should this victim be triaged?",
    answers: [
      "Immediate (Red Tag)",
      "Delayed (Yellow Tag)",
      "Expectant / Deceased (Black Tag)",
      "Minimal (Green Tag)"
    ],
    correctAnswer: "Immediate (Red Tag)",
    rationale: "Under the START triage algorithm, if a patient is not breathing spontaneously, the rescuer positions the airway. If breathing does not resume after positioning, the patient is tagged Deceased (Black). If breathing resumes after simple manual repositioning (as here), the patient is immediately classified as Immediate (Red Tag) because rapid airway intervention rescued the client."
  },
  {
    id: "emerg_7",
    category: "Emergency Nursing",
    question: "A client who suffered an acute complete spinal cord transection at the T2 level arrives in the trauma bay. The client is warm and dry with flushed lower extremities, blood pressure of 78/42 mmHg, and heart rate of 46 beats/min. What type of shock is present?",
    answers: [
      "Neurogenic shock",
      "Hypovolemic shock",
      "Septic shock",
      "Cardiogenic shock"
    ],
    correctAnswer: "Neurogenic shock",
    rationale: "Neurogenic shock is a distributive shock state resulting from cervical or high-thoracic (T6 and above) spinal cord injury. Disruption of descending sympathetic outflow produces unopposed vagal (parasympathetic) tone, causing arterial and venous vasodilation (warm, flushed, dry extremities, hypotension) and loss of cardiac accelerator reflexes, yielding symptomatic bradycardia. Hypovolemic and cardiogenic shock, by contrast, manifest with tachycardia and cool, pale, vasoconstricted skin."
  },
  {
    id: "emerg_8",
    category: "Emergency Nursing",
    question: "A young adult is brought to the emergency department after an intentional ingestion of 40 tablets of acetaminophen (500 mg each) approximately 2.5 hours ago. The nurse confirms an elevated toxic serum acetaminophen level. Which antidote should the nurse prepare to administer immediately?",
    answers: [
      "N-acetylcysteine (NAC)",
      "Flumazenil",
      "Deferoxamine",
      "Physostigmine"
    ],
    correctAnswer: "N-acetylcysteine (NAC)",
    rationale: "Acetaminophen overdose saturates glucuronidation and sulfation pathways, shunting metabolism through CYP2E1 to produce the toxic metabolite N-acetyl-p-benzoquinone imine (NAPQI). When endogenous hepatic glutathione stores are depleted by >70%, NAPQI binds to hepatocytes, causing centrilobular hepatic necrosis. N-acetylcysteine (NAC) acts as a glutathione precursor and substitute, binding NAPQI directly to prevent irreversible liver failure if administered within 8 hours."
  },
  {
    id: "emerg_9",
    category: "Emergency Nursing",
    question: "A client with severe traumatic brain injury (TBI) has an intracranial pressure (ICP) monitor. The mean arterial pressure (MAP) is 78 mmHg and the ICP is 22 mmHg. What is the calculated Cerebral Perfusion Pressure (CPP), and what clinical action is required?",
    answers: [
      "CPP is 56 mmHg; interventions are required because target CPP is 60 to 70 mmHg",
      "CPP is 100 mmHg; no interventions are required",
      "CPP is 56 mmHg; this represents an optimal normal clinical value",
      "CPP is 3.5 mmHg; the client is brain dead"
    ],
    correctAnswer: "CPP is 56 mmHg; interventions are required because target CPP is 60 to 70 mmHg",
    rationale: "Cerebral Perfusion Pressure (CPP) = Mean Arterial Pressure (MAP) - Intracranial Pressure (ICP). Here, CPP = 78 - 22 = 56 mmHg. Brain Trauma Foundation guidelines establish that optimal CPP in adult severe TBI is between 60 and 70 mmHg. A CPP <60 mmHg causes secondary cerebral ischemia, necessitating interventions to lower ICP (e.g., osmotic therapy with hypertonic saline or mannitol, sedation) and/or support MAP with vasopressors."
  },
  {
    id: "emerg_10",
    category: "Emergency Nursing",
    question: "A client is brought to the emergency department with suspected organophosphate insecticide poisoning. The nurse observes profuse diaphoresis, salivation, lacrimation, urination, defecation, pupillary constriction (pinpoint pupils), and diffuse wheezing with bradycardia. Which medication is the immediate antidote to block muscarinic receptor hyperstimulation?",
    answers: [
      "Atropine sulfate",
      "Pralidoxime (2-PAM) monotherapy without atropine",
      "Naloxone",
      "Neostigmine"
    ],
    correctAnswer: "Atropine sulfate",
    rationale: "Organophosphates irreversibly inhibit acetylcholinesterase, causing massive accumulation of acetylcholine across muscarinic and nicotinic synapses (the SLUDGEM/DUMBELS toxidrome). High-dose IV atropine is the primary, life-saving muscarinic antagonist; it must be titrated aggressively until bronchial secretions dry and bronchospasm clears. Pralidoxime (2-PAM) is administered concurrently to reactivate the enzyme at nicotinic neuromuscular junctions, but atropine is the immediate priority for pulmonary secretions."
  },
  {
    id: "emerg_11",
    category: "Emergency Nursing",
    question: "A client who sustained a stab wound to the left chest presents with cyanosis, distended neck veins, muffled heart sounds, and a systolic blood pressure dropping from 110 mmHg to 74 mmHg. The nurse identifies Beck's triad. Which procedure should the emergency team prepare for immediately?",
    answers: [
      "Emergent pericardiocentesis or resuscitative thoracotomy",
      "Left-sided tube thoracostomy at the 2nd intercostal space",
      "Endotracheal intubation with high positive end-expiratory pressure",
      "Immediate intravenous infusion of 100 mg alteplase (tPA)"
    ],
    correctAnswer: "Emergent pericardiocentesis or resuscitative thoracotomy",
    rationale: "Beck's triad (hypotension, jugular venous distention, and muffled heart sounds) signals acute traumatic cardiac tamponade: blood fills the non-distensible pericardial sac, preventing diastolic ventricular filling and reducing cardiac output. Emergency decompression via subxiphoid needle pericardiocentesis or immediate resuscitative thoracotomy is required to evacuate the hemopericardium and restore circulation."
  },
  {
    id: "emerg_12",
    category: "Emergency Nursing",
    question: "An adult client weighing 70 kg sustained partial- and full-thickness thermal burns across the entire anterior torso (18%) and both anterior and posterior surfaces of both arms (18%), totaling 36% Total Body Surface Area (TBSA). Using the Parkland formula (4 mL x kg x % TBSA), what is the total volume of Lactated Ringer's prescribed for the first 24 hours, and how much should be infused in the first 8 hours post-injury?",
    answers: [
      "Total 10,080 mL; 5,040 mL infused over the first 8 hours",
      "Total 5,040 mL; 2,520 mL infused over the first 8 hours",
      "Total 10,080 mL; 3,360 mL infused over the first 8 hours",
      "Total 7,200 mL; 3,600 mL infused over the first 8 hours"
    ],
    correctAnswer: "Total 10,080 mL; 5,040 mL infused over the first 8 hours",
    rationale: "Parkland Formula: 4 mL x weight (kg) x % TBSA = 4 x 70 x 36 = 10,080 mL of Lactated Ringer's over the first 24 hours. Exactly half of this total volume (5,040 mL) must be infused during the first 8 hours calculated from the exact time of burn injury, with the remaining 5,040 mL infused over the subsequent 16 hours."
  },
  {
    id: "emerg_13",
    category: "Emergency Nursing",
    question: "A client presents with an unstable wide-complex tachycardia at a rate of 180 beats/min. The client is pale, diaphoretic, has a palpable carotid pulse, and has a blood pressure of 78/46 mmHg. What is the immediate treatment of choice according to ACLS guidelines?",
    answers: [
      "Synchronized cardioversion starting at 100 Joules",
      "Immediate unsynchronized defibrillation at 200 Joules",
      "IV adenosine 6 mg rapid push",
      "IV amiodarone 150 mg infused over 10 minutes"
    ],
    correctAnswer: "Synchronized cardioversion starting at 100 Joules",
    rationale: "An unstable patient with a pulse displaying persistent tachyarrhythmia (monomorphic ventricular tachycardia or uncertain wide-complex tachycardia) who exhibits hemodynamic compromise (hypotension, altered sensorium, shock, ischemic chest pain) requires immediate synchronized cardioversion. Synchronization delivers the shock timed with the R wave to prevent triggering ventricular fibrillation on the vulnerable T-wave phase (R-on-T phenomenon)."
  },
  {
    id: "emerg_14",
    category: "Emergency Nursing",
    question: "A client is brought to the emergency department after a suspected opioid overdose. The client is unresponsive with pinpoint pupils, shallow respirations at 4 breaths/min, and an SpO2 of 76%. While the team prepares IV naloxone, what is the nurse's immediate priority intervention?",
    answers: [
      "Support ventilation immediately using a bag-valve-mask (BVM) connected to 100% supplemental oxygen",
      "Obtain an immediate 12-lead electrocardiogram",
      "Place the client in the Trendelenburg position",
      "Insert a large-bore nasogastric tube to decompress the stomach"
    ],
    correctAnswer: "Support ventilation immediately using a bag-valve-mask (BVM) connected to 100% supplemental oxygen",
    rationale: "While naloxone is the pharmacological antidote, acute hypoxia and hypoventilation kill the opioid overdose victim within minutes. Airway and breathing always take immediate precedence. The nurse immediately establishes a patent airway and delivers rescue breaths with a bag-valve-mask and 100% oxygen to reverse acute cerebral and myocardial anoxia while naloxone is being drawn up and administered."
  },
  {
    id: "emerg_15",
    category: "Emergency Nursing",
    question: "A client who fell from a height of 6 meters arrives immobilized on a backboard with a rigid cervical collar. The primary trauma survey reveals snoring respirations and a Glasgow Coma Scale (GCS) score of 6. How should the nurse open the airway without compromising the cervical spine?",
    answers: [
      "Perform a modified jaw-thrust maneuver while maintaining manual in-line spinal stabilization",
      "Perform a standard head-tilt, chin-lift maneuver",
      "Flex the neck forward and insert an oral airway",
      "Place the client in the left lateral Sims position"
    ],
    correctAnswer: "Perform a modified jaw-thrust maneuver while maintaining manual in-line spinal stabilization",
    rationale: "In any trauma patient with potential cervical spine injury, the head-tilt/chin-lift is strictly contraindicated because hyperextending the neck can compress the cervical cord, causing quadriplegia. The modified jaw-thrust maneuver lifts the mandible forward without tilting or extending the cervical spine, successfully moving the tongue away from the posterior pharynx while manual in-line stabilization is maintained."
  },
  {
    id: "emerg_16",
    category: "Emergency Nursing",
    question: "A client in the ICU with severe septic shock requires central venous catheter placement. During placement in the right subclavian vein, the client suddenly becomes acutely dyspneic, tachycardic, and hypotensive. Auscultation reveals absent breath sounds over the right hemithorax and hyperresonance to percussion. What complication should the nurse identify?",
    answers: [
      "Iatrogenic pneumothorax",
      "Acute air embolism into the right ventricle",
      "Hemopericardium and cardiac tamponade",
      "Catheter-induced thoracic duct laceration"
    ],
    correctAnswer: "Iatrogenic pneumothorax",
    rationale: "Subclavian vein cannulation carries an inherent risk of accidental apical pleura puncture, introducing air into the pleural space and causing an iatrogenic pneumothorax. Classic manifestations include sudden acute dyspnea, pleuritic pain, unilateral absent or diminished breath sounds, and hyperresonance to percussion over the affected hemithorax, which can rapidly progress to a tension pneumothorax under positive pressure ventilation."
  },
  {
    id: "emerg_17",
    category: "Emergency Nursing",
    question: "A client with acute esophageal variceal hemorrhage is admitted in hemorrhagic shock. The gastroenterologist places a Sengstaken-Blakemore tube to tamponade the bleeding. Two hours later, the client suddenly develops acute respiratory distress, severe cyanosis, and tachycardia. What is the nurse's immediate priority action?",
    answers: [
      "Immediately cut both the gastric and esophageal balloon lumens with scissors and remove the tube",
      "Deflate only the esophageal balloon using a 50 mL syringe",
      "Increase the traction weight on the tube to 2 kilograms",
      "Perform immediate endotracheal suctioning through the central lumen"
    ],
    correctAnswer: "Immediately cut both the gastric and esophageal balloon lumens with scissors and remove the tube",
    rationale: "If the gastric balloon ruptures or deflates, or if the tube slips upward, the inflated esophageal balloon will migrate superiorly into the posterior oropharynx, completely obstructing the trachea and causing fatal asphyxiation. Scissors must be taped to the head of the bed at all times. In acute airway obstruction, the nurse immediately transects all lumens of the tube to deflate the balloons instantly and extracts the entire tube."
  },
  {
    id: "emerg_18",
    category: "Emergency Nursing",
    question: "A client who sustained deep partial- and full-thickness circumferential burns to the right lower leg reports excruciating, deep, throbbing pain that is refractory to IV fentanyl. The foot is pale and cold, and the dorsalis pedis pulse is detectable only by Doppler ultrasound. What urgent surgical procedure should the nurse anticipate?",
    answers: [
      "Emergent bedside escharotomy",
      "Surgical open fasciotomy of all four compartments",
      "Urgent needle aspiration of the subcutaneous tissues",
      "Immediate transfemoral amputation"
    ],
    correctAnswer: "Emergent bedside escharotomy",
    rationale: "Full-thickness circumferential burns produce a leathery, inelastic burn eschar. As post-burn interstitial edema accumulates beneath the rigid eschar, tissue compartment pressure rises, compressing underlying capillaries and neurovascular bundles, leading to tissue ischemia and necrosis (burn-induced compartment syndrome). An emergent escharotomy (incising the non-distensible eschar longitudinally) relieves tissue pressure and restores distal arterial perfusion."
  },
  {
    id: "emerg_19",
    category: "Emergency Nursing",
    question: "A client presenting with heat stroke has a core body temperature of 41.2°C (106.2°F), dry hot flushed skin, and delirium. While evaporative cooling measures (cool water misting and high-velocity fans) are initiated, the client begins shivering vigorously. Why must the nurse administer a prescribed medication (e.g., chlorpromazine or a benzodiazepine) to stop the shivering?",
    answers: [
      "Shivering significantly increases metabolic heat production and oxygen consumption, counteracting active cooling",
      "Shivering causes profound peripheral vasodilation that triggers catastrophic vascular collapse",
      "Shivering induces immediate cerebral edema and tentorial herniation",
      "Shivering accelerates renal clearance of endogenous antipyretics"
    ],
    correctAnswer: "Shivering significantly increases metabolic heat production and oxygen consumption, counteracting active cooling",
    rationale: "Shivering is a physiological homeostatic mechanism designed to generate heat through involuntary skeletal muscle contractions. In heat stroke, shivering dramatically increases metabolic heat generation, oxygen demand, and carbon dioxide production, actively counteracting cooling measures and driving core temperatures higher. Benzodiazepines or chlorpromazine suppress shivering and reduce psychomotor agitation."
  },
  {
    id: "emerg_20",
    category: "Emergency Nursing",
    question: "A client in the emergency department has an arterial line placed in the left radial artery. The transducer is calibrated and leveled. To which anatomical landmark should the air-fluid interface of the transducer be aligned to ensure accurate hemodynamic pressure readings?",
    answers: [
      "The phlebostatic axis (4th intercostal space at the mid-axillary line)",
      "The 2nd intercostal space at the midclavicular line",
      "The angle of Louis (sternal notch)",
      "The level of the client's cricoid cartilage"
    ],
    correctAnswer: "The phlebostatic axis (4th intercostal space at the mid-axillary line)",
    rationale: "The phlebostatic axis corresponds to the anatomical location of the right and left atria and the aortic root. It is located at the intersection of the fourth intercostal space and the mid-axillary line (midway between the anterior and posterior chest surfaces). If the transducer is positioned higher than the phlebostatic axis, recorded pressures will be falsely low; if placed lower, pressures will be falsely high."
  },
  {
    id: "emerg_21",
    category: "Emergency Nursing",
    question: "A client presenting after a near-drowning incident in cold fresh water is intubated. Initial arterial blood gases reveal severe hypoxemic respiratory failure and pulmonary edema. Which pulmonary complication typically develops 24 to 48 hours following submersion injury?",
    answers: [
      "Acute Respiratory Distress Syndrome (ARDS) secondary to surfactant washout and alveolar-capillary membrane disruption",
      "Massive pulmonary embolism from deep vein thrombosis",
      "Primary spontaneous tension pneumothorax",
      "Acute bronchopleural fistula formation"
    ],
    correctAnswer: "Acute Respiratory Distress Syndrome (ARDS) secondary to surfactant washout and alveolar-capillary membrane disruption",
    rationale: "Submersion injury results in aspiration of fluid into the lungs, washing out and denaturing pulmonary surfactant and causing alveolar collapse (atelectasis), severe ventilation-perfusion mismatch, and intrapulmonary shunting. The aspirated fluid and inflammatory response disrupt the alveolar-capillary membrane, leading to non-cardiogenic pulmonary edema and ARDS within 24 to 48 hours."
  },
  {
    id: "emerg_22",
    category: "Emergency Nursing",
    question: "A client with severe closed-head trauma exhibits signs of brainstem herniation: a blown (dilated and non-reactive) right pupil, decerebrate posturing, and Cushing's triad. Which set of vital signs represents classic Cushing's triad?",
    answers: [
      "Progressive systolic hypertension with widened pulse pressure, profound bradycardia, and irregular/Cheyne-Stokes respirations",
      "Severe hypotension, tachycardia, and rapid tachypnea",
      "Narrowed pulse pressure, tachycardia, and Kussmaul respirations",
      "Labile diastolic hypertension, rapid bounding pulse, and regular eupnea"
    ],
    correctAnswer: "Progressive systolic hypertension with widened pulse pressure, profound bradycardia, and irregular/Cheyne-Stokes respirations",
    rationale: "Cushing's triad is a late, ominous physiological response to severely elevated intracranial pressure and brainstem ischemia (compression of the medullary centers). It is defined by: 1) Increasing systolic blood pressure with a widened pulse pressure (sympathetic attempt to preserve cerebral perfusion), 2) Bradycardia (baroreceptor-mediated parasympathetic vagal reflex in response to severe hypertension), and 3) Irregular, agonal, or Cheyne-Stokes respirations."
  },
  {
    id: "emerg_23",
    category: "Emergency Nursing",
    question: "A client with suspected carbon monoxide poisoning is brought to the emergency department after a space heater malfunction. What is the definitive treatment to rapidly eliminate carbon monoxide from circulating hemoglobin?",
    answers: [
      "100% high-flow normobaric oxygen via a tight-fitting non-rebreather mask (or hyperbaric oxygen therapy)",
      "Aerosolized bronchodilators with 40% Venturi mask delivery",
      "Immediate intravenous infusion of methylene blue",
      "Intravenous administration of deferoxamine mesylate"
    ],
    correctAnswer: "100% high-flow normobaric oxygen via a tight-fitting non-rebreather mask (or hyperbaric oxygen therapy)",
    rationale: "The biological half-life of carboxyhemoglobin (COHb) on room air is approximately 4 to 5 hours (240–300 minutes). Delivering 100% high-flow oxygen reduces the half-life to approximately 60 to 90 minutes by competitively displacing carbon monoxide from hemoglobin binding sites. Hyperbaric oxygen (HBO) therapy at 2.5 to 3 atmospheres further reduces the half-life to approximately 20 to 30 minutes, indicated for pregnant clients, COHb >25%, loss of consciousness, or myocardial ischemia."
  },
  {
    id: "emerg_24",
    category: "Emergency Nursing",
    question: "A client who sustained an open femoral fracture in a motorcycle collision undergoes external fixation. Twelve hours later, the client complains of severe pain in the left calf that is completely disproportionate to the injury and unresponsive to IV morphine. The nurse notes tense swelling of the compartment and passive stretching of the toes elicits excruciating pain. What is the nurse's priority action?",
    answers: [
      "Immediately notify the orthopedic surgeon, keep the extremity at heart level, and prepare for emergent fasciotomy",
      "Apply tight elastic bandages and elevate the leg well above heart level",
      "Apply ice packs continuously to the calf and administer a muscle relaxant",
      "Loosen the external fixator pins with an orthopedic wrench"
    ],
    correctAnswer: "Immediately notify the orthopedic surgeon, keep the extremity at heart level, and prepare for emergent fasciotomy",
    rationale: "Pain out of proportion to exam and severe pain upon passive muscle stretch are the earliest and most sensitive indicators of acute compartment syndrome. The extremity must be maintained at heart level (elevating the limb above heart level lowers arterial perfusion pressure, worsening muscle ischemia; placing it in a dependent position increases edema). The surgeon must be notified immediately; emergent surgical fasciotomy is mandatory within 6 hours to prevent irreversible muscle necrosis and amputation."
  },
  {
    id: "emerg_25",
    category: "Emergency Nursing",
    question: "During cardiopulmonary resuscitation of an adult client with refractory ventricular fibrillation, the cardiac arrest team has delivered three shocks, administered 1 mg of epinephrine, and given 300 mg of amiodarone IV. The rhythm remains VF. According to ACLS guidelines, what is the recommended second dose of amiodarone?",
    answers: [
      "150 mg IV push",
      "300 mg IV push",
      "100 mg IV push",
      "450 mg IV push"
    ],
    correctAnswer: "150 mg IV push",
    rationale: "For shock-refractory VF or pulseless VT, amiodarone is administered as an initial IV/IO bolus of 300 mg (after the 3rd shock). If VF/pulseless VT persists, a single second dose of 150 mg IV/IO bolus is indicated (after the 4th shock). If lidocaine is chosen instead, the initial dose is 1 to 1.5 mg/kg, followed by 0.5 to 0.75 mg/kg."
  },
  {
    id: "emerg_26",
    category: "Emergency Nursing",
    question: "A client with acute massive upper gastrointestinal bleeding receives 8 units of uncrossed packed red blood cells (PRBCs) within 90 minutes. The nurse notes prolonged QT intervals on the telemetry monitor, carpal spasm when the blood pressure cuff is inflated (positive Trousseau sign), and muscle twitching. What electrolyte complication has occurred?",
    answers: [
      "Hypocalcemia secondary to citrate toxicity from massive blood transfusion",
      "Severe hypermagnesemia from red cell lysis",
      "Acute hypernatremia caused by PRBC preservation fluids",
      "Profound metabolic acidosis induced by hyperchloremia"
    ],
    correctAnswer: "Hypocalcemia secondary to citrate toxicity from massive blood transfusion",
    rationale: "Stored blood products contain sodium citrate as an anticoagulant. When large volumes of blood are infused rapidly (massive transfusion), the liver's capacity to metabolize citrate to bicarbonate is overwhelmed. Free circulating citrate binds (chelates) serum ionized calcium, precipitating acute hypocalcemia (tetany, carpopedal spasm, prolonged QT interval, and dysrhythmias). IV calcium gluconate or chloride must be administered during massive transfusions."
  },
  {
    id: "emerg_27",
    category: "Emergency Nursing",
    question: "A client presenting with acute aortic rupture arrives in the trauma resuscitation bay. The blood bank has not yet completed crossmatching. Which blood product must be immediately released for emergency transfusion to avoid acute hemolytic transfusion reactions?",
    answers: [
      "O-negative uncrossmatched packed red blood cells (or O-positive for adult males/females beyond childbearing potential)",
      "AB-positive packed red blood cells",
      "A-negative uncrossmatched whole blood",
      "B-positive uncrossmatched packed red blood cells"
    ],
    correctAnswer: "O-negative uncrossmatched packed red blood cells (or O-positive for adult males/females beyond childbearing potential)",
    rationale: "Type O red blood cells lack A and B surface antigens, making them the universal donor for red blood cells. O-negative uncrossmatched PRBCs are prioritized for females of childbearing potential to prevent Rh sensitization (anti-D alloimmunization, which causes hemolytic disease of the newborn in future pregnancies). O-positive uncrossmatched blood may be used in adult males or women past childbearing age when O-negative stocks are limited."
  },
  {
    id: "emerg_28",
    category: "Emergency Nursing",
    question: "A client presenting with high-energy blunt abdominal trauma following a rollover motor vehicle collision is hypotensive (BP 80/50 mmHg). The emergency physician performs a Focused Assessment with Sonography for Trauma (FAST) exam. Which anatomical spaces are evaluated for pathological hemoperitoneum during this ultrasound?",
    answers: [
      "Morison's pouch (hepatorenal space), splenorenal recess, retrovesical/pouch of Douglas (pelvis), and pericardial sac",
      "Bilateral pleural apexes and renal pelvises",
      "Superior mediastinum, carotid sheath, and femoral triangle",
      "Mesenteric root, retroperitoneal space, and pancreatic bed"
    ],
    correctAnswer: "Morison's pouch (hepatorenal space), splenorenal recess, retrovesical/pouch of Douglas (pelvis), and pericardial sac",
    rationale: "The standard FAST exam rapidly evaluates four anatomical acoustic windows to detect free intraperitoneal and pericardial fluid (blood): 1) Perihepatic space (Morison's pouch/hepatorenal recess), 2) Perisplenic space (splenorenal recess), 3) Pelvis (retrovesical space in men / pouch of Douglas in women), and 4) Pericardial space (subxiphoid or parasternal view). An Extended FAST (eFAST) adds bilateral anterior pleural spaces to assess for pneumothorax/hemothorax."
  },
  {
    id: "emerg_29",
    category: "Emergency Nursing",
    question: "A client who sustained a chemical burn from industrial hydrofluoric acid presents with severe, deep, progressive bone pain in the affected hand. Which topical and intravenous electrolyte antidote is specifically indicated to neutralize fluoride ions and prevent fatal cardiac arrhythmias?",
    answers: [
      "Calcium gluconate",
      "Sodium thiosulfate",
      "Magnesium sulfate",
      "Potassium chloride"
    ],
    correctAnswer: "Calcium gluconate",
    rationale: "Hydrofluoric acid (HF) is an extremely corrosive agent that penetrates deep into tissue. Dissociated fluoride ions bind with high affinity to calcium and magnesium ions, forming insoluble calcium fluoride salts. This precipitates severe systemic hypocalcemia, hypomagnesemia, intractable ventricular arrhythmias, and agonizing bone pain. Topical calcium gluconate gel (and local subcutaneous or intra-arterial infiltration) neutralizes free fluoride ions and halts tissue destruction."
  },
  {
    id: "emerg_30",
    category: "Emergency Nursing",
    question: "A client with acute spinal cord trauma has an indwelling urinary catheter and is placed on a cardiac monitor. What acute autonomic phenomenon, characterized by sudden severe paroxysmal hypertension, throbbing headache, profuse diaphoresis above the level of injury, and bradycardia, can occur in lesions at T6 or above?",
    answers: [
      "Autonomic dysreflexia (hyperreflexia)",
      "Spinal shock",
      "Brown-Séquard syndrome",
      "Central cord syndrome"
    ],
    correctAnswer: "Autonomic dysreflexia (hyperreflexia)",
    rationale: "Autonomic dysreflexia is an uninhibited, massive sympathetic discharge that occurs in spinal cord injuries at T6 or above, triggered by noxious visceral stimuli below the lesion (most commonly bladder distension, catheter kinking, or bowel impaction). Uncontrolled vasoconstriction below the injury produces dangerous hypertension; compensatory baroreceptor vagal output causes bradycardia and cutaneous flushing/diaphoresis strictly above the level of the injury."
  },
  {
    id: "emerg_31",
    category: "Emergency Nursing",
    question: "A client with an acute ischemic stroke arrives in the emergency department. The onset of symptoms was witnessed 2 hours ago. The initial non-contrast head CT is negative for intracranial hemorrhage. The client's blood pressure is 196/112 mmHg. What is the blood pressure threshold that must be achieved before administering IV alteplase (tPA)?",
    answers: [
      "Blood pressure must be lowered to <185/110 mmHg prior to thrombolytic infusion and maintained <180/105 mmHg during and for 24 hours after infusion",
      "Blood pressure must be lowered to <140/90 mmHg immediately",
      "Blood pressure must be kept >200/120 mmHg to maximize collateral penumbral perfusion",
      "Blood pressure requires no intervention because hypertension is purely compensatory"
    ],
    correctAnswer: "Blood pressure must be lowered to <185/110 mmHg prior to thrombolytic infusion and maintained <180/105 mmHg during and for 24 hours after infusion",
    rationale: "To minimize the catastrophic risk of symptomatic intracranial hemorrhage, clinical guidelines require that blood pressure be actively lowered to systolic <185 mmHg and diastolic <110 mmHg (using IV labetalol, nicardipine, or clevidipine) before starting IV thrombolytic therapy. Once tPA is initiated, BP must be kept strictly <180/105 mmHg for the next 24 hours."
  },
  {
    id: "emerg_32",
    category: "Emergency Nursing",
    question: "A client presenting with severe accidental hypothermia has a core temperature of 28.5°C (83.3°F) and is in ventricular fibrillation. What modification to standard ACLS resuscitation is required during severe hypothermia?",
    answers: [
      "Defibrillate once, initiate active internal core rewarming, and withhold or space IV resuscitation medications until core temperature rises >30°C to 32°C",
      "Deliver 5 rapid consecutive defibrillation shocks and administer triple doses of epinephrine",
      "Discontinue all chest compressions because hypothermic myocardium cannot tolerate mechanical stress",
      "Administer high-dose IV amiodarone boluses every 2 minutes regardless of core temperature"
    ],
    correctAnswer: "Defibrillate once, initiate active internal core rewarming, and withhold or space IV resuscitation medications until core temperature rises >30°C to 32°C",
    rationale: "Hypothermic myocardium is rigid, irritable, and relatively unresponsive to antiarrhythmics and pacing. Furthermore, hepatic and renal drug metabolism is drastically slowed, leading to toxic accumulation of IV medications if standard ACLS intervals are used. Guidelines state: attempt initial defibrillation, focus on high-quality CPR and active internal core rewarming (warm humidified O2, warm IV fluids, peritoneal/pleural lavage); withhold epinephrine until core temp exceeds 30°C, and double standard dosing intervals until >35°C."
  },
  {
    id: "emerg_33",
    category: "Emergency Nursing",
    question: "A client who sustained a penetrating knife wound to the left anterior neck within Zone II has expanding neck hematoma, stridor, and subcutaneous emphysema. What is the nurse's immediate priority concern?",
    answers: [
      "Rapid loss of airway patency requiring immediate endotracheal intubation before complete airway distortion occurs",
      "Severe vocal cord paralysis",
      "Placement of a nasogastric tube to decompress the pharynx",
      "Measurement of carotid artery pressures via direct needle puncture"
    ],
    correctAnswer: "Rapid loss of airway patency requiring immediate endotracheal intubation before complete airway distortion occurs",
    rationale: "Zone II penetrating neck injuries involve critical vascular (carotid, jugular) and aerodigestive (larynx, trachea, esophagus) structures. An expanding neck hematoma will rapidly compress and displace the larynx and trachea, causing sudden catastrophic loss of the airway. Securing the airway early under controlled conditions is the primary life-saving priority before total anatomical distortion precludes endotracheal intubation."
  },
  {
    id: "emerg_34",
    category: "Emergency Nursing",
    question: "A client presenting with severe sepsis has an initial serum lactate level of 4.8 mmol/L (normal: <2.0 mmol/L). What physiological process does this elevated biomarker indicate?",
    answers: [
      "Systemic cellular hypoperfusion and anaerobic metabolism secondary to inadequate microcirculatory tissue oxygen delivery",
      "Acute hepatic failure causing inability to synthesize lactic acid",
      "Excessive renal reabsorption of organic anions in the distal tubules",
      "Rapid conversion of circulating glucose into glycogen stores"
    ],
    correctAnswer: "Systemic cellular hypoperfusion and anaerobic metabolism secondary to inadequate microcirculatory tissue oxygen delivery",
    rationale: "In sepsis and septic shock, systemic microcirculatory dysfunction, distributive vasodilation, and endothelial injury impair tissue oxygen extraction. Cells shift from aerobic mitochondrial respiration to anaerobic glycolysis. Pyruvate is reduced to lactate, producing lactic acidosis. Serum lactate >2 mmol/L denotes significant cellular hypoperfusion; levels >4 mmol/L correlate with high mortality, triggering aggressive resuscitation protocols."
  },
  {
    id: "emerg_35",
    category: "Emergency Nursing",
    question: "A nurse is evaluating an adult client with suspected anaphylactic shock following a wasp sting. What is the standard first-line drug, dose, and route of administration recommended for immediate treatment?",
    answers: [
      "Epinephrine 0.3 to 0.5 mg of 1:1,000 (1 mg/mL) concentration administered intramuscularly into the anterolateral mid-thigh",
      "Diphenhydramine 50 mg IV push as monotherapy",
      "Epinephrine 1 mg of 1:10,000 concentration administered rapid IV push",
      "Methylprednisolone 125 mg IV bolus"
    ],
    correctAnswer: "Epinephrine 0.3 to 0.5 mg of 1:1,000 (1 mg/mL) concentration administered intramuscularly into the anterolateral mid-thigh",
    rationale: "Intramuscular epinephrine (0.3 to 0.5 mg of 1:1,000 concentration) injected into the anterolateral thigh (vastus lateralis) is the undisputed first-line treatment for anaphylaxis. It rapidly achieves higher, more consistent peak plasma concentrations than subcutaneous injection or deltoid administration. Antihistamines and corticosteroids are secondary adjuncts and must never delay prompt epinephrine administration."
  },
  {
    id: "emerg_36",
    category: "Emergency Nursing",
    question: "A client with an acute anterior wall myocardial infarction is undergoing emergency cardiac catheterization when the client suddenly loses consciousness. The monitor shows coarse ventricular tachycardia. The nurse confirms the absence of a carotid pulse. What is the immediate intervention?",
    answers: [
      "Initiate immediate unsynchronized defibrillation at 200 Joules (biphasic)",
      "Perform synchronized cardioversion at 50 Joules",
      "Administer IV push lidocaine 100 mg",
      "Administer IV push magnesium sulfate 2 grams over 10 minutes"
    ],
    correctAnswer: "Initiate immediate unsynchronized defibrillation at 200 Joules (biphasic)",
    rationale: "Pulseless Ventricular Tachycardia is managed identically to Ventricular Fibrillation under ACLS protocols: immediate, unsynchronized, high-energy defibrillation (200 J on biphasic defibrillators or 360 J on monophasic). Synchronized cardioversion is contraindicated when no pulse is present because the machine may fail to identify an R wave or may delay shock delivery during cardiac arrest."
  },
  {
    id: "emerg_37",
    category: "Emergency Nursing",
    question: "A client who sustained a high-speed frontal impact motor vehicle collision presents with extensive steering wheel contusions on the sternum. The nurse observes muffled heart sounds, hypotension (BP 82/50 mmHg), and prominent jugular venous distention. A 12-lead ECG reveals electrical alternans. How should the nurse interpret electrical alternans?",
    answers: [
      "Alternating beat-to-beat amplitude of the QRS complexes as the heart swings within a massive pericardial fluid accumulation",
      "Intermittent block in the left posterior fascicle of the Bundle of His",
      "Dynamic shifting of myocardial infarction vectors across ischemic zones",
      "Artifact created by diaphragmatic movement during hyperventilation"
    ],
    correctAnswer: "Alternating beat-to-beat amplitude of the QRS complexes as the heart swings within a massive pericardial fluid accumulation",
    rationale: "Electrical alternans is a pathognomonic ECG finding of massive pericardial effusion and cardiac tamponade. As the heart swings pendulously back and forth within the fluid-filled pericardial sac with each cardiac contraction, the physical distance between the heart and surface recording electrodes varies beat-to-beat, producing alternating heights and amplitudes of the QRS complexes."
  },
  {
    id: "emerg_38",
    category: "Emergency Nursing",
    question: "A client who was trapped in an enclosed industrial chemical tank fire is admitted. The arterial blood gas co-oximetry panel reveals an elevated methemoglobin level of 34% (normal: <1%). The client is cyanotic despite 100% oxygen and blood appears dark chocolate-brown. Which antidote is the treatment of choice?",
    answers: [
      "Methylene blue IV",
      "Hydroxocobalamin IV",
      "Deferoxamine IV",
      "Atropine sulfate IV"
    ],
    correctAnswer: "Methylene blue IV",
    rationale: "Methemoglobinemia occurs when the iron in hemoglobin is oxidized from the ferrous ($Fe^{2+}$) to the ferric ($Fe^{3+}$) state, rendering it incapable of binding oxygen and creating functional tissue hypoxia with refractory cyanosis and chocolate-brown blood. Methylene blue (1–2 mg/kg IV over 5 minutes) acts as an electron donor to NADPH-methemoglobin reductase, rapidly reducing ferric iron back to functioning ferrous hemoglobin."
  },
  {
    id: "emerg_39",
    category: "Emergency Nursing",
    question: "A client who suffered a major crush injury to both lower extremities after a structural collapse is in the emergency department. The serum potassium is 7.4 mEq/L and the ECG shows wide bizarre QRS complexes with absent P waves. Which intravenous medication should the nurse administer first to protect the myocardium from immediate asystole?",
    answers: [
      "Calcium chloride 10% (or Calcium gluconate 10%) IV push",
      "Regular insulin 10 units with 50 mL of 50% dextrose IV",
      "Sodium polystyrene sulfonate orally",
      "Furosemide 80 mg IV push"
    ],
    correctAnswer: "Calcium chloride 10% (or Calcium gluconate 10%) IV push",
    rationale: "In severe hyperkalemia with significant ECG changes (widened QRS, peaked T waves, sinusoidal pattern), the immediate priority is to stabilize the cardiac resting membrane potential to prevent fatal arrhythmias. IV calcium (calcium chloride or gluconate) directly antagonizes the cardiotoxic effects of hyperkalemia within 1 to 3 minutes without shifting serum potassium levels. Insulin with dextrose and other shift/eliminator agents follow immediately."
  },
  {
    id: "emerg_40",
    category: "Emergency Nursing",
    question: "A client with acute variceal bleeding is undergoing placement of a Sengstaken-Blakemore tube. What baseline pressure range must the nurse maintain in the esophageal balloon to achieve adequate hemostasis while preventing esophageal wall necrosis?",
    answers: [
      "20 to 45 mmHg",
      "60 to 80 mmHg",
      "5 to 10 mmHg",
      "90 to 110 mmHg"
    ],
    correctAnswer: "20 to 45 mmHg",
    rationale: "The esophageal balloon of a Sengstaken-Blakemore or Minnesota tube is inflated to a pressure of 20 to 45 mmHg (monitored via a manometer). Pressures <20 mmHg fail to tamponade high-pressure bleeding submucosal varices; pressures >45 mmHg exceed mucosal capillary perfusion pressure, causing rapid esophageal ischemia, mucosal sloughing, and rupture."
  },
  {
    id: "emerg_41",
    category: "Emergency Nursing",
    question: "During rapid sequence intubation (RSI) of an adult trauma client, the nurse prepares succinylcholine. Which clinical condition represents an absolute contraindication to the use of succinylcholine due to the risk of lethal cardiac arrest?",
    answers: [
      "Extensive full-thickness burns or major denervation/spinal injury sustained more than 24 to 48 hours ago",
      "Acute isolated nondisplaced clavicle fracture",
      "Mild uncomplicated alcohol intoxication",
      "Controlled systemic hypertension"
    ],
    correctAnswer: "Extensive full-thickness burns or major denervation/spinal injury sustained more than 24 to 48 hours ago",
    rationale: "Succinylcholine is a depolarizing neuromuscular blocker that causes transient release of potassium. In patients with extensive burns, major crush injuries, denervation syndromes, or severe sepsis sustained >24–48 hours prior, post-synaptic nicotinic acetylcholine receptors upregulate across the entire skeletal muscle membrane. Succinylcholine triggers massive, systemic potassium efflux, precipitating acute hyperkalemic cardiac arrest. Rocuronium is the safe non-depolarizing alternative."
  },
  {
    id: "emerg_42",
    category: "Emergency Nursing",
    question: "A client who sustained a close-range shotgun blast to the abdomen presents with a core body temperature of 34.2°C (93.6°F), arterial pH of 7.18, and international normalized ratio (INR) of 3.2. What dangerous clinical triad is this polytrauma patient experiencing?",
    answers: [
      "The lethal triad of trauma (hypothermia, metabolic acidosis, and coagulopathy)",
      "Virchow's triad of thrombosis",
      "Beck's triad of tamponade",
      "Charcot's triad of cholangitis"
    ],
    correctAnswer: "The lethal triad of trauma (hypothermia, metabolic acidosis, and coagulopathy)",
    rationale: "The lethal triad of trauma comprises: 1) Hypothermia (impairs clotting enzyme kinetics and platelet activation), 2) Acidosis (inhibits coagulation factor complex assembly), and 3) Coagulopathy (exacerbated by blood loss, consumption, and crystalloid hemodilution). These three components compound one another in a self-reinforcing downward spiral with high mortality, prompting immediate damage control surgery and resuscitation."
  },
  {
    id: "emerg_43",
    category: "Emergency Nursing",
    question: "A client with acute carbon monoxide poisoning is brought to the emergency department. Co-oximetry reveals a carboxyhemoglobin level of 42%. Which absolute clinical indication mandates emergent transfer to a hyperbaric oxygen (HBO) facility?",
    answers: [
      "Neurological impairment with loss of consciousness, carboxyhemoglobin level >25%, or pregnancy with fetal distress",
      "Mild headache with a carboxyhemoglobin level of 12%",
      "Presence of superficial skin soot on the hands",
      "Serum potassium level of 4.2 mEq/L"
    ],
    correctAnswer: "Neurological impairment with loss of consciousness, carboxyhemoglobin level >25%, or pregnancy with fetal distress",
    rationale: "Hyperbaric oxygen therapy (HBO) is indicated for severe carbon monoxide poisoning manifested by: COHb >25% (or >15% in pregnancy, because fetal hemoglobin binds CO with higher affinity), transient or prolonged loss of consciousness, ischemic ECG changes/myocardial ischemia, severe metabolic acidosis, or persistent neuropsychiatric abnormalities despite 100% normobaric oxygen."
  },
  {
    id: "emerg_44",
    category: "Emergency Nursing",
    question: "A client who sustained blunt chest trauma develops an acute rupture of the left hemidiaphragm. Which assessment finding should the nurse expect to auscultate over the left lower thoracic cavity?",
    answers: [
      "Gurgling bowel sounds in the left hemithorax with shifted heart sounds to the right",
      "Bilateral high-pitched inspiratory wheezing",
      "Pleural friction rub over the left apex",
      "Absence of abdominal borborygmi with clear lung sounds"
    ],
    correctAnswer: "Gurgling bowel sounds in the left hemithorax with shifted heart sounds to the right",
    rationale: "Blunt diaphragmatic rupture occurs predominantly on the left side (the liver buffers the right hemidiaphragm). High intra-abdominal pressures force abdominal viscera (stomach, small bowel, colon, spleen) upward through the diaphragmatic tear into the negative-pressure thoracic cavity. Auscultation over the lower hemithorax reveals bowel sounds, accompanied by compression atelectasis, dyspnea, and contralateral mediastinal shift."
  },
  {
    id: "emerg_45",
    category: "Emergency Nursing",
    question: "A client with septic shock is receiving an infusion of norepinephrine at 0.2 mcg/kg/min. Despite this, the mean arterial pressure remains 56 mmHg. According to Surviving Sepsis guidelines, which second-line vasopressor should be added to raise the MAP to target without escalating catecholamine adrenergic side effects?",
    answers: [
      "Vasopressin at a fixed dose of 0.03 units/min",
      "High-dose dopamine at 25 mcg/kg/min",
      "Epinephrine at 1.0 mcg/kg/min bolus",
      "Isoproterenol continuous infusion"
    ],
    correctAnswer: "Vasopressin at a fixed dose of 0.03 units/min",
    rationale: "Surviving Sepsis guidelines recommend adding vasopressin (at a fixed non-titrated dose of 0.03 units/min) as the second-line vasopressor when norepinephrine alone fails to achieve the target MAP >=65 mmHg. Vasopressin stimulates V1 vascular smooth muscle receptors via a non-adrenergic pathway, restoring vascular tone during relative endogenous vasopressin deficiency in shock while reducing norepinephrine dosage requirements."
  },
  {
    id: "emerg_46",
    category: "Emergency Nursing",
    question: "A client who sustained a traumatic pelvic ring fracture is admitted to the emergency department. The nurse notes blood at the external urethral meatus, scrotal ecchymosis, and a high-riding prostate on rectal exam. What is the nurse's priority action regarding bladder catheterization?",
    answers: [
      "Do not attempt transurethral catheterization; notify urology immediately for retrograde urethrography",
      "Insert a 16-French Foley catheter with copious water-soluble lubricant",
      "Insert a silicone coudé-tip catheter gently using continuous pressure",
      "Flush the urethra with 50 mL of sterile saline before catheter insertion"
    ],
    correctAnswer: "Do not attempt transurethral catheterization; notify urology immediately for retrograde urethrography",
    rationale: "Blood at the urethral meatus, perineal/scrotal hematoma, and a high-riding prostate are classic signs of urethral transection/disruption associated with pelvic fractures. Blind passage of a transurethral Foley catheter can convert a partial urethral tear into a complete transection, introduce severe pelvic hematoma sepsis, and create false passages. A retrograde urethrogram must be performed first, or a suprapubic catheter placed."
  },
  {
    id: "emerg_47",
    category: "Emergency Nursing",
    question: "A client with acute hyperthermia from MDMA (ecstasy) toxicity presents with agitation, hyperreflexia, clonus, diaphoresis, and a core body temperature of 40.8°C (105.4°F). Which class of medications is the primary agent to control agitation, reduce muscle hyperactivity, and lower core temperature?",
    answers: [
      "Intravenous benzodiazepines (e.g., lorazepam or diazepam)",
      "First-generation antipsychotics (e.g., haloperidol)",
      "High-dose acetaminophen IV",
      "Oral nonsteroidal anti-inflammatory drugs"
    ],
    correctAnswer: "Intravenous benzodiazepines (e.g., lorazepam or diazepam)",
    rationale: "Sympathomimetic and serotonergic toxicity from MDMA causes excessive psychomotor agitation and muscle hyperactivity, generating dangerous hyperthermia. Benzodiazepines are the first-line therapy to sedate the patient, blunt central sympathetic outflow, terminate muscular hyperactivity/seizures, and lower metabolic heat production. Antipsychotics like haloperidol are contraindicated because they lower seizure thresholds and impair thermoregulation."
  },
  {
    id: "emerg_48",
    category: "Emergency Nursing",
    question: "A client with acute ischemic stroke is receiving IV alteplase (tPA). Thirty minutes into the infusion, the client develops acute angioedema characterized by swelling of the tongue and lips. Which immediate sequence of actions should the nurse perform?",
    answers: [
      "Discontinue the tPA infusion immediately, assess and secure the airway, and administer IV methylprednisolone, diphenhydramine, and famotidine",
      "Slow the infusion rate by half and apply cold ice packs directly to the tongue",
      "Continue the infusion and administer oral cetirizine with sips of water",
      "Extubate the client immediately and place in the prone position"
    ],
    correctAnswer: "Discontinue the tPA infusion immediately, assess and secure the airway, and administer IV methylprednisolone, diphenhydramine, and famotidine",
    rationale: "Alteplase-induced orolingual angioedema occurs in 1% to 5% of patients (particularly those taking concomitant ACE inhibitors) due to activation of the kinin-kallikrein pathway and bradykinin generation. It can rapidly obstruct the upper airway. The nurse must immediately stop the tPA infusion, maintain airway vigilance (preparing for emergent fiberoptic intubation), and administer H1/H2 blockers and corticosteroids."
  },
  {
    id: "emerg_49",
    category: "Emergency Nursing",
    question: "A client in the ICU has a central venous access device. While the nurse is changing the IV tubing with the client seated upright, the client gasps and inhales deeply. The nurse hears a loud, churning 'mill-wheel' murmur over the precordium; the client becomes acutely dyspneic, cyanotic, and hypotensive. What position should the nurse place the client in immediately?",
    answers: [
      "Left lateral decubitus in Trendelenburg position (Durant's maneuver)",
      "High Fowler's position with legs elevated",
      "Right lateral decubitus with head elevated 45 degrees",
      "Prone position with neck hyperextended"
    ],
    correctAnswer: "Left lateral decubitus in Trendelenburg position (Durant's maneuver)",
    rationale: "The client has suffered a venous air embolism: negative intrathoracic pressure drew air through the open hub into the central venous circulation. The air bubble enters the right ventricle, creating an air lock that occludes the pulmonary outflow tract (churning 'mill-wheel' murmur, cardiovascular collapse). Durant's maneuver (left lateral decubitus with head down in Trendelenburg) traps the air bubble at the apex of the right ventricle, allowing blood to continue flowing beneath it into the pulmonary artery until the air can be aspirated or absorbed."
  },
  {
    id: "emerg_50",
    category: "Emergency Nursing",
    question: "A client who sustained an acute subarachnoid hemorrhage from a ruptured cerebral berry aneurysm has an external ventricular drain (EVD) placed. At what level should the nurse align the reference zero-point of the EVD pressure transducer?",
    answers: [
      "The external auditory meatus (tragus of the ear), corresponding to the Foramen of Monro",
      "The bridge of the nose between the medial canthi",
      "The 4th intercostal space at the mid-axillary line",
      "The top of the client's sagittal suture"
    ],
    correctAnswer: "The external auditory meatus (tragus of the ear), corresponding to the Foramen of Monro",
    rationale: "The transducer and collection chamber of an External Ventricular Drain (EVD) must be zero-referenced to the level of the Foramen of Monro, which corresponds externally to the external auditory meatus (or the tragus of the ear). If the chamber is leveled too low, excessive CSF drainage occurs, risking subdural hematoma and ventricular collapse; if leveled too high, inadequate CSF drains, causing dangerous intracranial hypertension."
  }
];