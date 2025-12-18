/**
 * SMARTWATT CASE STUDY PAGE
 * 
 * Template for deep-dive project showcase
 * Status: Ready to implement
 * Priority: High Impact
 */

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CaseStudy.css';

const CaseStudy = () => {
  return (
    <div className="case-study">
      {/* Header with back button */}
      <div className="case-study-header">
        <button className="back-btn">
          <FiArrowLeft /> Back to Portfolio
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
          <p className="subtitle">Intelligent Energy Estimation & Disaggregation System</p>
          <p className="duration">Final Year BCA Project | 2025-2026</p>
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
            <h2>The Problem</h2>
            <div className="problem-grid">
              <div className="problem-item">
                <div className="stat-box">
                  <div className="number">15-20%</div>
                  <p>Energy Waste</p>
                </div>
                <p>Households can't identify which appliances consume the most power</p>
              </div>
              <div className="problem-item">
                <div className="stat-box">
                  <div className="number">$200B</div>
                  <p>Annual Loss</p>
                </div>
                <p>Global cost of energy inefficiency due to poor visibility</p>
              </div>
              <div className="problem-item">
                <div className="stat-box">
                  <div className="number">500M+</div>
                  <p>Households</p>
                </div>
                <p>Without appliance-level energy insights</p>
              </div>
            </div>
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
            <h2>The Solution</h2>
            <p className="section-description">
              A hybrid machine learning system that combines deep learning with physics-based NILM
              (Non-Intrusive Load Monitoring) techniques to disaggregate household energy consumption
              at the appliance level in real-time.
            </p>
            
            {/* Architecture would go here */}
            <div className="architecture-placeholder">
              <p>📊 Architecture Diagram</p>
              <p style={{ fontSize: '0.9rem', color: '#888' }}>
                Frontend → API Gateway → ML Pipeline → Real-time Dashboard
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Metrics */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Results & Impact</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">30%</div>
                <div className="metric-label">Better Accuracy</div>
                <p>vs traditional NILM methods</p>
              </div>
              <div className="metric-card">
                <div className="metric-value">92%</div>
                <div className="metric-label">Detection Rate</div>
                <p>Appliance identification accuracy</p>
              </div>
              <div className="metric-card">
                <div className="metric-value">1000+</div>
                <div className="metric-label">Data Points/sec</div>
                <p>Real-time processing capacity</p>
              </div>
              <div className="metric-card">
                <div className="metric-value">&lt;100ms</div>
                <div className="metric-label">Latency</div>
                <p>Dashboard update response time</p>
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
                <p>Next.js 16, React 19, TypeScript, Tailwind CSS, Plotly.js</p>
              </div>
              <div className="tech-category">
                <h4>Backend & ML</h4>
                <p>FastAPI, TensorFlow, Keras, Scikit-learn, Pandas, NumPy</p>
              </div>
              <div className="tech-category">
                <h4>Database</h4>
                <p>PostgreSQL with Supabase</p>
              </div>
              <div className="tech-category">
                <h4>DevOps</h4>
                <p>Git, Docker (optional), Jupyter Notebooks</p>
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
            <h2>Key Learnings</h2>
            <ul className="learnings-list">
              <li>Hybrid ML approaches combining deep learning + domain expertise outperform pure DL</li>
              <li>Real-time data processing requires careful optimization and caching strategies</li>
              <li>User-friendly visualization is as important as ML accuracy</li>
              <li>End-to-end system design requires thinking beyond individual components</li>
            </ul>
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
            <h2>Want to explore more?</h2>
            <p>Check out the full project on GitHub or get in touch to discuss the technical details.</p>
            <div className="cta-buttons">
              <a href="https://github.com/jishnupg/smartwatt" className="btn btn-primary">
                View on GitHub
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
