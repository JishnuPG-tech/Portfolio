import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = ({ scrollPosition }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h3>Jishnu P G</h3>
            <p>
              Full Stack Developer | Machine Learning Enthusiast | Building intelligent solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Work</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:jishnupg2005@gmail.com">jishnupg2005@gmail.com</a>
              </li>
              <li>
                <a href="tel:+918590731979">+91 8590731979</a>
              </li>
              <li>
                <span>Palakkad, Kerala</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/JishnuPG-tech" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:jishnupg2005@gmail.com" className="social-icon" title="Email">
                <FiMail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        <div className="footer-bottom">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © {currentYear} Jishnu P G. All rights reserved. Version 1.0 • Last updated: 2025
          </motion.p>

          {scrollPosition > 300 && (
            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} />
            </motion.button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
