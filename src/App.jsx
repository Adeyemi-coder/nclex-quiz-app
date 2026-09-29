// src/App.jsx
import React, { useCallback, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layout Shells
import { MarketingLayout } from './layouts/MarketingLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

// Public Marketing Pages
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { FeaturesPage } from './pages/public/FeaturesPage';
import { ExamsListingPage } from './pages/dashboard/ExamsListingPage';
import { PricingPage } from './pages/public/PricingPage';
import { TeamPage } from './pages/public/TeamPage';
import { ContactPage } from './pages/public/ContactPage';
import { LoginPage } from './pages/public/LoginPage';

// Authenticated Learner Dashboard Pages
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { ProgressPage } from './pages/dashboard/ProgressPage';
import { BookmarksPage } from './pages/dashboard/BookmarksPage';
import { StudyHistoryPage } from './pages/dashboard/StudyHistoryPage';
import StudyGuidePage from './pages/dashboard/StudyGuidePage';
import { ProfileSettingsPage } from './pages/dashboard/ProfileSettingsPage';

// Core Examination Runner & Review Components
import Quiz from './components/Quiz/Quiz';
import ResultsView from './components/Quiz/ResultsView';

// Route guard for logged-in-only pages
import ProtectedRoute from './components/ProtectedRoute';

// Splash (adjust this path if your file lives somewhere else)
import SplashScreen from './components/Splash/SplashScreen.jsx';

export default function App() {
  // Show the splash once per browser session
  const [showSplash, setShowSplash] = useState(() => {
    try {
      return sessionStorage.getItem('splash_seen') !== '1';
    } catch {
      return true;
    }
  });

  const handleSplashFinish = useCallback(() => {
    try {
      sessionStorage.setItem('splash_seen', '1');
    } catch {
      // storage unavailable: splash simply shows again next load
    }
    setShowSplash(false);
  }, []);

  return (
    <AuthProvider>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <Routes>
        {/* 1. Public Marketing Shell */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/exams" element={<ExamsListingPage isPublic={true} />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Everything below requires a signed-in user */}
        <Route element={<ProtectedRoute />}>
          {/* 2. Authenticated Learner Dashboard Shell */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="exams" element={<ExamsListingPage />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="bookmarks" element={<BookmarksPage />} />
            <Route path="history" element={<StudyHistoryPage />} />
            <Route path="study-guide" element={<StudyGuidePage />} />
            <Route path="settings" element={<ProfileSettingsPage />} />
          </Route>

          {/* 3. Dedicated Focused Exam Engine */}
          <Route path="/quiz/:category?" element={<Quiz />} />
          <Route path="/results" element={<ResultsView />} />
        </Route>

        {/* 4. Global Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
