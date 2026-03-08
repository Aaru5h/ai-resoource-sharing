"use client";

import { useState } from "react";
import Link from "next/link";
import { Bookmark, Settings, LogOut, ArrowRight } from "lucide-react";

const SAVED_RESOURCES = [
    { id: 1, title: "Understanding Large Language Models", type: "Notes", date: "Saved Oct 14" },
    { id: 3, title: "LangChain Crash Course", type: "Tutorial", date: "Saved Oct 10" },
    { id: 5, title: "Building RAG Systems", type: "Notes", date: "Saved Oct 02" },
];

const TABS = ["Saved Resources", "Activity"];

export default function ProfilePage() {
    const [tab, setTab] = useState("Saved Resources");

    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "6rem 2rem 4rem" }}>
            {/* Profile header */}
            <div className="animate-fade-up" style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem", opacity: 0 }}>
                <div style={{
                    width: 72, height: 72, borderRadius: "50%", background: "var(--accent)",
                    border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem", fontWeight: 700,
                }}>JD</div>
                <div style={{ flex: 1 }}>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.15rem" }}>John Doe</h1>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>john@example.com · Member since Oct 2025</p>
                </div>
                <Link href="/profile/settings" style={{
                    display: "flex", alignItems: "center", gap: 6, padding: "0.5rem 1rem",
                    border: "1px solid var(--border)", borderRadius: 8, fontSize: "0.82rem",
                    fontWeight: 600, color: "var(--muted-foreground)", transition: "all 0.2s",
                }}>
                    <Settings size={14} /> Edit Profile
                </Link>
            </div>

            {/* Stats */}
            <div className="animate-fade-up stagger-1" style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2.5rem", opacity: 0,
            }}>
                {[
                    { label: "Saved", value: "12" },
                    { label: "Comments", value: "8" },
                    { label: "Plan", value: "Free" },
                ].map(s => (
                    <div key={s.label} style={{
                        padding: "1.25rem", borderRadius: 12, background: "var(--muted)",
                        border: "1px solid var(--border)", textAlign: "center",
                    }}>
                        <div style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>{s.value}</div>
                        <div style={{ fontSize: "0.78rem", color: "var(--muted-foreground)" }}>{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: 4, marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem" }}>
                {TABS.map(t => (
                    <button key={t} onClick={() => setTab(t)} style={{
                        padding: "0.4rem 1rem", borderRadius: 6, fontSize: "0.82rem", fontWeight: 600,
                        background: tab === t ? "#ededed" : "transparent",
                        color: tab === t ? "#000" : "var(--muted-foreground)",
                        border: "none", cursor: "pointer",
                    }}>{t}</button>
                ))}
            </div>

            {/* Content */}
            {tab === "Saved Resources" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {SAVED_RESOURCES.length === 0 ? (
                        <p style={{ textAlign: "center", padding: "3rem 0", color: "var(--muted-foreground)" }}>No saved resources yet.</p>
                    ) : (
                        SAVED_RESOURCES.map(r => (
                            <Link key={r.id} href={`/resources/${r.id}`} style={{
                                display: "flex", justifyContent: "space-between", alignItems: "center",
                                padding: "1rem 1.25rem", borderRadius: 12,
                                border: "1px solid var(--border)", background: "var(--muted)",
                                transition: "all 0.2s",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <Bookmark size={16} style={{ color: "var(--primary)" }} />
                                    <div>
                                        <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{r.title}</div>
                                        <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{r.type} · {r.date}</div>
                                    </div>
                                </div>
                                <ArrowRight size={14} style={{ color: "var(--muted-foreground)" }} />
                            </Link>
                        ))
                    )}
                </div>
            )}
            {tab === "Activity" && (
                <div style={{ textAlign: "center", padding: "3rem 0", color: "var(--muted-foreground)", fontSize: "0.9rem" }}>
                    <p>Your recent comments and interactions will appear here.</p>
                </div>
            )}
        </div>
    );
}
