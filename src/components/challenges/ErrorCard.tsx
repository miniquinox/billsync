
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { Challenge } from "./types";

export const ErrorCard = ({ challenge }: { challenge: Challenge }) => {
  const [currentError, setCurrentError] = useState(0);
  
  return (
    <div className="p-6 h-[300px] flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className={`p-3 rounded-lg bg-white/5 ${challenge.iconColor}`}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.5 }}
        >
          <AlertCircle className="h-6 w-6" />
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold">{challenge.title}</h3>
          <p className="text-sm text-gray-400">{challenge.description}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          className="text-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
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
                  className="space-y-2"
                >
                  <div className="text-4xl font-bold">{error.percentage}%</div>
                  <p className="text-sm text-gray-400">{error.type}</p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
