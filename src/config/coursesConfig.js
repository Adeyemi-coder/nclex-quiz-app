// src/config/coursesConfig.js

export const COURSE_CONFIG = {
  anatomyPhysiology: {
    id: "anatomyPhysiology",
    code: "AP-101",
    name: "Anatomy & Physiology",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Cells, tissues, organ systems, homeostasis, and fluids connected to clinical practice.",
    topics: [
      "Cells & Tissues", "Skeletal System", "Muscular System", "Nervous System",
      "Cardiovascular System", "Respiratory System", "Digestive System", "Urinary System",
      "Endocrine System", "Reproductive System", "Immune & Lymphatic", "Fluid & Electrolytes"
    ]
  },
  fundamentalsOfNursing: {
    id: "fundamentalsOfNursing",
    code: "FON-102",
    name: "Fundamentals of Nursing (FON)",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Nursing process, aseptic techniques, vitals, mobility, hygiene, and core procedures.",
    topics: [
      "Nursing Process & Assessment", "Vital Signs & Monitoring", "Asepsis & Infection Control",
      "Hygiene & Bed Making", "Mobility & Positioning", "Wound Care & Dressings",
      "Elimination Needs", "Nutrition & Hydration", "Therapeutic Communication", "Documentation"
    ]
  },
  nursingInformatics: {
    id: "nursingInformatics",
    code: "NI-201",
    name: "Nursing Informatics",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "EHRs, digital health, CDSS, data privacy, telemetry, and clinical technologies.",
    topics: [
      "Electronic Health Records (EHR)", "Clinical Decision Support (CDSS)", "Data Privacy & Security",
      "Telehealth & Digital Health", "Medication Administration Systems", "Health Information Systems"
    ]
  },
  useOfEnglish: {
    id: "useOfEnglish",
    code: "ENG-101",
    name: "Use of English",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Grammar, comprehension, medical terminology, error identification, and professional documentation.",
    topics: [
      "Grammar & Sentence Construction", "Medical Terminology & Etymology", "Error Identification & Editing",
      "Vocabulary & Lexical Density", "Comprehension & Inference", "Professional & Scientific Reporting"
    ]
  },
  microbiology: {
    id: "microbiology",
    code: "MCB-201",
    name: "Microbiology",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Pathogens, nosocomial infections, sterilization, immunology, and specimen handling.",
    topics: [
      "Bacteriology", "Virology", "Mycology & Parasitology", "Host Defense & Immunology",
      "Sterilization & Chemical Disinfection", "Nosocomial Infections (HAIs)", "Antimicrobial Resistance"
    ]
  },
  socialBehaviouralSciences: {
    id: "socialBehaviouralSciences",
    code: "SBS-102",
    name: "Social & Behavioural Sciences",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Sociology of health, developmental psychology, stress adaptation, and therapeutic relationships.",
    topics: [
      "Developmental Psychology", "Sociology of Health & Illness", "Stress, Crisis & Coping",
      "Personality & Human Behaviour", "Social Determinants of Health", "Therapeutic Nurse-Patient Dyad"
    ]
  },
  medicalSurgicalNursing: {
    id: "medicalSurgicalNursing",
    code: "MSN-201",
    name: "Medical-Surgical Nursing",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Advanced pathophysiology, surgical interventions, prioritized interventions, and acute care.",
    topics: [
      "Cardiovascular Disorders", "Respiratory Disorders", "Neurological Disorders",
      "Gastrointestinal & Hepatic", "Renal & Genitourinary", "Endocrine Disorders",
      "Musculoskeletal Disorders", "Hematology & Oncology", "Perioperative Nursing",
      "Critical Care & Shock", "Fluid, Electrolyte & Acid-Base"
    ]
  },
  primaryHealthCare: {
    id: "primaryHealthCare",
    code: "PHC-202",
    name: "Primary Health Care (PHC)",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Alma-Ata principles, community mobilization, immunization (NPI), maternal-child health, and epidemiology.",
    topics: [
      "PHC Principles & Alma-Ata", "Community Mobilization & Diagnosis", "National Programme on Immunization",
      "Maternal & Child Health (MCH)", "Environmental Sanitation", "Epidemiological Surveillance", "Family Planning Services"
    ]
  },
  nursingEthics: {
    id: "nursingEthics",
    code: "ETH-301",
    name: "Nursing Ethics & Jurisprudence",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Deontology, bioethical principles, NMCN regulatory laws, informed consent, and malpractice.",
    topics: [
      "Bioethical Principles", "Informed Consent & Patient Rights", "Confidentiality & Data Protection",
      "Negligence, Malpractice & Tort", "NMCN Act & Professional Governance", "Advocacy & End-of-Life Decisions"
    ]
  },
  pharmacology: {
    id: "pharmacology",
    code: "PHA-202",
    name: "Clinical Pharmacology",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Drug calculations, pharmacokinetics, antimicrobial stewardship, cardiovascular drugs, and adverse toxics.",
    topics: [
      "Dosage Calculations & IV Flow Rates", "Pharmacokinetics & Pharmacodynamics", "Antimicrobials & Resistance",
      "Cardiovascular & Hemodynamic Agents", "CNS & Psychotropic Pharmacology", "Autonomic Nervous System Agents",
      "Endocrine & Metabolic Pharmacotherapy", "Analgesics, Opioids & Anti-inflammatories"
    ]
  },
  rhnMidwiferyCare: {
    id: "rhnMidwiferyCare",
    code: "RHN-301",
    name: "Registered Midwifery & Maternal Care",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Antenatal assessment, labor management, partograph, high-risk obstetrics, and puerperium.",
    topics: [
      "Antenatal Assessment & Surveillance", "Physiological Labor & Partograph Interpretation",
      "Obstetric Emergencies (PPH, Eclampsia)", "Operative Delivery & Post-Cesarean Nursing",
      "Puerperium & Lactation Physiology", "High-Risk Pregnancy Management"
    ]
  },
  politicsInNursing: {
    id: "politicsInNursing",
    code: "POL-302",
    name: "Politics & Policy in Nursing",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Health policy formulation, NANNM trade unionism, workforce legislation, and professional advocacy.",
    topics: [
      "Healthcare Policy Formulation", "Professional Associations & Trade Unionism (NANNM)",
      "Nursing Workforce Legislation & Regulation", "Health Systems Governance", "Advocacy & Political Action"
    ]
  },
  communityHealthNursing: {
    id: "communityHealthNursing",
    code: "CHN-201",
    name: "Community Health Nursing",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Home visits, school health, occupational health, communicable diseases, and family health index.",
    topics: [
      "Family Health Nursing & Domiciliary Care", "School Health Programs", "Occupational Health & Safety",
      "Vector & Communicable Disease Control", "Community Assessment Tools", "Demography & Vital Statistics"
    ]
  },
  mentalHealthNursing: {
    id: "mentalHealthNursing",
    code: "MHN-301",
    name: "Mental Health & Psychiatric Nursing",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Psychopathology, therapeutic communication, psychopharmacology, crisis stabilization, and legal psychiatry.",
    topics: [
      "Psychiatric Assessment & MSE", "Therapeutic Communication Techniques", "Schizophrenia Spectrum Disorders",
      "Mood Disorders & Suicide Mitigation", "Anxiety & Somatoform Disorders", "Substance Use & Dual Diagnosis",
      "Psychotropic Medications", "Psychiatric Emergencies & Restraints"
    ]
  },
  emergencyNursing: {
    id: "emergencyNursing",
    code: "EMN-301",
    name: "Emergency & Disaster Nursing",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Triage (START), primary survey (ABCDE), ACLS/BLS, multi-trauma, shock, and disaster preparedness.",
    topics: [
      "Primary & Secondary Survey (ABCDE)", "Triage Protocols (START/Manchester)", "Cardiopulmonary Resuscitation (BLS/ACLS)",
      "Trauma Resuscitation & Spinal Protection", "Shock & Fluid Resuscitation", "Burns, Inhalation & Electrical Injuries",
      "Toxicology, Bites & Envenomation", "Disaster Nursing & Mass Casualty Incidents"
    ]
  },
  qualityImprovement: {
    id: "qualityImprovement",
    code: "QI-302",
    name: "Quality Improvement & Patient Safety",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Clinical audit, Root Cause Analysis (RCA), PDSA cycles, incident reporting, and safety indicators.",
    topics: [
      "Patient Safety Goals & Indicators", "Root Cause Analysis (RCA) & Swiss Cheese Model", "PDCA/PDSA Quality Cycles",
      "Clinical Audit Methodology", "Incident Reporting & Near-Miss Management", "Evidence-Based Practice Implementation"
    ]
  },
  homeHealthCare: {
    id: "homeHealthCare",
    code: "HHC-301",
    name: "Home Health & Palliative Care",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Domiciliary nursing, chronic care models, caregiver education, geriatric safety, and hospice.",
    topics: [
      "Home Care Assessment & Safety Audits", "Palliative Care & Pain Regimens", "Caregiver Education & Strain Prevention",
      "Rehabilitation & Chronic Illness Home Care", "Continuity, Discharge Planning & Referrals", "End-of-Life Comfort Care"
    ]
  },
  entrepreneurshipInNursing: {
    id: "entrepreneurshipInNursing",
    code: "ENT-201",
    name: "Entrepreneurship in Nursing",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Private clinic establishment, consultancy, digital health startups, regulatory compliance, and fiscal management.",
    topics: [
      "Healthcare Business Modeling & Planning", "Regulatory Compliance for Private Practice", "Financial Management & Costing",
      "Marketing Nursing Services & Ethics", "Digital Health Solutions & Tele-consultancy", "Risk Mitigation in Healthcare Business"
    ]
  },
  nursingResearch: {
    id: "nursingResearch",
    code: "RES-301",
    name: "Nursing Research & Statistics",
    questionPoolSize: 150,
    questionsPerAttempt: 50,
    description: "Methodologies, sampling, instrument validity, parametric/non-parametric tests, and bioethics in research.",
    topics: [
      "Research Problem Identification & Objectives", "Literature Review & Conceptual Frameworks", "Quantitative Research Designs",
      "Qualitative Methodologies & Rigor", "Sampling Techniques & Sample Size Calculation", "Validity, Reliability & Psychometrics",
      "Data Analysis & Biostatistics", "Research Ethics & Institutional Review Boards"
    ]
  }
};

// Blueprint for the 50-Item Mixed National Qualifying Mock Exam
export const MOCK_EXAM_BLUEPRINT = [
  { courseId: 'medicalSurgicalNursing', count: 8 },
  { courseId: 'pharmacology', count: 6 },
  { courseId: 'fundamentalsOfNursing', count: 5 },
  { courseId: 'emergencyNursing', count: 5 },
  { courseId: 'primaryHealthCare', count: 4 },
  { courseId: 'rhnMidwiferyCare', count: 4 },
  { courseId: 'mentalHealthNursing', count: 3 },
  { courseId: 'anatomyPhysiology', count: 3 },
  { courseId: 'communityHealthNursing', count: 3 },
  { courseId: 'nursingEthics', count: 2 },
  { courseId: 'microbiology', count: 2 },
  { courseId: 'nursingResearch', count: 2 },
  { courseId: 'qualityImprovement', count: 1 },
  { courseId: 'nursingInformatics', count: 1 },
  { courseId: 'socialBehaviouralSciences', count: 1 }
];