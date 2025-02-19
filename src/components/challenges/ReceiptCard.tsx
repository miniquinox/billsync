
import { motion, AnimatePresence } from "framer-motion";
import { Receipt, BarChart } from "lucide-react";
import { useState } from "react";
import { Challenge } from "./types";

export const ReceiptCard = ({ challenge }: { challenge: Challenge }) => {
  const [showPercentage, setShowPercentage] = useState(false);
  
  return (
    <div className="p-6 h-[300px] flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className={`p-3 rounded-lg bg-white/5 ${challenge.iconColor}`}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <Receipt className="h-6 w-6" />
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold">{challenge.title}</h3>
          <p className="text-sm text-gray-400">{challenge.description}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          className="w-32 h-32 relative cursor-pointer"
          whileHover={{ rotate: 180 }}
          onClick={() => setShowPercentage(!showPercentage)}
        >
          <AnimatePresence mode="wait">
            {!showPercentage ? (
              <motion.div
                key="icon"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <BarChart className="w-16 h-16 text-amber-500" />
              </motion.div>
            ) : (
              <motion.div
                key="percentage"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <span className="text-4xl font-bold text-amber-500">85%</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
