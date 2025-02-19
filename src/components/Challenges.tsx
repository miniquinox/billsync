import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  AlertCircle, 
  Receipt, 
  Calculator, 
  TimerOff,
  FileClock,
  FileSearch,
  FileX,
  Wallet,
  Receipt as ReceiptIcon,
  ArrowUpDown,
  Ban,
  CheckCircle2,
  XCircle,
  PieChart,
  TrendingUp,
  LineChart,
  Activity,
  AlertTriangle,
  BrainCircuit
} from "lucide-react";
import { useState, useEffect } from "react";
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

const Particle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        y: Math.random() * 100,
        x: Math.random() * 100 
      }}
      animate={{
        opacity: [0, 1, 0],
        y: [0, -100, -200],
        x: [0, Math.sin(Math.random() * 10) * 50, 0]
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute w-1 h-1 rounded-full bg-white/10"
    />
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
            >
              <motion.div
                className={`p-6 bg-gradient-to-br ${challenge.color} relative group`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className={`p-3 rounded-lg bg-white/5 ${challenge.iconColor}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <challenge.icon className="h-6 w-6" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed break-words">{challenge.description}</p>
                  </div>
                </div>

                {challenge.id === "time" && (
                  <motion.div className="space-y-4">
                    {challenge.stats.map((stat: Stat, idx: number) => (
                      <motion.div
                        key={idx}
                        className="neo-blur p-4 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <stat.icon className={`h-4 w-4 ${challenge.iconColor}`} />
                          <span className="text-sm text-gray-300">{stat.label}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500" />
                            <div className="text-left">
                              <span className="text-xs text-gray-400 block">Manual</span>
                              <span className="text-sm font-medium">{stat.manual}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <div className="text-left">
                              <span className="text-xs text-gray-400 block">BillSync</span>
                              <span className="text-sm font-medium">{stat.automated}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    <div className="grid grid-cols-2 gap-4">
                      {challenge.impacts?.map((impact, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                          <span className="text-sm text-gray-300 text-left">{impact}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {challenge.id === "receipts" && (
                  <motion.div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      {challenge.stats.map((stat: Stat, idx: number) => (
                        <motion.div
                          key={idx}
                          className="neo-blur p-4 rounded-lg"
                          whileHover={{
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 300 }
                          }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <stat.icon className={`h-4 w-4 ${challenge.iconColor}`} />
                            <span className="text-sm text-gray-300">{stat.label}</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-400">Manual</span>
                              <span className="text-sm font-medium">{stat.manual}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-400">BillSync</span>
                              <span className="text-sm font-medium">{stat.automated}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Loss Risk Factors</h4>
                      {challenge.lossTypes?.map((loss, idx) => (
                        <motion.div
                          key={idx}
                          className="relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-400">{loss.type}</span>
                            <span className="text-sm font-medium">{loss.percentage}%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${challenge.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${loss.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {challenge.id === "errors" && (
                  <motion.div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      {challenge.errorTypes?.map((error, idx) => (
                        <motion.div
                          key={idx}
                          className="text-center p-4 neo-blur rounded-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="relative mb-2">
                            <svg className="w-16 h-16 mx-auto">
                              <circle
                                cx="32"
                                cy="32"
                                r="28"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                className="text-gray-700"
                              />
                              <motion.circle
                                cx="32"
                                cy="32"
                                r="28"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                className={challenge.iconColor}
                                strokeDasharray={175.9}
                                strokeDashoffset={175.9 - (175.9 * error.percentage) / 100}
                                transform="rotate(-90 32 32)"
                                initial={{ strokeDashoffset: 175.9 }}
                                animate={{ strokeDashoffset: 175.9 - (175.9 * error.percentage) / 100 }}
                                transition={{ duration: 1 }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-medium">{error.percentage}%</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400">{error.type}</span>
                        </motion.div>
                      ))}
                    </div>
                    {challenge.stats.map((stat: Stat, idx: number) => (
                      <motion.div
                        key={idx}
                        className="neo-blur p-4 rounded-lg"
                        whileHover={{
                          y: -5,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <stat.icon className={`h-4 w-4 ${challenge.iconColor}`} />
                            <span className="text-sm text-gray-300">{stat.label}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <XCircle className="h-4 w-4 text-red-500" />
                              <span className="text-sm">{stat.manual}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{stat.automated}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {challenge.id === "accuracy" && (
                  <motion.div className="space-y-6">
                    <div className="grid gap-4">
                      {challenge.accuracyMetrics?.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          className="neo-blur p-4 rounded-lg"
                          whileHover={{
                            x: 10,
                            transition: { type: "spring", damping: 5 }
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">{metric.metric}</span>
                            <span className={`text-sm font-medium ${
                              metric.impact.includes("High") ? "text-red-500" : 
                              metric.impact.includes("Limited") ? "text-yellow-500" : 
                              "text-gray-400"
                            }`}>
                              {metric.impact}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {challenge.stats.map((stat: Stat, idx: number) => (
                        <motion.div
                          key={idx}
                          className="neo-blur p-4 rounded-lg"
                          whileHover={{ rotate: 5 }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <stat.icon className={`h-4 w-4 ${challenge.iconColor}`} />
                            <span className="text-sm text-gray-300">{stat.label}</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-400">Manual</span>
                              <span className="text-sm font-medium">{stat.manual}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-400">BillSync</span>
                              <span className="text-sm font-medium">{stat.automated}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
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
