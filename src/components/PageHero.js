import { Label } from './ui';
import './PageHero.css';

// Header panel for inner pages (About, Projects, Resume, Contact)
function PageHero({ label, title, intro, children }) {
  return (
    <section className="panel page-hero">
      <div className="wrap">
        <Label className="reveal">{label}</Label>
        <h1 className="display page-hero__title reveal" style={{ '--d': '.06s' }}>
          {title}
        </h1>
        {intro && (
          <p className="lede page-hero__intro reveal" style={{ '--d': '.12s' }}>
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export default PageHero;
