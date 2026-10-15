import { useState } from 'react';
import portrait from '../assets/odile.jpeg';
import { toolkit, GITHUB, CV_URL, CV_FILENAME } from '../data';
import { Label, Pill, SectionHead } from '../components/ui';
import PageHero from '../components/PageHero';
import SkillModal from '../components/SkillModal';
import usePageTitle from '../hooks/usePageTitle';
import './About.css';

const facts = [
  { k: 'Based in', v: 'Kigali, Rwanda' },
  { k: 'Current Role', v: 'Software Developer Intern, Travelis Rwanda Ltd (Fundi Mobile)' },
  { k: 'Education', v: 'BSc Software Engineering, University of Rwanda (October 2026)' },
  { k: 'Focus', v: 'Python / Django backends, React frontends & Flutter mobile' },
  { k: 'Languages', v: 'Kinyarwanda (native), English (fluent)' },
  { k: 'Looking for', v: 'Software engineer roles & forward-thinking teams' },
];

const values = [
  {
    n: '01',
    title: 'Build for real people',
    text: 'My favourite projects solve problems I can see around me — technicians connecting to households on Fundi Mobile, farmers trading directly, community services moving online.',
  },
  {
    n: '02',
    title: 'Learn by shipping',
    text: 'Production internships, workshops, and intensive Django training taught me how to deliver. I learn fastest when real users and real code are on the line.',
  },
  {
    n: '03',
    title: 'Care in the details',
    text: 'Clean data models, readable modular code, and interfaces that feel calm and fast. Thoughtful engineering builds software that people and businesses trust.',
  },
];

function About() {
  usePageTitle('About');
  const [selectedSkill, setSelectedSkill] = useState(null);

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
              I’m completing my BSc in Software Engineering at the University of Rwanda, and most of what I
              know, I learned by building real products.
            </p>
            <div className="about-story__body reveal">
              <p>
                It started with a Carnegie Mellon University Africa bridge programme, wiring sensors for an IoT
                air-monitoring system. From there I moved to the web: building location-based systems at the AFRETEC
                workshop, then a community services platform at IDA Technology, where I integrated APIs so church
                members could request certificates online.
              </p>
              <p>
                At the City of Kigali, working with the ICT Chamber, I helped design a Smart Entry &amp; Service
                Delivery System to replace paper-based processes. Through Solvit Africa’s intensive Django programme I went
                deep on backend architecture, building AgriConnect to connect farmers directly with buyers, and a
                school management system.
              </p>
              <p>
                Today I’m a Software Developer Intern at Travelis Rwanda Ltd, engineering <strong>Fundi Mobile</strong> to connect customers with nearby verified construction technicians and artisans according to their specific repair and building needs. I’m eager to join an engineering team where I can keep building impactful full-stack and mobile solutions.
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
          <SectionHead
            label="Toolkit"
            title="Technologies I use"
          />
          <div className="toolkit">
            {toolkit.map((g, i) => (
              <div key={g.label} className="toolkit__group reveal" style={{ '--d': `${i * 0.05}s` }}>
                <p className="toolkit__label">{g.label}</p>
                <div className="toolkit__items">
                  {g.items.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className="chip chip--clickable"
                      onClick={() => setSelectedSkill(item)}
                      title={`Click to read about ${item} and its application in CV`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillModal skillName={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </>
  );
}

export default About;
