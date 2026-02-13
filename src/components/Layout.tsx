import { ReactNode } from 'react';
import Nav from './Nav';
import styles from './Layout.module.css';

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
