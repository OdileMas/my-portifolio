import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'CSS/Tailwind', level: 92 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'Express', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'SQL', level: 82 }
      ]
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 72 },
        { name: 'Figma', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-card skill-card ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-bars">
                {category.skills.map((skill, skIndex) => (
                  <div key={skIndex} className="skill-bar-container">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bg">
                      <div
                        className="progress-fill"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;