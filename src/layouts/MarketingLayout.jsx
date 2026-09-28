// src/layouts/MarketingLayout.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  ArrowRight, 
  LogOut, 
  ChevronDown, 
  Home, 
  LayoutDashboard, 
  GraduationCap, 
  Tag, 
  User,
  X
} from 'lucide-react';
import BrandLogo from '../components/common/BrandLogo';

const MOCK_USERS_KEY = 'ncqa_mock_users';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getMockUsers() {
  try {
    return JSON.parse(localStorage.getItem(MOCK_USERS_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveMockUsers(users) {
  try {
    localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
  } catch {}
}

function useNavItems({ isAuthenticated }) {
  return [
    { key: 'platform', label: 'Platform', type: 'scroll', hash: '#pathway' },
    { key: 'questionBanks', label: 'Question Banks', type: 'authGate', to: '/exams' },
    { key: 'simulator', label: 'Clinical Simulator', type: 'scroll', hash: '#simulator' },
    { key: 'pricing', label: 'Pricing', type: 'link', to: '/pricing' },
  ];
}

export const MarketingLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth() || {};
  const { currentUser, isAuthenticated, logout, login } = auth;
  const shouldReduceMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [hoveredKey, setHoveredKey] = useState(null);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef(null);

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const navItems = useNavItems({ isAuthenticated });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!accountMenuOpen) return undefined;
    const handleClick = (e) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(e.target)) {
        setAccountMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [accountMenuOpen]);

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setAuthError('');
    setAuthModalOpen(true);
  };

  const switchAuthMode = (mode) => {
    setAuthMode(mode);
    setAuthError('');
  };

  const finishLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userData.token);
    if (typeof login === 'function') {
      try {
        login(userData);
      } catch (err) {
        console.warn(err);
      }
    }
    setAuthModalOpen(false);
    setAuthPassword('');
    navigate('/dashboard');
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError('');
    const email = authEmail.trim().toLowerCase();

    if (!EMAIL_REGEX.test(email)) {
      setAuthError('Enter a valid email address.');
      return;
    }
    if (authPassword.length < 8) {
      setAuthError('Password must be at least 8 characters.');
      return;
    }

    const users = getMockUsers();
    if (authMode === 'register') {
      if (users[email]) {
        setAuthError('An account with this email already exists.');
        return;
      }
      users[email] = { password: authPassword, name: email.split('@')[0] };
      saveMockUsers(users);
      finishLogin({ name: users[email].name, email, token: `token-${Date.now()}` });
      return;
    }

    const existing = users[email];
    if (!existing) {
      setAuthError('No account found. Register first.');
      return;
    }
    if (existing.password !== authPassword) {
      setAuthError('Incorrect password.');
      return;
    }
    finishLogin({ name: existing.name || email.split('@')[0], email, token: `token-${Date.now()}` });
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    if (typeof logout === 'function') logout();
    navigate('/');
    window.location.reload();
  };

  const handleNavClick = (e, targetHash, fallbackRoute) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.querySelector(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(fallbackRoute || `/${targetHash}`);
  };

  const handleNavItemClick = (e, item) => {
    if (item.type === 'scroll') {
      handleNavClick(e, item.hash, `/${item.hash}`);
      return;
    }
    if (item.type === 'authGate' && !isAuthenticated) {
      e.preventDefault();
      openAuthModal('login');
      return;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-slate-900 antialiased font-sans selection:bg-[#071A3D] selection:text-white">
      {/* Top Header */}
      <motion.header
        animate={{
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
          boxShadow: scrolled ? '0 1px 2px rgba(15,23,42,0.06)' : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md border-slate-200' : 'bg-white border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Shared Unified Logo with Image */}
          <BrandLogo to="/" subtitle="Clinical Judgment Engine" />

          {/* Desktop Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-wider text-slate-600"
            onMouseLeave={() => setHoveredKey(null)}
          >
            {navItems.map((item) => {
              const isCurrentRoute = item.type !== 'scroll' && item.to && location.pathname.startsWith(item.to);
              const isHighlighted = hoveredKey === item.key || (hoveredKey === null && isCurrentRoute);
              const commonClasses = 'relative px-3.5 py-2 hover:text-[#071A3D] transition-colors cursor-pointer';

              const content = (
                <>
                  <span className={isCurrentRoute ? 'text-[#071A3D]' : ''}>{item.label}</span>
                  {isHighlighted && (
                    <motion.span
                      layoutId="nav-underline-desktop"
                      className="absolute left-2 right-2 -bottom-[2px] h-[2px] rounded-full bg-[#071A3D]"
                      transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </>
              );

              if (item.type === 'link' || (item.type === 'authGate' && isAuthenticated)) {
                return (
                  <Link
                    key={item.key}
                    to={item.to}
                    onMouseEnter={() => setHoveredKey(item.key)}
                    onClick={(e) => handleNavItemClick(e, item)}
                    className={commonClasses}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <button
                  key={item.key}
                  type="button"
                  onMouseEnter={() => setHoveredKey(item.key)}
                  onClick={(e) => handleNavItemClick(e, item)}
                  className={commonClasses}
                >
                  {content}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {isAuthenticated && currentUser ? (
              <div className="flex items-center gap-3 relative" ref={accountMenuRef}>
                <button
                  type="button"
                  onClick={() => setAccountMenuOpen((o) => !o)}
                  className="flex items-center gap-2 pl-1.5 pr-2.5 py-1.5 rounded-full border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <span className="w-7 h-7 rounded-full bg-[#071A3D] text-white flex items-center justify-center font-bold text-[10px]">
                    {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'C'}
                  </span>
                  <span className="text-xs font-bold text-slate-800 truncate max-w-[120px] hidden sm:inline">
                    {currentUser?.name || 'Candidate'}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${accountMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {accountMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-44 bg-white border border-slate-200 rounded-lg shadow-lg py-1.5 z-50"
                    >
                      <Link
                        to="/dashboard"
                        onClick={() => setAccountMenuOpen(false)}
                        className="block px-3.5 py-2 text-[13px] font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Dashboard
                      </Link>
                      <div className="my-1 border-t border-slate-100" />
                      <button
                        type="button"
                        onClick={() => {
                          setAccountMenuOpen(false);
                          handleLogout();
                        }}
                        className="w-full text-left px-3.5 py-2 text-[13px] font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2"
                      >
                        <LogOut className="w-3.5 h-3.5" /> Log out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="text-xs font-bold uppercase tracking-wider bg-[#071A3D] hover:bg-[#102D63] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => openAuthModal('login')}
                  className="text-xs font-semibold font-mono text-slate-600 hover:text-slate-900 px-2 sm:px-3 py-2 cursor-pointer transition-colors"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => openAuthModal('register')}
                  className="text-xs font-bold font-mono uppercase tracking-wider bg-[#071A3D] hover:bg-[#102D63] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Main Outlet */}
      <main className="flex-1 pb-24 lg:pb-0">
        <Outlet />
      </main>

      {/* Auth Modal */}
      <AnimatePresence>
        {authModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setAuthModalOpen(false)}
              className="absolute inset-0 bg-[#071A3D]/70 backdrop-blur-xs"
            />
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
              className="relative w-full max-w-md bg-white border border-slate-300 rounded-xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
            >
              <button
                type="button"
                onClick={() => setAuthModalOpen(false)}
                className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">
                  {authMode === 'login' ? 'Candidate Portal Access' : 'New Candidate Registration'}
                </span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  {authMode === 'login' ? 'Sign In to Your Workspace' : 'Create Candidate Account'}
                </h3>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4" noValidate>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="candidate@nursing.edu"
                    value={authEmail}
                    onChange={(e) => {
                      setAuthEmail(e.target.value);
                      if (authError) setAuthError('');
                    }}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-blue-600 font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Password</label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    placeholder="••••••••"
                    value={authPassword}
                    onChange={(e) => {
                      setAuthPassword(e.target.value);
                      if (authError) setAuthError('');
                    }}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-blue-600 font-sans"
                  />
                </div>

                {authError && <p className="text-xs text-rose-600 font-semibold">{authError}</p>}

                <button
                  type="submit"
                  className="w-full py-3 rounded bg-[#071A3D] hover:bg-[#102D63] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{authMode === 'login' ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#071A3D] text-slate-400 py-16 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-6">
          <BrandLogo to="/" subtitle="Clinical Judgment Engine" />
          <div className="mt-4 text-[11px] text-slate-500 font-mono">© 2026 NCLEX Clinical Master.</div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* MOBILE-ONLY BOTTOM NAVIGATION BAR (Strictly hidden on lg) */}
      {/* ========================================================= */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-0 left-0 right-0 z-[99999] bg-white border-t border-slate-200/90 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom)] flex lg:hidden items-center justify-around h-[62px] w-full"
      >
        <Link
          to="/"
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-decoration-none select-none ${
            location.pathname === '/' ? 'text-[#071A3D]' : 'text-slate-400'
          }`}
        >
          <div
            className={`p-1 rounded-lg ${
              location.pathname === '/' ? 'bg-[#071A3D]/10 text-[#071A3D]' : 'text-slate-400'
            }`}
          >
            <Home className="w-5 h-5" strokeWidth={location.pathname === '/' ? 2.5 : 2} />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Home</span>
        </Link>

        <Link
          to="/dashboard"
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-decoration-none select-none ${
            location.pathname.startsWith('/dashboard') ? 'text-[#071A3D]' : 'text-slate-400'
          }`}
        >
          <div
            className={`p-1 rounded-lg ${
              location.pathname.startsWith('/dashboard') ? 'bg-[#071A3D]/10 text-[#071A3D]' : 'text-slate-400'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" strokeWidth={location.pathname.startsWith('/dashboard') ? 2.5 : 2} />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Dashboard</span>
        </Link>

        <Link
          to="/exams"
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-decoration-none select-none ${
            location.pathname.startsWith('/exams') ? 'text-[#071A3D]' : 'text-slate-400'
          }`}
        >
          <div
            className={`p-1 rounded-lg ${
              location.pathname.startsWith('/exams') ? 'bg-[#071A3D]/10 text-[#071A3D]' : 'text-slate-400'
            }`}
          >
            <GraduationCap className="w-5 h-5" strokeWidth={location.pathname.startsWith('/exams') ? 2.5 : 2} />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Exams</span>
        </Link>

        <Link
          to="/pricing"
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-decoration-none select-none ${
            location.pathname.startsWith('/pricing') ? 'text-[#071A3D]' : 'text-slate-400'
          }`}
        >
          <div
            className={`p-1 rounded-lg ${
              location.pathname.startsWith('/pricing') ? 'bg-[#071A3D]/10 text-[#071A3D]' : 'text-slate-400'
            }`}
          >
            <Tag className="w-5 h-5" strokeWidth={location.pathname.startsWith('/pricing') ? 2.5 : 2} />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Pricing</span>
        </Link>

        <button
          type="button"
          onClick={() => {
            if (isAuthenticated) {
              navigate('/dashboard');
            } else {
              openAuthModal('login');
            }
          }}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 text-slate-400 border-none bg-transparent cursor-pointer"
        >
          <div className="p-1 rounded-lg text-slate-400">
            <User className="w-5 h-5" strokeWidth={2} />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">{isAuthenticated ? 'Account' : 'Sign In'}</span>
        </button>
      </nav>
    </div>
  );
};

export default MarketingLayout;