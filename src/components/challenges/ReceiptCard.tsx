
import { motion, AnimatePresence } from "framer-motion";
import { Receipt } from "lucide-react";
import { useState } from "react";
import { Challenge } from "./types";

export const ReceiptCard = ({ challenge }: { challenge: Challenge }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`w-full bg-gradient-to-br ${challenge.color} rounded-2xl`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-8 flex flex-col min-h-[400px]">
        <div className="flex items-center gap-3 mb-8">
          <motion.div
            className={`p-3 rounded-lg bg-white/5 ${challenge.iconColor}`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Receipt className="h-6 w-6" />
          </motion.div>
          <div>
            <h3 className="text-xl font-semibold">{challenge.title}</h3>
            <p className="text-sm text-gray-400">{challenge.description}</p>
          </div>
        </div>
        <div 
          className="flex-1 flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="text-center"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold mb-2">{challenge.stats[0].manual}</div>
            <p className="text-sm text-gray-400">{challenge.stats[0].label}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
