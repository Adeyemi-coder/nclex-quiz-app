import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Compass,
  Layers,
  CreditCard,
  BarChart2,
  Volume2,
  VolumeX,
} from 'lucide-react';

const NAV_ITEMS = [
  { to: '/', label: 'Overview', icon: Compass, end: true },
  { to: '/modules', label: 'Modules', icon: Layers },
  { to: '/flashcards', label: 'Flashcards', icon: CreditCard },
  { to: '/dashboard', label: 'Diagnostics', icon: BarChart2 },
];

export default function Header({
  isAuthenticated = false,
  isAudioActive,
  onToggleAudio,
  onLoginClick,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <header
        className={`sticky top-0 z-40 w-full bg-[#071A3D] text-white transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-black/20 border-b border-white/10' : 'border-b border-white/0'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 min-w-0 group">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="truncate text-sm font-bold tracking-tight text-white group-hover:text-slate-100">
              NCLEX <span className="font-normal text-slate-300">Clinical Master</span>
            </span>
          </Link>

          {/* Authenticated: full desktop nav. Logged out: nothing here — no links into gated pages. */}
          {isAuthenticated && (
            <nav className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `relative flex items-center gap-2 px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      <span>{label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="header-nav-indicator"
                          className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-emerald-400"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          )}

          {/* Right side: audio toggle once logged in, otherwise a single Log In action */}
          {isAuthenticated ? (
            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={onToggleAudio}
              aria-label={isAudioActive ? 'Mute study audio' : 'Enable study audio'}
              aria-pressed={isAudioActive}
              className={`flex shrink-0 items-center gap-1.5 rounded border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                isAudioActive
                  ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                  : 'border-white/15 text-slate-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {isAudioActive ? (
                <Volume2 className="h-3.5 w-3.5" strokeWidth={1.8} />
              ) : (
                <VolumeX className="h-3.5 w-3.5" strokeWidth={1.8} />
              )}
              <span className="hidden sm:inline">{isAudioActive ? 'Audio on' : 'Audio off'}</span>
            </motion.button>
          ) : (
            <motion.button
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={onLoginClick}
              className="shrink-0 rounded bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#071A3D] transition-colors hover:bg-slate-100"
            >
              Log In
            </motion.button>
          )}
        </div>
      </header>

      {/* MOBILE BOTTOM NAV — only exists once there's somewhere gated to send you */}
      {isAuthenticated && (
        <nav
          aria-label="Primary"
          className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-stretch justify-around border-t border-white/10 bg-[#071A3D] px-2 pb-[env(safe-area-inset-bottom)] text-white shadow-[0_-4px_16px_rgba(0,0,0,0.25)] md:hidden"
        >
          {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="relative flex flex-1 flex-col items-center justify-center gap-1"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="mobile-nav-pill"
                      className="absolute inset-x-3 top-1.5 bottom-1.5 rounded-lg bg-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <motion.span whileTap={{ scale: 0.88 }} className="relative z-10 flex flex-col items-center gap-0.5">
                    <Icon
                      className={`h-5 w-5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}
                      strokeWidth={isActive ? 2.2 : 1.8}
                    />
                    <span className={`text-[10px] ${isActive ? 'font-bold text-white' : 'font-medium text-slate-400'}`}>
                      {label}
                    </span>
                  </motion.span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
}