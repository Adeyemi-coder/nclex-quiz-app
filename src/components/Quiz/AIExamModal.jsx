import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Loader2, X, AlertTriangle, Key, CheckCircle2 } from 'lucide-react';
import { generateClientSideQuestions } from '../../services/aiExamFrontend.js';

export default function AIExamModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('Pharmacology');
  const [count, setCount] = useState(5);
  const [format, setFormat] = useState('mixed');
  const [error, setError] = useState(null);

  // Read saved key from localStorage or Vite environment variable
  const [apiKey, setApiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('nclex_gemini_key') || import.meta.env.VITE_GEMINI_API_KEY || '';
    setApiKey(saved);
    // If no key is saved yet, open the input box by default
    if (!saved) {
      setShowKeyInput(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleGenerate() {
    setLoading(true);
    setError(null);

    const activeKey = apiKey.trim() || localStorage.getItem('nclex_gemini_key') || import.meta.env.VITE_GEMINI_API_KEY;

    if (!activeKey) {
      setShowKeyInput(true);
      setError('Please enter your Gemini API Key to proceed.');
      setLoading(false);
      return;
    }

    // Persist permanently in localStorage
    localStorage.setItem('nclex_gemini_key', activeKey);

    try {
      const generated = await generateClientSideQuestions({
        category,
        count,
        format,
        customKey: activeKey,
      });

      if (!generated || generated.length === 0) {
        throw new Error('No items generated. Please try again.');
      }

      onClose();

      navigate('/quiz/ai-generated', {
        state: {
          customQuestions: generated,
          categoryTitle: `AI Dynamic Drill • ${category}`,
        },
      });
    } catch (err) {
      setError(err.message || 'Generation failed. Check your API key and connection.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1D2A59] text-white">
              <Sparkles className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">AI Dynamic Item Generator</h3>
              <p className="text-xs text-slate-500">Synthesize on-demand NCJMM questions</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-700">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="mt-5 space-y-4">
          {/* Key Status / Input Accordion */}
          {apiKey && !showKeyInput ? (
            <div className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/60 px-3.5 py-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Gemini API Key Connected</span>
              </div>
              <button
                type="button"
                onClick={() => setShowKeyInput(true)}
                className="text-[11px] font-bold text-emerald-700 underline hover:text-emerald-900"
              >
                Change Key
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  <Key className="h-3 w-3 text-cyan-700" />
                  <span>Gemini API Key</span>
                </label>
                {apiKey && (
                  <button
                    type="button"
                    onClick={() => setShowKeyInput(false)}
                    className="text-[11px] text-slate-500 hover:underline"
                  >
                    Cancel
                  </button>
                )}
              </div>
              <input
                type="password"
                placeholder="AIzaSy..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-mono text-slate-800 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Clinical Domain Focus
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-slate-900"
            >
              <option value="Pharmacology">Pharmacology & Parenteral Therapies</option>
              <option value="Cardiovascular">Cardiovascular & Hemodynamics</option>
              <option value="Respiratory">Respiratory Care & Oxygenation</option>
              <option value="Emergency Nursing">Emergency Triage & Resuscitation</option>
              <option value="Maternal & Newborn">Maternal, Obstetric & Neonatal Health</option>
              <option value="Infection Control">Infection Prevention & Control</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Item Count
              </label>
              <select
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none"
              >
                <option value={3}>3 Questions</option>
                <option value={5}>5 Questions</option>
                <option value={10}>10 Questions</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Item Type
              </label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none"
              >
                <option value="mixed">Mixed (MCQ + SATA)</option>
                <option value="sata">SATA Only</option>
                <option value="mcq">Single MCQ Only</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-4">
          <button
            type="button"
            disabled={loading}
            onClick={handleGenerate}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-slate-800 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
                <span>Synthesizing Clinical Vignettes...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>Generate Questions</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}