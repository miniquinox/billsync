
import { motion } from "framer-motion";
import { useState } from "react";
import { TimeCard } from "./challenges/TimeCard";
import { ReceiptCard } from "./challenges/ReceiptCard";
import { ErrorCard } from "./challenges/ErrorCard";
import { AccuracyCard } from "./challenges/AccuracyCard";
import { Particle } from "./challenges/Particle";
import { Challenge } from "./challenges/types";
import { 
  Clock, 
  AlertCircle, 
  Receipt, 
  Calculator,
  CheckCircle2,
  XCircle,
  Timer,
  TimerOff,
  FileClock,
  FileSearch,
  FileX,
  Ban,
  ArrowUpDown,
  PieChart,
  Activity,
  BrainCircuit 
} from "lucide-react";

const Challenges = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const challenges: Challenge[] = [
    {
      id: "time",
      title: "Time Drain",
      description: "Manual receipt processing bottlenecks your business growth",
      icon: Clock,
      color: "from-red-500/20 to-red-500/5",
      iconColor: "text-red-500",
      stats: [
        { 
          label: "Average Processing Time", 
          manual: "15-20 mins", 
          automated: "30 secs",
          icon: TimerOff
        },
        { 
          label: "Weekly Time Investment", 
          manual: "4-6 hours", 
          automated: "15 mins",
          icon: FileClock
        },
      ],
      impacts: [
        "Late expense reports",
        "Delayed reimbursements",
        "Administrative overload",
        "Employee frustration"
      ],
      solution: {
        title: "Smart Time Management",
        features: [
          "Instant receipt capture",
          "Batch processing",
          "Automated categorization",
          "Real-time expense tracking"
        ]
      }
    },
    {
      id: "receipts",
      title: "Lost Receipts",
      description: "Missing receipts lead to tax compliance issues and lost deductions",
      icon: Receipt,
      color: "from-amber-500/20 to-amber-500/5",
      iconColor: "text-amber-500",
      stats: [
        { 
          label: "Receipt Loss Risk", 
          manual: "15-20%", 
          automated: "0%",
          icon: FileX
        },
        { 
          label: "Recovery Success", 
          manual: "30-40%", 
          automated: "100%",
          icon: FileSearch
        },
      ],
      lossTypes: [
        { type: "Physical Damage", percentage: 35 },
        { type: "Misplacement", percentage: 45 },
        { type: "Faded Text", percentage: 20 },
      ],
      solution: {
        title: "Digital Receipt Vault",
        features: [
          "Instant backup",
          "Cloud storage",
          "Search functionality",
          "Audit-ready format"
        ]
      }
    },
    {
      id: "errors",
      title: "Error Rates",
      description: "Human error in manual data entry costs businesses dearly",
      icon: AlertCircle,
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-500",
      stats: [
        { 
          label: "Data Entry Errors", 
          manual: "15-25%", 
          automated: "0.1%",
          icon: Ban
        },
        { 
          label: "Correction Time", 
          manual: "1-2 hrs/week", 
          automated: "< 5 mins",
          icon: ArrowUpDown
        },
      ],
      errorTypes: [
        { type: "Wrong Amount", percentage: 40 },
        { type: "Missing Data", percentage: 35 },
        { type: "Wrong Category", percentage: 25 },
      ],
      solution: {
        title: "AI-Powered Accuracy",
        features: [
          "Smart data extraction",
          "Auto-verification",
          "Error detection",
          "Validation checks"
        ]
      }
    },
    {
      id: "accuracy",
      title: "Data Accuracy",
      description: "Inaccurate categorization affects financial reporting",
      icon: Calculator,
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500",
      stats: [
        { 
          label: "Categorization Accuracy", 
          manual: "75-85%", 
          automated: "99.9%",
          icon: PieChart
        },
        { 
          label: "Processing Accuracy", 
          manual: "80-90%", 
          automated: "99.9%",
          icon: Activity
        },
      ],
      accuracyMetrics: [
        { metric: "Tax Compliance", impact: "High Risk" },
        { metric: "Audit Readiness", impact: "Limited" },
        { metric: "Financial Planning", impact: "Impaired" },
      ],
      solution: {
        title: "Intelligent Processing",
        features: [
          "ML categorization",
          "Pattern recognition",
          "Smart suggestions",
          "Learning system"
        ]
      }
    },
  ];

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10
  }));

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {particles.map((particle) => (
          <Particle key={particle.id} delay={particle.delay} />
        ))}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-br from-billsync-accent/10 via-purple-600/5 to-transparent rounded-full filter blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-red-500/10 via-amber-500/5 to-transparent rounded-full filter blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            The Challenges We're Solving
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Manual receipt management isn't just tedious—it's a significant business liability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden"
              onHoverStart={() => setActiveCard(challenge.id)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <motion.div
                className={`bg-gradient-to-br ${challenge.color} relative group`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {challenge.id === "time" && <TimeCard challenge={challenge} />}
                {challenge.id === "receipts" && <ReceiptCard challenge={challenge} />}
                {challenge.id === "errors" && <ErrorCard challenge={challenge} />}
                {challenge.id === "accuracy" && <AccuracyCard challenge={challenge} />}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
