import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Software Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Odile</span>
          </h1>
          <div className="typing-container">
            <h2 className="hero-subtitle">
              I'm a <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h2>
          </div>
          <p className="hero-description">
           A student pursuing bachelor's degree in Computer & Software Engineering  | Year 4
            <br />
            Passionate and consistent about building innovative solutions that make a difference in real world.<br />
            I like to learn new things and get to have new skills so that i can be competitive on the market.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="hero-social">
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="social-icon">
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
            <span>LinkedIn</span>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
            <span>Twitter</span>
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}

export default Hero;