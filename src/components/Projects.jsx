import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Zap, HelpCircle, Brain, TrendingUp } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SmartWatt AI',
      subtitle: 'Physics-Informed Hybrid Energy Estimator',
      problem: 'The "Linear Load Paradox": Traditional calculators fail to capture aging degradation in appliances (assuming perfect efficiency), while pure AI models "hallucinate" on static linear loads (fans, lights) due to lack of pattern, achieving <31% accuracy.',
      solution: 'Developed a novel Physics-Informed Hybrid AI Architecture. A Dual-Inference Engine dynamically switches strategies: Multi-Output Neural Networks predict "Efficiency Factors" for complex loads (AC, Fridge), while Physics-Enforced Logic Gates handles linear loads (Fans) to eliminate AI noise.',
      technologies: [
        'Python',
        'FastAPI',
        'TensorFlow/Keras',
        'Next.js 14',
        'TypeScript',
        'Physics-Informed ML',
        'PostgreSQL',
        'Supabase',
      ],
      impact: [
        '94.5% Accuracy on Refrigerators (+14.2% vs Pure AI)',
        '86.0% Accuracy on LED Lights (+65.9% vs Pure AI)',
        'Recovered Linear Load precision from 30% to ~98%',
        'Captured 18-22% hidden power spread in aging appliances',
        'Built full-stack verified "Wizard" workflow for Kerala context',
        'Deployed production-ready Architecture with <20ms latency',
      ],
      image: 'Zap',
      link: '/smartwatt',
      github: 'https://github.com/JishnuPG-tech',
      featured: true,
      role: 'Project Head & Lead Developer',
      keyInnovations: [
        'Dual-Inference Engine: Hybrid switching between Neural Networks and Physics Logic',
        'Multi-Output Regression: Simultaneously predicts Efficiency Degradation and Duty Cycles',
        'User Intent Override: Respects manual user inputs as temporal ground truth',
        'Physics-Enforced Constraints:Mathematically guarantees 0% error for fixed linear loads',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            In-depth case studies of my full-stack and AI systems
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.image === 'Zap' && <Zap className="icon-header" />}
                </div>
                <div className="project-actions">
                  <Link
                    to="/smartwatt"
                    className="project-link"
                    title="View Case Study"
                  >
                    <FiExternalLink size={20} />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="GitHub Repository"
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              {project.role && <p className="project-role">{project.role}</p>}

              <div className="project-details">
                <div className="detail-item">
                  <HelpCircle className="icon" />
                  <div>
                    <p className="detail-label">Challenge</p>
                    <p className="detail-text">{project.problem}</p>
                  </div>
                </div>

                <div className="detail-item">
                  <Brain className="icon" />
                  <div>
                    <p className="detail-label">Solution</p>
                    <p className="detail-text">{project.solution}</p>
                  </div>
                </div>

                <div className="detail-item">
                  <TrendingUp className="icon" />
                  <div>
                    <p className="detail-label">Impact & Results</p>
                    <ul className="impact-list">
                      {project.impact.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-cta"
        >
          <p>Interested in more? Check out my GitHub for additional projects</p>
          <a href="https://github.com/JishnuPG-tech" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View All Projects on GitHub
            <FiExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
