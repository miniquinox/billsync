
import { ArrowRight, Receipt, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient shapes */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-billsync-accent/20 via-purple-600/10 to-transparent rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-600/20 via-billsync-accent/10 to-transparent rounded-full filter blur-[120px]" />
        
        {/* Animated floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-billsync-accent/5 rounded-full filter blur-[80px]"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/5 rounded-full filter blur-[100px]"
        />
        
        {/* Receipt-like pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24px,white_24px),linear-gradient(90deg,transparent_24px,white_24px)] bg-[length:25px_25px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-20 sm:pt-24 lg:pt-28">
        {/* Location Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-billsync-accent/10 text-billsync-accent border border-billsync-accent/20"
          >
            Based in San Francisco, CA
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </motion.span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient mb-6">
            Welcome to BillSync
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
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
          {/* Enhanced feature cards with custom illustrations */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-billsync-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Receipt className="h-12 w-12 text-billsync-accent mb-4 relative z-10" />
            <h3 className="text-lg font-semibold mb-2 relative z-10">Smart Receipt Processing</h3>
            <p className="text-gray-400 relative z-10">
              Automatically extract data from paper receipts, images, screenshots, and PDFs
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Shield className="h-12 w-12 text-billsync-accent mb-4 relative z-10" />
            <h3 className="text-lg font-semibold mb-2 relative z-10">Blockchain Security</h3>
            <p className="text-gray-400 relative z-10">
              Securely log transactions on the Cardano blockchain for immutable records
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl relative overflow-hidden group sm:col-span-2 lg:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-billsync-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Cpu className="h-12 w-12 text-billsync-accent mb-4 relative z-10" />
            <h3 className="text-lg font-semibold mb-2 relative z-10">AI-Powered Analysis</h3>
            <p className="text-gray-400 relative z-10">
              Advanced AI processing for accurate data extraction and categorization
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section with reduced spacing and microcopy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-billsync-accent text-white rounded-full font-medium hover:bg-billsync-accent/90 transition-colors duration-200 mb-4"
          >
            Get Started Now
          </motion.button>
          
          {/* Added microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-gray-400 max-w-md mx-auto"
          >
            Join forward-thinking businesses already transforming their receipt management
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-5 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
