/**
 * RESUME DOWNLOAD BUTTON COMPONENT
 * 
 * Simple 1-click resume download for recruiters
 * Status: Ready to implement (easiest upgrade)
 * Priority: Quick Win
 * 
 * Installation:
 * Option A (Simplest): Just add a static PDF link
 * Option B (Dynamic): npm install html2pdf.js
 */

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiFile } from 'react-icons/fi';
import './ResumeDownload.css';

/**
 * OPTION A: Static PDF Download (RECOMMENDED - Easiest)
 * 
 * 1. Add resume PDF to: public/assets/Jishnu_PG_Resume.pdf
 * 2. Use this component:
 */
const ResumeDownloadButton = () => {
  return (
    <motion.a
      href="/assets/Jishnu_PG_Resume.pdf"
      download="Jishnu_PG_Resume.pdf"
      className="btn btn-download"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiDownload size={20} />
      Download Resume
    </motion.a>
  );
};

/**
 * OPTION B: Dynamic Generation (Advanced)
 * Uses html2pdf to generate from page content
 * Uncomment if you want more control
 */
// import html2pdf from 'html2pdf.js';
// 
// const ResumeDownloadButtonDynamic = () => {
//   const handleDownload = () => {
//     const element = document.getElementById('resume-content');
//     const opt = {
//       margin: 10,
//       filename: 'Jishnu_PG_Resume.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
//     };
//     html2pdf().set(opt).from(element).save();
//   };
//
//   return (
//     <button onClick={handleDownload} className="btn btn-download">
//       <FiDownload size={20} />
//       Download Resume
//     </button>
//   );
// };

export default ResumeDownloadButton;

/**
 * USAGE IN NAVBAR:
 * 
 * import ResumeDownloadButton from './ResumeDownloadButton';
 * 
 * <div className="nav-actions">
 *   <ResumeDownloadButton />
 *   <button className="theme-toggle" onClick={toggleTheme}>
 *     {isDark ? <FiSun /> : <FiMoon />}
 *   </button>
 * </div>
 */

/**
 * USAGE IN CONTACT SECTION:
 * 
 * <motion.div className="contact-cta">
 *   <p>Want to work together?</p>
 *   <div className="contact-buttons">
 *     <ResumeDownloadButton />
 *     <a href="mailto:jishnupg2005@gmail.com" className="btn btn-primary">
 *       Send Email
 *     </a>
 *   </div>
 * </motion.div>
 */

/**
 * STEP-BY-STEP IMPLEMENTATION:
 * 
 * 1. Create public/assets/ folder if it doesn't exist
 * 2. Add your resume PDF: public/assets/Jishnu_PG_Resume.pdf
 * 3. Import component where needed (Navbar or Contact section)
 * 4. That's it! ✅
 * 
 * Optional tracking (Google Analytics):
 * 
 * const handleDownload = () => {
 *   if (window.gtag) {
 *     gtag('event', 'file_download', {
 *       file_name: 'Jishnu_PG_Resume.pdf'
 *     });
 *   }
 *   window.location.href = '/assets/Jishnu_PG_Resume.pdf';
 * };
 */
