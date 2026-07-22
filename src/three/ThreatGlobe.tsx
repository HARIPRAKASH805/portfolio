// ThreatGlobe.tsx
// NOTE: Install first:
// npm install @react-three/drei

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sparkles, Text } from "@react-three/drei";
import * as THREE from "three";

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
  return Array.from({ length: NODE_COUNT }, (_, i) => ({
    radius: 2.6 + Math.random() * 1.1,
    speed: 0.15 + Math.random() * 0.25,
    phase: Math.random() * Math.PI * 2,
    tilt: (Math.random() - 0.5) * Math.PI * 0.9,
    color: i % 5 === 0 ? "#f97316" : "#22d3ee",
    alert: i % 5 === 0,
  }));
}

function OrbitNode({ config }: { config: NodeConfig }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * config.speed + config.phase;
    ref.current?.position.set(
      Math.cos(t) * config.radius,
      Math.sin(t * 0.6) * config.radius * Math.sin(config.tilt),
      Math.sin(t) * config.radius
    );
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[config.alert ? 0.055 : 0.035, 12, 12]} />
      <meshStandardMaterial
        color={config.color}
        emissive={config.color}
        emissiveIntensity={1.5}
        toneMapped={false}
      />
    </mesh>
  );
}

function CoreGlobe() {
  const group = useRef<THREE.Group>(null);
  const mat = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }, delta) => {
    group.current?.rotateY(delta * 0.1);
    group.current?.rotateX(delta * 0.02);

    if (mat.current) {
      const t = clock.getElapsedTime();
      mat.current.color.setHSL((t * 0.15) % 1, 1, 0.6);
      mat.current.emissive.setHSL((t * 0.15) % 1, 1, 0.5);
      mat.current.emissiveIntensity = 4 + Math.sin(t * 5) * 2;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshStandardMaterial
          wireframe
          transparent
          opacity={0.5}
          color="#0f2a33"
          emissive="#22d3ee"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial
          color="#0b1115"
          emissive="#22d3ee"
          emissiveIntensity={0.1}
        />
      </mesh>

      <Text
        position={[0,0,1.12]}
        fontSize={0.55}
        anchorX="center"
        anchorY="middle">
        HP
        <meshStandardMaterial
          ref={mat}
          toneMapped={false}
        />
      </Text>

      <Sparkles count={220} scale={[5,5,5]} size={4} speed={1.5}/>
      <Sparkles count={120} scale={[3,3,3]} size={2} speed={3}/>
    </group>
  );
}

function ParallaxRig({children}:{children:React.ReactNode}) {
  const rig = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const target = useRef({x:0,y:0});

  useMemo(()=>{
    const move=(e:PointerEvent)=>{
      target.current.x=(e.clientX/window.innerWidth-0.5)*2;
      target.current.y=(e.clientY/window.innerHeight-0.5)*2;
    };
    window.addEventListener("pointermove",move);
    return ()=>window.removeEventListener("pointermove",move);
  },[]);

  useFrame(()=>{
    if(!rig.current) return;
    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y,target.current.x*0.25,0.05);
    rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x,-target.current.y*0.15,0.05);
  });

  return <group ref={rig} scale={Math.min(viewport.width/8,1.15)}>{children}</group>;
}

export default function ThreatGlobe() {
  const nodes = useMemo(()=>makeNodes(),[]);
  return (
    <>
      <ambientLight intensity={0.6}/>
      <pointLight position={[4,4,4]} intensity={40} color="#22d3ee"/>
      <pointLight position={[-4,-3,-2]} intensity={20} color="#7c3aed"/>
      <fog attach="fog" args={["#0c0c0c",6,13]}/>
      <ParallaxRig>
        <CoreGlobe/>
        {nodes.map((n,i)=><OrbitNode key={i} config={n}/>)}
      </ParallaxRig>
    </>
  );
}
