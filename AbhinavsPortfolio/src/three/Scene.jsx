import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Robot from "./Robot";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 6], fov: 40 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} castShadow />

      {/* Robot */}
      <Robot />

      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
};

export default Scene;
