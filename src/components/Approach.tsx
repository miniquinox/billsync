import { motion, useAnimation } from "framer-motion";
import { Upload, FileStack, Database, FileSpreadsheet, CheckCircle2, File } from "lucide-react";
import { useState } from "react";
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
  const workflow = [{
    title: "Receipt Upload",
    icon: Upload,
    description: "Drop any receipt into BillSync—printed copy, digital image, or PDF.",
    widget: <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="border-2 border-dashed border-billsync-accent/30 rounded-lg p-8 text-center relative z-10" onHoverStart={() => controls.start({
        scale: 1.02
      })} onHoverEnd={() => controls.start({
        scale: 1
      })} onClick={simulateUpload}>
            {isUploading ? <div className="space-y-4">
                <div className="w-full bg-billsync-accent/20 rounded-full h-2">
                  <motion.div className="bg-billsync-accent h-2 rounded-full" style={{
              width: `${uploadProgress}%`
            }} />
                </div>
                <p className="text-sm text-gray-400">Uploading... {uploadProgress}%</p>
              </div> : <>
                <Upload className="w-12 h-12 text-billsync-accent mx-auto mb-4" />
                <p className="text-sm text-gray-400 mb-2">Drag and drop your receipt here or click to upload.</p>
                <p className="text-xs text-gray-500">Supports PDF, PNG, JPEG formats</p>
              </>}
          </motion.div>
        </div>
  }, {
    title: "Data Extraction",
    icon: FileStack,
    description: "Our AI engine scans and extracts all vital information automatically.",
    widget: <div className="glass-card p-8 rounded-xl">
          <motion.div className="space-y-4">
            {[{
          label: "Product Names",
          confidence: 98
        }, {
          label: "Categories",
          confidence: 96
        }, {
          label: "Gross Amount",
          confidence: 99
        }, {
          label: "Tax Data",
          confidence: 97
        }, {
          label: "State",
          confidence: 100
        }, {
          label: "Date",
          confidence: 99
        }].map((item, index) => <motion.div key={index} initial={{
          x: -20,
          opacity: 0
        }} animate={{
          x: 0,
          opacity: 1
        }} transition={{
          delay: index * 0.1
        }} className="flex items-center justify-between p-3 neo-blur rounded-lg">
                <span className="text-sm text-gray-300">{item.label}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div initial={{
                width: 0
              }} animate={{
                width: `${item.confidence}%`
              }} transition={{
                duration: 1,
                delay: index * 0.1
              }} className="h-full bg-billsync-accent" />
                  </div>
                  <span className="text-sm font-medium text-billsync-accent">
                    {item.confidence}%
                  </span>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
  }, {
    title: "Blockchain Logging",
    icon: Database,
    description: "Immutable transaction records on the Cardano network.",
    widget: <div className="glass-card p-8 rounded-xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Live Blockchain Status</span>
              </div>
              <span className="text-xs text-gray-500">Last block: 2min ago</span>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map(block => <motion.div key={block} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: block * 0.2
          }} className="neo-blur p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Block #{block}</span>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <File className="h-3 w-3" />
                    <span>Receipt_{block}.pdf verified</span>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </div>
  }, {
    title: "Year-End Aggregation",
    icon: FileSpreadsheet,
    description: "Organized data export in Turbo Tax compatible format.",
    widget: <div className="glass-card p-8 rounded-xl">
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-medium">Annual Summary</h4>
              <span className="text-xs text-gray-500">2024</span>
            </div>
            <motion.div className="grid grid-cols-2 gap-4" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }}>
              {[{
            label: "Total Receipts",
            value: "1,234"
          }, {
            label: "Categories",
            value: "15"
          }, {
            label: "Total Amount",
            value: "$45,678"
          }, {
            label: "Tax Collected",
            value: "$3,456"
          }].map((stat, index) => <motion.div key={index} whileHover={{
            scale: 1.05
          }} className="neo-blur p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-billsync-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>)}
            </motion.div>
            <motion.button whileHover={{
          scale: 1.02
        }} className="w-full py-3 bg-billsync-accent/20 text-billsync-accent border border-billsync-accent/30 rounded-lg text-sm font-medium">
              Export to Turbo Tax CSV
            </motion.button>
          </div>
        </div>
  }];
  return <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-billsync-accent/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-600/5 rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            BillSync's Game-Changing Workflow
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workflow.map((step, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.2
        }} className="relative" onMouseEnter={() => setActiveStep(index)}>
              <div className="mb-6 flex items-start gap-4">
                <div className={`p-3 rounded-lg ${activeStep === index ? "bg-billsync-accent text-white" : "bg-billsync-accent/10 text-billsync-accent"} transition-colors duration-200`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
              {step.widget}
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Approach;