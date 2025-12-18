/**
 * GITHUB ACTIVITY COMPONENT
 * 
 * Shows GitHub contribution graph, recent repos, and activity feed
 * Status: Ready to implement
 * Priority: Medium
 * 
 * Install required packages:
 * npm install axios react-github-calendar
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';
// import GitHubCalendar from 'react-github-calendar';
import './GitHubActivity.css';

const GitHubActivity = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Fetch user data
    const fetchGitHubData = async () => {
      try {
        // User stats
        const userRes = await fetch('https://api.github.com/users/jishnupg');
        const userData = await userRes.json();
        setStats(userData);

        // Repositories
        const reposRes = await fetch(
          'https://api.github.com/users/jishnupg/repos?sort=updated&per_page=6'
        );
        const reposData = await reposRes.json();
        setRepos(reposData);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return <div className="github-loading">Loading GitHub data...</div>;
  }

  return (
    <section className="github-activity">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle">Consistent learning and open-source contributions</p>
        </motion.div>

        {/* Stats */}
        <div className="github-stats">
          {stats && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="stat-item"
              >
                <div className="stat-value">{stats.public_repos}</div>
                <div className="stat-label">Public Repositories</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="stat-item"
              >
                <div className="stat-value">{stats.followers}</div>
                <div className="stat-label">Followers</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="stat-item"
              >
                <div className="stat-value">{stats.following}</div>
                <div className="stat-label">Following</div>
              </motion.div>
            </>
          )}
        </div>

        {/* Contribution Calendar would go here */}
        <div className="calendar-section">
          <h3>Contribution Calendar</h3>
          {/* <GitHubCalendar username="jishnupg" /> */}
          <p style={{ color: '#888', textAlign: 'center', padding: '2rem' }}>
            GitHub calendar will display here once react-github-calendar is configured
          </p>
        </div>

        {/* Recent Repositories */}
        <div className="recent-repos">
          <h3>Recent Repositories</h3>
          <div className="repos-grid">
            {repos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="repo-card"
              >
                <div className="repo-header">
                  <FiGithub size={24} />
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </div>
                <p className="repo-description">{repo.description || 'No description'}</p>
                <div className="repo-footer">
                  {repo.language && <span className="language">{repo.language}</span>}
                  <div className="repo-stats">
                    <span>
                      <FiStar size={16} /> {repo.stargazers_count}
                    </span>
                    <span>
                      <FiGitBranch size={16} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="github-cta"
        >
          <a href="https://github.com/jishnupg" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View All on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
