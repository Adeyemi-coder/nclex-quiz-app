import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Play, 
  Search, 
  BookOpen, 
  Layers, 
  Stethoscope, 
  Heart, 
  Wind, 
  ShieldAlert, 
  Baby, 
  Users, 
  Brain, 
  Droplet, 
  FileText, 
  ShieldCheck, 
  Microscope, 
  Scale, 
  Compass, 
  Activity, 
  GraduationCap, 
  Home, 
  Briefcase, 
  LineChart 
} from 'lucide-react';

export const NMCN_COURSES = [
  {
    id: 'anatomyPhysiology',
    title: 'Anatomy & Physiology',
    tag: 'FOUNDATIONAL',
    description: 'Cell biology, tissue systems, organ pathophysiology, homeostasis, and systemic hemodynamic regulation.',
    icon: Activity,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'fundamentals',
    title: 'Fundamentals of Nursing (FON)',
    tag: 'FOUNDATIONAL',
    description: 'Nursing process, aseptic sterile technique, vitals, mobility, hygiene, and clinical documentation.',
    icon: FileText,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'pharmacology',
    title: 'Pharmacology & Calculations',
    tag: 'HIGH-YIELD',
    description: 'Dosage calculations, high-alert medication titrations, adverse drug events, and peak/trough monitoring.',
    icon: Droplet,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'medicalSurgical',
    title: 'Medical-Surgical Nursing',
    tag: 'PRIORITY',
    description: 'Advanced pathophysiology, perioperative interventions, acute clinical deterioration, and post-op care.',
    icon: Stethoscope,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'cardiovascular',
    title: 'Cardiovascular Nursing',
    tag: 'PRIORITY',
    description: 'Acute coronary syndromes, 12-lead ECG dysrhythmias, hemodynamic monitoring, and heart failure protocols.',
    icon: Heart,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'respiratory',
    title: 'Respiratory Care & Ventilation',
    tag: 'CORE',
    description: 'Mechanical ventilation parameters (PEEP/FiO2), arterial blood gas analysis, ARDS, and airway protection.',
    icon: Wind,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'emergency',
    title: 'Emergency & Critical Care',
    tag: 'PRIORITY',
    description: 'Primary survey (ABCDE), hypovolemic/septic shock staging, multi-casualty triage (START), and trauma ACLS.',
    icon: ShieldAlert,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'maternal',
    title: 'Maternal & Newborn Health (RHN)',
    tag: 'HIGH-YIELD',
    description: 'Antenatal care, labor management, partograph tracing, preeclampsia/eclampsia, PPH, and APGAR staging.',
    icon: Baby,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'pediatrics',
    title: 'Pediatric & Child Health',
    tag: 'CORE',
    description: 'Developmental milestones, congenital cardiac anomalies, pediatric resuscitation, and weight-based dosing.',
    icon: Users,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'mentalHealth',
    title: 'Mental Health & Psychiatric Nursing',
    tag: 'CORE',
    description: 'Therapeutic communication, suicide risk stratification, mood disorders, de-escalation, and psychopharmacology.',
    icon: Brain,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'renal',
    title: 'Renal & Electrolyte Disorders',
    tag: 'HIGH-YIELD',
    description: 'Acute kidney injury staging, continuous renal replacement therapy (CRRT), hyperkalemia, and acid-base shifts.',
    icon: Droplet,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'infectionControl',
    title: 'Infection Prevention & Control',
    tag: 'CORE',
    description: 'Transmission-based precautions (Airborne/Droplet/Contact), HAI bundle compliance, and sterile technique.',
    icon: ShieldCheck,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'microbiology',
    title: 'Microbiology for Nurses',
    tag: 'FOUNDATIONAL',
    description: 'Bacteriology, virology, antimicrobial resistance mechanisms, culture interpretation, and pathogen virulence.',
    icon: Microscope,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'primaryHealthCare',
    title: 'Primary Health Care (PHC)',
    tag: 'HIGH-YIELD',
    description: 'Community diagnosis, Alma-Ata principles, NPI immunization schedules, maternal-child clinics, and endemic control.',
    icon: Compass,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'communityHealth',
    title: 'Community Health Nursing',
    tag: 'CORE',
    description: 'Family health indices, domiciliary visits, epidemiological investigation, school health, and occupational hygiene.',
    icon: Users,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'nursingEthics',
    title: 'Nursing Ethics & Jurisprudence',
    tag: 'CORE',
    description: 'Bioethical principles (Autonomy, Beneficence, Justice), informed consent, NMCN regulatory acts, and tort liability.',
    icon: Scale,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'nursingInformatics',
    title: 'Nursing Informatics',
    tag: 'FOUNDATIONAL',
    description: 'Electronic health records (EHR), CDSS algorithms, clinical telemetry, patient data privacy, and digital health.',
    icon: LineChart,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'useOfEnglish',
    title: 'Use of English & Communication',
    tag: 'FOUNDATIONAL',
    description: 'Professional nursing documentation, therapeutic communication terminology, syntax error analysis, and medical lexicon.',
    icon: BookOpen,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'socialBehaviouralSciences',
    title: 'Social & Behavioural Sciences',
    tag: 'FOUNDATIONAL',
    description: 'Sociology of health, psychology of illness, stress adaptation models, crisis intervention, and nurse-client rapport.',
    icon: Users,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'politicsInNursing',
    title: 'Politics & Policy in Nursing',
    tag: 'CORE',
    description: 'Healthcare policy formulation, NANNM labor unionism, professional representation, and health systems governance.',
    icon: GraduationCap,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'qualityImprovement',
    title: 'Quality Improvement & Safety',
    tag: 'CORE',
    description: 'Root Cause Analysis (RCA), clinical audit protocols, PDSA quality cycles, sentinel event reporting, and patient safety goals.',
    icon: ShieldCheck,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'homeHealthCare',
    title: 'Home Health & Palliative Care',
    tag: 'CORE',
    description: 'Domiciliary rehabilitation, palliative symptom relief, caregiver strain mitigation, geriatric care, and hospice protocols.',
    icon: Home,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'entrepreneurshipInNursing',
    title: 'Entrepreneurship in Nursing',
    tag: 'CORE',
    description: 'Private clinic establishment, nurse consultancy legalities, financial costing, digital nursing clinics, and business ethics.',
    icon: Briefcase,
    scenarios: '150 Pool • 50/Attempt'
  },
  {
    id: 'nursingResearch',
    title: 'Nursing Research & Statistics',
    tag: 'HIGH-YIELD',
    description: 'Research designs, sampling methodologies, instrument psychometrics (validity/reliability), biostatistics, and IRB ethics.',
    icon: LineChart,
    scenarios: '150 Pool • 50/Attempt'
  }
];

