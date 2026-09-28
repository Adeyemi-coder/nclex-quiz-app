// src/pages/dashboard/ClinicalReferencePage.jsx
import React, { useState, useMemo } from 'react';
import { 
  Activity, 
  Search, 
  AlertTriangle, 
  HeartPulse, 
  Droplet, 
  FlaskConical, 
  ShieldAlert, 
  Copy, 
  Check, 
  Printer,
  ChevronDown
} from 'lucide-react';

const CLINICAL_REFERENCE_DATABASE = [
  // --- 1. SERUM ELECTROLYTES ---
  {
    category: 'Serum Electrolytes',
    items: [
      {
        name: 'Potassium (K+)',
        normalRange: '3.5 – 5.0 mEq/L (mmol/L)',
        criticalLow: '< 3.0 mEq/L (Lethal arrhythmias, U-waves)',
        criticalHigh: '> 6.0 mEq/L (Peaked T-waves, ventricular standstill)',
        clinicalNote: 'Never administer IV push. Infuse via pump at <= 10–20 mEq/hr. Low K+ potentiates Digoxin toxicity.'
      },
      {
        name: 'Sodium (Na+)',
        normalRange: '135 – 145 mEq/L (mmol/L)',
        criticalLow: '< 120 mEq/L (Seizures, cerebral edema, coma)',
        criticalHigh: '> 160 mEq/L (Severe cellular dehydration, delirium)',
        clinicalNote: 'Correct hyponatremia slowly (< 10-12 mEq/L per 24h) to prevent Central Pontine Myelinolysis.'
      },
      {
        name: 'Total Calcium (Ca2+)',
        normalRange: '8.5 – 10.5 mg/dL (2.15 – 2.55 mmol/L)',
        criticalLow: '< 7.0 mg/dL (Tetany, Trousseau & Chvostek signs, seizures)',
        criticalHigh: '> 12.0 mg/dL (Shortened QT, renal stones, coma)',
        clinicalNote: 'In hypoalbuminemia, calculate corrected calcium. Antidote for hypermagnesemia is Calcium Gluconate.'
      },
      {
        name: 'Ionized Calcium (Free Ca2+)',
        normalRange: '4.5 – 5.3 mg/dL (1.15 – 1.33 mmol/L)',
        criticalLow: '< 3.2 mg/dL',
        criticalHigh: '> 6.5 mg/dL',
        clinicalNote: 'Physiologically active unbound form; unaffected by serum albumin fluctuations.'
      },
      {
        name: 'Magnesium (Mg2+)',
        normalRange: '1.5 – 2.5 mEq/L (0.75 – 1.25 mmol/L)',
        criticalLow: '< 1.0 mEq/L (Torsades de Pointes, hyperreflexia, tetany)',
        criticalHigh: '> 4.0 mEq/L (Loss of deep tendon reflexes, respiratory arrest)',
        clinicalNote: 'Hypomagnesemia impairs parathyroid hormone release and locks in refractory hypocalcemia and hypokalemia.'
      },
      {
        name: 'Chloride (Cl-)',
        normalRange: '96 – 106 mEq/L (mmol/L)',
        criticalLow: '< 80 mEq/L (Metabolic alkalosis from prolonged vomiting)',
        criticalHigh: '> 115 mEq/L (Hyperchloremic metabolic acidosis)',
        clinicalNote: 'Follows sodium shifts and maintains electrical neutrality with bicarbonate.'
      },
      {
        name: 'Phosphate / Phosphorus (PO4 3-)',
        normalRange: '2.5 – 4.5 mg/dL (0.8 – 1.45 mmol/L)',
        criticalLow: '< 1.0 mg/dL (Respiratory failure, muscle weakness)',
        criticalHigh: '> 5.0 mg/dL (Metastatic calcification with high Ca2+)',
        clinicalNote: 'Maintains an inverse biological relationship with serum Calcium (High Phosphate = Low Calcium).'
      }
    ]
  },

  // --- 2. ARTERIAL BLOOD GASES (ABG) & ACID-BASE ---
  {
    category: 'Arterial Blood Gas (ABG)',
    items: [
      {
        name: 'Arterial Blood pH',
        normalRange: '7.35 – 7.45',
        criticalLow: '< 7.20 (Severe uncompensated acidemia)',
        criticalHigh: '> 7.60 (Severe uncompensated alkalemia)',
        clinicalNote: '< 7.35 = Acidosis | > 7.45 = Alkalosis. Neutral blood reference point is 7.40.'
      },
      {
        name: 'PaCO2 (Respiratory Component)',
        normalRange: '35 – 45 mmHg',
        criticalLow: '< 20 mmHg (Severe hyperventilation / respiratory alkalosis)',
        criticalHigh: '> 60 mmHg (Hypoventilation, hypercapnic respiratory failure)',
        clinicalNote: 'Controlled by the lungs within minutes. High PaCO2 causes arterial vasodilation and increased ICP.'
      },
      {
        name: 'HCO3 (Bicarbonate - Metabolic Component)',
        normalRange: '22 – 26 mEq/L (mmol/L)',
        criticalLow: '< 15 mEq/L (Severe metabolic acidosis, DKA, shock)',
        criticalHigh: '> 35 mEq/L (Severe metabolic alkalosis, NG suction)',
        clinicalNote: 'Controlled by renal tubular reabsorption and regeneration over 24 to 72 hours.'
      },
      {
        name: 'PaO2 (Arterial Oxygen Tension)',
        normalRange: '80 – 100 mmHg (on room air)',
        criticalLow: '< 60 mmHg (Acute hypoxemic respiratory failure)',
        criticalHigh: '> 120 mmHg (Oxygen toxicity risk over prolonged exposure)',
        clinicalNote: 'Normal declines with age (~1 mmHg drop per year over age 60).'
      },
      {
        name: 'SaO2 (Arterial Oxygen Saturation)',
        normalRange: '95% – 100%',
        criticalLow: '< 90% (Corresponds to PaO2 < 60 mmHg on oxyhemoglobin curve)',
        criticalHigh: 'N/A',
        clinicalNote: 'Target for COPD patients is 88% to 92% to preserve hypoxic ventilatory drive.'
      },
      {
        name: 'Serum Anion Gap',
        normalRange: '8 – 16 mEq/L [Na+ - (Cl- + HCO3-)]',
        criticalLow: 'N/A',
        criticalHigh: '> 16 mEq/L (High Anion Gap Acidosis: DKA, Lactic acidosis, Toxins)',
        clinicalNote: 'Mnemonic for High AG Acidosis: MUDPILES (Methanol, Uremia, DKA, Paraldehyde, INH, Lactic acid, Ethanol, Salicylates).'
      }
    ]
  },

  // --- 3. COMPLETE BLOOD COUNT (CBC) & HEMATOLOGY ---
  {
    category: 'Hematology & Complete Blood Count (CBC)',
    items: [
      {
        name: 'Hemoglobin (Hgb)',
        normalRange: 'Male: 13.5 – 17.5 g/dL | Female: 12.0 – 15.5 g/dL',
        criticalLow: '< 7.0 g/dL (Standard trigger for packed RBC transfusion)',
        criticalHigh: '> 20.0 g/dL (Hyperviscosity risk, polycythemia vera)',
        clinicalNote: 'Pregnant female baseline lower threshold is 11.0 g/dL due to physiologic hemodilution.'
      },
      {
        name: 'Hematocrit (Hct)',
        normalRange: 'Male: 41% – 50% | Female: 36% – 48%',
        criticalLow: '< 20% (Severe anemic tissue hypoxia)',
        criticalHigh: '> 60% (Spontaneous thrombotic crisis)',
        clinicalNote: 'Rule of Thumb: Hematocrit is approximately 3 times the Hemoglobin concentration.'
      },
      {
        name: 'White Blood Cell (WBC) Count',
        normalRange: '4,500 – 11,000 /mcL (4.5 – 11.0 x 10^9 /L)',
        criticalLow: '< 2,000 /mcL (Severe neutropenia / bone marrow failure)',
        criticalHigh: '> 30,000 /mcL (Leukemoid reaction or acute leukemia)',
        clinicalNote: 'Absolute Neutrophil Count (ANC) < 500 /mcL requires strict reverse/neutropenic protective isolation.'
      },
      {
        name: 'Platelet Count (Thrombocytes)',
        normalRange: '150,000 – 450,000 /mcL (150 – 450 x 10^9 /L)',
        criticalLow: '< 50,000 (Bleeding precaution); < 20,000 (Spontaneous CNS bleed)',
        criticalHigh: '> 1,000,000 /mcL (Paradoxical bleeding or thrombosis)',
        clinicalNote: 'Hold NSAIDs, antiplatelets, and anticoagulants when platelet count is rapidly plunging.'
      },
      {
        name: 'Erythrocyte Sedimentation Rate (ESR)',
        normalRange: 'Male: 0 – 15 mm/hr | Female: 0 – 20 mm/hr',
        criticalLow: 'N/A',
        criticalHigh: '> 100 mm/hr (Temporal arteritis, multiple myeloma, severe sepsis)',
        clinicalNote: 'Non-specific inflammatory marker; rises alongside C-Reactive Protein (CRP).'
      }
    ]
  },

  // --- 4. RENAL, METABOLIC & GLUCOSE ---
  {
    category: 'Renal & Metabolic Panel',
    items: [
      {
        name: 'Serum Creatinine',
        normalRange: '0.6 – 1.2 mg/dL (53 – 106 mcmol/L)',
        criticalLow: 'N/A',
        criticalHigh: '> 4.0 mg/dL (Acute/Chronic renal failure indication for dialysis)',
        clinicalNote: 'Most specific single biological indicator of renal tubular filtration efficiency.'
      },
      {
        name: 'Blood Urea Nitrogen (BUN)',
        normalRange: '7 – 20 mg/dL (2.5 – 7.1 mmol/L)',
        criticalLow: '< 5 mg/dL (Severe malnutrition, liver failure)',
        criticalHigh: '> 100 mg/dL (Uremic encephalopathy, pericarditis)',
        clinicalNote: 'BUN:Creatinine ratio > 20:1 indicates prerenal azotemia or acute dehydration.'
      },
      {
        name: 'Fasting Blood Glucose (FBG)',
        normalRange: '70 – 99 mg/dL (3.9 – 5.5 mmol/L)',
        criticalLow: '< 50 mg/dL (Diaphoresis, tremors, acute neuroglycopenia)',
        criticalHigh: '> 400 mg/dL (Risk of DKA or Hyperosmolar Hyperglycemic State)',
        clinicalNote: 'Rule of 15 for Hypoglycemia: Give 15g fast-acting carbs, wait 15 min, retest blood glucose.'
      },
      {
        name: 'Hemoglobin A1c (HbA1c)',
        normalRange: 'Normal: 4.0% – 5.6% | Diabetic Target: < 7.0%',
        criticalLow: '< 4.0%',
        criticalHigh: '> 10.0% (Chronic uncontrolled hyperglycemia and end-organ damage)',
        clinicalNote: 'Reflects weighted average glycemic exposure over previous 90 to 120 days.'
      },
      {
        name: 'Uric Acid',
        normalRange: 'Male: 3.5 – 7.2 mg/dL | Female: 2.6 – 6.0 mg/dL',
        criticalLow: 'N/A',
        criticalHigh: '> 10.0 mg/dL (Gouty arthritis attacks, Tumor Lysis Syndrome)',
        clinicalNote: 'Encourage fluid intake >= 2-3 L/day; pre-treat with Allopurinol during chemotherapy.'
      }
    ]
  },

  // --- 5. COAGULATION & CARDIAC BIOMARKERS ---
  {
    category: 'Coagulation & Cardiac Markers',
    items: [
      {
        name: 'International Normalized Ratio (INR)',
        normalRange: 'Standard: 0.8 – 1.1 | Warfarin Target: 2.0 – 3.0',
        criticalLow: '< 0.5 (Hypercoagulable)',
        criticalHigh: '> 4.5 (High risk for intracranial or GI hemorrhage)',
        clinicalNote: 'Mechanical prosthetic heart valves target INR is 2.5 to 3.5. Warfarin antidote is Vitamin K.'
      },
      {
        name: 'Activated Partial Thromboplastin Time (aPTT)',
        normalRange: 'Normal: 25 – 35 seconds | Heparin Therapeutic: 45 – 75 seconds',
        criticalLow: '< 20 seconds',
        criticalHigh: '> 100 seconds (Spontaneous acute bleeding risk)',
        clinicalNote: 'Monitors IV unfractionated Heparin infusions. Antidote is IV Protamine Sulfate.'
      },
      {
        name: 'Prothrombin Time (PT)',
        normalRange: '11.0 – 13.5 seconds',
        criticalLow: 'N/A',
        criticalHigh: '> 30 seconds',
        clinicalNote: 'Evaluates extrinsic clotting cascade (Factors I, II, V, VII, X).'
      },
      {
        name: 'Cardiac Troponin I',
        normalRange: '< 0.03 ng/mL (mcg/L)',
        criticalLow: 'N/A',
        criticalHigh: '> 0.40 ng/mL (Diagnostic for Acute Myocardial Infarction)',
        clinicalNote: 'Rises in 2–4 hours, peaks at 24 hours, and remains elevated for 10–14 days.'
      },
      {
        name: 'B-Type Natriuretic Peptide (BNP)',
        normalRange: '< 100 pg/mL (ng/L)',
        criticalLow: 'N/A',
        criticalHigh: '> 400 pg/mL (Strongly indicative of Acute Congestive Heart Failure)',
        clinicalNote: 'Secreted by ventricles in response to myocardial stretching and volume overload.'
      }
    ]
  },

  // --- 6. HEPATIC & VITAL BENCHMARKS ---
  {
    category: 'Liver Function & Hemodynamic Vitals',
    items: [
      {
        name: 'Total Serum Bilirubin',
        normalRange: '0.3 – 1.2 mg/dL (5.1 – 20.5 mcmol/L)',
        criticalLow: 'N/A',
        criticalHigh: '> 15 mg/dL in neonates (Kernicterus risk); > 3 mg/dL in adults (Jaundice)',
        clinicalNote: 'Jaundice becomes visible in sclera and mucous membranes when bilirubin exceeds 2.5–3.0 mg/dL.'
      },
      {
        name: 'ALT (Alanine Aminotransferase) & AST',
        normalRange: 'ALT: 7 – 56 U/L | AST: 10 – 40 U/L',
        criticalLow: 'N/A',
        criticalHigh: '> 1,000 U/L (Acute viral hepatitis or acetaminophen poisoning)',
        clinicalNote: 'ALT is more specific to liver tissue than AST.'
      },
      {
        name: 'Serum Albumin',
        normalRange: '3.5 – 5.0 g/dL (35 – 50 g/L)',
        criticalLow: '< 2.5 g/dL (Severe peripheral edema, ascites, third-spacing)',
        criticalHigh: 'N/A (Indicates dehydration / hemoconcentration)',
        clinicalNote: 'Primary driver of plasma oncotic pressure. Half-life is 20 days.'
      },
      {
        name: 'Mean Arterial Pressure (MAP)',
        normalRange: '70 – 105 mmHg',
        criticalLow: '< 65 mmHg (Compromised cerebral and renal perfusion)',
        criticalHigh: '> 120 mmHg (Hypertensive encephalopathy, stroke risk)',
        clinicalNote: 'Formula: MAP = [Systolic BP + 2(Diastolic BP)] / 3.'
      },
      {
        name: 'Central Venous Pressure (CVP)',
        normalRange: '2 – 8 mmHg (3 – 10 cmH2O)',
        criticalLow: '< 2 mmHg (Hypovolemia, dehydration)',
        criticalHigh: '> 10 mmHg (Hypervolemia, right ventricular failure, tamponade)',
        clinicalNote: 'Monitors right ventricular preload; measured via internal jugular or subclavian central line.'
      }
    ]
  }
];

