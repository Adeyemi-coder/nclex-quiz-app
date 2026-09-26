import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

export const PricingPage = () => {
  const navigate = useNavigate();

  const tiers = [
    {
      name: 'Single Discipline Access',
      price: '₦8,500',
      duration: '30 Days Access',
      desc: 'Targeted drill package for focused remediation on one specific examination discipline.',
      features: [
        '150 questions in your selected discipline',
        'Tutor Mode with instant rationales',
        '72-second standard exam pacing',
        'Detailed answer rationales & pearls',
        'Mobile & desktop accessible'
      ],
      cta: 'Select Single Bank',
      popular: false
    },
    {
      name: 'Full Licensure Candidate Suite',
      price: '₦22,000',
      duration: '90 Days Access',
      desc: 'Comprehensive prep for nursing students sitting the NMCN Professional Licensing Examination.',
      features: [
        'Complete 900+ question bank (All 6 disciplines)',
        'Unlimited full-length CAT exam mocks (85 Qs)',
        'Full 5-stage clinical judgment engine',
        'Personal telemetry & weak area alerts',
        'Downloadable performance audit reports',
        'Direct council syllabus alignment'
      ],
      cta: 'Get Full Candidate Access',
      popular: true
    },
    {
      name: 'Institutional Cohort License',
      price: 'Contact',
      duration: 'Annual Agreement',
      desc: 'Dedicated cohort management portal for Schools and Colleges of Nursing.',
      features: [
        'Multi-student batch enrollment',
        'Faculty oversight dashboard',
        'Cohort readiness score analytics',
        'Custom timed mock generation',
        'Official institutional invoicing'
      ],
      cta: 'Contact Institutional Sales',
      popular: false
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-800 min-h-screen py-12 antialiased font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
            Clear, Transparent Investment
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Preparation Plans for Every Candidate
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Gain full access to realistic clinical judgment simulations, timed exam countdowns, and evidence-based rationales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-8 flex flex-col justify-between space-y-6 ${
                tier.popular
                  ? 'bg-white border-blue-600 shadow-xl relative'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white font-mono text-[10px] font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{tier.desc}</p>
                </div>

                <div className="border-y border-slate-100 py-4 font-mono">
                  <span className="text-3xl font-black text-slate-900">{tier.price}</span>
                  <span className="text-xs text-slate-400 block mt-0.5">{tier.duration}</span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => navigate('/auth')}
                className={`w-full py-3 rounded text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
                  tier.popular
                    ? 'bg-[#071A3D] hover:bg-[#102D63] text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PricingPage;