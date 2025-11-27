import { motion } from "framer-motion";

const FloatingCircle = ({ gradient, style = {}, size = 100 }) => {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: gradient || "linear-gradient(135deg, #00f, #0ff, #f0f)", // default gradient
        position: "absolute",
        top: "50%",
        left: "50%",
        ...style, // allows custom positioning overrides
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
};

export default FloatingCircle;
