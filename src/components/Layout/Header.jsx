import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Layers, 
  CreditCard, 
  BarChart2, 
  Volume2, 
  VolumeX,
  Compass
} from 'lucide-react';

export default function Header({ isAudioActive, onToggleAudio }) {
  return (
    <>
      {/* 1. TOP BAR (Brand & Utility) */}
      <header className="sticky top-0 z-40 w-full border-b border-[#1D2A59]/15 bg-[#1D2A59] text-[#F4EEDC]">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          
          {/* Brand Lockup */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90 active:scale-95"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#283A78] text-[#F4EEDC]">
              <Stethoscope className="h-4.5 w-4.5" strokeWidth={1.8} />
            </div>
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-sm font-bold tracking-tight text-[#FBF8EF]">
                NCLEX <span className="font-normal text-[#DDD9CC]/90">Clinical Master</span>
              </span>
              <span className="rounded bg-[#283A78]/70 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-[#DDD9CC] uppercase">
                RN • NMCN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#FBF8EF]'
                    : 'text-[#DDD9CC]/70 hover:text-[#FBF8EF]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Compass className="h-3.5 w-3.5" strokeWidth={1.8} />
                  <span>Overview</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-[#B89A5A]" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/modules"
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#FBF8EF]'
                    : 'text-[#DDD9CC]/70 hover:text-[#FBF8EF]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Layers className="h-3.5 w-3.5" strokeWidth={1.8} />
                  <span>Curriculum Modules</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-[#B89A5A]" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/flashcards"
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#FBF8EF]'
                    : 'text-[#DDD9CC]/70 hover:text-[#FBF8EF]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <CreditCard className="h-3.5 w-3.5" strokeWidth={1.8} />
                  <span>Flashcards</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-[#B89A5A]" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#FBF8EF]'
                    : 'text-[#DDD9CC]/70 hover:text-[#FBF8EF]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <BarChart2 className="h-3.5 w-3.5" strokeWidth={1.8} />
                  <span>Diagnostics</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-[#B89A5A]" />
                  )}
                </>
              )}
            </NavLink>
          </nav>

          {/* Audio Study Utility */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleAudio}
              aria-label={isAudioActive ? 'Mute study audio' : 'Enable study audio'}
              className={`flex items-center gap-1.5 rounded border px-2.5 py-1 text-xs font-medium transition-colors sm:gap-2 sm:py-1.5 sm:px-3 ${
                isAudioActive
                  ? 'border-[#B89A5A]/50 bg-[#283A78] text-[#FBF8EF]'
                  : 'border-[#283A78] bg-transparent text-[#DDD9CC]/70 hover:border-[#DDD9CC]/40 hover:text-[#FBF8EF]'
              }`}
            >
              {isAudioActive ? (
                <>
                  <Volume2 className="h-3.5 w-3.5 text-[#B89A5A]" strokeWidth={1.8} />
                  <span className="text-[11px] sm:text-xs">Audio On</span>
                </>
              ) : (
                <>
                  <VolumeX className="h-3.5 w-3.5 text-[#DDD9CC]/50" strokeWidth={1.8} />
                  <span className="text-[11px] sm:text-xs">Audio Off</span>
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* 2. TIKTOK-STYLE BOTTOM NAVIGATION BAR (Mobile Only: md:hidden) */}
      <nav 
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-[#1D2A59]/20 bg-[#1D2A59] px-2 pb-[env(safe-area-inset-bottom)] text-[#F4EEDC] shadow-lg md:hidden"
      >
        {/* Home / Overview */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center justify-center py-1 transition-colors ${
              isActive
                ? 'text-[#FBF8EF]'
                : 'text-[#DDD9CC]/60 hover:text-[#DDD9CC]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Compass className={`h-5 w-5 ${isActive ? 'stroke-[#B89A5A] stroke-[2.2]' : ''}`} />
              <span className={`mt-1 text-[10px] tracking-tight ${isActive ? 'font-bold text-[#FBF8EF]' : 'font-medium'}`}>
                Home
              </span>
            </>
          )}
        </NavLink>

        {/* Modules */}
        <NavLink
          to="/modules"
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center justify-center py-1 transition-colors ${
              isActive
                ? 'text-[#FBF8EF]'
                : 'text-[#DDD9CC]/60 hover:text-[#DDD9CC]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Layers className={`h-5 w-5 ${isActive ? 'stroke-[#B89A5A] stroke-[2.2]' : ''}`} />
              <span className={`mt-1 text-[10px] tracking-tight ${isActive ? 'font-bold text-[#FBF8EF]' : 'font-medium'}`}>
                Modules
              </span>
            </>
          )}
        </NavLink>

        {/* Flashcards */}
        <NavLink
          to="/flashcards"
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center justify-center py-1 transition-colors ${
              isActive
                ? 'text-[#FBF8EF]'
                : 'text-[#DDD9CC]/60 hover:text-[#DDD9CC]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <CreditCard className={`h-5 w-5 ${isActive ? 'stroke-[#B89A5A] stroke-[2.2]' : ''}`} />
              <span className={`mt-1 text-[10px] tracking-tight ${isActive ? 'font-bold text-[#FBF8EF]' : 'font-medium'}`}>
                Cards
              </span>
            </>
          )}
        </NavLink>

        {/* Diagnostics / Analytics */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center justify-center py-1 transition-colors ${
              isActive
                ? 'text-[#FBF8EF]'
                : 'text-[#DDD9CC]/60 hover:text-[#DDD9CC]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <BarChart2 className={`h-5 w-5 ${isActive ? 'stroke-[#B89A5A] stroke-[2.2]' : ''}`} />
              <span className={`mt-1 text-[10px] tracking-tight ${isActive ? 'font-bold text-[#FBF8EF]' : 'font-medium'}`}>
                Analytics
              </span>
            </>
          )}
        </NavLink>
      </nav>
    </>
  );
}