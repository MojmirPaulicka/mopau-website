import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' }
];

export function Layout({ children, title = 'Mopau Studio', description = 'Digital studio site scaffold' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/brand-icon.svg" />
      </Head>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.logoGroup}>
            <img src="/brand-icon.svg" alt="Mopau logo" width="40" height="40" />
            <div>
              <strong>Mopau Studio</strong>
              <p>Future-friendly digital craft</p>
            </div>
          </div>
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Mopau Studio. All rights reserved.</p>
          <div className={styles.socialRow}>
            <a href="mailto:hello@mopau.studio">Email</a>
            <span aria-hidden="true">•</span>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
