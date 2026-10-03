import { Link, useParams } from 'react-router-dom';
import { projects } from '../data';
import { Label, Pill, ArrowIcon } from '../components/ui';
import usePageTitle from '../hooks/usePageTitle';
import NotFound from './NotFound';
import './ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  usePageTitle(project ? project.title : 'Not found');

  if (!project) return <NotFound />;

  const next = projects[(index + 1) % projects.length];
  const { title, summary, category, year, team, image, live, code, stack, overview, contributions, highlightsTitle } = project;

  return (
    <>
      <section className="panel case-hero">
        <div className="wrap">
          <Link to="/projects" className="case-hero__back reveal">
            <span className="case-hero__back-icon">
              <ArrowIcon />
            </span>
            All projects
          </Link>

          <Label className="reveal">
            {category} · {year}
          </Label>
          <h1 className="display case-hero__title reveal" style={{ '--d': '.06s' }}>
            {title}
          </h1>
          <p className="lede case-hero__summary reveal" style={{ '--d': '.12s' }}>
            {summary}
          </p>

          <div className="case-hero__actions reveal" style={{ '--d': '.18s' }}>
            {live && (
              <Pill to={live} variant="accent" icon="up-right">
                Live demo
              </Pill>
            )}
            {code && (
              <Pill to={code} variant={live ? 'ghost' : ''} icon="up-right">
                Source code
              </Pill>
            )}
          </div>

          <dl className="case-meta reveal" style={{ '--d': '.22s' }}>
            <div>
              <dt>Type</dt>
              <dd>{team}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{year}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{category}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{stack.slice(0, 3).join(', ')}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="panel panel--tight case-shot">
        <div className="wrap">
          {image ? (
            <a
              className="case-shot__frame reveal"
              href={live || code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
            >
              <div className="case-shot__bar">
                <i />
                <i />
                <i />
                <span>{(live || code).replace('https://', '')}</span>
              </div>
              <img src={image} alt={`${title} home page`} />
            </a>
          ) : (
            <div className="case-shot__cover reveal" aria-hidden="true">
              <span>{title}</span>
              <code>{stack.join('  ·  ')}</code>
            </div>
          )}
        </div>
      </section>

      <section className="panel">
        <div className="wrap case-body">
          <div>
            <Label className="reveal">Overview</Label>
            <p className="case-body__overview reveal">{overview}</p>
          </div>
          <div>
            <Label className="reveal">{highlightsTitle || 'Highlights'}</Label>
            <ol className="case-body__list">
              {contributions.map((c, i) => (
                <li key={c} className="reveal" style={{ '--d': `${i * 0.06}s` }}>
                  <span>0{i + 1}</span>
                  {c}
                </li>
              ))}
            </ol>

            <Label className="reveal case-body__stack-label">Built with</Label>
            <div className="case-body__stack reveal">
              {stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Link to={`/projects/${next.slug}`} className="panel panel--tight case-next">
        <div className="wrap case-next__inner">
          <div>
            <p className="case-next__label">Next project</p>
            <p className="case-next__title">{next.title}</p>
          </div>
          <span className="case-next__icon">
            <ArrowIcon />
          </span>
        </div>
      </Link>
    </>
  );
}

export default ProjectDetail;
