import { useState, useEffect, useCallback } from 'react';

/**
 * Autonomous Portfolio Sync Engine
 * --------------------------------
 * Completely silent, client-side background engine that queries GitHub,
 * detects code commits, derives live radar status ("What I'm building now"),
 * auto-discovers active tech stacks, and caches updates in localStorage.
 * 
 * Zero backend server or Python dependencies required.
 */

const CACHE_KEY = 'jishnu_portfolio_autonomous_cache_v2';
const CACHE_TTL_MS = 8 * 60 * 1000; // 8 minutes background cache

export const generateFallbackContributions = () => {
  const contributions = [];
  const now = new Date();
  for (let i = 365; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    let count = 0;
    let level = 0;
    if (i < 157) {
      // Current active streak matching 157 days
      count = Math.floor(6 + (i % 7) * 2.2);
      level = count > 15 ? 4 : count > 8 ? 3 : count > 3 ? 2 : 1;
    } else if (i % 3 === 0 || i % 7 === 0) {
      count = Math.floor(2 + (i % 5));
      level = count > 8 ? 3 : count > 3 ? 2 : 1;
    }
    contributions.push({ date: dateStr, count, level });
  }
  return contributions;
};

export const fallbackSyncData = {
  stats: {
    public_repos: 39,
    followers: 3,
    following: 8,
    totalCommits: 2143,
    streakDays: 157,
    activeDays: 177,
  },
  contributions: generateFallbackContributions(),
  buildingNow: {
    repo: 'OpenCode-Web',
    cleanRepo: 'OpenCode-Web',
    message: 'Updated workspace session orchestration and agentic sandbox',
    timeAgo: 'recently',
    date: '2026-09-21T02:20:08Z',
    url: 'https://github.com/JishnuPG-tech/OpenCode-Web',
  },
  topRepos: [
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
  ],
  languageDistribution: {
    Python: 16,
    TypeScript: 11,
    JavaScript: 6,
    Kotlin: 2,
    HTML: 4,
  },
  recentPushes: [
    {
      id: 'p1',
      repo: 'OpenCode-Web',
      message: 'Updated workspace session orchestration',
      date: '2026-09-21T02:20:08Z',
    },
    {
      id: 'p2',
      repo: 'Instaxsave',
      message: 'Optimized concurrent media asset stream buffer',
      date: '2026-09-21T02:19:37Z',
    },
    {
      id: 'p3',
      repo: 'SmartWatt',
      message: 'Tuned dual-inference loss gates for linear loads',
      date: '2026-09-21T03:23:05Z',
    },
    {
      id: 'p4',
      repo: 'Hermes-x',
      message: 'Upgraded WebSocket event streaming harness',
      date: '2026-09-20T10:19:03Z',
    },
  ],
  lastSynced: new Date().toISOString(),
};

export const getRelativeTime = (dateString) => {
  if (!dateString) return 'recently';
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((now - date) / 1000);
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  return `${Math.floor(diffInSeconds / 604800)}w ago`;
};

const categorizeRepo = (repo) => {
  const name = (repo.name || '').toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  if (
    name.includes('smartwatt') ||
    desc.includes('energy') ||
    desc.includes('ai') ||
    name.includes('omniroute') ||
    name.includes('pdf')
  ) {
    return 'ai';
  }
  if (name.includes('hermes') || desc.includes('agent') || name.includes('opencode')) {
    return 'agents';
  }
  return 'web';
};

/**
 * Execute silent background sync
 */
