"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919346466666"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1,
      }}
      className="group fixed bottom-6 right-6 z-[999]"
    >
      
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-xl transition duration-500 group-hover:bg-[#D4AF37]/30" />

      {/* Main Button */}
      <div className="relative flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#0B0E1A]/90 px-5 py-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40">
        
        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37] text-black">
          <MessageCircle size={20} />
        </div>

        {/* Text */}
        <div className="hidden sm:block">
          
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
            WhatsApp
          </p>

          <p className="mt-1 text-sm text-white">
            Enquire Now
          </p>
        </div>
      </div>
    </motion.a>
  );
}