export default function ClinicalReferencePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedName, setCopiedName] = useState(null);

  const categories = useMemo(() => {
    return ['all', ...CLINICAL_REFERENCE_DATABASE.map((c) => c.category)];
  }, []);

  const handleCopy = (item) => {
    const text = `${item.name}: Normal = ${item.normalRange} | Critical = ${item.criticalLow || 'N/A'} / ${item.criticalHigh || 'N/A'}`;
    navigator.clipboard.writeText(text);
    setCopiedName(item.name);
    setTimeout(() => setCopiedName(null), 1800);
  };

  const filteredGroups = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return CLINICAL_REFERENCE_DATABASE.map((group) => {
      if (activeCategory !== 'all' && group.category !== activeCategory) {
        return null;
      }
      const matchingItems = group.items.filter((item) => {
        if (!q) return true;
        return (
          item.name.toLowerCase().includes(q) ||
          item.normalRange.toLowerCase().includes(q) ||
          item.clinicalNote.toLowerCase().includes(q) ||
          (item.criticalLow && item.criticalLow.toLowerCase().includes(q)) ||
          (item.criticalHigh && item.criticalHigh.toLowerCase().includes(q))
        );
      });

      if (matchingItems.length === 0) return null;
      return { ...group, items: matchingItems };
    }).filter(Boolean);
  }, [searchQuery, activeCategory]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6 font-sans text-slate-800 antialiased">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#071A3D] text-white px-2 py-0.5 rounded">
              Standard Reference
            </span>
            <span className="text-xs font-mono font-semibold text-slate-500">
              NMCN &amp; NCLEX Clinical Laboratory Norms
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2 mt-1">
            <FlaskConical className="w-7 h-7 text-[#071A3D]" />
            Clinical Reference &amp; Laboratory Normals
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Authoritative physiological ranges, critical panic values, and statutory nursing implications.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80 shrink-0">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Potassium, Troponin, ABG, Platelets..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 focus:outline-none focus:border-[#071A3D] focus:bg-white transition-all font-medium"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full capitalize whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#071A3D] text-white font-bold shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat === 'all' ? 'All Panels' : cat}
          </button>
        ))}
      </div>

      {/* Tables Stream */}
      <div className="space-y-6">
        {filteredGroups.map((group, gIdx) => (
          <div key={gIdx} className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
              <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-700" />
                {group.category}
              </h2>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                {group.items.length} Benchmarks
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {group.items.map((item, idx) => {
                const isCopied = copiedName === item.name;

                return (
                  <div key={idx} className="p-5 hover:bg-slate-50/40 transition-colors space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{item.name}</span>
                        <button
                          type="button"
                          onClick={() => handleCopy(item)}
                          title="Copy reference info"
                          className="p-1 rounded text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 font-mono">
                        <span className="text-[11px] text-slate-500 font-semibold">Normal:</span>
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                          {item.normalRange}
                        </span>
                      </div>
                    </div>

                    {/* Critical Panic Thresholds */}
                    {(item.criticalLow || item.criticalHigh) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
                        {item.criticalLow && (
                          <div className="p-2 rounded-lg bg-rose-50/70 border border-rose-200/80 text-rose-900 flex items-start gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="uppercase">Panic Low: </strong>
                              {item.criticalLow}
                            </div>
                          </div>
                        )}
                        {item.criticalHigh && (
                          <div className="p-2 rounded-lg bg-rose-50/70 border border-rose-200/80 text-rose-900 flex items-start gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="uppercase">Panic High: </strong>
                              {item.criticalHigh}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Clinical Nursing Notes */}
                    <div className="text-xs text-slate-600 leading-relaxed font-sans bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <strong className="text-[#071A3D] font-mono text-[10px] uppercase tracking-wider block mb-0.5">
                        Nursing Interventions &amp; Clinical Pearls:
                      </strong>
                      {item.clinicalNote}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filteredGroups.length === 0 && (
          <div className="p-12 text-center text-xs text-slate-400 bg-white border border-slate-200 rounded-2xl">
            No laboratory values matched "{searchQuery}".
          </div>
        )}
      </div>

    </div>
  );
}

export { ClinicalReferencePage };