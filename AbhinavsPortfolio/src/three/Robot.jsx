import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Robot = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/robot/scene.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || animations.length === 0) return;

    const action = actions[animations[0].name];
    if (!action) return;

    action.reset();
    action.fadeIn(0.5);
    action.play();

    return () => {
      action.fadeOut(0.3);
      action.stop();
    };
  }, [actions, animations]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={0.8}
      position={[0, 0, 0]}
      rotation={[0, Math.PI * 0.2, 0]}
    />
  );
};

useGLTF.preload("/models/robot/scene.gltf");

export default Robot;
