
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Rocket, Star, ChevronRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const controls = useAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          { name, email, company }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      toast.success("Welcome to the BillSync revolution!", {
        description: "We'll be in touch soon with exclusive updates.",
      });

      // Reset form
      setEmail("");
      setName("");
      setCompany("");
    } catch (error: any) {
      console.error('Error:', error);
      toast.error("Something went wrong!", {
        description: error.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-billsync-accent/20 via-purple-600/10 to-transparent rounded-full filter blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-billsync-accent/10 text-billsync-accent border border-billsync-accent/20 mb-6"
            >
              <Star className="h-4 w-4" />
              <span>Limited Time Early Access</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Join the BillSync Revolution
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Be the first to experience effortless revenue recognition
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              "Priority Access to Features",
              "Personalized Support",
              "Shape Product Development",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 neo-blur rounded-xl"
              >
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-sm text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-billsync-accent/10 rounded-full filter blur-[50px]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/10 rounded-full filter blur-[50px]" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="text-sm text-gray-400">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-billsync-accent/50"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="company" className="text-sm text-gray-400">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-billsync-accent/50"
                    placeholder="Acme Inc"
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label htmlFor="email" className="text-sm text-gray-400">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-billsync-accent/50"
                  placeholder="john@company.com"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-billsync-accent text-white rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Rocket className="h-5 w-5" />
                    Join the Waitlist
                    <ChevronRight className="h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 text-gray-400 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span>A product by</span>
              <motion.a
                href="https://www.linkedin.com/in/miniquinox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-billsync-accent hover:text-billsync-accent/80 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Joaquin Carretero
              </motion.a>
              <span>•</span>
              <motion.a
                href="https://www.miniquinox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-billsync-accent hover:text-billsync-accent/80 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                miniquinox.com
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
