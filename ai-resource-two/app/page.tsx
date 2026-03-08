"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Github, Layers, Cpu, Clock, Sparkles, Zap, Users, FileText, Terminal, Code2, Braces, Eye } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import AdBanner from "@/components/ui/AdBanner";
import TiltCard from "@/components/ui/TiltCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const HeroScene = dynamic(() => import("@/components/ui/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const ParticleField = dynamic(() => import("@/components/ui/ParticleField"), {
  ssr: false,
  loading: () => null,
});

const FloatingGrid = dynamic(() => import("@/components/ui/FloatingGrid"), {
  ssr: false,
  loading: () => null,
});

const GlowingOrb = dynamic(() => import("@/components/ui/GlowingOrb"), {
  ssr: false,
  loading: () => null,
});

const CATEGORIES = [
  { icon: BookOpen, label: "Notes & Tutorials", count: 42, href: "/resources?type=notes", color: "#3b82f6" },
  { icon: Github, label: "GitHub Repos", count: 28, href: "/resources?type=github", color: "#22c55e" },
  { icon: Layers, label: "Full Projects", count: 15, href: "/resources?type=projects", color: "#f59e0b" },
  { icon: Cpu, label: "AI Tools", count: 63, href: "/resources?type=tools", color: "#ef4444" },
];

const STATS = [
  { label: "Resources", value: 148, icon: FileText },
  { label: "Contributors", value: 52, icon: Users },
  { label: "Weekly Updates", value: 12, icon: Zap },
];

const LATEST = [
  { id: 1, title: "Understanding Attention Mechanisms", type: "Article", author: "Alex Chen", date: "Oct 12", desc: "Deep dive into self-attention, multi-head attention, and why transformers work.", color: "#3b82f6" },
  { id: 2, title: "Deploying LLMs on Consumer GPUs", type: "Tutorial", author: "Sarah J.", date: "Nov 05", desc: "Run Llama-3 70B on an RTX 4090 with quantization tricks.", color: "#22c55e" },
  { id: 3, title: "RAG Pipeline from Scratch", type: "Project", author: "David K.", date: "Jan 15", desc: "Build a production RAG system with Pinecone, LangChain, and OpenAI.", color: "#f59e0b" },
];

const NEWS_PREVIEW = [
  { id: 1, title: "OpenAI Announces Next Generation Reasoning Model", category: "LLM", time: "2 hours ago" },
  { id: 2, title: "Breakthrough in Efficient Transformer Architectures", category: "Research", time: "5 hours ago" },
  { id: 3, title: "Meta releases new Llama vision model", category: "Release", time: "3 days ago" },
];

const FEATURES = [
  { icon: Code2, title: "Code Snippets", desc: "Run and fork code directly in the browser", color: "#3b82f6" },
  { icon: Braces, title: "API Integrations", desc: "Connect with OpenAI, LangChain, and more", color: "#22c55e" },
  { icon: Eye, title: "Live Previews", desc: "Interactive demos of every project", color: "#f59e0b" },
];

