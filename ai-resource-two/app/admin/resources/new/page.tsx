"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, FileText, Github, Layers, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const TYPES = [
    { value: "notes", label: "Notes", icon: BookOpen },
    { value: "tutorial", label: "Tutorial", icon: FileText },
    { value: "project", label: "Project", icon: Layers },
    { value: "github", label: "GitHub Repo", icon: Github },
];

const fadeUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
};

export default function AdminNewResource() {
    const [selectedType, setSelectedType] = useState("notes");
    const [isDragOver, setIsDragOver] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: 700 }}
        >
            <motion.div {...fadeUp} transition={{ delay: 0.05, duration: 0.35 }}>
                <Link href="/admin/resources" style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: "0.82rem", color: "var(--muted-foreground)", marginBottom: "2rem",
                    fontWeight: 500, transition: "color 0.2s",
                }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--muted-foreground)"}
                >
                    <ArrowLeft size={14} /> Back to resources
                </Link>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.35 }}>
                <h1 style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>Upload Resource</h1>
                <p style={{ fontSize: "0.88rem", color: "var(--muted-foreground)", marginBottom: "2.5rem" }}>Add a new resource to the platform.</p>
            </motion.div>

            <motion.form
                {...fadeUp}
                transition={{ delay: 0.15, duration: 0.4 }}
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
                {/* Type selection */}
                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 8 }}>Resource Type</label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem" }}>
                        {TYPES.map(t => (
                            <motion.button
                                key={t.value}
                                type="button"
                                onClick={() => setSelectedType(t.value)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                style={{
                                    display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                                    padding: "1rem 0.5rem", borderRadius: 10,
                                    border: selectedType === t.value ? "1px solid var(--primary)" : "1px solid var(--border)",
                                    background: selectedType === t.value ? "rgba(91,141,239,0.06)" : "transparent",
                                    cursor: "pointer", transition: "border-color 0.2s, background 0.2s",
                                }}
                            >
                                <t.icon size={18} style={{ color: selectedType === t.value ? "var(--primary)" : "var(--muted-foreground)" }} />
                                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: selectedType === t.value ? "#fff" : "var(--muted-foreground)" }}>{t.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Title */}
                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Title</label>
                    <input type="text" placeholder="e.g. Understanding Transformer Architecture" style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none", transition: "border-color 0.25s ease",
                    }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--primary)"}
                        onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                    />
                </div>

                {/* Description */}
                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Description</label>
                    <textarea placeholder="Brief description of this resource..." rows={4} style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none", resize: "vertical",
                        transition: "border-color 0.25s ease",
                    }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--primary)"}
                        onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                    />
                </div>

                {/* URL */}
                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>
                        {selectedType === "github" ? "GitHub Repository URL" : "External Link (optional)"}
                    </label>
                    <input type="url" placeholder="https://..." style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none", transition: "border-color 0.25s ease",
                    }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--primary)"}
                        onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                    />
                </div>

                {/* File upload */}
                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>
                        Upload Files (PDF, Markdown, ZIP)
                    </label>
                    <motion.div
                        animate={{
                            borderColor: isDragOver ? "var(--primary)" : "var(--border)",
                            background: isDragOver ? "rgba(91,141,239,0.04)" : "transparent",
                        }}
                        transition={{ duration: 0.2 }}
                        onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
                        onDragLeave={() => setIsDragOver(false)}
                        onDrop={() => setIsDragOver(false)}
                        style={{
                            border: "2px dashed var(--border)", borderRadius: 12, padding: "2.5rem",
                            textAlign: "center", cursor: "pointer",
                        }}
                    >
                        <Upload size={24} style={{ color: isDragOver ? "var(--primary)" : "var(--muted-foreground)", margin: "0 auto 0.75rem", transition: "color 0.2s" }} />
                        <p style={{ fontSize: "0.88rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>
                            Drag & drop files here, or <span style={{ color: "var(--primary)", fontWeight: 600 }}>browse</span>
                        </p>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", opacity: 0.5 }}>
                            Max 50MB per file
                        </p>
                        <input type="file" multiple style={{ display: "none" }} />
                    </motion.div>
                </div>

                {/* Tags */}
                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Tags</label>
                    <input type="text" placeholder="Comma separated — e.g. transformers, attention, pytorch" style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none", transition: "border-color 0.25s ease",
                    }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--primary)"}
                        onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                    />
                </div>

                {/* Premium toggle */}
                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "1rem 1.25rem", borderRadius: 10, background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--border)",
                }}>
                    <div>
                        <div style={{ fontSize: "0.88rem", fontWeight: 600 }}>Premium Content</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>Only accessible to Pro subscribers</div>
                    </div>
                    <label style={{ position: "relative", display: "inline-block", width: 44, height: 24, cursor: "pointer" }}>
                        <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                        <span style={{ position: "absolute", inset: 0, background: "var(--border)", borderRadius: 12, transition: "0.2s" }} />
                    </label>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", paddingTop: "0.5rem" }}>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                        <Link href="/admin/resources" style={{
                            display: "inline-block", padding: "0.7rem 1.5rem", borderRadius: 8, border: "1px solid var(--border)",
                            fontSize: "0.85rem", fontWeight: 600, color: "var(--muted-foreground)",
                        }}>Cancel</Link>
                    </motion.div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        style={{
                            padding: "0.7rem 1.5rem", borderRadius: 8, background: "#ededed", color: "#000",
                            fontSize: "0.85rem", fontWeight: 600, border: "none", cursor: "pointer",
                        }}
                    >Publish Resource</motion.button>
                </div>
            </motion.form>
        </motion.div>
    );
}
