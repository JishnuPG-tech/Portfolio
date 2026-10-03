import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {
  Activity, ArrowRight, ArrowUpRight, BrainCircuit, CalendarDays, Check,
  Code2, Copy, Download, ExternalLink, GitCommitHorizontal, GitFork,
  Github, Layers3, Linkedin, Mail, MapPin, Menu, Moon, Server,
  Smartphone, Sparkles, Star, Sun, Terminal, Users, X
} from 'lucide-react';
import './App.css';
import CaseStudy from './pages/CaseStudy';

const GITHUB_USERNAME = 'JishnuPG-tech';
const GITHUB_API = 'https://api.github.com';
const CONTRIBUTIONS_API = 'https://github-contributions-api.jogruber.de/v4';

const projects = [
  {
    number: '01',
    name: 'SmartWatt AI',
    eyebrow: 'AI / Applied ML',
    description: 'Physics-informed energy intelligence that combines deterministic electrical models with neural inference.',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    href: '/smartwatt',
    repo: 'https://github.com/JishnuPG-tech/SmartWatt',
    featured: true,
    accent: 'energy'
  },
  {
    number: '02',
    name: 'Omniroute',
    eyebrow: 'AI Infrastructure',
    description: 'A routing layer for AI coding clients, agents, and model endpoints.',
    tags: ['Node.js', 'APIs', 'WebSockets'],
    repo: 'https://github.com/JishnuPG-tech/Omniroute',
    accent: 'network'
  },
  {
    number: '03',
    name: 'OpenCode Stack',
    eyebrow: 'Developer Tools',
    description: 'A hosted coding-agent environment combining OpenCode, terminal access, storage, and a mobile client.',
    tags: ['React Native', 'Linux', 'Hugging Face'],
    repo: 'https://github.com/JishnuPG-tech',
    accent: 'terminal'
  },
  {
    number: '04',
    name: 'InstaFlow',
    eyebrow: 'Android',
    description: 'A native media workflow built with Kotlin, Compose, metadata-first processing, and FFmpeg.',
    tags: ['Kotlin', 'Compose', 'FFmpeg'],
    repo: 'https://github.com/JishnuPG-tech',
    accent: 'mobile'
  }
];

const capabilities = [
  { icon: BrainCircuit, title: 'AI Engineering', text: 'Applied ML, model integration, inference pipelines and AI-native product systems.' },
  { icon: Code2, title: 'Full Stack', text: 'Interfaces, APIs, data flows and production-ready web applications.' },
  { icon: Smartphone, title: 'Android', text: 'Kotlin, Jetpack Compose, native media and device-first experiences.' },
  { icon: Server, title: 'Infrastructure', text: 'Self-hosting, terminals, routing, deployment and automation.' }
];

