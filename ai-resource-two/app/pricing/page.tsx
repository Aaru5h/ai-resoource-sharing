"use client";

import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const PLANS = [
    {
        name: "Free",
        price: "$0",
        desc: "For getting started",
        cta: "Sign Up Free",
        ctaStyle: { background: "var(--accent)", color: "#fff", border: "1px solid var(--border)" } as React.CSSProperties,
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
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "8rem 2rem 4rem", textAlign: "center" }}>
            <ScrollReveal animation="fadeUp">
                <h1 style={{ fontSize: "2.2rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>Pricing</h1>
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
                    gap: "1.25rem", textAlign: "left",
                }}
            >
                {PLANS.map((plan) => (
                    <TiltCard key={plan.name} tiltAmount={8}>
                        <div style={{
                            position: "relative", borderRadius: 16,
                            border: plan.popular ? "1px solid var(--primary)" : "1px solid var(--border)",
                            background: plan.popular ? "rgba(0,112,243,0.04)" : "var(--muted)",
                            padding: "2.25rem",
                            display: "flex", flexDirection: "column",
                            transition: "border-color 0.2s",
                            height: "100%",
                        }}>
                            {plan.popular && (
                                <span style={{
                                    position: "absolute", top: -10, left: 24,
                                    fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase",
                                    letterSpacing: "0.08em", background: "var(--primary)", color: "#fff",
                                    padding: "4px 12px", borderRadius: 4,
                                }}>Popular</span>
                            )}
                            <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.15rem" }}>{plan.name}</h3>
                            <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>{plan.desc}</p>
                            <div style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "2rem" }}>
                                {plan.price}<span style={{ fontSize: "0.9rem", fontWeight: 400, color: "var(--muted-foreground)" }}>/mo</span>
                            </div>

                            <ul style={{ listStyle: "none", flex: 1, display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                                {plan.features.map((f, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.06 }}
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

                            <MagneticButton strength={0.25}>
                                <Link href="/login" style={{
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                                    padding: "0.75rem 1.5rem", borderRadius: 10,
                                    fontWeight: 600, fontSize: "0.88rem",
                                    transition: "transform 0.15s",
                                    ...plan.ctaStyle,
                                }}>{plan.cta} <ArrowRight size={15} /></Link>
                            </MagneticButton>
                        </div>
                    </TiltCard>
                ))}
            </ScrollReveal>
        </div>
    );
}
