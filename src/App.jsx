import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header.jsx';
import Home from './components/Home/Home.jsx';
import Modules from './components/Modules/Modules.jsx';
import Quiz from './components/Quiz/Quiz.jsx';
import FlashcardDeck from './components/Flashcards/FlashcardDeck.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import SplashScreen from './components/Splash/SplashScreen.jsx';

export default function App() {
  // Always true on reload during development (or clear sessionStorage)
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}

      <div className="app-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/:category" element={<Quiz />} />
            <Route path="/flashcards" element={<FlashcardDeck />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </>
  );
}