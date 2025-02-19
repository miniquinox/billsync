
import { motion } from "framer-motion";
import { 
  Clock, 
  AlertCircle, 
  Receipt, 
  FileX, 
  Calculator, 
  BrainCircuit,
  Clock4,
  CheckCircle2,
  XCircle,
  BadgeAlert,
  FileWarning,
  ScanLine
} from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      title: "Time Drain",
      description: "Manual receipt processing takes 10x longer than automated solutions",
      icon: Clock,
      stats: [
        { label: "Manual Process", value: "4+ hours/week" },
        { label: "With BillSync", value: "15 mins/week" },
      ],
      color: "from-red-500/20 to-red-500/5",
      iconColor: "text-red-500",
    },
    {
      title: "Error Rates",
      description: "Human error in manual data entry leads to costly mistakes",
      icon: AlertCircle,
      stats: [
        { label: "Manual Error Rate", value: "23%" },
        { label: "BillSync Error Rate", value: "0.1%" },
      ],
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-500",
    },
    {
      title: "Lost Receipts",
      description: "Physical receipts get lost or damaged, causing tax compliance issues",
      icon: Receipt,
      stats: [
        { label: "Annual Loss Rate", value: "15%" },
        { label: "Recovery Cost", value: "High" },
      ],
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-500",
    },
    {
      title: "Data Accuracy",
      description: "Incorrect categorization and tax calculations",
      icon: Calculator,
      stats: [
        { label: "Manual Accuracy", value: "77%" },
        { label: "AI Accuracy", value: "99.9%" },
      ],
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500",
    },
  ];

  const timelineEvents = [
    {
      icon: FileX,
      title: "Receipt Collection",
      traditional: "Physical storage, easily lost",
      billsync: "Instant digital capture",
    },
    {
      icon: ScanLine,
      title: "Data Extraction",
      traditional: "Manual typing, prone to errors",
      billsync: "AI-powered automation",
    },
    {
      icon: BrainCircuit,
      title: "Processing",
      traditional: "Hours of manual work",
      billsync: "Seconds with AI",
    },
    {
      icon: FileWarning,
      title: "Verification",
      traditional: "Multiple manual checks",
      billsync: "Automated validation",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-billsync-accent/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-600/5 rounded-full filter blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-br ${challenge.color}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-white/5 ${challenge.iconColor}`}>
                    <challenge.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-gray-400">{challenge.description}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {challenge.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 neo-blur rounded-lg"
                    >
                      <span className="text-sm text-gray-300">{stat.label}</span>
                      <span className="text-sm font-medium">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Traditional vs BillSync Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-billsync-accent/10 text-billsync-accent">
                    <event.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium">{event.title}</h4>
                  <div className="space-y-3 w-full">
                    <div className="p-3 neo-blur rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-gray-400">Traditional</span>
                      </div>
                      <p className="text-sm text-gray-300">{event.traditional}</p>
                    </div>
                    <div className="p-3 neo-blur rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-400">BillSync</span>
                      </div>
                      <p className="text-sm text-gray-300">{event.billsync}</p>
                    </div>
                  </div>
                </div>
                {index < timelineEvents.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] w-32 h-px bg-gradient-to-r from-billsync-accent/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {[
            {
              icon: Clock4,
              value: "85%",
              label: "Time Saved",
              description: "Less time spent on receipt management",
            },
            {
              icon: BadgeAlert,
              value: "99.9%",
              label: "Error Reduction",
              description: "Fewer mistakes in data entry",
            },
            {
              icon: Receipt,
              value: "100%",
              label: "Digital Backup",
              description: "All receipts securely stored",
            },
            {
              icon: BrainCircuit,
              value: "24/7",
              label: "AI Processing",
              description: "Continuous automated processing",
            },
          ].map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <metric.icon className="h-8 w-8 text-billsync-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{metric.value}</h3>
              <p className="text-lg font-medium mb-1">{metric.label}</p>
              <p className="text-sm text-gray-400">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Challenges;
