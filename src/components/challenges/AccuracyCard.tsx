import { motion } from "framer-motion";
import { Target, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Challenge } from "./types";

export const AccuracyCard = ({ challenge }: { challenge: Challenge }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    { name: "Travel", accuracy: 99.9, examples: ["Flight", "Hotel", "Taxi"] },
    { name: "Meals", accuracy: 99.8, examples: ["Restaurant", "Catering", "Coffee"] },
    { name: "Office", accuracy: 99.9, examples: ["Supplies", "Software", "Equipment"] }
  ];

  return (
    <motion.div
      className="relative w-full h-full overflow-hidden rounded-2xl backdrop-blur-sm"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: activeCategory !== null ? 1.2 : 1,
          opacity: activeCategory !== null ? 0.2 : 0.1,
        }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: activeCategory !== null ? 1.2 : 1,
          opacity: activeCategory !== null ? 0.2 : 0.1,
        }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="relative w-full h-full border border-white/[0.08] bg-white/[0.02] rounded-2xl"
        animate={{
          borderColor: activeCategory !== null ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)"
        }}
      >
        <div className="p-6 flex flex-col min-h-[280px]">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className={`p-2.5 rounded-lg bg-white/5 ${challenge.iconColor}`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Target className="h-5 w-5" />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold">{challenge.title}</h3>
              <p className="text-sm text-gray-400">{challenge.description}</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-3">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                className="relative"
                onHoverStart={() => setActiveCategory(idx)}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">{category.name}</span>
                  <span className="text-sm text-emerald-400">{category.accuracy}%</span>
                </div>
                <motion.div className="h-8 bg-white/5 rounded-lg relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-purple-500/20"
                    initial={{ width: "0%" }}
                    animate={{ width: activeCategory === idx ? "99.9%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-around px-2 text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCategory === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.examples.map((example, i) => (
                      <motion.span
                        key={i}
                        className="flex items-center gap-1"
                        initial={{ y: 10 }}
                        animate={{ y: activeCategory === idx ? 0 : 10 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <CheckCircle className="h-3 w-3 text-emerald-400" />
                        {example}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
