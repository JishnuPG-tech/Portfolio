# Jishnu P G - Full Stack Developer & ML Specialist Portfolio

Welcome to my professional portfolio! This repository showcases my expertise in full-stack development, machine learning, and data science through detailed project documentation and case studies.

## 🚀 About Me

I'm a final-year **BCA student** at Yuvakshetra Institute of Management Studies (YIMS), Palakkad, with a passion for building intelligent solutions that solve real-world problems. My technical journey spans:

- **Full-Stack Web Development** (React, Next.js, TypeScript)
- **Machine Learning & AI** (TensorFlow, Keras, Scikit-learn)
- **Backend Development** (FastAPI, Python)
- **Data Science & Analytics** (Pandas, NumPy)

## 📋 Featured Project

### SmartWatt AI - Physics-Informed Hybrid AI System for Residential Energy Estimation

**Problem/Context:** Solved the "Linear Load Paradox" in residential energy estimation where pure AI models failed on linear loads (<31% accuracy) and traditional calculators missed aging appliance degradation.

**Solution:** Engineered a Physics-Informed Hybrid AI system for appliance-wise energy estimation, achieving remarkable accuracy improvements across all appliance types.

#### Key Achievements

| Appliance Type | Model Accuracy | Improvement | Key Insight |
|---|---|---|---|
| Refrigerators | 94.5% | +14.2% vs. Pure AI | Captures efficiency degradation in complex loads |
| Air Conditioners | 87.6% | +12.9% vs. Pure AI | Predicts duty cycle variations accurately |
| Ceiling Fans | 82.9% | +52.2% vs. Pure AI | Recovers linear load accuracy through physics constraints |
| LED Lights | 86.0% | +65.9% vs. Pure AI | Eliminates AI hallucination with physics enforcement |

**Linear Load Precision:** Achieved 98% accuracy on linear load predictions by enforcing physics constraints (Efficiency = 1.0), ensuring explainable and trustworthy predictions.

#### Technical Architecture

- **Dual-Inference Engine:** Dynamically switches between:
  - Neural Networks for complex non-linear loads (AC, Refrigerator)
  - Physics-Enforced Logic Gates for linear loads (Fans, Lights, Iron)

- **Multi-Output Regression:** Predicts both:
  - Efficiency Factor (age/star degradation)
  - Effective Duty Cycle (compressor on/off time)

- **KSEB Tariff Engine:** Compliant with 2024-25 Kerala electricity billing standards with telescopic slab calculations

#### Technology Stack

**Frontend:**
- Next.js 14 (App Router)
- React 19
- TypeScript
- Tailwind CSS

**Backend:**
- FastAPI (Python)
- TensorFlow/Keras (Neural Networks)
- Scikit-learn (Machine Learning)
- Pandas/NumPy (Data Processing)

**Database:**
- PostgreSQL
- Supabase

**ML Techniques:**
- Physics-Informed ML
- Multi-Output Regression
- Neural Network Optimization
- Physics-Enforced Logic

#### Key Innovations

1. **Hybrid Engine Architecture** - Combines AI and physics for optimal predictions
2. **Multi-Output Prediction** - Captures hidden variables like thermal leakage
3. **Physics-Constrained Learning** - Prevents AI hallucination on deterministic loads
4. **User Intent Override** - Respects manual inputs while maintaining physics integrity

#### Project Metrics

- **Prediction Accuracy:** 82.9% - 94.5% across appliance types
- **Linear Load Precision:** 98% with physics constraints
- **Aging Appliance Detection:** Identifies 18-22% degradation in appliances >7 years
- **Real-time Processing:** Sub-second inference on FastAPI backend
- **User Coverage:** Designed for Kerala household energy patterns

## 📁 Repository Structure

