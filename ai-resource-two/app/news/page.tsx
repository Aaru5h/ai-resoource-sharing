"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, Zap, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import AmbientBackground from "@/components/ui/AmbientBackground";
import MouseTilt from "@/components/ui/MouseTilt";
import GradientText from "@/components/ui/GradientText";
import FloatingElement from "@/components/ui/FloatingElement";

const NEWS = [
    { id: 1, title: "OpenAI Announces Next Generation Reasoning Model", excerpt: "Significant improvements in logical deduction and multi-step problem solving.", date: "2 hours ago", category: "LLM", readTime: "4 min", hot: true },
    { id: 2, title: "Breakthrough in Efficient Transformer Architectures", excerpt: "New paper shows 40% reduction in attention complexity without quality loss.", date: "5 hours ago", category: "Research", readTime: "7 min" },
    { id: 3, title: "Top 10 Open Source AI Tools for Developers", excerpt: "A roundup of the most impactful tools for development workflows.", date: "1 day ago", category: "Tools", readTime: "12 min" },
    { id: 4, title: "Meta releases new Llama vision model", excerpt: "Vision capabilities join the open-weights Llama series.", date: "3 days ago", category: "Release", readTime: "3 min" },
];

const TRENDING = [
    { label: "Transformers", count: "2.4k articles", color: "#5b8def" },
    { label: "LLM Fine-Tuning", count: "1.8k articles", color: "#22c55e" },
    { label: "RAG Systems", count: "1.2k articles", color: "#f59e0b" },
];

export default function NewsPage() {
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <AmbientBackground variant="top-right" />

            {/* Floating decorations */}
            <FloatingElement
                amplitude={12} duration={7} delay={0.5}
                style={{ position: "absolute", top: "12%", right: "5%", pointerEvents: "none", zIndex: 0 }}
            >
                <div style={{
                    width: 150, height: 150, borderRadius: "50%",
                    border: "1px solid rgba(91,141,239,0.12)",
                    boxShadow: "0 0 50px -15px rgba(91,141,239,0.08)",
                }} />
            </FloatingElement>
            <FloatingElement
                amplitude={8} duration={6} delay={2}
                style={{ position: "absolute", top: "35%", left: "3%", pointerEvents: "none", zIndex: 0 }}
            >
                <div style={{
                    width: 100, height: 100, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(91,141,239,0.1) 0%, transparent 70%)",
                    filter: "blur(15px)",
                }} />
            </FloatingElement>

            <div style={{ maxWidth: 1400, margin: "0 auto", padding: "6rem 2rem 4rem", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <ScrollReveal animation="fadeUp">
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1rem" }}>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4 }}
                                style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.75rem" }}
                            >
                                <Sparkles size={14} style={{ color: "var(--primary)" }} />
                                <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)" }}>Latest Updates</span>
                            </motion.div>
                            <GradientText as="h1" from="#ffffff" via="#93c5fd" to="#5b8def" className="heading-serif" style={{ fontSize: "3rem" }}>
                                AI News
                            </GradientText>
                        </div>
                    </div>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "1rem", marginBottom: "2.5rem", maxWidth: 500 }}>
                        Stay ahead with the latest breakthroughs in AI research, tools, and releases.
                    </p>
                </ScrollReveal>

                {/* Trending Topics */}
                <ScrollReveal animation="fadeUp" delay={0.1}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "3rem" }}>
                        {TRENDING.map((t) => (
                            <MouseTilt key={t.label} tiltMax={8} scale={1.03}>
                                <SpotlightCard spotlightColor={`${t.color}18`}>
                                    <div style={{ padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.85rem", transformStyle: "preserve-3d" }}>
                                        <div style={{
                                            width: 34, height: 34, borderRadius: 8,
                                            background: `${t.color}14`, display: "flex",
                                            alignItems: "center", justifyContent: "center",
                                            transform: "translateZ(20px)",
                                        }}>
                                            <TrendingUp size={15} style={{ color: t.color }} />
                                        </div>
                                        <div style={{ transform: "translateZ(10px)" }}>
                                            <div style={{ fontSize: "0.88rem", fontWeight: 600 }}>{t.label}</div>
                                            <div style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>{t.count}</div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </MouseTilt>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Featured article */}
                <ScrollReveal animation="fadeUp" delay={0.15}>
                    <MouseTilt tiltMax={4} scale={1.01}>
                        <div className="gradient-border" style={{ marginBottom: "2rem", borderRadius: 14, overflow: "hidden" }}>
                            <SpotlightCard spotlightColor="rgba(91,141,239,0.08)">
                                <Link href={`/news/1`} style={{ display: "block", padding: "2rem 2.25rem", position: "relative", transformStyle: "preserve-3d" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.85rem", transform: "translateZ(14px)" }}>
                                        <span style={{
                                            display: "inline-flex", alignItems: "center", gap: 4,
                                            fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                                            color: "#fff", background: "var(--primary)", padding: "3px 10px", borderRadius: 4,
                                        }}><Zap size={10} /> Featured</span>
                                        <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", display: "flex", alignItems: "center", gap: 3 }}>
                                            <Clock size={11} /> {NEWS[0].date}
                                        </span>
                                    </div>
                                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3, marginBottom: "0.5rem", transform: "translateZ(8px)" }}>{NEWS[0].title}</h2>
                                    <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{NEWS[0].excerpt}</p>
                                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: "1.25rem", fontSize: "0.78rem", color: "var(--primary)", fontWeight: 600 }}>
                                        Read Article <ArrowUpRight size={13} />
                                    </div>
                                </Link>
                            </SpotlightCard>
                        </div>
                    </MouseTilt>
                </ScrollReveal>

                {/* Article list */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {NEWS.slice(1).map((article, i) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link href={`/news/${article.id}`} className="card-3d" style={{
                                display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                                gap: "1.5rem", padding: "1.25rem 1.5rem",
                                marginBottom: "1rem",
                                borderRadius: 12, border: "1px solid var(--border)",
                            }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.4rem" }}>
                                        <span style={{
                                            fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase",
                                            letterSpacing: "0.06em", color: "var(--primary)",
                                            padding: "2px 8px", borderRadius: 3, background: "rgba(91,141,239,0.08)",
                                        }}>{article.category}</span>
                                        <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", display: "flex", alignItems: "center", gap: 3 }}>
                                            <Clock size={11} /> {article.date}
                                        </span>
                                        <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>· {article.readTime} read</span>
                                    </div>
                                    <h2 style={{ fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.4, marginBottom: "0.25rem" }}>{article.title}</h2>
                                    <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{article.excerpt}</p>
                                </div>
                                <motion.div
                                    whileHover={{ rotate: 45, scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                >
                                    <ArrowUpRight size={16} style={{ color: "var(--muted-foreground)", marginTop: 6, flexShrink: 0 }} />
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
