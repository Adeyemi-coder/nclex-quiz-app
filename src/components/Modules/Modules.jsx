import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Play, 
  CreditCard, 
  Layers, 
  Activity, 
  HeartPulse, 
  Pill, 
  Baby, 
  ShieldAlert, 
  Brain, 
  Droplet, 
  ClipboardList, 
  Users, 
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { questions } from '../../data/questions.js';

const MODULE_DEFINITIONS = [
  {
    id: 'Pharmacology',
    title: 'Pharmacology & Parenteral Therapies',
    desc: 'Dosage calculations, high-alert medication titrations, adverse drug events, and peak/trough monitoring.',
    category: 'Client Needs: Pharmacological',
    icon: Pill,
    qCount: 50,
    priority: 'High-Yield'
  },
  {
    id: 'Cardiovascular',
    title: 'Cardiovascular Nursing',
    desc: 'Acute coronary syndromes, 12-lead ECG dysrhythmia interpretation, hemodynamic monitoring, and heart failure protocols.',
    category: 'Physiological Adaptation',
    icon: HeartPulse,
    qCount: 50,
    priority: 'Priority'
  },
  {
    id: 'Respiratory',
    title: 'Respiratory Care & Ventilation',
    desc: 'Mechanical ventilation parameters (PEEP/FiO2), arterial blood gas analysis, ARDS, and airway management.',
    category: 'Physiological Adaptation',
    icon: Activity,
    qCount: 50,
    priority: 'Core'
  },
  {
    id: 'Critical Care',
    title: 'Emergency & Critical Care',
    desc: 'ACLS algorithms, hypovolemic/septic shock staging, multi-casualty triage (START), and burn resuscitation (Parkland).',
    category: 'Physiological Adaptation',
    icon: ShieldAlert,
    qCount: 50,
    priority: 'Priority'
  },
  {
    id: 'Maternal & Newborn',
    title: 'Maternal & Newborn Health',
    desc: 'Fetal heart rate monitoring (VEAL CHOP), preeclampsia/eclampsia management, postpartum hemorrhage, and APGAR staging.',
    category: 'Health Promotion',
    icon: Baby,
    qCount: 50,
    priority: 'High-Yield'
  },
  {
    id: 'Pediatric Nursing',
    title: 'Pediatric Nursing',
    desc: 'Developmental milestones, congenital cardiac anomalies, pediatric resuscitation, and weight-based dosing.',
    category: 'Health Promotion',
    icon: Users,
    qCount: 50,
    priority: 'Core'
  },
  {
    id: 'Mental Health',
    title: 'Mental Health & Psychiatric Nursing',
    desc: 'Therapeutic communication, suicide risk stratification, mood disorders, de-escalation, and psychopharmacology.',
    category: 'Psychosocial Integrity',
    icon: Brain,
    qCount: 50,
    priority: 'Core'
  },
  {
    id: 'Renal Nursing',
    title: 'Renal & Electrolyte Disorders',
    desc: 'Acute kidney injury staging, continuous renal replacement therapy (CRRT), hyperkalemia protocols, and acid-base shifts.',
    category: 'Physiological Adaptation',
    icon: Droplet,
    qCount: 50,
    priority: 'High-Yield'
  },
  {
    id: 'Fundamentals',
    title: 'Fundamentals of Nursing',
    desc: 'Aseptic sterile technique, wound staging and dressing choices, clinical prioritization frameworks, and patient safety rights.',
    category: 'Safe & Effective Care',
    icon: ClipboardList,
    qCount: 50,
    priority: 'Foundational'
  },
  {
    id: 'Leadership',
    title: 'Leadership & Delegation',
    desc: 'Five Rights of Delegation, RN vs. LPN/LVN vs. UAP assignment criteria, conflict resolution, and legal negligence principles.',
    category: 'Management of Care',
    icon: Users,
    qCount: 50,
    priority: 'Priority'
  },
  {
    id: 'Infection Control',
    title: 'Infection Control & Safety',
    desc: 'Transmission-based precautions (Airborne/Droplet/Contact), HAI bundle compliance, and post-exposure prophylaxis.',
    category: 'Safety & Quality',
    icon: ShieldCheck,
    qCount: 50,
    priority: 'Core'
  }
];

