import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-editorial">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <span className="footer-title">Jishnu P G</span>
            <p className="footer-dek">
              AI Engineer & Full-Stack Developer. Focused on physics-constrained neural architectures,
              empirical ML validation, and deterministic utility engines.
            </p>
          </div>

          <div className="footer-links-col">
            <span className="footer-heading">Navigation</span>
            <ul className="footer-nav-list">
              <li><a href="#home">Overview</a></li>
              <li><a href="#projects">Systems</a></li>
              <li><a href="#skills">Stack</a></li>
              <li><a href="#activity">Telemetry</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-networks-col">
            <span className="footer-heading">Networks</span>
            <div className="footer-social-links">
              <a
                href="https://github.com/JishnuPG-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item"
              >
                <FiGithub size={15} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jishnupg2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item"
              >
                <FiLinkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:jishnupg2005@gmail.com" className="footer-link-item">
                <FiMail size={15} />
                <span>Direct Mail</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span className="colophon-text">
            © {currentYear} Jishnu P G. Typeset in Newsreader & Plus Jakarta Sans.
          </span>
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            title="Return to top of page"
            aria-label="Back to top"
          >
            <span>Top</span>
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
