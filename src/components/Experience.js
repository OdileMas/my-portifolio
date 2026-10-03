import { experience } from '../data';

function Experience() {
  return (
    <section className="section experience tone-slate" id="experience">
      <div className="wrap">
        <div className="section__head">
          <p className="eyebrow reveal">02 — Experience</p>
          <h2 className="display section__title reveal">
            Where I’ve <em>worked</em> &amp; trained
          </h2>
        </div>

        <ol className="xp">
          {experience.map((job) => (
            <li key={`${job.org}-${job.period}`} className="xp__item reveal">
              <p className="xp__period">
                {job.period}
                {job.current && <span className="xp__now">Current</span>}
              </p>
              <div>
                <h3 className="xp__role">{job.role}</h3>
                <p className="xp__org">
                  {job.org} <span>— {job.place}</span>
                </p>
              </div>
              <ul className="xp__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
