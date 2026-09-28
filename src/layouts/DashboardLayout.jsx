// src/layouts/DashboardLayout.jsx
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  GraduationCap,
  LineChart,
  Bookmark,
  History,
  Settings,
  HelpCircle,
  Search,
  Bell,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Home,
  BookOpen,
  FlaskConical
} from 'lucide-react';

const MAIN_NAV = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, end: true },
  { name: 'Exams & Modules', path: '/dashboard/exams', icon: GraduationCap },
  { name: 'Progress', path: '/dashboard/progress', icon: LineChart },
  { name: 'Bookmarks', path: '/dashboard/bookmarks', icon: Bookmark },
  { name: 'Study History', path: '/dashboard/history', icon: History },
];

const RESOURCE_NAV = [
  { name: 'Study Guide', path: '/dashboard/study-guide' },
  { name: 'Clinical Reference', path: '/dashboard/reference' },
];

const UTILITY_NAV = [
  { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  { name: 'Help & Support', path: '/contact', icon: HelpCircle },
];

// 5-Item Mobile Bottom Bar
const MOBILE_BOTTOM_NAV = [
  { name: 'Home', path: '/', icon: Home, end: true },
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, end: true },
  { name: 'Exams', path: '/dashboard/exams', icon: GraduationCap },
  { name: 'Facts', path: '/dashboard/study-guide', icon: BookOpen },
  { name: 'Reference', path: '/dashboard/reference', icon: FlaskConical },
];

const SAMPLE_NOTIFICATIONS = [
  { id: 1, title: 'New mock exam available', detail: 'General Nursing Mock #5 just unlocked.', time: '2h ago' },
  { id: 2, title: 'Streak reminder', detail: "You haven't practised today — keep your 12-day streak alive.", time: '5h ago' },
  { id: 3, title: 'Weak area flagged', detail: 'Pharmacology dropped below 65% accuracy.', time: '1d ago' },
];

function isPathActive(pathname, path, end) {
  if (end) return pathname === path;
  return pathname === path || pathname.startsWith(`${path}/`);
}

function NavLinkItem({ item, pathname, onClick }) {
  const active = isPathActive(pathname, item.path, item.end);
  return (
    <Link
      to={item.path}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`relative flex items-center gap-3 px-3 py-2.5 rounded text-xs font-semibold min-h-[44px] transition-colors ${
        active
          ? 'bg-[#1D2A59] dark:bg-ink-800 text-white dark:text-cream shadow-sm'
          : 'text-slate-600 dark:text-ink-300 hover:text-slate-900 dark:hover:text-cream hover:bg-slate-50 dark:hover:bg-ink-800'
      }`}
    >
      {active && (
        <span className="hidden dark:block absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-brass" />
      )}
      <item.icon className={`w-4 h-4 shrink-0 ${active ? 'text-emerald-400 dark:text-brass' : 'text-slate-400'}`} />
      <span>{item.name}</span>
    </Link>
  );
}

