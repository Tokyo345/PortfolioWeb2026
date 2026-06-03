// ============================================
// HeroScene — Dekoratif 3D wireframe menggunakan React Three Fiber
// Elemen visual murni, tanpa interaksi pengguna
// ============================================

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

// Warna copper/accent sesuai design token
const COPPER_COLOR = '#C17F4E';

/**
 * WireframeShape — Objek wireframe Icosahedron yang berotasi perlahan.
 * Menggunakan Float dari drei untuk efek melayang yang lembut.
 */
function WireframeShape() {
  const meshRef = useRef();

  // Material wireframe di-memo agar tidak dibuat ulang setiap render
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: COPPER_COLOR,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      }),
    []
  );

  // Rotasi otomatis — pelan & halus
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.08;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <Float
      speed={0.3}        // Kecepatan animasi melayang
      rotationIntensity={0.2}
      floatIntensity={0.4}
    >
      <mesh ref={meshRef} material={material}>
        <icosahedronGeometry args={[2.2, 1]} />
      </mesh>
    </Float>
  );
}

/**
 * HeroScene — Canvas wrapper untuk 3D scene dekoratif.
 * Tidak ada OrbitControls, murni visual background.
 */
export default function HeroScene() {
  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 1.5]}          // Batasi DPR untuk performa
        gl={{ antialias: true, alpha: true }}
      >
        {/* Pencahayaan ambient — lembut */}
        <ambientLight intensity={0.6} />

        {/* Directional light — memberikan depth */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.4}
          color="#FAFAF8"
        />

        <WireframeShape />
      </Canvas>
    </Suspense>
  );
}
