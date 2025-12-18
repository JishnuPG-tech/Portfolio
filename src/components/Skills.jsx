import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Zap } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'HTML/CSS',
        'JavaScript',
        'Tailwind CSS',
      ],
    },
    {
      category: 'Backend',
      skills: ['Python', 'FastAPI', 'PHP', 'Java', 'SQL', 'PostgreSQL'],
    },
    {
      category: 'Machine Learning',
      skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Android Development', 'Plotly', 'DBMS', 'Linux/Unix'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Proficient in a diverse range of technologies and frameworks
          </p>
          <p className="section-description">
            Technologies I have used in real projects or hands-on implementations.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((categoryData, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="skill-category"
            >
              <h3 className="category-title">{categoryData.category}</h3>
              <motion.div
                className="skill-items"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {categoryData.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="skill-item"
                  >
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-highlight"
        >
          <div className="highlight-item">
            <Monitor className="icon" />
            <div>
              <h4>Full Stack Development</h4>
              <p>
                Building end-to-end solutions with modern frameworks and best practices
              </p>
            </div>
          </div>
          <div className="highlight-item">
            <Cpu className="icon" />
            <div>
              <h4>Machine Learning</h4>
              <p>
                Developing ML models for real-world applications and data analytics
              </p>
            </div>
          </div>
          <div className="highlight-item">
            <Zap className="icon" />
            <div>
              <h4>Performance Optimization</h4>
              <p>
                Creating fast, scalable applications with focus on user experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
