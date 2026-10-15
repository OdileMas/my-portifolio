import { useState } from 'react';
import portrait from '../assets/odile.jpeg';
import { projects, experience, services, stats, CV_URL, CV_FILENAME } from '../data';
import { Label, Pill, SectionHead, TextLink, ArrowIcon } from '../components/ui';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import Counter from '../components/Counter';
import SkillModal from '../components/SkillModal';
import usePageTitle from '../hooks/usePageTitle';
import './Home.css';

function CodeCard() {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-card__bar">
        <i />
        <i />
        <i />
        <span>odile/models.py</span>
      </div>
      <pre>
        <code>
          <span className="k">class</span> <span className="t">Developer</span>(models.Model):{'\n'}
          {'    '}name = <span className="s">"Odile Masengesho"</span>{'\n'}
          {'    '}stack = [<span className="s">"Django"</span>, <span className="s">"React"</span>, <span className="s">"Flutter"</span>]{'\n'}
          {'    '}role = <span className="s">"Travelis Rwanda · Fundi Mobile"</span>{'\n'}
          {'\n'}
          {'    '}<span className="k">def</span> <span className="f">build</span>(self, idea):{'\n'}
          {'        '}<span className="k">return</span> ship(idea, with_care=<span className="t">True</span>)<span className="caret" />
        </code>
      </pre>
    </div>
  );
}

function Hero() {
  return (
    <section className="panel panel--dark hero">
      <div className="wrap hero__inner">
        <div className="hero__photo">
          <img src={portrait} alt="Odile Masengesho" fetchPriority="high" />
        </div>

        <div className="hero__copy">
          <p className="hero__badge hero-in">
            <span className="hero__dot" /> Open to software developer roles
          </p>
          <h1 className="display hero__title hero-in" style={{ '--d': '.08s' }}>
            Hi, I’m Odile. I build web &amp; mobile apps that make <span className="hl">everyday life</span> easier.
          </h1>
          <p className="hero__sub hero-in" style={{ '--d': '.16s' }}>
            A full-stack software engineer in Kigali, happiest when a robust backend and an intuitive frontend
            click into place. Right now I’m a Software Developer Intern at Travelis Rwanda Ltd building Fundi Mobile.
          </p>
          <div className="hero__actions hero-in" style={{ '--d': '.24s' }}>
            <Pill to="/projects" variant="accent">
              View my work
            </Pill>
            <Pill to={CV_URL} variant="ghost" icon="down" download={CV_FILENAME}>
              Download CV
            </Pill>
          </div>
        </div>

        <div className="hero__float">
          <CodeCard />

          <div className="status-card">
            <div className="status-card__head">
              <p className="status-card__label">Right now</p>
              <span className="status-card__live">Active</span>
            </div>
            <p className="status-card__role">
              Software Developer Intern
              <span>Travelis Rwanda Ltd · Fundi Mobile</span>
            </p>
            <div className="status-card__degree">
              <p>
                BSc Software Engineering <span>Graduating in October 2026</span>
              </p>
              <div className="status-card__bars">
                {Array.from({ length: 24 }).map((_, i) => (
                  <i key={i} className={i < 22 ? 'on' : ''} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Glance() {
  return (
    <section className="panel glance">
      <div className="wrap">
        <div className="glance__intro">
          <Label className="reveal">Who I am</Label>
          <p className="glance__statement reveal" style={{ '--d': '.08s' }}>
            I enjoy the whole journey of software — <span>from database modeling and API architecture to fluid UI,
            and I build for real problems close to home: technicians, farmers, community services and security.</span>
          </p>
        </div>

        <div className="bento">
          <article className="bento__card bento__card--dark reveal">
            <p className="bento__kicker">What drives me</p>
            <p className="bento__quote">
              “Good software quietly removes friction from someone’s day. That’s the part I care about.”
            </p>
            <TextLink to="/about">More about me</TextLink>
          </article>

          {stats.map((s, i) => (
            <article key={s.label} className="bento__card reveal" style={{ '--d': `${0.06 * (i + 1)}s` }}>
              <p className="bento__num">
                <Counter value={s.value} suffix={s.suffix} plain={s.plain} />
              </p>
              <p className="bento__label">{s.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ onSelectSkill }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="panel panel--dark services">
      <div className="wrap">
        <SectionHead
          label="What I do"
          title="Skills & specialties I bring to a team"
          action={<TextLink to="/resume">See full resume</TextLink>}
        />

        <ul className="svc">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.title} className={`svc__item reveal ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="svc__head"
                  aria-expanded={isOpen}
                  aria-controls={`svc-${i}`}
                  onClick={() => setOpen(i)}
                >
                  <span className="svc__arrow">
                    <ArrowIcon direction={isOpen ? 'down' : 'right'} />
                  </span>
                  <span className="svc__title">
                    <span>
                      /{s.title}
                      <sup>(0{i + 1})</sup>
                    </span>
                  </span>
                </button>
                <div className="svc__body" id={`svc-${i}`} hidden={!isOpen}>
                  <p className="svc__intro">{s.intro || s.summary}</p>

                  <div className="svc__rec">
                    <p className="svc__rec-label">Recommended in CV</p>
                    <p className="svc__rec-text">{s.cvRecommendation}</p>
                    <div className="svc__rec-actions">
                      <Pill to={CV_URL} variant="accent" icon="down" download={CV_FILENAME}>
                        Download CV
                      </Pill>
                      <Pill to="/resume" variant="ghost">
                        See full resume
                      </Pill>
                    </div>
                  </div>

                  <p className="svc__tags-label">Key technologies (click for details):</p>
                  <div className="svc__tags">
                    {s.tags.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className="chip chip--clickable"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectSkill(t);
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Home() {
  usePageTitle('');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <Glance />
      <Services onSelectSkill={setSelectedSkill} />

      <section className="panel">
        <div className="wrap">
          <SectionHead
            label="Selected work"
            title="Projects I’ve built & contributed to"
            action={<TextLink to="/projects">View all projects</TextLink>}
          />
          <div className="home-work">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} onSelectSkill={setSelectedSkill} />
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="wrap">
          <SectionHead
            label="Experience"
            title="Where I’ve worked"
            action={<TextLink to="/resume">Full resume</TextLink>}
          />
          <Timeline items={experience.slice(0, 4)} />
        </div>
      </section>

      <SkillModal skillName={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </>
  );
}

export default Home;
