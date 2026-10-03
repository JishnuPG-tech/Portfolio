import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {
  ArrowUpRight, ArrowRight, BrainCircuit, Code2, Download,
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
  { icon: Smartphone, title: 'Android', text: 'Kotlin, Compose, native media workflows.' },
  { icon: Server, title: 'Infrastructure', text: 'Self-hosting, terminals, routing, automation.' }
];

const stack = [
  'Python', 'TensorFlow', 'FastAPI', 'React', 'JavaScript', 'TypeScript',
  'Kotlin', 'Jetpack Compose', 'React Native', 'Node.js', 'PostgreSQL',
  'GitHub', 'Docker', 'Linux', 'FFmpeg', 'Supabase'
];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('work');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = ['work', 'about', 'stack', 'contact'];
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55%', threshold: 0 }
    );
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jishnupg2005@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = 'mailto:jishnupg2005@gmail.com';
    }
  };

  const nav = ['work', 'about', 'stack', 'contact'];

  return (
    <div className="app-shell">
      <header className="header">
        <div className="header-inner">
          <a className="logo" href="#top" onClick={() => setMenuOpen(false)}>
            <span>JPG</span><strong>Jishnu P G</strong>
          </a>

          <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
            {nav.map(item => (
              <a key={item} href={'#' + item} className={active === item ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="round-btn desktop-only" href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a className="round-btn desktop-only" href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <button className="round-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="round-btn menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-orb" aria-hidden="true" />
          <div className="container hero-inner">
            <span className="eyebrow" data-reveal>BCA Graduate · 2026 · AI / Full Stack / Android</span>
            <div className="availability" data-reveal><span className="status-dot" /> Building, learning and shipping from Kerala</div>
            <h1 data-reveal>Building <em>intelligent</em> products that feel simple.</h1>
            <p className="hero-copy" data-reveal>
              I’m <strong>Jishnu P G</strong>, an AI engineer and full-stack developer focused on turning complex systems into useful products. I build AI infrastructure, engineering tools, and Android experiences.
            </p>
            <div className="hero-cta" data-reveal>
              <a className="btn btn-dark" href="#work">Explore work <ArrowDownIcon /></a>
              <a className="btn btn-light" href="/assets/resume.html" target="_blank" rel="noreferrer"><Download size={15} /> Resume</a>
            </div>
            <div className="hero-meta" data-reveal>
              <span>AI Systems</span><span>Full Stack</span><span>Android</span><span>Open Source</span>
            </div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="container">
            <div className="section-intro" data-reveal>
              <span className="eyebrow">Selected work</span>
              <h2>Systems built to <em>ship.</em></h2>
              <p>A small selection of software projects spanning AI, infrastructure, developer tools and native Android.</p>
            </div>

            <article className="featured-work" data-reveal>
              <div className="featured-visual">
                <span className="visual-caption">SMARTWATT / HYBRID INFERENCE</span>
                <div className="grid-glow" />
                <div className="energy-ui">
                  <div className="energy-top"><span>MODEL OUTPUT</span><span>LIVE</span></div>
                  <strong>94.5% <small>ACCURACY</small></strong>
                  <div className="energy-track"><i /></div>
                  <div className="energy-bottom"><span>PHYSICS + NEURAL</span><span>v1.0</span></div>
                </div>
                <span className="floating-node node-one">PHYSICS</span>
                <span className="floating-node node-two">NEURAL</span>
                <span className="floating-node node-three">KSEB</span>
              </div>
              <div className="featured-info">
                <span className="project-number">01 / FEATURED</span>
                <h3>SmartWatt AI</h3>
                <p className="project-role">Physics-informed energy intelligence</p>
                <p>Combines deterministic electrical physics with neural inference to estimate appliance-level energy use and keep predictions explainable.</p>
                <div className="project-stats"><div><strong>94.5%</strong><span>peak reported accuracy</span></div><div><strong>98%</strong><span>linear-load precision</span></div><div><strong>&lt;1s</strong><span>target inference</span></div></div>
                <div className="tag-list">{projects[0].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links"><Link className="text-btn accent" to="/smartwatt">Read case study <ArrowUpRight size={14} /></Link><a className="text-btn" href={projects[0].repo} target="_blank" rel="noreferrer">Repository <Github size={14} /></a></div>
              </div>
            </article>

            <div className="work-list">
              {projects.slice(1).map(project => (
                <article className="work-row" key={project.id} data-reveal>
                  <span className="work-id">{project.id}</span>
                  <div className="work-main"><span className="work-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p></div>
                  <div className="work-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="row-arrow" href={project.repo} target="_blank" rel="noreferrer" aria-label={'Open ' + project.name}><ArrowUpRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <div className="about-layout">
              <div data-reveal><span className="eyebrow">About</span><h2>Curious by default.<br /><em>Practical</em> by design.</h2></div>
              <div className="about-copy" data-reveal>
                <p className="large">I like understanding how things work, then turning that understanding into software people can actually use.</p>
                <p>My work sits between AI engineering, full-stack development and Android. I enjoy building the connective tissue around models too: APIs, data pipelines, interfaces, deployment systems and developer tooling.</p>
                <p>I’m currently finishing my BCA and building projects that push me deeper into applied AI and production engineering.</p>
                <span className="about-line"><Sparkles size={12} /> Learn · Build · Measure · Iterate</span>
              </div>
            </div>
            <div className="capability-grid">
              {capabilities.map(({icon: Icon, title, text}, index) => <div className="capability" key={title} data-reveal><span className="cap-number">0{index + 1}</span><Icon size={19} /><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="container">
            <div className="section-intro" data-reveal><span className="eyebrow">Engineering stack</span><h2>Tools I use to <em>build.</em></h2></div>
            <div className="stack-cloud" data-reveal>{stack.map((item, i) => <span className={'stack-pill ' + (i < 5 ? 'featured-pill' : '')} key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-card" data-reveal>
              <div><span className="eyebrow">Contact</span><h2>Have a problem worth <em>building?</em></h2><p>For collaboration, software projects, AI engineering, or just a good technical conversation.</p></div>
              <div className="contact-actions"><button className="email-button" onClick={copyEmail}><Mail size={16} /><span>{copied ? 'Email copied' : 'jishnupg2005@gmail.com'}</span><ArrowRight size={14} /></button><div className="social-links"><a href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a><a href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a></div></div>
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-cta"><a href="#work">Work</a><a href="#contact">Contact</a></div>

      <footer className="footer"><div className="container footer-inner"><span>Jishnu P G</span><span>AI · Full Stack · Android</span><span>© 2026</span></div></footer>
    </div>
  );
}

function ArrowDownIcon() {
  return <ArrowRight size={15} />;
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/smartwatt" element={<CaseStudy />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}