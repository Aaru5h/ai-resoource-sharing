"use client";

import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import AmbientBackground from "@/components/ui/AmbientBackground";
import MouseTilt from "@/components/ui/MouseTilt";
import GradientText from "@/components/ui/GradientText";
import FloatingElement from "@/components/ui/FloatingElement";

const fadeUp = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
};

export default function RegisterPage() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "2rem", position: "relative" }}>
            <AmbientBackground variant="center" />

            <FloatingElement amplitude={10} duration={7} delay={0.5} style={{ position: "absolute", top: "12%", right: "8%", pointerEvents: "none" }}>
                <div style={{ width: 50, height: 50, borderRadius: "50%", border: "1px solid rgba(91,141,239,0.1)" }} />
            </FloatingElement>

            <MouseTilt tiltMax={4} scale={1.01} style={{ width: "100%", maxWidth: 400, zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.97, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="gradient-border"
                    style={{
                        background: "rgba(255,255,255,0.02)",
                        borderRadius: 16, padding: "2.5rem",
                        position: "relative", overflow: "hidden",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        style={{ textAlign: "center", marginBottom: "2rem", transform: "translateZ(12px)" }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            style={{ width: 48, height: 48, margin: "0 auto 1rem", border: "1px solid rgba(91,141,239,0.2)", borderRadius: "50%", borderTopColor: "var(--primary)", opacity: 0.4 }}
                        />
                        <GradientText as="h1" from="#ffffff" via="#93c5fd" to="#5b8def" className="heading-serif" style={{ fontSize: "1.8rem", marginBottom: "0.3rem" }}>
                            Create Account
                        </GradientText>
                        <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>Join the AI Resource Hub community</p>
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.4 }} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
                            <div>
                                <label style={{ fontSize: "0.78rem", fontWeight: 500, marginBottom: 6, display: "block", color: "var(--muted-foreground)" }}>First Name</label>
                                <input type="text" placeholder="John" className="input-glow" style={{
                                    width: "100%", padding: "0.7rem 0.85rem", borderRadius: 8,
                                    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                                    color: "#fff", fontSize: "0.85rem", outline: "none", transition: "border-color 0.3s, box-shadow 0.3s",
                                }} />
                            </div>
                            <div>
                                <label style={{ fontSize: "0.78rem", fontWeight: 500, marginBottom: 6, display: "block", color: "var(--muted-foreground)" }}>Last Name</label>
                                <input type="text" placeholder="Doe" className="input-glow" style={{
                                    width: "100%", padding: "0.7rem 0.85rem", borderRadius: 8,
                                    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                                    color: "#fff", fontSize: "0.85rem", outline: "none", transition: "border-color 0.3s, box-shadow 0.3s",
                                }} />
                            </div>
                        </div>
                        <div>
                            <label style={{ fontSize: "0.78rem", fontWeight: 500, marginBottom: 6, display: "block", color: "var(--muted-foreground)" }}>Email</label>
                            <input type="email" placeholder="you@example.com" className="input-glow" style={{
                                width: "100%", padding: "0.7rem 0.85rem", borderRadius: 8,
                                background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                                color: "#fff", fontSize: "0.85rem", outline: "none", transition: "border-color 0.3s, box-shadow 0.3s",
                            }} />
                        </div>
                        <div>
                            <label style={{ fontSize: "0.78rem", fontWeight: 500, marginBottom: 6, display: "block", color: "var(--muted-foreground)" }}>Password</label>
                            <input type="password" placeholder="••••••••" className="input-glow" style={{
                                width: "100%", padding: "0.7rem 0.85rem", borderRadius: 8,
                                background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                                color: "#fff", fontSize: "0.85rem", outline: "none", transition: "border-color 0.3s, box-shadow 0.3s",
                            }} />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98, y: 1 }}
                            className="btn-3d"
                            style={{
                                width: "100%", padding: "0.75rem",
                                background: "#ededed", color: "#000", fontWeight: 700,
                                fontSize: "0.88rem", borderRadius: 10, border: "none", cursor: "pointer",
                                marginTop: 4,
                            }}
                        >Create Account</motion.button>
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.4 }} style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "1.2rem 0" }}>
                        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                        <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>or</span>
                        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ delay: 0.35, duration: 0.4 }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
                        {[{ icon: Github, label: "GitHub" }, { icon: Mail, label: "Google" }].map(s => (
                            <motion.button
                                key={s.label}
                                whileHover={{ scale: 1.03, y: -1 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn-3d"
                                style={{
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                    padding: "0.65rem", borderRadius: 8, border: "1px solid var(--border)",
                                    background: "transparent", color: "var(--foreground)", fontSize: "0.82rem",
                                    fontWeight: 500, cursor: "pointer",
                                }}
                            ><s.icon size={15} /> {s.label}</motion.button>
                        ))}
                    </motion.div>

                    <motion.p {...fadeUp} transition={{ delay: 0.4, duration: 0.4 }} style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.78rem", color: "var(--muted-foreground)" }}>
                        Already have an account? <Link href="/login" style={{ color: "#fff", fontWeight: 600 }}>Sign in</Link>
                    </motion.p>
                </motion.div>
            </MouseTilt>
        </div>
    );
}
