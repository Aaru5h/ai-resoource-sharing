"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const codeLines = [
  { text: "import torch", color: "#c678dd" },
  { text: "import torch.nn as nn", color: "#c678dd" },
  { text: "", color: "inherit" },
  { text: "class AI_Model(nn.Module):", color: "#e5c07b" },
  { text: "    def __init__(self):", color: "#61afef" },
  { text: "        super().__init__()", color: "inherit" },
  { text: "        self.net = nn.Sequential(", color: "#e06c75" },
  { text: "            nn.Linear(256, 512),", color: "inherit" },
  { text: "            nn.GELU(),", color: "inherit" },
  { text: "            nn.Linear(512, 128)", color: "inherit" },
  { text: "        )", color: "inherit" },
];

export default function FloatingCodeCard() {
  return (
    <motion.div
      animate={{ 
        y: [0, -20, 0], 
        rotateX: [10, 5, 10], 
        rotateY: [-15, -10, -15],
        rotateZ: [2, 0, 2]
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      style={{
        width: 320,
        borderRadius: 16,
        background: "rgba(10, 15, 30, 0.65)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7), 0 0 80px rgba(91,141,239,0.15) inset, 0 0 0 1px rgba(91,141,239,0.2)",
        overflow: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.3)" }}>
         <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 10px #ef4444" }} />
         <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#eab308", boxShadow: "0 0 10px #eab308" }} />
         <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px #22c55e" }} />
         <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, color: "var(--muted-foreground)", fontSize: "0.75rem", fontWeight: 500, fontFamily: "var(--font-mono, monospace)" }}>
           <Terminal size={13} /> model.py
         </div>
      </div>
      <div style={{ padding: "20px", fontFamily: "var(--font-mono, monospace)", fontSize: "0.8rem", lineHeight: 1.7, color: "#e2e8f0" }}>
        {codeLines.map((line, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
             style={{ color: line.color, whiteSpace: "pre" }}
           >
             {line.text}
           </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.div
           animate={{ opacity: [1, 0] }}
           transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
           style={{ display: "inline-block", width: 8, height: 15, background: "#60a5fa", marginTop: 4, verticalAlign: "middle" }}
        />
      </div>
    </motion.div>
  );
}
