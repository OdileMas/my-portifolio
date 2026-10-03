import { Link, useLocation } from 'react-router-dom';
import { EMAIL, GITHUB, PHONE, PHONE_HREF, CV_URL, CV_FILENAME } from '../data';
import { Label, Pill } from './ui';
import './Footer.css';

function Footer() {
  // the contact page already has the form, so skip the call to action there
  const onContact = useLocation().pathname === '/contact';

  return (
    <footer className="panel panel--dark footer">
      <div className="wrap">
        {!onContact && (
          <div className="footer__cta">
            <Label className="reveal">Open to opportunities</Label>
            <h2 className="display footer__title reveal" style={{ '--d': '.08s' }}>
              Have a role or project in mind? <span className="hl">Let’s talk.</span>
            </h2>
            <div className="footer__actions reveal" style={{ '--d': '.16s' }}>
              <Pill to="/contact" variant="accent">
                Send a message
              </Pill>
              <Pill to={`mailto:${EMAIL}`} variant="ghost" icon="up-right">
                {EMAIL}
              </Pill>
            </div>
          </div>
        )}

        <div className="footer__grid">
          <div>
            <p className="footer__logo">
              Odile<span>.</span>
            </p>
            <p className="footer__blurb">
              Full-stack developer in Kigali building with Python, Django and React.
            </p>
          </div>

          <div>
            <p className="footer__heading">Pages</p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer__heading">Elsewhere</p>
            <ul>
              <li>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={CV_URL} download={CV_FILENAME}>
                  Download CV ↓
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer__heading">Contact</p>
            <ul>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <a href={PHONE_HREF}>{PHONE}</a>
              </li>
              <li>Kigali, Rwanda</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Odile Masengesho</p>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
