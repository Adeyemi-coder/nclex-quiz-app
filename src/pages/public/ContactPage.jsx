import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, 
  MessageSquare, 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  ArrowLeft,
  BookOpen,
  GraduationCap
} from 'lucide-react';

export const ContactPage = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    
    // In production, connect this to your backend API or Formspree/Resend
    console.log('Support Ticket Submitted:', data);
    setFormSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-ink-950 text-slate-800 dark:text-cream py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Back Navigation */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#1D2A59] dark:text-cream hover:underline mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Header Banner */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#B89A5A]">
            Candidate Assistance & Inquiries
          </span>
          <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#1D2A59] dark:text-cream">
            Help & Clinical Support
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-ink-300 max-w-xl">
            Have questions regarding question rationales, examination telemetry, or technical issues? Reach out to our team directly.
          </p>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white dark:bg-ink-900 border border-slate-200 dark:border-ink-700 rounded-xl p-4 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#1D2A59]/10 text-[#1D2A59] flex items-center justify-center mb-3">
              <Mail className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-cream">Direct Email</h3>
            <p className="text-[11px] text-slate-500 dark:text-ink-300 mt-1">Typical response within 24 hours</p>
            <a 
              href="mailto:support@nclexclinical.com" 
              className="text-xs font-semibold text-[#1D2A59] dark:text-brass hover:underline mt-2 inline-block"
            >
              adeyemikennedy3@gmail.com
            </a>
          </div>

          <div className="bg-white dark:bg-ink-900 border border-slate-200 dark:border-ink-700 rounded-xl p-4 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-cream">Item Remediation</h3>
            <p className="text-[11px] text-slate-500 dark:text-ink-300 mt-1">Dispute or clarify question rationales</p>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-2 inline-block">
              Clinical Review Team
            </span>
          </div>

          <div className="bg-white dark:bg-ink-900 border border-slate-200 dark:border-ink-700 rounded-xl p-4 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#B89A5A] flex items-center justify-center mb-3">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-cream">Resource Library</h3>
            <p className="text-[11px] text-slate-500 dark:text-ink-300 mt-1">Self-service guides & cheat sheets</p>
            <button 
              type="button"
              onClick={() => navigate('/dashboard/study-guide')}
              className="text-xs font-semibold text-[#B89A5A] hover:underline mt-2 inline-block cursor-pointer"
            >
              Open Study Guide →
            </button>
          </div>
        </div>

        {/* Contact Form & FAQ Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white dark:bg-ink-900 border border-slate-200 dark:border-ink-700 rounded-2xl p-5 sm:p-7 shadow-xs">
            {formSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-900 dark:text-cream">Inquiry Submitted</h3>
                <p className="text-xs text-slate-500 dark:text-ink-300 mt-1 max-w-sm mx-auto">
                  Thank you for reaching out. A confirmation has been logged, and a response will be dispatched to your email.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-5 px-4 py-2 bg-[#1D2A59] text-white text-xs font-semibold rounded-lg hover:bg-[#283A78] cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#1D2A59] dark:text-cream mb-4">
                  Send a Support Ticket
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-ink-300 mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Adeyemi Kehinde"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-ink-700 bg-slate-50 dark:bg-ink-800 text-slate-900 dark:text-cream focus:outline-none focus:border-[#1D2A59]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-ink-300 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. candidate@example.com"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-ink-700 bg-slate-50 dark:bg-ink-800 text-slate-900 dark:text-cream focus:outline-none focus:border-[#1D2A59]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-ink-300 mb-1">
                    Inquiry Category
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-ink-700 bg-slate-50 dark:bg-ink-800 text-slate-900 dark:text-cream focus:outline-none focus:border-[#1D2A59]"
                  >
                    <option value="clinical-rationale">Question Rationale / Medical Accuracy Dispute</option>
                    <option value="exam-telemetry">Score Calculation or Timer Bug</option>
                    <option value="account-support">Account or Profile Settings</option>
                    <option value="other">General Feedback / Suggestion</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-ink-300 mb-1">
                    Message / Vignette Reference Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Provide specific details (e.g. Item number, module name, or error encounter)..."
                    className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-ink-700 bg-slate-50 dark:bg-ink-800 text-slate-900 dark:text-cream focus:outline-none focus:border-[#1D2A59]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#1D2A59] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#283A78] transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Support Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick FAQ Side */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1D2A59] dark:text-cream">
              Common Candidate Inquiries
            </h2>

            <div className="bg-white dark:bg-ink-900 border border-slate-200 dark:border-ink-700 rounded-xl p-4 shadow-xs">
              <h4 className="text-xs font-bold text-slate-900 dark:text-cream flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#1D2A59] shrink-0" />
                How are SATA questions scored?
              </h4>
              <p className="text-xs text-slate-600 dark:text-ink-300 mt-2 leading-relaxed">
                Select All That Apply (SATA) items use partial-credit +/- scoring where incorrect selections deduct points, with a minimum of 0 points per item.
              </p>
            </div>

            <div className="bg-white dark:bg-ink-900 border border-slate-200 dark:border-ink-700 rounded-xl p-4 shadow-xs">
              <h4 className="text-xs font-bold text-slate-900 dark:text-cream flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#1D2A59] shrink-0" />
                Is my exam progress stored?
              </h4>
              <p className="text-xs text-slate-600 dark:text-ink-300 mt-2 leading-relaxed">
                Yes. Session records, bookmarked questions, and telemetry are synchronized to your browser's persistent storage under your Candidate Profile.
              </p>
            </div>

            <div className="bg-white dark:bg-ink-900 border border-slate-200 dark:border-ink-700 rounded-xl p-4 shadow-xs">
              <h4 className="text-xs font-bold text-slate-900 dark:text-cream flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#1D2A59] shrink-0" />
                Tutor Mode vs. Timed Simulation
              </h4>
              <p className="text-xs text-slate-600 dark:text-ink-300 mt-2 leading-relaxed">
                Tutor Mode displays instant rationales and pearls upon selection. Timed Mode simulates strict licensure conditions with pacing countdowns.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};