"use client";

import { motion } from "framer-motion";
import { Brain, Star, Clock } from "lucide-react";

export default function FloatingResourceCard() {
  return (
    <motion.div
      animate={{ 
        y: [0, 20, 0], 
        rotateX: [10, 15, 10], 
        rotateY: [15, 20, 15],
        rotateZ: [-2, 0, -2]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      style={{
        width: 260,
        borderRadius: 16,
        background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(10,15,30,0.6) 100%)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7), 0 0 30px rgba(99,102,241,0.15) inset, 0 0 0 1px rgba(99,102,241,0.2)",
        padding: "1.5rem",
        transformStyle: "preserve-3d",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
         <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(99,102,241,0.2)" }}>
           <Brain size={20} style={{ color: "#818cf8" }} />
         </div>
         <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.05)", padding: "4px 8px", borderRadius: 12, alignItems: "center", fontSize: "0.7rem", fontWeight: 600 }}>
            <Star size={10} style={{ color: "#fbbf24", fill: "#fbbf24" }} /> 4.9
         </div>
      </div>
      
      <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff", marginBottom: "0.5rem" }}>Deep Learning Mastery</h3>
      <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", lineHeight: 1.5, marginBottom: "1rem" }}>
        Comprehensive guide to building neural networks from scratch.
      </p>
      
      <div style={{ display: "flex", gap: "1rem", fontSize: "0.7rem", color: "var(--muted-foreground)", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
         <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> 2h ago</span>
         <span style={{ color: "#818cf8", fontWeight: 500 }}>by @ai_builder</span>
      </div>
    </motion.div>
  );
}
