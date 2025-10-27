import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Juno made SOC 2 feel achievable. We were audit-ready in 28 days.",
    author: "Sarah Chen",
    role: "Founder",
    company: "AI SaaS Platform",
    avatar: "SC",
  },
  {
    quote: "Clear, actionable, and stress-free compliance. Game changer.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "Fintech Startup",
    avatar: "MR",
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-[#F9FAF9]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-[#00986E]/10 rounded-full px-6 py-2 mb-6">
            <p className="text-[#00986E] font-semibold text-sm uppercase tracking-wider">
              Trusted by Innovators
            </p>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-[#0A4733] mb-6 leading-tight">
            Built for Founders
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            Join the startups building trust and closing enterprise deals
          </p>
        </motion.div>

        {/* Testimonials - Cluely style cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E0C36C] text-[#E0C36C]" />
                  ))}
                </div>

                <p className="text-2xl text-[#0A4733] mb-8 leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00986E] to-[#00B388] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#0A4733] text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00B388]/10 to-transparent rounded-tr-3xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats banner - Cluely style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#00986E] to-[#00B388] rounded-3xl p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">4</div>
              <div className="text-white/80 text-lg">Weeks Average</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-lg">Pass Rate</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-lg">Startups Helped</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
