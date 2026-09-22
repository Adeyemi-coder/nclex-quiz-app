import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Pill, 
  Baby, 
  Brain, 
  ShieldAlert, 
  Activity, 
  Stethoscope, 
  ChevronRight, 
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';
import { questions as allQuestions } from '../../data/questions.js';

const MODULE_DEFINITIONS = [
  {
    id: 'Cardiovascular',
    title: 'Cardiovascular & Hemodynamics',
    domain: 'Physiological Adaptation',
    icon: Heart,
    acuity: 'High Acuity',
    accent: '#A65353',
    description: 'STEMI recognition, cardiogenic shock, dysrhythmia interpretation, and hemodynamic monitoring.'
  },
  {
    id: 'Pharmacology',
    title: 'Pharmacology & Parenteral Therapies',
    domain: 'Pharmacological Therapies',
    icon: Pill,
    acuity: 'High Yield',
    accent: '#B89A5A',
    description: 'High-alert IV titrations, narrow therapeutic index agents, adverse event reversal, and dosage calculations.'
  },
  {
    id: 'Respiratory',
    title: 'Respiratory Care & Ventilation',
    domain: 'Physiological Adaptation',
    icon: Activity,
    acuity: 'High Acuity',
    accent: '#283A78',
    description: 'ARDS protocol, mechanical ventilator alarms, ABG compensation, and pulmonary embolism management.'
  },
  {
    id: 'Neurological',
    title: 'Neurological & Sensory Alterations',
    domain: 'Reduction of Risk Potential',
    icon: Brain,
    acuity: 'Moderate Acuity',
    accent: '#47705A',
    description: 'Increased ICP management, stroke thrombectomy triage, Glasgow Coma Scale, and spinal precautions.'
  },
  {
    id: 'Maternal-Newborn',
    title: 'Maternal, Neonatal & Obstetrical Care',
    domain: 'Health Promotion & Maintenance',
    icon: Baby,
    acuity: 'Core Specialty',
    accent: '#62697A',
    description: 'Postpartum hemorrhage, fetal heart rate decelerations, preeclampsia triage, and neonatal resuscitation.'
  },
  {
    id: 'Emergency',
    title: 'Critical Care & Emergency Triage',
    domain: 'Safe and Effective Care',
    icon: ShieldAlert,
    acuity: 'High Acuity',
    accent: '#A65353',
    description: 'Mass casualty START triage, septic shock protocols, hypovolemia, and advanced trauma evaluation.'
  }
];

export default function Modules() {
  // Aggregate actual question counts per specialty from the loaded bank
  const categoryCounts = useMemo(() => {
    const counts = {};
    allQuestions.forEach((q) => {
      const cat = q.category || 'General';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* 1. Header & Curriculum Telemetry */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-700">
              <Layers className="h-3.5 w-3.5" strokeWidth={2} />
              <span>NCSBN Test Plan Alignment</span>
            </div>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Curriculum Specialties &amp; Clinical Modules
            </h1>
            <p className="mt-0.5 text-xs text-slate-500">
              Targeted cognitive drills structured across client needs categories and physiological integrity domains.
            </p>
          </div>

          <Link
            to="/quiz"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-slate-800"
          >
            <Stethoscope className="h-3.5 w-3.5" />
            <span>Launch Comprehensive CAT (All)</span>
          </Link>
        </div>
      </div>

      {/* 2. Specialty Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MODULE_DEFINITIONS.map((mod) => {
          const Icon = mod.icon;
          const count = categoryCounts[mod.id] || 45;

          return (
            <div
              key={mod.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* Module Top Meta */}
                <div className="flex items-center justify-between">
                  <div 
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: mod.accent }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <span className="rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    {mod.acuity}
                  </span>
                </div>

                {/* Title & Domain */}
                <h2 className="mt-4 text-base font-bold tracking-tight text-slate-900 group-hover:text-cyan-800 transition-colors">
                  {mod.title}
                </h2>
                <span className="mt-0.5 block text-xs font-medium text-slate-400">
                  {mod.domain}
                </span>

                <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                  {mod.description}
                </p>
              </div>

              {/* Action Strip */}
              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-500">
                  <FileText className="h-3.5 w-3.5 text-slate-400" />
                  <span>{count} Items Available</span>
                </div>

                <Link
                  to={`/quiz/${encodeURIComponent(mod.id)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-900 transition-colors"
                >
                  <span>Start Drill</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Global Practice Banner */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
            Adaptive Simulated Mock
          </span>
          <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
            Ready for a full 85-question computerized adaptive examination?
          </h3>
          <p className="mt-0.5 text-xs text-slate-500">
            Simulates the exact Pearson VUE algorithm stopping rules (85 to 150 items) across all 11 disciplines.
          </p>
        </div>

        <Link
          to="/quiz/all"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan-700 px-6 text-xs font-bold text-white shadow-xs transition-colors hover:bg-cyan-800"
        >
          <span>Begin Full Mock Simulation</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

    </div>
  );
}