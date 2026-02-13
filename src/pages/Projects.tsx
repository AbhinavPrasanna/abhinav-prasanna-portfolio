import { mainProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './ProjectsList.module.css';

export default function Projects() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.intro}>
        Work from internships, school, and collaborations.
      </p>
      <ul className={styles.grid} aria-label="Project list">
        {mainProjects.filter((p) => p.slug !== 'minecraft-breakdown').map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} basePath="projects" />
          </li>
        ))}
      </ul>
    </div>
  );
}
