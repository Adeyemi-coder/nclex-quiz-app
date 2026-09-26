import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  X,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// 1. SCENARIO BANK — add cases here, the component doesn't care how many
// ---------------------------------------------------------------------------
const SCENARIOS = [
  {
    id: 'preeclampsia-hellp',
    tag: 'Obstetric triage',
    title: 'Severe Preeclampsia / HELLP',
    patient: 'Martins, E.',
    patientMeta: 'Female · 28 · 34 wks gestation',
    timeLimitSeconds: 72,
    vitals: {
      readings: [
        { label: 'Blood pressure', value: '178/112', unit: 'mmHg', danger: true },
        { label: 'Heart rate', value: '104', unit: 'bpm', danger: false },
      ],
      note:
        'Presents with severe persistent epigastric pain, blurred vision, and +3 proteinuria on dipstick. Patellar reflexes hyperactive (+4) with sustained clonus.',
    },
    labs: [
      { label: 'Platelet count', value: '82,000', unit: '/mcL', flag: 'danger', note: 'Low' },
      { label: 'AST / ALT', value: '148 / 162', unit: 'U/L', flag: 'danger', note: 'Elevated' },
      { label: 'Serum creatinine', value: '1.3', unit: 'mg/dL', flag: 'warning', note: '' },
    ],
    question:
      'Based on the clinical picture, which medication must be administered immediately as the first-line priority to prevent maternal seizures?',
    options: [
      {
        text: 'Magnesium Sulfate — 4 g IV loading dose over 15 minutes, then 1 g/hr infusion',
        correct: true,
        rationale:
          'Correct. Magnesium sulfate is the anticonvulsant of choice for preventing and treating eclamptic seizures in severe preeclampsia/HELLP.',
      },
      {
        text: 'Diazepam — 10 mg IV push slowly over 2 minutes',
        correct: false,
        rationale:
          'Not first-line. Benzodiazepines carry higher maternal/fetal respiratory depression risk and aren\u2019t used for seizure prophylaxis here.',
      },
      {
        text: 'Phenytoin — 15 mg/kg IV infusion in 0.9% Normal Saline',
        correct: false,
        rationale: 'Inferior to magnesium sulfate for eclampsia prophylaxis; not the guideline-recommended first choice.',
      },
      {
        text: 'Furosemide — 40 mg IV push to reduce blood volume',
        correct: false,
        rationale: 'Doesn\u2019t address seizure risk, and can worsen the intravascular volume depletion already present.',
      },
    ],
  },
  {
    id: 'dka-priority',
    tag: 'Endocrine emergency',
    title: 'Diabetic Ketoacidosis',
    patient: 'Okoro, T.',
    patientMeta: 'Male · 19 · Type 1 diabetic',
    timeLimitSeconds: 60,
    vitals: {
      readings: [
        { label: 'Blood glucose', value: '512', unit: 'mg/dL', danger: true },
        { label: 'Resp. rate', value: '28', unit: '/min, Kussmaul', danger: true },
      ],
      note:
        '2 days of vomiting, fruity breath odor, and lethargy. Skin dry with poor turgor. Alert but slow to respond.',
    },
    labs: [
      { label: 'Serum pH', value: '7.18', unit: '', flag: 'danger', note: 'Acidotic' },
      { label: 'Serum potassium', value: '3.1', unit: 'mEq/L', flag: 'danger', note: 'Low' },
      { label: 'Serum ketones', value: 'Large', unit: '', flag: 'danger', note: '' },
    ],
    question:
      "Given the potassium level, what is the priority action before starting an insulin infusion?",
    options: [
      {
        text: 'Notify the provider and begin potassium replacement before or alongside insulin',
        correct: true,
        rationale:
          "Correct. Insulin drives potassium into cells and can trigger life-threatening hypokalemia and arrhythmias if replacement isn't addressed first.",
      },
      {
        text: 'Start the insulin infusion immediately per DKA protocol',
        correct: false,
        rationale: 'Starting insulin before correcting a potassium of 3.1 mEq/L risks dangerous hypokalemia.',
      },
      {
        text: 'Administer IV sodium bicarbonate to correct the acidosis',
        correct: false,
        rationale: 'Bicarbonate isn\u2019t routine in DKA — reserved for extreme, refractory acidosis.',
      },
      {
        text: 'Restrict IV fluids until glucose trends down',
        correct: false,
        rationale: 'Patients in DKA are volume-depleted and need prompt isotonic fluid resuscitation, not restriction.',
      },
    ],
  },
];

