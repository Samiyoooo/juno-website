"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative py-40 px-6 overflow-hidden bg-gradient-to-br from-[#0A4733] via-[#00986E] to-[#00B388]">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #E0C36C 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <p className="text-white font-semibold text-sm uppercase tracking-wider">
              Let&apos;s Get Started
            </p>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
        >
          Ready to start your
          <br />
          SOC 2 journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-white/80 mb-14 leading-relaxed font-light"
        >
          Book a free 20-minute readiness call
          <br />
          to see where you stand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#00986E] text-xl px-12 py-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 font-semibold group"
          >
            <Calendar className="w-6 h-6 mr-3" />
            Book My Call
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-white/80">
            <span className="text-lg">Prefer email?</span>
            <a
              href="mailto:hello@usejuno.co"
              className="flex items-center gap-2 text-white hover:text-[#E0C36C] transition-colors duration-300 text-lg font-medium group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              hello@usejuno.co
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
