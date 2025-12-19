import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function NodeGrid() {
  const nodes = [];
  for (let x = -3; x <= 3; x += 1.5) {
    for (let z = -3; z <= 3; z += 1.5) {
      nodes.push(
        <mesh key={`${x}-${z}`} position={[x * 0.35, 0, z * 0.4]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.5}
          />
        </mesh>
      );
    }
  }
  return <group>{nodes}</group>;
}

export function NetworkScene() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 to-sky-100">
      <Canvas camera={{ position: [1.8, 1.4, 2.4], fov: 42 }}>
        <color attach="background" args={['#0f172a']} />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[2, 3, 2]}
          intensity={1.6}
          color="#22d3ee"
        />
        <Float floatIntensity={0.8} rotationIntensity={0.4}>
          <NodeGrid />
        </Float>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
      </Canvas>
    </div>
  );
}


