import preview from '../assets/cv-preview.png';
import { CV_URL, CV_FILENAME } from '../data';

function Resume() {
  return (
    <section className="section resume tone-sage" id="cv">
      <div className="wrap resume__grid">
        <div className="resume__text">
          <p className="eyebrow reveal">04 — Curriculum Vitae</p>
          <h2 className="display section__title reveal">
            The full story, <em>on paper</em>
          </h2>
          <p className="resume__lede reveal">
            Internships, the Django programme at Solvit Africa, education and certifications —
            everything in one document, updated October 2026. References available on request.
          </p>
          <div className="resume__actions reveal">
            <a className="btn btn-solid" href={CV_URL} download={CV_FILENAME}>
              Download CV <span className="arrow">↓</span>
            </a>
            <a className="btn btn-dark" href={CV_URL} target="_blank" rel="noopener noreferrer">
              View in browser
            </a>
          </div>
          <p className="resume__file reveal">{CV_FILENAME} · PDF · 2 pages</p>
        </div>

        <a className="resume__paper reveal" href={CV_URL} target="_blank" rel="noopener noreferrer" aria-label="Open CV">
          <img src={preview} alt="First page of Odile Masengesho’s CV" loading="lazy" />
        </a>
      </div>
    </section>
  );
}

export default Resume;
