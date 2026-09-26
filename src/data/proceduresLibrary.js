// src/data/proceduresLibrary.js

export const PROCEDURES_LIBRARY = [
  {
    id: "PROC-001",
    title: "Urinary Catheterization (Female & Male)",
    category: "Fundamentals of Nursing",
    definition: "The aseptic insertion of a flexible catheter through the urethra into the urinary bladder to evacuate urine.",
    indications: [
      "Acute urinary retention or bladder outlet obstruction",
      "Precise hourly measurement of urinary output in critically ill clients",
      "Perioperative management for urological or pelvic surgeries",
      "Healing of open sacral/perineal wounds in incontinent clients"
    ],
    contraindications: [
      "Suspected urethral disruption from pelvic trauma (indicated by blood at the urethral meatus or scrotal hematoma)"
    ],
    equipment: [
      "Sterile catheterization tray with drape and fenestrated drape",
      "Sterile Foley catheter (Size 14-16 Fr for adults)",
      "Sterile gloves (2 pairs)",
      "Antiseptic cleansing solution (Povidone-iodine or chlorhexidine 0.05%)",
      "Prefilled 10 mL syringe with sterile water (never saline)",
      "Water-soluble lubricant jelly",
      "Drainage bag and securing leg strap"
    ],
    preparation: [
      "Verify prescription and confirm client identity using two identifiers.",
      "Explain the rationale and step-by-step procedure to ease urethral sphincter tension.",
      "Position female clients in dorsal recumbent with knees flexed; position male clients supine with legs flat."
    ],
    procedure: [
      "Perform hand hygiene, assemble equipment on a sterile field, and don sterile gloves.",
      "Lubricate catheter tip generously (1-2 inches for females; 5-7 inches for males).",
      "Cleanse meatus: in females, separate labia with non-dominant hand and wipe anteroposteriorly; in males, retract foreskin and cleanse in circular motion from meatus to base of glans.",
      "Maintain non-dominant hand position (now non-sterile). Advance catheter until urine flows, then advance an additional 2 inches.",
      "Inflate retention balloon slowly with 10 mL sterile water. Gently retract until resistance is felt.",
      "Secure catheter tubing to the inner thigh (female) or upper abdomen/thigh (male) without tension."
    ],
    infectionPrevention: [
      "Maintain strict sterile technique throughout insertion.",
      "Keep drainage bag below bladder level at all times to prevent reflux.",
      "Maintain a closed drainage system; perform daily perineal hygiene with soap and water."
    ],
    safetyPrecautions: [
      "Never inflate the balloon until urine flow confirms intravesical placement.",
      "Never use normal saline to inflate the balloon; salt crystals can crystallize and obstruct deflation."
    ],
    documentation: [
      "Catheter size, type, balloon inflation volume, character/volume of urine returned, client tolerance, and date/time."
    ],
    complications: [
      "Catheter-associated urinary tract infection (CAUTI)",
      "Urethral trauma or false passage formation",
      "Transient hematuria secondary to rapid decompression of chronic retention"
    ]
  },
  {
    id: "PROC-002",
    title: "Nasogastric (NG) Tube Insertion & Enteral Verification",
    category: "Fundamentals of Nursing",
    definition: "The insertion of a flexible, radiopaque tube through the nasopharynx into the stomach for decompression, diagnostic lavage, or enteral nutrition.",
    indications: [
      "Gastric decompression for bowel obstruction or paralytic ileus",
      "Enteral nutrition support in clients with intact gut function but impaired swallowing",
      "Gastric lavage in acute oral toxic ingestion"
    ],
    contraindications: [
      "Severe midface trauma, basilar skull fracture (risk of cribriform plate puncture into the brain)",
      "Recent esophageal or gastric surgery, esophageal varices"
    ],
    equipment: [
      "Salem Sump or Levin tube (14-16 Fr)",
      "Water-soluble lubricant",
      "Stethoscope, pH indicator strip (pH 0-6)",
      "60 mL catheter-tip syringe",
      "Hypoallergenic securement tape or commercial fixation device",
      "Cup of water with a drinking straw",
      "Emesis basin and waterproof pad"
    ],
    procedure: [
      "Place client in high-Fowler position (90 degrees) with head erect.",
      "Measure tube length: from tip of nose to earlobe, then from earlobe to xiphoid process (NEX measurement). Mark tube with tape.",
      "Lubricate distal 4 inches with water-soluble jelly.",
      "Insert tube through the most patent nostril, aiming downward along the nasal floor.",
      "When tube reaches the oropharynx, instruct client to flex neck forward toward the chest.",
      "Instruct client to swallow small sips of water; advance the tube as the client swallows.",
      "Verify placement by aspirating gastric contents and measuring pH (pH < 5.5 confirms gastric position).",
      "Obtain confirmatory chest X-ray before administering medications or enteral feeds."
    ],
    safetyPrecautions: [
      "Stop immediately and withdraw the tube if the client develops coughing, cyanosis, stridor, or severe dyspnea.",
      "Do not rely solely on air insufflation (whoosh test) for verification; X-ray is the gold standard."
    ],
    documentation: [
      "Tube gauge, insertion nostril, NEX length marked at the naris, pH reading, aspirate description, and radiographic confirmation."
    ],
    complications: [
      "Tracheobronchial misplacement and pulmonary aspiration",
      "Epistaxis, sinusitis, and pressure necrosis of the nasal alae"
    ]
  }
];