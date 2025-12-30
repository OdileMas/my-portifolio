import React, { useEffect, useRef, useState } from 'react';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className={`about-container ${isVisible ? 'animate' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image-card">
              <div className="image-placeholder">
                <span className="profile-emoji">👩‍💻</span>
              </div>
              <div className="card-backdrop"></div>
            </div>
            <div className="experience-badge">
              <span className="years">4+</span>
              <span className="text">Years<br />Experience</span>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-heading">Software Engineering Student & <span className="highlight">Creative Developer</span></h3>

            <p className="about-description">
              I'm currently in my <strong className="highlight">4th year</strong> studying Computer and Software Engineering.
              My journey is defined by a passion for solving complex problems through elegant code.
            </p>
            <p className="about-description">
              I specialize in <strong className="highlight">Full-Stack Development</strong>, crafting seamless digital experiences form the database to the user interface.
              I'm constantly exploring new technologies in <strong>AI/ML</strong> and <strong>Cloud Computing</strong> to stay ahead of the curve.
            </p>

            <div className="about-stats-grid">
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8+</div>
                <div className="stat-label">technologies mastered</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Commitment</div>
              </div>
            </div>

            <div className="about-actions">
              <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView()}>
                Let's Talk
              </button>
              <button className="btn btn-outline" onClick={() => window.open('https://github.com/OdileMas', '_blank')}>
                View GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;