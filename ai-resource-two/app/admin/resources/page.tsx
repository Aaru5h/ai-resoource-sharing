"use client";

import Link from "next/link";
import { Search, Plus, MoreHorizontal, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ADMIN_RESOURCES = [
    { id: 1, title: "Understanding Large Language Models", type: "Notes", author: "Alex Chen", date: "Oct 12, 2026", status: "Published", views: "12.4k" },
    { id: 2, title: "AI Image Generator Agent", type: "Project", author: "Sarah Jenkins", date: "Oct 10, 2026", status: "Published", views: "8.5k" },
    { id: 3, title: "LangChain Crash Course", type: "Tutorial", author: "David Kumar", date: "Oct 08, 2026", status: "Published", views: "21.1k" },
    { id: 4, title: "Awesome-AI-Tools repo", type: "GitHub", author: "AI Community", date: "Oct 05, 2026", status: "Pending", views: "—" },
    { id: 5, title: "Building RAG Systems", type: "Notes", author: "Elena Rodriguez", date: "Oct 01, 2026", status: "Published", views: "6.2k" },
];

export default function AdminResources() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}
            >
                <div>
                    <h1 style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>Resources</h1>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted-foreground)" }}>Manage uploaded resources.</p>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/admin/resources/new" style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "0.55rem 1rem", borderRadius: 8, background: "#ededed", color: "#000",
                        fontSize: "0.82rem", fontWeight: 600,
                    }}><Plus size={14} /> Upload New</Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    borderRadius: 12, border: "1px solid var(--border)", overflow: "hidden",
                    background: "rgba(255,255,255,0.02)",
                }}
            >
                {/* Search bar */}
                <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Search size={14} style={{ color: "var(--muted-foreground)" }} />
                    <input placeholder="Search resources..." style={{
                        flex: 1, background: "transparent", border: "none", color: "#fff",
                        fontSize: "0.85rem", outline: "none",
                    }} />
                </div>

                {/* Table */}
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                    <thead>
                        <tr style={{ borderBottom: "1px solid var(--border)" }}>
                            {["Title", "Type", "Author", "Date", "Views", "Status", ""].map(h => (
                                <th key={h} style={{ textAlign: h === "" ? "right" : "left", padding: "0.7rem 1rem", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted-foreground)" }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {ADMIN_RESOURCES.map((r, i) => (
                            <motion.tr
                                key={r.id}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 + i * 0.04, duration: 0.3 }}
                                style={{ borderBottom: "1px solid var(--border)", transition: "background 0.15s", cursor: "pointer" }}
                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"}
                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                            >
                                <td style={{ padding: "0.85rem 1rem", fontWeight: 600, color: "#fff" }}>{r.title}</td>
                                <td style={{ padding: "0.85rem 1rem" }}>
                                    <span style={{
                                        fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                                        padding: "3px 8px", borderRadius: 4, background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
                                    }}>{r.type}</span>
                                </td>
                                <td style={{ padding: "0.85rem 1rem", color: "var(--muted-foreground)" }}>{r.author}</td>
                                <td style={{ padding: "0.85rem 1rem", color: "var(--muted-foreground)", fontSize: "0.78rem" }}>{r.date}</td>
                                <td style={{ padding: "0.85rem 1rem" }}>{r.views}</td>
                                <td style={{ padding: "0.85rem 1rem" }}>
                                    <span style={{
                                        display: "inline-flex", alignItems: "center", gap: 4,
                                        fontSize: "0.72rem", fontWeight: 700,
                                        color: r.status === "Published" ? "#22c55e" : "#f59e0b",
                                    }}>
                                        {r.status === "Published" ? <CheckCircle size={12} /> : <Clock size={12} />}
                                        {r.status}
                                    </span>
                                </td>
                                <td style={{ padding: "0.85rem 1rem", textAlign: "right" }}>
                                    <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted-foreground)", padding: 4 }}>
                                        <MoreHorizontal size={16} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div style={{
                    padding: "0.75rem 1rem", borderTop: "1px solid var(--border)",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontSize: "0.72rem", color: "var(--muted-foreground)",
                }}>
                    <span>Showing 1–5 of 148</span>
                    <div style={{ display: "flex", gap: 4 }}>
                        {["Prev", "1", "2", "3", "Next"].map(p => (
                            <motion.button
                                key={p}
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: "0.3rem 0.6rem", borderRadius: 6,
                                    border: p === "1" ? "1px solid var(--primary)" : "1px solid var(--border)",
                                    background: p === "1" ? "rgba(91,141,239,0.1)" : "transparent",
                                    color: p === "1" ? "var(--primary)" : "var(--muted-foreground)",
                                    fontSize: "0.72rem", fontWeight: 600, cursor: "pointer",
                                }}
                            >{p}</motion.button>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
