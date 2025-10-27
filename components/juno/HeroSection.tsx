import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32 pt-40">
      {/* Gradient background - Cluely style */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAF9] via-white to-[#e8f5f1]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #00B388 0%, transparent 70%)"
        }} />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #E0C36C 0%, transparent 70%)"
        }} />


      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12">

          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fec447674f236f16331c30/a2e7daa5a_Junonobackgroundpng.png"
            alt="Juno"
            className="w-24 h-24 mx-auto mb-8 drop-shadow-lg" />

        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold text-[#0A4733] mb-8 leading-[0.95] tracking-tight">

          Turn SOC 2
          <br />
          <span className="text-[#00986E]">Into Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">Get audit-ready fast. Build trust. Close deals.
Scale with confidence.




        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

          <Button
            size="lg"
            className="bg-[#00986E] hover:bg-[#00B388] text-white text-xl px-12 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">

            Book Free Readiness Call
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-gray-500">

          Trusted by early-stage founders and growing AI startups
        </motion.p>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-20 right-10 hidden lg:block">

        <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
          <div className="text-5xl font-bold text-[#00986E] mb-1">4</div>
          <div className="text-sm text-gray-600 font-medium">weeks to<br />audit-ready</div>
        </div>
      </motion.div>
    </section>
  );
}
