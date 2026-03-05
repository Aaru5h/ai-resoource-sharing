import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <span className={styles.title}>AI Resource Hub</span>
                        <p className={styles.description}>
                            Curated tutorials, blog posts, and tools for AI/ML/LLM development.
                        </p>
                    </div>
                    <div className={styles.links}>
                        <a href="#" className={styles.link} aria-label="Github">
                            <Github size={20} />
                        </a>
                        <a href="#" className={styles.link} aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className={styles.link} aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} AI Resource Hub. All rights reserved.</p>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <Link href="/" className={styles.link}>Privacy</Link>
                        <Link href="/" className={styles.link}>Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