function SidebarContent({ pathname, onNavigate, onCloseMobile, userName, userInitials, onLogoutClick }) {
  return (
    <>
      {/* Brand Header with Nordic Clinical Geometric Logo Mark */}
      <div className="h-16 px-4 border-b border-slate-200 dark:border-ink-700 flex items-center justify-between shrink-0">
        <Link
          to="/"
          onClick={onCloseMobile}
          title="Return to Home"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer group select-none"
        >
          {/* Geometric Symbol */}
          <div className="w-9 h-9 bg-[#1D2A59] dark:ring-1 dark:ring-ink-700 rounded-lg flex items-center justify-center p-2 shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-200">
            <svg
              viewBox="0 0 120 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path fill="#F4F1E8" d="M 0,110 L 0,38 L 38,0 L 38,72 L 74,72 L 74,110 Z" />
              <path fill="#F4F1E8" d="M 46,0 L 84,0 L 120,36 L 120,74 L 82,74 L 82,38 L 46,38 Z" />
              <rect fill="#F4F1E8" x="46" y="46" width="28" height="28" rx="2" />
            </svg>
          </div>

          {/* Structured Clinical Wordmark */}
          <div className="flex flex-col">
            <span className="font-black text-sm tracking-[0.12em] text-[#1D2A59] dark:text-cream leading-none">
              NCLEX
            </span>
            <span className="text-[9px] font-bold text-[#1D2A59]/75 dark:text-ink-300 tracking-[0.24em] uppercase mt-1 leading-none">
              CLINICAL MASTER
            </span>
          </div>
        </Link>

        {/* Mobile Close Button */}
        <button
          type="button"
          onClick={onCloseMobile}
          className="lg:hidden p-1.5 rounded text-slate-400 hover:text-slate-700 dark:hover:text-cream cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Nav Sections */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        <nav className="space-y-1">
          {MAIN_NAV.map((item) => (
            <NavLinkItem key={item.name} item={item} pathname={pathname} onClick={onNavigate} />
          ))}
        </nav>

        <div className="border-t border-slate-200 dark:border-ink-700 pt-4">
          <div className="px-3 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Resources</div>
          <nav className="space-y-1">
            {RESOURCE_NAV.map((item) => {
              const active = isPathActive(pathname, item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={onNavigate}
                  className={`flex items-center justify-between px-3 py-2 rounded text-xs font-medium min-h-[40px] transition-colors ${
                    active
                      ? 'text-[#1D2A59] dark:text-cream bg-slate-50 dark:bg-ink-800 font-semibold'
                      : 'text-slate-600 dark:text-ink-300 hover:text-slate-900 dark:hover:text-cream hover:bg-slate-50 dark:hover:bg-ink-800'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-slate-200 dark:border-ink-700 pt-4">
          <nav className="space-y-1">
            {UTILITY_NAV.map((item) => (
              <NavLinkItem key={item.name} item={item} pathname={pathname} onClick={onNavigate} />
            ))}
          </nav>
        </div>
      </div>

      {/* User profile block */}
      <div className="p-3 border-t border-slate-200 dark:border-ink-700 bg-slate-50/50 dark:bg-ink-900 shrink-0">
        <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-ink-800 border border-slate-200 dark:border-ink-700 shadow-sm">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded bg-[#1D2A59] dark:bg-ink-800 dark:ring-1 dark:ring-ink-700 text-white dark:text-brass flex items-center justify-center text-xs font-bold font-mono shrink-0">
              {userInitials}
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-bold text-slate-900 dark:text-cream block truncate">{userName}</span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                Active candidate
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onLogoutClick}
            title="Log out"
            aria-label="Log out"
            className="text-slate-400 hover:text-rose-600 p-1.5 shrink-0 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}

export const DashboardLayout = ({ examName = 'NMCN RN Professional' }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth() || {};
  const { currentUser, logout } = auth;

  const activeName = useMemo(() => {
    if (currentUser?.name) return currentUser.name;
    try {
      const stored = JSON.parse(localStorage.getItem('user'));
      if (stored?.name) return stored.name;
    } catch {
      // fallback
    }
    return 'Candidate';
  }, [currentUser]);

  const activeInitials = useMemo(() => {
    const parts = activeName.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return 'C';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }, [activeName]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setNotificationsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLogout = () => {
    if (typeof logout === 'function') {
      logout();
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <div className="min-h-screen bg-[#F7F9FC] dark:bg-ink-950 text-slate-800 dark:text-cream flex font-sans antialiased transition-colors">
        {/* Desktop Sidebar (hidden on mobile, flex on desktop) */}
        <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-ink-900 border-r border-slate-200 dark:border-ink-700 fixed inset-y-0 z-30 select-none shadow-sm">
          <SidebarContent
            pathname={location.pathname}
            onNavigate={() => setMobileMenuOpen(false)}
            onCloseMobile={() => setMobileMenuOpen(false)}
            userName={activeName}
            userInitials={activeInitials}
            onLogoutClick={handleLogout}
          />
        </aside>

        {/* Mobile slide-over drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
              />
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-ink-900 z-50 shadow-xl"
              >
                <SidebarContent
                  pathname={location.pathname}
                  onNavigate={() => setMobileMenuOpen(false)}
                  onCloseMobile={() => setMobileMenuOpen(false)}
                  userName={activeName}
                  userInitials={activeInitials}
                  onLogoutClick={handleLogout}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
          <header className="h-16 bg-white dark:bg-ink-900 border-b border-slate-200 dark:border-ink-700 sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 shadow-sm gap-2">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded text-slate-600 dark:text-ink-300 hover:bg-slate-100 dark:hover:bg-ink-800 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="relative w-full max-w-xs sm:max-w-sm">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search modules... (⌘K)"
                  className="w-full text-xs bg-slate-50 dark:bg-ink-800 border border-slate-200 dark:border-ink-700 rounded pl-8 pr-3 py-2 sm:py-1.5 focus:outline-none focus:border-[#1D2A59] dark:focus:border-brass focus:bg-white dark:focus:bg-ink-900 text-slate-900 dark:text-cream dark:placeholder:text-ink-500 transition-all font-medium"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setNotificationsOpen((v) => !v)}
                  aria-label="Notifications"
                  aria-expanded={notificationsOpen}
                  className="relative p-2 text-slate-500 dark:text-ink-300 hover:text-slate-700 dark:hover:text-cream hover:bg-slate-50 dark:hover:bg-ink-800 rounded min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                >
                  <Bell className="w-4 h-4" />
                  {SAMPLE_NOTIFICATIONS.length > 0 && (
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-rose-500" />
                  )}
                </button>

                <AnimatePresence>
                  {notificationsOpen && (
                    <>
                      <div className="fixed inset-0 z-30" onClick={() => setNotificationsOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-72 bg-white dark:bg-ink-900 border border-slate-200 dark:border-ink-700 rounded-lg shadow-lg z-40 overflow-hidden"
                      >
                        <div className="px-4 py-3 border-b border-slate-100 dark:border-ink-700 text-xs font-bold text-slate-900 dark:text-cream">
                          Notifications
                        </div>
                        <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 dark:divide-ink-700">
                          {SAMPLE_NOTIFICATIONS.map((n) => (
                            <div key={n.id} className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-ink-800 transition-colors">
                              <p className="text-xs font-semibold text-slate-900 dark:text-cream">{n.title}</p>
                              <p className="text-xs text-slate-500 dark:text-ink-300 mt-0.5 leading-relaxed">{n.detail}</p>
                              <p className="text-[10px] text-slate-400 mt-1">{n.time}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-4 w-[1px] bg-slate-200 dark:bg-ink-700 hidden sm:block" />
              <div className="text-xs font-medium text-slate-600 dark:text-ink-300 hidden md:block">
                Exam: <span className="font-bold text-slate-900 dark:text-cream">{examName}</span>
              </div>
            </div>
          </header>

          {/* Padding bottom ensures mobile bottom bar never overlaps content on smaller viewports */}
          <main className="p-4 sm:p-6 md:p-8 flex-1 max-w-7xl mx-auto w-full pb-24 lg:pb-12">
            <Outlet />
          </main>
        </div>
      </div>

      {/*
        MOBILE BOTTOM NAVIGATION BAR
        Pure Tailwind: 'flex lg:hidden' with NO inline 'display' property,
        so it is completely hidden on screens >= 1024px.
        Icon colour comes from currentColor, so dark mode works automatically.
      */}
      <nav
        aria-label="Mobile Navigation"
        className="flex lg:hidden fixed bottom-0 left-0 right-0 z-[99999] w-full h-[62px] bg-white dark:bg-ink-900 border-t border-slate-200 dark:border-ink-700 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] items-center justify-around pb-[env(safe-area-inset-bottom,0px)] transition-colors"
      >
        {MOBILE_BOTTOM_NAV.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.end
            ? location.pathname === tab.path
            : location.pathname.startsWith(tab.path);

          return (
            <Link
              key={tab.name}
              to={tab.path}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 no-underline select-none transition-colors ${
                isActive
                  ? 'text-[#1D2A59] dark:text-brass'
                  : 'text-slate-400 dark:text-ink-500 hover:text-slate-600 dark:hover:text-cream'
              }`}
            >
              <div
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  isActive ? 'bg-[#1D2A59]/10 dark:bg-brass/15' : 'bg-transparent'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span
                className={`text-[10px] mt-0.5 leading-none ${
                  isActive
                    ? 'font-bold text-[#1D2A59] dark:text-brass'
                    : 'font-medium text-slate-500 dark:text-ink-300'
                }`}
              >
                {tab.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default DashboardLayout;
