
import { motion } from "framer-motion";

interface ParticleProps {
  delay: number;
}

export const Particle = ({ delay }: ParticleProps) => (
  <motion.div
    className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-billsync-accent/5 rounded-full filter blur-[100px]"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`
    }}
    animate={{
      x: [20, -20, 20],
      y: [-10, 10, -10],
      rotate: [0, 180, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      delay
    }}
  />
);
