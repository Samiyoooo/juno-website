"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function CTASection() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
        >
          Contact Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl md:text-3xl text-white/80 mb-14 leading-relaxed font-light max-w-4xl mx-auto"
        >
          <p className="mb-4">Start your SOC 2 journey.</p>
          <p className="text-xl md:text-2xl">
            Discover how founders are turning compliance into a growth advantage — unlocking enterprise deals, investor confidence, and customer trust in weeks, not months.
          </p>
        </motion.div>

        {/* Typeform Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div 
            data-tf-live="01K8KV5ABBZH039MSAQ6ZGPS2A"
            className="w-full max-w-4xl mx-auto"
            style={{ height: '600px' }}
          />
        </motion.div>

        {/* Email Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-4 text-white/80"
        >
          <span className="text-lg">Prefer email?</span>
          <a
            href="mailto:samiyohannes@junocybersecurity.com"
            className="flex items-center gap-2 text-white hover:text-[#E0C36C] transition-colors duration-300 text-lg font-medium group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            samiyohannes@junocybersecurity.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
