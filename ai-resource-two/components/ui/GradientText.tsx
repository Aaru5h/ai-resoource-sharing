"use client";

import React from "react";
import { motion } from "framer-motion";

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    from?: string;
    via?: string;
    to?: string;
    animate?: boolean;    // enable shimmer animation
    as?: "h1" | "h2" | "h3" | "span" | "p";
}

/**
 * Animated gradient text using CSS background-clip.
 * Shimmer animation moves the gradient position for a living effect.
 */
export default function GradientText({
    children,
    className,
    style,
    from = "#fff",
    via = "#5b8def",
    to = "#93c5fd",
    animate = true,
    as: Tag = "span",
}: GradientTextProps) {
    const MotionTag = motion.create(Tag);

    return (
        <MotionTag
            className={className}
            initial={animate ? { backgroundPosition: "0% 50%" } : undefined}
            animate={animate ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : undefined}
            transition={animate ? { duration: 6, repeat: Infinity, ease: "linear" } : undefined}
            style={{
                background: `linear-gradient(90deg, ${from}, ${via}, ${to}, ${via}, ${from})`,
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                ...style,
            }}
        >
            {children}
        </MotionTag>
    );
}
