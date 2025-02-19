
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Challenge } from "./types";

export const TimeCard = ({ challenge }: { challenge: Challenge }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedTask, setSelectedTask] = useState(0);
  
  const tasks = [
    { name: "Receipt Entry", manual: "45m", automated: "2m" },
    { name: "Categorization", manual: "30m", automated: "1m" },
    { name: "Filing", manual: "25m", automated: "1m" },
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
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 1 }}
          >
            <Clock className="h-5 w-5" />
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold">{challenge.title}</h3>
            <p className="text-sm text-gray-400">{challenge.description}</p>
          </div>
        </div>
        <div 
          className="flex-1 flex flex-col justify-center gap-2 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center justify-between px-2 mb-2 text-xs text-gray-400">
            <span>Manual</span>
            <span>BillSync</span>
          </div>
          {tasks.map((task, idx) => (
            <motion.div
              key={idx}
              className={`relative cursor-pointer ${idx === selectedTask ? 'opacity-100' : 'opacity-60'}`}
              onClick={() => setSelectedTask(idx)}
              whileHover={{ opacity: 1 }}
            >
              <div className="flex items-center justify-between mb-1 text-sm">
                <span>{task.name}</span>
                <div className="flex items-center gap-2">
                  <span>{task.manual}</span>
                  <ArrowRight className="h-3 w-3" />
                  <span className="text-emerald-400">{task.automated}</span>
                </div>
              </div>
              <motion.div 
                className="h-1.5 rounded-full bg-white/10"
                initial={{ width: "100%" }}
              >
                <motion.div
                  className="h-full rounded-full bg-red-500/50"
                  initial={{ width: "100%" }}
                  animate={{ width: idx === selectedTask ? "15%" : "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
