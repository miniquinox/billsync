
import { motion } from "framer-motion";
import { Receipt, FileX } from "lucide-react";
import { useState } from "react";
import { Challenge } from "./types";

export const ReceiptCard = ({ challenge }: { challenge: Challenge }) => {
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
            animate={{ 
              rotate: isHovered ? [0, -15, 15, -15, 15, 0] : 0,
              x: isHovered ? [0, -2, 2, -2, 2, 0] : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <FileX className="h-5 w-5" />
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
          <motion.div className="text-center">
            <motion.div 
              className="text-3xl font-bold mb-1"
              animate={{ scale: isHovered ? 1.1 : 1 }}
            >
              {challenge.stats[0].manual}
            </motion.div>
            <p className="text-sm text-gray-400">{challenge.stats[0].label}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            className="text-xs text-emerald-400 text-center mt-2"
          >
            Digital storage ensures zero receipt loss
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
