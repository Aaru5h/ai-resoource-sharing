"use client";

import React, { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MouseTiltProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    tiltMax?: number;        // max degrees of tilt
    perspective?: number;    // CSS perspective in px
    scale?: number;          // scale on hover (1.0 = none)
    glare?: boolean;         // show a glare highlight
}

/**
 * Lightweight 3D tilt wrapper.
 * Tracks mouse position over the element and applies CSS perspective
 * rotateX/Y transforms via framer-motion springs for smooth 60fps.
 */
export default function MouseTilt({
    children,
    className,
    style,
    tiltMax = 8,
    perspective = 800,
    scale = 1.02,
    glare = true,
}: MouseTiltProps) {
    const ref = useRef<HTMLDivElement>(null);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const scaleVal = useMotionValue(1);
    const glareX = useMotionValue(50);
    const glareY = useMotionValue(50);
    const glareOpacity = useMotionValue(0);

    const springConfig = { stiffness: 260, damping: 24, mass: 0.8 };
    const sRotateX = useSpring(rotateX, springConfig);
    const sRotateY = useSpring(rotateY, springConfig);
    const sScale = useSpring(scaleVal, { stiffness: 300, damping: 30 });
    const sGlareOpacity = useSpring(glareOpacity, { stiffness: 300, damping: 30 });

    const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;       // 0..1
        const y = (e.clientY - rect.top) / rect.height;        // 0..1
        rotateX.set((y - 0.5) * -tiltMax);
        rotateY.set((x - 0.5) * tiltMax);
        glareX.set(x * 100);
        glareY.set(y * 100);
    }, [tiltMax, rotateX, rotateY, glareX, glareY]);

    const handleEnter = useCallback(() => {
        scaleVal.set(scale);
        glareOpacity.set(1);
    }, [scale, scaleVal, glareOpacity]);

    const handleLeave = useCallback(() => {
        rotateX.set(0);
        rotateY.set(0);
        scaleVal.set(1);
        glareOpacity.set(0);
    }, [rotateX, rotateY, scaleVal, glareOpacity]);

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={className}
            style={{ perspective, ...style }}
        >
            <motion.div
                style={{
                    rotateX: sRotateX,
                    rotateY: sRotateY,
                    scale: sScale,
                    transformStyle: "preserve-3d",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                }}
            >
                {children}

                {/* Glare overlay */}
                {glare && (
                    <motion.div
                        style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "inherit",
                            pointerEvents: "none",
                            opacity: sGlareOpacity,
                            background: "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.06), transparent 55%)",
                            zIndex: 10,
                        }}
                    />
                )}
            </motion.div>
        </div>
    );
}
