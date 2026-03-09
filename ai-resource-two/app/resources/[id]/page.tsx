"use client";

import Link from "next/link";
import { ArrowLeft, Download, Star, Clock, FileText, Award, MessageCircle, ThumbsUp, Reply } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import AmbientBackground from "@/components/ui/AmbientBackground";
import MouseTilt from "@/components/ui/MouseTilt";
import GradientText from "@/components/ui/GradientText";

const RESOURCE = {
    id: "1", title: "Understanding Large Language Models", type: "Notes",
    description: "A comprehensive deep dive into the architecture of modern transformers. Covers the evolution from RNNs/LSTMs to Attention mechanisms, explaining QKV matrix multiplications, multi-head attention, and positional encoding techniques used by models like GPT-4 and Claude 3.",
    author: "Alex Chen", authorRole: "Senior AI Researcher", date: "October 12, 2026",
    fileSize: "4.2 MB", format: "PDF & Markdown", rating: "4.9", reviews: 128,
};

const COMMENTS = [
    {
        id: 1, author: "Sarah Jenkins", initials: "SJ", time: "3 days ago",
        text: "This is hands down the clearest explanation of attention I've read. The QKV diagrams in Section 3 really clicked for me — especially the analogy to database queries.",
        likes: 24,
        replies: [
            { id: 11, author: "Alex Chen", initials: "AC", time: "2 days ago", text: "Thanks Sarah! I spent a lot of time on those diagrams. Glad they helped.", likes: 8 },
        ],
    },
    {
        id: 2, author: "David Kumar", initials: "DK", time: "1 week ago",
        text: "Would love to see a follow-up on FlashAttention v2 and ring attention for long contexts. The efficiency section is a bit light compared to the rest.",
        likes: 16, replies: [],
    },
    {
        id: 3, author: "Elena R.", initials: "ER", time: "2 weeks ago",
        text: "Used this as a reference for my university paper. The bibliography alone is worth the download — 47 cited papers, all properly categorized.",
        likes: 31, replies: [],
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
};

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
    const d = RESOURCE;
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <AmbientBackground variant="top-right" />
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: "4rem 2rem 6rem", position: "relative", zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link href="/resources" style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        color: "var(--muted-foreground)", fontSize: "0.85rem", fontWeight: 500,
                        marginBottom: "2rem", transition: "color 0.2s",
                    }}
                        onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--muted-foreground)"}
                    >
                        <ArrowLeft size={16} /> Back to resources
                    </Link>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }} className="lg:grid-cols-3">
                    {/* Main content */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={fadeUp} initial="initial" animate="animate"
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700, color: "var(--primary)" }}>{d.type}</span>
                            <span style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> {d.date}</span>
                        </div>

                        <h1 className="heading-serif" style={{ fontSize: "2.8rem", lineHeight: 1.15, marginBottom: "1.5rem", color: "#fff" }}>{d.title}</h1>

                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                                style={{
                                    width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.03)",
                                    border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                                    fontWeight: 700, fontSize: "0.9rem",
                                }}
                            >{d.author.charAt(0)}</motion.div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{d.author}</div>
                                <div style={{ fontSize: "0.78rem", color: "var(--muted-foreground)" }}>{d.authorRole}</div>
                            </div>
                            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, color: "#eab308" }}>
                                <Star size={16} fill="currentColor" />
                                <span style={{ fontWeight: 600, color: "#fff", fontSize: "0.9rem" }}>{d.rating}</span>
                                <span style={{ color: "var(--muted-foreground)", fontSize: "0.78rem" }}>({d.reviews})</span>
                            </div>
                        </div>

                        <motion.p
                            variants={fadeUp} initial="initial" animate="animate"
                            transition={{ delay: 0.15, duration: 0.4 }}
                            style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: "3rem" }}
                        >{d.description}</motion.p>

                        <motion.div
                            variants={fadeUp} initial="initial" animate="animate"
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: 8 }}>
                                <Award size={18} style={{ color: "var(--primary)" }} /> What You&apos;ll Learn
                            </h3>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none", marginBottom: "3rem" }}>
                                {["Self-attention and cross-attention math foundations", "Positional embeddings and sequence ordering", "FlashAttention and Multi-Query optimizations"].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}
                                    >
                                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", marginTop: 8, flexShrink: 0 }} />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Code block */}
                        <motion.div
                            variants={fadeUp} initial="initial" animate="animate"
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="code-glow"
                            style={{
                                background: "rgba(255,255,255,0.02)", borderRadius: 12,
                                overflow: "hidden", marginBottom: "3rem",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 1.25rem", borderBottom: "1px solid var(--border)", fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
                                <span>example.py</span>
                                <span>Python</span>
                            </div>
                            <pre style={{ padding: "1.25rem", overflow: "auto", fontSize: "0.82rem", lineHeight: 1.7, fontFamily: "monospace" }}>
                                <code>{`def scaled_dot_product_attention(q, k, v, mask=None):
    matmul_qk = tf.matmul(q, k, transpose_b=True)
    dk = tf.cast(tf.shape(k)[-1], tf.float32)
    scaled = matmul_qk / tf.math.sqrt(dk)
    
    if mask is not None:
        scaled += (mask * -1e9)
        
    weights = tf.nn.softmax(scaled, axis=-1)
    return tf.matmul(weights, v), weights`}</code>
                            </pre>
                        </motion.div>

                        {/* ─── Discussion / Comments ─── */}
                        <motion.div
                            variants={fadeUp} initial="initial" animate="animate"
                            transition={{ delay: 0.35, duration: 0.4 }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                                <h3 style={{ fontSize: "1.15rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                                    <MessageCircle size={18} style={{ color: "var(--primary)" }} /> Discussion
                                    <span style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--muted-foreground)", marginLeft: 4 }}>
                                        {COMMENTS.length + COMMENTS.reduce((a, c) => a + c.replies.length, 0)} comments
                                    </span>
                                </h3>
                            </div>

                            {/* New comment input */}
                            <div style={{ marginBottom: "2rem" }}>
                                <textarea placeholder="Share your thoughts on this resource..." className="input-glow" style={{
                                    width: "100%", minHeight: 90, padding: "1rem",
                                    background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: 12,
                                    fontSize: "0.88rem", color: "#fff", resize: "vertical", outline: "none",
                                    transition: "border-color 0.25s ease, box-shadow 0.25s",
                                    lineHeight: 1.6,
                                }} />
                                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.65rem" }}>
                                    <motion.button
                                        whileHover={{ scale: 1.02, y: -1 }}
                                        whileTap={{ scale: 0.98, y: 1 }}
                                        className="btn-3d"
                                        style={{
                                            padding: "0.55rem 1.2rem", background: "#ededed", color: "#000",
                                            fontSize: "0.82rem", fontWeight: 600, borderRadius: 8, border: "none", cursor: "pointer",
                                        }}
                                    >Post Comment</motion.button>
                                </div>
                            </div>

                            {/* Comment threads */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {COMMENTS.map((comment, ci) => (
                                    <motion.div
                                        key={comment.id}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + ci * 0.06, duration: 0.35 }}
                                    >
                                        {/* Parent comment */}
                                        <div style={{
                                            padding: "1.25rem", borderRadius: 12,
                                            border: "1px solid var(--border)", background: "rgba(255,255,255,0.015)",
                                        }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                                <div style={{
                                                    width: 32, height: 32, borderRadius: "50%",
                                                    background: "rgba(91,141,239,0.1)", border: "1px solid rgba(91,141,239,0.15)",
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    fontSize: "0.68rem", fontWeight: 700, color: "var(--primary)",
                                                }}>{comment.initials}</div>
                                                <div style={{ flex: 1 }}>
                                                    <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>{comment.author}</span>
                                                    <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginLeft: 8 }}>{comment.time}</span>
                                                </div>
                                            </div>
                                            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: "0.85rem" }}>
                                                {comment.text}
                                            </p>
                                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                                <button style={{
                                                    display: "flex", alignItems: "center", gap: 5, background: "none", border: "none",
                                                    color: "var(--muted-foreground)", fontSize: "0.75rem", cursor: "pointer", fontWeight: 500,
                                                    transition: "color 0.2s",
                                                }}>
                                                    <ThumbsUp size={13} /> {comment.likes}
                                                </button>
                                                <button style={{
                                                    display: "flex", alignItems: "center", gap: 5, background: "none", border: "none",
                                                    color: "var(--muted-foreground)", fontSize: "0.75rem", cursor: "pointer", fontWeight: 500,
                                                    transition: "color 0.2s",
                                                }}>
                                                    <Reply size={13} /> Reply
                                                </button>
                                            </div>
                                        </div>

                                        {/* Nested replies */}
                                        {comment.replies.length > 0 && (
                                            <div style={{ marginLeft: "2rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                                {comment.replies.map(reply => (
                                                    <div key={reply.id} style={{
                                                        padding: "1rem 1.25rem", borderRadius: 10,
                                                        borderLeft: "2px solid rgba(91,141,239,0.2)",
                                                        background: "rgba(255,255,255,0.01)",
                                                    }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.5rem" }}>
                                                            <div style={{
                                                                width: 26, height: 26, borderRadius: "50%",
                                                                background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.15)",
                                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                                fontSize: "0.58rem", fontWeight: 700, color: "#22c55e",
                                                            }}>{reply.initials}</div>
                                                            <span style={{ fontWeight: 600, fontSize: "0.82rem" }}>{reply.author}</span>
                                                            <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>{reply.time}</span>
                                                        </div>
                                                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                                                            {reply.text}
                                                        </p>
                                                        <button style={{
                                                            display: "flex", alignItems: "center", gap: 5, background: "none", border: "none",
                                                            color: "var(--muted-foreground)", fontSize: "0.72rem", cursor: "pointer", fontWeight: 500,
                                                            marginTop: "0.5rem",
                                                        }}>
                                                            <ThumbsUp size={11} /> {reply.likes}
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={{ position: "sticky", top: 96 }}>
                            <MouseTilt tiltMax={4} scale={1.01}>
                                <SpotlightCard spotlightColor="rgba(91,141,239,0.08)">
                                    <div style={{ padding: "2rem" }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 8 }}>
                                            <Download size={18} /> Download
                                        </h3>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem", fontSize: "0.85rem" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <span style={{ color: "var(--muted-foreground)" }}>Format</span>
                                                <span style={{ fontWeight: 600 }}>{d.format}</span>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <span style={{ color: "var(--muted-foreground)" }}>Size</span>
                                                <span style={{ fontWeight: 600 }}>{d.fileSize}</span>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <span style={{ color: "var(--muted-foreground)" }}>License</span>
                                                <span style={{ fontWeight: 600, color: "#22c55e" }}>MIT</span>
                                            </div>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.02, y: -1 }}
                                            whileTap={{ scale: 0.98, y: 1 }}
                                            className="btn-3d"
                                            style={{
                                                width: "100%", padding: "0.85rem",
                                                background: "#ededed", color: "#000", fontWeight: 700,
                                                fontSize: "0.88rem", borderRadius: 10, border: "none", cursor: "pointer",
                                            }}
                                        >Download Files</motion.button>
                                    </div>
                                </SpotlightCard>
                            </MouseTilt>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
