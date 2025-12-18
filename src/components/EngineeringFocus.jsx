import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Brain, Eye, Gauge, Code2 } from 'lucide-react';
import './EngineeringFocus.css';

const EngineeringFocus = () => {
  const focuses = [
    {
      icon: Layers,
      title: 'System Design',
      description: 'Scalable architecture over quick prototypes. Clean abstractions that grow with complexity.',
    },
    {
      icon: Brain,
      title: 'Hybrid AI',
      description: 'Data-driven ML plus domain knowledge. Why physics + neural networks beat pure ML.',
    },
    {
      icon: Eye,
      title: 'Explainable AI',
      description: 'Systems that users understand. No black boxes. Interpretability matters.',
    },
    {
      icon: Gauge,
      title: 'Performance',
      description: 'Frontend optimization, API efficiency, real-time processing. Sub-100ms latency counts.',
    },
    {
      icon: Code2,
      title: 'Code Quality',
      description: 'Maintainable and modular codebases. Future-proof implementations.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="engineering-focus">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Engineering Focus</h2>
          <p className="section-subtitle">
            Core principles that guide my development approach
          </p>
        </motion.div>

        <motion.div
          className="focus-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {focuses.map((focus, index) => {
            const Icon = focus.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="focus-card"
              >
                <div className="focus-icon">
                  <Icon size={32} />
                </div>
                <h3>{focus.title}</h3>
                <p>{focus.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringFocus;
