import React, { useState, useEffect, useRef } from 'react';
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
      { threshold: 0.2 }
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
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'HTML5 & CSS3', level: 92 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'RESTful APIs', level: 88 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: '☁️',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'MySQL', level: 82 },
        { name: 'AWS', level: 70 },
        { name: 'Firebase', level: 75 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 72 },
        { name: 'Linux', level: 78 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 }
      ]
    }
  ];

  const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Python', color: '#3776AB' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Git', color: '#F05032' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Vue.js', color: '#4FC08D' },
    { name: 'Express', color: '#000000' }
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-container">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-category ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h3 className="tech-title">Technologies I Work With</h3>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`tech-item ${isVisible ? 'animate' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  '--tech-color': tech.color 
                }}
              >
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;