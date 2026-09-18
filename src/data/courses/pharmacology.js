export const pharmacologyQuestions = [
  {
    id: "pharm_1",
    category: "Pharmacology",
    question: "A client receiving IV unfractionated heparin for pulmonary embolism has an activated partial thromboplastin time (aPTT) of 138 seconds (control: 30 seconds). The nurse notes petechiae across the lower extremities. Which prescription should the nurse prepare to administer immediately?",
    answers: [
      "Protamine sulfate",
      "Phytonadione (Vitamin K1)",
      "Idarucizumab",
      "Aminocaproic acid"
    ],
    correctAnswer: "Protamine sulfate",
    rationale: "The therapeutic target for aPTT during unfractionated heparin therapy is typically 1.5 to 2.5 times the control baseline (approx. 45–75 seconds). An aPTT of 138 seconds indicates severe supratherapeutic anticoagulation and active bleeding risk. Protamine sulfate is the specific cationic antidote that binds negatively charged heparin molecules to form an inactive salt. Phytonadione reverses warfarin; idarucizumab reverses dabigatran."
  },
  {
    id: "pharm_2",
    category: "Pharmacology",
    question: "A nurse is administering IV vancomycin 1.5 g over 60 minutes. Twenty minutes into the infusion, the client develops intense flushing, erythema, and pruritus of the face, neck, and upper torso, accompanied by a blood pressure drop from 120/78 mmHg to 98/60 mmHg. Which action should the nurse take first?",
    answers: [
      "Stop the infusion immediately and evaluate airway patency",
      "Administer intramuscular epinephrine 1:1,000 without delay",
      "Slow the infusion rate and apply warm blankets to the chest",
      "Document the expected physiological reaction and complete the dose"
    ],
    correctAnswer: "Stop the infusion immediately and evaluate airway patency",
    rationale: "The client is experiencing Vancomycin Flushing Syndrome (historically known as Red Man Syndrome), a rate-dependent pseudo-allergic reaction mediated by direct, non-IgE mast cell histamine release. The first priority is to immediately stop the infusion to prevent cardiovascular collapse and evaluate for true anaphylaxis (e.g., stridor, wheezing, angioedema). Epinephrine is reserved for true anaphylaxis; flushing syndrome is treated by stopping/slowing the rate and administering antihistamines."
  },
  {
    id: "pharm_3",
    category: "Pharmacology",
    question: "A client with heart failure taking digoxin 0.25 mg daily and furosemide 40 mg daily reports blurred vision with yellow halos, nausea, and general weakness. The apical heart rate is 46 beats/min. Which serum laboratory value is most critical for the nurse to review?",
    answers: [
      "Serum potassium",
      "Serum sodium",
      "Serum calcium",
      "Serum creatinine"
    ],
    correctAnswer: "Serum potassium",
    rationale: "Hypokalemia dramatically enhances myocardial tissue sensitivity to digoxin by increasing drug binding to myocardial sodium-potassium ATPase pumps, precipitating digitalis toxicity even at normal therapeutic serum levels. Loop diuretics like furosemide promote potassium wasting. Yellow halos (xanthopsia), nausea, and bradycardia (<60 beats/min) are hallmark signs of digoxin toxicity."
  },
  {
    id: "pharm_4",
    category: "Pharmacology",
    question: "A client with acute angle-closure glaucoma is prescribed preoperative medication. Which prescription should the nurse immediately question?",
    answers: [
      "Atropine sulfate ophthalmic drops",
      "Timolol maleate ophthalmic solution",
      "Acetazolamide IV",
      "Mannitol 20% IV infusion"
    ],
    correctAnswer: "Atropine sulfate ophthalmic drops",
    rationale: "Atropine is a potent anticholinergic agent that causes mydriasis (pupillary dilation) and cycloplegia. Mydriasis folds the peripheral iris into the trabecular meshwork, completely occluding the iridocorneal angle, precipitating an acute spike in intraocular pressure (IOP) that can cause irreversible optic nerve ischemia and blindness in angle-closure glaucoma."
  },
  {
    id: "pharm_5",
    category: "Pharmacology",
    question: "A client diagnosed with major depressive disorder is prescribed phenelzine (an MAOI). Which dietary selection demonstrates that the client understands the essential teaching for preventing a hypertensive crisis?",
    answers: [
      "Fresh roasted chicken breast with steamed broccoli and white rice",
      "Aged cheddar cheese cubes with smoked salami and red wine",
      "Soy sauce marinated stir-fry with broad fava beans and pickled herring",
      "Pepperoni pizza with drafts of craft tap beer"
    ],
    correctAnswer: "Fresh roasted chicken breast with steamed broccoli and white rice",
    rationale: "Monoamine oxidase inhibitors (MAOIs) irreversibly inhibit the enzyme responsible for catabolizing dietary tyramine. Accumulation of tyramine triggers massive endogenous release of stored catecholamines (norepinephrine), producing an acute, life-threatening hypertensive crisis with intracranial hemorrhage risk. Aged, fermented, cured, and smoked foods (aged cheese, cured meats, draft beers, soy products) are strictly prohibited."
  },
  {
    id: "pharm_6",
    category: "Pharmacology",
    question: "A client with type 2 diabetes mellitus is scheduled for a cardiac catheterization requiring IV iodinated radiopaque contrast material. The nurse verifies that the client is prescribed metformin. Which clinical instruction is imperative?",
    answers: [
      "Withhold metformin on the morning of the procedure and for at least 48 hours post-procedure until renal function is validated",
      "Double the metformin dose 12 hours prior to contrast to prevent stress-induced hyperglycemia",
      "Administer metformin immediately upon return from the catheterization lab with a full glass of water",
      "Transition the client permanently to regular insulin because contrast renders oral biguanides ineffective"
    ],
    correctAnswer: "Withhold metformin on the morning of the procedure and for at least 48 hours post-procedure until renal function is validated",
    rationale: "Iodinated radiopaque contrast can induce acute contrast-induced nephropathy (CIN). If renal clearance drops acutely while metformin is in circulation, the biguanide accumulates, causing profound cellular inhibition of mitochondrial oxidative phosphorylation and potentially fatal lactic acidosis. Metformin must be held the day of the procedure and resumed only 48 hours later once serum creatinine has normalized."
  },
  {
    id: "pharm_7",
    category: "Pharmacology",
    question: "A nurse is administering a continuous infusion of regular insulin to a client with severe diabetic ketoacidosis (DKA). Which clinical milestone must be achieved before discontinuing the intravenous insulin infusion?",
    answers: [
      "The anion gap and serum bicarbonate have normalized and subcutaneous insulin is administered 1 to 2 hours prior",
      "The capillary blood glucose level drops below 200 mg/dL on two consecutive hourly checks",
      "The client's urine dipstick is completely negative for glucose",
      "The client reports feeling hungry and tolerates 100 mL of ice chips without nausea"
    ],
    correctAnswer: "The anion gap and serum bicarbonate have normalized and subcutaneous insulin is administered 1 to 2 hours prior",
    rationale: "Resolution of DKA is defined by closed anion gap (<=12 mEq/L), normalized serum bicarbonate (>=18 mEq/L), and venous pH >7.30, not merely blood glucose reduction. Intravenous insulin has an ultra-short half-life (minutes); stopping the drip without an overlapping subcutaneous basal insulin dose causes immediate rebound ketoacidosis."
  },
  {
    id: "pharm_8",
    category: "Pharmacology",
    question: "A client who underwent an orthotopic kidney transplant 6 months ago takes oral cyclosporine daily. The nurse reinforces discharge teaching. Which beverage must the client strictly avoid?",
    answers: [
      "Grapefruit juice",
      "Cranberry juice",
      "Prune juice",
      "Whole cow's milk"
    ],
    correctAnswer: "Grapefruit juice",
    rationale: "Grapefruit juice contains furanocoumarins, which potently and irreversibly inhibit intestinal cytochrome P450 3A4 (CYP3A4) isoenzymes. This blunts first-pass hepatic/intestinal metabolism of cyclosporine, drastically driving up serum drug concentrations to nephrotoxic and neurotoxic levels."
  },
  {
    id: "pharm_9",
    category: "Pharmacology",
    question: "A client receives a prescription for clozapine for treatment-resistant schizophrenia. Which baseline laboratory test is mandatory before dispensing the medication, requiring ongoing weekly monitoring?",
    answers: [
      "Absolute Neutrophil Count (ANC)",
      "Serum troponin I",
      "Aspartate aminotransferase (AST)",
      "Serum amylase and lipase"
    ],
    correctAnswer: "Absolute Neutrophil Count (ANC)",
    rationale: "Clozapine carries a black-box warning for life-threatening severe neutropenia and agranulocytosis (ANC <500/mm3), which leaves the host vulnerable to fatal opportunistic septicemia. Therapy requires strict adherence to a Clozapine REMS registry with mandatory ANC monitoring (baseline, weekly for 6 months, biweekly for 6 months, then monthly)."
  },
  {
    id: "pharm_10",
    category: "Pharmacology",
    question: "A client is prescribed IV potassium chloride 40 mEq in 1,000 mL 0.9% normal saline for severe hypokalemia. What is the maximum recommended infusion rate through a peripheral intravenous line?",
    answers: [
      "10 mEq/hour",
      "25 mEq/hour",
      "40 mEq/hour",
      "5 mEq/hour"
    ],
    correctAnswer: "10 mEq/hour",
    rationale: "The standard maximum safe peripheral infusion rate for potassium chloride is 10 mEq/hour (and a maximum concentration of 40 mEq/L) to prevent severe chemical phlebitis, peripheral vein sclerosis, and fatal hyperkalemic cardiac conduction arrest. Up to 20 mEq/hr may be infused via a central venous catheter with continuous cardiac monitoring."
  },
  {
    id: "pharm_11",
    category: "Pharmacology",
    question: "A client in the post-anesthesia care unit (PACU) has received multiple IV doses of hydromorphone. The client's respiratory rate drops to 6 breaths/min with pinpoint pupils and an SpO2 of 83%. The nurse administers IV naloxone 0.4 mg. Which subsequent nursing action is essential?",
    answers: [
      "Continue monitoring respiratory status closely because naloxone's half-life is shorter than hydromorphone's",
      "Discharge the client to the medical-surgical unit once SpO2 exceeds 92% for 5 minutes",
      "Administer an oral opioid antagonist to ensure gastrointestinal absorption",
      "Encourage rapid oral fluid intake to hasten renal excretion of the opioid"
    ],
    correctAnswer: "Continue monitoring respiratory status closely because naloxone's half-life is shorter than hydromorphone's",
    rationale: "Naloxone has a plasma half-life of 30 to 90 minutes, whereas hydromorphone (and many other synthetic opioids) has a therapeutic duration of action of 3 to 5 hours. As naloxone dissociates from mu-opioid receptors, rebound narcosis, hypoventilation, and respiratory arrest can reoccur without warning."
  },
  {
    id: "pharm_12",
    category: "Pharmacology",
    question: "A pregnant client at 32 weeks' gestation presents in active preterm labor. The obstetrician prescribes betamethasone 12 mg IM. What is the primary clinical rationale for administering this drug?",
    answers: [
      "To stimulate fetal pulmonary type II pneumocytes to accelerate surfactant synthesis",
      "To induce rapid uterine smooth muscle relaxation and arrest myometrial contractions",
      "To provide neuroprotection against fetal cerebral palsy and periventricular leukomalacia",
      "To prevent maternal chorioamnionitis and premature rupture of the membranes"
    ],
    correctAnswer: "To stimulate fetal pulmonary type II pneumocytes to accelerate surfactant synthesis",
    rationale: "Antenatal corticosteroids (betamethasone or dexamethasone) stimulate synthesis and release of pulmonary surfactant by fetal alveolar type II pneumocytes, significantly reducing the incidence and severity of neonatal Respiratory Distress Syndrome (RDS), intraventricular hemorrhage, and neonatal mortality between 24 and 34 weeks' gestation."
  },
  {
    id: "pharm_13",
    category: "Pharmacology",
    question: "A nurse is caring for a client with a history of alcohol use disorder who is experiencing acute withdrawal delirium. Which class of medications is the gold standard for preventing withdrawal-related seizures and managing psychomotor agitation?",
    answers: [
      "Benzodiazepines (e.g., lorazepam, diazepam)",
      "First-generation antipsychotics (e.g., haloperidol)",
      "Beta-adrenergic blockers (e.g., propranolol)",
      "Loop diuretics (e.g., furosemide)"
    ],
    correctAnswer: "Benzodiazepines (e.g., lorazepam, diazepam)",
    rationale: "Alcohol withdrawal involves sudden withdrawal of chronic GABA-A stimulation and glutamate-NMDA rebound excitability. Benzodiazepines bind stereospecifically to GABA-A receptors, facilitating chloride influx, hyperpolarizing neuronal membranes, and safely blunting neural hyperactivity to prevent generalized tonic-clonic seizures and delirium tremens."
  },
  {
    id: "pharm_14",
    category: "Pharmacology",
    question: "A client with acute status epilepticus is admitted to the emergency department. After establishing airway and oxygenation, which IV medication should the nurse administer first to terminate seizure activity?",
    answers: [
      "Lorazepam IV",
      "Phenytoin IV",
      "Levetiracetam IV",
      "Phenobarbital IV"
    ],
    correctAnswer: "Lorazepam IV",
    rationale: "Rapid-acting IV benzodiazepines (lorazepam or diazepam) are the first-line emergent agents to terminate status epilepticus due to rapid blood-brain barrier penetration and immediate GABA facilitation. Long-acting antiepileptic agents (e.g., fosphenytoin, levetiracetam) are administered immediately afterward as secondary maintenance infusions."
  },
  {
    id: "pharm_15",
    category: "Pharmacology",
    question: "A client with asthma has been prescribed salmeterol and fluticasone via dry powder inhaler (DPI). Which instruction is critical for the nurse to emphasize regarding long-term therapy?",
    answers: [
      "Salmeterol is a long-acting controller medication and must never be used as a rescue inhaler for acute bronchospasm",
      "Take the salmeterol only when experiencing severe nocturnal wheezing",
      "Discontinue the fluticasone immediately if oral white patches appear on the tongue",
      "Use the fluticasone first to dilate the airways before inhaling the salmeterol"
    ],
    correctAnswer: "Salmeterol is a long-acting controller medication and must never be used as a rescue inhaler for acute bronchospasm",
    rationale: "Salmeterol is a long-acting beta-2 agonist (LABA) with a slow onset of action (15–30 minutes) and extended duration (12 hours). Using it as a rescue bronchodilator during acute bronchospasm provides no immediate relief and risks fatal asthma-related exacerbations. Acute bronchospasm requires short-acting beta-2 agonists (SABAs) like albuterol."
  },
  {
    id: "pharm_16",
    category: "Pharmacology",
    question: "A client taking isoniazid (INH) for active pulmonary tuberculosis reports tingling, numbness, and burning pain in the fingers and toes. Which co-prescription does the nurse anticipate to reverse this neurotoxic effect?",
    answers: [
      "Pyridoxine (Vitamin B6)",
      "Cyanocobalamin (Vitamin B12)",
      "Thiamine (Vitamin B1)",
      "Folic acid (Vitamin B9)"
    ],
    correctAnswer: "Pyridoxine (Vitamin B6)",
    rationale: "Isoniazid competitively inhibits pyridoxal kinase, depleting active pyridoxal phosphate (Vitamin B6), which is essential for neurotransmitter synthesis and myelin sheath integrity. This precipitates peripheral neuropathy. Co-administration of pyridoxine (25–50 mg daily) prevents and reverses INH-induced peripheral neurotoxicity."
  },
  {
    id: "pharm_17",
    category: "Pharmacology",
    question: "A nurse is evaluating a client taking lisinopril who calls the clinic reporting a persistent, dry, hacking nocturnal cough that has lasted for three weeks. What is the pharmacological basis for this symptom?",
    answers: [
      "Accumulation of bradykinin and substance P in the upper pulmonary airways",
      "Hypercalcemic-mediated irritation of laryngeal stretch receptors",
      "Fluid transudation secondary to acute left ventricular decomposition",
      "Direct bacterial colonization of the oropharynx from immunosuppression"
    ],
    correctAnswer: "Accumulation of bradykinin and substance P in the upper pulmonary airways",
    rationale: "Angiotensin-Converting Enzyme (ACE) is identical to kininase II, the enzyme responsible for degrading bradykinin. Inhibiting ACE leads to local tissue accumulation of bradykinin, prostaglandins, and substance P in the bronchial mucosa, stimulating afferent C-fibers and provoking a chronic, dry, intractable cough. Switching to an ARB (which does not inhibit kininase II) resolves the symptom."
  },
  {
    id: "pharm_18",
    category: "Pharmacology",
    question: "A client diagnosed with rheumatoid arthritis is prescribed methotrexate weekly. Which baseline and serial monitoring profile is mandatory for the safe administration of this antimetabolite?",
    answers: [
      "Complete blood count (CBC) and liver function tests (LFTs)",
      "Thyroid stimulating hormone (TSH) and serum ferritin",
      "Serum amylase, lipase, and cardiac troponin",
      "Coagulation profile (PT/INR) and serum magnesium"
    ],
    correctAnswer: "Complete blood count (CBC) and liver function tests (LFTs)",
    rationale: "Methotrexate is a dihydrofolate reductase inhibitor that carries significant black-box warnings for bone marrow suppression (leukopenia, anemia, thrombocytopenia), progressive hepatic fibrosis/cirrhosis, and acute pneumonitis. Regular monitoring of CBC and hepatic transaminases is essential."
  },
  {
    id: "pharm_19",
    category: "Pharmacology",
    question: "A client with bipolar I disorder has a serum lithium level of 2.2 mEq/L (therapeutic range: 0.6–1.2 mEq/L). Which constellation of symptoms should the nurse expect to assess?",
    answers: [
      "Coarse hand tremors, ataxia, slurred speech, and persistent vomiting",
      "Fine resting tremor, mild polyuria, and occasional dry mouth",
      "Severe constipation, generalized pruritus, and urinary retention",
      "Hypertensive crisis, diaphoresis, and pupillary constriction"
    ],
    correctAnswer: "Coarse hand tremors, ataxia, slurred speech, and persistent vomiting",
    rationale: "Lithium levels >2.0 mEq/L reflect moderate to severe toxicity characterized by progressive central nervous system and cerebellar impairment (coarse tremors, motor ataxia, dysarthria, mental confusion) alongside prominent gastrointestinal distress (vomiting, diarrhea). Levels >2.5 mEq/L risk seizures, renal shutdown, and fatal arrhythmias, often requiring hemodialysis."
  },
  {
    id: "pharm_20",
    category: "Pharmacology",
    question: "A nurse is preparing to administer IV adenosine 6 mg rapid bolus for paroxysmal supraventricular tachycardia (PSVT). Which administrative technique is required for clinical efficacy?",
    answers: [
      "Administer via the most proximal IV port as an ultra-rapid bolus over 1 to 2 seconds, followed immediately by a rapid 20 mL normal saline flush",
      "Infuse slowly over 15 minutes through a calibrated microdrip syringe pump",
      "Dilute in 100 mL of 5% dextrose in water and infuse over 30 minutes via a peripheral IV line",
      "Inject intramuscularly into the vastus lateralis to ensure prolonged systemic absorption"
    ],
    correctAnswer: "Administer via the most proximal IV port as an ultra-rapid bolus over 1 to 2 seconds, followed immediately by a rapid 20 mL normal saline flush",
    rationale: "Adenosine has an extremely short biological half-life of less than 10 seconds due to rapid cellular uptake and enzymatic deamination by vascular endothelial erythrocytes. It must be administered through a large bore, proximal IV line (e.g., antecubital fossa) as an ultra-rapid 1–2 second push followed by an immediate 20 mL saline flush and elevation of the extremity."
  },
  {
    id: "pharm_21",
    category: "Pharmacology",
    question: "A client with Parkinson's disease is receiving carbidopa-levodopa. Which mechanism describes why carbidopa is co-formulated with levodopa?",
    answers: [
      "Carbidopa inhibits peripheral dopa-decarboxylase, preventing premature breakdown of levodopa outside the blood-brain barrier",
      "Carbidopa crosses the blood-brain barrier to stimulate post-synaptic D2 dopamine receptors directly",
      "Carbidopa accelerates hepatic CYP450 breakdown of levodopa to prevent dopamine overstimulation",
      "Carbidopa functions as an anticholinergic to block peripheral acetylcholine storage vesicles"
    ],
    correctAnswer: "Carbidopa inhibits peripheral dopa-decarboxylase, preventing premature breakdown of levodopa outside the blood-brain barrier",
    rationale: "Dopamine cannot cross the blood-brain barrier, but its precursor levodopa can. Carbidopa is a peripheral dopa-decarboxylase inhibitor that does not penetrate the blood-brain barrier. It prevents peripheral conversion of levodopa into dopamine, allowing more intact levodopa to reach the brain while minimizing peripheral dopaminergic side effects (nausea, orthostatic hypotension, cardiac arrhythmias)."
  },
  {
    id: "pharm_22",
    category: "Pharmacology",
    question: "A client taking atorvastatin 40 mg daily presents to the clinic complaining of severe generalized muscle aches, profound weakness, and dark, tea-colored urine. Which diagnostic test should the nurse anticipate immediately?",
    answers: [
      "Serum creatine kinase (CK)",
      "Serum amylase and lipase",
      "Total serum bilirubin",
      "Serum uric acid"
    ],
    correctAnswer: "Serum creatine kinase (CK)",
    rationale: "Myalgia, proximal muscle weakness, and dark amber/tea-colored urine (myoglobinuria) point to statin-induced rhabdomyolysis. Skeletal muscle sarcolemma lysis spills myoglobin and creatine kinase into the systemic circulation, risking acute tubular necrosis and obstructive renal failure. An elevated serum CK confirms skeletal muscle necrosis."
  },
  {
    id: "pharm_23",
    category: "Pharmacology",
    question: "A client with Addison's disease is receiving maintenance hydrocortisone therapy. Which patient education statement is most critical regarding physiological stressors (e.g., dental surgery, systemic infection)?",
    answers: [
      "The dosage of hydrocortisone must be doubled or tripled during episodes of acute physiological stress",
      "Discontinue hydrocortisone temporarily during acute infections to support white blood cell activation",
      "Restrict dietary sodium and eliminate fluid intake during periods of fever",
      "Switch to oral fludrocortisone monotherapy if a dental extraction is planned"
    ],
    correctAnswer: "The dosage of hydrocortisone must be doubled or tripled during episodes of acute physiological stress",
    rationale: "Clients with primary adrenal insufficiency cannot mount an endogenous glucocorticoid response to physiological stress. Failure to increase the exogenous corticosteroid dose (the '3x3 rule' for minor illness or stress) can precipitate an acute addisonian crisis: refractory vascular collapse, hypoglycemia, hyperkalemia, and shock."
  },
  {
    id: "pharm_24",
    category: "Pharmacology",
    question: "A hospitalized client is receiving intravenous gentamicin 80 mg every 8 hours. Which paired laboratory and clinical assessments should the nurse prioritize to prevent permanent injury?",
    answers: [
      "Serum creatinine, trough drug levels, and auditory acuity assessments",
      "Serum troponin I, ECG monitoring, and peripheral vascular pulses",
      "Serum amylase, lipase, and abdominal girth checks",
      "Serum calcium, alkaline phosphatase, and bone density scans"
    ],
    correctAnswer: "Serum creatinine, trough drug levels, and auditory acuity assessments",
    rationale: "Aminoglycosides (gentamicin, tobramycin, amikacin) concentrate selectively in the renal proximal tubular cells and the endolymph/perilymph of the inner ear. They carry high risks of nephrotoxicity (elevated creatinine, reduced GFR) and irreversible ototoxicity (vestibular damage, sensorineural hearing loss). Monitoring trough levels prior to the next dose mitigates accumulation."
  },
  {
    id: "pharm_25",
    category: "Pharmacology",
    question: "A nurse is providing discharge instructions to a female client prescribed isotretinoin for severe nodulocystic acne. Which requirement is mandatory under the iPLEDGE risk management program?",
    answers: [
      "Commitment to two negative pregnancy tests prior to starting and use of two concurrent reliable contraceptive methods",
      "Avoidance of all direct dairy products and animal-derived proteins during therapy",
      "Mandatory weekly bone marrow aspiration and liver biopsy",
      "Maintenance of a high-sodium diet to prevent systemic hypotension"
    ],
    correctAnswer: "Commitment to two negative pregnancy tests prior to starting and use of two concurrent reliable contraceptive methods",
    rationale: "Isotretinoin is extremely teratogenic, causing severe craniofacial, cardiac, thymic, and central nervous system congenital anomalies (retinoic acid embryopathy). The FDA-mandated iPLEDGE program requires verified negative pregnancy tests and the documented use of two primary forms of contraception from one month prior to therapy until one month post-treatment."
  },
  {
    id: "pharm_26",
    category: "Pharmacology",
    question: "A client who had an acute myocardial infarction is receiving an IV nitroglycerin infusion. The client complains of a throbbing, pounding bifrontal headache. The client's blood pressure is 114/72 mmHg and heart rate is 76 beats/min. What is the nurse's best action?",
    answers: [
      "Administer acetaminophen as prescribed; reassure the client that headache is a common, expected side effect",
      "Stop the nitroglycerin infusion immediately and prepare to administer protamine sulfate",
      "Increase the nitroglycerin titration rate to induce cerebral vasoconstriction",
      "Notify the cardiac catheterization team for emergent intracranial hemorrhage evaluation"
    ],
    correctAnswer: "Administer acetaminophen as prescribed; reassure the client that headache is a common, expected side effect",
    rationale: "Nitroglycerin acts via vascular smooth muscle relaxation mediated by nitric oxide and cyclic GMP, producing systemic venodilation and dilation of meningeal and cerebral arteries. Headache is a common, expected pharmacological side effect. With adequate perfusion pressures (BP 114/72 mmHg), the infusion should be continued and the headache managed with non-opioid analgesics."
  },
  {
    id: "pharm_27",
    category: "Pharmacology",
    question: "A nurse administers sublingual nitroglycerin to a client experiencing acute stable angina. The client's chest pain is not relieved after 5 minutes. What is the nurse's next action?",
    answers: [
      "Call emergency medical services (or activate emergency protocols) and administer a second sublingual tablet",
      "Instruct the client to chew two enteric-coated aspirin and lie supine for 30 minutes",
      "Administer two additional sublingual tablets simultaneously to achieve maximal coronary vasodilation",
      "Withhold further medication and instruct the client to perform the Valsalva maneuver"
    ],
    correctAnswer: "Call emergency medical services (or activate emergency protocols) and administer a second sublingual tablet",
    rationale: "Current emergency cardiac guidelines state that if chest discomfort is unimproved or worsening 5 minutes after taking 1 dose of sublingual nitroglycerin, the client or nurse must immediately contact EMS/activate rapid response and administer a second tablet while awaiting emergency personnel."
  },
  {
    id: "pharm_28",
    category: "Pharmacology",
    question: "A client taking spironolactone 50 mg daily for portal hypertension and ascites should be cautioned against which dietary substitute?",
    answers: [
      "Commercial potassium-based salt substitutes",
      "Pure organic cane sugar substitutes",
      "Gluten-free almond flour alternatives",
      "Fortified calcium carbonate mineral waters"
    ],
    correctAnswer: "Commercial potassium-based salt substitutes",
    rationale: "Spironolactone is a competitive aldosterone receptor antagonist acting in the distal renal tubules and collecting ducts, causing sodium/water excretion while conserving potassium and hydrogen ions. Commercial salt substitutes replace sodium chloride with potassium chloride. Combining potassium-sparing diuretics with potassium supplements or salt substitutes can precipitate life-threatening hyperkalemia."
  },
  {
    id: "pharm_29",
    category: "Pharmacology",
    question: "A client diagnosed with gout is initiated on allopurinol therapy. Which clinical instruction is vital for the nurse to emphasize to prevent nephrolithiasis and drug toxicity?",
    answers: [
      "Drink at least 2,000 to 3,000 mL of fluid daily to maintain adequate urinary output",
      "Limit daily fluid intake to 1,000 mL to prevent systemic dilution of the drug",
      "Consume large quantities of red meats and liver to stabilize purine metabolism",
      "Avoid all citrus fruits to maintain an acidic urinary pH"
    ],
    correctAnswer: "Drink at least 2,000 to 3,000 mL of fluid daily to maintain adequate urinary output",
    rationale: "Allopurinol inhibits xanthine oxidase, lowering systemic uric acid production. Uric acid crystals and oxypurinol can precipitate in the renal collecting tubules, leading to crystalluria, renal calculi, and acute obstructive nephropathy. A generous fluid intake (2–3 L/day) maintaining a dilute urinary output (>2 L/day) minimizes intrarenal crystal precipitation."
  },
  {
    id: "pharm_30",
    category: "Pharmacology",
    question: "A client receives a new prescription for transdermal fentanyl 50 mcg/hr patch for chronic cancer pain. Which statement indicates the client understands safe patch management?",
    answers: [
      "I will avoid placing a heating pad or electric blanket directly over the patch site",
      "I will cut the patch in half if my pain decreases to save medication",
      "I will apply the patch directly to my lower leg where my neuropathic pain is most severe",
      "I will dispose of the used patch by throwing it directly into the kitchen trash can"
    ],
    correctAnswer: "I will avoid placing a heating pad or electric blanket directly over the patch site",
    rationale: "External direct heat application (heating pads, electric blankets, hot tubs) increases local cutaneous blood flow and substantially accelerates drug release from transdermal reservoir systems, causing an abrupt systemic fentanyl surge that can lead to fatal respiratory depression. Patches should never be cut (damages rate-limiting membranes) and must be folded adhesive-side together and flushed or disposed of per institutional/REMS drug-take-back guidelines."
  },
  {
    id: "pharm_31",
    category: "Pharmacology",
    question: "A nurse is preparing to administer intramuscular iron dextran to a client with severe microcytic hypochromic anemia. Which technique is essential to prevent tissue staining and local irritation?",
    answers: [
      "Administer via the Z-track technique deeply into the gluteal muscle using a 2- to 3-inch needle",
      "Administer subcutaneously into the anterior abdominal wall using a 25-gauge needle",
      "Vigorously massage the site for 3 minutes immediately following injection to speed absorption",
      "Inject into the deltoid muscle using a 45-degree angle of insertion"
    ],
    correctAnswer: "Administer via the Z-track technique deeply into the gluteal muscle using a 2- to 3-inch needle",
    rationale: "Intramuscular iron solutions cause permanent, disfiguring brown discoloration of the skin and subcutaneous tissue necrosis if drug leaks along the needle track. Using the Z-track method (pulling overlying skin and subcutaneous tissue laterally prior to injection, injecting deeply into the dorsogluteal or ventrogluteal muscle, and releasing after withdrawal) seals the medication track."
  },
  {
    id: "pharm_32",
    category: "Pharmacology",
    question: "A client receiving IV magnesium sulfate for the prevention of eclamptic seizures exhibits a respiratory rate of 9 breaths/min, absent deep tendon reflexes (0/4+), and a urine output of 15 mL/hr. Which action is the nurse's immediate priority?",
    answers: [
      "Discontinue the magnesium sulfate infusion and prepare to administer IV calcium gluconate",
      "Increase the primary maintenance fluid rate to flush the kidneys",
      "Place the client in high Fowler's position and administer an oral diuretic",
      "Reassess the patellar reflexes and respiratory rate in 30 minutes"
    ],
    correctAnswer: "Discontinue the magnesium sulfate infusion and prepare to administer IV calcium gluconate",
    rationale: "Magnesium ions block neuromuscular transmission by inhibiting pre-junctional acetylcholine release. Toxicity progresses from loss of deep tendon reflexes (8–10 mEq/L) to respiratory depression (<12 breaths/min; 10–12 mEq/L) and fatal cardiac arrest (>15 mEq/L). The infusion must be discontinued immediately and 1 g of calcium gluconate IV (10 mL of 10% solution over 3–5 minutes) administered to competitively reverse neuromuscular blockade."
  },
  {
    id: "pharm_33",
    category: "Pharmacology",
    question: "A client who has been taking oral prednisone 40 mg daily for 6 months abruptly stops taking the medication due to gastrointestinal upset. Within 48 hours, the client presents with profound fatigue, dizziness, nausea, blood pressure of 74/42 mmHg, and serum sodium of 124 mEq/L. What acute complication is the client experiencing?",
    answers: [
      "Acute adrenal (addisonian) crisis secondary to hypothalamic-pituitary-adrenal (HPA) axis suppression",
      "Acute thyroid storm triggered by hyperthyroid rebound",
      "Diabetic hyperosmolar hyperglycemic state (HHS)",
      "Severe rebound Cushing's disease with hypercortisolemia"
    ],
    correctAnswer: "Acute adrenal (addisonian) crisis secondary to hypothalamic-pituitary-adrenal (HPA) axis suppression",
    rationale: "Exogenous systemic corticosteroid administration lasting longer than 2–3 weeks suppresses endogenous hypothalamic CRH and pituitary ACTH secretion, resulting in bilateral adrenal cortical atrophy. Abrupt cessation prevents the atrophic adrenal glands from producing cortisol, precipitating acute vascular collapse, hypovolemic shock, hyponatremia, and hyperkalemia."
  },
  {
    id: "pharm_34",
    category: "Pharmacology",
    question: "A client with chronic heart failure has been prescribed enalapril. The nurse checks laboratory results prior to administration and notes: serum potassium 5.7 mEq/L, serum creatinine 1.4 mg/dL, and BUN 22 mg/dL. Which action should the nurse take?",
    answers: [
      "Withhold the enalapril dose and notify the healthcare provider of the hyperkalemia",
      "Administer the dose with a banana to balance the sodium-potassium ATPase exchange",
      "Administer the enalapril along with an extra dose of oral potassium chloride",
      "Crush the tablet and dissolve it in orange juice to facilitate faster absorption"
    ],
    correctAnswer: "Withhold the enalapril dose and notify the healthcare provider of the hyperkalemia",
    rationale: "ACE inhibitors block angiotensin II formation, thereby eliminating angiotensin II-mediated aldosterone secretion from the adrenal cortex. Without aldosterone, the distal nephron retains potassium. Baseline hyperkalemia (>5.0 mEq/L) requires withholding the drug to prevent lethal ventricular dysrhythmias and notifying the prescriber."
  },
  {
    id: "pharm_35",
    category: "Pharmacology",
    question: "A client with deep vein thrombosis is receiving a continuous intravenous heparin infusion. The nurse notes the client's platelet count has dropped from 310,000/mm3 at baseline to 110,000/mm3 on day 5 of therapy. Which complication must the nurse suspect?",
    answers: [
      "Heparin-Induced Thrombocytopenia (HIT) Type II",
      "Immune Thrombocytopenic Purpura (ITP)",
      "Disseminated Intravascular Coagulation (DIC)",
      "Hemolytic Uremic Syndrome (HUS)"
    ],
    correctAnswer: "Heparin-Induced Thrombocytopenia (HIT) Type II",
    rationale: "A drop in platelet count of >50% from baseline 5 to 10 days after starting heparin is the hallmark of Heparin-Induced Thrombocytopenia (HIT) Type II. IgG antibodies bind to platelet factor 4 (PF4)-heparin complexes, activating platelets and triggering paradoxical arterial and venous thromboembolism (white clot syndrome). All heparin products (including flushes) must be stopped immediately, and a non-heparin alternative (e.g., argatroban, fondaparinux) initiated."
  },
  {
    id: "pharm_36",
    category: "Pharmacology",
    question: "A client taking sertraline (an SSRI) for depression is admitted with tremors, hyperreflexia, clonus, diaphoresis, shivering, and a temperature of 39.2°C (102.6°F). The family states the client started taking over-the-counter St. John's Wort 3 days ago. Which clinical syndrome should the nurse recognize?",
    answers: [
      "Serotonin syndrome",
      "Neuroleptic malignant syndrome",
      "Malignant hyperthermia",
      "Anticholinergic toxidrome"
    ],
    correctAnswer: "Serotonin syndrome",
    rationale: "Concurrent administration of two or more serotonergic agents (e.g., SSRIs and St. John's Wort, tramadol, or MAOIs) causes excess central and peripheral 5-HT receptor activation. Serotonin syndrome is distinguished by neuromuscular hyperactivity (clonus, hyperreflexia, tremors), autonomic instability (hyperthermia, tachycardia, diaphoresis), and altered mental status."
  },
  {
    id: "pharm_37",
    category: "Pharmacology",
    question: "A client receiving haloperidol for acute psychosis suddenly develops severe muscle rigidity, a temperature of 40.0°C (104.0°F), autonomic lability, and an elevated creatine kinase (CK) level of 18,000 U/L. Which medication should the nurse anticipate administering to relax peripheral skeletal muscle?",
    answers: [
      "Dantrolene IV",
      "Naloxone IV",
      "Flumazenil IV",
      "Diphenhydramine IV"
    ],
    correctAnswer: "Dantrolene IV",
    rationale: "Neuroleptic Malignant Syndrome (NMS) is an idiosyncratic, life-threatening reaction to dopamine antagonists characterized by 'lead-pipe' muscle rigidity, extreme hyperpyrexia, altered consciousness, and autonomic collapse. Dantrolene, a direct-acting skeletal muscle relaxant that blocks ryanodine receptor calcium release from the sarcoplasmic reticulum, is indicated alongside dopamine agonists (bromocriptine)."
  },
  {
    id: "pharm_38",
    category: "Pharmacology",
    question: "A client with a history of myasthenia gravis is admitted with severe generalized muscle weakness and respiratory fatigue. The physician performs an edrophonium (Tensilon) test. Two minutes following injection, the client's muscle strength improves dramatically and ptosis resolves. What does this finding indicate?",
    answers: [
      "The client is experiencing a myasthenic crisis and requires an increase in anticholinesterase medication",
      "The client is experiencing a cholinergic crisis and requires immediate atropine sulfate administration",
      "The client has developed irreversible resistance to acetylcholinesterase therapy",
      "The client's symptoms are psychogenic in origin"
    ],
    correctAnswer: "The client is experiencing a myasthenic crisis and requires an increase in anticholinesterase medication",
    rationale: "Edrophonium is an ultra-short-acting acetylcholinesterase inhibitor that temporarily increases acetylcholine bioavailability at the neuromuscular junction. Improved muscle strength indicates under-medication (myasthenic crisis). Worsening muscle weakness, flaccidity, and severe fasciculations indicate cholinergic crisis (over-medication), which requires atropine."
  },
  {
    id: "pharm_39",
    category: "Pharmacology",
    question: "A client receiving IV nitroprusside for an acute hypertensive crisis has been receiving the infusion at 8 mcg/kg/min for 72 hours. The client develops metabolic acidosis, confusion, hyperreflexia, and a distinctive bitter almond breath odor. What toxicity should the nurse suspect?",
    answers: [
      "Cyanide and thiocyanate toxicity",
      "Malignant hyperthermia",
      "Acetaminophen hepatotoxicity",
      "Organophosphate poisoning"
    ],
    correctAnswer: "Cyanide and thiocyanate toxicity",
    rationale: "Sodium nitroprusside contains five cyanide groups per molecule. High doses (>2 mcg/kg/min) or prolonged infusions (>48–72 hours), especially with underlying renal/hepatic impairment, exhaust endogenous sulfur donor mechanisms, causing free cyanide accumulation. Cyanide arrests mitochondrial cytochrome oxidase, causing cellular histotoxic hypoxia, profound lactic acidosis, mental status changes, and bitter almond breath. Treatment includes sodium thiosulfate or hydroxocobalamin."
  },
  {
    id: "pharm_40",
    category: "Pharmacology",
    question: "A client with human immunodeficiency virus (HIV) is prescribed efavirenz, tenofovir, and emtricitabine. What clinical instruction regarding efavirenz administration should the nurse emphasize to minimize central nervous system side effects?",
    answers: [
      "Take the medication at bedtime on an empty stomach",
      "Take the medication with a high-fat meal early in the morning",
      "Dissolve the tablet in hot coffee to increase metabolic clearance",
      "Take the tablet immediately after completing vigorous cardiovascular exercise"
    ],
    correctAnswer: "Take the medication at bedtime on an empty stomach",
    rationale: "Efavirenz commonly produces neuropsychiatric adverse effects (dizziness, vivid dreams, nightmares, insomnia, hallucinations). Taking it at bedtime on an empty stomach helps the patient sleep through peak CNS levels; taking it with high-fat meals increases serum drug absorption by up to 50%, significantly worsening neurotoxicity."
  },
  {
    id: "pharm_41",
    category: "Pharmacology",
    question: "A client with diabetes insipidus is prescribed desmopressin (DDAVP) nasal spray. Which assessment finding demonstrates that the medication is producing its intended therapeutic effect?",
    answers: [
      "Decreased 24-hour urine output with increased urine specific gravity",
      "Increased serum sodium concentration above 150 mEq/L",
      "Urine specific gravity of 1.002 on three consecutive voidings",
      "Blood glucose stabilization between 90 and 110 mg/dL"
    ],
    correctAnswer: "Decreased 24-hour urine output with increased urine specific gravity",
    rationale: "Desmopressin is a synthetic analog of antidiuretic hormone (vasopressin) that acts selectively on renal V2 receptors in the collecting ducts, increasing aquaporin-2 water reabsorption. In diabetes insipidus, therapeutic efficacy is manifested by decreased volume of dilute urine, normalized serum osmolality/sodium, and increased urine specific gravity (>1.010)."
  },
  {
    id: "pharm_42",
    category: "Pharmacology",
    question: "A client taking rifampin for active tuberculosis reports that their urine, sweat, saliva, and tears have turned an orange-red color. What is the nurse's most appropriate response?",
    answers: [
      "Reassure the client that orange-red discoloration of body secretions is a harmless, expected side effect of rifampin",
      "Instruct the client to immediately go to the emergency department for liver failure evaluation",
      "Hold the next scheduled dose and obtain a stat coagulation panel",
      "Administer an extra dose of pyridoxine to clear the reddish metabolites"
    ],
    correctAnswer: "Reassure the client that orange-red discoloration of body secretions is a harmless, expected side effect of rifampin",
    rationale: "Rifampin and its metabolites are reddish-orange compounds excreted through the hepatobiliary and renal systems into bodily fluids (urine, sweat, tears, saliva, sputum). It is benign and self-limiting, though clients should be advised to avoid soft contact lenses, as they may become permanently stained."
  },
  {
    id: "pharm_43",
    category: "Pharmacology",
    question: "A client diagnosed with open-angle glaucoma has been prescribed latanoprost ophthalmic drops. Which cosmetic side effect should the nurse include during client education?",
    answers: [
      "Permanent darkening of the iris pigmentation and increased eyelash length and thickness",
      "Complete depigmentation of the periorbital skin and loss of eyelashes",
      "Persistent subconjunctival hemorrhages and permanent corneal clouding",
      "Bilateral pupil dilation that causes severe daytime photophobia"
    ],
    correctAnswer: "Permanent darkening of the iris pigmentation and increased eyelash length and thickness",
    rationale: "Latanoprost is a prostaglandin F2-alpha analog that increases uveoscleral outflow of aqueous humor. It stimulates melanogenesis in iris stromal melanocytes, leading to progressive, permanent brown hyperpigmentation of the iris (heterochromia), as well as increased growth, thickness, and hyperpigmentation of the eyelashes."
  },
  {
    id: "pharm_44",
    category: "Pharmacology",
    question: "A client with septic shock is receiving an intravenous norepinephrine infusion via a peripheral IV line in the forearm. The nurse observes blanching, coldness, and swelling at the insertion site, confirming extravasation. Which antidote should the nurse anticipate injecting locally into the extravasation site?",
    answers: [
      "Phentolamine mesylate",
      "Atropine sulfate",
      "Protamine sulfate",
      "Flumazenil"
    ],
    correctAnswer: "Phentolamine mesylate",
    rationale: "Norepinephrine is a potent alpha-1 adrenergic agonist. Extravasation causes intense local peripheral vasoconstriction, leading to ischemic necrosis and gangrene. Phentolamine is a competitive alpha-adrenergic antagonist; local subcutaneous infiltration (5–10 mg diluted in normal saline) within 12 hours causes immediate vasodilation, reversing local ischemia and salvaging the tissue."
  },
  {
    id: "pharm_45",
    category: "Pharmacology",
    question: "A client receiving IV acyclovir for herpes simplex encephalitis is at high risk for acute crystalline nephropathy. Which nursing intervention is essential to prevent intrarenal precipitation?",
    answers: [
      "Ensure the client is adequately hydrated with IV fluids and infuse the drug slowly over at least 1 hour",
      "Administer the medication via rapid IV bolus to clear the renal pelvis quickly",
      "Acidify the client's urine by providing cranberry juice and ascorbic acid",
      "Restrict daily fluid intake to less than 1,000 mL to prevent bladder distension"
    ],
    correctAnswer: "Ensure the client is adequately hydrated with IV fluids and infuse the drug slowly over at least 1 hour",
    rationale: "Acyclovir is excreted unchanged in the urine. When high IV doses exceed drug solubility in the tubular lumen, it precipitates into acyclovir crystals in the renal collecting ducts, causing obstructive nephropathy and acute kidney injury. Pre-infusion hydration and slow, constant infusion over 1 hour prevent crystal precipitation."
  },
  {
    id: "pharm_46",
    category: "Pharmacology",
    question: "A client with chronic kidney disease (CKD) on hemodialysis is prescribed sevelamer hydrochloride with meals. How should the nurse explain the therapeutic action of this medication?",
    answers: [
      "It binds dietary phosphate in the gastrointestinal tract, preventing its absorption and lowering serum phosphorus",
      "It stimulates parathyroid calcium-sensing receptors to suppress parathyroid hormone",
      "It enhances renal tubular excretion of potassium ions into the dialysate",
      "It stimulates bone marrow erythropoiesis to treat chronic renal anemia"
    ],
    correctAnswer: "It binds dietary phosphate in the gastrointestinal tract, preventing its absorption and lowering serum phosphorus",
    rationale: "Failing kidneys cannot eliminate phosphate, producing hyperphosphatemia and secondary hyperparathyroidism. Sevelamer is a non-absorbed, non-calcium phosphate-binding polymer that cross-links dietary phosphate in the intestinal lumen to excrete it in feces. It must be taken with meals to bind ingested dietary phosphate."
  },
  {
    id: "pharm_47",
    category: "Pharmacology",
    question: "A client taking carbamazepine for trigeminal neuralgia reports a persistent sore throat, fever, and oral mucosal ulcerations. What is the nurse's priority action?",
    answers: [
      "Withhold the dose and obtain a complete blood count (CBC) to evaluate for agranulocytosis",
      "Provide warm saline mouth rinses and continue scheduled dosing",
      "Reassure the client that oral stomatitis is an expected, harmless side effect",
      "Switch the medication to oral high-dose acetylsalicylic acid"
    ],
    correctAnswer: "Withhold the dose and obtain a complete blood count (CBC) to evaluate for agranulocytosis",
    rationale: "Carbamazepine carries black-box warnings for aplastic anemia and agranulocytosis. New-onset fever, pharyngitis, or stomatitis can signal life-threatening bone marrow failure and severe leukopenia, requiring immediate drug cessation and hematologic evaluation."
  },
  {
    id: "pharm_48",
    category: "Pharmacology",
    question: "A client receiving total parenteral nutrition (TPN) via a central venous catheter has an infusion bag that finishes before the next bag arrives from the pharmacy. Which intravenous solution should the nurse infuse temporarily to prevent rebound hypoglycemia?",
    answers: [
      "10% Dextrose in water (D10W)",
      "0.9% Normal saline (0.9% NaCl)",
      "Lactated Ringer's solution (LR)",
      "5% Dextrose in 0.45% Normal saline (D5 1/2 NS)"
    ],
    correctAnswer: "10% Dextrose in water (D10W)",
    rationale: "TPN contains high concentrations of dextrose (typically 20–25%), stimulating constant pancreatic beta-cell hyperinsulinemia. Abrupt cessation of the hypertonic dextrose infusion leaves high levels of circulating insulin unopposed, precipitating profound rebound hypoglycemia. Infusing 10% dextrose in water at the same rate sustains blood glucose until the next TPN bag is hung."
  },
  {
    id: "pharm_49",
    category: "Pharmacology",
    question: "A client with advanced breast cancer receives an IV infusion of paclitaxel. Prior to the infusion, the nurse administers dexamethasone, diphenhydramine, and cimetidine. What is the clinical purpose of this premedication regimen?",
    answers: [
      "To prevent severe hypersensitivity and anaphylactoid reactions associated with the drug vehicle (Cremophor EL)",
      "To stimulate hepatic cytochrome enzymes to maximize tumor destruction",
      "To prevent systemic hypoglycemia and peripheral neuropathy",
      "To accelerate renal tubular clearance and prevent hemorrhagic cystitis"
    ],
    correctAnswer: "To prevent severe hypersensitivity and anaphylactoid reactions associated with the drug vehicle (Cremophor EL)",
    rationale: "Taxane antineoplastic agents like paclitaxel are formulated in vehicles (e.g., polyoxyethylated castor oil / Cremophor EL) that trigger massive, non-IgE complement activation and histamine release, producing life-threatening bronchospasm, flushing, and hypotension. Pre-treating with corticosteroids, H1-antagonists, and H2-antagonists prevents this hypersensitivity reaction."
  },
  {
    id: "pharm_50",
    category: "Pharmacology",
    question: "A client diagnosed with atrial fibrillation is prescribed dabigatran 150 mg PO twice daily. What critical instruction regarding pill storage and administration must the nurse reinforce?",
    answers: [
      "Keep the capsules in their original bottle or blister pack and swallow them whole without crushing or chewing",
      "Open the capsules and sprinkle the pellets onto applesauce if swallowing is difficult",
      "Transfer the capsules to a weekly pill organizer box with other morning medications",
      "Dissolve the capsule in a glass of warm milk to minimize gastrointestinal irritation"
    ],
    correctAnswer: "Keep the capsules in their original bottle or blister pack and swallow them whole without crushing or chewing",
    rationale: "Dabigatran is a direct thrombin inhibitor packaged with a tartaric acid core that is highly hygroscopic and susceptible to moisture degradation. Capsules must remain in their original desiccant-containing manufacturer bottle or blister pack. Chewing, opening, or crushing the capsules increases systemic bioavailability by up to 75%, greatly elevating the risk of major hemorrhage."
  }
];