import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.',
      image: '🛒',
      category: 'fullstack',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://demo.example.com'
    },
    {
      id: 2,
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot using natural language processing for customer support automation with 95% accuracy rate.',
      image: '🤖',
      category: 'ai',
      tags: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      github: 'https://github.com/yourusername/chatbot',
      demo: 'https://demo.example.com'
    },
    {
      id: 3,
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
      image: '📱',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com/yourusername/fitness',
      demo: 'https://demo.example.com'
    },
    {
      id: 4,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology for tamper-proof elections.',
      image: '🔐',
      category: 'blockchain',
      tags: ['Solidity', 'Ethereum', 'Web3.js'],
      github: 'https://github.com/yourusername/voting',
      demo: 'https://demo.example.com'
    },
    {
      id: 5,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for analyzing large datasets with custom charts and real-time updates.',
      image: '📊',
      category: 'fullstack',
      tags: ['Vue.js', 'D3.js', 'PostgreSQL'],
      github: 'https://github.com/yourusername/dashboard',
      demo: 'https://demo.example.com'
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with WebSocket support, file sharing, and group conversations.',
      image: '💬',
      category: 'fullstack',
      tags: ['React', 'Socket.io', 'Node.js'],
      github: 'https://github.com/yourusername/chat',
      demo: 'https://demo.example.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'blockchain', name: 'Blockchain' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          A collection of projects that showcase my skills and passion for development
        </p>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>GitHub</span>
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;