export default function Home() {
  return (
    <div style={{ width: "100%" }}>

      {/* ───── Hero ───── */}
      <section style={{
        maxWidth: 1200, margin: "0 auto", padding: "10rem 2rem 4rem",
        position: "relative", minHeight: "90vh",
      }}>
        <HeroScene />

        {/* Gradient accent line at top */}
        <div style={{
          position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)",
          width: "60%", height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,112,243,0.3), rgba(34,197,94,0.2), transparent)",
          pointerEvents: "none",
        }} />

        {/* Ambient glow orbs */}
        <div style={{
          position: "absolute", top: -120, right: -60,
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,112,243,0.08), transparent 60%)",
          pointerEvents: "none", filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute", bottom: -100, left: -80,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.05), transparent 60%)",
          pointerEvents: "none", filter: "blur(60px)",
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 700, position: "relative", zIndex: 2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 20,
              background: "rgba(0,112,243,0.08)", border: "1px solid rgba(0,112,243,0.15)",
              marginBottom: "1.5rem",
            }}
          >
            <Sparkles size={13} style={{ color: "#3b82f6" }} />
            <span style={{
              fontSize: "0.78rem", fontWeight: 600, color: "#3b82f6",
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              Open Resource Platform
            </span>
          </motion.div>

          <h1 style={{
            fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "1.5rem",
          }}>
            <span className="gradient-text-animated" style={{
              display: "inline",
            }}>
              The best AI{"\u00A0"}resources,
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ color: "var(--muted-foreground)" }}
            >
              curated for builders.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: "1.1rem", color: "var(--muted-foreground)",
              lineHeight: 1.7, maxWidth: 520, marginBottom: "2.5rem",
            }}
          >
            Notes, projects, tools, and GitHub repos — all organized and community-driven.
            Explore what others are building in AI & ML.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
          >
            <MagneticButton strength={0.25}>
              <Link href="/resources" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #ffffff, #e0e0e0)", color: "#000",
                padding: "0.8rem 1.6rem",
                borderRadius: 10, fontWeight: 600, fontSize: "0.9rem",
                transition: "all 0.2s", boxShadow: "0 0 20px rgba(255,255,255,0.05)",
              }}>
                Browse Resources <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link href="/news" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                color: "#ededed", padding: "0.8rem 1.6rem",
                fontSize: "0.9rem", fontWeight: 500, transition: "all 0.2s",
                borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}>
                <Zap size={14} /> Latest News
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* ───── Stats bar ───── */}
      <ScrollReveal animation="fadeUp" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem 5rem" }}>
        <div className="animate-pulse-glow" style={{
          display: "flex", justifyContent: "center", gap: "3rem",
          padding: "1.5rem 2rem", borderRadius: 14,
          background: "linear-gradient(135deg, rgba(0,112,243,0.04), rgba(34,197,94,0.03))",
          border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
        }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              paddingRight: i < STATS.length - 1 ? "3rem" : 0,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "rgba(0,112,243,0.08)", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}>
                <stat.icon size={16} style={{ color: "#3b82f6" }} />
              </div>
              <div>
                <div style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>
                  <AnimatedCounter target={stat.value} suffix="+" />
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", fontWeight: 500, marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ───── Features Row with 3D Orbs ───── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem 5rem" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "1.25rem",
          }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.02em" }}>
              Platform Features
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" stagger={0.15} style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem",
        }}>
          {FEATURES.map((feat) => (
            <motion.div
              key={feat.title}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="glass-card" style={{
                padding: "2rem", textAlign: "center", position: "relative",
                overflow: "hidden",
              }}>
                {/* Background glow */}
                <div style={{
                  position: "absolute", top: -30, right: -30,
                  width: 120, height: 120, borderRadius: "50%",
                  background: `radial-gradient(circle, ${feat.color}15, transparent 70%)`,
                  pointerEvents: "none", filter: "blur(20px)",
                }} />

                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: `${feat.color}10`, border: `1px solid ${feat.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.2rem",
                }}>
                  <feat.icon size={24} style={{ color: feat.color }} />
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </ScrollReveal>
      </section>

      {/* ───── Categories with 3D grid background ───── */}
      <section style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 2rem 5rem",
        position: "relative",
      }}>
        <ScrollReveal
          animation="fadeUp"
          delay={0.1}
        >
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "1.25rem",
          }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Explore by Category</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
          }}>
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.label}
                whileHover={{ scale: 1.04, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <TiltCard tiltAmount={12}>
                  <Link href={cat.href} className="glass-card" style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    cursor: "pointer", position: "relative", overflow: "hidden",
                  }}>
                    {/* Subtle corner glow */}
                    <div style={{
                      position: "absolute", top: -20, right: -20,
                      width: 80, height: 80, borderRadius: "50%",
                      background: `radial-gradient(circle, ${cat.color}12, transparent 70%)`,
                      pointerEvents: "none",
                    }} />

                    <div style={{
                      width: 44, height: 44, borderRadius: 10,
                      background: `${cat.color}12`, display: "flex",
                      alignItems: "center", justifyContent: "center",
                      border: `1px solid ${cat.color}20`,
                      transition: "all 0.3s",
                    }}>
                      <cat.icon size={20} style={{ color: cat.color }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600 }}>{cat.label}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", display: "flex", alignItems: "center", gap: 3 }}>
                        <AnimatedCounter target={cat.count} suffix="" /> resources
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ───── Latest Additions ───── */}
      <section style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 2rem 5rem",
      }}>
        <ScrollReveal animation="fadeUp">
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "1.5rem",
          }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Latest Additions</h2>
            <Link href="/resources" style={{
              fontSize: "0.82rem", fontWeight: 500, color: "var(--muted-foreground)",
              display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted-foreground)"}
            >View all <ArrowRight size={14} /></Link>
          </div>
        </ScrollReveal>

        <ScrollReveal
          animation="fadeUp"
          stagger={0.12}
          style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem",
          }}
        >
          {LATEST.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <TiltCard tiltAmount={8}>
                <SpotlightCard spotlightColor={`${item.color}20`}>
                  <Link href={`/resources/${item.id}`} style={{
                    display: "flex", flexDirection: "column", padding: "1.5rem",
                    height: "100%", gap: "0.6rem",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{
                        fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em",
                        fontWeight: 700, color: item.color,
                        padding: "3px 8px", borderRadius: 4,
                        background: `${item.color}12`,
                      }}>{item.type}</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>{item.date}</span>
                    </div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.35, marginTop: 4 }}>{item.title}</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", lineHeight: 1.5, flex: 1 }}>{item.desc}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                      <span style={{ fontSize: "0.78rem", color: "var(--muted-foreground)" }}>{item.author}</span>
                      <ArrowRight size={14} style={{ color: "var(--muted-foreground)" }} />
                    </div>
                  </Link>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          ))}
        </ScrollReveal>
      </section>

      <AdBanner slot="homepage-mid" />

      {/* ───── AI News with FloatingGrid background ───── */}
      <section style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 2rem 5rem",
        position: "relative",
      }}>
        <ScrollReveal animation="fadeUp">
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "1.5rem",
          }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: 8 }}>
              <Zap size={18} style={{ color: "#22c55e" }} /> AI News
            </h2>
            <Link href="/news" style={{
              fontSize: "0.82rem", fontWeight: 500, color: "var(--muted-foreground)",
              display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted-foreground)"}
            >All news <ArrowRight size={14} /></Link>
          </div>
        </ScrollReveal>

        <ScrollReveal
          animation="fadeUp"
          stagger={0.08}
          style={{
            borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
            overflow: "hidden", position: "relative",
          }}
        >
          {/* Subtle 3D grid in background */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none",
          }}>
            <FloatingGrid />
          </div>

          {NEWS_PREVIEW.map((n, i) => (
            <Link key={n.id} href={`/news/${n.id}`} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "1.1rem 1.5rem",
              borderBottom: i < NEWS_PREVIEW.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              position: "relative", zIndex: 1,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,112,243,0.06)"; e.currentTarget.style.paddingLeft = "2rem"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.paddingLeft = "1.5rem"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{
                  fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.06em", color: "#3b82f6", minWidth: 70,
                  padding: "2px 6px", borderRadius: 3, background: "rgba(59,130,246,0.06)",
                  textAlign: "center",
                }}>{n.category}</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{n.title}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", display: "flex", alignItems: "center", gap: 3 }}>
                  <Clock size={11} /> {n.time}
                </span>
                <ArrowUpRight size={14} style={{ color: "var(--muted-foreground)" }} />
              </div>
            </Link>
          ))}
        </ScrollReveal>
      </section>

      {/* ───── Community CTA with 3D orbs ───── */}
      <section style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 2rem 8rem",
      }}>
        <ScrollReveal animation="scaleIn">
          <div style={{
            padding: "4rem 3rem", borderRadius: 18,
            background: "linear-gradient(135deg, rgba(0,112,243,0.06), rgba(34,197,94,0.04), rgba(0,0,0,0.3))",
            border: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <ParticleField />

            {/* 3D Orbs floating in background */}
            <div style={{
              position: "absolute", top: -20, left: 30,
              opacity: 0.5, pointerEvents: "none",
            }}>
              <GlowingOrb color="#0070f3" size={160} />
            </div>
            <div style={{
              position: "absolute", bottom: -30, right: 40,
              opacity: 0.4, pointerEvents: "none",
            }}>
              <GlowingOrb color="#22c55e" size={140} />
            </div>

            {/* Gradient accent */}
            <div style={{
              position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
              width: "50%", height: 1,
              background: "linear-gradient(90deg, transparent, rgba(0,112,243,0.4), transparent)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                marginBottom: "1rem", padding: "5px 14px", borderRadius: 20,
                background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.15)",
              }}>
                <Terminal size={13} style={{ color: "#22c55e" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#22c55e", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Join the Community
                </span>
              </div>

              <h2 style={{
                fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.6rem",
              }}>
                Want to contribute?
              </h2>
              <p style={{
                color: "var(--muted-foreground)", fontSize: "0.92rem", marginBottom: "2rem",
                maxWidth: 440, margin: "0 auto 2rem", lineHeight: 1.6,
              }}>
                Share your notes, projects, and discoveries with the AI community.
                Create an account and start uploading.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                <MagneticButton strength={0.3}>
                  <Link href="/register" style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "linear-gradient(135deg, #ffffff, #e0e0e0)", color: "#000",
                    padding: "0.75rem 1.6rem",
                    borderRadius: 10, fontWeight: 600, fontSize: "0.88rem",
                    boxShadow: "0 0 20px rgba(255,255,255,0.04)",
                  }}>
                    Get Started <ArrowRight size={15} />
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Link href="/resources" style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    color: "#ededed", padding: "0.75rem 1.6rem",
                    fontSize: "0.88rem", fontWeight: 500,
                    borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                  }}>
                    Explore Resources
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
