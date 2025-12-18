import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';
import './GitHubActivity.css';

const GitHubActivity = () => {
  const [repos, setRepos] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // User stats
        const userRes = await fetch('https://api.github.com/users/JishnuPG-tech');
        const userData = await userRes.json();
        setStats(userData);

        // Repositories
        const reposRes = await fetch(
          'https://api.github.com/users/JishnuPG-tech/repos?sort=updated&per_page=6'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
          <p className="section-description">Focused on learning, experimentation, and building production-ready systems.</p>
        </motion.div>

        {loading ? (
          <div className="loading">Loading GitHub data...</div>
        ) : (
          <>
            {/* Stats */}
            {stats && (
              <motion.div
                className="github-stats"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants} className="stat-item">
                  <div className="stat-value">{stats.public_repos}</div>
                  <div className="stat-label">Public Repositories</div>
                </motion.div>
                <motion.div variants={itemVariants} className="stat-item">
                  <div className="stat-value">{stats.followers}</div>
                  <div className="stat-label">Followers</div>
                </motion.div>
                <motion.div variants={itemVariants} className="stat-item">
                  <div className="stat-value">{stats.following}</div>
                  <div className="stat-label">Following</div>
                </motion.div>
              </motion.div>
            )}

            {/* Recent Repositories */}
            {repos.length > 0 && (
              <div className="recent-repos">
                <h3>Recent Repositories</h3>
                <motion.div
                  className="repos-grid"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {repos.map((repo) => (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="repo-card"
                    >
                      <div className="repo-header">
                        <FiGithub size={20} />
                        <h4>{repo.name}</h4>
                      </div>
                      <p className="repo-description">{repo.description || 'No description'}</p>
                      <div className="repo-footer">
                        {repo.language && (
                          <span className="language">{repo.language}</span>
                        )}
                        <div className="repo-stats">
                          {repo.stargazers_count > 0 && (
                            <span>
                              <FiStar size={14} /> {repo.stargazers_count}
                            </span>
                          )}
                          {repo.forks_count > 0 && (
                            <span>
                              <FiGitBranch size={14} /> {repo.forks_count}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="github-cta"
            >
              <a
                href="https://github.com/JishnuPG-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View All on GitHub →
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubActivity;
