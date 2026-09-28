// src/pages/dashboard/ProfileSettingsPage.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  User, 
  Mail, 
  GraduationCap, 
  Sliders, 
  Save, 
  Check, 
  Trash2, 
  AlertCircle,
  Moon,
  Sun
} from 'lucide-react';

export function ProfileSettingsPage() {
  const { currentUser, updateUser, theme, toggleTheme } = useAuth();

  // Profile Form State
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [targetExam, setTargetExam] = useState('NMCN RN Professional');
  const [dailyGoal, setDailyGoal] = useState('50');

  // Simulation Toggles
  const [instantRationale, setInstantRationale] = useState(true);
  const [shuffleOptions, setShuffleOptions] = useState(true);
  const [examTimer, setExamTimer] = useState(true);

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [cacheCleared, setCacheCleared] = useState(false);

  // Sync inputs with currentUser
  useEffect(() => {
    if (currentUser?.name) setCandidateName(currentUser.name);
    if (currentUser?.email) setCandidateEmail(currentUser.email);

    try {
      const savedSettings = JSON.parse(localStorage.getItem('nclex_user_preferences') || '{}');
      if (savedSettings.targetExam) setTargetExam(savedSettings.targetExam);
      if (savedSettings.dailyGoal) setDailyGoal(savedSettings.dailyGoal);
      if (typeof savedSettings.instantRationale === 'boolean') setInstantRationale(savedSettings.instantRationale);
      if (typeof savedSettings.shuffleOptions === 'boolean') setShuffleOptions(savedSettings.shuffleOptions);
      if (typeof savedSettings.examTimer === 'boolean') setExamTimer(savedSettings.examTimer);
    } catch {
      // Fallback
    }
  }, [currentUser]);

  const handleSaveSettings = (e) => {
    e.preventDefault();

    // 1. Immediately update AuthContext state (updates sidebar & header everywhere)
    if (typeof updateUser === 'function') {
      updateUser({
        name: candidateName.trim(),
        email: candidateEmail.trim(),
      });
    }

    // 2. Persist exam preferences
    const preferences = {
      targetExam,
      dailyGoal,
      instantRationale,
      shuffleOptions,
      examTimer,
    };
    localStorage.setItem('nclex_user_preferences', JSON.stringify(preferences));

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleClearStudyData = () => {
    if (window.confirm('Reset local saved bookmarks and exam attempts?')) {
      localStorage.removeItem('nclex_saved_facts');
      localStorage.removeItem('nclex_exam_history');
      setCacheCleared(true);
      setTimeout(() => setCacheCleared(false), 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 antialiased font-sans text-slate-800 dark:text-slate-100">
      
      {/* Top Header Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#1D2A59] dark:bg-blue-600 text-white px-2 py-0.5 rounded">
              Configuration
            </span>
            <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
              Candidate Control Center
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            Workspace &amp; Account Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Customize your examination curriculum, interface appearance, and candidate identity.
          </p>
        </div>

        {savedSuccess && (
          <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 px-3.5 py-2 rounded-xl text-xs font-semibold">
            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Updated successfully</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSaveSettings} className="space-y-6">

        {/* Section 1: Appearance / Theme Toggle */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
            {theme === 'dark' ? <Moon className="w-5 h-5 text-blue-400" /> : <Sun className="w-5 h-5 text-amber-500" />}
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Interface Appearance
            </h2>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                {theme === 'dark' ? 'Dark Mode Active' : 'Light Mode Active'}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                Switch between high-contrast light mode and reduced eye-strain dark mode.
              </span>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer shadow-xs hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Switch to Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-blue-600" />
                  <span>Switch to Dark</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Section 2: Candidate Profile Identity */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 transition-colors">
          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
            <User className="w-5 h-5 text-[#1D2A59] dark:text-blue-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Candidate Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                Full Candidate Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. Adeyemi Kehinde"
                  className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#1D2A59] dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white font-medium transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                Account Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                  placeholder="candidate@nursing.edu"
                  className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#1D2A59] dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white font-medium transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Curriculum Target */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 transition-colors">
          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
            <GraduationCap className="w-5 h-5 text-[#1D2A59] dark:text-blue-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Curriculum Target &amp; Study Pacing
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                Active Licensure Curriculum
              </label>
              <select
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value)}
                className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#1D2A59] dark:focus:border-blue-500 text-slate-900 dark:text-white font-medium"
              >
                <option value="NMCN RN Professional">NMCN RN Professional Licensure (Nigeria)</option>
                <option value="NMCN Midwifery Professional">NMCN Registered Midwife (RM)</option>
                <option value="NCLEX-RN Next-Generation">NCLEX-RN (NextGen / NCSBN Framework)</option>
                <option value="NMCN Post-Basic Perioperative">NMCN Post-Basic Perioperative</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                Daily Question Benchmark
              </label>
              <select
                value={dailyGoal}
                onChange={(e) => setDailyGoal(e.target.value)}
                className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#1D2A59] dark:focus:border-blue-500 text-slate-900 dark:text-white font-medium"
              >
                <option value="25">25 Questions / Day (Maintenance)</option>
                <option value="50">50 Questions / Day (Standard Pace)</option>
                <option value="75">75 Questions / Day (Intensive Drill)</option>
                <option value="100">100 Questions / Day (Licensure Rehearsal)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 4: Simulation Engine Parameters */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
            <Sliders className="w-5 h-5 text-[#1D2A59] dark:text-blue-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Test Simulation Behavior
            </h2>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  Show Rationales Immediately
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                  Reveal benchmark explanations immediately after submitting answers in practice drills.
                </span>
              </div>
              <input
                type="checkbox"
                checked={instantRationale}
                onChange={(e) => setInstantRationale(e.target.checked)}
                className="w-4 h-4 accent-[#1D2A59] dark:accent-blue-500 cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  Randomize Answer Distractors
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                  Shuffle options on each trial to prevent location-memory bias.
                </span>
              </div>
              <input
                type="checkbox"
                checked={shuffleOptions}
                onChange={(e) => setShuffleOptions(e.target.checked)}
                className="w-4 h-4 accent-[#1D2A59] dark:accent-blue-500 cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  Countdown Exam Timer
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                  Run standard pacing countdown during timed practice tests.
                </span>
              </div>
              <input
                type="checkbox"
                checked={examTimer}
                onChange={(e) => setExamTimer(e.target.checked)}
                className="w-4 h-4 accent-[#1D2A59] dark:accent-blue-500 cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Section 5: Cache Clear */}
        <div className="bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-950/60 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                Reset Saved Bookmarks &amp; Drill Records
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                Clears locally saved clinical facts and test telemetry from your browser.
              </span>
            </div>

            <button
              type="button"
              onClick={handleClearStudyData}
              className="px-4 py-2 rounded-xl border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span>Reset Cache</span>
            </button>
          </div>

          {cacheCleared && (
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 px-3 py-2 rounded-lg text-xs font-medium">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Local simulation history cleared.</span>
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-end pt-2">
          <button
            type="submit"
            className="px-7 py-3 rounded-xl bg-[#1D2A59] dark:bg-blue-600 hover:bg-[#102047] dark:hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs cursor-pointer active:scale-98"
          >
            <Save className="w-4 h-4" />
            <span>Save Preferences</span>
          </button>
        </div>

      </form>
    </div>
  );
}

export default ProfileSettingsPage;