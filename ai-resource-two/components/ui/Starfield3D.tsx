"use client";

import React, { useEffect, useRef } from 'react';

export default function Starfield3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; size: number }[] = [];
    const numStars = 150;
    const speed = 0.05;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * 2000 - 1000,
          y: Math.random() * 2000 - 1000,
          z: Math.random() * 2000,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.forEach((star) => {
        star.z -= speed * 15;
        if (star.z <= 0) {
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 2000 - 1000;
          star.z = 2000;
        }

        const x = (star.x / star.z) * 1000 + centerX;
        const y = (star.y / star.z) * 1000 + centerY;
        const size = (star.size / star.z) * 1000;

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          const alpha = 1 - star.z / 2000;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          // Light blue / white stars
          ctx.fillStyle = `rgba(147, 197, 253, ${alpha * 0.8})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    initStars();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
}
