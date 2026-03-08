"use client";

import Link from "next/link";
import { LayoutDashboard, Users, FileText, Newspaper, Settings, LogOut, ArrowLeft } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#000" }}>
            {/* Sidebar */}
            <aside style={{
                width: 240, borderRight: "1px solid var(--border)", background: "#0a0a0a",
                display: "flex", flexDirection: "column",
            }}>
                <div style={{
                    height: 56, display: "flex", alignItems: "center", padding: "0 1.25rem",
                    borderBottom: "1px solid var(--border)",
                }}>
                    <Link href="/admin" style={{
                        fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: 8,
                        fontSize: "0.88rem",
                    }}>
                        <div style={{
                            width: 22, height: 22, background: "#fff", borderRadius: 4,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#000", fontFamily: "var(--font-geist-mono)", fontSize: "0.5rem", fontWeight: 900,
                        }}>AD</div>
                        Admin Portal
                    </Link>
                </div>

                <div style={{ flex: 1, padding: "1.25rem 0.85rem" }}>
                    <p style={{ padding: "0 0.5rem", fontSize: "0.68rem", fontWeight: 700, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>Menu</p>
                    <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {[
                            { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
                            { href: "/admin/resources", icon: FileText, label: "Resources" },
                            { href: "/admin/news/new", icon: Newspaper, label: "Post News" },
                            { href: "/admin/users", icon: Users, label: "Users" },
                            { href: "/admin/settings", icon: Settings, label: "Settings" },
                        ].map(item => (
                            <Link key={item.href} href={item.href} style={{
                                display: "flex", alignItems: "center", gap: 10,
                                padding: "0.5rem 0.65rem", borderRadius: 8,
                                fontSize: "0.82rem", fontWeight: 500, color: "rgba(255,255,255,0.5)",
                                transition: "all 0.15s",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "transparent"; }}
                            >
                                <item.icon size={15} /> {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div style={{ padding: "0.85rem", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 2 }}>
                    <Link href="/" style={{
                        display: "flex", alignItems: "center", gap: 8, padding: "0.5rem 0.65rem", borderRadius: 8,
                        fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", transition: "color 0.15s",
                    }}>
                        <ArrowLeft size={14} /> Back to Site
                    </Link>
                    <button style={{
                        display: "flex", alignItems: "center", gap: 8, padding: "0.5rem 0.65rem", borderRadius: 8,
                        fontSize: "0.78rem", color: "#ef4444", background: "none", border: "none",
                        cursor: "pointer", width: "100%", transition: "background 0.15s",
                    }}>
                        <LogOut size={14} /> Logout
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
                <div style={{ flex: 1, overflow: "auto", padding: "2rem" }}>
                    {children}
                </div>
            </main>
        </div>
    );
}
