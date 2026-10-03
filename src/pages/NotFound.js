import { Pill } from '../components/ui';
import usePageTitle from '../hooks/usePageTitle';

function NotFound() {
  usePageTitle('Page not found');

  return (
    <section className="panel page-hero" style={{ minHeight: '70vh' }}>
      <div className="wrap">
        <p className="label">404</p>
        <h1 className="display page-hero__title">
          This page took a <span className="hl">wrong turn.</span>
        </h1>
        <p className="lede page-hero__intro">The link may be old or mistyped. Let’s get you back on track.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 34 }}>
          <Pill to="/">Back home</Pill>
          <Pill to="/projects" variant="ghost">
            See projects
          </Pill>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
