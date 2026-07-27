import { Canvas } from '@react-three/fiber';
import { ParticleGrid } from './ParticleGrid';
import { CyberGlobe } from './CyberGlobe';
import { Suspense, useState, useEffect } from 'react';
import { getPerformanceProfile } from '../utils/performance';

export function ThreeCanvas() {
  const [profile, setProfile] = useState(() => getPerformanceProfile());
  const [isTabVisible, setIsTabVisible] = useState(() => (typeof document !== 'undefined' ? !document.hidden : true));

  useEffect(() => {
    const handleResize = () => {
      setProfile(getPerformanceProfile());
    };

    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        dpr={[1, profile.dprCap]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        frameloop={isTabVisible ? 'always' : 'never'}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <ParticleGrid count={profile.particleCount} />
          {profile.enableGlobe && <CyberGlobe />}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ThreeCanvas;
