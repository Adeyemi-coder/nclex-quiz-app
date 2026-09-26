// src/data/courses/primaryHealthCare.js
// NMCN Primary Health Care (PHC) Bank - Part 1: Questions 1 to 50

export const primaryHealthCareQuestions = [
  {
    id: "PHC-001",
    course: "Primary Health Care (PHC)",
    topic: "PHC Principles & Alma-Ata",
    subtopic: "Core Definition and Pillars",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "According to the Declaration of Alma-Ata (1978), what is the foundational definition of Primary Health Care (PHC)?",
    options: [
      "Essential healthcare based on practical, scientifically sound, and socially acceptable methods made universally accessible to individuals and families at a cost the community and country can afford",
      "Specialized high-technology intensive care provided exclusively in tertiary teaching hospitals",
      "Free medical treatment funded entirely by foreign non-governmental organizations without government participation",
      "Emergency mobile ambulance services restricted to urban metropolitan centers"
    ],
    correctAnswer: 0,
    rationale: "The 1978 Alma-Ata Declaration defined Primary Health Care as essential healthcare based on practical, scientifically sound, and socially acceptable methods and technology, made universally accessible to individuals and families in the community through their full participation and at a cost that the community and country can afford to maintain at every stage of their development.",
    optionRationales: {
      A: "Correct. This is the verbatim, foundational definition established at the Alma-Ata conference.",
      B: "High-technology tertiary care is tertiary specialized medicine, not grassroots primary health care.",
      C: "PHC relies on community self-reliance and national health systems, not sole external donor dependency.",
      D: "PHC mandates universal geographic accessibility, prioritizing rural and underserved communities."
    },
    clinicalPearl: "The four core pillars of PHC: Universal accessibility, Community participation, Intersectoral collaboration, and Appropriate technology.",
    tags: ["Alma-Ata", "principles", "definitions", "health-for-all"]
  },
  {
    id: "PHC-002",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "National Programme on Immunization (NPI) Schedule",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the current National Programme on Immunization (NPI) schedule in Nigeria, which vaccines should a healthy newborn receive at birth before hospital discharge?",
    options: [
      "BCG, Oral Polio Vaccine (OPV 0), and Hepatitis B birth dose (Hep B0)",
      "Pentavalent vaccine 1, PCV 1, and Rotavirus 1",
      "Measles vaccine, Yellow Fever vaccine, and Vitamin A",
      "Inactivated Polio Vaccine (IPV) and Meningococcal conjugate vaccine"
    ],
    correctAnswer: 0,
    rationale: "Under the Nigerian NPI schedule, the birth doses are: BCG (Bacillus Calmette-Guérin for tuberculosis, given intradermally), OPV 0 (Oral Polio Vaccine, given orally), and Hepatitis B birth dose (Hep B0, given intramuscularly within the first 24 hours of life).",
    optionRationales: {
      A: "Correct. BCG, OPV 0, and Hepatitis B birth dose constitute the statutory birth package.",
      B: "Pentavalent 1, PCV 1, and Rotavirus 1 are administered at 6 weeks of age.",
      C: "Measles and Yellow Fever are administered at 9 months of age.",
      D: "IPV is administered at 6 and 14 weeks of age; Meningococcal A is administered at 9 months."
    },
    clinicalPearl: "Hepatitis B birth dose should be administered within 24 hours of birth to prevent perinatal mother-to-child transmission.",
    tags: ["NPI", "immunization", "birth-doses", "vaccine-schedule"]
  },
  {
    id: "PHC-003",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Entry",
    subtopic: "Steps in Community Entry",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When a community health nurse is assigned to initiate a community health diagnosis in a rural Nigerian settlement, what is the mandatory first administrative step in the 'Community Entry' protocol?",
    options: [
      "Paying an official advocacy courtesy visit to the traditional ruler (e.g., Baale, Emir, Obi) and community elders to explain the mission and obtain social clearance",
      "Distributing questionnaires immediately to random primary school children on the street",
      "Summoning all women of childbearing age to the marketplace for blood pressure testing",
      "Administering mass prophylactic antibiotics to every household"
    ],
    correctAnswer: 0,
    rationale: "Community entry requires following the established social and traditional hierarchy. The nurse must first pay an advocacy courtesy visit to the traditional gatekeepers (chiefs, elders, religious heads, ward development committee chairs) to introduce the team, explain objectives, address concerns, and secure community acceptance.",
    optionRationales: {
      A: "Correct. Respecting traditional gatekeepers ensures community ownership, safety, and cultural cooperation.",
      B: "Surveying children without community and parental consent breaches social protocols and ethics.",
      C: "Calling spontaneous mass gatherings without royal and elder sanction causes community suspicion and resistance.",
      D: "Mass chemotherapy without prior assessment and clinical indication is unsafe and unethical."
    },
    clinicalPearl: "Protocol for community entry: Gatekeepers first (Traditional rulers/Elders) → Community leaders/WDC → Community dialogue → Household data collection.",
    tags: ["community-entry", "community-diagnosis", "advocacy", "gatekeepers"]
  },
  {
    id: "PHC-004",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Vaccine Cold Chain & Storage Temperatures",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "According to NPHCDA cold chain guidelines, what is the standard recommended storage temperature range for freeze-sensitive vaccines (such as Pentavalent, PCV, Td, and Hepatitis B) in a primary health center solar direct-drive refrigerator?",
    options: [
      "+2°C to +8°C",
      "-15°C to -25°C",
      "0°C to -5°C",
      "+15°C to +25°C"
    ],
    correctAnswer: 0,
    rationale: "At the primary health care facility level, all routine childhood vaccines (including freeze-sensitive vaccines like Pentavalent, PCV, Td, Hep B, and oral vaccines like OPV and Measles) are stored in the refrigerator compartment at +2°C to +8°C. Freeze-sensitive vaccines must never be frozen.",
    optionRationales: {
      A: "Correct. +2°C to +8°C is the universal cold chain storage temperature range at the facility level.",
      B: "-15°C to -25°C is freezing temperature used only at national and regional stores for OPV and yellow fever bulk storage.",
      C: "Sub-zero temperatures destroy freeze-sensitive vaccines by dissociating aluminum adjuvants.",
      D: "+15°C to +25°C is controlled room temperature, which accelerates heat degradation."
    },
    clinicalPearl: "Never freeze aluminum-adsorbed vaccines (Penta, Td, Hep B, PCV). If frozen, execute the Shake Test before discarding.",
    tags: ["cold-chain", "vaccine-storage", "NPHCDA", "temperature"]
  },
  {
    id: "PHC-005",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Oral Rehydration Therapy (ORT)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In rural home management of acute watery diarrhea in an infant, how should a community health nurse instruct a mother to prepare the household Salt-Sugar Solution (SSS) using clean drinking water?",
    options: [
      "1 level teaspoon of salt and 6 level teaspoons of sugar dissolved in 1 clean beer bottle (600 mL) of cooled boiled water",
      "5 tablespoons of salt and 1 teaspoon of sugar dissolved in a cup of water",
      "Equal parts salt and sugar dissolved in 5 liters of unboiled river water",
      "1 cup of table salt dissolved in warm milk"
    ],
    correctAnswer: 0,
    rationale: "The standard household recipe for Salt-Sugar Solution (SSS) in Nigeria is 1 level teaspoon of clean salt (table salt) and 6 level teaspoons of granulated sugar, thoroughly dissolved in 1 clean standard beer bottle or soft drink bottle (600 mL) of clean, cooled boiled water.",
    optionRationales: {
      A: "Correct. 1 level teaspoon salt + 6 level teaspoons sugar in 600 mL (1 standard bottle) of clean water.",
      B: "5 tablespoons of salt produces a hypernatremic solution, risking fatal cerebral dehydration.",
      C: "Equal parts salt and sugar causes dangerous hypernatremia and osmotic diarrhea.",
      D: "High-salt milk triggers severe osmotic fluid shifts and hypernatremic convulsions."
    },
    clinicalPearl: "SSS ratio in Nigeria: 1 level teaspoon Salt + 6 level teaspoons Sugar in 600 mL clean water. Add dispersible Zinc tablets (20 mg) daily for 10 to 14 days.",
    tags: ["ORT", "diarrhea", "SSS", "child-survival"]
  },
  {
    id: "PHC-006",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "Ward Health System & WDC",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the Ward Health System operational guidelines developed by the NPHCDA, which grassroots community committee functions as the primary governing body representing the community in managing the Ward Primary Health Center?",
    options: [
      "Ward Development Committee (WDC)",
      "Local Government Civil Service Commission",
      "State Hospital Management Board",
      "Federal Medical Center Advisory Council"
    ],
    correctAnswer: 0,
    rationale: "The Ward Development Committee (WDC) is the community-based governance organ within the Ward Health System. Composed of community representatives (women, youths, artisans, traditional and religious leaders), the WDC oversees planning, resource mobilization, and quality monitoring of the ward's primary health center.",
    optionRationales: {
      A: "Correct. The WDC represents the community at the ward level, working with health staff to oversee the primary center.",
      B: "The LGA Civil Service Commission handles civil service recruitment, not grassroots facility governance.",
      C: "The State Hospital Management Board oversees secondary General Hospitals.",
      D: "FMC Advisory Councils oversee tertiary federal medical institutions."
    },
    clinicalPearl: "The Ward Development Committee (WDC) operates at the electoral ward level; Village Development Committees (VDCs) feed into the WDC.",
    tags: ["WDC", "Ward-Health-System", "NPHCDA", "community-governance"]
  },
  {
    id: "PHC-007",
    course: "Primary Health Care (PHC)",
    topic: "Epidemiological Surveillance & Disease Control",
    subtopic: "IDSR Priority Diseases",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under Nigeria's Integrated Disease Surveillance and Response (IDSR) guidelines, which condition represents an epidemic-prone disease requiring immediate reporting within 24 hours to the Local Government Disease Surveillance and Notification Officer (DSNO)?",
    options: [
      "Suspected Cholera (acute profuse watery diarrhea)",
      "Uncomplicated osteoarthritic knee pain",
      "Mild seasonal tinea capitis (ringworm)",
      "Chronic tension-type headache"
    ],
    correctAnswer: 0,
    rationale: "Under the IDSR matrix, epidemic-prone diseases requiring immediate notification within 24 hours include: Cholera, Yellow Fever, Lassa Fever, Cerebrospinal Meningitis (CSM), Measles, and Viral Hemorrhagic Fevers. Chronic degenerative or mild fungal conditions are not immediate epidemic threats.",
    optionRationales: {
      A: "Correct. Cholera is an epidemic-prone disease requiring immediate reporting to the DSNO within 24 hours.",
      B: "Osteoarthritis is a chronic non-communicable disorder with no epidemic potential.",
      C: "Tinea capitis is a routine superficial dermatophyte infection, not an IDSR epidemic trigger.",
      D: "Headaches are common symptoms, not epidemic-prone notifiable conditions."
    },
    clinicalPearl: "IDSR reporting rule: Immediately notifiable within 24 hours (Cholera, Lassa, Yellow Fever, CSM, Measles, Polio/AFP).",
    tags: ["IDSR", "surveillance", "DSNO", "cholera", "epidemiology"]
  },
  {
    id: "PHC-008",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Vaccine Vial Monitor (VVM) Stages",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A community health nurse inspects a vial of bivalent Oral Polio Vaccine (bOPV) during an outreach clinic. The Vaccine Vial Monitor (VVM) shows that the inner square has turned the exact same shade of purple/grey as the outer circle (Stage 3). What action must the nurse take?",
    options: [
      "Do not use the vaccine; discard the vial immediately because heat exposure has reached the discard threshold",
      "Administer the vaccine quickly before the square gets any darker",
      "Place the vial in crushed ice for 30 minutes to reverse the color change",
      "Double the dose of drops administered to each child to compensate for heat damage"
    ],
    correctAnswer: 0,
    rationale: "A Vaccine Vial Monitor (VVM) is a chemical indicator that registers cumulative heat exposure: Stage 1 = Inner square is lighter than outer circle (USE); Stage 2 = Inner square is still lighter than outer circle (USE first); Stage 3 = Inner square matches the color of the outer circle (DISCARD threshold reached); Stage 4 = Inner square is darker than the outer circle (DISCARD). Stage 3 indicates irreversible thermal degradation.",
    optionRationales: {
      A: "Correct. When the square matches or is darker than the circle (Stages 3 and 4), the vaccine must not be used.",
      B: "Administering heat-inactivated vaccine leaves infants unprotected against wild polioviruses.",
      C: "The chemical color change on a VVM is irreversible; freezing does not restore heat-damaged antigens.",
      D: "Altering vaccine volume violates standard practice and does not fix inactive antigens."
    },
    clinicalPearl: "VVM rule: If the inner square is lighter than the outer circle, USE the vaccine. If the inner square matches or is darker than the circle, DO NOT USE.",
    tags: ["VVM", "vaccine-vial-monitor", "cold-chain", "immunization-safety"]
  },
  {
    id: "PHC-009",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Tetanus-Diphtheria (Td) Prophylaxis for Women",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under national maternal health guidelines, how many appropriately spaced doses of Tetanus-Diphtheria (Td) toxoid vaccine must a woman of childbearing age receive to achieve lifelong protection against maternal and neonatal tetanus?",
    options: [
      "5 doses",
      "2 doses",
      "1 single lifetime dose",
      "10 doses administered annually"
    ],
    correctAnswer: 0,
    rationale: "The 5-dose Td schedule for women of childbearing age provides lifetime protection: Td1 = At first contact or early pregnancy; Td2 = At least 4 weeks after Td1 (protects 3 years); Td3 = At least 6 months after Td2 (protects 5 years); Td4 = At least 1 year after Td3 (protects 10 years); Td5 = At least 1 year after Td4 (protects for life).",
    optionRationales: {
      A: "Correct. 5 doses of Td spaced over childbearing years confer complete, lifetime immunity.",
      B: "2 doses protect for only 3 years.",
      C: "A single dose confers negligible, short-lived antibody protection.",
      D: "10 annual doses are unnecessary and expose the client to local Arthus-type hypersensitivity reactions."
    },
    clinicalPearl: "Td schedule: Td1 (contact), Td2 (+4 wks), Td3 (+6 mos), Td4 (+1 yr), Td5 (+1 yr) = Lifetime immunity against neonatal and maternal tetanus.",
    tags: ["maternal-health", "Td-vaccine", "neonatal-tetanus", "NPHCDA"]
  },
  {
    id: "PHC-010",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Ventilated Improved Pit (VIP) Latrine",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What engineering feature distinguishes a Ventilated Improved Pit (VIP) Latrine from a traditional unventilated pit latrine, eliminating foul odors and trapping flies?",
    options: [
      "A vertical vent pipe fitted with a fly-proof gauze screen at the top, combined with a partially dark interior",
      "An automated water flushing mechanism connected to municipal sewers",
      "A glass ceiling designed to maximize sunlight inside the cubicle",
      "Chemical bleach poured into the pit every morning"
    ],
    correctAnswer: 0,
    rationale: "A VIP latrine incorporates: 1) A vertical ventilation pipe extending above the roof that draws air and odors upward out of the pit via wind currents; 2) A fine corrosion-resistant fly screen on top of the pipe; and 3) A kept-dark superstructure interior. Flies attracted to the pit fly upward toward the bright light of the vent pipe, get trapped by the screen, dehydrate, and die.",
    optionRationales: {
      A: "Correct. A vent pipe with a fly screen and a semi-dark cubicle controls both odors and vector transmission.",
      B: "A VIP latrine is a dry sanitation system; it does not connect to pressurized municipal sewers.",
      C: "A bright interior causes flies to exit through the squat hole into the living area, spreading fecal pathogens.",
      D: "Pouring bleach disrupts anaerobic bacterial digestion of waste in the pit."
    },
    clinicalPearl: "VIP latrines trap flies using light: keeping the interior dark forces emerging flies to head toward the top of the vent pipe, where the screen traps them.",
    tags: ["environmental-health", "VIP-latrine", "sanitation", "vector-control"]
  },
  {
    id: "PHC-011",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Incidence vs Prevalence Rates",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In a rural community of 10,000 residents, a community health survey conducted during March identifies 40 existing cases of tuberculosis and 10 newly diagnosed cases confirmed during that same month. What is the Incidence Rate of tuberculosis in this community for the month of March?",
    options: [
      "1 per 1,000 population at risk (10 new cases / 10,000)",
      "5 per 1,000 population at risk (50 total cases / 10,000)",
      "4 per 1,000 population at risk (40 existing cases / 10,000)",
      "50% of the entire population"
    ],
    correctAnswer: 0,
    rationale: "Incidence measures the number of NEW cases of a disease that develop in a population at risk during a specified period of time: Incidence = (New cases / Population at risk) x k = (10 / 10,000) = 1 per 1,000. Prevalence measures ALL cases (new + pre-existing): (10 + 40) / 10,000 = 5 per 1,000.",
    optionRationales: {
      A: "Correct. Incidence counts only NEW cases (10 / 10,000 = 1 per 1,000).",
      B: "5 per 1,000 represents the Period Prevalence (total existing plus new cases), not incidence.",
      C: "4 per 1,000 represents the baseline Point Prevalence of pre-existing cases.",
      D: "50% is a mathematical calculation error."
    },
    clinicalPearl: "Incidence = NEW cases occurring over time (water running into the bathtub). Prevalence = ALL current cases at a point in time (water sitting in the tub).",
    tags: ["epidemiology", "incidence", "prevalence", "community-diagnosis"]
  },
  {
    id: "PHC-012",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Growth Monitoring & The Road to Health Chart",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When plotting an infant's monthly weight on the 'Road to Health' growth monitoring chart at an under-fives clinic, what trajectory signifies early faltering and impending Protein-Energy Malnutrition (PEM)?",
    options: [
      "A flattening (horizontal) or downward-sloping weight curve over two consecutive visits",
      "A steadily upward-sloping weight curve running parallel to reference percentiles",
      "A single weight measurement recorded above the 50th percentile",
      "A weight gain of 500 grams in a single month"
    ],
    correctAnswer: 0,
    rationale: "On growth charts, the direction of the growth curve is more informative than a single weight measurement. A horizontal (flat) curve indicates stagnant weight, and a downward-sloping curve indicates active weight loss (growth faltering). Both are early warning signs of malnutrition that require immediate intervention.",
    optionRationales: {
      A: "Correct. A flat or downward growth line signals growth faltering, indicating early malnutrition before clinical signs appear.",
      B: "An upward trajectory parallel to curves indicates healthy growth.",
      C: "Values above the 50th percentile reflect appropriate nutritional status.",
      D: "A 500-gram monthly gain in an infant reflects positive growth."
    },
    clinicalPearl: "On the Road to Health chart: An upward curve means growth. A flat curve means danger. A downward curve means emergency.",
    tags: ["growth-monitoring", "road-to-health", "PEM", "under-fives-clinic"]
  },
  {
    id: "PHC-013",
    course: "Primary Health Care (PHC)",
    topic: "PHC Principles & Alma-Ata",
    subtopic: "Appropriate Technology in Health",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the principles of Primary Health Care, what defines 'Appropriate Technology'?",
    options: [
      "Methods, equipment, and techniques that are scientifically sound, adapted to local needs, acceptable to the community, and maintainable using local resources",
      "The most expensive imported electronic machinery available in developed nations",
      "Discarding modern scientific knowledge in favor of unverified superstition",
      "Using complex technologies that require foreign expatriate engineers for daily maintenance"
    ],
    correctAnswer: 0,
    rationale: "Appropriate Technology in PHC refers to tools, techniques, and procedures that are scientifically valid, culturally acceptable to users, affordable, and easily maintained or repaired using available local resources (e.g., ORS packets, solar vaccine refrigerators, mid-upper arm circumference [MUAC] tapes).",
    optionRationales: {
      A: "Correct. Scientifically sound, culturally acceptable, and locally maintainable technology aligns with PHC principles.",
      B: "High-cost imported machinery often sits broken in rural clinics due to lack of parts, violating sustainability.",
      C: "Appropriate technology must remain evidence-based and scientifically sound.",
      D: "Dependence on foreign maintenance teams leads to equipment abandonment when projects end."
    },
    clinicalPearl: "Appropriate technology examples: Shakir MUAC strip, Salt-Sugar Solution, solar-direct-drive vaccine refrigerators, VIP latrines.",
    tags: ["appropriate-technology", "Alma-Ata", "principles", "sustainability"]
  },
  {
    id: "PHC-014",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Malaria Intermittent Preventive Treatment in Pregnancy (IPTp)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Under Nigeria's National Malaria Elimination Programme (NMEP) guidelines, what regimen governs Intermittent Preventive Treatment in pregnancy (IPTp) using Sulfadoxine-Pyrimethamine (SP)?",
    options: [
      "Administer 3 tablets of SP (500/25 mg) under Directly Observed Therapy (DOT) starting at quickening (16 weeks), repeated at each monthly scheduled ANC visit until delivery, spaced at least 4 weeks apart",
      "Administer SP daily throughout the first trimester before conception",
      "Administer a single tablet of SP on the day of delivery",
      "Administer oral chloroquine injections weekly during the third trimester"
    ],
    correctAnswer: 0,
    rationale: "IPTp-SP guidelines in Nigeria mandate that every pregnant woman receive Sulfadoxine-Pyrimethamine (SP: 3 tablets stat) under Directly Observed Therapy (DOT) at every scheduled ANC visit, starting at 16 weeks gestation (or quickening). Doses must be spaced at least 4 weeks apart, with a target of at least 3 doses (IPTp3) before delivery.",
    optionRationales: {
      A: "Correct. SP is administered under DOT at every monthly ANC visit starting at 16 weeks (minimum 4 weeks between doses).",
      B: "SP is contraindicated in the first trimester (weeks 1–13) due to theoretical teratogenic antifolate risks.",
      C: "A single dose at delivery provides no protection against placental malaria throughout pregnancy.",
      D: "Chloroquine is no longer used due to widespread plasmodial resistance."
    },
    clinicalPearl: "IPTp-SP must be given under Directly Observed Therapy (DOT) at the ANC clinic. Start at 16 weeks; space doses at least 4 weeks apart.",
    tags: ["malaria", "IPTp", "pregnancy", "NMEP", "sulfadoxine-pyrimethamine"]
  },
  {
    id: "PHC-015",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Pentavalent Vaccine Antigens",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which five antigens are combined within the single Pentavalent vaccine formulation administered to infants at 6, 10, and 14 weeks of age under Nigeria's NPI schedule?",
    options: [
      "Diphtheria, Pertussis, Tetanus, Hepatitis B, and Haemophilus influenzae type b (Hib)",
      "Diphtheria, Polio, Tetanus, Measles, and Mumps",
      "Tuberculosis, Polio, Pertussis, Rotavirus, and Rubella",
      "Yellow Fever, Meningitis, Cholera, Typhoid, and Hepatitis A"
    ],
    correctAnswer: 0,
    rationale: "The Pentavalent vaccine protects infants against five life-threatening bacterial and viral infections in a single 0.5 mL intramuscular injection: Diphtheria, Pertussis (whooping cough), Tetanus, Hepatitis B, and Haemophilus influenzae type b (Hib, which causes childhood pneumonia and meningitis).",
    optionRationales: {
      A: "Correct. Pentavalent contains DTP + Hep B + Hib antigens.",
      B: "Polio, Measles, and Mumps are not part of the standard pentavalent formulation.",
      C: "BCG, Polio, and Rotavirus are administered separately.",
      D: "These are distinct specialized vaccines, not the pediatric pentavalent blend."
    },
    clinicalPearl: "Pentavalent vaccine = DTP + HepB + Hib. Administered at 6, 10, and 14 weeks into the anterolateral aspect of the mid-thigh (vastus lateralis).",
    tags: ["pentavalent", "NPI", "vaccines", "antigens", "child-health"]
  },
  {
    id: "PHC-016",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Epidemiological Triad",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In classical communicable disease epidemiology, what are the three interacting corners of the Epidemiological Triad model of disease causation?",
    options: [
      "Agent, Host, and Environment",
      "Doctor, Nurse, and Patient",
      "Bacteria, Viruses, and Fungi",
      "Air, Water, and Soil"
    ],
    correctAnswer: 0,
    rationale: "The Epidemiological Triad consists of an external Agent (pathogen, toxin, or physical force), a susceptible Host (human or animal harboring the disease), and an Environment (physical, biological, and social surroundings) that brings the host and agent together.",
    optionRationales: {
      A: "Correct. Agent, Host, and Environment form the classic epidemiological triad.",
      B: "Healthcare personnel are service providers, not components of disease causation models.",
      C: "These are specific categories of biological agents, not the triad vertices.",
      D: "These are physical environmental media, not the complete triad."
    },
    clinicalPearl: "Primary prevention intervenes to break the interaction between Agent, Host, and Environment (e.g., using bed nets to block mosquitoes from reaching humans).",
    tags: ["epidemiological-triad", "causation", "agent-host-environment", "epidemiology"]
  },
  {
    id: "PHC-017",
    course: "Primary Health Care (PHC)",
    topic: "Health Education & Community Mobilization",
    subtopic: "Principles of Effective Health Education",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When delivering health education on exclusive breastfeeding to rural mothers, why is assessing and working within existing cultural beliefs and family structures considered essential?",
    options: [
      "Health education must start from where the people are, respecting cultural values to achieve voluntary, lasting behavioral change",
      "Traditional elders have legal authority to imprison nurses who disagree with local folklore",
      "Rural mothers are unable to learn without village council permission",
      "Cultural practices should replace all scientific hygiene standards"
    ],
    correctAnswer: 0,
    rationale: "A core principle of health education is 'starting from where the people are.' Identifying cultural beliefs, family decision-making dynamics (e.g., grandmothers and mothers-in-law), and local taboos helps the nurse frame health messaging respectfully, building trust and voluntary behavioral adoption rather than resistance.",
    optionRationales: {
      A: "Correct. Health education works by understanding local context and fostering voluntary adoption.",
      B: "Community leaders do not have penal authority over health education sessions.",
      C: "Rural clients can adopt new health practices when communicated respectfully and clearly.",
      D: "Health education aims to integrate safe cultural practices with scientific health evidence."
    },
    clinicalPearl: "Effective health education uses a two-way dialogue, builds on existing cultural strengths, and involves family decision-makers.",
    tags: ["health-education", "behavioral-change", "culture", "community-mobilization"]
  },
  {
    id: "PHC-018",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Safe Water Chain & Disinfection",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What household water treatment method represents the simplest, most effective method for killing bacterial, viral, and protozoan pathogens in drinking water drawn from rural open streams?",
    options: [
      "Vigorous rolling boiling for at least 1 to 3 minutes",
      "Straining water through a single layer of surgical gauze",
      "Leaving the water container open to ambient air for 24 hours",
      "Adding raw table salt until the water tastes brackish"
    ],
    correctAnswer: 0,
    rationale: "Boiling water vigorously at a rolling boil for at least 1 minute (or 3 minutes at higher altitudes) is the most reliable household water treatment. Heat pasteurizes and kills all vegetative bacteria, enteric viruses, and protozoan cysts (including Giardia and Cryptosporidium). Straining through cloth removes debris, but leaves microbial pathogens behind.",
    optionRationales: {
      A: "Correct. A rolling boil for 1–3 minutes reliably thermal-kills all pathogenic microorganisms.",
      B: "Simple cloth straining removes turbidity and leaves microscopic pathogens in the water.",
      C: "Leaving water open invites vector breeding and environmental contamination.",
      D: "Table salt does not disinfect water and can cause dehydration."
    },
    clinicalPearl: "The Safe Water Chain: Protect the source → Transport in covered vessels → Treat (boil/chlorinate) → Store in narrow-necked covered containers.",
    tags: ["safe-water", "boiling", "waterborne-diseases", "sanitation"]
  },
  {
    id: "PHC-019",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Integrated Management of Childhood Illness (IMCI)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Under the Integrated Management of Childhood Illness (IMCI) clinical assessment protocol for sick children aged 2 months to 5 years, which sign indicates an immediate General Danger Sign requiring urgent emergency referral?",
    options: [
      "Inability to drink or breastfeed, vomiting everything, convulsions, or being lethargic/unconscious",
      "Mild clear rhinorrhea (runny nose) with a temperature of 37.4°C",
      "A dry cough lasting for 2 days with normal respiratory rate",
      "Passing a single soft stool in the morning without blood"
    ],
    correctAnswer: 0,
    rationale: "IMCI defines four universal General Danger Signs in children aged 2 months to 5 years: 1) Inability to drink or breastfeed; 2) Vomiting everything; 3) Convulsions during the current illness; and 4) Lethargy or unconsciousness. A child with any General Danger Sign has a severe illness requiring immediate emergency pre-referral treatment and urgent transfer to a secondary facility.",
    optionRationales: {
      A: "Correct. Inability to drink, vomiting everything, convulsions, or lethargy are IMCI General Danger Signs.",
      B: "Mild rhinorrhea with normal temperature is managed at home as a simple upper respiratory infection.",
      C: "A short-duration cough with a normal respiratory rate is classified as 'No Pneumonia: Cough or Cold.'",
      D: "A single soft stool does not meet the definition of diarrhea (>=3 loose/watery stools in 24 hours)."
    },
    clinicalPearl: "The 4 IMCI General Danger Signs: 1) Can't drink/breastfeed, 2) Vomits everything, 3) Convulsing, 4) Lethargic or unconscious.",
    tags: ["IMCI", "danger-signs", "child-survival", "under-fives"]
  },
  {
    id: "PHC-020",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "The Shake Test for Freeze-Sensitive Vaccines",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A solar refrigerator malfunctions, and its internal temperature drops to -4°C overnight. The community nurse suspects that the vials of Tetanus-diphtheria (Td) toxoid have frozen. How does the nurse interpret a positive Shake Test confirming that the vaccine was damaged by freezing?",
    options: [
      "The test vial sediment settles much faster than a purposely frozen and thawed control vial, leaving a clear fluid layer on top within 15–30 minutes",
      "The test vial remains uniformly cloudy for 48 hours without any sedimentation",
      "The liquid changes color from cloudy white to bright neon green",
      "The glass vial breaks into fragments when shaken"
    ],
    correctAnswer: 0,
    rationale: "The WHO Shake Test evaluates freeze damage in aluminum-adsorbed vaccines. Freezing breaks the aluminum adjuvant-antigen bonds, causing the adjuvant to aggregate into heavy flakes. When a test vial and control vial (which was intentionally frozen and thawed) are shaken simultaneously and observed on a flat surface, a freeze-damaged vial exhibits rapid sedimentation of heavy flakes, leaving a clear supernatant layer faster than the control vial.",
    optionRationales: {
      A: "Correct. Rapid sedimentation of aggregated granules confirms freeze damage.",
      B: "Remaining cloudy with slow, uniform settling indicates a normal, undamaged liquid suspension.",
      C: "Chemical color shifts do not occur during the physical particulate shake test.",
      D: "The test evaluates internal sediment settling rates, not glass breakage."
    },
    clinicalPearl: "If an aluminum-adsorbed vaccine freezes, the adjuvant forms heavy flakes that settle quickly, leaving clear fluid above. That means it is damaged—discard it.",
    tags: ["shake-test", "cold-chain", "freeze-damage", "vaccine-safety"]
  },
  {
    id: "PHC-021",
    course: "Primary Health Care (PHC)",
    topic: "PHC Principles & Alma-Ata",
    subtopic: "Intersectoral Collaboration",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why is 'Intersectoral Collaboration' considered an essential pillar of Primary Health Care rather than relying on the health ministry alone?",
    options: [
      "The primary determinants of health (clean water, sanitation, agriculture, education, housing, transport) fall outside the direct jurisdiction of the health sector",
      "The Ministry of Health lacks legal authority to prescribe medications in rural clinics",
      "It allows the health sector to transfer all clinical work onto agricultural extension workers",
      "It eliminates the need for nurses to be trained in tertiary universities"
    ],
    correctAnswer: 0,
    rationale: "The Alma-Ata Declaration recognizes that health cannot be achieved by the medical sector alone. Upstream social determinants—clean potable water (water resources), roads for patient transport (public works), female literacy (education), and nutritious crops (agriculture)—require coordinated action across multiple government ministries and civil sectors.",
    optionRationales: {
      A: "Correct. Addressing root social determinants of health requires collaboration across water, housing, education, and agriculture.",
      B: "Health ministries hold statutory regulatory authority over pharmaceuticals.",
      C: "Collaboration coordinates multi-sectoral development; it does not eliminate clinical nursing care.",
      D: "Intersectoral collaboration works alongside, not in place of, professional nursing education."
    },
    clinicalPearl: "Intersectoral collaboration recognizes that clean water, paved roads, and female education save more lives than medications alone.",
    tags: ["intersectoral-collaboration", "Alma-Ata", "social-determinants", "principles"]
  },
  {
    id: "PHC-022",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Exclusive Breastfeeding Guidelines",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "According to WHO, UNICEF, and Nigerian National Infant Nutrition guidelines, what is the recommended duration of Exclusive Breastfeeding (EBF) for a healthy infant?",
    options: [
      "From birth up to 6 completed months of age (giving no other food or drink, not even water, except vitamins or medications)",
      "Exactly 2 weeks, followed by immediate introduction of corn starch gruel (pap/ogi)",
      "12 months with no other liquids or semi-solid foods allowed",
      "Exclusively until the infant's first tooth erupts"
    ],
    correctAnswer: 0,
    rationale: "Exclusive Breastfeeding (EBF) is defined as feeding an infant solely on breast milk for the first 6 months of life (180 days). No other liquids or solids—not even water—are permitted, with the exception of oral rehydration solutions, drops, or syrups of vitamins, minerals, or prescribed medicines. At 6 months, nutritionally adequate and safe complementary foods should be introduced alongside continued breastfeeding for up to 2 years or beyond.",
    optionRationales: {
      A: "Correct. Exclusive breastfeeding is recommended for the first 6 completed months of life.",
      B: "Early introduction of cereals at 2 weeks introduces waterborne pathogens and compromises gut barrier integrity.",
      C: "At 6 months, breast milk alone no longer meets the growing infant's micronutrient and caloric needs.",
      D: "Dentition timing varies widely and does not guide physiological nutritional readiness."
    },
    clinicalPearl: "Breast milk is over 80% water. Even in hot, arid climates, an exclusively breastfed infant does NOT need supplemental water during the first 6 months.",
    tags: ["exclusive-breastfeeding", "nutrition", "infant-health", "EBF"]
  },
  {
    id: "PHC-023",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Tuberculosis Directly Observed Therapy Short-Course (DOTS)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the National Tuberculosis, Leprosy and Buruli Ulcer Control Programme (NTBLCP), what is the central operational feature of the Directly Observed Therapy Short-Course (DOTS) strategy?",
    options: [
      "A designated healthcare worker or trained community treatment supporter directly watches the patient swallow every dose of anti-TB medication",
      "Handing the patient a 6-month supply of antibiotics to self-administer at home without follow-up",
      "Isolating all diagnosed tuberculosis patients in closed sanatoriums for 2 years",
      "Administering all tuberculosis medications by daily intravenous infusion"
    ],
    correctAnswer: 0,
    rationale: "The core operational pillar of DOTS is Directly Observed Therapy: an assigned healthcare worker, community health extension worker (CHEW), or trained community treatment supporter watches the patient swallow their anti-TB medications during every dose throughout the intensive phase. This ensures strict adherence, prevents treatment default, and stops the development of Multidrug-Resistant TB (MDR-TB).",
    optionRationales: {
      A: "Correct. Observing medication ingestion is the defining clinical feature of the DOTS strategy.",
      B: "Self-administration without supervision leads to poor compliance and drug-resistant mutations.",
      C: "Sanatorium isolation has been replaced by ambulatory, community-based DOTS clinics.",
      D: "Standard first-line anti-TB regimens (RHZE) are administered orally, not intravenously."
    },
    clinicalPearl: "DOTS ensures adherence: watching the patient swallow their tablets prevents treatment dropout and the emergence of drug-resistant strains.",
    tags: ["tuberculosis", "DOTS", "NTBLCP", "adherence", "infectious-disease"]
  },
  {
    id: "PHC-024",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Rapid Rural Appraisal (RRA) vs Survey Methods",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In community health needs assessment, what is the primary advantage of utilizing Participatory Rural Appraisal (PRA) techniques (such as community mapping, seasonal calendars, and focus groups) compared to traditional epidemiological surveys?",
    options: [
      "PRA actively involves community members as partners in analyzing their own local health problems and co-designing sustainable solutions",
      "PRA produces complex mathematical multivariable regression models without fieldwork",
      "PRA allows external researchers to collect blood specimens without community consent",
      "PRA eliminates the need for community dialogue sessions"
    ],
    correctAnswer: 0,
    rationale: "Participatory Rural Appraisal (PRA) is a participatory, bottom-up qualitative methodology. Instead of viewing community members as passive subjects answering questionnaires, PRA engages local residents as active analysts who map their resources, chart seasonal disease patterns, identify priorities, and design solutions, fostering community ownership.",
    optionRationales: {
      A: "Correct. PRA empowers community members to analyze their own reality and participate in solutions.",
      B: "Quantitative regression is a function of formal statistical surveys, not participatory field tools.",
      C: "Ethical informed consent is mandatory across all research approaches.",
      D: "PRA relies on ongoing community dialogue, focus groups, and seasonal discussions."
    },
    clinicalPearl: "PRA shifts the community's role from passive research subjects to active partners in identifying and solving local health problems.",
    tags: ["PRA", "community-diagnosis", "participatory-methods", "qualitative-assessment"]
  },
  {
    id: "PHC-025",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Measles Vaccine Administration",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under Nigeria's routine immunization schedule, at what age is the first dose of the Measles vaccine routinely administered to infants, and by what anatomical route?",
    options: [
      "9 months of age; Subcutaneously into the upper arm (deltoid region)",
      "At birth; Intradermally into the left forearm",
      "6 weeks of age; Orally as drops into the buccal mucosa",
      "18 months of age; Intramuscularly into the gluteal muscle"
    ],
    correctAnswer: 0,
    rationale: "The first dose of Measles (or Measles-Rubella, MR1) vaccine is routinely administered at 9 months of age (0.5 mL given subcutaneously in the left upper arm). Administering it before 9 months in non-outbreak settings is avoided because circulating maternal anti-measles IgG antibodies can neutralize the live attenuated vaccine virus, preventing seroconversion.",
    optionRationales: {
      A: "Correct. 9 months of age, administered subcutaneously (0.5 mL) in the upper arm.",
      B: "BCG is given at birth intradermally; measles is given at 9 months subcutaneously.",
      C: "OPV and Rotavirus are oral drops; measles is an injectable live-attenuated vaccine.",
      D: "18 months is the recommended age for booster doses, not the primary first dose."
    },
    clinicalPearl: "Measles vaccine is administered at 9 months because maternal antibodies wane around this time, allowing the infant to mount a protective immune response.",
    tags: ["measles-vaccine", "NPI", "subcutaneous", "child-health"]
  },
  {
    id: "PHC-026",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Mid-Upper Arm Circumference (MUAC) Screening",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During a community nutritional screening of children aged 6 to 59 months using a standardized Shakir (MUAC) tape, the measurement falls in the RED zone (< 11.5 cm). How should the nurse classify the child's nutritional status?",
    options: [
      "Severe Acute Malnutrition (SAM)",
      "Moderate Acute Malnutrition (MAM)",
      "Normal, healthy nutritional status",
      "Mild overweight risk"
    ],
    correctAnswer: 0,
    rationale: "MUAC cut-offs for children aged 6 to 59 months: Red (< 11.5 cm) = Severe Acute Malnutrition (SAM, high risk of mortality requiring immediate therapeutic feeding with RUTF or inpatient care); Yellow (11.5 to 12.4 cm) = Moderate Acute Malnutrition (MAM, supplementary feeding); Green (>= 12.5 cm) = Normal nutritional status.",
    optionRationales: {
      A: "Correct. MUAC < 11.5 cm (Red zone) indicates Severe Acute Malnutrition (SAM).",
      B: "MAM corresponds to the Yellow zone (11.5 cm to 12.4 cm).",
      C: "Normal status corresponds to the Green zone (>= 12.5 cm).",
      D: "Overweight is assessed using weight-for-height Z-scores, not low MUAC measurements."
    },
    clinicalPearl: "MUAC thresholds: Red (<11.5 cm) = Severe Acute Malnutrition (SAM). Yellow (11.5–12.4 cm) = Moderate (MAM). Green (>=12.5 cm) = Normal.",
    tags: ["MUAC", "SAM", "nutrition-screening", "child-health"]
  },
  {
    id: "PHC-027",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Vector Control: Insecticide-Treated Nets (ITNs)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Why are Long-Lasting Insecticidal Nets (LLINs) prioritized as a primary malaria control strategy in Nigerian primary health care centers?",
    options: [
      "They provide both a physical barrier preventing mosquito bites and a chemical repellent/killing effect that reduces the overall vector mosquito population",
      "They sterilize breeding sites in surrounding drainage gutters automatically",
      "They destroy intestinal malaria parasites when slept under",
      "They filter airborne viruses out of bedroom ventilation ducts"
    ],
    correctAnswer: 0,
    rationale: "Long-Lasting Insecticidal Nets (LLINs) treated with pyrethroid insecticides provide a dual mechanism: 1) A physical mesh barrier keeping nocturnal Anopheles mosquitoes from reaching sleeping individuals; and 2) A contact insecticide and spatial repellent effect that kills or deters mosquitoes landing on the netting, lowering the community-wide mosquito population.",
    optionRationales: {
      A: "Correct. LLINs combine physical blockage with chemical killing and repelling effects.",
      B: "Larviciding and environmental drainage manage breeding sites, not bed nets.",
      C: "Nets prevent mosquito bites; they do not kill parasites inside human blood.",
      D: "Nets target vector mosquitoes; they are not HEPA respiratory filters."
    },
    clinicalPearl: "Sleeping inside an LLIN every night is the most cost-effective community strategy for preventing vector transmission of malaria.",
    tags: ["LLIN", "malaria-prevention", "vector-control", "environmental-health"]
  },
  {
    id: "PHC-028",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "Minimum Standards for Primary Health Care in Nigeria",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "According to the NPHCDA 'Minimum Standards for Primary Health Care in Nigeria', what is the designated functional catchment population size for a standard Primary Health Care Centre (PHC Centre) at the ward level?",
    options: [
      "10,000 to 20,000 population",
      "500 to 1,000 population",
      "500,000 to 1,000,000 population",
      "Exclusively for a single family compound"
    ],
    correctAnswer: 0,
    rationale: "The NPHCDA Minimum Standards document defines three facility tiers: 1) Health Post (catchment: 500–2,000 people, village level); 2) Primary Health Clinic (catchment: 2,000–5,000 people, group of villages); 3) Primary Health Care Centre (catchment: 10,000–20,000 people, designated as the main facility for an electoral ward, offering 24-hour services).",
    optionRationales: {
      A: "Correct. A standard ward-level Primary Health Care Centre is planned for a catchment population of 10,000 to 20,000.",
      B: "500 to 2,000 describes the smaller village-level Health Post.",
      C: "500,000 to 1,000,000 describes secondary or tertiary general and specialist hospitals.",
      D: "Single households are the operational focus of home visits, not facility catchment planning."
    },
    clinicalPearl: "NPHCDA facility tiers: Health Post (500–2,000) → Primary Health Clinic (2,000–5,000) → Primary Health Care Centre (10,000–20,000).",
    tags: ["NPHCDA", "catchment-population", "minimum-standards", "facility-tiers"]
  },
  {
    id: "PHC-029",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Lassa Fever Community Prevention",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the primary animal reservoir responsible for transmitting Lassa fever virus to humans in endemic Nigerian communities, and how does transmission occur?",
    options: [
      "The multimammate rat (Mastomys natalensis), through contamination of household food or drinking water with its urine and droppings",
      "Anopheles mosquitoes, through evening bites",
      "Domestic goats, through consumption of unboiled pasteurized milk",
      "Blackflies (Simulium damnosum), through bites along fast-flowing rivers"
    ],
    correctAnswer: 0,
    rationale: "Lassa fever is an acute viral hemorrhagic illness caused by the Lassa virus. Its natural reservoir is the multimammate rat (Mastomys natalensis). Transmission occurs when food, surfaces, or water become contaminated with rat urine or feces, or when grain is dried on open roadsides accessible to rodents.",
    optionRationales: {
      A: "Correct. Mastomys natalensis transmits Lassa virus through food contaminated with urine and feces.",
      B: "Anopheles mosquitoes transmit Plasmodium falciparum malaria.",
      C: "Goats can transmit Brucellosis, not Lassa fever.",
      D: "Simulium damnosum blackflies transmit Onchocerca volvulus (river blindness)."
    },
    clinicalPearl: "Lassa prevention: Store food in rodent-proof containers, stop open-air grain drying along roadsides, and practice clean food hygiene.",
    tags: ["Lassa-fever", "Mastomys", "rodent-control", "endemic-diseases"]
  },
  {
    id: "PHC-030",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Family Planning & Modern Contraceptive Methods",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When counseling a postpartum mother who is breastfeeding exclusively, which modern family planning method should be avoided during the first 6 weeks postpartum because it can suppress breast milk production?",
    options: [
      "Combined Oral Contraceptive pills (containing estrogen and progestin)",
      "Progestin-only pills (Mini-pill)",
      "Copper-bearing Intrauterine Device (Cu-IUD)",
      "Male latex condoms"
    ],
    correctAnswer: 0,
    rationale: "Estrogen-containing contraceptives (Combined Oral Contraceptives - COCs, combined transdermal patches, and combined vaginal rings) suppress prolactin action on breast tissue, reducing milk volume and composition. Progestin-only methods (POPs, implants, depot-medroxyprogesterone) and non-hormonal barrier/copper IUD methods do not interfere with lactation.",
    optionRationales: {
      A: "Correct. Estrogen-containing contraceptives reduce milk volume and should be avoided during early lactation.",
      B: "Progestin-only pills (POPs) do not suppress lactation and are safe for breastfeeding mothers.",
      C: "Copper IUDs are non-hormonal and do not affect breast milk production.",
      D: "Male condoms are barrier methods with no hormonal impact on milk production."
    },
    clinicalPearl: "Avoid Estrogen-containing contraceptives in breastfeeding mothers; use Progestin-only pills, Implants, or Copper IUDs instead.",
    tags: ["family-planning", "contraception", "breastfeeding", "estrogen"]
  },
  {
    id: "PHC-031",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Adverse Events Following Immunization (AEFI)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Following the administration of routine BCG vaccine at birth, what normal local tissue reaction should the nurse counsel the mother to expect over the subsequent 2 to 6 weeks?",
    options: [
      "A small red papule that forms at the injection site, breaks down into a small ulcer, crusts over, and heals leaving a permanent scar within 6 to 12 weeks",
      "Immediate generalized urticaria and anaphylactic facial edema within 5 minutes",
      "High-grade remittent fever with profuse diarrhea",
      "Loss of functional movement across the entire upper arm"
    ],
    correctAnswer: 0,
    rationale: "A normal BCG reaction follows a predictable course: after 2–3 weeks, a small erythematous indurated papule develops at the insertion site; by 4–6 weeks, it forms a small shallow ulcer that discharges thin fluid; it then scabs over and heals spontaneously by 8–12 weeks, leaving a permanent rounded scar. Parents should be counseled to keep the site clean and dry, avoid applying balms, and avoid squeezing the lesion.",
    optionRationales: {
      A: "Correct. Papule → Ulcer → Scab → Healed permanent scar is the normal local reaction.",
      B: "Anaphylaxis is a rare, life-threatening allergic emergency, not the standard local BCG progression.",
      C: "High fever and profuse diarrhea are systemic pathologies unrelated to normal BCG administration.",
      D: "Loss of limb mobility indicates nerve trauma or injury, not a standard vaccine response."
    },
    clinicalPearl: "Reassure mothers that the BCG sore, ulcer, and scar are normal reactions that confirm the child is developing immunity against tuberculosis.",
    tags: ["BCG", "AEFI", "vaccine-reactions", "counseling"]
  },
  {
    id: "PHC-032",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Epidemiological Surveillance Types",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In routine disease surveillance, how does 'Active Surveillance' differ from 'Passive Surveillance'?",
    options: [
      "In active surveillance, health workers regularly visit clinics and communities to seek out and review case records, whereas passive surveillance relies on healthcare facilities submitting routine monthly reports on their own",
      "Active surveillance is conducted only by veterinary doctors on domestic animals",
      "Passive surveillance is illegal under federal health statutes",
      "Active surveillance requires all community members to test their own urine daily"
    ],
    correctAnswer: 0,
    rationale: "Passive surveillance involves routine, passive reporting: health centers record cases and send standardized periodic summary sheets (e.g., NHMIS forms) to health authorities. Active surveillance involves health agency staff actively contacting, calling, or visiting clinics, hospital wards, and community centers to search for unnotified cases (e.g., acute flaccid paralysis searches during polio eradication campaigns).",
    optionRationales: {
      A: "Correct. Active surveillance involves health officers reaching out to find cases; passive surveillance relies on routine facility reporting.",
      B: "Active surveillance is standard in human epidemiology and outbreak response.",
      C: "Passive surveillance is the foundational baseline reporting structure of health management systems.",
      D: "Surveillance relies on clinical data and facility records, not mandatory daily personal home testing."
    },
    clinicalPearl: "Active surveillance: You go out to hunt for cases. Passive surveillance: You wait for the health clinics to send in their monthly reports.",
    tags: ["surveillance", "active-surveillance", "passive-surveillance", "epidemiology"]
  },
  {
    id: "PHC-033",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Onchocerciasis (River Blindness) Control",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the biological vector that transmits Onchocerca volvulus (river blindness) in endemic riverine communities, and what is the primary community intervention used to eliminate it?",
    options: [
      "Simulium damnosum (Blackfly) breeding in fast-flowing rivers; controlled by Community-Directed Treatment with Ivermectin (CDTI)",
      "Tsetse flies (Glossina); controlled by indoor spraying with alcohol",
      "Culex mosquitoes; controlled by drinking borehole water",
      "Houseflies (Musca domestica); controlled by hanging yellow ribbons"
    ],
    correctAnswer: 0,
    rationale: "Onchocerciasis (River Blindness) is transmitted by the female Blackfly (Simulium damnosum), which breeds in fast-flowing, oxygenated rivers and streams. The primary community control strategy is Community-Directed Treatment with Ivermectin (CDTI), where local community volunteers distribute annual oral doses of Ivermectin (Mectizan) to kill microfilariae.",
    optionRationales: {
      A: "Correct. Simulium damnosum blackfly is the vector; CDTI with Ivermectin is the community control strategy.",
      B: "Tsetse flies transmit Human African Trypanosomiasis (sleeping sickness).",
      C: "Culex mosquitoes transmit lymphatic filariasis and West Nile virus, not onchocerciasis.",
      D: "Houseflies act as mechanical vectors for diarrheal pathogens and trachoma."
    },
    clinicalPearl: "Blackfly (Simulium damnosum) breeds in fast-flowing, oxygen-rich rivers. Community treatment uses annual Ivermectin (Mectizan).",
    tags: ["onchocerciasis", "river-blindness", "CDTI", "ivermectin", "vector-control"]
  },
  {
    id: "PHC-034",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Postpartum Hemorrhage (PPH) Community Prevention",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A midwife at a rural primary health center conducts a normal spontaneous delivery. In line with the Active Management of the Third Stage of Labor (AMTSL) to prevent postpartum hemorrhage, what is the drug and dose of choice to administer within 1 minute of fetal delivery?",
    options: [
      "Oxytocin 10 International Units (IU) administered intramuscularly",
      "Ergometrine 0.5 mg administered intravenously by bolus",
      "Oral Misoprostol 1,000 micrograms dissolved in boiling water",
      "Magnesium Sulfate 4 grams intravenous push over 1 minute"
    ],
    correctAnswer: 0,
    rationale: "AMTSL consists of three interventions to prevent PPH: 1) Administration of a uterotonic drug—specifically Oxytocin 10 IU intramuscularly within 1 minute of fetal delivery; 2) Controlled cord traction with counter-traction to the uterus; and 3) Uterine fundal massage after placental delivery. Oxytocin is preferred over ergometrine due to fewer cardiovascular side effects (e.g., severe hypertension).",
    optionRationales: {
      A: "Correct. Oxytocin 10 IU IM within 1 minute of birth is the gold standard uterotonic in AMTSL.",
      B: "Ergometrine causes severe peripheral vasoconstriction and hypertension; it is contraindicated in preeclampsia.",
      C: "Misoprostol (600 mcg orally) is reserved for situations where injectable oxytocin or a cold chain is unavailable.",
      D: "Magnesium sulfate is an anticonvulsant used for severe preeclampsia/eclampsia, not a uterotonic for PPH."
    },
    clinicalPearl: "AMTSL steps: 1) Oxytocin 10 IU IM within 1 minute of birth; 2) Controlled cord traction; 3) Fundal massage.",
    tags: ["AMTSL", "PPH", "maternal-health", "oxytocin", "safe-delivery"]
  },
  {
    id: "PHC-035",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Solid Waste Management in Rural Communities",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is an appropriate, sanitary, and low-cost method for disposing of non-infectious dry household solid waste in a rural primary community lacking municipal garbage collection?",
    options: [
      "Controlled sanitary composting for organic waste and burial in a dedicated, covered pit",
      "Dumping garbage into open drainage gutters and local stream beds",
      "Heaping waste in the town square and leaving it exposed",
      "Throwing waste onto neighboring household roofs"
    ],
    correctAnswer: 0,
    rationale: "Sanitary solid waste management in rural communities without centralized municipal collection relies on sorting waste: organic, biodegradable waste can be composted into agricultural fertilizer; dry, non-biodegradable waste should be buried in an excavated, fenced sanitary pit and covered with soil periodically to prevent rodent and vector breeding.",
    optionRationales: {
      A: "Correct. Composting organic matter and burying non-compostable dry refuse in a covered pit controls disease vectors.",
      B: "Dumping garbage into stream beds clogs waterways, causes flash flooding, and contaminates drinking water.",
      C: "Open dumping attracts rodents, flies, and stray animals, spreading diarrheal pathogens.",
      D: "Improper disposal on structures is unsanitary and hazardous."
    },
    clinicalPearl: "Never dump waste into drainage gutters or streams. Compost organic refuse and bury non-recyclable solid waste in a covered sanitary pit.",
    tags: ["waste-management", "sanitation", "environmental-health", "refuse-disposal"]
  },
  {
    id: "PHC-036",
    course: "Primary Health Care (PHC)",
    topic: "PHC Principles & Alma-Ata",
    subtopic: "Community Participation Definition",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under Primary Health Care philosophy, what is the core meaning of 'Community Participation'?",
    options: [
      "A process where community members actively take responsibility for assessing their health needs, mobilizing resources, and planning and implementing their own health programs",
      "Community members showing up only when instructed to clean hospital gutters by military administrators",
      "Allowing village elders to prescribe prescription antibiotics in open markets",
      "Patients paying 100% of all tertiary medical bills out-of-pocket without government support"
    ],
    correctAnswer: 0,
    rationale: "Community Participation is a democratic, self-reliant process. It means the community is not merely a passive recipient of external medical charity, but an active partner involved in identifying local health priorities, choosing interventions, contributing local resources, and holding health services accountable.",
    optionRationales: {
      A: "Correct. Active community ownership in assessment, planning, implementation, and governance defines true participation.",
      B: "Coerced labor is forced compliance, not self-determined community participation.",
      C: "Participation does not mean bypassing professional safety regulations or promoting uncertified prescription trade.",
      D: "Out-of-pocket health costs create financial barriers, the opposite of equitable community participation."
    },
    clinicalPearl: "Community participation transforms people from passive beneficiaries into active partners in their own health development.",
    tags: ["community-participation", "Alma-Ata", "principles", "empowerment"]
  },
  {
    id: "PHC-037",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Inactivated Polio Vaccine (IPV) Introduction",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why was the injectable Inactivated Polio Vaccine (IPV) introduced into the routine NPI schedule alongside the oral live-attenuated polio vaccine (OPV)?",
    options: [
      "To boost systemic humoral immunity and reduce the risk of Vaccine-Derived Paralytic Poliomyelitis (VDPV)",
      "Because OPV was completely discontinued worldwide",
      "Because IPV provides immediate oral mucosal gut immunity against cholera",
      "To replace all vitamin A capsules given to neonates"
    ],
    correctAnswer: 0,
    rationale: "In rare instances, the live-attenuated virus in OPV can mutate in under-immunized populations, causing Vaccine-Associated Paralytic Polio (VAPP) or circulating Vaccine-Derived Poliovirus (cVDPV). Adding IPV (which contains killed, non-replicating virus) induces strong serum IgG immunity, providing a safety net that protects children against paralysis even if exposed to mutated vaccine strains.",
    optionRationales: {
      A: "Correct. IPV strengthens systemic immunity and protects against vaccine-derived circulating polioviruses.",
      B: "OPV remains in use in routine schedules across endemic and transition countries for mucosal gut immunity.",
      C: "IPV targets poliovirus, not Vibrio cholerae.",
      D: "Vitamin A supplementation is maintained independently for retinal and immune development."
    },
    clinicalPearl: "OPV builds mucosal gut immunity (stops wild virus transmission). IPV builds systemic blood immunity (stops paralysis without shedding live virus).",
    tags: ["IPV", "OPV", "polio-eradication", "NPI", "vaccines"]
  },
  {
    id: "PHC-038",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Schistosomiasis (Bilharzia) Prevention",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What intermediate freshwater host is required to complete the life cycle of Schistosoma haematobium (urinary bilharziasis), and what is the primary presenting clinical symptom in infected school children?",
    options: [
      "Freshwater Bulinus snails; Terminal painless hematuria (blood at the end of micturition)",
      "Marine crabs; Copious purulent urethral discharge",
      "Anopheles mosquitoes; High fever and jaundice",
      "Blackflies; Blindness and dry skin itching"
    ],
    correctAnswer: 0,
    rationale: "Schistosoma haematobium miracidia infect freshwater Bulinus snails (the intermediate host), which release free-swimming cercariae that penetrate human skin during swimming, washing, or wading in freshwater ponds. The adult flukes live in the venous plexus of the urinary bladder, depositing eggs that tear through the mucosa, causing Terminal Painless Hematuria.",
    optionRationales: {
      A: "Correct. Bulinus snail is the intermediate host; terminal hematuria is the classic presenting symptom.",
      B: "Crabs are secondary hosts for Paragonimus lung flukes, not Schistosoma haematobium.",
      C: "Mosquitoes transmit malaria and filarial worms, not trematodes.",
      D: "Blackflies transmit onchocerciasis, not schistosomiasis."
    },
    clinicalPearl: "Painless terminal hematuria in a school child who swims in local streams indicates urinary schistosomiasis. Treat with oral Praziquantel (40 mg/kg).",
    tags: ["schistosomiasis", "bilharzia", "snails", "hematuria", "praziquantel"]
  },
  {
    id: "PHC-039",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Antenatal Care (ANC) Visits Schedule (WHO Model)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the updated WHO and Nigerian National Maternal Health guidelines, what is the minimum number of Antenatal Care (ANC) contacts recommended for a pregnant woman experiencing an uncomplicated pregnancy?",
    options: [
      "At least 8 contacts",
      "A minimum of 4 visits only",
      "Exactly 2 visits (first and third trimester)",
      "A single visit on the day labor begins"
    ],
    correctAnswer: 0,
    rationale: "In 2016, WHO updated the focused antenatal care (FANC 4-visit) model to an 8-contact model to reduce perinatal mortality and improve maternal experience. Nigeria adopted this 8-contact schedule: first contact in the first trimester (up to 12 weeks), followed by contacts at 20, 26, 30, 34, 36, 38, and 40 weeks.",
    optionRationales: {
      A: "Correct. The current national and WHO standard recommends a minimum of 8 antenatal contacts.",
      B: "4 visits was the older Focused Antenatal Care (FANC) model, updated to 8 contacts.",
      C: "2 visits is inadequate to monitor fetal growth or manage emerging preeclampsia.",
      D: "First presenting during labor eliminates opportunities for preventive interventions (e.g., screening, IPTp, Td)."
    },
    clinicalPearl: "The standard ANC model recommends a minimum of 8 contacts to detect complications (e.g., preeclampsia, anemia, gestational diabetes) early.",
    tags: ["ANC", "maternal-health", "8-contacts", "WHO-guidelines"]
  },
  {
    id: "PHC-040",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Maternal Mortality Ratio (MMR) Indicator",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "How is the Maternal Mortality Ratio (MMR)—a key community indicator of primary healthcare system performance—statistically defined and calculated?",
    options: [
      "The number of maternal deaths per 100,000 live births during a specified time period",
      "The number of maternal deaths per 1,000 women of reproductive age",
      "The total number of female deaths from any cause divided by total births",
      "The percentage of pregnant women delivering in tertiary hospitals"
    ],
    correctAnswer: 0,
    rationale: "Maternal Mortality Ratio (MMR) is calculated as: (Number of resident maternal deaths due to obstetric causes / Total number of live births) x 100,000 live births over a given period. It measures obstetric risk per pregnancy. Maternal Mortality Rate measures maternal deaths per 1,000 women of reproductive age (15–49 years).",
    optionRationales: {
      A: "Correct. Maternal deaths per 100,000 live births defines the Maternal Mortality Ratio (MMR).",
      B: "Maternal deaths per 1,000 women of reproductive age defines the Maternal Mortality Rate.",
      C: "Non-obstetric female deaths (e.g., traffic collisions) are excluded from maternal mortality calculations.",
      D: "Facility delivery rates describe service utilization, not mortality ratios."
    },
    clinicalPearl: "Maternal Mortality RATIO is expressed per 100,000 live births. Infant Mortality Rate is expressed per 1,000 live births.",
    tags: ["MMR", "maternal-mortality", "indicators", "vital-statistics"]
  },
  {
    id: "PHC-041",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Food Hygiene & The Five Keys to Safer Food",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "According to the World Health Organization's 'Five Keys to Safer Food' framework promoted in primary health education, what is the critical temperature rule to prevent bacterial multiplication in prepared food?",
    options: [
      "Keep hot food steaming hot (above 60°C) and keep cold food cold (below 5°C); avoid leaving cooked food at room temperature for more than 2 hours",
      "Store cooked chicken at 37°C for 24 hours to promote beneficial bacterial growth",
      "Reheat leftovers at low, lukewarm temperatures (around 30°C)",
      "Freeze cooked rice, thaw it at room temperature, and refreeze it repeatedly"
    ],
    correctAnswer: 0,
    rationale: "The 'Danger Zone' for foodborne bacterial growth is between 5°C and 60°C (41°F to 140°F), where pathogens replicate rapidly. The Five Keys to Safer Food dictate: keep hot food hot (>60°C), keep cold food refrigerated (<5°C), do not leave cooked food at room temperature for >2 hours, and reheat leftovers thoroughly to >70°C.",
    optionRationales: {
      A: "Correct. Keep hot food >60°C and cold food <5°C to stay outside the microbial Danger Zone.",
      B: "37°C is human body temperature—the optimal incubation temperature for enteric bacterial proliferation.",
      C: "Lukewarm reheating incubates bacterial spores and heat-stable toxins (e.g., Staphylococcus aureus enterotoxins).",
      D: "Repeated thawing and refreezing promotes bacterial multiplication and food spoilage."
    },
    clinicalPearl: "The food temperature Danger Zone is 5°C to 60°C. Keep hot food hot (>60°C) and cold food cold (<5°C).",
    tags: ["food-hygiene", "danger-zone", "WHO-keys", "sanitation"]
  },
  {
    id: "PHC-042",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "National Health Management Information System (NHMIS)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In daily primary health care clinic operations, what is the statutory monthly reporting form used across Nigeria to compile routine primary healthcare service data (ANC, immunization, nutrition, diseases) for submission to the LGA monitoring team?",
    options: [
      "NHMIS Monthly Facility Summary Form (MSF / Version 2019)",
      "Police Crime Diary Extract Form",
      "Commercial Bank Deposit Slip",
      "Individual patient bed ticket"
    ],
    correctAnswer: 0,
    rationale: "The National Health Management Information System (NHMIS) uses standardized tools: daily registers (ANC register, Child Immunization register, Outpatient register) feed data into the comprehensive NHMIS Monthly Summary Form (MSF). The primary facility in-charge completes this form at month-end and submits it to the LGA Monitoring and Evaluation (M&E) officer.",
    optionRationales: {
      A: "Correct. The NHMIS Monthly Summary Form aggregates facility data for local, state, and national health reporting.",
      B: "Police extracts are legal records, not routine primary health epidemiological reporting tools.",
      C: "Bank slips are financial receipts, not health management information tools.",
      D: "Individual clinical notes stay in the facility and do not serve as aggregate monthly reporting returns."
    },
    clinicalPearl: "NHMIS Monthly Summary Form (MSF): Aggregates daily clinic registers into a monthly summary for entry into the DHIS2 national database.",
    tags: ["NHMIS", "DHIS2", "health-records", "monitoring-evaluation"]
  },
  {
    id: "PHC-043",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Yellow Fever Vaccine Details",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the NPI schedule, which single-dose, live-attenuated vaccine is administered subcutaneously to infants at 9 months of age to confer lifelong protection against an endemic hemorrhagic flavivirus infection?",
    options: [
      "Yellow Fever Vaccine (17D strain)",
      "Hepatitis B vaccine",
      "Pneumococcal Conjugate Vaccine (PCV)",
      "Tetanus toxoid vaccine"
    ],
    correctAnswer: 0,
    rationale: "The Yellow Fever vaccine (using the live-attenuated 17D strain) is administered routinely at 9 months of age (0.5 mL subcutaneously) in Nigeria. A single dose provides durable immunity, with international health regulations recognizing a single dose as conferring lifelong protection without requiring routine 10-year boosters.",
    optionRationales: {
      A: "Correct. Yellow Fever vaccine (17D strain) is given at 9 months and confers lifelong immunity.",
      B: "Hepatitis B is an inactivated subunit vaccine administered at birth, 6, 10, and 14 weeks.",
      C: "PCV is a conjugate vaccine given at 6, 10, and 14 weeks to prevent Streptococcus pneumoniae infections.",
      D: "Tetanus toxoid is an inactivated protein toxoid, not a live flavivirus vaccine."
    },
    clinicalPearl: "Yellow fever vaccine is a live attenuated vaccine administered at 9 months in the right upper arm. A single dose confers lifelong immunity.",
    tags: ["yellow-fever", "NPI", "immunization", "flavivirus"]
  },
  {
    id: "PHC-044",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Guinea Worm (Dracunculiasis) Eradication",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Nigeria was certified free of Guinea Worm Disease (Dracunculiasis) by the WHO in 2013. How was this waterborne parasitic nematode transmitted to humans, and what was the key community eradication intervention?",
    options: [
      "Ingesting open pond water containing copepods (Cyclops water fleas) harboring larvae; eradicated through borehole drilling, water filtration through monofilament cloths, and Abate chemical treatment of ponds",
      "Bites from infected mosquitoes; eradicated by spraying DDT indoors",
      "Eating undercooked pork; eradicated by pig farm closures",
      "Walking barefoot on soil; eradicated by distributing leather shoes"
    ],
    correctAnswer: 0,
    rationale: "Dracunculus medinensis (Guinea worm) was transmitted by drinking stagnant pond water contaminated with copepods (Cyclops water fleas) that ingested guinea worm larvae. In the human stomach, the fleas digested, releasing larvae that matured and migrated to subcutaneous tissues (typically the lower leg). Eradication was achieved without a vaccine or curative drug by filtering drinking water through fine mesh cloth, providing safe boreholes, applying Abate (temephos) larvicide to ponds, and isolating affected individuals.",
    optionRationales: {
      A: "Correct. Cyclops fleas in open ponds transmitted larvae; filtered drinking water, boreholes, and pond treatment eradicated it.",
      B: "Mosquitoes transmit filarial worms, not Dracunculus medinensis.",
      C: "Eating undercooked pork transmits Taenia solium tapeworms, not guinea worm.",
      D: "Walking barefoot transmits hookworm (Necator/Ancylostoma) and Strongyloides.",
    },
    clinicalPearl: "Guinea worm eradication succeeded through simple behavioral and environmental interventions: filtering pond water through cloth filters and drilling safe boreholes.",
    tags: ["guinea-worm", "dracunculiasis", "eradication", "safe-water", "Cyclops"]
  },
  {
    id: "PHC-045",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Partograph Use in Primary Labor Monitoring",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A midwife at a primary health care center monitors a primigravida in active labor using a modified WHO Partograph. The cervical dilatation plot crosses to the RIGHT of the 'Alert Line'. What is the required clinical action?",
    options: [
      "Transfer the woman immediately along the referral ladder to a Comprehensive Emergency Obstetric Care (CEmONC) facility with surgical capabilities",
      "Continue waiting patiently for another 12 hours without intervention",
      "Administer oral sedatives and send the woman home to rest",
      "Stop plotting the partograph and rupture the membranes with unsterile scissors"
    ],
    correctAnswer: 0,
    rationale: "The Partograph Alert Line represents the slowest acceptable rate of cervical dilation (1 cm/hour) in active labor. If the plot crosses to the right of the Alert Line, it warns of prolonged labor or cephalopelvic disproportion. At a primary health center lacking surgical theaters, crossing the Alert Line is the trigger to organize transport and refer the client to a secondary CEmONC hospital before the Action Line is reached.",
    optionRationales: {
      A: "Correct. Crossing the Alert Line signals delayed progress, requiring referral from primary to secondary care.",
      B: "Waiting another 12 hours risks obstructed labor, uterine rupture, and obstetric fistula.",
      C: "Sending an active labor patient home with sedatives is dangerous clinical negligence.",
      D: "Unsterile artificial rupture of membranes causes chorioamnionitis and cord prolapse."
    },
    clinicalPearl: "Partograph rule at PHC level: When cervical dilatation crosses to the right of the Alert Line, initiate immediate transfer to a surgical hospital.",
    tags: ["partograph", "alert-line", "labor-monitoring", "referral", "CEmONC"]
  },
  {
    id: "PHC-046",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Waterborne vs Water-Washed vs Water-Based Diseases",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In environmental public health classifications, which pair correctly matches a 'Water-Washed' disease with its primary environmental prevention strategy?",
    options: [
      "Trachoma and Scabies; prevented by increasing the volume and accessibility of water for personal and facial hygiene",
      "Cholera and Typhoid; prevented by eradicating freshwater snails",
      "Malaria and Yellow fever; prevented by chlorinating drinking water reservoirs",
      "Schistosomiasis; prevented by drinking unboiled spring water"
    ],
    correctAnswer: 0,
    rationale: "Bradley's classification of water-related diseases: 1) Water-borne (ingested: Cholera, Typhoid); 2) Water-washed (lack of sufficient water volume for personal hygiene and washing: Trachoma, Scabies, conjunctivitis); 3) Water-based (aquatic intermediate hosts: Schistosomiasis, Guinea worm); 4) Water-related insect vector (breeding near water: Malaria, River blindness). Water-washed diseases decline when water quantity and accessibility for washing improve.",
    optionRationales: {
      A: "Correct. Trachoma and scabies are water-washed infections prevented by increasing water availability for washing.",
      B: "Cholera and typhoid are water-borne diseases prevented by water treatment and sanitation.",
      C: "Malaria and yellow fever are water-related vector diseases; chlorinating reservoirs does not stop mosquito breeding in standing puddles.",
      D: "Schistosomiasis is a water-based disease contracted by skin penetration in infested water."
    },
    clinicalPearl: "Water-borne = Ingested water quality problem. Water-washed = Insufficient water quantity for personal and facial hygiene.",
    tags: ["water-washed", "trachoma", "scabies", "environmental-classification"]
  },
  {
    id: "PHC-047",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Cold Chain Equipment Maintenance",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When ice packs are removed from a deep freezer (-20°C) for placement inside a portable vaccine carrier for an outreach session, why must the nurse 'condition' the ice packs until droplets of water appear and ice rattles inside?",
    options: [
      "To prevent frozen ice packs from freezing and ruining freeze-sensitive vaccines (e.g., Pentavalent, Td, Hep B) placed inside the carrier",
      "To melt all the ice into drinking water for the healthcare workers",
      "To warm the vaccine carrier up to body temperature (37°C)",
      "Because cold vaccines lose their potency when administered cold"
    ],
    correctAnswer: 0,
    rationale: "Ice packs straight from a deep freezer are at sub-zero temperatures (between -15°C and -20°C). If placed directly next to freeze-sensitive vaccines (Penta, PCV, Td, Hep B), they can freeze the vaccines within 30 minutes, precipitating adjuvant collapse. 'Conditioning' means keeping ice packs at room temperature until frost melts, water drops form, and the ice core rattles, bringing the surface temperature up to 0°C.",
    optionRationales: {
      A: "Correct. Conditioning prevents sub-zero ice packs from freezing sensitive vaccines during outreach.",
      B: "Conditioning aims to prevent vaccine freeze damage, not provide drinking water.",
      C: "Carriers should stay between +2°C and +8°C, not warm up to 37°C.",
      D: "Vaccines should remain cold; conditioning avoids freezing, not cool storage."
    },
    clinicalPearl: "Always CONDITION ice packs before loading a vaccine carrier: let them sit until they sweat and rattle, bringing their surface temperature to 0°C.",
    tags: ["cold-chain", "ice-packs", "conditioning", "vaccine-carrier"]
  },
  {
    id: "PHC-048",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Kangaroo Mother Care (KMC) in Low-Resource Settings",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What are the two core clinical components of Kangaroo Mother Care (KMC) used at primary health care centers to manage stable low-birth-weight and preterm neonates?",
    options: [
      "Continuous, prolonged skin-to-skin contact between the infant's chest and mother's breasts, combined with exclusive and frequent breastfeeding",
      "Placing the infant in a closed electric incubator powered by a car battery",
      "Feeding the infant animal milk through an unsterile bottle while sleeping in a separate cot",
      "Swaddling the infant in heavy woolen blankets and leaving them in an unheated room"
    ],
    correctAnswer: 0,
    rationale: "Kangaroo Mother Care (KMC) is an evidence-based intervention for low-birth-weight (<2,500g) and preterm infants in low-resource settings. Its two core components are: 1) Continuous, prolonged skin-to-skin contact (infant held upright against the mother's bare chest, dressed in a diaper and cap); and 2) Exclusive and frequent breastfeeding or cup-feeding with expressed breast milk.",
    optionRationales: {
      A: "Correct. Continuous skin-to-skin contact and exclusive breastfeeding are the defining pillars of KMC.",
      B: "Electric incubators require technical support and reliable power, which KMC safely and effectively replaces.",
      C: "Artificial bottle feeding with cow's milk increases the risk of necrotizing enterocolitis and diarrheal death.",
      D: "Swaddling alone without maternal skin contact leaves small neonates vulnerable to hypothermia."
    },
    clinicalPearl: "KMC acts as a natural incubator: maternal body heat prevents neonatal hypothermia, stabilizes heart rates, promotes breastfeeding, and lowers mortality.",
    tags: ["KMC", "low-birth-weight", "neonatal-care", "skin-to-skin"]
  },
  {
    id: "PHC-049",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "National Primary Health Care Development Agency (NPHCDA) Role",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the primary statutory mandate of the National Primary Health Care Development Agency (NPHCDA) under the Federal Ministry of Health in Nigeria?",
    options: [
      "Providing national policy direction, technical support, guidelines, resource mobilization, and monitoring for primary healthcare across all states and LGAs",
      "Licensing private commercial airlines and regulating aviation landing rights",
      "Operating tertiary open-heart surgery centers directly",
      "Enforcing criminal penalties on patients who miss clinic appointments"
    ],
    correctAnswer: 0,
    rationale: "Established by decree in 1992, the NPHCDA is the federal parastatal mandated to formulate national primary health care policies, provide technical assistance to states and LGAs, set minimum standards for PHC facilities, coordinate disease control and routine immunization campaigns, and support primary health care development nationwide.",
    optionRationales: {
      A: "Correct. The NPHCDA provides national policy guidance, standards, resource mobilization, and technical support for PHC.",
      B: "Aviation is regulated by the Civil Aviation Authority, not health agencies.",
      C: "Tertiary surgery centers are operated by teaching hospitals under federal hospital divisions.",
      D: "Health agencies do not enforce criminal penalties for clinic absenteeism."
    },
    clinicalPearl: "The NPHCDA sets national primary health care standards, manages the national vaccine cold chain, and coordinates the Ward Health System.",
    tags: ["NPHCDA", "governance", "statutory-mandate", "health-policy"]
  },
  {
    id: "PHC-050",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Focus Group Discussion (FGD) Methodology",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When conducting a Focus Group Discussion (FGD) to explore community reluctance regarding childhood routine immunizations, what is the ideal group size and composition for effective dialogue?",
    options: [
      "6 to 12 participants with homogeneous demographic characteristics (e.g., young mothers only) guided by a trained facilitator and a note-taker",
      "50 to 100 people of all ages and genders talking simultaneously without a moderator",
      "A 1-on-1 private interrogation conducted behind closed doors with a police officer",
      "Only the village chief speaking while the community listens in silence"
    ],
    correctAnswer: 0,
    rationale: "Methodologically, a Focus Group Discussion (FGD) works best with 6 to 12 participants who share similar social characteristics (homogeneity: e.g., mothers of under-five children grouped together, and village elders grouped separately). This avoids power imbalances, encourages comfortable sharing of attitudes, and allows a facilitator and note-taker to explore viewpoints thoroughly.",
    optionRationales: {
      A: "Correct. 6–12 homogeneous participants with a facilitator and note-taker is the standard FGD format.",
      B: "Groups over 12 become chaotic and difficult to manage, preventing in-depth exploration.",
      C: "One-on-one sessions are Key Informant Interviews (KIIs), not focus group discussions.",
      D: "A single authority speaking is a town hall address or community briefing, not a qualitative research discussion."
    },
    clinicalPearl: "FGD rule: 6 to 12 participants. Keep groups homogeneous (e.g., young mothers separated from mothers-in-law) so participants speak freely.",
    tags: ["FGD", "qualitative-methods", "community-diagnosis", "research-methods"]
  },
  {
    id: "PHC-051",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Newborn Umbilical Cord Care (Chlorhexidine 7.1%)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the Federal Ministry of Health and NPHCDA newborn care guidelines, what topical formulation is recommended for routine umbilical cord care to prevent neonatal omphalitis and sepsis in primary health care settings?",
    options: [
      "Chlorhexidine digluconate 7.1% gel (delivering 4% chlorhexidine)",
      "Methylated spirit (70% surgical ethanol)",
      "Traditional charcoal powder mixed with engine oil",
      "Gentian violet 0.5% aqueous solution"
    ],
    correctAnswer: 0,
    rationale: "Nigeria's national policy on umbilical cord care recommends applying Chlorhexidine digluconate 7.1% gel (delivering 4% free chlorhexidine) to the umbilical cord stump daily for the first week of life. Methylated spirit is no longer recommended because it evaporates rapidly, causes hypothermia, delays cord separation, and provides inferior antibacterial protection compared to chlorhexidine gel.",
    optionRationales: {
      A: "Correct. Chlorhexidine digluconate 7.1% gel applied daily to the stump is the national standard.",
      B: "Methylated spirit is no longer recommended because it delays cord separation and provides brief antimicrobial coverage.",
      C: "Charcoal, cow dung, and engine oil are harmful traditional practices that introduce Clostridium tetani spores.",
      D: "Gentian violet is an antifungal agent, not the national first-line agent for cord stump sepsis prevention."
    },
    clinicalPearl: "Chlorhexidine 7.1% gel reduces neonatal cord infections by over 60%. Teach mothers to apply it daily and avoid methylated spirit or unsterile traditional balms.",
    tags: ["newborn-care", "chlorhexidine", "cord-care", "neonatal-sepsis", "NPHCDA"]
  },
  {
    id: "PHC-052",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "WHO Multi-Dose Vial Policy (MDVP)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "According to the revised WHO and NPHCDA Multi-Dose Vial Policy (MDVP), how long can an opened multi-dose vial of liquid, preservative-containing vaccine (such as Pentavalent, bOPV, or Td) be kept and used for subsequent clinic sessions if cold chain rules are maintained?",
    options: [
      "Up to 28 days after opening",
      "Only for 6 hours after opening, then discarded",
      "Indefinitely until the vial is empty",
      "Only during the immediate 2-hour morning session"
    ],
    correctAnswer: 0,
    rationale: "Under the WHO Multi-Dose Vial Policy (MDVP), opened vials of liquid vaccines containing preservatives (e.g., OPV, Pentavalent liquid, Td, Hepatitis B) can be kept and used for up to 28 days, provided the expiration date has not passed, the cold chain (+2°C to +8°C) is maintained, the vial septum was not submerged in water, and the VVM has not reached the discard stage. Reconstituted freeze-dried vaccines (BCG, Measles, Yellow Fever) must be discarded within 6 hours.",
    optionRationales: {
      A: "Correct. Liquid preservative-containing multi-dose vials can be used for up to 28 days under strict cold-chain compliance.",
      B: "6 hours applies strictly to reconstituted lyophilized vaccines (BCG, Measles, Yellow Fever).",
      C: "Vaccines cannot be kept indefinitely; 28 days is the maximum regulatory cut-off.",
      D: "Limiting use to 2 hours is unnecessary and leads to high vaccine wastage."
    },
    clinicalPearl: "Open vial rule: Reconstituted powdered vaccines (BCG, Measles, Yellow Fever) = Discard after 6 hours. Liquid preservative vaccines (Penta, OPV, Td) = Keep up to 28 days.",
    tags: ["MDVP", "cold-chain", "open-vial-policy", "NPHCDA", "vaccine-wastage"]
  },
  {
    id: "PHC-053",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "Drug Revolving Fund (DRF) Mechanics",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the primary operational objective of establishing a Drug Revolving Fund (DRF) mechanism in a Local Government Primary Health Care department?",
    options: [
      "Ensuring a continuous, uninterrupted supply of essential generic medications by reinvesting sales revenues back into restocking inventory",
      "Providing free medications to wealthy political officials during election periods",
      "Eliminating the need for nurses to maintain inventory ledger books",
      "Allowing primary clinics to sell untested herbal tonics on credit"
    ],
    correctAnswer: 0,
    rationale: "The Drug Revolving Fund (DRF), rooted in the Bamako Initiative, creates a self-sustaining financial mechanism: an initial capital investment purchases essential generic drugs, which are sold to clients at cost plus a modest markup. The revenue generated is ring-fenced in a dedicated account and used exclusively to repurchase replacement drugs, preventing out-of-stock crises (stockouts).",
    optionRationales: {
      A: "Correct. DRF reinvests drug sales revenue back into procurement to prevent stockouts.",
      B: "Using DRF funds for political patronage drains capital and causes systemic drug stockouts.",
      C: "DRF requires strict financial accounting and stock ledger monitoring.",
      D: "DRF handles approved essential national generic drugs, not unregulated herbal concoctions."
    },
    clinicalPearl: "DRF sustainability requires: 1) Cost-recovery pricing, 2) Dedicated bank accounts, 3) Transparent procurement, 4) Strict separation from general revenue.",
    tags: ["DRF", "Bamako-Initiative", "essential-drugs", "health-financing"]
  },
  {
    id: "PHC-054",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Case Fatality Rate (CFR)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "During an outbreak of Lassa fever in a rural local government area, 200 clinical cases are laboratory-confirmed and 40 of these confirmed individuals die from the infection. What is the Case Fatality Rate (CFR) of this outbreak?",
    options: [
      "20%",
      "0.2%",
      "40%",
      "5%"
    ],
    correctAnswer: 0,
    rationale: "Case Fatality Rate (CFR) measures the severity or virulence of a disease, defined as the proportion of individuals diagnosed with a specific condition who die from that condition within a specified time period: CFR = (Deaths from disease / Confirmed cases of disease) x 100 = (40 / 200) x 100 = 20%.",
    optionRationales: {
      A: "Correct. (40 / 200) x 100 = 20% case fatality rate.",
      B: "0.2% is a decimal conversion error (failing to multiply by 100).",
      C: "40% uses the raw numerator rather than the mathematical proportion.",
      D: "5% inverts the division (200 / 40 = 5)."
    },
    clinicalPearl: "Case Fatality Rate (CFR) = (Deaths from a disease / Total confirmed cases of that disease) x 100. It measures pathogen severity, not population-wide mortality.",
    tags: ["CFR", "epidemiology", "case-fatality", "Lassa-fever", "outbreak"]
  },
  {
    id: "PHC-055",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Misoprostol for Community PPH Prevention",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In remote rural communities where injectable oxytocin and cold chain refrigeration are unavailable, what oral uterotonic regimen is recommended for community distribution to prevent postpartum hemorrhage (PPH) immediately following childbirth?",
    options: [
      "Misoprostol 600 micrograms (3 tablets of 200 mcg) taken orally",
      "Ergometrine 10 mg taken orally with cold milk",
      "Tranexamic acid 500 mg dissolved in hot tea",
      "Magnesium sulfate 10 grams dissolved in drinking water"
    ],
    correctAnswer: 0,
    rationale: "In community-based settings lacking a cold chain or skilled birth attendants authorized to give parenteral injections, WHO and the FMOH recommend Misoprostol 600 mcg orally (three 200 mcg tablets) administered immediately after the birth of the baby (and confirmation that no second twin remains in utero) to stimulate uterine contractions and prevent PPH.",
    optionRationales: {
      A: "Correct. Oral Misoprostol 600 mcg is heat-stable and recommended when injectable oxytocin is unavailable.",
      B: "Oral ergometrine is unstable at room temperature and causes severe hypertensive spikes.",
      C: "Tranexamic acid is an intravenous antifibrinolytic indicated for active PPH treatment, not first-line community prophylaxis.",
      D: "Magnesium sulfate is an anticonvulsant for eclampsia, not a uterotonic for PPH."
    },
    clinicalPearl: "Misoprostol 600 mcg orally is heat-stable and does not require a cold chain, making it the primary alternative for community-level PPH prevention.",
    tags: ["misoprostol", "PPH", "maternal-health", "task-shifting", "NPHCDA"]
  },
  {
    id: "PHC-056",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Breakpoint Chlorination of Water",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "When treating municipal or community borehole water with chlorine disinfectant, what does the 'Breakpoint' in water chlorination signify?",
    options: [
      "The point where chlorine demand has been fully satisfied and free residual chlorine becomes available for ongoing microbial disinfection",
      "The exact moment the plumbing pipes crack under high pressure",
      "The concentration where water becomes completely toxic and unpalatable for human consumption",
      "The complete evaporation of all chlorine gas from the water storage reservoir"
    ],
    correctAnswer: 0,
    rationale: "Chlorine added to water first reacts with impurities, iron, and ammonia (chlorine demand/combined chlorine). The 'Breakpoint' is the point at which all oxidizable matter and ammonia are consumed. Any chlorine added beyond this breakpoint remains as Free Residual Chlorine (FRC), which provides ongoing protection against recontamination in the distribution system.",
    optionRationales: {
      A: "Correct. Breakpoint chlorination satisfies all chemical demand and leaves free residual chlorine to kill pathogens.",
      B: "Breakpoint is a chemical titration threshold, not a physical piping failure.",
      C: "Proper breakpoint chlorination produces water with safe residual chlorine (0.2–0.5 mg/L), safe for consumption.",
      D: "Residual chlorine stays dissolved in water; it does not indicate complete gas evaporation."
    },
    clinicalPearl: "Effective water chlorination requires maintaining Free Residual Chlorine (FRC) between 0.2 and 0.5 mg/L at the point of consumption.",
    tags: ["water-treatment", "breakpoint-chlorination", "environmental-health", "safe-water"]
  },
  {
    id: "PHC-057",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Partograph Action Line Clinical Interpretation",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A woman in active labor at a secondary referral hospital has her cervical dilatation plotted on a modified WHO partograph. The dilatation plot crosses the 'Action Line', which sits 4 hours to the right of the Alert Line. What does this finding indicate?",
    options: [
      "Labor has become pathologically prolonged and obstructed; immediate obstetric intervention (e.g., cesarean delivery or augmentation) is mandatory",
      "Normal physiological labor progress is occurring as expected",
      "The midwife should send the woman home to await spontaneous delivery",
      "The partograph paper is expired and should be replaced"
    ],
    correctAnswer: 0,
    rationale: "On the WHO partograph, the Action Line sits 4 hours to the right of the Alert Line. If the cervical dilatation curve reaches or crosses the Action Line, labor is critically prolonged and obstructed. A definitive medical/surgical decision (e.g., emergency cesarean section, vacuum extraction, or oxytocin augmentation under specialist supervision) must be executed immediately to prevent uterine rupture, fetal asphyxia, and obstetric fistula.",
    optionRationales: {
      A: "Correct. Crossing the Action Line signals prolonged/obstructed labor requiring immediate surgical or medical intervention.",
      B: "Normal labor stays on or to the left of the Alert Line.",
      C: "Sending a woman with obstructed labor home is fatal negligence.",
      D: "The action line is a standardized clinical warning threshold, not a paper defect."
    },
    clinicalPearl: "Alert Line = Prepare and transfer. Action Line = Stop waiting; intervene immediately (cesarean delivery or operative delivery).",
    tags: ["partograph", "action-line", "obstructed-labor", "CEmONC", "safe-motherhood"]
  },
  {
    id: "PHC-058",
    course: "Primary Health Care (PHC)",
    topic: "PHC Principles & Alma-Ata",
    subtopic: "The Bamako Initiative (1987)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Adopted by African health ministers in 1987, what was the primary policy strategy of the Bamako Initiative to revitalize primary health care delivery across sub-Saharan Africa?",
    options: [
      "Community financing and co-management of essential healthcare through user fees, Drug Revolving Funds (DRFs), and local community governance",
      "Providing complete external donor funding to replace all domestic government health budgets",
      "Nationalizing all private pharmaceutical manufacturers under military decree",
      "Abolishing all primary health care centers in favor of mobile helicopter services"
    ],
    correctAnswer: 0,
    rationale: "The Bamako Initiative (sponsored by WHO and UNICEF in Bamako, Mali, 1987) aimed to solve chronic health funding deficits, drug shortages, and decaying infrastructure in Africa. It introduced community financing through modest user fees for essential generic drugs (Drug Revolving Funds) managed jointly by health staff and community committees (WDCs).",
    optionRationales: {
      A: "Correct. The Bamako Initiative established community co-financing, Drug Revolving Funds, and local community governance.",
      B: "The initiative aimed to build domestic sustainability, reducing reliance on declining foreign donor aid.",
      C: "It focused on public primary care drug availability, not industrial state nationalization.",
      D: "It focused on strengthening fixed community health posts, not aviation services."
    },
    clinicalPearl: "The Bamako Initiative (1987) introduced Drug Revolving Funds (DRF) and community co-management to ensure clinics always had essential generic medications in stock.",
    tags: ["Bamako-Initiative", "DRF", "health-financing", "PHC-history", "community-financing"]
  },
  {
    id: "PHC-059",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Fractional Dosing of Inactivated Polio Vaccine (fIPV)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Under updated NPHCDA immunization guidelines, when Fractional Inactivated Polio Vaccine (fIPV) is administered intradermally instead of the standard full-dose intramuscular IPV, what is the correct dose volume and injection technique?",
    options: [
      "0.1 mL administered Intradermally into the right upper arm using a BCG syringe",
      "0.5 mL administered Intramuscularly into the gluteal muscle",
      "1.0 mL administered Subcutaneously into the abdominal wall",
      "2 drops administered Orally on the tongue"
    ],
    correctAnswer: 0,
    rationale: "To stretch global IPV vaccine supplies during eradication efforts, the WHO and NPHCDA approved Fractional IPV (fIPV). Instead of a single 0.5 mL intramuscular dose, infants receive two fractional doses of 0.1 mL (one-fifth of the full dose) administered Intradermally (ID) into the right upper arm at 6 weeks and 14 weeks of age, inducing comparable mucosal and humoral immunity.",
    optionRationales: {
      A: "Correct. Fractional IPV is exactly 0.1 mL given intradermally (producing a wheal) at 6 and 14 weeks.",
      B: "0.5 mL IM is the full standard dose, not the fractional intradermal dose.",
      C: "Subcutaneous 1.0 mL is an incorrect volume and route for fIPV.",
      D: "Oral drops describe OPV (Sabin vaccine), not inactivated polio vaccine (Salk)."
    },
    clinicalPearl: "Fractional IPV = 0.1 mL Intradermally (ID) at 6 weeks and 14 weeks. A pale skin wheal confirms proper intradermal administration.",
    tags: ["fIPV", "fractional-dose", "intradermal", "polio", "NPI"]
  },
  {
    id: "PHC-060",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Secondary Attack Rate (SAR)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In infectious disease outbreak investigations, what does the 'Secondary Attack Rate' (SAR) measure?",
    options: [
      "The speed of spread of an infectious disease among susceptible household or institutional contacts exposed to a primary index case",
      "The percentage of patients who die within 24 hours of hospital admission",
      "The total number of hospital beds occupied during a seasonal flood",
      "The rate of reinfection in individuals who received a full vaccine course"
    ],
    correctAnswer: 0,
    rationale: "The Secondary Attack Rate (SAR) measures transmissibility and infectiousness in closed settings: SAR = (Number of new cases among contacts of index cases / Total number of susceptible contacts exposed to index cases) x 100. It measures how effectively a pathogen spreads from a primary case to other family or household members.",
    optionRationales: {
      A: "Correct. SAR evaluates pathogen transmission from an index case to exposed susceptible contacts.",
      B: "Early mortality within 24 hours reflects clinical severity, not secondary contact transmission.",
      C: "Bed occupancy measures facility capacity, not epidemiological transmission rates.",
      D: "Reinfection in vaccinated individuals evaluates vaccine breakthrough, not secondary attack dynamics."
    },
    clinicalPearl: "Secondary Attack Rate measures household contagiousness: 'Out of 10 family members exposed to the index child with measles, how many caught it?'",
    tags: ["secondary-attack-rate", "SAR", "transmissibility", "epidemiology", "outbreak"]
  },
  {
    id: "PHC-061",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Safe Siting of Boreholes and Latrines",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When planning water and sanitation infrastructure in a rural village, what is the minimum recommended horizontal separation distance between a pit latrine or soakaway pit and a domestic shallow water well or borehole to prevent fecal contamination?",
    options: [
      "At least 30 meters (approximately 100 feet), with the latrine sited downhill/down-gradient from the water source",
      "At least 1 meter, provided both structures share a brick wall",
      "5 meters uphill from the well",
      "Zero separation distance if the latrine pit is lined with clay"
    ],
    correctAnswer: 0,
    rationale: "Under public health engineering standards, pit latrines, septic tanks, and soakaways must be located at least 30 meters (100 feet) away from shallow groundwater wells or boreholes. The latrine must also be sited downhill (down-gradient) from the well to prevent subterranean microbial plume migration into drinking water aquifers.",
    optionRationales: {
      A: "Correct. Minimum 30 meters separation, with the latrine positioned downhill from the water well.",
      B: "1 meter is dangerously close; pathogens will cross-contaminate groundwater within hours.",
      C: "Siting the latrine uphill allows contaminated subterranean effluent to flow down into the water source.",
      D: "Unseparated installations cause direct waterborne outbreaks (cholera, typhoid, hepatitis E)."
    },
    clinicalPearl: "Sanitation siting rule: Latrines must be at least 30 meters (100 feet) away from drinking wells and located DOWNHILL from the water source.",
    tags: ["sanitation", "borehole-siting", "groundwater-protection", "environmental-health"]
  },
  {
    id: "PHC-062",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Routine Postnatal Care (PNC) Visit Schedule",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under national and WHO maternal and child health guidelines, what is the recommended schedule for routine Postnatal Care (PNC) assessments following an uncomplicated vaginal delivery?",
    options: [
      "First 24 hours after birth, on Day 3 (48–72 hours), between Days 7–14, and at 6 weeks postpartum",
      "Only a single visit at 6 months when complementary feeding begins",
      "Once a year on the child's birthday",
      "Every day continuously for the first 40 days in an isolation tent"
    ],
    correctAnswer: 0,
    rationale: "Because the majority of maternal and neonatal deaths occur during the immediate postpartum period, the WHO and FMOH schedule mandates at least 4 postnatal contacts: 1) Within the first 24 hours (before discharge); 2) Day 3 (48–72 hours); 3) Between Days 7 and 14; and 4) At 6 weeks postpartum (coinciding with the 6-week infant immunization and family planning visit).",
    optionRationales: {
      A: "Correct. Standard PNC schedule: First 24 hours, Day 3, Days 7–14, and 6 weeks postpartum.",
      B: "Waiting 6 months misses the vulnerable first month when 75% of neonatal deaths occur.",
      C: "Annual reviews do not evaluate immediate postpartum recovery or neonatal jaundice/sepsis.",
      D: "Daily isolation is culturally restrictive and medically unnecessary for uncomplicated puerperium."
    },
    clinicalPearl: "The most dangerous time for mothers and neonates is the first 48 hours postpartum. Over 50% of maternal deaths occur within the first 24 hours.",
    tags: ["PNC", "postnatal-care", "maternal-survival", "neonatal-care", "NPHCDA"]
  },
  {
    id: "PHC-063",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Cerebrospinal Meningitis (CSM) Epidemic Response",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Northern Nigeria lies within the sub-Saharan African 'Meningitis Belt'. During an outbreak of Neisseria meningitidis, what epidemiological threshold defines an 'Epidemic Threshold' in a population of over 100,000, triggering emergency mass reactive vaccination?",
    options: [
      "An incidence rate of 10 suspected cases per 100,000 population per week",
      "1 confirmed case over a period of 6 months",
      "500 cases per 1,000 population per day",
      "When 100% of all primary schools report absent students"
    ],
    correctAnswer: 0,
    rationale: "In the African Meningitis Belt, WHO surveillance guidelines define two key thresholds: 1) Alert Threshold: 5 cases per 100,000 population per week (triggers heightened surveillance, supply prepositioning, and lab confirmation); 2) Epidemic Threshold: 10 cases per 100,000 population per week (triggers immediate mass reactive vaccination and standardized antibiotic treatment with ceftriaxone).",
    optionRationales: {
      A: "Correct. 10 suspected cases per 100,000 population per week defines the Epidemic Threshold for mass vaccination.",
      B: "1 case in 6 months is sporadic baseline incidence, not an epidemic trigger.",
      C: "500 per 1,000 per day is an impossible threshold that would signal total population collapse before action.",
      D: "School absenteeism is non-specific and does not define the epidemiological threshold."
    },
    clinicalPearl: "Meningitis Belt thresholds: Alert = 5 cases/100k/week; Epidemic = 10 cases/100k/week (triggers emergency mass vaccination).",
    tags: ["CSM", "meningitis-belt", "epidemic-threshold", "IDSR", "NCDC"]
  },
  {
    id: "PHC-064",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Rotavirus Vaccine Administration",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the current Nigerian routine immunization schedule, how is the Rotavirus vaccine administered to infants, and what primary childhood condition does it prevent?",
    options: [
      "Orally as liquid drops; prevents severe, dehydrating rotaviral gastroenteritis (diarrhea)",
      "Intramuscularly into the deltoid; prevents childhood tuberculosis",
      "Subcutaneously into the thigh; prevents paralytic poliomyelitis",
      "Intradermally into the forearm; prevents cutaneous leishmaniasis"
    ],
    correctAnswer: 0,
    rationale: "Rotavirus vaccine is a live attenuated viral vaccine administered Orally as liquid drops (at 6 weeks, 10 weeks, and 14 weeks alongside Pentavalent). It provides mucosal immunity to prevent severe, life-threatening dehydrating rotavirus diarrhea, which is a leading cause of under-five diarrheal mortality in Nigeria.",
    optionRationales: {
      A: "Correct. Administered orally to prevent severe rotavirus-induced dehydrating diarrhea.",
      B: "Intradermal BCG prevents severe childhood tuberculosis, not rotavirus.",
      C: "IPV and OPV prevent poliomyelitis.",
      D: "Leishmaniasis is not part of routine childhood oral immunization schedules."
    },
    clinicalPearl: "Rotavirus vaccine is given ORALLY. It protects against the most common cause of severe dehydrating diarrhea in infants.",
    tags: ["rotavirus", "NPI", "oral-vaccine", "diarrhea-prevention", "child-health"]
  },
  {
    id: "PHC-065",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Types of Community Surveys: Cross-Sectional Studies",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "A community health nursing team conducts a single-visit survey of 500 households in an urban slum to simultaneously measure current sanitary latrine ownership and the presence of active diarrheal illness. What epidemiological study design was used?",
    options: [
      "Cross-Sectional (Prevalence) Study",
      "Prospective Cohort Study",
      "Randomized Controlled Clinical Trial",
      "Retrospective Case-Control Study"
    ],
    correctAnswer: 0,
    rationale: "A Cross-Sectional Study (also called a prevalence survey) examines exposure and outcome simultaneously in a defined population at a single point in time (a 'snapshot'). It measures point prevalence, but cannot establish temporal sequence or prove direct causality (i.e., whether the lack of latrine preceded the diarrhea).",
    optionRationales: {
      A: "Correct. A single-visit survey measuring exposure and disease at the same time is a Cross-Sectional Study.",
      B: "Cohort studies follow disease-free exposed and unexposed groups forward over time to measure incidence.",
      C: "Clinical trials involve investigator-controlled experimental interventions.",
      D: "Case-control studies identify subjects by disease status (cases vs controls) and look backward in time for exposures."
    },
    clinicalPearl: "Cross-sectional study = Snapshot of the population at one point in time. It measures Prevalence, but cannot prove Causality.",
    tags: ["cross-sectional", "study-design", "prevalence", "community-survey", "epidemiology"]
  },
  {
    id: "PHC-066",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Plague and Murine Typhus Vector Dynamics",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Which ectoparasitic vector carries Yersinia pestis (plague) from domestic black rats (Rattus rattus) to humans in unsanitary, rodent-infested settlements?",
    options: [
      "Xenopsylla cheopis (Oriental Rat Flea)",
      "Pediculus humanus corporis (Body louse)",
      "Ixodes scapularis (Deer tick)",
      "Triatoma infestans (Kissing bug)"
    ],
    correctAnswer: 0,
    rationale: "The Oriental Rat Flea (Xenopsylla cheopis) is the classic biological vector of bubonic plague (Yersinia pestis) and endemic murine typhus (Rickettsia typhi). The flea lives on commensal rats. When infected rats die, the hungry fleas jump from the cooling rat carcass onto humans, transmitting bacteria through bite regurgitation.",
    optionRationales: {
      A: "Correct. Xenopsylla cheopis (rat flea) transmits plague from rodent reservoirs to humans.",
      B: "Body lice transmit epidemic typhus (Rickettsia prowazekii) and trench fever.",
      C: "Ixodes ticks transmit Lyme disease and babesiosis.",
      D: "Triatomine bugs transmit Chagas disease (Trypanosoma cruzi)."
    },
    clinicalPearl: "During plague outbreaks, always dust rodent burrows with insecticide BEFORE poisoning rats. If you kill the rats first, starving fleas leave the dead rats and bite humans.",
    tags: ["vector-control", "plague", "rat-flea", "rodents", "environmental-health"]
  },
  {
    id: "PHC-067",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Vitamin A Supplementation Schedule",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under the NPHCDA child survival policy, at what age should routine high-dose oral Vitamin A supplementation commence, and how frequently should it be repeated during under-five clinics?",
    options: [
      "Starts at 6 months of age (100,000 IU), then 200,000 IU every 6 months until 59 months of age",
      "Daily from birth up to 10 years of age",
      "Only once at 9 months with the measles vaccine, and never repeated",
      "Weekly during the rainy season only"
    ],
    correctAnswer: 0,
    rationale: "Routine Vitamin A supplementation: 1) At 6–11 months of age, infants receive a single blue capsule of 100,000 IU; 2) From 12 to 59 months, children receive a red capsule of 200,000 IU every 6 months. Vitamin A reduces all-cause under-five mortality by roughly 24% and prevents xerophthalmia, keratomalacia, and corneal blindness.",
    optionRationales: {
      A: "Correct. 100,000 IU at 6–11 months, followed by 200,000 IU every 6 months until age 5.",
      B: "Daily high-dose supplementation leads to toxic hypervitaminosis A (cerebral edema, liver injury).",
      C: "A single dose does not provide ongoing protection through the vulnerable preschool years.",
      D: "Supplementation operates on a 6-month biological schedule, not a weekly seasonal schedule."
    },
    clinicalPearl: "Vitamin A dosing: Blue capsule (100,000 IU) for 6–11 months. Red capsule (200,000 IU) every 6 months from 12 to 59 months.",
    tags: ["vitamin-A", "micronutrients", "child-survival", "xerophthalmia", "NPHCDA"]
  },
  {
    id: "PHC-068",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "Basic Health Care Provision Fund (BHCPF) Operation",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Under the operational guidelines of the Basic Health Care Provision Fund (BHCPF), how are funds disbursed from the Central Bank of Nigeria to accredited Primary Health Care Centres at the ward level?",
    options: [
      "Directly from the NPHCDA gateway into dedicated commercial bank accounts of accredited Primary Health Care Centers via State Primary Health Care Development Agencies (SPHCDAs)",
      "Cash delivered in envelopes by local government youth leaders",
      "Distributed through commercial private pharmaceutical sales reps",
      "Deducted directly from the personal salaries of ward nurses"
    ],
    correctAnswer: 0,
    rationale: "The BHCPF operational manual uses a decentralized, direct-facility financing (DFF) model. Funds flow electronically from the CBN through the NPHCDA gateway to the State Primary Health Care Development Agency (SPHCDA), which channels operational funds directly into the dedicated bank accounts of verified, accredited ward PHC facilities. These funds are co-managed by the facility in-charge and the Ward Development Committee (WDC).",
    optionRationales: {
      A: "Correct. Direct Facility Financing (DFF) electronically routes funds to the PHC facility bank account.",
      B: "Cash deliveries through political youth groups violate public financial management laws and promote corruption.",
      C: "Commercial vendors do not manage federal statutory treasury allocations.",
      D: "Funds are statutory federal allocations derived from the 1% Consolidated Revenue Fund, not staff salary deductions."
    },
    clinicalPearl: "Direct Facility Financing (DFF) under the BHCPF sends operational money directly to the health center's account, bypassed by local government bureaucracies.",
    tags: ["BHCPF", "DFF", "NPHCDA", "health-financing", "decentralization"]
  },
  {
    id: "PHC-069",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Soil-Transmitted Helminths (STHs) Mass Deworming",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What oral antihelminthic drug and dosage is routinely administered to preschool and school-age children during national Neglected Tropical Disease (NTD) mass deworming campaigns in Nigeria?",
    options: [
      "Albendazole 400 mg (or Mebendazole 500 mg) single oral chewable dose",
      "Metronidazole 2 grams three times daily for 14 days",
      "Artemether-Lumefantrine 6 doses over 3 days",
      "Ciprofloxacin 500 mg stat"
    ],
    correctAnswer: 0,
    rationale: "Mass drug administration (MDA) for Soil-Transmitted Helminths (Ascaris lumbricoides, Trichuris trichiura, hookworms) uses a single chewable dose of Albendazole 400 mg (or Mebendazole 500 mg). This is administered every 6 to 12 months to preschool and school-age children to prevent iron-deficiency anemia, intestinal obstruction, and cognitive stunting.",
    optionRationales: {
      A: "Correct. Albendazole 400 mg or Mebendazole 500 mg single oral dose is the national mass deworming standard.",
      B: "Metronidazole treats anaerobic and protozoan infections (amoebiasis, giardiasis), not intestinal roundworms.",
      C: "Artemether-Lumefantrine is an antimalarial, not an antihelminthic.",
      D: "Ciprofloxacin is a fluoroquinolone antibacterial used for typhoid and severe enteritis."
    },
    clinicalPearl: "School deworming: Albendazole 400 mg (or Mebendazole 500 mg) as a single chewable tablet every 6 to 12 months.",
    tags: ["helminths", "deworming", "albendazole", "school-health", "NTDs"]
  },
  {
    id: "PHC-070",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Sanitation Ladder & Open Defecation Free (ODF)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the Community-Led Total Sanitation (CLTS) methodology used across rural Nigeria, what is the core strategy used to trigger a community to achieve Open Defecation Free (ODF) status?",
    options: [
      "Guiding the community through participatory appraisal of their own defecation practices to trigger collective feelings of shame and disgust ('igniting' social change)",
      "Arresting non-compliant villagers and detaining them in municipal jails",
      "Constructing free imported porcelain flush toilets for all homes using donor funds",
      "Distributing bottled water to households that agree to stay indoors"
    ],
    correctAnswer: 0,
    rationale: "Community-Led Total Sanitation (CLTS) avoids hardware subsidies and legal punishment. Instead, a facilitator guides community members through participatory 'triggering' exercises (mapping open defecation sites, calculating the volume of feces produced, and doing the 'walk of shame'). This triggers collective disgust and realization that 'we are eating each other's feces,' mobilizing the community to build their own latrines using local materials.",
    optionRationales: {
      A: "Correct. CLTS uses participatory triggering to spark collective disgust and drive locally built sanitation.",
      B: "Punitive legal coercion leads to resistance rather than sustainable behavioral change.",
      C: "Subsidized external construction fails because communities often abandon toilets they did not build themselves.",
      D: "Bottled water distribution does not address environmental fecal contamination."
    },
    clinicalPearl: "CLTS does not provide subsidies. It facilitates community triggering, turning collective disgust into local action to build pit latrines.",
    tags: ["CLTS", "ODF", "open-defecation", "sanitation-ladder", "behavior-change"]
  },
  {
    id: "PHC-071",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Neonatal Resuscitation: The Golden Minute",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A midwife delivers a full-term neonate who is limp, cyanotic, and not breathing. The infant is dried, kept warm on the mother's abdomen, and the airway is positioned and cleared, but the baby remains apneic. Under Helping Babies Breathe (HBB) guidelines, what action must be initiated within the 'Golden Minute' (first 60 seconds after birth)?",
    options: [
      "Initiate positive pressure bag-and-mask ventilation using room air (21% O2) at 40 to 60 breaths/minute",
      "Administer an immediate intravenous bolus of sodium bicarbonate",
      "Immerse the infant in an ice-water bath to shock the phrenic nerve",
      "Wait 10 minutes to see if spontaneous crying begins"
    ],
    correctAnswer: 0,
    rationale: "The 'Golden Minute' concept in neonatal resuscitation states that if an infant is not breathing spontaneously after 1 minute of drying, warming, and stimulation, the midwife must immediately start Positive Pressure Ventilation (PPV) with a self-inflating bag and mask using room air (21% oxygen) at a rate of 40 to 60 breaths/minute. Achieving chest rise within the first minute prevents hypoxic brain damage.",
    optionRationales: {
      A: "Correct. Positive pressure ventilation with bag-mask using room air within 60 seconds is the core of Helping Babies Breathe.",
      B: "Sodium bicarbonate is not indicated in early resuscitation and causes intracranial hemorrhage.",
      C: "Cold immersion triggers hypothermia, lactic acidosis, and cardiac arrest.",
      D: "Waiting 10 minutes causes irreversible hypoxic-ischemic encephalopathy and neonatal death."
    },
    clinicalPearl: "The Golden Minute: If a newborn does not breathe within 60 seconds of birth after drying and clearing the airway, start bag-and-mask ventilation with room air.",
    tags: ["HBB", "golden-minute", "neonatal-resuscitation", "bag-valve-mask", "asphyxia"]
  },
  {
    id: "PHC-072",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Pneumococcal Conjugate Vaccine (PCV)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under Nigeria's NPI schedule, which primary childhood illnesses does the Pneumococcal Conjugate Vaccine (PCV) protect against?",
    options: [
      "Streptococcus pneumoniae-induced pneumonia, bacteremia, and purulent meningitis",
      "Viral measles and subacute sclerosing panencephalitis",
      "Bordetella pertussis whooping cough",
      "Hepatitis B viral liver cirrhosis"
    ],
    correctAnswer: 0,
    rationale: "The Pneumococcal Conjugate Vaccine (PCV, usually PCV10 or PCV13) protects against the most common serotypes of Streptococcus pneumoniae (pneumococcus). Pneumococcus is a leading cause of severe childhood community-acquired bacterial pneumonia, septicemia, purulent meningitis, and acute otitis media.",
    optionRationales: {
      A: "Correct. PCV protects against invasive pneumococcal pneumonia, sepsis, and meningitis.",
      B: "Measles vaccine protects against measles and SSPE.",
      C: "Pertussis component of the Pentavalent vaccine protects against whooping cough.",
      D: "Hepatitis B vaccine protects against viral hepatitis and hepatocellular carcinoma."
    },
    clinicalPearl: "PCV is administered at 6, 10, and 14 weeks into the anterolateral aspect of the right thigh, separating it from the Pentavalent injection in the left thigh.",
    tags: ["PCV", "pneumonia", "NPI", "child-health", "Streptococcus-pneumoniae"]
  },
  {
    id: "PHC-073",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Attack Rate Calculation in Food Poisoning",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Following a village naming ceremony, 80 people ate rice and meat. Within 6 hours, 20 of those who consumed the meal developed acute vomiting and diarrhea. What was the Food-Specific Attack Rate among those who ate the meal?",
    options: [
      "25%",
      "40%",
      "20%",
      "80%"
    ],
    correctAnswer: 0,
    rationale: "An Attack Rate is a form of cumulative incidence used during acute infectious outbreaks: Attack Rate = (Number of people who ate the food and became ill / Total number of people who ate that specific food) x 100 = (20 / 80) x 100 = 25%.",
    optionRationales: {
      A: "Correct. (20 / 80) x 100 = 25% food-specific attack rate.",
      B: "40% is a calculation error.",
      C: "20% uses the raw case count as a percentage.",
      D: "80% represents the denominator of total exposed diners."
    },
    clinicalPearl: "Food-specific attack rate = (Ill people who ate the food / Total people who ate the food) x 100. Comparing attack rates between dishes identifies the contaminated source.",
    tags: ["attack-rate", "food-poisoning", "outbreak-investigation", "epidemiology"]
  },
  {
    id: "PHC-074",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Medical Waste Segregation in PHC Clinics",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under national clinical waste management guidelines, where should used disposable injection needles, scalpel blades, and broken ampoules be placed immediately after use in a primary health care clinic?",
    options: [
      "A puncture-proof, leak-resistant, yellow Safety Box (Sharps container) without recapping needles",
      "A black polythene domestic waste bin",
      "A plastic washbasin filled with tap water on the nurse's desk",
      "An open wicker basket placed on the consultation floor"
    ],
    correctAnswer: 0,
    rationale: "Clinical sharps (needles, scalpels, lancets, broken glass) must be discarded immediately at the point of use into a puncture-proof, rigid, leak-resistant, biohazard-labeled Safety Box without recapping or bending needles. Recapping is prohibited because it is the leading cause of accidental needle-stick injuries and transmission of HIV, Hepatitis B, and Hepatitis C.",
    optionRationales: {
      A: "Correct. Discard sharps immediately into a puncture-proof safety box without recapping.",
      B: "Black bins are designated for non-infectious general domestic waste (paper, packaging, food refuse).",
      C: "Placing bare needles in open basins leaves sharps exposed, causing puncture accidents.",
      D: "Open baskets expose waste handlers to needle punctures."
    },
    clinicalPearl: "Never recap used needles. Drop them directly into the yellow puncture-proof Safety Box. Seal the box when it is three-quarters (3/4) full.",
    tags: ["waste-management", "safety-box", "sharps-disposal", "infection-control"]
  },
  {
    id: "PHC-075",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "Primary Health Care Under One Roof (PHCUOR) Governance",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What primary governance failure did the 'Primary Health Care Under One Roof' (PHCUOR) policy address in the Nigerian healthcare system?",
    options: [
      "Fragmentation caused by dual control between the State Ministry of Health and Local Government Health Departments",
      "The refusal of private retail pharmacies to import expensive cosmetics",
      "The complete absence of certified nurses in urban teaching hospitals",
      "The legal prohibition of maternal immunizations in southern states"
    ],
    correctAnswer: 0,
    rationale: "Historically, primary health care in Nigeria suffered from fragmented dual governance: State Ministries of Health controlled policies and disease vertical programs, while Local Government Areas (LGAs) managed clinical staff and local health budgets. This led to conflict, unpaid salaries, decaying facilities, and weak accountability. PHCUOR resolved this by consolidating all PHC authority under a single statutory State Primary Health Care Development Agency (SPHCDA).",
    optionRationales: {
      A: "Correct. PHCUOR eliminated fragmented governance between State Ministries of Health and LGA councils.",
      B: "Private pharmacy cosmetic trade is outside public PHC governance mandates.",
      C: "Teaching hospitals fall under federal tertiary management, not PHCUOR.",
      D: "Maternal immunizations have always been legally and clinically mandated."
    },
    clinicalPearl: "PHCUOR brings primary healthcare under ONE roof: One State Agency (SPHCDA), One Plan, and One Budget.",
    tags: ["PHCUOR", "SPHCDA", "governance", "health-reforms", "NPHCDA"]
  },
  {
    id: "PHC-076",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Postpartum Family Planning: Lactational Amenorrhea Method (LAM)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the criteria for the Lactational Amenorrhea Method (LAM) of natural contraception, which three conditions must be simultaneously met for a mother to rely on breastfeeding as an effective family planning method (98% efficacy)?",
    options: [
      "1) The mother has had no menstrual bleeding since 56 days postpartum, 2) She is exclusively breastfeeding day and night on demand, and 3) The infant is less than 6 months of age",
      "1) The mother is feeding cow's milk, 2) Menstruation has returned, and 3) The child is over 1 year of age",
      "1) The mother takes oral contraceptives, 2) Menstruation is regular, and 3) The child is bottle fed",
      "1) The mother pumps breast milk once daily, 2) Feeds infant solids, and 3) The child is 9 months old"
    ],
    correctAnswer: 0,
    rationale: "LAM is an effective temporary contraceptive method (>98% protection) ONLY when all three criteria are met simultaneously: 1) Amenorrhea (no vaginal bleeding after 56 days postpartum); 2) Full or nearly exclusive breastfeeding on demand, day and night (no supplemental feeds, with intervals between feeds <=4 hours during the day and <=6 hours at night); and 3) Infant is younger than 6 months of age. If any one criterion fails, another modern contraceptive must be initiated.",
    optionRationales: {
      A: "Correct. Amenorrhea + Exclusive on-demand breastfeeding + Infant < 6 months of age.",
      B: "If menses return or complementary feeds begin, ovulation can resume.",
      C: "Taking oral contraceptives contradicts the definition of natural LAM.",
      D: "Feeding solids and using pumps with long intervals lowers prolactin levels, triggering ovulation."
    },
    clinicalPearl: "LAM criteria: 1) No period, 2) Exclusive breastfeeding day and night, 3) Baby under 6 months old. If any of these 3 changes, start another method immediately.",
    tags: ["LAM", "family-planning", "breastfeeding", "contraception", "MNCH"]
  },
  {
    id: "PHC-077",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Trachoma Elimination & The SAFE Strategy",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Trachoma (caused by Chlamydia trachomatis) is the leading infectious cause of blindness in northern dry zones of Nigeria. What does the WHO-endorsed 'SAFE' strategy stand for in community trachoma elimination programs?",
    options: [
      "Surgery for trichiasis, Antibiotics (Azithromycin), Facial cleanliness, and Environmental improvement (sanitation and water)",
      "Screening, Aerobic exercise, Fruit diets, and Emergency resuscitation",
      "Sanitation, Air conditioning, Fogging, and Eye drops",
      "Sterilization, Antimalarials, Footwear, and Education"
    ],
    correctAnswer: 0,
    rationale: "The SAFE strategy for trachoma elimination incorporates: S = Surgery (bilobar tarsal rotation to correct in-turned eyelashes [trichiasis] and protect the cornea); A = Antibiotics (mass distribution of oral Azithromycin to clear infection); F = Facial cleanliness (hygiene education and water access to reduce eye-seeking fly transmission); E = Environmental improvement (building latrines to eliminate human feces where Musca sorbens flies breed).",
    optionRationales: {
      A: "Correct. S = Surgery, A = Antibiotics, F = Facial cleanliness, E = Environmental improvement.",
      B: "Exercise and fruit diets do not address Chlamydia trachomatis infections.",
      C: "Air conditioning and fogging are not elements of the international SAFE protocol.",
      D: "Antimalarials and footwear target malaria and hookworm, not trachoma."
    },
    clinicalPearl: "Trachoma SAFE strategy: Surgery for in-turned lashes, Azithromycin mass treatment, Facial cleanliness, Environmental sanitation.",
    tags: ["trachoma", "SAFE-strategy", "blindness-prevention", "NTDs", "eye-health"]
  },
  {
    id: "PHC-078",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Crude Birth Rate (CBR) Calculation",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In vital statistics and community demography, how is the Crude Birth Rate (CBR) of a population defined and calculated?",
    options: [
      "The total number of live births in a year per 1,000 estimated mid-year population",
      "The number of births per 100 married women",
      "The total number of pregnancies recorded in a health center per decade",
      "The number of live male births divided by female births"
    ],
    correctAnswer: 0,
    rationale: "Crude Birth Rate (CBR) is calculated as: (Total number of live births registered during a calendar year / Total estimated mid-year population) x 1,000. It is termed 'crude' because it relates births to the total aggregate population (including children, elderly, and men) rather than strictly to the population of women of reproductive age (which is measured by the General Fertility Rate).",
    optionRationales: {
      A: "Correct. Total live births per 1,000 mid-year population defines the Crude Birth Rate.",
      B: "Restricting the denominator to married women describes marital fertility rates.",
      C: "CBR counts live births annually, not total decadal pregnancies.",
      D: "Male divided by female births calculates the Sex Ratio at birth."
    },
    clinicalPearl: "Crude Birth Rate uses the entire MID-YEAR population in the denominator and is expressed per 1,000 people.",
    tags: ["CBR", "demography", "vital-statistics", "fertility", "epidemiology"]
  },
  {
    id: "PHC-079",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Thermal Comfort & Indoor Air Pollution",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In rural Nigerian households, the traditional burning of biomass fuels (firewood, charcoal, animal dung) in poorly ventilated kitchens is a major environmental contributor to which life-threatening childhood illness?",
    options: [
      "Acute Lower Respiratory Infections (severe pneumonia in under-fives)",
      "Juvenile rheumatoid arthritis",
      "Hereditary sickle cell anemia",
      "Type 1 Diabetes Mellitus"
    ],
    correctAnswer: 0,
    rationale: "Indoor air pollution from burning biomass fuels on open fires releases high levels of respirable particulate matter (PM2.5), carbon monoxide, formaldehyde, and polycyclic aromatic hydrocarbons. Inhaling these combustion products damages mucosal epithelial cilia and alveolar macrophage phagocytosis, making infants and young children vulnerable to acute lower respiratory infections (severe pneumonia).",
    optionRationales: {
      A: "Correct. Biomass smoke paralyzes respiratory defenses, predisposing infants to severe pneumonia.",
      B: "Juvenile arthritis is an autoimmune condition, not a direct complication of particulate smoke.",
      C: "Sickle cell anemia is an inherited autosomal recessive genetic disorder.",
      D: "Type 1 diabetes is an autoimmune pancreatic beta-cell disease."
    },
    clinicalPearl: "Indoor smoke from cooking firewood is a major cause of pediatric pneumonia deaths in rural homes. Advocate for clean cookstoves and external kitchen ventilation.",
    tags: ["indoor-air-pollution", "biomass-smoke", "pneumonia", "environmental-health"]
  },
  {
    id: "PHC-080",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Community Management of Acute Malnutrition (CMAM)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the Community Management of Acute Malnutrition (CMAM) protocol, what ready-to-use therapeutic food (RUTF) is dispensed for home treatment of children diagnosed with Severe Acute Malnutrition (SAM) without medical complications?",
    options: [
      "Plumpy'Nut (a lipid-based peanut paste enriched with milk powder, vitamins, and minerals)",
      "Unsweetened powdered skimmed milk mixed with unboiled water",
      "Corn gruel (pap/ogi) mixed with raw table salt",
      "Commercial carbonated glucose energy drinks"
    ],
    correctAnswer: 0,
    rationale: "Plumpy'Nut is a lipid-based Ready-to-Use Therapeutic Food (RUTF) designed for outpatient management of uncomplicated SAM. Composed of peanut butter, milk powder, vegetable oil, sugar, and an essential micronutrient premix, it requires no cooking or mixing with water (avoiding bacterial contamination), does not spoil in tropical heat, and provides dense caloric and micronutrient rehabilitation.",
    optionRationales: {
      A: "Correct. Plumpy'Nut (RUTF) is the standard lipid-based therapeutic food for home-based SAM treatment.",
      B: "Unpasteurized powdered milk mixed with unsterile water introduces fatal diarrheal pathogens.",
      C: "Corn gruel is energy-dilute and lacks essential proteins, fats, and micronutrients.",
      D: "Carbonated sodas provide empty sugar and worsen osmotic diarrhea and electrolyte imbalances."
    },
    clinicalPearl: "RUTF (Plumpy'Nut) requires no added water and stays sterile in open packs. The child must pass an 'Appetite Test' at the clinic before receiving it for home management.",
    tags: ["CMAM", "RUTF", "PlumpyNut", "SAM", "malnutrition"]
  },
  {
    id: "PHC-081",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Intradermal Injection Technique for BCG",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When administering 0.05 mL of BCG vaccine to a newborn infant, which injection angle and anatomical landmark confirms accurate Intradermal (ID) delivery?",
    options: [
      "A 10- to 15-degree angle with the needle bevel facing upward over the insertion of the left deltoid muscle, producing a pale, raised 5–7 mm wheal (peau d'orange)",
      "A 90-degree angle plunging deep into the right gluteal muscle",
      "A 45-degree angle into the abdominal subcutaneous tissue",
      "A 60-degree angle into the femoral vein"
    ],
    correctAnswer: 0,
    rationale: "BCG is administered strictly Intradermally (ID) into the lateral aspect of the left upper arm over the deltoid insertion. The nurse uses a short 26-gauge needle, holds the syringe flat at a 10- to 15-degree angle with the bevel up, and slowly injects 0.05 mL (for infants <1 year). Correct intradermal placement produces an immediate pale, raised 5–7 mm bleb or wheal resembling an orange peel (peau d'orange).",
    optionRationales: {
      A: "Correct. 10–15 degree angle, bevel up into the left deltoid, producing a distinct 5–7 mm skin wheal.",
      B: "A 90-degree angle injects intramuscularly, causing deep axillary cold abscesses and lymphadenitis.",
      C: "Subcutaneous injection of BCG causes deep tissue ulceration and lymph node breakdown.",
      D: "Intravenous BCG injection causes systemic mycobacterial bacteremia and shock."
    },
    clinicalPearl: "If you don't see a pale, raised skin wheal immediately after injecting BCG, the injection went too deep (subcutaneous). Do NOT repeat the dose.",
    tags: ["BCG", "intradermal", "injection-technique", "wheal", "immunization"]
  },
  {
    id: "PHC-082",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "Primary Health Care Levels in the Ward",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under the NPHCDA organizational framework, which facility represents the smallest, grassroots entry-level static health structure operating at the village level, staffed primarily by Junior Community Health Extension Workers (JCHEWs)?",
    options: [
      "Health Post",
      "Comprehensive Primary Health Centre",
      "General Hospital",
      "Federal Medical Centre"
    ],
    correctAnswer: 0,
    rationale: "The Health Post is the lowest facility tier in Nigeria's primary healthcare pyramid. Sited in small rural villages (catchment: 500–2,000 residents), it is staffed by Junior Community Health Extension Workers (JCHEWs) and provides basic first aid, oral rehydration, routine mobilization, and screening, referring complicated patients to the main Ward PHC Centre.",
    optionRationales: {
      A: "Correct. The Health Post is the entry-level village structure.",
      B: "The Primary Health Care Centre is the larger, 24-hour facility serving the whole ward (10,000–20,000 population).",
      C: "General Hospitals operate at the secondary tier, providing inpatient and surgical care.",
      D: "Federal Medical Centres operate at the tertiary referral level."
    },
    clinicalPearl: "PHC structure order: Village Health Post → Primary Health Clinic → Ward Primary Health Centre → Secondary General Hospital.",
    tags: ["health-post", "JCHEW", "NPHCDA", "facility-hierarchy"]
  },
  {
    id: "PHC-083",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Infant Mortality Rate (IMR) Interpretation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why is the Infant Mortality Rate (IMR) considered by public health epidemiologists to be the single most sensitive demographic indicator of a nation's socio-economic development and health status?",
    options: [
      "Infants are the most biologically vulnerable segment of society; their survival depends directly on clean water, environmental sanitation, nutrition, maternal education, and accessible primary healthcare",
      "Infants make up 90% of the working economic labor force",
      "It is the only demographic metric that can be calculated without counting births",
      "Adult hospital admission records are confidential by law"
    ],
    correctAnswer: 0,
    rationale: "The Infant Mortality Rate (IMR = deaths of infants <1 year per 1,000 live births) is the most sensitive social indicator of population welfare. Because infants are biologically delicate, high IMR reflects underlying poverty, malnutrition, contaminated water, poor housing, low maternal literacy, and broken primary healthcare systems.",
    optionRationales: {
      A: "Correct. Infant survival reflects social determinants of health: water, sanitation, nutrition, and primary care.",
      B: "Infants are young dependents, not active economic workforce laborers.",
      C: "Calculating IMR requires counting both infant deaths and total live births.",
      D: "Adult mortality is tracked through standard mortality surveillance records."
    },
    clinicalPearl: "If you want to know the true socioeconomic and health status of a community, look at its Infant Mortality Rate (IMR).",
    tags: ["IMR", "infant-mortality", "indicators", "social-development"]
  },
  {
    id: "PHC-084",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Lymphatic Filariasis (Elephantiasis) Vector & Management",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which nematode parasite causes Lymphatic Filariasis (Elephantiasis) in Nigeria, and what community morbidity management strategy relieves discomfort in patients with advanced lower limb lymphedema?",
    options: [
      "Wuchereria bancrofti; Managed by rigorous foot hygiene with soap and clean water, elevation, exercise, and topical antiseptic care",
      "Ascaris lumbricoides; Managed by surgical amputation of the limb",
      "Enterobius vermicularis; Managed by daily swimming in stagnant ponds",
      "Taenia saginata; Managed by high-fat beef diets"
    ],
    correctAnswer: 0,
    rationale: "Lymphatic filariasis in Nigeria is caused by the filarial worm Wuchereria bancrofti (transmitted by Anopheles and Culex mosquitoes). The adult worms lodge in lymphatic vessels, causing lymphedema and hydrocele. Advanced elephantiasis is managed by basic hygiene: washing the swollen limb daily with clean water and soap, drying carefully, elevating the leg, exercising to promote lymph drainage, and treating fungal cracks to prevent bacterial lymphangitis.",
    optionRationales: {
      A: "Correct. Wuchereria bancrofti is the parasite; foot hygiene, elevation, and skin care prevent secondary bacterial flares.",
      B: "Ascaris is an intestinal roundworm; amputation is contraindicated in filarial lymphedema.",
      C: "Enterobius is the pinworm, causing perianal itching.",
      D: "Taenia saginata is the beef tapeworm."
    },
    clinicalPearl: "The disfiguring swelling of elephantiasis is worsened by recurrent bacterial skin infections (acute dermatolymphangioadenitis). Daily washing with soap and clean water prevents these flares.",
    tags: ["lymphatic-filariasis", "Wuchereria-bancrofti", "elephantiasis", "hygiene", "NTDs"]
  },
  {
    id: "PHC-085",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Therapeutic Zinc Supplementation in Diarrhea",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Why is elemental Zinc supplementation (20 mg daily for children >6 months, or 10 mg for infants <6 months) prescribed for 10 to 14 days during acute childhood diarrhea alongside Oral Rehydration Salts (ORS)?",
    options: [
      "Zinc accelerates intestinal mucosal regeneration, reduces the duration and severity of the current episode, and protects against recurrent diarrhea for up to 3 months",
      "Zinc acts as a strong sedative to keep the child asleep during dehydration",
      "Zinc colors the stool purple so parents know the illness has ended",
      "Zinc eliminates the need to provide clean drinking water"
    ],
    correctAnswer: 0,
    rationale: "Zinc is a critical micronutrient for cellular repair and immune function. Administering dispersible zinc tablets for 10 to 14 days during and after acute diarrhea regenerates damaged enterocyte brush-border enzymes, restores mucosal membrane integrity, shortens the duration and stool volume of the current episode, and provides immunological protection against recurrent diarrhea for the next 2 to 3 months.",
    optionRationales: {
      A: "Correct. Zinc regenerates gut mucosa, shortens diarrhea duration, and protects against recurrences for up to 3 months.",
      B: "Zinc is an essential trace mineral, not a sedative.",
      C: "Zinc does not color feces; stool color changes are unrelated to zinc efficacy.",
      D: "Hydration with ORS and clean water remains essential."
    },
    clinicalPearl: "Diarrhea management rule: ORS rehydrates; Zinc repairs the gut lining and prevents diarrhea from coming back for 3 months.",
    tags: ["zinc", "diarrhea", "ORS", "child-survival", "IMCI"]
  },
  {
    id: "PHC-086",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Soakaway Pit and Septic Tank System",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In a domestic water-carriage septic tank system, what biological process takes place within the anaerobic septic tank chamber before liquid effluent discharges into the soakaway gravel pit?",
    options: [
      "Anaerobic bacterial digestion liquefies organic solid matter, allowing settleable solids to form sludge at the bottom while grease and oils float as scum",
      "Aerobic sunlight exposure pasteurizes the water into drinkable spring water",
      "Chemical chlorination gas pumps sterilize all bacteria within 5 minutes",
      "Electric motorized turbines crush the waste into dry ash"
    ],
    correctAnswer: 0,
    rationale: "A septic tank is a watertight, underground anaerobic settling chamber. Heavy organic solids sink to the bottom, where anaerobic bacteria digest and liquefy them into sludge. Oils and lighter solids float to the top, forming an airtight scum blanket. Partially clarified liquid effluent flows through an outlet baffle into a soakaway pit, where it percolates into surrounding soil for aerobic filtration.",
    optionRationales: {
      A: "Correct. Anaerobic digestion breaks down solids into settled sludge and floating scum, discharging liquid effluent to the soakaway.",
      B: "Septic tanks are buried underground away from sunlight; effluent is non-potable waste.",
      C: "Septic tanks rely on natural bacterial digestion, not chemical chlorine gas pumps.",
      D: "Standard septic tanks operate passively without electrical motorized turbines."
    },
    clinicalPearl: "Septic tanks do not purify sewage; they liquefy solids anaerobically. True biological purification occurs as effluent filters through the unsaturated soil surrounding the soakaway.",
    tags: ["septic-tank", "soakaway", "sanitation", "anaerobic-digestion", "environmental-health"]
  },
  {
    id: "PHC-087",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Primary vs Secondary vs Tertiary Prevention",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under the three classical levels of disease prevention, which activity represents an example of 'Primary Prevention'?",
    options: [
      "Administering routine childhood immunizations against measles to healthy infants",
      "Performing a screening mammogram to detect early, asymptomatic breast cancer",
      "Providing physiotherapy and limb rehabilitation to a post-stroke patient",
      "Performing a fasting blood glucose check in an adult with suspected polyuria"
    ],
    correctAnswer: 0,
    rationale: "Levels of prevention: 1) Primary Prevention intervenes BEFORE disease occurs to prevent illness entirely (e.g., immunizations, health education, using bed nets); 2) Secondary Prevention involves early detection and prompt treatment of asymptomatic or early disease to halt progression (e.g., Pap smears, BP screening, mammograms); 3) Tertiary Prevention involves rehabilitation to reduce disability and restore function in established disease (e.g., stroke physical therapy, diabetic foot care).",
    optionRationales: {
      A: "Correct. Vaccination prevents disease before it ever begins, which defines Primary Prevention.",
      B: "Screening asymptomatic individuals for early pathology is Secondary Prevention.",
      C: "Rehabilitation to reduce disability from established disease is Tertiary Prevention.",
      D: "Diagnostic testing for existing symptoms is secondary detection."
    },
    clinicalPearl: "Primary = Prevent disease before it occurs. Secondary = Screen and catch early. Tertiary = Treat and rehabilitate established disease.",
    tags: ["prevention-levels", "primary-prevention", "immunization", "epidemiology"]
  },
  {
    id: "PHC-088",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "Village Development Committee (VDC) Composition",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "At the grassroots village settlement level in Nigeria, what local community structure identifies community health concerns, mobilizes villagers for outreach, and represents the village at the Ward Development Committee?",
    options: [
      "Village Development Committee (VDC)",
      "State Council of Chiefs",
      "Federal Ministry of Information Taskforce",
      "National Health Insurance Authority Board"
    ],
    correctAnswer: 0,
    rationale: "The Village Development Committee (VDC) is the community-level committee within the Ward Health System structure. Composed of local residents (traditional village head, women's group leaders, youth representatives, religious leaders, and the local health worker), the VDC addresses village-level sanitation, tracks pregnant women and newborns, mobilizes families for immunization, and sends representatives to the Ward Development Committee (WDC).",
    optionRationales: {
      A: "Correct. The VDC is the grassroots community-level organ feeding into the ward structure.",
      B: "The State Council of Chiefs is a high-level state traditional advisory council, not a village health working group.",
      C: "Federal ministries operate at the national level.",
      D: "The NHIA Board operates at the national level."
    },
    clinicalPearl: "The Village Development Committee (VDC) is the closest community structure to households, feeding directly into the Ward Development Committee (WDC).",
    tags: ["VDC", "WDC", "community-mobilization", "Ward-Health-System"]
  },
  {
    id: "PHC-089",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Contraindications to Routine Immunization",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which clinical condition is an absolute, valid contraindication to administering a subsequent dose of Pentavalent (DTP-HepB-Hib) vaccine to an infant?",
    options: [
      "Encephalopathy (e.g., prolonged coma, decreased consciousness, or prolonged seizures) occurring within 7 days of a previous DTP-containing vaccine dose",
      "A minor upper respiratory illness with a mild low-grade fever of 37.8°C",
      "Mild non-severe diarrhea without dehydration",
      "A family history of seizures in a second-degree cousin"
    ],
    correctAnswer: 0,
    rationale: "Absolute permanent contraindications to DTP/Pentavalent vaccine are: 1) An immediate severe anaphylactic allergic reaction to a previous dose, and 2) Encephalopathy (e.g., coma, prolonged seizures, altered mental status) occurring within 7 days of a previous dose not attributable to another cause. Minor illnesses, low-grade fevers, mild diarrhea, and family histories of seizures are false contraindications; vaccines should not be withheld.",
    optionRationales: {
      A: "Correct. Severe encephalopathy within 7 days of a DTP dose is an absolute contraindication to subsequent pertussis-containing doses.",
      B: "Mild fever and colds are false contraindications; withholding vaccines leads to missed opportunities.",
      C: "Mild diarrhea is a false contraindication; vaccines should be administered.",
      D: "Family history of neurological conditions is not a contraindication for an infant."
    },
    clinicalPearl: "Minor colds, mild coughs, low-grade fever, and teething are FALSE contraindications. Do not send mothers away without immunizing the child.",
    tags: ["contraindications", "NPI", "vaccine-safety", "adverse-events", "pertussis"]
  },
  {
    id: "PHC-090",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Rabies Prevention & Animal Bites",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A 10-year-old child is bitten on the bare leg by an aggressive stray dog in a community, sustaining deep puncture wounds with bleeding. The dog cannot be captured. What is the immediate primary nursing management of the bite wound before administering Rabies Post-Exposure Prophylaxis (PEP)?",
    options: [
      "Wash and flush the wound thoroughly with soap, copious running water, and povidone-iodine for at least 15 minutes, leaving the wound unsutured",
      "Immediately suture the wound tightly with silk sutures to control capillary bleeding",
      "Apply herbal clay and bind the wound with a tight tourniquet",
      "Cauterize the open wound with a hot metal knife"
    ],
    correctAnswer: 0,
    rationale: "Immediate post-exposure treatment for potential rabies exposure: 1) Copious wound washing: vigorously flush the wound with soap and running water, detergent, or povidone-iodine for at least 15 minutes. This mechanically washes away and destroys the lipid envelope of the rabies virus, reducing transmission risk by up to 90%; 2) Do NOT suture the wound immediately (suturing inoculates virus deeper into nerve endings; if suturing is needed for hemorrhage, infiltrate Rabies Immune Globulin [RIG] locally first); 3) Administer Rabies Vaccine and Rabies Immune Globulin.",
    optionRationales: {
      A: "Correct. Thoroughly wash with soap and running water for 15 minutes; do not suture the wound.",
      B: "Suturing rabies wounds pushes virus deeper into muscle and peripheral nerves, accelerating fatal encephalitis.",
      C: "Applying mud or traditional pastes introduces secondary bacterial infections and tetanus spores.",
      D: "Cauterization causes severe tissue necrosis and is contraindicated."
    },
    clinicalPearl: "For animal bites: Wash the wound with soap and running water for 15 minutes. Do NOT suture dog bite wounds.",
    tags: ["rabies", "dog-bite", "PEP", "wound-cleansing", "zoonosis"]
  },
  {
    id: "PHC-091",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Kangaroo Mother Care (KMC) Discharge Criteria",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When can a stable low-birth-weight infant who has been managed with Kangaroo Mother Care (KMC) at a primary health care clinic be safely discharged home for continued ambulatory KMC?",
    options: [
      "The infant is feeding well, gaining weight steadily (at least 15–20 g/day for 3 consecutive days), maintaining normal body temperature in KMC, and the mother is confident in caring for the baby",
      "As soon as the infant reaches exactly 40 weeks gestation, regardless of feeding ability",
      "Only after the infant weighs more than 4,500 grams",
      "Immediately after birth, before the infant establishes latching or breastfeeding"
    ],
    correctAnswer: 0,
    rationale: "Discharge criteria for ambulatory home KMC: 1) Infant is in stable health with no active danger signs; 2) Feeding well (exclusively breastfeeding or cup-feeding); 3) Demonstrating steady daily weight gain (at least 15 to 20 grams/day for at least 3 consecutive days); 4) Able to maintain normal axillary temperature (36.5°C to 37.5°C) in KMC position; 5) Mother is confident and has family support.",
    optionRationales: {
      A: "Correct. Stable vitals, effective feeding, steady weight gain (15–20 g/day), and maternal confidence are the discharge criteria.",
      B: "Weight gain velocity and clinical stability guide discharge, not gestational age alone.",
      C: "4,500 grams describes macrosomia; KMC targets infants born under 2,500 grams.",
      D: "Discharging an unstable infant before feeding is established leads to hypothermia and death."
    },
    clinicalPearl: "KMC discharge requires: Stable temperature + Consistent weight gain (15–20 g/day) + Exclusive feeding + A confident mother.",
    tags: ["KMC", "low-birth-weight", "discharge-criteria", "newborn-health"]
  },
  {
    id: "PHC-092",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Sanitary Inspection of Food Premises",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "During routine environmental sanitary inspections of commercial food canteens (buka) in a rural marketplace, what key hygiene practice must the environmental health officer verify among food handlers?",
    options: [
      "Possession of a valid medical fitness certificate, clean aprons, hair coverings, and functional handwashing stations with soap and running water",
      "Displaying a framed portrait of the local government chairman",
      "Using open kerosene drums as cooking containers",
      "Keeping live domestic poultry inside the food preparation area"
    ],
    correctAnswer: 0,
    rationale: "Sanitary food premises inspections verify that food handlers are free of communicable infections (enteric fever, TB, parasitic worms) through annual medical fitness screenings; wear clean protective aprons and hairnets; keep nails trimmed; have access to functional handwashing stations with soap and potable water; and keep the preparation area free of domestic animals and pests.",
    optionRationales: {
      A: "Correct. Medical fitness certificates, protective clothing, and handwashing stations are statutory food hygiene requirements.",
      B: "Political portraits carry zero sanitary or infection control value.",
      C: "Chemical fuel drums contaminate food with toxic hydrocarbons and lead.",
      D: "Keeping live birds in food preparation areas introduces Salmonella and Campylobacter contamination."
    },
    clinicalPearl: "Food handlers must undergo periodic medical screenings (typhoid, tuberculosis, stool analysis) and wash hands with soap before touching food.",
    tags: ["food-hygiene", "sanitary-inspection", "environmental-health", "canteen-safety"]
  },
  {
    id: "PHC-093",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Community Health Mobilization: Advocacy vs Sensitization",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In community health mobilization terminology, what is the distinction between 'Advocacy' and 'Community Sensitization'?",
    options: [
      "Advocacy targets decision-makers, leaders, and gatekeepers to gain political will and resources, while Sensitization targets community members to raise awareness and change behavior",
      "Advocacy is illegal, while sensitization is run by universities",
      "Sensitization is directed solely at international donors, while advocacy is for children",
      "There is no difference; both terms refer to administering vaccines"
    ],
    correctAnswer: 0,
    rationale: "Advocacy is a strategic process directed at leadership figures, gatekeepers, and policymakers (traditional rulers, religious leaders, LGA chairpersons) to secure political commitment, social endorsement, policy support, and funding. Community Sensitization (or awareness creation) is directed at the broader community to share information, dispel rumors, raise risk awareness, and encourage participation.",
    optionRationales: {
      A: "Correct. Advocacy targets leaders to secure approval and resources; Sensitization educates the community to drive participation.",
      B: "Advocacy is a standard, legal public health management discipline.",
      C: "Sensitization targets the general public, not international donors alone.",
      D: "Both are communication and mobilization strategies, not clinical injection procedures."
    },
    clinicalPearl: "Advocate to the leaders (to get their blessing and support); Sensitize the people (to get them to show up and participate).",
    tags: ["advocacy", "sensitization", "community-mobilization", "health-communication"]
  },
  {
    id: "PHC-094",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Yellow Fever Vaccine Storage Stability",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why must a reconstituted vial of lyophilized (freeze-dried) Yellow Fever vaccine be kept on an ice pack and discarded after exactly 6 hours if unused?",
    options: [
      "The vaccine contains no preservatives; once reconstituted with diluent, bacterial contamination can occur, and the live virus deteriorates rapidly at ambient temperatures",
      "The liquid turns into solid cement after 6 hours",
      "The vaccine turns into an antibiotic after 6 hours",
      "The glass vial dissolves in the diluent after 6 hours"
    ],
    correctAnswer: 0,
    rationale: "Lyophilized live-attenuated vaccines (Yellow Fever, Measles, BCG) contain no bacteriostatic preservatives. Once mixed with diluent, the live virus degrades rapidly when exposed to heat and light. Leaving opened vials beyond 6 hours also risks bacterial contamination (e.g., Staphylococcus aureus), which has caused fatal toxic shock syndrome.",
    optionRationales: {
      A: "Correct. Loss of live viral potency and risk of bacterial contamination mandate disposal after 6 hours.",
      B: "Vaccines remain liquid; they do not solidify like cement.",
      C: "Vaccines do not convert into antimicrobial drugs.",
      D: "Pharmaceutical glass ampoules and vials do not dissolve in aqueous diluents."
    },
    clinicalPearl: "Discard reconstituted BCG, Measles, and Yellow Fever vials after 6 hours. Never keep reconstituted vaccines overnight.",
    tags: ["yellow-fever", "reconstitution", "vaccine-safety", "cold-chain", "NPI"]
  },
  {
    id: "PHC-095",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Hansen's Disease (Leprosy) Clinical Presentation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What classic cardinal clinical sign on skin assessment raises strong suspicion of Hansen's Disease (Leprosy) in an adult presenting to a rural primary health clinic?",
    options: [
      "A hypopigmented or erythematous skin patch with a definite loss of sensation (anesthesia to light touch, pain, or temperature)",
      "A painful, fiery-red, blistering weeping rash across the cheeks",
      "An intensely itchy vesicular eruption between the finger webs",
      "A raised black hyperpigmented wart that bleeds on contact"
    ],
    correctAnswer: 0,
    rationale: "WHO defines the cardinal signs of Leprosy (Mycobacterium leprae): 1) Hypopigmented or reddish skin lesions with definite loss of sensation (anesthesia to light touch tested with a wisp of cotton wool); 2) Thickened or enlarged peripheral nerves with loss of sensation and muscle weakness; 3) Positive skin smears for acid-fast bacilli. The combination of a skin patch with numbness is the hallmark.",
    optionRationales: {
      A: "Correct. A hypopigmented skin lesion with sensory loss is the classic cardinal sign of leprosy.",
      B: "Painful facial weeping eruptions describe acute erysipelas or severe eczema.",
      C: "Intensely itchy finger-web vesicles describe Scabies (Sarcoptes scabiei).",
      D: "Bleeding pigmented lesions describe melanoma, not leprosy."
    },
    clinicalPearl: "Test skin patches with a wisp of cotton wool. If the patch has no feeling (anesthetic), treat it as Leprosy until proven otherwise.",
    tags: ["leprosy", "Hansens-disease", "NTBLCP", "dermatology", "cardinal-signs"]
  },
  {
    id: "PHC-096",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Unmet Need for Family Planning",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In reproductive epidemiology and primary health care, what is meant by the demographic indicator 'Unmet Need for Family Planning'?",
    options: [
      "The percentage of fecund, sexually active women who want to stop or delay childbearing for at least two years, but are not using any modern method of contraception",
      "The total number of condoms sold in private pharmacies every month",
      "The percentage of women who refuse to attend antenatal clinics",
      "The number of gynecologists practicing in federal capital hospitals"
    ],
    correctAnswer: 0,
    rationale: "'Unmet Need for Family Planning' measures the gap between women's reproductive intentions and their contraceptive behavior. It represents the proportion of women of reproductive age (15–49) who are sexually active and fecund, desire to space their next pregnancy (by at least 2 years) or limit childbearing entirely, but are not using any contraceptive method due to lack of access, misinformation, cost, or cultural opposition.",
    optionRationales: {
      A: "Correct. Women who want to avoid or space pregnancy but are not using contraceptives represent the unmet need.",
      B: "Condom sales reflect commercial market volume, not the population of non-users who want to avoid pregnancy.",
      C: "ANC non-attendance reflects maternal care access, not family planning intent.",
      D: "Specialist physician ratios reflect health workforce density."
    },
    clinicalPearl: "Unmet need = Women who want to delay or stop having children, but don't have access to or aren't using contraceptives.",
    tags: ["family-planning", "unmet-need", "reproductive-health", "demography"]
  },
  {
    id: "PHC-097",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Disposal of the Dead during Epidemics (Cholera/VHF)",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "During an outbreak of Cholera in a riverine community, a deceased patient's family demands to wash the corpse at home before burial in accordance with local cultural customs. What is the nurse's priority action?",
    options: [
      "Explain with cultural empathy that cholera bodies carry high concentrations of viable bacteria in bowel fluids; coordinate with trained safe-burial teams to disinfect the body with 0.5% chlorine solution without open community washing",
      "Allow the family to wash the body in the village's primary drinking water pond",
      "Call the military to arrest and shoot the family members",
      "Encourage the family to drink the body wash water as a traditional blessing"
    ],
    correctAnswer: 0,
    rationale: "Corpse washing during cholera and viral hemorrhagic fever (Ebola, Lassa) outbreaks is a documented super-spreader event. Cholera corpses produce diarrhea and vomit containing millions of Vibrio cholerae per milliliter. The nurse must engage traditional and religious leaders empathetically, explain that touching and washing the body spreads the disease to family members, and arrange for trained safe-burial teams using personal protective equipment and 0.5% chlorine disinfectant solution.",
    optionRationales: {
      A: "Correct. Use health communication and safe burial protocols with 0.5% chlorine disinfection to stop transmission.",
      B: "Washing infected corpses in drinking water causes massive community-wide cholera outbreaks.",
      C: "Violence breeds community resistance, hidden burials, and escalation of the epidemic.",
      D: "Ingesting contaminated wash water leads to severe cholera infection and rapid death."
    },
    clinicalPearl: "Corpse washing is a major driver of cholera and Ebola outbreaks. Handle burials using 0.5% chlorine disinfection and empathetic community engagement.",
    tags: ["cholera", "safe-burial", "infection-control", "epidemic-response"]
  },
  {
    id: "PHC-098",
    course: "Primary Health Care (PHC)",
    topic: "PHC Principles & Alma-Ata",
    subtopic: "Essential Drugs List (EDL) Concept",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the defining principle of an 'Essential Drugs List' (EDL) in a primary health care system?",
    options: [
      "A limited list of safe, effective, affordable medications that satisfy the priority healthcare needs of the majority of the population, available at all times in adequate amounts",
      "A list containing every medication produced by international pharmaceutical manufacturers",
      "The most expensive, branded medications reserved exclusively for high-income patients",
      "A catalog of experimental herbal supplements not yet approved by regulatory bodies"
    ],
    correctAnswer: 0,
    rationale: "The WHO Essential Medicines concept states that an Essential Drugs List consists of those medicines that satisfy the priority healthcare needs of the majority of the population. They are selected based on disease prevalence, proven clinical safety, efficacy, and comparative cost-effectiveness, and should be available within health systems at all times in adequate quantities, appropriate dosage forms, and at an affordable price.",
    optionRationales: {
      A: "Correct. An EDL provides a focused, cost-effective list of medicines that address the population's primary health needs.",
      B: "An EDL is selective, not an open catalog of all manufactured pharmaceuticals.",
      C: "The focus is on cost-effective generic medications for universal access, not expensive brand-name drugs.",
      D: "Essential medicines must have established scientific safety, efficacy, and regulatory approval."
    },
    clinicalPearl: "The Essential Drugs List focuses on high-impact, cost-effective generic drugs to ensure clinics do not run out of life-saving medicines.",
    tags: ["essential-drugs", "EDL", "rational-drug-use", "Alma-Ata", "NPHCDA"]
  },
  {
    id: "PHC-099",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Spot Mapping in Outbreak Investigation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During an initial field investigation of a suspected waterborne Cholera outbreak in a rural village, why does the epidemiology team create a 'Spot Map' plotting the location of each case's household?",
    options: [
      "To visually demonstrate geographic clustering of cases around a common risk source (such as a contaminated public well or broken pipe)",
      "To publish the names and private financial status of infected patients online",
      "To determine the architectural market value of village buildings",
      "To count the number of trees planted along the road"
    ],
    correctAnswer: 0,
    rationale: "Pioneered by John Snow during the 1854 Broad Street cholera outbreak in London, a Spot Map plots cases geographically by place of residence or exposure. It identifies disease clustering, points toward shared environmental point sources (e.g., contaminated communal wells or water pumps), and helps trace the geographic direction of outbreak spread.",
    optionRationales: {
      A: "Correct. Spot mapping reveals spatial clustering around common water sources or exposure points.",
      B: "Publishing patient identities violates medical privacy and confidentiality.",
      C: "Spot mapping tracks disease cases, not real estate valuations.",
      D: "Tree counting is an environmental forestry task unrelated to cholera spot mapping."
    },
    clinicalPearl: "John Snow's Spot Map: Plotting cases on a village map reveals geographic clustering around contaminated water sources.",
    tags: ["spot-map", "outbreak-investigation", "John-Snow", "cholera", "epidemiology"]
  },
  {
    id: "PHC-100",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Prevention of Mother-to-Child Transmission (PMTCT)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Under national guidelines for the Prevention of Mother-to-Child Transmission (PMTCT) of HIV, what is Option B+ and why is it implemented across primary health care centers?",
    options: [
      "Providing lifelong Triple Antiretroviral Therapy (ART) to all HIV-positive pregnant and breastfeeding women, regardless of their CD4 count or clinical stage",
      "Administering a single dose of nevirapine on the day of delivery, and stopping ART immediately after birth",
      "Mandating elective cesarean section for all women, with complete prohibition of breastfeeding",
      "Treating only the infant after birth while withholding medications from the mother"
    ],
    correctAnswer: 0,
    rationale: "Option B+ provides lifelong combination Antiretroviral Therapy (ART—typically a fixed-dose combination like Tenofovir + Lamivudine + Dolutegravir [TLD]) to all pregnant and breastfeeding women living with HIV, starting as soon as diagnosed, regardless of CD4 count or clinical stage. It suppresses viral load, prevents vertical transmission to the infant during pregnancy, labor, and breastfeeding, and maintains the mother's long-term health.",
    optionRationales: {
      A: "Correct. Option B+ provides lifelong combination ART to all HIV-positive pregnant women regardless of CD4 count.",
      B: "Single-dose nevirapine alone is outdated and associated with high failure and viral resistance rates.",
      C: "With viral suppression on ART, vaginal delivery and exclusive breastfeeding are safe and supported.",
      D: "Treating the mother suppresses viral loads, protecting both the infant and the mother."
    },
    clinicalPearl: "Option B+ = Lifelong triple ART for all pregnant and breastfeeding women living with HIV, regardless of CD4 count, to achieve viral suppression and eliminate transmission.",
    tags: ["PMTCT", "Option-B-Plus", "HIV", "antiretroviral", "maternal-health"]
  },
  {
    id: "PHC-101",
    course: "Primary Health Care (PHC)",
    topic: "PHC Principles & Alma-Ata",
    subtopic: "The GOBI-FFF Child Survival Strategy",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the low-cost 'GOBI-FFF' child survival strategy introduced by UNICEF to accelerate primary health care impact, what does the core acronym 'GOBI' stand for?",
    options: [
      "Growth monitoring, Oral rehydration therapy, Breastfeeding, and Immunization",
      "Genetic screening, Oxygen therapy, Blood transfusion, and Incubator care",
      "Gastrointestinal lavage, Operative delivery, Blood pressure control, and Injections",
      "Government oversight, Budget allocation, Inspection, and Infrastructure"
    ],
    correctAnswer: 0,
    rationale: "GOBI was formulated by James Grant at UNICEF as a high-impact, low-cost primary health package targeting the leading causes of under-five mortality: G = Growth monitoring (to detect malnutrition early), O = Oral rehydration therapy (to treat dehydrating diarrhea), B = Breastfeeding (exclusive for 6 months), and I = Immunization (against childhood killer diseases). The 'FFF' was later added: Family planning, Female education, and Food supplementation.",
    optionRationales: {
      A: "Correct. GOBI = Growth monitoring, Oral rehydration, Breastfeeding, and Immunization.",
      B: "Genetic screening and incubators are tertiary specialized technologies, not grassroots GOBI components.",
      C: "These describe surgical/acute interventions, not community child survival strategies.",
      D: "Administrative oversight terms do not define the UNICEF child survival framework."
    },
    clinicalPearl: "GOBI-FFF: Growth monitoring, Oral rehydration, Breastfeeding, Immunization, Family planning, Female education, and Food supplementation.",
    tags: ["GOBI-FFF", "UNICEF", "child-survival", "Alma-Ata", "health-promotion"]
  },
  {
    id: "PHC-102",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "CHEW Standing Orders & Clinical Boundaries",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the Nigerian Primary Health Care system, what is the regulatory function of the 'Standing Orders' provided to Community Health Extension Workers (CHEWs)?",
    options: [
      "A legally binding, symptom-based clinical algorithm that defines their permissible clinical assessments, treatment protocols, and mandatory referral points",
      "A military decree governing facility guard duties at night",
      "A commercial pharmaceutical catalog listing retail drug prices",
      "A political constitution that outlines local council voting rules"
    ],
    correctAnswer: 0,
    rationale: "CHEW Standing Orders are statutory, symptom-based clinical guidelines issued by the Community Health Practitioners Registration Board of Nigeria (CHPRBN). They provide algorithmic protocols that authorize CHEWs to assess, triage, treat common conditions with specific essential drugs, and refer complex cases along the referral chain.",
    optionRationales: {
      A: "Correct. Standing Orders serve as the legal, symptom-based clinical protocol governing CHEW practice.",
      B: "Standing Orders are clinical medical/nursing algorithms, not security guard directives.",
      C: "They are clinical guidelines, not commercial price lists.",
      D: "They govern clinical health practices, not political elections."
    },
    clinicalPearl: "CHEWs must strictly adhere to their Standing Orders: when a patient presents with red-flag symptoms beyond the algorithm, immediate referral is legally required.",
    tags: ["CHEW", "standing-orders", "scope-of-practice", "NPHCDA", "task-shifting"]
  },
  {
    id: "PHC-103",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Traditional Birth Attendants (TBAs) Role and Limits",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the current Nigerian National Maternal and Newborn Health policy, what is the recognized, evidence-based role of Traditional Birth Attendants (TBAs) in primary health care delivery?",
    options: [
      "Acting as community advocates and birth companions who mobilize pregnant women for early antenatal care, promote institutional delivery, and facilitate prompt referral",
      "Performing complex operative vacuum extractions and breech deliveries at home",
      "Administering intravenous pitocin infusions to accelerate obstructed labor",
      "Conducting routine forensic autopsies in remote villages"
    ],
    correctAnswer: 0,
    rationale: "Because TBAs lack formal surgical and clinical training to manage unpredictable obstetric emergencies (e.g., PPH, obstructed labor, eclampsia), national policy does NOT recognize them as skilled birth attendants. Instead, their role has shifted: they are trained and integrated as maternal health advocates, community trackers, and birth companions who steer pregnant women to health facilities for institutional delivery.",
    optionRationales: {
      A: "Correct. TBAs function as community advocates, birth companions, and referral facilitators, not independent delivery attendants.",
      B: "Operative deliveries must only be performed by skilled medical officers/obstetricians.",
      C: "Oxytocic infusions outside hospital settings cause uterine rupture and are prohibited.",
      D: "Autopsies are legal medical evaluations performed exclusively by forensic pathologists."
    },
    clinicalPearl: "TBAs are NOT skilled birth attendants. Their modern role is mobilization: encouraging mothers to attend ANC and deliver in accredited health centers.",
    tags: ["TBAs", "skilled-birth-attendant", "maternal-health", "referral", "safe-motherhood"]
  },
  {
    id: "PHC-104",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Yellow Fever and Dengue Vector Ecology",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which mosquito species is the primary day-biting urban vector of Yellow Fever, Dengue, and Chikungunya viruses, breeding predominantly in domestic man-made water containers, discarded tires, and flowerpots?",
    options: [
      "Aedes aegypti",
      "Anopheles gambiae",
      "Culex quinquefasciatus",
      "Mansonia africana"
    ],
    correctAnswer: 0,
    rationale: "Aedes aegypti (identifiable by white lyre-shaped markings on its thorax and banded legs) is a daytime biter (peaking early morning and late afternoon). It is highly adapted to urban and peridomestic environments, breeding in small, clean collections of artificial standing water (discarded tires, uncovered storage drums, flowerpots, plastic containers).",
    optionRationales: {
      A: "Correct. Aedes aegypti is the urban day-biting vector of Yellow Fever, Dengue, and Zika.",
      B: "Anopheles gambiae is a night biter that breeds in natural puddles, transmitting malaria.",
      C: "Culex quinquefasciatus breeds in organically polluted, foul water, transmitting filariasis.",
      D: "Mansonia species breed in vegetated swamps, attaching to aquatic plant roots."
    },
    clinicalPearl: "Aedes mosquitoes bite during the DAY and breed in clean artificial containers (tires, buckets). Anopheles mosquitoes bite at NIGHT and transmit malaria.",
    tags: ["Aedes", "yellow-fever", "vector-ecology", "dengue", "environmental-health"]
  },
  {
    id: "PHC-105",
    course: "Primary Health Care (PHC)",
    topic: "Non-Communicable Diseases (NCDs) in PHC",
    subtopic: "Community Hypertension Screening",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During a routine community health outreach, an asymptomatic 48-year-old adult has a seated blood pressure reading of 150/94 mmHg. What is the appropriate primary nursing management?",
    options: [
      "Provide lifestyle education (salt reduction, physical activity, weight management), schedule two separate confirmatory readings over the next 1–2 weeks, and refer for formal diagnosis",
      "Immediately administer an intravenous bolus of hydralazine",
      "Tell the client they are completely healthy and dismiss them from the clinic",
      "Order strict bed rest in a dark room for 3 months"
    ],
    correctAnswer: 0,
    rationale: "A diagnosis of hypertension requires demonstrating elevated blood pressure on at least two separate clinical encounters spaced 1 to 2 weeks apart, unless the patient presents with a hypertensive emergency (>180/120 mmHg with target organ damage). The nurse provides non-pharmacological lifestyle counseling (DASH diet, reducing salt to <5g/day, exercise) and schedules confirmatory re-evaluations.",
    optionRationales: {
      A: "Correct. Counseling on lifestyle modifications, scheduling confirmatory visits, and coordinating referral is the evidence-based protocol.",
      B: "IV hydralazine is an acute antihypertensive reserved for hypertensive crises, not asymptomatic stage 1 readings.",
      C: "150/94 mmHg is elevated and cannot be ignored; untreated hypertension causes stroke and renal failure.",
      D: "Immobilization is harmful and does not treat essential hypertension."
    },
    clinicalPearl: "Never diagnose hypertension on a single reading unless it is a hypertensive emergency (>180/120). Confirm with at least two separate visits over 1–2 weeks.",
    tags: ["NCDs", "hypertension", "screening", "lifestyle-modification", "community-health"]
  },
  {
    id: "PHC-106",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Safe Water: The Solar Water Disinfection (SODIS) Method",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What physical mechanism allows the Solar Water Disinfection (SODIS) method—exposing clear, transparent PET plastic bottles of water to full sunlight on a corrugated metal roof for at least 6 hours—to destroy waterborne bacterial and viral pathogens?",
    options: [
      "Synergistic action of solar Ultraviolet-A (UV-A) radiation and thermal heating (pasteurization) above 50°C",
      "The chemical dissolution of plastic into the water to kill microbes",
      "Total absence of atmospheric oxygen inside the bottle",
      "The creation of an electrical magnetic field by corrugated metal sheets"
    ],
    correctAnswer: 0,
    rationale: "SODIS is an approved appropriate technology for household water treatment in sunny low-resource environments. Clear polyethylene terephthalate (PET) bottles filled with low-turbidity water are exposed to direct sunlight for at least 6 hours (or 2 days if cloudy). The UV-A rays (320–400 nm) generate reactive oxygen species that damage microbial DNA, while solar thermal energy heats the water, synergistically killing enteric pathogens.",
    optionRationales: {
      A: "Correct. UV-A radiation combined with thermal heat destroys microbial cellular structures.",
      B: "Food-grade PET bottles do not dissolve or release toxic plasticizers when used according to SODIS guidelines.",
      C: "Oxygen is intentionally dissolved by shaking the bottle before exposure to generate reactive oxygen free radicals.",
      D: "Metal roofs provide a reflective and heat-conducting surface, not an electromagnetic field."
    },
    clinicalPearl: "SODIS requirements: Clear PET plastic bottle, low turbidity (<30 NTU), full direct sunlight for at least 6 hours on a reflective surface.",
    tags: ["SODIS", "safe-water", "appropriate-technology", "solar-disinfection"]
  },
  {
    id: "PHC-107",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Emergency Transport Schemes (ETS)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In rural primary health care, what is the primary operational objective of the Emergency Transport Scheme (ETS), developed in collaboration with the National Union of Road Transport Workers (NURTW)?",
    options: [
      "Overcoming the 'Second Delay' (delay in reaching a health facility) by mobilizing volunteer commercial drivers to rapidly transport pregnant women in labor from rural villages to emergency obstetric centers",
      "Regulating commercial bus fares between state capitals",
      "Providing luxury limousine escorts for local government chairpersons",
      "Transferring all hospital medical records to the national capital"
    ],
    correctAnswer: 0,
    rationale: "The 'Three Delays' model in maternal mortality identifies: 1) Delay in deciding to seek care (cultural/economic); 2) Delay in reaching the health facility (distance/transport); 3) Delay in receiving adequate care at the facility (staff/supplies). The ETS trains and mobilizes commercial drivers (NURTW) to provide emergency transport, overcoming the Second Delay and preventing maternal deaths from obstructed labor and hemorrhage.",
    optionRationales: {
      A: "Correct. ETS bridges the transport gap, targeting the Second Delay in the Three Delays model.",
      B: "ETS focuses on maternal emergency health transport, not interstate commercial bus tariff schedules.",
      C: "ETS is an equity-based community intervention for rural women, not an administrative perk for politicians.",
      D: "ETS is a transport scheme for women with obstetric emergencies, not a records delivery service."
    },
    clinicalPearl: "The Three Delays: 1) Deciding to seek care, 2) Reaching the facility (tackled by ETS), 3) Receiving quality care upon arrival.",
    tags: ["ETS", "NURTW", "three-delays", "emergency-transport", "safe-motherhood"]
  },
  {
    id: "PHC-108",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Poliomyelitis Acute Flaccid Paralysis (AFP) Surveillance",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Under the global and national Polio Eradication surveillance guidelines, which clinical presentation defines a suspected case of Acute Flaccid Paralysis (AFP) requiring immediate notification and dual stool collection within 14 days of onset?",
    options: [
      "Any child under 15 years of age presenting with sudden, acute onset of flaccid (floppy) weakness or paralysis of one or more limbs, or a person of any age with suspected polio",
      "A child with chronic spastic contractures present since birth",
      "An adult with gradual hand tremors lasting 5 years",
      "A child with a swollen, painful knee following a soccer fall"
    ],
    correctAnswer: 0,
    rationale: "Standard AFP case definition: Any child under 15 years of age presenting with acute, sudden-onset flaccid (floppy/limp) paralysis in one or more limbs without apparent trauma, or any person of any age with paralytic illness when polio is suspected. Surveillance requires collecting two stool specimens 24–48 hours apart within 14 days of paralysis onset to confirm absence of wild or vaccine-derived poliovirus.",
    optionRationales: {
      A: "Correct. Sudden flaccid (limp) weakness in a child under 15 defines AFP.",
      B: "Congenital spastic paralysis describes Cerebral Palsy, not acute flaccid paralysis.",
      C: "Chronic gradual hand tremors describe Parkinsonian or essential tremor, not acute paralysis.",
      D: "Localized joint swelling from sports trauma does not meet the neurological AFP definition."
    },
    clinicalPearl: "AFP surveillance rules: 1) Any child <15 years with sudden floppy paralysis, 2) Collect TWO stool samples 24–48 hours apart, 3) Transport on ice packs to a WHO-accredited lab within 14 days.",
    tags: ["AFP", "polio-surveillance", "IDSR", "stool-collection", "NPHCDA"]
  },
  {
    id: "PHC-109",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Human African Trypanosomiasis (Sleeping Sickness)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What insect vector transmits Trypanosoma brucei gambiense (sleeping sickness) in riverine rural areas, and what trapping device is deployed in communities to reduce fly densities?",
    options: [
      "Tsetse fly (Glossina species); controlled using biconical or monoconical blue-and-black cloth traps",
      "Sandflies (Phlebotomus); controlled by hanging yellow light bulbs",
      "Deerflies (Chrysops); controlled by applying petroleum jelly to roofs",
      "Hard ticks; controlled by spraying salt water along roads"
    ],
    correctAnswer: 0,
    rationale: "Human African Trypanosomiasis (HAT/sleeping sickness) is transmitted by the bite of the Tsetse fly (Glossina palpalis and Glossina tachinoides). Tsetse flies are visually attracted to royal blue and black colors. Deploying insecticide-impregnated biconical (Challier-Laveissière) blue cloth traps along riverbanks and gallery forests attracts and kills tsetse flies, reducing human-fly contact.",
    optionRationales: {
      A: "Correct. Glossina tsetse flies transmit sleeping sickness and are controlled by blue cloth traps.",
      B: "Phlebotomine sandflies transmit Leishmaniasis, not sleeping sickness.",
      C: "Chrysops (deerflies) transmit Loa loa (African eye worm).",
      D: "Ticks transmit rickettsial spotted fevers and Crimean-Congo hemorrhagic fever."
    },
    clinicalPearl: "Tsetse flies are attracted to blue and black. Community control uses insecticide-treated blue cloth traps along shaded riverbanks.",
    tags: ["trypanosomiasis", "sleeping-sickness", "tsetse-fly", "Glossina", "vector-control"]
  },
  {
    id: "PHC-110",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Herd Immunity Threshold",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Why does an airborne, highly contagious infection like Measles (R0 = 12–18) require a community Herd Immunity Threshold of at least 95% vaccination coverage to halt transmission, whereas Polio (R0 = 5–7) requires approximately 80–85% coverage?",
    options: [
      "The Herd Immunity Threshold is directly proportional to the Basic Reproduction Number (R0); pathogens with higher transmissibility require higher population immunity to block transmission",
      "Measles vaccines degrade faster in the human bloodstream than polio vaccines",
      "Polio viruses are completely eradicated by sunlight exposure within seconds",
      "Measles can only infect children who live in large cities"
    ],
    correctAnswer: 0,
    rationale: "The Herd Immunity Threshold (HIT) is calculated as: HIT = 1 - (1 / R0). Because Measles is an airborne virus with a high Basic Reproduction Number (R0 of 12 to 18: one infected child infects an average of 12 to 18 susceptible individuals), the math requires (1 - 1/15) = ~93-95% of the population to be immune to interrupt transmission. Polio has a lower R0 (5–7), yielding a lower threshold of 80–85%.",
    optionRationales: {
      A: "Correct. Higher R0 requires a higher proportion of immune individuals (HIT = 1 - 1/R0) to achieve herd protection.",
      B: "Measles vaccine induces durable, lifelong humoral and cellular immunity.",
      C: "Polio transmission depends on fecal-oral contact, not rapid solar sterilization.",
      D: "Measles is globally distributed and transmits readily across both rural and urban populations."
    },
    clinicalPearl: "Herd Immunity formula: 1 - (1 / R0). The more contagious the disease (higher R0), the higher the vaccination coverage required to stop outbreaks.",
    tags: ["herd-immunity", "R0", "measles", "epidemiology", "immunization-targets"]
  },
  {
    id: "PHC-111",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Management of Preeclampsia in Primary Care",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A primigravida at 34 weeks gestation presents to a rural primary health center with a blood pressure of 165/110 mmHg, 3+ proteinuria, severe frontal headache, and blurred vision (severe preeclampsia). Medical doctors are unavailable. Under the national Task-Shifting and Task-Sharing (TSTS) guidelines, what is the midwife's immediate emergency intervention before transferring the patient?",
    options: [
      "Administer the loading dose of Magnesium Sulfate (4g IV diluted over 15–20 minutes plus 10g IM, 5g in each buttock) and refer immediately",
      "Administer oral diazepam tablets and send the patient home to sleep in a quiet room",
      "Instruct the woman to drink salty broth to stabilize her blood volume",
      "Perform an immediate unassisted cesarean delivery in the outpatient clinic"
    ],
    correctAnswer: 0,
    rationale: "Under the TSTS policy, midwives and trained CHEWs are authorized and mandated to administer the life-saving loading dose of Magnesium Sulfate (Pritchard regimen: 4g IV as a 20% solution over 15–20 minutes, plus 10g of 50% solution deep IM—5g in each buttock with 1 mL of 2% lignocaine) to prevent eclamptic convulsions, alongside an oral antihypertensive (e.g., Hydralazine or Nifedipine), before transferring the patient to a secondary CEmONC hospital.",
    optionRationales: {
      A: "Correct. Administering the loading dose of Magnesium Sulfate prior to emergency transport is the standard TSTS protocol.",
      B: "Diazepam is inferior to Magnesium Sulfate and causes neonatal respiratory depression; sending a preeclamptic patient home is fatal neglect.",
      C: "Salty broth worsens hypertension and accelerates pulmonary edema.",
      D: "Cesarean delivery requires surgical equipment and cannot be attempted in an outpatient primary clinic."
    },
    clinicalPearl: "Always administer the loading dose of Magnesium Sulfate BEFORE transferring a patient with severe preeclampsia. Magnesium sulfate prevents seizures.",
    tags: ["preeclampsia", "magnesium-sulfate", "TSTS", "emergency-obstetrics", "safe-motherhood"]
  },
  {
    id: "PHC-112",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Wells and Ground Water Sanitary Protection",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which structural feature on a hand-dug community water well prevents surface runoff, mud, and spilled wastewater from draining back down into the drinking water aquifer?",
    options: [
      "An impermeable concrete apron (headwall and platform) sloping away from the well into a drainage channel",
      "An open wooden plank laid loosely across the mouth of the well",
      "A cluster of leafy green shrubs planted directly around the well rim",
      "A gravel ditch that funnels rainwater into the well shaft"
    ],
    correctAnswer: 0,
    rationale: "To protect well water from contamination: 1) Build a raised concrete headwall/parapet (at least 0.8 meters high); 2) Lay an impermeable concrete apron/platform (at least 1.5 to 2 meters wide) sloping outward away from the mouth; 3) Build a dedicated drainage gutter that channels spilled runoff at least 5–10 meters away to a soakaway, preventing contaminated surface mud from entering the well shaft.",
    optionRationales: {
      A: "Correct. A sloping concrete apron with a drainage channel directs surface runoff safely away from the wellhead.",
      B: "Loose wooden planks allow spilled water, dirt, and animal feces to fall directly into drinking water.",
      C: "Vegetation around the rim harbors insects and allows root channels to convey contamination downward.",
      D: "Channeling rainwater directly into the well shaft introduces surface bacteria and pesticides."
    },
    clinicalPearl: "A sanitary well requires: A raised concrete wall, a sloping concrete apron, a tight-fitting cover, a dedicated pump or clean bucket, and a drainage ditch.",
    tags: ["safe-water", "well-sanitation", "concrete-apron", "environmental-health"]
  },
  {
    id: "PHC-113",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Community Health Indicator: Under-Five Mortality Rate (U5MR)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "How is the Under-Five Mortality Rate (U5MR)—the primary target metric of Sustainable Development Goal 3.2—statistically defined?",
    options: [
      "The probability of a child dying between birth and exactly 5 years of age, expressed per 1,000 live births",
      "The total number of children who die in primary schools divided by the national population",
      "The percentage of children under 5 years who are admitted to tertiary intensive care units",
      "The number of childhood deaths occurring exclusively in the month of December"
    ],
    correctAnswer: 0,
    rationale: "Under-Five Mortality Rate (U5MR) is the probability (expressed as a rate per 1,000 live births) of a child dying between birth and exactly five years of age (0–59 months). SDG Target 3.2 aims to end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce under-5 mortality to at least as low as 25 per 1,000 live births by 2030.",
    optionRationales: {
      A: "Correct. Probability of dying before reaching 5 years of age per 1,000 live births.",
      B: "School-age mortality tracks children older than 5 years and ignores the vulnerable 0–59 month period.",
      C: "ICU admissions track hospital morbidity, not population-wide cohort mortality rates.",
      D: "Mortality is calculated over a full calendar year, not restricted to a single month."
    },
    clinicalPearl: "Under-Five Mortality Rate (U5MR) measures child survival up to the 5th birthday (0–59 months), expressed per 1,000 live births.",
    tags: ["U5MR", "child-mortality", "SDG-3", "demography", "epidemiology"]
  },
  {
    id: "PHC-114",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Management of Hypoglycemia in Malnourished Children",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "A 2-year-old child with Severe Acute Malnutrition (marasmus) is brought to the clinic lethargic, with a body temperature of 35.2°C (hypothermia) and blood glucose of 38 mg/dL (2.1 mmol/L). What is the immediate primary nursing management to prevent fatal hypoglycemia?",
    options: [
      "Administer 50 mL of 10% Dextrose (or 10% sugar water) orally or by nasogastric tube, keep the child warm, and begin feeding F-75 formula within 30 minutes",
      "Administer an immediate intravenous bolus of regular insulin",
      "Administer an ice-water enema to treat the hypothermia",
      "Withhold all fluids and oral feeds for 24 hours to rest the liver"
    ],
    correctAnswer: 0,
    rationale: "Under the WHO and national protocol for inpatient management of severe malnutrition, Hypothermia and Hypoglycemia frequently co-exist and are signs of impending death. The child must be treated immediately: give a 50 mL bolus of 10% glucose (or 10% sugar solution) orally or via NG tube; initiate active rewarming (Kangaroo mother care or blankets); and begin feeding F-75 therapeutic formula every 2 hours, day and night.",
    optionRationales: {
      A: "Correct. 50 mL of 10% sugar solution immediately, active warming, and early F-75 feeding treats both hypoglycemia and hypothermia.",
      B: "Insulin drives glucose lower and is fatal in hypoglycemia.",
      C: "Ice water worsens hypothermia and triggers cardiac arrest.",
      D: "Withholding feeds in a child with no glycogen stores causes rapid death from hypoglycemic coma."
    },
    clinicalPearl: "In Severe Acute Malnutrition (SAM), Hypoglycemia and Hypothermia travel together. If a malnourished child is cold (<35.5°C), assume they are hypoglycemic and feed them 10% sugar water immediately.",
    tags: ["SAM", "hypoglycemia", "hypothermia", "F-75", "therapeutic-feeding"]
  },
  {
    id: "PHC-115",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Loiasis (African Eye Worm) Vector & Clinical Signs",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the biological vector that transmits Loa loa (African eye worm) in tropical rainforest zones of Nigeria, and what characteristic allergic swelling is produced by migrating adult worms?",
    options: [
      "Chrysops species (Deerflies / Red flies); Calabar Swellings (fugitive subcutaneous non-erythematous swellings)",
      "Anopheles mosquitoes; Eschar ulcerations",
      "Tsetse flies; Chancre lesions",
      "Bulinus snails; Hydatid cysts"
    ],
    correctAnswer: 0,
    rationale: "Loa loa is a filarial nematode transmitted by the bite of day-biting Chrysops flies (Chrysops silacea and Chrysops dimidiata, commonly called deerflies, mango flies, or red flies) that breed in muddy rainforests. The adult worms migrate continuously through subcutaneous connective tissue, provoking transient, localized, non-erythematous angioedematous allergic swellings known as Calabar Swellings, and can be seen migrating across the subconjunctiva of the eye.",
    optionRationales: {
      A: "Correct. Chrysops deerflies transmit Loa loa, producing transient Calabar Swellings.",
      B: "Anopheles mosquitoes transmit malaria; eschars are seen in rickettsial scrub typhus or cutaneous anthrax.",
      C: "Tsetse flies transmit sleeping sickness, which can produce an initial trypanosomal chancre.",
      D: "Bulinus snails are intermediate hosts for schistosomes, while hydatid cysts are caused by Echinococcus granulosus."
    },
    clinicalPearl: "Calabar swellings: Transient, recurrent swelling on the arms and legs produced by the migrating Loa loa worm. The adult worm can visibly crawl across the white sclera of the eye.",
    tags: ["Loa-loa", "Calabar-swellings", "Chrysops", "eye-worm", "NTDs"]
  },
  {
    id: "PHC-116",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Fly Control & Mechanical Disease Transmission",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "How do common houseflies (Musca domestica) act as mechanical vectors in transmitting enteric bacterial pathogens (such as Shigella, Salmonella, and Vibrio cholerae) to human food?",
    options: [
      "Pathogens adhere to their hairy legs, sticky footpads, and proboscis, and are deposited onto food via regurgitation and defecation",
      "Bacteria undergo a mandatory sexual reproductive cycle inside the fly's salivary glands",
      "Flies inject pathogens through piercing hypodermic mouthparts into human veins",
      "Flies fly into drinking water and dissolve into toxic chemical acids"
    ],
    correctAnswer: 0,
    rationale: "Musca domestica is a mechanical (non-biological) vector. It feeds on human feces, animal manure, garbage, and exposed food. Pathogens adhere to the fly's hairy legs, footpads (pulvilli), and body surfaces. Furthermore, because flies cannot ingest solid food, they liquefy it by regurgitating saliva and stomach contents onto food surfaces, followed by frequent defecation, transferring enteric pathogens directly to meals.",
    optionRationales: {
      A: "Correct. Mechanical adhesion to hairy limbs, footpads, regurgitation spots, and defecation contaminates food.",
      B: "Houseflies are mechanical vectors; pathogens do not undergo obligate biological cycles within them.",
      C: "Houseflies possess sponging/lapping mouthparts; they cannot pierce intact skin to bite.",
      D: "Flies do not chemically dissolve into acidic solutions."
    },
    clinicalPearl: "Houseflies transfer germs from feces to food mechanically through their sticky footpads, vomit spots, and feces. Keep food covered.",
    tags: ["Musca-domestica", "mechanical-vector", "food-hygiene", "sanitation", "flies"]
  },
  {
    id: "PHC-117",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "Standing Orders Drug Authorization Tiers",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under standard primary health care treatment protocols in Nigeria, which category of clinical medications is a Junior Community Health Extension Worker (JCHEW) authorized to dispense independently at a village health post?",
    options: [
      "Class A / List 1 Essential Over-the-Counter medicines (e.g., Oral Rehydration Salts, Paracetamol, Vitamin A, and Zinc tablets)",
      "Controlled intravenous opioid analgesics like Pethidine and Morphine",
      "Cytotoxic systemic chemotherapy drugs for acute leukemia",
      "Second-line injectable tuberculosis therapy"
    ],
    correctAnswer: 0,
    rationale: "Standing Orders establish tiered drug access: JCHEWs operating at village health posts are authorized to stock and dispense basic Over-the-Counter and essential first-aid treatments (List 1: ORS, Zinc, Paracetamol, Artemether-Lumefantrine for rapid diagnostic test-confirmed malaria, and Vitamin A). Advanced injectables, controlled narcotics, and reserve antibiotics require certified nurses, midwives, or medical officers.",
    optionRationales: {
      A: "Correct. JCHEWs are restricted to approved over-the-counter and first-line essential packages (ORS, Zinc, ACTs, Paracetamol).",
      B: "Controlled opioid narcotics can only be prescribed and stored under hospital dangerous drug acts.",
      C: "Chemotherapy requires specialist oncology facilities and strict monitoring.",
      D: "Second-line TB medications require specialized MDR-TB treatment centers."
    },
    clinicalPearl: "JCHEW scope is focused on basic community survival tools: ORS packets, Zinc, ACTs for positive malaria tests, and Paracetamol.",
    tags: ["JCHEW", "drug-regulations", "standing-orders", "essential-drugs", "scope"]
  },
  {
    id: "PHC-118",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Primary Eye Care: Trachomatous Trichiasis Referral",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During an eye assessment at a rural health post, a 60-year-old farmer complains of constant eye irritation and tearing. The nurse observes that several upper eyelashes are turned inward, scratching the cornea on every blink (Trachomatous Trichiasis). What is the definitive management?",
    options: [
      "Refer the client to a trained ophthalmic nurse or surgeon for Bilamellar Tarsal Rotation surgery",
      "Pluck the in-turned eyelashes with unsterile household tweezers and tell the client never to wash their face",
      "Administer topical steroid eye drops continuously for 12 months",
      "Instruct the client to rub fine sand into the eye to dull the scratching sensation"
    ],
    correctAnswer: 0,
    rationale: "Trachomatous Trichiasis (TT) is the blinding stage of trachoma, where chronic conjunctival scarring causes the eyelid margin to roll inward (entropion), so the eyelashes scratch the cornea (trichiasis). Epilation (plucking) provides only temporary relief, as lashes regrow stiffer. The definitive, sight-saving treatment is Bilamellar Tarsal Rotation surgery—a minor, 15-minute procedure performed under local anesthesia by trained ophthalmic nurses.",
    optionRationales: {
      A: "Correct. Bilamellar Tarsal Rotation surgery permanently repositions the eyelid margin to prevent corneal blindness.",
      B: "Plucking lashes provides short-term relief, but regrowing stubble scratches the cornea even more aggressively.",
      C: "Topical steroids are contraindicated; they accelerate corneal ulceration and fungal infection.",
      D: "Rubbing sand causes corneal lacerations and blindness."
    },
    clinicalPearl: "In-turned eyelashes (Trichiasis) require Bilamellar Tarsal Rotation surgery to roll the lid margin outward and prevent corneal scarring.",
    tags: ["trichiasis", "trachoma", "primary-eye-care", "tarsal-rotation", "safe-strategy"]
  },
  {
    id: "PHC-119",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Vital Registration and Population Censuses",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which statutory agency of the Federal Government of Nigeria is responsible for conducting the decennial national population census and registering continuous civil vital events (births and deaths)?",
    options: [
      "National Population Commission (NPC)",
      "National Bureau of Statistics (NBS)",
      "Federal Road Safety Corps (FRSC)",
      "National Identity Management Commission (NIMC)"
    ],
    correctAnswer: 0,
    rationale: "The National Population Commission (NPC) is the federal statutory commission established by the Nigerian Constitution mandated to conduct periodic national censuses, collect and analyze demographic data, and operate the national civil registration system for registering births and deaths across all 774 LGAs.",
    optionRationales: {
      A: "Correct. The National Population Commission (NPC) conducts censuses and manages civil registration of births and deaths.",
      B: "The NBS coordinates national socioeconomic statistics and surveys (e.g., General Household Surveys).",
      C: "FRSC manages highway traffic safety and driver licensing.",
      D: "NIMC assigns National Identification Numbers (NIN) for civil identity management."
    },
    clinicalPearl: "Birth and death registration in Nigeria is the statutory constitutional responsibility of the National Population Commission (NPC).",
    tags: ["NPC", "census", "vital-registration", "demography", "epidemiology"]
  },
  {
    id: "PHC-120",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Vaccine Wastage Rate Calculation",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A primary health clinic opens a 10-dose vial of measles vaccine to vaccinate 4 infants attending a morning outreach session. At the end of 6 hours, the remaining 6 unused doses are discarded. What was the Vaccine Wastage Rate for that vial?",
    options: [
      "60%",
      "40%",
      "10%",
      "6%"
    ],
    correctAnswer: 0,
    rationale: "Vaccine Wastage Rate measures the proportion of opened or supplied vaccine doses that are not administered to a patient: Wastage Rate = (Doses wasted / Total doses in vial or issued) x 100 = (6 wasted / 10 total) x 100 = 60%. The Vaccine Wastage Factor = Total doses supplied / Doses administered = 10 / 4 = 2.5.",
    optionRationales: {
      A: "Correct. (6 wasted / 10 total) x 100 = 60% wastage rate.",
      B: "40% is the Vaccine Utilization Rate (4 doses administered / 10 total = 40%).",
      C: "10% is a mathematical calculation error.",
      D: "6% uses the raw wasted dose count without decimal expansion."
    },
    clinicalPearl: "Wastage Rate = (Doses wasted / Doses supplied) x 100. For multi-dose reconstituted vaccines like measles and BCG, acceptable wastage rates can run as high as 40–50% to avoid missing opportunities to vaccinate.",
    tags: ["vaccine-wastage", "NPI", "immunization-logistics", "cold-chain"]
  },
  {
    id: "PHC-121",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Home-Based Maternal Death Review (Verbal Autopsy)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In rural communities where most maternal deaths occur at home outside of hospitals, what public health methodology is used by community health nurses to determine the probable medical cause of death and underlying social delays?",
    options: [
      "Verbal Autopsy (standardized interviews with family members and caregivers regarding symptoms prior to death)",
      "Exhumation of the buried corpse for forensic surgical dissection",
      "Reviewing old electricity bills of the household",
      "Arresting the surviving husband for formal police interrogation"
    ],
    correctAnswer: 0,
    rationale: "A Verbal Autopsy is an epidemiological research tool used when deaths occur outside health facilities without medical certification. A trained interviewer administers a structured questionnaire to family members or caregivers who were present during the illness, recording signs, symptoms, timelines, and barriers encountered, which are then reviewed by clinicians to assign the probable cause of death.",
    optionRationales: {
      A: "Correct. Verbal Autopsy uses structured interviews with caregivers to assign probable cause of home deaths.",
      B: "Exhuming bodies without legal warrants and clinical indication violates community culture and legal codes.",
      C: "Utility bills carry no clinical diagnostic value regarding obstetric pathology.",
      D: "Criminal interrogation alienates communities and drives maternal deaths into concealment."
    },
    clinicalPearl: "Verbal Autopsy turns caregiver accounts into epidemiological data to identify causes of home deaths and community barriers.",
    tags: ["verbal-autopsy", "maternal-death-review", "epidemiology", "community-diagnosis"]
  },
  {
    id: "PHC-122",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Rabies Post-Exposure Prophylaxis (PEP) Regimen",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "When administering the modern cell-culture Rabies Vaccine (Essen Intramuscular Regimen) for Category III animal bite exposures, what is the standard 4-dose immunization schedule?",
    options: [
      "Days 0, 3, 7, and 14 (with Day 0 being the day the first dose is given)",
      "Daily for 30 consecutive days into the abdominal wall",
      "Once a month for 6 consecutive months",
      "A single dose given on Day 28"
    ],
    correctAnswer: 0,
    rationale: "The WHO-endorsed Essen Regimen for rabies post-exposure prophylaxis (PEP) consists of 4 intramuscular doses administered on Days 0, 3, 7, and 14 into the deltoid muscle (anterolateral thigh in young children). Day 0 is the day vaccination commences. For Category III exposures (deep bites or saliva on broken skin), Rabies Immune Globulin (RIG) must also be infiltrated into and around the wound on Day 0.",
    optionRationales: {
      A: "Correct. The Essen regimen schedule is Days 0, 3, 7, and 14.",
      B: "Daily abdominal injections describe obsolete neural-tissue Semple vaccines, which were banned due to encephalomyelitis risks.",
      C: "Monthly intervals are too slow to outrun the centripetal neural migration of the rabies virus.",
      D: "Waiting until Day 28 allows the virus to reach the central nervous system, leading to fatal encephalitis."
    },
    clinicalPearl: "Rabies vaccine schedule (Essen regimen): Days 0, 3, 7, and 14. Once neurological symptoms of rabies appear, the case fatality rate is virtually 100%.",
    tags: ["rabies", "PEP", "Essen-schedule", "vaccine", "zoonosis"]
  },
  {
    id: "PHC-123",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Sanitary Landfill Design and Leachate Management",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "What is 'Leachate' in municipal and environmental solid waste engineering, and why does an engineered sanitary landfill require a bottom clay or synthetic liner?",
    options: [
      "A toxic liquid formed when rainwater percolates through decomposing solid waste, which can contaminate underlying groundwater aquifers if not captured by a liner",
      "A harmless gas that turns into pure oxygen in sunlight",
      "The dry paper scraps that blow across the top of an open dump",
      "The clean treated drinking water produced by municipal reservoirs"
    ],
    correctAnswer: 0,
    rationale: "Leachate is a contaminated liquid generated when rainwater percolates through decomposing garbage in an open dump or landfill, dissolving heavy metals, organic acids, toxic chemicals, and biological pathogens. An engineered sanitary landfill must have a compacted impermeable clay and high-density polyethylene (HDPE) bottom liner to capture leachate and prevent it from seeping into aquifers.",
    optionRationales: {
      A: "Correct. Leachate is toxic liquid runoff that can seep into aquifers without an impermeable bottom liner.",
      B: "Landfill gas consists of methane and carbon dioxide, not pure oxygen.",
      C: "Wind-blown surface refuse is loose litter, not chemical liquid leachate.",
      D: "Leachate is a toxic environmental effluent, the opposite of treated drinking water."
    },
    clinicalPearl: "Sanitary landfills must be lined with clay and plastic liners to collect leachate and prevent toxic contamination of surrounding water wells.",
    tags: ["leachate", "sanitary-landfill", "groundwater-protection", "environmental-health"]
  },
  {
    id: "PHC-124",
    course: "Primary Health Care (PHC)",
    topic: "PHC Principles & Alma-Ata",
    subtopic: "Primary Health Care Minimum Package of Activities (MPA)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which set of services constitutes the core Minimum Package of Activities (MPA) delivered at every functional Ward Primary Health Centre in Nigeria?",
    options: [
      "Antenatal care, skilled delivery, routine NPI immunization, growth monitoring, family planning, and treatment of common endemic diseases (malaria, diarrhea, pneumonia)",
      "Elective aesthetic rhinoplasty and laser eye tattoo removal",
      "Hemodialysis and open cardiovascular bypass surgery",
      "Organ transplant procurement and brain tumor radiotherapy"
    ],
    correctAnswer: 0,
    rationale: "The Minimum Package of Activities (MPA) defined by NPHCDA for a Ward Primary Health Center includes basic essential services: maternal care (ANC, normal delivery, PNC), child health (routine NPI immunization, growth monitoring, IMCI), family planning, health education, environmental sanitation, control of endemic diseases (malaria, diarrhea, acute respiratory infections), and basic lab tests (RDT, PCV, urinalysis).",
    optionRationales: {
      A: "Correct. Basic maternal, child, immunization, and endemic disease interventions define the core MPA.",
      B: "Elective cosmetic surgeries are non-essential tertiary commercial procedures.",
      C: "Dialysis and open-heart surgery are specialized tertiary hospital interventions.",
      D: "Transplants and radiotherapy require specialized tertiary oncology centers."
    },
    clinicalPearl: "The PHC Minimum Package of Activities covers foundational life-saving interventions: Maternal care, Child immunization, Family planning, Nutrition, and Malaria treatment.",
    tags: ["MPA", "minimum-package", "NPHCDA", "service-delivery"]
  },
  {
    id: "PHC-125",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Prevention of Rickets and Vitamin D Deficiency",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What simple, cost-free environmental practice should a primary care nurse teach mothers in cloudy or purdah-practicing communities to prevent nutritional Rickets in young infants?",
    options: [
      "Exposing the infant's bare limbs and face to gentle morning sunlight for 15 to 30 minutes daily to stimulate cutaneous Vitamin D synthesis",
      "Feeding the infant raw cow fat mixed with hot pepper",
      "Keeping the child inside a windowless dark bedroom continuously for 12 months",
      "Covering the child's entire body in heavy black cloth whenever outdoors"
    ],
    correctAnswer: 0,
    rationale: "Nutritional rickets (defective mineralization of growing bone causing bowed legs and rachitic rosary) results from Vitamin D and calcium deficiency. Ultraviolet-B (UV-B) rays in sunlight convert 7-dehydrocholesterol in the skin into cholecalciferol (Vitamin D3). Exposing an infant's face and limbs to morning sunlight (before 10 AM) provides enough UV-B to maintain normal vitamin D levels.",
    optionRationales: {
      A: "Correct. Morning sunlight exposure stimulates natural cutaneous Vitamin D synthesis, preventing rickets.",
      B: "Hot pepper irritates infant gut mucosa and does not correct vitamin D deficits.",
      C: "Keeping infants indoors away from sunlight causes severe nutritional rickets.",
      D: "Heavy covering blocks UV-B rays, preventing cutaneous vitamin D synthesis."
    },
    clinicalPearl: "Encourage mothers to expose infants' arms and legs to gentle morning sunlight for 15–30 minutes daily to prevent rickets.",
    tags: ["rickets", "vitamin-D", "sunlight", "child-health", "bone-metabolism"]
  },
  {
    id: "PHC-126",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Epidemiological Surveillance Case Definitions",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under standard disease surveillance protocols, what is the primary operational utility of a 'Standard Case Definition'?",
    options: [
      "Ensuring that every suspected case of a disease is identified, recorded, and categorized identically across all health facilities and regions, regardless of local variations",
      "Allowing each nurse to invent their own personal diagnostic criteria",
      "Restricting medical treatments exclusively to university hospitals",
      "Calculating the commercial pharmaceutical profits of health clinics"
    ],
    correctAnswer: 0,
    rationale: "A Standard Case Definition is an agreed-upon set of clinical and laboratory criteria used to decide whether an individual has a particular disease. It ensures consistency, standardization, and comparability across different health facilities, local government areas, and states, preventing over-reporting or missed cases.",
    optionRationales: {
      A: "Correct. Standard case definitions ensure consistent, comparable classification across all surveillance sites.",
      B: "Personal subjective criteria create chaotic, non-comparable surveillance data.",
      C: "Case definitions govern standardized surveillance tracking, not clinical facility restrictions.",
      D: "Surveillance systems monitor population health trends, not pharmaceutical profits."
    },
    clinicalPearl: "A standard case definition categorizes cases into Suspected, Probable, or Confirmed using identical clinical criteria nationwide.",
    tags: ["case-definition", "surveillance", "IDSR", "epidemiology", "data-standardization"]
  },
  {
    id: "PHC-127",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Community Water Supply: Slow Sand Filtration",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In rural community slow sand water filters, what is the biological layer that forms on the top surface of the sand bed (the Schmutzdecke) responsible for removing bacteria and organic matter?",
    options: [
      "A biological biofilm layer of algae, plankton, protozoa, and harmless bacteria that digests and traps passing pathogens",
      "A sheet of pure synthetic plastic placed inside the tank",
      "A layer of toxic industrial lead pellets",
      "A chemical pesticide cake that dissolves into the drinking water"
    ],
    correctAnswer: 0,
    rationale: "A Slow Sand Filter cleans water through a biological skin called the Schmutzdecke (or hypogeal layer) that forms on the top 1 to 2 cm of the sand bed. It consists of a dense biofilm of active microorganisms (algae, zoogleal bacteria, protozoa) that feed on organic matter, break down nitrogenous waste, and capture bacteria through mechanical straining, predation, and adsorption.",
    optionRationales: {
      A: "Correct. The Schmutzdecke is the active biological biofilm layer that consumes and purifies pathogens.",
      B: "Slow sand filters use natural sand and biological films, not plastic barriers.",
      C: "Lead is a toxic heavy metal that poisons water supplies.",
      D: "Slow sand filtration avoids chemical additives, relying on biological and mechanical purification."
    },
    clinicalPearl: "In slow sand filters, the Schmutzdecke (biofilm) does the actual water purification by digesting bacteria as water slowly filters through.",
    tags: ["slow-sand-filter", "Schmutzdecke", "water-purification", "appropriate-technology"]
  },
  {
    id: "PHC-128",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Partograph: Fetal Heart Rate Monitoring in Labor",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When plotting fetal heart rate (FHR) on a partograph during active labor at a primary health care clinic, what baseline FHR range indicates normal, reassuring fetal well-being?",
    options: [
      "110 to 160 beats per minute",
      "60 to 80 beats per minute",
      "180 to 220 beats per minute",
      "Exactly 72 beats per minute at all times"
    ],
    correctAnswer: 0,
    rationale: "Normal baseline fetal heart rate (FHR) in active labor ranges between 110 and 160 beats per minute. A baseline rate consistently <110 bpm indicates fetal bradycardia; a rate >160 bpm indicates fetal tachycardia. Both are warning signs of potential intrapartum fetal distress, maternal infection, or hypoxia.",
    optionRationales: {
      A: "Correct. 110 to 160 bpm is the normal baseline fetal heart rate range in active labor.",
      B: "60 to 80 bpm represents severe pathological fetal bradycardia and impending fetal demise.",
      C: "180 to 220 bpm represents severe fetal tachycardia, associated with maternal chorioamnionitis or fetal distress.",
      D: "72 bpm is normal adult resting heart rate, but indicates severe bradycardia in a fetus."
    },
    clinicalPearl: "Partograph fetal heart rate thresholds: Normal = 110–160 bpm. Below 110 = Bradycardia. Above 160 = Tachycardia. Both warrant urgent evaluation.",
    tags: ["partograph", "fetal-heart-rate", "intrapartum-monitoring", "fetal-distress"]
  },
  {
    id: "PHC-129",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Cutaneous Anthrax Transmission & Zoonosis",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Following the butchering of a diseased domestic cow in an agricultural community, an abattoir worker presents with a painless, pruritic skin papule that develops into a central black necrotic depressed ulcer (malignant pustule) surrounded by gelatinous edema. What zoonotic infection is suspected?",
    options: [
      "Cutaneous Anthrax (Bacillus anthracis)",
      "Secondary Syphilis",
      "Tetanus",
      "Cutaneous Leishmaniasis"
    ],
    correctAnswer: 0,
    rationale: "Cutaneous anthrax is caused by Bacillus anthracis spores entering cuts or abrasions from handling infected livestock carcasses, hides, or wool. It presents characteristically as a painless, pruritic papule that ulcerates into a black necrotic center (an eschar, historically called a 'malignant pustule') surrounded by extensive, non-pitting gelatinous edema.",
    optionRationales: {
      A: "Correct. Painless ulcer with a characteristic black necrotic eschar following animal contact defines cutaneous anthrax.",
      B: "Secondary syphilis presents with a generalized maculopapular rash on the palms and soles, not a focal black necrotic eschar.",
      C: "Tetanus produces neuromuscular spasms (trismus/lockjaw), not black necrotic skin ulcers.",
      D: "Cutaneous leishmaniasis causes chronic, slowly ulcerating volcano-like sores, but lacks the rapid central black eschar of anthrax."
    },
    clinicalPearl: "Painless skin ulcer with a black necrotic center (eschar) after handling dead livestock = Cutaneous Anthrax. Treat with Ciprofloxacin or Doxycycline.",
    tags: ["anthrax", "eschar", "zoonosis", "abattoir-health", "endemic-diseases"]
  },
  {
    id: "PHC-130",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Cold Box vs Vaccine Carrier",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary operational difference in cold chain capacity and transport duration between a Large Cold Box and a Small Vaccine Carrier during immunization activities?",
    options: [
      "A Cold Box has thick insulation, holds more vaccines, and maintains temperature for up to 48–96 hours for long-distance transport, while a Vaccine Carrier is smaller (holds 16–24 vials) and maintains cold for 24–48 hours for local daily outreach",
      "Vaccine carriers are connected to solar electrical panels, while cold boxes run on petrol generators",
      "Cold boxes are carried by hand on foot, while vaccine carriers require heavy trucks",
      "Vaccine carriers are kept at room temperature without ice packs"
    ],
    correctAnswer: 0,
    rationale: "Cold boxes have thick walls and heavy ice pack linings, holding thousands of doses for bulk transport from regional/LGA stores to facilities and maintaining temperature for 48 to 96 hours. Vaccine carriers are lightweight and portable, holding 16–24 vials lined with 4 conditioned ice packs, keeping vaccines at +2°C to +8°C for 24 to 48 hours for daily outreach clinics.",
    optionRationales: {
      A: "Correct. Cold boxes are larger and hold cold for 48–96 hours; vaccine carriers are portable units for daily outreach lasting 24–48 hours.",
      B: "Both are passive, unpowered insulated containers that rely on conditioned ice packs.",
      C: "Vaccine carriers are carried by hand; cold boxes are loaded into transport vehicles.",
      D: "Vaccine carriers must be lined with 4 conditioned ice packs to maintain cold temperatures."
    },
    clinicalPearl: "Vaccine carriers use 4 ice packs for daily local outreach (24–48 hours). Cold boxes are larger, bulk storage units for transport (48–96 hours).",
    tags: ["vaccine-carrier", "cold-box", "cold-chain", "logistics", "NPI"]
  },
  {
    id: "PHC-131",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Home Management of Fevers (Danger Signs)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When teaching mothers how to manage mild fevers in children at home, which practice is considered unsafe and should be explicitly discouraged?",
    options: [
      "Giving cold ice-water baths or wiping the child with raw methylated spirit",
      "Offering frequent sips of clean drinking water, breast milk, or oral rehydration fluids",
      "Removing excess heavy clothing to allow heat dissipation",
      "Administering paracetamol syrup according to age and weight instructions"
    ],
    correctAnswer: 0,
    rationale: "Unsafe fever practices: 1) Ice-water baths cause severe peripheral vasoconstriction, shivering, and rapid core temperature spikes; 2) Rubbing rubbing alcohol/methylated spirit on skin leads to transdermal chemical absorption and neurotoxicity, while rapid evaporation causes chilling. Safe management includes removing heavy clothing, tepid sponging with lukewarm water, offering fluids, and administering weight-based paracetamol.",
    optionRationales: {
      A: "Correct. Ice water and alcohol rubs are dangerous practices that cause hypothermia, shivering, and chemical toxicity.",
      B: "Encouraging fluids prevents dehydration from fever and tachypnea.",
      C: "Undressing excess layers promotes heat loss through radiation and convection.",
      D: "Weight-appropriate paracetamol provides safe antipyresis and pain relief."
    },
    clinicalPearl: "Never sponge a feverish child with cold water or alcohol. Use LUKEWARM (tepid) water, remove excess clothing, and give fluids.",
    tags: ["fever-management", "tepid-sponging", "child-health", "harmful-practices"]
  },
  {
    id: "PHC-132",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Fly Breeding Media and Control",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the most effective environmental control measure to eliminate the breeding of filth flies (Musca domestica) in a residential primary health care catchment area?",
    options: [
      "Proper storage of household garbage in tightly covered bins, prompt removal of animal manure, and eliminating open defecation",
      "Spraying chemical aerosol insecticides outdoors across the village every hour",
      "Cutting down all shade trees in the community",
      "Painting all residential compound walls dark green"
    ],
    correctAnswer: 0,
    rationale: "The housefly (Musca domestica) breeds in warm, moist, decomposing organic matter: uncovered garbage, animal manure, rotting food, and human feces. The primary control strategy is source reduction: storing refuse in tightly lidded bins, regular waste collection, composting, clearing animal dung, and ending open defecation through latrine construction.",
    optionRationales: {
      A: "Correct. Source reduction—securing refuse and eliminating animal/human feces—stops fly breeding.",
      B: "Hourly outdoor aerosol spraying is expensive, causes chemical toxicity, and fosters rapid insecticide resistance.",
      C: "Deforestation destroys shade without addressing organic breeding matter.",
      D: "Wall paint color does not alter housefly larval breeding cycles."
    },
    clinicalPearl: "Vector control rule: Source reduction (destroying the breeding media) is always more effective and sustainable than spraying adult insects.",
    tags: ["fly-control", "source-reduction", "environmental-health", "sanitation"]
  },
  {
    id: "PHC-133",
    course: "Primary Health Care (PHC)",
    topic: "PHC Organization & Nigerian Health Structure",
    subtopic: "Standing Orders Drug Authorization: Misoprostol",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the Federal Ministry of Health's Task-Shifting and Task-Sharing (TSTS) policy, which cadre of primary health worker is authorized to administer Misoprostol to prevent postpartum hemorrhage (PPH) during community-level deliveries?",
    options: [
      "Community Health Extension Workers (CHEWs) and Registered Midwives",
      "Uncertified patent medicine vendors in commercial markets",
      "Only consultant obstetricians in tertiary university hospitals",
      "Traditional bone setters"
    ],
    correctAnswer: 0,
    rationale: "Under the national Task-Shifting and Task-Sharing (TSTS) policy, Community Health Extension Workers (CHEWs) and Registered Nurses/Midwives are trained, equipped, and authorized to administer oral Misoprostol (600 mcg) for the prevention and initial management of postpartum hemorrhage (PPH) during community deliveries.",
    optionRationales: {
      A: "Correct. CHEWs and midwives are explicitly authorized to administer misoprostol under the TSTS policy.",
      B: "Uncertified retail vendors are not licensed primary healthcare providers.",
      C: "TSTS shifts tasks downward from tertiary doctors to frontline community workers.",
      D: "Traditional bone setters handle musculoskeletal fractures, not obstetric pharmacotherapy."
    },
    clinicalPearl: "TSTS empowers CHEWs to administer life-saving oral Misoprostol (600 mcg) to stop postpartum hemorrhage when a midwife or doctor is not on site.",
    tags: ["TSTS", "CHEW", "misoprostol", "PPH", "task-shifting"]
  },
  {
    id: "PHC-134",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Vaccine Cold Chain: Freeze-Watch and Freeze-Tag",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the function of electronic freeze indicators (such as the Freeze-Tag) placed inside vaccine refrigerators containing Pentavalent and Td vaccines?",
    options: [
      "They alert health workers if the temperature drops below 0°C for more than 60 minutes, signaling potential freeze damage to vaccines",
      "They automatically lower the refrigerator temperature when the sun shines",
      "They measure the volume of liquid remaining inside open vials",
      "They monitor humidity levels inside clinic delivery rooms"
    ],
    correctAnswer: 0,
    rationale: "Electronic freeze indicators (e.g., Freeze-Tag) monitor freeze-sensitive vaccines. If the temperature drops below 0°C for a continuous period of 60 minutes, the digital display irreversibly switches from a checkmark to an 'X' or alarm sign. This alerts the nurse to stop administering those vaccines until a Shake Test confirms they remain undamaged.",
    optionRationales: {
      A: "Correct. Electronic freeze indicators detect temperatures <0°C lasting over 60 minutes to flag freeze damage.",
      B: "The indicator is a passive sensor; it does not adjust thermostat compressors.",
      C: "It monitors ambient temperature, not internal vial liquid volume.",
      D: "It monitors the internal vaccine compartment, not room humidity."
    },
    clinicalPearl: "If the Freeze-Tag display changes from a checkmark to an 'X', the temperature dropped below freezing. Conduct a Shake Test before using the vaccines.",
    tags: ["Freeze-Tag", "cold-chain", "freeze-monitoring", "vaccine-safety"]
  },
  {
    id: "PHC-135",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Partograph: Molding of the Fetal Skull",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "When plotting progress on a labor partograph, the midwife notes that the fetal skull bones overlap significantly and cannot be separated by gentle finger pressure. How is this recorded on the partograph, and what does it suggest?",
    options: [
      "Molding Grade 3 (+++); indicates severe cephalopelvic disproportion (CPD) and obstructed labor",
      "Molding Grade 0; indicates completely normal fetal descent",
      "Molding Grade 1 (+); indicates normal adaptive skull compression",
      "Molding Grade -1; indicates anencephaly"
    ],
    correctAnswer: 0,
    rationale: "Fetal skull molding degrees: Grade 0 = Bones separated, sutures felt easily; Grade 1 (+) = Bones touching each other; Grade 2 (++) = Bones overlapping, but reducible with gentle digital pressure; Grade 3 (+++) = Bones overlapping severely and irreducible. Grade 3 molding (especially with high caput and arrested descent) is a sign of Cephalopelvic Disproportion (CPD) and obstructed labor.",
    optionRationales: {
      A: "Correct. Grade 3 (+++) molding is irreducible and signals cephalopelvic disproportion and obstruction.",
      B: "Grade 0 means sutures are open and bones are separated.",
      C: "Grade 1 means bones are touching edge-to-edge.",
      D: "-1 is not a valid clinical grade on the partograph."
    },
    clinicalPearl: "Severe irreducible skull bone overlapping (Grade 3 +++ molding) means the head cannot fit through the pelvis. Prepare for emergency cesarean section.",
    tags: ["partograph", "molding", "CPD", "obstructed-labor", "intrapartum-care"]
  },
  {
    id: "PHC-136",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Epidemic Cholera Case Definition and Rehydration",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "During an outbreak of Cholera in a fishing community, an adult presents with profuse, continuous painless watery diarrhea ('rice-water stools'), sunken eyes, absent radial pulses, and skin tenting that persists for 3 seconds (severe dehydration). What is the immediate life-saving fluid resuscitation protocol?",
    options: [
      "Establish immediate large-bore IV access and infuse 1,000 mL of Ringer's Lactate (or Normal Saline) rapidly over 30 minutes, followed by 70 mL/kg over the next 2.5 hours",
      "Give sips of plain tap water and wait for the patient to request a bed",
      "Administer oral tetracycline tablets with warm milk and avoid IV fluids",
      "Administer 50% Dextrose bolus without electrolytes"
    ],
    correctAnswer: 0,
    rationale: "According to WHO cholera management protocols for Severe Dehydration (Plan C): Immediately establish large-bore IV access and infuse Ringer's Lactate (preferred) or Normal Saline. Adults receive 100 mL/kg total over 3 hours: give 30 mL/kg rapidly in the first 30 minutes, then 70 mL/kg over the remaining 2.5 hours. Oral Rehydration Solution (ORS) is started as soon as the patient is conscious and can drink.",
    optionRationales: {
      A: "Correct. Plan C cholera resuscitation: 100 mL/kg Ringer's Lactate (30 mL/kg in first 30 mins, then 70 mL/kg over 2.5 hours).",
      B: "Plain water alone in severe shock lacks electrolytes and produces fatal hyponatremic seizures.",
      C: "Oral antibiotics are adjunctive after shock is reversed; they do not replace fluid resuscitation.",
      D: "50% Dextrose causes osmotic diuresis and does not replace lost fluid and electrolytes."
    },
    clinicalPearl: "Cholera Plan C: Ringer's Lactate is the fluid of choice (100 mL/kg total). Start with 30 mL/kg rapidly in 30 minutes to restore blood pressure.",
    tags: ["cholera", "fluid-resuscitation", "Ringers-lactate", "Plan-C", "dehydration"]
  },
  {
    id: "PHC-137",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Spring Protection Infrastructure",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When protecting a natural freshwater spring to supply safe community drinking water, what structure is built over the eye of the spring to prevent contamination from surface runoff?",
    options: [
      "A concrete Spring Box (catchment box) with a gravel filter bed, overflow pipe, and an outflow pipe above ground level",
      "An open clay ditch directing rain runoff into the spring pool",
      "A wooden cattle drinking trough placed directly over the spring eye",
      "An open pit latrine excavated 2 meters above the spring"
    ],
    correctAnswer: 0,
    rationale: "Protecting a natural spring requires constructing a Spring Box (concrete catchment box) over the water emergence point (the eye). The area behind the box is packed with clean, washed gravel to filter water; an impermeable clay or concrete cap seals out surface runoff; and clean water flows out through a delivery pipe elevated above ground level. A drainage diversion ditch is dug uphill to divert surface storm runoff.",
    optionRationales: {
      A: "Correct. A sealed concrete Spring Box with a gravel filter bed and delivery pipe protects spring water.",
      B: "Open ditches direct contaminated surface runoff into the spring.",
      C: "Cattle troughs contaminate the springhead with animal manure and parasites.",
      D: "Excavating latrines uphill introduces fecal pathogens into the water source."
    },
    clinicalPearl: "Protected spring essentials: 1) Concrete spring box, 2) Watertight lid, 3) Uphill storm drainage ditch, 4) Fence to keep livestock away.",
    tags: ["spring-protection", "safe-water", "catchment-box", "environmental-health"]
  },
  {
    id: "PHC-138",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Exclusive Breastfeeding Maternal Positioning & Attachment",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During a postnatal lactation assessment, which four clinical signs confirm good latch and effective attachment of the infant at the mother's breast?",
    options: [
      "1) More areola visible above the upper lip than below, 2) Mouth is wide open, 3) Lower lip is turned outward (everted), and 4) Chin touches the breast",
      "1) Infant is sucking on the nipple tip only, 2) Dimples form in the cheeks, 3) Clicking sounds are heard, and 4) Mother reports sharp nipple pain",
      "1) Infant's head is turned away from the body, 2) Mouth is half closed, 3) Fast shallow fluttering, and 4) Areola is completely exposed",
      "1) Baby sleeps for 12 hours without feeding, 2) Mother uses formula top-ups, 3) Breasts are engorged, and 4) No audible swallowing"
    ],
    correctAnswer: 0,
    rationale: "The WHO/UNICEF four signs of good attachment: 1) More areola visible above the infant's top lip than below; 2) Mouth is wide open; 3) Lower lip is curled outward (everted); 4) Infant's chin is touching the mother's breast. Sucking on the nipple tip alone, clicking sounds, and maternal nipple pain indicate poor latch.",
    optionRationales: {
      A: "Correct. These are the 4 canonical signs of good latch and attachment.",
      B: "Nipple pinching, clicking sounds, and pain indicate poor attachment, causing cracked nipples.",
      C: "Mouth half closed and shallow fluttering indicate ineffective latch without milk transfer.",
      D: "12-hour sleep and engorgement signal inadequate feeding frequency."
    },
    clinicalPearl: "Attachment checklist: Chin touching breast, Mouth wide open, Lower lip curled out, More areola visible above than below.",
    tags: ["breastfeeding", "attachment", "latch", "maternal-child-health", "lactation"]
  },
  {
    id: "PHC-139",
    course: "Primary Health Care (PHC)",
    topic: "PHC Principles & Alma-Ata",
    subtopic: "Essential Drug Revolving Fund Pricing Formulas",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When establishing medication prices in a sustainable Primary Health Care Drug Revolving Fund (DRF), what markup pricing formula maintains capital while providing affordable drugs?",
    options: [
      "Cost price + a modest markup (typically 10–15%) to cover freight, storage losses, operational running costs, and inflation",
      "Marking up prices by 500% to generate commercial profits for facility managers",
      "Selling all drugs at 90% below cost price without a plan to replace the subsidy",
      "Allowing each patient to negotiate the price of life-saving antibiotics"
    ],
    correctAnswer: 0,
    rationale: "To ensure a Drug Revolving Fund (DRF) is sustainable, medications are sold at Cost Price plus a modest markup (usually 10% to 15%). This markup is ring-fenced to cover operational expenses: transportation/freight, storage costs, unavoidable wastage/breakage, and inflationary price increases, ensuring capital is not depleted when restocking.",
    optionRationales: {
      A: "Correct. Cost price + 10–15% markup protects the fund against inflation, freight, and running costs.",
      B: "A 500% markup creates an insurmountable financial barrier for poor rural patients.",
      C: "Selling 90% below cost without an ongoing subsidy depletes capital within one restocking cycle.",
      D: "Subjective price bargaining leads to financial leakage and audit failure."
    },
    clinicalPearl: "A DRF markup (10–15%) is not for commercial profit; it is a buffer that covers shipping, breakage, and inflation so the fund can restock.",
    tags: ["DRF", "drug-pricing", "cost-recovery", "Bamako-Initiative", "sustainability"]
  },
  {
    id: "PHC-140",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Community Diagnosis Steps Order",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "What is the correct sequential order of steps in conducting a comprehensive Community Health Diagnosis?",
    options: [
      "Community Entry and Advocacy → Data Collection and Survey → Data Analysis and Problem Identification → Community Presentation and Prioritization → Action Plan Formulation → Implementation → Monitoring and Evaluation",
      "Action Plan Formulation → Implementation → Data Collection → Community Entry → Evaluation",
      "Data Collection → Implementation → Community Entry → Problem Identification → Advocacy",
      "Evaluation → Action Plan → Data Analysis → Community Entry → Implementation"
    ],
    correctAnswer: 0,
    rationale: "The Community Diagnosis process follows an orderly sequence: 1) Community Entry and Advocacy (courtesy visits to gatekeepers); 2) Data Collection (surveys, records, focus groups); 3) Data Analysis and Problem Identification; 4) Community Dialogue (presenting findings back to the community for participatory prioritization); 5) Action Plan Formulation; 6) Implementation of interventions; and 7) Monitoring and Evaluation.",
    optionRationales: {
      A: "Correct. Follows the sequence: Entry → Data Collection → Analysis → Prioritization with community → Action Plan → Implementation → Evaluation.",
      B: "Planning and implementation cannot precede data collection and community entry.",
      C: "Data collection cannot begin before community entry and consent.",
      D: "Evaluation is the terminal step, not the starting point."
    },
    clinicalPearl: "Community Diagnosis flow: Entry → Collect Data → Analyze → Prioritize TOGETHER with the community → Plan → Implement → Evaluate.",
    tags: ["community-diagnosis", "planning-cycle", "epidemiology", "steps-order"]
  },
  {
    id: "PHC-141",
    course: "Primary Health Care (PHC)",
    topic: "Immunization & Vaccine Preventable Diseases",
    subtopic: "Open-Vial Storage Rules for Liquid Vaccines",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the WHO and NPHCDA multi-dose vial policy, which condition requires that an opened vial of liquid Pentavalent vaccine be discarded immediately, even if fewer than 28 days have passed?",
    options: [
      "The vial septum was submerged in water, or the cold chain was broken, or the VVM reached the discard stage",
      "The nurse opened the vial during a morning session",
      "The child receiving the dose cried loudly during the injection",
      "The vial was stored in a clean solar refrigerator at +4°C"
    ],
    correctAnswer: 0,
    rationale: "Opened liquid multi-dose vials can be used for up to 28 days UNLESS: 1) The expiry date has passed; 2) The vial was contaminated (e.g., septum submerged in water or punctured with an unsterile needle); 3) The cold chain was broken; 4) The Vaccine Vial Monitor (VVM) reached or passed the discard point (Stage 3 or 4). In any of these situations, the vial must be discarded immediately.",
    optionRationales: {
      A: "Correct. Water submersion, broken cold chain, or VVM at Stage 3/4 mandates immediate disposal.",
      B: "Opening in the morning is standard practice and does not require disposal.",
      C: "Infant crying is a normal reaction and has no impact on vaccine viability.",
      D: "Storage at +4°C in a solar refrigerator is the correct cold chain condition."
    },
    clinicalPearl: "If an opened multi-dose vial's septum gets wet (e.g., submerged in water from a melted ice pack), discard it immediately due to contamination risk.",
    tags: ["MDVP", "open-vial", "vaccine-safety", "cold-chain", "contamination"]
  },
  {
    id: "PHC-142",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Partograph: Deceleration Phase and Fetal Distress",
    difficulty: "Hard",
    type: "Clinical Judgment",
    question: "During monitoring of a woman in active labor at a primary health care maternity clinic, the midwife auscultates the fetal heart rate during and after a strong uterine contraction and detects Late Decelerations (FHR drops below 100 bpm starting after the peak of the contraction and recovers long after the contraction ends). What underlying pathology does this indicate?",
    options: [
      "Uteroplacental insufficiency and fetal hypoxia",
      "Benign physiological head compression during pelvic entry",
      "Umbilical cord compression that resolves spontaneously",
      "The fetus is sleeping comfortably"
    ],
    correctAnswer: 0,
    rationale: "Fetal heart decelerations: 1) Early Decelerations mirror contractions (nadir matches peak of contraction) and are caused by benign head compression; 2) Variable Decelerations are sharp, V-shaped drops caused by umbilical cord compression; 3) Late Decelerations start at or after the peak of the contraction and recover slowly after the contraction has finished. Late decelerations reflect Uteroplacental Insufficiency, indicating that the placenta cannot maintain fetal oxygenation during the stress of contractions.",
    optionRationales: {
      A: "Correct. Late decelerations signal uteroplacental insufficiency and fetal hypoxia, requiring immediate oxygen, left lateral positioning, and emergency referral.",
      B: "Head compression produces Early Decelerations that mirror contractions.",
      C: "Cord compression produces Variable Decelerations.",
      D: "A sleeping fetus displays reduced baseline variability, not late decelerations with contractions."
    },
    clinicalPearl: "Early Decels = Head compression (Benign). Variable Decels = Cord compression. Late Decels = Placental insufficiency (Emergency: Turn patient to left side, give oxygen, refer).",
    tags: ["partograph", "fetal-distress", "late-decelerations", "uteroplacental-insufficiency"]
  },
  {
    id: "PHC-143",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Dracunculiasis (Guinea Worm) Prevention in Nomadic Herders",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "During the historical global eradication campaign against Guinea Worm (Dracunculiasis) in rural Nigerian pastoral communities, what simple portable personal tool was distributed to farmers and nomadic herders to guarantee safe drinking water from open ponds?",
    options: [
      "A pipe filter (a portable plastic drinking straw fitted with a fine monofilament nylon mesh filter)",
      "An electronic battery-powered ultrasound probe",
      "A handheld digital Geiger counter",
      "A glass mercury thermometer"
    ],
    correctAnswer: 0,
    rationale: "To protect nomadic herders and farmers working away from safe village boreholes, the Guinea Worm Eradication Programme distributed Pipe Filters—portable plastic drinking straws with a 100-micron monofilament nylon mesh filter secured at one end. Worn around the neck on a lanyard, herders could drink directly from open ponds because the mesh physically screened out copepod water fleas (Cyclops), stopping larval ingestion.",
    optionRationales: {
      A: "Correct. Pipe filters equipped with fine nylon mesh blocked Cyclops fleas, protecting people drinking from open ponds.",
      B: "Ultrasound probes are diagnostic imaging tools, not water filters.",
      C: "Geiger counters measure ionizing radiation.",
      D: "Thermometers measure temperature, not filtration."
    },
    clinicalPearl: "The Pipe Filter was a key appropriate technology in eradicating Guinea worm: a portable straw with a mesh tip that filters out water fleas.",
    tags: ["guinea-worm", "pipe-filter", "appropriate-technology", "Cyclops", "eradication"]
  },
  {
    id: "PHC-144",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Buruli Ulcer (Mycobacterium ulcerans) Presentation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "An 8-year-old child living in an endemic riverine wetland presents with a painless, movable subcutaneous nodule on the forearm that breaks down into a large, painless ulcer with characteristic deeply undermined edges and gelatinous necrotic slough. What endemic condition does this represent?",
    options: [
      "Buruli Ulcer (Mycobacterium ulcerans)",
      "Acute pyogenic staphylococcal abscess",
      "Herpes zoster shingles",
      "Malignant melanoma"
    ],
    correctAnswer: 0,
    rationale: "Buruli Ulcer is a neglected tropical disease caused by Mycobacterium ulcerans. The organism secretes a unique lipid-soluble polyketide toxin called Mycolactone, which has cytotoxic, immunosuppressive, and analgesic properties. It begins as a painless nodule, plaque, or edema that breaks down into a massive, Painless Ulcer with classic deeply Undermined Edges and necrotic subcutaneous fat slough without systemic fever.",
    optionRationales: {
      A: "Correct. A painless ulcer with deeply undermined edges in a wetland region is characteristic of Buruli Ulcer.",
      B: "Staphylococcal abscesses are warm, erythematous, fluctuant, and painful.",
      C: "Herpes zoster presents as a painful dermatomal vesicular eruption.",
      D: "Melanoma presents with irregular pigmentation, border asymmetry, and bleeding."
    },
    clinicalPearl: "The mycolactone toxin in Buruli Ulcer destroys sensory nerves, which is why even massive, deep ulcers remain remarkably PAINLESS.",
    tags: ["Buruli-ulcer", "Mycobacterium-ulcerans", "mycolactone", "NTDs", "undermined-edges"]
  },
  {
    id: "PHC-145",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Maternal Health Indicators: Neonatal Mortality Rate",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "How is the Neonatal Mortality Rate (NMR) statistically defined and calculated in vital statistics?",
    options: [
      "The number of deaths of live-born infants occurring during the first 28 completed days of life per 1,000 live births",
      "The number of stillbirths occurring after 28 weeks gestation",
      "The total deaths of children under 10 years of age",
      "The number of pregnant women who die during delivery"
    ],
    correctAnswer: 0,
    rationale: "Neonatal Mortality Rate (NMR) is defined as the number of deaths of live-born infants during the first 28 completed days of life (0–27 days) per 1,000 live births in a given year. The neonatal period represents the most fragile time for infant survival, with leading causes of death being prematurity, intrapartum-related complications (birth asphyxia), and neonatal infections.",
    optionRationales: {
      A: "Correct. Deaths in the first 28 completed days of life per 1,000 live births defines the Neonatal Mortality Rate.",
      B: "Stillbirths after 28 weeks describe the Fetal Death Rate (or Stillbirth Rate).",
      C: "Children under 10 reflect pediatric mortality across older groups.",
      D: "Maternal deaths during delivery measure maternal mortality."
    },
    clinicalPearl: "Neonatal period = First 28 days of life. Over 40% of all under-five deaths occur within these first 28 days.",
    tags: ["NMR", "neonatal-mortality", "indicators", "vital-statistics", "child-survival"]
  },
  {
    id: "PHC-146",
    course: "Primary Health Care (PHC)",
    topic: "PHC Principles & Alma-Ata",
    subtopic: "Selective vs Comprehensive Primary Health Care",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In the historical evolution of primary healthcare, how did 'Selective Primary Health Care' (championed by Walsh and Warren via GOBI) differ philosophically from the 'Comprehensive Primary Health Care' envisioned in the Alma-Ata Declaration?",
    options: [
      "Selective PHC focused on low-cost, specific technical target interventions (e.g., GOBI) to reduce mortality from specific diseases, whereas Comprehensive PHC aimed at broad social equity, community empowerment, and structural development",
      "Selective PHC provided free surgery for all citizens, while Comprehensive PHC provided only clean water",
      "Selective PHC was funded solely by labor unions, while Comprehensive PHC was run by the military",
      "Selective PHC rejected immunizations entirely"
    ],
    correctAnswer: 0,
    rationale: "Following Alma-Ata, critics argued that Comprehensive PHC was too ambitious and costly for developing countries. Walsh and Warren proposed 'Selective Primary Health Care' as an interim, pragmatic package: targeting specific high-mortality childhood diseases through cost-effective technical fixes (GOBI). Critics argued that Selective PHC reverted to top-down vertical medical interventions, abandoning the socio-economic reforms and community empowerment core to Comprehensive PHC.",
    optionRationales: {
      A: "Correct. Selective PHC focused on specific technical fixes (GOBI); Comprehensive PHC addressed broad socioeconomic determinants and empowerment.",
      B: "Neither model focused on free surgery; Comprehensive PHC focused on primary health and social development.",
      C: "Labor unions and military structures do not define the philosophical divide between selective and comprehensive PHC.",
      D: "Selective PHC emphasized immunizations (the 'I' in GOBI) as a core pillar."
    },
    clinicalPearl: "Selective PHC = Targeted technical fixes for specific diseases (GOBI). Comprehensive PHC = Whole-of-society social reform, clean water, and community empowerment.",
    tags: ["selective-PHC", "comprehensive-PHC", "Alma-Ata", "GOBI", "health-policy"]
  },
  {
    id: "PHC-147",
    course: "Primary Health Care (PHC)",
    topic: "Maternal & Child Health in PHC",
    subtopic: "Partograph: The Latent vs Active Phase of Labor",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "On a standard modified WHO partograph, at what degree of cervical dilatation does plotting on the formal labor curve begin (marking the onset of the Active Phase of the first stage of labor)?",
    options: [
      "At 4 centimeters of cervical dilatation",
      "At 1 centimeter of cervical dilatation",
      "Only after full dilatation at 10 centimeters",
      "When the woman first experiences braxton-hicks contractions at 32 weeks"
    ],
    correctAnswer: 0,
    rationale: "The first stage of labor has two phases: Latent Phase (from onset of regular contractions up to 3 cm dilatation, typically slow) and Active Phase. On the modified WHO partograph, plotting begins only when the woman enters the Active Phase at 4 centimeters of cervical dilatation (in the presence of regular uterine contractions). Plotting ceases when full dilatation (10 cm) is reached.",
    optionRationales: {
      A: "Correct. Plotting on the modified partograph begins at 4 cm of dilatation, marking the active phase of labor.",
      B: "1 cm dilatation is early latent phase and is recorded in admission notes, not on the active partograph curve.",
      C: "10 cm is the end of the first stage of labor (full dilatation), signaling delivery.",
      D: "Braxton-Hicks contractions are painless preparatory contractions, not active labor."
    },
    clinicalPearl: "The modified WHO Partograph starts plotting at 4 cm cervical dilatation (onset of the active phase of labor).",
    tags: ["partograph", "active-phase", "cervical-dilatation", "labor-monitoring"]
  },
  {
    id: "PHC-148",
    course: "Primary Health Care (PHC)",
    topic: "Environmental Health & Sanitation",
    subtopic: "Community Waste Composting Mechanics",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "When operating a household or community compost heap to turn organic kitchen waste into agricultural fertilizer, why is turning and aerating the pile every few weeks essential?",
    options: [
      "To supply oxygen to aerobic thermophilic bacteria, accelerating decomposition and generating heat that destroys fly larvae, weed seeds, and pathogens",
      "To attract more breeding rats and flies into the center of the pile",
      "To prevent the compost from producing nitrogen nutrients",
      "To cool the compost down to freezing temperatures"
    ],
    correctAnswer: 0,
    rationale: "Aerobic composting relies on thermophilic aerobic bacteria to decompose organic material. Turning the pile introduces oxygen, preventing smelly anaerobic putrefaction. High aerobic metabolic activity generates internal temperatures of 55°C to 65°C, pasteurizing the compost and killing pathogenic bacteria, parasitic ova (Ascaris), and weed seeds, turning waste into safe humus.",
    optionRationales: {
      A: "Correct. Aeration fuels aerobic bacteria, generating high heat (55–65°C) that kills pathogens and fly larvae.",
      B: "Properly turned, high-temperature compost repels rodents and kills fly larvae.",
      C: "Aerobic composting preserves and stabilizes valuable nitrogen and plant nutrients.",
      D: "Compost heats up through bacterial metabolism; it does not freeze."
    },
    clinicalPearl: "Turning a compost pile adds oxygen. Aerobic bacteria generate enough heat (55–65°C) to kill weed seeds, fly larvae, and enteric pathogens.",
    tags: ["composting", "solid-waste", "environmental-health", "sanitation", "aerobic"]
  },
  {
    id: "PHC-149",
    course: "Primary Health Care (PHC)",
    topic: "Endemic Disease Control in Nigeria",
    subtopic: "Soil-Transmitted Helminths: Hookworm Transmission Route",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "How do humans contract Hookworm infection (Necator americanus and Ancylostoma duodenale), which causes severe iron-deficiency anemia in rural agricultural communities?",
    options: [
      "Infective filariform larvae in fecal-contaminated soil penetrate the bare skin of human feet",
      "Inhaling airborne bacterial spores blown off dry riverbeds",
      "Ingesting undercooked beef containing tapeworm cysts",
      "Drinking unchlorinated tap water in urban housing estates"
    ],
    correctAnswer: 0,
    rationale: "Hookworm eggs are passed in human feces. In warm, moist, shaded soil, eggs hatch into rhabditiform larvae and develop into infective filariform larvae. When people walk barefoot on contaminated soil, the microscopic larvae penetrate intact skin (often causing 'ground itch'), enter the bloodstream, pass through the lungs, are coughed up and swallowed, and attach to the duodenal and jejunal mucosa, where adult worms suck blood, causing chronic microcytic hypochromic anemia.",
    optionRationales: {
      A: "Correct. Filariform larvae penetrate the intact skin of bare feet from contaminated soil.",
      B: "Hookworms are transmitted by larval skin penetration, not airborne spores.",
      C: "Undercooked beef transmits Taenia saginata tapeworms.",
      D: "Hookworm transmission occurs via soil-to-skin contact, not municipal drinking water pipes."
    },
    clinicalPearl: "Prevent hookworm disease through sanitation: Build and use pit latrines to stop soil contamination, and wear protective shoes.",
    tags: ["hookworm", "Necator-americanus", "skin-penetration", "anemia", "soil-transmitted-helminths"]
  },
  {
    id: "PHC-150",
    course: "Primary Health Care (PHC)",
    topic: "Community Diagnosis & Epidemiology",
    subtopic: "Primary Health Care Community Dialogue",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "After analyzing community survey data, the primary health care nursing team schedules a 'Community Dialogue' with village leaders, women's groups, and residents. What is the primary purpose of this meeting?",
    options: [
      "Sharing survey findings back with the community, validating priorities together, and agreeing on a joint community action plan",
      "Publicly scolding the community for having unhygienic compounds",
      "Demanding that community members pay cash fines for every identified open defecation site",
      "Selling imported medications at high commercial prices"
    ],
    correctAnswer: 0,
    rationale: "A Community Dialogue is a democratic feedback and planning assembly. The health team presents analyzed data back to the community in clear, accessible visual formats. Community members discuss the findings, validate whether the data reflects their reality, select and prioritize problems together, and design a community-owned Action Plan, building shared accountability.",
    optionRationales: {
      A: "Correct. Feedback, mutual validation of priorities, and co-designing an action plan are the core purposes of community dialogue.",
      B: "Scolding damages trust, creates resentment, and shuts down collaboration.",
      C: "Health teams are partners in community development, not municipal tax courts.",
      D: "Community dialogues focus on health planning, not commercial drug sales."
    },
    clinicalPearl: "Never keep survey data to yourself. Always report findings back to the community in a Community Dialogue to validate priorities and co-create solutions.",
    tags: ["community-dialogue", "community-diagnosis", "feedback", "participatory-planning", "PHC-principles"]
  }
];



export default primaryHealthCareQuestions;