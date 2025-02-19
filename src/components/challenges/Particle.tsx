
import { motion } from "framer-motion";

export interface ParticleProps {
  delay: number;
}

export const Particle = ({ delay }: ParticleProps) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white/10 rounded-full"
      initial={{
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        opacity: 0,
      }}
      animate={{
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};
