import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";

import Link from "next/link";

export default function BespokePage() {
  return (
    <main className="min-h-screen bg-[#040816] text-white">
      
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-20 px-6 py-32 lg:grid-cols-2 lg:px-10">
          
          {/* LEFT SPACE */}
          <div />

          {/* RIGHT CONTENT */}
          <div className="max-w-xl">
            
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
              RR Jewellers Atelier
            </p>

            <h1
              className="mt-8 text-6xl leading-none text-white lg:text-8xl"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Crafted Around Your Story
            </h1>

            <p className="mt-10 text-lg leading-relaxed text-white/70">
              From bridal heirlooms to contemporary masterpieces,
              every bespoke creation at RR Jewellers is handcrafted
              with timeless artistry and personal precision.
            </p>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-4">
              
              {[
                "Handcrafted",
                "Temple Inspired",
                "Bridal Couture",
                "Custom Diamond Setting",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#D4AF37]"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-14 flex flex-col gap-5 sm:flex-row">
              
              <a
                href="https://wa.me/919346466666"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#D4AF37] px-8 py-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-[#F1D27A] hover:-translate-y-1"
              >
                Begin Bespoke Journey
              </a>

              <a
  href="https://wa.me/919346466666?text=Hello%20RR%20Jewellers,%20I%20would%20like%20to%20schedule%20a%20bespoke%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-md border border-[#D4AF37]/20 bg-white/5 px-8 py-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition duration-300 hover:border-[#D4AF37] hover:bg-white/10"
>
  Schedule Consultation
</a>
            </div>

            {/* Quote */}
            <p className="mt-16 italic text-[#D4AF37]/80">
              “Designed to become tomorrow’s heirloom.”
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="border-t border-white/5 py-32">
        
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          
          <div className="mb-20 text-center">
            
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
              The Bespoke Experience
            </p>

            <h2
              className="mt-6 text-5xl text-white"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              From Vision To Masterpiece
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            
            {[
              {
                title: "Consultation",
                description:
                  "Share your inspirations, traditions, and dream design vision.",
              },

              {
                title: "Sketching",
                description:
                  "Our artisans craft elegant concepts tailored personally for you.",
              },

              {
                title: "Craftsmanship",
                description:
                  "Every detail is handcrafted with precision and timeless artistry.",
              },

              {
                title: "Final Masterpiece",
                description:
                  "Your heirloom creation is perfected and delivered with care.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="rounded-[32px] border border-white/5 bg-white/5 p-10 backdrop-blur-xl"
              >
                
                <p className="text-sm text-[#D4AF37]">
                  0{index + 1}
                </p>

                <h3
                  className="mt-6 text-3xl text-white"
                  style={{
                    fontFamily:
                      "var(--font-playfair)",
                  }}
                >
                  {step.title}
                </h3>

                <p className="mt-6 leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRIDAL SECTION */}
      <section className="border-t border-white/5 py-32">
        
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
          
          {/* Image */}
          <div className="overflow-hidden rounded-[40px] border border-white/5">
            
            <img
              src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1974&auto=format&fit=crop"
              alt="Bridal Jewellery"
              className="h-[750px] w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
              Bridal Couture
            </p>

            <h2
              className="mt-6 text-6xl leading-none text-white"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Jewellery Crafted For Generations
            </h2>

            <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/65">
              Inspired by timeless South Indian heritage and modern
              luxury craftsmanship, our bridal creations are designed
              to become treasured heirlooms for generations to come.
            </p>

            <Link
              href="/collections/bridal"
              className="mt-12 inline-block rounded-md bg-[#D4AF37] px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-[#F1D27A]"
            >
              Explore Bridal Collection
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}