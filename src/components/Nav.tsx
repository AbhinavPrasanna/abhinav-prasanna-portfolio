import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/side-projects', label: 'Side Projects' },
];

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <NavLink to="/" className={styles.logo}>
        A<span className={styles.logoAccent}>P</span>
      </NavLink>
      <ul className={styles.links}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
              end={to === '/'}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
