import { useEffect, useState } from 'react';
import { CV_URL, CV_FILENAME } from '../data';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // scroll state + reading progress
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 40);
        setProgress(max > 0 ? window.scrollY / max : 0);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // lock page scroll while the mobile menu is open; close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // close the mobile menu if the screen grows past the breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
        <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} />
        <div className="wrap nav__inner">
          <a href="#top" className="nav__mark" aria-label="Odile Masengesho, back to top" onClick={() => setOpen(false)}>
            O<span>M</span>
          </a>

          <nav className="nav__links" id="site-menu" aria-label="Main">
            {links.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? 'is-active' : ''}
                aria-current={active === l.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
                style={{ '--i': i }}
              >
                <small>0{i + 1}</small>
                {l.label}
              </a>
            ))}
            <a className="nav__cv" href={CV_URL} download={CV_FILENAME} style={{ '--i': links.length }}>
              Download CV
            </a>
          </nav>

          <button
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <a href="#top" className={`to-top ${progress > 0.12 ? 'to-top--show' : ''}`} aria-label="Back to top">
        ↑
      </a>
    </>
  );
}

export default Navbar;
