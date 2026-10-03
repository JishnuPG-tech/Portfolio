import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import {
  ArrowUpRight, CheckCircle2, Code2, Download, ExternalLink, Github,
  Linkedin, Mail, Menu, Moon, Sun, X, Zap, Cpu, Layers3, Server,
  Smartphone, BrainCircuit, Database, Activity, ArrowRight, MapPin
} from 'lucide-react';
import './App.css';
import CaseStudy from './pages/CaseStudy';

const projects = [
  {
    name: 'SmartWatt AI',
    category: 'AI / Research',
    featured: true,
    description: 'A physics-informed hybrid energy estimator that combines deterministic appliance rules with neural inference for residential electricity analysis.',
    metrics: ['94.5% reported accuracy', '<20ms target latency', 'Hybrid inference'],
    stack: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    href: '/smartwatt',
    repo: 'https://github.com/JishnuPG-tech/SmartWatt',
  },
  {
    name: 'Hermes-x',
    category: 'AI / Developer Tooling',
    description: 'An AI-native developer workspace focused on model routing, agent workflows, and practical coding automation.',
    stack: ['React', 'TypeScript', 'AI Agents'],
    repo: 'https://github.com/JishnuPG-tech',
  },
  {
    name: 'Omniroute',
    category: 'Infrastructure',
    description: 'A routing layer for AI coding workflows, designed to connect clients, hosted agents, and model endpoints.',
    stack: ['Node.js', 'APIs', 'WebSockets'],
    repo: 'https://github.com/JishnuPG-tech/Omniroute',
  },
  {
    name: 'OpenCode-Web',
    category: 'Developer Platform',
    description: 'A mobile-friendly interface around a hosted coding agent and terminal workflow.',
    stack: ['React Native', 'Expo', 'Linux'],
    repo: 'https://github.com/JishnuPG-tech',
  },
  {
    name: 'InstaFlow',
    category: 'Android',
    description: 'A Kotlin and Jetpack Compose media utility with download workflows, metadata handling, and FFmpeg processing.',
    stack: ['Kotlin', 'Compose', 'FFmpeg'],
    repo: 'https://github.com/JishnuPG-tech',
  },
];

const capabilities = [
  { icon: BrainCircuit, title: 'AI & ML', text: 'Neural networks, applied ML, physics-informed inference, model evaluation.' },
  { icon: Code2, title: 'Frontend', text: 'React, TypeScript, responsive systems, motion, component architecture.' },
  { icon: Server, title: 'Backend', text: 'Python, APIs, WebSockets, async services, data pipelines.' },
  { icon: Smartphone, title: 'Android', text: 'Kotlin, Jetpack Compose, native media and developer tooling.' },
];

const stack = {
  'AI & ML': ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'Applied ML'],
  'Frontend': ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  'Backend & Data': ['FastAPI', 'Node.js', 'REST APIs', 'WebSockets', 'MySQL', 'Supabase'],
  'Infrastructure': ['Git', 'GitHub', 'Linux', 'Docker', 'Hugging Face', 'Vercel'],
};