export default function Modules() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    return ['All', 'Priority', 'High-Yield', 'Core', 'Foundational'];
  }, []);

  const filteredModules = useMemo(() => {
    return MODULE_DEFINITIONS.filter((mod) => {
      const matchesSearch = 
        mod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mod.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = 
        selectedCategory === 'All' || mod.priority === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Editorial Header */}
      <div className="border-b border-[#DDD9CC] pb-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#283A78]">
              <Layers className="h-3.5 w-3.5" strokeWidth={2} />
              <span>NCSBN Test Plan Alignment</span>
            </div>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#202535] sm:text-3xl">
              Curriculum Specialty Modules
            </h1>
            <p className="mt-1 text-xs text-[#62697A]">
              Structured clinical tracks covering 550 verified case-based scenarios and rationales.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#62697A]">
            <CheckCircle2 className="h-4 w-4 text-[#47705A]" strokeWidth={1.8} />
            <span>11 Clinical Domains Calibrated for NGN Standards</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#62697A]" strokeWidth={1.8} />
            <input
              type="text"
              placeholder="Search specialty, disease, or protocol..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 w-full rounded border border-[#DDD9CC] bg-[#FBF8EF] pl-9 pr-4 text-xs text-[#202535] placeholder:text-[#62697A]/60 focus:border-[#283A78] focus:outline-none"
            />
          </div>

          {/* Category Filter Group */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="hidden items-center gap-1 text-[11px] font-semibold text-[#62697A] lg:inline-flex mr-1">
              <SlidersHorizontal className="h-3 w-3" strokeWidth={1.8} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'border-[#283A78] bg-[#283A78] text-[#F4EEDC]'
                    : 'border-[#DDD9CC] bg-[#FBF8EF] text-[#62697A] hover:bg-[#F4EEDC] hover:text-[#202535]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modules Directory Grid */}
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredModules.map((mod) => {
          const Icon = mod.icon;
          return (
            <div
              key={mod.id}
              className="flex flex-col justify-between rounded border border-[#DDD9CC] bg-[#FBF8EF] p-5 transition-colors hover:border-[#62697A]/40"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded border border-[#DDD9CC] bg-[#F4EEDC] text-[#283A78]">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                  </div>
                  <span className={`rounded border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                    mod.priority === 'High-Yield'
                      ? 'border-[#B89A5A]/40 bg-[#B89A5A]/10 text-[#B89A5A]'
                      : mod.priority === 'Priority'
                      ? 'border-[#283A78]/30 bg-[#283A78]/10 text-[#283A78]'
                      : 'border-[#DDD9CC] bg-[#F4EEDC] text-[#62697A]'
                  }`}>
                    {mod.priority}
                  </span>
                </div>

                {/* Content */}
                <h2 className="mt-3.5 text-sm font-semibold tracking-tight text-[#202535]">
                  {mod.title}
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-[#62697A]">
                  {mod.desc}
                </p>
              </div>

              {/* Action Strip */}
              <div className="mt-6 flex items-center justify-between border-t border-[#DDD9CC] pt-3">
                <span className="text-xs font-medium text-[#62697A]">
                  {mod.qCount} Scenarios
                </span>

                <div className="flex items-center gap-2">
                  <Link
                    to="/flashcards"
                    title="Study Flashcards"
                    className="flex h-8 items-center gap-1.5 rounded border border-[#DDD9CC] bg-[#FBF8EF] px-2.5 text-xs font-medium text-[#62697A] transition-colors hover:bg-[#F4EEDC] hover:text-[#202535]"
                  >
                    <CreditCard className="h-3.5 w-3.5" strokeWidth={1.8} />
                    <span>Cards</span>
                  </Link>

                  <Link
                    to={`/quiz/${encodeURIComponent(mod.id)}`}
                    className="flex h-8 items-center gap-1.5 rounded bg-[#283A78] px-3 text-xs font-semibold text-[#F4EEDC] transition-colors hover:bg-[#1D2A59]"
                  >
                    <Play className="h-3 w-3 fill-[#F4EEDC]" />
                    <span>Start Drill</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredModules.length === 0 && (
        <div className="mt-12 rounded border border-dashed border-[#DDD9CC] bg-[#FBF8EF] p-8 text-center">
          <p className="text-xs font-medium text-[#62697A]">
            No clinical curriculum tracks match "{searchTerm}".
          </p>
          <button
            type="button"
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="mt-2 text-xs font-semibold text-[#283A78] hover:underline"
          >
            Clear active filters
          </button>
        </div>
      )}

    </div>
  );
}