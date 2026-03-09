"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Github, Layers, Cpu, Clock, Zap, Users, FileText, Code2, Braces, Eye } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import MouseTilt from "@/components/ui/MouseTilt";
import GradientText from "@/components/ui/GradientText";
import FloatingElement from "@/components/ui/FloatingElement";
import WireframeGlobe from "@/components/ui/WireframeGlobe";
import FloatingCodeCard from "@/components/ui/FloatingCodeCard";
import FloatingResourceCard from "@/components/ui/FloatingResourceCard";
import AmbientBackground from "@/components/ui/AmbientBackground";
import AdBanner from "@/components/ui/AdBanner";

const CATEGORIES = [
  { icon: BookOpen, label: "Notes & Tutorials", count: 42, href: "/resources?type=notes", color: "#5b8def" },
  { icon: Github, label: "GitHub Repos", count: 28, href: "/resources?type=github", color: "#38bdf8" },
  { icon: Layers, label: "Full Projects", count: 15, href: "/resources?type=projects", color: "#22c55e" },
  { icon: Cpu, label: "AI Tools", count: 63, href: "/resources?type=tools", color: "#f59e0b" },
];

const STATS = [
  { label: "Resources", value: "148+", icon: FileText },
  { label: "Contributors", value: "52+", icon: Users },
  { label: "Weekly Updates", value: "12+", icon: Zap },
];

const LATEST = [
  { id: 1, title: "Understanding Attention Mechanisms", type: "Article", author: "Alex Chen", date: "Oct 12", desc: "Deep dive into self-attention, multi-head attention, and why transformers work." },
  { id: 2, title: "Deploying LLMs on Consumer GPUs", type: "Tutorial", author: "Sarah J.", date: "Nov 05", desc: "Run Llama-3 70B on an RTX 4090 with quantization tricks." },
  { id: 3, title: "RAG Pipeline from Scratch", type: "Project", author: "David K.", date: "Jan 15", desc: "Build a production RAG system with Pinecone, LangChain, and OpenAI." },
];

const NEWS_PREVIEW = [
  { id: 1, title: "OpenAI Announces Next Generation Reasoning Model", category: "LLM", time: "2 hours ago" },
  { id: 2, title: "Breakthrough in Efficient Transformer Architectures", category: "Research", time: "5 hours ago" },
  { id: 3, title: "Meta releases new Llama vision model", category: "Release", time: "3 days ago" },
];

const FEATURES = [
  { icon: Code2, title: "Code Snippets", desc: "Run and fork code directly in the browser" },
  { icon: Braces, title: "API Integrations", desc: "Connect with OpenAI, LangChain, and more" },
  { icon: Eye, title: "Live Previews", desc: "Interactive demos of every project" },
];

