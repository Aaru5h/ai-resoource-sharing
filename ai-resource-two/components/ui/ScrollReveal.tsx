"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type AnimationType = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn" | "fadeDown" | "flipUp" | "flipDown" | "zoom3D";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
  threshold?: number;
}

const animations: Record<AnimationType, { hidden: any; visible: any }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  flipUp: {
    hidden: { opacity: 0, rotateX: -60, y: 50, z: -100 },
    visible: { opacity: 1, rotateX: 0, y: 0, z: 0 },
  },
  flipDown: {
    hidden: { opacity: 0, rotateX: 60, y: -50, z: -100 },
    visible: { opacity: 1, rotateX: 0, y: 0, z: 0 },
  },
  zoom3D: {
    hidden: { opacity: 0, scale: 0.8, rotateY: 30, z: -200 },
    visible: { opacity: 1, scale: 1, rotateY: 0, z: 0 },
  },
};

export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  stagger = 0,
  className,
  style,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: "-100px" as any,
  });

  const anim = animations[animation];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: anim.hidden,
    visible: {
      ...anim.visible,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // If stagger is used, wrap children and pass motion to each
  if (stagger > 0 && React.Children.count(children) > 1) {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
        style={style}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={itemVariants}>{child}</motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={anim.hidden}
      animate={isInView ? anim.visible : anim.hidden}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
