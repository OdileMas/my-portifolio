import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'The Locator',
      description: 'Full-stack e-commerce solution with payment integration and analytics.',
      image: '🛒',
      category: 'fullstack',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/OdileMas/TheLocator'
    },
    {
      id: 2,
      title: 'iHugure AI',
      description: 'Intelligent chatbot for customer support automation.',
      image: '🤖',
      category: 'ai',
      tags: ['Python', 'NLP', 'Flask'],
      link: 'https://github.com/OdileMas/iHugure'
    },
    {
      id: 3,
      title: 'Farmer Trading',
      description: 'Cross-platform mobile app for trading agricultural products.',
      image: '🌾',
      category: 'mobile',
      tags: ['React Native', 'Firebase'],
      link: 'https://github.com/OdileMas/farmer_trading_app'
    },
    {
      id: 4,
      title: 'Cafe Locator',
      description: 'Blockchain-based voting and location platform.',
      image: '☕',
      category: 'blockchain',
      tags: ['Solidity', 'Web3.js'],
      link: 'https://github.com/OdileMas/CafeLocator-Rwanda'
    },
    {
      id: 5,
      title: 'City Plus',
      description: 'Data visualization dashboard for urban planning.',
      image: '🏙️',
      category: 'fullstack',
      tags: ['Vue.js', 'D3.js'],
      link: 'https://github.com/OdileMas/city-plus'
    },
    {
      id: 6,
      title: 'Finance Tracker',
      description: 'Personal finance management with real-time updates.',
      image: '💰',
      category: 'fullstack',
      tags: ['React', 'Firebase'],
      link: 'https://github.com/OdileMas/financce-tracker'
    }
  ];

  const categories = ['all', 'fullstack', 'ai', 'mobile', 'blockchain'];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        </div>

        <div className="filter-container">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="card-image">
                <div className="emoji-display">{project.image}</div>
                <div className="overlay">
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    View Code
                  </a>
                </div>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;