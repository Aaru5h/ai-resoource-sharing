"use client";

import { motion } from "framer-motion";

interface BlurTextProps {
    text: string;
    delay?: number;
    className?: string;
}

export default function BlurText({
    text,
    delay = 50,
    className = "",
}: BlurTextProps) {
    const words = text.split(" ");

    return (
        <h1 className={className} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: 0 }}>
            {words.map((word, index) => {
                return (
                    <motion.span
                        key={index}
                        initial={{ filter: "blur(10px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: (index * delay) / 1000,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ display: "inline-block" }}
                    >
                        {word}{index < words.length - 1 ? "\u00A0" : ""}
                    </motion.span>
                );
            })}
        </h1>
    );
}
