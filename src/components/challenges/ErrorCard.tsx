import { motion } from "framer-motion";
import { AlertTriangle, XCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Challenge } from "./types";

export const ErrorCard = ({ challenge }: { challenge: Challenge }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeError, setActiveError] = useState<number | null>(null);
  
  const errors = [
    { type: "Data Entry", count: 15, examples: ["$156.78 → $165.78", "Apr → Aug"] },
    { type: "Missing Info", count: 8, examples: ["No Category", "No Date"] },
    { type: "Duplicates", count: 5, examples: ["Same receipt 2x", "Double entry"] }
  ];

  return (
    <motion.div
      className="relative w-full h-full overflow-hidden rounded-2xl backdrop-blur-sm"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.2 : 0.1,
        }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.2 : 0.1,
        }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="relative w-full h-full border border-white/[0.08] bg-white/[0.02] rounded-2xl"
        animate={{
          borderColor: isHovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)"
        }}
      >
        <div className="p-6 flex flex-col min-h-[280px]">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className={`p-2.5 rounded-lg bg-white/5 ${challenge.iconColor}`}
              animate={{ rotate: isHovered ? [0, -15, 15, -15, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <AlertTriangle className="h-5 w-5" />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold">{challenge.title}</h3>
              <p className="text-sm text-gray-400">{challenge.description}</p>
            </div>
          </div>
          <div 
            className="flex-1 flex flex-col justify-center gap-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {errors.map((error, idx) => (
              <motion.div
                key={idx}
                className="relative cursor-pointer"
                onMouseEnter={() => setActiveError(idx)}
                onMouseLeave={() => setActiveError(null)}
              >
                <div className="flex items-center justify-between text-sm">
                  <span>{error.type}</span>
                  <span>{error.count} errors/month</span>
                </div>
                <motion.div 
                  className="h-1.5 rounded-full bg-white/10 mt-1 relative overflow-hidden"
                  whileHover={{ height: "2.5rem" }}
                >
                  <motion.div
                    className="h-full rounded-full bg-yellow-500/50"
                    initial={{ width: "100%" }}
                    animate={{ width: activeError === idx ? "0%" : "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  {activeError === idx && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-between px-2 text-xs"
                    >
                      <span className="flex items-center gap-1">
                        <XCircle className="h-3 w-3 text-red-400" />
                        {error.examples[0]}
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle className="h-3 w-3" />
                        {error.examples[1]}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
