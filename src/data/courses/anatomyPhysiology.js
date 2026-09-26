// src/data/courses/anatomyPhysiology.js
// Complete 150-Question Ross & Wilson Anatomy and Physiology Examination Bank

export const anatomyPhysiologyQuestions = [
  {
    id: "AP-001",
    course: "Anatomy & Physiology",
    topic: "Cells, Tissues and Organization of the Body",
    subtopic: "Epithelial Tissue Classification (Ross & Wilson)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "According to Ross & Wilson's structural classification of tissues, which specific variety of epithelium lines organs subjected to extreme mechanical stretching and distension, such as the urinary bladder and ureters?",
    options: [
      "Transitional epithelium (Urothelium)",
      "Simple squamous epithelium",
      "Pseudostratified ciliated columnar epithelium",
      "Stratified keratinized squamous epithelium"
    ],
    correctAnswer: 0,
    rationale: "Transitional epithelium (urothelium) consists of several layers of pear-shaped, pliant cells that slide over one another and flatten when the organ is distended with urine, preventing tissue rupture while maintaining an impermeable osmotic barrier.",
    optionRationales: {
      A: "Correct. Transitional epithelium is unique to the urinary tract (calyces, ureters, bladder, proximal urethra) and accommodates volume fluctuations.",
      B: "Simple squamous lines thin diffusion barriers such as pulmonary alveoli and vascular endothelium.",
      C: "Pseudostratified ciliated columnar epithelium lines the conducting airways of the respiratory tract.",
      D: "Stratified keratinized epithelium forms the dry, protective epidermal surface of the skin."
    },
    clinicalPearl: "Transitional epithelium's umbrella-shaped superficial cells flatten out during bladder distension without tearing the epithelial barrier.",
    tags: ["Ross-Wilson", "histology", "epithelium", "urinary-tract"]
  },
  {
    id: "AP-002",
    course: "Anatomy & Physiology",
    topic: "Blood and Internal Environment",
    subtopic: "Erythrocyte Life Cycle & Splenic Clearance",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the normal physiological lifespan of a mature non-nucleated erythrocyte circulating in human peripheral blood before it is removed by reticuloendothelial macrophages?",
    options: [
      "Approximately 120 days",
      "Approximately 10 to 14 days",
      "Approximately 24 hours",
      "365 days (1 year)"
    ],
    correctAnswer: 0,
    rationale: "Ross & Wilson details that red blood cells lose their nuclei during erythropoiesis and lack organelles. They circulate for roughly 120 days, after which aging rigid membranes fragment while passing through the narrow sinusoidal cords of the spleen and liver.",
    optionRationales: {
      A: "Correct. Mature red blood cells circulate for an average of 120 days before splenic phagocytosis.",
      B: "10 to 14 days approximates the circulating lifespan of blood platelets (thrombocytes).",
      C: "24 hours is the circulating half-life of granulocytic neutrophils.",
      D: "Erythrocytes cannot survive for a year because they lack nuclei and protein-repair machinery."
    },
    clinicalPearl: "Because red cells live 120 days, Glycated Hemoglobin (HbA1c) reflects average glycemic control over the preceding 3 months.",
    tags: ["Ross-Wilson", "hematology", "erythrocyte", "lifespan"]
  },
  {
    id: "AP-003",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Arterial Supply to the Brain (Internal Carotid System)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "After ascending the neck, through which bony cranial opening does the Internal Carotid Artery enter the middle cranial fossa to supply the cerebral hemisphere?",
    options: [
      "Carotid Canal in the petrous temporal bone",
      "Foramen Magnum in the occipital bone",
      "Jugular Foramen between temporal and occipital bones",
      "Stylomastoid Foramen"
    ],
    correctAnswer: 0,
    rationale: "The internal carotid artery enters the base of the skull via the Carotid Canal located in the petrous portion of the temporal bone, traverses the cavernous sinus, and branches into the anterior and middle cerebral arteries.",
    optionRationales: {
      A: "Correct. The Carotid Canal in the petrous temporal bone conveys the internal carotid artery into the cranium.",
      B: "The Foramen Magnum transmits the medulla oblongata, vertebral arteries, and spinal accessory nerves.",
      C: "The Jugular Foramen transmits the internal jugular vein and CN IX, X, and XI.",
      D: "The Stylomastoid Foramen transmits the motor branch of the Facial Nerve (CN VII)."
    },
    clinicalPearl: "The internal carotid artery enters via the carotid canal, while the vertebral arteries enter via the foramen magnum; together they form the Circle of Willis.",
    tags: ["Ross-Wilson", "vascular", "carotid-canal", "neuroanatomy"]
  },
  {
    id: "AP-004",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Anatomy of the Trachea & Cartilaginous Rings",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Why are the 16 to 20 hyaline cartilage rings of the human trachea C-shaped (incomplete posteriorly) rather than complete closed circular rings?",
    options: [
      "To allow the adjacent, posteriorly situated esophagus to expand forward during the passage of food boluses",
      "To permit maximum backward bending of the cervical spine",
      "To reduce the structural weight of the anterior mediastinum",
      "To allow pulmonary veins to cross through the posterior tracheal wall"
    ],
    correctAnswer: 0,
    rationale: "The tracheal rings are incomplete C-shaped hyaline bands completed posteriorly by the fibromuscular Trachealis muscle. This arrangement prevents tracheal collapse during negative-pressure inspiration while allowing the esophagus directly behind it to bulge forward when swallowing a bolus.",
    optionRationales: {
      A: "Correct. The posterior deficiency spanned by the trachealis muscle accommodates esophageal expansion during swallowing.",
      B: "Cervical spine mobility is governed by intervertebral joints, not tracheal rings.",
      C: "Cartilaginous reduction does not exist for thoracic weight lightening.",
      D: "Pulmonary veins enter the left atrium inferiorly and do not pierce the trachea."
    },
    clinicalPearl: "The Trachealis muscle completes the posterior gap of the C-rings; contraction during the cough reflex narrows tracheal lumen, accelerating air velocity.",
    tags: ["Ross-Wilson", "respiratory", "trachea", "esophagus"]
  },
  {
    id: "AP-005",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Small Intestinal Mucosa & Absorptive Surface Area",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Ross & Wilson outlines three structural adaptations that amplify the luminal absorptive surface area of the small intestine over 600-fold. What are these three anatomical specializations?",
    options: [
      "Plicae circulares (valvulae conniventes), Villi, and Microvilli (brush border)",
      "Rugae, Haustra, and Taeniae coli",
      "Peyer's patches, Crypts of Lieberkuhn, and Brunner's glands",
      "Sphincter of Oddi, Ampulla of Vater, and Gastric pits"
    ],
    correctAnswer: 0,
    rationale: "The small intestine increases its surface area to ~250 square meters via three hierarchal folds: 1) Plicae circulares (circular mucosal folds that increase area 3-fold), 2) Villi (finger-like mucosal projections that increase area 10-fold), and 3) Microvilli (apical enterocyte brush-border folds that increase area 20-fold).",
    optionRationales: {
      A: "Correct. Plicae circulares, villi, and microvilli create a total absorptive surface area roughly the size of a tennis court.",
      B: "Rugae are temporary folds in the stomach; haustra and taeniae coli are features of the large intestine.",
      C: "These are secretory glands and lymphoid aggregates, not the primary structural surface expanders.",
      D: "These are ductal entrances and gastric secretory depressions."
    },
    clinicalPearl: "Celiac disease causes immune-mediated blunting and atrophy of duodenal and jejunal villi, severely reducing absorptive surface area and causing malabsorption.",
    tags: ["Ross-Wilson", "gastrointestinal", "villi", "microvilli", "small-intestine"]
  },
  {
    id: "AP-006",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Spinal Cord Meninges & Denticulate Ligaments",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Which meningeal layer forms the bilateral, tooth-like Denticulate Ligaments that suspend and anchor the spinal cord within the surrounding dural sheath?",
    options: [
      "Pia mater",
      "Arachnoid mater",
      "Dura mater",
      "Ligamentum flavum"
    ],
    correctAnswer: 0,
    rationale: "The denticulate ligaments are 21 pairs of lateral, triangular, tooth-like extensions of the Pia Mater that project laterally across the subarachnoid space to anchor into the arachnoid and dura mater, stabilizing the spinal cord against rotational forces.",
    optionRationales: {
      A: "Correct. Denticulate ligaments are specialized lateral extensions of the vascular Pia Mater.",
      B: "Arachnoid mater lines the dura; it does not originate the denticulate ligaments.",
      C: "Dura mater provides the outer anchor point, not the originating ligamentous substance.",
      D: "Ligamentum flavum connects adjacent vertebral laminae outside the dural sac."
    },
    clinicalPearl: "Denticulate ligaments separate anterior from posterior spinal nerve rootlets, serving as a landmark during neurosurgical cordotomies.",
    tags: ["Ross-Wilson", "neuroanatomy", "pia-mater", "denticulate-ligaments"]
  },
  {
    id: "AP-007",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Haversian Systems (Osteons) Microanatomy",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the microscopic architecture of compact bone, what structures connect adjacent Haversian (central) canals to one another and to the outer periosteum, transmitting neurovascular bundles transversely across bone tissue?",
    options: [
      "Volkmann's (Perforating) Canals",
      "Canaliculi",
      "Concentric Lamellae",
      "Howship's lacunae"
    ],
    correctAnswer: 0,
    rationale: "Compact bone consists of cylindrical units called Osteons (Haversian systems). Longitudinally running Haversian canals contain blood vessels and nerves. Volkmann's (perforating) canals run perpendicular/transversely, interconnecting Haversian canals with one another and linking them to the outer periosteum.",
    optionRationales: {
      A: "Correct. Volkmann's canals run transversely/obliquely to transmit vessels between Haversian canals and the periosteum.",
      B: "Canaliculi are microscopic channels interconnecting lacunae to allow osteocytes to exchange nutrients via gap junctions.",
      C: "Concentric lamellae are concentric rings of calcified matrix surrounding central canals.",
      D: "Howship's lacunae are shallow resorption pits formed by osteoclasts on bone surfaces."
    },
    clinicalPearl: "Haversian canals run parallel to long bones; Volkmann's canals run perpendicularly to deliver periosteal blood flow into the deep cortex.",
    tags: ["Ross-Wilson", "histology", "bone", "osteon", "Volkmann-canals"]
  },
  {
    id: "AP-008",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "Thyroid Gland Histology & Colloid Storage",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Unlike other endocrine glands that release their hormones immediately into capillaries following synthesis, in what extracellular luminal form does the thyroid gland store months of precursor thyroid hormones?",
    options: [
      "Thyroglobulin stored within the follicular colloid",
      "Pure crystallized crystalline thyroxine inside adipocytes",
      "Calcitonin stored in interstitial lymphatics",
      "Free iodide gas dissolved in intracellular lysosomes"
    ],
    correctAnswer: 0,
    rationale: "The thyroid is unique among human endocrine glands because it stores large quantities of hormone extracellularly. Follicular epithelial cells produce Thyroglobulin, a large glycoprotein stored as a gelatinous Colloid inside the central follicular lumen, containing enough T3 and T4 to sustain normal metabolic needs for 2 to 3 months.",
    optionRationales: {
      A: "Correct. Thyroglobulin in the follicular colloid represents the large extracellular hormone reserve.",
      B: "Thyroid hormones are stored in follicular colloid, not in adipose tissue.",
      C: "Calcitonin is stored in secretory granules within parafollicular C-cells, not in the colloid.",
      D: "Iodide is stored organically bound to tyrosine residues on thyroglobulin, not as free gas."
    },
    clinicalPearl: "Because the thyroid colloid stores a 2- to 3-month supply of thyroglobulin, medications that block synthesis (e.g., Carbimazole) take weeks to produce clinical improvements.",
    tags: ["Ross-Wilson", "thyroid", "colloid", "thyroglobulin", "histology"]
  },
  {
    id: "AP-009",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Anatomy of the Nephron: Loop of Henle Distribution",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which class of nephrons comprises approximately 15% of all renal nephrons and has glomeruli located deep in the renal cortex near the corticomedullary junction, featuring long loops of Henle that plunge deep into the inner renal medulla?",
    options: [
      "Juxtamedullary nephrons",
      "Cortical nephrons",
      "Superficial nephrons",
      "Subcapsular nephrons"
    ],
    correctAnswer: 0,
    rationale: "Cortical nephrons (~85%) have glomeruli in the outer cortex with short loops of Henle barely penetrating the outer medulla. Juxtamedullary nephrons (~15%) have glomeruli close to the medulla and long loops of Henle extending to the renal papillae, accompanied by vasa recta, which generate the hypertonic medullary gradient needed to concentrate urine.",
    optionRationales: {
      A: "Correct. Juxtamedullary nephrons have long loops of Henle deep in the medulla that establish the countercurrent multiplier gradient.",
      B: "Cortical nephrons (85%) have short loops of Henle and perform the majority of solute filtration and secretion.",
      C: "Superficial nephrons are another term for cortical nephrons.",
      D: "Subcapsular nephrons reside at the outer perimeter and have short loops."
    },
    clinicalPearl: "Juxtamedullary nephrons, with their long loops of Henle and vasa recta, allow human kidneys to concentrate urine up to 1200–1400 mOsm/kg during dehydration.",
    tags: ["Ross-Wilson", "renal", "nephron", "juxtamedullary", "loop-of-henle"]
  },
  {
    id: "AP-010",
    course: "Anatomy & Physiology",
    topic: "The Reproductive System",
    subtopic: "Uterine Wall Histological Layers",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which layer of the uterine wall undergoes cyclic proliferation, secretory differentiation, and subsequent shedding during the menstrual cycle?",
    options: [
      "Endometrium (specifically the Stratum Functionale)",
      "Myometrium",
      "Perimetrium (Serosa)",
      "Stratum Basale"
    ],
    correctAnswer: 0,
    rationale: "The endometrium has two layers: the deeper Stratum Basale (which remains intact and regenerates the lining) and the superficial Stratum Functionale. The stratum functionale responds to estrogen and progesterone, proliferating and then shedding during menstruation.",
    optionRationales: {
      A: "Correct. The Stratum Functionale of the endometrium thickens and sheds every menstrual cycle.",
      B: "The myometrium is the thick muscular middle tunic responsible for labor contractions.",
      C: "The perimetrium is the outer serosal peritoneal covering of the uterus.",
      D: "The Stratum Basale is not shed; it acts as the stem cell source to rebuild the functionalis."
    },
    clinicalPearl: "Incomplete shedding of the stratum functionale or ectopic implants of functional endometrium outside the uterus produces the cyclic pain of Endometriosis.",
    tags: ["Ross-Wilson", "reproductive", "endometrium", "menstrual-cycle"]
  },
  {
    id: "AP-011",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Spinal Cord Anatomy: Conus Medullaris & Filum Terminale",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the adult human, at which vertebral level does the tapered inferior end of the spinal cord (the Conus Medullaris) terminate?",
    options: [
      "Lower border of the first lumbar vertebra (L1) or upper L2",
      "Lower border of the third sacral vertebra (S3)",
      "Lower border of the fifth lumbar vertebra (L5)",
      "Twelfth thoracic vertebra (T12) in all individuals"
    ],
    correctAnswer: 0,
    rationale: "During embryonic development, the vertebral column outgrows the spinal cord. In adults, the conus medullaris terminates at the level of the lower border of L1 or upper L2. Below this point, the subarachnoid space continues down to S2 as the lumbar cistern, carrying the cauda equina.",
    optionRationales: {
      A: "Correct. The adult spinal cord terminates at L1/L2 (in neonates, it ends lower at L3).",
      B: "The dural sac and subarachnoid space terminate at S2, not the spinal cord itself.",
      C: "Ending at L5 would make lumbar punctures at L3/L4 dangerous.",
      D: "T12 is too superior; normal conus termination sits at the L1-L2 intervertebral junction."
    },
    clinicalPearl: "Lumbar punctures are performed at the L3–L4 or L4–L5 intervertebral spaces (below the conus medullaris) to avoid puncturing the spinal cord.",
    tags: ["Ross-Wilson", "spinal-cord", "conus-medullaris", "lumbar-puncture"]
  },
  {
    id: "AP-012",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Fetal Shunts & The Ductus Arteriosus",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the fetal cardiovascular circulation, the Ductus Arteriosus directly shunts blood between which two major vascular structures, bypassing the high-resistance, unexpanded pulmonary capillary bed?",
    options: [
      "Pulmonary trunk (near left pulmonary artery) and the arch of the aorta",
      "Right atrium and left atrium across the interatrial septum",
      "Umbilical vein and the inferior vena cava",
      "Left ventricle and the superior vena cava"
    ],
    correctAnswer: 0,
    rationale: "The ductus arteriosus connects the pulmonary artery directly to the proximal descending aorta just distal to the left subclavian artery. Because fetal pulmonary vascular resistance is high, ~90% of blood ejected by the right ventricle is shunted through this vessel into the systemic aorta, bypassing the non-ventilated lungs.",
    optionRationales: {
      A: "Correct. Ductus arteriosus links the pulmonary trunk to the descending aorta.",
      B: "The Foramen Ovale connects the right atrium to the left atrium.",
      C: "The Ductus Venosus connects the umbilical vein to the IVC, bypassing the liver.",
      D: "There is no direct connection between the left ventricle and the superior vena cava."
    },
    clinicalPearl: "Prostaglandin E2 keeps the ductus arteriosus open in utero. After birth, oxygenation and dropping prostaglandins close it into the fibrous Ligamentum Arteriosum.",
    tags: ["Ross-Wilson", "fetal-circulation", "ductus-arteriosus", "cardiovascular"]
  },
  {
    id: "AP-013",
    course: "Anatomy & Physiology",
    topic: "The Skeletal System",
    subtopic: "Structure of a Long Bone",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the anatomical name for the cylindrical shaft of a typical human long bone, situated between the proximal and distal epiphyses?",
    options: [
      "Diaphysis",
      "Metaphysis",
      "Epiphyseal plate",
      "Endosteum"
    ],
    correctAnswer: 0,
    rationale: "A long bone consists of: 1) Diaphysis (the tubular mid-shaft composed of thick compact bone around a central medullary cavity), 2) Epiphyses (expanded articular ends composed of cancellous bone), and 3) Metaphysis (the flared neck region containing the epiphyseal growth plate).",
    optionRationales: {
      A: "Correct. Diaphysis is the shaft of a long bone.",
      B: "Metaphysis is the flared growth zone between the diaphysis and epiphysis.",
      C: "The epiphyseal plate is the hyaline cartilage growth disc within the metaphysis.",
      D: "Endosteum is the thin vascular membrane lining the internal medullary marrow cavity."
    },
    clinicalPearl: "Fractures of the diaphysis heal predominantly through secondary bone formation with a bridging periosteal callus.",
    tags: ["Ross-Wilson", "osteology", "diaphysis", "bone-structure"]
  },
  {
    id: "AP-014",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Alveolar Cell Types & Function",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which cells constitute approximately 95% of the total internal alveolar surface area in human lungs, featuring an extremely thin cytoplasm optimized for rapid respiratory gas diffusion?",
    options: [
      "Type I Alveolar Cells (Type I Pneumocytes)",
      "Type II Alveolar Cells (Septal cells)",
      "Alveolar Macrophages (Dust cells)",
      "Goblet cells"
    ],
    correctAnswer: 0,
    rationale: "Type I pneumocytes are squamous epithelial cells with attenuated cytoplasm (~0.2 micrometers thick) that cover 95% of the alveolar surface. Joined by tight junctions, they form the thin air-blood barrier through which O2 and CO2 diffuse. Type II pneumocytes cover only 5% of the surface and synthesize surfactant.",
    optionRationales: {
      A: "Correct. Type I pneumocytes form 95% of the alveolar surface and create the thin gas-diffusion membrane.",
      B: "Type II pneumocytes cover ~5% of surface area, secrete surfactant, and divide to regenerate damaged Type I cells.",
      C: "Alveolar macrophages are mobile phagocytic cells in the lumen that ingest particles.",
      D: "Goblet cells are mucus-secreting cells found in bronchi, disappearing at terminal bronchioles."
    },
    clinicalPearl: "Type I pneumocytes cannot replicate. When they are destroyed by viral pneumonias or toxins, Type II pneumocytes proliferate and differentiate into new Type I cells.",
    tags: ["Ross-Wilson", "respiratory", "pneumocytes", "alveoli", "histology"]
  },
  {
    id: "AP-015",
    course: "Anatomy & Physiology",
    topic: "The Lymphatic System",
    subtopic: "Lymph Node Architecture & Lymph Flow Pathway",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "What is the correct sequential pathway of lymph fluid as it filters through the internal sinuses of an encapsulated lymph node?",
    options: [
      "Afferent lymphatic vessels → Subcapsular (cortical) sinus → Trabecular sinuses → Medullary sinuses → Efferent lymphatic vessel at the hilum",
      "Efferent vessels → Medullary sinus → Subcapsular sinus → Afferent vessels",
      "Hilum → Medullary cords → Subcapsular sinus → Cortex",
      "Afferent vessels → Central vein → Postcapillary venule → Efferent duct"
    ],
    correctAnswer: 0,
    rationale: "Multiple afferent lymphatic vessels pierce the convex capsule, emptying into the Subcapsular sinus. Lymph percolates down through cortical Trabecular sinuses into tortuous Medullary sinuses (flanked by antibody-secreting plasma cells), and exits via one or two Efferent lymphatic vessels at the concave Hilum.",
    optionRationales: {
      A: "Correct. Afferent vessels → Subcapsular sinus → Trabecular sinuses → Medullary sinuses → Efferent vessel at the hilum.",
      B: "Flows in the wrong direction; efferent vessels carry lymph away from, not into, the subcapsular sinus.",
      C: "Lymph enters through the convex capsule, not the hilum.",
      D: "Lymph fluid travels through sinuses, not through veins or central venules."
    },
    clinicalPearl: "Multiple afferent vessels enter a lymph node, but only one or two efferent vessels exit at the hilum. This valve setup slows flow, giving macrophages and lymphocytes time to scan for antigens.",
    tags: ["Ross-Wilson", "lymph-node", "subcapsular-sinus", "histology"]
  },
  {
    id: "AP-016",
    course: "Anatomy & Physiology",
    topic: "The Special Senses",
    subtopic: "The Inner Ear: Organ of Corti",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Where are the specialized mechanoreceptive hair cells of the Organ of Corti (the organ of hearing) situated within the cochlea?",
    options: [
      "Resting on the Basilar Membrane within the Cochlear Duct (Scala Media)",
      "Attached to the tympanic membrane within the middle ear cavity",
      "Floating in the perilymph of the Scala Tympani",
      "Embedded in the ampullary crest of the semicircular canals"
    ],
    correctAnswer: 0,
    rationale: "The spiral Organ of Corti rests on the Basilar Membrane inside the endolymph-filled Cochlear Duct (Scala Media). Sound waves vibrate the perilymph, displacing the basilar membrane and shearing stereocilia against the overlying Tectorial Membrane to generate action potentials along the cochlear nerve (CN VIII).",
    optionRationales: {
      A: "Correct. The Organ of Corti rests on the Basilar membrane inside the Scala Media.",
      B: "The middle ear contains ossicles, not hair cells.",
      C: "Scala tympani is a perilymph channel; the sensory organ is inside the scala media.",
      D: "The crista ampullaris in semicircular canals senses rotational balance, not sound."
    },
    clinicalPearl: "High-frequency sounds vibrate the stiff basilar membrane near the cochlear base (near the oval window); low-frequency sounds vibrate the flexible apex (helicotrema).",
    tags: ["Ross-Wilson", "ear", "organ-of-corti", "basilar-membrane", "audition"]
  },
  {
    id: "AP-017",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Histological Layers of the Alimentary Canal Wall",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "From the inner lumen to the outer external boundary, what is the universal 4-layered histological arrangement of the gastrointestinal tract wall?",
    options: [
      "Mucosa → Submucosa → Muscularis externa (propria) → Serosa (or Adventitia)",
      "Serosa → Muscularis externa → Submucosa → Mucosa",
      "Submucosa → Mucosa → Muscularis → Serosa",
      "Mucosa → Muscularis mucosae → Serosa → Adventitia"
    ],
    correctAnswer: 0,
    rationale: "From lumen outward, the GI tract has four tunics: 1) Mucosa (epithelium, lamina propria, muscularis mucosae), 2) Submucosa (connective tissue containing blood vessels and Meissner's plexus), 3) Muscularis externa (circular and longitudinal smooth muscle layers with Auerbach's myenteric plexus between them), and 4) Serosa/Adventitia.",
    optionRationales: {
      A: "Correct. Mucosa → Submucosa → Muscularis externa → Serosa (inside out).",
      B: "This lists the layers from outside to inside.",
      C: "Submucosa lies beneath the mucosa, not on the luminal surface.",
      D: "Muscularis mucosae is a sub-layer of the mucosa, not an independent middle coat."
    },
    clinicalPearl: "Meissner's plexus in the Submucosa controls secretions. Auerbach's plexus between the circular and longitudinal layers of the Muscularis controls motility.",
    tags: ["Ross-Wilson", "gastrointestinal", "GI-tract-layers", "histology"]
  },
  {
    id: "AP-018",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "The Trigone of the Urinary Bladder",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What three anatomical orifices define the triangular boundary of the Trigone on the posterior-inferior floor of the urinary bladder?",
    options: [
      "The two Ureteric Orifices and the Internal Urethral Orifice",
      "The two renal arterial ostia and the common bile duct",
      "The ejaculatory ducts and the external urethral sphincter",
      "The apex of the prostate and bilateral seminal colliculi"
    ],
    correctAnswer: 0,
    rationale: "The Trigone is a smooth, triangular area on the base of the bladder that lacks mucosal rugae. Its boundaries are formed by the two slits of the Ureteric Orifices superiorly and the funnel-shaped Internal Urethral Orifice inferiorly.",
    optionRationales: {
      A: "Correct. The two ureteric openings and the single internal urethral opening form the three corners of the trigone.",
      B: "Renal arteries and bile ducts do not connect to the urinary bladder.",
      C: "Ejaculatory ducts open into the prostatic urethra, not the bladder trigone.",
      D: "These are structures of the prostate gland and urethra."
    },
    clinicalPearl: "Unlike the rest of the bladder wall which is heavily folded with rugae when empty, the trigone remains smooth, which helps direct urine into the urethra.",
    tags: ["Ross-Wilson", "urinary-bladder", "trigone", "ureteric-orifices"]
  },
  {
    id: "AP-019",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "Adrenal Cortex Histology: Zona Glomerulosa",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Cells of the Zona Glomerulosa (the outer zone of the adrenal cortex) are arranged in curved clusters and cords. What primary mineralocorticoid do they synthesize, and what is its main physiological trigger?",
    options: [
      "Aldosterone; stimulated primarily by Angiotensin II and elevated serum Potassium (K+)",
      "Cortisol; stimulated by thyroid-stimulating hormone (TSH)",
      "Dehydroepiandrosterone (DHEA); stimulated by insulin",
      "Epinephrine; stimulated by parasympathetic vagal stimulation"
    ],
    correctAnswer: 0,
    rationale: "The zona glomerulosa makes up ~15% of the cortex and produces mineralocorticoids, mainly Aldosterone. Unlike cortisol, which is driven by ACTH, aldosterone secretion is triggered by Angiotensin II (via the RAAS cascade) and direct sensing of hyperkalemia by glomerulosa cell membranes.",
    optionRationales: {
      A: "Correct. Zona glomerulosa secretes Aldosterone in response to Angiotensin II and hyperkalemia.",
      B: "Cortisol is synthesized in the Zona Fasciculata in response to ACTH, not TSH.",
      C: "DHEA is synthesized in the Zona Reticularis.",
      D: "Epinephrine is produced in the adrenal medulla by chromaffin cells."
    },
    clinicalPearl: "Because aldosterone secretion is driven by Angiotensin II and potassium (not ACTH), pituitary failure causes secondary adrenal insufficiency without triggering a mineralocorticoid crisis.",
    tags: ["Ross-Wilson", "adrenal-cortex", "aldosterone", "zona-glomerulosa"]
  },
  {
    id: "AP-020",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Glial Cells of the Central Nervous System",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which neuroglial cells form the insulating Myelin Sheath around nerve axons within the Central Nervous System (brain and spinal cord)?",
    options: [
      "Oligodendrocytes",
      "Schwann cells (Neurolemmocytes)",
      "Astrocytes",
      "Microglia"
    ],
    correctAnswer: 0,
    rationale: "In the Central Nervous System (CNS), Oligodendrocytes extend cytoplasmic processes that wrap around multiple axons to form myelin sheaths. In the Peripheral Nervous System (PNS), Schwann cells myelinate a single axonal segment each.",
    optionRationales: {
      A: "Correct. Oligodendrocytes myelinate axons in the CNS.",
      B: "Schwann cells myelinate axons in the Peripheral Nervous System (PNS).",
      C: "Astrocytes provide structural support, regulate extracellular potassium, and help maintain the blood-brain barrier.",
      D: "Microglia are resident macrophages derived from mesoderm that clear cellular debris."
    },
    clinicalPearl: "Multiple Sclerosis is an autoimmune condition that destroys Oligodendrocytes in the CNS. Guillain-Barre Syndrome damages Schwann cells in the PNS.",
    tags: ["Ross-Wilson", "neuroglia", "oligodendrocytes", "myelin"]
  },
  {
    id: "AP-021",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Synovial Joint Classification",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under the structural classification of synovial joints, which variety permits multiaxial movement across all three planes (flexion/extension, abduction/adduction, and circumduction/rotation)?",
    options: [
      "Ball and Socket (Spheroidal) joint (e.g., Glenohumeral and Hip joints)",
      "Hinge (Ginglymus) joint (e.g., Elbow and Interphalangeal joints)",
      "Pivot (Trochoid) joint (e.g., Proximal Radioulnar and Atlantoaxial joints)",
      "Plane (Gliding) joint (e.g., Intercarpal joints)"
    ],
    correctAnswer: 0,
    rationale: "Ball and socket (spheroidal) joints consist of a globular head fitting into a cuplike socket (e.g., shoulder and hip). They are multiaxial/triaxial, permitting movements across all planes including flexion, extension, abduction, adduction, internal/external rotation, and circumduction.",
    optionRationales: {
      A: "Correct. Ball and socket joints are multiaxial, allowing full rotation and circumduction.",
      B: "Hinge joints are uniaxial, allowing motion in one plane (flexion/extension).",
      C: "Pivot joints are uniaxial, permitting rotation around a central axis.",
      D: "Plane joints permit non-axial sliding or gliding motions between flat surfaces."
    },
    clinicalPearl: "The shoulder joint has greater mobility than the hip because its glenoid cavity is shallow, but this mobility makes it more prone to dislocation.",
    tags: ["Ross-Wilson", "joints", "synovial", "ball-and-socket", "musculoskeletal"]
  },
  {
    id: "AP-022",
    course: "Anatomy & Physiology",
    topic: "The Cardiovascular System",
    subtopic: "Cardiac Output and Stroke Volume Determinants",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "If a healthy adult at rest has a Heart Rate of 72 beats per minute and a left ventricular Stroke Volume of 70 mL, what is the calculated resting Cardiac Output?",
    options: [
      "Approximately 5.04 Liters/minute",
      "Approximately 1.5 Liters/minute",
      "Approximately 12 Liters/minute",
      "Approximately 500 mL/minute"
    ],
    correctAnswer: 0,
    rationale: "Cardiac Output (CO) is calculated as: Heart Rate (HR) x Stroke Volume (SV). Here: 72 bpm x 70 mL = 5,040 mL/min, which is approximately 5.04 L/min (normal adult resting range: 4.5–5.5 L/min).",
    optionRationales: {
      A: "Correct. 72 x 70 = 5,040 mL/min (~5 L/min).",
      B: "1.5 L/min indicates severe cardiogenic shock.",
      C: "12 L/min is reached during strenuous exercise, not at rest.",
      D: "500 mL/min is inadequate to sustain adult life."
    },
    clinicalPearl: "Formula: Cardiac Output = Heart Rate x Stroke Volume. Because average stroke volume is ~70 mL and heart rate is ~72 bpm, normal resting cardiac output is ~5 L/min.",
    tags: ["Ross-Wilson", "cardiac-output", "hemodynamics", "stroke-volume"]
  },
  {
    id: "AP-023",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Carriage of Carbon Dioxide in Blood",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "According to Ross & Wilson, what is the predominant mechanism (accounting for approximately 70%) by which carbon dioxide is transported in venous blood from tissues to the lungs?",
    options: [
      "Dissolved as Bicarbonate ions (HCO3-) in plasma",
      "Bound to hemoglobin amino groups as Carbaminohemoglobin",
      "Dissolved directly as free CO2 gas in physical solution",
      "Converted into solid calcium carbonate crystals"
    ],
    correctAnswer: 0,
    rationale: "Carbon dioxide is transported in blood in three forms: 1) As Bicarbonate ions (HCO3-) in plasma (~70%), produced inside red cells via carbonic anhydrase and exchanged across the membrane via the chloride shift; 2) Bound to globin proteins as Carbaminohemoglobin (~20-23%); 3) Dissolved as free gas in plasma (~7%).",
    optionRationales: {
      A: "Correct. Approximately 70% of transported carbon dioxide travels as dissolved bicarbonate ions in plasma.",
      B: "Carbaminohemoglobin accounts for 20% to 23% of carbon dioxide transport.",
      C: "Physically dissolved free gas accounts for only ~7% of total carbon dioxide transport.",
      D: "Calcium carbonate does not circulate in physiological human blood."
    },
    clinicalPearl: "The Chloride Shift (Hamburger phenomenon): When bicarbonate moves out of red blood cells into plasma, chloride ions shift in to maintain electrical neutrality.",
    tags: ["Ross-Wilson", "carbon-dioxide", "bicarbonate", "respiration", "chloride-shift"]
  },
  {
    id: "AP-024",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Peristalsis and Segmental Contractions",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "How do Segmental Contractions in the small intestine differ physiologically from Peristaltic Waves?",
    options: [
      "Segmentation involves localized rhythmic circular muscle contractions that slosh chyme back and forth to mix it with enzymes, without net forward movement",
      "Segmentation propels chyme forward, while peristalsis mixes it",
      "Segmentation is driven exclusively by voluntary somatic motor nerves",
      "Segmentation occurs only in the esophagus during swallowing"
    ],
    correctAnswer: 0,
    rationale: "Peristalsis is an organized wave of contraction preceded by receptive relaxation that propels luminal contents forward. Segmentation consists of non-propulsive, localized contractions of circular muscle that divide and mix chyme with digestive enzymes and bring it into contact with the absorptive mucosa.",
    optionRationales: {
      A: "Correct. Segmentation mixes chyme locally; peristalsis moves it along the tract.",
      B: "This reverses the definitions of segmentation and peristalsis.",
      C: "Intestinal motility is involuntary, controlled by the enteric nervous system (Auerbach's plexus) and autonomic fibers.",
      D: "Segmentation is characteristic of the small and large intestines, not the esophagus."
    },
    clinicalPearl: "Segmentation mixes chyme to maximize enzyme contact and absorption; peristalsis moves the contents forward toward the ileocecal valve.",
    tags: ["Ross-Wilson", "gastrointestinal", "peristalsis", "segmentation", "motility"]
  },
  {
    id: "AP-025",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Reflex Arc Components",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the correct sequential order of the 5 functional components that constitute a complete somatic reflex arc?",
    options: [
      "Sensory Receptor → Sensory (Afferent) Neuron → Integration Center (Interneuron) → Motor (Efferent) Neuron → Effector Organ",
      "Effector Organ → Motor Neuron → Sensory Neuron → Integration Center → Receptor",
      "Integration Center → Receptor → Afferent Neuron → Effector → Efferent Neuron",
      "Sensory Receptor → Motor Neuron → Integration Center → Efferent Neuron → Effector"
    ],
    correctAnswer: 0,
    rationale: "A reflex arc requires five functional components: 1) Sensory Receptor (detects the stimulus), 2) Sensory/Afferent neuron (transmits action potentials to the CNS), 3) Integration center (monosynaptic synapse or interneurons within spinal cord gray matter), 4) Motor/Efferent neuron (transmits impulses from CNS to periphery), and 5) Effector (muscle or gland that executes the response).",
    optionRationales: {
      A: "Correct. Receptor → Afferent neuron → Integration center → Efferent neuron → Effector organ.",
      B: "This runs backward from effector to receptor.",
      C: "Receptors must detect stimuli before central integration occurs.",
      D: "Motor neurons carry outputs, not input signals from the receptor."
    },
    clinicalPearl: "The Patellar Knee-Jerk reflex is monosynaptic: the afferent muscle spindle fiber synapses directly onto the efferent alpha-motor neuron without an intervening interneuron.",
    tags: ["Ross-Wilson", "reflex-arc", "nervous-system", "patellar-reflex"]
  },
  {
    id: "AP-026",
    course: "Anatomy & Physiology",
    topic: "The Skin and Thermoregulation",
    subtopic: "Sweat Gland Varieties (Eccrine vs Apocrine)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which variety of sweat gland is distributed over almost the entire body surface (abundant on palms and soles), opens directly onto the skin surface via pores, and functions as the primary effector of evaporative thermoregulation?",
    options: [
      "Eccrine (Merocrine) sweat glands",
      "Apocrine sweat glands",
      "Sebaceous glands",
      "Ceruminous glands"
    ],
    correctAnswer: 0,
    rationale: "Eccrine sweat glands are coiled tubular glands found across most of the skin (densest on palms, soles, and forehead). They secrete a watery, hypotonic sweat directly onto the epidermal surface through sweat pores, providing evaporative cooling. Apocrine glands open into hair follicles in the axillary and anogenital areas, becoming active at puberty.",
    optionRationales: {
      A: "Correct. Eccrine glands are distributed across the body and manage evaporative cooling.",
      B: "Apocrine glands are restricted to axillae and groin, producing thick, lipid-rich secretions that develop odor when broken down by skin bacteria.",
      C: "Sebaceous glands secrete oily sebum into hair follicles to lubricate skin and hair.",
      D: "Ceruminous glands are modified apocrine glands in the external ear canal that secrete earwax."
    },
    clinicalPearl: "Eccrine sweat glands are innervated by sympathetic cholinergic fibers (using acetylcholine, not norepinephrine), which is why anticholinergic drugs reduce sweating.",
    tags: ["Ross-Wilson", "skin", "thermoregulation", "eccrine-glands"]
  },
  {
    id: "AP-027",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Juxtaglomerular Apparatus & Blood Pressure",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The Macula Densa consists of crowded, specialized epithelial cells that monitor sodium and chloride concentrations in luminal fluid. Where are these cells located?",
    options: [
      "In the wall of the initial portion of the Distal Convoluted Tubule, where it contacts the vascular pole of its originating glomerulus",
      "In the proximal convoluted tubule near the urinary pole",
      "In the collecting duct inside the renal papilla",
      "Within the visceral podocyte layer of Bowman's capsule"
    ],
    correctAnswer: 0,
    rationale: "The macula densa is a specialized plaque of tall, closely packed columnar epithelial cells located in the wall of the thick ascending limb/early distal convoluted tubule. It is positioned against the afferent and efferent arterioles of its own glomerulus, forming the chemosensory half of the juxtaglomerular apparatus.",
    optionRationales: {
      A: "Correct. Macula densa cells sit in the early distal tubule where it touches its parent glomerulus's vascular pole.",
      B: "The proximal tubule is located on the opposite side of the glomerulus.",
      C: "Collecting ducts manage urine collection, not the juxtaglomerular sensor plaque.",
      D: "Podocytes line the outer glomerular capillary walls, not the distal tubule."
    },
    clinicalPearl: "When the macula densa senses low sodium delivery (indicating low blood pressure or reduced GFR), it signals juxtaglomerular cells to release Renin.",
    tags: ["Ross-Wilson", "renal", "macula-densa", "juxtaglomerular-apparatus"]
  },
  {
    id: "AP-028",
    course: "Anatomy & Physiology",
    topic: "The Reproductive System",
    subtopic: "Ovarian Cycle & Ovulation Trigger",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Around Day 14 of a standard 28-day ovarian cycle, what endocrine event directly triggers the rupture of the mature Graafian follicle and release of the secondary oocyte (ovulation)?",
    options: [
      "A massive surge in Luteinizing Hormone (LH) triggered by high estrogen positive feedback",
      "A sudden plunge in Human Chorionic Gonadotropin (hCG)",
      "Peak secretion of Progesterone by the degenerating corpus albicans",
      "A complete cessation of all pituitary gonadotropin synthesis"
    ],
    correctAnswer: 0,
    rationale: "Midway through the cycle, sustained high levels of estradiol from the mature Graafian follicle switch from negative feedback to positive feedback on the anterior pituitary and hypothalamus. This triggers a surge in Luteinizing Hormone (LH surge), which stimulates follicle rupture and ovulation within 24 to 36 hours.",
    optionRationales: {
      A: "Correct. The LH surge is the hormonal trigger that ruptures the follicle and releases the oocyte.",
      B: "hCG is produced by the syncytiotrophoblast after implantation; it is absent in a non-pregnant ovarian cycle.",
      C: "Progesterone peaks during the luteal phase (days 21-23), after ovulation has already occurred.",
      D: "Ovulation requires high LH and FSH spikes, not hormonal shutdown."
    },
    clinicalPearl: "Home ovulation predictor kits work by detecting the surge of Luteinizing Hormone (LH) in urine.",
    tags: ["Ross-Wilson", "reproductive", "ovulation", "LH-surge", "ovary"]
  },
  {
    id: "AP-029",
    course: "Anatomy & Physiology",
    topic: "The Skeletal System",
    subtopic: "Cartilage Varieties & Locations",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which variety of cartilage is the strongest, consisting of dense bundles of collagen fibers that resist compression and shear, and forms the intervertebral discs and pubic symphysis?",
    options: [
      "Fibrocartilage",
      "Hyaline cartilage",
      "Elastic cartilage",
      "Calcified articular cartilage"
    ],
    correctAnswer: 0,
    rationale: "Fibrocartilage contains dense layers of Type I collagen fibers interspersed with chondrocytes. It is the toughest cartilage variety and acts as a shock absorber in high-stress weight-bearing areas: the intervertebral discs, the pubic symphysis, and the menisci of the knee.",
    optionRationales: {
      A: "Correct. Fibrocartilage provides high tensile strength in intervertebral discs and the pubic symphysis.",
      B: "Hyaline cartilage is glassy and smooth; it lines articular joint surfaces and forms costal cartilages, but has less tensile strength.",
      C: "Elastic cartilage contains elastin fibers and provides flexible support to the pinna of the ear and epiglottis.",
      D: "Calcified cartilage is a transitional zone where cartilage meets subchondral bone."
    },
    clinicalPearl: "Cartilage types: Elastic = Ear & Epiglottis; Fibrocartilage = Intervertebral discs & Pubic symphysis; Hyaline = Joint surfaces & Respiratory rings.",
    tags: ["Ross-Wilson", "cartilage", "fibrocartilage", "intervertebral-disc"]
  },
  {
    id: "AP-030",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "Anterior Pituitary Hormones (Tropic vs Direct)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which hormone secreted by the anterior pituitary (adenohypophysis) acts directly on target peripheral tissues to stimulate growth and protein anabolism, rather than acting through an intermediary target endocrine gland?",
    options: [
      "Growth Hormone (Somatotropin)",
      "Thyroid Stimulating Hormone (TSH)",
      "Adrenocorticotropic Hormone (ACTH)",
      "Luteinizing Hormone (LH)"
    ],
    correctAnswer: 0,
    rationale: "TSH, ACTH, LH, and FSH are tropic hormones: they stimulate downstream endocrine glands (thyroid, adrenal cortex, gonads) to release other hormones. Growth Hormone (GH/somatotropin) and Prolactin act directly on target peripheral tissues (liver, bone, muscle, breast tissue) rather than on an intermediate gland.",
    optionRationales: {
      A: "Correct. Growth Hormone acts directly on peripheral tissues (and stimulates hepatic IGF-1 release).",
      B: "TSH is a tropic hormone that stimulates the thyroid gland to release T3 and T4.",
      C: "ACTH is a tropic hormone that stimulates the adrenal cortex to release cortisol.",
      D: "LH is a tropic gonadotropin that stimulates ovarian or testicular steroidogenesis."
    },
    clinicalPearl: "Excess Growth Hormone produces Gigantism in children (before epiphyseal plates fuse) and Acromegaly in adults (after epiphyseal plates close).",
    tags: ["Ross-Wilson", "endocrine", "growth-hormone", "pituitary"]
  },
  {
    id: "AP-031",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Systemic Capillary Varieties (Fenestrated vs Sinusoidal)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Where are Sinusoidal (Discontinuous) Capillaries—which feature large gaps in their endothelial walls and incomplete basement membranes to allow whole cells and large proteins to pass through—primarily found in the body?",
    options: [
      "Liver, Spleen, and Red Bone Marrow",
      "Cerebral cortex and Blood-Brain Barrier",
      "Skeletal muscle and myocardium",
      "Skin and subcutaneous adipose tissue"
    ],
    correctAnswer: 0,
    rationale: "Capillaries are grouped into three types: 1) Continuous (skin, muscle, brain: tight junctions, continuous basement membrane), 2) Fenestrated (kidney glomeruli, small intestine, endocrine glands: small pores for fluid/solute filtration), and 3) Sinusoidal/Discontinuous (liver, spleen, red bone marrow: wide gaps allowing plasma proteins and whole blood cells to move between parenchyma and blood).",
    optionRationales: {
      A: "Correct. Sinusoidal capillaries are located in the liver, spleen, and bone marrow to permit cell and large protein transit.",
      B: "The brain features tight continuous capillaries supported by astrocyte foot processes.",
      C: "Skeletal muscle contains continuous capillaries.",
      D: "Subcutaneous skin contains continuous capillaries."
    },
    clinicalPearl: "Sinusoids in bone marrow allow mature erythrocytes to enter the circulation. In the liver, sinusoids allow albumin to pass into the bloodstream.",
    tags: ["Ross-Wilson", "capillaries", "sinusoids", "histology", "liver"]
  },
  {
    id: "AP-032",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Deglutition (Swallowing) Phases",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During the involuntary Pharyngeal Stage of swallowing (deglutition), which coordinated mechanical movement prevents the food bolus from entering the nasopharynx?",
    options: [
      "Elevation of the soft palate and uvula against the posterior pharyngeal wall",
      "Downward tilt of the epiglottis over the laryngeal inlet",
      "Relaxation of the cricopharyngeus muscle",
      "Depression of the base of the tongue"
    ],
    correctAnswer: 0,
    rationale: "During the pharyngeal phase: 1) The soft palate and uvula elevate to seal off the nasopharynx, preventing food regurgitation into the nasal cavity; 2) The larynx elevates and the epiglottis tilts downward over the glottis to protect the airway; 3) Vocal cords adduct; 4) The upper esophageal sphincter relaxes to admit the bolus.",
    optionRationales: {
      A: "Correct. Soft palate and uvula elevation blocks the nasopharynx during swallowing.",
      B: "Epiglottic tilt covers the laryngeal inlet, protecting the respiratory tract, not the nasopharynx.",
      C: "Cricopharyngeal relaxation opens the upper esophagus.",
      D: "The tongue pushes upward and backward against the hard palate to propel the bolus into the oropharynx."
    },
    clinicalPearl: "Bulbar palsy or stroke damaging cranial nerves IX and X paralyzes the soft palate, causing nasal regurgitation of fluids during swallowing.",
    tags: ["Ross-Wilson", "deglutition", "swallowing", "soft-palate", "pharynx"]
  },
  {
    id: "AP-033",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Brain Anatomy: The Diencephalon",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which bilateral, egg-shaped sensory relay station of the diencephalon processes and sorts all incoming sensory impulses (except olfaction) before relaying them to the primary cerebral cortex?",
    options: [
      "Thalamus",
      "Hypothalamus",
      "Basal ganglia",
      "Corpus Callosum"
    ],
    correctAnswer: 0,
    rationale: "The Thalamus is the primary sensory relay station of the brain. All sensory pathways (visual via lateral geniculate, auditory via medial geniculate, somatic touch/pain via ventral posterolateral [VPL] and posteromedial [VPM] nuclei) synapse in the thalamus before projecting to specific sensory cortices. Olfaction (smell) is the only sensation that bypasses the thalamus directly to reach the limbic/olfactory cortex.",
    optionRationales: {
      A: "Correct. The Thalamus relays all conscious sensory inputs (except smell) to the cerebral cortex.",
      B: "The Hypothalamus regulates autonomic function, body temperature, hunger, thirst, and pituitary hormone release.",
      C: "Basal ganglia coordinate motor movement initiation and suppression.",
      D: "The Corpus Callosum is a commissural white-matter tract interconnecting the left and right hemispheres."
    },
    clinicalPearl: "Olfaction is the only sensory modality that reaches the cerebral cortex directly without synapsing in the Thalamus.",
    tags: ["Ross-Wilson", "thalamus", "diencephalon", "sensory-relay"]
  },
  {
    id: "AP-034",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Anatomical vs Physiological Dead Space",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "How does 'Physiological Dead Space' relate to 'Anatomical Dead Space' in a healthy young adult with normal lungs?",
    options: [
      "Physiological dead space is approximately equal to anatomical dead space (~150 mL) because alveolar dead space is negligible in healthy lungs",
      "Anatomical dead space is ten times larger than physiological dead space",
      "Physiological dead space is zero in healthy lungs",
      "Anatomical dead space is found only in the pulmonary capillaries"
    ],
    correctAnswer: 0,
    rationale: "Anatomical dead space (~150 mL, or roughly 2 mL/kg) is the volume of conducting airways (nose down to terminal bronchioles) where gas exchange cannot occur due to wall thickness. Physiological dead space (total dead space) is Anatomical dead space + Alveolar dead space (ventilated alveoli with zero perfusion). In healthy individuals, all ventilated alveoli are perfused, so alveolar dead space is virtually zero, making physiological dead space equal to anatomical dead space.",
    optionRationales: {
      A: "Correct. In healthy lungs, alveolar dead space is near zero, making physiological dead space equal to anatomical dead space.",
      B: "Anatomical dead space is a component of physiological dead space; it cannot exceed the total.",
      C: "Dead space is never zero because conducting airways are non-collapsible and do not exchange gas.",
      D: "Capillaries represent the functional gas-exchange zone, not anatomical dead space."
    },
    clinicalPearl: "In pathology (such as pulmonary embolism or emphysema), alveolar dead space increases, causing physiological dead space to exceed anatomical dead space.",
    tags: ["Ross-Wilson", "respiratory", "dead-space", "pulmonary-mechanics"]
  },
  {
    id: "AP-035",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Neuromuscular Junction: T-Tubules and Triads",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In skeletal muscle fibers, what is the physiological role of the Transverse Tubules (T-tubules), which are deep invaginations of the sarcolemma?",
    options: [
      "Rapidly conducting action potentials from the surface membrane deep into the interior of the muscle fiber to trigger calcium release",
      "Synthesizing new actin and myosin filaments during muscle hypertrophy",
      "Pumping extracellular sodium out of the cell via primary active transport",
      "Storing glucose in the form of glycogen granules"
    ],
    correctAnswer: 0,
    rationale: "T-tubules are deep, narrow invaginations of the cell membrane (sarcolemma) that penetrate deep into the muscle fiber, flanking the terminal cisternae of the sarcoplasmic reticulum to form a Triad. They conduct action potentials into the center of the fiber, activating voltage-sensing dihydropyridine receptors (DHPR) that mechanically open ryanodine calcium channels in the sarcoplasmic reticulum.",
    optionRationales: {
      A: "Correct. T-tubules conduct surface depolarization deep into the muscle fiber to coordinate uniform calcium release.",
      B: "Myofilament synthesis occurs on ribosomes and rough endoplasmic reticulum.",
      C: "Primary sodium pumping occurs across the sarcolemma via Na+/K+ pumps.",
      D: "Glycogen granules sit free in the sarcoplasm, not within T-tubule lumens."
    },
    clinicalPearl: "A skeletal muscle Triad consists of 1 central T-tubule flanked by 2 terminal cisternae of the sarcoplasmic reticulum.",
    tags: ["Ross-Wilson", "musculoskeletal", "T-tubules", "excitation-contraction"]
  },
  {
    id: "AP-036",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Peripheral Resistance & Arteriolar Tone",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why are the terminal arterioles designated as the primary 'Resistance Vessels' of the systemic cardiovascular system?",
    options: [
      "They have thick circular muscular walls relative to their internal diameter and account for the largest pressure drop across the systemic circuit",
      "They contain the highest velocity of blood flow in the body",
      "They contain internal semilunar valves that stop backward blood flow",
      "They store 65% of the total circulating blood volume at rest"
    ],
    correctAnswer: 0,
    rationale: "Arterioles have small luminal diameters and thick walls rich in circularly arranged vascular smooth muscle. Because resistance is inversely proportional to radius to the fourth power (r^4), arteriolar constriction or dilation accounts for >60% of total peripheral vascular resistance (PVR/SVR), producing the steepest pressure drop (from ~85 mmHg down to ~35 mmHg).",
    optionRationales: {
      A: "Correct. Arterioles provide the highest resistance to flow, producing the greatest drop in blood pressure.",
      B: "Blood velocity is highest in the large aorta and slowest in the capillary bed.",
      C: "Valves are present in veins and lymphatics, not in systemic arterioles.",
      D: "Systemic veins act as capacitance vessels, storing 60% to 70% of blood volume at rest."
    },
    clinicalPearl: "Arterioles = Resistance vessels (control blood pressure). Veins = Capacitance vessels (store blood volume). Capillaries = Exchange vessels.",
    tags: ["Ross-Wilson", "cardiovascular", "arterioles", "peripheral-resistance"]
  },
  {
    id: "AP-037",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Large Intestinal Anatomy: Distinct Features",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which trio of anatomical features distinguishes the Large Intestine (colon) macroscopically from the Small Intestine?",
    options: [
      "Taeniae coli, Haustra, and Epiploic (omental) appendages",
      "Plicae circulares, Villi, and Peyer's patches",
      "Brunner's glands, Crypts of Lieberkuhn, and Islets of Langerhans",
      "Rugae, Sphincter of Oddi, and Falciform ligament"
    ],
    correctAnswer: 0,
    rationale: "The colon has three unique macroscopic anatomical features: 1) Taeniae coli (three ribbon-like bands of longitudinal smooth muscle), 2) Haustra (sacculations produced by the puckering of the taeniae), and 3) Epiploic/omental appendages (small, fat-filled peritoneal pouches hanging off the external surface).",
    optionRationales: {
      A: "Correct. Taeniae coli, haustra, and epiploic appendages are hallmarks of the colon.",
      B: "Plicae circulares, villi, and Peyer's patches are anatomical features of the small intestine.",
      C: "Brunner's glands are restricted to the duodenum; islets are in the pancreas.",
      D: "Rugae are in the stomach; the falciform ligament is on the liver."
    },
    clinicalPearl: "The three taeniae coli converge at the base of the vermiform appendix, providing a surgical guide to locate the appendix during an appendectomy.",
    tags: ["Ross-Wilson", "gastrointestinal", "colon", "taeniae-coli", "haustra"]
  },
  {
    id: "AP-038",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "Posterior Pituitary & Oxytocin Reflex",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What physiological response is mediated by the release of Oxytocin during infant suckling (the milk-ejection or 'let-down' reflex)?",
    options: [
      "Contraction of myoepithelial cells surrounding mammary alveoli and lactiferous ducts",
      "Stimulation of glandular alveolar cells to synthesize new casein and lactose proteins",
      "Inhibition of uterine smooth muscle contractions",
      "Suppression of hypothalamic dopamine secretion"
    ],
    correctAnswer: 0,
    rationale: "Lactation involves two hormones: Prolactin (from the anterior pituitary) stimulates alveolar epithelial cells to synthesize milk. Oxytocin (from the posterior pituitary) is released via a neuroendocrine reflex in response to nipple suckling or crying; it causes contraction of Myoepithelial cells surrounding the alveoli, squeezing milk into the lactiferous ducts (the milk ejection or let-down reflex).",
    optionRationales: {
      A: "Correct. Oxytocin causes myoepithelial cell contraction, driving milk ejection (let-down).",
      B: "Milk synthesis is driven by Prolactin, not oxytocin.",
      C: "Oxytocin stimulates, rather than inhibits, uterine myometrial contractions.",
      D: "Dopamine (prolactin-inhibiting hormone) suppression is linked to prolactin release."
    },
    clinicalPearl: "Prolactin = Produces milk (anterior pituitary). Oxytocin = Ejects milk / 'let-down' (posterior pituitary).",
    tags: ["Ross-Wilson", "endocrine", "oxytocin", "lactation", "let-down-reflex"]
  },
  {
    id: "AP-039",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Renal Clearance & Inulin GFR Benchmark",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Why is the exogenous plant polysaccharide Inulin considered the gold standard benchmark for measuring Glomerular Filtration Rate (GFR)?",
    options: [
      "It is freely filtered by glomeruli and is neither reabsorbed, secreted, synthesized, nor metabolized by the renal tubules",
      "It is actively reabsorbed by proximal tubules via sodium symporters",
      "It binds to plasma proteins and is cleared exclusively by distal tubular secretion",
      "It stimulates renal blood flow by dilating the arcuate veins"
    ],
    correctAnswer: 0,
    rationale: "To calculate GFR accurately via clearance, a substance must be: 1) Freely filtered across glomerular capillaries, 2) Neither reabsorbed nor secreted by the renal tubules, 3) Biologically inert (non-toxic and not metabolized by the kidney). Inulin meets all these criteria; therefore, its clearance rate equals the GFR.",
    optionRationales: {
      A: "Correct. Inulin is freely filtered and neither reabsorbed nor secreted, making its clearance equal to GFR.",
      B: "If reabsorbed, measured clearance would underestimate GFR.",
      C: "If secreted, measured clearance would overestimate GFR.",
      D: "Inulin is biologically inert and does not alter renal vascular resistance."
    },
    clinicalPearl: "Inulin clearance = GFR. In routine clinical practice, Creatinine Clearance is used as an endogenous surrogate, though it slightly overestimates GFR due to minor tubular secretion.",
    tags: ["Ross-Wilson", "renal", "GFR", "inulin", "clearance"]
  },
  {
    id: "AP-040",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "The Limbic System & Emotional Memory",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which almond-shaped subcortical structure located in the anterior temporal lobe of the limbic system plays a central role in processing emotional responses, fear conditioning, and threat detection?",
    options: [
      "Amygdala",
      "Hippocampus",
      "Cingulate gyrus",
      "Substantia nigra"
    ],
    correctAnswer: 0,
    rationale: "The Amygdala is a key nuclear complex in the temporal lobe limbic circuit. It coordinates autonomic, endocrine, and behavioral responses to emotional stimuli, playing a critical role in fear conditioning, processing threats, and associating emotions with memories.",
    optionRationales: {
      A: "Correct. The Amygdala coordinates emotional processing, fear conditioning, and threat responses.",
      B: "The Hippocampus converts short-term memories into long-term declarative memories and manages spatial navigation.",
      C: "The Cingulate gyrus coordinates autonomic drives and emotional conflict resolution.",
      D: "The Substantia nigra is a midbrain dopaminergic motor structure involved in basal ganglia function."
    },
    clinicalPearl: "Bilateral destruction of the amygdala (e.g., in Kluver-Bucy syndrome) leads to hyperorality, loss of fear, emotional blunting, and hypersexuality.",
    tags: ["Ross-Wilson", "neuroanatomy", "limbic-system", "amygdala", "emotion"]
  },
  {
    id: "AP-041",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Types of Muscle Tissue (Skeletal, Cardiac, Smooth)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which variety of muscle tissue is characterized by spindle-shaped (fusiform) cells with a single centrally located nucleus, lacks transverse striations, and is under involuntary autonomic control?",
    options: [
      "Smooth muscle",
      "Skeletal muscle",
      "Cardiac muscle",
      "Striated voluntary muscle"
    ],
    correctAnswer: 0,
    rationale: "Smooth muscle cells are non-striated, involuntary, and spindle-shaped with tapering ends and a single central oval nucleus. They form the muscular walls of hollow viscera (stomach, intestines, bladder, uterus, blood vessels). Skeletal muscle is multinucleated and striated; cardiac muscle is branched, striated, and possesses intercalated discs.",
    optionRationales: {
      A: "Correct. Smooth muscle cells are fusiform, non-striated, single-nucleated, and involuntary.",
      B: "Skeletal muscle fibers are long, cylindrical, striated, multinucleated, and voluntary.",
      C: "Cardiac muscle cells are branched, striated, uninucleated, and joined by intercalated discs.",
      D: "Striated voluntary muscle is an alternative name for skeletal muscle."
    },
    clinicalPearl: "Smooth muscle uses calmodulin (instead of troponin) to bind calcium, activating Myosin Light Chain Kinase (MLCK) to trigger contraction.",
    tags: ["Ross-Wilson", "histology", "smooth-muscle", "myology"]
  },
  {
    id: "AP-042",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Azygos Venous System Architecture",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In thoracic venous anatomy, which vessel ascends along the right side of the vertebral column, arches over the root of the right lung, and empties directly into the Superior Vena Cava?",
    options: [
      "Azygos Vein",
      "Hemiazygos Vein",
      "Accessory Hemiazygos Vein",
      "Internal Thoracic Vein"
    ],
    correctAnswer: 0,
    rationale: "The Azygos vein originates in the abdomen near L1/L2, ascends through the posterior mediastinum along the right side of the thoracic spine, arches anteriorly over the root of the right lung at T4, and empties into the Superior Vena Cava (SVC). The hemiazygos and accessory hemiazygos veins drain the left side of the thorax and cross to empty into the azygos.",
    optionRationales: {
      A: "Correct. The Azygos vein arches over the right lung root and drains into the SVC.",
      B: "The Hemiazygos vein ascends on the inferior left side of the spine and crosses to the azygos at T8/T9.",
      C: "The Accessory Hemiazygos vein drains the superior left intercostal spaces and crosses to the azygos at T7/T8.",
      D: "Internal thoracic (mammary) veins drain the anterior chest wall into the brachiocephalic veins."
    },
    clinicalPearl: "The Azygos system forms an important collateral channel connecting the Inferior Vena Cava and Superior Vena Cava in cases of caval obstruction.",
    tags: ["Ross-Wilson", "azygos-vein", "thoracic-anatomy", "venous-drainage"]
  },
  {
    id: "AP-043",
    course: "Anatomy & Physiology",
    topic: "The Immune & Lymphatic System",
    subtopic: "Primary vs Secondary Lymphoid Organs",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under Ross & Wilson's classification of the immune system, which two anatomical structures constitute the Primary Lymphoid Organs (where lymphocytes are produced and mature)?",
    options: [
      "Red Bone Marrow and the Thymus",
      "Spleen and Lymph Nodes",
      "Peyer's Patches and Tonsils",
      "Vermiform Appendix and Adenoids"
    ],
    correctAnswer: 0,
    rationale: "Primary lymphoid organs are the sites where immature lymphocytes are produced and undergo antigen-independent maturation/selection: Red Bone Marrow (where B-cells develop and mature, and T-cell precursors are generated) and the Thymus (where T-cells migrate and mature). Secondary lymphoid organs (spleen, lymph nodes, MALT, tonsils) are sites where mature lymphocytes encounter antigens and mount immune responses.",
    optionRationales: {
      A: "Correct. Bone marrow and thymus are primary lymphoid organs where lymphocytes develop and mature.",
      B: "Spleen and lymph nodes are secondary lymphoid organs that filter blood and lymph.",
      C: "Peyer's patches and tonsils are secondary mucosal-associated lymphoid tissues (MALT).",
      D: "Appendix and adenoids are secondary lymphoid structures."
    },
    clinicalPearl: "B-cells mature in the Bone Marrow; T-cells mature in the Thymus. Once mature, both migrate to secondary lymphoid organs.",
    tags: ["Ross-Wilson", "immunology", "primary-lymphoid", "thymus", "bone-marrow"]
  },
  {
    id: "AP-044",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Respiratory Volumes: Vital Capacity Definition",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the physiological definition of Vital Capacity (VC), representing the maximum volume of air a person can exhale following a maximal inhalation?",
    options: [
      "Tidal Volume (TV) + Inspiratory Reserve Volume (IRV) + Expiratory Reserve Volume (ERV)",
      "Tidal Volume (TV) + Residual Volume (RV)",
      "Inspiratory Reserve Volume (IRV) + Residual Volume (RV)",
      "Functional Residual Capacity (FRC) + Total Lung Capacity (TLC)"
    ],
    correctAnswer: 0,
    rationale: "Vital Capacity (VC) is the maximum volume of gas that can be expelled from the lungs following a maximal inspiratory effort. It equals the sum of three lung volumes: TV (~500 mL) + IRV (~3,000 mL) + ERV (~1,100 mL), averaging approximately 4.6 Liters in adult males.",
    optionRationales: {
      A: "Correct. Vital Capacity = Tidal Volume + Inspiratory Reserve Volume + Expiratory Reserve Volume.",
      B: "TV + RV is not an established clinical capacity calculation.",
      C: "IRV + RV misses normal tidal exchange and expiratory reserve.",
      D: "FRC + TLC combines overlapping capacities incorrectly."
    },
    clinicalPearl: "Vital capacity reflects respiratory muscle strength and lung expansion; a drop in VC below 15 mL/kg in neuromuscular diseases (e.g., Guillain-Barre) indicates impending respiratory failure.",
    tags: ["Ross-Wilson", "respiratory", "vital-capacity", "spirometry"]
  },
  {
    id: "AP-045",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Hepatic Portal System Formation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The Hepatic Portal Vein (which delivers nutrient-rich blood from the gastrointestinal tract to the liver) is formed behind the neck of the pancreas by the union of which two major veins?",
    options: [
      "Superior Mesenteric Vein and Splenic Vein",
      "Inferior Vena Cava and Hepatic Vein",
      "Left Gastric Vein and Right Renal Vein",
      "Internal Iliac Vein and Celiac Vein"
    ],
    correctAnswer: 0,
    rationale: "The Hepatic Portal Vein is formed posterior to the neck of the pancreas by the union of the Superior Mesenteric Vein (draining the small intestine, ascending colon, and transverse colon) and the Splenic Vein (draining the spleen and stomach, which typically receives the Inferior Mesenteric Vein).",
    optionRationales: {
      A: "Correct. The Portal Vein is formed by the confluence of the Superior Mesenteric and Splenic veins.",
      B: "Hepatic veins drain blood out of the liver into the IVC, not into the portal vein.",
      C: "The left gastric vein drains into the portal vein, but does not form its primary trunk.",
      D: "The internal iliac drains the pelvic cavity into the systemic caval circulation."
    },
    clinicalPearl: "The portal vein carries ~75% of the liver's total blood supply (rich in nutrients, but relatively low in oxygen), while the hepatic artery supplies the remaining 25% (rich in oxygen).",
    tags: ["Ross-Wilson", "portal-vein", "liver", "splenic-vein", "SMV"]
  },
  {
    id: "AP-046",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "The Blood-Brain Barrier (BBB) Structural Components",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Which cellular structures wrap around brain capillary endothelial cells to support the tight junctions of the Blood-Brain Barrier and regulate localized microvascular blood flow?",
    options: [
      "End-feet (pedicels) of Astrocytes",
      "Myelin sheaths of Oligodendrocytes",
      "Microglial phagocytic lamellipodia",
      "Ependymal cilia"
    ],
    correctAnswer: 0,
    rationale: "The Blood-Brain Barrier (BBB) consists of: 1) Non-fenestrated brain capillary endothelial cells joined by continuous tight junctions, 2) A thick basement membrane, and 3) Perivascular Astrocytic End-Feet (processes of protoplasmic and fibrous astrocytes) that envelop the capillaries, releasing chemical factors that maintain tight-junction integrity and regulate local blood flow.",
    optionRationales: {
      A: "Correct. Astrocytic end-feet cover the capillary surfaces, inducing and maintaining the blood-brain barrier.",
      B: "Oligodendrocytes myelinate axons in white matter; they do not form the vascular barrier.",
      C: "Microglia are phagocytic scavenger cells.",
      D: "Ependymal cells line the brain ventricles and central canal, moving CSF with their cilia."
    },
    clinicalPearl: "Water, oxygen, carbon dioxide, and lipophilic substances (alcohol, general anesthetics) pass the BBB easily; polar molecules, large proteins, and hydrophilic antibiotics cannot penetrate unless assisted by specific transport carriers.",
    tags: ["Ross-Wilson", "neuroanatomy", "blood-brain-barrier", "astrocytes"]
  },
  {
    id: "AP-047",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "The Renin-Angiotensin-Aldosterone System (RAAS)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Where in the body is the enzyme Angiotensin Converting Enzyme (ACE)—responsible for converting inactive Angiotensin I into active Angiotensin II—found in its highest functional concentration?",
    options: [
      "On the luminal surface of pulmonary vascular endothelial cells in the lungs",
      "Inside the renal collecting ducts",
      "Within the mucosal crypts of the jejunum",
      "Inside the lumen of the gallbladder"
    ],
    correctAnswer: 0,
    rationale: "While Angiotensinogen is produced by the liver and Renin is secreted by the kidneys, the primary site for the conversion of Angiotensin I to the active peptide Angiotensin II is the pulmonary capillary bed, where Angiotensin Converting Enzyme (ACE) is expressed on the luminal surface of pulmonary vascular endothelial cells.",
    optionRationales: {
      A: "Correct. ACE is concentrated on the surface of pulmonary capillary endothelial cells in the lung.",
      B: "Collecting ducts respond to aldosterone and ADH, but do not drive primary systemic conversion of Angiotensin I.",
      C: "Jejunal crypts secrete intestinal juices (succus entericus).",
      D: "The gallbladder concentrates bile; it does not synthesize ACE."
    },
    clinicalPearl: "Because ACE is concentrated in pulmonary capillaries, ACE-inhibitors (e.g., Lisinopril) prevent the breakdown of local pulmonary bradykinin, producing a dry, persistent cough as a classic drug side effect.",
    tags: ["Ross-Wilson", "RAAS", "ACE", "pulmonary-circulation", "blood-pressure"]
  },
  {
    id: "AP-048",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Bone Ossification Processes (Endochondral vs Intramembranous)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which bones of the human skeleton develop primarily via Intramembranous Ossification (direct mineralization within mesenchymal connective tissue without a prior cartilaginous model)?",
    options: [
      "Flat bones of the skull (frontal, parietal) and parts of the clavicle and mandible",
      "Long bones of the upper and lower extremities (femur, humerus, tibia)",
      "Vertebral bodies and intervertebral arches",
      "Short bones of the carpus and tarsus"
    ],
    correctAnswer: 0,
    rationale: "Bone formation occurs by two mechanisms: 1) Endochondral Ossification (long and short bones form from a pre-existing hyaline cartilage model that is mineralized and replaced by bone), and 2) Intramembranous Ossification (flat bones of the skull, facial bones, and part of the clavicle develop directly from sheets of embryonic mesenchymal connective tissue without a cartilage intermediary).",
    optionRationales: {
      A: "Correct. Flat bones of the calvarium, face, and clavicles form directly via intramembranous ossification.",
      B: "Femur, humerus, and tibia develop through endochondral ossification using hyaline cartilage templates.",
      C: "Vertebral bodies develop via endochondral ossification.",
      D: "Carpal and tarsal bones develop via endochondral ossification."
    },
    clinicalPearl: "Unossified areas of intramembranous skull bones in the newborn form the soft spots (fontanelles), with the anterior fontanelle closing by 18 to 24 months of age.",
    tags: ["Ross-Wilson", "osteology", "intramembranous-ossification", "skull"]
  },
  {
    id: "AP-049",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Ureter Anatomy & Physiological Constrictions",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Ross & Wilson describes three sites of normal anatomical narrowing along the course of the ureter where renal calculi (kidney stones) frequently become impacted. What are these three narrow sites?",
    options: [
      "1) Ureteropelvic junction (UPJ), 2) Crossing over the external iliac vessels at the pelvic brim, and 3) Ureterovesical junction (UVJ) piercing the bladder wall",
      "1) Renal hilum, 2) Renal papillae, and 3) Medullary pyramids",
      "1) Major calyces, 2) Minor calyces, and 3) Renal cortex",
      "1) Internal urethral sphincter, 2) Membranous urethra, and 3) Navicular fossa"
    ],
    correctAnswer: 0,
    rationale: "The ureter (~25 cm long) has three physiological constrictions: 1) The Ureteropelvic Junction (UPJ) where the renal pelvis narrows into the ureter, 2) Where it crosses the iliac vessels at the pelvic brim, and 3) The Ureterovesical Junction (UVJ) where it runs obliquely through the muscular wall of the bladder. The UVJ is the narrowest point of the entire ureter.",
    optionRationales: {
      A: "Correct. UPJ, Pelvic brim (crossing iliac vessels), and UVJ (entering bladder wall).",
      B: "Renal papillae sit inside the kidney parenchyma, not along the ureter.",
      C: "Calyces are collecting structures inside the renal sinus.",
      D: "These are anatomical zones of the urethra, not the ureter."
    },
    clinicalPearl: "The Ureterovesical Junction (UVJ) is the narrowest point of the ureter. Stones larger than 5 mm often lodge here, triggering severe radiating flank-to-groin ureteric colic.",
    tags: ["Ross-Wilson", "ureter", "constrictions", "kidney-stones", "renal-colic"]
  },
  {
    id: "AP-050",
    course: "Anatomy & Physiology",
    topic: "Special Senses & Autonomic Nervous System",
    subtopic: "Pupillary Light Reflex Arc",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "When a bright penlight is shone into the right eye of a healthy client, both the right pupil (direct response) and the left pupil (consensual response) constrict simultaneously. What cranial nerves mediate the Sensory (Afferent) limb and Motor (Efferent) limb of this pupillary light reflex arc?",
    options: [
      "Afferent limb = Optic Nerve (CN II); Efferent limb = Oculomotor Nerve (CN III) via Edinger-Westphal parasympathetic nucleus",
      "Afferent limb = Ophthalmic nerve (CN V1); Efferent limb = Facial Nerve (CN VII)",
      "Afferent limb = Oculomotor Nerve (CN III); Efferent limb = Optic Nerve (CN II)",
      "Afferent limb = Abducens Nerve (CN VI); Efferent limb = Trochlear Nerve (CN IV)"
    ],
    correctAnswer: 0,
    rationale: "Light entering the retina travels along the Optic Nerve (CN II, afferent limb) to the pretectal nuclei in the midbrain. Interneurons project bilaterally to both the left and right Edinger-Westphal nuclei. Parasympathetic preganglionic fibers travel via the Oculomotor Nerve (CN III, efferent limb) to the ciliary ganglion, constricting the circular sphincter pupillae muscles in both eyes simultaneously.",
    optionRationales: {
      A: "Correct. Afferent = CN II (Optic); Efferent = CN III (Oculomotor parasympathetic fibers).",
      B: "CN V1 and CN VII mediate the corneal blink reflex, not the pupillary light reflex.",
      C: "This reverses the afferent and efferent pathways.",
      D: "CN VI and CN IV control extraocular eye movements (lateral rectus and superior oblique), not pupillary constriction."
    },
    clinicalPearl: "Shining light in one eye constricts BOTH pupils because pretectal fibers project bilaterally to both Edinger-Westphal nuclei. A fixed, dilated pupil after head trauma indicates uncal herniation compressing CN III.",
    tags: ["Ross-Wilson", "cranial-nerves", "pupillary-reflex", "CN-II", "CN-III"]
  },
  {
    id: "AP-051",
    course: "Anatomy & Physiology",
    topic: "Skeletal System & Osteology",
    subtopic: "Skull Foramina & Cranial Nerve Exits",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Which anatomical structure traverses the Foramen Ovale located in the greater wing of the sphenoid bone?",
    options: [
      "Mandibular nerve (CN V3), accessory meningeal artery, lesser petrosal nerve, and emissary veins",
      "Maxillary nerve (CN V2) and the artery of the pterygoid canal",
      "Middle meningeal artery and the recurrent meningeal nerve (nervus spinosus)",
      "Internal carotid artery and the deep petrosal nerve"
    ],
    correctAnswer: 0,
    rationale: "The Foramen Ovale in the greater wing of the sphenoid transmits: Mandibular nerve (V3), Accessory meningeal artery, Lesser petrosal nerve, and Emissary veins (mnemonic: M-A-L-E). The foramen rotundum transmits CN V2; foramen spinosum transmits the middle meningeal artery.",
    optionRationales: {
      A: "Correct. M-A-L-E: Mandibular nerve, Accessory meningeal artery, Lesser petrosal nerve, Emissary veins.",
      B: "The Maxillary nerve (V2) exits through the Foramen Rotundum.",
      C: "The middle meningeal artery traverses the Foramen Spinosum.",
      D: "The internal carotid artery traverses the Carotid Canal, not the foramen ovale."
    },
    clinicalPearl: "Sphenoid foramen mnemonic: Rotundum = V2 (Round/Two); Ovale = V3 (M-A-L-E); Spinosum = Middle meningeal artery (Spinous bleeds/epidural).",
    tags: ["Ross-Wilson", "osteology", "skull", "cranial-nerves", "foramina"]
  },
  {
    id: "AP-052",
    course: "Anatomy & Physiology",
    topic: "Musculoskeletal System",
    subtopic: "Rotator Cuff Anatomy & Insertions",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which muscle of the rotator cuff (SITS group) inserts onto the lesser tubercle of the humerus, distinguishing it from the other three muscles which insert onto the greater tubercle?",
    options: [
      "Subscapularis",
      "Supraspinatus",
      "Infraspinatus",
      "Teres minor"
    ],
    correctAnswer: 0,
    rationale: "The rotator cuff consists of Supraspinatus, Infraspinatus, Teres minor, and Subscapularis. Supraspinatus, infraspinatus, and teres minor insert onto the superior, middle, and inferior facets of the greater tubercle, respectively. The Subscapularis is the sole muscle that inserts onto the lesser tubercle of the humerus (acting as a primary internal rotator).",
    optionRationales: {
      A: "Correct. Subscapularis inserts on the lesser tubercle and mediates internal rotation.",
      B: "Supraspinatus inserts onto the superior facet of the greater tubercle.",
      C: "Infraspinatus inserts onto the middle facet of the greater tubercle.",
      D: "Teres minor inserts onto the inferior facet of the greater tubercle."
    },
    clinicalPearl: "Greater tubercle = Supraspinatus, Infraspinatus, Teres minor (S-I-T). Lesser tubercle = Subscapularis (S).",
    tags: ["Ross-Wilson", "musculoskeletal", "rotator-cuff", "humerus", "upper-limb"]
  },
  {
    id: "AP-053",
    course: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Internal Anatomy of the Heart",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The smooth-walled posterior portion of the adult right atrium (sinus venarum) is separated internally from the muscular, pectinate-ridged anterior portion by which vertical muscular ridge?",
    options: [
      "Crista terminalis",
      "Fossa ovalis",
      "Trabeculae carneae",
      "Conus arteriosus"
    ],
    correctAnswer: 0,
    rationale: "Internally, the crista terminalis is a smooth, vertical muscular ridge that demarcates the smooth-walled sinus venarum (embryological sinus venosus) from the muscular pectinate wall of the right atrium proper. Externally, this division is marked by the sulcus terminalis.",
    optionRationales: {
      A: "Correct. The crista terminalis separates the smooth sinus venarum from the pectinate muscles internally.",
      B: "The fossa ovalis is the depression in the interatrial septum marking the closed embryonic foramen ovale.",
      C: "Trabeculae carneae are muscular ridges located inside the ventricles, not the atria.",
      D: "The conus arteriosus (infundibulum) is the smooth outflow tract leading to the pulmonary trunk in the right ventricle."
    },
    clinicalPearl: "The SA node is situated subepicardially at the superior junction of the crista terminalis and the opening of the superior vena cava.",
    tags: ["Ross-Wilson", "cardiovascular", "heart-anatomy", "right-atrium", "crista-terminalis"]
  },
  {
    id: "AP-054",
    course: "Anatomy & Physiology",
    topic: "Gastrointestinal System",
    subtopic: "Peritoneal Spaces & The Foramen of Winslow",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "What anatomical structure forms the immediate anterior boundary of the Epiploic Foramen of Winslow (the entrance into the lesser sac)?",
    options: [
      "The Hepatoduodenal ligament (containing the portal triad: proper hepatic artery, portal vein, and common bile duct)",
      "The Inferior Vena Cava covered by parietal peritoneum",
      "The Caudate lobe of the liver",
      "The first part of the duodenum and horizontal hepatic artery"
    ],
    correctAnswer: 0,
    rationale: "The epiploic foramen (of Winslow) connects the greater and lesser peritoneal sacs. Its boundaries are: Anterior = Hepatoduodenal ligament containing the portal triad; Posterior = Inferior Vena Cava; Superior = Caudate lobe of the liver; Inferior = First part of the duodenum.",
    optionRationales: {
      A: "Correct. The hepatoduodenal ligament containing the portal vein, proper hepatic artery, and common bile duct forms the anterior border.",
      B: "The IVC forms the posterior boundary of the foramen of Winslow.",
      C: "The caudate lobe of the liver forms the superior boundary.",
      D: "The superior (first) part of the duodenum forms the inferior boundary."
    },
    clinicalPearl: "The Pringle maneuver compresses the hepatoduodenal ligament (anterior wall of the foramen of Winslow) to temporarily control hepatic hemorrhage.",
    tags: ["Ross-Wilson", "peritoneum", "foramen-of-winslow", "portal-triad", "abdominal-anatomy"]
  },
  {
    id: "AP-055",
    course: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Brainstem Anatomy & Cranial Nerve Emergence",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which cranial nerve is unique in being the only cranial nerve that emerges from the dorsal (posterior) aspect of the brainstem and has the longest intracranial course?",
    options: [
      "Trochlear Nerve (Cranial Nerve IV)",
      "Abducens Nerve (Cranial Nerve VI)",
      "Oculomotor Nerve (Cranial Nerve III)",
      "Trigeminal Nerve (Cranial Nerve V)"
    ],
    correctAnswer: 0,
    rationale: "Cranial Nerve IV (Trochlear) is unique among all 12 cranial nerves: it is the only one to emerge from the posterior/dorsal surface of the brainstem (just below the inferior colliculi) and completely decussates before exiting, giving it the longest intracranial pathway.",
    optionRationales: {
      A: "Correct. CN IV emerges dorsally from the midbrain and decussates internally.",
      B: "CN VI emerges anteriorly at the pontomedullary junction.",
      C: "CN III emerges anteriorly from the interpeduncular fossa of the midbrain.",
      D: "CN V emerges anterolaterally from the mid-pons."
    },
    clinicalPearl: "Because CN IV has the longest intracranial subarachnoid course, it is particularly vulnerable to vertical shear injury during closed head trauma.",
    tags: ["Ross-Wilson", "neuroanatomy", "cranial-nerves", "trochlear-nerve", "brainstem"]
  },
  {
    id: "AP-056",
    course: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Adrenal Gland Vasculature & Venous Drainage",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "What is the anatomical asymmetry in the venous drainage of the left suprarenal (adrenal) vein compared to the right suprarenal vein?",
    options: [
      "The left suprarenal vein drains into the left renal vein, whereas the right suprarenal vein drains directly into the Inferior Vena Cava",
      "Both suprarenal veins drain symmetrically directly into the inferior vena cava",
      "The right suprarenal vein drains into the right renal vein, while the left drains into the splenic vein",
      "The left suprarenal vein empties into the superior mesenteric vein"
    ],
    correctAnswer: 0,
    rationale: "Due to anatomical asymmetry, the left suprarenal vein empties into the left renal vein (often joining the inferior phrenic vein), which then travels across the aorta to reach the IVC. The short right suprarenal vein empties directly into the posterior aspect of the Inferior Vena Cava (IVC).",
    optionRationales: {
      A: "Correct. Left suprarenal vein drains to left renal vein; right suprarenal vein empties directly into the IVC.",
      B: "Venous drainage is asymmetric; only the right adrenal vein empties straight into the IVC.",
      C: "The right suprarenal vein does not drain into the right renal vein.",
      D: "Neither suprarenal vein drains into the portal-system mesenteric branches."
    },
    clinicalPearl: "The left gonadal vein and left suprarenal vein both empty into the left renal vein, while the right gonadal and right suprarenal veins drain directly into the IVC.",
    tags: ["Ross-Wilson", "endocrine", "adrenal-gland", "venous-drainage", "vascular-anatomy"]
  },
  {
    id: "AP-057",
    course: "Anatomy & Physiology",
    topic: "Reproductive System",
    subtopic: "Female Pelvic Ligaments & Ureter Relations",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In female pelvic anatomy, the ureter passes immediately inferior to which major vascular structure within the cardinal (Mackenrodt's) ligament, creating a high-risk relationship during hysterectomy?",
    options: [
      "Uterine artery ('water under the bridge')",
      "Ovarian artery within the infundibulopelvic ligament",
      "Internal pudendal artery",
      "Superior vesical artery"
    ],
    correctAnswer: 0,
    rationale: "The ureter travels retroperitoneally down the pelvis and passes directly beneath (inferior to) the uterine artery approximately 1 to 2 cm lateral to the uterine cervix within the cardinal ligament. This spatial relationship is remembered by the surgical maxim: 'Water (ureter) under the bridge (uterine artery).'",
    optionRationales: {
      A: "Correct. The ureter passes under the uterine artery ('water under the bridge').",
      B: "The ureter crosses over the external iliac vessels at the pelvic brim, near the infundibulopelvic ligament, but not within it.",
      C: "The internal pudendal artery traverses Alcock's canal in the perineum.",
      D: "Superior vesical arteries branch to the upper bladder anteriorly."
    },
    clinicalPearl: "Ligation of the uterine artery during hysterectomy carries a major risk of accidental ureteric clamping/transection if not dissected carefully.",
    tags: ["Ross-Wilson", "pelvis", "reproductive", "ureter", "surgical-anatomy"]
  },
  {
    id: "AP-058",
    course: "Anatomy & Physiology",
    topic: "Respiratory System",
    subtopic: "Bronchopulmonary Anatomy & Segmental Divisions",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "How many distinct, functionally independent bronchopulmonary segments are anatomically present in the right lung and the left lung, respectively?",
    options: [
      "10 segments in the right lung; 8 to 10 segments in the left lung",
      "5 segments in the right lung; 5 segments in the left lung",
      "12 segments in the right lung; 6 segments in the left lung",
      "3 segments in the right lung; 2 segments in the left lung"
    ],
    correctAnswer: 0,
    rationale: "The right lung has 10 bronchopulmonary segments (3 in the superior lobe, 2 in the middle lobe, 5 in the inferior lobe). The left lung typically has 8 to 10 segments (4-5 in the upper/lingular division, 4-5 in the lower lobe). Each segment has its own segmental bronchus, tertiary pulmonary artery branch, and autonomy.",
    optionRationales: {
      A: "Correct. 10 bronchopulmonary segments on the right, and 8 to 10 on the left.",
      B: "5 segments describes a single lobe, not an entire lung.",
      C: "12 and 6 do not match anatomical segmental divisions.",
      D: "3 and 2 are the number of anatomical lobes (3 right, 2 left), not bronchopulmonary segments."
    },
    clinicalPearl: "Because each bronchopulmonary segment has its own tertiary bronchus and pulmonary arterial branch, a segment can be resected surgically without collapsing adjacent segments.",
    tags: ["Ross-Wilson", "pulmonology", "bronchopulmonary-segments", "lung-anatomy"]
  },
  {
    id: "AP-059",
    course: "Anatomy & Physiology",
    topic: "Lymphatic System",
    subtopic: "Thoracic Duct Drainage Territory",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The Thoracic Duct (the largest lymphatic vessel in the body) drains lymph from the entire body EXCEPT for which anatomical territory?",
    options: [
      "Right side of the head, neck, right upper thorax, and right upper extremity",
      "The entire gastrointestinal tract and cisterna chyli",
      "Left lower extremity and left hemithorax",
      "Pelvic viscera and bilateral kidneys"
    ],
    correctAnswer: 0,
    rationale: "The Right Lymphatic Duct drains lymph from the right upper quadrant of the body: right side of the head and neck, right thorax, and right upper limb. The Thoracic Duct drains everything else—both lower limbs, abdomen, left thorax, left upper limb, and left head/neck—emptying into the left internal jugular and subclavian venous junction.",
    optionRationales: {
      A: "Correct. The right upper quadrant (right upper limb, right thorax, right head/neck) is drained by the Right Lymphatic Duct.",
      B: "The cisterna chyli and GI tract drain directly into the thoracic duct.",
      C: "The left side of the body and both lower limbs drain into the thoracic duct.",
      D: "Pelvic organs drain into iliac nodes and up through the thoracic duct."
    },
    clinicalPearl: "The thoracic duct drains ~75% of the body's lymph, originating at the cisterna chyli (L1-L2) and terminating at the left venous angle (Pirogoff's angle).",
    tags: ["Ross-Wilson", "lymphatics", "thoracic-duct", "lymph-drainage", "anatomy"]
  },
  {
    id: "AP-060",
    course: "Anatomy & Physiology",
    topic: "Urinary System",
    subtopic: "Renal Vasculature Hierarchy",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the correct sequential branching order of arterial blood vessels within the human kidney, from entry at the renal hilum down to the glomerulus?",
    options: [
      "Renal artery → Segmental arteries → Lobar arteries → Interlobar arteries → Arcuate arteries → Cortical radiate (Interlobular) arteries → Afferent arterioles",
      "Renal artery → Arcuate arteries → Segmental arteries → Interlobar arteries → Efferent arterioles",
      "Renal artery → Cortical radiate arteries → Lobar arteries → Arcuate arteries → Afferent arterioles",
      "Renal artery → Interlobar arteries → Segmental arteries → Arcuate arteries → Glomerular capillary"
    ],
    correctAnswer: 0,
    rationale: "Renal arterial tree order: Renal artery enters hilum → divides into Segmental arteries → divide into Lobar arteries → form Interlobar arteries running between pyramids → arch over the base of pyramids as Arcuate arteries → ascend into cortex as Cortical Radiate (Interlobular) arteries → branch into Afferent arterioles supplying glomeruli.",
    optionRationales: {
      A: "Correct. Renal → Segmental → Lobar → Interlobar → Arcuate → Cortical radiate (Interlobular) → Afferent arteriole.",
      B: "Arcuate arteries branch from interlobar vessels, not directly from the renal artery.",
      C: "Cortical radiate vessels are distal cortical branches, not proximal branches.",
      D: "Segmental arteries precede interlobar arteries chronologically."
    },
    clinicalPearl: "Arcuate arteries run along the boundary between the renal cortex and renal medulla, giving off vertical cortical radiate (interlobular) arteries.",
    tags: ["Ross-Wilson", "renal", "kidney-vasculature", "arcuate-artery", "arterial-branching"]
  },
  {
    id: "AP-061",
    course: "Anatomy & Physiology",
    topic: "Musculoskeletal System",
    subtopic: "Knee Joint Ligaments & Meniscal Attachments",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Why is the Medial Meniscus of the knee joint significantly more prone to tearing during traumatic rotational sports injuries than the Lateral Meniscus?",
    options: [
      "It is firmly attached along its peripheral margin to the Tibial (Medial) Collateral Ligament, restricting its mobility",
      "It completely lacks any vascular supply across both outer and inner zones",
      "It does not bear any axial compressive weight during bipedal standing",
      "It is fused directly to the tendon of the popliteus muscle"
    ],
    correctAnswer: 0,
    rationale: "The medial meniscus is 'C-shaped' and firmly anchored to the deep fibers of the Medial (Tibial) Collateral Ligament (MCL). Because it is tethered to the capsule and MCL, it cannot shift out of the way during twisting strains, making it ~20 times more vulnerable to tears than the mobile lateral meniscus (which is separated from the LCL by the popliteus tendon).",
    optionRationales: {
      A: "Correct. Firm attachment to the Medial Collateral Ligament limits its mobility, increasing susceptibility to tear.",
      B: "The peripheral outer third (red zone) of the medial meniscus is vascularized.",
      C: "The medial compartment bears ~60-70% of axial compressive joint loads.",
      D: "The popliteus tendon passes adjacent to the lateral meniscus, not the medial."
    },
    clinicalPearl: "The 'Unhappy Triad' of O'Donoghue involves simultaneous tearing of: 1) Anterior Cruciate Ligament (ACL), 2) Medial Collateral Ligament (MCL), and 3) Medial Meniscus.",
    tags: ["Ross-Wilson", "musculoskeletal", "knee", "meniscus", "ligaments"]
  },
  {
    id: "AP-062",
    course: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Brachial Plexus Organization & Cord Derivatives",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Which major terminal peripheral nerve of the upper limb arises as the direct continuation of the Posterior Cord of the brachial plexus and carries nerve fibers from spinal roots C5 through T1?",
    options: [
      "Radial Nerve",
      "Musculocutaneous Nerve",
      "Median Nerve",
      "Ulnar Nerve"
    ],
    correctAnswer: 0,
    rationale: "The Posterior Cord of the brachial plexus is formed by the union of all three posterior divisions (C5-T1). It terminates into two branches: the smaller Axillary nerve (C5-C6) and the large Radial nerve (C5-T1), which innervates all extensor muscles of the arm and forearm.",
    optionRationales: {
      A: "Correct. The Radial nerve is the primary continuation of the Posterior Cord (C5-T1).",
      B: "Musculocutaneous nerve originates from the Lateral Cord (C5-C7).",
      C: "Median nerve is formed by contributions from both Lateral (C5-C7) and Medial (C8-T1) cords.",
      D: "Ulnar nerve is the primary continuation of the Medial Cord (C8-T1)."
    },
    clinicalPearl: "The Radial nerve innervates the triceps, brachioradialis, and wrist extensors (BEST: Brachioradialis, Extensors, Suppinator, Triceps). Injury produces wrist drop.",
    tags: ["Ross-Wilson", "neuroanatomy", "brachial-plexus", "radial-nerve", "upper-limb"]
  },
  {
    id: "AP-063",
    course: "Anatomy & Physiology",
    topic: "Gastrointestinal System",
    subtopic: "Peritoneal Ligaments & Anatomy of the Liver",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The round ligament of the liver (Ligamentum Teres Hepatis), located within the free edge of the falciform ligament, represents the fibrous embryological remnant of which fetal vascular structure?",
    options: [
      "Left umbilical vein",
      "Ductus venosus",
      "Ductus arteriosus",
      "Right vitelline artery"
    ],
    correctAnswer: 0,
    rationale: "The Ligamentum Teres Hepatis (round ligament of the liver) is the obliterated fibrous remnant of the left umbilical vein, which carried oxygenated blood from the placenta to the fetal liver. The Ductus Venosus obliterates to become the Ligamentum Venosum.",
    optionRationales: {
      A: "Correct. Left umbilical vein obliterates into the Ligamentum Teres Hepatis.",
      B: "The Ductus Venosus obliterates into the Ligamentum Venosum.",
      C: "The Ductus Arteriosus obliterates into the Ligamentum Arteriosum.",
      D: "Vitelline vessels form portal mesenteric branches, not the round ligament."
    },
    clinicalPearl: "In severe portal hypertension, the obliterated umbilical vein within the ligamentum teres can recanalize, producing caput medusae around the umbilicus.",
    tags: ["Ross-Wilson", "liver", "embryology", "ligamentum-teres", "fetal-circulation"]
  },
  {
    id: "AP-064",
    course: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Pancreatic Islet Cell Microarchitecture",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Within the Islets of Langerhans, which specific peptide hormone is synthesized and secreted by the Delta (delta) cells to exert a local paracrine inhibitory action on both insulin and glucagon secretion?",
    options: [
      "Somatostatin",
      "Pancreatic Polypeptide",
      "Ghrelin",
      "Amylin"
    ],
    correctAnswer: 0,
    rationale: "Delta (D or delta) cells make up ~5-10% of islet cells and secrete Somatostatin (SS-14). Somatostatin acts locally via paracrine mechanisms to inhibit both adjacent alpha-cells (blocking glucagon) and beta-cells (blocking insulin), as well as suppressing GI motility and exocrine secretion.",
    optionRationales: {
      A: "Correct. Somatostatin is produced by delta cells and inhibits insulin, glucagon, and growth hormone.",
      B: "Pancreatic polypeptide is produced by F (gamma/PP) cells of the islet.",
      C: "Ghrelin is produced primarily by gastric fundal P/D1 cells and epsilon islet cells.",
      D: "Amylin (IAPP) is co-secreted with insulin by beta cells."
    },
    clinicalPearl: "Somatostatin is a universal endocrine/paracrine inhibitor: it inhibits insulin, glucagon, gastrin, secretin, VIP, and pituitary Growth Hormone.",
    tags: ["Ross-Wilson", "endocrine", "pancreas", "somatostatin", "delta-cells"]
  },
  {
    id: "AP-065",
    course: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Arterial Supply to the Conduction System",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In approximately 85–90% of the human population (right-dominant coronary circulation), which coronary artery gives rise to the Posterior Descending Artery (PDA) and supplies blood to the Atrioventricular (AV) Node?",
    options: [
      "Right Coronary Artery (RCA)",
      "Left Anterior Descending Artery (LAD)",
      "Left Circumflex Artery (LCx)",
      "Left Main Coronary Artery"
    ],
    correctAnswer: 0,
    rationale: "Coronary dominance is determined by which vessel gives origin to the Posterior Descending (interventricular) Artery (PDA). In right-dominant individuals (~85-90%), the PDA and the AV nodal artery arise from the distal crux of the Right Coronary Artery (RCA). In left-dominant individuals (~10%), they arise from the Left Circumflex Artery (LCx).",
    optionRationales: {
      A: "Correct. In right-dominant hearts, the RCA supplies the PDA and the AV node.",
      B: "LAD supplies the anterior two-thirds of the interventricular septum and apex, not the inferior PDA.",
      C: "LCx gives rise to the PDA in left-dominant circulations (~10-15%).",
      D: "Left Main bifurcates into LAD and LCx; it does not directly supply the posterior crux."
    },
    clinicalPearl: "Inferior wall myocardial infarctions (RCA occlusion) are frequently accompanied by AV nodal conduction blocks and profound bradycardia.",
    tags: ["Ross-Wilson", "cardiology", "coronary-anatomy", "RCA", "AV-node"]
  },
  {
    id: "AP-066",
    course: "Anatomy & Physiology",
    topic: "Integumentary System & Histology",
    subtopic: "Epidermal Strata Layers",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "From deep to superficial, what is the correct histological order of the epidermal layers found in thick skin (such as the palms and soles)?",
    options: [
      "Stratum basale → Stratum spinosum → Stratum granulosum → Stratum lucidum → Stratum corneum",
      "Stratum corneum → Stratum lucidum → Stratum granulosum → Stratum spinosum → Stratum basale",
      "Stratum basale → Stratum lucidum → Stratum spinosum → Stratum granulosum → Stratum corneum",
      "Stratum granulosum → Stratum basale → Stratum spinosum → Stratum corneum → Stratum lucidum"
    ],
    correctAnswer: 0,
    rationale: "From deep to superficial: Stratum Basale (germinativum, mitotic cells) → Stratum Spinosum (desmosomal spines) → Stratum Granulosum (keratohyalin granules) → Stratum Lucidum (clear, dead layer present only in thick skin) → Stratum Corneum (anucleate keratinized squames). Mnemonic from deep to superficial: 'Big Swans Grow Loud Calls' or superficial to deep: 'Come, Let's Get Sun Burned'.",
    optionRationales: {
      A: "Correct. Basale → Spinosum → Granulosum → Lucidum → Corneum (deep to superficial).",
      B: "This is the superficial to deep direction, not deep to superficial.",
      C: "Lucidum sits between granulosum and corneum, not above basale.",
      D: "Incorrect architectural arrangement of histological strata."
    },
    clinicalPearl: "Stratum lucidum is present ONLY in thick skin (palms and soles) and is absent in thin skin.",
    tags: ["Ross-Wilson", "integumentary", "skin", "epidermis", "histology"]
  },
  {
    id: "AP-067",
    course: "Anatomy & Physiology",
    topic: "Special Senses",
    subtopic: "Middle Ear Anatomy & Ossicular Chain",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the mechanical transmission of sound wave vibrations from the tympanic membrane to the fluid-filled inner ear, which auditory ossicle has its base (footplate) seated within the Oval Window (Fenestra Vestibuli)?",
    options: [
      "Stapes",
      "Malleus",
      "Incus",
      "Tensor tympani"
    ],
    correctAnswer: 0,
    rationale: "The three auditory ossicles are the Malleus (hammer), Incus (anvil), and Stapes (stirrup). The handle of the malleus attaches to the tympanic membrane; the incus articulates intermediate between the two; the footplate of the stapes attaches to the oval window, vibrating to generate fluid waves in the perilymph of the scala vestibuli.",
    optionRationales: {
      A: "Correct. The footplate of the stapes sits in the oval window.",
      B: "Malleus attaches to the tympanic membrane.",
      C: "Incus articulates between the malleus and stapes.",
      D: "Tensor tympani is a muscle innervated by CN V3 that dampens loud sound vibrations, not a bone."
    },
    clinicalPearl: "Otosclerosis involves abnormal bone remodeling that fixes the footplate of the stapes to the oval window, producing progressive conductive hearing loss.",
    tags: ["Ross-Wilson", "special-senses", "ear", "auditory-ossicles", "stapes"]
  },
  {
    id: "AP-068",
    course: "Anatomy & Physiology",
    topic: "Urinary System",
    subtopic: "Histology of the Glomerular Filtration Barrier",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "What are the three structural layers that constitute the selective Glomerular Filtration Barrier in the renal corpuscle, preventing the passage of plasma albumin and erythrocytes into the urinary space?",
    options: [
      "Fenestrated capillary endothelium, Negatively-charged glomerular basement membrane, and Podocyte foot processes (pedicels) with slit diaphragms",
      "Continuous capillary endothelium, Macula densa, and Parietal epithelial layer of Bowman capsule",
      "Mesangial matrix, Juxtaglomerular cells, and Intercalated cells",
      "Simple columnar ciliated epithelium, Lamina propria, and Muscularis mucosae"
    ],
    correctAnswer: 0,
    rationale: "The glomerular filtration barrier has three layers: 1) Fenestrated endothelial cells (pores 70-100 nm, stopping cells), 2) Glomerular Basement Membrane (GBM rich in heparan sulfate proteoglycans providing charge-selective repulsion of negative albumin), and 3) Visceral epithelial podocytes with interdigitating foot processes bridged by slit diaphragms containing nephrin (stopping molecules >4 nm).",
    optionRationales: {
      A: "Correct. Fenestrated endothelium + Negatively charged GBM + Podocyte slit diaphragms.",
      B: "Glomerular capillaries are fenestrated, not continuous; macula densa is in the distal tubule.",
      C: "Mesangial cells provide support, but do not form the primary trilaminar filtration sieve.",
      D: "This describes GI tract mucosal histology, not the renal glomerulus."
    },
    clinicalPearl: "In Minimal Change Disease, immune cytokines efface podocyte foot processes, destroying negative charge selectivity and causing massive selective proteinuria.",
    tags: ["Ross-Wilson", "renal", "glomerulus", "podocytes", "filtration-barrier"]
  },
  {
    id: "AP-069",
    course: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Basal Ganglia Anatomy & Direct Pathway",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Within the motor loop of the basal ganglia, activation of the 'Direct Pathway' facilitates voluntary movement through which sequential series of projections?",
    options: [
      "Cerebral cortex excites Striatum (Caudate/Putamen) → Striatum inhibits Globus Pallidus Internus (GPi) and Substantia Nigra pars reticulata (SNr) → Thalamus is disinhibited/released to stimulate Motor Cortex",
      "Cortex stimulates Subthalamic Nucleus → Subthalamic Nucleus excites Globus Pallidus Internus → Thalamus is shut down completely",
      "Striatum directly stimulates the spinal cord anterior horn cells without cortical involvement",
      "Substantia Nigra pars compacta destroys the Thalamus to initiate tremor"
    ],
    correctAnswer: 0,
    rationale: "The Direct Pathway promotes movement: Cortical glutamatergic excitation stimulates striatal GABAergic neurons bearing D1 receptors. These striatal neurons project directly to and inhibit the internal segment of the Globus Pallidus (GPi) and SNr. Because the GPi/SNr usually tonically inhibits the thalamus, inhibiting them DISINHIBITS (releases) the thalamus, allowing it to send excitatory signals back to the motor cortex.",
    optionRationales: {
      A: "Correct. Cortex excites Striatum → Striatum inhibits GPi/SNr → Thalamus is disinhibited to fire back to cortex.",
      B: "This describes the Indirect Pathway, which inhibits movement via the subthalamic nucleus.",
      C: "The basal ganglia modulate motor cortex; they do not project directly down the spinal cord to anterior horns.",
      D: "Substantia nigra pars compacta releases dopamine to modulate striatal pathways, not destroy the thalamus."
    },
    clinicalPearl: "Direct pathway = Disinhibits/Drive movement (Go). Indirect pathway = Inhibits movement (No-Go). Loss of dopaminergic input (Parkinson's) stalls the Go pathway.",
    tags: ["Ross-Wilson", "neuroanatomy", "basal-ganglia", "motor-pathways", "striatum"]
  },
  {
    id: "AP-070",
    course: "Anatomy & Physiology",
    topic: "Gastrointestinal System",
    subtopic: "Hepatic Microarchitecture (Liver Lobule vs Acinus)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In Rappaport's functional hepatic acinus model, why is Zone 3 (the centrilobular / perivenular zone surrounding the central vein) the most vulnerable to ischemic necrosis during severe systemic shock?",
    options: [
      "It is located furthest from the incoming oxygen-rich hepatic arterioles, receiving blood that has already exchanged oxygen across Zones 1 and 2",
      "It completely lacks any sinusoidal capillaries or endothelial fenestrations",
      "It receives pure deoxygenated arterial blood under high pressure",
      "It contains the highest concentration of protective phase II detoxifying enzymes"
    ],
    correctAnswer: 0,
    rationale: "In the hepatic acinus, Zone 1 (periportal) sits closest to the portal triad, receiving blood with the highest oxygen and nutrient tension. Zone 3 (perivenular, around the central vein) sits at the terminal end of the sinusoidal circulation, receiving the lowest oxygen levels. During shock or hypoperfusion, Zone 3 is the first to become ischemic, leading to Centrilobular Necrosis ('nutmeg liver').",
    optionRationales: {
      A: "Correct. Zone 3 sits at the distal, deoxygenated end of the hepatic microcirculation, making it susceptible to ischemic necrosis.",
      B: "Zone 3 is rich in sinusoids that coalesce directly into the central vein.",
      C: "Arterial blood is oxygenated, not deoxygenated; hepatic blood is a mixture of portal and arterial flows.",
      D: "Zone 3 contains abundant CYP450 enzymes (making it vulnerable to toxic metabolites like acetaminophen), but lower protective antioxidants like glutathione than Zone 1."
    },
    clinicalPearl: "Centrilobular necrosis: Zone 3 is most sensitive to ischemia/shock and acetaminophen toxicity (high CYP450, lowest baseline oxygen).",
    tags: ["Ross-Wilson", "liver", "hepatic-acinus", "zone-3", "centrilobular-necrosis"]
  },
  {
    id: "AP-071",
    course: "Anatomy & Physiology",
    topic: "Musculoskeletal System",
    subtopic: "Femoral Triangle Boundaries & Contents",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the correct anatomical arrangement of structures passing through the Femoral Triangle, ordered from Lateral to Medial?",
    options: [
      "Femoral Nerve → Femoral Artery → Femoral Vein → Femoral Canal / Deep inguinal lymph nodes (NAVeL)",
      "Femoral Vein → Femoral Artery → Femoral Nerve → Lymphatics",
      "Femoral Canal → Femoral Vein → Femoral Artery → Femoral Nerve",
      "Femoral Artery → Femoral Nerve → Femoral Vein → Inguinal ligament"
    ],
    correctAnswer: 0,
    rationale: "From lateral to medial, the contents of the femoral triangle follow the classic mnemonic NAVeL: Nerve (Femoral nerve), Artery (Femoral artery), Vein (Femoral vein), empty space/Canal (Femoral canal), Lymphatics (deep inguinal nodes). The femoral sheath covers the artery, vein, and canal, but the Femoral Nerve lies OUTSIDE the sheath.",
    optionRationales: {
      A: "Correct. Lateral to Medial: Nerve, Artery, Vein, empty space, Lymphatics (NAVeL).",
      B: "This orders the structures from medial to lateral, not lateral to medial.",
      C: "This places the medial femoral canal on the lateral side.",
      D: "The inguinal ligament forms the superior boundary, not an internal content."
    },
    clinicalPearl: "Remember: NAVeL (lateral to medial). To perform an emergency femoral venipuncture, palpate the femoral arterial pulse and puncture immediately MEDIAL to it.",
    tags: ["Ross-Wilson", "femoral-triangle", "lower-limb", "NAVeL", "topographical-anatomy"]
  },
  {
    id: "AP-072",
    course: "Anatomy & Physiology",
    topic: "Respiratory System",
    subtopic: "Laryngeal Cartilages & Muscle Innervation",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "All intrinsic muscles of the larynx are innervated by the Recurrent Laryngeal Nerve (a branch of CN X), EXCEPT for which muscle that is innervated by the External Branch of the Superior Laryngeal Nerve?",
    options: [
      "Cricothyroid muscle",
      "Posterior cricoarytenoid muscle",
      "Lateral cricoarytenoid muscle",
      "Thyroarytenoid muscle"
    ],
    correctAnswer: 0,
    rationale: "All intrinsic laryngeal muscles are supplied by the recurrent laryngeal nerve EXCEPT the Cricothyroid muscle, which is innervated by the external branch of the superior laryngeal nerve. The cricothyroid tilts the thyroid cartilage forward to tense the vocal cords, raising vocal pitch.",
    optionRationales: {
      A: "Correct. Cricothyroid is supplied by the External Branch of the Superior Laryngeal Nerve.",
      B: "Posterior cricoarytenoid (the sole abductor of vocal cords) is innervated by the recurrent laryngeal nerve.",
      C: "Lateral cricoarytenoid (vocal adductor) is innervated by the recurrent laryngeal nerve.",
      D: "Thyroarytenoid (relaxes vocal cords) is innervated by the recurrent laryngeal nerve."
    },
    clinicalPearl: "Posterior Cricoarytenoids PULL cords apart (the ONLY vocal cord abductors). Cricothyroid tenses cords (innervated by Superior Laryngeal). All others = Recurrent Laryngeal.",
    tags: ["Ross-Wilson", "larynx", "vocal-cords", "recurrent-laryngeal-nerve", "cricothyroid"]
  },
  {
    id: "AP-073",
    course: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Fetal Circulation Shunts & Postnatal Remnants",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the fetal circulation, what is the physiological function of the Ductus Venosus, and what fibrous structure does it become after birth?",
    options: [
      "It shunts oxygenated umbilical venous blood past the fetal liver directly into the Inferior Vena Cava; it becomes the Ligamentum Venosum",
      "It shunts deoxygenated blood from the pulmonary trunk into the descending aorta; it becomes the Ligamentum Arteriosum",
      "It shunts blood from the right atrium to the left atrium; it becomes the Fossa Ovalis",
      "It connects the umbilical arteries to the portal vein; it becomes the Urachus"
    ],
    correctAnswer: 0,
    rationale: "The ductus venosus shunts ~50% of oxygen-rich blood returning from the placenta via the umbilical vein directly around the capillary bed of the fetal liver into the Inferior Vena Cava (IVC), speeding its delivery to the fetal heart and brain. Postnatally, it closes and fibroses into the Ligamentum Venosum.",
    optionRationales: {
      A: "Correct. Ductus venosus shunts around the fetal liver into the IVC; its anatomical remnant is the Ligamentum Venosum.",
      B: "This describes the Ductus Arteriosus, which becomes the Ligamentum Arteriosum.",
      C: "This describes the Foramen Ovale, which becomes the Fossa Ovalis.",
      D: "The urachus is the fibrous remnant of the fetal allantois, which connected the fetal bladder to the umbilicus."
    },
    clinicalPearl: "Three fetal shunts: 1) Ductus venosus (bypasses liver → ligamentum venosum), 2) Foramen ovale (bypasses lungs → fossa ovalis), 3) Ductus arteriosus (bypasses lungs → ligamentum arteriosum).",
    tags: ["Ross-Wilson", "embryology", "fetal-circulation", "ductus-venosus", "pediatrics"]
  },
  {
    id: "AP-074",
    course: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Renal Calcium Excretion & Calcitonin",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Calcitonin, a 32-amino acid peptide hormone that opposes the actions of parathyroid hormone by inhibiting osteoclasts, is synthesized and secreted by which specific endocrine cell type?",
    options: [
      "Parafollicular C-cells of the thyroid gland",
      "Follicular epithelial cells of the thyroid gland",
      "Chief cells of the parathyroid gland",
      "Oxyphil cells of the parathyroid gland"
    ],
    correctAnswer: 0,
    rationale: "Calcitonin is produced by the Parafollicular cells (also known as C-cells) of the thyroid gland, which are derived embryologically from the neural crest (ultimopharyngeal body). It is secreted in response to hypercalcemia to inhibit osteoclastic bone resorption and promote renal calcium excretion.",
    optionRationales: {
      A: "Correct. Parafollicular (C) cells of the thyroid gland produce Calcitonin.",
      B: "Thyroid follicular cells produce thyroxine (T4) and triiodothyronine (T3).",
      C: "Parathyroid chief cells synthesize and secrete Parathyroid Hormone (PTH).",
      D: "Oxyphil cells are non-secretory, mitochondrial-rich cells of the parathyroid gland."
    },
    clinicalPearl: "Medullary Thyroid Carcinoma is a malignancy arising from Parafollicular C-cells that secretes high levels of Calcitonin, used as a tumor marker.",
    tags: ["Ross-Wilson", "endocrine", "calcitonin", "parafollicular-cells", "thyroid"]
  },
  {
    id: "AP-075",
    course: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Visual Pathway & Retinal Projections",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A pituitary macroadenoma that expands superiorly compresses the central decussation of the Optic Chiasm. What classic visual field defect is produced by this focal compression?",
    options: [
      "Bitemporal Hemianopsia",
      "Homonymous Hemianopsia of the left visual field",
      "Right monocular blindness",
      "Binasal Hemianopsia"
    ],
    correctAnswer: 0,
    rationale: "At the optic chiasm, nerve fibers originating from the nasal hemiretinas (which receive light from the temporal visual fields) decussate to the contralateral side. Lateral pituitary compression of the center of the chiasm selectively severs these crossing nasal fibers, producing loss of vision in both temporal fields: Bitemporal Hemianopsia (tunnel vision).",
    optionRationales: {
      A: "Correct. Compression of the crossing fibers from the nasal hemiretinas at the chiasm causes Bitemporal Hemianopsia.",
      B: "Homonymous hemianopsia results from lesions of the post-chiasmatic optic tract or optic radiation.",
      C: "Monocular blindness results from complete transection of an ipsilateral optic nerve anterior to the chiasm.",
      D: "Binasal hemianopsia is caused by bilateral lateral compression of the non-crossing temporal retinal fibers (e.g., calcified internal carotid arteries)."
    },
    clinicalPearl: "Lesion at optic nerve = Monocular blindness. Lesion at optic chiasm = Bitemporal hemianopsia. Lesion at optic tract = Contralateral homonymous hemianopsia.",
    tags: ["Ross-Wilson", "neuroanatomy", "optic-chiasm", "visual-pathway", "hemianopsia"]
  },
  {
    id: "AP-076",
    course: "Anatomy & Physiology",
    topic: "Gastrointestinal System",
    subtopic: "Anatomy of the Biliary Tree & Sphincters",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The union of the Common Bile Duct and the Main Pancreatic Duct (Duct of Wirsung) forms an expanded chamber known as the Ampulla of Vater. Into which specific part of the gastrointestinal tract does this ampulla open through the Major Duodenal Papilla?",
    options: [
      "Second (Descending) part of the Duodenum",
      "First (Superior) part of the Duodenum",
      "Third (Horizontal) part of the Duodenum",
      "Proximal Jejunum"
    ],
    correctAnswer: 0,
    rationale: "The hepatopancreatic ampulla (Ampulla of Vater) is formed by the union of the common bile duct and main pancreatic duct. It penetrates the posteromedial wall of the Second (descending) part of the Duodenum at the major duodenal papilla, where secretion is regulated by the smooth muscular Sphincter of Oddi.",
    optionRationales: {
      A: "Correct. The major duodenal papilla enters the medial wall of the descending (second) duodenum.",
      B: "The first part (duodenal cap) is intraperitoneal and does not receive biliary ducts.",
      C: "The third part crosses horizontally over the IVC and aorta, below the biliary entrance.",
      D: "The jejunum begins distal to the ligament of Treitz."
    },
    clinicalPearl: "Endoscopic Retrograde Cholangiopancreatography (ERCP) visualizes the biliary tree by cannulating the major duodenal papilla in the 2nd part of the duodenum.",
    tags: ["Ross-Wilson", "gastrointestinal", "duodenum", "biliary-tree", "ampulla-of-vater"]
  },
  {
    id: "AP-077",
    course: "Anatomy & Physiology",
    topic: "Musculoskeletal System",
    subtopic: "Vertebral Column Characteristics",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which unique anatomical feature distinguishes the seven Cervical Vertebrae (C1–C7) from all thoracic and lumbar vertebrae?",
    options: [
      "Presence of a Foramen Transversarium in each transverse process for the transmission of the vertebral artery and vein",
      "Large, kidney-shaped vertebral bodies designed for heavy weight-bearing",
      "Costal facets on the transverse processes that articulate with ribs",
      "Heart-shaped vertebral bodies and long, downward-sloping spinous processes"
    ],
    correctAnswer: 0,
    rationale: "Cervical vertebrae are distinguished by the presence of a Foramen Transversarium (transverse foramen) within each transverse process. Through these foramina (from C6 up to C1), the vertebral arteries ascend into the cranial cavity to form the basilar artery. Thoracic vertebrae have costal facets; lumbar vertebrae have large, kidney-shaped bodies.",
    optionRationales: {
      A: "Correct. The foramen transversarium in the transverse processes is unique to cervical vertebrae.",
      B: "Kidney-shaped heavy bodies are characteristic of Lumbar vertebrae.",
      C: "Costal facets for rib articulations are characteristic of Thoracic vertebrae.",
      D: "Heart-shaped bodies and long spinous processes are hallmarks of Thoracic vertebrae."
    },
    clinicalPearl: "The vertebral artery ascends through the transverse foramina of C6 through C1, skipping C7 (which transmits only the vertebral vein).",
    tags: ["Ross-Wilson", "osteology", "cervical-spine", "vertebrae", "vertebral-artery"]
  },
  {
    id: "AP-078",
    course: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Layers of Blood Vessels & Internal Elastic Lamina",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the histological architecture of a muscular artery, which layer contains the greatest concentration of smooth muscle cells responsive to autonomic norepinephrine and sympathetic vasoconstriction?",
    options: [
      "Tunica Media",
      "Tunica Intima",
      "Tunica Adventitia (Externa)",
      "Internal Elastic Lamina"
    ],
    correctAnswer: 0,
    rationale: "Blood vessels feature three tunics: Tunica Intima (endothelium and subendothelial connective tissue), Tunica Media (concentric layers of smooth muscle and elastic fibers), and Tunica Adventitia (outer collagenous support containing the vasa vasorum). The Tunica Media is the muscular layer responsible for vasoconstriction and vasodilation.",
    optionRationales: {
      A: "Correct. The tunica media contains the circumferential smooth muscle fibers that regulate vascular caliber.",
      B: "Tunica intima consists of a single layer of endothelial cells and internal elastic lamina.",
      C: "Tunica adventitia consists of fibrous connective tissue anchoring the vessel to surrounding structures.",
      D: "The internal elastic lamina is a fenestrated sheet of elastin separating the intima from the media."
    },
    clinicalPearl: "Atherosclerosis begins as endothelial injury in the tunica intima, whereas Monckeberg arteriosclerosis involves calcification of the tunica media.",
    tags: ["Ross-Wilson", "histology", "cardiovascular", "tunica-media", "vascular-smooth-muscle"]
  },
  {
    id: "AP-079",
    course: "Anatomy & Physiology",
    topic: "Special Senses",
    subtopic: "Retinal Photoreceptor Distribution & Fovea Centralis",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why does the Fovea Centralis (located in the center of the macula lutea) represent the retinal zone of highest visual acuity in the human eye?",
    options: [
      "It contains an exclusive, dense concentration of Cones with 1:1 bipolar and ganglion cell connections, with overlying neural layers displaced laterally",
      "It is packed with millions of Rod photoreceptors designed for scotopic night vision",
      "It marks the anatomical exit point where retinal ganglion axons form the optic nerve",
      "It is completely covered by thick pigmented blood vessels that absorb scattered light"
    ],
    correctAnswer: 0,
    rationale: "The fovea centralis provides maximal visual acuity because: 1) It contains exclusively cone photoreceptors (no rods) packed tightly together, 2) Overlying retinal layers (ganglion and bipolar cells) are shifted laterally to let light strike cones directly without scattering, and 3) There is minimal convergence (a 1:1 ratio of cone to bipolar to ganglion cell).",
    optionRationales: {
      A: "Correct. High density of cones, displaced inner retinal layers, and 1:1 wiring provide maximal spatial resolution.",
      B: "Rods are absent in the central fovea; rods predominate in the peripheral retina for low-light night vision.",
      C: "The exit of the optic nerve is the Optic Disc, which contains no photoreceptors and is the physiological 'Blind Spot'.",
      D: "The foveal avascular zone is completely free of blood vessels to minimize light distortion."
    },
    clinicalPearl: "The Fovea Centralis has only cones and no blood vessels (foveal avascular zone). The Optic Disc has no photoreceptors, creating the natural blind spot.",
    tags: ["Ross-Wilson", "special-senses", "eye", "retina", "fovea-centralis", "cones"]
  },
  {
    id: "AP-080",
    course: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Meningeal Coverings & Spaces",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During a lumbar puncture, the spinal needle traverses anatomical layers to enter the subarachnoid space to sample cerebrospinal fluid. Which is the final ligamentous barrier pierced immediately before entering the epidural space?",
    options: [
      "Ligamentum Flavum",
      "Supraspinous Ligament",
      "Interspinous Ligament",
      "Posterior Longitudinal Ligament"
    ],
    correctAnswer: 0,
    rationale: "The sequential structures pierced during midline lumbar puncture from superficial to deep: 1) Skin, 2) Subcutaneous tissue, 3) Supraspinous ligament, 4) Interspinous ligament, 5) Ligamentum flavum (gives an audible/tactile 'pop' entering the epidural space), 6) Dura mater, and 7) Arachnoid mater into the Subarachnoid space.",
    optionRationales: {
      A: "Correct. The Ligamentum Flavum ('yellow ligament') is the last ligament pierced to enter the epidural space.",
      B: "The supraspinous ligament is superficial, connecting the tips of spinous processes.",
      C: "The interspinous ligament is intermediate between spinous processes.",
      D: "The posterior longitudinal ligament lines the anterior wall of the vertebral canal, behind the vertebral bodies."
    },
    clinicalPearl: "Lumbar puncture layers: Skin → Subcutaneous → Supraspinous → Interspinous → Ligamentum Flavum → Epidural Space → Dura → Arachnoid → Subarachnoid Space.",
    tags: ["Ross-Wilson", "neuroanatomy", "lumbar-puncture", "meninges", "ligamentum-flavum"]
  },
  {
    id: "AP-081",
    course: "Anatomy & Physiology",
    topic: "Reproductive System",
    subtopic: "Male Reproductive Anatomy & Spermatic Cord Contents",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which anatomical structure is NOT a component traveling inside the spermatic cord within the male inguinal canal?",
    options: [
      "Deep circumflex iliac artery",
      "Ductus (Vas) Deferens",
      "Pampiniform venous plexus",
      "Testicular artery (branch of the abdominal aorta)"
    ],
    correctAnswer: 0,
    rationale: "The contents of the spermatic cord include: 3 Arteries (Testicular, Artery to vas deferens, Cremasteric), 3 Nerves (Genital branch of genitofemoral, Ilioinguinal outside/on cord, sympathetic fibers), and 3 Other structures (Vas deferens, Pampiniform venous plexus, Lymphatics/vestige of processus vaginalis). The deep circumflex iliac artery is a branch of the external iliac artery in the lower abdominal wall and does NOT enter the cord.",
    optionRationales: {
      A: "Correct. The deep circumflex iliac artery travels along the iliac crest, outside the spermatic cord.",
      B: "The vas deferens is the primary duct running inside the cord.",
      C: "The pampiniform venous plexus surrounds the testicular artery inside the cord.",
      D: "The testicular artery arises from the aorta at L2 and travels down the cord to supply the testis."
    },
    clinicalPearl: "Pampiniform plexus: A network of veins in the spermatic cord that wraps around the testicular artery, acting as a countercurrent heat exchanger to keep testes 2-3°C cooler than core body temp.",
    tags: ["Ross-Wilson", "reproductive", "male-anatomy", "spermatic-cord", "inguinal-canal"]
  },
  {
    id: "AP-082",
    course: "Anatomy & Physiology",
    topic: "Respiratory System",
    subtopic: "Mechanics of Respiration & Primary Inspiratory Muscle",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary muscle responsible for approximately 75% of quiet, resting inspiratory volume, and what is its specific somatic motor nerve supply?",
    options: [
      "Diaphragm; Phrenic Nerve (C3, C4, C5)",
      "External intercostal muscles; Thoracic intercostal nerves (T1–T11)",
      "Sternocleidomastoid; Spinal Accessory Nerve (CN XI)",
      "Scalene muscles; Cervical plexus (C1–C2)"
    ],
    correctAnswer: 0,
    rationale: "The Diaphragm is the primary muscle of inspiration, accounting for 75% of air movement during eupnea (quiet breathing). It is innervated exclusively by the Phrenic Nerve, which arises from cervical spinal roots C3, C4, and C5 ('C3, 4, 5 keeps the diaphragm alive').",
    optionRationales: {
      A: "Correct. The Diaphragm innervated by the Phrenic nerve (C3-C5) is the primary engine of inspiration.",
      B: "External intercostals are secondary muscles of quiet inspiration accounting for ~25% of chest expansion.",
      C: "Sternocleidomastoid is an accessory muscle recruited during strenuous exercise or respiratory distress.",
      D: "Scalenes are accessory inspiratory muscles, not the primary quiet inspiratory driver."
    },
    clinicalPearl: "Spinal cord injury above C3 results in complete diaphragmatic paralysis, requiring immediate mechanical ventilation.",
    tags: ["Ross-Wilson", "respiratory", "diaphragm", "phrenic-nerve", "mechanics"]
  },
  {
    id: "AP-083",
    course: "Anatomy & Physiology",
    topic: "Gastrointestinal System",
    subtopic: "Histology of the Stomach: Cell Types & Products",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Chief (zymogenic) cells, located predominantly in the base of the gastric glands of the stomach fundus, secrete which inactive proenzyme?",
    options: [
      "Pepsinogen",
      "Intrinsic Factor",
      "Hydrochloric Acid",
      "Gastrin"
    ],
    correctAnswer: 0,
    rationale: "Gastric Chief cells synthesize and secrete Pepsinogen, an inactive proenzyme. In the presence of luminal hydrochloric acid (pH < 2), pepsinogen cleaves its own inhibitory peptide to become active Pepsin, an endopeptidase that digests proteins into peptides.",
    optionRationales: {
      A: "Correct. Chief cells produce pepsinogen (and gastric lipase).",
      B: "Intrinsic factor is synthesized and secreted by Parietal (oxyntic) cells.",
      C: "Hydrochloric acid is pumped out by Parietal cells via H+/K+ ATPase.",
      D: "Gastrin is secreted by enteroendocrine G cells in the gastric antrum."
    },
    clinicalPearl: "Parietal cells secrete Acid and Intrinsic Factor (P-A-I). Chief cells secrete Pepsinogen (C-P).",
    tags: ["Ross-Wilson", "gastrointestinal", "chief-cells", "pepsinogen", "histology"]
  },
  {
    id: "AP-084",
    course: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Pituitary Gland Embryological Origins",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Embryologically, how do the anterior pituitary (adenohypophysis) and posterior pituitary (neurohypophysis) differ in their tissue origins?",
    options: [
      "Anterior pituitary derives from an upward evagination of oral ectoderm (Rathke's pouch); Posterior pituitary derives from a downward growth of neuroectoderm from the diencephalon",
      "Both lobes derive entirely from mesodermal somites",
      "Anterior pituitary derives from neuroectoderm; Posterior pituitary derives from endodermal foregut",
      "Both lobes arise from neural crest cells originating from the first pharyngeal arch"
    ],
    correctAnswer: 0,
    rationale: "The Anterior Pituitary (adenohypophysis) arises from Rathke's pouch, an ectodermal diverticulum of the stomodeum (primitive oral cavity). The Posterior Pituitary (neurohypophysis) develops as a downward extension of neuroectoderm from the base of the diencephalon (hypothalamus).",
    optionRationales: {
      A: "Correct. Anterior = Oral ectoderm (Rathke's pouch); Posterior = Neuroectoderm (diencephalon/hypothalamus).",
      B: "The pituitary is of ectodermal origin, not mesodermal.",
      C: "This reverses the tissue lineages.",
      D: "Pharyngeal arches form facial/neck structures; the pituitary forms from roof ectoderm and neural floor tissue."
    },
    clinicalPearl: "Craniopharyngiomas are benign childhood intracranial tumors that arise from remnants of Rathke's pouch, calcifying and compressing the optic chiasm.",
    tags: ["Ross-Wilson", "embryology", "pituitary-gland", "Rathke-pouch", "neurohypophysis"]
  },
  {
    id: "AP-085",
    course: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Venous Drainage of the Myocardium",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Where does the Coronary Sinus (which receives venous drainage from the great, middle, and small cardiac veins) directly empty its deoxygenated blood?",
    options: [
      "Right Atrium",
      "Superior Vena Cava",
      "Left Atrium",
      "Pulmonary Artery"
    ],
    correctAnswer: 0,
    rationale: "The Coronary Sinus is a wide venous channel situated in the posterior atrioventricular groove. It collects venous return from almost the entire myocardium and empties directly into the postero-inferior wall of the Right Atrium, between the orifice of the IVC and the tricuspid orifice.",
    optionRationales: {
      A: "Correct. The coronary sinus empties directly into the Right Atrium.",
      B: "The superior vena cava receives systemic blood from the upper body, not the coronary sinus directly.",
      C: "Emptying into the left atrium would create a deoxygenated right-to-left shunt.",
      D: "Pulmonary arteries receive blood from the right ventricle, not coronary veins."
    },
    clinicalPearl: "The right atrium receives three venous inflows: 1) Superior Vena Cava, 2) Inferior Vena Cava, and 3) Coronary Sinus.",
    tags: ["Ross-Wilson", "cardiology", "coronary-sinus", "right-atrium", "venous-return"]
  },
  {
    id: "AP-086",
    course: "Anatomy & Physiology",
    topic: "Musculoskeletal System",
    subtopic: "Carpal Tunnel Anatomy & Contents",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which nerve and how many flexor tendons pass through the restricted fibro-osseous space of the Carpal Tunnel beneath the Flexor Retinaculum?",
    options: [
      "Median Nerve and 9 flexor tendons (4 FDS, 4 FDP, 1 FPL)",
      "Ulnar Nerve and 10 extensor tendons",
      "Radial Nerve and 8 flexor tendons",
      "Musculocutaneous Nerve and 6 digital tendons"
    ],
    correctAnswer: 0,
    rationale: "The carpal tunnel contains exactly 10 structures: 1 Nerve = Median Nerve; 9 Tendons = 4 tendons of Flexor Digitorum Superficialis (FDS), 4 tendons of Flexor Digitorum Profundus (FDP), and 1 tendon of Flexor Pollicis Longus (FPL). The Ulnar nerve travels OUTSIDE the carpal tunnel in Guyon's canal.",
    optionRationales: {
      A: "Correct. Median nerve + 9 tendons (4 FDS + 4 FDP + 1 FPL).",
      B: "Ulnar nerve and artery pass superficial to the retinaculum through Guyon's canal.",
      C: "Radial nerve does not pass through the anterior carpal tunnel.",
      D: "Musculocutaneous nerve terminates as the lateral cutaneous nerve of the forearm, far above the wrist."
    },
    clinicalPearl: "Carpal Tunnel Syndrome compresses the Median Nerve, causing paresthesias in the thumb, index, middle, and radial half of the ring finger, sparing the palm (supplied by the superficial palmar branch which crosses over the retinaculum).",
    tags: ["Ross-Wilson", "carpal-tunnel", "median-nerve", "wrist-anatomy", "tendons"]
  },
  {
    id: "AP-087",
    course: "Anatomy & Physiology",
    topic: "Lymphatic System",
    subtopic: "Spleen Microanatomy: Red Pulp vs White Pulp",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the histological architecture of the spleen, what is the distinct physiological specialization of the Red Pulp compared to the White Pulp?",
    options: [
      "Red pulp filters blood, removes aged/damaged erythrocytes, and recycles iron; White pulp contains lymphoid follicles (PALS and germinal centers) that mount immune responses",
      "Red pulp synthesizes digestive enzymes; White pulp filters lymph from the lower extremities",
      "Red pulp stores bone marrow stem cells; White pulp secretes erythropoietin directly into bile",
      "Red pulp produces albumin; White pulp filters cerebrospinal fluid"
    ],
    correctAnswer: 0,
    rationale: "The spleen consists of two functional compartments: 1) Red Pulp (cords of Billroth and venous sinusoids) filters blood mechanically, stores platelets, and allows macrophages to phagocytose senescent, stiff red blood cells; 2) White Pulp consists of lymphoid aggregates (Periarteriolar Lymphoid Sheaths [PALS] with T-cells and follicles with B-cells) that mount immune responses against blood-borne antigens.",
    optionRationales: {
      A: "Correct. Red pulp = Erythrocyte filtering and iron recycling; White pulp = Immune response to blood-borne antigens.",
      B: "The spleen has no digestive role and has no afferent lymphatic vessels (it filters blood, not lymph).",
      C: "Erythropoietin is made in the kidneys, not the spleen.",
      D: "Albumin is synthesized by the liver, not the red pulp."
    },
    clinicalPearl: "Post-splenectomy patients lose splenic macrophages and opsonizing antibodies from the white pulp, putting them at life-threatening risk for encapsulated bacterial infections (S. pneumoniae, N. meningitidis, H. influenzae).",
    tags: ["Ross-Wilson", "spleen", "histology", "red-pulp", "white-pulp", "macrophages"]
  },
  {
    id: "AP-088",
    course: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Cranial Nerve Functions: Gag Reflex Arc",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "During clinical evaluation of the pharyngeal Gag Reflex, what cranial nerves mediate the Sensory (Afferent) limb and Motor (Efferent) limb of the reflex arc, respectively?",
    options: [
      "Afferent limb = Glossopharyngeal Nerve (CN IX); Efferent limb = Vagus Nerve (CN X)",
      "Afferent limb = Trigeminal Nerve (CN V); Efferent limb = Facial Nerve (CN VII)",
      "Afferent limb = Vagus Nerve (CN X); Efferent limb = Hypoglossal Nerve (CN XII)",
      "Afferent limb = Olfactory Nerve (CN I); Efferent limb = Accessory Nerve (CN XI)"
    ],
    correctAnswer: 0,
    rationale: "The gag reflex is triggered by touching the posterior pharyngeal wall. The sensory afferent signal is carried via the Glossopharyngeal nerve (CN IX) to the nucleus ambiguus in the medulla. The motor efferent response (contraction of pharyngeal constrictors and elevation of the soft palate) is carried via the Vagus nerve (CN X).",
    optionRationales: {
      A: "Correct. Sensory (Afferent) = CN IX; Motor (Efferent) = CN X.",
      B: "CN V afferent and CN VII efferent mediate the Corneal Blink Reflex.",
      C: "CN XII innervates the tongue musculature, but does not drive pharyngeal gag constrictions.",
      D: "CN I is smell; CN XI innervates sternocleidomastoid and trapezius."
    },
    clinicalPearl: "Gag reflex: CN IX senses the stimulus (Afferent); CN X lifts the palate and constricts the throat (Efferent).",
    tags: ["Ross-Wilson", "neuroanatomy", "gag-reflex", "cranial-nerves", "CN-IX", "CN-X"]
  },
  {
    id: "AP-089",
    course: "Anatomy & Physiology",
    topic: "Urinary System",
    subtopic: "Anatomy of the Male Urethra Subdivisions",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "From the bladder neck to the external urethral meatus, what are the four anatomical segments of the male urethra in correct sequential order?",
    options: [
      "Pre-prostatic (intramural) → Prostatic → Membranous → Spongy (Penile)",
      "Prostatic → Membranous → Pre-prostatic → Spongy",
      "Membranous → Prostatic → Spongy → Bulbar",
      "Spongy → Membranous → Prostatic → Trigonal"
    ],
    correctAnswer: 0,
    rationale: "The male urethra (~20 cm long) is divided sequentially into four sections: 1) Pre-prostatic urethra (intramural, through bladder neck surrounded by internal sphincter), 2) Prostatic urethra (traversing the prostate, receiving ejaculatory ducts), 3) Membranous urethra (shortest, narrowest, passing through the urogenital diaphragm and external sphincter), and 4) Spongy (penile) urethra (longest, traveling through corpus spongiosum to the external meatus).",
    optionRationales: {
      A: "Correct. Pre-prostatic → Prostatic → Membranous → Spongy (penile).",
      B: "Pre-prostatic sits above the prostate, not after it.",
      C: "Prostatic precedes the membranous urethra.",
      D: "Reverses proximal and distal anatomical relationships."
    },
    clinicalPearl: "The membranous urethra is the narrowest and least distensible portion, making it most vulnerable to rupture during pelvic fractures.",
    tags: ["Ross-Wilson", "urology", "male-urethra", "prostate", "anatomy"]
  },
  {
    id: "AP-090",
    course: "Anatomy & Physiology",
    topic: "Gastrointestinal System",
    subtopic: "Blood Supply: Celiac Trunk Branches",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The Celiac Trunk (the arterial vessel of the embryonic foregut) emerges from the abdominal aorta at the T12 level and immediately bifurcates into which three primary classic branches?",
    options: [
      "Left Gastric Artery, Splenic Artery, and Common Hepatic Artery",
      "Superior Mesenteric Artery, Renal Artery, and Inferior Mesenteric Artery",
      "Gastroduodenal Artery, Right Gastric Artery, and Cystic Artery",
      "Left Gastroepiploic Artery, Short Gastric Arteries, and Proper Hepatic Artery"
    ],
    correctAnswer: 0,
    rationale: "The celiac trunk branches into: 1) Left Gastric Artery (runs along lesser curvature of stomach), 2) Splenic Artery (tortuous course along upper border of pancreas to spleen), and 3) Common Hepatic Artery (branches into gastroduodenal and proper hepatic arteries).",
    optionRationales: {
      A: "Correct. Celiac trunk divides into: Left Gastric, Splenic, and Common Hepatic arteries.",
      B: "SMA, renal, and IMA are separate aortic branches arising lower down the aorta.",
      C: "These are secondary branches arising from the common hepatic and proper hepatic arteries.",
      D: "These are distal branches of the splenic and common hepatic vessels."
    },
    clinicalPearl: "The Splenic artery runs along the superior border of the pancreas. Erosion of a posterior gastric ulcer through the posterior stomach wall can erode the splenic artery, causing massive gastrointestinal hemorrhage.",
    tags: ["Ross-Wilson", "vascular", "celiac-trunk", "gastrointestinal", "arterial-anatomy"]
  },
  {
    id: "AP-091",
    course: "Anatomy & Physiology",
    topic: "Cellular Biology & Histology",
    subtopic: "Intercellular Junctions (Desmosomes vs Tight Junctions)",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Which type of intercellular junction forms a continuous belt-like seal near the apical surface of epithelial cells (such as intestinal enterocytes and the blood-brain barrier), restricting paracellular diffusion of solutes and maintaining cellular polarity?",
    options: [
      "Tight Junctions (Zonula Occludens)",
      "Adherens Junctions (Zonula Adherens)",
      "Desmosomes (Macula Adherens)",
      "Gap Junctions (Nexus)"
    ],
    correctAnswer: 0,
    rationale: "Tight junctions (Zonula Occludens) are composed of transmembrane proteins (claudins, occludins) that form a branching network sealing adjacent epithelial cell membranes together near the apical surface. They act as barriers that regulate the paracellular passage of water, ions, and solutes, and serve as 'fences' that prevent apical membrane proteins from diffusing into basolateral domains.",
    optionRationales: {
      A: "Correct. Tight junctions (Zonula occludens) form the apical paracellular barrier.",
      B: "Adherens junctions anchor actin filaments between cells via cadherins; they do not form a paracellular fluid seal.",
      C: "Desmosomes connect intermediate filaments (keratin) to provide mechanical shear strength.",
      D: "Gap junctions are composed of connexons that allow direct electrical and metabolic communication between adjacent cells."
    },
    clinicalPearl: "The Blood-Brain Barrier owes its high electrical resistance and impermeability to extensive networks of tight junctions (zonula occludens) between cerebral endothelial cells.",
    tags: ["Ross-Wilson", "histology", "tight-junctions", "cell-biology", "zonula-occludens"]
  },
  {
    id: "AP-092",
    course: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Adrenal Medulla & Chromaffin Cells",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Embryologically and physiologically, the chromaffin cells of the Adrenal Medulla are modified versions of which component of the autonomic nervous system?",
    options: [
      "Postganglionic sympathetic neurons that release catecholamines directly into the bloodstream instead of a synaptic cleft",
      "Preganglionic parasympathetic neurons originating from the sacral plexus",
      "Sensory dorsal root ganglion pseudounipolar neurons",
      "Peripheral Schwann cells that have lost their myelin sheaths"
    ],
    correctAnswer: 0,
    rationale: "The adrenal medulla is functionally a modified sympathetic ganglion. Chromaffin cells derive from neural crest cells and act as modified postganglionic sympathetic neurons that have lost their axons and dendrites. When stimulated by acetylcholine from preganglionic sympathetic fibers, they secrete catecholamines (80% epinephrine, 20% norepinephrine) directly into the bloodstream as hormones.",
    optionRationales: {
      A: "Correct. Chromaffin cells are modified postganglionic sympathetic neurons specialized for endocrine secretion.",
      B: "Adrenal medullary secretion is driven by the sympathetic division, not the parasympathetic.",
      C: "Dorsal root ganglia are afferent sensory neurons, not autonomic neuroendocrine secretors.",
      D: "Schwann cells myelinate peripheral nerves; they do not synthesize or secrete catecholamines."
    },
    clinicalPearl: "Pheochromocytoma is a tumor of adrenal chromaffin cells that secretes excessive catecholamines, producing episodic hypertension, pounding headaches, and diaphoresis.",
    tags: ["Ross-Wilson", "endocrine", "adrenal-medulla", "chromaffin-cells", "catecholamines"]
  },
  {
    id: "AP-093",
    course: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Aortic Arch Branching Patterns",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under the standard anatomical arrangement of the human Aortic Arch, what are the three major arterial trunks that emerge from its superior convexity, in order from proximal (right) to distal (left)?",
    options: [
      "Brachiocephalic (Innominate) Artery → Left Common Carotid Artery → Left Subclavian Artery",
      "Right Common Carotid Artery → Right Subclavian Artery → Left Common Carotid Artery",
      "Left Subclavian Artery → Left Common Carotid Artery → Brachiocephalic Artery",
      "Coronary Artery → Pulmonary Trunk → Vertebral Artery"
    ],
    correctAnswer: 0,
    rationale: "From right to left (proximal to distal), the aortic arch gives off three branches: 1) Brachiocephalic trunk (which branches into the right common carotid and right subclavian arteries), 2) Left Common Carotid artery, and 3) Left Subclavian artery.",
    optionRationales: {
      A: "Correct. Brachiocephalic trunk, Left Common Carotid, and Left Subclavian artery.",
      B: "The right common carotid and right subclavian arise from the brachiocephalic trunk, not directly from the aortic arch.",
      C: "This reverses the sequence from left to right.",
      D: "Coronary arteries arise from the ascending aorta; the pulmonary trunk arises from the right ventricle."
    },
    clinicalPearl: "The left common carotid and left subclavian branch directly from the aorta, whereas the right common carotid and right subclavian share a common origin off the brachiocephalic trunk.",
    tags: ["Ross-Wilson", "cardiovascular", "aortic-arch", "arterial-branches", "thoracic-anatomy"]
  },
  {
    id: "AP-094",
    course: "Anatomy & Physiology",
    topic: "Musculoskeletal System",
    subtopic: "Anatomical Snuffbox Boundaries & Content",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "The 'Anatomical Snuffbox' is a triangular depression visible on the posterolateral aspect of the wrist. What tendon forms its medial (ulnar) boundary, and which bone forms the floor where tenderness indicates a fracture?",
    options: [
      "Medial boundary = Extensor Pollicis Longus (EPL) tendon; Floor = Scaphoid bone",
      "Medial boundary = Abductor Pollicis Longus (APL) tendon; Floor = Pisiform bone",
      "Medial boundary = Flexor Carpi Radialis tendon; Floor = Hamate bone",
      "Medial boundary = Extensor Digitorum tendon; Floor = Lunate bone"
    ],
    correctAnswer: 0,
    rationale: "Boundaries of the Anatomical Snuffbox: Medial (ulnar) boundary = Tendon of Extensor Pollicis Longus (EPL); Lateral (radial) boundary = Tendons of Abductor Pollicis Longus (APL) and Extensor Pollicis Brevis (EPB). The floor is formed by the Scaphoid and Trapezium bones, crossed by the Radial Artery.",
    optionRationales: {
      A: "Correct. Medial border = Extensor Pollicis Longus; Floor = Scaphoid bone.",
      B: "APL forms the lateral border, not the medial; pisiform is on the ulnar side of the palm.",
      C: "Flexor carpi radialis is on the volar (anterior) wrist.",
      D: "Extensor digitorum runs down the center of the dorsum of the hand."
    },
    clinicalPearl: "Point tenderness in the anatomical snuffbox after a fall onto an outstretched hand (FOOSH) is a classic indicator of a scaphoid fracture, which carries a high risk of avascular necrosis due to retrograde blood supply.",
    tags: ["Ross-Wilson", "upper-limb", "anatomical-snuffbox", "scaphoid", "radial-artery"]
  },
  {
    id: "AP-095",
    course: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Cerebellar Functional Zones & Deep Nuclei",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "From lateral to medial, what is the anatomical sequence of the four pairs of Deep Cerebellar Nuclei embedded within the white matter of the cerebellum?",
    options: [
      "Dentate, Emboliform, Globose, and Fastigial (mnemonic: Don't Eat Greasy Food)",
      "Fastigial, Globose, Emboliform, and Dentate",
      "Caudate, Putamen, Globus Pallidus, and Subthalamic",
      "Red Nucleus, Substantia Nigra, Olive, and Gracile"
    ],
    correctAnswer: 0,
    rationale: "From lateral to medial, the deep cerebellar nuclei are: Dentate (largest, lateral hemisphere), Emboliform, Globose (emboliform and globose together form the interposed nucleus), and Fastigial (medial, in the vermis). A classic mnemonic is 'Don't Eat Greasy Food' (Dentate, Emboliform, Globose, Fastigial).",
    optionRationales: {
      A: "Correct. Lateral to Medial: Dentate → Emboliform → Globose → Fastigial.",
      B: "This orders the nuclei from medial to lateral.",
      C: "These are basal ganglia nuclei of the cerebrum, not the cerebellum.",
      D: "These are brainstem nuclei, not deep cerebellar roof nuclei."
    },
    clinicalPearl: "The Dentate nucleus is the largest and coordinates planned fine-motor extremities movements via projections to the contralateral thalamus and motor cortex.",
    tags: ["Ross-Wilson", "neuroanatomy", "cerebellum", "deep-nuclei", "dentate-nucleus"]
  },
  {
    id: "AP-096",
    course: "Anatomy & Physiology",
    topic: "Reproductive System",
    subtopic: "Spermatogenesis & Blood-Testis Barrier",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which specialized somatic cells inside the seminiferous tubules form tight junctions with each other to establish the physiological Blood-Testis Barrier, shielding developing haploid sperm from autoimmune destruction?",
    options: [
      "Sertoli cells (Sustentacular cells)",
      "Leydig cells (Interstitial cells)",
      "Myoid peritubular cells",
      "Spermatogonia type A"
    ],
    correctAnswer: 0,
    rationale: "Sertoli cells (sustentacular cells) span from the basement membrane to the lumen of seminiferous tubules. Adjacent Sertoli cells form tight junctions that divide the tubule into basal and adluminal compartments, creating the Blood-Testis Barrier. This protects developing post-meiotic germ cells (which express novel antigens) from circulating antibodies and T-lymphocytes.",
    optionRationales: {
      A: "Correct. Sertoli cells form tight junctions that create the Blood-Testis Barrier and nourish developing sperm.",
      B: "Leydig cells reside in the interstitial space outside tubules and synthesize testosterone.",
      C: "Myoid cells provide weak contractile peristalsis to move sperm along tubules.",
      D: "Spermatogonia are diploid germ stem cells, not barrier-forming cells."
    },
    clinicalPearl: "Disruption of the blood-testis barrier (e.g., via testicular trauma, mumps orchitis, or vasectomy) exposes sperm antigens to the immune system, generating anti-sperm antibodies.",
    tags: ["Ross-Wilson", "reproductive", "Sertoli-cells", "blood-testis-barrier", "spermatogenesis"]
  },
  {
    id: "AP-097",
    course: "Anatomy & Physiology",
    topic: "Respiratory System",
    subtopic: "Pleural Cavity Recesses",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the name of the clinically important potential space located at the lowest, most inferior junction of the costal and diaphragmatic pleurae, where pleural fluid gravity-accumulates and blunts the angle on an erect chest radiograph?",
    options: [
      "Costodiaphragmatic Recess",
      "Costomediastinal Recess",
      "Cupula of the pleura",
      "Phrenicopericardial Sinus"
    ],
    correctAnswer: 0,
    rationale: "The costodiaphragmatic recess is the slit-like potential space between the costal and diaphragmatic parietal pleurae along the lateral and posterior base of the thorax. In an upright posture, gravity causes pleural effusions to collect here first, blunting the sharp costophrenic angle on a chest X-ray.",
    optionRationales: {
      A: "Correct. The costodiaphragmatic recess is the lowest dependent pleural gutter where fluid accumulates.",
      B: "The costomediastinal recess lies anteriorly behind the sternum, between costal and mediastinal pleurae.",
      C: "The cupula (cervical pleura) is the apex of the pleura extending into the neck above the 1st rib.",
      D: "Phrenicopericardial sinus is not an anatomical pleural recess."
    },
    clinicalPearl: "Thoracentesis for pleural effusion is typically performed at the 8th or 9th intercostal space in the midaxillary line during expiration to access the costodiaphragmatic recess without injuring the lung.",
    tags: ["Ross-Wilson", "pleura", "costodiaphragmatic-recess", "thoracentesis", "chest-xray"]
  },
  {
    id: "AP-098",
    course: "Anatomy & Physiology",
    topic: "Gastrointestinal System",
    subtopic: "Appendiceal Surface Anatomy: McBurney's Point",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Where is McBurney's Point anatomically located on the anterior abdominal wall?",
    options: [
      "One-third of the distance from the right anterior superior iliac spine (ASIS) to the umbilicus",
      "Directly over the midline pubic symphysis",
      "Midway between the xiphoid process and the umbilicus",
      "Two inches superior to the left anterior superior iliac spine"
    ],
    correctAnswer: 0,
    rationale: "McBurney's point lies one-third of the distance along an imaginary line drawn from the Right Anterior Superior Iliac Spine (ASIS) to the Umbilicus. It corresponds to the anatomical base of the vermiform appendix where it attaches to the cecum, exhibiting maximal tenderness in acute appendicitis.",
    optionRationales: {
      A: "Correct. One-third of the distance from the right ASIS to the umbilicus defines McBurney's point.",
      B: "The pubic symphysis is midline inferior, overlying the urinary bladder.",
      C: "Midway between xiphoid and umbilicus corresponds to the stomach/epigastric zone.",
      D: "McBurney's point is exclusively on the RIGHT side of the abdominal wall."
    },
    clinicalPearl: "Tenderness at McBurney's point indicates localized somatic peritoneal inflammation overlying the base of an inflamed appendix.",
    tags: ["Ross-Wilson", "gastrointestinal", "appendix", "McBurney-point", "surface-anatomy"]
  },
  {
    id: "AP-099",
    course: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Hepatic Portal System vs Systemic Venous Anastomoses",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Which anatomical anastomosis between portal and systemic venous circulations is responsible for the development of life-threatening Esophageal Varices in clients with severe Portal Hypertension?",
    options: [
      "Anastomosis between the Left Gastric Vein (portal) and the Azygos / Hemiazygos Veins (systemic)",
      "Anastomosis between the Superior Rectal Vein and Middle Rectal Vein",
      "Anastomosis between the Paraumbilical Veins and Superficial Epigastric Veins",
      "Anastomosis between the Splenic Vein and Left Renal Vein"
    ],
    correctAnswer: 0,
    rationale: "Portosystemic anastomoses occur at three key sites: 1) Gastroesophageal junction: Left gastric vein (portal) anastomoses with esophageal tributaries of the azygos vein (systemic) → dilates into Esophageal Varices; 2) Rectum: Superior rectal (portal) anastomoses with middle/inferior rectal (systemic) → Hemorrhoids; 3) Umbilicus: Paraumbilical veins (portal) anastomose with epigastric veins (systemic) → Caput Medusae.",
    optionRationales: {
      A: "Correct. Left gastric vein (portal) joins the esophageal branches of the azygos vein (systemic), producing esophageal varices.",
      B: "Superior to middle/inferior rectal venous anastomosis causes anorectal varices / hemorrhoids.",
      C: "Paraumbilical to superficial epigastric venous anastomosis produces Caput Medusae.",
      D: "Splenorenal shunting is a surgical decompression or retroperitoneal variant, not the cause of upper esophageal variceal hemorrhage."
    },
    clinicalPearl: "Esophageal varices occur at the portosystemic anastomosis between the Left Gastric vein (portal) and the Azygos system (caval). Rupture causes massive hematemesis.",
    tags: ["Ross-Wilson", "portal-hypertension", "portosystemic-anastomosis", "esophageal-varices", "venous-anatomy"]
  },
  {
    id: "AP-100",
    course: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Internal Capsule Topography",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "A stroke involving the Posterior Limb of the Internal Capsule causes dense contralateral hemiparesis and hemisensory loss. Which descending motor pathway traverses this specific posterior limb?",
    options: [
      "Corticospinal (pyramidal) tract",
      "Frontopontine fibers",
      "Auditory radiation fibers",
      "Anterior thalamic radiation"
    ],
    correctAnswer: 0,
    rationale: "The internal capsule is a compact V-shaped band of fibers. The Posterior Limb carries the descending Corticospinal (pyramidal) tract (motor fibers for arm, trunk, and leg) and ascending third-order sensory fibers from the thalamus to the primary somatosensory cortex. Lesions here cause complete contralateral hemiplegia and hemisensory loss.",
    optionRationales: {
      A: "Correct. The corticospinal tract and somatosensory thalamocortical radiations traverse the posterior limb.",
      B: "Frontopontine fibers traverse the anterior limb of the internal capsule.",
      C: "Auditory radiations pass through the sublenticular part of the internal capsule.",
      D: "Anterior thalamic radiations travel through the anterior limb."
    },
    clinicalPearl: "Because motor fibers are packed tightly in the Posterior Limb of the Internal Capsule, even a tiny lacunar stroke here can paralyze the entire opposite side of the body.",
    tags: ["Ross-Wilson", "neuroanatomy", "internal-capsule", "corticospinal-tract", "stroke"]
  },
  {
    id: "AP-101",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Cardiac Fibrous Skeleton Functions",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the primary electrical function of the dense cardiac fibrous skeleton that surrounds the four heart valves?",
    options: [
      "It acts as an electrical insulator between atria and ventricles, forcing impulses to pass solely through the AV bundle",
      "It generates spontaneous phase 4 diastolic action potentials to pace the heart",
      "It allows electrical impulses to diffuse freely and randomly across the myocardium",
      "It stores calcium ions during ventricular diastole"
    ],
    correctAnswer: 0,
    rationale: "The cardiac fibrous skeleton consists of four dense collagenous rings (annuli fibrosi) and trigones. Structurally, it anchors valve cusps; electrically, it acts as an absolute non-conductive insulator separating the atrial and ventricular syncytia, ensuring that the Atrioventricular (AV) Bundle of His is the only physiological electrical pathway conducting impulses from atria to ventricles.",
    optionRationales: {
      A: "Correct. The fibrous skeleton insulates the ventricles from atria, channeling conduction through the AV bundle.",
      B: "Pacemaker depolarization is generated by specialized nodal myocytes, not fibrous collagen rings.",
      C: "Free random electrical diffusion would cause chaotic fibrillation instead of coordinated pumping.",
      D: "Calcium storage is the role of the sarcoplasmic reticulum, not collagenous fibrous rings."
    },
    clinicalPearl: "An accessory conduction pathway that bypasses the insulating fibrous skeleton (Bundle of Kent) causes Wolff-Parkinson-White (WPW) pre-excitation syndrome.",
    tags: ["Ross-Wilson", "cardiovascular", "fibrous-skeleton", "electrophysiology"]
  },
  {
    id: "AP-102",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Nasal Cavity Conchae (Turbinates)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary physiological function of the three pairs of scroll-like nasal conchae (turbinates) projecting from the lateral walls of the nasal cavity?",
    options: [
      "Increasing surface area and creating turbulent airflow to warm, humidify, and filter inspired air",
      "Housing the parathyroid hormone receptors for systemic calcium regulation",
      "Directly exchanging carbon dioxide with the external atmosphere",
      "Generating high-frequency sound resonance for human speech articulation"
    ],
    correctAnswer: 0,
    rationale: "The superior, middle, and inferior conchae project into the nasal cavity, subdividing it into meatuses. Covered by pseudostratified ciliated columnar epithelium with a rich venous plexus, they create turbulent airflow, maximizing contact with inspired air to warm it to body temperature, humidify it to 100%, and trap particulates in mucus.",
    optionRationales: {
      A: "Correct. Turbinates increase surface area and air turbulence to warm, humidify, and filter air.",
      B: "Parathyroid hormone receptors are located in bone and kidney, not nasal conchae.",
      C: "Gas exchange occurs across alveolar-capillary membranes, never in the nasal cavity.",
      D: "Speech articulation is mediated by the vocal cords, tongue, palate, and lips, with sinuses providing resonance."
    },
    clinicalPearl: "The extensive venous plexus covering the inferior and middle conchae swells alternatingly every few hours (the nasal cycle), periodically resting each side from airflow dehydration.",
    tags: ["Ross-Wilson", "respiratory", "nasal-conchae", "turbinates", "conditioning"]
  },
  {
    id: "AP-103",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Stomach Curvatures and Omenta Attachments",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which two-layered peritoneal fold connects the lesser curvature of the stomach and the proximal duodenum to the inferior surface of the liver?",
    options: [
      "Lesser Omentum (Hepatogastric and Hepatoduodenal ligaments)",
      "Greater Omentum",
      "Mesoappendix",
      "Transverse Mesocolon"
    ],
    correctAnswer: 0,
    rationale: "The Lesser Omentum is a continuous peritoneal sheet extending from the lesser curvature of the stomach and first part of the duodenum to the porta hepatis of the liver. It is divided anatomically into the thin Hepatogastric ligament and the thicker, free-edged Hepatoduodenal ligament (which carries the portal triad).",
    optionRationales: {
      A: "Correct. The Lesser Omentum connects the stomach's lesser curvature to the liver.",
      B: "The Greater Omentum hangs down like an apron from the greater curvature over the small intestines.",
      C: "The mesoappendix suspends the appendix from the mesentery of the ileum.",
      D: "The transverse mesocolon suspends the transverse colon from the posterior abdominal wall."
    },
    clinicalPearl: "The right free margin of the lesser omentum (hepatoduodenal ligament) houses the Portal Triad and forms the anterior boundary of the foramen of Winslow.",
    tags: ["Ross-Wilson", "lesser-omentum", "stomach", "peritoneum", "anatomy"]
  },
  {
    id: "AP-104",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "White Matter vs Gray Matter Organization",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In cross-sections of the human central nervous system, what cellular components predominantly give Gray Matter and White Matter their characteristic appearances?",
    options: [
      "Gray matter contains neuronal cell bodies, dendrites, and unmyelinated synapses; White matter contains myelinated nerve axon tracts",
      "Gray matter contains only connective tissue; White matter contains only blood vessels",
      "Gray matter is composed exclusively of cerebrospinal fluid; White matter is solid bone",
      "Gray matter contains dead neurons; White matter contains proliferating stem cells"
    ],
    correctAnswer: 0,
    rationale: "Gray matter consists of neuronal somas (cell bodies), dendrites, initial unmyelinated axon segments, synaptic neuropil, and glial cells, which give it a gray-pink hue. White matter consists of bundles of lipid-rich, myelinated nerve axons organized into ascending and descending tracts, giving it a bright white appearance.",
    optionRationales: {
      A: "Correct. Gray = Cell bodies and dendrites; White = Myelinated axonal tracts.",
      B: "Connective tissue is minimal inside brain parenchyma; myelin lipids give white matter its color.",
      C: "CSF is a clear liquid found inside ventricles and the subarachnoid space.",
      D: "Both gray and white matter consist of living, active neural tissue."
    },
    clinicalPearl: "In the brain, gray matter forms the outer cortex and deep subcortical nuclei, while white matter lies deep. In the spinal cord, this arrangement is reversed: white matter is peripheral and gray matter forms an inner butterfly shape.",
    tags: ["Ross-Wilson", "neuroanatomy", "gray-matter", "white-matter", "histology"]
  },
  {
    id: "AP-105",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Types of Bone Cells: Mechanotransduction",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which mature bone cells, trapped within tiny lacunae and interconnected by dendritic processes through canaliculi, act as the primary mechanosensory cells of the skeletal system?",
    options: [
      "Osteocytes",
      "Osteoclasts",
      "Osteoprogenitor cells",
      "Chondroblasts"
    ],
    correctAnswer: 0,
    rationale: "Osteocytes represent >90% of all cells in mature bone. They are osteoblasts that have become entombed within their own calcified mineral matrix inside lacunae. Their long dendritic processes travel through microscopic canaliculi, contacting adjacent osteocytes via gap junctions to sense mechanical strain, fluid flow, and microcracks, signaling osteoblasts and osteoclasts to remodel bone.",
    optionRationales: {
      A: "Correct. Osteocytes sense mechanical stress and coordinate bone remodeling signals.",
      B: "Osteoclasts are multinucleated macrophage-lineage cells that resorb bone.",
      C: "Osteoprogenitor cells are mesenchymal stem cells that differentiate into osteoblasts.",
      D: "Chondroblasts synthesize cartilage, not mature bone matrix."
    },
    clinicalPearl: "Osteocyte apoptosis triggered by estrogen withdrawal or disuse accelerates osteoclast activation, promoting postmenopausal and immobility-induced osteoporosis.",
    tags: ["Ross-Wilson", "osteology", "osteocytes", "canaliculi", "bone-biology"]
  },
  {
    id: "AP-106",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "Pineal Gland & Melatonin Secretion",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "The Pineal Gland, attached to the roof of the third ventricle in the epithalamus, synthesizes and secretes which hormone in response to darkness to regulate the circadian sleep-wake cycle?",
    options: [
      "Melatonin",
      "Melanin",
      "Serotonin",
      "Dopamine"
    ],
    correctAnswer: 0,
    rationale: "The pineal gland secretes Melatonin (derived from tryptophan and serotonin) in response to darkness. Photic signals detected by retinal ganglion cells travel along the retinohypothalamic tract to the suprachiasmatic nucleus (SCN). In darkness, sympathetic postganglionic signaling triggers pinealocytes to release melatonin, promoting sleepiness.",
    optionRationales: {
      A: "Correct. Melatonin is secreted by the pineal gland during darkness to regulate circadian rhythms.",
      B: "Melanin is a dark pigment synthesized by epidermal melanocytes to protect against UV radiation.",
      C: "Serotonin is the biochemical precursor to melatonin, not the primary pineal circadian hormone released.",
      D: "Dopamine is a catecholaminergic neurotransmitter."
    },
    clinicalPearl: "Blue light from smartphone and laptop screens suppresses pineal melatonin secretion, disrupting sleep onset.",
    tags: ["Ross-Wilson", "endocrine", "pineal-gland", "melatonin", "circadian-rhythm"]
  },
  {
    id: "AP-107",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Anatomy of the Renal Medulla & Pyramids",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the anatomical name for the apex of each triangular Renal Pyramid that projects into a minor calyx to deliver newly formed urine?",
    options: [
      "Renal Papilla",
      "Renal Column (of Bertin)",
      "Renal Sinus",
      "Renal Pelvis"
    ],
    correctAnswer: 0,
    rationale: "The renal medulla is divided into 8 to 18 conical Renal Pyramids. The base of each pyramid faces the cortex, while its pointed apex is called the Renal Papilla. The papilla is perforated by the ducts of Bellini (cribriform area) and projects directly into a cuplike Minor Calyx, emptying urine into the collecting system.",
    optionRationales: {
      A: "Correct. The renal papilla is the apex of the renal pyramid emptying into a minor calyx.",
      B: "Renal columns (of Bertin) are cortical tissue extensions that descend between adjacent pyramids.",
      C: "The renal sinus is the fat-filled internal cavity containing calyces, pelvis, and vessels.",
      D: "The renal pelvis is the large funnel-shaped basin formed by the confluence of major calyces."
    },
    clinicalPearl: "Renal papillary necrosis (sloughing of the papillae) can be triggered by chronic analgesic overuse (NSAIDs) or sickle cell disease, obstructing urinary outflow.",
    tags: ["Ross-Wilson", "renal", "kidney-anatomy", "renal-papilla", "pyramids"]
  },
  {
    id: "AP-108",
    course: "Anatomy & Physiology",
    topic: "The Cardiovascular System",
    subtopic: "Major Veins of the Lower Limb: Saphenous Systems",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The Great (Long) Saphenous Vein—the longest vein in the human body—ascends the medial aspect of the leg and thigh before piercing the cribriform fascia at the saphenous opening to drain into which deep vessel?",
    options: [
      "Femoral Vein",
      "Popliteal Vein",
      "External Iliac Vein",
      "Deep Femoral (Profunda Femoris) Vein"
    ],
    correctAnswer: 0,
    rationale: "The great saphenous vein originates from the medial end of the dorsal venous arch of the foot, ascends anterior to the medial malleolus, runs along the medial side of the leg and thigh, and penetrates the saphenous opening in the fascia lata to terminate directly into the Femoral Vein within the femoral triangle.",
    optionRationales: {
      A: "Correct. The great saphenous vein terminates in the Femoral Vein.",
      B: "The Small (short) saphenous vein drains into the Popliteal Vein in the popliteal fossa behind the knee.",
      C: "The femoral vein becomes the external iliac vein only after passing deep to the inguinal ligament.",
      D: "The profunda femoris is a deep branch that joins the femoral vein lower in the thigh."
    },
    clinicalPearl: "The great saphenous vein is the primary autologous graft harvested for Coronary Artery Bypass Graft (CABG) surgery because of its accessibility, length, and diameter.",
    tags: ["Ross-Wilson", "vascular", "great-saphenous-vein", "femoral-vein", "lower-limb"]
  },
  {
    id: "AP-109",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Anatomy of the Pleura and Serous Cavity",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which layer of the serous pleural sac is intimately attached to the outer surface of the lungs, dipping into the fissures between pulmonary lobes?",
    options: [
      "Visceral pleura",
      "Parietal pleura",
      "Endothoracic fascia",
      "Costal pleura"
    ],
    correctAnswer: 0,
    rationale: "The pleura consists of two continuous layers: the Visceral Pleura covers the outer surface of the lung parenchyma and dips into the interlobar fissures. The Parietal Pleura lines the inner surface of the thoracic wall, diaphragm, and mediastinum. Between them lies the potential pleural space containing serous lubricating fluid.",
    optionRationales: {
      A: "Correct. The visceral pleura adheres tightly to lung parenchyma and lines the fissures.",
      B: "Parietal pleura lines the chest wall, diaphragm, and mediastinum.",
      C: "Endothoracic fascia is the loose connective tissue layer anchoring parietal pleura to the ribs.",
      D: "Costal pleura is a regional subdivision of the parietal pleura lining the ribs."
    },
    clinicalPearl: "Visceral pleura is innervated by autonomic fibers and lacks pain receptors; parietal pleura is innervated by somatic nerves (intercostal and phrenic), causing sharp, localized pain during pleurisy.",
    tags: ["Ross-Wilson", "respiratory", "pleura", "visceral-pleura", "lungs"]
  },
  {
    id: "AP-110",
    course: "Anatomy & Physiology",
    topic: "The Reproductive System",
    subtopic: "Fallopian (Uterine) Tube Subdivisions & Fertilization Site",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In what specific anatomical section of the Fallopian (uterine) tube does normal physiological fertilization of the secondary oocyte by a spermatozoon occur?",
    options: [
      "Ampulla",
      "Isthmus",
      "Infundibulum",
      "Interstitial (intramural) part"
    ],
    correctAnswer: 0,
    rationale: "The fallopian tube has four segments from lateral to medial: 1) Infundibulum (funnel-shaped end bearing fimbriae), 2) Ampulla (the widest and longest section, representing the normal site of fertilization), 3) Isthmus (the narrow, thick-walled segment joining the uterus), and 4) Interstitial/intramural part (penetrating the uterine wall).",
    optionRationales: {
      A: "Correct. The ampulla is the widest segment where fertilization normally occurs.",
      B: "The isthmus is the narrow proximal segment conveying the early blastocyst to the uterus.",
      C: "The infundibulum catches the ovulated oocyte with its fimbriae.",
      D: "The intramural segment lies within the uterine myometrial wall."
    },
    clinicalPearl: "The ampulla is the most common site of ectopic tubal pregnancies, accounting for >70% of all ectopic gestations.",
    tags: ["Ross-Wilson", "reproductive", "fallopian-tube", "ampulla", "fertilization"]
  },
  {
    id: "AP-111",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Corpus Callosum Anatomy",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary function of the Corpus Callosum, the largest commissural white matter tract in the human brain?",
    options: [
      "Interconnecting homologous areas of the left and right cerebral hemispheres to allow interhemispheric communication",
      "Regulating basic respiratory rhythmicity in the pons",
      "Secreting cerebrospinal fluid into the lateral ventricles",
      "Relaying auditory sound waves directly to the inner ear"
    ],
    correctAnswer: 0,
    rationale: "The Corpus Callosum is a C-shaped commissural bundle composed of >200 million myelinated axons. It arches over the lateral ventricles, bridging the left and right cerebral hemispheres to enable transfer of sensory, motor, and cognitive information between sides.",
    optionRationales: {
      A: "Correct. The corpus callosum connects corresponding regions of the two cerebral hemispheres.",
      B: "Respiratory rhythmicity is controlled by medullary and pontine centers.",
      C: "CSF is secreted by choroid plexuses, not the corpus callosum.",
      D: "Auditory signaling travels along the vestibulocochlear nerve (CN VIII) and lateral lemniscus."
    },
    clinicalPearl: "Surgical severance of the corpus callosum (corpus callosotomy) is performed in refractory epilepsy to prevent focal seizures from spreading across both hemispheres, producing 'split-brain' syndrome.",
    tags: ["Ross-Wilson", "neuroanatomy", "corpus-callosum", "commissure"]
  },
  {
    id: "AP-112",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Upper Limb Osteology: Clavicle Function",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary mechanical function of the Clavicle (collar bone) in the human pectoral girdle?",
    options: [
      "Acting as a horizontal strut that holds the upper limb and scapula away from the thorax to allow maximum arm mobility",
      "Protecting the pelvic urinary bladder from traumatic puncture",
      "Forming a rigid weight-bearing arch for bipedal standing",
      "Housing the red bone marrow responsible for all adult erythropoiesis"
    ],
    correctAnswer: 0,
    rationale: "The clavicle acts as a horizontal strut connecting the axial skeleton (at the sternoclavicular joint) to the appendicular skeleton (at the acromioclavicular joint). It holds the scapula and glenohumeral joint away from the thoracic cage, allowing the upper limb maximum freedom of movement.",
    optionRationales: {
      A: "Correct. The clavicle functions as a strut holding the shoulder out from the trunk.",
      B: "The clavicle is situated on the superior anterior chest, far from the pelvis.",
      C: "The upper limb is non-weight-bearing in humans; the pelvic girdle forms the weight-bearing arch.",
      D: "Adult erythropoiesis occurs in the axial skeleton (vertebrae, sternum, ribs, pelvis), not predominantly the clavicle."
    },
    clinicalPearl: "The clavicle is the most commonly fractured bone in the human body, typically breaking at the junction of its medial two-thirds and lateral one-third following a fall onto an outstretched hand.",
    tags: ["Ross-Wilson", "osteology", "clavicle", "pectoral-girdle", "upper-limb"]
  },
  {
    id: "AP-113",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Anatomy of the Pericardial Sac & Layers",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The heart is enclosed within a fibroserous sac. What tough, non-distensible outer layer prevents acute overfilling of the heart and fuses inferiorly with the central tendon of the diaphragm?",
    options: [
      "Fibrous pericardium",
      "Parietal layer of serous pericardium",
      "Visceral layer of serous pericardium (Epicardium)",
      "Myocardium"
    ],
    correctAnswer: 0,
    rationale: "The pericardium consists of an outer Fibrous Pericardium and an inner Serous Pericardium (subdivided into parietal and visceral layers). The fibrous pericardium is a dense, non-elastic collagenous sac that anchors the heart to the sternum and central tendon of the diaphragm, protecting it and preventing acute chambers overfilling.",
    optionRationales: {
      A: "Correct. The Fibrous Pericardium is the tough, non-distensible outer layer anchoring the heart to the diaphragm.",
      B: "The parietal serous layer lines the internal surface of the fibrous pericardium.",
      C: "The visceral serous layer (epicardium) forms the outer coat of the heart muscle.",
      D: "The myocardium is the thick muscular layer that contracts to pump blood."
    },
    clinicalPearl: "Because the fibrous pericardium cannot stretch acutely, rapid accumulation of fluid in the pericardial space (as little as 150–200 mL of blood) produces life-threatening Cardiac Tamponade.",
    tags: ["Ross-Wilson", "pericardium", "fibrous-pericardium", "cardiac-tamponade"]
  },
  {
    id: "AP-114",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Salivary Glands & Primary Secretory Ducts",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which paired salivary gland is the largest, lies anterior and inferior to the external ear overlying the masseter muscle, and empties saliva into the oral cavity via Stensen's Duct opposite the second upper molar tooth?",
    options: [
      "Parotid Gland",
      "Submandibular Gland",
      "Sublingual Gland",
      "Palatine Gland"
    ],
    correctAnswer: 0,
    rationale: "The Parotid gland is the largest salivary gland, producing predominantly serous watery secretions rich in salivary amylase. Its duct (Stensen's duct) crosses the masseter muscle, pierces the buccinator, and opens into the oral vestibule opposite the crown of the second maxillary (upper) molar.",
    optionRationales: {
      A: "Correct. The Parotid gland empties via Stensen's duct opposite the 2nd upper molar.",
      B: "The submandibular gland empties via Wharton's duct into the floor of the mouth beneath the tongue.",
      C: "The sublingual gland empties via multiple small ducts of Rivinus into the floor of the mouth.",
      D: "Palatine glands are minor salivary glands embedded in the palate."
    },
    clinicalPearl: "The Facial Nerve (CN VII) branches through the substance of the parotid gland. Parotid tumors or parotidectomy can injure CN VII, causing ipsilateral facial paralysis.",
    tags: ["Ross-Wilson", "salivary-glands", "parotid", "Stensen-duct"]
  },
  {
    id: "AP-115",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Sensory Receptors: Tactile Corpuscles",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which encapsulated mechanoreceptors located deep in the dermis and hypodermis consist of concentric lamellae of flattened Schwann-like cells around an axon, responding specifically to deep pressure and high-frequency vibration?",
    options: [
      "Pacinian (Lamellar) Corpuscles",
      "Meissner's (Tactile) Corpuscles",
      "Merkel Discs",
      "Ruffini Endings"
    ],
    correctAnswer: 0,
    rationale: "Pacinian (lamellar) corpuscles are large, onion-shaped encapsulated mechanoreceptors found deep in the dermis, hypodermis, tendons, and joint capsules. Their concentric lamellar membranes deform rapidly under mechanical strain, making them specialized for detecting deep pressure and high-frequency vibration (200-300 Hz).",
    optionRationales: {
      A: "Correct. Pacinian corpuscles detect deep pressure and high-frequency vibration.",
      B: "Meissner's corpuscles lie in dermal papillae of hairless skin and detect light touch and low-frequency flutter.",
      C: "Merkel discs lie in the basal epidermis and detect sustained light pressure, textures, and edges.",
      D: "Ruffini endings detect sustained skin stretch and joint torque."
    },
    clinicalPearl: "Pacinian corpuscles are rapidly adapting: they fire action potentials when pressure is applied and released, but fall silent during continuous static pressure.",
    tags: ["Ross-Wilson", "skin-receptors", "pacinian-corpuscles", "vibration"]
  },
  {
    id: "AP-116",
    course: "Anatomy & Physiology",
    topic: "The Skeletal System",
    subtopic: "Axial vs Appendicular Skeleton Division",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under the classical structural division of the adult human skeleton (comprising 206 bones), how many bones constitute the Axial Skeleton and Appendicular Skeleton, respectively?",
    options: [
      "80 bones in the Axial Skeleton; 126 bones in the Appendicular Skeleton",
      "126 bones in the Axial Skeleton; 80 bones in the Appendicular Skeleton",
      "100 bones in the Axial Skeleton; 106 bones in the Appendicular Skeleton",
      "50 bones in the Axial Skeleton; 156 bones in the Appendicular Skeleton"
    ],
    correctAnswer: 0,
    rationale: "The adult human skeleton has 206 bones: 1) The Axial Skeleton contains 80 bones (skull = 22, ossicles = 6, hyoid = 1, vertebral column = 26, thoracic cage [ribs & sternum] = 25); 2) The Appendicular Skeleton contains 126 bones (upper limbs & pectoral girdle = 64, lower limbs & pelvic girdle = 62).",
    optionRationales: {
      A: "Correct. Axial = 80 bones; Appendicular = 126 bones (Total = 206 bones).",
      B: "Reverses the counts between axial and appendicular divisions.",
      C: "Incorrect bone distribution tally.",
      D: "Incorrect bone distribution tally."
    },
    clinicalPearl: "The axial skeleton forms the longitudinal central axis protecting vital organs (brain, spinal cord, heart, lungs). The appendicular skeleton enables locomotion and tool manipulation.",
    tags: ["Ross-Wilson", "osteology", "axial-skeleton", "appendicular-skeleton"]
  },
  {
    id: "AP-117",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Gastric Motility & The Pyloric Sphincter",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the primary physiological role of the Pyloric Sphincter, a thickened ring of circular smooth muscle located at the distal junction of the stomach and duodenum?",
    options: [
      "Regulating the slow, controlled metering of acidic chyme into the duodenum and preventing duodenogastric reflux",
      "Preventing gastric acid from entering the esophagus during retching",
      "Secreting pancreatic enzymes directly into the gastric fundus",
      "Absorbing water and fat-soluble vitamins into the portal vein"
    ],
    correctAnswer: 0,
    rationale: "The pyloric sphincter controls the emptying of gastric contents into the duodenum. By opening intermittently, it allows only small aliquots (roughly 3 mL) of chyme to enter at a time. This gives the alkaline duodenal secretions time to neutralize gastric acid and digest nutrients without overloading intestinal capacity.",
    optionRationales: {
      A: "Correct. The pyloric sphincter meters chyme delivery into the duodenum and prevents bile reflux.",
      B: "Preventing acid reflux into the esophagus is the role of the Lower Esophageal Sphincter (cardiac sphincter).",
      C: "The pylorus is an anatomical valve, not an enzyme-secreting gland.",
      D: "Nutrient absorption takes place in the small intestine, not across the muscular pyloric valve."
    },
    clinicalPearl: "Infantile Hypertrophic Pyloric Stenosis involves hypertrophy of the pyloric circular muscle, causing gastric outlet obstruction and projectile non-bilious vomiting.",
    tags: ["Ross-Wilson", "gastrointestinal", "pyloric-sphincter", "chyme", "stomach"]
  },
  {
    id: "AP-118",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Circle of Willis: Basilar Artery Formation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "At the lower border of the pons, which two major vessels unite along the ventral midline brainstem to form the single midline Basilar Artery?",
    options: [
      "Left and Right Vertebral Arteries",
      "Left and Right Internal Carotid Arteries",
      "Left and Right External Carotid Arteries",
      "Left and Right Middle Cerebral Arteries"
    ],
    correctAnswer: 0,
    rationale: "The bilateral Vertebral Arteries ascend through the foramina transversaria of C6-C1, enter the skull via the foramen magnum, and converge at the pontomedullary junction to form the single midline Basilar Artery, which ascends the anterior surface of the pons.",
    optionRationales: {
      A: "Correct. The bilateral vertebral arteries unite at the pontomedullary border to form the basilar artery.",
      B: "Internal carotid arteries enter via carotid canals and ascend into the middle cranial fossa independently.",
      C: "External carotid arteries supply structures of the neck, face, and scalp outside the cranium.",
      D: "Middle cerebral arteries are terminal branches of the internal carotids."
    },
    clinicalPearl: "The basilar artery terminates at the upper border of the pons by bifurcating into the bilateral Posterior Cerebral Arteries (PCA).",
    tags: ["Ross-Wilson", "basilar-artery", "vertebral-artery", "neurovascular"]
  },
  {
    id: "AP-119",
    course: "Anatomy & Physiology",
    topic: "The Immune & Lymphatic System",
    subtopic: "Thymus Gland Life Cycle & Involutive Changes",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "At what stage of human life is the Thymus gland at its maximal relative size and functional immunological activity, before undergoing progressive age-related fatty involution?",
    options: [
      "During infancy and early childhood (peaking around puberty)",
      "During the seventh and eighth decades of geriatric life",
      "Exclusively during the first trimester of embryonic gestation",
      "Only during late adulthood following menopause"
    ],
    correctAnswer: 0,
    rationale: "The thymus is most active and relatively largest during early infancy and childhood, when it produces and educates the T-cell repertoire. After puberty, the gland undergoes progressive involution, with lymphoid tissue gradually replaced by fibrofatty adipose tissue, though residual T-cell generation continues at a reduced rate throughout life.",
    optionRationales: {
      A: "Correct. The thymus is prominent in childhood, peaking at puberty before fatty involution begins.",
      B: "In geriatric individuals, the thymus is largely involuted and replaced by adipose tissue.",
      C: "The thymus remains active and structurally intact throughout childhood, not just the first trimester.",
      D: "The thymus begins involuting decades before menopause."
    },
    clinicalPearl: "Because the thymus establishes the body's T-cell repertoire during childhood, thymectomy in an adult causes minimal acute immunodeficiency, whereas thymic aplasia in an infant (DiGeorge syndrome) is life-threatening.",
    tags: ["Ross-Wilson", "thymus", "involution", "T-cells", "immunology"]
  },
  {
    id: "AP-120",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Podocytes and Filtration Slits",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the microscopic architecture of the Bowman's capsule, which cells form the Visceral Layer, wrapping interdigitating foot processes (pedicels) directly around the glomerular capillaries?",
    options: [
      "Podocytes",
      "Parietal epithelial cells",
      "Mesangial cells",
      "Endothelial fenestrated cells"
    ],
    correctAnswer: 0,
    rationale: "Bowman's capsule has two layers: an outer Parietal layer of simple squamous epithelium forming the outer capsule wall, and an inner Visceral layer composed of Podocytes. Podocyte cell bodies extend primary processes that branch into secondary foot processes (pedicels), interdigitating around glomerular capillaries to form filtration slits.",
    optionRationales: {
      A: "Correct. Podocytes form the visceral layer of Bowman's capsule.",
      B: "Parietal epithelial cells line the outer wall of Bowman's space.",
      C: "Mesangial cells provide structural support between capillary loops.",
      D: "Endothelial cells form the inner lining of the capillary lumen, beneath the basement membrane."
    },
    clinicalPearl: "The spaces between interdigitating podocyte foot processes are called Filtration Slits, spanned by a thin diaphragm containing the protein Nephrin.",
    tags: ["Ross-Wilson", "podocytes", "Bowman-capsule", "glomerulus", "histology"]
  },
  {
    id: "AP-121",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "Calcitriol Synthesis and Activation Steps",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Which organ performs the final hydroxylation step that converts 25-hydroxycholecalciferol (calcidiol) into biologically active 1,25-dihydroxycholecalciferol (calcitriol) under the direct stimulation of Parathyroid Hormone (PTH)?",
    options: [
      "Kidneys (in the proximal convoluted tubule cells)",
      "Liver (in hepatic Kupffer cells)",
      "Skin (in the stratum basale)",
      "Parathyroid glands"
    ],
    correctAnswer: 0,
    rationale: "Vitamin D activation is a 3-step pathway: 1) Skin synthesizes cholecalciferol (Vit D3) via UV light; 2) Liver adds a 25-hydroxyl group to yield 25-hydroxycholecalciferol (calcidiol); 3) Kidneys use the enzyme 1-alpha-hydroxylase in proximal tubular cells (stimulated by PTH) to add a 1-hydroxyl group, creating active Calcitriol (1,25-(OH)2-D3).",
    optionRationales: {
      A: "Correct. The final 1-alpha-hydroxylation to active calcitriol occurs in the proximal tubular cells of the kidney.",
      B: "The liver performs the initial 25-hydroxylation step, not the final activating step.",
      C: "Skin synthesizes inactive cholecalciferol from 7-dehydrocholesterol via UV-B rays.",
      D: "Parathyroid glands secrete PTH to stimulate the kidney enzyme, but do not produce calcitriol themselves."
    },
    clinicalPearl: "Clients with end-stage chronic kidney disease lose functional proximal tubules and 1-alpha-hydroxylase, causing active calcitriol deficiency, hypocalcemia, and secondary hyperparathyroidism.",
    tags: ["Ross-Wilson", "vitamin-D", "calcitriol", "kidneys", "1-alpha-hydroxylase"]
  },
  {
    id: "AP-122",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Pulmonary Fissures and Lobes",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which fissure is found exclusively in the Right Lung, separating the Superior (upper) Lobe from the Middle Lobe?",
    options: [
      "Horizontal Fissure",
      "Oblique Fissure",
      "Transverse fissure of the cerebellum",
      "Longitudinal cerebral fissure"
    ],
    correctAnswer: 0,
    rationale: "Both lungs have an Oblique Fissure. The right lung has a second fissure—the Horizontal (minor) Fissure—which extends horizontally from the oblique fissure along the level of the 4th costal cartilage, separating the superior lobe from the middle lobe.",
    optionRationales: {
      A: "Correct. The Horizontal fissure is unique to the right lung and separates the superior and middle lobes.",
      B: "The Oblique fissure is present in both lungs; in the right lung it separates the inferior lobe from the middle and superior lobes.",
      C: "The transverse cerebellar fissure is in the posterior cranial fossa of the skull.",
      D: "The longitudinal fissure divides the left and right cerebral hemispheres."
    },
    clinicalPearl: "Right lung = 3 lobes and 2 fissures (Oblique and Horizontal). Left lung = 2 lobes and 1 fissure (Oblique only).",
    tags: ["Ross-Wilson", "pulmonology", "fissures", "lung-lobes", "thoracic-anatomy"]
  },
  {
    id: "AP-123",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Cranial Nerves: Sensory vs Motor vs Mixed",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which of the 12 pairs of cranial nerves are purely Sensory in functional classification?",
    options: [
      "Cranial Nerves I (Olfactory), II (Optic), and VIII (Vestibulocochlear)",
      "Cranial Nerves III (Oculomotor), IV (Trochlear), and VI (Abducens)",
      "Cranial Nerves V (Trigeminal), VII (Facial), and X (Vagus)",
      "Cranial Nerves XI (Accessory) and XII (Hypoglossal)"
    ],
    correctAnswer: 0,
    rationale: "Cranial nerves are grouped by modality (mnemonic: 'Some Say Marry Money, But My Brother Says Big Brains Matter More' - S=Sensory, M=Motor, B=Both/Mixed). Sensory nerves are CN I (smell), CN II (vision), and CN VIII (hearing/balance). Motor nerves are CN III, IV, VI, XI, and XII. Mixed nerves are CN V, VII, IX, and X.",
    optionRationales: {
      A: "Correct. CN I, II, and VIII carry purely sensory inputs.",
      B: "CN III, IV, and VI are purely somatic motor nerves controlling extraocular eye movements.",
      C: "CN V, VII, and X are mixed nerves containing both sensory and motor components.",
      D: "CN XI and XII are purely motor nerves supplying skeletal muscles."
    },
    clinicalPearl: "Pure Sensory Cranial Nerves = 1, 2, 8 (smell, sight, sound/balance).",
    tags: ["Ross-Wilson", "cranial-nerves", "sensory-nerves", "CN-I", "CN-II", "CN-VIII"]
  },
  {
    id: "AP-124",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Tendon vs Ligament Histological Composition",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under Ross & Wilson's structural definitions, how do Tendons differ from Ligaments in their anatomical connections?",
    options: [
      "Tendons connect muscle to bone; Ligaments connect bone to bone across a joint",
      "Tendons connect bone to bone; Ligaments connect muscle to bone",
      "Tendons are made entirely of elastin; Ligaments contain no fibers",
      "Tendons are found only in the skull; Ligaments are found only in the spine"
    ],
    correctAnswer: 0,
    rationale: "Tendons are tough cords of dense regular collagenous connective tissue that attach skeletal muscle to the periosteum of bone, transmitting contractile pull. Ligaments are bands of dense regular tissue that connect bone to bone across joints, reinforcing the joint capsule and limiting excessive range of motion.",
    optionRationales: {
      A: "Correct. Tendons = Muscle to bone; Ligaments = Bone to bone.",
      B: "This reverses the definitions of tendons and ligaments.",
      C: "Both are composed primarily of tough Type I collagen fibers, with ligaments containing slightly more elastin.",
      D: "Both are distributed throughout the appendicular and axial skeletons."
    },
    clinicalPearl: "Injury to a tendon/muscle is called a Strain; injury to a ligament surrounding a joint is called a Sprain.",
    tags: ["Ross-Wilson", "musculoskeletal", "tendon", "ligament", "connective-tissue"]
  },
  {
    id: "AP-125",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Hepatic Sinusoids & Kupffer Cells",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which specialized resident phagocytic cells line the sinusoidal capillary walls of the liver, clearing bacteria, aged red blood cells, and endotoxins arriving from the portal blood flow?",
    options: [
      "Kupffer Cells (Stellate Macrophages)",
      "Hepatocytes",
      "Hepatic Stellate (Ito) Cells",
      "Endothelial fenestrated pericytes"
    ],
    correctAnswer: 0,
    rationale: "Kupffer cells are resident tissue macrophages anchored to the luminal surface of hepatic sinusoidal endothelium. They form part of the reticuloendothelial (mononuclear phagocyte) system, phagocytosing colonic bacteria and particulate debris entering from the portal vein before blood reaches systemic circulation.",
    optionRationales: {
      A: "Correct. Kupffer cells are liver-resident macrophages that clear blood-borne bacteria and worn-out erythrocytes.",
      B: "Hepatocytes are the primary metabolic parenchymal cells that synthesize proteins and bile.",
      C: "Hepatic stellate (Ito) cells store Vitamin A and deposit collagen during liver cirrhosis.",
      D: "Endothelial cells form the fenestrated sieve of the sinusoid, but are not the resident phagocytes."
    },
    clinicalPearl: "Hepatic Stellate (Ito) cells store Vitamin A in health; in chronic hepatitis or alcohol toxicity, they transform into myofibroblasts and deposit collagen, driving liver cirrhosis.",
    tags: ["Ross-Wilson", "liver", "Kupffer-cells", "histology", "macrophages"]
  },
  {
    id: "AP-126",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Pancreatic Juice Composition & Bicarbonate Secretion",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which duodenal enteroendocrine hormone is released in response to acidic chyme (pH < 4.5) entering from the stomach to stimulate pancreatic ductal cells to secrete large volumes of alkaline, bicarbonate-rich fluid?",
    options: [
      "Secretin",
      "Cholecystokinin (CCK)",
      "Gastric Inhibitory Peptide (GIP)",
      "Motilin"
    ],
    correctAnswer: 0,
    rationale: "Secretin is released by 'S' cells in the duodenal mucosa when acidic gastric chyme contacts the lining. Secretin travels via the bloodstream to the pancreas, where it binds to ductal epithelial cells and stimulates watery, bicarbonate-rich (HCO3-) secretion to neutralize gastric acid in the duodenum.",
    optionRationales: {
      A: "Correct. Secretin stimulates pancreatic ductal secretion of water and bicarbonate to neutralize acid.",
      B: "CCK (from I cells) is stimulated by fats and amino acids; it stimulates pancreatic acinar cells to release enzymes and contracts the gallbladder.",
      C: "GIP stimulates insulin release in response to luminal carbohydrates.",
      D: "Motilin stimulates the migrating motor complex (MMC) during fasting."
    },
    clinicalPearl: "Secretin stimulates Bicarbonate secretion (from duct cells). CCK stimulates Enzyme secretion (from acinar cells) and contracts the gallbladder.",
    tags: ["Ross-Wilson", "gastrointestinal", "secretin", "pancreatic-juice", "bicarbonate"]
  },
  {
    id: "AP-127",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Autonomic Effects: Pupillary Muscles",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which muscle of the iris contracts under sympathetic stimulation to dilate the pupil (mydriasis)?",
    options: [
      "Dilator (Radial) pupillae muscle",
      "Sphincter (Circular) pupillae muscle",
      "Ciliary muscle",
      "Superior tarsal muscle"
    ],
    correctAnswer: 0,
    rationale: "Pupil diameter is controlled by two smooth muscle sets: 1) Dilator pupillae (radially arranged fibers innervated by postganglionic sympathetic fibers from the superior cervical ganglion via alpha-1 receptors; contraction dilates the pupil / mydriasis), and 2) Sphincter pupillae (circularly arranged fibers innervated by parasympathetic fibers from CN III via muscarinic receptors; contraction constricts the pupil / miosis).",
    optionRationales: {
      A: "Correct. The radially arranged Dilator pupillae muscle contracts under sympathetic drive to cause mydriasis.",
      B: "The circular Sphincter pupillae contracts under parasympathetic drive to cause pupillary constriction (miosis).",
      C: "The ciliary muscle alters lens shape for near-point accommodation under parasympathetic control.",
      D: "The superior tarsal (Muller's) muscle elevates the upper eyelid."
    },
    clinicalPearl: "Horner's syndrome (sympathetic interruption) paralyzes the dilator pupillae, producing pupillary constriction (miosis), ptosis, and facial anhidrosis.",
    tags: ["Ross-Wilson", "eye", "pupil", "sympathetic", "mydriasis"]
  },
  {
    id: "AP-128",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "External vs Internal Respiration",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under standard physiological definitions in Ross & Wilson, what is the precise distinction between External Respiration and Internal Respiration?",
    options: [
      "External respiration is the gas exchange between alveoli and pulmonary capillary blood; Internal respiration is the gas exchange between systemic capillary blood and tissue cells",
      "External respiration is swallowing air; Internal respiration is cellular digestion in mitochondria",
      "External respiration occurs only in the nasal cavity; Internal respiration occurs in the trachea",
      "External respiration is voluntary; Internal respiration is involuntary"
    ],
    correctAnswer: 0,
    rationale: "External Respiration is the exchange of gases by diffusion across the alveolar-capillary membrane (O2 moves from alveoli into blood; CO2 moves from blood into alveoli). Internal Respiration is the exchange of gases across systemic capillary walls (O2 diffuses from blood into metabolizing tissue cells; CO2 diffuses from cells into blood). Cellular respiration refers to mitochondrial ATP synthesis.",
    optionRationales: {
      A: "Correct. External = Alveoli to blood; Internal = Blood to peripheral tissue cells.",
      B: "Swallowing air is aerophagia, not external respiration.",
      C: "Gas exchange does not occur across thick-walled conducting airways.",
      D: "Both external and internal diffusion processes are passive physical diffusion mechanisms."
    },
    clinicalPearl: "Ventilation is the mechanical bulk flow of air into and out of lungs; Respiration is the physical diffusion of gas molecules across biological membranes.",
    tags: ["Ross-Wilson", "respiratory", "external-respiration", "internal-respiration"]
  },
  {
    id: "AP-129",
    course: "Anatomy & Physiology",
    topic: "The Skin and Thermoregulation",
    subtopic: "Epidermal Melanocytes and Melanin",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In which layer of the epidermis do melanin-producing Melanocytes reside, transferring pigment granules to adjacent keratinocytes to protect their nuclear DNA from ultraviolet radiation?",
    options: [
      "Stratum Basale",
      "Stratum Corneum",
      "Stratum Granulosum",
      "Stratum Lucidum"
    ],
    correctAnswer: 0,
    rationale: "Melanocytes are neural crest-derived cells located in the deepest epidermal layer—the Stratum Basale. They synthesize melanin in melanosomes and transfer the pigment via dendritic processes to surrounding keratinocytes, where the granules cap the nucleus to absorb UV radiation and shield DNA.",
    optionRationales: {
      A: "Correct. Melanocytes reside in the Stratum Basale.",
      B: "Stratum corneum consists of dead, anucleate, fully keratinized squames.",
      C: "Stratum granulosum contains keratohyalin granules and lamellar bodies.",
      D: "Stratum lucidum is a thin, translucent layer of dead cells in thick skin."
    },
    clinicalPearl: "Darker and lighter skin tones have roughly the same number of melanocytes per square millimeter; skin color differences stem from the amount, type, and distribution of melanin produced.",
    tags: ["Ross-Wilson", "skin", "melanocytes", "stratum-basale", "melanin"]
  },
  {
    id: "AP-130",
    course: "Anatomy & Physiology",
    topic: "The Reproductive System",
    subtopic: "Testicular Temperature Regulation: Dartos and Cremaster",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Spermatogenesis requires an intratesticular temperature approximately 2 to 3°C lower than core body temperature. Which subcutaneous smooth muscle layer within the scrotal wall contracts to wrinkle the scrotum and reduce heat loss in cold environments?",
    options: [
      "Dartos muscle",
      "Cremaster muscle",
      "Bulbospongiosus muscle",
      "Ischiocavernosus muscle"
    ],
    correctAnswer: 0,
    rationale: "Two muscles manage scrotal thermoregulation: 1) Dartos muscle (a layer of smooth muscle in the subcutaneous tissue of the scrotum that contracts in response to cold, wrinkling scrotal skin to thicken it and reduce surface area for heat loss), and 2) Cremaster muscle (loops of skeletal muscle derived from the internal oblique that elevate the testes closer to the pelvic floor).",
    optionRationales: {
      A: "Correct. The smooth muscle Dartos contracts to wrinkle scrotal skin and conserve heat.",
      B: "The skeletal Cremaster muscle elevates the testis toward the superficial inguinal ring.",
      C: "The bulbospongiosus muscle surrounds the bulb of the penis and compresses the erectile tissue.",
      D: "The ischiocavernosus muscle compresses the crura of the penis to maintain erection."
    },
    clinicalPearl: "The Cremasteric Reflex tests spinal roots L1-L2: stroking the medial thigh causes contraction of the cremaster muscle, elevating the ipsilateral testis.",
    tags: ["Ross-Wilson", "reproductive", "dartos-muscle", "scrotum", "thermoregulation"]
  },
  {
    id: "AP-131",
    course: "Anatomy & Physiology",
    topic: "The Cardiovascular System",
    subtopic: "Structure of Cardiac Myocytes (Intercalated Discs)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which microscopic junctional specializations within the Intercalated Discs of cardiac muscle tissue allow low-resistance ion flow, enabling the myocardium to contract as a functional syncytium?",
    options: [
      "Gap Junctions (Nexuses)",
      "Desmosomes (Maculae adherentes)",
      "Fasciae adherentes",
      "Tight junctions (Zonula occludens)"
    ],
    correctAnswer: 0,
    rationale: "Intercalated discs join cardiac myocytes end-to-end and contain three cell junctions: 1) Fascia adherentes (anchor actin filaments), 2) Desmosomes (provide mechanical strength to keep cells from pulling apart during contraction), and 3) Gap Junctions (tubular connexons that provide ionic continuity, allowing action potentials to spread rapidly between cells so the heart contracts as a coordinated syncytium).",
    optionRationales: {
      A: "Correct. Gap junctions provide low-resistance electrical coupling between adjacent myocytes.",
      B: "Desmosomes provide mechanical anchoring to resist contractile shear forces, but do not provide electrical coupling.",
      C: "Fascia adherentes anchor terminal sarcomere actin thin filaments.",
      D: "Tight junctions seal epithelia, but do not synchronize myocardial contractions."
    },
    clinicalPearl: "Gap junctions in intercalated discs allow the myocardium to act as an electrical syncytium: an action potential generated at the SA node depolarizes all atrial myocytes in milliseconds.",
    tags: ["Ross-Wilson", "cardiac-muscle", "intercalated-discs", "gap-junctions"]
  },
  {
    id: "AP-132",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Carina Anatomy and Bronchial Asymmetry",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why do inhaled foreign bodies (such as aspirated food particles or small objects) lodge significantly more frequently in the Right Main (Primary) Bronchus than in the Left?",
    options: [
      "The right main bronchus is wider, shorter, and runs more vertically than the left main bronchus",
      "The left main bronchus is completely closed by a mucous plug in healthy adults",
      "The right lung lacks an inferior lobe, creating an unobstructed conduit",
      "The right main bronchus is surrounded by skeletal voluntary muscle"
    ],
    correctAnswer: 0,
    rationale: "The trachea bifurcates at the Carina (T4-T5) into two main bronchi. The Right Main Bronchus is wider, shorter (~2.5 cm vs 5 cm), and more vertical (aligned with the trachea at a ~25-degree angle vs ~45 degrees on the left). As a result, aspirated foreign bodies enter the right bronchial tree more readily.",
    optionRationales: {
      A: "Correct. The right main bronchus is wider, shorter, and more vertically aligned with the trachea.",
      B: "The left bronchus is open and delivers air to the left lung.",
      C: "The right lung has three lobes (superior, middle, inferior); it is not missing a lobe.",
      D: "Bronchi are surrounded by smooth muscle and hyaline cartilage, not voluntary skeletal muscle."
    },
    clinicalPearl: "Because the right main bronchus is more vertical and wider, aspirated foreign objects and aspiration pneumonias occur more commonly in the right lower and middle lobes.",
    tags: ["Ross-Wilson", "respiratory", "bronchi", "carina", "aspiration"]
  },
  {
    id: "AP-133",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "Parathyroid Gland Anatomy and Number",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "How many Parathyroid Glands are typically embedded on the posterior surface of the lobes of the thyroid gland in healthy adults?",
    options: [
      "Four (two superior and two inferior glands)",
      "Two (one on each lobe)",
      "Eight (two in each quadrant)",
      "One single midline gland"
    ],
    correctAnswer: 0,
    rationale: "Most humans possess four small parathyroid glands (roughly the size of an apple seed) embedded within the pretracheal fascia on the posterior capsule of the thyroid gland: two superior parathyroids (derived from the 4th pharyngeal pouch) and two inferior parathyroids (derived from the 3rd pharyngeal pouch).",
    optionRationales: {
      A: "Correct. Four parathyroid glands (two superior and two inferior) are standard.",
      B: "Two is abnormally low and indicates congenital hypoplasia or prior surgical excision.",
      C: "Supernumerary glands can occur ectopically, but eight is not the standard count.",
      D: "Parathyroids are paired lateral glands, not a single midline organ."
    },
    clinicalPearl: "Accidental removal or devascularization of all four parathyroid glands during total thyroidectomy leads to acute hypocalcemia and tetany within 24 to 48 hours.",
    tags: ["Ross-Wilson", "endocrine", "parathyroid-gland", "PTH", "anatomy"]
  },
  {
    id: "AP-134",
    course: "Anatomy & Physiology",
    topic: "The Skeletal System",
    subtopic: "Thoracic Cage: True, False, and Floating Ribs",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under anatomical classification, why are Ribs 8, 9, and 10 classified as 'False Ribs' (Vertebrochondral Ribs)?",
    options: [
      "Their costal cartilages do not articulate directly with the sternum, but attach to the costal cartilage of the rib immediately above",
      "They have no posterior vertebral articulation with the thoracic spine",
      "They contain no marrow cavity or periosteal covering",
      "Their anterior ends terminate freely in the abdominal wall muscles without any cartilage"
    ],
    correctAnswer: 0,
    rationale: "The 12 pairs of ribs are grouped as: 1) True ribs (Ribs 1-7): their costal cartilages attach directly to the sternum; 2) False ribs (Ribs 8-10): their cartilages attach to the cartilage of the rib above (forming the costal margin); 3) Floating ribs (Ribs 11-12): their anterior cartilaginous tips end freely in the abdominal musculature without attaching to the sternum.",
    optionRationales: {
      A: "Correct. Ribs 8-10 connect to the costal cartilage of the preceding rib rather than directly to the sternum.",
      B: "All ribs articulate posteriorly with thoracic vertebrae.",
      C: "All ribs are bones with periosteal vascularization and marrow cavities.",
      D: "Ribs ending freely without anterior cartilage attachment are the Floating ribs (11 and 12)."
    },
    clinicalPearl: "Ribs 1–7 = True (Vertebrosternal); Ribs 8–10 = False (Vertebrochondral); Ribs 11–12 = Floating (Vertebral).",
    tags: ["Ross-Wilson", "osteology", "ribs", "thoracic-cage", "costal-cartilage"]
  },
  {
    id: "AP-135",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Cerebral Lobes & Primary Functional Cortices",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Where is the Primary Somatosensory Cortex (Brodmann areas 3, 1, and 2) anatomically located in the human cerebral hemisphere?",
    options: [
      "Postcentral Gyrus of the Parietal Lobe",
      "Precentral Gyrus of the Frontal Lobe",
      "Superior Temporal Gyrus of the Temporal Lobe",
      "Calcarine Sulcus of the Occipital Lobe"
    ],
    correctAnswer: 0,
    rationale: "The postcentral gyrus, located immediately behind the central sulcus in the anterior parietal lobe, houses the Primary Somatosensory Cortex (Brodmann areas 3, 1, 2). It receives somatotopically organized sensory information (touch, pain, temperature, proprioception) from the opposite side of the body via thalamic projections.",
    optionRationales: {
      A: "Correct. The postcentral gyrus of the parietal lobe houses the primary somatosensory cortex.",
      B: "The precentral gyrus of the frontal lobe houses the Primary Motor Cortex (area 4).",
      C: "The superior temporal gyrus contains the Primary Auditory Cortex and Wernicke's area.",
      D: "The calcarine sulcus of the occipital lobe houses the Primary Visual Cortex (area 17)."
    },
    clinicalPearl: "Precentral gyrus = Motor (Frontal lobe). Postcentral gyrus = Sensory (Parietal lobe). The Central Sulcus separates the two.",
    tags: ["Ross-Wilson", "neuroanatomy", "somatosensory-cortex", "postcentral-gyrus"]
  },
  {
    id: "AP-136",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Microscopic Anatomy of Spleen: Malpighian Corpuscles",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In histological descriptions of the spleen, what are the Malpighian (Splenic) Corpuscles?",
    options: [
      "Aggregates of White Pulp lymphoid follicles surrounding central arterioles",
      "Renal glomeruli located in the cortex of the kidney",
      "Dilated blood sinusoids filled with dying red blood cells",
      "Clusters of sensory touch endings in dermal papillae"
    ],
    correctAnswer: 0,
    rationale: "Malpighian corpuscles of the spleen are nodules of white pulp. Each corpuscle consists of a central arteriole enclosed by a T-cell sheath (PALS) and an expanding B-cell lymphoid follicle, functioning as an immune filtering station for blood-borne antigens.",
    optionRationales: {
      A: "Correct. Malpighian corpuscles are the lymphoid nodules of the splenic white pulp.",
      B: "A renal corpuscle (glomerulus + capsule) is also historically called a Malpighian body, but in the spleen it refers to white pulp nodules.",
      C: "Venous sinusoids are components of the red pulp, not Malpighian corpuscles.",
      D: "Tactile sensory receptors in the skin are Meissner's corpuscles."
    },
    clinicalPearl: "Histological identification of the spleen relies on spotting the white pulp's Malpighian corpuscles, each centered around a central arteriole.",
    tags: ["Ross-Wilson", "spleen", "histology", "white-pulp", "malpighian-corpuscles"]
  },
  {
    id: "AP-137",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Anal Canal Anatomy: The Pectinate (Dentate) Line",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "The Pectinate (Dentate) Line marks an important anatomical and embryological division in the anal canal. How do tissues ABOVE the pectinate line differ from tissues BELOW it regarding innervation and pain sensation?",
    options: [
      "Above the line is innervated by autonomic sensory fibers (insensitive to sharp pain or cutting); Below the line is innervated by somatic nerves via the inferior rectal nerve (sensitive to pain, temperature, and touch)",
      "Above the line is sensitive to sharp touch; Below the line has zero pain sensation",
      "Above the line drains to superficial inguinal lymph nodes; Below the line drains to internal iliac nodes",
      "Both zones share identical somatic innervation from the sciatic nerve"
    ],
    correctAnswer: 0,
    rationale: "The pectinate line marks the junction of hindgut endoderm (above) and proctodeum ectoderm (below): 1) Above the line: covered by simple columnar epithelium, supplied by visceral autonomic fibers, insensitive to cutting/stretching (internal hemorrhoids are painless), and drains into the portal system and internal iliac nodes; 2) Below the line: covered by stratified squamous epithelium, innervated by somatic branches of the pudendal nerve (inferior rectal nerve), sensitive to sharp pain (external hemorrhoids are painful), and drains into the caval system and superficial inguinal nodes.",
    optionRationales: {
      A: "Correct. Above = Autonomic (insensitive to sharp pain); Below = Somatic/Pudendal (exquisitely sensitive to pain).",
      B: "This reverses the pain profiles of the anal canal.",
      C: "This reverses the lymphatic drainage (above drains to internal iliac; below drains to superficial inguinal).",
      D: "Innervation is divided between visceral autonomic and somatic pudendal supplies."
    },
    clinicalPearl: "Internal hemorrhoids (above the pectinate line) do not cause pain because they have visceral autonomic innervation. External hemorrhoids (below the line) are painful because they have somatic sensory innervation.",
    tags: ["Ross-Wilson", "anal-canal", "pectinate-line", "hemorrhoids", "innervation"]
  },
  {
    id: "AP-138",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Laryngeal Cartilages: Paired vs Unpaired",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The larynx contains 9 cartilages. Which three are classified as Single (Unpaired) Cartilages?",
    options: [
      "Thyroid, Cricoid, and Epiglottis",
      "Arytenoid, Corniculate, and Cuneiform",
      "Hyoid, Tracheal, and Bronchial",
      "Thyroid, Arytenoid, and Corniculate"
    ],
    correctAnswer: 0,
    rationale: "The 9 laryngeal cartilages comprise 3 Unpaired cartilages: Thyroid (largest, forms Adam's apple), Cricoid (complete ring), and Epiglottis (leaf-shaped elastic cartilage); and 3 Paired cartilages: Arytenoids (pyramidal, anchoring vocal cords), Corniculates, and Cuneiforms.",
    optionRationales: {
      A: "Correct. Thyroid, Cricoid, and Epiglottis are the three single/unpaired laryngeal cartilages.",
      B: "Arytenoid, corniculate, and cuneiform are the three paired cartilages.",
      C: "The hyoid is a bone, not a laryngeal cartilage; tracheal rings lie below the larynx.",
      D: "Arytenoid and corniculate are paired structures."
    },
    clinicalPearl: "The Cricoid cartilage is the ONLY complete cartilaginous ring surrounding the human airway. Applying posterior pressure to it during intubation (Sellick's maneuver) occludes the esophagus to prevent regurgitation.",
    tags: ["Ross-Wilson", "larynx", "cartilages", "cricoid", "epiglottis"]
  },
  {
    id: "AP-139",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Cranial Nerves: Muscles of Mastication",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which cranial nerve provides motor innervation to the four primary muscles of mastication (Masseter, Temporalis, Medial Pterygoid, and Lateral Pterygoid)?",
    options: [
      "Mandibular Division of the Trigeminal Nerve (CN V3)",
      "Facial Nerve (CN VII)",
      "Hypoglossal Nerve (CN XII)",
      "Glossopharyngeal Nerve (CN IX)"
    ],
    correctAnswer: 0,
    rationale: "The motor root of the Trigeminal Nerve travels exclusively with its Mandibular division (CN V3). It supplies the muscles of mastication: Masseter, Temporalis, Medial pterygoid, and Lateral pterygoid, as well as the mylohyoid, anterior belly of the digastric, tensor veli palatini, and tensor tympani.",
    optionRationales: {
      A: "Correct. CN V3 (Mandibular nerve) innervates all muscles of mastication.",
      B: "CN VII innervates the muscles of facial expression, not mastication.",
      C: "CN XII innervates intrinsic and extrinsic muscles of the tongue.",
      D: "CN IX innervates the stylopharyngeus muscle."
    },
    clinicalPearl: "Muscles of facial expression = CN VII (Facial). Muscles of mastication (chewing) = CN V3 (Mandibular branch of Trigeminal).",
    tags: ["Ross-Wilson", "cranial-nerves", "trigeminal-nerve", "mastication"]
  },
  {
    id: "AP-140",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Structure of a Synovial Joint Capsule",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which layer of the articular capsule of a synovial joint secretes the viscous, hyaluronic acid-rich Synovial Fluid that lubricates joint surfaces and nourishes avascular articular cartilage?",
    options: [
      "Synovial Membrane (Synovium)",
      "Fibrous Capsule",
      "Hyaline Articular Cartilage",
      "Subchondral Cortical Bone"
    ],
    correctAnswer: 0,
    rationale: "The articular capsule has an outer tough Fibrous Capsule that provides structural stability and an inner vascular Synovial Membrane. The synovial membrane contains specialized fibroblast-like synoviocytes (Type B cells) that secrete synovial fluid containing hyaluronic acid and lubricin, which lubricates joint movements and provides metabolic exchange for avascular cartilage.",
    optionRationales: {
      A: "Correct. The inner synovial membrane synthesizes and secretes lubricating synovial fluid.",
      B: "The outer fibrous capsule provides mechanical containment and ligamentous stability.",
      C: "Articular cartilage lines bone ends, absorbing impact; it does not produce the bulk fluid.",
      D: "Subchondral bone supports the cartilage bed."
    },
    clinicalPearl: "Articular cartilage has no blood vessels, nerves, or lymphatics. It relies on cyclic compression and decompression of synovial fluid during joint movement to diffuse nutrients into its matrix.",
    tags: ["Ross-Wilson", "joints", "synovial-membrane", "synovial-fluid"]
  },
  {
    id: "AP-141",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Loop of Henle Countercurrent Permeability",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In the functional architecture of the loop of Henle, what is the key physiological difference in permeability between the Thin Descending Limb and the Thick Ascending Limb?",
    options: [
      "The descending limb is freely permeable to water but impermeable to sodium chloride; the thick ascending limb actively pumps out sodium chloride and is completely impermeable to water",
      "The descending limb pumps out sodium ions; the ascending limb absorbs water",
      "Both limbs are completely impermeable to water and electrolytes",
      "The ascending limb absorbs glucose; the descending limb secretes creatinine"
    ],
    correctAnswer: 0,
    rationale: "Ross & Wilson emphasizes the countercurrent multiplier mechanism: 1) The thin descending limb is permeable to water (via aquaporin-1 channels) but impermeable to solutes, causing luminal fluid to concentrate as it descends into the medulla; 2) The thick ascending limb actively pumps out Na+, K+, and Cl- (via NKCC2 cotransporters) into the interstitium and is impermeable to water, diluting the luminal fluid while maintaining high medullary interstitial osmolality.",
    optionRationales: {
      A: "Correct. Descending limb allows water outflow; ascending limb transports solutes without water, driving the countercurrent multiplier.",
      B: "This reverses the directional transport of water and solutes.",
      C: "If both were impermeable, the osmotic concentration gradient could not develop.",
      D: "Glucose is reabsorbed in the proximal convoluted tubule, not the loop of Henle."
    },
    clinicalPearl: "Fluid entering the loop of Henle is isotonic (300 mOsm/kg), reaches maximum concentration at the hairpin bend in the inner medulla (1200 mOsm/kg), and exits the ascending limb into the distal tubule hypotonic (100 mOsm/kg).",
    tags: ["Ross-Wilson", "renal", "loop-of-henle", "countercurrent-multiplier"]
  },
  {
    id: "AP-142",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Cardiac Valve Anatomy: Chordae Tendineae",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary function of the Chordae Tendineae and Papillary Muscles situated within the left and right ventricles of the heart?",
    options: [
      "Preventing eversion and prolapse of the atrioventricular (Tricuspid and Mitral) valve cusps into the atria during ventricular systole",
      "Opening the aortic and pulmonary valves during diastole",
      "Directly generating ventricular contractile ejection force",
      "Pumping venous blood into the coronary sinus"
    ],
    correctAnswer: 0,
    rationale: "Chordae tendineae are fibrous cords connecting the margins of the atrioventricular (mitral and tricuspid) valves to the papillary muscles projecting from the ventricular walls. When the ventricles contract, the papillary muscles contract simultaneously, pulling on the chordae tendineae to anchor the valve flaps and prevent them from being blown backward (prolapsing) into the atria under high systolic pressure.",
    optionRationales: {
      A: "Correct. Chordae tendineae prevent the AV valve leaflets from prolapsing backward into the atria during systole.",
      B: "Semilunar valves (aortic and pulmonic) open passively in response to pressure gradients and have no chordae tendineae.",
      C: "Ventricular ejection is driven by the circular and spiral layers of the myocardium.",
      D: "Coronary sinus drainage is passive and unrelated to papillary muscular pull."
    },
    clinicalPearl: "Rupture of a papillary muscle or its chordae tendineae (often caused by an acute myocardial infarction) triggers acute, severe mitral regurgitation and cardiogenic pulmonary edema.",
    tags: ["Ross-Wilson", "cardiovascular", "chordae-tendineae", "papillary-muscles", "heart-valves"]
  },
  {
    id: "AP-143",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Hepatic Lobule vs Central Vein Anatomy",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the classical structural model of a hexagonal hepatic lobule, what vascular structure occupies the absolute center of the lobule, receiving blood from surrounding hepatic sinusoids?",
    options: [
      "Central Vein",
      "Portal Vein tributary",
      "Hepatic Artery branch",
      "Interlobular Bile Duct"
    ],
    correctAnswer: 0,
    rationale: "The classical liver lobule is a hexagonal prism. At each of its six corners sits a Portal Triad (containing a branch of the portal vein, hepatic artery, and bile duct). Blood from the portal vein and hepatic artery mixes within the sinusoids and flows inward toward the center, where it drains into the single Central Vein. Central veins coalesce to form the sublobular and hepatic veins.",
    optionRationales: {
      A: "Correct. The central vein lies at the center of the classical hexagonal liver lobule.",
      B: "Portal vein branches sit peripherally at the corners of the lobule within portal triads.",
      C: "Hepatic artery branches sit at the peripheral portal triads.",
      D: "Bile ducts sit at the corners of the lobule, collecting bile that flows outward from hepatocytes."
    },
    clinicalPearl: "Blood flows INWARD from the peripheral portal triads to the central vein. Bile flows OUTWARD from hepatocytes toward peripheral bile ducts.",
    tags: ["Ross-Wilson", "liver", "central-vein", "hepatic-lobule", "histology"]
  },
  {
    id: "AP-144",
    course: "Anatomy & Physiology",
    topic: "The Reproductive System",
    subtopic: "Male Accessory Glands & Semen Volume",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which accessory male reproductive glands produce approximately 60% of total semen volume, secreting a viscous, alkaline fluid rich in Fructose to provide metabolic energy for sperm motility?",
    options: [
      "Seminal Vesicles (Glands)",
      "Prostate Gland",
      "Bulbourethral (Cowper's) Glands",
      "Epididymis"
    ],
    correctAnswer: 0,
    rationale: "The paired Seminal Vesicles produce ~60% of semen volume. Their secretion is thick, alkaline (to buffer acidic vaginal fluids), and contains Fructose (the primary energy substrate for sperm flagellar motility), prostaglandins (which promote smooth muscle contractions in the female reproductive tract), and clotting proteins.",
    optionRationales: {
      A: "Correct. Seminal vesicles secrete ~60% of semen volume, providing fructose for sperm energy.",
      B: "The prostate gland secretes ~25-30% of semen, contributing a thin, milky fluid with citric acid, acid phosphatase, and PSA.",
      C: "Bulbourethral glands secrete ~1% of semen, producing clear alkaline mucus that lubricates the urethra before ejaculation.",
      D: "The epididymis stores sperm while they mature and gain motility, but does not secrete the bulk fluid volume of semen."
    },
    clinicalPearl: "Fructose in seminal fluid is synthesized exclusively by the seminal vesicles; testing for fructose confirms whether an ejaculate contains seminal vesicle secretions.",
    tags: ["Ross-Wilson", "reproductive", "seminal-vesicles", "fructose", "male-anatomy"]
  },
  {
    id: "AP-145",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Broca's vs Wernicke's Language Cortices",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Where is Broca's Motor Speech Area (Brodmann areas 44 and 45) anatomically located in the dominant cerebral hemisphere?",
    options: [
      "Inferior Frontal Gyrus of the Frontal Lobe",
      "Superior Temporal Gyrus of the Temporal Lobe",
      "Postcentral Gyrus of the Parietal Lobe",
      "Occipital Pole"
    ],
    correctAnswer: 0,
    rationale: "Broca's area (Brodmann areas 44 and 45) is located in the inferior frontal gyrus of the dominant hemisphere (usually the left). It plans and coordinates the motor execution of speech. Wernicke's area (receptive language comprehension) is located in the posterior part of the superior temporal gyrus.",
    optionRationales: {
      A: "Correct. Broca's area is located in the inferior frontal gyrus of the frontal lobe.",
      B: "The superior temporal gyrus houses Wernicke's area, which handles speech comprehension.",
      C: "The postcentral gyrus is the primary somatosensory cortex.",
      D: "The occipital pole contains the primary visual cortex."
    },
    clinicalPearl: "Broca's aphasia: Speech is non-fluent, halting, and effortful, but comprehension remains intact ('expressive aphasia'). Wernicke's aphasia: Speech is fluent but nonsensical, and comprehension is impaired ('receptive aphasia').",
    tags: ["Ross-Wilson", "neuroanatomy", "Broca-area", "language", "aphasia"]
  },
  {
    id: "AP-146",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Partial Pressures of Respiratory Gases",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under normal sea-level conditions (barometric pressure = 760 mmHg), what are the standard partial pressures of Oxygen (PO2) and Carbon Dioxide (PCO2) in freshly oxygenated blood exiting the pulmonary capillaries?",
    options: [
      "PaO2 = approximately 100 mmHg; PaCO2 = approximately 40 mmHg",
      "PaO2 = approximately 40 mmHg; PaCO2 = approximately 100 mmHg",
      "PaO2 = 760 mmHg; PaCO2 = 0 mmHg",
      "PaO2 = 45 mmHg; PaCO2 = 45 mmHg"
    ],
    correctAnswer: 0,
    rationale: "In pulmonary capillaries, gas diffusion equilibrates with alveolar gas: alveolar PO2 is ~104 mmHg and alveolar PCO2 is ~40 mmHg. Freshly oxygenated pulmonary venous and systemic arterial blood has a PaO2 of 95 to 100 mmHg and a PaCO2 of approximately 40 mmHg. Mixed venous blood arriving from the tissues has a PO2 of ~40 mmHg and a PCO2 of ~45 mmHg.",
    optionRationales: {
      A: "Correct. Normal arterial blood values are PaO2 ~100 mmHg and PaCO2 ~40 mmHg.",
      B: "This reverses the gas values; high PCO2 and low PO2 indicate severe respiratory failure.",
      C: "760 mmHg is the total atmospheric pressure of all combined gases, not oxygen alone.",
      D: "45 mmHg PO2 and 45 mmHg PCO2 describe mixed deoxygenated venous blood."
    },
    clinicalPearl: "Normal arterial blood values: PaO2 = 80–100 mmHg; PaCO2 = 35–45 mmHg; pH = 7.35–7.45.",
    tags: ["Ross-Wilson", "respiratory", "partial-pressures", "gas-exchange", "ABG"]
  },
  {
    id: "AP-147",
    course: "Anatomy & Physiology",
    topic: "The Skeletal System",
    subtopic: "Joint Stability: Fibrous Joints (Sutures and Syndesmoses)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under the functional classification of joints, how are Sutures (such as the coronal and sagittal sutures uniting the bones of the skull) classified based on degree of mobility?",
    options: [
      "Synarthroses (immovable joints)",
      "Amphiarthroses (slightly movable joints)",
      "Diarthroses (freely movable joints)",
      "Synovial joints"
    ],
    correctAnswer: 0,
    rationale: "Functional joint classification categorizes joints by movement: 1) Synarthroses (immovable joints: cranial sutures, gomphoses), 2) Amphiarthroses (slightly movable joints: pubic symphysis, intervertebral discs), and 3) Diarthroses (freely movable joints: all synovial joints like knee, elbow, hip).",
    optionRationales: {
      A: "Correct. Cranial sutures are fixed, immovable fibrous joints (Synarthroses).",
      B: "Amphiarthroses are cartilaginous joints permitting slight movement, such as the pubic symphysis.",
      C: "Diarthroses are freely movable joints with synovial cavities.",
      D: "Synovial joints have joint cavities and articular cartilage, whereas cranial sutures are fibrous."
    },
    clinicalPearl: "Functional classification: Synarthrosis = Immovable. Amphiarthrosis = Slightly movable. Diarthrosis = Freely movable.",
    tags: ["Ross-Wilson", "joints", "synarthrosis", "sutures", "skull"]
  },
  {
    id: "AP-148",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Gastroesophageal Junction: Lower Esophageal Sphincter (LES)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What physiological mechanism prevents the reflux of gastric acid into the lower esophagus, despite the high pressure gradient between the positive-pressure abdominal cavity and negative-pressure thoracic cavity?",
    options: [
      "Tonic resting contraction of the Lower Esophageal Sphincter (LES) reinforced by the right crus of the diaphragm",
      "Continuous retrograde peristalsis of the upper thoracic esophagus",
      "Secretion of a neutral oil layer that floats on top of gastric chyme",
      "Total closure of the pyloric valve during meals"
    ],
    correctAnswer: 0,
    rationale: "The antireflux barrier at the gastroesophageal junction consists of: 1) The physiological smooth muscular Lower Esophageal Sphincter (LES), which maintains tonic resting closure pressure (15-25 mmHg), 2) The diaphragmatic pinchcock action of the right crus surrounding the esophageal hiatus, 3) The acute Angle of His, and 4) An intra-abdominal segment of the esophagus that is compressed closed when abdominal pressure rises.",
    optionRationales: {
      A: "Correct. The high-pressure tone of the LES supported by the right crus of the diaphragm maintains the antireflux barrier.",
      B: "Retrograde peristalsis occurs in vomiting, not during normal esophageal resting tone.",
      C: "There is no specialized oil layer sealing the gastric pool.",
      D: "Pyloric closure meters duodenal delivery, but does not directly prevent esophageal reflux."
    },
    clinicalPearl: "Incompetence or transient inappropriate relaxation of the Lower Esophageal Sphincter (LES) causes Gastroesophageal Reflux Disease (GERD), leading to heartburn and potential Barrett's metaplasia.",
    tags: ["Ross-Wilson", "esophagus", "LES", "GERD", "gastrointestinal"]
  },
  {
    id: "AP-149",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Glomerular Filtration Rate (GFR) Normal Baseline",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In a healthy adult human with normal renal function, what is the average normal Glomerular Filtration Rate (GFR) produced across both kidneys combined?",
    options: [
      "Approximately 125 mL/minute (roughly 180 Liters per day)",
      "Approximately 10 mL/minute (roughly 14 Liters per day)",
      "Approximately 1,000 mL/minute (roughly 1,400 Liters per day)",
      "Approximately 1 mL/minute (roughly 1.5 Liters per day)"
    ],
    correctAnswer: 0,
    rationale: "Normal GFR in a healthy adult is ~125 mL/min in males (115 mL/min in females), which equates to roughly 180 Liters of filtrate formed per day. Because 99% of this filtrate is reabsorbed along the nephron, normal urine output is roughly 1 to 1.5 Liters per day.",
    optionRationales: {
      A: "Correct. Normal GFR is ~125 mL/min (~180 L/day).",
      B: "10 mL/min indicates severe end-stage renal disease (ESRD) requiring dialysis.",
      C: "1,000 mL/min is close to total renal blood flow (~1.2 L/min), not the filtered fraction.",
      D: "1 mL/min describes the rate of final urine excretion, not the initial rate of glomerular filtration."
    },
    clinicalPearl: "The kidneys filter ~180 Liters of plasma per day, but reabsorb >99% of it, excreting only 1.5 Liters of urine per 24 hours.",
    tags: ["Ross-Wilson", "renal", "GFR", "filtration-rate", "urine-volume"]
  },
  {
    id: "AP-150",
    course: "Anatomy & Physiology",
    topic: "Special Senses",
    subtopic: "Aqueous Humor Dynamics & Schlemm's Canal",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Where is Aqueous Humor continuously produced within the eye, and through which trabecular drainage channel in the iridocorneal angle does it exit into the venous circulation to maintain normal intraocular pressure (10–21 mmHg)?",
    options: [
      "Produced by the Ciliary Processes of the ciliary body; drained via the Canal of Schlemm (Scleral Venous Sinus)",
      "Produced by the Lacrimal Gland; drained via the Nasolacrimal Duct",
      "Produced by the Optic Disc; drained via the Superior Ophthalmic Vein",
      "Produced by the Choroid; drained via the Central Retinal Artery"
    ],
    correctAnswer: 0,
    rationale: "Aqueous humor is secreted by the pigmented and non-pigmented ciliary processes into the posterior chamber of the eye. It flows forward through the pupil into the anterior chamber, percolates through the trabecular meshwork at the iridocorneal angle, and drains into the Canal of Schlemm (scleral venous sinus), which empties into episcleral veins to maintain intraocular pressure (normal: 10–21 mmHg).",
    optionRationales: {
      A: "Correct. Ciliary processes produce aqueous humor; the Canal of Schlemm drains it.",
      B: "The lacrimal gland produces tears on the external ocular surface, draining into the nasolacrimal duct.",
      C: "The optic disc contains axons; it does not produce intraocular fluid.",
      D: "The choroid is a vascular tunic that supplies the outer retina, not the primary driver of aqueous humor turnover."
    },
    clinicalPearl: "Obstruction of aqueous humor outflow through the trabecular meshwork into the Canal of Schlemm increases intraocular pressure, causing Glaucoma and optic nerve damage.",
    tags: ["Ross-Wilson", "eye", "aqueous-humor", "glaucoma", "canal-of-schlemm"]
  },
  {
    id: "AP-101",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "Calcitriol Synthesis and Activation Steps",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "Which organ performs the final hydroxylation step that converts 25-hydroxycholecalciferol (calcidiol) into biologically active 1,25-dihydroxycholecalciferol (calcitriol) under the direct stimulation of Parathyroid Hormone (PTH)?",
    options: [
      "Kidneys (in the proximal convoluted tubule cells)",
      "Liver (in hepatic Kupffer cells)",
      "Skin (in the stratum basale)",
      "Parathyroid glands"
    ],
    correctAnswer: 0,
    rationale: "Vitamin D activation is a 3-step pathway: 1) Skin synthesizes cholecalciferol (Vit D3) via UV light; 2) Liver adds a 25-hydroxyl group to yield 25-hydroxycholecalciferol (calcidiol); 3) Kidneys use the enzyme 1-alpha-hydroxylase in proximal tubular cells (stimulated by PTH) to add a 1-hydroxyl group, creating active Calcitriol (1,25-(OH)2-D3).",
    optionRationales: {
      A: "Correct. The final 1-alpha-hydroxylation to active calcitriol occurs in the proximal tubular cells of the kidney.",
      B: "The liver performs the initial 25-hydroxylation step, not the final activating step.",
      C: "Skin synthesizes inactive cholecalciferol from 7-dehydrocholesterol via UV-B rays.",
      D: "Parathyroid glands secrete PTH to stimulate the kidney enzyme, but do not produce calcitriol themselves."
    },
    clinicalPearl: "Clients with end-stage chronic kidney disease lose functional proximal tubules and 1-alpha-hydroxylase, causing active calcitriol deficiency, hypocalcemia, and secondary hyperparathyroidism.",
    tags: ["Ross-Wilson", "vitamin-D", "calcitriol", "kidneys", "1-alpha-hydroxylase"]
  },
  {
    id: "AP-102",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Pulmonary Fissures and Lobes",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which fissure is found exclusively in the Right Lung, separating the Superior (upper) Lobe from the Middle Lobe?",
    options: [
      "Horizontal Fissure",
      "Oblique Fissure",
      "Transverse fissure of the cerebellum",
      "Longitudinal cerebral fissure"
    ],
    correctAnswer: 0,
    rationale: "Both lungs have an Oblique Fissure. The right lung has a second fissure—the Horizontal (minor) Fissure—which extends horizontally from the oblique fissure along the level of the 4th costal cartilage, separating the superior lobe from the middle lobe.",
    optionRationales: {
      A: "Correct. The Horizontal fissure is unique to the right lung and separates the superior and middle lobes.",
      B: "The Oblique fissure is present in both lungs; in the right lung it separates the inferior lobe from the middle and superior lobes.",
      C: "The transverse cerebellar fissure is in the posterior cranial fossa of the skull.",
      D: "The longitudinal fissure divides the left and right cerebral hemispheres."
    },
    clinicalPearl: "Right lung = 3 lobes and 2 fissures (Oblique and Horizontal). Left lung = 2 lobes and 1 fissure (Oblique only).",
    tags: ["Ross-Wilson", "pulmonology", "fissures", "lung-lobes", "thoracic-anatomy"]
  },
  {
    id: "AP-103",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Cranial Nerves: Sensory vs Motor vs Mixed",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which of the 12 pairs of cranial nerves are purely Sensory in functional classification?",
    options: [
      "Cranial Nerves I (Olfactory), II (Optic), and VIII (Vestibulocochlear)",
      "Cranial Nerves III (Oculomotor), IV (Trochlear), and VI (Abducens)",
      "Cranial Nerves V (Trigeminal), VII (Facial), and X (Vagus)",
      "Cranial Nerves XI (Accessory) and XII (Hypoglossal)"
    ],
    correctAnswer: 0,
    rationale: "Cranial nerves are grouped by modality (mnemonic: 'Some Say Marry Money, But My Brother Says Big Brains Matter More' - S=Sensory, M=Motor, B=Both/Mixed). Sensory nerves are CN I (smell), CN II (vision), and CN VIII (hearing/balance). Motor nerves are CN III, IV, VI, XI, and XII. Mixed nerves are CN V, VII, IX, and X.",
    optionRationales: {
      A: "Correct. CN I, II, and VIII carry purely sensory inputs.",
      B: "CN III, IV, and VI are purely somatic motor nerves controlling extraocular eye movements.",
      C: "CN V, VII, and X are mixed nerves containing both sensory and motor components.",
      D: "CN XI and XII are purely motor nerves supplying skeletal muscles."
    },
    clinicalPearl: "Pure Sensory Cranial Nerves = 1, 2, 8 (smell, sight, sound/balance).",
    tags: ["Ross-Wilson", "cranial-nerves", "sensory-nerves", "CN-I", "CN-II", "CN-VIII"]
  },
  {
    id: "AP-104",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Tendon vs Ligament Histological Composition",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under Ross & Wilson's structural definitions, how do Tendons differ from Ligaments in their anatomical connections?",
    options: [
      "Tendons connect muscle to bone; Ligaments connect bone to bone across a joint",
      "Tendons connect bone to bone; Ligaments connect muscle to bone",
      "Tendons are made entirely of elastin; Ligaments contain no fibers",
      "Tendons are found only in the skull; Ligaments are found only in the spine"
    ],
    correctAnswer: 0,
    rationale: "Tendons are tough cords of dense regular collagenous connective tissue that attach skeletal muscle to the periosteum of bone, transmitting contractile pull. Ligaments are bands of dense regular tissue that connect bone to bone across joints, reinforcing the joint capsule and limiting excessive range of motion.",
    optionRationales: {
      A: "Correct. Tendons = Muscle to bone; Ligaments = Bone to bone.",
      B: "This reverses the definitions of tendons and ligaments.",
      C: "Both are composed primarily of tough Type I collagen fibers, with ligaments containing slightly more elastin.",
      D: "Both are distributed throughout the appendicular and axial skeletons."
    },
    clinicalPearl: "Injury to a tendon/muscle is called a Strain; injury to a ligament surrounding a joint is called a Sprain.",
    tags: ["Ross-Wilson", "musculoskeletal", "tendon", "ligament", "connective-tissue"]
  },
  {
    id: "AP-105",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Hepatic Sinusoids & Kupffer Cells",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which specialized resident phagocytic cells line the sinusoidal capillary walls of the liver, clearing bacteria, aged red blood cells, and endotoxins arriving from the portal blood flow?",
    options: [
      "Kupffer Cells (Stellate Macrophages)",
      "Hepatocytes",
      "Hepatic Stellate (Ito) Cells",
      "Endothelial fenestrated pericytes"
    ],
    correctAnswer: 0,
    rationale: "Kupffer cells are resident tissue macrophages anchored to the luminal surface of hepatic sinusoidal endothelium. They form part of the reticuloendothelial (mononuclear phagocyte) system, phagocytosing colonic bacteria and particulate debris entering from the portal vein before blood reaches systemic circulation.",
    optionRationales: {
      A: "Correct. Kupffer cells are liver-resident macrophages that clear blood-borne bacteria and worn-out erythrocytes.",
      B: "Hepatocytes are the primary metabolic parenchymal cells that synthesize proteins and bile.",
      C: "Hepatic stellate (Ito) cells store Vitamin A and deposit collagen during liver cirrhosis.",
      D: "Endothelial cells form the fenestrated sieve of the sinusoid, but are not the resident phagocytes."
    },
    clinicalPearl: "Hepatic Stellate (Ito) cells store Vitamin A in health; in chronic hepatitis or alcohol toxicity, they transform into myofibroblasts and deposit collagen, driving liver cirrhosis.",
    tags: ["Ross-Wilson", "liver", "Kupffer-cells", "histology", "macrophages"]
  },
  {
    id: "AP-106",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Pancreatic Juice Composition & Bicarbonate Secretion",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which duodenal enteroendocrine hormone is released in response to acidic chyme (pH < 4.5) entering from the stomach to stimulate pancreatic ductal cells to secrete large volumes of alkaline, bicarbonate-rich fluid?",
    options: [
      "Secretin",
      "Cholecystokinin (CCK)",
      "Gastric Inhibitory Peptide (GIP)",
      "Motilin"
    ],
    correctAnswer: 0,
    rationale: "Secretin is released by 'S' cells in the duodenal mucosa when acidic gastric chyme contacts the lining. Secretin travels via the bloodstream to the pancreas, where it binds to ductal epithelial cells and stimulates watery, bicarbonate-rich (HCO3-) secretion to neutralize gastric acid in the duodenum.",
    optionRationales: {
      A: "Correct. Secretin stimulates pancreatic ductal secretion of water and bicarbonate to neutralize acid.",
      B: "CCK (from I cells) is stimulated by fats and amino acids; it stimulates pancreatic acinar cells to release enzymes and contracts the gallbladder.",
      C: "GIP stimulates insulin release in response to luminal carbohydrates.",
      D: "Motilin stimulates the migrating motor complex (MMC) during fasting."
    },
    clinicalPearl: "Secretin stimulates Bicarbonate secretion (from duct cells). CCK stimulates Enzyme secretion (from acinar cells) and contracts the gallbladder.",
    tags: ["Ross-Wilson", "gastrointestinal", "secretin", "pancreatic-juice", "bicarbonate"]
  },
  {
    id: "AP-107",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Autonomic Effects: Pupillary Muscles",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which muscle of the iris contracts under sympathetic stimulation to dilate the pupil (mydriasis)?",
    options: [
      "Dilator (Radial) pupillae muscle",
      "Sphincter (Circular) pupillae muscle",
      "Ciliary muscle",
      "Superior tarsal muscle"
    ],
    correctAnswer: 0,
    rationale: "Pupil diameter is controlled by two smooth muscle sets: 1) Dilator pupillae (radially arranged fibers innervated by postganglionic sympathetic fibers from the superior cervical ganglion via alpha-1 receptors; contraction dilates the pupil / mydriasis), and 2) Sphincter pupillae (circularly arranged fibers innervated by parasympathetic fibers from CN III via muscarinic receptors; contraction constricts the pupil / miosis).",
    optionRationales: {
      A: "Correct. The radially arranged Dilator pupillae muscle contracts under sympathetic drive to cause mydriasis.",
      B: "The circular Sphincter pupillae contracts under parasympathetic drive to cause pupillary constriction (miosis).",
      C: "The ciliary muscle alters lens shape for near-point accommodation under parasympathetic control.",
      D: "The superior tarsal (Muller's) muscle elevates the upper eyelid."
    },
    clinicalPearl: "Horner's syndrome (sympathetic interruption) paralyzes the dilator pupillae, producing pupillary constriction (miosis), ptosis, and facial anhidrosis.",
    tags: ["Ross-Wilson", "eye", "pupil", "sympathetic", "mydriasis"]
  },
  {
    id: "AP-108",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "External vs Internal Respiration",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under standard physiological definitions in Ross & Wilson, what is the precise distinction between External Respiration and Internal Respiration?",
    options: [
      "External respiration is the gas exchange between alveoli and pulmonary capillary blood; Internal respiration is the gas exchange between systemic capillary blood and tissue cells",
      "External respiration is swallowing air; Internal respiration is cellular digestion in mitochondria",
      "External respiration occurs only in the nasal cavity; Internal respiration occurs in the trachea",
      "External respiration is voluntary; Internal respiration is involuntary"
    ],
    correctAnswer: 0,
    rationale: "External Respiration is the exchange of gases by diffusion across the alveolar-capillary membrane (O2 moves from alveoli into blood; CO2 moves from blood into alveoli). Internal Respiration is the exchange of gases across systemic capillary walls (O2 diffuses from blood into metabolizing tissue cells; CO2 diffuses from cells into blood). Cellular respiration refers to mitochondrial ATP synthesis.",
    optionRationales: {
      A: "Correct. External = Alveoli to blood; Internal = Blood to peripheral tissue cells.",
      B: "Swallowing air is aerophagia, not external respiration.",
      C: "Gas exchange does not occur across thick-walled conducting airways.",
      D: "Both external and internal diffusion processes are passive physical diffusion mechanisms."
    },
    clinicalPearl: "Ventilation is the mechanical bulk flow of air into and out of lungs; Respiration is the physical diffusion of gas molecules across biological membranes.",
    tags: ["Ross-Wilson", "respiratory", "external-respiration", "internal-respiration"]
  },
  {
    id: "AP-109",
    course: "Anatomy & Physiology",
    topic: "The Skin and Thermoregulation",
    subtopic: "Epidermal Melanocytes and Melanin",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In which layer of the epidermis do melanin-producing Melanocytes reside, transferring pigment granules to adjacent keratinocytes to protect their nuclear DNA from ultraviolet radiation?",
    options: [
      "Stratum Basale",
      "Stratum Corneum",
      "Stratum Granulosum",
      "Stratum Lucidum"
    ],
    correctAnswer: 0,
    rationale: "Melanocytes are neural crest-derived cells located in the deepest epidermal layer—the Stratum Basale. They synthesize melanin in melanosomes and transfer the pigment via dendritic processes to surrounding keratinocytes, where the granules cap the nucleus to absorb UV radiation and shield DNA.",
    optionRationales: {
      A: "Correct. Melanocytes reside in the Stratum Basale.",
      B: "Stratum corneum consists of dead, anucleate, fully keratinized squames.",
      C: "Stratum granulosum contains keratohyalin granules and lamellar bodies.",
      D: "Stratum lucidum is a thin, translucent layer of dead cells in thick skin."
    },
    clinicalPearl: "Darker and lighter skin tones have roughly the same number of melanocytes per square millimeter; skin color differences stem from the amount, type, and distribution of melanin produced.",
    tags: ["Ross-Wilson", "skin", "melanocytes", "stratum-basale", "melanin"]
  },
  {
    id: "AP-110",
    course: "Anatomy & Physiology",
    topic: "The Reproductive System",
    subtopic: "Testicular Temperature Regulation: Dartos and Cremaster",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Spermatogenesis requires an intratesticular temperature approximately 2 to 3°C lower than core body temperature. Which subcutaneous smooth muscle layer within the scrotal wall contracts to wrinkle the scrotum and reduce heat loss in cold environments?",
    options: [
      "Dartos muscle",
      "Cremaster muscle",
      "Bulbospongiosus muscle",
      "Ischiocavernosus muscle"
    ],
    correctAnswer: 0,
    rationale: "Two muscles manage scrotal thermoregulation: 1) Dartos muscle (a layer of smooth muscle in the subcutaneous tissue of the scrotum that contracts in response to cold, wrinkling scrotal skin to thicken it and reduce surface area for heat loss), and 2) Cremaster muscle (loops of skeletal muscle derived from the internal oblique that elevate the testes closer to the pelvic floor).",
    optionRationales: {
      A: "Correct. The smooth muscle Dartos contracts to wrinkle scrotal skin and conserve heat.",
      B: "The skeletal Cremaster muscle elevates the testis toward the superficial inguinal ring.",
      C: "The bulbospongiosus muscle surrounds the bulb of the penis and compresses the erectile tissue.",
      D: "The ischiocavernosus muscle compresses the crura of the penis to maintain erection."
    },
    clinicalPearl: "The Cremasteric Reflex tests spinal roots L1-L2: stroking the medial thigh causes contraction of the cremaster muscle, elevating the ipsilateral testis.",
    tags: ["Ross-Wilson", "reproductive", "dartos-muscle", "scrotum", "thermoregulation"]
  },
  {
    id: "AP-111",
    course: "Anatomy & Physiology",
    topic: "The Cardiovascular System",
    subtopic: "Structure of Cardiac Myocytes (Intercalated Discs)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which microscopic junctional specializations within the Intercalated Discs of cardiac muscle tissue allow low-resistance ion flow, enabling the myocardium to contract as a functional syncytium?",
    options: [
      "Gap Junctions (Nexuses)",
      "Desmosomes (Maculae adherentes)",
      "Fasciae adherentes",
      "Tight junctions (Zonula occludens)"
    ],
    correctAnswer: 0,
    rationale: "Intercalated discs join cardiac myocytes end-to-end and contain three cell junctions: 1) Fascia adherentes (anchor actin filaments), 2) Desmosomes (provide mechanical strength to keep cells from pulling apart during contraction), and 3) Gap Junctions (tubular connexons that provide ionic continuity, allowing action potentials to spread rapidly between cells so the heart contracts as a coordinated syncytium).",
    optionRationales: {
      A: "Correct. Gap junctions provide low-resistance electrical coupling between adjacent myocytes.",
      B: "Desmosomes provide mechanical anchoring to resist contractile shear forces, but do not provide electrical coupling.",
      C: "Fascia adherentes anchor terminal sarcomere actin thin filaments.",
      D: "Tight junctions seal epithelia, but do not synchronize myocardial contractions."
    },
    clinicalPearl: "Gap junctions in intercalated discs allow the myocardium to act as an electrical syncytium: an action potential generated at the SA node depolarizes all atrial myocytes in milliseconds.",
    tags: ["Ross-Wilson", "cardiac-muscle", "intercalated-discs", "gap-junctions"]
  },
  {
    id: "AP-112",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Carina Anatomy and Bronchial Asymmetry",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Why do inhaled foreign bodies (such as aspirated food particles or small objects) lodge significantly more frequently in the Right Main (Primary) Bronchus than in the Left?",
    options: [
      "The right main bronchus is wider, shorter, and runs more vertically than the left main bronchus",
      "The left main bronchus is completely closed by a mucous plug in healthy adults",
      "The right lung lacks an inferior lobe, creating an unobstructed conduit",
      "The right main bronchus is surrounded by skeletal voluntary muscle"
    ],
    correctAnswer: 0,
    rationale: "The trachea bifurcates at the Carina (T4-T5) into two main bronchi. The Right Main Bronchus is wider, shorter (~2.5 cm vs 5 cm), and more vertical (aligned with the trachea at a ~25-degree angle vs ~45 degrees on the left). As a result, aspirated foreign bodies enter the right bronchial tree more readily.",
    optionRationales: {
      A: "Correct. The right main bronchus is wider, shorter, and more vertically aligned with the trachea.",
      B: "The left bronchus is open and delivers air to the left lung.",
      C: "The right lung has three lobes (superior, middle, inferior); it is not missing a lobe.",
      D: "Bronchi are surrounded by smooth muscle and hyaline cartilage, not voluntary skeletal muscle."
    },
    clinicalPearl: "Because the right main bronchus is more vertical and wider, aspirated foreign objects and aspiration pneumonias occur more commonly in the right lower and middle lobes.",
    tags: ["Ross-Wilson", "respiratory", "bronchi", "carina", "aspiration"]
  },
  {
    id: "AP-113",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "Parathyroid Gland Anatomy and Number",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "How many Parathyroid Glands are typically embedded on the posterior surface of the lobes of the thyroid gland in healthy adults?",
    options: [
      "Four (two superior and two inferior glands)",
      "Two (one on each lobe)",
      "Eight (two in each quadrant)",
      "One single midline gland"
    ],
    correctAnswer: 0,
    rationale: "Most humans possess four small parathyroid glands (roughly the size of an apple seed) embedded within the pretracheal fascia on the posterior capsule of the thyroid gland: two superior parathyroids (derived from the 4th pharyngeal pouch) and two inferior parathyroids (derived from the 3rd pharyngeal pouch).",
    optionRationales: {
      A: "Correct. Four parathyroid glands (two superior and two inferior) are standard.",
      B: "Two is abnormally low and indicates congenital hypoplasia or prior surgical excision.",
      C: "Supernumerary glands can occur ectopically, but eight is not the standard count.",
      D: "Parathyroids are paired lateral glands, not a single midline organ."
    },
    clinicalPearl: "Accidental removal or devascularization of all four parathyroid glands during total thyroidectomy leads to acute hypocalcemia and tetany within 24 to 48 hours.",
    tags: ["Ross-Wilson", "endocrine", "parathyroid-gland", "PTH", "anatomy"]
  },
  {
    id: "AP-114",
    course: "Anatomy & Physiology",
    topic: "The Skeletal System",
    subtopic: "Thoracic Cage: True, False, and Floating Ribs",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under anatomical classification, why are Ribs 8, 9, and 10 classified as 'False Ribs' (Vertebrochondral Ribs)?",
    options: [
      "Their costal cartilages do not articulate directly with the sternum, but attach to the costal cartilage of the rib immediately above",
      "They have no posterior vertebral articulation with the thoracic spine",
      "They contain no marrow cavity or periosteal covering",
      "Their anterior ends terminate freely in the abdominal wall muscles without any cartilage"
    ],
    correctAnswer: 0,
    rationale: "The 12 pairs of ribs are grouped as: 1) True ribs (Ribs 1-7): their costal cartilages attach directly to the sternum; 2) False ribs (Ribs 8-10): their cartilages attach to the cartilage of the rib above (forming the costal margin); 3) Floating ribs (Ribs 11-12): their anterior cartilaginous tips end freely in the abdominal musculature without attaching to the sternum.",
    optionRationales: {
      A: "Correct. Ribs 8-10 connect to the costal cartilage of the preceding rib rather than directly to the sternum.",
      B: "All ribs articulate posteriorly with thoracic vertebrae.",
      C: "All ribs are bones with periosteal vascularization and marrow cavities.",
      D: "Ribs ending freely without anterior cartilage attachment are the Floating ribs (11 and 12)."
    },
    clinicalPearl: "Ribs 1–7 = True (Vertebrosternal); Ribs 8–10 = False (Vertebrochondral); Ribs 11–12 = Floating (Vertebral).",
    tags: ["Ross-Wilson", "osteology", "ribs", "thoracic-cage", "costal-cartilage"]
  },
  {
    id: "AP-115",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Cerebral Lobes & Primary Functional Cortices",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Where is the Primary Somatosensory Cortex (Brodmann areas 3, 1, and 2) anatomically located in the human cerebral hemisphere?",
    options: [
      "Postcentral Gyrus of the Parietal Lobe",
      "Precentral Gyrus of the Frontal Lobe",
      "Superior Temporal Gyrus of the Temporal Lobe",
      "Calcarine Sulcus of the Occipital Lobe"
    ],
    correctAnswer: 0,
    rationale: "The postcentral gyrus, located immediately behind the central sulcus in the anterior parietal lobe, houses the Primary Somatosensory Cortex (Brodmann areas 3, 1, 2). It receives somatotopically organized sensory information (touch, pain, temperature, proprioception) from the opposite side of the body via thalamic projections.",
    optionRationales: {
      A: "Correct. The postcentral gyrus of the parietal lobe houses the primary somatosensory cortex.",
      B: "The precentral gyrus of the frontal lobe houses the Primary Motor Cortex (area 4).",
      C: "The superior temporal gyrus contains the Primary Auditory Cortex and Wernicke's area.",
      D: "The calcarine sulcus of the occipital lobe houses the Primary Visual Cortex (area 17)."
    },
    clinicalPearl: "Precentral gyrus = Motor (Frontal lobe). Postcentral gyrus = Sensory (Parietal lobe). The Central Sulcus separates the two.",
    tags: ["Ross-Wilson", "neuroanatomy", "somatosensory-cortex", "postcentral-gyrus"]
  },
  {
    id: "AP-116",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Microscopic Anatomy of Spleen: Malpighian Corpuscles",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In histological descriptions of the spleen, what are the Malpighian (Splenic) Corpuscles?",
    options: [
      "Aggregates of White Pulp lymphoid follicles surrounding central arterioles",
      "Renal glomeruli located in the cortex of the kidney",
      "Dilated blood sinusoids filled with dying red blood cells",
      "Clusters of sensory touch endings in dermal papillae"
    ],
    correctAnswer: 0,
    rationale: "Malpighian corpuscles of the spleen are nodules of white pulp. Each corpuscle consists of a central arteriole enclosed by a T-cell sheath (PALS) and an expanding B-cell lymphoid follicle, functioning as an immune filtering station for blood-borne antigens.",
    optionRationales: {
      A: "Correct. Malpighian corpuscles are the lymphoid nodules of the splenic white pulp.",
      B: "A renal corpuscle (glomerulus + capsule) is also historically called a Malpighian body, but in the spleen it refers to white pulp nodules.",
      C: "Venous sinusoids are components of the red pulp, not Malpighian corpuscles.",
      D: "Tactile sensory receptors in the skin are Meissner's corpuscles."
    },
    clinicalPearl: "Histological identification of the spleen relies on spotting the white pulp's Malpighian corpuscles, each centered around a central arteriole.",
    tags: ["Ross-Wilson", "spleen", "histology", "white-pulp", "malpighian-corpuscles"]
  },
  {
    id: "AP-117",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Anal Canal Anatomy: The Pectinate (Dentate) Line",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "The Pectinate (Dentate) Line marks an important anatomical and embryological division in the anal canal. How do tissues ABOVE the pectinate line differ from tissues BELOW it regarding innervation and pain sensation?",
    options: [
      "Above the line is innervated by autonomic sensory fibers (insensitive to sharp pain or cutting); Below the line is innervated by somatic nerves via the inferior rectal nerve (sensitive to pain, temperature, and touch)",
      "Above the line is sensitive to sharp touch; Below the line has zero pain sensation",
      "Above the line drains to superficial inguinal lymph nodes; Below the line drains to internal iliac nodes",
      "Both zones share identical somatic innervation from the sciatic nerve"
    ],
    correctAnswer: 0,
    rationale: "The pectinate line marks the junction of hindgut endoderm (above) and proctodeum ectoderm (below): 1) Above the line: covered by simple columnar epithelium, supplied by visceral autonomic fibers, insensitive to cutting/stretching (internal hemorrhoids are painless), and drains into the portal system and internal iliac nodes; 2) Below the line: covered by stratified squamous epithelium, innervated by somatic branches of the pudendal nerve (inferior rectal nerve), sensitive to sharp pain (external hemorrhoids are painful), and drains into the caval system and superficial inguinal nodes.",
    optionRationales: {
      A: "Correct. Above = Autonomic (insensitive to sharp pain); Below = Somatic/Pudendal (exquisitely sensitive to pain).",
      B: "This reverses the pain profiles of the anal canal.",
      C: "This reverses the lymphatic drainage (above drains to internal iliac; below drains to superficial inguinal).",
      D: "Innervation is divided between visceral autonomic and somatic pudendal supplies."
    },
    clinicalPearl: "Internal hemorrhoids (above the pectinate line) do not cause pain because they have visceral autonomic innervation. External hemorrhoids (below the line) are painful because they have somatic sensory innervation.",
    tags: ["Ross-Wilson", "anal-canal", "pectinate-line", "hemorrhoids", "innervation"]
  },
  {
    id: "AP-118",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Laryngeal Cartilages: Paired vs Unpaired",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The larynx contains 9 cartilages. Which three are classified as Single (Unpaired) Cartilages?",
    options: [
      "Thyroid, Cricoid, and Epiglottis",
      "Arytenoid, Corniculate, and Cuneiform",
      "Hyoid, Tracheal, and Bronchial",
      "Thyroid, Arytenoid, and Corniculate"
    ],
    correctAnswer: 0,
    rationale: "The 9 laryngeal cartilages comprise 3 Unpaired cartilages: Thyroid (largest, forms Adam's apple), Cricoid (complete ring), and Epiglottis (leaf-shaped elastic cartilage); and 3 Paired cartilages: Arytenoids (pyramidal, anchoring vocal cords), Corniculates, and Cuneiforms.",
    optionRationales: {
      A: "Correct. Thyroid, Cricoid, and Epiglottis are the three single/unpaired laryngeal cartilages.",
      B: "Arytenoid, corniculate, and cuneiform are the three paired cartilages.",
      C: "The hyoid is a bone, not a laryngeal cartilage; tracheal rings lie below the larynx.",
      D: "Arytenoid and corniculate are paired structures."
    },
    clinicalPearl: "The Cricoid cartilage is the ONLY complete cartilaginous ring surrounding the human airway. Applying posterior pressure to it during intubation (Sellick's maneuver) occludes the esophagus to prevent regurgitation.",
    tags: ["Ross-Wilson", "larynx", "cartilages", "cricoid", "epiglottis"]
  },
  {
    id: "AP-119",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Cranial Nerves: Muscles of Mastication",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which cranial nerve provides motor innervation to the four primary muscles of mastication (Masseter, Temporalis, Medial Pterygoid, and Lateral Pterygoid)?",
    options: [
      "Mandibular Division of the Trigeminal Nerve (CN V3)",
      "Facial Nerve (CN VII)",
      "Hypoglossal Nerve (CN XII)",
      "Glossopharyngeal Nerve (CN IX)"
    ],
    correctAnswer: 0,
    rationale: "The motor root of the Trigeminal Nerve travels exclusively with its Mandibular division (CN V3). It supplies the muscles of mastication: Masseter, Temporalis, Medial pterygoid, and Lateral pterygoid, as well as the mylohyoid, anterior belly of the digastric, tensor veli palatini, and tensor tympani.",
    optionRationales: {
      A: "Correct. CN V3 (Mandibular nerve) innervates all muscles of mastication.",
      B: "CN VII innervates the muscles of facial expression, not mastication.",
      C: "CN XII innervates intrinsic and extrinsic muscles of the tongue.",
      D: "CN IX innervates the stylopharyngeus muscle."
    },
    clinicalPearl: "Muscles of facial expression = CN VII (Facial). Muscles of mastication (chewing) = CN V3 (Mandibular branch of Trigeminal).",
    tags: ["Ross-Wilson", "cranial-nerves", "trigeminal-nerve", "mastication"]
  },
  {
    id: "AP-120",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Structure of a Synovial Joint Capsule",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which layer of the articular capsule of a synovial joint secretes the viscous, hyaluronic acid-rich Synovial Fluid that lubricates joint surfaces and nourishes avascular articular cartilage?",
    options: [
      "Synovial Membrane (Synovium)",
      "Fibrous Capsule",
      "Hyaline Articular Cartilage",
      "Subchondral Cortical Bone"
    ],
    correctAnswer: 0,
    rationale: "The articular capsule has an outer tough Fibrous Capsule that provides structural stability and an inner vascular Synovial Membrane. The synovial membrane contains specialized fibroblast-like synoviocytes (Type B cells) that secrete synovial fluid containing hyaluronic acid and lubricin, which lubricates joint movements and provides metabolic exchange for avascular cartilage.",
    optionRationales: {
      A: "Correct. The inner synovial membrane synthesizes and secretes lubricating synovial fluid.",
      B: "The outer fibrous capsule provides mechanical containment and ligamentous stability.",
      C: "Articular cartilage lines bone ends, absorbing impact; it does not produce the bulk fluid.",
      D: "Subchondral bone supports the cartilage bed."
    },
    clinicalPearl: "Articular cartilage has no blood vessels, nerves, or lymphatics. It relies on cyclic compression and decompression of synovial fluid during joint movement to diffuse nutrients into its matrix.",
    tags: ["Ross-Wilson", "joints", "synovial-membrane", "synovial-fluid"]
  },
  {
    id: "AP-121",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Loop of Henle Countercurrent Permeability",
    difficulty: "Hard",
    type: "Single Best Response",
    question: "In the functional architecture of the loop of Henle, what is the key physiological difference in permeability between the Thin Descending Limb and the Thick Ascending Limb?",
    options: [
      "The descending limb is freely permeable to water but impermeable to sodium chloride; the thick ascending limb actively pumps out sodium chloride and is completely impermeable to water",
      "The descending limb pumps out sodium ions; the ascending limb absorbs water",
      "Both limbs are completely impermeable to water and electrolytes",
      "The ascending limb absorbs glucose; the descending limb secretes creatinine"
    ],
    correctAnswer: 0,
    rationale: "Ross & Wilson emphasizes the countercurrent multiplier mechanism: 1) The thin descending limb is permeable to water (via aquaporin-1 channels) but impermeable to solutes, causing luminal fluid to concentrate as it descends into the medulla; 2) The thick ascending limb actively pumps out Na+, K+, and Cl- (via NKCC2 cotransporters) into the interstitium and is impermeable to water, diluting the luminal fluid while maintaining high medullary interstitial osmolality.",
    optionRationales: {
      A: "Correct. Descending limb allows water outflow; ascending limb transports solutes without water, driving the countercurrent multiplier.",
      B: "This reverses the directional transport of water and solutes.",
      C: "If both were impermeable, the osmotic concentration gradient could not develop.",
      D: "Glucose is reabsorbed in the proximal convoluted tubule, not the loop of Henle."
    },
    clinicalPearl: "Fluid entering the loop of Henle is isotonic (300 mOsm/kg), reaches maximum concentration at the hairpin bend in the inner medulla (1200 mOsm/kg), and exits the ascending limb into the distal tubule hypotonic (100 mOsm/kg).",
    tags: ["Ross-Wilson", "renal", "loop-of-henle", "countercurrent-multiplier"]
  },
  {
    id: "AP-122",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Cardiac Valve Anatomy: Chordae Tendineae",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary function of the Chordae Tendineae and Papillary Muscles situated within the left and right ventricles of the heart?",
    options: [
      "Preventing eversion and prolapse of the atrioventricular (Tricuspid and Mitral) valve cusps into the atria during ventricular systole",
      "Opening the aortic and pulmonary valves during diastole",
      "Directly generating ventricular contractile ejection force",
      "Pumping venous blood into the coronary sinus"
    ],
    correctAnswer: 0,
    rationale: "Chordae tendineae are fibrous cords connecting the margins of the atrioventricular (mitral and tricuspid) valves to the papillary muscles projecting from the ventricular walls. When the ventricles contract, the papillary muscles contract simultaneously, pulling on the chordae tendineae to anchor the valve flaps and prevent them from being blown backward (prolapsing) into the atria under high systolic pressure.",
    optionRationales: {
      A: "Correct. Chordae tendineae prevent the AV valve leaflets from prolapsing backward into the atria during systole.",
      B: "Semilunar valves (aortic and pulmonic) open passively in response to pressure gradients and have no chordae tendineae.",
      C: "Ventricular ejection is driven by the circular and spiral layers of the myocardium.",
      D: "Coronary sinus drainage is passive and unrelated to papillary muscular pull."
    },
    clinicalPearl: "Rupture of a papillary muscle or its chordae tendineae (often caused by an acute myocardial infarction) triggers acute, severe mitral regurgitation and cardiogenic pulmonary edema.",
    tags: ["Ross-Wilson", "cardiovascular", "chordae-tendineae", "papillary-muscles", "heart-valves"]
  },
  {
    id: "AP-123",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Hepatic Lobule vs Central Vein Anatomy",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the classical structural model of a hexagonal hepatic lobule, what vascular structure occupies the absolute center of the lobule, receiving blood from surrounding hepatic sinusoids?",
    options: [
      "Central Vein",
      "Portal Vein tributary",
      "Hepatic Artery branch",
      "Interlobular Bile Duct"
    ],
    correctAnswer: 0,
    rationale: "The classical liver lobule is a hexagonal prism. At each of its six corners sits a Portal Triad (containing a branch of the portal vein, hepatic artery, and bile duct). Blood from the portal vein and hepatic artery mixes within the sinusoids and flows inward toward the center, where it drains into the single Central Vein. Central veins coalesce to form the sublobular and hepatic veins.",
    optionRationales: {
      A: "Correct. The central vein lies at the center of the classical hexagonal liver lobule.",
      B: "Portal vein branches sit peripherally at the corners of the lobule within portal triads.",
      C: "Hepatic artery branches sit at the peripheral portal triads.",
      D: "Bile ducts sit at the corners of the lobule, collecting bile that flows outward from hepatocytes."
    },
    clinicalPearl: "Blood flows INWARD from the peripheral portal triads to the central vein. Bile flows OUTWARD from hepatocytes toward peripheral bile ducts.",
    tags: ["Ross-Wilson", "liver", "central-vein", "hepatic-lobule", "histology"]
  },
  {
    id: "AP-124",
    course: "Anatomy & Physiology",
    topic: "The Reproductive System",
    subtopic: "Male Accessory Glands & Semen Volume",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which accessory male reproductive glands produce approximately 60% of total semen volume, secreting a viscous, alkaline fluid rich in Fructose to provide metabolic energy for sperm motility?",
    options: [
      "Seminal Vesicles (Glands)",
      "Prostate Gland",
      "Bulbourethral (Cowper's) Glands",
      "Epididymis"
    ],
    correctAnswer: 0,
    rationale: "The paired Seminal Vesicles produce ~60% of semen volume. Their secretion is thick, alkaline (to buffer acidic vaginal fluids), and contains Fructose (the primary energy substrate for sperm flagellar motility), prostaglandins (which promote smooth muscle contractions in the female reproductive tract), and clotting proteins.",
    optionRationales: {
      A: "Correct. Seminal vesicles secrete ~60% of semen volume, providing fructose for sperm energy.",
      B: "The prostate gland secretes ~25-30% of semen, contributing a thin, milky fluid with citric acid, acid phosphatase, and PSA.",
      C: "Bulbourethral glands secrete ~1% of semen, producing clear alkaline mucus that lubricates the urethra before ejaculation.",
      D: "The epididymis stores sperm while they mature and gain motility, but does not secrete the bulk fluid volume of semen."
    },
    clinicalPearl: "Fructose in seminal fluid is synthesized exclusively by the seminal vesicles; testing for fructose confirms whether an ejaculate contains seminal vesicle secretions.",
    tags: ["Ross-Wilson", "reproductive", "seminal-vesicles", "fructose", "male-anatomy"]
  },
  {
    id: "AP-125",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Broca's vs Wernicke's Language Cortices",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Where is Broca's Motor Speech Area (Brodmann areas 44 and 45) anatomically located in the dominant cerebral hemisphere?",
    options: [
      "Inferior Frontal Gyrus of the Frontal Lobe",
      "Superior Temporal Gyrus of the Temporal Lobe",
      "Postcentral Gyrus of the Parietal Lobe",
      "Occipital Pole"
    ],
    correctAnswer: 0,
    rationale: "Broca's area (Brodmann areas 44 and 45) is located in the inferior frontal gyrus of the dominant hemisphere (usually the left). It plans and coordinates the motor execution of speech. Wernicke's area (receptive language comprehension) is located in the posterior part of the superior temporal gyrus.",
    optionRationales: {
      A: "Correct. Broca's area is located in the inferior frontal gyrus of the frontal lobe.",
      B: "The superior temporal gyrus houses Wernicke's area, which handles speech comprehension.",
      C: "The postcentral gyrus is the primary somatosensory cortex.",
      D: "The occipital pole contains the primary visual cortex."
    },
    clinicalPearl: "Broca's aphasia: Speech is non-fluent, halting, and effortful, but comprehension remains intact ('expressive aphasia'). Wernicke's aphasia: Speech is fluent but nonsensical, and comprehension is impaired ('receptive aphasia').",
    tags: ["Ross-Wilson", "neuroanatomy", "Broca-area", "language", "aphasia"]
  },
  {
    id: "AP-126",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Partial Pressures of Respiratory Gases",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Under normal sea-level conditions (barometric pressure = 760 mmHg), what are the standard partial pressures of Oxygen (PO2) and Carbon Dioxide (PCO2) in freshly oxygenated blood exiting the pulmonary capillaries?",
    options: [
      "PaO2 = approximately 100 mmHg; PaCO2 = approximately 40 mmHg",
      "PaO2 = approximately 40 mmHg; PaCO2 = approximately 100 mmHg",
      "PaO2 = 760 mmHg; PaCO2 = 0 mmHg",
      "PaO2 = 45 mmHg; PaCO2 = 45 mmHg"
    ],
    correctAnswer: 0,
    rationale: "In pulmonary capillaries, gas diffusion equilibrates with alveolar gas: alveolar PO2 is ~104 mmHg and alveolar PCO2 is ~40 mmHg. Freshly oxygenated pulmonary venous and systemic arterial blood has a PaO2 of 95 to 100 mmHg and a PaCO2 of approximately 40 mmHg. Mixed venous blood arriving from the tissues has a PO2 of ~40 mmHg and a PCO2 of ~45 mmHg.",
    optionRationales: {
      A: "Correct. Normal arterial blood values are PaO2 ~100 mmHg and PaCO2 ~40 mmHg.",
      B: "This reverses the gas values; high PCO2 and low PO2 indicate severe respiratory failure.",
      C: "760 mmHg is the total atmospheric pressure of all combined gases, not oxygen alone.",
      D: "45 mmHg PO2 and 45 mmHg PCO2 describe mixed deoxygenated venous blood."
    },
    clinicalPearl: "Normal arterial blood values: PaO2 = 80–100 mmHg; PaCO2 = 35–45 mmHg; pH = 7.35–7.45.",
    tags: ["Ross-Wilson", "respiratory", "partial-pressures", "gas-exchange", "ABG"]
  },
  {
    id: "AP-127",
    course: "Anatomy & Physiology",
    topic: "The Skeletal System",
    subtopic: "Joint Stability: Fibrous Joints (Sutures and Syndesmoses)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under the functional classification of joints, how are Sutures (such as the coronal and sagittal sutures uniting the bones of the skull) classified based on degree of mobility?",
    options: [
      "Synarthroses (immovable joints)",
      "Amphiarthroses (slightly movable joints)",
      "Diarthroses (freely movable joints)",
      "Synovial joints"
    ],
    correctAnswer: 0,
    rationale: "Functional joint classification categorizes joints by movement: 1) Synarthroses (immovable joints: cranial sutures, gomphoses), 2) Amphiarthroses (slightly movable joints: pubic symphysis, intervertebral discs), and 3) Diarthroses (freely movable joints: all synovial joints like knee, elbow, hip).",
    optionRationales: {
      A: "Correct. Cranial sutures are fixed, immovable fibrous joints (Synarthroses).",
      B: "Amphiarthroses are cartilaginous joints permitting slight movement, such as the pubic symphysis.",
      C: "Diarthroses are freely movable joints with synovial cavities.",
      D: "Synovial joints have joint cavities and articular cartilage, whereas cranial sutures are fibrous."
    },
    clinicalPearl: "Functional classification: Synarthrosis = Immovable. Amphiarthrosis = Slightly movable. Diarthrosis = Freely movable.",
    tags: ["Ross-Wilson", "joints", "synarthrosis", "sutures", "skull"]
  },
  {
    id: "AP-128",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Gastroesophageal Junction: Lower Esophageal Sphincter (LES)",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What physiological mechanism prevents the reflux of gastric acid into the lower esophagus, despite the high pressure gradient between the positive-pressure abdominal cavity and negative-pressure thoracic cavity?",
    options: [
      "Tonic resting contraction of the Lower Esophageal Sphincter (LES) reinforced by the right crus of the diaphragm",
      "Continuous retrograde peristalsis of the upper thoracic esophagus",
      "Secretion of a neutral oil layer that floats on top of gastric chyme",
      "Total closure of the pyloric valve during meals"
    ],
    correctAnswer: 0,
    rationale: "The antireflux barrier at the gastroesophageal junction consists of: 1) The physiological smooth muscular Lower Esophageal Sphincter (LES), which maintains tonic resting closure pressure (15-25 mmHg), 2) The diaphragmatic pinchcock action of the right crus surrounding the esophageal hiatus, 3) The acute Angle of His, and 4) An intra-abdominal segment of the esophagus that is compressed closed when abdominal pressure rises.",
    optionRationales: {
      A: "Correct. The high-pressure tone of the LES supported by the right crus of the diaphragm maintains the antireflux barrier.",
      B: "Retrograde peristalsis occurs in vomiting, not during normal esophageal resting tone.",
      C: "There is no specialized oil layer sealing the gastric pool.",
      D: "Pyloric closure meters duodenal delivery, but does not directly prevent esophageal reflux."
    },
    clinicalPearl: "Incompetence or transient inappropriate relaxation of the Lower Esophageal Sphincter (LES) causes Gastroesophageal Reflux Disease (GERD), leading to heartburn and potential Barrett's metaplasia.",
    tags: ["Ross-Wilson", "esophagus", "LES", "GERD", "gastrointestinal"]
  },
  {
    id: "AP-129",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Glomerular Filtration Rate (GFR) Normal Baseline",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In a healthy adult human with normal renal function, what is the average normal Glomerular Filtration Rate (GFR) produced across both kidneys combined?",
    options: [
      "Approximately 125 mL/minute (roughly 180 Liters per day)",
      "Approximately 10 mL/minute (roughly 14 Liters per day)",
      "Approximately 1,000 mL/minute (roughly 1,400 Liters per day)",
      "Approximately 1 mL/minute (roughly 1.5 Liters per day)"
    ],
    correctAnswer: 0,
    rationale: "Normal GFR in a healthy adult is ~125 mL/min in males (115 mL/min in females), which equates to roughly 180 Liters of filtrate formed per day. Because 99% of this filtrate is reabsorbed along the nephron, normal urine output is roughly 1 to 1.5 Liters per day.",
    optionRationales: {
      A: "Correct. Normal GFR is ~125 mL/min (~180 L/day).",
      B: "10 mL/min indicates severe end-stage renal disease (ESRD) requiring dialysis.",
      C: "1,000 mL/min is close to total renal blood flow (~1.2 L/min), not the filtered fraction.",
      D: "1 mL/min describes the rate of final urine excretion, not the initial rate of glomerular filtration."
    },
    clinicalPearl: "The kidneys filter ~180 Liters of plasma per day, but reabsorb >99% of it, excreting only 1.5 Liters of urine per 24 hours.",
    tags: ["Ross-Wilson", "renal", "GFR", "filtration-rate", "urine-volume"]
  },
  {
    id: "AP-130",
    course: "Anatomy & Physiology",
    topic: "Special Senses",
    subtopic: "Aqueous Humor Dynamics & Schlemm's Canal",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Where is Aqueous Humor continuously produced within the eye, and through which trabecular drainage channel in the iridocorneal angle does it exit into the venous circulation to maintain normal intraocular pressure (10–21 mmHg)?",
    options: [
      "Produced by the Ciliary Processes of the ciliary body; drained via the Canal of Schlemm (Scleral Venous Sinus)",
      "Produced by the Lacrimal Gland; drained via the Nasolacrimal Duct",
      "Produced by the Optic Disc; drained via the Superior Ophthalmic Vein",
      "Produced by the Choroid; drained via the Central Retinal Artery"
    ],
    correctAnswer: 0,
    rationale: "Aqueous humor is secreted by the pigmented and non-pigmented ciliary processes into the posterior chamber of the eye. It flows forward through the pupil into the anterior chamber, percolates through the trabecular meshwork at the iridocorneal angle, and drains into the Canal of Schlemm (scleral venous sinus), which empties into episcleral veins to maintain intraocular pressure (normal: 10–21 mmHg).",
    optionRationales: {
      A: "Correct. Ciliary processes produce aqueous humor; the Canal of Schlemm drains it.",
      B: "The lacrimal gland produces tears on the external ocular surface, draining into the nasolacrimal duct.",
      C: "The optic disc contains axons; it does not produce intraocular fluid.",
      D: "The choroid is a vascular tunic that supplies the outer retina, not the primary driver of aqueous humor turnover."
    },
    clinicalPearl: "Obstruction of aqueous humor outflow through the trabecular meshwork into the Canal of Schlemm increases intraocular pressure, causing Glaucoma and optic nerve damage.",
    tags: ["Ross-Wilson", "eye", "aqueous-humor", "glaucoma", "canal-of-schlemm"]
  },
  {
    id: "AP-131",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Cardiac Fibrous Skeleton Functions",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the primary electrical function of the dense cardiac fibrous skeleton that surrounds the four heart valves?",
    options: [
      "It acts as an electrical insulator between atria and ventricles, forcing impulses to pass solely through the AV bundle",
      "It generates spontaneous phase 4 diastolic action potentials to pace the heart",
      "It allows electrical impulses to diffuse freely and randomly across the myocardium",
      "It stores calcium ions during ventricular diastole"
    ],
    correctAnswer: 0,
    rationale: "The cardiac fibrous skeleton consists of four dense collagenous rings (annuli fibrosi) and trigones. Structurally, it anchors valve cusps; electrically, it acts as an absolute non-conductive insulator separating the atrial and ventricular syncytia, ensuring that the Atrioventricular (AV) Bundle of His is the only physiological electrical pathway conducting impulses from atria to ventricles.",
    optionRationales: {
      A: "Correct. The fibrous skeleton insulates the ventricles from atria, channeling conduction through the AV bundle.",
      B: "Pacemaker depolarization is generated by specialized nodal myocytes, not fibrous collagen rings.",
      C: "Free random electrical diffusion would cause chaotic fibrillation instead of coordinated pumping.",
      D: "Calcium storage is the role of the sarcoplasmic reticulum, not collagenous fibrous rings."
    },
    clinicalPearl: "An accessory conduction pathway that bypasses the insulating fibrous skeleton (Bundle of Kent) causes Wolff-Parkinson-White (WPW) pre-excitation syndrome.",
    tags: ["Ross-Wilson", "cardiovascular", "fibrous-skeleton", "electrophysiology"]
  },
  {
    id: "AP-132",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Nasal Cavity Conchae (Turbinates)",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary physiological function of the three pairs of scroll-like nasal conchae (turbinates) projecting from the lateral walls of the nasal cavity?",
    options: [
      "Increasing surface area and creating turbulent airflow to warm, humidify, and filter inspired air",
      "Housing the parathyroid hormone receptors for systemic calcium regulation",
      "Directly exchanging carbon dioxide with the external atmosphere",
      "Generating high-frequency sound resonance for human speech articulation"
    ],
    correctAnswer: 0,
    rationale: "The superior, middle, and inferior conchae project into the nasal cavity, subdividing it into meatuses. Covered by pseudostratified ciliated columnar epithelium with a rich venous plexus, they create turbulent airflow, maximizing contact with inspired air to warm it to body temperature, humidify it to 100%, and trap particulates in mucus.",
    optionRationales: {
      A: "Correct. Turbinates increase surface area and air turbulence to warm, humidify, and filter air.",
      B: "Parathyroid hormone receptors are located in bone and kidney, not nasal conchae.",
      C: "Gas exchange occurs across alveolar-capillary membranes, never in the nasal cavity.",
      D: "Speech articulation is mediated by the vocal cords, tongue, palate, and lips, with sinuses providing resonance."
    },
    clinicalPearl: "The extensive venous plexus covering the inferior and middle conchae swells alternatingly every few hours (the nasal cycle), periodically resting each side from airflow dehydration.",
    tags: ["Ross-Wilson", "respiratory", "nasal-conchae", "turbinates", "conditioning"]
  },
  {
    id: "AP-133",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Stomach Curvatures and Omenta Attachments",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which two-layered peritoneal fold connects the lesser curvature of the stomach and the proximal duodenum to the inferior surface of the liver?",
    options: [
      "Lesser Omentum (Hepatogastric and Hepatoduodenal ligaments)",
      "Greater Omentum",
      "Mesoappendix",
      "Transverse Mesocolon"
    ],
    correctAnswer: 0,
    rationale: "The Lesser Omentum is a continuous peritoneal sheet extending from the lesser curvature of the stomach and first part of the duodenum to the porta hepatis of the liver. It is divided anatomically into the thin Hepatogastric ligament and the thicker, free-edged Hepatoduodenal ligament (which carries the portal triad).",
    optionRationales: {
      A: "Correct. The Lesser Omentum connects the stomach's lesser curvature to the liver.",
      B: "The Greater Omentum hangs down like an apron from the greater curvature over the small intestines.",
      C: "The mesoappendix suspends the appendix from the mesentery of the ileum.",
      D: "The transverse mesocolon suspends the transverse colon from the posterior abdominal wall."
    },
    clinicalPearl: "The right free margin of the lesser omentum (hepatoduodenal ligament) houses the Portal Triad and forms the anterior boundary of the foramen of Winslow.",
    tags: ["Ross-Wilson", "lesser-omentum", "stomach", "peritoneum", "anatomy"]
  },
  {
    id: "AP-134",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "White Matter vs Gray Matter Organization",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "In cross-sections of the human central nervous system, what cellular components predominantly give Gray Matter and White Matter their characteristic appearances?",
    options: [
      "Gray matter contains neuronal cell bodies, dendrites, and unmyelinated synapses; White matter contains myelinated nerve axon tracts",
      "Gray matter contains only connective tissue; White matter contains only blood vessels",
      "Gray matter is composed exclusively of cerebrospinal fluid; White matter is solid bone",
      "Gray matter contains dead neurons; White matter contains proliferating stem cells"
    ],
    correctAnswer: 0,
    rationale: "Gray matter consists of neuronal somas (cell bodies), dendrites, initial unmyelinated axon segments, synaptic neuropil, and glial cells, which give it a gray-pink hue. White matter consists of bundles of lipid-rich, myelinated nerve axons organized into ascending and descending tracts, giving it a bright white appearance.",
    optionRationales: {
      A: "Correct. Gray = Cell bodies and dendrites; White = Myelinated axonal tracts.",
      B: "Connective tissue is minimal inside brain parenchyma; myelin lipids give white matter its color.",
      C: "CSF is a clear liquid found inside ventricles and the subarachnoid space.",
      D: "Both gray and white matter consist of living, active neural tissue."
    },
    clinicalPearl: "In the brain, gray matter forms the outer cortex and deep subcortical nuclei, while white matter lies deep. In the spinal cord, this arrangement is reversed: white matter is peripheral and gray matter forms an inner butterfly shape.",
    tags: ["Ross-Wilson", "neuroanatomy", "gray-matter", "white-matter", "histology"]
  },
  {
    id: "AP-135",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Types of Bone Cells: Mechanotransduction",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which mature bone cells, trapped within tiny lacunae and interconnected by dendritic processes through canaliculi, act as the primary mechanosensory cells of the skeletal system?",
    options: [
      "Osteocytes",
      "Osteoclasts",
      "Osteoprogenitor cells",
      "Chondroblasts"
    ],
    correctAnswer: 0,
    rationale: "Osteocytes represent >90% of all cells in mature bone. They are osteoblasts that have become entombed within their own calcified mineral matrix inside lacunae. Their long dendritic processes travel through microscopic canaliculi, contacting adjacent osteocytes via gap junctions to sense mechanical strain, fluid flow, and microcracks, signaling osteoblasts and osteoclasts to remodel bone.",
    optionRationales: {
      A: "Correct. Osteocytes sense mechanical stress and coordinate bone remodeling signals.",
      B: "Osteoclasts are multinucleated macrophage-lineage cells that resorb bone.",
      C: "Osteoprogenitor cells are mesenchymal stem cells that differentiate into osteoblasts.",
      D: "Chondroblasts synthesize cartilage, not mature bone matrix."
    },
    clinicalPearl: "Osteocyte apoptosis triggered by estrogen withdrawal or disuse accelerates osteoclast activation, promoting postmenopausal and immobility-induced osteoporosis.",
    tags: ["Ross-Wilson", "osteology", "osteocytes", "canaliculi", "bone-biology"]
  },
  {
    id: "AP-136",
    course: "Anatomy & Physiology",
    topic: "The Endocrine System",
    subtopic: "Pineal Gland & Melatonin Secretion",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "The Pineal Gland, attached to the roof of the third ventricle in the epithalamus, synthesizes and secretes which hormone in response to darkness to regulate the circadian sleep-wake cycle?",
    options: [
      "Melatonin",
      "Melanin",
      "Serotonin",
      "Dopamine"
    ],
    correctAnswer: 0,
    rationale: "The pineal gland secretes Melatonin (derived from tryptophan and serotonin) in response to darkness. Photic signals detected by retinal ganglion cells travel along the retinohypothalamic tract to the suprachiasmatic nucleus (SCN). In darkness, sympathetic postganglionic signaling triggers pinealocytes to release melatonin, promoting sleepiness.",
    optionRationales: {
      A: "Correct. Melatonin is secreted by the pineal gland during darkness to regulate circadian rhythms.",
      B: "Melanin is a dark pigment synthesized by epidermal melanocytes to protect against UV radiation.",
      C: "Serotonin is the biochemical precursor to melatonin, not the primary pineal circadian hormone released.",
      D: "Dopamine is a catecholaminergic neurotransmitter."
    },
    clinicalPearl: "Blue light from smartphone and laptop screens suppresses pineal melatonin secretion, disrupting sleep onset.",
    tags: ["Ross-Wilson", "endocrine", "pineal-gland", "melatonin", "circadian-rhythm"]
  },
  {
    id: "AP-137",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Anatomy of the Renal Medulla & Pyramids",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the anatomical name for the apex of each triangular Renal Pyramid that projects into a minor calyx to deliver newly formed urine?",
    options: [
      "Renal Papilla",
      "Renal Column (of Bertin)",
      "Renal Sinus",
      "Renal Pelvis"
    ],
    correctAnswer: 0,
    rationale: "The renal medulla is divided into 8 to 18 conical Renal Pyramids. The base of each pyramid faces the cortex, while its pointed apex is called the Renal Papilla. The papilla is perforated by the ducts of Bellini (cribriform area) and projects directly into a cuplike Minor Calyx, emptying urine into the collecting system.",
    optionRationales: {
      A: "Correct. The renal papilla is the apex of the renal pyramid emptying into a minor calyx.",
      B: "Renal columns (of Bertin) are cortical tissue extensions that descend between adjacent pyramids.",
      C: "The renal sinus is the fat-filled internal cavity containing calyces, pelvis, and vessels.",
      D: "The renal pelvis is the large funnel-shaped basin formed by the confluence of major calyces."
    },
    clinicalPearl: "Renal papillary necrosis (sloughing of the papillae) can be triggered by chronic analgesic overuse (NSAIDs) or sickle cell disease, obstructing urinary outflow.",
    tags: ["Ross-Wilson", "renal", "kidney-anatomy", "renal-papilla", "pyramids"]
  },
  {
    id: "AP-138",
    course: "Anatomy & Physiology",
    topic: "The Cardiovascular System",
    subtopic: "Major Veins of the Lower Limb: Saphenous Systems",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The Great (Long) Saphenous Vein—the longest vein in the human body—ascends the medial aspect of the leg and thigh before piercing the cribriform fascia at the saphenous opening to drain into which deep vessel?",
    options: [
      "Femoral Vein",
      "Popliteal Vein",
      "External Iliac Vein",
      "Deep Femoral (Profunda Femoris) Vein"
    ],
    correctAnswer: 0,
    rationale: "The great saphenous vein originates from the medial end of the dorsal venous arch of the foot, ascends anterior to the medial malleolus, runs along the medial side of the leg and thigh, and penetrates the saphenous opening in the fascia lata to terminate directly into the Femoral Vein within the femoral triangle.",
    optionRationales: {
      A: "Correct. The great saphenous vein terminates in the Femoral Vein.",
      B: "The Small (short) saphenous vein drains into the Popliteal Vein in the popliteal fossa behind the knee.",
      C: "The femoral vein becomes the external iliac vein only after passing deep to the inguinal ligament.",
      D: "The profunda femoris is a deep branch that joins the femoral vein lower in the thigh."
    },
    clinicalPearl: "The great saphenous vein is the primary autologous graft harvested for Coronary Artery Bypass Graft (CABG) surgery because of its accessibility, length, and diameter.",
    tags: ["Ross-Wilson", "vascular", "great-saphenous-vein", "femoral-vein", "lower-limb"]
  },
  {
    id: "AP-139",
    course: "Anatomy & Physiology",
    topic: "The Respiratory System",
    subtopic: "Anatomy of the Pleura and Serous Cavity",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Which layer of the serous pleural sac is intimately attached to the outer surface of the lungs, dipping into the fissures between pulmonary lobes?",
    options: [
      "Visceral pleura",
      "Parietal pleura",
      "Endothoracic fascia",
      "Costal pleura"
    ],
    correctAnswer: 0,
    rationale: "The pleura consists of two continuous layers: the Visceral Pleura covers the outer surface of the lung parenchyma and dips into the interlobar fissures. The Parietal Pleura lines the inner surface of the thoracic wall, diaphragm, and mediastinum. Between them lies the potential pleural space containing serous lubricating fluid.",
    optionRationales: {
      A: "Correct. The visceral pleura adheres tightly to lung parenchyma and lines the fissures.",
      B: "Parietal pleura lines the chest wall, diaphragm, and mediastinum.",
      C: "Endothoracic fascia is the loose connective tissue layer anchoring parietal pleura to the ribs.",
      D: "Costal pleura is a regional subdivision of the parietal pleura lining the ribs."
    },
    clinicalPearl: "Visceral pleura is innervated by autonomic fibers and lacks pain receptors; parietal pleura is innervated by somatic nerves (intercostal and phrenic), causing sharp, localized pain during pleurisy.",
    tags: ["Ross-Wilson", "respiratory", "pleura", "visceral-pleura", "lungs"]
  },
  {
    id: "AP-140",
    course: "Anatomy & Physiology",
    topic: "The Reproductive System",
    subtopic: "Fallopian (Uterine) Tube Subdivisions & Fertilization Site",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In what specific anatomical section of the Fallopian (uterine) tube does normal physiological fertilization of the secondary oocyte by a spermatozoon occur?",
    options: [
      "Ampulla",
      "Isthmus",
      "Infundibulum",
      "Interstitial (intramural) part"
    ],
    correctAnswer: 0,
    rationale: "The fallopian tube has four segments from lateral to medial: 1) Infundibulum (funnel-shaped end bearing fimbriae), 2) Ampulla (the widest and longest section, representing the normal site of fertilization), 3) Isthmus (the narrow, thick-walled segment joining the uterus), and 4) Interstitial/intramural part (penetrating the uterine wall).",
    optionRationales: {
      A: "Correct. The ampulla is the widest segment where fertilization normally occurs.",
      B: "The isthmus is the narrow proximal segment conveying the early blastocyst to the uterus.",
      C: "The infundibulum catches the ovulated oocyte with its fimbriae.",
      D: "The intramural segment lies within the uterine myometrial wall."
    },
    clinicalPearl: "The ampulla is the most common site of ectopic tubal pregnancies, accounting for >70% of all ectopic gestations.",
    tags: ["Ross-Wilson", "reproductive", "fallopian-tube", "ampulla", "fertilization"]
  },
  {
    id: "AP-141",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Corpus Callosum Anatomy",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary function of the Corpus Callosum, the largest commissural white matter tract in the human brain?",
    options: [
      "Interconnecting homologous areas of the left and right cerebral hemispheres to allow interhemispheric communication",
      "Regulating basic respiratory rhythmicity in the pons",
      "Secreting cerebrospinal fluid into the lateral ventricles",
      "Relaying auditory sound waves directly to the inner ear"
    ],
    correctAnswer: 0,
    rationale: "The Corpus Callosum is a C-shaped commissural bundle composed of >200 million myelinated axons. It arches over the lateral ventricles, bridging the left and right cerebral hemispheres to enable transfer of sensory, motor, and cognitive information between sides.",
    optionRationales: {
      A: "Correct. The corpus callosum connects corresponding regions of the two cerebral hemispheres.",
      B: "Respiratory rhythmicity is controlled by medullary and pontine centers.",
      C: "CSF is secreted by choroid plexuses, not the corpus callosum.",
      D: "Auditory signaling travels along the vestibulocochlear nerve (CN VIII) and lateral lemniscus."
    },
    clinicalPearl: "Surgical severance of the corpus callosum (corpus callosotomy) is performed in refractory epilepsy to prevent focal seizures from spreading across both hemispheres, producing 'split-brain' syndrome.",
    tags: ["Ross-Wilson", "neuroanatomy", "corpus-callosum", "commissure"]
  },
  {
    id: "AP-142",
    course: "Anatomy & Physiology",
    topic: "The Musculoskeletal System",
    subtopic: "Upper Limb Osteology: Clavicle Function",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "What is the primary mechanical function of the Clavicle (collar bone) in the human pectoral girdle?",
    options: [
      "Acting as a horizontal strut that holds the upper limb and scapula away from the thorax to allow maximum arm mobility",
      "Protecting the pelvic urinary bladder from traumatic puncture",
      "Forming a rigid weight-bearing arch for bipedal standing",
      "Housing the red bone marrow responsible for all adult erythropoiesis"
    ],
    correctAnswer: 0,
    rationale: "The clavicle acts as a horizontal strut connecting the axial skeleton (at the sternoclavicular joint) to the appendicular skeleton (at the acromioclavicular joint). It holds the scapula and glenohumeral joint away from the thoracic cage, allowing the upper limb maximum freedom of movement.",
    optionRationales: {
      A: "Correct. The clavicle functions as a strut holding the shoulder out from the trunk.",
      B: "The clavicle is situated on the superior anterior chest, far from the pelvis.",
      C: "The upper limb is non-weight-bearing in humans; the pelvic girdle forms the weight-bearing arch.",
      D: "Adult erythropoiesis occurs in the axial skeleton (vertebrae, sternum, ribs, pelvis), not predominantly the clavicle."
    },
    clinicalPearl: "The clavicle is the most commonly fractured bone in the human body, typically breaking at the junction of its medial two-thirds and lateral one-third following a fall onto an outstretched hand.",
    tags: ["Ross-Wilson", "osteology", "clavicle", "pectoral-girdle", "upper-limb"]
  },
  {
    id: "AP-143",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Anatomy of the Pericardial Sac & Layers",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "The heart is enclosed within a fibroserous sac. What tough, non-distensible outer layer prevents acute overfilling of the heart and fuses inferiorly with the central tendon of the diaphragm?",
    options: [
      "Fibrous pericardium",
      "Parietal layer of serous pericardium",
      "Visceral layer of serous pericardium (Epicardium)",
      "Myocardium"
    ],
    correctAnswer: 0,
    rationale: "The pericardium consists of an outer Fibrous Pericardium and an inner Serous Pericardium (subdivided into parietal and visceral layers). The fibrous pericardium is a dense, non-elastic collagenous sac that anchors the heart to the sternum and central tendon of the diaphragm, protecting it and preventing acute chambers overfilling.",
    optionRationales: {
      A: "Correct. The Fibrous Pericardium is the tough, non-distensible outer layer anchoring the heart to the diaphragm.",
      B: "The parietal serous layer lines the internal surface of the fibrous pericardium.",
      C: "The visceral serous layer (epicardium) forms the outer coat of the heart muscle.",
      D: "The myocardium is the thick muscular layer that contracts to pump blood."
    },
    clinicalPearl: "Because the fibrous pericardium cannot stretch acutely, rapid accumulation of fluid in the pericardial space (as little as 150–200 mL of blood) produces life-threatening Cardiac Tamponade.",
    tags: ["Ross-Wilson", "pericardium", "fibrous-pericardium", "cardiac-tamponade"]
  },
  {
    id: "AP-144",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Salivary Glands & Primary Secretory Ducts",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which paired salivary gland is the largest, lies anterior and inferior to the external ear overlying the masseter muscle, and empties saliva into the oral cavity via Stensen's Duct opposite the second upper molar tooth?",
    options: [
      "Parotid Gland",
      "Submandibular Gland",
      "Sublingual Gland",
      "Palatine Gland"
    ],
    correctAnswer: 0,
    rationale: "The Parotid gland is the largest salivary gland, producing predominantly serous watery secretions rich in salivary amylase. Its duct (Stensen's duct) crosses the masseter muscle, pierces the buccinator, and opens into the oral vestibule opposite the crown of the second maxillary (upper) molar.",
    optionRationales: {
      A: "Correct. The Parotid gland empties via Stensen's duct opposite the 2nd upper molar.",
      B: "The submandibular gland empties via Wharton's duct into the floor of the mouth beneath the tongue.",
      C: "The sublingual gland empties via multiple small ducts of Rivinus into the floor of the mouth.",
      D: "Palatine glands are minor salivary glands embedded in the palate."
    },
    clinicalPearl: "The Facial Nerve (CN VII) branches through the substance of the parotid gland. Parotid tumors or parotidectomy can injure CN VII, causing ipsilateral facial paralysis.",
    tags: ["Ross-Wilson", "salivary-glands", "parotid", "Stensen-duct"]
  },
  {
    id: "AP-145",
    course: "Anatomy & Physiology",
    topic: "The Nervous System",
    subtopic: "Sensory Receptors: Tactile Corpuscles",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "Which encapsulated mechanoreceptors located deep in the dermis and hypodermis consist of concentric lamellae of flattened Schwann-like cells around an axon, responding specifically to deep pressure and high-frequency vibration?",
    options: [
      "Pacinian (Lamellar) Corpuscles",
      "Meissner's (Tactile) Corpuscles",
      "Merkel Discs",
      "Ruffini Endings"
    ],
    correctAnswer: 0,
    rationale: "Pacinian (lamellar) corpuscles are large, onion-shaped encapsulated mechanoreceptors found deep in the dermis, hypodermis, tendons, and joint capsules. Their concentric lamellar membranes deform rapidly under mechanical strain, making them specialized for detecting deep pressure and high-frequency vibration (200-300 Hz).",
    optionRationales: {
      A: "Correct. Pacinian corpuscles detect deep pressure and high-frequency vibration.",
      B: "Meissner's corpuscles lie in dermal papillae of hairless skin and detect light touch and low-frequency flutter.",
      C: "Merkel discs lie in the basal epidermis and detect sustained light pressure, textures, and edges.",
      D: "Ruffini endings detect sustained skin stretch and joint torque."
    },
    clinicalPearl: "Pacinian corpuscles are rapidly adapting: they fire action potentials when pressure is applied and released, but fall silent during continuous static pressure.",
    tags: ["Ross-Wilson", "skin-receptors", "pacinian-corpuscles", "vibration"]
  },
  {
    id: "AP-146",
    course: "Anatomy & Physiology",
    topic: "The Skeletal System",
    subtopic: "Axial vs Appendicular Skeleton Division",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "Under the classical structural division of the adult human skeleton (comprising 206 bones), how many bones constitute the Axial Skeleton and Appendicular Skeleton, respectively?",
    options: [
      "80 bones in the Axial Skeleton; 126 bones in the Appendicular Skeleton",
      "126 bones in the Axial Skeleton; 80 bones in the Appendicular Skeleton",
      "100 bones in the Axial Skeleton; 106 bones in the Appendicular Skeleton",
      "50 bones in the Axial Skeleton; 156 bones in the Appendicular Skeleton"
    ],
    correctAnswer: 0,
    rationale: "The adult human skeleton has 206 bones: 1) The Axial Skeleton contains 80 bones (skull = 22, ossicles = 6, hyoid = 1, vertebral column = 26, thoracic cage [ribs & sternum] = 25); 2) The Appendicular Skeleton contains 126 bones (upper limbs & pectoral girdle = 64, lower limbs & pelvic girdle = 62).",
    optionRationales: {
      A: "Correct. Axial = 80 bones; Appendicular = 126 bones (Total = 206 bones).",
      B: "Reverses the counts between axial and appendicular divisions.",
      C: "Incorrect bone distribution tally.",
      D: "Incorrect bone distribution tally."
    },
    clinicalPearl: "The axial skeleton forms the longitudinal central axis protecting vital organs (brain, spinal cord, heart, lungs). The appendicular skeleton enables locomotion and tool manipulation.",
    tags: ["Ross-Wilson", "osteology", "axial-skeleton", "appendicular-skeleton"]
  },
  {
    id: "AP-147",
    course: "Anatomy & Physiology",
    topic: "The Digestive System",
    subtopic: "Gastric Motility & The Pyloric Sphincter",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "What is the primary physiological role of the Pyloric Sphincter, a thickened ring of circular smooth muscle located at the distal junction of the stomach and duodenum?",
    options: [
      "Regulating the slow, controlled metering of acidic chyme into the duodenum and preventing duodenogastric reflux",
      "Preventing gastric acid from entering the esophagus during retching",
      "Secreting pancreatic enzymes directly into the gastric fundus",
      "Absorbing water and fat-soluble vitamins into the portal vein"
    ],
    correctAnswer: 0,
    rationale: "The pyloric sphincter controls the emptying of gastric contents into the duodenum. By opening intermittently, it allows only small aliquots (roughly 3 mL) of chyme to enter at a time. This gives the alkaline duodenal secretions time to neutralize gastric acid and digest nutrients without overloading intestinal capacity.",
    optionRationales: {
      A: "Correct. The pyloric sphincter meters chyme delivery into the duodenum and prevents bile reflux.",
      B: "Preventing acid reflux into the esophagus is the role of the Lower Esophageal Sphincter (cardiac sphincter).",
      C: "The pylorus is an anatomical valve, not an enzyme-secreting gland.",
      D: "Nutrient absorption takes place in the small intestine, not across the muscular pyloric valve."
    },
    clinicalPearl: "Infantile Hypertrophic Pyloric Stenosis involves hypertrophy of the pyloric circular muscle, causing gastric outlet obstruction and projectile non-bilious vomiting.",
    tags: ["Ross-Wilson", "gastrointestinal", "pyloric-sphincter", "chyme", "stomach"]
  },
  {
    id: "AP-148",
    course: "Anatomy & Physiology",
    topic: "The Circulatory System",
    subtopic: "Circle of Willis: Basilar Artery Formation",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "At the lower border of the pons, which two major vessels unite along the ventral midline brainstem to form the single midline Basilar Artery?",
    options: [
      "Left and Right Vertebral Arteries",
      "Left and Right Internal Carotid Arteries",
      "Left and Right External Carotid Arteries",
      "Left and Right Middle Cerebral Arteries"
    ],
    correctAnswer: 0,
    rationale: "The bilateral Vertebral Arteries ascend through the foramina transversaria of C6-C1, enter the skull via the foramen magnum, and converge at the pontomedullary junction to form the single midline Basilar Artery, which ascends the anterior surface of the pons.",
    optionRationales: {
      A: "Correct. The bilateral vertebral arteries unite at the pontomedullary border to form the basilar artery.",
      B: "Internal carotid arteries enter via carotid canals and ascend into the middle cranial fossa independently.",
      C: "External carotid arteries supply structures of the neck, face, and scalp outside the cranium.",
      D: "Middle cerebral arteries are terminal branches of the internal carotids."
    },
    clinicalPearl: "The basilar artery terminates at the upper border of the pons by bifurcating into the bilateral Posterior Cerebral Arteries (PCA).",
    tags: ["Ross-Wilson", "basilar-artery", "vertebral-artery", "neurovascular"]
  },
  {
    id: "AP-149",
    course: "Anatomy & Physiology",
    topic: "The Immune & Lymphatic System",
    subtopic: "Thymus Gland Life Cycle & Involutive Changes",
    difficulty: "Easy",
    type: "Single Best Response",
    question: "At what stage of human life is the Thymus gland at its maximal relative size and functional immunological activity, before undergoing progressive age-related fatty involution?",
    options: [
      "During infancy and early childhood (peaking around puberty)",
      "During the seventh and eighth decades of geriatric life",
      "Exclusively during the first trimester of embryonic gestation",
      "Only during late adulthood following menopause"
    ],
    correctAnswer: 0,
    rationale: "The thymus is most active and relatively largest during early infancy and childhood, when it produces and educates the T-cell repertoire. After puberty, the gland undergoes progressive involution, with lymphoid tissue gradually replaced by fibrofatty adipose tissue, though residual T-cell generation continues at a reduced rate throughout life.",
    optionRationales: {
      A: "Correct. The thymus is prominent in childhood, peaking at puberty before fatty involution begins.",
      B: "In geriatric individuals, the thymus is largely involuted and replaced by adipose tissue.",
      C: "The thymus remains active and structurally intact throughout childhood, not just the first trimester.",
      D: "The thymus begins involuting decades before menopause."
    },
    clinicalPearl: "Because the thymus establishes the body's T-cell repertoire during childhood, thymectomy in an adult causes minimal acute immunodeficiency, whereas thymic aplasia in an infant (DiGeorge syndrome) is life-threatening.",
    tags: ["Ross-Wilson", "thymus", "involution", "T-cells", "immunology"]
  },
  {
    id: "AP-150",
    course: "Anatomy & Physiology",
    topic: "The Urinary System",
    subtopic: "Podocytes and Filtration Slits",
    difficulty: "Moderate",
    type: "Single Best Response",
    question: "In the microscopic architecture of the Bowman's capsule, which cells form the Visceral Layer, wrapping interdigitating foot processes (pedicels) directly around the glomerular capillaries?",
    options: [
      "Podocytes",
      "Parietal epithelial cells",
      "Mesangial cells",
      "Endothelial fenestrated cells"
    ],
    correctAnswer: 0,
    rationale: "Bowman's capsule has two layers: an outer Parietal layer of simple squamous epithelium forming the outer capsule wall, and an inner Visceral layer composed of Podocytes. Podocyte cell bodies extend primary processes that branch into secondary foot processes (pedicels), interdigitating around glomerular capillaries to form filtration slits.",
    optionRationales: {
      A: "Correct. Podocytes form the visceral layer of Bowman's capsule.",
      B: "Parietal epithelial cells line the outer wall of Bowman's space.",
      C: "Mesangial cells provide structural support between capillary loops.",
      D: "Endothelial cells form the inner lining of the capillary lumen, beneath the basement membrane."
    },
    clinicalPearl: "The spaces between interdigitating podocyte foot processes are called Filtration Slits, spanned by a thin diaphragm containing the protein Nephrin.",
    tags: ["Ross-Wilson", "podocytes", "Bowman-capsule", "glomerulus", "histology"]
  }
];