export default function Home() {
  return (
    <div style={{ width: "100%" }}>

      {/* ───── Hero ───── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <AmbientBackground variant="center" />

        {/* Decorative grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            linear-gradient(rgba(91,141,239,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,141,239,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
        }} />

        {/* Floating decorations — large, visible */}
        <FloatingElement
          amplitude={15} duration={8} delay={0}
          style={{ position: "absolute", top: "12%", right: "10%", pointerEvents: "none", zIndex: 1 }}
        >
          <div style={{
            width: 200, height: 200, borderRadius: "50%",
            border: "1px solid rgba(91,141,239,0.15)",
            boxShadow: "0 0 60px -20px rgba(91,141,239,0.1)",
          }} />
        </FloatingElement>

        {/* Animated glow orb — top left */}
        <FloatingElement
          amplitude={10} duration={6} delay={1}
          style={{ position: "absolute", top: "20%", left: "8%", pointerEvents: "none", zIndex: 1 }}
        >
          <div style={{
            width: 120, height: 120, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(91,141,239,0.12) 0%, transparent 70%)",
            filter: "blur(20px)",
          }} />
        </FloatingElement>

        {/* Animated glow orb — bottom right */}
        <FloatingElement
          amplitude={8} duration={7} delay={3}
          style={{ position: "absolute", bottom: "15%", right: "18%", pointerEvents: "none", zIndex: 1 }}
        >
          <div style={{
            width: 160, height: 160, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
            filter: "blur(25px)",
          }} />
        </FloatingElement>

        {/* Floating dots */}
        <FloatingElement
          amplitude={6} duration={5} delay={2}
          style={{ position: "absolute", bottom: "25%", left: "15%", pointerEvents: "none", zIndex: 1 }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {[10, 7, 4].map((s, i) => (
              <div key={i} style={{ width: s, height: s, borderRadius: "50%", background: `rgba(91,141,239,${0.35 - i * 0.08})` }} />
            ))}
          </div>
        </FloatingElement>

        {/* 3D Wireframe Globe matching reference site */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", opacity: 0.8, maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)" }}>
           <WireframeGlobe />
        </div>

        {/* 3D Floating Code Card (Right Side) */}
        <div className="hidden lg:block" style={{ position: "absolute", top: "25%", right: "8%", zIndex: 2, pointerEvents: "none" }}>
           <FloatingCodeCard />
        </div>

        {/* 3D Floating Resource Card (Left Side) */}
        <div className="hidden lg:block" style={{ position: "absolute", bottom: "15%", left: "8%", zIndex: 2, pointerEvents: "none" }}>
           <FloatingResourceCard />
        </div>

        <div style={{
          maxWidth: 1400, margin: "0 auto", padding: "12rem 2rem 5rem",
          textAlign: "center", position: "relative", zIndex: 2,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{
              fontSize: "0.78rem", fontWeight: 600, color: "var(--primary)",
              letterSpacing: "0.08em", textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              Open Resource Platform
            </p>

            <motion.h1
              initial={{ opacity: 0, rotateX: 20, y: 30 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: "1.5rem", perspective: 1000 }}
            >
              <GradientText
                as="span"
                from="#ffffff" via="#93c5fd" to="#5b8def"
                className="heading-serif"
                style={{
                  display: "block", fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                  lineHeight: 1.1,
                  textShadow: `
                    0 1px 0 rgba(255,255,255,0.2), 
                    0 2px 0 rgba(255,255,255,0.1), 
                    0 3px 0 rgba(147,197,253,0.1), 
                    0 4px 0 rgba(147,197,253,0.1), 
                    0 5px 0 rgba(91,141,239,0.1), 
                    0 6px 10px rgba(91,141,239,0.3)
                  `
                }}
              >
                The best AI resources,
              </GradientText>
              <motion.span
                initial={{ opacity: 0, y: 15, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "block", fontWeight: 500, color: "var(--muted-foreground)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.2,
                  letterSpacing: "-0.02em", marginTop: "0.5rem",
                }}
              >
                curated for builders.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                fontSize: "1.05rem", color: "var(--muted-foreground)",
                lineHeight: 1.7, maxWidth: 520, margin: "0 auto 2.5rem",
              }}
            >
              Notes, projects, tools, and GitHub repos — all organized and community-driven.
              Explore what others are building in AI & ML.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", perspective: 800 }}
            >
              <motion.div whileHover={{ scale: 1.05, rotateX: 10 }} whileTap={{ scale: 0.95, y: 2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                <Link href="/resources" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg, #ffffff, #e2e8f0)", color: "#000",
                  padding: "0.85rem 1.75rem",
                  borderRadius: 10, fontWeight: 600, fontSize: "0.95rem",
                  boxShadow: "0 10px 30px -10px rgba(255,255,255,0.4), 0 4px 6px -2px rgba(255,255,255,0.5), inset 0 -2px 0 rgba(0,0,0,0.1)",
                }}>
                  Browse Resources <ArrowRight size={15} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, rotateX: 10 }} whileTap={{ scale: 0.95, y: 2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                <Link href="/news" className="glass-card" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  color: "var(--foreground)", padding: "0.85rem 1.75rem",
                  fontSize: "0.95rem", fontWeight: 550,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.03)",
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}>
                  Latest News
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───── Stats bar ───── */}
      <ScrollReveal animation="fadeUp" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem 5rem" }}>
        <div style={{
          display: "flex", justifyContent: "center", gap: "4rem",
          padding: "1.5rem 0",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              style={{ display: "flex", alignItems: "center", gap: "0.65rem", cursor: "default" }}
            >
              <stat.icon size={16} style={{ color: "var(--primary)", opacity: 0.6 }} />
              <div>
                <span style={{ fontSize: "1.15rem", fontWeight: 600, letterSpacing: "-0.02em" }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", marginLeft: 6 }}>
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      {/* ───── Features ───── */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem 5rem", perspective: 1200 }}>
        <ScrollReveal animation="fadeUp">
          <h2 style={{
            fontSize: "0.78rem", fontWeight: 500, color: "var(--muted-foreground)",
            letterSpacing: "0.06em", textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>
            Platform Features
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="zoom3D" stagger={0.15} style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem",
        }}>
          {FEATURES.map((feat) => (
            <MouseTilt key={feat.title} tiltMax={6} scale={1.01}>
              <SpotlightCard spotlightColor="rgba(91,141,239,0.08)">
                <div style={{ padding: "1.75rem", transformStyle: "preserve-3d" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: "rgba(91,141,239,0.08)", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem", transform: "translateZ(24px)",
                  }}>
                    <feat.icon size={20} style={{ color: "var(--primary)" }} />
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.35rem", transform: "translateZ(12px)" }}>
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                    {feat.desc}
                  </p>
                </div>
              </SpotlightCard>
            </MouseTilt>
          ))}
        </ScrollReveal>
      </section>

      {/* ───── Categories ───── */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem 5rem", perspective: 1200 }}>
        <ScrollReveal animation="fadeUp">
          <h2 style={{
            fontSize: "0.78rem", fontWeight: 500, color: "var(--muted-foreground)",
            letterSpacing: "0.06em", textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>Explore by Category</h2>
        </ScrollReveal>
        <ScrollReveal animation="flipUp" stagger={0.1}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem",
          }}>
            {CATEGORIES.map((cat) => (
              <MouseTilt key={cat.label} tiltMax={8} scale={1.03}>
                <Link href={cat.href} className="card-3d" style={{
                  display: "flex", alignItems: "center", gap: "0.85rem",
                  padding: "1.1rem 1.25rem", cursor: "pointer", transformStyle: "preserve-3d",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: `${cat.color}14`, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    transform: "translateZ(20px)",
                  }}>
                    <cat.icon size={18} style={{ color: cat.color }} />
                  </div>
                  <div style={{ transform: "translateZ(10px)" }}>
                    <div style={{ fontSize: "0.88rem", fontWeight: 550 }}>{cat.label}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>
                      {cat.count} resources
                    </div>
                  </div>
                </Link>
              </MouseTilt>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ───── Latest Additions ───── */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem 5rem", perspective: 1200 }}>
        <ScrollReveal animation="fadeUp">
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "1.5rem",
          }}>
            <h2 style={{
              fontSize: "0.78rem", fontWeight: 500, color: "var(--muted-foreground)",
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}>Latest Additions</h2>
            <Link href="/resources" style={{
              fontSize: "0.78rem", fontWeight: 500, color: "var(--muted-foreground)",
              display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted-foreground)"}
            >View all <ArrowRight size={13} /></Link>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom3D" stagger={0.1} style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem",
        }}>
          {LATEST.map((item) => (
            <MouseTilt key={item.id} tiltMax={6} scale={1.015}>
              <SpotlightCard spotlightColor="rgba(91,141,239,0.06)">
                <Link href={`/resources/${item.id}`} style={{
                  display: "flex", flexDirection: "column", padding: "1.5rem",
                  height: "100%", gap: "0.4rem", transformStyle: "preserve-3d",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                      fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.06em",
                      fontWeight: 600, color: "var(--primary)", transform: "translateZ(16px)",
                    }}>{item.type}</span>
                    <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>{item.date}</span>
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 550, lineHeight: 1.4, marginTop: 2, transform: "translateZ(8px)" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", lineHeight: 1.55, flex: 1 }}>{item.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.7rem", borderTop: "1px solid var(--border)", marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{item.author}</span>
                    <ArrowRight size={13} style={{ color: "var(--muted-foreground)" }} />
                  </div>
                </Link>
              </SpotlightCard>
            </MouseTilt>
          ))}
        </ScrollReveal>
      </section>

      <AdBanner slot="homepage-mid" />

      {/* ───── AI News ───── */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem 5rem", perspective: 1200 }}>
        <ScrollReveal animation="fadeUp">
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "1.5rem",
          }}>
            <h2 style={{
              fontSize: "0.78rem", fontWeight: 500, color: "var(--muted-foreground)",
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              AI News
            </h2>
            <Link href="/news" style={{
              fontSize: "0.78rem", fontWeight: 500, color: "var(--muted-foreground)",
              display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted-foreground)"}
            >All news <ArrowRight size={13} /></Link>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="flipUp" stagger={0.06} style={{
          borderRadius: 12, border: "1px solid var(--border)",
          overflow: "hidden",
        }}>
          {NEWS_PREVIEW.map((n, i) => (
            <motion.div
              key={n.id}
              whileHover={{ x: 6, backgroundColor: "rgba(91,141,239,0.04)" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <Link href={`/news/${n.id}`} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "1rem 1.5rem",
                borderBottom: i < NEWS_PREVIEW.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{
                    fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.05em", color: "var(--primary)", minWidth: 60,
                    padding: "2px 8px", borderRadius: 3, background: "rgba(91,141,239,0.08)",
                  }}>{n.category}</span>
                  <span style={{ fontSize: "0.9rem", fontWeight: 450 }}>{n.title}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", display: "flex", alignItems: "center", gap: 3 }}>
                    <Clock size={11} /> {n.time}
                  </span>
                  <ArrowUpRight size={13} style={{ color: "var(--muted-foreground)" }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </ScrollReveal>
      </section>

      {/* ───── Community CTA ───── */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem 8rem", perspective: 1200 }}>
        <ScrollReveal animation="zoom3D">
          <MouseTilt tiltMax={4} scale={1.01} glare={false}>
            <div className="gradient-border" style={{
              padding: "4rem 3rem", borderRadius: 16,
              background: "rgba(255,255,255,0.015)",
              textAlign: "center", position: "relative", overflow: "hidden",
            }}>
              <FloatingElement
                amplitude={10} duration={6} delay={0}
                style={{ position: "absolute", top: 30, left: 40, pointerEvents: "none" }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(91,141,239,0.25)" }} />
              </FloatingElement>
              <FloatingElement
                amplitude={8} duration={8} delay={2}
                style={{ position: "absolute", bottom: 40, right: 60, pointerEvents: "none" }}
              >
                <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(91,141,239,0.1)" }} />
              </FloatingElement>

              <div style={{ position: "relative", zIndex: 1 }}>
                <GradientText
                  as="h2"
                  from="#ffffff" via="#93c5fd" to="#5b8def"
                  className="heading-serif"
                  style={{ fontSize: "2.4rem", marginBottom: "0.75rem" }}
                >
                  Want to contribute?
                </GradientText>
                <p style={{
                  color: "var(--muted-foreground)", fontSize: "0.95rem", marginBottom: "2rem",
                  maxWidth: 420, margin: "0 auto 2rem", lineHeight: 1.7,
                }}>
                  Share your notes, projects, and discoveries with the AI community.
                  Create an account and start uploading.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
                  <Link href="/register" className="btn-3d" style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "#fff", color: "#000",
                    padding: "0.7rem 1.4rem",
                    borderRadius: 8, fontWeight: 600, fontSize: "0.88rem",
                  }}>
                    Get Started <ArrowRight size={14} />
                  </Link>
                  <Link href="/resources" className="btn-3d" style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    color: "var(--muted-foreground)", padding: "0.7rem 1.4rem",
                    fontSize: "0.88rem", fontWeight: 500,
                    borderRadius: 8, border: "1px solid var(--border)",
                    background: "transparent",
                  }}>
                    Explore Resources
                  </Link>
                </div>
              </div>
            </div>
          </MouseTilt>
        </ScrollReveal>
      </section>
    </div>
  );
}
