"use client";

import { useState } from "react";
import { Search, MessageSquare, Check, Trash2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import GradientText from "@/components/ui/GradientText";

const COMMENTS = [
    { id: 1, author: "Sarah Jenkins", email: "sarah@example.com", resource: "Understanding LLMs", text: "Clearest explanation of attention I've found. The QKV diagrams are excellent.", date: "2 hours ago", status: "approved" },
    { id: 2, author: "David Kumar", email: "david@example.com", resource: "RAG Pipeline Tutorial", text: "Would love a section on hybrid search with BM25 + vector.", date: "5 hours ago", status: "pending" },
    { id: 3, author: "NewUser42", email: "user42@mail.com", resource: "Fine-Tuning Llama-3", text: "Check out my site for free GPUs!! www.totallylegit.xyz", date: "6 hours ago", status: "flagged" },
    { id: 4, author: "Elena Rodriguez", email: "elena@example.com", resource: "Understanding LLMs", text: "Used this for my university paper. The bibliography is incredibly well curated.", date: "1 day ago", status: "approved" },
    { id: 5, author: "James Wilson", email: "james@example.com", resource: "LangChain Crash Course", text: "The agent section needs updating for LangGraph — the old AgentExecutor is deprecated.", date: "2 days ago", status: "pending" },
];

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
    approved: { bg: "rgba(34,197,94,0.1)", color: "#22c55e" },
    pending: { bg: "rgba(245,158,11,0.1)", color: "#f59e0b" },
    flagged: { bg: "rgba(239,68,68,0.1)", color: "#ef4444" },
};

export default function AdminCommentsPage() {
    const [filter, setFilter] = useState("all");

    const filtered = filter === "all" ? COMMENTS : COMMENTS.filter(c => c.status === filter);

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}
            >
                <div>
                    <h1 className="heading-serif" style={{ fontSize: "1.75rem", marginBottom: "0.25rem", color: "#fff" }}>
                        <GradientText from="#fff" via="#93c5fd" to="#5b8def">Comments</GradientText>
                    </h1>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>
                        Review and moderate user discussions.
                    </p>
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                    {["all", "pending", "flagged", "approved"].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            style={{
                                padding: "0.35rem 0.75rem", borderRadius: 6, fontSize: "0.75rem", fontWeight: 600,
                                textTransform: "capitalize", cursor: "pointer", border: "none",
                                background: filter === f ? "#ededed" : "transparent",
                                color: filter === f ? "#000" : "var(--muted-foreground)",
                                transition: "all 0.2s",
                            }}
                        >{f}</button>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                style={{
                    borderRadius: 12, border: "1px solid var(--border)", overflow: "hidden",
                    background: "rgba(255,255,255,0.02)",
                }}
            >
                {/* Search */}
                <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Search size={14} style={{ color: "var(--muted-foreground)" }} />
                    <input placeholder="Search comments..." style={{
                        flex: 1, background: "transparent", border: "none", color: "#fff",
                        fontSize: "0.85rem", outline: "none",
                    }} />
                </div>

                {/* Comments list */}
                <div>
                    {filtered.map((c, i) => (
                        <motion.div
                            key={c.id}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + i * 0.04, duration: 0.3 }}
                            style={{
                                padding: "1rem 1.25rem",
                                borderBottom: i < filtered.length - 1 ? "1px solid var(--border)" : "none",
                                transition: "background 0.15s",
                            }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.4rem" }}>
                                        <div style={{
                                            width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.03)",
                                            border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: "0.62rem", fontWeight: 700,
                                        }}>{c.author.split(" ").map(n => n[0]).join("")}</div>
                                        <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>{c.author}</span>
                                        <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>on {c.resource}</span>
                                        <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>· {c.date}</span>
                                    </div>
                                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.55, marginBottom: "0.5rem" }}>
                                        {c.text}
                                    </p>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
                                    <span style={{
                                        fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                                        padding: "3px 8px", borderRadius: 4,
                                        background: STATUS_STYLES[c.status]?.bg,
                                        color: STATUS_STYLES[c.status]?.color,
                                    }}>{c.status}</span>
                                    {c.status !== "approved" && (
                                        <button style={{
                                            width: 28, height: 28, borderRadius: 6, background: "rgba(34,197,94,0.08)", border: "none",
                                            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                                        }} title="Approve">
                                            <Check size={13} style={{ color: "#22c55e" }} />
                                        </button>
                                    )}
                                    <button style={{
                                        width: 28, height: 28, borderRadius: 6, background: "rgba(239,68,68,0.08)", border: "none",
                                        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                                    }} title="Delete">
                                        <Trash2 size={13} style={{ color: "#ef4444" }} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
