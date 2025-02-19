
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

  // Enhanced mock data for charts
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
        <ResponsiveContainer width="100%" height={120}>
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
        "Blockchain verification",
        "Real-time compliance checks",
        "Automatic backups",
        "Audit trail",
      ],
    },
    {
      id: "savings",
      title: "Cost Optimization",
      description: "Significant reduction in operational costs",
      icon: DollarSign,
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-500",
      metrics: [
        { label: "Annual Savings", value: "$12,000+", icon: TrendingUp },
        { label: "ROI", value: "300%", icon: PieChart },
      ],
      stats: [
        { label: "Paper Costs", savings: "-90%" },
        { label: "Storage Fees", savings: "-75%" },
        { label: "Labor Hours", savings: "-85%" },
      ],
    },
    {
      id: "accuracy",
      title: "Enhanced Accuracy",
      description: "AI-powered data extraction and verification",
      icon: CheckCircle2,
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-500",
      metrics: [
        { label: "Accuracy Rate", value: "99.9%", icon: BadgeCheck },
        { label: "Error Reduction", value: "-95%", icon: FileWarning },
      ],
      verificationSteps: [
        { step: "OCR Scanning", status: "Automated" },
        { step: "Data Validation", status: "AI-Powered" },
        { step: "Error Detection", status: "Real-time" },
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradients */}
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
            Transform Your Receipt Management with BillSync
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefitCards.map((benefit) => (
            <TooltipProvider key={benefit.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl overflow-hidden h-[400px]"
                onHoverStart={() => setActiveCard(benefit.id)}
                onHoverEnd={() => setActiveCard(null)}
              >
                <div
                  className={`h-full p-8 bg-gradient-to-br ${benefit.color} relative`}
                >
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`p-3 rounded-lg bg-white/5 ${benefit.iconColor}`}
                    >
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {benefit.metrics.map((metric, idx) => (
                      <UITooltip key={idx}>
                        <TooltipTrigger asChild>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="neo-blur p-4 rounded-lg cursor-help"
                          >
                            <metric.icon
                              className={`h-5 w-5 ${benefit.iconColor} mb-2`}
                            />
                            <div className="text-lg font-bold">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-400">
                              {metric.label}
                            </div>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">
                            Based on average customer data
                          </p>
                        </TooltipContent>
                      </UITooltip>
                    ))}
                  </div>

                  {/* Dynamic Content Based on Card Type */}
                  <div className="mt-4">
                    {benefit.id === "efficiency" && benefit.chart}
                    
                    {benefit.id === "compliance" && benefit.features && (
                      <div className="space-y-3">
                        {benefit.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-300">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {benefit.id === "savings" && benefit.stats && (
                      <div className="space-y-3">
                        {benefit.stats.map((stat, idx) => (
                          <motion.div
                            key={idx}
                            className="neo-blur p-3 rounded-lg flex items-center justify-between"
                          >
                            <span className="text-sm text-gray-300">
                              {stat.label}
                            </span>
                            <span className="text-sm font-medium text-green-500">
                              {stat.savings}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {benefit.id === "accuracy" &&
                      benefit.verificationSteps && (
                        <div className="space-y-3">
                          {benefit.verificationSteps.map((step, idx) => (
                            <motion.div
                              key={idx}
                              className="neo-blur p-3 rounded-lg flex items-center justify-between"
                            >
                              <div className="flex items-center gap-2">
                                <Receipt className="h-4 w-4 text-gray-400" />
                                <span className="text-sm text-gray-300">
                                  {step.step}
                                </span>
                              </div>
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${benefit.color} ${benefit.iconColor}`}
                              >
                                {step.status}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </motion.div>
            </TooltipProvider>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 glass-card p-8 rounded-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                value: "10,000+",
                label: "Active Users",
                color: "text-blue-500",
              },
              {
                icon: Receipt,
                value: "1M+",
                label: "Receipts Processed",
                color: "text-purple-500",
              },
              {
                icon: DollarSign,
                value: "$5M+",
                label: "Customer Savings",
                color: "text-green-500",
              },
              {
                icon: BadgeCheck,
                value: "99.9%",
                label: "Satisfaction Rate",
                color: "text-yellow-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <stat.icon
                  className={`h-8 w-8 ${stat.color} mx-auto mb-3`}
                />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
