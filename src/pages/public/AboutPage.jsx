// src/pages/public/AboutPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../../components/common/Badge';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  FileCheck,
  Scale,
  Users2,
  ChevronRight
} from 'lucide-react';

export const AboutPage = () => {
  const navigate = useNavigate();

  const standards = [
    {
      title: 'NMCN Syllabus Conformance',
      code: 'Cap N143 LFN',
      desc: 'All items adhere strictly to the Nursing and Midwifery Council of Nigeria curriculum standards, including the revised basic and post-basic nursing regulations.'
    },
    {
      title: 'National Health Act (2014) Alignment',
      code: 'NHA 2014',
      desc: 'Legal, ethical, and primary healthcare questions directly reference statutory provisions of the National Health Act, BHCPF mechanisms, and patient rights charters.'
    },
    {
      title: 'Next-Generation NCLEX (NGN) Model',
      code: 'NGN NCSBN',
      desc: 'Clinical judgment questions incorporate layering, prioritization matrices, and risk assessment following standard clinical measurement models.'
    },
    {
      title: 'Evidence-Based Fact Checking',
      code: 'WHO & NPHCDA',
      desc: 'Every item is verified against established medical authorities, including Ross & Wilson Anatomy, NPHCDA manuals, and current WHO clinical guidelines.'
    }
  ];

  const candidateCadres = [
    {
      role: 'Basic Nursing Students',
      focus: 'NMCN General Nursing Licensure',
      description: 'Preparing for hospital qualifying assessments, hospital indexing exams, and first-attempt Council professional tests.'
    },
    {
      role: 'BNSc University Scholars',
      focus: 'Clinical Integration & Synthesis',
      description: 'Mastering cross-disciplinary reasoning across medical-surgical, public health, pediatric, and psychiatric rotations.'
    },
    {
      role: 'Post-Basic Specialty Nurses',
      focus: 'Advanced Clinical Practice',
      description: 'Deepening judgment in acute critical care, perioperative workflows, emergency triage, and maternal-child health.'
    },
    {
      role: 'Foreign-Trained Nurse Candidates',
      focus: 'Regulatory Conversion Exams',
      description: 'Preparing for mandatory licensing screening boards and adapting to national primary healthcare frameworks.'
    }
  ];

  return (
    <div className="py-12 md:py-20 space-y-20">
      {/* 1. HERO SECTION WITH STATS BAR */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Institutional Profile & Academic Standards</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Bridging the gap between classroom theory and real council examination standards.
            </h1>
            
            <p className="text-base text-slate-600 leading-relaxed font-normal pt-1">
              NCLEX Clinical Master is an advanced examination simulation and clinical reasoning platform built specifically for nursing candidates preparing for regulatory licensure and qualifying assessments.
            </p>
          </div>

          {/* Quick Verification Sidebar Card */}
          <div className="lg:col-span-4 bg-white border border-surface-border rounded-lg p-5 shadow-subtle space-y-3 animate-fade-up delay-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Regulatory Verification
            </span>
            <div className="text-xs space-y-2 text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">NMCN Syllabus Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">NGN Case-Study Format</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Verified Rationale Database</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Standard: Cap N143 LFN</span>
              <span className="text-emerald-700 font-bold">Active Build</span>
            </div>
          </div>
        </div>

        {/* Anchored Stats Strip */}
        <div className="mt-12 bg-white border border-surface-border rounded-lg grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-surface-border shadow-subtle animate-fade-up delay-200">
          <div className="p-6 text-center sm:text-left">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-brand-primary block">900+</span>
            <span className="text-xs font-semibold text-slate-700 mt-1 block">Accredited Test Items</span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">Spanning 6 core nursing disciplines</span>
          </div>
          <div className="p-6 text-center sm:text-left">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-emerald-600 block">75%</span>
            <span className="text-xs font-semibold text-slate-700 mt-1 block">Statutory Passing Threshold</span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">Official council assessment benchmark</span>
          </div>
          <div className="p-6 text-center sm:text-left">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-slate-900 block">72 Sec</span>
            <span className="text-xs font-semibold text-slate-700 mt-1 block">Item Pacing Timer</span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">Exact computer-based testing cadence</span>
          </div>
        </div>
      </section>

      {/* 2. THE FOUNDING PURPOSE */}
      <section className="bg-white border-y border-surface-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block">Founding Purpose</span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              Why NCLEX Clinical Master Exists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs md:text-sm text-slate-600 leading-relaxed">
            <p>
              In many health education ecosystems, nursing candidates rely on unverified past questions, outdated physical study leaflets, and fragmented notes. Many of these resources feature missing answer keys, contradictory rationales, or obsolete medical practices—such as discontinued newborn care techniques, superseded pharmacological schedules, or deprecated resuscitation sequences.
            </p>
            <p>
              When candidates face modern computerized qualifying examinations, they encounter clinical scenario vignettes that test critical prioritization and safety boundaries rather than simple rote memorization. NCLEX Clinical Master was developed to provide verified, comprehensive, and up-to-date examination banks with detailed clinical pearls on every item.
            </p>
          </div>
        </div>
      </section>

      {/* 3. QUALITY & FACT-CHECKING FRAMEWORK */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block">Editorial Standards</span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
            Our Quality & Fact-Checking Framework
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Every item inside our question pools must pass rigorous clinical review criteria before publication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {standards.map((std, idx) => (
            <div 
              key={std.title} 
              className="p-5 rounded-lg border border-surface-border bg-white shadow-subtle transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-primary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 font-bold bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                    {std.code}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{std.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{std.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHO THE PLATFORM SERVES (REDESIGNED) */}
      <section className="bg-white border-y border-surface-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block">Candidate Scope</span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              Who The Platform Serves
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Tailored preparation paths for multiple licensing pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {candidateCadres.map((cadre) => (
              <div 
                key={cadre.role} 
                className="p-5 rounded-lg border border-slate-200 bg-surface-canvas hover:bg-white hover:border-brand-primary/40 transition-all duration-200 flex gap-4 items-start"
              >
                <div className="w-9 h-9 rounded bg-brand-primary text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  <Users2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">{cadre.role}</h3>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-primary block">{cadre.focus}</span>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{cadre.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION STRIP */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="bg-brand-primary rounded-lg p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card transition-all duration-300">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Begin Clinical Examination Practice</h3>
            <p className="text-xs text-slate-300 mt-1 max-w-md leading-relaxed">
              Access the candidate dashboard to initiate tutor drills, timed council simulations, and real-time performance analytics.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-5 py-2.5 bg-white text-slate-900 text-xs font-bold rounded hover:bg-slate-100 hover:shadow-md active:scale-95 transition-all flex items-center gap-2 shadow-subtle"
            >
              <span>Launch Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => navigate('/exams')}
              className="px-5 py-2.5 border border-slate-400 text-white text-xs font-semibold rounded hover:bg-white/10 active:scale-95 transition-all"
            >
              Browse Test Banks
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;