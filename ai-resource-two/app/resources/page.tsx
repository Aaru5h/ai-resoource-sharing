"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const RESOURCES = [
    { id: 1, title: "Understanding Large Language Models", type: "Notes", description: "Deep dive into transformer architecture and training.", author: "Alex Chen", date: "Oct 12" },
    { id: 2, title: "AI Image Generator Agent", type: "Project", description: "Full-stack app integrating Stable Diffusion.", author: "Sarah Jenkins", date: "Oct 10", isPro: true },
    { id: 3, title: "LangChain Crash Course", type: "Tutorial", description: "Build AI agents using LangChain and Python.", author: "David Kumar", date: "Oct 08" },
    { id: 4, title: "Awesome-AI-Tools", type: "GitHub", description: "Curated list of open-source AI developer tools.", author: "AI Community", date: "Oct 05" },
    { id: 5, title: "Building RAG Systems", type: "Notes", description: "Comprehensive RAG guide with Pinecone & OpenAI.", author: "Elena Rodriguez", date: "Oct 01", isPro: true },
    { id: 6, title: "Fine-Tuning Llama-3", type: "Tutorial", description: "QLoRA fine-tuning on a consumer GPU.", author: "James Wilson", date: "Sep 25" },
];

const TABS = ["All", "Notes", "Project", "GitHub", "Tutorial"];

export default function ResourcesPage() {
    const [tab, setTab] = useState("All");
    const [q, setQ] = useState("");

    const filtered = RESOURCES.filter(r => {
        const matchTab = tab === "All" || r.type === tab;
        const matchQ = r.title.toLowerCase().includes(q.toLowerCase());
        return matchTab && matchQ;
    });

    return (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "6rem 2rem 4rem" }}>

            {/* Header row */}
            <ScrollReveal animation="fadeUp">
                <h1 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>Resources</h1>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.95rem", marginBottom: "2.5rem" }}>Explore AI & ML resources curated by the community.</p>
            </ScrollReveal>

            {/* Search + tabs */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
                <div style={{
                    display: "flex", flexWrap: "wrap", alignItems: "center",
                    gap: "0.75rem", marginBottom: "2rem",
                    padding: "1rem 1.25rem", borderRadius: 12,
                    background: "var(--muted)", border: "1px solid var(--border)",
                }}>
                    <div style={{ position: "relative", flex: "1 1 220px" }}>
                        <Search style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, color: "var(--muted-foreground)" }} />
                        <input
                            value={q} onChange={e => setQ(e.target.value)}
                            placeholder="Search..."
                            style={{
                                width: "100%", paddingLeft: 24, background: "transparent",
                                border: "none", fontSize: "0.88rem", color: "#fff", outline: "none",
                            }}
                        />
                    </div>
                    <div style={{ height: 20, width: 1, background: "var(--border)" }} />
                    <div style={{ display: "flex", gap: 4 }}>
                        {TABS.map(t => (
                            <motion.button
                                key={t}
                                onClick={() => setTab(t)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: "0.35rem 0.85rem", borderRadius: 6, fontSize: "0.78rem", fontWeight: 600,
                                    background: tab === t ? "#ededed" : "transparent",
                                    color: tab === t ? "#000" : "var(--muted-foreground)",
                                    border: "none", cursor: "pointer", transition: "all 0.15s",
                                }}
                            >{t}</motion.button>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* Grid */}
            <AnimatePresence mode="wait">
                {filtered.length === 0 ? (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ textAlign: "center", padding: "5rem 0", color: "var(--muted-foreground)" }}
                    >
                        <p style={{ marginBottom: 8 }}>No results found.</p>
                        <button onClick={() => { setQ(""); setTab("All"); }} style={{ color: "#fff", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", fontSize: "0.85rem" }}>Reset</button>
                    </motion.div>
                ) : (
                    <motion.div
                        key={tab + q}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                            gap: "1rem",
                        }}
                    >
                        {filtered.map((r, index) => (
                            <motion.div
                                key={r.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <TiltCard tiltAmount={6}>
                                    <SpotlightCard>
                                        <Link href={`/resources/${r.id}`} style={{
                                            display: "flex", flexDirection: "column", padding: "1.5rem", height: "100%",
                                        }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                                                <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700, color: "var(--primary)" }}>{r.type}</span>
                                                {r.isPro && <span style={{ fontSize: "0.62rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", background: "var(--primary)", color: "#fff", padding: "2px 8px", borderRadius: 4 }}>PRO</span>}
                                            </div>
                                            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.4, marginBottom: "0.4rem" }}>{r.title}</h3>
                                            <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.6, flex: 1 }}>{r.description}</p>
                                            <div style={{
                                                display: "flex", justifyContent: "space-between", alignItems: "center",
                                                marginTop: "1rem", paddingTop: "0.85rem",
                                                borderTop: "1px solid rgba(255,255,255,0.05)",
                                            }}>
                                                <span style={{ fontSize: "0.78rem", color: "var(--muted-foreground)" }}>{r.author} · {r.date}</span>
                                                <ArrowRight size={14} style={{ color: "var(--muted-foreground)" }} />
                                            </div>
                                        </Link>
                                    </SpotlightCard>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
