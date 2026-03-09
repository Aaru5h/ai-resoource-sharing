"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function RotatingGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 10]} position={[0, 0, 0]}>
      <meshBasicMaterial
        color="#60a5fa"
        wireframe={true}
        transparent={true}
        opacity={0.3}
      />
    </Icosahedron>
  );
}

export default function WireframeGlobe() {
  return (
    <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <RotatingGlobe />
      </Canvas>
    </div>
  );
}
