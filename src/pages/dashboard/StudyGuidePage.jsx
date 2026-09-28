// src/pages/dashboard/StudyGuidePage.jsx
import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  Printer, 
  Filter,
  Check
} from 'lucide-react';

const CLINICAL_FACTS_300 = [
  {
    id: 1,
    category: 'Anatomy & Physiology',
    tag: 'Cardiovascular',
    statement: 'The human heart contains 4 chambers: 2 superior receiving atria and 2 inferior pumping ventricles. The left ventricle has the thickest muscular wall to overcome systemic afterload.',
    highlight: 'Left Ventricle is thickest'
  },
  {
    id: 2,
    category: 'Anatomy & Physiology',
    tag: 'Cardiovascular',
    statement: 'The anatomical blood flow sequence across the four cardiac valves is: Tricuspid -> Pulmonic -> Mitral (Bicuspid) -> Aortic (Mnemonic: TPMA).',
    highlight: 'Valve Flow: TPMA'
  },
  {
    id: 3,
    category: 'Anatomy & Physiology',
    tag: 'Cardiovascular',
    statement: 'Normal adult resting cardiac output (CO) ranges from 4 to 8 Liters/minute (CO = Stroke Volume x Heart Rate).',
    highlight: '4 - 8 L/min'
  },
  {
    id: 4,
    category: 'Anatomy & Physiology',
    tag: 'Cardiovascular',
    statement: 'The intrinsic electrical conduction pathway: SA Node (60-100 bpm) -> AV Node (40-60 bpm) -> Bundle of His -> Bundle Branches -> Purkinje Fibers (20-40 bpm).',
    highlight: 'SA: 60-100 | AV: 40-60 | Purkinje: 20-40'
  },
  {
    id: 5,
    category: 'Anatomy & Physiology',
    tag: 'Respiratory',
    statement: 'The right lung contains 3 lobes (Superior, Middle, Inferior) and 2 fissures; the left lung contains 2 lobes and a cardiac notch.',
    highlight: 'Right: 3 lobes | Left: 2 lobes'
  },
  {
    id: 6,
    category: 'Anatomy & Physiology',
    tag: 'Renal',
    statement: 'The structural and functional unit of the human kidney is the Nephron (~1 to 1.25 million per kidney). Mandatory minimum adult urine output is 30 mL/hr.',
    highlight: 'Urine output >= 30 mL/hr'
  },
  {
    id: 7,
    category: 'Anatomy & Physiology',
    tag: 'Neurology',
    statement: 'Normal adult Intracranial Pressure (ICP) is 5 to 15 mmHg. Sustained values above 20 mmHg indicate acute intracranial hypertension.',
    highlight: '5 - 15 mmHg'
  },
  {
    id: 8,
    category: 'Anatomy & Physiology',
    tag: 'Neurology',
    statement: 'Cushing triad (indicative of late brainstem herniation/elevated ICP) consists of: Widened pulse pressure (severe systolic hypertension), Bradycardia, and Irregular respirations.',
    highlight: 'Wide Pulse Pressure + Bradycardia + Irregular Breathing'
  },
  {
    id: 9,
    category: 'Anatomy & Physiology',
    tag: 'Neurology',
    statement: 'Cranial Nerve X (Vagus Nerve) provides parasympathetic innervation to the heart, lungs, and GI tract; vagal stimulation slows heart rate.',
    highlight: 'CN X: Vagus Nerve'
  },
  {
    id: 10,
    category: 'Anatomy & Physiology',
    tag: 'Endocrine',
    statement: 'The Posterior Pituitary gland stores and releases Oxytocin and Antidiuretic Hormone (ADH / Vasopressin), both synthesized by the Hypothalamus.',
    highlight: 'ADH & Oxytocin'
  },
  {
    id: 11,
    category: 'Anatomy & Physiology',
    tag: 'Gastrointestinal',
    statement: 'Parietal cells in the gastric mucosa secrete Hydrochloric Acid (HCl) and Intrinsic Factor, which is mandatory for Vitamin B12 absorption in the terminal ileum.',
    highlight: 'Intrinsic Factor -> B12 Absorption'
  },
  {
    id: 12,
    category: 'Reproductive Health (RHN)',
    tag: 'Labor Stages',
    statement: 'Stage 1 of labor: Onset of true regular contractions to complete cervical dilation (10 cm). Divided into Latent (0-5 cm) and Active (6-10 cm).',
    highlight: 'Stage 1: 0 to 10 cm dilation'
  },
  {
    id: 13,
    category: 'Reproductive Health (RHN)',
    tag: 'Labor Stages',
    statement: 'Stage 2 of labor starts at full cervical dilation (10 cm) and ends with complete delivery of the newborn.',
    highlight: 'Stage 2: Delivery of infant'
  },
  {
    id: 14,
    category: 'Reproductive Health (RHN)',
    tag: 'Labor Stages',
    statement: 'Stage 3 of labor begins after infant delivery and ends with expulsion of the placenta and membranes (normal duration: 5-30 minutes).',
    highlight: 'Stage 3: Expulsion of placenta'
  },
  {
    id: 15,
    category: 'Reproductive Health (RHN)',
    tag: 'Labor Stages',
    statement: 'Stage 4 of labor covers the first 1 to 4 hours postpartum, focused on monitoring for uterine atony and maternal vitals.',
    highlight: 'Stage 4: Postpartum recovery'
  },
  {
    id: 16,
    category: 'Reproductive Health (RHN)',
    tag: 'Calculations',
    statement: 'Naegele rule to calculate Expected Date of Delivery (EDD): First day of Last Menstrual Period (LMP) minus 3 months, plus 7 days, plus 1 year.',
    highlight: 'LMP - 3 months + 7 days + 1 yr'
  },
  {
    id: 17,
    category: 'Reproductive Health (RHN)',
    tag: 'Obstetric Emergencies',
    statement: 'Umbilical Cord Prolapse: Primary action is to apply manual upward pressure against the presenting fetal part using a sterile gloved hand, and place mother in Knee-Chest position.',
    highlight: 'Manual elevation + Knee-Chest'
  },
  {
    id: 18,
    category: 'Reproductive Health (RHN)',
    tag: 'Bleeding Disorders',
    statement: 'Placenta Previa presents with painless bright red bleeding (never perform digital vaginal exams!). Abruptio Placentae presents with agonizing dark bleeding and a board-like rigid uterus.',
    highlight: 'Previa: Painless | Abruptio: Painful & Rigid'
  },
  {
    id: 19,
    category: 'Reproductive Health (RHN)',
    tag: 'PPH Thresholds',
    statement: 'Postpartum Hemorrhage (PPH) is defined as blood loss > 500 mL following vaginal delivery or > 1000 mL following Cesarean section.',
    highlight: '> 500 mL (Vaginal) | > 1000 mL (C-Section)'
  },
  {
    id: 20,
    category: 'Reproductive Health (RHN)',
    tag: 'Fetal Vitals',
    statement: 'Normal baseline fetal heart rate (FHR) is 110 to 160 beats per minute.',
    highlight: '110 - 160 bpm'
  },
  {
    id: 21,
    category: 'Reproductive Health (RHN)',
    tag: 'Anatomy',
    statement: 'The umbilical cord contains 3 vessels: 2 Umbilical Arteries (carry deoxygenated blood to placenta) and 1 Umbilical Vein (carries oxygenated blood to fetus).',
    highlight: '2 Arteries, 1 Vein (AVA)'
  },
  {
    id: 22,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Florence Nightingale formulated the Environmental Theory, stressing fresh air, clean water, effective drainage, cleanliness, and light.',
    highlight: 'Environmental Theory (Nightingale)'
  },
  {
    id: 23,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Virginia Henderson established the 14 Basic Human Needs model, defining the nurse role as assisting individuals toward independence.',
    highlight: '14 Basic Needs (Henderson)'
  },
  {
    id: 24,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Dorothea Orem developed the Self-Care Deficit Nursing Theory, consisting of Self-Care, Self-Care Deficit, and Nursing Systems.',
    highlight: 'Self-Care Deficit (Orem)'
  },
  {
    id: 25,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Sister Callista Roy developed the Adaptation Model, categorizing person-adaptation into Physiological, Self-Concept, Role Function, and Interdependence modes.',
    highlight: 'Adaptation Model (Roy)'
  },
  {
    id: 26,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Hildegard Peplau developed the Interpersonal Relations Theory, detailing 4 phases: Orientation, Identification, Exploitation, and Resolution.',
    highlight: 'Interpersonal Relations (Peplau)'
  },
  {
    id: 27,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Jean Watson created the Theory of Human Caring, centered around 10 Carative Factors / Caritas processes and mind-body-spirit healing.',
    highlight: 'Human Caring Theory (Watson)'
  },
  {
    id: 28,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Madeleine Leininger founded Transcultural Nursing using the Sunrise Model to provide culturally congruent, safe care.',
    highlight: 'Transcultural Nursing (Leininger)'
  },
  {
    id: 29,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Patricia Benner proposed the Novice to Expert model: Novice -> Advanced Beginner -> Competent -> Proficient -> Expert.',
    highlight: 'Novice to Expert (Benner)'
  },
  {
    id: 30,
    category: 'Medical-Surgical',
    tag: 'Acid-Base',
    statement: 'Arterial Blood Gas normal values: pH 7.35-7.45; PaCO2 35-45 mmHg; HCO3 22-26 mEq/L; PaO2 80-100 mmHg.',
    highlight: 'pH: 7.35-7.45 | PaCO2: 35-45 | HCO3: 22-26'
  },
  {
    id: 31,
    category: 'Medical-Surgical',
    tag: 'Electrolytes',
    statement: 'Normal adult serum Potassium is 3.5 to 5.0 mEq/L. Hyperkalemia (> 5.0) causes peaked T-waves, widened QRS, and ventricular arrest.',
    highlight: 'Potassium: 3.5 - 5.0 mEq/L'
  },
  {
    id: 32,
    category: 'Medical-Surgical',
    tag: 'Electrolytes',
    statement: 'Trousseau sign (carpopedal spasm with BP cuff) and Chvostek sign (facial twitching) are diagnostic physical indicators of Hypocalcemia (< 8.5 mg/dL).',
    highlight: 'Hypocalcemia: Trousseau & Chvostek'
  },
  {
    id: 33,
    category: 'Medical-Surgical',
    tag: 'Hematology',
    statement: 'Normal adult serum Sodium is 135 to 145 mEq/L; Total Calcium is 8.5 to 10.5 mg/dL; Magnesium is 1.5 to 2.5 mEq/L.',
    highlight: 'Na: 135-145 | Ca: 8.5-10.5 | Mg: 1.5-2.5'
  },
  {
    id: 34,
    category: 'Medical-Surgical',
    tag: 'Renal Labs',
    statement: 'Normal adult Blood Urea Nitrogen (BUN) is 7 to 20 mg/dL; Serum Creatinine is 0.6 to 1.2 mg/dL.',
    highlight: 'BUN: 7-20 | Creatinine: 0.6-1.2'
  },
  {
    id: 35,
    category: 'Medical-Surgical',
    tag: 'Drainage',
    statement: 'Continuous vigorous bubbling in a chest-tube water seal chamber indicates an air leak in the system or pleural space.',
    highlight: 'Continuous bubbling = Air leak'
  },
  {
    id: 36,
    category: 'Pharmacology',
    tag: 'Antidotes',
    statement: 'Heparin antidote is IV Protamine Sulfate (1 mg neutralizes ~100 units of Heparin).',
    highlight: 'Heparin -> Protamine Sulfate'
  },
  {
    id: 37,
    category: 'Pharmacology',
    tag: 'Antidotes',
    statement: 'Warfarin (Coumadin) antidote is Vitamin K1 (Phytonadione).',
    highlight: 'Warfarin -> Vitamin K'
  },
  {
    id: 38,
    category: 'Pharmacology',
    tag: 'Antidotes',
    statement: 'Opioid toxicity (Morphine, Fentanyl, Codeine) antidote is Naloxone (Narcan).',
    highlight: 'Opioids -> Naloxone'
  },
  {
    id: 39,
    category: 'Pharmacology',
    tag: 'Antidotes',
    statement: 'Acetaminophen (Paracetamol) hepatotoxicity antidote is N-Acetylcysteine (NAC / Mucomyst).',
    highlight: 'Paracetamol -> N-Acetylcysteine'
  },
  {
    id: 40,
    category: 'Pharmacology',
    tag: 'Antidotes',
    statement: 'Benzodiazepine (Diazepam, Lorazepam) overdose antidote is Flumazenil (Romazicon).',
    highlight: 'Benzodiazepines -> Flumazenil'
  },
  {
    id: 41,
    category: 'Pharmacology',
    tag: 'Antidotes',
    statement: 'Magnesium Sulfate toxicity antidote in eclampsia is IV Calcium Gluconate 10%.',
    highlight: 'Magnesium Sulfate -> Calcium Gluconate'
  },
  {
    id: 42,
    category: 'Pharmacology',
    tag: 'Therapeutic Window',
    statement: 'Therapeutic Digoxin serum window is 0.5 to 2.0 ng/mL. Always auscultate apical pulse for 60 seconds; hold dose if adult HR < 60 bpm.',
    highlight: 'Digoxin: 0.5-2.0 ng/mL | Hold HR < 60'
  },
  {
    id: 43,
    category: 'Pharmacology',
    tag: 'Therapeutic Window',
    statement: 'Therapeutic Lithium Carbonate window is 0.6 to 1.2 mEq/L (toxic > 1.5 mEq/L). Maintain normal dietary sodium and adequate hydration.',
    highlight: 'Lithium: 0.6-1.2 mEq/L'
  },
  {
    id: 44,
    category: 'Pharmacology',
    tag: 'High-Alert Rules',
    statement: 'Regular Insulin is the ONLY insulin formulation authorized for Intravenous (IV) push or continuous infusion.',
    highlight: 'Only Regular Insulin can be given IV'
  },
  {
    id: 45,
    category: 'Pharmacology',
    tag: 'High-Alert Rules',
    statement: 'Metformin must be withheld 48 hours before and 48 hours after procedures using IV iodinated contrast dye to protect renal function.',
    highlight: 'Hold Metformin 48 hrs before/after contrast'
  },
  {
    id: 46,
    category: 'Emergency & Critical Care',
    tag: 'START Triage',
    statement: 'START Disaster Triage colors: RED = Immediate (salvageable); YELLOW = Delayed (serious, stable); GREEN = Minor (walking wounded); BLACK = Deceased / Expectant.',
    highlight: 'Red: Immediate | Yellow: Delayed | Green: Minor'
  },
  {
    id: 47,
    category: 'Emergency & Critical Care',
    tag: 'Coma Scale',
    statement: 'Glasgow Coma Scale (GCS) evaluates Eyes (1-4), Verbal (1-5), and Motor (1-6). Scores range from 3 (deep coma) to 15 (normal). A score <= 8 mandates intubation.',
    highlight: 'GCS: 3 to 15 | <= 8 intubate'
  },
  {
    id: 48,
    category: 'Emergency & Critical Care',
    tag: 'Burns Formula',
    statement: 'Parkland Burn Formula: 4 mL x Weight in kg x %TBSA burned of Lactated Ringer solution. 50% given in the first 8 hours (from time of injury!), remaining 50% over the next 16 hours.',
    highlight: '4 mL x kg x %TBSA (50% in 1st 8 hrs)'
  },
  {
    id: 49,
    category: 'Emergency & Critical Care',
    tag: 'CPR Standards',
    statement: 'Adult CPR chest compression depth is 2 to 2.4 inches (5 to 6 cm) at a rate of 100 to 120 compressions/minute, allowing complete chest recoil.',
    highlight: '100-120/min | Depth: 2-2.4 inches'
  },
  {
    id: 50,
    category: 'Emergency & Critical Care',
    tag: 'Thoracic Crisis',
    statement: 'Tension Pneumothorax presentation: Unilateral absent breath sounds, respiratory distress, and tracheal deviation to the contralateral side. Treat with immediate needle decompression.',
    highlight: 'Immediate needle thoracostomy'
  },
  {
    id: 51,
    category: 'Pediatrics',
    tag: 'Cardiac Defects',
    statement: 'Tetralogy of Fallot consists of 4 defects: Pulmonary Stenosis, Right Ventricular Hypertrophy, Overriding Aorta, and VSD (Mnemonic: PROVe). Place in Knee-Chest position during Tet spells.',
    highlight: 'PROVe: PS, RVH, Overriding Aorta, VSD'
  },
  {
    id: 52,
    category: 'Pediatrics',
    tag: 'Anatomy',
    statement: 'The posterior fontanelle closes at 2 to 3 months of life; the anterior diamond fontanelle closes between 12 to 18 months.',
    highlight: 'Posterior: 2-3 mos | Anterior: 12-18 mos'
  },
  {
    id: 53,
    category: 'Pediatrics',
    tag: 'Growth Milestones',
    statement: 'An infant birth weight typically doubles by 5 to 6 months of age and triples by 12 months of age.',
    highlight: 'Doubles at 5-6 mos | Triples at 12 mos'
  },
  {
    id: 54,
    category: 'Pediatrics',
    tag: 'Emergencies',
    statement: 'In suspected Acute Epiglottitis (drooling, dysphagia, distress, stridor, tripod position), NEVER insert a tongue depressor or swab into the throat due to fatal laryngospasm risk.',
    highlight: 'Never insert tongue blade in Epiglottitis'
  },
  {
    id: 55,
    category: 'Pediatrics',
    tag: 'GI Obstruction',
    statement: 'Intussusception cardinal features: Sudden episodic cramping abdominal pain, palpable sausage-shaped right upper quadrant mass, and red currant-jelly stools.',
    highlight: 'Currant-jelly stools + Sausage mass'
  },
  {
    id: 56,
    category: 'Ethics & Fundamentals',
    tag: 'Bioethics',
    statement: 'Autonomy: Respecting patient self-determination. Beneficence: Doing good. Non-maleficence: Do no harm. Veracity: Truthfulness. Fidelity: Keeping promises and confidentiality.',
    highlight: 'Autonomy | Beneficence | Non-maleficence'
  },
  {
    id: 57,
    category: 'Ethics & Fundamentals',
    tag: 'Negligence',
    statement: 'The 4 statutory legal elements to prove Malpractice/Negligence: 1) Duty Owed, 2) Breach of Duty, 3) Causation (Proximate Cause), and 4) Demonstrable Damages/Injury.',
    highlight: 'Duty + Breach + Causation + Damages'
  },
  {
    id: 58,
    category: 'Ethics & Fundamentals',
    tag: 'Informed Consent',
    statement: 'The physician/surgeon is legally responsible for explaining procedure risks and benefits; the nurse acts solely as an official witness to the signature and competence.',
    highlight: 'Nurse is witness to signature only'
  },
  {
    id: 59,
    category: 'Ethics & Fundamentals',
    tag: 'Infection Control',
    statement: 'Alcohol hand rub is ineffective against Clostridium difficile (C. diff) bacterial spores; mechanical handwashing with soap and running water is mandatory.',
    highlight: 'Soap & water mandatory for C. diff'
  },
  {
    id: 60,
    category: 'Ethics & Fundamentals',
    tag: 'Wound Care',
    statement: 'Pressure Ulcer stages: Stage 1 = Non-blanchable erythema (intact skin); Stage 2 = Partial-thickness dermis; Stage 3 = Visible subcutaneous fat; Stage 4 = Exposed bone, tendon, or muscle.',
    highlight: 'Stage 1: Intact | Stage 4: Exposed bone'
  },
  {
    id: 61,
    category: 'Pharmacology',
    tag: 'Calculations',
    statement: 'Standard IV Drop Factor Formula: (Total Volume in mL × Drop Factor in gtts/mL) ÷ Time in Minutes = Drops per Minute (gtts/min). Microdrip tubing standard is always 60 gtts/mL.',
    highlight: '(mL × Drop Factor) ÷ Minutes'
  },
  {
    id: 62,
    category: 'Pharmacology',
    tag: 'Calculations',
    statement: 'Weight-based unit conversion: 1 kilogram (kg) equals exactly 2.2 pounds (lbs). 1 ounce (oz) equals 30 mL; 1 teaspoon (tsp) equals 5 mL; 1 tablespoon (tbsp) equals 15 mL.',
    highlight: '1 kg = 2.2 lbs | 1 oz = 30 mL'
  },
  {
    id: 63,
    category: 'Pharmacology',
    tag: 'Calculations',
    statement: 'Standard IV flow rate for Potassium Chloride: Never infuse via peripheral line at a rate exceeding 10 mEq/hr (or 20 mEq/hr via verified central venous line on an infusion pump).',
    highlight: 'Max peripheral IV KCl: 10 mEq/hr'
  },

  // --- INFECTIOUS DISEASES & IMMUNOLOGY ---
  {
    id: 64,
    category: 'Primary Health Care & Community',
    tag: 'Infectious Disease',
    statement: 'Mantoux Tuberculin Skin Test (PPD): Induration (not erythema) >= 15 mm is positive in healthy individuals; >= 10 mm is positive in healthcare workers/immigrants; >= 5 mm is positive in HIV or immunocompromised patients.',
    highlight: 'PPD: >= 15mm (general) | >= 5mm (HIV)'
  },
  {
    id: 65,
    category: 'Primary Health Care & Community',
    tag: 'Infectious Disease',
    statement: 'Rabies Post-Exposure Prophylaxis (PEP): Thorough immediate wound scrubbing with soap and running water for 15 minutes, followed by Rabies Vaccine on days 0, 3, 7, and 14 plus Rabies Immune Globulin (RIG).',
    highlight: '15 min soap wash + PEP vaccine'
  },
  {
    id: 66,
    category: 'Primary Health Care & Community',
    tag: 'Infectious Disease',
    statement: 'Cholera clinical hallmark: Profuse, painless watery diarrhea ("rice-water stools") leading to rapid hypovolemic shock within hours. Priority management is rapid Oral Rehydration Salts (ORS) or IV Ringer Lactate.',
    highlight: 'Rice-water stool -> Immediate ORS/LR'
  },
  {
    id: 67,
    category: 'Primary Health Care & Community',
    tag: 'Infectious Disease',
    statement: 'Measles (Rubeola) pathognomonic sign: Koplik spots (tiny white granular lesions with red halos on the buccal mucosa opposite the molars) appearing 1-2 days before the generalized maculopapular rash.',
    highlight: 'Koplik spots on buccal mucosa'
  },
  {
    id: 68,
    category: 'Primary Health Care & Community',
    tag: 'Infectious Disease',
    statement: 'Tetanus hallmark clinical spasms: Trismus ("lockjaw"), Risus Sardonicus (sardonic grin due to sustained facial spasm), and Opisthotonos (arching backward spasm of spine). Keep in a dark, quiet, low-stimulus room.',
    highlight: 'Trismus + Dark/quiet room'
  },

  // --- ANATOMY & PHYSIOLOGY EXPANSIONS ---
  {
    id: 69,
    category: 'Anatomy & Physiology',
    tag: 'Cardiovascular',
    statement: 'Mean Arterial Pressure (MAP) formula: MAP = (Systolic BP + 2(Diastolic BP)) / 3. A minimum MAP of 65 mmHg is mandatory to maintain vital organ and cerebral perfusion.',
    highlight: 'MAP = (SBP + 2DBP)/3 | Target >= 65'
  },
  {
    id: 70,
    category: 'Anatomy & Physiology',
    tag: 'Hematology',
    statement: 'Normal adult hematology values: Hemoglobin: Men 13.5-17.5 g/dL, Women 12.0-15.5 g/dL; Hematocrit: Men 41%-50%, Women 36%-48%; Platelets: 150,000-450,000 /mcL.',
    highlight: 'Platelets: 150k - 450k /mcL'
  },
  {
    id: 71,
    category: 'Anatomy & Physiology',
    tag: 'Hematology',
    statement: 'Normal White Blood Cell (WBC) count in adults is 4,500 to 11,000 /mcL. WBC > 12,000 indicates leukocytosis (infection/inflammation); < 4,000 indicates leukopenia (immunosuppression).',
    highlight: 'WBC: 4,500 - 11,000 /mcL'
  },
  {
    id: 72,
    category: 'Anatomy & Physiology',
    tag: 'Hematology',
    statement: 'Universal Donor blood type for packed red cells is O-Negative; Universal Recipient is AB-Positive. For fresh frozen plasma (FFP), AB is universal donor, O is universal recipient.',
    highlight: 'RBC Donor: O-Neg | Recipient: AB-Pos'
  },
  {
    id: 73,
    category: 'Anatomy & Physiology',
    tag: 'Endocrine',
    statement: 'Adrenal Cortex layers and secretagogues (Mnemonic: GFR - Salt, Sugar, Sex): Zona Glomerulosa = Mineralocorticoids (Aldosterone); Zona Fasciculata = Glucocorticoids (Cortisol); Zona Reticularis = Androgens.',
    highlight: 'GFR = Salt, Sugar, Sex'
  },
  {
    id: 74,
    category: 'Anatomy & Physiology',
    tag: 'Sensory',
    statement: 'Cranial Nerve II (Optic) is assessed via Snellen chart for visual acuity. Cranial Nerve VIII (Vestibulocochlear) governs hearing and balance (Weber, Rinne, and Romberg tests).',
    highlight: 'CN II: Vision | CN VIII: Hearing/Balance'
  },

  // --- REPRODUCTIVE HEALTH & MIDWIFERY (RHN) EXPANSIONS ---
  {
    id: 75,
    category: 'Reproductive Health (RHN)',
    tag: 'Fetal Monitoring',
    statement: 'Fetal Heart Rate Decelerations: Early = Head compression (benign/normal); Late = Uteroplacental insufficiency (requires oxygen, left-lateral positioning, stop oxytocin); Variable = Cord compression.',
    highlight: 'VEAL CHOP Mnemonic'
  },
  {
    id: 76,
    category: 'Reproductive Health (RHN)',
    tag: 'Maternal Assessment',
    statement: 'Fundal height landmarks: At 12 weeks, the fundus is palpable at the pubic symphysis; at 20-22 weeks, it reaches the umbilicus; at 36 weeks, it reaches the xiphoid process.',
    highlight: '12w: Pubic symphysis | 20w: Umbilicus'
  },
  {
    id: 77,
    category: 'Reproductive Health (RHN)',
    tag: 'Maternal Emergencies',
    statement: 'HELLP Syndrome in severe preeclampsia stands for: Hemolysis, Elevated Liver enzymes, and Low Platelets (< 100,000 /mcL). Manifests with RUQ/epigastric pain, nausea, and jaundice.',
    highlight: 'Hemolysis, Elevated Liver, Low Platelets'
  },
  {
    id: 78,
    category: 'Reproductive Health (RHN)',
    tag: 'Midwifery Care',
    statement: 'Rho(D) Immune Globulin (RhoGAM) is administered to Rh-Negative mothers with Rh-Positive fetuses at 28 weeks gestation and within 72 hours postpartum to prevent isoimmunization.',
    highlight: 'Give RhoGAM at 28w and within 72h post-delivery'
  },
  {
    id: 79,
    category: 'Reproductive Health (RHN)',
    tag: 'Newborn Reflexes',
    statement: 'Moro Reflex (startle response) disappears by 4 to 6 months of age. Babinski reflex (dorsiflexion of big toe with fanning) is normal in infants up to 12-24 months; abnormal in adults.',
    highlight: 'Moro: Fades 4-6 mos | Babinski: Up to 1-2 yrs'
  },
  {
    id: 80,
    category: 'Reproductive Health (RHN)',
    tag: 'Postpartum Sepsis',
    statement: 'Puerperal pyrexia is defined as a maternal oral temperature >= 38.0 C (100.4 F) on any 2 of the first 10 days postpartum, excluding the first 24 hours.',
    highlight: 'Temp >= 38.0 C on 2 of first 10 days'
  },

  // --- MEDICAL-SURGICAL & CLINICAL CRISES ---
  {
    id: 81,
    category: 'Medical-Surgical',
    tag: 'Cardiac Markers',
    statement: 'Cardiac Troponin I is the gold standard diagnostic biomarker for Myocardial Infarction: rises within 2-4 hours, peaks at 24 hours, and remains elevated for up to 10-14 days.',
    highlight: 'Troponin I: Gold standard for MI'
  },
  {
    id: 82,
    category: 'Medical-Surgical',
    tag: 'Endocrine Crises',
    statement: 'Addisonian Crisis (Acute Adrenal Insufficiency): Severe hypotension, hyponatremia, hyperkalemia, hypoglycemia, and vascular collapse. Primary intervention is IV Hydrocortisone and 0.9% Normal Saline.',
    highlight: 'Hypotension + High K + Low Na -> Hydrocortisone'
  },
  {
    id: 83,
    category: 'Medical-Surgical',
    tag: 'Endocrine Crises',
    statement: 'Thyroid Storm (Thyrotoxic Crisis): Extreme hyperthermia (> 38.5 C), severe tachycardia (> 140 bpm), agitation, delirium. Treat with Beta-blockers (Propranolol), PTU or Methimazole, and cooling blankets.',
    highlight: 'High Fever + Tachycardia -> Beta-blocker + PTU'
  },
  {
    id: 84,
    category: 'Medical-Surgical',
    tag: 'Neurology',
    statement: 'Autonomic Dysreflexia occurs in spinal cord injuries at or above T6: Massive paroxysmal hypertension, severe pounding headache, bradycardia, and diaphoresis above lesion level. First action: Elevate head of bed 90 degrees.',
    highlight: 'SCI >= T6: High BP + Headache -> Raise HOB 90'
  },
  {
    id: 85,
    category: 'Medical-Surgical',
    tag: 'Pulmonary',
    statement: 'Classic Virchow Triad for Deep Vein Thrombosis (DVT) and Pulmonary Embolism (PE): 1) Endothelial injury, 2) Venous stasis, 3) Hypercoagulability.',
    highlight: 'Virchow: Stasis, Injury, Hypercoagulability'
  },
  {
    id: 86,
    category: 'Medical-Surgical',
    tag: 'Renal',
    statement: 'Acute Kidney Injury (AKI) RIFLE diagnostic staging criteria: Risk, Injury, Failure, Loss of kidney function, and End-stage renal disease based on serum creatinine rise and urine output decline.',
    highlight: 'RIFLE Criteria'
  },

  // --- PSYCHIATRIC NURSING & MENTAL HEALTH ---
  {
    id: 87,
    category: 'Mental Health & Psychiatric',
    tag: 'Therapeutics',
    statement: 'Extrapyramidal Symptoms (EPS) from first-generation antipsychotics: Acute Dystonia (facial muscle spasms), Akathisia (motor restlessness), Pseudoparkinsonism (tremor/rigidity), and Tardive Dyskinesia (involuntary tongue/lip smacking).',
    highlight: 'EPS: Dystonia, Akathisia, Parkinsonism, TD'
  },
  {
    id: 88,
    category: 'Mental Health & Psychiatric',
    tag: 'Antidotes',
    statement: 'Acute Dystonic reactions secondary to neuroleptic agents are treated promptly with Intramuscular or IV Benztropine (Cogentin) or Diphenhydramine (Benadryl).',
    highlight: 'Acute Dystonia -> Benztropine / Diphenhydramine'
  },
  {
    id: 89,
    category: 'Mental Health & Psychiatric',
    tag: 'Therapeutics',
    statement: 'Monoamine Oxidase Inhibitors (MAOIs - Phenelzine, Tranylcypromine): Patients must avoid tyramine-rich foods (aged cheese, red wine, smoked meats, fava beans) to avoid fatal Hypertensive Crisis.',
    highlight: 'MAOIs + Tyramine = Hypertensive Crisis'
  },
  {
    id: 90,
    category: 'Mental Health & Psychiatric',
    tag: 'Assessment',
    statement: 'Delirium vs Dementia: Delirium is acute, fluctuating, reversible, and caused by systemic illness/medications. Dementia is chronic, progressive, irreversible global cognitive decline.',
    highlight: 'Delirium is acute/reversible; Dementia is progressive'
  },

  // --- MORE STATUTORY NURSING MODELS & ETHICS ---
  {
    id: 91,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Martha Rogers formulated the Science of Unitary Human Beings, defining humans and environmental fields as dynamic, irreducible, pan-dimensional energy fields.',
    highlight: 'Unitary Human Beings (Rogers)'
  },
  {
    id: 92,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Katharine Kolcaba established the Comfort Theory, specifying relief, ease, and transcendence across 4 contexts: physical, psychospiritual, sociocultural, and environmental.',
    highlight: 'Comfort Theory (Kolcaba)'
  },
  {
    id: 93,
    category: 'Nursing Models & Theories',
    tag: 'Theorists',
    statement: 'Imogene King developed the Theory of Goal Attainment within an Open Systems framework, highlighting purposeful nurse-client interactions, mutual goal setting, and goal achievement.',
    highlight: 'Goal Attainment (King)'
  },
  {
    id: 94,
    category: 'Ethics & Fundamentals',
    tag: 'Legal Mandates',
    statement: 'Assault is the intentional threat or attempt to inflict bodily harm that places a person in reasonable fear; Battery is the actual non-consensual physical touching or treatment of another person.',
    highlight: 'Assault = Threat | Battery = Physical touch'
  },
  {
    id: 95,
    category: 'Ethics & Fundamentals',
    tag: 'Legal Mandates',
    statement: 'False Imprisonment occurs when a competent patient is chemically or physically restrained against their will without medical justification or detained after requesting Discharge Against Medical Advice (DAMA).',
    highlight: 'Detaining competent DAMA patient = False Imprisonment'
  },

  // --- CRITICAL CARE & FLUID ELECTROLYTES ---
  {
    id: 96,
    category: 'Emergency & Critical Care',
    tag: 'Electrolytes',
    statement: 'Hypokalemia (< 3.5 mEq/L) ECG changes: Flattened or inverted T-waves, ST-segment depression, and presence of prominent U-waves.',
    highlight: 'Hypokalemia = Flat T-wave + Prominent U-wave'
  },
  {
    id: 97,
    category: 'Emergency & Critical Care',
    tag: 'Fluid Therapy',
    statement: 'Isotonic IV Fluids (0.9% Normal Saline, Lactated Ringer) expand extracellular fluid volume without shifting fluid across cell membranes; useful in resuscitation and hemorrhage.',
    highlight: '0.9% NS & LR = Isotonic volume expanders'
  },
  {
    id: 98,
    category: 'Emergency & Critical Care',
    tag: 'Fluid Therapy',
    statement: 'Hypertonic IV solutions (3% NaCl, D10W, D5 0.9% NS) draw water out of intracellular space into vascular volume. Never infuse 3% Saline rapidly due to risk of central pontine myelinolysis.',
    highlight: 'Hypertonic = Pulls fluid into vessels'
  },
  {
    id: 99,
    category: 'Emergency & Critical Care',
    tag: 'Arterial Line',
    statement: 'Allen Test must be performed prior to radial artery cannulation or ABG puncture to confirm adequate ulnar collateral circulation (hand should flush pink within 5-10 seconds).',
    highlight: 'Allen Test confirms ulnar collateral circulation'
  },
  {
    id: 100,
    category: 'Emergency & Critical Care',
    tag: 'Resuscitation',
    statement: 'Defibrillation vs Cardioversion: Defibrillation is unsynchronized delivery of shock for pulseless VT and VF. Synchronized Cardioversion delivers shock timed with the R-wave for unstable tachyarrhythmias (SVT, AFib).',
    highlight: 'Defib = Pulseless VT/VF | Cardioversion = Synced on R-wave'
  },
  // --- MEDICAL-SURGICAL & ONCOLOGY BENCHMARKS ---
  {
    id: 101,
    category: 'Medical-Surgical',
    tag: 'Oncology',
    statement: 'Tumor Lysis Syndrome (TLS) clinical triad after chemotherapy: Hyperkalemia, Hyperphosphatemia, Hyperuricemia, and secondary Hypocalcemia. Pre-treat with IV hydration and Allopurinol or Rasburicase.',
    highlight: 'High K+, High Phos, High Uric Acid, Low Ca2+'
  },
  {
    id: 102,
    category: 'Medical-Surgical',
    tag: 'Oncology',
    statement: 'Superior Vena Cava (SVC) Syndrome presents with facial and periorbital edema, distended neck and chest veins (collateral circulation), dyspnea, and erythema of the upper body. It is an oncologic emergency.',
    highlight: 'Facial/Periorbital edema + Distended neck veins'
  },
  {
    id: 103,
    category: 'Medical-Surgical',
    tag: 'Gastrointestinal',
    statement: 'Acute Pancreatitis hallmarks: Severe epigastric pain radiating directly to the back, relieved by sitting upright or leaning forward. Elevated serum Lipase and Amylase (Lipase is more specific and sensitive).',
    highlight: 'Pain radiates to back | Serum Lipase is diagnostic'
  },
  {
    id: 104,
    category: 'Medical-Surgical',
    tag: 'Gastrointestinal',
    statement: 'Cullen sign (periumbilical ecchymosis) and Grey Turner sign (flank ecchymosis) indicate retroperitoneal hemorrhage secondary to severe necrotizing acute pancreatitis.',
    highlight: 'Cullen: Umbilicus | Grey Turner: Flank'
  },
  {
    id: 105,
    category: 'Medical-Surgical',
    tag: 'Gastrointestinal',
    statement: 'Hepatic Encephalopathy is caused by elevated serum ammonia levels crossing the blood-brain barrier. Hallmark physical sign is Asterixis ("liver flap" or coarse flapping tremors of hands upon dorsiflexion). Managed with Lactulose.',
    highlight: 'High Ammonia + Asterixis -> Lactulose'
  },
  {
    id: 106,
    category: 'Medical-Surgical',
    tag: 'Gastrointestinal',
    statement: 'Lactulose therapeutic titration goal in hepatic encephalopathy: Administer to achieve 2 to 3 soft bowel movements per day to trap and expel ammonia as ammonium (NH4+) in the stool.',
    highlight: 'Target: 2 to 3 soft stools/day'
  },
  {
    id: 107,
    category: 'Medical-Surgical',
    tag: 'Cardiovascular',
    statement: 'Left-sided Heart Failure presents primarily with pulmonary congestion: Dyspnea, orthopnea, paroxysmal nocturnal dyspnea (PND), bilateral crackles/wheezes, and pink frothy sputum.',
    highlight: 'Left = Lungs (Dyspnea, Crackles, Frothy sputum)'
  },
  {
    id: 108,
    category: 'Medical-Surgical',
    tag: 'Cardiovascular',
    statement: 'Right-sided Heart Failure presents with systemic venous congestion: Jugular venous distension (JVD), hepatomegaly, splenomegaly, ascites, and dependent peripheral pitting edema.',
    highlight: 'Right = Rest of Body (JVD, Edema, Ascites)'
  },
  {
    id: 109,
    category: 'Medical-Surgical',
    tag: 'Cardiovascular',
    statement: 'Beck Triad for Cardiac Tamponade: Hypotension with narrowed pulse pressure, Muffled or distant heart sounds, and Jugular Venous Distension (JVD). Treat with immediate pericardiocentesis.',
    highlight: 'Beck: Low BP + Muffled Sounds + JVD'
  },
  {
    id: 110,
    category: 'Medical-Surgical',
    tag: 'Neurology',
    statement: 'Myasthenia Gravis vs Cholinergic Crisis: Tensilon (Edrophonium) test improves muscle strength in Myasthenia Crisis (due to insufficient acetylcholine), but worsens symptoms in Cholinergic Crisis (antidote is Atropine).',
    highlight: 'Tensilon improves Myasthenia, worsens Cholinergic'
  },
  {
    id: 111,
    category: 'Medical-Surgical',
    tag: 'Neurology',
    statement: 'Guillain-Barré Syndrome (GBS) cardinal presentation: Acute, symmetrical, ascending muscle weakness and paresthesias starting in lower extremities and progressing upward toward the diaphragm. Monitor respiratory capacity closely.',
    highlight: 'Ascending paralysis -> Monitor FVC / Respiration'
  },
  {
    id: 112,
    category: 'Medical-Surgical',
    tag: 'Renal',
    statement: 'Renal Calculi (Nephrolithiasis): Primary clinical manifestation is sudden, severe, spasmodic flank pain radiating down to the groin/genitals (renal colic). All urine must be strained to capture stone fragments.',
    highlight: 'Flank pain to groin + Mandatory urine straining'
  },
  {
    id: 113,
    category: 'Medical-Surgical',
    tag: 'Respiratory',
    statement: 'Chronic Obstructive Pulmonary Disease (COPD) oxygen safety: Avoid delivering excessively high concentrations of FiO2; titrate to target SpO2 88% to 92% to avoid depressing hypoxic ventilatory drive.',
    highlight: 'Target COPD SpO2: 88% – 92%'
  },
  {
    id: 114,
    category: 'Medical-Surgical',
    tag: 'Endocrine',
    statement: 'Syndrome of Inappropriate Antidiuretic Hormone (SIADH): Excessive ADH causes water intoxication, severe dilutional hyponatremia (< 120 mEq/L), high urine specific gravity (> 1.030), and fluid retention without edema.',
    highlight: 'SIADH: Low serum Na+ (< 120) + High urine concentration'
  },
  {
    id: 115,
    category: 'Medical-Surgical',
    tag: 'Endocrine',
    statement: 'Diabetes Insipidus (DI): Insufficient ADH secretion or renal resistance results in massive dilute polyuria (up to 20 L/day), low urine specific gravity (< 1.005), and severe hypernatremia with thirst. Managed with Desmopressin (DDAVP).',
    highlight: 'DI: High volume dilute urine + Specific gravity < 1.005'
  },

  // --- REPRODUCTIVE HEALTH & MIDWIFERY (RHN) EXPANSIONS ---
  {
    id: 116,
    category: 'Reproductive Health (RHN)',
    tag: 'Gestational Diabetes',
    statement: 'Oral Glucose Tolerance Test (OGTT) for Gestational Diabetes Screening: Administered between 24 and 28 weeks gestation. A 1-hour 50g glucose screen value >= 140 mg/dL mandates a full diagnostic 3-hour 100g test.',
    highlight: 'Screen at 24–28 weeks | Threshold >= 140 mg/dL'
  },
  {
    id: 117,
    category: 'Reproductive Health (RHN)',
    tag: 'Obstetric Anatomy',
    statement: 'Pelvic types in midwifery: Gynecoid (ideal round female pelvis, most favorable for vaginal birth), Android (heart-shaped, male-type, high arrest rate), Anthropoid (oval, favorable for OP deliveries), and Platypelloid (flat, poor prognosis).',
    highlight: 'Gynecoid = Most favorable for vaginal birth'
  },
  {
    id: 118,
    category: 'Reproductive Health (RHN)',
    tag: 'Newborn Care',
    statement: 'Vitamin K (Phytonadione) is administered to all newborns (0.5 to 1 mg IM into vastus lateralis) within 1 to 2 hours of birth because the sterile neonatal gut lacks flora to synthesize clotting factors II, VII, IX, and X.',
    highlight: 'Vitamin K IM in Vastus Lateralis prevents HDN'
  },
  {
    id: 119,
    category: 'Reproductive Health (RHN)',
    tag: 'Newborn Care',
    statement: 'Erythromycin 0.5% ophthalmic ointment is instilled into both eyes of every neonate within 1 hour of delivery to prevent Ophthalmia Neonatorum caused by maternal Neisseria gonorrhoeae and Chlamydia trachomatis.',
    highlight: 'Erythromycin ointment prevents Ophthalmia Neonatorum'
  },
  {
    id: 120,
    category: 'Reproductive Health (RHN)',
    tag: 'Labor Monitoring',
    statement: 'Tocolytic agents used to arrest preterm labor (< 37 weeks): Terbutaline (Beta-2 agonist; hold if maternal pulse > 120 bpm), Nifedipine (calcium channel blocker), and Indomethacin (NSAID; causes premature ductus closure if > 48h).',
    highlight: 'Terbutaline: Hold for maternal HR > 120 bpm'
  },
  {
    id: 121,
    category: 'Reproductive Health (RHN)',
    tag: 'Labor Monitoring',
    statement: 'Betamethasone (12 mg IM, 2 doses 24 hours apart) or Dexamethasone is administered to mothers threatening preterm birth between 24 and 34 weeks gestation to accelerate fetal pulmonary surfactant maturation.',
    highlight: 'Betamethasone: 2 doses 24h apart accelerates surfactant'
  },
  {
    id: 122,
    category: 'Reproductive Health (RHN)',
    tag: 'Postpartum Sepsis',
    statement: 'Mastitis: Unilateral breast inflammation characterized by a wedge-shaped, hot, tender, erythematous area with fever and flu-like symptoms. Instruct mother to CONTINUE frequent breastfeeding or pumping to empty the affected breast.',
    highlight: 'Mastitis: Continue frequent breastfeeding/pumping'
  },
  {
    id: 123,
    category: 'Reproductive Health (RHN)',
    tag: 'Gynecological Disorders',
    statement: 'Ectopic Pregnancy triad: Unilateral lower quadrant pelvic pain, amenorrhea (delayed menses), and abnormal vaginal spotting. Shoulder tip pain (Kehr sign) indicates intra-abdominal rupture and diaphragmatic blood irritation.',
    highlight: 'Pelvic pain + Amenorrhea + Kehr sign (Shoulder pain)'
  },
  {
    id: 124,
    category: 'Reproductive Health (RHN)',
    tag: 'Gynecological Disorders',
    statement: 'Cervical Cancer Screening: Papanicolaou (Pap) smears start at age 21 regardless of sexual onset. Human Papillomavirus (HPV) strains 16 and 18 cause over 70% of high-grade cervical dysplasia and cervical malignancies.',
    highlight: 'Pap smear starts at 21 | HPV 16 & 18 are oncogenic'
  },

  // --- PEDIATRIC NURSING CONSTANTS ---
  {
    id: 125,
    category: 'Pediatrics',
    tag: 'Infectious Disease',
    statement: 'Kawasaki Disease (Mucocutaneous Lymph Node Syndrome) diagnostic criteria (Warm CREAM): High fever lasting >= 5 days, plus Conjunctivitis, Rash, Erythema/swelling of hands/feet, Adenopathy (cervical), and Mucosal changes (Strawberry tongue).',
    highlight: 'Fever >= 5 days + Strawberry tongue + IVIG & Aspirin'
  },
  {
    id: 126,
    category: 'Pediatrics',
    tag: 'Medication Safety',
    statement: 'Aspirin (Acetylsalicylic Acid) is contraindicated in pediatric viral infections (influenza, varicella) due to the risk of Reye Syndrome (acute encephalopathy and fatty liver failure). Exception: Kawasaki Disease.',
    highlight: 'Avoid Aspirin in children to prevent Reye Syndrome'
  },
  {
    id: 127,
    category: 'Pediatrics',
    tag: 'Respiratory',
    statement: 'Croup (Laryngotracheobronchitis): Parainfluenza viral etiology characterized by inspiratory stridor, hoarseness, and a distinctive "barking seal" cough. Lateral neck X-ray demonstrates the pathognomonic "Steeple Sign" (subglottic tracheal narrowing).',
    highlight: 'Barking cough + Steeple Sign on X-ray'
  },
  {
    id: 128,
    category: 'Pediatrics',
    tag: 'Musculoskeletal',
    statement: 'Developmental Dysplasia of the Hip (DDH) physical assessment in infants: Asymmetrical gluteal and thigh skin folds, positive Ortolani test (palpable "clunk" on abduction), and positive Barlow test (dislocation on adduction). Managed with Pavlik Harness.',
    highlight: 'Ortolani & Barlow tests + Pavlik Harness'
  },
  {
    id: 129,
    category: 'Pediatrics',
    tag: 'Genitourinary',
    statement: 'Nephrotic Syndrome classic tetrad in children: Massive proteinuria (> 3.5 g/day or 3+ on dipstick), Severe hypoalbuminemia, Generalized edema (anasarca and periorbital edema), and Hyperlipidemia. Predominantly treated with Corticosteroids.',
    highlight: 'Proteinuria + Hypoalbuminemia + Edema + High Lipids'
  },
  {
    id: 130,
    category: 'Pediatrics',
    tag: 'Genitourinary',
    statement: 'Acute Post-Streptococcal Glomerulonephritis (APSGN): Develops 1 to 2 weeks after Group A Beta-Hemolytic Streptococcal pharyngitis/skin infection. Presents with gross hematuria (smoky, dark, "tea-colored" or "cola-colored" urine), periorbital edema, and hypertension.',
    highlight: 'Cola-colored urine + Periorbital edema after strep'
  },
  {
    id: 131,
    category: 'Pediatrics',
    tag: 'Growth Milestones',
    statement: 'Pediatric motor development milestones: Head control achieved by 3-4 months; rolls back-to-front by 5-6 months; sits unsupported by 6-8 months; crawls by 9 months; walks independently by 12-15 months.',
    highlight: 'Head control: 3-4m | Sits: 6-8m | Walks: 12-15m'
  },

  // --- PHARMACOLOGY & SAFE ADMINISTRATION ---
  {
    id: 132,
    category: 'Pharmacology',
    tag: 'Cardiovascular',
    statement: 'Adenosine administration: Drug of choice for Paroxysmal Supraventricular Tachycardia (PSVT). Must be administered via rapid IV push over 1 to 2 seconds through the most proximal IV port, followed immediately by a rapid 20 mL Normal Saline flush.',
    highlight: 'Rapid IV push over 1-2 sec + 20 mL rapid flush'
  },
  {
    id: 133,
    category: 'Pharmacology',
    tag: 'Cardiovascular',
    statement: 'Sublingual Nitroglycerin administration for acute angina: Take 1 tablet sublingually every 5 minutes for up to 3 doses. If chest pain is unrelieved or worsening after the first dose, activate emergency medical services (call 112/911) immediately.',
    highlight: '1 tab q5min max 3 doses; call EMS if unrelieved'
  },
  {
    id: 134,
    category: 'Pharmacology',
    tag: 'Cardiovascular',
    statement: 'Phosphodiesterase-5 (PDE-5) inhibitors (Sildenafil, Tadalafil) are strictly contraindicated in patients taking Nitrates (Nitroglycerin, Isosorbide) due to the risk of refractory, life-threatening hypotension and circulatory collapse.',
    highlight: 'Nitrates + Sildenafil = Lethal Hypotension'
  },
  {
    id: 135,
    category: 'Pharmacology',
    tag: 'Anticoagulation',
    statement: 'Warfarin (Coumadin) therapeutic laboratory monitoring: Prothrombin Time (PT) and International Normalized Ratio (INR). Target INR for atrial fibrillation and DVT is 2.0 to 3.0; target for mechanical prosthetic heart valves is 2.5 to 3.5.',
    highlight: 'Target INR: 2.0–3.0 (DVT/AFib) | 2.5–3.5 (Mechanical Valve)'
  },
  {
    id: 136,
    category: 'Pharmacology',
    tag: 'Anticoagulation',
    statement: 'Heparin therapeutic laboratory monitoring: Activated Partial Thromboplastin Time (aPTT). Normal control is 25 to 35 seconds; therapeutic anticoagulation goal is 1.5 to 2.5 times baseline control (approx. 45 to 75 seconds).',
    highlight: 'Heparin monitors aPTT | Therapeutic: 1.5–2.5x normal'
  },
  {
    id: 137,
    category: 'Pharmacology',
    tag: 'Antibiotics',
    statement: 'Aminoglycosides (Gentamicin, Tobramycin, Amikacin): Major toxicities are Ototoxicity (tinnitus, hearing loss, vertigo; often irreversible) and Nephrotoxicity (monitor BUN and Serum Creatinine). Peak and trough blood levels must be measured.',
    highlight: 'Gentamicin: Ototoxic (hearing loss) & Nephrotoxic'
  },
  {
    id: 138,
    category: 'Pharmacology',
    tag: 'Antibiotics',
    statement: 'Tetracyclines (Doxycycline): Strictly contraindicated in children under 8 years of age and pregnant women due to permanent tooth discoloration (yellow-brown staining) and bone growth retardation. Causes severe photosensitivity.',
    highlight: 'Avoid in age < 8 & pregnancy (tooth discoloration)'
  },
  {
    id: 139,
    category: 'Pharmacology',
    tag: 'Antibiotics',
    statement: 'Fluoroquinolones (Ciprofloxacin, Levofloxacin): Black box warning for severe Tendinitis and Tendon Rupture (most commonly the Achilles tendon). Discontinue immediately if patient reports new heel or tendon pain/swelling.',
    highlight: 'Ciprofloxacin: Achilles tendon rupture warning'
  },
  {
    id: 140,
    category: 'Pharmacology',
    tag: 'Respiratory',
    statement: 'Inhaled Corticosteroids (Fluticasone, Budesonide): Instruct patient to rinse mouth thoroughly with water and spit it out after every inhalation to prevent Oral Candidiasis (thrush) and dysphonia.',
    highlight: 'Rinse and spit after inhaled steroids to prevent thrush'
  },

  // --- PRIMARY HEALTH CARE & INFECTION CONTROL ---
  {
    id: 141,
    category: 'Primary Health Care & Community',
    tag: 'Cold Chain',
    statement: 'Vaccine storage shelf placement: Measles, MMR, and Oral Polio Vaccine (OPV) are freeze-stable and stored on the top/freezer shelves. DTaP, Pentavalent, Hep B, PCV, and Tetanus are freeze-sensitive and stored on middle shelves.',
    highlight: 'OPV/Measles can freeze; Pentavalent/Hep B must NEVER freeze'
  },
  {
    id: 142,
    category: 'Primary Health Care & Community',
    tag: 'Cold Chain',
    statement: 'The Shake Test is an empirical protocol performed on suspected freeze-damaged adsorbed vaccines (Pentavalent, Tetanus, Hep B). If the sediment settles faster than an unfrozen control vial, the vaccine has been frozen, is damaged, and must be discarded.',
    highlight: 'Shake Test confirms freeze-damaged vaccines'
  },
  {
    id: 143,
    category: 'Primary Health Care & Community',
    tag: 'Infection Control',
    statement: 'Contact Precautions (MRSA, VRE, C. difficile, Scabies, Norovirus): Private room (or cohort), gloves and gown donned upon room entry and doffed before exit. Dedicated disposable patient-care equipment (stethoscope, BP cuff).',
    highlight: 'Contact: Gown + Gloves + Dedicated equipment'
  },
  {
    id: 144,
    category: 'Primary Health Care & Community',
    tag: 'Infection Control',
    statement: 'Droplet Precautions (Meningococcal meningitis, Pertussis, Influenza, Mumps, Rubella): Private room, surgical mask worn by staff when within 3 to 6 feet of the patient. The patient must wear a surgical mask during transport.',
    highlight: 'Droplet: Surgical mask within 3–6 feet'
  },
  {
    id: 145,
    category: 'Primary Health Care & Community',
    tag: 'Epidemiology',
    statement: 'Levels of Disease Occurrence: Endemic (constant presence of disease within a specific geographic area); Epidemic (sudden excess incidence of cases above baseline); Pandemic (epidemic that has spread across multiple continents/worldwide).',
    highlight: 'Endemic (normal baseline) vs Pandemic (worldwide)'
  },
  {
    id: 146,
    category: 'Primary Health Care & Community',
    tag: 'Epidemiology',
    statement: 'Levels of Prevention: Primary = Health promotion and immunization (prevents disease occurrence); Secondary = Screening and early detection (Pap smear, mammography); Tertiary = Rehabilitation (physiotherapy after stroke).',
    highlight: 'Primary: Vaccine | Secondary: Screen | Tertiary: Rehab'
  },

  // --- NURSING ETHICS, LAW & NMCN MANDATES ---
  {
    id: 147,
    category: 'Ethics & Fundamentals',
    tag: 'Legal Mandates',
    statement: 'Good Samaritan Laws protect off-duty healthcare professionals from legal liability when providing voluntary emergency assistance at an accident scene, provided they act within their professional scope and without gross negligence.',
    highlight: 'Good Samaritan protects off-duty emergency care'
  },
  {
    id: 148,
    category: 'Ethics & Fundamentals',
    tag: 'Legal Mandates',
    statement: 'Incident / Variance Reports (adverse medication errors, patient falls, device failure): Completed immediately by the discovering nurse to improve institutional safety. An incident report is NEVER filed in or mentioned anywhere in the patient clinical medical record.',
    highlight: 'Never document incident report filing in patient chart'
  },
  {
    id: 149,
    category: 'Ethics & Fundamentals',
    tag: 'NMCN Standards',
    statement: 'Mandatory continuing education under NMCN: Nigerian registered nurses must accrue a minimum of 30 Credit Units (CEUs) through the Mandatory Continuing Professional Development Programme (MCPDP) every 3 years for statutory license renewal.',
    highlight: '30 MCPDP Credit Units required every 3 years'
  },
  {
    id: 150,
    category: 'Ethics & Fundamentals',
    tag: 'Professional Boundary',
    statement: 'Nurse-Patient boundaries: Accepting significant financial gifts, personal social media connections, disclosing sensitive personal home struggles to patients, or romantic involvement constitutes professional boundary violation and misconduct.',
    highlight: 'Financial gifts & social media ties violate boundaries'
  },

  // --- FUNDAMENTALS & NURSING PROCEDURES ---
  {
    id: 151,
    category: 'Ethics & Fundamentals',
    tag: 'Clinical Skills',
    statement: 'Tracheostomy suctioning protocol: Pre-oxygenate with 100% O2 for at least 30-60 seconds. Insert catheter without suction; apply intermittent suction while rotating catheter on withdrawal for NO MORE than 10 to 15 seconds to prevent hypoxemia.',
    highlight: 'Pre-oxygenate 100% | Suction on withdrawal <= 10–15 sec'
  },
  {
    id: 152,
    category: 'Ethics & Fundamentals',
    tag: 'Clinical Skills',
    statement: 'Nasogastric (NG) Tube insertion measurement: Measure distance from the tip of the nose to the earlobe, and then down to the xiphoid process (NEX measurement). Radiographic X-ray is the only definitive gold standard confirming gastric placement.',
    highlight: 'NEX measurement | Chest X-ray confirms placement'
  },
  {
    id: 153,
    category: 'Ethics & Fundamentals',
    tag: 'Clinical Skills',
    statement: 'Blood Transfusion safety rules: Transfusion must be initiated within 30 minutes of blood release from the blood bank and completed within 4 hours. Stay with the patient and monitor vitals for the first 15 minutes (acute hemolytic reactions occur early).',
    highlight: 'Start within 30 min | Max 4 hours | Stay first 15 min'
  },
  {
    id: 154,
    category: 'Ethics & Fundamentals',
    tag: 'Clinical Skills',
    statement: 'Acute Hemolytic Transfusion Reaction (chills, fever, low back pain, tachycardia, tachypnea, hematuria): Immediately STOP the transfusion, disconnect the blood tubing at the hub, infuse Normal Saline via fresh tubing, and notify provider.',
    highlight: 'Acute reaction -> STOP infusion immediately & save blood unit'
  },
  {
    id: 155,
    category: 'Ethics & Fundamentals',
    tag: 'Clinical Skills',
    statement: 'Cane walking guidance: The cane is always held on the STRONGER (unaffected) side of the body. Advance the cane simultaneously with the weaker leg, followed by the stronger leg (Mnemonic: COAL - Cane Opposite Affected Leg).',
    highlight: 'Hold cane on STRONGER side (COAL)'
  },
  {
    id: 156,
    category: 'Ethics & Fundamentals',
    tag: 'Clinical Skills',
    statement: 'Stair climbing with crutches: "Up with the good, down with the bad." Going up stairs, the unaffected (good) leg steps up first. Going down stairs, the crutches and affected (bad) leg step down first.',
    highlight: 'Up with the GOOD, down with the BAD'
  },
  {
    id: 157,
    category: 'Ethics & Fundamentals',
    tag: 'Clinical Skills',
    statement: 'Restraint monitoring standards: Medical-surgical restraints require renewed physician orders every 24 hours. Assess neurovascular status, skin integrity, and circulation every 30 minutes; release restraints completely every 2 hours for ROM.',
    highlight: 'Circulation checks q30min | Release q2h for ROM'
  },
  {
    id: 158,
    category: 'Ethics & Fundamentals',
    tag: 'Clinical Skills',
    statement: 'Enema administration positioning: Place the adult patient in the Left Sims (left lateral with right knee flexed) position to allow gravity to guide the solution along the natural anatomical curve of the sigmoid colon.',
    highlight: 'Left Sims position for enema delivery'
  },
  {
    id: 159,
    category: 'Ethics & Fundamentals',
    tag: 'Clinical Skills',
    statement: 'Ear drop (Otic) administration: In adults and children over 3 years of age, pull the pinna UP and BACK. In infants and children under 3 years of age, pull the pinna DOWN and BACK.',
    highlight: 'Adult: Up & Back | Child < 3 yrs: Down & Back'
  },
  {
    id: 160,
    category: 'Ethics & Fundamentals',
    tag: 'Clinical Skills',
    statement: '24-Hour Urine Collection procedure: On the morning of collection start, instruct the patient to void and DISCARD the first morning urine specimen. Collect all subsequent urine for exactly 24 hours, keeping the container on ice or refrigerated.',
    highlight: 'Discard first morning void; collect for next 24 hours on ice'
  }
];

