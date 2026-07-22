import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreatGlobe from '../three/ThreatGlobe';

export default function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ThreatGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
}
