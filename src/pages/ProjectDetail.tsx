import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { getProject } from '@/data/projects';
import styles from './ProjectDetail.module.css';

const DEMO_SCRIPT_URL = '/3jsWorld/js/3js.js';

function MinecraftDemoEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = containerRef.current?.parentElement;
    if (!wrapper) return;

    const script = document.createElement('script');
    script.type = 'module';
    script.src = DEMO_SCRIPT_URL;
    script.async = true;
    wrapper.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      id="MinecraftWorld"
      ref={containerRef}
      className={styles.demoCanvas}
      aria-label="Minecraft 3js interactive scene"
    />
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const isSide = location.pathname.startsWith('/side-projects');
  const basePath = isSide ? 'side-projects' : 'projects';
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <div className={styles.page}>
        <p>Project not found.</p>
        <Link to={`/${basePath}`}>Back to {isSide ? 'Side Projects' : 'Projects'}</Link>
      </div>
    );
  }

  const body = project.longDescription ?? project.description;

  const content = (
    <>
      <Link to={`/${basePath}`} className={styles.back}>
        ← Back to {isSide ? 'Side Projects' : 'Projects'}
      </Link>
      <h1 className={styles.title}>{project.title}</h1>
      {project.tagline && <p className={styles.tagline}>{project.tagline}</p>}
      {project.videoUrl && (
        <div className={styles.videoWrapper}>
          <iframe
            src={project.videoUrl}
            title={`${project.title} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
        </div>
      )}
      <div className={styles.body}>
        {body.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {project.tech && project.tech.length > 0 && (
        <ul className={styles.tech} aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
      {project.links && project.links.length > 0 && (
        <div className={styles.links}>
          {project.links.map(({ label, url }) =>
            url.startsWith('/') ? (
              <Link key={url} to={url} className={styles.link}>
                {label} →
              </Link>
            ) : (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {label} →
              </a>
            )
          )}
        </div>
      )}
      <nav className={styles.nav} aria-label="Related">
        <Link to="/about">About me</Link>
        <Link to={`/${basePath}`}>Back to {isSide ? 'Side Projects' : 'Projects'}</Link>
      </nav>
      {project.localDemoPath && (
        <div className={styles.embedCard}>
          <h3 className={styles.embedCardTitle}>Interactive 3js demo</h3>
          <p className={styles.embedCardDesc}>
            Explore the Minecraft-style scene built with Three.js. Drag to orbit, scroll to zoom.
          </p>
          <div className={styles.demoWrapper}>
            {project.slug === 'minecraft-3js' ? (
              <MinecraftDemoEmbed />
            ) : (
              <iframe
                src={project.localDemoPath}
                title="Interactive demo"
                className={styles.demoIframe}
              />
            )}
          </div>
        </div>
      )}
      {project.embedUrl && (
        <div className={styles.embedCard}>
          <h3 className={styles.embedCardTitle}>
            {project.embedLabel ?? 'Interactive demo'}
          </h3>
          <p className={styles.embedCardDesc}>
            Try the 3js scene from the{' '}
            <a href="https://github.com/AbhinavPrasanna/SchoolProjects/tree/main/CSE160/MinecraftFigurein3js" target="_blank" rel="noopener noreferrer">MinecraftFigurein3js</a> repo below.
          </p>
          <div className={styles.embedWrapper}>
            <iframe
              src={project.embedUrl}
              title={project.embedLabel ?? 'Project demo'}
              className={styles.embedIframe}
              allowFullScreen
            />
          </div>
        </div>
      )}
      {project.bottomVideoUrl && (
        <div className={`${styles.videoWrapper} ${styles.videoWrapperBottom}`}>
          <iframe
            src={project.bottomVideoUrl}
            title={`${project.title} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
        </div>
      )}
      {project.image && (
        <img
          src={project.image}
          alt=""
          className={styles.bottomImage}
        />
      )}
    </>
  );

  if (project.backgroundImage) {
    return (
      <div className={styles.backgroundWrapper} style={{ backgroundImage: `url(${project.backgroundImage})` }}>
        <div className={styles.backgroundOverlay} />
        <div className={styles.page}>{content}</div>
      </div>
    );
  }

  return <div className={styles.page}>{content}</div>;
}
