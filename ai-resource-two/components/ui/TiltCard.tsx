"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tiltAmount?: number;
  glareEnabled?: boolean;
}

function useMotionValueSpring(initial: number) {
  const mv = useSpring(initial, { stiffness: 300, damping: 30 });
  return mv;
}

export default function TiltCard({
  children,
  className,
  style,
  tiltAmount = 12,
  glareEnabled = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValueSpring(0);
  const rotateY = useMotionValueSpring(0);
  const glareX = useSpring(50, { stiffness: 300, damping: 30 });
  const glareY = useSpring(50, { stiffness: 300, damping: 30 });
  const glareOpacity = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      rotateX.set((y - 0.5) * -tiltAmount);
      rotateY.set((x - 0.5) * tiltAmount);
      glareX.set(x * 100);
      glareY.set(y * 100);
    },
    [tiltAmount, rotateX, rotateY, glareX, glareY]
  );

  const handleMouseEnter = useCallback(() => {
    glareOpacity.set(1);
  }, [glareOpacity]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  }, [rotateX, rotateY, glareOpacity]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 800,
        transformStyle: "preserve-3d",
        ...style,
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {children}

        {/* Glare overlay */}
        {glareEnabled && (
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              opacity: glareOpacity,
              background: `radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(255,255,255,0.08), transparent 60%)`,
              zIndex: 10,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
