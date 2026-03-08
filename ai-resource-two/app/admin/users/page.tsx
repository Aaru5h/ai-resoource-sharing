"use client";

import { Search, MoreHorizontal, Shield, User as UserIcon } from "lucide-react";

const USERS = [
    { id: 1, name: "Alex Chen", email: "alex@example.com", role: "Admin", joined: "Sep 2024", resources: 12, status: "Active" },
    { id: 2, name: "Sarah Jenkins", email: "sarah@example.com", role: "Pro", joined: "Oct 2024", resources: 8, status: "Active" },
    { id: 3, name: "David Kumar", email: "david@example.com", role: "Free", joined: "Nov 2024", resources: 3, status: "Active" },
    { id: 4, name: "Elena Rodriguez", email: "elena@example.com", role: "Pro", joined: "Dec 2024", resources: 5, status: "Active" },
    { id: 5, name: "James Wilson", email: "james@example.com", role: "Free", joined: "Jan 2025", resources: 1, status: "Suspended" },
];

export default function AdminUsersPage() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div>
                    <h1 style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>Users</h1>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted-foreground)" }}>Manage accounts and permissions.</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.82rem", color: "var(--muted-foreground)" }}>Total: <strong style={{ color: "#fff" }}>248</strong></span>
                </div>
            </div>

            <div style={{
                borderRadius: 12, border: "1px solid var(--border)", overflow: "hidden",
                background: "var(--muted)",
            }}>
                {/* Search */}
                <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Search size={14} style={{ color: "var(--muted-foreground)" }} />
                    <input placeholder="Search users..." style={{
                        flex: 1, background: "transparent", border: "none", color: "#fff",
                        fontSize: "0.85rem", outline: "none",
                    }} />
                </div>

                {/* Table */}
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                    <thead>
                        <tr style={{ borderBottom: "1px solid var(--border)" }}>
                            {["User", "Role", "Joined", "Resources", "Status", ""].map(h => (
                                <th key={h} style={{ textAlign: "left", padding: "0.7rem 1rem", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted-foreground)" }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {USERS.map(u => (
                            <tr key={u.id} style={{ borderBottom: "1px solid var(--border)", transition: "background 0.15s", cursor: "pointer" }}
                                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
                                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                            >
                                <td style={{ padding: "0.85rem 1rem" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <div style={{
                                            width: 32, height: 32, borderRadius: "50%", background: "var(--accent)", border: "1px solid var(--border)",
                                            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700,
                                        }}>{u.name.split(" ").map(n => n[0]).join("")}</div>
                                        <div>
                                            <div style={{ fontWeight: 600, color: "#fff" }}>{u.name}</div>
                                            <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{u.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: "0.85rem 1rem" }}>
                                    <span style={{
                                        display: "inline-flex", alignItems: "center", gap: 4,
                                        fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                                        padding: "3px 8px", borderRadius: 4,
                                        background: u.role === "Admin" ? "rgba(0,112,243,0.1)" : u.role === "Pro" ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.05)",
                                        color: u.role === "Admin" ? "var(--primary)" : u.role === "Pro" ? "#22c55e" : "var(--muted-foreground)",
                                    }}>
                                        {u.role === "Admin" && <Shield size={10} />}
                                        {u.role}
                                    </span>
                                </td>
                                <td style={{ padding: "0.85rem 1rem", color: "var(--muted-foreground)" }}>{u.joined}</td>
                                <td style={{ padding: "0.85rem 1rem" }}>{u.resources}</td>
                                <td style={{ padding: "0.85rem 1rem" }}>
                                    <span style={{
                                        fontSize: "0.72rem", fontWeight: 700,
                                        color: u.status === "Active" ? "#22c55e" : "#ef4444",
                                    }}>● {u.status}</span>
                                </td>
                                <td style={{ padding: "0.85rem 1rem", textAlign: "right" }}>
                                    <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted-foreground)", padding: 4 }}>
                                        <MoreHorizontal size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
