"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ── Floating wireframe icosahedron ── */
function NeuralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.08;
      meshRef.current.rotation.y = t * 0.12;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.08;
      wireRef.current.rotation.y = t * 0.12;
    }
  });

  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.8, 1), []);

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <group>
        <mesh ref={meshRef} geometry={geo}>
          <meshStandardMaterial
            color="#0070f3"
            transparent
            opacity={0.06}
            side={THREE.DoubleSide}
          />
        </mesh>
        <lineSegments ref={wireRef} geometry={new THREE.WireframeGeometry(geo)}>
          <lineBasicMaterial color="#0070f3" transparent opacity={0.35} />
        </lineSegments>
      </group>
    </Float>
  );
}

/* ── Animated torus ring ── */
function EnergyRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.2) * 0.3;
      ref.current.rotation.z = t * 0.15;
      ref.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.08);
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.8, 0.008, 16, 100]} />
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.25}
        emissive="#3b82f6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

/* ── Second ring at different angle ── */
function EnergyRing2() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 3 + Math.cos(t * 0.15) * 0.2;
      ref.current.rotation.y = t * 0.1;
      ref.current.scale.setScalar(1 + Math.cos(t * 0.4) * 0.06);
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.2, 0.005, 16, 100]} />
      <meshStandardMaterial
        color="#22c55e"
        transparent
        opacity={0.15}
        emissive="#22c55e"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

/* ── Orbiting particles ── */
function OrbitingParticles({ count = 200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      sz[i] = 0.5 + Math.random() * 2;
    }
    return [pos, sz];
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.04;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.15;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#0070f3"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ── Shooting star / energy beams ── */
function EnergyBeams({ count = 5 }: { count?: number }) {
  const ref = useRef<THREE.Group>(null);

  const beams = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const r = 3;
      return {
        start: new THREE.Vector3(0, 0, 0),
        end: new THREE.Vector3(
          Math.cos(angle) * r,
          (Math.random() - 0.5) * r,
          Math.sin(angle) * r
        ),
      };
    });
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {beams.map((beam, i) => {
        const geo = new THREE.BufferGeometry().setFromPoints([beam.start, beam.end]);
        return (
          <lineSegments key={i} geometry={geo}>
            <lineBasicMaterial color="#0070f3" transparent opacity={0.08} />
          </lineSegments>
        );
      })}
    </group>
  );
}

/* ── Mouse-reactive camera ── */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.6 - camera.position.x) * 0.025;
    camera.position.y += (mouse.current.y * 0.4 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
  });

  if (typeof window !== "undefined") {
    if (!(window as any).__heroMouseSet) {
      window.addEventListener("mousemove", (e) => {
        mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      });
      (window as any).__heroMouseSet = true;
    }
  }

  return null;
}

/* ── Main Scene ── */
export default function HeroScene() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "auto" }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#0070f3" />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#22c55e" />
        <pointLight position={[0, 3, -3]} intensity={0.2} color="#3b82f6" />

        <NeuralCore />
        <EnergyRing />
        <EnergyRing2 />
        <OrbitingParticles />
        <EnergyBeams />
        <CameraRig />
      </Canvas>
    </div>
  );
}
