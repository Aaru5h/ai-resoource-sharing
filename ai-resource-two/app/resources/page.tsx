"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Sparkles, Filter, Star } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AmbientBackground from "@/components/ui/AmbientBackground";
import MouseTilt from "@/components/ui/MouseTilt";
import GradientText from "@/components/ui/GradientText";
import FloatingElement from "@/components/ui/FloatingElement";
import { motion, AnimatePresence } from "framer-motion";

const RESOURCES = [
    { id: 1, title: "Understanding Large Language Models", type: "Notes", description: "Deep dive into transformer architecture and training.", author: "Alex Chen", date: "Oct 12", rating: 4.9 },
    { id: 2, title: "AI Image Generator Agent", type: "Project", description: "Full-stack app integrating Stable Diffusion.", author: "Sarah Jenkins", date: "Oct 10", isPro: true, rating: 4.7 },
    { id: 3, title: "LangChain Crash Course", type: "Tutorial", description: "Build AI agents using LangChain and Python.", author: "David Kumar", date: "Oct 08", rating: 4.8 },
    { id: 4, title: "Awesome-AI-Tools", type: "GitHub", description: "Curated list of open-source AI developer tools.", author: "AI Community", date: "Oct 05", rating: 4.6 },
    { id: 5, title: "Building RAG Systems", type: "Notes", description: "Comprehensive RAG guide with Pinecone & OpenAI.", author: "Elena Rodriguez", date: "Oct 01", isPro: true, rating: 4.9 },
    { id: 6, title: "Fine-Tuning Llama-3", type: "Tutorial", description: "QLoRA fine-tuning on a consumer GPU.", author: "James Wilson", date: "Sep 25", rating: 4.5 },
];

const TABS = ["All", "Notes", "Project", "GitHub", "Tutorial"];

const TYPE_COLORS: Record<string, string> = {
    Notes: "#5b8def",
    Project: "#22c55e",
    Tutorial: "#f59e0b",
    GitHub: "#38bdf8",
};

