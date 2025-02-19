
import { motion, AnimatePresence } from "framer-motion";
import { Timer } from "lucide-react";
import { useState } from "react";
import { Challenge } from "./types";

export const TimeCard = ({ challenge }: { challenge: Challenge }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="p-6 h-[300px] flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className={`p-3 rounded-lg bg-white/5 ${challenge.iconColor}`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Timer className="h-6 w-6" />
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold">{challenge.title}</h3>
          <p className="text-sm text-gray-400">{challenge.description}</p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeIndex}
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {challenge.stats.map((stat, idx) => (
            idx === activeIndex && (
              <motion.div
                key={idx}
                className="text-center space-y-2"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveIndex((prev) => (prev + 1) % challenge.stats.length)}
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.manual} → {stat.automated}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            )
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
