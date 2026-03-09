"use client";

import { useState } from "react";
import Link from "next/link";
import { Bookmark, Settings, LogOut, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import AmbientBackground from "@/components/ui/AmbientBackground";
import MouseTilt from "@/components/ui/MouseTilt";
import GradientText from "@/components/ui/GradientText";
import FloatingElement from "@/components/ui/FloatingElement";

const SAVED_RESOURCES = [
    { id: 1, title: "Understanding Large Language Models", type: "Notes", date: "Saved Oct 14" },
    { id: 3, title: "LangChain Crash Course", type: "Tutorial", date: "Saved Oct 10" },
    { id: 5, title: "Building RAG Systems", type: "Notes", date: "Saved Oct 02" },
];

const TABS = ["Saved Resources", "Activity"];

export default function ProfilePage() {
    const [tab, setTab] = useState("Saved Resources");

    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <AmbientBackground variant="top-right" />
            <FloatingElement
                amplitude={10} duration={7} delay={0}
                style={{ position: "absolute", top: "10%", right: "6%", pointerEvents: "none", zIndex: 0 }}
            >
                <div style={{
                    width: 130, height: 130, borderRadius: "50%",
                    border: "1px solid rgba(91,141,239,0.12)",
                    boxShadow: "0 0 40px -12px rgba(91,141,239,0.08)",
                }} />
            </FloatingElement>
            <FloatingElement
                amplitude={6} duration={5} delay={2}
                style={{ position: "absolute", bottom: "20%", left: "5%", pointerEvents: "none", zIndex: 0 }}
            >
                <div style={{
                    width: 80, height: 80, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
                    filter: "blur(15px)",
                }} />
            </FloatingElement>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 2rem 4rem", position: "relative", zIndex: 1 }}>
            {/* Profile header */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem" }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 25 }}
                    style={{
                        width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.5rem", fontWeight: 700,
                    }}
                >JD</motion.div>
                <div style={{ flex: 1 }}>
                    <h1 className="heading-serif" style={{ fontSize: "2rem", marginBottom: "0.15rem", color: "#fff" }}><GradientText from="#fff" via="#93c5fd" to="#5b8def">John Doe</GradientText></h1>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>john@example.com · Member since Oct 2025</p>
                </div>
                <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/profile/settings" style={{
                        display: "flex", alignItems: "center", gap: 6, padding: "0.5rem 1rem",
                        border: "1px solid var(--border)", borderRadius: 8, fontSize: "0.82rem",
                        fontWeight: 600, color: "var(--muted-foreground)", transition: "all 0.2s",
                    }}>
                        <Settings size={14} /> Edit Profile
                    </Link>
                </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "2.5rem" }}
            >
                {[
                    { label: "Saved", value: "12" },
                    { label: "Comments", value: "8" },
                    { label: "Plan", value: "Free" },
                ].map((s, i) => (
                    <motion.div
                        key={s.label}
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <SpotlightCard spotlightColor="rgba(91,141,239,0.06)">
                            <div style={{ padding: "1.25rem", textAlign: "center" }}>
                                <div style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>{s.value}</div>
                                <div style={{ fontSize: "0.78rem", color: "var(--muted-foreground)" }}>{s.label}</div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </motion.div>

            {/* Tabs with animated indicator */}
            <div style={{ display: "flex", gap: 4, marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem", position: "relative" }}>
                {TABS.map(t => (
                    <button key={t} onClick={() => setTab(t)} style={{
                        padding: "0.4rem 1rem", borderRadius: 6, fontSize: "0.82rem", fontWeight: 600,
                        background: tab === t ? "#ededed" : "transparent",
                        color: tab === t ? "#000" : "var(--muted-foreground)",
                        border: "none", cursor: "pointer", transition: "all 0.2s", position: "relative",
                    }}>{t}</button>
                ))}
            </div>

            {/* Content with AnimatePresence */}
            <AnimatePresence mode="wait">
                {tab === "Saved Resources" && (
                    <motion.div
                        key="saved"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
                    >
                        {SAVED_RESOURCES.length === 0 ? (
                            <p style={{ textAlign: "center", padding: "3rem 0", color: "var(--muted-foreground)" }}>No saved resources yet.</p>
                        ) : (
                            SAVED_RESOURCES.map((r, i) => (
                                <motion.div
                                    key={r.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                    whileHover={{ y: -2 }}
                                >
                                    <Link href={`/resources/${r.id}`} className="card-3d" style={{
                                        display: "flex", justifyContent: "space-between", alignItems: "center",
                                        padding: "1rem 1.25rem",
                                    }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                            <Bookmark size={16} style={{ color: "var(--primary)" }} />
                                            <div>
                                                <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{r.title}</div>
                                                <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{r.type} · {r.date}</div>
                                            </div>
                                        </div>
                                        <ArrowRight size={14} style={{ color: "var(--muted-foreground)" }} />
                                    </Link>
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                )}
                {tab === "Activity" && (
                    <motion.div
                        key="activity"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        style={{ textAlign: "center", padding: "3rem 0", color: "var(--muted-foreground)", fontSize: "0.9rem" }}
                    >
                        <p>Your recent comments and interactions will appear here.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        </div>
    );
}
