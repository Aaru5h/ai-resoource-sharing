"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
};

export default function AdminNewNews() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: 700 }}
        >
            <motion.div {...fadeUp} transition={{ delay: 0.05, duration: 0.35 }}>
                <Link href="/admin" style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: "0.82rem", color: "var(--muted-foreground)", marginBottom: "2rem",
                    fontWeight: 500, transition: "color 0.2s",
                }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--muted-foreground)"}
                >
                    <ArrowLeft size={14} /> Back to dashboard
                </Link>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.35 }}>
                <h1 style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>Post AI News</h1>
                <p style={{ fontSize: "0.88rem", color: "var(--muted-foreground)", marginBottom: "2.5rem" }}>Write and publish news articles for the community.</p>
            </motion.div>

            <motion.form
                {...fadeUp}
                transition={{ delay: 0.15, duration: 0.4 }}
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Headline</label>
                    <input type="text" placeholder="e.g. OpenAI Announces GPT-5" style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none", transition: "border-color 0.25s ease",
                    }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--primary)"}
                        onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                    />
                </div>

                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Category</label>
                    <select style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none", cursor: "pointer",
                        transition: "border-color 0.25s ease",
                    }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--primary)"}
                        onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                    >
                        <option value="">Select category</option>
                        <option value="llm">LLM Updates</option>
                        <option value="research">Research</option>
                        <option value="tools">Developer Tools</option>
                        <option value="release">Model Releases</option>
                        <option value="policy">Policy & Regulation</option>
                        <option value="tutorial">Tutorial</option>
                    </select>
                </div>

                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Summary / Excerpt</label>
                    <textarea placeholder="Brief summary shown in the news feed..." rows={3} style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)",
                        fontSize: "0.88rem", color: "#fff", outline: "none", resize: "vertical",
                        borderRadius: 8, transition: "border-color 0.25s ease",
                    }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--primary)"}
                        onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                    />
                </div>

                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Full Article Content</label>
                    <textarea placeholder="Write the full article here. Markdown is supported." rows={12} style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none", resize: "vertical",
                        fontFamily: "monospace", transition: "border-color 0.25s ease",
                    }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--primary)"}
                        onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                    />
                </div>

                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Source URL (optional)</label>
                    <input type="url" placeholder="https://..." style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none", transition: "border-color 0.25s ease",
                    }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--primary)"}
                        onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                    />
                </div>

                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", paddingTop: "0.5rem" }}>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                        <Link href="/admin" style={{
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
                    >Publish Article</motion.button>
                </div>
            </motion.form>
        </motion.div>
    );
}
