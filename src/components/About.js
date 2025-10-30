import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="profile-img">
                👨‍💻
              </div>
              <div className="glow-effect"></div>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Hello! I'm a Software Engineering Student</h3>
            <p>
              I'm currently in my <strong>4th year</strong> studying Computer and Software Engineering, 
              where I've developed a passion for creating innovative solutions that solve real-world problems.
            </p>
            <p>
              My journey in technology started with curiosity about how things work, and has evolved 
              into a deep commitment to building applications that make a difference. I specialize in 
              <strong> full-stack development</strong>, with expertise in modern web technologies and a 
              growing interest in <strong>artificial intelligence</strong> and <strong>cloud computing</strong>.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with fellow developers. I believe in continuous learning and 
              staying updated with the latest industry trends.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>15+</h4>
                <p>Technologies</p>
              </div>
              <div className="stat-item">
                <h4>4</h4>
                <p>Years Experience</p>
              </div>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <div>
                  <h4>Education</h4>
                  <p>BSc in Computer & Software Engineering</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💼</span>
                <div>
                  <h4>Focus Areas</h4>
                  <p>Full-Stack Development, AI/ML, Cloud</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <div>
                  <h4>Goal</h4>
                  <p>Building impactful tech solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;