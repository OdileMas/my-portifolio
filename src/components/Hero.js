import { useState, useEffect } from 'react';
import './Hero.css';
import profileImage from '../assets/mee.jpeg';

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Software Engineer',
    'Full Stack Developer',
    'Creative Designer',
    'Problem Solver'
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
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          <h2 className="greeting fade-in">Hello, I'm</h2>
          <h1 className="name fade-in-up">
            <span className="gradient-text">Odile</span> Mas
          </h1>

          <div className="typing-wrapper fade-in-up delay-1">
            <span className="static-text">I am a </span>
            <span className="dynamic-text">{text}</span>
            <span className="cursor">|</span>
          </div>

          <p className="description fade-in-up delay-2">
            A passionate Computer & Software Engineering student committed to building innovative,
            user-centric solutions that bridge the gap between complex problems and elegant experiences.
          </p>

          <div className="cta-container fade-in-up delay-3">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-visual fade-in delay-2">
          <div className="profile-image-container">
            <img src={profileImage} alt="Odile Mas" className="profile-image" />
          </div>
        </div>
      </div>

      <div className="scroll-down fade-in delay-4" onClick={() => scrollToSection('about')}>
        <span>Scroll Down</span>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
}

export default Hero;