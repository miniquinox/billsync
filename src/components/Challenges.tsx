
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Receipt, Clock, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const timeData = [
  { name: "Data Entry", manual: 120, withBillSync: 15 },
  { name: "Verification", manual: 90, withBillSync: 5 },
  { name: "Organization", manual: 60, withBillSync: 2 },
  { name: "Tax Filing", manual: 180, withBillSync: 30 },
];

const errorRates = [
  { name: "Manual Process", value: 23 },
  { name: "BillSync AI", value: 0.1 },
];

const Challenges = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradients */}
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            The Challenge
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Manual receipt management is more than just a hassle—it's a significant
            business liability. Here's what we're solving:
          </p>
        </motion.div>

        {/* Main Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Time Analysis Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6 rounded-2xl"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-billsync-accent" />
                Time Spent on Receipt Management
              </CardTitle>
              <CardDescription>
                Minutes spent per 100 receipts (Manual vs BillSync)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timeData}>
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        background: "rgba(0,0,0,0.8)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    />
                    <Bar
                      dataKey="manual"
                      fill="#ef4444"
                      name="Manual Process"
                    />
                    <Bar
                      dataKey="withBillSync"
                      fill="#8A2BE2"
                      name="With BillSync"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </motion.div>

          {/* Error Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6"
          >
            {/* Error Rate Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-2xl"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-billsync-accent" />
                  Error Rates in Data Entry
                </CardTitle>
                <CardDescription>
                  Percentage of receipts with data entry errors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {errorRates.map((rate) => (
                    <div
                      key={rate.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-400">{rate.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(rate.value / 25) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="h-full bg-billsync-accent"
                          />
                        </div>
                        <span className="text-sm font-medium">{rate.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Common Issues */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-2xl"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-6 w-6 text-billsync-accent" />
                  Common Manual Processing Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Lost or damaged physical receipts",
                    "Incorrect tax calculations",
                    "Missing transaction dates",
                    "Unreadable product details",
                  ].map((issue, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 neo-blur rounded-lg"
                    >
                      <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                      <span className="text-sm text-gray-300">{issue}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Hours Saved Monthly",
              value: "40+",
              icon: Clock,
              description: "Per business on average",
            },
            {
              title: "Error Reduction",
              value: "99.9%",
              icon: CheckCircle2,
              description: "Compared to manual entry",
            },
            {
              title: "Processing Time",
              value: "< 2s",
              icon: Receipt,
              description: "Per receipt with AI",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <stat.icon className="h-8 w-8 text-billsync-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg font-medium mb-1">{stat.title}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Challenges;
