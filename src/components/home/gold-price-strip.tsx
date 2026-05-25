"use client";

import { motion } from "framer-motion";

export default function GoldPriceStrip({
  goldPrice,
  silverPrice,
}: {
  goldPrice: string;
  silverPrice: string;
}) {
  return (
    <section className="fixed top-[88px] left-0 z-40 w-full border-b border-[#D4AF37]/10 bg-[#0A0D18]/95 backdrop-blur-xl">
      
      <div className="mx-auto flex max-w-[1440px] items-center justify-center px-6 py-3 lg:px-10">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-[0.2em] lg:text-xs"
        >
          
          <span className="font-semibold text-[#D4AF37]">
            Today's Gold Rate
          </span>

          <span className="text-white/80">
            24K: ₹{goldPrice}/gm
          </span>

          <span className="text-white/80">
            22K: ₹{goldPrice}/gm
          </span>

          <span className="text-white/80">
            Silver: ₹{silverPrice}/gm
          </span>

          <span className="text-[#D4AF37]/70">
            Updated Today — 9:30 AM
          </span>

        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </section>
  );
}