"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ── Perspective grid plane ── */
function GridPlane() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = -Math.PI / 2.8;
      ref.current.position.y = -1.2 + Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  const lines = useMemo(() => {
    const material = new THREE.LineBasicMaterial({
      color: "#0070f3",
      transparent: true,
      opacity: 0.12,
    });
    const group: React.ReactNode[] = [];
    const spacing = 0.8;
    const halfSize = 8;

    for (let i = -halfSize; i <= halfSize; i++) {
      const pos = i * spacing;
      // Horizontal lines
      const hGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-halfSize * spacing, 0, pos),
        new THREE.Vector3(halfSize * spacing, 0, pos),
      ]);
      // Vertical lines
      const vGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(pos, 0, -halfSize * spacing),
        new THREE.Vector3(pos, 0, halfSize * spacing),
      ]);
      group.push(
        <lineSegments key={`h${i}`} geometry={hGeo} material={material} />,
        <lineSegments key={`v${i}`} geometry={vGeo} material={material} />
      );
    }
    return group;
  }, []);

  return <group ref={ref}>{lines}</group>;
}

/* ── Scrolling energy dots ── */
function EnergyDots({ count = 40 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = Math.random() * 3 - 1;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    const t = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(t + i) * 0.003;
      pos[i * 3 + 2] -= 0.008;
      if (pos[i * 3 + 2] < -6) pos[i * 3 + 2] = 6;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function FloatingGrid() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [0, 2, 5], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <GridPlane />
        <EnergyDots />
      </Canvas>
    </div>
  );
}
