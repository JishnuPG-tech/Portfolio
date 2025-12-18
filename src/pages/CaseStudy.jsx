import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import './CaseStudy.css';

const CaseStudy = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="case-study">
      {/* Header */}
      <div className="case-study-header">
        <button className="back-btn" onClick={handleBack}>
          <FiArrowLeft /> Back
        </button>
      </div>

      {/* Hero Section */}
      <section className="case-study-hero">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>SmartWatt AI</h1>
          <p className="subtitle">Project Head · Full-Stack & AI Developer</p>
          <p className="duration">Intelligent Energy Estimation & Disaggregation System | 2025-2026</p>
        </motion.div>
      </section>

      {/* Problem Statement */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>The "Linear Load Paradox"</h2>
            <p className="section-description">
              Residential energy estimation faces a unique dual challenge. <strong>Traditional Physics Calculators</strong> fail because they assume "Perfect Efficiency" (ignoring that a 5-year-old Fridge consumes +20% more power). Conversely, <strong>Pure Data-Driven AI</strong> models "hallucinate" on static loads like Fans or LEDs because there is no pattern to learn—achieving a dismal <strong>31% accuracy</strong> in initial benchmarks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>The Solution: Physics-Informed Hybrid AI</h2>
            <p className="section-description">
              SmartWatt V2.1 introduces a <strong>Dual-Inference Architecture</strong> that dynamically switches strategies based on the appliance type.
            </p>
            <p className="section-description">
              1. <strong>For Complex Loads (AC, Fridge):</strong> A Multi-Output Neural Network predicts both "Efficiency Factor" (degradation) and "Effective Duty Cycle".<br />
              2. <strong>For Linear Loads (Fans, Lights):</strong> A Physics-Enforced Logic Gate hard-codes efficiency to 1.0, using AI <em>only</em> for behavioral usage patterns.
            </p>

            <div className="architecture-section">
              <h3>System Architecture</h3>
              <div className="architecture">
                <div className="arch-box">
                  <h4>Wizard UI</h4>
                  <p>Next.js 14</p>
                  <p className="arch-sub">Verified User Input Flow</p>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-box">
                  <h4>Hybrid Engine</h4>
                  <p>FastAPI Router</p>
                  <p className="arch-sub">Classifies Load Type</p>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-box">
                  <h4>Dual Inference</h4>
                  <p>TF/Keras + Logic</p>
                  <p className="arch-sub">AI vs Physics Switch</p>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-box">
                  <h4>Persistence</h4>
                  <p>Supabase</p>
                  <p className="arch-sub">History & Training Data</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Quantitative Verification</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">+14.2%</div>
                <div className="metric-label">Fridge Accuracy</div>
                <p>vs Pure AI Baseline (94.5% total)</p>
              </div>
              <div className="metric-card">
                <div className="metric-value">+65.9%</div>
                <div className="metric-label">LED Light Accuracy</div>
                <p>Recovered via Physics Constraints</p>
              </div>
              <div className="metric-card">
                <div className="metric-value">20ms</div>
                <div className="metric-label">Inference Latency</div>
                <p>Production-ready response time</p>
              </div>
              <div className="metric-card">
                <div className="metric-value">User-First</div>
                <div className="metric-label">Intent Override</div>
                <p>Respects manual inputs as ground truth</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Technology Stack</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h4>Frontend</h4>
                <p>Next.js 16 • React 19 • TypeScript • Tailwind CSS • Plotly.js • Lucide React</p>
              </div>
              <div className="tech-category">
                <h4>Backend & ML</h4>
                <p>FastAPI • TensorFlow • Keras • Scikit-learn • Pandas • NumPy • Joblib</p>
              </div>
              <div className="tech-category">
                <h4>Database</h4>
                <p>PostgreSQL • Supabase</p>
              </div>
              <div className="tech-category">
                <h4>DevOps & Tools</h4>
                <p>Git • Python • NILM Techniques • jsPDF • Jupyter Notebooks</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Key Insights</h2>
            <div className="learnings-list">
              <div className="learning-item">
                <div className="learning-number">1</div>
                <div>
                  <h4>Hybrid Approaches Beat Pure ML</h4>
                  <p>Neural networks for behavior prediction + physics-based models for energy calculation outperform single-model solutions</p>
                </div>
              </div>
              <div className="learning-item">
                <div className="learning-number">2</div>
                <div>
                  <h4>Reconciliation Ensures Accuracy</h4>
                  <p>Matching predictions to actual meter readings creates a feedback loop that improves real-world accuracy</p>
                </div>
              </div>
              <div className="learning-item">
                <div className="learning-number">3</div>
                <div>
                  <h4>Explainability Drives Trust</h4>
                  <p>Separating predicted behavior from calculated energy makes the system interpretable and trustworthy to users</p>
                </div>
              </div>
              <div className="learning-item">
                <div className="learning-number">4</div>
                <div>
                  <h4>Real-time Performance Requires Optimization</h4>
                  <p>Processing 1000+ data points per second demands efficient algorithms, caching, and careful system architecture</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Want to discuss this project?</h2>
            <p>Explore the full implementation on GitHub or connect to discuss the technical approach and results.</p>
            <div className="cta-buttons">
              <a href="https://github.com/JishnuPG-tech" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FiGithub /> View on GitHub
              </a>
              <a href="/#contact" className="btn btn-secondary">
                <FiExternalLink /> Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
