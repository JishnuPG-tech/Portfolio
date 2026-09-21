import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jishnupg2005@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      access_key: '18c50e21-3fcb-402b-9747-3397d1d49349',
      ...formData,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      }).then((r) => r.json());

      if (res.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-editorial-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">04 / Correspondence</span>
          <h2 className="section-title">Initiate Contact & Collaboration</h2>
          <p className="section-subtitle">
            Available for software engineering roles, AI consulting, or technical systems dialogue.
          </p>
        </div>

        <div className="contact-editorial-grid">
          {/* Left Column: Direct Inquiries */}
          <div className="contact-inquiry-card">
            <h3 className="inquiry-headline">Let’s engineer something exceptional together.</h3>
            <p className="inquiry-dek">
              Based in Palakkad, Kerala — open to local, hybrid, and remote engineering opportunities.
            </p>

            <div className="inquiry-details-list">
              <div className="inquiry-item" onClick={handleCopyEmail}>
                <div className="inquiry-icon-box">
                  <FiMail className="inquiry-icon" />
                </div>
                <div className="inquiry-meta">
                  <span className="inquiry-label">Direct Email</span>
                  <span className="inquiry-val">jishnupg2005@gmail.com</span>
                </div>
                <button className="copy-chip-btn" title="Copy email address" aria-label="Copy email">
                  {copiedEmail ? <FiCheck color="#788C5D" /> : <FiCopy />}
                </button>
              </div>

              <a href="tel:+918590731979" className="inquiry-item link">
                <div className="inquiry-icon-box">
                  <FiPhone className="inquiry-icon" />
                </div>
                <div className="inquiry-meta">
                  <span className="inquiry-label">Telephone</span>
                  <span className="inquiry-val">+91 85907 31979</span>
                </div>
              </a>

              <div className="inquiry-item">
                <div className="inquiry-icon-box">
                  <FiMapPin className="inquiry-icon" />
                </div>
                <div className="inquiry-meta">
                  <span className="inquiry-label">Primary Location</span>
                  <span className="inquiry-val">Palakkad, Kerala, India</span>
                </div>
              </div>
            </div>

            <div className="inquiry-networks">
              <span className="network-label">Verified Networks:</span>
              <div className="network-links">
                <a
                  href="https://github.com/JishnuPG-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="network-btn"
                >
                  <FiGithub size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jishnupg2005/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="network-btn"
                >
                  <FiLinkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="editorial-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Eleanor Vance"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. eleanor@company.org"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Project or Opportunity Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe the engineering role, system architecture, or inquiry..."
                  rows={5}
                  required
                  className="form-input textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary submit-btn"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <FiSend size={15} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-alert success">
                  <FiCheck size={16} />
                  <span>Message delivered successfully. I will respond within 24 hours.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-alert error">
                  <span>Unable to dispatch message. Please email directly at jishnupg2005@gmail.com.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
