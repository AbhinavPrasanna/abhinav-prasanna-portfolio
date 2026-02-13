import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  project: Project;
  basePath: 'projects' | 'side-projects';
};

export default function ProjectCard({ project, basePath }: ProjectCardProps) {
  const href = `/${basePath}/${project.slug}`;

  return (
    <article className={styles.card}>
      <Link to={href} className={styles.link}>
        <h3 className={styles.title}>{project.title}</h3>
        {project.tagline && <p className={styles.tagline}>{project.tagline}</p>}
        <p className={styles.desc}>{project.description}</p>
        {project.tech && project.tech.length > 0 && (
          <ul className={styles.tech} aria-label="Technologies">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <span className={styles.cta}>View details →</span>
      </Link>
    </article>
  );
}
