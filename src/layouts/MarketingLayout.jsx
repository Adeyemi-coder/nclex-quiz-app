// src/layouts/MarketingLayout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Stethoscope, ArrowRight, Menu, X, User } from 'lucide-react';

export const MarketingLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, isAuthenticated, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll to section whether on homepage or subpage
  const handleNavClick = (e, targetHash, fallbackRoute) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const el = document.querySelector(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(fallbackRoute || `/${targetHash}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-slate-900 antialiased font-sans selection:bg-[#071A3D] selection:text-white">
      {/* Primary Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3'
            : 'bg-white border-b border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#071A3D] text-white flex items-center justify-center font-bold">
              <Stethoscope className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <span className="font-black text-base tracking-tight text-slate-900 block leading-none">
                NCLEX Clinical Master
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono font-medium mt-1">
                Clinical Judgment Engine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              type="button"
              onClick={(e) => handleNavClick(e, '#pathway', '/#pathway')}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-[#071A3D] transition-colors cursor-pointer"
            >
              Platform
            </button>

            <Link
              to="/exams"
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-[#071A3D] transition-colors"
            >
              Question Banks
            </Link>

            <button
              type="button"
              onClick={(e) => handleNavClick(e, '#simulator', '/#simulator')}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-[#071A3D] transition-colors cursor-pointer"
            >
              Clinical Simulator
            </button>

            <Link
              to="/pricing"
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-[#071A3D] transition-colors"
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-[#071A3D] transition-colors"
            >
              Institutions
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-[#071A3D] transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-[#071A3D] text-white flex items-center justify-center font-bold text-[10px]">
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="hidden sm:inline font-bold truncate max-w-[120px]">
                    {currentUser.name}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="text-[11px] text-slate-400 hover:text-rose-600 underline font-mono"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 hidden sm:block"
              >
                Sign In
              </Link>
            )}

            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="text-xs font-bold uppercase tracking-wider bg-[#071A3D] hover:bg-[#102D63] text-white px-4 py-2.5 rounded transition-all flex items-center gap-2 active:scale-98 shadow-xs"
            >
              <span>Start Practising</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
            <button
              type="button"
              onClick={(e) => handleNavClick(e, '#pathway', '/#pathway')}
              className="block w-full text-left text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#071A3D]"
            >
              Platform
            </button>

            <Link
              to="/exams"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#071A3D]"
            >
              Question Banks
            </Link>

            <button
              type="button"
              onClick={(e) => handleNavClick(e, '#simulator', '/#simulator')}
              className="block w-full text-left text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#071A3D]"
            >
              Clinical Simulator
            </button>

            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#071A3D]"
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#071A3D]"
            >
              Institutions
            </Link>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold text-slate-900"
                  >
                    Open Candidate Dashboard ({currentUser.name})
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs text-rose-600 underline font-bold"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-bold text-blue-700"
                >
                  Candidate Sign In / Register
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Industrial Editorial Footer */}
      <footer className="bg-[#071A3D] text-slate-400 py-16 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <div className="w-6 h-6 rounded bg-[#102D63] flex items-center justify-center">
                <Stethoscope className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <span>NCLEX Clinical Master</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Examination simulation software built for high-stakes nursing candidates. Dual-aligned to NMCN regulatory requirements and Next-Generation NCLEX clinical judgment frameworks.
            </p>
            <div className="font-mono text-[11px] text-slate-500">Engine Core v4.9.4</div>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-widest text-[11px] mb-3">Question Banks</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/exams" className="hover:text-white">Anatomy & Physiology</Link></li>
              <li><Link to="/exams" className="hover:text-white">Primary Health Care (PHC)</Link></li>
              <li><Link to="/exams" className="hover:text-white">Nursing Ethics & Jurisprudence</Link></li>
              <li><Link to="/exams" className="hover:text-white">Emergency & Disaster Triage</Link></li>
              <li><Link to="/exams" className="hover:text-white">Fundamentals of Nursing</Link></li>
              <li><Link to="/exams" className="hover:text-white">Politics & Policy in Nursing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-widest text-[11px] mb-3">Architecture</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#simulator" className="hover:text-white">Clinical Reasoning Engine</a></li>
              <li><a href="#pathway" className="hover:text-white">5-Step Decision Pathway</a></li>
              <li><Link to="/dashboard" className="hover:text-white">Candidate Telemetry</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Licensing & Tiers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Institutional Inquiries</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-widest text-[11px] mb-3">Regulatory Scope</h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              Curriculum structures reference Cap N143 Laws of the Federation of Nigeria (NMCN Act), the National Health Act (2014), and NCSBN NGN measurement protocols.
            </p>
            <div className="mt-4 text-[11px] text-slate-500 font-mono">© 2026 NCLEX Clinical Master.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingLayout;