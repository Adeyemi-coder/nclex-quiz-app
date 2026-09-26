// src/components/QuestionOfTheDay.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, XCircle, Share2, Copy, Check } from 'lucide-react';

// ---------------------------------------------------------------------------
// QOTD POOL — replace this with a real slice of your 900-question bank when
// you have a backend endpoint. Client-side rotation cycles through this pool
// by calendar day, so it repeats every N days until then.
// ---------------------------------------------------------------------------
const QOTD_BANK = [
  {
    id: 'QOTD-001',
    subject: 'Emergency Nursing',
    question:
      'A patient develops sudden chest pain and shortness of breath 3 days after hip surgery. Which action should the nurse take first?',
    options: [
      { text: 'Notify the provider and prepare for suspected pulmonary embolism', correct: true },
      { text: 'Encourage the patient to cough and deep breathe', correct: false },
      { text: 'Assist the patient to ambulate to improve circulation', correct: false },
      { text: 'Apply a warm compress to the surgical leg', correct: false },
    ],
    rationale:
      'Sudden chest pain and dyspnea after orthopedic surgery is a classic presentation of pulmonary embolism, a medical emergency requiring immediate provider notification.',
    pearl: 'Post-op day 2–5 after hip or knee surgery is the highest-risk window for DVT and PE.',
  },
  {
    id: 'QOTD-002',
    subject: 'Pharmacology',
    question:
      'A patient on warfarin has an INR of 6.8 with no active bleeding. Which order should the nurse anticipate?',
    options: [
      { text: 'Hold warfarin and administer oral vitamin K', correct: true },
      { text: 'Continue the current warfarin dose', correct: false },
      { text: 'Administer protamine sulfate', correct: false },
      { text: 'Increase the warfarin dose to reach therapeutic range', correct: false },
    ],
    rationale:
      'An INR this high with no bleeding calls for holding warfarin and giving oral vitamin K to bring the INR down safely without overcorrecting.',
    pearl: 'Protamine sulfate reverses heparin, not warfarin — a common exam mix-up.',
  },
  {
    id: 'QOTD-003',
    subject: 'Maternal & Newborn Health',
    question:
      'A newborn has a heart rate of 90 bpm at one minute of life despite drying and stimulation. What is the priority action?',
    options: [
      { text: 'Begin positive pressure ventilation', correct: true },
      { text: 'Start chest compressions immediately', correct: false },
      { text: 'Administer epinephrine', correct: false },
      { text: 'Continue drying and observe for another minute', correct: false },
    ],
    rationale:
      'A heart rate below 100 bpm after initial steps calls for positive pressure ventilation before compressions, per newborn resuscitation guidelines.',
    pearl: 'Chest compressions start only if the heart rate stays below 60 bpm after 30 seconds of effective PPV.',
  },
  {
    id: 'QOTD-004',
    subject: 'Nursing Ethics & Jurisprudence',
    question:
      'A competent adult patient refuses a blood transfusion on religious grounds despite a life-threatening hemoglobin level. What should the nurse do?',
    options: [
      { text: 'Respect the patient\u2019s right to refuse and document the discussion', correct: true },
      { text: 'Administer the transfusion since the situation is life-threatening', correct: false },
      { text: 'Ask the family to override the patient\u2019s decision', correct: false },
      { text: 'Delay care until the ethics committee convenes', correct: false },
    ],
    rationale:
      'A competent adult has the right to refuse treatment, even when life-threatening, based on informed consent and bodily autonomy.',
    pearl: 'Competence and capacity, not the severity of the diagnosis, determine whether a refusal must be honored.',
  },
  {
    id: 'QOTD-005',
    subject: 'Fundamentals of Nursing',
    question:
      'Which finding indicates a nasogastric tube has been correctly placed in the stomach?',
    options: [
      { text: 'Aspirate has a pH of 4, consistent with gastric contents', correct: true },
      { text: 'The patient can speak normally after insertion', correct: false },
      { text: 'Air insufflation produces a gurgling sound over the epigastrium', correct: false },
      { text: 'The tube advances freely with no resistance', correct: false },
    ],
    rationale:
      'Aspirate pH testing is the most reliable bedside method — gastric contents are typically acidic (pH below 5), while respiratory placement gives a higher pH.',
    pearl: 'The auscultation "whoosh" test is unreliable and no longer recommended as a standalone check.',
  },
  {
    id: 'QOTD-006',
    subject: 'Primary Health Care',
    question:
      'During a home visit, a community health nurse notes a child has not received any immunizations. What is the priority action?',
    options: [
      { text: 'Educate the caregiver and refer to the nearest immunization clinic', correct: true },
      { text: 'Report the caregiver to child protection services', correct: false },
      { text: 'Administer the vaccines from the nurse\u2019s home visit kit', correct: false },
      { text: 'Document the finding with no further action', correct: false },
    ],
    rationale:
      'The priority is education and connecting the family to services — most non-vaccination stems from access or awareness gaps, not neglect.',
    pearl: 'Community health nursing prioritizes access and education before assuming intent.',
  },
  {
    id: 'QOTD-007',
    subject: 'Mental Health Nursing',
    question:
      'A patient with major depression suddenly appears calm and gives away personal belongings after weeks of severe symptoms. What should the nurse do first?',
    options: [
      { text: 'Assess immediately for suicidal ideation and a plan', correct: true },
      { text: 'Document the improved mood as a positive sign', correct: false },
      { text: 'Allow the patient privacy to organize their belongings', correct: false },
      { text: 'Wait until the next scheduled assessment', correct: false },
    ],
    rationale:
      'Sudden calm after severe depression, combined with giving away possessions, is a classic warning sign that a patient has decided on suicide and needs immediate assessment.',
    pearl: 'A sudden lift in mood is not always good news — always assess for suicidal intent before assuming improvement.',
  },
  {
    id: 'QOTD-008',
    subject: 'Emergency & Disaster Nursing',
    question:
      'In a mass casualty triage using the START system, a patient is not breathing even after the airway is repositioned. How should this patient be triaged?',
    options: [
      { text: 'Black — deceased/expectant', correct: true },
      { text: 'Red — immediate', correct: false },
      { text: 'Yellow — delayed', correct: false },
      { text: 'Green — minor', correct: false },
    ],
    rationale:
      'In START triage, a patient who remains apneic after airway repositioning is classified as deceased/expectant, since resources are limited during mass casualty events.',
    pearl: 'This is one of the hardest rules for new nurses to accept — START prioritizes overall survival over individual heroics.',
  },
];

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getDailyIndex(poolLength) {
  const anchor = new Date(2025, 0, 1).getTime();
  const dayMs = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((Date.now() - anchor) / dayMs);
  return ((diffDays % poolLength) + poolLength) % poolLength;
}

function getMsUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  return midnight - now;
}

function formatCountdown(ms) {
  const totalMinutes = Math.max(0, Math.floor(ms / 60000));
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h}h ${m}m`;
}

const STORAGE_PREFIX = 'nclex_qotd_';

export function QuestionOfTheDay() {
  const shouldReduceMotion = useReducedMotion();
  const [todayKey, setTodayKey] = useState(getTodayKey());
  const question = useMemo(() => QOTD_BANK[getDailyIndex(QOTD_BANK.length)], [todayKey]);

  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(formatCountdown(getMsUntilMidnight()));

  // Restore today's saved answer, if any
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + todayKey);
      if (raw) {
        const saved = JSON.parse(raw);
        setSelected(saved.selected);
        setRevealed(saved.revealed);
      } else {
        setSelected(null);
        setRevealed(false);
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) — just won't persist
    }
  }, [todayKey]);

  // Persist today's answer
  useEffect(() => {
    if (selected === null) return;
    try {
      localStorage.setItem(STORAGE_PREFIX + todayKey, JSON.stringify({ selected, revealed }));
    } catch {
      // ignore
    }
  }, [selected, revealed, todayKey]);

  // Tick the countdown and roll over to a new question after local midnight
  useEffect(() => {
    const id = setInterval(() => {
      const key = getTodayKey();
      setTodayKey((prev) => (prev !== key ? key : prev));
      setCountdown(formatCountdown(getMsUntilMidnight()));
    }, 60000);
    return () => clearInterval(id);
  }, []);

  const chosen = selected !== null ? question.options[selected] : null;

  const handleSelect = (i) => {
    if (revealed) return;
    setSelected(i);
  };

  const handleSubmit = useCallback(() => {
    if (selected === null || revealed) return;
    setRevealed(true);
  }, [selected, revealed]);

  const shareText = `🩺 Nursing Question of the Day\n\n${question.question}\n\nTry it and see if you get it right:`;
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/#question-of-the-day` : '';

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`${shareText}\n${shareUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Nursing Question of the Day', text: shareText, url: shareUrl });
      } catch {
        // user cancelled the share sheet — no-op
      }
    } else {
      handleWhatsAppShare();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  const todayLabel = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section id="question-of-the-day" className="max-w-4xl mx-auto px-6">
      <div className="rounded-xl border border-slate-300 bg-white shadow-xs overflow-hidden">
        <div className="bg-[#071A3D] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">
              No sign-up needed
            </span>
            <h2 className="text-base font-bold">Question of the Day</h2>
          </div>
          <span className="text-xs font-mono text-slate-300">{todayLabel}</span>
        </div>

        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-100 pb-3">
            <span className="font-bold text-[#071A3D]">{question.subject}</span>
            <span>{question.id}</span>
          </div>

          <p className="text-lg font-bold text-slate-900 leading-snug">{question.question}</p>

          <div className="space-y-3">
            {question.options.map((opt, i) => {
              const isSelected = selected === i;
              let classes = 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-800';
              if (revealed && opt.correct) {
                classes = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-600';
              } else if (revealed && isSelected && !opt.correct) {
                classes = 'border-rose-600 bg-rose-50 text-rose-950 font-bold ring-1 ring-rose-600';
              } else if (!revealed && isSelected) {
                classes = 'border-slate-900 bg-white text-slate-900 font-bold ring-1 ring-slate-900';
              }

              return (
                <button
                  key={opt.text}
                  type="button"
                  onClick={() => handleSelect(i)}
                  disabled={revealed}
                  className={`w-full text-left p-4 rounded border text-sm font-medium transition-all flex items-center justify-between disabled:cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 ${classes}`}
                >
                  <span>{opt.text}</span>
                  {revealed && opt.correct && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                  {revealed && isSelected && !opt.correct && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          {!revealed ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={selected === null}
              className="w-full sm:w-auto px-6 py-3 rounded bg-[#071A3D] hover:bg-[#102D63] text-white text-sm font-bold disabled:bg-slate-200 disabled:text-slate-400 transition-colors"
            >
              Submit answer
            </button>
          ) : (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden space-y-5"
            >
              <div
                className={`p-4 rounded border text-xs leading-relaxed space-y-2 ${
                  chosen?.correct ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'
                }`}
              >
                <div
                  className={`font-bold font-mono text-[11px] uppercase flex items-center gap-2 ${
                    chosen?.correct ? 'text-emerald-700' : 'text-rose-700'
                  }`}
                >
                  {chosen?.correct ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  <span>{chosen?.correct ? 'Correct' : 'Why?'}</span>
                </div>
                <p className="text-slate-700">{question.rationale}</p>
                {question.pearl && (
                  <div className="p-2.5 bg-amber-50 border border-amber-200 text-amber-950 rounded text-[11px]">
                    <strong>Remember:</strong> {question.pearl}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-mono">Next question in {countdown}</span>
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2"
                >
                  <Share2 className="w-3.5 h-3.5" /> Share with a study group
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-4 py-2 rounded border border-slate-300 text-slate-700 text-xs font-bold flex items-center gap-2 hover:bg-slate-50"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy link'}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuestionOfTheDay;