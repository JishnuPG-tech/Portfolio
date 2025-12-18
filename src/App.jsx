import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import EngineeringFocus from './components/EngineeringFocus';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GitHubActivity from './components/GitHubActivity';
import CaseStudy from './pages/CaseStudy';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Load saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Easter egg in console
    console.clear();
    console.log(
      '%c⚡ SmartWatt AI - Full Stack Developer Portfolio\n',
      'font-size: 16px; font-weight: bold; color: #6366f1;'
    );
    console.log(
      '%cconst developer = \'JISHNU P G\';',
      'font-family: Monaco, monospace; font-size: 12px; color: #50fa7b; background: #1e1e1e; padding: 8px; border-radius: 4px; display: block;'
    );
    console.log(
      '%cGet in touch: jishnupg2005@gmail.com | Phone: +91 8590731979\n',
      'font-size: 12px; color: #8b5cf6;'
    );
  }, []);

  return (
    <Router>
      <div className={`app ${isDark ? 'dark' : 'light'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} scrollPosition={scrollPosition} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero isDark={isDark} scrollPosition={scrollPosition} />
                <About isDark={isDark} />
                <Projects isDark={isDark} />
                <EngineeringFocus isDark={isDark} />
                <Skills isDark={isDark} />
                <GitHubActivity isDark={isDark} />
                <Contact isDark={isDark} />
              </>
            }
          />
          <Route path="/smartwatt" element={<CaseStudy isDark={isDark} />} />
        </Routes>
        <Footer isDark={isDark} scrollPosition={scrollPosition} />
      </div>
    </Router>
  );
}

export default App;
