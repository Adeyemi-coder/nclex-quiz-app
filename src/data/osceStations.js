// src/data/osceStations.js

export const OSCE_STATIONS = [
  {
    id: "OSCE-001",
    stationTitle: "Station 1: Intramuscular (IM) Injection Administration",
    clinicalDomain: "Clinical Pharmacology & Foundations",
    timeLimit: "8 Minutes",
    maxMarks: 20,
    scenario: "You are the staff nurse in the medical outpatient department. Mr. Ojo, a 45-year-old adult weighing 72 kg, has been prescribed Diclofenac 75 mg IM stat for acute musculoskeletal back pain. You have the drug ampoule (75 mg/3 mL), syringes, needles, and antiseptics available.",
    candidateInstructions: [
      "Verify the medication order following the 'Rights of Medication Administration'.",
      "Select the appropriate anatomical site, needle size, and syringe.",
      "Demonstrate the Z-track injection technique on the injection manikin.",
      "Explain the post-injection safety precautions and client communication."
    ],
    equipment: [
      "Diclofenac 75 mg/3 mL ampoule",
      "21G, 1.5-inch needle and 3 mL syringe",
      "Filter needle for ampoule withdrawal",
      "70% alcohol swabs, sterile gauze",
      "Sharps disposal container, clean non-sterile gloves",
      "Simulation injection pad/manikin"
    ],
    criticalSteps: [
      "Perform hand hygiene and verify client using two identifiers (Full Name, Hospital Number).",
      "Check the 5 rights: Right patient, drug, dose, route, and time against the chart.",
      "Check expiration date and ampoule integrity; use a filter needle to withdraw fluid from the glass ampoule.",
      "Change filter needle to a 21-23G, 1.5-inch needle for deep muscle penetration.",
      "Locate the Ventrogluteal site: place palm over greater trochanter, index finger toward anterior superior iliac spine, middle finger along iliac crest.",
      "Cleanse site with 70% alcohol swab for 30 seconds and allow to air dry completely.",
      "Apply Z-track technique: pull skin and subcutaneous tissue 1 to 1.5 inches laterally.",
      "Insert needle at a 90-degree angle with a smooth, dart-like motion.",
      "Inject medication slowly at 10 seconds per mL; wait 10 seconds before needle withdrawal.",
      "Withdraw needle smoothly while releasing displaced tissue; apply gentle pressure with gauze (do not massage).",
      "Immediately dispose of unshielded needle in sharps bin; do not recap."
    ],
    examinerChecklist: [
      { step: "Identification & Allergy Confirmation", marks: 2 },
      { step: "Aseptic Ampoule Opening & Filter Needle Use", marks: 3 },
      { step: "Anatomical Landmark Identification (Ventrogluteal)", marks: 4 },
      { step: "Z-track Technique Application", marks: 3 },
      { step: "Injection Angle (90°) & Delivery Rate", marks: 3 },
      { step: "Immediate Uncapped Sharps Disposal", marks: 3 },
      { step: "Therapeutic Communication & Documentation", marks: 2 }
    ],
    commonErrors: [
      "Recapping used needle with both hands (immediate failure on safety).",
      "Massaging the site after Z-track administration, which forces drug into subcutaneous tissue.",
      "Using the dorsogluteal site without recognizing risk to the sciatic nerve."
    ]
  },
  {
    id: "OSCE-002",
    stationTitle: "Station 2: Adult Basic Life Support (BLS / CPR)",
    clinicalDomain: "Emergency Nursing",
    timeLimit: "6 Minutes",
    maxMarks: 20,
    scenario: "You enter the hospital waiting area and find an adult collapsed on the floor. The scene is safe. There are no other responders present.",
    candidateInstructions: [
      "Assess responsiveness and activate emergency response.",
      "Demonstrate high-quality CPR on the resuscitation manikin.",
      "Operate the Automated External Defibrillator (AED) when it arrives."
    ],
    criticalSteps: [
      "Confirm scene safety.",
      "Tap shoulders firmly and shout: 'Are you okay?'.",
      "Check carotid pulse and look for chest rise simultaneously for no more than 10 seconds.",
      "Call for emergency resuscitation team and retrieve AED.",
      "Begin compressions: heel of hand on lower half of sternum, rate 100-120 bpm, depth 5-6 cm (2-2.4 inches), allowing complete chest recoil.",
      "Maintain 30:2 compression-to-ventilation ratio using pocket mask with chin-lift maneuver.",
      "Apply AED pads immediately upon arrival without interrupting compressions until AED analyzes.",
      "Clear all personnel during AED rhythm analysis and shock delivery."
    ],
    examinerChecklist: [
      { step: "Scene Safety & Response Assessment", marks: 2 },
      { step: "Simultaneous Pulse & Breathing Check (<10s)", marks: 3 },
      { step: "Call for Code Team & Defibrillator", marks: 2 },
      { step: "Compression Mechanics (Rate: 100-120, Depth: 5-6cm, Full Recoil)", marks: 5 },
      { step: "Ventilation Ratio (30:2) & Chest Rise", marks: 3 },
      { step: "AED Operation & Safe Shock Protocol ('All Clear')", marks: 5 }
    ],
    commonErrors: [
      "Taking more than 10 seconds to assess pulse, delaying compressions.",
      "Incomplete chest recoil between compressions.",
      "Failing to clear the patient before shock delivery."
    ]
  }
];