import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleGridProps {
  count?: number;
}

export function ParticleGrid({ count = 750 }: ParticleGridProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random points in space
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Position points in a spherical/cylindrical grid-like pattern
      const theta = Math.random() * Math.PI * 2;
      const radius = 15 + Math.random() * 30;
      const y = (Math.random() - 0.5) * 60;

      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;

      // Color coding (cyan to purple gradients)
      const mixRatio = Math.random();
      colors[i * 3] = mixRatio * 0.74 + 0.1; // R
      colors[i * 3 + 1] = (1 - mixRatio) * 0.94 + 0.05; // G
      colors[i * 3 + 2] = 1.0; // B
    }

    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    const targetX = state.pointer.x * 0.15;
    const targetY = state.pointer.y * 0.15;

    pointsRef.current.rotation.y = time * 0.03 + targetX;
    pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.08 + targetY;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry key={count}>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
