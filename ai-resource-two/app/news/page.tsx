"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const NEWS = [
    { id: 1, title: "OpenAI Announces Next Generation Reasoning Model", excerpt: "Significant improvements in logical deduction and multi-step problem solving.", date: "2 hours ago", category: "LLM", readTime: "4 min" },
    { id: 2, title: "Breakthrough in Efficient Transformer Architectures", excerpt: "New paper shows 40% reduction in attention complexity without quality loss.", date: "5 hours ago", category: "Research", readTime: "7 min" },
    { id: 3, title: "Top 10 Open Source AI Tools for Developers", excerpt: "A roundup of the most impactful tools for development workflows.", date: "1 day ago", category: "Tools", readTime: "12 min" },
    { id: 4, title: "Meta releases new Llama vision model", excerpt: "Vision capabilities join the open-weights Llama series.", date: "3 days ago", category: "Release", readTime: "3 min" },
];

export default function NewsPage() {
    return (
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "6rem 2rem 4rem" }}>
            <ScrollReveal animation="fadeUp">
                <h1 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>News</h1>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.95rem", marginBottom: "3rem" }}>
                    Latest in AI research and engineering.
                </p>
            </ScrollReveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {NEWS.map((article, i) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href={`/news/${article.id}`} style={{
                            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                            gap: "1.5rem", padding: "1.5rem 0",
                            borderBottom: "1px solid var(--border)",
                            transition: "all 0.25s",
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.paddingLeft = "1rem";
                                e.currentTarget.style.background = "var(--muted)";
                                e.currentTarget.style.borderRadius = "12px";
                                e.currentTarget.style.margin = "0 -1rem";
                                e.currentTarget.style.padding = "1.5rem 1rem";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.paddingLeft = "0";
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.borderRadius = "0";
                                e.currentTarget.style.margin = "0";
                                e.currentTarget.style.padding = "1.5rem 0";
                            }}
                        >
                            <div style={{ flex: 1 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                                    <span style={{
                                        fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase",
                                        letterSpacing: "0.06em", color: "var(--primary)",
                                    }}>{article.category}</span>
                                    <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", display: "flex", alignItems: "center", gap: 3 }}>
                                        <Clock size={11} /> {article.date}
                                    </span>
                                </div>
                                <h2 style={{ fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.4, marginBottom: "0.3rem" }}>{article.title}</h2>
                                <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>{article.excerpt}</p>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 45 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ArrowUpRight size={16} style={{ color: "var(--muted-foreground)", marginTop: 4, flexShrink: 0 }} />
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
