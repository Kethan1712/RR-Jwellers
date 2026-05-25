"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function BespokeSection() {
  return (
    <section className="relative overflow-hidden bg-[#070B18] py-32">
      
      {/* Ambient Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-[#D4AF37]/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px]"
        >
          
          <div
            className="h-[700px] bg-cover bg-center transition duration-[2000ms] hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            Bespoke Creations
          </p>

          <h2
            className="max-w-xl text-5xl leading-tight text-white lg:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Craft Your Own
            <span className="block italic text-[#D4AF37]">
              Masterpiece.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            From your imagination to a timeless heirloom —
            our artisans collaborate with you to create jewellery
            that reflects your story, tradition, and elegance.
          </p>


          {/* Features */}
          <div className="mt-12 space-y-6">
            
            {[
              "Personal Design Consultation",
              "Handcrafted By Master Artisans",
              "Custom Gold & Diamond Creations",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4"
              >
                
                <div className="h-[1px] w-12 bg-[#D4AF37]/50" />

                <p className="text-sm uppercase tracking-[0.18em] text-white/80">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col gap-5 sm:flex-row">
            
                      <Link
                          href="/bespoke"
                          className="rounded-md bg-[#D4AF37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-[#F1D27A] hover:-translate-y-1"
                      >
                          Start Your Design
                      </Link>

            <button className="rounded-md border border-[#D4AF37]/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-300 hover:border-[#D4AF37] hover:bg-white/10">
              Learn More
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}