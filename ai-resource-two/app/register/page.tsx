"use client";

import Link from "next/link";
import { Github, Mail } from "lucide-react";

export default function RegisterPage() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "2rem" }}>
            <div className="animate-fade-up" style={{
                width: "100%", maxWidth: 400,
                background: "rgba(10,10,10,0.8)", backdropFilter: "blur(12px)",
                border: "1px solid var(--border)", borderRadius: 16,
                padding: "2.5rem", opacity: 0,
            }}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <div style={{
                        width: 36, height: 36, background: "var(--primary)", borderRadius: 8,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#fff", fontFamily: "var(--font-geist-mono)", fontSize: "0.6rem",
                        fontWeight: 900, margin: "0 auto 1rem",
                    }}>AI</div>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>Create Account</h1>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>Join the AI Resource Hub community</p>
                </div>

                <form style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
                        <div>
                            <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>First Name</label>
                            <input type="text" placeholder="John" style={{
                                width: "100%", padding: "0.65rem 0.85rem", background: "#000", border: "1px solid var(--border)",
                                borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none",
                            }} />
                        </div>
                        <div>
                            <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Last Name</label>
                            <input type="text" placeholder="Doe" style={{
                                width: "100%", padding: "0.65rem 0.85rem", background: "#000", border: "1px solid var(--border)",
                                borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none",
                            }} />
                        </div>
                    </div>
                    <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Email</label>
                        <input type="email" placeholder="you@example.com" style={{
                            width: "100%", padding: "0.65rem 0.85rem", background: "#000", border: "1px solid var(--border)",
                            borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none",
                        }} />
                    </div>
                    <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Password</label>
                        <input type="password" placeholder="••••••••" style={{
                            width: "100%", padding: "0.65rem 0.85rem", background: "#000", border: "1px solid var(--border)",
                            borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none",
                        }} />
                    </div>
                    <button type="submit" style={{
                        padding: "0.75rem", background: "#ededed", color: "#000", fontWeight: 600,
                        fontSize: "0.9rem", borderRadius: 8, border: "none", cursor: "pointer", marginTop: "0.25rem",
                    }}>Create Account</button>
                </form>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "1.5rem 0" }}>
                    <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                    <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>or</span>
                    <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    <button style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        padding: "0.6rem", background: "#000", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.82rem", fontWeight: 600, color: "#ededed", cursor: "pointer",
                    }}><Github size={16} /> GitHub</button>
                    <button style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        padding: "0.6rem", background: "#000", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.82rem", fontWeight: 600, color: "#ededed", cursor: "pointer",
                    }}><Mail size={16} /> Google</button>
                </div>

                <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
                    Already have an account? <Link href="/login" style={{ color: "#fff", fontWeight: 600 }}>Sign in</Link>
                </p>
            </div>
        </div>
    );
}