function PortfolioHome({ isDark, toggleTheme }) {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const sections = useMemo(() => ['home', 'projects', 'about', 'skills', 'activity', 'contact'], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.25, 0.5] }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jishnupg2005@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      window.location.href = 'mailto:jishnupg2005@gmail.com';
    }
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Jishnu P G home">
            <span className="brand-mark">JPG</span>
            <span className="brand-copy"><strong>Jishnu P G</strong><small>AI · Full Stack · Android</small></span>
          </a>

          <nav className={`desktop-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {[
              ['home', 'Overview'], ['projects', 'Systems'], ['about', 'About'],
              ['skills', 'Stack'], ['activity', 'Telemetry'], ['contact', 'Contact']
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={closeMenu}>{label}</a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="icon-button hide-mobile" href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a className="icon-button hide-mobile" href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <button className="icon-button" onClick={toggleTheme} aria-label={isDark ? 'Use light theme' : 'Use dark theme'}>{isDark ? <Sun size={17} /> : <Moon size={17} />}</button>
            <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          {[
            ['home', 'Overview'], ['projects', 'Systems'], ['about', 'About'],
            ['skills', 'Stack'], ['activity', 'Telemetry'], ['contact', 'Contact']
          ].map(([id, label]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}<ArrowUpRight size={15} /></a>)}
          <div className="mobile-nav-socials">
            <a href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="live-dot" /> Available for opportunities · Kerala, India</div>
              <p className="kicker">AI Engineer · Full-Stack Developer · Android Builder</p>
              <h1>Building <em>AI-native systems</em> that people can actually use.</h1>
              <p className="hero-lede">I’m Jishnu P G. I design and ship intelligent products across AI, web, developer tooling, and Android, with a focus on useful architecture and clear user experiences.</p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">Explore systems <ArrowRight size={17} /></a>
                <a className="button secondary" href="/assets/resume.html" target="_blank" rel="noreferrer"><Download size={16} /> View resume</a>
              </div>
              <div className="hero-proof">
                <div><strong>94.5%</strong><span>reported SmartWatt accuracy</span></div>
                <div><strong>&lt;20ms</strong><span>reported inference target</span></div>
                <div><strong>5+</strong><span>active product systems</span></div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-top"><span><span className="traffic-dot red" /><span className="traffic-dot yellow" /><span className="traffic-dot green" /></span><span className="mono">system-preview / 01</span></div>
              <div className="terminal-content">
                <div className="terminal-line muted">// architecture intent</div>
                <div className="terminal-line"><span className="tok-key">const</span> system = <span className="tok-fn">SmartWatt</span>();</div>
                <div className="terminal-line indent"><span className="tok-key">if</span> (load.isLinear) {'{'}</div>
                <div className="terminal-line indent2"><span className="tok-fn">return</span> PhysicsGate(load);</div>
                <div className="terminal-line indent">{'}'} <span className="muted">// deterministic</span></div>
                <div className="terminal-line"><span className="tok-key">else</span> {'{'}</div>
                <div className="terminal-line indent2"><span className="tok-fn">return</span> NeuralInference(load);</div>
                <div className="terminal-line">{'}'}</div>
              </div>
              <div className="panel-status"><CheckCircle2 size={15} /><span>Dual-inference route ready</span><span className="status-value">LIVE</span></div>
            </div>
          </div>
          <div className="hero-scroll container"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-head split-head">
              <div><p className="eyebrow">01 · Selected systems</p><h2>Work that explains<br /><em>how I think.</em></h2></div>
              <p>Product work, infrastructure, AI experiments, and Android tooling. Each project is presented around the problem, system, and measurable result.</p>
            </div>

            <article className="featured-project">
              <div className="project-visual smartwatt-visual">
                <div className="visual-grid" />
                <div className="visual-label">SMARTWATT / HYBRID ENGINE</div>
                <div className="energy-card">
                  <span>ENERGY ESTIMATE</span><strong>7.82 <small>kWh</small></strong><div className="energy-bar"><i /></div><small>Physics gate + neural inference</small>
                </div>
                <div className="mini-node node-a">INPUT</div><div className="mini-node node-b">ROUTER</div><div className="mini-node node-c">MODEL</div>
              </div>
              <div className="featured-copy">
                <div className="project-meta"><span>FLAGSHIP · RESEARCH SYSTEM</span><span>2025–2026</span></div>
                <h3>SmartWatt AI</h3>
                <h4>Physics-Informed Hybrid Energy Estimator</h4>
                <p>Combines deterministic physics for predictable electrical loads with neural inference for non-linear appliance behavior and degradation.</p>
                <div className="metric-row">
                  <div><strong>94.5%</strong><span>reported accuracy</span></div>
                  <div><strong>98%</strong><span>linear-load precision</span></div>
                  <div><strong>&lt;20ms</strong><span>reported latency</span></div>
                </div>
                <div className="tag-row">{projects[0].stack.map(t => <span key={t}>{t}</span>)}</div>
                <div className="project-actions"><Link className="button primary" to="/smartwatt">Read case study <ArrowRight size={16} /></Link><a className="text-link" href={projects[0].repo} target="_blank" rel="noreferrer">Source <ExternalLink size={14} /></a></div>
              </div>
            </article>

            <div className="project-grid">
              {projects.slice(1).map((project, index) => (
                <article className="project-card" key={project.name}>
                  <div className={`project-card-visual visual-${index + 1}`}><span>{String(index + 2).padStart(2, '0')}</span><Layers3 size={30} /></div>
                  <div className="project-card-body">
                    <div className="project-meta"><span>{project.category}</span><span>0{index + 2}</span></div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
                    <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">View source <ExternalLink size={14} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <div className="section-head"><p className="eyebrow">02 · About</p><h2>Engineer first.<br /><em>Product minded.</em></h2></div>
            <div className="about-grid">
              <div className="about-story">
                <p className="lead">I enjoy turning difficult technical problems into systems with a clear path from input to outcome.</p>
                <p>My work sits between AI engineering, full-stack development, developer tooling, and Android. I care about architecture, but I also care about whether the final interface is understandable on a real phone.</p>
                <p>That means building the model, the API, the UI, the data flow, and the operational pieces when the project needs all of them.</p>
                <div className="location-line"><MapPin size={16} /> Kerala, India · Open to remote work</div>
              </div>
              <div className="capability-grid">
                {capabilities.map(({ icon: Icon, title, text }) => <div className="capability" key={title}><Icon size={19} /><h3>{title}</h3><p>{text}</p></div>)}
              </div>
            </div>
            <div className="principles">
              <div><span>01</span><strong>Build the smallest useful system</strong><p>Start from the real user flow, then add complexity only where it creates value.</p></div>
              <div><span>02</span><strong>Make technical decisions visible</strong><p>Use metrics, architecture diagrams, and clear interfaces instead of hiding complexity.</p></div>
              <div><span>03</span><strong>Design for the actual device</strong><p>Every important interaction should remain usable on small screens, slow networks, and touch input.</p></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-head split-head"><div><p className="eyebrow">03 · Engineering stack</p><h2>Tools are means.<br /><em>Systems are the work.</em></h2></div><p>I use a practical stack that lets me move from prototype to deployed product without changing the mental model.</p></div>
            <div className="stack-grid">
              {Object.entries(stack).map(([title, items]) => <article className="stack-card" key={title}><span className="stack-index">0{Object.keys(stack).indexOf(title) + 1}</span><h3>{title}</h3><div className="stack-list">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}
            </div>
          </div>
        </section>

        <section id="activity" className="section activity-section">
          <div className="container">
            <div className="telemetry-panel">
              <div className="telemetry-head"><div><p className="eyebrow">04 · GitHub telemetry</p><h2>Building in public.</h2></div><a className="button secondary" href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer"><Github size={16} /> Open GitHub</a></div>
              <div className="telemetry-grid">
                <div className="telemetry-stat"><span>PUBLIC WORK</span><strong>39+</strong><small>repositories</small></div>
                <div className="telemetry-stat"><span>FOCUS</span><strong>AI</strong><small>agents · ML · tooling</small></div>
                <div className="telemetry-stat"><span>MODE</span><strong>SHIP</strong><small>prototype → product</small></div>
              </div>
              <div className="activity-list">
                {['Omniroute', 'OpenCode-Web', 'Hermes-x'].map((name, i) => <a key={name} href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer" className="activity-item"><span className="activity-icon"><Activity size={17} /></span><span><strong>{name}</strong><small>{['AI routing infrastructure', 'Hosted coding workspace', 'AI-native developer tooling'][i]}</small></span><ArrowUpRight size={16} /></a>)}
              </div>
              <p className="telemetry-note">Live GitHub data is intentionally kept out of the critical render path. This section links to the source of truth instead of displaying stale cached activity.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-grid">
              <div><p className="eyebrow">05 · Contact</p><h2>Have a system<br /><em>worth building?</em></h2><p className="contact-lede">For roles, collaborations, project discussions, or technical conversations, email is the fastest route.</p><button className="email-copy" onClick={copyEmail}><Mail size={17} /><span>{emailCopied ? 'Email copied' : 'jishnupg2005@gmail.com'}</span><Code2 size={14} /></button><div className="contact-links"><a href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div>
              <form className="contact-form" action="mailto:jishnupg2005@gmail.com" method="post" encType="text/plain"><div className="form-title"><span>Direct inquiry</span><span>01 / 03</span></div><label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label><label>Message<textarea name="message" rows="5" placeholder="Tell me what you are building..." required /></label><button className="button primary" type="submit">Send inquiry <ArrowUpRight size={16} /></button></form>
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-action-bar"><a href="/assets/resume.html" target="_blank" rel="noreferrer"><Download size={16} /> Resume</a><a href="#contact"><Mail size={16} /> Contact</a></div>

      <footer className="site-footer"><div className="container footer-inner"><div><strong>Jishnu P G</strong><span>AI · Full Stack · Android</span></div><div className="footer-links"><a href="#projects">Systems</a><a href="#skills">Stack</a><a href="#contact">Contact</a></div><span>© {new Date().getFullYear()}</span></div></footer>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return <BrowserRouter><Routes><Route path="/smartwatt" element={<CaseStudy isDark={isDark} />} /><Route path="*" element={<PortfolioHome isDark={isDark} toggleTheme={() => setIsDark(v => !v)} />} /></Routes></BrowserRouter>;
}

export default App;
