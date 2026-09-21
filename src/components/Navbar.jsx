import React, { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ isDark, toggleTheme, scrollPosition }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`navbar-header ${scrollPosition > 30 ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-brand">
          <span className="brand-title">Jishnu P G</span>
          <span className="brand-dot" />
        </a>

        <div className="nav-status-chip">
          <span className="status-beacon" />
          <span className="status-label">Available for Roles</span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Systems
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>
              Stack
            </a>
          </li>
          <li className="nav-item">
            <a href="#activity" className="nav-link" onClick={() => setIsOpen(false)}>
              Telemetry
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            href="https://github.com/JishnuPG-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-action-icon"
            title="GitHub Profile"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jishnupg2005/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-action-icon"
            title="LinkedIn Profile"
          >
            <FiLinkedin size={18} />
          </a>
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={isDark ? 'Switch to Warm Alabaster mode' : 'Switch to Warm Charcoal mode'}
            aria-label="Toggle visual theme"
          >
            {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
