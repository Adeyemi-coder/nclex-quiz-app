// src/pages/dashboard/ExamsListingPage.jsx
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Layers, 
  Search, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  BookOpen,
  Sparkles,
  Stethoscope,
  Heart,
  Baby,
  Brain,
  Pill,
  Scale,
  Users,
  Microscope,
  Cpu,
  FileSpreadsheet,
  GraduationCap,
  Home,
  UserCheck,
  Apple
} from 'lucide-react';
import { questions as allQuestions } from '../../data/questions.js';

export const ExamsListingPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('courses'); // 'courses' | 'modules'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  // Dynamic question count resolver against your questions.js registry
  const getQuestionCount = (keywords) => {
    if (!Array.isArray(allQuestions)) return 0;
    return allQuestions.filter((q) => {
      const cat = (q.category || q.subject || q.discipline || '').toLowerCase();
      return keywords.some((kw) => cat.includes(kw.toLowerCase()));
    }).length;
  };

  // =========================================================================
  // COMPLETE NMCN B.N.Sc / COUNCIL CURRICULUM REGISTRY (ALL DISCIPLINES)
  // =========================================================================
  const nmcnCourses = useMemo(() => [
    // --- 1. CORE CLINICAL NURSING SCIENCES ---
    {
      id: 'medicalSurgical',
      code: 'MSN-301',
      title: 'Medical-Surgical Nursing',
      councilPaper: 'Paper III: Clinical Nursing',
      category: 'CLINICAL',
      realCount: getQuestionCount(['medical', 'surgical', 'med-surg', 'cardio', 'respiratory']),
      defaultCount: 150,
      targetScore: '86% Benchmark',
      icon: Stethoscope,
      desc: 'Systemic disorders, fluid & electrolyte imbalances, oncology, perioperative asepsis, and multi-organ dysfunction.',
      topics: ['Cardiovascular & Shock', 'Respiratory Failure', 'Fluid-Electrolyte Titration', 'Perioperative Asepsis']
    },
    {
      id: 'maternalChild',
      code: 'MCH-302',
      title: 'Maternal & Child Health / Obstetric Nursing',
      councilPaper: 'Paper III: Clinical Nursing',
      category: 'CLINICAL',
      realCount: getQuestionCount(['maternal', 'midwifery', 'obstetric', 'labor', 'pregnancy', 'antenatal']),
      defaultCount: 150,
      targetScore: '88% Benchmark',
      icon: Heart,
      desc: 'Antepartum risk assessment, partograph labor monitoring, obstructed labor, eclampsia, and neonatal APGAR resuscitation.',
      topics: ['Stages of Labor', 'Preeclampsia / Eclampsia', 'Postpartum Hemorrhage', 'Neonatal APGAR Resuscitation']
    },
    {
      id: 'reproductiveHealth',
      code: 'RPH-305',
      title: 'Reproductive Health & Family Planning',
      councilPaper: 'Paper III: Clinical Nursing',
      category: 'CLINICAL',
      realCount: getQuestionCount(['reproductive', 'family planning', 'contraceptive', 'fertility', 'sti']),
      defaultCount: 150,
      targetScore: '87% Benchmark',
      icon: Heart,
      desc: 'Contraceptive technologies, syndromic management of STIs/HIV, infertility workups, and adolescent reproductive health.',
      topics: ['Modern Contraceptive Methods', 'STI Syndromic Protocols', 'Adolescent Sexual Health', 'Infertility Assessment']
    },
    {
      id: 'paediatrics',
      code: 'PED-303',
      title: 'Paediatric & Child Health Nursing',
      councilPaper: 'Paper III: Clinical Nursing',
      category: 'CLINICAL',
      realCount: getQuestionCount(['paediatric', 'pediatric', 'peds', 'child', 'infant']),
      defaultCount: 150,
      targetScore: '84% Benchmark',
      icon: Baby,
      desc: 'Developmental milestones, congenital cardiac anomalies, neonatal sepsis, pediatric fluid replacement math, and PEM.',
      topics: ['Growth & Milestones', 'Kwashiorkor & Marasmus', 'Congenital Heart Defects', 'Pediatric Dosage Math']
    },
    {
      id: 'mentalHealth',
      code: 'MNT-304',
      title: 'Mental Health & Psychiatric Nursing',
      councilPaper: 'Paper III: Clinical Nursing',
      category: 'CLINICAL',
      realCount: getQuestionCount(['mental', 'psychiatric', 'psych', 'schizo', 'bipolar']),
      defaultCount: 150,
      targetScore: '85% Benchmark',
      icon: Brain,
      desc: 'Therapeutic communication, mood disorders, schizophrenia spectrum, crisis de-escalation, and psychopharmacology toxicity.',
      topics: ['Therapeutic Rapport', 'Schizophrenia Management', 'Crisis Intervention', 'Extrapyramidal Symptoms']
    },
    {
      id: 'emergency',
      code: 'EMG-306',
      title: 'Emergency, Trauma & Disaster Nursing',
      councilPaper: 'Paper III: Clinical Nursing',
      category: 'CLINICAL',
      realCount: getQuestionCount(['emergency', 'disaster', 'triage', 'trauma', 'burn']),
      defaultCount: 150,
      targetScore: '88% Benchmark',
      icon: Activity,
      desc: 'START multi-casualty triage tagging, Parkland burn formula fluid titration, tension pneumothorax decompression, and ACLS.',
      topics: ['START Triage Tagging', 'Parkland Fluid Resuscitation', 'Needle Thoracostomy', 'ACLS Algorithms']
    },

    // --- 2. COMMUNITY & PRIMARY HEALTH CARE ---
    {
      id: 'primaryHealthCare',
      code: 'PHC-102',
      title: 'Community Health Nursing & Primary Health Care',
      councilPaper: 'Paper III: Clinical Nursing',
      category: 'COMMUNITY',
      realCount: getQuestionCount(['primary', 'phc', 'community', 'epidemiology', 'npi']),
      defaultCount: 150,
      targetScore: '84% Benchmark',
      icon: Users,
      desc: 'Ward Health System protocols, NPI cold chain logistics, IMCI triage algorithms, and national chlorhexidine cord standards.',
      topics: ['NPI Vaccine Cold Chain', 'Chlorhexidine 7.1%', 'IMCI Triage', 'Epidemiological Triad']
    },
    {
      id: 'homeHealthCare',
      code: 'HHC-308',
      title: 'Home Health Care & Gerontological Nursing',
      councilPaper: 'Paper III: Clinical Nursing',
      category: 'COMMUNITY',
      realCount: getQuestionCount(['home health', 'geriatric', 'gerontology', 'palliative', 'home care', 'elderly']),
      defaultCount: 150,
      targetScore: '85% Benchmark',
      icon: Home,
      desc: 'Domiciliary nursing procedures, geriatric frailty syndromes, palliative terminal pain control, and caregiver burden assessment.',
      topics: ['Geriatric Assessment', 'Palliative Pain Ladders', 'Domiciliary Infusion Safety', 'Fall Prevention in Elderly']
    },

    // --- 3. RESEARCH, INFORMATICS & PROFESSIONAL SCHOLARSHIP ---
    {
      id: 'nursingResearch',
      code: 'RES-401',
      title: 'Nursing Research & Applied Biostatistics',
      councilPaper: 'Paper II: Professional Nursing',
      category: 'RESEARCH',
      realCount: getQuestionCount(['research', 'biostatistics', 'sampling', 'methodology', 'validity', 'hypothesis']),
      defaultCount: 150,
      targetScore: '86% Benchmark',
      icon: FileSpreadsheet,
      desc: 'Quantitative & qualitative methodologies, probability sampling designs, reliability/validity indices, and parametric test selection.',
      topics: ['Sampling Techniques', 'Hypothesis Testing (p-value)', 'Questionnaire Reliability', 'Ethical Approval & IRB']
    },
    {
      id: 'nursingInformatics',
      code: 'INF-402',
      title: 'Nursing Informatics & Digital Health Systems',
      councilPaper: 'Paper II: Professional Nursing',
      category: 'RESEARCH',
      realCount: getQuestionCount(['informatics', 'digital health', 'telehealth', 'ehr', 'emr', 'technology']),
      defaultCount: 150,
      targetScore: '88% Benchmark',
      icon: Cpu,
      desc: 'Electronic Health Record (EHR) security, standardized nursing terminologies (NANDA-I, NIC, NOC), telemedicine, and data privacy.',
      topics: ['EHR Clinical Workflows', 'NANDA-NIC-NOC Terminologies', 'Telehealth Ethics & Privacy', 'Clinical Decision Support']
    },
    {
      id: 'seminarInNursing',
      code: 'SEM-405',
      title: 'Seminar in Nursing & Evidence-Based Practice',
      councilPaper: 'Paper II: Professional Nursing',
      category: 'RESEARCH',
      realCount: getQuestionCount(['seminar', 'evidence-based', 'ebp', 'trends', 'critique', 'scholarship']),
      defaultCount: 150,
      targetScore: '89% Benchmark',
      icon: GraduationCap,
      desc: 'Critical appraisal of clinical trials, evidence hierarchies (Melnyk model), translating research to bedside practice, and peer discourse.',
      topics: ['PICO Question Formulation', 'Critical Trial Appraisal', 'Melnyk Evidence Levels', 'Translational Bedside Protocols']
    },

    // --- 4. BEHAVIORAL SCIENCES & HUMANITIES ---
    {
      id: 'socialBehavioralScience',
      code: 'SBS-204',
      title: 'Sociology & Behavioral Sciences for Health',
      councilPaper: 'Paper II: Professional Nursing',
      category: 'FOUNDATIONAL',
      realCount: getQuestionCount(['sociology', 'behavioral', 'psychology', 'social', 'culture', 'belief']),
      defaultCount: 150,
      targetScore: '83% Benchmark',
      icon: UserCheck,
      desc: 'Illness behavior, socio-cultural health beliefs, social stratification, health disparities, and psychological coping mechanisms.',
      topics: ['Health Belief Model', 'Sociocultural Illness Conceptions', 'Defense Mechanisms', 'Stigma & Health Equity']
    },
    {
      id: 'humanNutrition',
      code: 'NUT-206',
      title: 'Human Nutrition & Clinical Dietetics',
      councilPaper: 'Paper I: Basic Sciences',
      category: 'BASIC_SCIENCES',
      realCount: getQuestionCount(['nutrition', 'diet', 'dietetics', 'vitamin', 'calorie', 'enteral']),
      defaultCount: 150,
      targetScore: '85% Benchmark',
      icon: Apple,
      desc: 'Therapeutic diets (diabetic, renal, DASH), enteral/parenteral nutrition formulas, micronutrient deficiencies, and refeeding syndrome.',
      topics: ['Renal & Diabetic Diets', 'Total Parenteral Nutrition (TPN)', 'Refeeding Syndrome', 'Micronutrient Deficiencies']
    },

    // --- 5. BASIC MEDICAL SCIENCES ---
    {
      id: 'anatomyPhysiology',
      code: 'BMS-101',
      title: 'Anatomy & Clinical Physiology',
      councilPaper: 'Paper I: Basic Sciences',
      category: 'BASIC_SCIENCES',
      realCount: getQuestionCount(['anatomy', 'physiology', 'anp', 'cardiac', 'renal']),
      defaultCount: 150,
      targetScore: '91% Benchmark',
      icon: Activity,
      desc: 'Cardiovascular hemodynamics, Frank-Starling mechanics, excitable action potentials, and countercurrent renal concentration loops.',
      topics: ['Cardiac Action Potentials', 'Starling Curves', 'Countercurrent Mechanism', 'Autonomic Nervous System']
    },
    {
      id: 'pharmacology',
      code: 'BMS-102',
      title: 'Clinical Pharmacology & Parenteral Safety',
      councilPaper: 'Paper I: Basic Sciences',
      category: 'BASIC_SCIENCES',
      realCount: getQuestionCount(['pharmacology', 'pharma', 'drug', 'titration', 'dose']),
      defaultCount: 150,
      targetScore: '85% Benchmark',
      icon: Pill,
      desc: 'Pharmacokinetics, narrow therapeutic drug toxicity (digoxin, lithium, phenytoin), high-alert IV infusions, and emergency antidotes.',
      topics: ['Drug Calculations & Drips', 'Narrow Therapeutic Drugs', 'Emergency Antidotes', 'High-Alert Infusions']
    },
    {
      id: 'microbiology',
      code: 'BMS-103',
      title: 'Medical Microbiology & Parasitology',
      councilPaper: 'Paper I: Basic Sciences',
      category: 'BASIC_SCIENCES',
      realCount: getQuestionCount(['microbiology', 'parasitology', 'infection', 'bacteria', 'viral']),
      defaultCount: 150,
      targetScore: '83% Benchmark',
      icon: Microscope,
      desc: 'Bacterial pathogenesis, hospital-acquired infection bundles, autoclave sterilization thermodynamics, and parasite life cycles.',
      topics: ['HAI Precautions', 'Sterilization & Autoclaving', 'Plasmodium Life Cycle', 'Antimicrobial Resistance']
    },

    // --- 6. NURSING FOUNDATIONS & REGULATORY JURISPRUDENCE ---
    {
      id: 'fundamentals',
      code: 'FON-201',
      title: 'Fundamentals of Nursing Practice',
      councilPaper: 'Paper II: Professional Nursing',
      category: 'FOUNDATIONAL',
      realCount: getQuestionCount(['fundamentals', 'foundation', 'fon', 'asepsis', 'vital']),
      defaultCount: 150,
      targetScore: '82% Benchmark',
      icon: Sparkles,
      desc: 'The 5-step Nursing Process, grand nursing theories (Orem, Roy, Henderson), surgical asepsis, and vital sign alterations.',
      topics: ['The Nursing Process', 'Orem & Roy Models', 'Aseptic Technique', 'Wound Staging & Dressings']
    },
    {
      id: 'nursingEthics',
      code: 'ETH-202',
      title: 'Nursing Ethics & Legal Jurisprudence',
      councilPaper: 'Paper II: Professional Nursing',
      category: 'REGULATORY',
      realCount: getQuestionCount(['ethics', 'jurisprudence', 'legal', 'tribunal', 'tort', 'n143']),
      defaultCount: 150,
      targetScore: '94% Benchmark',
      icon: Scale,
      desc: 'Statutory registration under Cap N143 LFN, Nurses Disciplinary Tribunal hearings, vicarious liability, torts, and consent limits.',
      topics: ['Cap N143 LFN Provisions', 'Disciplinary Tribunal', 'Negligence & Malpractice', 'Informed Consent Rights']
    },
    {
      id: 'managementPolitics',
      code: 'POL-203',
      title: 'Management, Leadership & Health Policy',
      councilPaper: 'Paper II: Professional Nursing',
      category: 'REGULATORY',
      realCount: getQuestionCount(['politics', 'policy', 'management', 'leadership', 'abuja']),
      defaultCount: 150,
      targetScore: '80% Benchmark',
      icon: BookOpen,
      desc: 'Ward administration, quality audit cycles, Trade Disputes collective bargaining (NANNM), and the Abuja 15% budget declaration.',
      topics: ['Ward Administration', 'Abuja Declaration 15%', 'Trade Unionism (NANNM)', 'Quality Assurance Audits']
    }
  ], []);

  // Specialty Modules
  const specialtyModules = [
    {
      id: 'Cardiovascular',
      title: 'Cardiovascular & Hemodynamic Titration',
      items: 45,
      cadence: '72s / item',
      badge: 'High Acuity',
      desc: 'STEMI vs NSTEMI 12-lead ECG differentiation, cardiogenic shock, and inotropic drug infusions.'
    },
    {
      id: 'Respiratory',
      title: 'Ventilation, ABG & Airway Management',
      items: 40,
      cadence: '72s / item',
      badge: 'ICU / Trauma',
      desc: 'Acute respiratory distress syndrome (ARDS), mechanical ventilator modes, and acid-base disorders.'
    },
    {
      id: 'PediatricDosage',
      title: 'Pediatric Weight-Based Dosage Calculation',
      items: 35,
      cadence: '72s / item',
      badge: 'Calculation Drill',
      desc: 'Safe mg/kg/day dosing, fluid deficit replacement protocols, and micro-drip calibration.'
    },
    {
      id: 'ObstetricEmergencies',
      title: 'High-Acuity Obstetric Crises & Resuscitation',
      items: 40,
      cadence: '72s / item',
      badge: 'Labor Ward',
      desc: 'Postpartum hemorrhage balloon tamponade, cord prolapse positioning, and shoulder dystocia maneuvers.'
    },
    {
      id: 'InfectionControl',
      title: 'Epidemiology & Hospital Acquired Infections (HAI)',
      items: 30,
      cadence: '72s / item',
      badge: 'Public Health',
      desc: 'Contact, droplet, and airborne precautions, central-line associated blood stream infection (CLABSI) bundles.'
    },
    {
      id: 'Psychopharmacology',
      title: 'Psychotropic Agents & Extrapyramidal Effects',
      items: 35,
      cadence: '72s / item',
      badge: 'Pharmacology',
      desc: 'Lithium toxicity thresholds, neuroleptic malignant syndrome (NMS), and SSRI serotonin syndromes.'
    }
  ];

  // Filtering
  const displayedCourses = nmcnCourses.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.councilPaper.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'ALL') return matchesSearch;
    return matchesSearch && course.category === selectedFilter;
  });

  const displayedModules = specialtyModules.filter((mod) => 
    mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mod.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mod.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F8FAFC] text-slate-800 min-h-screen py-8 antialiased font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>NMCN Statutory Syllabus • {nmcnCourses.length} Council Disciplines</span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Curriculum Question Banks &amp; Modules
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Complete inventory of verified clinical cases covering Paper I (Basic Medical Sciences), Paper II (Foundations &amp; Research), and Paper III (Clinical Nursing Sciences).
            </p>
          </div>

          <button
            onClick={() => navigate('/quiz/all')}
            className="px-5 py-2.5 bg-[#071A3D] hover:bg-[#102D63] text-white text-xs font-mono font-bold uppercase rounded flex items-center gap-2 transition-colors self-start md:self-auto shadow-xs cursor-pointer"
          >
            <span>Launch Complete CAT (85 Qs)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* View Switcher */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('courses')}
              className={`pb-2 text-xs sm:text-sm font-bold tracking-tight transition-all flex items-center gap-2 border-b-2 cursor-pointer ${
                activeTab === 'courses'
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>All Council Disciplines ({nmcnCourses.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('modules')}
              className={`pb-2 text-xs sm:text-sm font-bold tracking-tight transition-all flex items-center gap-2 border-b-2 cursor-pointer ${
                activeTab === 'modules'
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Specialty Modules ({specialtyModules.length})</span>
            </button>
          </div>

          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            Active Question Registry: <strong className="text-slate-900">{allQuestions?.length || 900}</strong>
          </span>
        </div>

        {/* Search & Filter Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder={activeTab === 'courses' ? "Search by title, code, topic..." : "Search specialty modules..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded focus:outline-none focus:border-blue-600 font-sans"
            />
          </div>

          {activeTab === 'courses' && (
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto font-mono text-xs">
              {['ALL', 'CLINICAL', 'RESEARCH', 'COMMUNITY', 'BASIC_SCIENCES', 'FOUNDATIONAL', 'REGULATORY'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1 rounded text-[11px] font-bold tracking-wider transition-colors shrink-0 cursor-pointer ${
                    selectedFilter === filter
                      ? 'bg-[#071A3D] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {filter.replace('_', ' ')}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* TAB 1: ALL NMCN COURSES */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCourses.map((course) => {
              const IconComp = course.icon;
              const count = course.realCount > 0 ? course.realCount : course.defaultCount;

              return (
                <div
                  key={course.id}
                  className="bg-white border border-slate-200 hover:border-slate-300 rounded-lg p-6 shadow-xs flex flex-col justify-between space-y-5 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-[#071A3D] font-bold text-[10px]">
                        {course.code}
                      </span>
                      <span className="text-slate-500 font-bold">{count} Items</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 shrink-0 mt-0.5">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                          {course.title}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400 block mt-1 font-semibold uppercase">
                          {course.councilPaper}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {course.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {course.topics.map((topic) => (
                        <span 
                          key={topic} 
                          className="text-[10px] font-mono px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-700 font-bold">{course.targetScore}</span>
                    <button
                      onClick={() => navigate(`/quiz/${course.id}`)}
                      className="px-3.5 py-1.5 bg-[#071A3D] group-hover:bg-blue-700 text-white rounded font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Launch Drill</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: SPECIALTY MODULES */}
        {activeTab === 'modules' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedModules.map((mod) => (
              <div
                key={mod.id}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-lg p-6 shadow-xs flex flex-col justify-between space-y-4 group transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 font-bold text-[10px]">
                      {mod.badge}
                    </span>
                    <span className="text-slate-500 font-semibold">{mod.items} Questions</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{mod.cadence}</span>
                  <button
                    onClick={() => navigate(`/quiz/${mod.id}`)}
                    className="text-blue-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Launch Module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export { ExamsListingPage as ExamsPage };
export default ExamsListingPage;