
import { ArrowRight, Receipt, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-billsync-accent/10 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full filter blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        {/* Small Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-billsync-accent/10 text-billsync-accent border border-billsync-accent/20">
            Based in San Francisco, CA
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient">
            Welcome to BillSync
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Simplifying Revenue Recognition for Everyone
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl"
          >
            <Receipt className="h-12 w-12 text-billsync-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Smart Receipt Processing</h3>
            <p className="text-gray-400">
              Automatically extract data from paper receipts, images, screenshots, and PDFs
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl"
          >
            <Shield className="h-12 w-12 text-billsync-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Blockchain Security</h3>
            <p className="text-gray-400">
              Securely log transactions on the Cardano blockchain for immutable records
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl sm:col-span-2 lg:col-span-1"
          >
            <Cpu className="h-12 w-12 text-billsync-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-400">
              Advanced AI processing for accurate data extraction and categorization
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-billsync-accent text-white rounded-full font-medium hover:bg-billsync-accent/90 transition-colors duration-200">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