```
Portfolio/
├── README.md                          # This file
├── LICENSE                            # MIT License
├── resume.md                          # ATS-friendly resume
├── index.html                         # Static portfolio page
├── styles.css                         # Portfolio styling
├── script.js                          # Portfolio interactivity
│
├── public/
│   ├── index.html                     # React app entry point
│   └── assets/
│       └── resume.html                # Embedded resume
│
├── src/
│   ├── App.jsx                        # Main React component
│   ├── App.css                        # App styling
│   ├── index.js                       # React DOM entry
│   ├── index.css                      # Global styles
│   │
│   ├── components/
│   │   ├── Navbar.jsx                 # Navigation component
│   │   ├── Hero.jsx                   # Hero section
│   │   ├── About.jsx                  # About section
│   │   ├── Projects.jsx               # Projects showcase
│   │   ├── Skills.jsx                 # Technical skills
│   │   ├── Contact.jsx                # Contact form
│   │   ├── Footer.jsx                 # Footer
│   │   ├── GitHubActivity.jsx         # GitHub integration
│   │   ├── EngineeringFocus.jsx       # Engineering focus
│   │   ├── ResumeDownloadButton.jsx   # Resume download
│   │   ├── EasterEgg.jsx              # Easter egg
│   │   └── [Component].css            # Component styles
│   │
│   └── pages/
│       └── CaseStudy.jsx              # SmartWatt case study
│
├── build/                             # Production build files
├── package.json                       # Project dependencies
├── .gitignore                         # Git ignore rules
└── FUTURE_UPGRADES.md                 # Planned improvements

```

## 🛠️ Technologies & Skills

### Programming Languages
- Python, JavaScript, TypeScript, SQL, C, Java, PHP

### Frontend Development
- React, Next.js, HTML, CSS, Tailwind CSS, Plotly.js

### Backend & ML
- FastAPI, TensorFlow, Keras, Scikit-learn, Pandas, NumPy

### Databases & Tools
- PostgreSQL, Supabase, Git, jsPDF

### Specializations
- Physics-Informed Machine Learning
- Hybrid AI Systems
- Energy Analytics
- Full-Stack Web Development

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/JishnuPG-tech/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm start
```

The portfolio will open at `http://localhost:3000`

### Building for Production

```bash
# Create production build
npm run build

# Serve the build
npm install -g serve
serve -s build
```

## 📊 Key Project Insights

### The Linear Load Paradox Problem

Traditional energy estimation faced a fundamental contradiction:
- **Pure AI Models:** Excellent at learning complex appliance behaviors but hallucinate on simple deterministic loads
- **Physics Calculators:** Perfect for static loads but fail to capture aging-related efficiency degradation

### SmartWatt's Solution

By implementing a hybrid approach that:
1. Uses AI only for complex, non-linear appliances
2. Enforces physics laws for simple, linear appliances
3. Predicts hidden variables (degradation factors, duty cycles)
4. Respects user intent while maintaining scientific accuracy

Result: **52-66% accuracy improvement** over pure AI baselines!

## 🎓 Key Learnings

- **Physics-Informed ML** is superior for engineering domains where domain knowledge is available
- **Hybrid architectures** can leverage strengths of both AI and traditional methods
- **Explainability matters** - users trust predictions they can understand
- **Real-world constraints** (aging appliances, user behavior) are crucial for practical systems

## 📞 Contact & Connect

- **Email:** jishnupg2005@gmail.com
- **Phone:** +91 8590731979
- **Location:** Palakkad, Kerala, India
- **GitHub:** [@JishnuPG-tech](https://github.com/JishnuPG-tech)
- **LinkedIn:** [Connect with me](#)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **YIMS Palakkad** - For educational support and resources
- **Calicut University** - Curriculum guidance
- **Open Source Community** - For excellent libraries and frameworks
- **Energy Analytics Community** - For inspiration and insights

## 📈 Future Roadmap

See [FUTURE_UPGRADES.md](FUTURE_UPGRADES.md) for planned enhancements including:
- Mobile app for iOS/Android
- Real-time IoT device integration
- Advanced visualizations
- Community energy analytics dashboard
- Comparative analysis across regions

## 📝 Notes

This portfolio represents my current capabilities and interests. I'm continuously learning and exploring new technologies. Feel free to reach out for collaborations, feedback, or opportunities!

---

**Last Updated:** December 2025  
**Portfolio Version:** 2.0 (ATS-Optimized)  
**Status:** Active Development
