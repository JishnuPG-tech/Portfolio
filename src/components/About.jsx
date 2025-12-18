import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Zap, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  const philosophyPoints = [
    {
      title: 'Physics-Informed Design',
      description: 'AI shouldn’t guess what Physics already knows. I build hybrid systems that combine the best of both worlds.',
    },
    {
      title: 'Explainable AI (XAI)',
      description: 'Black-box models effectively do not exist in high-stakes environments. I prioritize transparency and auditability.',
    },
    {
      title: 'Production-Grade Reliability',
      description: 'Code is only as good as its uptime. I design fault-tolerant systems ready for the real world.',
    },
    {
      title: 'Data-Driven optimization',
      description: 'Hypotheses are cheap; verified benchmarks are valuable. I let the data dictate architectural decisions.',
    },
  ];

  const workAreas = [
    {
      icon: <Code2 className="work-icon" />,
      title: 'Full-Stack Engineering',
      tech: 'Next.js 14 • React • TypeScript • FastAPI',
    },
    {
      icon: <Lightbulb className="work-icon" />,
      title: 'Hybrid AI Systems',
      tech: 'TensorFlow • Physics-Informed ML • Keras',
    },
    {
      icon: <Zap className="work-icon" />,
      title: 'System Architecture',
      tech: 'Scalable Microservices • PostgreSQL • Supabase',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Yuvakshetra Institute of Management Studies (YIMS)',
      period: '2023 - 2026',
    },
    {
      degree: 'Higher Secondary (Computer Science)',
      institution: 'GHSS Vellinezhi, Palakkad',
      period: 'Completed 2023',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-heading"
        >
          <h2 className="about-heading-title">About Me</h2>
        </motion.div>

        {/* Sharp Intro Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="intro-block"
        >
          <p className="intro-text">
            I am a <strong>Final Year BCA Student</strong>, pursuing a career as an <strong>AI Engineer</strong> & <strong>Full-Stack Developer</strong>. specializing in building intelligent systems that bridge the gap between theoretical modeling and real-world application.
            Currently leading the <strong>SmartWatt AI</strong> project, I focus on solving complex domain problems—like the "Linear Load Paradox"—by architecting hybrid solutions that are accurate, explainable, and production-ready.
          </p>
        </motion.div>

        {/* Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="impact-strip"
        >
          <span>Physics-Informed AI</span>
          <span className="separator">•</span>
          <span>Lead Developer @ SmartWatt</span>
          <span className="separator">•</span>
          <span>Full-Stack Architecture</span>
        </motion.div>

        {/* Engineering Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="philosophy-section"
        >
          <h3 className="section-title">Engineering Philosophy</h3>
          <div className="philosophy-grid">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                className="philosophy-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
                viewport={{ once: true }}
              >
                <h4 className="philosophy-title">{point.title}</h4>
                <p className="philosophy-desc">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I Work With */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="work-section"
        >
          <h3 className="section-title">Technical Domain</h3>
          <div className="work-grid">
            {workAreas.map((area, index) => (
              <motion.div
                key={index}
                className="work-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="work-icon-wrapper">{area.icon}</div>
                <h4 className="work-title">{area.title}</h4>
                <p className="work-tech">{area.tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="education-section"
        >
          <h3 className="section-title">Education</h3>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker">
                  <GraduationCap size={18} />
                </div>
                <div className="education-content">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-period">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
