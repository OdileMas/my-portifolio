import { useEffect } from 'react';
import { skillIntros, CV_URL, CV_FILENAME } from '../data';
import { Pill } from './ui';
import './SkillModal.css';

function SkillModal({ skillName, onClose }) {
  useEffect(() => {
    if (!skillName) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [skillName, onClose]);

  if (!skillName) return null;

  const data = skillIntros[skillName] || {
    category: 'Technology & Practice',
    intro: `I leverage ${skillName} to engineer maintainable, secure software solutions tailored to real-world operational challenges.`,
    cvRecommendation: `Explore production projects, internships, and technical competencies featuring ${skillName} in my updated CV.`,
  };

  return (
    <div
      className="skill-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="skill-modal">
        <button
          type="button"
          className="skill-modal__close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="skill-modal__header">
          <span className="skill-modal__badge">{data.category}</span>
        </div>

        <h2 className="skill-modal__title" id="skill-modal-title">
          {skillName}
        </h2>

        <p className="skill-modal__intro-title">Introduction</p>
        <p className="skill-modal__intro">{data.intro}</p>

        <div className="skill-modal__rec">
          <p className="skill-modal__rec-tag">Recommended in CV</p>
          <p className="skill-modal__rec-text">
            {data.cvRecommendation}
          </p>
        </div>

        <div className="skill-modal__actions">
          <Pill to={CV_URL} variant="accent" icon="down" download={CV_FILENAME} onClick={onClose}>
            Download CV
          </Pill>
          <Pill to="/resume" variant="ghost" onClick={onClose}>
            View full resume
          </Pill>
        </div>
      </div>
    </div>
  );
}

export default SkillModal;
