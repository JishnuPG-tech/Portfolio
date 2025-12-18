import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import './ResumeDownloadButton.css';

const ResumeDownloadButton = ({ variant = 'default' }) => {
  return (
    <motion.a
      href="/assets/Jishnu_PG_Resume.pdf"
      download="Jishnu_PG_Resume.pdf"
      className={`btn-download ${variant}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Download Resume PDF"
    >
      <FiDownload size={20} />
      Download Resume
    </motion.a>
  );
};

export default ResumeDownloadButton;
