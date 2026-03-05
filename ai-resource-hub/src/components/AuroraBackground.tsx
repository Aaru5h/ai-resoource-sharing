"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AuroraBackground({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={className}
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
            }}
        >
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
                <div
                    style={{
                        position: "absolute",
                        inset: "-10px",
                        opacity: 0.2,
                        backgroundImage: `
              radial-gradient(ellipse at 100% 0%, rgba(0, 112, 243, 0.4) 0%, transparent 40%),
              radial-gradient(ellipse at 0% 100%, rgba(0, 112, 243, 0.2) 0%, transparent 50%)
            `,
                        filter: "blur(40px)",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0.5, scale: 0.9 }}
                        animate={{
                            opacity: [0.5, 0.8, 0.5],
                            scale: [0.9, 1.1, 0.9],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            background: `repeating-linear-gradient(100deg, transparent, transparent 100px, rgba(255, 255, 255, 0.05) 100px, rgba(255, 255, 255, 0.05) 200px)`,
                        }}
                    />
                </div>
            </div>
            <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
                {children}
            </div>
        </div>
    );
}
