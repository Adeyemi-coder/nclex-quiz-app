// src/pages/public/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Stethoscope, Lock, Mail, User, ShieldCheck, ArrowRight } from 'lucide-react';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    indexNumber: '',
    targetExam: 'NMCN RN Professional Exam',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      setError('Please provide a valid candidate email.');
      return;
    }

    if (isRegistering) {
      if (!formData.name.trim()) {
        setError('Please enter your full official name.');
        return;
      }
      const result = register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        targetExam: formData.targetExam,
        indexNumber: formData.indexNumber,
      });

      if (!result.success) {
        setError(result.message);
        return;
      }
    } else {
      const result = login(formData.email, formData.password);

      if (!result.success) {
        setError(result.message);
        return;
      }
    }

    navigate('/dashboard');
  };
  const handleDemoLogin = (roleName, email, target) => {
    register({
      name: roleName,
      email: email,
      targetExam: target,
      indexNumber: 'NMCN/DEMO/2026',
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded bg-[#071A3D] text-white flex items-center justify-center font-bold mx-auto shadow-sm">
            <Stethoscope className="w-6 h-6 text-blue-400" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            {isRegistering ? 'Register Candidate Account' : 'Learner Portal Access'}
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            {isRegistering
              ? 'Enroll into NMCN & NGN NCLEX examination tracking'
              : 'Enter your candidate email to resume clinical examination records'}
          </p>
        </div>

        {/* Auth Box */}
        <div className="bg-white border border-slate-300 rounded-lg p-6 sm:p-8 shadow-xs space-y-5">
          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {isRegistering && (
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Full Candidate Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Adeyemi Kehinde"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded pl-9 pr-3 py-2 text-slate-900 focus:bg-white focus:outline-none focus:border-[#071A3D]"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Candidate Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  placeholder="candidate@hospital.org"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded pl-9 pr-3 py-2 text-slate-900 focus:bg-white focus:outline-none focus:border-[#071A3D]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Access Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded pl-9 pr-3 py-2 text-slate-900 focus:bg-white focus:outline-none focus:border-[#071A3D]"
                />
              </div>
            </div>

            {isRegistering && (
              <>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Index / Examination Number
                  </label>
                  <input
                    type="text"
                    name="indexNumber"
                    placeholder="NMCN/UITH/2026/0491"
                    value={formData.indexNumber}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 font-mono text-slate-900 focus:bg-white focus:outline-none focus:border-[#071A3D]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Target Licensure Council
                  </label>
                  <select
                    name="targetExam"
                    value={formData.targetExam}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 focus:bg-white focus:outline-none focus:border-[#071A3D]"
                  >
                    <option value="NMCN RN Professional Exam">NMCN RN Professional Qualifying Exam</option>
                    <option value="Next-Gen NCLEX-RN (NGN)">Next-Generation NCLEX-RN (NGN)</option>
                    <option value="Midwifery Professional Exam">NMCN Midwifery Professional Exam</option>
                  </select>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-2.5 bg-[#071A3D] hover:bg-[#102D63] text-white font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 mt-4"
            >
              <span>{isRegistering ? 'Complete Registration' : 'Sign In To Dashboard'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Toggle between Register and Sign In */}
          <div className="pt-4 border-t border-slate-100 text-center text-xs">
            <button
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-blue-700 font-bold hover:underline"
            >
              {isRegistering
                ? 'Already registered? Sign into existing profile'
                : 'Need a candidate account? Register new profile'}
            </button>
          </div>
        </div>

        {/* Quick Demo Switcher */}
        <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs space-y-2">
          <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
            Instant Demo Profiles
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() =>
                handleDemoLogin(
                  'Adeyemi Kehinde',
                  'adeyemi@clinicalmaster.com',
                  'NMCN RN Professional Exam'
                )
              }
              className="p-2 bg-white border border-slate-200 hover:border-slate-400 rounded text-left"
            >
              <div className="font-bold text-slate-900">Adeyemi Kehinde</div>
              <div className="text-[10px] text-slate-500 font-mono">UITH Candidate</div>
            </button>
            <button
              type="button"
              onClick={() =>
                handleDemoLogin(
                  'Chioma Okafor',
                  'chioma@clinicalmaster.com',
                  'Next-Gen NCLEX-RN (NGN)'
                )
              }
              className="p-2 bg-white border border-slate-200 hover:border-slate-400 rounded text-left"
            >
              <div className="font-bold text-slate-900">Chioma Okafor</div>
              <div className="text-[10px] text-slate-500 font-mono">NGN Candidate</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;