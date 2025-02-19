
import { motion } from "framer-motion";
import { Calculator, PieChart } from "lucide-react";
import { useState } from "react";
import { Challenge } from "./types";

export const AccuracyCard = ({ challenge }: { challenge: Challenge }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="p-6 h-[300px] flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className={`p-3 rounded-lg bg-white/5 ${challenge.iconColor}`}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 1 }}
        >
          <Calculator className="h-6 w-6" />
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
          className="relative w-40 h-40"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotateY: isHovered ? 180 : 0
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <PieChart className="w-20 h-20 text-purple-500" />
            <motion.div
              className="absolute"
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.5
              }}
            >
              <span className="text-4xl font-bold">99.9%</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
