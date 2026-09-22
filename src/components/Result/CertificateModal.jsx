import React, { useRef } from 'react';
import { Printer, X, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ score, totalQuestions, date, onClose }) {
  const certRef = useRef(null);

  function handlePrint() {
    window.print();
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/70 p-4 backdrop-blur-xs print:static print:bg-transparent print:p-0"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-slate-900/90 p-4 shadow-2xl transition-all sm:p-6 print:m-0 print:w-full print:max-w-none print:bg-transparent print:p-0 print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Bar (Hidden during print) */}
        <div className="mb-4 flex items-center justify-between border-b border-slate-700/60 pb-3 print:hidden">
          <div className="flex items-center gap-2 text-slate-200">
            <Award className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Clinical Credential Document
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex h-9 items-center gap-2 rounded-lg bg-cyan-700 px-4 text-xs font-bold text-white shadow-xs transition-colors hover:bg-cyan-800 focus:outline-none"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print or Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Certificate Canvas */}
        <div 
          ref={certRef}
          className="relative mx-auto rounded-xl border-8 border-[#1D2A59] bg-[#FDFCF7] p-4 text-slate-900 shadow-xl sm:p-8 print:border-4 print:p-6 print:shadow-none"
        >
          {/* Inner Inset Border */}
          <div className="relative rounded-lg border-2 border-[#B89A5A]/50 p-6 sm:p-10">
            
            {/* Corner Decorative Accents */}
            <div className="absolute top-2 left-2 h-4 w-4 border-t-2 border-l-2 border-[#B89A5A]" />
            <div className="absolute top-2 right-2 h-4 w-4 border-t-2 border-r-2 border-[#B89A5A]" />
            <div className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-[#B89A5A]" />
            <div className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-[#B89A5A]" />

            {/* Certificate Header */}
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#B89A5A]/40 bg-[#1D2A59] text-amber-300 shadow-md">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
              </div>

              <span className="font-mono text-xs font-extrabold tracking-[0.25em] text-[#1D2A59] uppercase">
                NCLEX &amp; NMCN Licensure Readiness Directorate
              </span>

              <h1 className="mt-2 font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Certificate of Clinical Excellence
              </h1>

              <div className="mx-auto mt-2 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#B89A5A] to-transparent" />
            </div>

            {/* Certificate Body */}
            <div className="mt-8 text-center">
              <p className="font-serif italic text-xs text-slate-600 sm:text-sm">
                This academic credential confirms that
              </p>

              <div className="mt-3 font-serif text-2xl font-extrabold tracking-wide text-[#1D2A59] sm:text-3xl">
                Registered Nurse Candidate
              </div>

              <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                has successfully fulfilled all simulated clinical judgment domains, evidence-based prioritization tasks, and diagnostic thresholds calibrated to the NCSBN Next-Gen model on the
              </p>

              <div className="mt-2 font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-800 uppercase">
                Comprehensive NCLEX-RN / NMCN Licensure Simulation
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-y border-slate-200/80 py-4 sm:gap-6">
              <div className="text-center">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-emerald-800">
                  {score}%
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Diagnostic Accuracy
                </span>
              </div>

              <div className="border-x border-slate-200 text-center">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-slate-900">
                  {totalQuestions}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Calibrated Items
                </span>
              </div>

              <div className="text-center">
                <span className="inline-flex items-center gap-1 font-mono text-xl sm:text-2xl font-bold text-[#1D2A59]">
                  <CheckCircle2 className="h-5 w-5 text-emerald-700 inline" strokeWidth={2.2} />
                  PASSED
                </span>
                <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                  NCSBN Benchmark
                </span>
              </div>
            </div>

            {/* Signatures & Verification Seal */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 items-end gap-6 pt-4 text-center sm:text-left">
              
              {/* Director Signature */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-48 border-b border-slate-400 pb-1 text-center font-serif text-sm italic text-slate-700">
                  Director of Clinical Evaluation
                </div>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  NCLEX Master Review Board
                </span>
              </div>

              {/* Official Gold Foil Seal Graphic */}
              <div className="flex justify-center order-last sm:order-none">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-dashed border-[#B89A5A] bg-[#B89A5A]/10 text-center shadow-xs">
                  <span className="font-mono text-[9px] font-black tracking-widest text-[#1D2A59] uppercase">
                    OFFICIAL
                  </span>
                  <Award className="h-5 w-5 text-[#B89A5A]" />
                  <span className="font-mono text-[8px] font-bold tracking-widest text-[#1D2A59] uppercase">
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Date Stamp */}
              <div className="flex flex-col items-center sm:items-end">
                <div className="w-48 border-b border-slate-400 pb-1 text-center font-mono text-xs font-bold text-slate-800">
                  {date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Date of Completion
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}