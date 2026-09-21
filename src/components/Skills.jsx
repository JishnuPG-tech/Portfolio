import React from 'react';
import { FiCpu, FiLayout, FiServer, FiDatabase } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Machine Learning & AI',
      code: 'ML/AI',
      icon: <FiCpu className="field-icon" />,
      description: 'Physics-informed neural networks, non-linear regression, and empirical model validation.',
      skills: [
        'Physics-Informed ML',
        'Dual-Inference Routing',
        'TensorFlow & Keras',
        'Scikit-learn',
        'Multi-Output Regression',
        'Pandas & NumPy',
        'Model Benchmarking',
      ],
    },
    {
      category: 'Frontend & Mobile',
      code: 'UI/UX',
      icon: <FiLayout className="field-icon" />,
      description: 'Responsive, accessible web interfaces and native edge-to-edge mobile apps.',
      skills: [
        'React 18 / 19',
        'Next.js 14 (App Router)',
        'Jetpack Compose (Android)',
        'TypeScript',
        'Tailwind CSS',
        'Recharts & Plotly.js',
        'Web Accessibility (a11y)',
      ],
    },
    {
      category: 'Backend & Systems',
      code: 'SYS/API',
      icon: <FiServer className="field-icon" />,
      description: 'High-throughput asynchronous APIs, real-time WebSockets, and mathematical calculation logic.',
      skills: [
        'FastAPI (Python)',
        'Python 3.11+',
        'WebSockets & Streaming',
        'Docker Containerization',
        'KSEB Tariff Engines',
        'RESTful Microservices',
        'Linux / Shell Scripting',
      ],
    },
    {
      category: 'Databases & Infrastructure',
      code: 'DATA/OPS',
      icon: <FiDatabase className="field-icon" />,
      description: 'Relational database schema modeling, SQL query tuning, and cloud persistence.',
      skills: [
        'PostgreSQL',
        'Supabase (Auth & DB)',
        'SQL Optimization',
        'Database Migrations',
        'Git Branch Workflows',
        'Lighthouse Web Vitals',
        'CI/CD Pipelines',
      ],
    },
  ];

  return (
    <section id="skills" className="skills-fieldguide-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">02 / Technical Discipline</span>
          <h2 className="section-title">Core Competencies & Stack</h2>
          <p className="section-subtitle">
            A structured catalogue of languages, frameworks, and specialized AI architectures implemented
            across verified projects.
          </p>
        </div>

        <div className="skills-fieldguide-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="fieldguide-card">
              <div className="card-topline">
                <div className="cat-icon-cluster">
                  {cat.icon}
                  <span className="cat-title">{cat.category}</span>
                </div>
                <span className="cat-code">{cat.code}</span>
              </div>

              <p className="cat-dek">{cat.description}</p>

              <div className="cat-tags-list">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="fieldguide-tag">
                    {skill}
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

export default Skills;
