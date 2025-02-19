import { motion, useAnimation } from "framer-motion";
import { Upload, FileStack, Database, FileSpreadsheet, CheckCircle2, File, Banknote, Calculator, Receipt, CalendarDays, FileText, DollarSign, BarChart4, Download } from "lucide-react";
import { useState } from "react";
import { BlockchainCard } from "./blockchain/BlockchainCard";

const Approach = () => {
  const [activeStep, setActiveStep] = useState(0);
  const controls = useAnimation();

  // Mock file upload progress
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const sampleReceipts = [{
    name: "Office Supplies",
    amount: 234.56,
    date: "2024-03-15"
  }, {
    name: "Client Lunch",
    amount: 89.99,
    date: "2024-03-14"
  }, {
    name: "Software License",
    amount: 499.99,
    date: "2024-03-13"
  }];

  const workflow = [{
    title: "Smart Receipt Upload",
    icon: Upload,
    description: "Instantly digitize any receipt—printed, digital image, or PDF format.",
    widget: <div className="glass-card p-6 rounded-xl relative overflow-hidden group py-[36px]">
      <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} onHoverStart={() => controls.start({
        scale: 1.02
      })} onHoverEnd={() => controls.start({
        scale: 1
      })} onClick={simulateUpload} className="border-2 border-dashed border-billsync-accent/30 rounded-lg p-6 text-center relative z-10 py-[43px]">
        {isUploading ? <div className="space-y-4">
            <div className="w-full bg-billsync-accent/20 rounded-full h-2">
              <motion.div className="bg-billsync-accent h-2 rounded-full" style={{
              width: `${uploadProgress}%`
            }} />
            </div>
            <p className="text-sm text-gray-400">Processing... {uploadProgress}%</p>
            {uploadProgress === 100 && <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} className="flex items-center justify-center gap-2 text-green-500">
                <CheckCircle2 className="h-5 w-5" />
                <span>Upload Complete!</span>
              </motion.div>}
          </div> : <div className="space-y-4 py-[25px]">
            <Upload className="w-12 h-12 text-billsync-accent mx-auto mb-4" />
            <p className="text-sm text-gray-400 mb-2">
              Drop your receipt here or click to upload
            </p>
            <div className="flex justify-center gap-3">
              {['.pdf', '.png', '.jpg'].map((format, index) => <span key={index} className="text-xs px-2 py-1 rounded-full bg-billsync-accent/10 text-billsync-accent">
                  {format}
                </span>)}
            </div>
          </div>}
      </motion.div>
    </div>
  }, {
    title: "AI-Powered Data Extraction",
    icon: FileStack,
    description: "Advanced AI automatically extracts and categorizes receipt data.",
    widget: <div className="glass-card p-6 rounded-xl">
      <div className="space-y-4">
        {sampleReceipts.map((receipt, index) => <motion.div key={index} initial={{
          x: -20,
          opacity: 0
        }} animate={{
          x: 0,
          opacity: 1
        }} transition={{
          delay: index * 0.2
        }} className="neo-blur p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Receipt className="h-5 w-5 text-billsync-accent" />
                <span className="font-medium">{receipt.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Banknote className="h-4 w-4 text-green-500" />
                <span>${receipt.amount}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{receipt.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                <span>Tax: ${(receipt.amount * 0.08).toFixed(2)}</span>
              </div>
            </div>
          </motion.div>)}
      </div>
    </div>
  }, {
    title: "Blockchain Verification",
    icon: Database,
    description: "Immutable transaction records on the Cardano network.",
    widget: <BlockchainCard />
  }, {
    title: "Tax-Ready Export",
    icon: FileSpreadsheet,
    description: "One-click export in Turbo Tax compatible format.",
    widget: <div className="glass-card p-6 rounded-xl">
      <div className="space-y-4">
        {/* Header Row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <motion.div
              className="p-2.5 rounded-lg bg-white/5 text-green-400"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FileText className="h-5 w-5" />
            </motion.div>
            <div>
              <h4 className="font-semibold">TurboTax Integration</h4>
              <p className="text-sm text-gray-400">Auto-sync enabled</p>
            </div>
          </div>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
            Ready to Export
          </span>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-4 gap-2">
          {[{
            value: "1,234",
            label: "Receipts",
            icon: Receipt,
            color: "text-blue-400"
          }, {
            value: "15",
            label: "Categories",
            icon: FileText,
            color: "text-purple-400"
          }, {
            value: "$45,678",
            label: "Total",
            icon: DollarSign,
            color: "text-green-400"
          }, {
            value: "$3,456",
            label: "Tax",
            icon: Calculator,
            color: "text-orange-400"
          }].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="neo-blur p-2 rounded-lg text-center"
            >
              <div className={`${stat.color} mb-1 flex justify-center`}>
                <stat.icon className="h-4 w-4" />
              </div>
              <div className="text-sm font-bold text-billsync-accent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Monthly Overview & Actions */}
        <div className="grid grid-cols-2 gap-4">
          {/* Monthly Overview */}
          <div className="neo-blur p-4 rounded-lg space-y-3">
            <div className="flex justify-between items-center mb-1">
              <h5 className="text-sm font-medium">Monthly Overview</h5>
              <BarChart4 className="h-4 w-4 text-gray-400" />
            </div>
            {[
              { month: "Mar", amount: 12456, percentage: 80 },
              { month: "Feb", amount: 8234, percentage: 60 },
              { month: "Jan", amount: 6123, percentage: 40 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-1"
              >
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">{item.month}</span>
                  <span className="text-billsync-accent">${item.amount.toLocaleString()}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1">
                  <motion.div
                    className="bg-billsync-accent h-1 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Export Actions */}
          <div className="neo-blur p-4 rounded-lg space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full py-2 bg-billsync-accent text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export to TurboTax
            </motion.button>
            <div className="grid grid-cols-2 gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="py-2 bg-white/5 text-gray-400 rounded-lg text-xs font-medium"
              >
                Preview Data
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="py-2 bg-white/5 text-gray-400 rounded-lg text-xs font-medium"
              >
                Schedule Export
              </motion.button>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <motion.div 
          className="absolute bottom-4 right-4 flex items-center gap-2"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs text-gray-400">TurboTax Connected</span>
        </motion.div>
      </div>
    </div>
  }];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-billsync-accent/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-600/5 rounded-full filter blur-[120px]" />
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
            Our Approach
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A Seamless Four-Step Process
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workflow.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="mb-6 flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  activeStep === index
                    ? "bg-billsync-accent text-white"
                    : "bg-billsync-accent/10 text-billsync-accent"
                } transition-colors duration-200`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
              {step.widget}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