export default function Modules() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCourses = useMemo(() => {
    return NMCN_COURSES.filter((course) => {
      const matchSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase());
      const matchFilter = activeFilter === 'All' || course.tag === activeFilter.toUpperCase();
      return matchSearch && matchFilter;
    });
  }, [search, activeFilter]);

  function startExam(course) {
    navigate(`/quiz/${course.id}`, {
      state: {
        config: {
          itemCount: 50,
          categoryTitle: course.title,
          examMode: 'tutor',
          secondsPerQuestion: 72,
        },
      },
    });
  }

  const tagColors = {
    PRIORITY: 'text-amber-800 bg-amber-50 border border-amber-200',
    'HIGH-YIELD': 'text-emerald-800 bg-emerald-50 border border-emerald-200',
    CORE: 'text-blue-800 bg-blue-50 border border-blue-200',
    FOUNDATIONAL: 'text-slate-700 bg-slate-100 border border-slate-200',
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      
      {/* Header Banner */}
      <div>
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B89A5A]">
          NMCN Professional Curriculum Alignment
        </span>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#202535] sm:text-3xl">
          Curriculum Specialty Modules
        </h1>
        <p className="mt-2 text-xs text-[#62697A] sm:text-sm">
          Structured academic tracks covering comprehensive question pools calibrated for professional qualifying examinations.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#DDD9CC] pb-6">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#62697A]" />
          <input
            type="text"
            placeholder="Search specialty, course, or disease..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-[#DDD9CC] bg-[#FBF8EF] pl-9 pr-4 py-2 text-xs font-medium text-[#202535] placeholder-[#62697A] focus:border-[#1D2A59] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-semibold">
          <span className="mr-2 text-slate-400 font-mono">Filter:</span>
          {['All', 'Priority', 'High-Yield', 'Core', 'Foundational'].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-lg px-3 py-1.5 transition-colors whitespace-nowrap ${
                activeFilter === f
                  ? 'bg-[#1D2A59] text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Courses */}
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => {
          const Icon = course.icon;
          return (
            <div
              key={course.id}
              className="flex flex-col justify-between rounded-2xl border border-[#DDD9CC] bg-[#FBF8EF] p-5 shadow-xs transition-all hover:border-[#1D2A59] hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#DDD9CC] text-[#1D2A59]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold ${tagColors[course.tag] || tagColors.CORE}`}>
                    {course.tag}
                  </span>
                </div>

                <h3 className="mt-3.5 text-base font-bold text-[#202535]">
                  {course.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#62697A] line-clamp-3">
                  {course.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[#DDD9CC] pt-4">
                <span className="text-[11px] font-semibold text-slate-500">
                  {course.scenarios}
                </span>

                <button
                  type="button"
                  onClick={() => startExam(course)}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#1D2A59] px-4 text-xs font-bold text-[#F4EEDC] transition-colors hover:bg-[#283A78]"
                >
                  <Play className="h-3 w-3 fill-white" />
                  <span>Start Drill</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}