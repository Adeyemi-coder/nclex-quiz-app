import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header.jsx';
import Home from './components/Home/Home.jsx';
import Modules from './components/Modules/Modules.jsx';
import Quiz from './components/Quiz/Quiz.jsx';
import Result from './components/Result/Result.jsx';
import FlashcardDeck from './components/Flashcards/FlashcardDeck.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import SplashScreen from './components/Splash/SplashScreen.jsx';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAudioActive, setIsAudioActive] = useState(false);

  const toggleAudio = () => {
    setIsAudioActive((prev) => !prev);
  };

  return (
    <>
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}

      <div className="app-shell flex min-h-screen flex-col bg-[#F4EEDC]">
        <Header 
          isAudioActive={isAudioActive} 
          onToggleAudio={toggleAudio} 
        />
        {/* pb-20 prevents content from getting hidden under mobile bottom navigation */}
        <main className="flex-1 pb-20 md:pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/:category" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/flashcards" element={<FlashcardDeck />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </>
  );
}