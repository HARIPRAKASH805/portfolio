import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface NodeConfig {
  radius: number;
  speed: number;
  phase: number;
  tilt: number;
  color: string;
  alert: boolean;
}

const NODE_COUNT = 16;

function makeNodes(): NodeConfig[] {
  const nodes: NodeConfig[] = [];

  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push({
      radius: 2.6 + Math.random() * 1.1,
      speed: 0.15 + Math.random() * 0.25,
      phase: Math.random() * Math.PI * 2,
      tilt: (Math.random() - 0.5) * Math.PI * 0.9,
      color: i % 5 === 0 ? '#f97316' : '#22d3ee',
      alert: i % 5 === 0,
    });
  }

  return nodes;
}

function OrbitNode({ config }: { config: NodeConfig }) {
  const ref = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * config.speed + config.phase;

    const x = Math.cos(t) * config.radius;
    const z = Math.sin(t) * config.radius;
    const y = Math.sin(t * 0.6) * config.radius * Math.sin(config.tilt);

    if (ref.current) {
      ref.current.position.set(x, y, z);
    }

    if (materialRef.current && config.alert) {
      const pulse =
        0.5 + Math.sin(clock.getElapsedTime() * 2.2 + config.phase) * 0.5;

      materialRef.current.emissiveIntensity = 0.6 + pulse * 1.4;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[config.alert ? 0.055 : 0.035, 12, 12]} />

      <meshStandardMaterial
        ref={materialRef}
        color={config.color}
        emissive={config.color}
        emissiveIntensity={0.8}
        toneMapped={false}
      />
    </mesh>
  );
}

function CoreGlobe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.09;
      groupRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Wireframe */}
      <mesh>
        <icosahedronGeometry args={[1.55, 1]} />

        <meshStandardMaterial
          color="#0f2a33"
          emissive="#22d3ee"
          emissiveIntensity={0.15}
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Inner Core */}
      <mesh>
        <icosahedronGeometry args={[1.05, 0]} />

        <meshStandardMaterial
          color="#0c0c0c"
          emissive="#22d3ee"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* HP */}
      <Text
        position={[0, 0, 1.12]}
        fontSize={0.48}
        color="#22d3ee"
        anchorX="center"
        anchorY="middle"
      >
        HP

        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={4}
          toneMapped={false}
        />
      </Text>
    </group>
  );
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const rigRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const target = useRef({ x: 0, y: 0 });

  useMemo(() => {
    const handlePointerMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });

    return () =>
      window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useFrame(() => {
    if (rigRef.current) {
      rigRef.current.rotation.y = THREE.MathUtils.lerp(
        rigRef.current.rotation.y,
        target.current.x * 0.25,
        0.04
      );

      rigRef.current.rotation.x = THREE.MathUtils.lerp(
        rigRef.current.rotation.x,
        -target.current.y * 0.15,
        0.04
      );
    }
  });

  return (
    <group ref={rigRef} scale={Math.min(viewport.width / 8, 1.15)}>
      {children}
    </group>
  );
}

export default function ThreatGlobe() {
  const nodes = useMemo(() => makeNodes(), []);

  return (
    <>
      <ambientLight intensity={0.5} />

      <pointLight
        position={[4, 4, 4]}
        intensity={40}
        color="#22d3ee"
      />

      <pointLight
        position={[-4, -3, -2]}
        intensity={20}
        color="#7c3aed"
      />

      <fog attach="fog" args={['#0c0c0c', 6, 13]} />

      <ParallaxRig>
        <CoreGlobe />

        {nodes.map((node, index) => (
          <OrbitNode
            key={index}
            config={node}
          />
        ))}
      </ParallaxRig>
    </>
  );
}
