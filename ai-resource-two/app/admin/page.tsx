"use client";

import Link from "next/link";
import { TrendingUp, Users, FileText, DollarSign, Plus, ArrowRight, MessageSquare } from "lucide-react";

const STATS = [
    { label: "Total Resources", value: "148", change: "+12 this week", icon: FileText, color: "#3b82f6" },
    { label: "Total Users", value: "2,847", change: "+64 this week", icon: Users, color: "#22c55e" },
    { label: "Comments", value: "1,203", change: "+28 today", icon: MessageSquare, color: "#f59e0b" },
    { label: "Revenue", value: "$4,280", change: "+$340 this month", icon: DollarSign, color: "#ef4444" },
];

const RECENT_ACTIVITY = [
    { action: "New user registered", detail: "sarah@example.com", time: "2 min ago" },
    { action: "Resource uploaded", detail: "Fine-Tuning Llama-3", time: "15 min ago" },
    { action: "New comment on", detail: "RAG Pipeline Tutorial", time: "32 min ago" },
    { action: "Pro subscription", detail: "david@example.com", time: "1 hour ago" },
    { action: "Resource updated", detail: "Attention Mechanisms Guide", time: "3 hours ago" },
];

export default function AdminDashboard() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
                <div>
                    <h1 style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>Dashboard</h1>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted-foreground)" }}>Overview of your platform.</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Link href="/admin/resources/new" style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "0.55rem 1rem", borderRadius: 8, background: "#ededed", color: "#000",
                        fontSize: "0.82rem", fontWeight: 600,
                    }}><Plus size={14} /> Upload Resource</Link>
                    <Link href="/admin/news/new" style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "0.55rem 1rem", borderRadius: 8, border: "1px solid var(--border)",
                        fontSize: "0.82rem", fontWeight: 600, color: "var(--muted-foreground)",
                    }}><Plus size={14} /> Post News</Link>
                </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
                {STATS.map(s => (
                    <div key={s.label} style={{
                        padding: "1.25rem", borderRadius: 12, background: "var(--muted)",
                        border: "1px solid var(--border)",
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem" }}>
                            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted-foreground)" }}>{s.label}</span>
                            <div style={{
                                width: 28, height: 28, borderRadius: 6,
                                background: `${s.color}12`, display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <s.icon size={14} style={{ color: s.color }} />
                            </div>
                        </div>
                        <div style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem" }}>{s.value}</div>
                        <div style={{ fontSize: "0.72rem", color: "#22c55e", display: "flex", alignItems: "center", gap: 3 }}>
                            <TrendingUp size={11} /> {s.change}
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div style={{
                borderRadius: 12, border: "1px solid var(--border)", background: "var(--muted)", overflow: "hidden",
            }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>
                    <h2 style={{ fontSize: "0.95rem", fontWeight: 600 }}>Recent Activity</h2>
                </div>
                <div>
                    {RECENT_ACTIVITY.map((a, i) => (
                        <div key={i} style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            padding: "0.85rem 1.25rem",
                            borderBottom: i < RECENT_ACTIVITY.length - 1 ? "1px solid var(--border)" : "none",
                        }}>
                            <div>
                                <span style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>{a.action} </span>
                                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff" }}>{a.detail}</span>
                            </div>
                            <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{a.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
