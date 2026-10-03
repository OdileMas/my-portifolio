import { useMemo, useState } from 'react';
import { projects, categories, GITHUB } from '../data';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import { TextLink } from '../components/ui';
import usePageTitle from '../hooks/usePageTitle';
import './Projects.css';

function Projects() {
  usePageTitle('Projects');
  const [filter, setFilter] = useState('All');

  const counts = useMemo(() => {
    const c = { All: projects.length };
    projects.forEach((p) => {
      c[p.category] = (c[p.category] || 0) + 1;
    });
    return c;
  }, []);

  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        label="Projects"
        title={
          <>
            Things I’ve <span className="hl">built</span> so far.
          </>
        }
        intro="Team and personal projects across web, backend and mobile. Open any card for what it does, my role and the stack — plus live demos where they exist."
      />

      <section className="panel">
        <div className="wrap">
          <div className="filters" role="toolbar" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`filters__btn ${filter === c ? 'is-on' : ''}`}
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                disabled={!counts[c]}
              >
                {c}
                <sup>{counts[c] || 0}</sup>
              </button>
            ))}
          </div>

          <div className="projects-grid" key={filter}>
            {shown.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          <div className="projects-more">
            <p>More experiments and coursework live on GitHub.</p>
            <TextLink to={GITHUB} external>
              github.com/OdileMas
            </TextLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
