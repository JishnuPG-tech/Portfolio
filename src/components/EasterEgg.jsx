import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EasterEgg.css';

const EasterEgg = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "const developer = 'JISHNU P G';";

  useEffect(() => {
    if (showTerminal) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    } else {
      setDisplayedText('');
    }
  }, [showTerminal]);

  return (
    <>
      <motion.button
        className="easter-egg-trigger"
        onClick={() => setShowTerminal(!showTerminal)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Click to reveal"
      >
        {'<'}
      </motion.button>

      <AnimatePresence>
        {showTerminal && (
          <motion.div
            className="terminal-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="terminal-header">
              <div className="terminal-buttons">
                <div className="terminal-btn red"></div>
                <div className="terminal-btn yellow"></div>
                <div className="terminal-btn green"></div>
              </div>
              <span className="terminal-title">developer.js</span>
            </div>
            <div className="terminal-content">
              <div className="terminal-prompt">$ </div>
              <div className="terminal-text">
                {displayedText}
                <span className="cursor">|</span>
              </div>
            </div>
            <button
              className="terminal-close"
              onClick={() => setShowTerminal(false)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEgg;
