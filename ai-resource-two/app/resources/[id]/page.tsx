import Link from "next/link";
import { ArrowLeft, Download, Star, Clock, FileText, Award } from "lucide-react";

const RESOURCE = {
    id: "1", title: "Understanding Large Language Models", type: "Notes",
    description: "A comprehensive deep dive into the architecture of modern transformers. Covers the evolution from RNNs/LSTMs to Attention mechanisms, explaining QKV matrix multiplications, multi-head attention, and positional encoding techniques used by models like GPT-4 and Claude 3.",
    author: "Alex Chen", authorRole: "Senior AI Researcher", date: "October 12, 2026",
    fileSize: "4.2 MB", format: "PDF & Markdown", rating: "4.9", reviews: 128,
};

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
    const d = RESOURCE;
    return (
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem 6rem' }}>
            <Link href="/resources" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: 'var(--muted-foreground)', fontSize: '0.85rem', fontWeight: 500,
                marginBottom: '2rem', transition: 'color 0.2s',
            }}>
                <ArrowLeft size={16} /> Back to resources
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="lg:grid-cols-3">
                {/* Main */}
                <div className="lg:col-span-2 animate-fade-up" style={{ opacity: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: 'var(--primary)' }}>{d.type}</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={12} /> {d.date}</span>
                    </div>

                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>{d.title}</h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' }}>{d.author.charAt(0)}</div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{d.author}</div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>{d.authorRole}</div>
                        </div>
                        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, color: '#eab308' }}>
                            <Star size={16} fill="currentColor" />
                            <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>{d.rating}</span>
                            <span style={{ color: 'var(--muted-foreground)', fontSize: '0.78rem' }}>({d.reviews})</span>
                        </div>
                    </div>

                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', marginBottom: '3rem' }}>{d.description}</p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Award size={18} style={{ color: 'var(--primary)' }} /> What You'll Learn
                    </h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', marginBottom: '3rem' }}>
                        {["Self-attention and cross-attention math foundations", "Positional embeddings and sequence ordering", "FlashAttention and Multi-Query optimizations"].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>
                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: 8, flexShrink: 0 }} />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Code block */}
                    <div style={{ background: '#0a0a0a', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border)', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
                            <span>example.py</span>
                            <span>Python</span>
                        </div>
                        <pre style={{ padding: '1.25rem', overflow: 'auto', fontSize: '0.82rem', lineHeight: 1.7, fontFamily: 'var(--font-geist-mono)' }}>
                            <code>{`def scaled_dot_product_attention(q, k, v, mask=None):
    matmul_qk = tf.matmul(q, k, transpose_b=True)
    dk = tf.cast(tf.shape(k)[-1], tf.float32)
    scaled = matmul_qk / tf.math.sqrt(dk)
    
    if mask is not None:
        scaled += (mask * -1e9)
        
    weights = tf.nn.softmax(scaled, axis=-1)
    return tf.matmul(weights, v), weights`}</code>
                        </pre>
                    </div>

                    {/* Comments */}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Discussion</h3>
                    <textarea placeholder="Leave a comment..." style={{
                        width: '100%', minHeight: 100, padding: '1rem',
                        background: '#0a0a0a', border: '1px solid var(--border)', borderRadius: 12,
                        fontSize: '0.9rem', color: '#fff', resize: 'vertical', outline: 'none',
                    }} />
                    <button style={{
                        marginTop: '0.75rem', padding: '0.6rem 1.2rem', background: '#ededed', color: '#000',
                        fontSize: '0.85rem', fontWeight: 600, borderRadius: 8, border: 'none', cursor: 'pointer',
                    }}>Post</button>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 animate-fade-up stagger-1" style={{ opacity: 0 }}>
                    <div style={{
                        position: 'sticky', top: 96,
                        background: '#0a0a0a', border: '1px solid var(--border)', borderRadius: 16,
                        padding: '2rem',
                    }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Download size={18} /> Download
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--muted-foreground)' }}>Format</span>
                                <span style={{ fontWeight: 600 }}>{d.format}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--muted-foreground)' }}>Size</span>
                                <span style={{ fontWeight: 600 }}>{d.fileSize}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--muted-foreground)' }}>License</span>
                                <span style={{ fontWeight: 600, color: '#22c55e' }}>MIT</span>
                            </div>
                        </div>
                        <button style={{
                            width: '100%', padding: '0.85rem',
                            background: '#ededed', color: '#000', fontWeight: 700,
                            fontSize: '0.9rem', borderRadius: 10, border: 'none', cursor: 'pointer',
                            transition: 'background 0.2s',
                        }}>Download Files</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
