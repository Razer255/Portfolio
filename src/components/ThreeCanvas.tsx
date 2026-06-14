import { Canvas } from '@react-three/fiber';
import { ParticleGrid } from './ParticleGrid';
import { CyberGlobe } from './CyberGlobe';
import { Suspense, useState, useEffect } from 'react';

export function ThreeCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <ParticleGrid />
          {!isMobile && <CyberGlobe />}
        </Suspense>
      </Canvas>
    </div>
  );
}
export default ThreeCanvas;
