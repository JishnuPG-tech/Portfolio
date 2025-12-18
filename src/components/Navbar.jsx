import React, { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ isDark, toggleTheme, scrollPosition }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          JP<span>G</span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Work
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="https://github.com/JishnuPG-tech" target="_blank" rel="noopener noreferrer" className="nav-social" title="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noopener noreferrer" className="nav-social" title="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
          <button className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
