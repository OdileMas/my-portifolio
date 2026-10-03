import preview from '../assets/cv-preview.png';
import { experience, education, certifications, CV_URL, CV_FILENAME } from '../data';
import { Pill, SectionHead } from '../components/ui';
import PageHero from '../components/PageHero';
import Timeline from '../components/Timeline';
import usePageTitle from '../hooks/usePageTitle';
import './Resume.css';

function Resume() {
  usePageTitle('Resume');

  return (
    <>
      <PageHero
        label="Resume"
        title={
          <>
            Experience, education &amp; <span className="hl">everything</span> in between.
          </>
        }
        intro="A quick read of my background. Prefer paper? The full CV is one click away."
      >
        <div className="resume-actions reveal" style={{ '--d': '.18s' }}>
          <Pill to={CV_URL} variant="accent" icon="down" download={CV_FILENAME}>
            Download CV (PDF)
          </Pill>
          <Pill to={CV_URL} variant="ghost" icon="up-right" target="_blank" rel="noopener noreferrer">
            Open in browser
          </Pill>
        </div>
      </PageHero>

      <section className="panel">
        <div className="wrap">
          <SectionHead label="Experience" title="Internships & training" />
          <Timeline items={experience} />
        </div>
      </section>

      <section className="panel">
        <div className="wrap resume-split">
          <div>
            <SectionHead label="Education" title="Studies" />
            <ul className="edu">
              {education.map((e) => (
                <li key={e.title} className="edu__item reveal">
                  <p className="edu__period">{e.period}</p>
                  <h3>{e.title}</h3>
                  <p className="edu__org">{e.org}</p>
                  <p className="edu__note">{e.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHead label="Certifications" title="Certificates" />
            <ul className="certs">
              {certifications.map((c, i) => (
                <li key={c.title} className="reveal" style={{ '--d': `${i * 0.04}s` }}>
                  <span>{c.title}</span>
                  <span className="certs__year">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="panel panel--dark">
        <div className="wrap cv-card">
          <div>
            <SectionHead label="Curriculum Vitae" title="The full document" />
            <p className="lede cv-card__text reveal">
              Two pages covering everything above plus technical skills and languages. References are available
              on request.
            </p>
            <p className="cv-card__file reveal">{CV_FILENAME} · PDF · 2 pages</p>
            <div className="resume-actions reveal">
              <Pill to={CV_URL} variant="accent" icon="down" download={CV_FILENAME}>
                Download CV
              </Pill>
            </div>
          </div>
          <a className="cv-card__paper reveal" href={CV_URL} target="_blank" rel="noopener noreferrer" aria-label="Open CV">
            <img src={preview} alt="First page of Odile Masengesho’s CV" loading="lazy" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Resume;
