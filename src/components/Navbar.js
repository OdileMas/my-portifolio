import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CV_URL, CV_FILENAME } from '../data';
import { ArrowIcon } from './ui';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // close the menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__bar">
        <Link to="/" className="nav__logo" aria-label="Odile Masengesho — home">
          Odile<span>.</span>
        </Link>

        <nav className="nav__links" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__cv" href={CV_URL} download={CV_FILENAME}>
            Download CV
          </a>
          <Link to="/contact" className="pill nav__contact">
            Contact
            <span className="pill__icon">
              <ArrowIcon />
            </span>
          </Link>
          <button
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="nav__sheet" id="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {[...links, { to: '/contact', label: 'Contact' }].map((l, i) => (
            <NavLink key={l.to} to={l.to} end={l.end} style={{ '--i': i }}>
              <small>0{i + 1}</small>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <a className="pill pill--accent nav__sheet-cv" href={CV_URL} download={CV_FILENAME}>
          Download CV
          <span className="pill__icon">
            <ArrowIcon direction="down" />
          </span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
