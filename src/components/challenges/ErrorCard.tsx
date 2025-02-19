
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Challenge } from "./types";

export const ErrorCard = ({ challenge }: { challenge: Challenge }) => {
  const [currentError, setCurrentError] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`w-full h-full bg-gradient-to-br ${challenge.color} rounded-2xl`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 flex flex-col min-h-[280px]">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className={`p-2.5 rounded-lg bg-white/5 ${challenge.iconColor}`}
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 1 }}
          >
            <AlertTriangle className="h-5 w-5" />
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold">{challenge.title}</h3>
            <p className="text-sm text-gray-400">{challenge.description}</p>
          </div>
        </div>
        <div 
          className="flex-1 flex flex-col items-center justify-center gap-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="text-center cursor-pointer"
            onClick={() => setCurrentError((prev) => (prev + 1) % (challenge.errorTypes?.length || 1))}
          >
            <AnimatePresence mode="wait">
              {challenge.errorTypes?.map((error, idx) => (
                idx === currentError && (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-1"
                  >
                    <div className="text-3xl font-bold">{error.percentage}%</div>
                    <p className="text-sm text-gray-400">{error.type}</p>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            className="text-xs text-emerald-400 text-center mt-2"
          >
            AI validation eliminates 99.9% of errors
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
