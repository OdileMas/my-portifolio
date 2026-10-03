import portrait from '../assets/odile.jpeg';
import { CV_URL, CV_FILENAME } from '../data';
import usePointerTilt from '../usePointerTilt';

const ribbon = ['Python', 'Django', 'React', 'REST APIs', 'PostgreSQL', 'Node.js', 'FastAPI', 'MongoDB', 'Flutter'];

function Hero() {
  const tilt = usePointerTilt();

  return (
    <section className="hero tone-stone" id="top" {...tilt}>
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="eyebrow hero__rise">Full-Stack Developer · Kigali, Rwanda</p>

          <h1 className="display hero__name hero__rise" style={{ animationDelay: '.1s' }}>
            Odile
            <br />
            <em>Masengesho</em>
          </h1>

          <p className="hero__lede hero__rise" style={{ animationDelay: '.25s' }}>
            I build web applications from the database up — Python and Django on the server, React in
            the browser — and I care about the small details people actually touch.
          </p>

          <p className="hero__status hero__rise" style={{ animationDelay: '.35s' }}>
            <span className="dot" /> Currently Developer Intern at <strong>Travelis Rwanda</strong>
          </p>

          <div className="hero__actions hero__rise" style={{ animationDelay: '.45s' }}>
            <a href="#work" className="btn btn-solid">
              Selected work <span className="arrow">→</span>
            </a>
            <a href={CV_URL} download={CV_FILENAME} className="btn btn-ghost">
              Download CV
            </a>
          </div>
        </div>

        <figure className="hero__portrait">
          <div className="hero__frame">
            <span className="hero__ornament" aria-hidden="true" />
            <img src={portrait} alt="Portrait of Odile Masengesho" fetchPriority="high" />
          </div>
          <figcaption>
            <span>Odile Masengesho</span>
            <span>Kigali, 2026</span>
          </figcaption>
        </figure>
      </div>

      <div className="wrap">
        <ul className="hero__facts">
          <li className="hero__rise" style={{ animationDelay: '.55s' }}>
            <span>Now</span>
            Developer Intern, Travelis Rwanda
          </li>
          <li className="hero__rise" style={{ animationDelay: '.65s' }}>
            <span>Training</span>
            Django Full-Stack, Solvit Africa
          </li>
          <li className="hero__rise" style={{ animationDelay: '.75s' }}>
            <span>Studying</span>
            BSc Software Engineering, UR
          </li>
        </ul>
      </div>

      <div className="ribbon" aria-hidden="true">
        <div className="ribbon__track">
          {[...ribbon, ...ribbon].map((word, i) => (
            <span key={i}>
              {word}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
