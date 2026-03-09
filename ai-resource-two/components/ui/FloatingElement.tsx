"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    amplitude?: number;   // pixels of vertical float
    duration?: number;    // seconds for one full cycle
    delay?: number;       // start delay in seconds
    rotate?: number;      // subtle rotation in degrees
}

/**
 * CSS-only floating animation wrapper.
 * Makes any child bob gently up and down, with optional rotation wobble.
 */
export default function FloatingElement({
    children,
    className,
    style,
    amplitude = 8,
    duration = 5,
    delay = 0,
    rotate = 3,
}: FloatingElementProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -amplitude, 0, amplitude * 0.4, 0],
                rotate: [0, rotate, 0, -rotate * 0.5, 0],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{
                willChange: "transform",
                ...style,
            }}
        >
            {children}
        </motion.div>
    );
}
