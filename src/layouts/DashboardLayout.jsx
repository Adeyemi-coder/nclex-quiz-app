// src/layouts/DashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  LineChart,
  Bookmark,
  History,
  Settings,
  HelpCircle,
  Search,
  Bell,
  LogOut,
  Stethoscope,
  ChevronRight,
  Menu,
  X,
  PlaySquare
} from 'lucide-react';

export const DashboardLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavigation = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Exams & Test', path: '/dashboard/exams', icon: GraduationCap },
    { name: 'Subjects', path: '/dashboard/subjects', icon: BookOpen },
    { name: 'Practice', path: '/dashboard/practice', icon: PlaySquare },
    { name: 'Progress', path: '/dashboard/progress', icon: LineChart },
    { name: 'Bookmarks', path: '/dashboard/bookmarks', icon: Bookmark },
    { name: 'Study History', path: '/dashboard/history', icon: History },
  ];

  const resourceNavigation = [
    { name: 'Study Guide', path: '/dashboard/exams', icon: ChevronRight },
    { name: 'Clinical Reference', path: '/dashboard/exams', icon: ChevronRight },
    { name: 'Practice Questions Pool', path: '/dashboard/exams', icon: ChevronRight },
  ];

  const utilityNavigation = [
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
    { name: 'Help & Support', path: '/contact', icon: HelpCircle },
  ];

  const isActive = (path) => location.pathname === path;

  const NavContent = () => (
    <>
      <div className="h-16 px-5 border-b border-surface-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-brand-primary text-white flex items-center justify-center font-bold shadow-subtle shrink-0">
            <Stethoscope className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-slate-900 block leading-none">NCLEX Master</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold mt-1">Candidate Portal</span>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden p-1.5 rounded text-slate-400 hover:text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        <div>
          <nav className="space-y-1">
            {mainNavigation.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded text-xs font-semibold min-h-[44px] transition-colors ${
                    active ? 'bg-brand-primary text-white shadow-subtle' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-surface-border pt-4">
          <div className="px-3 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Resources</div>
          <nav className="space-y-1">
            {resourceNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 min-h-[40px] transition-colors"
              >
                <span>{item.name}</span>
                <item.icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-surface-border pt-4">
          <nav className="space-y-1">
            {utilityNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 min-h-[40px] transition-colors"
              >
                <item.icon className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-3 border-t border-surface-border bg-slate-50/50">
        <div className="flex items-center justify-between p-2 rounded bg-white border border-surface-border shadow-subtle">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-brand-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
              AK
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-bold text-slate-900 block truncate">Adeyemi Kehinde</span>
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                Active Candidate
              </span>
            </div>
          </div>
          <Link to="/" title="Exit to Public Site" className="text-slate-400 hover:text-slate-700 p-1.5">
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-surface-canvas text-slate-800 flex font-sans antialiased">
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-surface-border fixed inset-y-0 z-30 select-none shadow-subtle">
        <NavContent />
      </aside>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white z-50 shadow-xl">
            <NavContent />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-surface-border sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 shadow-subtle gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded text-slate-600 hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="relative w-full max-w-xs sm:max-w-sm">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search modules... (Cmd+K)"
                className="w-full text-xs bg-slate-50 border border-surface-border rounded pl-8 pr-3 py-2 sm:py-1.5 focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-medium"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded min-h-[44px] min-w-[44px] flex items-center justify-center">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-rose-500"></span>
            </button>
            <div className="h-4 w-[1px] bg-slate-200 hidden sm:block"></div>
            <div className="text-xs font-medium text-slate-600 hidden md:block">
              Exam: <span className="font-bold text-slate-900">NMCN RN Professional</span>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 md:p-8 flex-1 max-w-7xl mx-auto w-full pb-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;