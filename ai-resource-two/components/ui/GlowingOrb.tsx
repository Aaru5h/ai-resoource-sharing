"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Orb({ color = "#0070f3", speed = 0.6 }: { color?: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(t) * 0.15);
      meshRef.current.rotation.z = t * 0.2;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.6 + Math.sin(t * 0.8) * 0.3);
    }
  });

  return (
    <group>
      {/* Core orb */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Glow shell */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.7, 24, 24]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
      {/* Wireframe ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[0.9, 0.01, 16, 64]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.3}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

export default function GlowingOrb({
  color = "#0070f3",
  size = 200,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[2, 2, 2]} intensity={0.6} color={color} />
        <Orb color={color} />
      </Canvas>
    </div>
  );
}
