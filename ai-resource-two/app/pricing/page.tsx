"use client";

import Link from "next/link";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AmbientBackground from "@/components/ui/AmbientBackground";
import MouseTilt from "@/components/ui/MouseTilt";
import GradientText from "@/components/ui/GradientText";
import FloatingElement from "@/components/ui/FloatingElement";

const PLANS = [
    {
        name: "Free",
        price: "$0",
        desc: "For getting started",
        cta: "Sign Up Free",
        ctaStyle: { background: "transparent", color: "#fff", border: "1px solid var(--border)" } as React.CSSProperties,
        features: [
            { text: "Public notes & tutorials", included: true },
            { text: "AI news feed", included: true },
            { text: "Community discussions", included: true },
            { text: "PRO resources & downloads", included: false },
            { text: "Ad-free experience", included: false },
        ],
    },
    {
        name: "Pro",
        price: "$19",
        desc: "For serious builders",
        popular: true,
        cta: "Get Pro",
        ctaStyle: { background: "#ededed", color: "#000", border: "none" } as React.CSSProperties,
        features: [
            { text: "Everything in Free", included: true },
            { text: "PRO resources & downloads", included: true },
            { text: "Ad-free experience", included: true },
            { text: "Priority support", included: true },
            { text: "Early access to new content", included: true },
        ],
    },
];

export default function PricingPage() {
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <AmbientBackground variant="center" />

            {/* Floating decorations */}
            <FloatingElement amplitude={10} duration={7} delay={0} style={{ position: "absolute", top: "10%", right: "8%", pointerEvents: "none", zIndex: 0 }}>
                <div style={{ width: 70, height: 70, borderRadius: "50%", border: "1px solid rgba(91,141,239,0.08)" }} />
            </FloatingElement>
            <FloatingElement amplitude={6} duration={5} delay={2} style={{ position: "absolute", bottom: "15%", left: "6%", pointerEvents: "none", zIndex: 0 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(91,141,239,0.2)" }} />
            </FloatingElement>

            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "8rem 2rem 4rem", textAlign: "center", position: "relative", zIndex: 1 }}>
                <ScrollReveal animation="fadeUp">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "0.75rem" }}
                    >
                        <Sparkles size={14} style={{ color: "var(--primary)" }} />
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)" }}>Simple Pricing</span>
                    </motion.div>
                    <GradientText as="h1" from="#ffffff" via="#93c5fd" to="#5b8def" className="heading-serif" style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>
                        Pricing
                    </GradientText>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "1rem", marginBottom: "3.5rem" }}>
                        Free to explore. Upgrade for full access.
                    </p>
                </ScrollReveal>

                <ScrollReveal
                    animation="fadeUp"
                    stagger={0.15}
                    delay={0.1}
                    style={{
                        display: "grid", gridTemplateColumns: "1fr 1fr",
                        gap: "1rem", textAlign: "left",
                    }}
                >
                    {PLANS.map((plan) => (
                        <MouseTilt key={plan.name} tiltMax={6} scale={1.02}>
                            <SpotlightCard spotlightColor={plan.popular ? "rgba(91,141,239,0.1)" : "rgba(255,255,255,0.04)"}>
                                <div className={plan.popular ? "gradient-border" : ""} style={{
                                    position: "relative", borderRadius: 12,
                                    padding: "2.25rem",
                                    display: "flex", flexDirection: "column",
                                    height: "100%", transformStyle: "preserve-3d",
                                }}>
                                    {plan.popular && (
                                        <span style={{
                                            position: "absolute", top: -10, left: 24,
                                            fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase",
                                            letterSpacing: "0.08em", background: "var(--primary)", color: "#fff",
                                            padding: "4px 12px", borderRadius: 4, zIndex: 2,
                                        }}>Popular</span>
                                    )}
                                    <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.15rem", transform: "translateZ(14px)" }}>{plan.name}</h3>
                                    <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>{plan.desc}</p>
                                    <div style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "2rem", letterSpacing: "-0.03em", transform: "translateZ(10px)" }}>
                                        {plan.price}<span style={{ fontSize: "0.9rem", fontWeight: 400, color: "var(--muted-foreground)" }}>/mo</span>
                                    </div>

                                    <ul style={{ listStyle: "none", flex: 1, display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                                        {plan.features.map((f, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                                                style={{
                                                    display: "flex", alignItems: "center", gap: 8, fontSize: "0.88rem",
                                                    color: f.included ? "#ededed" : "var(--muted-foreground)",
                                                    opacity: f.included ? 1 : 0.4,
                                                }}
                                            >
                                                {f.included ? <Check size={15} style={{ color: "var(--primary)" }} /> : <X size={15} />}
                                                {f.text}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98, y: 1 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                                        <Link href="/login" className="btn-3d" style={{
                                            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                                            padding: "0.75rem 1.5rem", borderRadius: 10,
                                            fontWeight: 600, fontSize: "0.88rem",
                                            ...plan.ctaStyle,
                                        }}>{plan.cta} <ArrowRight size={15} /></Link>
                                    </motion.div>
                                </div>
                            </SpotlightCard>
                        </MouseTilt>
                    ))}
                </ScrollReveal>
            </div>
        </div>
    );
}
