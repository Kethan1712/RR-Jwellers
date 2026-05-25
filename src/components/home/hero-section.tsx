"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] pt-[160px]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />
	<div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.75)_100%)]" />

      {/* Luxury Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-center px-6 py-16 lg:px-10">
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          
          <h1
            className="leading-[0.95] text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(4rem,8vw,7rem)",
            }}
          >
            Elegance in
            <span className="block text-[#D4AF37] italic">
              Every Detail.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 lg:text-xl">
            Heritage meeting modernity. Discover timeless jewellery
            crafted with passion and designed for generations.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            
            <button className="rounded-md bg-[#D4AF37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-[#F1D27A] hover:-translate-y-1">
              Explore Collections
            </button>

            <button className="rounded-md border border-[#D4AF37]/30 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-300 hover:border-[#D4AF37] hover:bg-white/10">
              Our Story
            </button>

          </div>

        </motion.div>
      </div>
    </section>
  );
}