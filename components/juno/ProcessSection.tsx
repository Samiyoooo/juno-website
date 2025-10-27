"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Shield, Trophy } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Assess your current controls and risks.",
    gradient: "from-[#00986E] to-[#00B388]",
  },
  {
    icon: Lightbulb,
    title: "Improve",
    description: "Design and implement the right policies.",
    gradient: "from-[#00B388] to-[#0A4733]",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Validate controls and collect evidence.",
    gradient: "from-[#0A4733] to-[#00986E]",
  },
  {
    icon: Trophy,
    title: "Succeed",
    description: "Pass the audit with confidence.",
    gradient: "from-[#E0C36C] to-[#00B388]",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#0A4733] via-[#00986E] to-[#0A4733]">
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#00B388]/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A4733]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            The Juno Way
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-light">
            From compliance confusion to audit success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-sm font-semibold text-[#E0C36C] mb-2 uppercase tracking-wider">
                  Step {index + 1}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <p className="text-xl font-semibold text-white">
              🚀 Audit-Ready Fast with Juno
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
