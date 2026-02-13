import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Abhinav <span className={styles.accent}>Prasanna</span>
      </h1>
      <p className={styles.subtitle}>
        Full Stack Developer · UC Santa Cruz CS · Cognizant
      </p>
      <p className={styles.bio}>
        I build web and mobile apps and enjoy 3D (Three.js), backend work, and side projects—documentaries to short films.
      </p>
      <div className={styles.actions}>
        <Link to="/about" className={styles.primary}>
          About me
        </Link>
        <Link to="/projects" className={styles.secondary}>
          Projects
        </Link>
        <Link to="/side-projects" className={styles.secondary}>
          Side projects
        </Link>
      </div>
    </div>
  );
}
