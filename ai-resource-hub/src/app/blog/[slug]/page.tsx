import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MessageSquare, ThumbsUp } from "lucide-react";
import styles from "./page.module.css";

// This is a mockup page, real implementation would fetch data based on `params.slug`
export default function ArticlePage() {
    return (
        <div className={styles.container}>
            <article className={`${styles.article} animate-fade-up`}>
                <Link href="/blog" className={styles.backLink}>
                    <ArrowLeft size={16} />
                    Back to Articles
                </Link>

                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding Attention Mechanisms in Transformers</h1>
                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <Calendar size={16} />
                            <span>Oct 12, 2023</span>
                        </div>
                        <div className={styles.metaItem}>
                            <Clock size={16} />
                            <span>5 min read</span>
                        </div>
                    </div>
                </header>

                <div className={styles.content}>
                    <p>
                        The Transformer architecture revolutionized Natural Language Processing (NLP) by completely dispensing with recurrence and convolutions entirely in favor of attention mechanisms. But what exactly is an attention mechanism, and why is it so powerful?
                    </p>
                    <p>
                        At its core, self-attention allows a model to look at other words in the input sequence as it processes a specific word. It helps the model capture context and relationships between words, regardless of their distance from each other in the sentence.
                    </p>
                    <p>
                        The mechanism computes a weighted sum of values, where the weights are determined by a compatibility function between a query and a set of keys. This elegantly simple mathematical operation is the engine driving models like GPT-4 and Claude.
                    </p>
                    <br />
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Scaled Dot-Product Attention</h3>
                    <p style={{ fontFamily: "var(--font-geist-mono)", padding: "1rem", backgroundColor: "var(--accent)", borderRadius: "8px", fontSize: "0.9rem", border: "1px solid var(--border)" }}>
                        Attention(Q, K, V) = softmax(QK^T / sqrt(d_k))V
                    </p>
                    <p>
                        This equation fundamentally dictates how much &quot;focus&quot; or &quot;attention&quot; each word should pay to every other word. The softmax function ensures all attention weights sum to 1, effectively creating a probability distribution of focus.
                    </p>
                </div>

                {/* Comments Section Mockup */}
                <section className={styles.commentsSection}>
                    <h2 className={styles.commentsTitle}>
                        <MessageSquare size={24} />
                        Discussion (3)
                    </h2>

                    <form className={styles.commentForm}>
                        <label htmlFor="comment" className="sr-only" style={{ display: 'none' }}>Leave a comment</label>
                        <textarea
                            id="comment"
                            className={styles.commentInput}
                            placeholder="Share your thoughts on this article..."
                        ></textarea>
                        <button type="button" className={styles.submitBtn}>
                            Post Comment
                        </button>
                    </form>

                    <div className={styles.commentList}>
                        {/* Comment 1 */}
                        <div className={styles.commentBox}>
                            <div className={styles.avatar}>A</div>
                            <div className={styles.commentContent}>
                                <div className={styles.commentHeader}>
                                    <span className={styles.commentAuthor}>Alex Chen</span>
                                    <span className={styles.commentDate}>Oct 13, 2023</span>
                                </div>
                                <p className={styles.commentText}>
                                    Great breakdown! The explanation of scaled dot-product attention really helped me understand why the sqrt(d_k) factor is necessary to prevent vanishing gradients in the softmax.
                                </p>
                                <div className={styles.commentActions}>
                                    <button className={styles.actionBtn}>
                                        <ThumbsUp size={14} /> 12
                                    </button>
                                    <button className={styles.actionBtn}>Reply</button>
                                </div>
                            </div>
                        </div>

                        {/* Comment 2 */}
                        <div className={styles.commentBox}>
                            <div className={styles.avatar}>M</div>
                            <div className={styles.commentContent}>
                                <div className={styles.commentHeader}>
                                    <span className={styles.commentAuthor}>Marie Dubois</span>
                                    <span className={styles.commentDate}>Oct 15, 2023</span>
                                </div>
                                <p className={styles.commentText}>
                                    Are you planning to write a follow-up on Multi-Head Attention? I&apos;d love to see how multiple attention layers operate in parallel.
                                </p>
                                <div className={styles.commentActions}>
                                    <button className={styles.actionBtn}>
                                        <ThumbsUp size={14} /> 5
                                    </button>
                                    <button className={styles.actionBtn}>Reply</button>
                                </div>
                            </div>
                        </div>

                        {/* Comment 3 (Nested Reply Demo) */}
                        <div className={styles.commentBox}>
                            <div className={styles.avatar} style={{ backgroundColor: 'transparent', border: '1px solid var(--border)' }}>+</div>
                            <div className={styles.commentContent}>
                                <div className={styles.commentHeader}>
                                    <span className={styles.commentAuthor}>Author</span>
                                    <span className={styles.commentDate}>Oct 16, 2023</span>
                                </div>
                                <p className={styles.commentText}>
                                    Yes! That&apos;s exactly what my next tutorial will cover. Stay tuned.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </article>
        </div>
    );
}