const TAB_KEYS = { VITALS: 'vitals', LABS: 'labs' };

// ---------------------------------------------------------------------------
// 2. TILT WRAPPER — subtle 3D response to the cursor, the "luxury" panel feel
// ---------------------------------------------------------------------------
function TiltPanel({ children, className = '' }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -4, y: px * 6 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className={className}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. GOLD RING TIMER
// ---------------------------------------------------------------------------
function TimerRing({ timeLeft, totalTime, critical }) {
  const pct = totalTime > 0 ? (timeLeft / totalTime) * 100 : 0;
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div
      className={`relative w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${
        critical ? 'cds-pulse' : ''
      }`}
      style={{
        background: `conic-gradient(${critical ? '#E8677A' : '#C9A455'} ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
        transition: 'background 1s linear',
      }}
    >
      <div className="absolute inset-[3px] rounded-full bg-[#10152A] flex items-center justify-center">
        <span className={`font-mono text-[13px] tracking-tight ${critical ? 'text-[#E8677A]' : 'text-[#EDE6D6]'}`}>
          {minutes}:{seconds}
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. OPTION ROW
// ---------------------------------------------------------------------------
function OptionRow({ option, index, isSelected, isRevealed, onSelect }) {
  const letter = String.fromCharCode(65 + index);

  let classes =
    'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 text-[#C9CEDD]';
  if (isRevealed && option.correct) {
    classes = 'border-[#4ADE9C]/60 bg-[#4ADE9C]/[0.08] text-[#E7FFF3] cds-pop';
  } else if (isRevealed && isSelected && !option.correct) {
    classes = 'border-[#E8677A]/60 bg-[#E8677A]/[0.08] text-[#FFE9EC] cds-shake';
  } else if (!isRevealed && isSelected) {
    classes = 'border-[#C9A455]/70 bg-[#C9A455]/[0.08] text-[#F5EFDD]';
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      disabled={isRevealed}
      aria-pressed={isSelected}
      className={`w-full text-left px-4 py-3.5 rounded-xl border flex items-center gap-3 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A] focus-visible:ring-[#C9A455] disabled:cursor-default ${classes}`}
    >
      <span
        className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-[11px] font-medium ${
          isSelected || (isRevealed && option.correct)
            ? 'border-[#C9A455] text-[#C9A455]'
            : 'border-white/20 text-white/40'
        }`}
      >
        {letter}
      </span>
      <span className="text-[13px] leading-relaxed flex-1">{option.text}</span>
      {isRevealed && option.correct && <CheckCircle2 className="w-4 h-4 shrink-0 text-[#4ADE9C]" />}
      {isRevealed && isSelected && !option.correct && <XCircle className="w-4 h-4 shrink-0 text-[#E8677A]" />}
    </button>
  );
}

// ---------------------------------------------------------------------------
// 5. MAIN PAGE
// ---------------------------------------------------------------------------
export const ClinicalSimulatorPage = () => {
  const navigate = useNavigate();

  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(TAB_KEYS.VITALS);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, attempted: 0 });
  const [timeLeft, setTimeLeft] = useState(SCENARIOS[0].timeLimitSeconds);

  const scenario = SCENARIOS[scenarioIndex];
  const isLastScenario = scenarioIndex === SCENARIOS.length - 1;
  const selected = selectedOption !== null ? scenario.options[selectedOption] : null;

  // Load a serif display face for case titles + a clean sans for body.
  // (Drop this in index.html instead if you'd rather not inject it at runtime.)
  useEffect(() => {
    if (document.getElementById('cds-fonts')) return;
    const link = document.createElement('link');
    link.id = 'cds-fonts';
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    setActiveTab(TAB_KEYS.VITALS);
    setSelectedOption(null);
    setIsRevealed(false);
    setTimeLeft(scenario.timeLimitSeconds);
  }, [scenarioIndex, scenario.timeLimitSeconds]);

  useEffect(() => {
    if (isRevealed || timeLeft <= 0) return undefined;
    const id = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [isRevealed, timeLeft]);

  const handleSubmit = useCallback(() => {
    if (selectedOption === null || isRevealed) return;
    setIsRevealed(true);
    setScore((s) => ({
      correct: s.correct + (scenario.options[selectedOption].correct ? 1 : 0),
      attempted: s.attempted + 1,
    }));
  }, [selectedOption, isRevealed, scenario]);

  useEffect(() => {
    if (timeLeft === 0 && !isRevealed) {
      setIsRevealed(true);
      setScore((s) => ({ ...s, attempted: s.attempted + 1 }));
    }
  }, [timeLeft, isRevealed]);

  const handleNext = () => !isLastScenario && setScenarioIndex((i) => i + 1);
  const handleRestart = () => {
    setScenarioIndex(0);
    setScore({ correct: 0, attempted: 0 });
  };

  const isTimeCritical = timeLeft <= 15 && timeLeft > 0 && !isRevealed;

  return (
    <div
      className="min-h-screen py-10 antialiased"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,164,85,0.10), transparent), #0A0E1A',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <style>{`
        @keyframes cds-fade-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cds-fade-scale { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        @keyframes cds-pop { 0% { transform: scale(1); } 40% { transform: scale(1.015); } 100% { transform: scale(1); } }
        @keyframes cds-shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-3px); } 75% { transform: translateX(3px); } }
        @keyframes cds-pulse { 0%, 100% { filter: drop-shadow(0 0 0 rgba(232,103,122,0)); } 50% { filter: drop-shadow(0 0 6px rgba(232,103,122,0.6)); } }
        .cds-fade-up { animation: cds-fade-up 500ms cubic-bezier(0.22,1,0.36,1) both; }
        .cds-fade-scale { animation: cds-fade-scale 400ms cubic-bezier(0.22,1,0.36,1) both; }
        .cds-pop { animation: cds-pop 400ms ease; }
        .cds-shake { animation: cds-shake 350ms ease; }
        .cds-pulse { animation: cds-pulse 1.1s ease-in-out infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-[11px] tracking-wide text-[#C9A455]/80">Clinical decision series</span>
            <h1
              className="text-3xl sm:text-[38px] text-[#F5EFDD] mt-1"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
            >
              Bedside Judgement
            </h1>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-[13px] text-[#C9CEDD]">
              <Trophy className="w-4 h-4 text-[#C9A455]" />
              <span>
                {score.correct} of {score.attempted} correct
              </span>
            </div>
            <div className="text-[13px] text-[#8B93A8]">
              Case {scenarioIndex + 1} of {SCENARIOS.length}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="h-[3px] w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((scenarioIndex + (isRevealed ? 1 : 0)) / SCENARIOS.length) * 100}%`,
              background: 'linear-gradient(90deg, #C9A455, #E8C878)',
            }}
          />
        </div>

        {/* Workstation */}
        <div key={scenario.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start cds-fade-scale">
          {/* Chart panel */}
          <TiltPanel className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#10152A]/80 backdrop-blur-sm overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="p-5 border-b border-white/10 flex justify-between items-start">
              <div>
                <div className="text-[#F5EFDD] text-[15px] font-medium">{scenario.patient}</div>
                <div className="text-[12px] text-[#8B93A8] mt-0.5">{scenario.patientMeta}</div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] border border-[#C9A455]/30 text-[#C9A455] bg-[#C9A455]/[0.06]">
                {scenario.tag}
              </span>
            </div>

            <div className="flex px-5 pt-4 gap-6 text-[13px]">
              {[TAB_KEYS.VITALS, TAB_KEYS.LABS].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={activeTab === tab}
                  className={`pb-3 border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-[#C9A455] text-[#F5EFDD]'
                      : 'border-transparent text-[#8B93A8] hover:text-[#C9CEDD]'
                  }`}
                >
                  {tab === TAB_KEYS.VITALS ? 'Vitals' : 'Labs'}
                </button>
              ))}
            </div>

            <div className="p-5 pt-4">
              {activeTab === TAB_KEYS.VITALS ? (
                <div key="vitals" className="cds-fade-up space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {scenario.vitals.readings.map((r) => (
                      <div key={r.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <div className="text-[11px] text-[#8B93A8]">{r.label}</div>
                        <div
                          className={`font-mono text-lg mt-1 ${r.danger ? 'text-[#E8677A]' : 'text-[#F5EFDD]'}`}
                        >
                          {r.value}
                          <span className="text-[11px] ml-1 text-[#8B93A8]">{r.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] text-[#C9CEDD] leading-relaxed">{scenario.vitals.note}</p>
                </div>
              ) : (
                <div key="labs" className="cds-fade-up space-y-1">
                  {scenario.labs.map((lab) => (
                    <div
                      key={lab.label}
                      className="flex justify-between items-center py-2.5 border-b border-white/[0.06] last:border-b-0"
                    >
                      <span className="text-[13px] text-[#8B93A8]">{lab.label}</span>
                      <span
                        className={`font-mono text-[13px] ${
                          lab.flag === 'danger' ? 'text-[#E8677A]' : lab.flag === 'warning' ? 'text-[#C9A455]' : 'text-[#F5EFDD]'
                        }`}
                      >
                        {lab.value} {lab.unit}
                        {lab.note && <span className="text-[11px] text-[#8B93A8] ml-1.5">{lab.note}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TiltPanel>

          {/* Question panel */}
          <TiltPanel className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#10152A]/80 backdrop-blur-sm p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] space-y-5">
            <div className="flex items-start justify-between gap-4">
              <h2
                className="text-[19px] text-[#F5EFDD] leading-snug"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
              >
                {scenario.title}
              </h2>
              <TimerRing timeLeft={timeLeft} totalTime={scenario.timeLimitSeconds} critical={isTimeCritical} />
            </div>

            <p className="text-[14px] text-[#C9CEDD] leading-relaxed">{scenario.question}</p>

            <div className="space-y-2.5" role="radiogroup" aria-label="Answer options">
              {scenario.options.map((opt, i) => (
                <OptionRow
                  key={opt.text}
                  option={opt}
                  index={i}
                  isSelected={selectedOption === i}
                  isRevealed={isRevealed}
                  onSelect={setSelectedOption}
                />
              ))}
            </div>

            {!isRevealed ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="w-full py-3 rounded-xl text-[14px] font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed text-[#0A0E1A]"
                style={{ background: 'linear-gradient(135deg, #E8C878, #C9A455)' }}
              >
                Check answer
              </button>
            ) : (
              <div className="cds-fade-up space-y-4">
                <div
                  className={`p-4 rounded-xl border text-[13px] leading-relaxed ${
                    selected?.correct
                      ? 'border-[#4ADE9C]/30 bg-[#4ADE9C]/[0.06] text-[#DFFDF0]'
                      : 'border-[#E8677A]/30 bg-[#E8677A]/[0.06] text-[#FFE3E7]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 text-[12px] font-medium">
                    {selected?.correct ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE9C]" />
                    ) : (
                      <X className="w-3.5 h-3.5 text-[#E8677A]" />
                    )}
                    {selected ? (selected.correct ? 'Correct' : 'Not quite') : 'Time expired — no answer selected'}
                  </div>
                  {selected ? selected.rationale : scenario.options.find((o) => o.correct)?.rationale}
                </div>

                <div className="flex gap-3">
                  {!isLastScenario ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 py-3 rounded-xl text-[14px] font-medium text-[#0A0E1A] flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg, #E8C878, #C9A455)' }}
                    >
                      Next case <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleRestart}
                      className="flex-1 py-3 rounded-xl text-[14px] font-medium text-[#0A0E1A] flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg, #E8C878, #C9A455)' }}
                    >
                      <RotateCcw className="w-4 h-4" /> Restart from case 1
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => navigate('/dashboard')}
                    className="px-5 py-3 rounded-xl border border-white/15 text-[#C9CEDD] text-[14px] hover:bg-white/[0.04] transition-colors"
                  >
                    Exit
                  </button>
                </div>
              </div>
            )}
          </TiltPanel>
        </div>
      </div>
    </div>
  );
};

export default ClinicalSimulatorPage;