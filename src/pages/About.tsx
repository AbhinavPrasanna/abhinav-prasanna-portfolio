import { Link } from 'react-router-dom';
import styles from './About.module.css';

const LINKEDIN = 'https://www.linkedin.com/in/abhinavprasanna/';

export default function About() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        <p>
          Hi, my name is <strong>Abhinav Prasanna</strong>. I am a Site Reliability Engineer and Full Stack Software Engineer with 2+ years of enterprise full-time experience across healthcare, finance, and technology.
        </p>
        <p>
          I am currently working at Centene, contracting through Cognizant, supporting large-scale distributed systems and IT operations. I leverage AI-assisted development (GPT-4, GitHub Copilot, Microsoft Copilot, Gemini) in my day-to-day work to accelerate delivery.
        </p>
        <p>
          I have a strong background in cross-functional collaboration, cloud architecture (AWS), and scalable microservices. I am passionate about working on teams that depend on collaboration, open communication, and a supportive environment.
        </p>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
          LinkedIn →
        </a>
        <Link to="/experience" className={styles.experienceButton}>
          View experience →
        </Link>
        <img
          src="/images/profile-picture-edited.jpg"
          alt="Abhinav Prasanna"
          className={styles.profileImage}
        />
      </div>
    </div>
  );
}
