import Link from "next/link";
import { BrainCircuit, Github } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <BrainCircuit className={styles.logoIcon} size={24} />
                    <span>AI Resource Hub</span>
                </Link>
                <nav className={styles.nav}>
                    <div className={styles.navLinks} style={{ display: 'flex', gap: '2rem' }}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/blog" className={styles.link}>Articles</Link>
                        <Link href="/projects" className={styles.link}>Projects</Link>
                    </div>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubButton}
                    >
                        <Github size={18} />
                        <span>GitHub</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
