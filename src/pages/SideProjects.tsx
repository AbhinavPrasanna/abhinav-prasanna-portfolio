import { sideProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './ProjectsList.module.css';

export default function SideProjects() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Side Projects</h1>
      <p className={styles.intro}>
        Documentaries, films, and PSAs from non-tech internships, school, and spare time.
      </p>
      <ul className={styles.grid} aria-label="Side project list">
        {sideProjects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} basePath="side-projects" />
          </li>
        ))}
      </ul>
    </div>
  );
}
