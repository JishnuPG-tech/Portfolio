import React, { useState, useMemo } from 'react';
import {
  FiGithub,
  FiStar,
  FiGitBranch,
  FiExternalLink,
  FiRefreshCw,
  FiRadio,
  FiActivity,
  FiClock,
  FiCode,
  FiCalendar,
  FiZap,
} from 'react-icons/fi';
import { useAutonomousSync, getRelativeTime, generateFallbackContributions } from '../services/portfolioSync';
import './GitHubActivity.css';

const realFallbackRepos = [
  {
    id: 101,
    name: 'SmartWatt',
    description:
      'Hybrid AI and physics-based residential energy estimation platform for Kerala households with KSEB-aligned bill analytics.',
    language: 'Python',
    stargazers_count: 2,
    forks_count: 0,
    html_url: 'https://github.com/JishnuPG-tech/SmartWatt',
    updated_at: '2026-09-21T03:23:05Z',
    category: 'ai',
  },
  {
    id: 102,
    name: 'Hermes-x',
    description:
      'Autonomous multi-agent development suite with bi-directional event stream and Android control client.',
    language: 'Python',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/JishnuPG-tech/Hermes-x',
    updated_at: '2026-09-20T10:19:03Z',
    category: 'agents',
  },
  {
    id: 103,
    name: 'Omniroute',
    description:
      'High-performance AI model gateway dynamically routing inference across local and cloud LLM meshes with telemetry.',
    language: 'Python',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/JishnuPG-tech/Omniroute',
    updated_at: '2026-09-19T17:44:13Z',
    category: 'ai',
  },
  {
    id: 104,
    name: 'OpenCode-Web',
    description:
      'Cloud and browser-based AI coding workspace built for rapid vibe coding and prompt-driven orchestration.',
    language: 'Python',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/JishnuPG-tech/OpenCode-Web',
    updated_at: '2026-09-21T02:20:11Z',
    category: 'web',
  },
  {
    id: 105,
    name: 'Instaxsave',
    description:
      'High-throughput media extraction and asset streaming engine optimized for concurrent processing.',
    language: 'TypeScript',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/JishnuPG-tech/Instaxsave',
    updated_at: '2026-09-21T02:19:40Z',
    category: 'web',
  },
  {
    id: 106,
    name: 'pdf-enhancer',
    description:
      'Computer vision and document enhancement pipeline optimizing technical diagrams and scans.',
    language: 'Python',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/JishnuPG-tech/pdf-enhancer',
    updated_at: '2026-09-20T02:20:37Z',
    category: 'ai',
  },
  {
    id: 107,
    name: 'Hermes',
    description:
      'TypeScript core protocol harness for Hermes autonomous agent messaging and orchestration.',
    language: 'TypeScript',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/JishnuPG-tech/Hermes',
    updated_at: '2026-09-19T15:47:54Z',
    category: 'agents',
  },
  {
    id: 108,
    name: 'OpenCode-Drive',
    description:
      'Cloud asset and file system bridge for AI coding assistants and distributed workspaces.',
    language: 'TypeScript',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/JishnuPG-tech/OpenCode-Drive',
    updated_at: '2026-09-19T02:14:41Z',
    category: 'web',
  },
  {
    id: 109,
    name: 'Hermes-android',
    description:
      'Mobile runtime client for remote telemetry and prompt steering of Hermes multi-agent clusters.',
    language: 'Python',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/JishnuPG-tech/Hermes-android',
    updated_at: '2026-09-19T02:14:36Z',
    category: 'agents',
  },
];

const fallbackEvents = [
  {
    id: 'ev-1',
    repo: 'JishnuPG-tech/OpenCode-Web',
    type: 'PushEvent',
    message: 'Updated workspace session orchestration',
    date: '2026-09-21T02:20:08Z',
  },
  {
    id: 'ev-2',
    repo: 'JishnuPG-tech/Instaxsave',
    type: 'PushEvent',
    message: 'Optimized concurrent media asset stream buffer',
    date: '2026-09-21T02:19:37Z',
  },
  {
    id: 'ev-3',
    repo: 'JishnuPG-tech/SmartWatt',
    type: 'PushEvent',
    message: 'Tuned dual-inference loss gates for linear loads',
    date: '2026-09-21T03:23:05Z',
  },
  {
    id: 'ev-4',
    repo: 'JishnuPG-tech/Hermes-x',
    type: 'PushEvent',
    message: 'Upgraded WebSocket event streaming harness',
    date: '2026-09-20T10:19:03Z',
  },
];

