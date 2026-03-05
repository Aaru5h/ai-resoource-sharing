"use client";

import { Folder, ExternalLink, Star, GitFork } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import styles from "./page.module.css";

const PROJECTS = [
    {
        id: 1,
        title: "Agentic AutoRAG",
        description: "An automated self-healing RAG pipeline that re-queries when context is insufficient. Built from scratch without external frameworks.",
        tech: ["Python", "OpenAI", "FAISS", "FastAPI"],
        stars: 128,
        forks: 24,
        link: "https://github.com",
    },
    {
        id: 2,
        title: "nano-GPT Custom",
        description: "Modified version of Andrej Karpathy's nanoGPT using Rotary Position Embeddings and specialized layer normalization.",
        tech: ["PyTorch", "CUDA", "Python"],
        stars: 84,
        forks: 12,
        link: "https://github.com",
    },
    {
        id: 3,
        title: "Terminal LLM UI",
        description: "A beautiful, rich terminal interface for interacting with local standard models. Supports markdown rendering in terminal.",
        tech: ["Rust", "Ratatui", "llama.cpp"],
        stars: 256,
        forks: 46,
        link: "https://github.com",
    },
    {
        id: 4,
        title: "ML Math Visualizer",
        description: "Interactive WebGL visualizer for common machine learning primitives: gradient descent, matrices, activation functions.",
        tech: ["TypeScript", "Three.js", "React"],
        stars: 1042,
        forks: 184,
        link: "https://github.com",
    },
];

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <header className={`${styles.header} animate-fade-up`}>
                    <h1 className={styles.title}>Projects & GitHub</h1>
                    <p className={styles.subtitle}>
                        Open source contributions, experiments, and tools built to push the limits.
                    </p>
                </header>

                <div className={styles.grid}>
                    {PROJECTS.map((project, index) => (
                        <div key={project.id} style={{ animationDelay: `${(index + 1) * 0.15}s` }} className="animate-fade-up">
                            <SpotlightCard style={{ height: "100%" }}>
                                <div style={{ display: "flex", flexDirection: "column", padding: "1.5rem", height: "100%" }}>
                                    <div className={styles.cardHeader}>
                                        <Folder size={24} className={styles.folderIcon} />
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.externalLink}
                                            aria-label="View Project on GitHub"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                    <h2 className={styles.projectTitle}>{project.title}</h2>
                                    <p className={styles.projectDesc}>{project.description}</p>

                                    <div className={styles.techStack}>
                                        {project.tech.map((t) => (
                                            <span key={t} className={styles.tech}>{t}</span>
                                        ))}
                                    </div>

                                    <div className={styles.cardFooter}>
                                        <div className={styles.stat}>
                                            <Star size={16} /> {project.stars}
                                        </div>
                                        <div className={styles.stat}>
                                            <GitFork size={16} /> {project.forks}
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
