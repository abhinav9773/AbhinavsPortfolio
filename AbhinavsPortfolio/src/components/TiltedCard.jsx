import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

const spring = {
  damping: 25,
  stiffness: 120,
  mass: 1.5,
};

const TiltedCard = ({ children, rotateAmplitude = 10, scaleOnHover = 1 }) => {
  const ref = useRef(null);

  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const scale = useSpring(1, spring);

  const handleMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    rotateY.set(((x - midX) / midX) * rotateAmplitude);
    rotateX.set(-((y - midY) / midY) * rotateAmplitude);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => scale.set(scaleOnHover)}
      onMouseLeave={reset}
      style={{ perspective: "900px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TiltedCard;
