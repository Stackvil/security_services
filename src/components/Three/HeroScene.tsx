import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';

function SecurityShield() {
  return (
    <Float floatIntensity={1.4} rotationIntensity={0.6}>
      <group>
        <mesh castShadow position={[0, 0, 0]}>
          <torusGeometry args={[1.1, 0.24, 32, 100]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.9}
            roughness={0.25}
            emissive="#ea580c"
            emissiveIntensity={0.35}
          />
        </mesh>

        <mesh castShadow position={[0, 0, 0.1]}>
          <sphereGeometry args={[0.9, 64, 64]} />
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.2}
            roughness={0.6}
          />
        </mesh>

        <mesh castShadow position={[0, -0.1, 0.2]}>
          <coneGeometry args={[0.9, 1.6, 4]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.6}
            roughness={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
}

function SurveillanceArray() {
  return (
    <group position={[-2.2, -0.8, -0.4]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[i * 1.2, 0.3 * (i % 2), 0]}>
          <boxGeometry args={[0.4, 0.25, 0.7]} />
          <meshStandardMaterial color="#38bdf8" metalness={0.5} roughness={0.3} />
        </mesh>
      ))}
      <mesh position={[0.6, -0.4, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1.6, 16]} />
        <meshStandardMaterial color="#64748b" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
}

function PatrolBeacon() {
  return (
    <group position={[2.4, -0.6, 0.2]}>
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 1.4, 32]} />
        <meshStandardMaterial color="#1e293b" metalness={0.4} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={1.3}
        />
      </mesh>
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
        <meshStandardMaterial color="#020617" />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="h-[420px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-500 via-brand-400 to-sky-300 shadow-soft">
      <Canvas
        camera={{ position: [3.3, 2.4, 3.5], fov: 40 }}
        shadows
        className="h-full w-full"
      >
        <color attach="background" args={['#0f172a']} />
        <ambientLight intensity={0.7} />
        <spotLight
          position={[4, 7, 3]}
          angle={0.7}
          penumbra={0.4}
          intensity={3}
          castShadow
        />
        <spotLight
          position={[-6, 4, -4]}
          angle={0.6}
          intensity={2.3}
          color="#38bdf8"
        />

        <Suspense fallback={null}>
          <SecurityShield />
          <SurveillanceArray />
          <PatrolBeacon />
          <Environment preset="city" />
        </Suspense>

        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.1, 0]}
        >
          <circleGeometry args={[5, 64]} />
          <shadowMaterial opacity={0.25} />
        </mesh>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          enablePan={false}
          minPolarAngle={0.9}
          maxPolarAngle={1.4}
        />
      </Canvas>
    </div>
  );
}


