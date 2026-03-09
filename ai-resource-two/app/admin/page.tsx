"use client";

import Link from "next/link";
import { TrendingUp, Users, FileText, DollarSign, Plus, ArrowRight, MessageSquare, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import AmbientBackground from "@/components/ui/AmbientBackground";
import MouseTilt from "@/components/ui/MouseTilt";
import GradientText from "@/components/ui/GradientText";

const STATS = [
    { label: "Total Resources", value: "148", change: "+12 this week", icon: FileText, color: "#5b8def" },
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

const WEEKLY_ACTIVITY = [
    { day: "Mon", views: 320, uploads: 4 },
    { day: "Tue", views: 480, uploads: 7 },
    { day: "Wed", views: 390, uploads: 3 },
    { day: "Thu", views: 520, uploads: 9 },
    { day: "Fri", views: 680, uploads: 12 },
    { day: "Sat", views: 410, uploads: 5 },
    { day: "Sun", views: 290, uploads: 2 },
];

const REVENUE_BREAKDOWN = [
    { source: "Pro Subscriptions", amount: "$3,420", pct: 80, color: "#5b8def" },
    { source: "Ad Revenue", amount: "$640", pct: 15, color: "#22c55e" },
    { source: "Donations", amount: "$220", pct: 5, color: "#f59e0b" },
];

const maxViews = Math.max(...WEEKLY_ACTIVITY.map(d => d.views));

export default function AdminDashboard() {
    return (
        <div style={{ position: "relative" }}>
            <AmbientBackground variant="default" />
            <div style={{ position: "relative", zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}
                >
                    <div>
                        <h1 className="heading-serif" style={{ fontSize: "2rem", marginBottom: "0.25rem", color: "#fff" }}>
                            <GradientText from="#fff" via="#93c5fd" to="#5b8def">Dashboard</GradientText>
                        </h1>
                        <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>Overview of your platform.</p>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                            <Link href="/admin/resources/new" className="btn-3d" style={{
                                display: "inline-flex", alignItems: "center", gap: 6,
                                padding: "0.55rem 1rem", borderRadius: 8, background: "#ededed", color: "#000",
                                fontSize: "0.82rem", fontWeight: 600,
                            }}><Plus size={14} /> Upload Resource</Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                            <Link href="/admin/news/new" className="btn-3d" style={{
                                display: "inline-flex", alignItems: "center", gap: 6,
                                padding: "0.55rem 1rem", borderRadius: 8, border: "1px solid var(--border)",
                                fontSize: "0.82rem", fontWeight: 600, color: "var(--muted-foreground)",
                            }}><Plus size={14} /> Post News</Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Stats grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem", marginBottom: "2rem" }}>
                    {STATS.map((s, i) => (
                        <MouseTilt key={s.label} tiltMax={5} scale={1.01}>
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <SpotlightCard spotlightColor={`${s.color}15`}>
                                    <div style={{ padding: "1.25rem", transformStyle: "preserve-3d" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem" }}>
                                            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted-foreground)" }}>{s.label}</span>
                                            <div style={{
                                                width: 28, height: 28, borderRadius: 6,
                                                background: `${s.color}12`, display: "flex", alignItems: "center", justifyContent: "center",
                                                transform: "translateZ(12px)",
                                            }}>
                                                <s.icon size={14} style={{ color: s.color }} />
                                            </div>
                                        </div>
                                        <div style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem", letterSpacing: "-0.02em", transform: "translateZ(8px)" }}>{s.value}</div>
                                        <div style={{ fontSize: "0.72rem", color: "#22c55e", display: "flex", alignItems: "center", gap: 3 }}>
                                            <TrendingUp size={11} /> {s.change}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        </MouseTilt>
                    ))}
                </div>

                {/* Analytics row */}
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "0.75rem", marginBottom: "2rem" }}>
                    {/* Weekly activity chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.4 }}
                        style={{
                            borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)",
                            padding: "1.5rem", overflow: "hidden",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                            <h2 style={{ fontSize: "0.95rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                                <BarChart3 size={16} style={{ color: "var(--primary)" }} /> Weekly Activity
                            </h2>
                            <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>Page Views</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-end", gap: "0.6rem", height: 140 }}>
                            {WEEKLY_ACTIVITY.map((d, i) => (
                                <div key={d.day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${(d.views / maxViews) * 110}px` }}
                                        transition={{ delay: 0.4 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        style={{
                                            width: "100%", borderRadius: "4px 4px 0 0",
                                            background: `linear-gradient(180deg, var(--primary), rgba(91,141,239,0.3))`,
                                            position: "relative",
                                        }}
                                    >
                                        <span style={{
                                            position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)",
                                            fontSize: "0.62rem", fontWeight: 600, color: "var(--muted-foreground)",
                                        }}>{d.views}</span>
                                    </motion.div>
                                    <span style={{ fontSize: "0.68rem", color: "var(--muted-foreground)", fontWeight: 500 }}>{d.day}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Revenue breakdown */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        style={{
                            borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)",
                            padding: "1.5rem",
                        }}
                    >
                        <h2 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.5rem" }}>Revenue Breakdown</h2>
                        <div style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                            $4,280
                            <span style={{ fontSize: "0.78rem", fontWeight: 400, color: "var(--muted-foreground)", marginLeft: 6 }}>this month</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                            {REVENUE_BREAKDOWN.map((r, i) => (
                                <div key={r.source}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                                        <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)" }}>{r.source}</span>
                                        <span style={{ fontSize: "0.82rem", fontWeight: 600 }}>{r.amount}</span>
                                    </div>
                                    <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${r.pct}%` }}
                                            transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            style={{ height: "100%", borderRadius: 2, background: r.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", overflow: "hidden",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>
                        <h2 style={{ fontSize: "0.95rem", fontWeight: 600 }}>Recent Activity</h2>
                    </div>
                    <div>
                        {RECENT_ACTIVITY.map((a, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                                style={{
                                    display: "flex", justifyContent: "space-between", alignItems: "center",
                                    padding: "0.85rem 1.25rem",
                                    borderBottom: i < RECENT_ACTIVITY.length - 1 ? "1px solid var(--border)" : "none",
                                    transition: "background 0.2s ease",
                                }}
                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"}
                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                            >
                                <div>
                                    <span style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>{a.action} </span>
                                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff" }}>{a.detail}</span>
                                </div>
                                <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{a.time}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