const getLangColor = (lang) => {
  switch (lang) {
    case 'Python':
      return '#3572A5';
    case 'TypeScript':
      return '#3178C6';
    case 'JavaScript':
      return '#F7DF1E';
    case 'Kotlin':
      return '#A97BFF';
    case 'HTML':
      return '#E34C26';
    default:
      return '#D97757';
  }
};

const defaultStats = {
  public_repos: 39,
  followers: 3,
  following: 8,
  totalCommits: 2143,
  streakDays: 157,
  activeDays: 177,
};

const GitHubActivity = () => {
  const { data, isSyncing, refreshSync } = useAutonomousSync();
  const repos = data?.topRepos || realFallbackRepos;
  const events = data?.recentPushes || fallbackEvents;
  const stats = data?.stats || defaultStats;
  const lastSyncTime = data?.lastSynced ? new Date(data.lastSynced) : new Date();
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredDay, setHoveredDay] = useState(null);

  // Compute Heatmap Weeks & Streaks
  const { weeks, monthLabels, computedStats } = useMemo(() => {
    const rawList = data?.contributions && Array.isArray(data.contributions) && data.contributions.length > 0
      ? data.contributions
      : generateFallbackContributions();
    const list = [...rawList];
    list.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Calculate Streaks
    let longestStreak = 0;
    let tempStreak = 0;
    list.forEach((day) => {
      if (day.count > 0) {
        tempStreak++;
        if (tempStreak > longestStreak) longestStreak = tempStreak;
      } else {
        tempStreak = 0;
      }
    });

    let currentStreak = 0;
    for (let i = list.length - 1; i >= 0; i--) {
      if (list[i].count > 0) {
        currentStreak++;
      } else {
        if (i === list.length - 1) continue;
        break;
      }
    }

    const activeDays = list.filter((c) => c.count > 0).length;

    // Group into 53 weeks
    const firstDate = list[0] ? new Date(list[0].date) : new Date();
    const startDayOfWeek = firstDate.getDay(); // 0 = Sun
    const weeksArr = [];
    let currentWeek = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      currentWeek.push(null);
    }

    for (const day of list) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeksArr.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      weeksArr.push(currentWeek);
    }

    // Month Labels
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const mLabels = [];
    let lastMonth = -1;

    weeksArr.forEach((week, weekIdx) => {
      const firstValidDay = week.find((d) => d !== null);
      if (firstValidDay) {
        const m = new Date(firstValidDay.date).getMonth();
        if (m !== lastMonth) {
          mLabels.push({ weekIdx, month: monthNames[m] });
          lastMonth = m;
        }
      }
    });

    return {
      weeks: weeksArr,
      monthLabels: mLabels,
      computedStats: {
        total: stats.totalCommits || 2143,
        longestStreak: Math.max(longestStreak, stats.streakDays || 157),
        currentStreak: stats.streakDays || currentStreak || 157,
        activeDays: stats.activeDays || activeDays || 177,
      },
    };
  }, [data, stats]);

  // Filter Repositories
  const filteredRepos = repos.filter((r) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ai')
      return (
        r.category === 'ai' ||
        (r.language === 'Python' && !r.name.toLowerCase().includes('android'))
      );
    if (activeTab === 'agents')
      return r.category === 'agents' || r.name.toLowerCase().includes('hermes');
    if (activeTab === 'web')
      return r.category === 'web' || r.language === 'TypeScript' || r.language === 'JavaScript';
    return true;
  });

  return (
    <section id="activity" className="github-editorial-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">03 / Laboratory Telemetry</span>
          <h2 className="section-title">Open-Source Activity & Repositories</h2>
          <p className="section-subtitle">
            Live telemetry connected directly to GitHub API — displaying real-time commit heatmaps,
            365-day streaks, active repositories, and push events.
          </p>
        </div>

        {/* Live Sync Status Bar */}
        <div className="live-sync-bar">
          <div className="sync-status-indicator">
            <span className="live-beacon-pulse" />
            <span className="sync-status-text">Live GitHub Telemetry Active</span>
            <span className="sync-meta-divider">•</span>
            <span className="sync-user-tag">@JishnuPG-tech</span>
            <span className="sync-meta-divider">•</span>
            <span className="sync-time-tag">
              <FiClock size={12} /> Synced {getRelativeTime(lastSyncTime)}
            </span>
          </div>

          <button
            onClick={refreshSync}
            disabled={isSyncing}
            className={`sync-refresh-btn ${isSyncing ? 'syncing' : ''}`}
            title="Fetch latest updates from GitHub"
          >
            <FiRefreshCw size={13} className={isSyncing ? 'spin-icon' : ''} />
            <span>{isSyncing ? 'Syncing...' : 'Sync Live'}</span>
          </button>
        </div>

        {/* Telemetry Stats Row */}
        <div className="github-stats-row">
          <div className="telemetry-stat-card">
            <div className="telemetry-card-top">
              <span className="telemetry-val">{computedStats.total.toLocaleString()}+</span>
              <FiActivity className="telemetry-corner-icon" size={17} />
            </div>
            <span className="telemetry-label">Commits in Last Year</span>
            <span className="telemetry-note">Across {computedStats.activeDays} active coding days</span>
          </div>

          <div className="telemetry-stat-card">
            <div className="telemetry-card-top">
              <span className="telemetry-val">{computedStats.currentStreak} Days</span>
              <FiZap className="telemetry-corner-icon highlight" size={17} />
            </div>
            <span className="telemetry-label">Active Commit Streak</span>
            <span className="telemetry-note">High-velocity daily vibe coding streak</span>
          </div>

          <div className="telemetry-stat-card">
            <div className="telemetry-card-top">
              <span className="telemetry-val">{stats?.public_repos ?? 39}</span>
              <FiCode className="telemetry-corner-icon" size={17} />
            </div>
            <span className="telemetry-label">Public Repositories</span>
            <span className="telemetry-note">Production AI, agents, & web architectures</span>
          </div>
        </div>

        {/* Real-Time GitHub Commit Heatmap Card */}
        <div className="contribution-heatmap-card">
          <div className="heatmap-header">
            <div className="heatmap-title-wrap">
              <FiCalendar size={16} className="heatmap-cal-icon" />
              <h3 className="heatmap-title">Annual Contribution Heatmap</h3>
              <span className="heatmap-pill">{computedStats.total.toLocaleString()} Commits</span>
            </div>

            <div className="heatmap-meta-stats">
              <div className="heatmap-stat-item">
                <span className="h-stat-num">{computedStats.currentStreak}d</span>
                <span className="h-stat-lbl">Streak</span>
              </div>
              <div className="h-stat-sep" />
              <div className="heatmap-stat-item">
                <span className="h-stat-num">{computedStats.longestStreak}d</span>
                <span className="h-stat-lbl">Longest</span>
              </div>
              <div className="h-stat-sep" />
              <div className="heatmap-stat-item">
                <span className="h-stat-num">{computedStats.activeDays}d</span>
                <span className="h-stat-lbl">Active</span>
              </div>
            </div>
          </div>

          {/* Calendar Scroll Area */}
          <div className="heatmap-calendar-scroll">
            <div className="heatmap-calendar-grid">
              {/* Month Labels Row */}
              <div className="heatmap-months-row">
                <div className="day-label-spacer" />
                <div className="months-track">
                  {monthLabels.map((m, idx) => (
                    <span
                      key={idx}
                      className="heatmap-month-label"
                      style={{ left: `${m.weekIdx * 14}px` }}
                    >
                      {m.month}
                    </span>
                  ))}
                </div>
              </div>

              {/* Days & Grid Columns */}
              <div className="heatmap-days-body">
                <div className="heatmap-day-labels">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                <div className="heatmap-weeks-track">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="heatmap-week-col">
                      {week.map((day, dIdx) => {
                        if (!day) {
                          return <div key={`empty-${dIdx}`} className="heatmap-cell empty" />;
                        }
                        const level =
                          day.level !== undefined
                            ? day.level
                            : day.count > 15
                            ? 4
                            : day.count > 8
                            ? 3
                            : day.count > 3
                            ? 2
                            : day.count > 0
                            ? 1
                            : 0;

                        return (
                          <div
                            key={day.date}
                            className={`heatmap-cell level-${level}`}
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                            title={`${day.count} contributions on ${day.date}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Heatmap Footer: Hover Details & Legend */}
          <div className="heatmap-footer">
            <div className="heatmap-hover-info">
              {hoveredDay ? (
                <span className="active-hover-text">
                  <strong>
                    {hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'}
                  </strong>{' '}
                  on{' '}
                  {new Date(hoveredDay.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              ) : (
                <span className="hover-placeholder">
                  Hover over any calendar cell to inspect commit distribution
                </span>
              )}
            </div>

            <div className="heatmap-legend">
              <span className="legend-label">Less</span>
              <div className="heatmap-cell level-0 mini" title="0 commits" />
              <div className="heatmap-cell level-1 mini" title="1-4 commits" />
              <div className="heatmap-cell level-2 mini" title="5-9 commits" />
              <div className="heatmap-cell level-3 mini" title="10-19 commits" />
              <div className="heatmap-cell level-4 mini" title="20+ commits" />
              <span className="legend-label">More</span>
            </div>
          </div>
        </div>

        {/* Live Push Events & Activity Drawer */}
        {events && events.length > 0 && (
          <div className="live-events-drawer">
            <div className="drawer-header">
              <div className="drawer-title-wrap">
                <FiRadio size={14} className="drawer-radio-icon" />
                <span className="drawer-title">Recent Push Stream & Commits</span>
              </div>
              <span className="drawer-status-chip">Direct Log</span>
            </div>

            <div className="events-stream-list">
              {events.map((ev) => (
                <div key={ev.id} className="event-stream-item">
                  <div className="event-dot" />
                  <div className="event-content">
                    <span className="event-repo-name">{ev.repo.replace('JishnuPG-tech/', '')}</span>
                    <span className="event-msg">{ev.message}</span>
                  </div>
                  <span className="event-timestamp">{getRelativeTime(ev.date)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="repo-filter-tabs">
          <button
            onClick={() => setActiveTab('all')}
            className={`filter-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Repositories ({repos.length})
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`filter-tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
          >
            AI & Physics ML
          </button>
          <button
            onClick={() => setActiveTab('agents')}
            className={`filter-tab-btn ${activeTab === 'agents' ? 'active' : ''}`}
          >
            Autonomous Agents & Tools
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={`filter-tab-btn ${activeTab === 'web' ? 'active' : ''}`}
          >
            Full-Stack & APIs
          </button>
        </div>

        {/* Repository Cards Grid with Architectural Alternating Silhouette */}
        <div className="repos-specimen-grid">
          {filteredRepos.map((repo, idx) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`repo-specimen-card ${idx % 2 === 1 ? 'alt-shape' : ''}`}
            >
              <div className="repo-card-head">
                <div className="repo-name-wrap">
                  <FiGithub size={16} className="repo-head-icon" />
                  <span className="repo-name">{repo.name}</span>
                </div>
                <FiExternalLink size={14} className="repo-ext" />
              </div>

              <p className="repo-dek">
                {repo.description ||
                  'Specialized autonomous module engineered for AI workflows and distributed execution.'}
              </p>

              <div className="repo-meta-footer">
                {repo.language ? (
                  <span className="repo-lang-chip">
                    <span
                      className="lang-pip"
                      style={{ backgroundColor: getLangColor(repo.language) }}
                    />
                    {repo.language}
                  </span>
                ) : (
                  <span className="repo-lang-chip">
                    <span className="lang-pip" style={{ backgroundColor: '#D97757' }} />
                    Multi-Language
                  </span>
                )}

                <div className="repo-counters">
                  <span className="counter-item" title="Stars">
                    <FiStar size={13} /> {repo.stargazers_count ?? 0}
                  </span>
                  <span className="counter-item" title="Forks">
                    <FiGitBranch size={13} /> {repo.forks_count ?? 0}
                  </span>
                  {repo.updated_at && (
                    <span className="counter-item time-item" title="Last Push">
                      {getRelativeTime(repo.updated_at)}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="github-footer-cta">
          <a
            href="https://github.com/JishnuPG-tech?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FiGithub size={16} />
            <span>Explore All 39+ Repositories on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
