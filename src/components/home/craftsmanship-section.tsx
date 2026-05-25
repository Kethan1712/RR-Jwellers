"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function CraftsmanshipSection() {
  return (
    <section className="relative overflow-hidden bg-[#070B18] py-32">
      
      {/* Ambient Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-[#D4AF37]/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            Rooted in Tradition
          </p>

          <h2
            className="max-w-xl text-5xl leading-tight text-white lg:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Crafted with
            <span className="block italic text-[#D4AF37]">
              Trust & Heritage.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Located in the heart of Vijayawada, RR Jewellers
            brings together timeless craftsmanship, personal
            service, and elegant jewellery creations designed
            for every generation.
          </p>

          {/* Features */}
          <div className="mt-12 space-y-6">
            
            {[
              "Custom Jewellery Creations",
              "Trusted Family Craftsmanship",
              "Personalized Customer Experience",
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

          {/* Location Card */}
          <div className="mt-14 rounded-[24px] border border-[#D4AF37]/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            
            <div className="flex items-start gap-4">
              
              <div className="mt-1 text-[#D4AF37]">
                <MapPin size={20} />
              </div>

              <div>
                
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Vijayawada Location
                </p>

                <p className="leading-relaxed text-white/70">
                  11-62-19, Shiva Temple St,<br />
                  1 Town, Kaleswara Rao Market,<br />
                  Tarapet, Vijayawada,<br />
                  Andhra Pradesh 520001
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              
              <button className="rounded-md bg-[#D4AF37] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-[#F1D27A] hover:-translate-y-1">
                Get Directions
              </button>

              <button className="rounded-md border border-[#D4AF37]/20 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-300 hover:border-[#D4AF37] hover:bg-white/10">
                WhatsApp Enquiry
              </button>

            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px]"
        >
          
          <div
            className="h-[720px] bg-cover bg-center transition duration-[2000ms] hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
        </motion.div>
      </div>
    </section>
  );
}