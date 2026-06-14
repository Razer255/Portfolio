import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function CyberGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const outerSphereRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  // Generate coordinate locations on the globe for node indicators
  const nodes = useMemo(() => {
    const tempNodes = [];
    const count = 12;
    const radius = 6;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      tempNodes.push(new THREE.Vector3(x, y, z));
    }
    return tempNodes;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      // Floating/bobbing effect
      groupRef.current.position.y = Math.sin(time * 0.5) * 1.5;
    }
    
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y = time * 0.08;
      outerSphereRef.current.rotation.x = time * 0.03;
    }

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y = -time * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3;
      ringRef.current.rotation.z = -time * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[10, 0, -8]}>
      {/* Outer Wireframe Globe */}
      <mesh ref={outerSphereRef}>
        <icosahedronGeometry args={[6, 2]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer Glow Node Points */}
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshBasicMaterial
            color={idx % 2 === 0 ? "#39ff14" : "#bd00ff"}
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}

      {/* Inner Core */}
      <mesh ref={innerSphereRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial
          color="#bd00ff"
          wireframe
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbital Ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[7.5, 7.7, 64]} />
        <meshBasicMaterial
          color="#00f0ff"
          side={THREE.DoubleSide}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Subtle point light inside the globe */}
      <pointLight color="#00f0ff" intensity={5} distance={15} />
    </group>
  );
}
