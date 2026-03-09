"use client";

import { motion } from "framer-motion";
import { Save } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

export default function AdminSettingsPage() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginBottom: "2rem" }}
            >
                <h1 className="heading-serif" style={{ fontSize: "1.75rem", marginBottom: "0.25rem", color: "#fff" }}>
                    <GradientText from="#fff" via="#93c5fd" to="#5b8def">Settings</GradientText>
                </h1>
                <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>
                    Configure your platform.
                </p>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: 600 }}>
                {/* General */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    style={{ borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", padding: "1.5rem" }}
                >
                    <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem" }}>General</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div>
                            <label style={{ fontSize: "0.78rem", fontWeight: 500, display: "block", marginBottom: 6, color: "var(--muted-foreground)" }}>Site Name</label>
                            <input defaultValue="AI Resource Hub" className="input-glow" style={{
                                width: "100%", padding: "0.65rem 0.85rem", borderRadius: 8,
                                background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                                color: "#fff", fontSize: "0.85rem", outline: "none",
                                transition: "border-color 0.3s, box-shadow 0.3s",
                            }} />
                        </div>
                        <div>
                            <label style={{ fontSize: "0.78rem", fontWeight: 500, display: "block", marginBottom: 6, color: "var(--muted-foreground)" }}>Site Description</label>
                            <textarea defaultValue="Open platform for AI & ML resources, notes, and projects." className="input-glow" style={{
                                width: "100%", minHeight: 70, padding: "0.65rem 0.85rem", borderRadius: 8,
                                background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                                color: "#fff", fontSize: "0.85rem", outline: "none", resize: "vertical",
                                transition: "border-color 0.3s, box-shadow 0.3s", lineHeight: 1.6,
                            }} />
                        </div>
                        <div>
                            <label style={{ fontSize: "0.78rem", fontWeight: 500, display: "block", marginBottom: 6, color: "var(--muted-foreground)" }}>Contact Email</label>
                            <input defaultValue="admin@airesourcehub.com" className="input-glow" style={{
                                width: "100%", padding: "0.65rem 0.85rem", borderRadius: 8,
                                background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                                color: "#fff", fontSize: "0.85rem", outline: "none",
                                transition: "border-color 0.3s, box-shadow 0.3s",
                            }} />
                        </div>
                    </div>
                </motion.div>

                {/* Monetization */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    style={{ borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", padding: "1.5rem" }}
                >
                    <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem" }}>Monetization</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div>
                            <label style={{ fontSize: "0.78rem", fontWeight: 500, display: "block", marginBottom: 6, color: "var(--muted-foreground)" }}>AdSense Publisher ID</label>
                            <input defaultValue="ca-pub-1234567890" className="input-glow" style={{
                                width: "100%", padding: "0.65rem 0.85rem", borderRadius: 8,
                                background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                                color: "#fff", fontSize: "0.85rem", outline: "none", fontFamily: "monospace",
                                transition: "border-color 0.3s, box-shadow 0.3s",
                            }} />
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                            <div>
                                <label style={{ fontSize: "0.78rem", fontWeight: 500, display: "block", marginBottom: 6, color: "var(--muted-foreground)" }}>Pro Monthly Price</label>
                                <input defaultValue="$19" className="input-glow" style={{
                                    width: "100%", padding: "0.65rem 0.85rem", borderRadius: 8,
                                    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                                    color: "#fff", fontSize: "0.85rem", outline: "none",
                                    transition: "border-color 0.3s, box-shadow 0.3s",
                                }} />
                            </div>
                            <div>
                                <label style={{ fontSize: "0.78rem", fontWeight: 500, display: "block", marginBottom: 6, color: "var(--muted-foreground)" }}>Pro Yearly Price</label>
                                <input defaultValue="$190" className="input-glow" style={{
                                    width: "100%", padding: "0.65rem 0.85rem", borderRadius: 8,
                                    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                                    color: "#fff", fontSize: "0.85rem", outline: "none",
                                    transition: "border-color 0.3s, box-shadow 0.3s",
                                }} />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content Moderation */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    style={{ borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", padding: "1.5rem" }}
                >
                    <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem" }}>Content Moderation</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                        {[
                            { label: "Auto-approve comments from Pro users", defaultChecked: true },
                            { label: "Enable spam detection", defaultChecked: true },
                            { label: "Require email verification for new accounts", defaultChecked: false },
                        ].map((opt) => (
                            <label key={opt.label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", cursor: "pointer" }}>
                                <input type="checkbox" defaultChecked={opt.defaultChecked} style={{
                                    width: 16, height: 16, borderRadius: 4, accentColor: "var(--primary)",
                                }} />
                                {opt.label}
                            </label>
                        ))}
                    </div>
                </motion.div>

                {/* Save */}
                <motion.button
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99, y: 1 }}
                    className="btn-3d"
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        padding: "0.75rem", background: "#ededed", color: "#000",
                        fontSize: "0.88rem", fontWeight: 700, borderRadius: 10, border: "none", cursor: "pointer",
                    }}
                >
                    <Save size={16} /> Save Changes
                </motion.button>
            </div>
        </div>
    );
}
