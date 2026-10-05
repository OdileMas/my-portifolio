import { useState } from 'react';
import portrait from '../assets/odile.jpeg';
import { projects, experience, services, stats, CV_URL, CV_FILENAME } from '../data';
import { Label, Pill, SectionHead, TextLink, ArrowIcon } from '../components/ui';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import Counter from '../components/Counter';
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
          {'    '}stack = [<span className="s">"Django"</span>, <span className="s">"React"</span>, <span className="s">"PostgreSQL"</span>]{'\n'}
          {'    '}based_in = <span className="s">"Kigali, Rwanda"</span>{'\n'}
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
            <span className="hero__dot" /> Open to junior developer roles
          </p>
          <h1 className="display hero__title hero-in" style={{ '--d': '.08s' }}>
            Hi, I’m Odile. I build web apps that make <span className="hl">everyday life</span> easier.
          </h1>
          <p className="hero__sub hero-in" style={{ '--d': '.16s' }}>
            A full-stack developer in Kigali, happiest when a Django backend and a React frontend click into
            place. Right now I’m a Developer Intern at Travelis Rwanda.
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
              Developer Intern
              <span>Travelis Rwanda Ltd</span>
            </p>
            <div className="status-card__degree">
              <p>
                BSc Software Engineering <span>Graduating in october 2026</span>
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
            I enjoy the whole journey of software — <span>from the data model to the deployed product —
            and I build for real problems close to home: farmers, community services, schools and safety.</span>
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

function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section className="panel panel--dark services">
      <div className="wrap">
        <SectionHead label="What I do" title="Skills I bring to a team" action={<TextLink to="/resume">See full resume</TextLink>} />

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
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="svc__arrow">
                    <ArrowIcon direction={isOpen ? 'down' : 'right'} />
                  </span>
                  <span className="svc__title">
                    /{s.title}
                    <sup>(0{i + 1})</sup>
                  </span>
                </button>
                <div className="svc__body" id={`svc-${i}`} hidden={!isOpen}>
                  <p>{s.text}</p>
                  <div className="svc__tags">
                    {s.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
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
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <Glance />
      <Services />

      <section className="panel">
        <div className="wrap">
          <SectionHead label="Selected work" title="Projects I’ve built" action={<TextLink to="/projects">View all projects</TextLink>} />
          <div className="home-work">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="wrap">
          <SectionHead label="Experience" title="Where I’ve worked" action={<TextLink to="/resume">Full resume</TextLink>} />
          <Timeline items={experience.slice(0, 4)} />
        </div>
      </section>
    </>
  );
}

export default Home;