export function StudyGuidePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  const [bookmarkedFacts, setBookmarkedFacts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nclex_saved_facts') || '[]');
    } catch {
      return [];
    }
  });

  const categories = useMemo(() => {
    return ['all', ...new Set(CLINICAL_FACTS_300.map((f) => f.category))];
  }, []);

  const toggleBookmarkFact = (fact) => {
    setBookmarkedFacts((prev) => {
      const exists = prev.some((item) => item.id === fact.id);
      const updated = exists
        ? prev.filter((item) => item.id !== fact.id)
        : [...prev, fact];
      localStorage.setItem('nclex_saved_facts', JSON.stringify(updated));
      return updated;
    });
  };

  const handleCopyFact = (fact) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(`${fact.statement} [Benchmark: ${fact.highlight}]`);
      setCopiedId(fact.id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  const filteredFacts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return CLINICAL_FACTS_300.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        item.statement.toLowerCase().includes(q) ||
        item.highlight.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6 font-sans text-slate-800 antialiased">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#071A3D] text-white px-2 py-0.5 rounded">
              High-Yield Revision Feed
            </span>
            <span className="text-xs font-mono font-semibold text-slate-500">
              NMCN &amp; NCLEX Licensure Core Facts
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2 mt-1">
            <BookOpen className="w-7 h-7 text-[#071A3D]" />
            Clinical Study Guide: Statutory Facts &amp; Benchmarks
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Direct physiological benchmarks, statutory nursing models, maternal/RHN constants, and pharmacology rules.
          </p>
        </div>

        <div className="relative w-full md:w-80 shrink-0">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vitals, ABGs, Henderson, Parkland..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#071A3D] focus:bg-white transition-all font-medium"
          />
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
        <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full capitalize whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#071A3D] text-white font-bold shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat === 'all' ? 'All Disciplines' : cat}
          </button>
        ))}
      </div>

      {/* Facts Count Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
        <span>Showing {filteredFacts.length} high-yield clinical facts</span>
        <button
          type="button"
          onClick={() => window.print()}
          className="hover:text-slate-900 flex items-center gap-1 cursor-pointer font-bold"
        >
          <Printer className="w-3.5 h-3.5" /> Print / Save PDF
        </button>
      </div>

      {/* Clinical Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFacts.map((fact) => {
          const isBookmarked = bookmarkedFacts.some((b) => b.id === fact.id);
          const isCopied = copiedId === fact.id;

          return (
            <div
              key={fact.id}
              className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs flex flex-col justify-between gap-4 hover:border-slate-300 transition-all group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-800 font-mono text-[11px] font-bold flex items-center justify-center border border-blue-100">
                      {fact.id}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-slate-50 px-2 py-0.5 rounded">
                      {fact.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleCopyFact(fact)}
                      title="Copy clinical statement"
                      className="p-1 rounded text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <span className="text-[10px] font-mono">Copy</span>}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleBookmarkFact(fact)}
                      title={isBookmarked ? 'Remove saved fact' : 'Save fact'}
                      className={`p-1 rounded transition-colors cursor-pointer ${
                        isBookmarked ? 'text-amber-500' : 'text-slate-300 hover:text-slate-600'
                      }`}
                    >
                      {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] font-medium text-slate-800 leading-relaxed font-sans">
                  {fact.statement}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-[11px] font-mono font-bold text-slate-900 bg-amber-50/70 border border-amber-200/80 px-2 py-0.5 rounded">
                    {fact.highlight}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  {fact.category}
                </span>
              </div>
            </div>
          );
        })}

        {filteredFacts.length === 0 && (
          <div className="col-span-full p-12 text-center text-xs text-slate-400 bg-white border border-slate-200 rounded-xl">
            No clinical facts matched "{searchQuery}".
          </div>
        )}
      </div>
    </div>
  );
}

export default StudyGuidePage;