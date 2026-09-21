import React from 'react';
import { Layers, Brain, Eye, Gauge, Code2 } from 'lucide-react';
import './EngineeringFocus.css';

const EngineeringFocus = () => {
  const focuses = [
    {
      icon: Brain,
      title: 'Physics-Informed ML',
      description: 'Domain physics constraints paired with deep learning. Why physics + neural networks outperform pure data-driven approaches.',
    },
    {
      icon: Layers,
      title: 'System Architecture',
      description: 'Scalable foundations over fragile prototypes. Clear boundaries, modular contracts, and resilience under real-world traffic.',
    },
    {
      icon: Eye,
      title: 'Explainable AI & Auditing',
      description: 'Transparent systems users and regulators can trust. No inscrutable black boxes; verifiable mathematical logic throughout.',
    },
    {
      icon: Gauge,
      title: 'Latency & Precision',
      description: 'Sub-20ms inference pipelines, lean bundles, and deterministic calculations on linear appliances and tariff brackets.',
    },
    {
      icon: Code2,
      title: 'Code Craftsmanship',
      description: 'Type-safe contracts, atomic git discipline, thorough testing, and clean maintainable codebases.',
    },
  ];

  return (
    <section className="engineering-focus-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">00 / Philosophy</span>
          <h2 className="section-title">Core Engineering Principles</h2>
          <p className="section-subtitle">
            The foundational discipline guiding decisions from initial mathematical formulation to high-throughput production deployment.
          </p>
        </div>

        <div className="focus-grid-editorial">
          {focuses.map((focus, index) => {
            const Icon = focus.icon;
            return (
              <div key={index} className="focus-card-editorial">
                <div className="focus-icon-wrap">
                  <Icon size={24} className="focus-icon-svg" />
                </div>
                <h3 className="focus-title">{focus.title}</h3>
                <p className="focus-dek">{focus.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringFocus;
