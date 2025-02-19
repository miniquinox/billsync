
import { motion } from "framer-motion";
import { Receipt, FileX, FileCheck } from "lucide-react";
import { useState } from "react";
import { Challenge } from "./types";

export const ReceiptCard = ({ challenge }: { challenge: Challenge }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const receiptLines = [
    { label: "Date", value: "03/15/2024" },
    { label: "Amount", value: "$156.78" },
    { label: "Vendor", value: "Office Supply Co" },
    { label: "Category", value: "Office Expenses" }
  ];

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
              rotate: isAnimating ? [0, -15, 15, -15, 15, 0] : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <Receipt className="h-5 w-5" />
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold">{challenge.title}</h3>
            <p className="text-sm text-gray-400">{challenge.description}</p>
          </div>
        </div>
        <motion.div 
          className="flex-1 flex flex-col justify-center"
          initial={false}
          animate={isAnimating ? "lost" : "found"}
          onClick={() => setIsAnimating(!isAnimating)}
        >
          <div className="relative border border-dashed border-orange-500/30 rounded-lg p-4 cursor-pointer">
            <motion.div
              className="absolute inset-0 bg-orange-500/5 rounded-lg"
              variants={{
                lost: { opacity: [0, 0.2, 0] },
                found: { opacity: 0.1 }
              }}
              transition={{ duration: 2, repeat: isAnimating ? Infinity : 0 }}
            />
            {receiptLines.map((line, idx) => (
              <motion.div
                key={idx}
                className="flex justify-between items-center mb-2 last:mb-0"
                variants={{
                  lost: { opacity: 0.3 },
                  found: { opacity: 1 }
                }}
              >
                <span className="text-sm text-gray-400">{line.label}:</span>
                <span className="text-sm">{line.value}</span>
              </motion.div>
            ))}
            <motion.div
              className="absolute -top-3 -right-3"
              variants={{
                lost: { opacity: 1, scale: 1 },
                found: { opacity: 0, scale: 0 }
              }}
            >
              <FileX className="h-6 w-6 text-orange-500" />
            </motion.div>
            <motion.div
              className="absolute -top-3 -right-3"
              variants={{
                lost: { opacity: 0, scale: 0 },
                found: { opacity: 1, scale: 1 }
              }}
            >
              <FileCheck className="h-6 w-6 text-emerald-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
