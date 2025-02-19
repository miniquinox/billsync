
import { motion, AnimatePresence } from "framer-motion";
import { Database, Shield, Link2, CheckCircle2, Binary, Network } from "lucide-react";
import { useState } from "react";

export const BlockchainCard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const verificationSteps = [
    {
      id: 1,
      title: "Data Hashing",
      icon: Binary,
      description: "SHA-256 hash of receipt metadata",
      technical: "Merkle tree construction with receipt data",
      details: [
        "Receipt ID: 0x7f83b...",
        "Timestamp: 1709141482",
        "Hash: 0xd4e56740..."
      ]
    },
    {
      id: 2,
      title: "Transaction Building",
      icon: Database,
      description: "Cardano native token minting",
      technical: "Policy ID + Asset Name",
      details: [
        "Policy ID: asset1...",
        "Token Name: RCPT_0x789...",
        "Metadata: 721 Standard"
      ]
    },
    {
      id: 3,
      title: "Network Validation",
      icon: Network,
      description: "Submit to Cardano mainnet",
      technical: "Plutus V2 Script",
      details: [
        "Block: 8.947M",
        "Slot: 79184491",
        "Fee: 0.18 ADA"
      ]
    }
  ];

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-2xl backdrop-blur-sm"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {/* Background Effects */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.3 : 0.1,
        }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.3 : 0.1,
        }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="relative w-full h-full border border-white/[0.08] bg-white/[0.02] rounded-2xl p-6"
        animate={{
          borderColor: isHovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)"
        }}
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="p-2.5 rounded-lg bg-white/5 text-blue-400"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 2 }}
          >
            <Shield className="h-5 w-5" />
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold">Blockchain Verification</h3>
            <p className="text-sm text-gray-400">Immutable proof on Cardano</p>
          </div>
        </div>

        <div className="space-y-4">
          {verificationSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`relative rounded-lg p-4 cursor-pointer transition-colors ${
                activeStep === index ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className={`p-2 rounded-md ${
                    activeStep === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5'
                  }`}
                  animate={activeStep === index ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 0, 360],
                  } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <step.icon className="h-4 w-4" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{step.title}</h4>
                    <span className="text-xs text-gray-500">{step.technical}</span>
                  </div>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </div>

              <AnimatePresence>
                {activeStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-2 overflow-hidden"
                  >
                    {step.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <CheckCircle2 className="h-3 w-3 text-green-400" />
                        <span className="font-mono">{detail}</span>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 pt-3 border-t border-white/5"
                    >
                      <div className="flex items-center gap-2 text-xs text-blue-400">
                        <Link2 className="h-3 w-3" />
                        <span>View on Cardanoscan</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Network Status Indicator */}
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
          <span className="text-xs text-gray-400">Live on Mainnet</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
