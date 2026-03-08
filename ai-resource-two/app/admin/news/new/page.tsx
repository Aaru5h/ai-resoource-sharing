"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AdminNewNews() {
    return (
        <div style={{ maxWidth: 700 }}>
            <Link href="/admin" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: "0.82rem", color: "var(--muted-foreground)", marginBottom: "2rem",
                fontWeight: 500,
            }}>
                <ArrowLeft size={14} /> Back to dashboard
            </Link>

            <h1 style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>Post AI News</h1>
            <p style={{ fontSize: "0.88rem", color: "var(--muted-foreground)", marginBottom: "2.5rem" }}>Write and publish news articles for the community.</p>

            <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Headline</label>
                    <input type="text" placeholder="e.g. OpenAI Announces GPT-5" style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "#000", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none",
                    }} />
                </div>

                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Category</label>
                    <select style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "#000", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none", cursor: "pointer",
                    }}>
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
                        width: "100%", padding: "0.7rem 0.85rem", background: "#000", border: "1px solid var(--border)",
                        fontSize: "0.88rem", color: "#fff", outline: "none", resize: "vertical",
                        borderRadius: 8,
                    }} />
                </div>

                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Full Article Content</label>
                    <textarea placeholder="Write the full article here. Markdown is supported." rows={12} style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "#000", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none", resize: "vertical",
                        fontFamily: "var(--font-geist-mono)",
                    }} />
                </div>

                <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginBottom: 6 }}>Source URL (optional)</label>
                    <input type="url" placeholder="https://..." style={{
                        width: "100%", padding: "0.7rem 0.85rem", background: "#000", border: "1px solid var(--border)",
                        borderRadius: 8, fontSize: "0.88rem", color: "#fff", outline: "none",
                    }} />
                </div>

                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", paddingTop: "0.5rem" }}>
                    <Link href="/admin" style={{
                        padding: "0.7rem 1.5rem", borderRadius: 8, border: "1px solid var(--border)",
                        fontSize: "0.85rem", fontWeight: 600, color: "var(--muted-foreground)",
                    }}>Cancel</Link>
                    <button type="submit" style={{
                        padding: "0.7rem 1.5rem", borderRadius: 8, background: "#ededed", color: "#000",
                        fontSize: "0.85rem", fontWeight: 600, border: "none", cursor: "pointer",
                    }}>Publish Article</button>
                </div>
            </form>
        </div>
    );
}
