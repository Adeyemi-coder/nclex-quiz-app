// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layout Shells
import { MarketingLayout } from './layouts/MarketingLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

// Public Marketing Pages
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { FeaturesPage } from './pages/public/FeaturesPage';
import { PricingPage } from './pages/public/PricingPage';
import { TeamPage } from './pages/public/TeamPage';
import { ContactPage } from './pages/public/ContactPage';
import { LoginPage } from './pages/public/LoginPage';


// Authenticated Learner Dashboard Pages
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { ExamsListingPage } from './pages/dashboard/ExamsListingPage';
import { ProgressPage } from './pages/dashboard/ProgressPage';
import { BookmarksPage } from './pages/dashboard/BookmarksPage';
import { ClinicalSimulatorPage } from './pages/dashboard/ClinicalSimulatorPage'
import { StudyHistoryPage } from './pages/dashboard/StudyHistoryPage';
import { ProfileSettingsPage } from './pages/dashboard/ProfileSettingsPage';


// Core Examination Runner & Review Components
import Quiz from './components/Quiz/Quiz';
import ResultsView from './components/Quiz/ResultsView';

export default function App() {
  return (
    <AuthProvider>
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

        {/* 2. Authenticated Learner Dashboard Shell */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="exams" element={<ExamsListingPage />} />
          <Route path="subjects" element={<ExamsListingPage />} />
          <Route path="practice" element={<ExamsListingPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="bookmarks" element={<BookmarksPage />} />
          <Route path="history" element={<StudyHistoryPage />} />
          <Route path="settings" element={<ProfileSettingsPage />} />
        </Route>

        {/* 3. Dedicated Focused Exam Engine */}
        <Route path="/quiz/:category?" element={<Quiz />} />
        <Route path="/results" element={<ResultsView />} />

        {/* 4. Global Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}