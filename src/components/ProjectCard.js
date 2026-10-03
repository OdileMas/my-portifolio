import { Link } from 'react-router-dom';
import { ArrowIcon } from './ui';
import './ProjectCard.css';

// Card linking to a project's case-study page. Projects without a
// screenshot get a typographic cover so the grid stays consistent.
function ProjectCard({ project, index, large = false }) {
  const { slug, title, summary, category, year, image, stack, live } = project;

  return (
    <Link to={`/projects/${slug}`} className={`pcard reveal ${large ? 'pcard--large' : ''}`} style={{ '--d': `${(index % 3) * 0.08}s` }}>
      <div className="pcard__media">
        {image ? (
          <img src={image} alt={`${title} screenshot`} loading="lazy" />
        ) : (
          <div className="pcard__cover" aria-hidden="true">
            <span className="pcard__cover-title">{title}</span>
            <span className="pcard__cover-stack">{stack.slice(0, 3).join(' · ')}</span>
          </div>
        )}
        <span className="pcard__open" aria-hidden="true">
          <ArrowIcon direction="up-right" />
        </span>
        {live && <span className="pcard__live">Live</span>}
      </div>

      <div className="pcard__body">
        <p className="pcard__meta">
          <span>{category}</span>
          <span>{year}</span>
        </p>
        <h3 className="pcard__title">{title}</h3>
        <p className="pcard__summary">{summary}</p>
        <div className="pcard__tags">
          {stack.slice(0, 4).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
