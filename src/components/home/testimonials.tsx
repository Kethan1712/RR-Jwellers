"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The bridal necklace crafted for my wedding felt like a timeless family heirloom.",
    name: "Ananya Reddy",
    location: "Hyderabad",
  },
  {
    quote:
      "RR Jewellers transformed our custom sketch into a masterpiece beyond imagination.",
    name: "Karthik & Meera",
    location: "Vijayawada",
  },
  {
    quote:
      "Every detail reflected elegance, craftsmanship, and genuine artistry.",
    name: "Sravani Patel",
    location: "Bengaluru",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">
      
      {/* Ambient Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-[#D4AF37]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
        
        {/* Heading */}
        <div className="mb-20 text-center">
          
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            Customer Stories
          </p>

          <h2
            className="text-5xl text-white lg:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Moments That
            <span className="block italic text-[#D4AF37]">
              Shine Forever.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[28px] border border-white/5 bg-[#0B0E1A]/90 p-10 backdrop-blur-xl transition duration-500 hover:border-[#D4AF37]/20"
            >
              
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />
              </div>

              {/* Quote */}
              <p
                className="relative z-10 text-2xl leading-relaxed text-white"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                “{item.quote}”
              </p>

              {/* Divider */}
              <div className="mt-10 h-[1px] w-16 bg-[#D4AF37]/40" />

              {/* User */}
              <div className="relative z-10 mt-8">
                
                <h3 className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-white/55">
                  {item.location}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}