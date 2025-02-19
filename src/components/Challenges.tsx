
import { motion } from "framer-motion";
import { Clock, AlertCircle, Receipt, Calculator } from "lucide-react";
import { AccuracyCard } from "./challenges/AccuracyCard";
import { ErrorCard } from "./challenges/ErrorCard";
import { ReceiptCard } from "./challenges/ReceiptCard";
import { TimeCard } from "./challenges/TimeCard";

const Challenges = () => {
  const challenges = [
    {
      id: "time",
      title: "Time Drain",
      description: "Manual receipt processing takes 10x longer than automated solutions",
      icon: Clock,
      color: "from-red-500/20 to-red-500/5",
      iconColor: "text-red-500",
      stats: [
        { label: "Manual Process", manual: "4+ hours/week", automated: "15 mins/week", icon: Clock },
      ],
    },
    {
      id: "errors",
      title: "Error Rates",
      description: "Human error in manual data entry leads to costly mistakes",
      icon: AlertCircle,
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-500",
      stats: [
        { label: "Manual Error Rate", manual: "23%", automated: "0.1%", icon: AlertCircle },
      ],
      errorTypes: [
        { type: "Data Entry Errors", percentage: 15 },
        { type: "Calculation Mistakes", percentage: 5 },
        { type: "Omissions", percentage: 3 },
      ],
    },
    {
      id: "receipts",
      title: "Lost Receipts",
      description: "Physical receipts get lost or damaged, causing tax compliance issues",
      icon: Receipt,
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-500",
      stats: [
        { label: "Annual Loss Rate", manual: "15%", automated: "0%", icon: Receipt },
      ],
    },
    {
      id: "accuracy",
      title: "Data Accuracy",
      description: "Incorrect categorization and tax calculations",
      icon: Calculator,
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500",
      stats: [
        { label: "Manual Accuracy", manual: "77%", automated: "99.9%", icon: Calculator },
      ],
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Large blurred spots */}
        <motion.div
          className="absolute top-20 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -top-32 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        {/* Grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                             linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-billsync-dark/80 to-billsync-dark" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gradient mb-4"
            animate={{
              textShadow: [
                "0 0 0px rgba(255,255,255,0.5)",
                "0 0 10px rgba(255,255,255,0.2)",
                "0 0 0px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            The Challenges We're Solving
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Manual receipt management isn't just tedious—it's a significant business liability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge) => (
            <div key={challenge.id}>
              {challenge.id === "time" && <TimeCard challenge={challenge} />}
              {challenge.id === "receipts" && <ReceiptCard challenge={challenge} />}
              {challenge.id === "errors" && <ErrorCard challenge={challenge} />}
              {challenge.id === "accuracy" && <AccuracyCard challenge={challenge} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
