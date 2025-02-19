import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  AlertCircle, 
  Receipt, 
  Calculator,
  CheckCircle2,
  XCircle,
  Timer,
  BarChart,
  PieChart,
  TrendingUp,
  AlertTriangle,
  TimerOff,
  FileClock,
  FileSearch,
  FileX,
  Wallet,
  Receipt as ReceiptIcon,
  ArrowUpDown,
  Ban,
  Activity,
  BrainCircuit
} from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Stat {
  label: string;
  manual: string;
  automated: string;
  icon: any;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  iconColor: string;
  stats: Stat[];
  impacts?: string[];
  lossTypes?: { type: string; percentage: number }[];
  errorTypes?: { type: string; percentage: number }[];
  accuracyMetrics?: { metric: string; impact: string }[];
  solution: {
    title: string;
    features: string[];
  }
}

interface Particle {
  id: number;
  delay: number;
}

const Particle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white/10 rounded-full"
      initial={{
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        opacity: 0,
      }}
      animate={{
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

const TimeCard = ({ challenge }: { challenge: Challenge }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="p-6 h-[300px] flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className={`p-3 rounded-lg bg-white/5 ${challenge.iconColor}`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Timer className="h-6 w-6" />
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold">{challenge.title}</h3>
          <p className="text-sm text-gray-400">{challenge.description}</p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeIndex}
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {challenge.stats.map((stat, idx) => (
            idx === activeIndex && (
              <motion.div
                key={idx}
                className="text-center space-y-2"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveIndex((prev) => (prev + 1) % challenge.stats.length)}
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.manual} → {stat.automated}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            )
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ReceiptCard = ({ challenge }: { challenge: Challenge }) => {
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

const ErrorCard = ({ challenge }: { challenge: Challenge }) => {
  const [currentError, setCurrentError] = useState(0);
  
  return (
    <div className="p-6 h-[300px] flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className={`p-3 rounded-lg bg-white/5 ${challenge.iconColor}`}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.5 }}
        >
          <AlertCircle className="h-6 w-6" />
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold">{challenge.title}</h3>
          <p className="text-sm text-gray-400">{challenge.description}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          className="text-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => setCurrentError((prev) => (prev + 1) % (challenge.errorTypes?.length || 1))}
        >
          <AnimatePresence mode="wait">
            {challenge.errorTypes?.map((error, idx) => (
              idx === currentError && (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-2"
                >
                  <div className="text-4xl font-bold">{error.percentage}%</div>
                  <p className="text-sm text-gray-400">{error.type}</p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

const AccuracyCard = ({ challenge }: { challenge: Challenge }) => {
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

const Challenges = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<string>("time");

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

  const processSteps = [
    {
      icon: Receipt,
      title: "Receipt Collection",
      traditional: {
        text: "Physical storage, easily lost",
        color: "text-red-500",
      },
      billsync: {
        text: "Instant digital capture",
        color: "text-green-500",
      }
    },
    {
      icon: FileSearch,
      title: "Data Extraction",
      traditional: {
        text: "Manual typing, prone to errors",
        color: "text-red-500",
      },
      billsync: {
        text: "AI-powered automation",
        color: "text-green-500",
      }
    },
    {
      icon: BrainCircuit,
      title: "Processing",
      traditional: {
        text: "Hours of manual work",
        color: "text-red-500",
      },
      billsync: {
        text: "Seconds with AI",
        color: "text-green-500",
      }
    },
    {
      icon: CheckCircle2,
      title: "Verification",
      traditional: {
        text: "Multiple manual checks",
        color: "text-red-500",
      },
      billsync: {
        text: "Automated validation",
        color: "text-green-500",
      }
    }
  ];

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Traditional vs BillSync Process
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-6"
            >
              <motion.div
                className="w-16 h-16 mx-auto rounded-full bg-billsync-accent/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <step.icon className="w-8 h-8 text-billsync-accent" />
              </motion.div>
              
              <h4 className="text-xl font-semibold">{step.title}</h4>

              <div className="space-y-4">
                <motion.div
                  className="neo-blur p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="font-medium">Traditional</span>
                  </div>
                  <p className={`text-sm ${step.traditional.color}`}>
                    {step.traditional.text}
                  </p>
                </motion.div>

                <motion.div
                  className="neo-blur p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="font-medium">BillSync</span>
                  </div>
                  <p className={`text-sm ${step.billsync.color}`}>
                    {step.billsync.text}
                  </p>
                </motion.div>
              </div>

              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 w-[calc(100%-4rem)] h-px bg-gradient-to-r from-billsync-accent/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
