import { featured, more, GITHUB } from '../data';
import usePointerTilt from '../usePointerTilt';

function Projects() {
  const tilt = usePointerTilt();

  return (
    <section className="section work tone-stone" id="work">
      <div className="wrap">
        <div className="section__head">
          <p className="eyebrow reveal">03 — Selected work</p>
          <h2 className="display section__title reveal">
            Things I’ve <em>built</em>
          </h2>
        </div>

        <div className="work__featured">
          {featured.map((p, i) => (
            <article key={p.title} className={`case reveal ${i % 2 ? 'case--flip' : ''}`}>
              <a
                className="case__media"
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title} live demo`}
                data-cursor="View"
                {...tilt}
              >
                <div className="browser">
                  <div className="browser__bar">
                    <i />
                    <i />
                    <i />
                    <span>{p.live.replace('https://', '')}</span>
                  </div>
                  <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />
                </div>
              </a>

              <div className="case__body">
                <p className="case__index">0{i + 1}</p>
                <p className="case__kind">
                  {p.kind} · {p.year}
                </p>
                <h3 className="display case__title">{p.title}</h3>
                <p className="case__desc">{p.description}</p>
                <p className="case__stack">{p.stack.join('  /  ')}</p>
                <div className="case__links">
                  <a className="link" href={p.live} target="_blank" rel="noopener noreferrer">
                    Live demo ↗
                  </a>
                  <a className="link" href={p.code} target="_blank" rel="noopener noreferrer">
                    Source code ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="more">
          <h3 className="more__heading reveal">More on GitHub</h3>
          <ul className="more__list">
            {more.map((p) => (
              <li key={p.title} className="reveal">
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="more__row">
                  <span className="more__title">
                    {p.title}
                    <small>{p.note}</small>
                  </span>
                  <span className="more__desc">{p.description}</span>
                  <span className="more__stack">{p.stack.join(' · ')}</span>
                  <span className="more__arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-ghost more__all reveal" href={GITHUB} target="_blank" rel="noopener noreferrer">
            Visit my GitHub <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
