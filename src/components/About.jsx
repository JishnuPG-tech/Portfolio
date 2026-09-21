import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, GraduationCap, Sparkles, Brain, Cpu, Compass } from 'lucide-react';
import './About.css';

const About = () => {
  const philosophyPoints = [
    {
      icon: <Sparkles size={20} className="philo-icon" />,
      title: 'Vibe Coding with Architectural Rigor',
      description:
        'Harnessing AI coding agents, autonomous LLM workflows, and prompt-driven orchestration to ship production software at 10x velocity without sacrificing code quality or maintainability.',
    },
    {
      icon: <Brain size={20} className="philo-icon" />,
      title: 'Physics-Informed Hybrid AI',
      description:
        'AI should never hallucinate what established physical laws already govern. I design hybrid architectures bridging empirical domain rules and deep neural networks.',
    },
    {
      icon: <Compass size={20} className="philo-icon" />,
      title: 'Explainable AI & Auditing (XAI)',
      description:
        'High-stakes industrial and energy systems require mathematical transparency. No opaque black boxes—every decision gate and loss function is verifiable.',
    },
    {
      icon: <Zap size={20} className="philo-icon" />,
      title: 'Production-Grade Resilience',
      description:
        'Prototypes are easy; bulletproof production systems require deterministic logic, sub-20ms latency budgets, and rigorous edge-case handling.',
    },
  ];

  const workAreas = [
    {
      icon: <Sparkles className="work-icon highlight" />,
      title: 'AI-Native & Vibe Coding',
      tech: 'Autonomous Agents • Claude Code • Antigravity • Prompt Architecture • Rapid Prototyping',
      tag: 'Velocity & Delivery',
    },
    {
      icon: <Cpu className="work-icon" />,
      title: 'Hybrid AI & Machine Learning',
      tech: 'Physics-Informed ML • TensorFlow • Keras • Scikit-learn • Multi-Output Regression',
      tag: 'Research & ML',
    },
    {
      icon: <Code2 className="work-icon" />,
      title: 'Full-Stack Web & Mobile',
      tech: 'Next.js 14 • React 19 • TypeScript • Jetpack Compose • FastAPI • Python',
      tag: 'Full-Stack',
    },
    {
      icon: <Zap className="work-icon" />,
      title: 'Systems & Infrastructure',
      tech: 'Scalable Microservices • PostgreSQL • Supabase • WebSockets • Docker • Linux',
      tag: 'Architecture',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      status: 'Graduated — Class of 2026',
      institution: 'Yuvakshetra Institute of Management Studies (YIMS)',
      period: '2023 - 2026',
      details: 'Specialized in Artificial Intelligence, Software Engineering, and Database Systems.',
    },
    {
      degree: 'Higher Secondary Education (Computer Science)',
      status: 'Completed with Honors',
      institution: 'GHSS Vellinezhi, Palakkad',
      period: '2021 - 2023',
      details: 'Foundational coursework in C++, Python, Computer Hardware, and Mathematics.',
    },
  ];

  return (
    <section id="about" className="about-editorial-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-eyebrow">00 / Biography & Focus</span>
          <h2 className="section-title">About & Engineering Profile</h2>
          <p className="section-subtitle">
            BCA Graduate, AI Engineer, and prolific full-stack developer blending rapid vibe coding with
            disciplined systems engineering.
          </p>
        </motion.div>

        {/* Lead Editorial Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="lead-bio-card"
        >
          <div className="bio-topline">
            <span className="bio-status-badge">
              <span className="badge-pulse-dot" />
              BCA Graduate • Class of 2026
            </span>
            <span className="bio-tag">AI Engineer & Full-Stack Developer</span>
          </div>

          <p className="bio-text">
            I am a <strong>BCA Graduate</strong> and <strong>AI Engineer & Full-Stack Developer</strong> specializing
            in building intelligent production systems that bridge theoretical physics and real-world software.
            A passionate advocate of <strong>AI-native development and 'vibe coding'</strong>, I leverage autonomous
            coding agents and prompt-driven orchestration to design, prototype, and ship a prolific range of
            complex, high-performance applications at 10x speed.
          </p>

          <p className="bio-text secondary">
            As the lead architect of <strong>SmartWatt AI</strong>, I focus on solving deep mathematical challenges—such
            as the <em>"Linear Load Paradox"</em> in residential energy disaggregation—by engineering hybrid solutions
            that are mathematically sound, transparently explainable, and production-ready.
          </p>

          {/* Quick Credential Badges */}
          <div className="bio-badges-row">
            <div className="bio-chip">
              <Sparkles size={14} className="chip-icon" />
              <span>Vibe Coding & Agent Workflows</span>
            </div>
            <div className="bio-chip">
              <Brain size={14} className="chip-icon" />
              <span>Physics-Informed ML</span>
            </div>
            <div className="bio-chip">
              <Zap size={14} className="chip-icon" />
              <span>Sub-20ms Production Latency</span>
            </div>
            <div className="bio-chip">
              <GraduationCap size={14} className="chip-icon" />
              <span>BCA Graduate '26</span>
            </div>
          </div>
        </motion.div>

        {/* Engineering Philosophy Cards */}
        <div className="about-sub-section">
          <div className="sub-section-header">
            <h3 className="sub-section-title">Core Philosophy & Approach</h3>
            <span className="sub-section-count">4 Principles</span>
          </div>

          <div className="philosophy-cards-grid">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                className="philo-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="philo-icon-box">{point.icon}</div>
                <h4 className="philo-heading">{point.title}</h4>
                <p className="philo-text">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Domain / Work Areas */}
        <div className="about-sub-section">
          <div className="sub-section-header">
            <h3 className="sub-section-title">Specialized Domains & Tooling</h3>
            <span className="sub-section-count">Competency Matrix</span>
          </div>

          <div className="work-areas-grid">
            {workAreas.map((area, index) => (
              <motion.div
                key={index}
                className="work-domain-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="work-card-top">
                  <div className="work-icon-box">{area.icon}</div>
                  <span className="domain-tag-pill">{area.tag}</span>
                </div>
                <h4 className="work-domain-title">{area.title}</h4>
                <p className="work-domain-tech">{area.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Academic Foundation */}
        <div className="about-sub-section">
          <div className="sub-section-header">
            <h3 className="sub-section-title">Academic Foundation</h3>
            <span className="sub-section-count">Credentials</span>
          </div>

          <div className="education-cards-grid">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="edu-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className="edu-icon-wrap">
                  <GraduationCap size={22} className="edu-icon" />
                </div>
                <div className="edu-body">
                  <div className="edu-header-line">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <span className="edu-period">{edu.period}</span>
                  </div>
                  <span className="edu-status-badge">{edu.status}</span>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-details">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