export default function ResourcesPage() {
    const [tab, setTab] = useState("All");
    const [q, setQ] = useState("");

    const filtered = RESOURCES.filter(r => {
        const matchTab = tab === "All" || r.type === tab;
        const matchQ = r.title.toLowerCase().includes(q.toLowerCase());
        return matchTab && matchQ;
    });

    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <AmbientBackground variant="split" />

            {/* Decorative floating ring */}
            <FloatingElement
                amplitude={12} duration={7} delay={1}
                style={{ position: "absolute", top: "10%", right: "8%", pointerEvents: "none", zIndex: 0 }}
            >
                <div style={{
                    width: 160, height: 160, borderRadius: "50%",
                    border: "1px solid rgba(91,141,239,0.12)",
                    boxShadow: "0 0 50px -15px rgba(91,141,239,0.08)",
                }} />
            </FloatingElement>
            <FloatingElement
                amplitude={7} duration={5} delay={2.5}
                style={{ position: "absolute", top: "40%", left: "3%", pointerEvents: "none", zIndex: 0 }}
            >
                <div style={{
                    width: 90, height: 90, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(91,141,239,0.1) 0%, transparent 70%)",
                    filter: "blur(15px)",
                }} />
            </FloatingElement>

            <div style={{ maxWidth: 1400, margin: "0 auto", padding: "6rem 2rem 4rem", position: "relative", zIndex: 1 }}>

                <ScrollReveal animation="fadeUp">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.75rem" }}
                    >
                        <Sparkles size={14} style={{ color: "var(--primary)" }} />
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)" }}>Community Library</span>
                    </motion.div>
                    <GradientText as="h1" from="#ffffff" via="#93c5fd" to="#5b8def" className="heading-serif" style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
                        Resources
                    </GradientText>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "1rem", marginBottom: "2.5rem", maxWidth: 500 }}>
                        Explore AI & ML resources curated by the community.
                    </p>
                </ScrollReveal>

                {/* Search + tabs */}
                <ScrollReveal animation="fadeUp" delay={0.1}>
                    <div style={{
                        display: "flex", flexWrap: "wrap", alignItems: "center",
                        gap: "0.75rem", marginBottom: "2rem",
                        padding: "0.75rem 1.25rem", borderRadius: 12,
                        border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)",
                        backdropFilter: "blur(12px)",
                    }}>
                        <div style={{ position: "relative", flex: "1 1 200px" }}>
                            <Search style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "var(--muted-foreground)" }} />
                            <input
                                value={q} onChange={e => setQ(e.target.value)}
                                placeholder="Search resources..."
                                className="input-glow"
                                style={{
                                    width: "100%", paddingLeft: 22, background: "transparent",
                                    border: "none", fontSize: "0.85rem", color: "#fff", outline: "none",
                                }}
                            />
                        </div>
                        <div style={{ height: 16, width: 1, background: "var(--border)" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                            <Filter size={13} style={{ color: "var(--muted-foreground)", marginRight: 4 }} />
                            {TABS.map(t => (
                                <motion.button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: "0.35rem 0.85rem", borderRadius: 6, fontSize: "0.78rem", fontWeight: 600,
                                        background: tab === t ? "#fff" : "transparent",
                                        color: tab === t ? "#000" : "var(--muted-foreground)",
                                        border: tab === t ? "none" : "1px solid transparent",
                                        cursor: "pointer", transition: "all 0.2s",
                                    }}
                                >{t}</motion.button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Results count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ marginBottom: "1rem", fontSize: "0.78rem", color: "var(--muted-foreground)" }}
                >
                    Showing {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
                </motion.div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    {filtered.length === 0 ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            style={{ textAlign: "center", padding: "5rem 0", color: "var(--muted-foreground)" }}
                        >
                            <p style={{ marginBottom: 8, fontSize: "1rem" }}>No results found.</p>
                            <button onClick={() => { setQ(""); setTab("All"); }} style={{ color: "var(--primary)", background: "none", border: "none", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}>Reset filters</button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={tab + q}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25 }}
                            style={{
                                display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                                gap: "0.85rem",
                            }}
                        >
                            {filtered.map((r, index) => (
                                <motion.div
                                    key={r.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <MouseTilt tiltMax={6} scale={1.02}>
                                        <SpotlightCard spotlightColor={`${TYPE_COLORS[r.type] || "rgba(91,141,239,0.06)"}18`}>
                                            <Link href={`/resources/${r.id}`} style={{
                                                display: "flex", flexDirection: "column", padding: "1.5rem", height: "100%",
                                                position: "relative", overflow: "hidden", transformStyle: "preserve-3d",
                                            }}>
                                                {/* Top accent bar */}
                                                <div style={{
                                                    position: "absolute", top: 0, left: "1.5rem", right: "1.5rem", height: 1,
                                                    background: `linear-gradient(90deg, transparent, ${TYPE_COLORS[r.type] || "var(--primary)"}50, transparent)`,
                                                }} />

                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", transform: "translateZ(16px)" }}>
                                                    <span style={{
                                                        fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700,
                                                        color: TYPE_COLORS[r.type] || "var(--primary)",
                                                        padding: "3px 8px", borderRadius: 4,
                                                        background: `${TYPE_COLORS[r.type] || "var(--primary)"}12`,
                                                    }}>{r.type}</span>
                                                    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                                                        {r.isPro && <span style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", background: "var(--primary)", color: "#fff", padding: "2px 7px", borderRadius: 3, marginRight: 6 }}>PRO</span>}
                                                        <Star size={12} style={{ color: "#eab308" }} fill="#eab308" />
                                                        <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--muted-foreground)" }}>{r.rating}</span>
                                                    </div>
                                                </div>
                                                <h3 style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.4, marginBottom: "0.4rem", transform: "translateZ(10px)" }}>{r.title}</h3>
                                                <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.65, flex: 1 }}>{r.description}</p>
                                                <div style={{
                                                    display: "flex", justifyContent: "space-between", alignItems: "center",
                                                    marginTop: "1rem", paddingTop: "0.85rem",
                                                    borderTop: "1px solid var(--border)",
                                                }}>
                                                    <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{r.author} · {r.date}</span>
                                                    <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                                                        <ArrowRight size={14} style={{ color: "var(--primary)" }} />
                                                    </motion.div>
                                                </div>
                                            </Link>
                                        </SpotlightCard>
                                    </MouseTilt>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
