import { motion, useAnimation } from "framer-motion";
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
  PieChart,
  TrendingUp,
  Users,
  BadgeCheck,
  Receipt,
  FileWarning,
} from "lucide-react";
import { useState } from "react";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Benefits = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const controls = useAnimation();

  const timelineData = Array.from({ length: 12 }, (_, i) => ({
    month: `Month ${i + 1}`,
    manual: Math.round(100 - i * 5 + Math.random() * 10),
    automated: Math.round(5 + Math.random() * 2),
  }));

  const benefitCards = [
    {
      id: "efficiency",
      title: "Enhanced Efficiency",
      description: "Transform your receipt management workflow",
      icon: Workflow,
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-500",
      metrics: [
        { label: "Time Saved Monthly", value: "40+ hours", icon: Clock },
        { label: "Processing Speed", value: "< 5 seconds", icon: TrendingUp },
      ],
      chart: (
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={timelineData}>
            <Tooltip
              content={({ payload, label }) => (
                <div className="bg-black/90 p-2 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-300 mb-1">{label}</p>
                  {payload?.map((entry) => (
                    <p
                      key={entry.name}
                      className="text-sm"
                      style={{ color: entry.color }}
                    >
                      {entry.name}: {entry.value}
                    </p>
                  ))}
                </div>
              )}
            />
            <Line
              type="monotone"
              dataKey="automated"
              stroke="#3B82F6"
              strokeWidth={2}
              name="Processing Time"
            />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      id: "compliance",
      title: "Future-Proof Compliance",
      description: "IRS-ready documentation and blockchain verification",
      icon: Shield,
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500",
      metrics: [
        { label: "Compliance Rate", value: "100%", icon: BadgeCheck },
        { label: "Audit-Ready Records", value: "Always", icon: FileCheck },
      ],
      features: [
        ["Blockchain verification", "Real-time compliance checks"],
        ["Automatic backups", "Audit trail"],
      ],
    },
    {
      id: "savings",
      title: "Cost Optimization",
      description: "Significant reduction in operational costs",
      icon: DollarSign,
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-500",
      height: "h-[400px]",
      padding: "p-10",
      metrics: [
        { label: "Annual Savings", value: "$12,000+", icon: TrendingUp },
        { label: "ROI", value: "300%", icon: PieChart },
      ],
      stats: [
        ["Paper Costs", "-90%", "Storage Fees", "-75%"],
        ["Labor Hours", "-85%", "HR Savings", "-70%"],
      ],
    },
    {
      id: "accuracy",
      title: "Enhanced Accuracy",
      description: "AI-powered data extraction and verification",
      icon: CheckCircle2,
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-500",
      height: "h-[400px]",
      padding: "p-10",
      metrics: [
        { label: "Accuracy Rate", value: "99.9%", icon: BadgeCheck },
        { label: "Error Reduction", value: "-95%", icon: FileWarning },
      ],
      verificationSteps: [
        ["OCR Scanning", "Automated", "Data Validation", "AI-Powered"],
        ["Error Detection", "Real-time", "Quality Check", "Continuous"],
      ],
    },
  ];

  const cardsWithLayout = benefitCards.map(card => ({
    ...card,
    height: card.height || "h-[350px]",
    padding: card.padding || "p-8"
  }));

  return (
    <section className="py-20 relative overflow-hidden">
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
            Transform Your Receipt Management with BillSync
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardsWithLayout.map((benefit) => (
            <TooltipProvider key={benefit.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`glass-card rounded-xl overflow-hidden ${benefit.height}`}
                onHoverStart={() => setActiveCard(benefit.id)}
                onHoverEnd={() => setActiveCard(null)}
              >
                <motion.div
                  className={`h-full ${benefit.padding} bg-gradient-to-br ${benefit.color} relative`}
                  initial={{ backgroundPosition: "0% 0%" }}
                  animate={{ backgroundPosition: "100% 100%" }}
                  transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                >
                  <motion.div
                    className="flex items-start gap-4 mb-6"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className={`p-3 rounded-lg bg-white/5 ${benefit.iconColor}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <benefit.icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {benefit.metrics.map((metric, idx) => (
                      <UITooltip key={idx}>
                        <TooltipTrigger asChild>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="neo-blur p-4 rounded-lg cursor-help relative overflow-hidden group"
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.5 }}
                            />
                            <metric.icon className={`h-5 w-5 ${benefit.iconColor} mb-2`} />
                            <motion.div
                              className="text-lg font-bold"
                              initial={{ scale: 0.9 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {metric.value}
                            </motion.div>
                            <div className="text-xs text-gray-400">{metric.label}</div>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">Based on average customer data</p>
                        </TooltipContent>
                      </UITooltip>
                    ))}
                  </div>

                  <div className="mt-4">
                    {benefit.id === "efficiency" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {benefit.chart}
                      </motion.div>
                    )}
                    
                    {benefit.id === "compliance" && benefit.features && (
                      <div className="grid grid-cols-2 gap-4">
                        {benefit.features.map((featureGroup, groupIdx) => (
                          <div key={groupIdx} className="space-y-3">
                            {featureGroup.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (groupIdx * 2 + idx) * 0.1 }}
                                className="flex items-center gap-2"
                              >
                                <motion.div
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                </motion.div>
                                <span className="text-sm text-gray-300">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {benefit.id === "savings" && benefit.stats && (
                      <div className="grid grid-cols-2 gap-4">
                        {benefit.stats.map((statGroup, groupIdx) => (
                          <div key={groupIdx} className="space-y-3">
                            {[0, 2].map((offset) => (
                              <motion.div
                                key={offset}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (groupIdx * 2 + offset/2) * 0.1 }}
                                className="neo-blur p-3 rounded-lg"
                              >
                                <motion.div
                                  className="flex items-center justify-between"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <span className="text-sm text-gray-300">
                                    {statGroup[offset]}
                                  </span>
                                  <motion.span
                                    className="text-sm font-medium text-green-500"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                  >
                                    {statGroup[offset + 1]}
                                  </motion.span>
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {benefit.id === "accuracy" && benefit.verificationSteps && (
                      <div className="grid grid-cols-2 gap-4">
                        {benefit.verificationSteps.map((stepGroup, groupIdx) => (
                          <div key={groupIdx} className="space-y-3">
                            {[0, 2].map((offset) => (
                              <motion.div
                                key={offset}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (groupIdx * 2 + offset/2) * 0.1 }}
                                className="neo-blur p-3 rounded-lg"
                              >
                                <motion.div
                                  className="flex items-center justify-between"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <div className="flex items-center gap-2">
                                    <Receipt className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm text-gray-300">
                                      {stepGroup[offset]}
                                    </span>
                                  </div>
                                  <motion.span
                                    className={`text-xs px-2 py-1 rounded-full ${benefit.color} ${benefit.iconColor}`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    {stepGroup[offset + 1]}
                                  </motion.span>
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </TooltipProvider>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 glass-card p-6 rounded-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                value: "Up to 80%",
                label: "Time Savings Potential",
                color: "text-blue-500",
              },
              {
                icon: FileCheck,
                value: "100%",
                label: "IRS Compliance",
                color: "text-purple-500",
              },
              {
                icon: TrendingUp,
                value: "90%",
                label: "Error Reduction",
                color: "text-green-500",
              },
              {
                icon: DollarSign,
                value: "40%",
                label: "Cost Reduction",
                color: "text-yellow-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <stat.icon
                  className={`h-6 w-6 ${stat.color} mx-auto mb-2`}
                />
                <div className="text-xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