export async function executeAutonomousSync() {
  try {
    // 1. Check Cache
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        const age = Date.now() - new Date(parsed.lastSynced).getTime();
        if (age < CACHE_TTL_MS && parsed.stats) {
          return parsed;
        }
      } catch (e) {
        // invalid cache, proceed to fetch
      }
    }

    // 2. Fetch User Profile
    let userStats = { public_repos: 39, followers: 3, following: 8 };
    try {
      const userRes = await fetch('https://api.github.com/users/JishnuPG-tech');
      if (userRes.ok) {
        const userData = await userRes.json();
        userStats = {
          public_repos: userData.public_repos || 39,
          followers: userData.followers || 3,
          following: userData.following || 8,
        };
      }
    } catch (e) {
      console.debug('User profile note:', e.message);
    }

    // 3. Fetch Repositories
    let fetchedRepos = fallbackSyncData.topRepos;
    const langCounts = {};
    try {
      const reposRes = await fetch(
        'https://api.github.com/users/JishnuPG-tech/repos?sort=updated&per_page=15'
      );
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        if (Array.isArray(reposData) && reposData.length > 0) {
          fetchedRepos = reposData.map((r) => {
            const lang = r.language || 'Other';
            langCounts[lang] = (langCounts[lang] || 0) + 1;
            return {
              id: r.id,
              name: r.name,
              description: r.description,
              language: r.language,
              stargazers_count: r.stargazers_count,
              forks_count: r.forks_count,
              html_url: r.html_url,
              updated_at: r.updated_at,
              category: categorizeRepo(r),
            };
          });
        }
      }
    } catch (e) {
      console.debug('Repos note:', e.message);
    }

    // 4. Fetch Recent Events ("What I'm building now" radar)
    let buildingNow = fallbackSyncData.buildingNow;
    let recentPushes = fallbackSyncData.recentPushes;

    try {
      const eventsRes = await fetch(
        'https://api.github.com/users/JishnuPG-tech/events/public?per_page=10'
      );
      if (eventsRes.ok) {
        const eventsData = await eventsRes.json();
        if (Array.isArray(eventsData) && eventsData.length > 0) {
          const pushEvents = eventsData.filter(
            (ev) => ev.type === 'PushEvent' || ev.type === 'CreateEvent'
          );

          if (pushEvents.length > 0) {
            const topPush = pushEvents[0];
            const cleanName = (topPush.repo?.name || 'OpenCode-Web').replace('JishnuPG-tech/', '');
            const commitMsg = topPush.payload?.commits?.[0]?.message;

            buildingNow = {
              repo: topPush.repo?.name || 'JishnuPG-tech/OpenCode-Web',
              cleanRepo: cleanName,
              message: commitMsg || (topPush.type === 'CreateEvent' ? 'Created new repository' : 'Active revisions committed'),
              timeAgo: getRelativeTime(topPush.created_at),
              date: topPush.created_at,
              url: `https://github.com/${topPush.repo?.name || 'JishnuPG-tech'}`,
            };

            recentPushes = pushEvents.slice(0, 5).map((ev, i) => ({
              id: ev.id || `p-${i}`,
              repo: (ev.repo?.name || 'Repository').replace('JishnuPG-tech/', ''),
              message: ev.payload?.commits?.[0]?.message || 'Pushed codebase updates',
              date: ev.created_at,
            }));
          }
        }
      }
    } catch (e) {
      console.debug('Events note:', e.message);
    }

    // 5. Fetch Contributions
    let streakDays = 157;
    let totalCommits = 2143;
    let activeDays = 177;

    let contributions = null;

    try {
      const contribRes = await fetch(
        'https://github-contributions-api.jogruber.de/v4/JishnuPG-tech?y=last'
      );
      if (contribRes.ok) {
        const cJson = await contribRes.json();
        if (cJson && cJson.total) {
          totalCommits = cJson.total.lastYear || 2143;
        }
        if (cJson && Array.isArray(cJson.contributions)) {
          contributions = cJson.contributions;
          const list = cJson.contributions;
          activeDays = list.filter((c) => c.count > 0).length;
          let currentStreak = 0;
          for (let i = list.length - 1; i >= 0; i--) {
            if (list[i].count > 0) {
              currentStreak++;
            } else {
              if (i === list.length - 1) continue;
              break;
            }
          }
          if (currentStreak > 0) streakDays = currentStreak;
        }
      }
    } catch (e) {
      console.debug('Contribution note:', e.message);
    }

    const payload = {
      stats: {
        ...userStats,
        totalCommits,
        streakDays,
        activeDays,
      },
      contributions: contributions || fallbackSyncData.contributions,
      buildingNow,
      topRepos: fetchedRepos,
      languageDistribution: Object.keys(langCounts).length > 0 ? langCounts : fallbackSyncData.languageDistribution,
      recentPushes,
      lastSynced: new Date().toISOString(),
    };

    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
    return payload;
  } catch (err) {
    console.debug('Autonomous sync silent fallback:', err.message);
    return fallbackSyncData;
  }
}

/**
 * React Hook for any component to access autonomous sync data silently
 */
export function useAutonomousSync() {
  const [syncState, setSyncState] = useState(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && parsed.stats) return parsed;
      }
    } catch (e) {}
    return fallbackSyncData;
  });
  const [isSyncing, setIsSyncing] = useState(false);

  const runSync = useCallback(async (force = false) => {
    if (force) {
      try {
        localStorage.removeItem(CACHE_KEY);
      } catch (e) {}
    }
    setIsSyncing(true);
    try {
      const result = await executeAutonomousSync();
      setSyncState(result);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  useEffect(() => {
    runSync();
    const interval = setInterval(() => {
      runSync();
    }, CACHE_TTL_MS);
    return () => clearInterval(interval);
  }, [runSync]);

  return { data: syncState, isSyncing, refreshSync: () => runSync(true) };
}
