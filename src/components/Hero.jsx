import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = ({ isDark, scrollPosition }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "const developer = 'JISHNU P G';";

  useEffect(() => {
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
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-text">
          <h1>
            Hey, I'm <span className="gradient-text">Jishnu P G</span>
          </h1>
          <p className="hero-subtitle">
            Final Year BCA Student | Aspiring AI Engineer & Full-Stack Developer
          </p>
          <p className="hero-description">
            Building intelligent production systems that bridge the gap between Theoretical Physics and Real-World AI.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <a href="/resume.pdf" download="Jishnu_PG_Resume.pdf" className="btn btn-primary">
            Download Resume
            <FiDownload size={20} />
          </a>
          <a href="#projects" className="btn btn-secondary">
            View My Work
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-socials">
          <a
            href="https://github.com/JishnuPG-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jishnupg2005/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="terminal-card">
          <div className="terminal-header-mini">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="terminal-filename">developer.js</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">$ </span>
              <span className="terminal-code">{displayedText}</span>
              <span className="cursor">|</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="scroll-arrow"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
