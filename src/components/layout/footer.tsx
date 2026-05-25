import Link from "next/link";

const collections = [
  "Gold Jewellery",
  "Silver Jewellery",
  "Bridal Collection",
  "Custom Creations",
];

const quickLinks = [
  "Home",
  "Collections",
  "Bespoke",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D4AF37]/10 bg-[#04060F] pt-24">
      
      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 bg-[#D4AF37]/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 pb-16 lg:grid-cols-4 lg:px-10">
        
        {/* Brand */}
        <div>
          
          <h2
            className="text-4xl text-[#D4AF37]"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            RR Jewellers
          </h2>

          <p className="mt-6 max-w-sm leading-relaxed text-white/65">
            Timeless jewellery crafted with trust,
            elegance, and personal craftsmanship
            in the heart of Vijayawada.
          </p>

          <div className="mt-8">
            
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              Location
            </p>

            <p className="mt-3 leading-relaxed text-white/60">
              11-62-19, Shiva Temple St,<br />
              Tarapet, Vijayawada,<br />
              Andhra Pradesh 520001
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          
          <h3 className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
            Quick Links
          </h3>

          <div className="mt-8 flex flex-col gap-5">
            
            {quickLinks.map((item) => (
              <Link
                key={item}
                href="/"
                className="text-white/65 transition duration-300 hover:text-[#D4AF37]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div>
          
          <h3 className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
            Collections
          </h3>

          <div className="mt-8 flex flex-col gap-5">
            
            {collections.map((item) => (
              <Link
                key={item}
                href="/"
                className="text-white/65 transition duration-300 hover:text-[#D4AF37]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          
          <h3 className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
            Contact
          </h3>

          <div className="mt-8 space-y-5">
            
            <div>
              <p className="text-sm text-white/40">
                WhatsApp
              </p>

              <p className="mt-2 text-white/75">
                +91 9346466666
              </p>
            </div>

            <div>
              <p className="text-sm text-white/40">
                Email
              </p>

              <p className="mt-2 text-white/75">
               ananadgold@gmail.com              </p>
            </div>

            <div>
              <p className="text-sm text-white/40">
                Timings
              </p>

              <p className="mt-2 text-white/75">
                Mon - Sat • 10 AM - 9 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/5">
        
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/40 lg:flex-row lg:px-10">
          
          <p>
            © 2026 RR Jewellers. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            
            <span>BIS Hallmarked Jewellery</span>

            <span className="h-1 w-1 rounded-full bg-[#D4AF37]/40" />

            <span>Crafted with Trust</span>
          </div>
        </div>
      </div>
    </footer>
  );
}