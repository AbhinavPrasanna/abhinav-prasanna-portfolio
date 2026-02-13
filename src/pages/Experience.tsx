import { Link } from 'react-router-dom';
import styles from './Experience.module.css';

const LINKEDIN = 'https://www.linkedin.com/in/abhinavprasanna/';

export default function Experience() {
  return (
    <div className={styles.page}>
      <Link to="/about" className={styles.back}>
        ← Back to About
      </Link>
      <h1 className={styles.title}>Experience</h1>
      <p className={styles.intro}>
        Full-time and internship roles across healthcare, finance, and technology.
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
          View full profile on LinkedIn →
        </a>
      </p>
      <ul className={styles.positions}>
        <li className={styles.position}>
          <span className={styles.positionRole}>Site Reliability Engineer</span>
          <span className={styles.positionCompany}>Centene Corporation</span>
          <span className={styles.positionMeta}>Jan 2025 – Present · Remote</span>
          <p className={styles.positionDesc}>Lead cross-LOB collaboration to troubleshoot enterprise applications. Debug Spring Boot microservices, optimize SQL in Oracle, fix Python automation scripts, and resolve document processing issues.</p>
        </li>
        <li className={styles.position}>
          <span className={styles.positionRole}>Full Stack Engineer</span>
          <span className={styles.positionCompany}>Cognizant</span>
          <span className={styles.positionMeta}>Aug 2023 – Present · Pleasanton, CA</span>
          <p className={styles.positionDesc}>Built Indie Movie Platform with React and ASP.NET; AWS Cognito, S3, Elastic Beanstalk, RDS, CloudFront, CodePipeline; unit and integration tests in React and C#.</p>
        </li>
        <li className={styles.position}>
          <span className={styles.positionRole}>Site Reliability Engineer</span>
          <span className={styles.positionCompany}>Kaiser Permanente</span>
          <span className={styles.positionMeta}>Jun 2024 – Jan 2025 · Remote</span>
          <p className={styles.positionDesc}>Node.js APIs with AI-assisted development; unit and integration tests; deployment coordination; Splunk for logs and production troubleshooting; security-focused versioning.</p>
        </li>
        <li className={styles.position}>
          <span className={styles.positionRole}>Digital Engineer Intern</span>
          <span className={styles.positionCompany}>Cognizant</span>
          <span className={styles.positionMeta}>Jun 2022 – Jul 2022 · Plano, TX</span>
          <p className={styles.positionDesc}>React, React Native, Spring Boot, Docker, RabbitMQ; REST APIs with Postman; containerization and message-driven architecture.</p>
        </li>
        <li className={styles.position}>
          <span className={styles.positionRole}>CCIBT Technology Intern</span>
          <span className={styles.positionCompany}>Wells Fargo</span>
          <span className={styles.positionMeta}>Jun 2021 – Aug 2021 · Chandler, AZ</span>
          <p className={styles.positionDesc}>Migrated XPM5 to Angular (grid and search components); unit and integration testing with Karma and Jasmine; code coverage.</p>
        </li>
        <li className={styles.position}>
          <span className={styles.positionRole}>Leadership Development Intern</span>
          <span className={styles.positionCompany}>RippleMatch</span>
          <span className={styles.positionMeta}>Aug 2020 – Oct 2020 · New York</span>
          <p className={styles.positionDesc}>Recruiting and growth strategies; social media, email marketing, presentations; performance metrics and user growth.</p>
        </li>
        <li className={styles.position}>
          <span className={styles.positionRole}>Assistant Team Lead</span>
          <span className={styles.positionCompany}>Go Green Initiative</span>
          <span className={styles.positionMeta}>May 2020 – Jul 2020 · Pleasanton, CA</span>
          <p className={styles.positionDesc}>Led 10 interns on water conservation; outreach with California Department of Water Resources and local officials.</p>
        </li>
      </ul>
    </div>
  );
}
