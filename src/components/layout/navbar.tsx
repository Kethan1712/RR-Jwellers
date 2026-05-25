"use client";

import Link from "next/link";

const navItems = [
  {
    label: "Collections",
    href: "/collections",
  },

  {
    label: "High Jewellery",
    href: "/high-jewellery",
  },

  {
    label: "Bespoke",
    href: "/bespoke",
  },

  {
    label: "Heritage",
    href: "/heritage",
  },
];
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#D4AF37]/10 bg-[#050816]/60 shadow-[0_4px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-bold text-[#D4AF37]"
          style={{
            fontFamily: "var(--font-playfair)",
          }}
        >
          RR Jewellers
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text-sm uppercase tracking-[0.18em] text-white/80 transition hover:text-[#D4AF37]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <button className="rounded-md bg-[#D4AF37] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#F1D27A]">
          Enquire
        </button>
      </div>
    </header>
  );
}