# Portfolio Future Upgrades Roadmap

## Optional Enhancements (Priority Order)

### 1. ✨ SmartWatt Case Study Page
**Why:** Deep dive into your flagship project shows technical depth to recruiters

**What to add:**
- Dedicated `/smartwatt` route
- Problem statement with graphs
- Architecture diagram
- ML model performance metrics
- Before/after energy usage comparisons
- User testimonials (if available)
- Video demo embed

**Tech stack:** React Router v6, Recharts, React Markdown

**Estimated time:** 4-6 hours

**Files to create:**
```
src/pages/CaseStudy.jsx
src/pages/CaseStudy.css
src/components/CaseStudy/
  ├── ProblemStatement.jsx
  ├── Architecture.jsx
  ├── Metrics.jsx
  └── Results.jsx
```

---

### 2. 📊 GitHub Activity Preview
**Why:** Shows consistent learning & contribution activity

**What to add:**
- GitHub contribution graph (last 12 months)
- Recent commits/PRs
- Repository showcase with stars/forks
- Contribution streak

**Tech stack:** GitHub API, Axios, react-github-calendar

**Estimated time:** 2-3 hours

**Implementation:**
```jsx
// Use GitHub REST API
GET https://api.github.com/users/jishnupg/repos
GET https://api.github.com/users/jishnupg/events/public
```

**Files to create:**
```
src/components/GitHubActivity.jsx
src/components/GitHubActivity.css
src/hooks/useGitHubData.js
```

**Libraries to install:**
```bash
npm install axios react-github-calendar
```

---

### 3. 📄 Resume Download Button
**Why:** Easy 1-click resume access for recruiters

**What to add:**
- Download button in Navbar (optional) or Contact section
- PDF generation from resume data
- Multiple format options (PDF, DOCX)
- Tracking (optional) - analytics on downloads

**Tech stack:** jsPDF, html2pdf, or React-to-PDF

**Estimated time:** 1-2 hours

**Implementation:**
```jsx
// Option A: Pre-built PDF (simplest)
import resume from './assets/Jishnu_PG_Resume.pdf';
<a href={resume} download="Jishnu_PG_Resume.pdf" className="btn">
  Download Resume
</a>

// Option B: Generate on-the-fly
import html2pdf from 'html2pdf.js';
const handleDownload = () => {
  html2pdf().set(opt).from(element).save();
};
```

**Files to create:**
```
public/assets/Jishnu_PG_Resume.pdf
src/hooks/useResumeDownload.js
src/components/ResumeDownloadButton.jsx
```

**Libraries to install:**
```bash
npm install html2pdf.js
# OR
npm install jspdf
```

---

## Implementation Priority Matrix

| Feature | Difficulty | Impact | Effort | Priority |
|---------|-----------|--------|--------|----------|
| SmartWatt Case Study | High | Very High | 4-6h | 🔴 First |
| GitHub Activity | Medium | High | 2-3h | 🟡 Second |
| Resume Download | Low | Medium | 1-2h | 🟢 Third |

---

## Quick Start for Each

### SmartWatt Case Study
```bash
# Add React Router
npm install react-router-dom

# Add charts library
npm install recharts
```

Then create a route in App.jsx:
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CaseStudy from './pages/CaseStudy';

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/smartwatt" element={<CaseStudy />} />
</Routes>
```

### GitHub Activity
```bash
npm install axios react-github-calendar
```

Call in a new component:
```jsx
const [repos, setRepos] = useState([]);

useEffect(() => {
  fetch('https://api.github.com/users/jishnupg/repos?sort=updated')
    .then(r => r.json())
    .then(setRepos);
}, []);
```

### Resume Download
```bash
# Already installed: jspdf (check package.json)
# Just add button:
<a href={resumeURL} download className="btn btn-primary">
  📥 Download Resume
</a>
```

---

## Current Portfolio Score

| Aspect | Score | Status |
|--------|-------|--------|
| Core Portfolio | 10/10 | ✅ Complete |
| UI/UX Polish | 10/10 | ✅ Complete |
| Responsiveness | 10/10 | ✅ Complete |
| Content Quality | 10/10 | ✅ Elite |
| **Deployable** | **10/10** | **✅ Ready NOW** |
| Case Study Depth | 7/10 | 📋 Optional |
| GitHub Integration | 6/10 | 📋 Optional |
| Resume Access | 8/10 | 📋 Optional |

---

## Deployment Status

✅ **READY TO DEPLOY TODAY**

All core features complete. These upgrades are nice-to-have enhancements for future iterations.

**Recommended deploy platforms:**
- Vercel (recommended for Next.js/React)
- Netlify
- GitHub Pages

Deployment guide: See `DEPLOYMENT.md`

