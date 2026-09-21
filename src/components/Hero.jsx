import React from 'react';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiTerminal, FiCheckCircle } from 'react-icons/fi';
import { useAutonomousSync } from '../services/portfolioSync';
import './Hero.css';

const Hero = () => {
  const { data } = useAutonomousSync();
  const buildingNow = data?.buildingNow;

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Editorial Masthead */}
        <div className="hero-masthead">
          <div className="hero-top-status-group">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" />
              <span>BCA Graduate '26 • AI-Native Systems & Vibe Coding</span>
            </div>

            {buildingNow && (
              <a
                href={buildingNow.url || 'https://github.com/JishnuPG-tech'}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-live-radar-chip"
                title={buildingNow.message}
              >
                <span className="radar-ping-dot" />
                <span className="radar-label">Active Radar:</span>
                <span className="radar-repo">{buildingNow.cleanRepo}</span>
                <span className="radar-sep">•</span>
                <span className="radar-time">{buildingNow.timeAgo}</span>
              </a>
            )}
          </div>

          <h1 className="hero-headline">
            Engineering <span className="serif-em">intelligent systems</span> with mathematical rigor.
          </h1>

          <p className="hero-dek">
            I’m <strong>Jishnu P G</strong> — a BCA graduate, AI engineer, and full-stack developer passionate
            about <strong>AI-native development and high-velocity vibe coding</strong>. Architect of{' '}
            <strong>SmartWatt AI</strong>, bridging empirical physics formulations and deep neural networks to ship
            production-ready systems.
          </p>

          <div className="hero-actions-row">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Systems</span>
              <FiArrowRight size={17} />
            </a>
            <a
              href="/ATS Friendly Resume.pdf"
              download="Jishnu_PG_Resume.pdf"
              className="btn btn-secondary"
              title="Download ATS-Optimized Resume"
            >
              <FiDownload size={16} />
              <span>Resume</span>
            </a>
            <div className="hero-social-cluster">
              <a
                href="https://github.com/JishnuPG-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                title="GitHub"
              >
                <FiGithub size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/jishnupg2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                title="LinkedIn"
              >
                <FiLinkedin size={17} />
              </a>
            </div>
          </div>

          {/* Editorial Metric Strip */}
          <div className="hero-metrics-strip">
            <div className="metric-cell">
              <span className="metric-val">94.5%</span>
              <span className="metric-sub">Hybrid Accuracy</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-cell">
              <span className="metric-val">&lt;20ms</span>
              <span className="metric-sub">Inference Latency</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-cell">
              <span className="metric-val">100%</span>
              <span className="metric-sub">Deterministic Tariff Logic</span>
            </div>
          </div>
        </div>

        {/* Right Column: Claude Code Artifact Card */}
        <div className="hero-specimen-wrap">
          <div className="claude-artifact-card">
            <div className="artifact-header">
              <div className="artifact-pill">
                <FiTerminal size={13} className="artifact-icon" />
                <span className="artifact-title">dual-inference-router.ts</span>
              </div>
              <span className="artifact-status">Specimen 01</span>
            </div>

            <div className="artifact-code-body">
              <pre className="artifact-pre">
                <code>
                  <span className="syn-keyword">const</span> engine ={' '}
                  <span className="syn-fn">DualInferenceRouter</span>({'{'}
                  {'\n'}  loadCategory: <span className="syn-str">'appliance-energy'</span>,
                  {'\n'}  resolutionStrategy: <span className="syn-fn">evaluate</span>((load) =&gt; {'{'}
                  {'\n'}    <span className="syn-comment">{"// Physics gate recovers deterministic linear loads"}</span>
                  {'\n'}    <span className="syn-keyword">if</span> (load.isLinear) <span className="syn-keyword">return</span> PhysicsGate(load);
                  {'\n'}    <span className="syn-comment">{"// Neural net captures non-linear aging wear (18-22%)"}</span>
                  {'\n'}    <span className="syn-keyword">return</span> NeuralRegessionNet(load);
                  {'\n'}  {'}'})
                  {'\n'}{'}'});
                </code>
              </pre>
            </div>

            <div className="artifact-footer">
              <div className="artifact-benchmark">
                <FiCheckCircle size={14} className="bench-icon" />
                <span>Linear Load Error: 0.0% | Non-Linear Gain: +14.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