const stackGroups = [
  { label: 'AI & Backend', items: ['Python', 'TensorFlow', 'FastAPI', 'Node.js', 'REST APIs', 'WebSockets'] },
  { label: 'Web', items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vercel'] },
  { label: 'Android', items: ['Kotlin', 'Jetpack Compose', 'React Native', 'Expo', 'FFmpeg'] },
  { label: 'Infrastructure', items: ['GitHub', 'Docker', 'Linux', 'Hugging Face', 'Supabase', 'MySQL'] }
];

const emptyGithub = {
  profile: null,
  repos: [],
  contributions: [],
  total: {},
  loading: true,
  error: false
};

function getStoredTheme() {
  try {
    return window.localStorage.getItem('portfolio-theme') || 'dark';
  } catch {
    return 'dark';
  }
}

function readCache(key, maxAge) {
  try {
    const item = JSON.parse(window.localStorage.getItem(key));
    if (item && Date.now() - item.time < maxAge) return item.data;
  } catch {}
  return null;
}

function writeCache(key, data) {
  try {
    window.localStorage.setItem(key, JSON.stringify({ time: Date.now(), data }));
  } catch {}
}

async function fetchGithubData() {
  const cached = readCache('jishnu-github-data-v2', 15 * 60 * 1000);
  if (cached) return cached;

  const [profileResponse, reposResponse, contributionsResponse] = await Promise.all([
    fetch(GITHUB_API + '/users/' + GITHUB_USERNAME),
    fetch(GITHUB_API + '/users/' + GITHUB_USERNAME + '/repos?per_page=100&sort=updated'),
    fetch(CONTRIBUTIONS_API + '/' + GITHUB_USERNAME + '?y=last')
  ]);

  if (!profileResponse.ok || !reposResponse.ok || !contributionsResponse.ok) {
    throw new Error('GitHub data request failed');
  }

  const data = {
    profile: await profileResponse.json(),
    repos: await reposResponse.json(),
    contributions: await contributionsResponse.json()
  };
  writeCache('jishnu-github-data-v2', data);
  return data;
}

function dateKeyFromOffset(offset) {
  const now = new Date();
  const date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  date.setUTCDate(date.getUTCDate() - offset);
  return date.toISOString().slice(0, 10);
}

function buildContributionWeeks(contributions) {
  const map = new Map((contributions || []).map(item => [item.date, item]));
  const days = Array.from({ length: 371 }, (_, index) => dateKeyFromOffset(370 - index));
  const first = new Date(days[0] + 'T12:00:00Z');
  first.setUTCDate(first.getUTCDate() - first.getUTCDay());
  const weeks = [];

  for (let week = 0; week < 53; week += 1) {
    const cells = [];
    for (let day = 0; day < 7; day += 1) {
      const current = new Date(first);
      current.setUTCDate(first.getUTCDate() + week * 7 + day);
      const key = current.toISOString().slice(0, 10);
      cells.push(map.get(key) || { date: key, count: 0, level: 0 });
    }
    weeks.push(cells);
  }
  return weeks;
}

function App() {
  const [theme, setTheme] = useState(getStoredTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [copied, setCopied] = useState(false);
  const [github, setGithub] = useState(emptyGithub);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { window.localStorage.setItem('portfolio-theme', theme); } catch {}
  }, [theme]);

  useEffect(() => {
    let alive = true;
    fetchGithubData()
      .then(data => alive && setGithub({ ...data, loading: false, error: false }))
      .catch(() => alive && setGithub({ ...emptyGithub, loading: false, error: true }));
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return undefined;
    const sections = ['home', 'work', 'github', 'about', 'stack', 'contact'];
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
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
      return undefined;
    }
    const reveal = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  const contributionWeeks = useMemo(
    () => buildContributionWeeks(github.contributions),
    [github.contributions]
  );

  const githubStats = useMemo(() => {
    const repos = github.repos || [];
    const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    const totalForks = repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);
    const languages = {};
    repos.forEach(repo => {
      if (repo.language) languages[repo.language] = (languages[repo.language] || 0) + 1;
    });
    const languageList = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const recent = [...repos].sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)).slice(0, 6);
    const featured = [...repos].sort((a, b) => {
      const scoreA = (a.stargazers_count || 0) * 10 + (a.forks_count || 0) * 3;
      const scoreB = (b.stargazers_count || 0) * 10 + (b.forks_count || 0) * 3;
      return scoreB - scoreA;
    }).slice(0, 4);
    const contributionTotal = github.contributions?.reduce((sum, item) => sum + item.count, 0) || 0;
    return { totalStars, totalForks, languageList, recent, featured, contributionTotal };
  }, [github.repos, github.contributions]);

  const copyEmail = async () => {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText('jishnupg2005@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = 'mailto:jishnupg2005@gmail.com';
    }
  };

  const nav = ['work', 'github', 'about', 'stack', 'contact'];

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">JPG</span>
            <span className="brand-copy"><strong>Jishnu P G</strong><small>AI · Full Stack · Android</small></span>
          </a>

          <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'}>
            {nav.map(item => (
              <a key={item} href={'#' + item} className={active === item ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                {item === 'github' ? 'GitHub' : item[0].toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="icon-btn header-social" href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a className="icon-btn header-social" href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="icon-btn menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid-glow" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy-block">
              <div className="eyebrow-row" data-reveal><span className="status-dot" /> Open to building interesting things · Kerala, India</div>
              <p className="eyebrow" data-reveal>BCA · 2026 · AI / FULL STACK / ANDROID</p>
              <h1 data-reveal>Building software that is <em>useful, intelligent,</em> and built to last.</h1>
              <p className="hero-description" data-reveal>
                I’m <strong>Jishnu P G</strong>, an AI-focused developer building practical products across machine learning, web systems, developer tooling, infrastructure, and Android.
              </p>
              <div className="hero-actions" data-reveal>
                <a className="primary-btn" href="#work">Explore selected work <ArrowRight size={16} /></a>
                <a className="secondary-btn" href="/assets/resume.html" target="_blank" rel="noreferrer"><Download size={15} /> Resume</a>
              </div>
              <div className="hero-links" data-reveal>
                <a href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
                <a href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a>
                <button onClick={copyEmail}>{copied ? <Check size={14} /> : <Mail size={14} />} {copied ? 'Copied' : 'Email'}</button>
              </div>
            </div>

            <div className="hero-console" data-reveal>
              <div className="console-top"><span><i /> LIVE BUILD</span><span>2026.10</span></div>
              <div className="console-profile">
                {github.profile?.avatar_url ? <img src={github.profile.avatar_url} alt="Jishnu P G" /> : <div className="avatar-placeholder">JPG</div>}
                <div><span className="console-kicker">CURRENT FOCUS</span><strong>AI systems + product engineering</strong><small>From model logic to the interface around it.</small></div>
              </div>
              <div className="console-grid">
                <div><span>PUBLIC REPOS</span><strong>{github.loading ? '—' : github.profile?.public_repos ?? '—'}</strong></div>
                <div><span>FOLLOWERS</span><strong>{github.loading ? '—' : github.profile?.followers ?? '—'}</strong></div>
                <div><span>CONTRIBUTIONS</span><strong>{github.loading ? '—' : githubStats.contributionTotal}</strong></div>
                <div><span>STARS</span><strong>{github.loading ? '—' : githubStats.totalStars}</strong></div>
              </div>
              <div className="console-footer"><span><Activity size={13} /> shipping continuously</span><span>github.com/JishnuPG-tech</span></div>
            </div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div><p className="eyebrow">Selected work</p><h2>A few things I’ve <em>built.</em></h2></div>
              <p>Projects that show how I approach AI, infrastructure, product interfaces, and native software.</p>
            </div>

            <article className="featured-project" data-reveal>
              <div className="project-visual energy-visual">
                <div className="visual-noise" />
                <span className="visual-label">SMARTWATT / HYBRID INFERENCE</span>
                <div className="energy-orbit"><span /><span /><span /></div>
                <div className="energy-card">
                  <div><span>MODEL OUTPUT</span><span>LIVE</span></div>
                  <strong>94.5<small>%</small></strong>
                  <p>reported peak accuracy</p>
                  <div className="metric-line"><i /></div>
                  <footer><span>PHYSICS + NEURAL</span><span>v1.0</span></footer>
                </div>
                <span className="visual-tag tag-a">PHYSICS</span><span className="visual-tag tag-b">NEURAL</span><span className="visual-tag tag-c">KSEB</span>
              </div>
              <div className="featured-copy">
                <div className="project-topline"><span>01</span><span>FEATURED</span></div>
                <h3>SmartWatt AI</h3>
                <p className="project-lead">Physics-informed energy intelligence for appliance-level estimation.</p>
                <p>Combines deterministic electrical physics with neural inference so the system can handle both predictable linear loads and non-linear appliance behaviour.</p>
                <div className="project-stat-row"><div><strong>94.5%</strong><span>reported accuracy</span></div><div><strong>98%</strong><span>linear-load precision</span></div><div><strong>&lt;20ms</strong><span>target inference</span></div></div>
                <div className="tag-list">{projects[0].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-actions"><Link className="inline-link accent-link" to="/smartwatt">Case study <ArrowUpRight size={15} /></Link><a className="inline-link" href={projects[0].repo} target="_blank" rel="noreferrer">Source <Github size={15} /></a></div>
              </div>
            </article>

            <div className="project-grid">
              {projects.slice(1).map(project => (
                <article className={'project-card ' + project.accent} key={project.name} data-reveal>
                  <div className="card-visual">
                    <span>{project.number} / {project.eyebrow}</span>
                    {project.accent === 'network' && <div className="network-visual"><i /><i /><i /><i /></div>}
                    {project.accent === 'terminal' && <div className="terminal-visual"><Terminal size={30} /><span>opencode / terminal / sync</span></div>}
                    {project.accent === 'mobile' && <div className="mobile-visual"><Smartphone size={34} /><span>ANDROID / MEDIA</span></div>}
                  </div>
                  <div className="project-card-body"><span className="card-eyebrow">{project.eyebrow}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="inline-link" href={project.repo} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={14} /></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="github" className="section github-section">
          <div className="container">
            <div className="section-heading github-heading" data-reveal>
              <div><p className="eyebrow">Open source / GitHub</p><h2>Proof of <em>work.</em></h2></div>
              <a className="outline-btn" href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer">Open profile <ExternalLink size={14} /></a>
            </div>

            <div className="github-profile-card" data-reveal>
              <div className="github-profile-main">
                {github.profile?.avatar_url ? <img className="github-avatar" src={github.profile.avatar_url} alt="Jishnu P G" /> : <div className="github-avatar avatar-placeholder">JPG</div>}
                <div><span className="github-handle">@JishnuPG-tech</span><h3>{github.profile?.name || 'Jishnu P G'}</h3><p>{github.profile?.bio || 'AI-focused developer building software, infrastructure and Android experiences.'}</p><div className="profile-meta">{github.profile?.location && <span><MapPin size={13} /> {github.profile.location}</span>} {github.profile?.created_at && <span><CalendarDays size={13} /> Joined {new Date(github.profile.created_at).getFullYear()}</span>}</div></div>
              </div>
              <div className="profile-actions"><a href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer"><Github size={15} /> Follow on GitHub</a><span><Users size={14} /> {github.profile?.followers ?? '—'} followers</span></div>
            </div>

            <div className="github-stat-grid" data-reveal>
              <div><span>PUBLIC REPOSITORIES</span><strong>{github.profile?.public_repos ?? '—'}</strong></div>
              <div><span>FOLLOWERS</span><strong>{github.profile?.followers ?? '—'}</strong></div>
              <div><span>STARS ACROSS REPOS</span><strong>{githubStats.totalStars}</strong></div>
              <div><span>FORKS ACROSS REPOS</span><strong>{githubStats.totalForks}</strong></div>
              <div><span>LAST YEAR CONTRIBUTIONS</span><strong>{githubStats.contributionTotal || '—'}</strong></div>
            </div>

            <div className="github-calendar-card" data-reveal>
              <div className="calendar-header"><div><span>CONTRIBUTION ACTIVITY</span><strong>{githubStats.contributionTotal || '—'} contributions in the last year</strong></div><span className="calendar-note">Live from GitHub</span></div>
              <div className="calendar-scroll">
                <div className="calendar"><div className="week-labels"><span>Mon</span><span>Wed</span><span>Fri</span></div><div className="calendar-grid">{contributionWeeks.map((week, weekIndex) => <div className="calendar-week" key={weekIndex}>{week.map(day => <span className={'day level-' + day.level} title={day.date + ' · ' + day.count + ' contributions'} key={day.date} />)}</div>)}</div></div>
              </div>
              <div className="calendar-legend"><span>Less</span><i className="level-0" /><i className="level-1" /><i className="level-2" /><i className="level-3" /><i className="level-4" /><span>More</span></div>
            </div>

            <div className="github-lower-grid">
              <div className="github-panel" data-reveal><div className="panel-heading"><div><span>FEATURED REPOSITORIES</span><strong>What I’m building</strong></div><Layers3 size={17} /></div><div className="repo-list">{githubStats.featured.map(repo => <a className="repo-item" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}><div><strong>{repo.name}</strong><p>{repo.description || 'Open-source project by Jishnu P G.'}</p></div><div className="repo-metrics"><span><Star size={12} /> {repo.stargazers_count}</span><span><GitFork size={12} /> {repo.forks_count}</span></div></a>)}{github.loading && <div className="loading-copy">Loading repositories…</div>}{!github.loading && !githubStats.featured.length && <div className="loading-copy">No public repositories found.</div>}</div></div>

              <div className="github-panel" data-reveal><div className="panel-heading"><div><span>LANGUAGE MIX</span><strong>Across public repositories</strong></div><Code2 size={17} /></div><div className="language-list">{githubStats.languageList.map(([language, count]) => <div className="language-row" key={language}><div><span>{language}</span><small>{count} repos</small></div><div className="language-bar"><i style={{ width: Math.max(8, Math.round((count / Math.max(1, githubStats.languageList[0]?.[1] || 1)) * 100)) + '%' }} /></div></div>)}{github.loading && <div className="loading-copy">Loading language data…</div>}</div></div>
            </div>

            <div className="github-recent" data-reveal><div className="panel-heading"><div><span>RECENTLY UPDATED</span><strong>Latest repositories</strong></div><GitCommitHorizontal size={17} /></div><div className="recent-grid">{githubStats.recent.map(repo => <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}><span>{repo.language || 'Repository'}</span><strong>{repo.name}</strong><small>{repo.description || 'View repository'}</small><em>Updated {new Date(repo.pushed_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} <ArrowUpRight size={13} /></em></a>)}</div></div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <div className="about-layout">
              <div data-reveal><p className="eyebrow">About</p><h2>Curious enough to <em>learn.</em><br />Practical enough to ship.</h2></div>
              <div className="about-copy" data-reveal><p className="about-lead">I like understanding how systems work, then turning that understanding into software people can actually use.</p><p>My work sits between AI engineering, full-stack development, Android, and the infrastructure that connects them. I enjoy the parts that are easy to overlook: data pipelines, APIs, deployment, interfaces, automation, and developer experience.</p><p>I’m finishing my BCA in 2026 while building increasingly ambitious projects around applied AI and production engineering.</p><span className="principle"><Sparkles size={14} /> Learn · Build · Measure · Iterate</span></div>
            </div>
            <div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }, index) => <div className="capability-card" key={title} data-reveal><div className="capability-icon"><Icon size={20} /></div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="container">
            <div className="section-heading" data-reveal><div><p className="eyebrow">Engineering stack</p><h2>Tools behind the <em>work.</em></h2></div><p>I choose tools based on the problem, with a bias toward simple systems that are easy to ship and maintain.</p></div>
            <div className="stack-groups">{stackGroups.map(group => <div className="stack-group" key={group.label} data-reveal><span>{group.label}</span><div>{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-panel" data-reveal>
              <div><p className="eyebrow">Contact</p><h2>Let’s build something <em>worth shipping.</em></h2><p>If you have a product, technical problem, AI idea, or collaboration in mind, send me a message.</p></div>
              <div className="contact-side"><button className="email-copy" onClick={copyEmail}>{copied ? <Check size={17} /> : <Mail size={17} />}<span>{copied ? 'Email copied' : 'jishnupg2005@gmail.com'}</span><Copy size={14} /></button><div className="contact-socials"><a href="https://github.com/JishnuPG-tech" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="https://www.linkedin.com/in/jishnupg2005/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-inner"><div><strong>Jishnu P G</strong><span>AI · Full Stack · Android</span></div><div><a href="#home">Back to top <ArrowUpRight size={13} /></a><span>© 2026</span></div></div></footer>
    </div>
  );
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
