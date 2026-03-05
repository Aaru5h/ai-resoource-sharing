import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const ARTICLES = [
    {
        id: "understanding-attention",
        title: "Understanding Attention Mechanisms in Transformers",
        date: "Oct 12, 2023",
        tag: "Theory",
        excerpt: "A deep dive into how self-attention works, the math behind it, and why it revolutionized natural language processing capabilities.",
    },
    {
        id: "deploy-local-llm",
        title: "Deploying Local LLMs with standard consumer hardware",
        date: "Nov 05, 2023",
        tag: "Tutorial",
        excerpt: "Step by step guide on using Ollama and llama.cpp to run sophisticated language models on your personal machine securely.",
    },
    {
        id: "future-of-agents",
        title: "The Future of Autonomous Agents",
        date: "Dec 01, 2023",
        tag: "Opinion",
        excerpt: "Exploring the limitations of current agentic frameworks and proposing a new architecture for self-healing code loops.",
    },
];

export default function BlogList() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <header className={`${styles.header} animate-fade-up`}>
                    <h1 className={styles.title}>Articles & Resources</h1>
                    <p className={styles.subtitle}>
                        In-depth guides, theoretical breakdowns, and practical tutorials for AI execution.
                    </p>
                </header>

                <div className={styles.list}>
                    {ARTICLES.map((article, index) => (
                        <Link
                            href={`/blog/${article.id}`}
                            key={article.id}
                            className={`${styles.articleCard} animate-fade-up`}
                            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                        >
                            <div className={styles.meta}>
                                <span className={styles.tag}>{article.tag}</span>
                                <span>•</span>
                                <span>{article.date}</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>
                            <h2 className={styles.articleTitle}>{article.title}</h2>
                            <p className={styles.excerpt}>{article.excerpt}</p>
                            <div className={styles.readMore}>
                                Read Article <ArrowRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
