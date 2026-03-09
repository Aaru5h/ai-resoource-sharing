"use client";

import { motion } from "framer-motion";
import Starfield3D from "./Starfield3D";

/**
 * Lightweight CSS-based ambient background with floating gradient orbs.
 * Much more performant than Three.js canvases — safe to use on every page.
 */
export default function AmbientBackground({
    variant = "default",
}: {
    variant?: "default" | "center" | "top-right" | "split";
}) {
    const orbs = {
        default: [
            { x: "-10%", y: "10%", size: 600, color: "rgba(59,130,246,0.06)", delay: 0, dur: 18 },
            { x: "70%", y: "60%", size: 500, color: "rgba(91,141,239,0.04)", delay: 3, dur: 22 },
            { x: "40%", y: "80%", size: 350, color: "rgba(99,102,241,0.03)", delay: 6, dur: 16 },
        ],
        center: [
            { x: "30%", y: "15%", size: 700, color: "rgba(59,130,246,0.07)", delay: 0, dur: 20 },
            { x: "60%", y: "50%", size: 400, color: "rgba(91,141,239,0.05)", delay: 2, dur: 18 },
        ],
        "top-right": [
            { x: "65%", y: "-5%", size: 600, color: "rgba(59,130,246,0.06)", delay: 0, dur: 20 },
            { x: "20%", y: "60%", size: 400, color: "rgba(91,141,239,0.035)", delay: 4, dur: 24 },
        ],
        split: [
            { x: "-5%", y: "20%", size: 500, color: "rgba(59,130,246,0.06)", delay: 0, dur: 18 },
            { x: "80%", y: "10%", size: 500, color: "rgba(91,141,239,0.05)", delay: 2, dur: 22 },
            { x: "50%", y: "70%", size: 350, color: "rgba(99,102,241,0.03)", delay: 5, dur: 16 },
        ],
    };

    return (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
            <Starfield3D />
            {orbs[variant].map((orb, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0, 1, 1, 0.8, 1],
                        scale: [0.8, 1, 1.08, 0.95, 1],
                        x: [0, 15, -10, 8, 0],
                        y: [0, -12, 8, -5, 0],
                    }}
                    transition={{
                        duration: orb.dur,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        position: "absolute",
                        left: orb.x,
                        top: orb.y,
                        width: orb.size,
                        height: orb.size,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${orb.color}, transparent 65%)`,
                        filter: "blur(40px)",
                    }}
                />
            ))}
        </div>
    );
}
