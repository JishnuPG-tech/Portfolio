import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {
  ArrowUpRight, ArrowRight, BrainCircuit, CheckCircle2, Code2, Download,
  Github, Linkedin, Mail, Menu, Moon, Sun, X, Smartphone, Server, Sparkles
} from 'lucide-react';
import './App.css';
import CaseStudy from './pages/CaseStudy';

const projects = [
  {
    id: '01',
    name: 'SmartWatt AI',
    type: 'AI / Research',
    description: 'A hybrid energy intelligence system combining deterministic physics with neural inference.',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    href: '/smartwatt',
    repo: 'https://github.com/JishnuPG-tech/SmartWatt',
    featured: true
  },
  {
    id: '02',
    name: 'Omniroute',
    type: 'AI Infrastructure',
    description: 'Routing infrastructure for AI coding clients, agents, and model endpoints.',
    tags: ['Node.js', 'APIs', 'WebSockets'],
    repo: 'https://github.com/JishnuPG-tech/Omniroute'
  },
  {
    id: '03',
    name: 'OpenCode-Web',
    type: 'Developer Platform',
    description: 'A mobile-first interface for hosted coding agents and terminal workflows.',
    tags: ['Expo', 'React Native', 'Linux'],
    repo: 'https://github.com/JishnuPG-tech'
  },
  {
    id: '04',
    name: 'InstaFlow',
    type: 'Android',
    description: 'A native media utility built around metadata, downloads, and FFmpeg processing.',
    tags: ['Kotlin', 'Compose', 'FFmpeg'],
    repo: 'https://github.com/JishnuPG-tech'
  }
];

const capabilities = [
  { icon: BrainCircuit, title: 'AI Engineering', text: 'Applied ML, neural systems, inference pipelines.' },
  { icon: Code2, title: 'Full Stack', text: 'React, APIs, data flows, production interfaces.' },
  { icon: Smartphone, title: 'Android', text: 'Kotlin, Compose, native tooling and media.' },
  { icon: Server, title: 'Infrastructure', text: 'Linux, deployment, agents, routing and automation.' }
];

