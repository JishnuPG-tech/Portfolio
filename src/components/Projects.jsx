import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiCpu } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const flagship = {
    title: 'SmartWatt AI',
    subtitle: 'Physics-Informed Hybrid Energy Estimator',
    badge: 'Flagship Research System',
    role: 'Lead Architect & Systems Developer',
    year: '2025–2026',
    problem:
      'The "Linear Load Paradox": Standard data-driven AI models hallucinate on deterministic linear appliances (<31% accuracy) due to lack of temporal variance, while static physical equations fail to capture 18–22% real-world efficiency degradation in aging appliances.',
    solution:
      'Engineered a Dual-Inference Hybrid ML Architecture. Dynamically routes inference: multi-output neural networks predict efficiency loss and duty cycles for non-linear loads, while physics-enforced logic gates guarantee zero-error determinism on linear loads.',
    results: [
      { metric: '94.5%', label: 'Refrigerator Accuracy', diff: '+14.2% vs Pure AI' },
      { metric: '86.0%', label: 'LED Light Accuracy', diff: '+65.9% vs Pure AI' },
      { metric: '~98%', label: 'Linear Load Precision', diff: '0% hallucination error' },
      { metric: '<20ms', label: 'Inference Latency', diff: 'Sub-second real-time' },
    ],
    techStack: [
      'Physics-Informed ML',
      'Python',
      'FastAPI',
      'TensorFlow/Keras',
      'TypeScript',
      'Next.js 14',
      'PostgreSQL',
      'Supabase',
    ],
    caseStudyUrl: '/smartwatt',
    githubUrl: 'https://github.com/JishnuPG-tech/SmartWatt',
  };

  const secondaryProjects = [
    {
      title: 'Hermes-x Agent Suite',
      subtitle: 'Autonomous Multi-Agent Harness & Mobile Client',
      badge: 'Agentic AI & Mobile',
      year: '2026',
      description:
        'Engineered an edge-to-edge autonomous agent development harness with bi-directional WebSocket event streaming, tool sandbox orchestration, and 1:1 Jetpack Compose mobile client steering.',
      tags: ['Python', 'FastAPI', 'Jetpack Compose', 'Autonomous Agents', 'WebSockets', 'Docker'],
      githubUrl: 'https://github.com/JishnuPG-tech/Hermes-x',
    },
    {
      title: 'Omniroute Gateway',
      subtitle: 'Unified AI Model Gateway & Routing Mesh',
      badge: 'AI Infrastructure',
      year: '2026',
      description:
        'High-performance model gateway dynamically routing inference requests across local and cloud LLM endpoints with intelligent fallback cascades, latency telemetry, and token tracking.',
      tags: ['Python', 'FastAPI', 'LLM Routing', 'Local AI', 'AsyncIO', 'Telemetry'],
      githubUrl: 'https://github.com/JishnuPG-tech/Omniroute',
    },
    {
      title: 'OpenCode-Web',
      subtitle: 'Cloud AI Code Studio & Vibe Workspace',
      badge: 'Developer Tooling',
      year: '2026',
      description:
        'Cloud-native and browser-based AI coding environment built for rapid vibe coding, automated context injection, code execution sandboxes, and agentic workflows.',
      tags: ['TypeScript', 'Python', 'WebIDE', 'Vibe Coding', 'Container Sandbox'],
      githubUrl: 'https://github.com/JishnuPG-tech/OpenCode-Web',
    },
    {
      title: 'Instaxsave',
      subtitle: 'High-Throughput Media Processing Engine',
      badge: 'Media Infrastructure',
      year: '2026',
      description:
        'Scalable TypeScript media extraction and asset management service optimized for concurrent stream parsing, low-latency asset transformations, and caching.',
      tags: ['TypeScript', 'Node.js', 'Asset Pipeline', 'High Concurrency', 'REST API'],
      githubUrl: 'https://github.com/JishnuPG-tech/Instaxsave',
    },
  ];

  return (
    <section id="projects" className="projects-editorial-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">01 / Selected Architecture</span>
          <h2 className="section-title">Production Systems & Case Studies</h2>
          <p className="section-subtitle">
            Research-grade software engineering bridging physical laws, non-linear machine learning, and
            reliable distributed systems.
          </p>
        </div>

        {/* Flagship Whitepaper Card */}
        <div className="flagship-whitepaper-card">
          <div className="flagship-topbar">
            <div className="flagship-metadata">
              <span className="flagship-badge">{flagship.badge}</span>
              <span className="flagship-year">{flagship.year}</span>
              <span className="meta-sep">•</span>
              <span className="flagship-role">{flagship.role}</span>
            </div>
            <div className="flagship-actions">
              <Link to={flagship.caseStudyUrl} className="editorial-btn" title="Read Full Whitepaper">
                <span>Read Case Study</span>
                <FiArrowRight size={15} />
              </Link>
              <a
                href={flagship.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link-btn"
                title="View Repository"
              >
                <FiGithub size={17} />
              </a>
            </div>
          </div>

          <div className="flagship-content-grid">
            {/* Left Narrative Column */}
            <div className="flagship-narrative">
              <h3 className="flagship-heading">{flagship.title}</h3>
              <p className="flagship-subhead">{flagship.subtitle}</p>

              <div className="editorial-callout problem">
                <span className="callout-label">The Empirical Dilemma</span>
                <p className="callout-text">{flagship.problem}</p>
              </div>

              <div className="editorial-callout solution">
                <span className="callout-label">The Hybrid Solution</span>
                <p className="callout-text">{flagship.solution}</p>
              </div>

              <div className="flagship-tech-row">
                {flagship.techStack.map((tech) => (
                  <span key={tech} className="claude-tag-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Empirical Proof Column */}
            <div className="flagship-empirical-col">
              <div className="empirical-panel">
                <div className="empirical-panel-header">
                  <FiCpu className="panel-icon" />
                  <span className="panel-title">Empirical Benchmark Verification</span>
                </div>

                <div className="empirical-metrics-grid">
                  {flagship.results.map((item, idx) => (
                    <div key={idx} className="empirical-stat-box">
                      <span className="stat-value">{item.metric}</span>
                      <span className="stat-label">{item.label}</span>
                      <span className="stat-diff">{item.diff}</span>
                    </div>
                  ))}
                </div>

                <div className="empirical-footer-cta">
                  <Link to={flagship.caseStudyUrl} className="whitepaper-deepdive-link">
                    <span>Explore the interactive physics-informed simulator</span>
                    <FiArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="secondary-projects-grid">
          {secondaryProjects.map((p, idx) => (
            <div key={idx} className="secondary-project-card">
              <div className="sec-card-header">
                <div className="sec-meta-left">
                  <span className="sec-badge">{p.badge}</span>
                  <span className="sec-year">{p.year}</span>
                </div>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sec-git-link"
                  title="GitHub"
                >
                  <FiGithub size={16} />
                </a>
              </div>

              <h4 className="sec-title">{p.title}</h4>
              <p className="sec-sub">{p.subtitle}</p>
              <p className="sec-desc">{p.description}</p>

              <div className="sec-tags-row">
                {p.tags.map((tag) => (
                  <span key={tag} className="claude-tag-pill subtle">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
