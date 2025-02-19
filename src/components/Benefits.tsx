
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  Workflow,
  Shield,
  Clock,
  Heart,
  CheckCircle2,
  AlertCircle,
  DollarSign,
  FileCheck,
  ArrowRight,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

const Benefits = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const controls = useAnimation();

  // Mock data for charts
  const timelineData = Array.from({ length: 12 }, (_, i) => ({
    month: `Month ${i + 1}`,
    manual: Math.round(100 - i * 5 + Math.random() * 10),
    automated: Math.round(5 + Math.random() * 2),
  }));

  const efficiencyStats = {
    processedReceipts: 1234,
    accuracyRate: 99.9,
    timeReduction: 85,
    costSavings: 12000,
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-billsync-accent/10 via-purple-600/5 to-transparent rounded-full filter blur-[80px]"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-billsync-accent/10 via-purple-600/5 to-transparent rounded-full filter blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Benefits & Outcomes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Efficiency, Accuracy, and Trust – All in One Place
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Streamlined Process Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-xl overflow-hidden"
            onHoverStart={() => setActiveCard("streamlined")}
            onHoverEnd={() => setActiveCard(null)}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-billsync-accent text-white">
                <Workflow className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Streamlined Process</h3>
                <p className="text-gray-400">
                  Automate receipt management and reduce errors
                </p>
              </div>
            </div>

            <div className="h-[300px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timelineData}>
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(0,0,0,0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="manual"
                    stroke="#ef4444"
                    name="Manual Process"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="automated"
                    stroke="#8A2BE2"
                    name="With BillSync"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === "streamlined" ? 1 : 0 }}
                className="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-billsync-accent"
              >
                <BarChart3 className="h-4 w-4" />
                <span>Interactive Chart</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Audit-Ready Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-xl"
            onHoverStart={() => setActiveCard("audit")}
            onHoverEnd={() => setActiveCard(null)}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-billsync-accent text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Audit-Ready</h3>
                <p className="text-gray-400">
                  Blockchain-verified records for IRS compliance
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: FileCheck,
                    label: "Verified Records",
                    value: "100%",
                  },
                  {
                    icon: Shield,
                    label: "Compliance Rate",
                    value: "99.9%",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="neo-blur p-4 rounded-lg text-center"
                  >
                    <stat.icon className="h-6 w-6 text-billsync-accent mx-auto mb-2" />
                    <div className="text-lg font-bold text-billsync-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {activeCard === "audit" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
                    {[
                      "Real-time verification",
                      "Immutable blockchain records",
                      "IRS-compliant format",
                      "Instant audit trails",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Time & Cost Savings Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-xl"
            onHoverStart={() => setActiveCard("savings")}
            onHoverEnd={() => setActiveCard(null)}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-billsync-accent text-white">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Time & Cost Savings
                </h3>
                <p className="text-gray-400">
                  Focus on growing your business
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: "Time Saved Monthly",
                  value: "40+ hours",
                  icon: Clock,
                  color: "text-blue-400",
                },
                {
                  label: "Annual Cost Savings",
                  value: "$12,000+",
                  icon: DollarSign,
                  color: "text-green-400",
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="neo-blur p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <metric.icon
                        className={`h-5 w-5 ${metric.color}`}
                      />
                      <span className="text-sm text-gray-300">
                        {metric.label}
                      </span>
                    </div>
                    <span
                      className={`text-lg font-bold ${metric.color}`}
                    >
                      {metric.value}
                    </span>
                  </div>
                </motion.div>
              ))}

              <AnimatePresence>
                {activeCard === "savings" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="neo-blur p-4 rounded-lg"
                  >
                    <div className="text-center space-y-2">
                      <Lightbulb className="h-6 w-6 text-yellow-400 mx-auto" />
                      <p className="text-sm text-gray-400">
                        Reinvest saved time and money into growing your business
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Peace of Mind Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-xl"
            onHoverStart={() => setActiveCard("peace")}
            onHoverEnd={() => setActiveCard(null)}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-billsync-accent text-white">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
                <p className="text-gray-400">
                  Simple and secure tax filing
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: CheckCircle2,
                    label: "Auto-Verified",
                    description: "Every Receipt",
                  },
                  {
                    icon: Shield,
                    label: "Protected",
                    description: "Bank-Grade Security",
                  },
                  {
                    icon: FileCheck,
                    label: "Ready",
                    description: "Turbo Tax Format",
                  },
                  {
                    icon: Clock,
                    label: "24/7",
                    description: "Always Available",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="neo-blur p-4 rounded-lg text-center"
                  >
                    <feature.icon className="h-6 w-6 text-billsync-accent mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-300">
                      {feature.label}
                    </div>
                    <div className="text-xs text-gray-400">
                      {feature.description}
                    </div>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {activeCard === "peace" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="neo-blur p-4 rounded-lg text-center"
                  >
                    <p className="text-sm text-gray-400 mb-4">
                      Experience worry-free tax season with BillSync
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-6 py-2 bg-billsync-accent/20 text-billsync-accent border border-billsync-accent/30 rounded-lg text-sm font-medium"
                    >
                      Get Started Now
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