const navItems = [['work', 'Work'], ['about', 'About'], ['stack', 'Stack'], ['contact', 'Contact']];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px' }
    );
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function PortfolioHome({ isDark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  useReveal();

  const closeMenu = () => setMenuOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jishnupg2005@gmail.com');
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1600);
    } catch {
      window.location.href = 'mailto:jishnupg2005@gmail.com';
    }
  };

  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <a className="logo" href="#top" onClick={closeMenu} aria-label="Jishnu P G">
            <span>JPG</span>
            <strong>Jishnu P G</strong>
          </a>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="round-btn desktop-only" href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a className="round-btn desktop-only" href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <button className="round-btn" onClick={toggleTheme} aria-label="Toggle theme">{isDark ? <Sun size={17} /> : <Moon size={17} />}</button>
            <button className="round-btn menu-btn" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-orb" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="availability" data-reveal>
              <span className="status-dot" /> AI Engineer · Full-Stack Developer · Android Builder
            </div>
            <h1 data-reveal>Building <em>intelligent</em><br className="desktop-break" /> products, not just demos.</h1>
            <p className="hero-copy" data-reveal>
              I’m Jishnu P G. I build AI-native software, developer tools, web products, and Android apps with a focus on useful systems, clean interfaces, and fast execution.
            </p>
            <div className="hero-cta" data-reveal>
              <a className="btn btn-dark" href="#work">View selected work <ArrowRight size={16} /></a>
              <a className="btn btn-light" href="/assets/resume.html" target="_blank" rel="noreferrer"><Download size={15} /> Resume</a>
            </div>
            <div className="hero-meta" data-reveal>
              <span>Based in Kerala, India</span>
              <span>Open to remote opportunities</span>
              <span>2026 · BCA Graduate</span>
            </div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="container">
            <div className="section-intro" data-reveal>
              <span className="eyebrow">01 / Selected work</span>
              <h2>Small set. <em>Real systems.</em></h2>
              <p>I prefer showing the projects that best explain how I solve problems rather than filling the page with everything I have built.</p>
            </div>

            <article className="featured-work" data-reveal>
              <div className="featured-visual">
                <div className="grid-glow" />
                <div className="visual-caption">SMARTWATT / HYBRID INFERENCE</div>
                <div className="energy-ui">
                  <div className="energy-top"><span>HOUSEHOLD LOAD</span><span>LIVE MODEL</span></div>
                  <strong>7.82 <small>kWh</small></strong>
                  <div className="energy-track"><i /></div>
                  <div className="energy-bottom"><span>PHYSICS GATE</span><span>NEURAL ROUTE</span></div>
                </div>
                <span className="floating-node node-one">INPUT</span>
                <span className="floating-node node-two">ROUTER</span>
                <span className="floating-node node-three">OUTPUT</span>
              </div>
              <div className="featured-info">
                <div className="project-number">01 · FLAGSHIP</div>
                <h3>SmartWatt AI</h3>
                <p className="project-role">Physics-informed energy intelligence</p>
                <p>{projects[0].description}</p>
                <div className="project-stats">
                  <div><strong>94.5%</strong><span>reported accuracy</span></div>
                  <div><strong>&lt;20ms</strong><span>reported target</span></div>
                  <div><strong>Hybrid</strong><span>inference model</span></div>
                </div>
                <div className="tag-list">{projects[0].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <Link className="text-btn accent" to="/smartwatt">Case study <ArrowUpRight size={15} /></Link>
                  <a className="text-btn" href={projects[0].repo} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
                </div>
              </div>
            </article>

            <div className="work-list">
              {projects.slice(1).map(project => (
                <article className="work-row" data-reveal key={project.name}>
                  <span className="work-id">{project.id}</span>
                  <div className="work-main">
                    <span className="work-type">{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="work-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="row-arrow" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={18} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-layout">
            <div data-reveal>
              <span className="eyebrow">02 / About</span>
              <h2>I like difficult problems with <em>visible outcomes.</em></h2>
            </div>
            <div className="about-copy" data-reveal>
              <p className="large">My work sits between AI engineering, full-stack development, developer tooling, and Android.</p>
              <p>I care about the complete path from idea to usable product: architecture, models, APIs, interfaces, deployment, and the details that make software feel finished.</p>
              <p>I’m especially interested in AI systems that solve practical problems instead of existing only as impressive demos.</p>
              <div className="about-line"><Sparkles size={15} /> Build small · learn fast · ship useful</div>
            </div>
          </div>

          <div className="container capability-grid">
            {capabilities.map(({ icon: Icon, title, text }, index) => (
              <div className="capability" data-reveal key={title}>
                <span className="cap-number">0{index + 1}</span>
                <Icon size={18} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="container">
            <div className="section-intro" data-reveal>
              <span className="eyebrow">03 / Stack</span>
              <h2>Tools I use to <em>move.</em></h2>
            </div>
            <div className="stack-cloud" data-reveal>
              {['Python', 'TensorFlow', 'React', 'TypeScript', 'Kotlin', 'Jetpack Compose', 'FastAPI', 'Node.js', 'MySQL', 'Git', 'Linux', 'Docker', 'Hugging Face', 'Vercel', 'Framer Motion'].map((item, i) => (
                <span key={item} className={i % 5 === 0 ? 'stack-pill featured-pill' : 'stack-pill'}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card" data-reveal>
            <div>
              <span className="eyebrow">04 / Contact</span>
              <h2>Let’s build something <em>useful.</em></h2>
              <p>For roles, collaborations, or project discussions, email is the fastest route.</p>
            </div>
            <div className="contact-actions">
              <button className="email-button" onClick={copyEmail}><Mail size={17} /><span>{emailCopied ? 'Email copied' : 'jishnupg2005@gmail.com'}</span></button>
              <div className="social-links">
                <a href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
                <a href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Jishnu P G</span>
          <span>AI · Full Stack · Android</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>

      <div className="mobile-cta">
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/smartwatt" element={<CaseStudy isDark={isDark} />} />
        <Route path="*" element={<PortfolioHome isDark={isDark} toggleTheme={() => setIsDark(v => !v)} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
