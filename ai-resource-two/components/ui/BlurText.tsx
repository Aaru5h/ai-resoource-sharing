"use client";

import { motion } from "framer-motion";

interface BlurTextProps {
    text: string;
    delay?: number;
    className?: string;
    as?: "h1" | "h2" | "h3" | "p";
}

export default function BlurText({
    text,
    delay = 50,
    className = "",
    as: Tag = "h1",
}: BlurTextProps) {
    const words = text.split(" ");

    return (
        <Tag className={className} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: 0 }}>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ filter: "blur(12px)", opacity: 0, y: 8 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: (index * delay) / 1000,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ display: "inline-block" }}
                >
                    {word}{index < words.length - 1 ? "\u00A0" : ""}
                </motion.span>
            ))}
        </Tag>
    );
}
