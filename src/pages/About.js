import portrait from '../assets/odile.jpeg';
import { toolkit, GITHUB, CV_URL, CV_FILENAME } from '../data';
import { Label, Pill, SectionHead } from '../components/ui';
import PageHero from '../components/PageHero';
import usePageTitle from '../hooks/usePageTitle';
import './About.css';

const facts = [
  { k: 'Based in', v: 'Kigali, Rwanda' },
  { k: 'Role', v: 'Developer Intern, Travelis Rwanda' },
  { k: 'Education', v: 'BSc Software Engineering, University of Rwanda (2026)' },
  { k: 'Focus', v: 'Python / Django backends, React frontends' },
  { k: 'Languages', v: 'Kinyarwanda (native), English (fluent)' },
  { k: 'Looking for', v: 'Junior developer roles & internships' },
];

const values = [
  {
    n: '01',
    title: 'Build for real people',
    text: 'My favourite projects solve problems I can see around me — farmers selling without middlemen, churches serving members online, neighbourhoods staying safe.',
  },
  {
    n: '02',
    title: 'Learn by shipping',
    text: 'Internships, workshops and an intensive Django programme taught me most of what I know. I learn fastest with something real on the line.',
  },
  {
    n: '03',
    title: 'Care in the details',
    text: 'Clean data models, readable code and interfaces that feel calm. Small things add up to software people trust.',
  },
];

function About() {
  usePageTitle('About');

  return (
    <>
      <PageHero
        label="About me"
        title={
          <>
            Engineer by training, <span className="hl">builder</span> by habit.
          </>
        }
        intro="I’m Odile Masengesho, a software engineer from Kigali who loves turning messy, real-world processes into simple, reliable software."
      />

      <section className="panel">
        <div className="wrap about-story">
          <figure className="about-story__photo reveal">
            <img src={portrait} alt="Odile Masengesho" loading="lazy" />
            <figcaption>
              <span>Odile Masengesho</span>
              <span>Kigali, Rwanda</span>
            </figcaption>
          </figure>

          <div className="about-story__text">
            <Label className="reveal">My story</Label>
            <p className="about-story__lead reveal">
              I’m finishing my BSc in Software Engineering at the University of Rwanda — and most of what I
              know, I learned by building.
            </p>
            <div className="about-story__body reveal">
              <p>
                It started with a Carnegie Mellon University Africa bridge programme, wiring sensors for an IoT
                air-monitoring system. From there I moved to the web: a location-based site at the AFRETEC
                workshop, then a community services website at IDA Technology, where I integrated APIs so church
                members could request certificates online.
              </p>
              <p>
                At the City of Kigali, working with the ICT Chamber, I helped design a Smart Entry &amp; Service
                Delivery System to replace paper-based processes. Through Solvit Africa’s Django programme I went
                deep on the backend — building AgriConnect, which connects farmers directly with buyers, and a
                school management system.
              </p>
              <p>
                Today I’m a developer intern at Travelis Rwanda, contributing to real products every day, and
                I’m looking for a team where I can keep growing as a full-stack engineer.
              </p>
            </div>
            <div className="about-story__actions reveal">
              <Pill to={CV_URL} download={CV_FILENAME} icon="down">
                Download CV
              </Pill>
              <Pill to={GITHUB} variant="ghost" icon="up-right">
                GitHub
              </Pill>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="wrap">
          <SectionHead label="Quick facts" title="The short version" />
          <dl className="facts">
            {facts.map((f, i) => (
              <div key={f.k} className="facts__row reveal" style={{ '--d': `${i * 0.04}s` }}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="panel panel--dark">
        <div className="wrap">
          <SectionHead label="What I value" title="How I like to work" />
          <div className="values">
            {values.map((v, i) => (
              <article key={v.n} className="values__card reveal" style={{ '--d': `${i * 0.08}s` }}>
                <span className="values__n">({v.n})</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="wrap">
          <SectionHead label="Toolkit" title="Technologies I use" />
          <div className="toolkit">
            {toolkit.map((g, i) => (
              <div key={g.label} className="toolkit__group reveal" style={{ '--d': `${i * 0.05}s` }}>
                <p className="toolkit__label">{g.label}</p>
                <div className="toolkit__items">
                  {g.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
