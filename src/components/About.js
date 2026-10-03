import { toolkit, GITHUB } from '../data';

function About() {
  return (
    <section className="section about tone-pale" id="about">
      <div className="wrap">
        <p className="eyebrow reveal">01 — About</p>

        <h2 className="display about__statement reveal">
          A software engineer who likes the whole picture — from the <em>data model</em> to the
          last pixel on the screen.
        </h2>

        <div className="about__grid">
          <div className="about__bio reveal">
            <p>
              I’m finishing my BSc in Software Engineering at the University of Rwanda, and most of
              what I know I’ve learned by shipping: a service-delivery system for the City of Kigali,
              a community services website at IDA Technology, and now product work as a developer
              intern at Travelis Rwanda.
            </p>
            <p>
              Lately my focus has been the backend. Through Solvit Africa’s Django programme I built
              AgriConnect, which lets farmers sell directly to buyers without middlemen, and a school
              management system for students, teachers, attendance and exams.
            </p>
            <p>
              I also built iHugure, a small platform encouraging more girls to step into tech —
              something I care about beyond the code.
            </p>
            <a className="link" href={GITHUB} target="_blank" rel="noopener noreferrer">
              See my GitHub ↗
            </a>
          </div>

          <dl className="about__toolkit reveal">
            {toolkit.map((group) => (
              <div key={group.label} className="about__tool">
                <dt>{group.label}</dt>
                <dd>{group.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
