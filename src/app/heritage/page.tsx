import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";

export default function HeritagePage() {
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
              "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1974&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 text-center lg:px-10">
          
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            The RR Jewellers Legacy
          </p>

          <h1
            className="mx-auto mt-8 max-w-5xl text-6xl leading-none text-white lg:text-8xl"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            A Story Crafted Across Generations
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-white/65">
            Built on timeless craftsmanship, family values, and decades of trust,
            RR Jewellers represents a journey where heritage and artistry continue
            to shine through every creation.
          </p>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="border-t border-white/5 py-32">
        
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          
          <div className="space-y-24">
            
            {/* 1990s */}
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
              
              {/* Image */}
              <div className="overflow-hidden rounded-[36px] border border-white/5">
                
                <img
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop"
                  alt="Craftsmanship"
                  className="h-[650px] w-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                
                <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                  Mid 1990s
                </p>

                <h2
                  className="mt-6 text-5xl leading-none text-white"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  Learning The Art Of Jewellery
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/65">
                  In the mid 1990s, the journey began under the guidance of his grandfather
                  at Srimanarayana Jewellers — where craftsmanship, trust, and dedication
                  to fine jewellery became more than a profession, but a lifelong passion.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/65">
                  Those early years shaped the foundation of artistry and customer relationships
                  that would later define RR Jewellers.
                </p>
              </div>
            </div>

            {/* Early 2000s */}
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
              
              {/* Content */}
              <div className="order-2 lg:order-1">
                
                <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                  Early 2000s
                </p>

                <h2
                  className="mt-6 text-5xl leading-none text-white"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  The Birth Of RR Jewellers
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/65">
                  Carrying forward years of experience and craftsmanship,
                  a new chapter began with the establishment of RR Jewellers —
                  a brand built on heritage, relationships, and timeless jewellery artistry.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/65">
                  The name “RR” was chosen with deep family significance,
                  reflecting gratitude, respect, and the values that shaped the journey.
                </p>
              </div>

              {/* Image */}
              <div className="order-1 overflow-hidden rounded-[36px] border border-white/5 lg:order-2">
                
                <img
                  src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1974&auto=format&fit=crop"
                  alt="RR Jewellers"
                  className="h-[650px] w-full object-cover"
                />
              </div>
            </div>

            {/* Today */}
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
              
              {/* Image */}
              <div className="overflow-hidden rounded-[36px] border border-white/5">
                
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1974&auto=format&fit=crop"
                  alt="Legacy"
                  className="h-[650px] w-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                
                <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                  Today
                </p>

                <h2
                  className="mt-6 text-5xl leading-none text-white"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  Continuing A Timeless Legacy
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/65">
                  Today, RR Jewellers continues to blend heritage craftsmanship
                  with contemporary luxury — creating jewellery that carries emotion,
                  tradition, and timeless beauty across generations.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/65">
                  Every creation reflects decades of trust, artistry, and a commitment
                  to preserving the legacy that began many years ago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL QUOTE */}
      <section className="border-t border-white/5 py-28">
        
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          
          <p
            className="text-4xl leading-relaxed text-white lg:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            “Jewellery is not merely ornamentation —
            it is memory, emotion, and legacy preserved through generations.”
          </p>

          <div className="mx-auto mt-12 h-[2px] w-24 bg-[#D4AF37]" />
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}