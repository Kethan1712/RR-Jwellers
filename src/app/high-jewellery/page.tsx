import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";

export default function HighJewelleryPage() {
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
        <div className="absolute inset-0 bg-black/80" />

        {/* Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-32 text-center lg:px-10">
          
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            RR Jewellers High Jewellery
          </p>

          <h1
            className="mx-auto mt-8 max-w-6xl text-6xl leading-none text-white lg:text-8xl"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            The Art Of High Jewellery
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-white/65">
            Rare gemstones, timeless artistry, and extraordinary craftsmanship brought together in creations designed for collectors and connoisseurs.
          </p>

          {/* Luxury Tags */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            
            {[
              "Rare Diamonds",
              "Emerald Couture",
              "Museum Craftsmanship",
              "Royal Heritage",
            ].map((item) => (
              <div
                key={item}
                className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#D4AF37]"
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            
            <a
              href="https://wa.me/919346466666?text=Hello%20RR%20Jewellers,%20I%20would%20like%20to%20explore%20your%20High%20Jewellery%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-[#D4AF37] px-10 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-[#F1D27A] hover:-translate-y-1"
            >
              Explore High Jewellery
            </a>
          </div>

          {/* Quote */}
          <p className="mt-20 italic text-[#D4AF37]/80">
            “Created not merely to adorn, but to endure through generations.”
          </p>
        </div>
      </section>

      {/* FEATURED MASTERPIECES */}
      <section className="border-t border-white/5 py-32">
        
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          
          <div className="mb-20 text-center">
            
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
              Signature Creations
            </p>

            <h2
              className="mt-6 text-5xl text-white"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Masterpieces Beyond Jewellery
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
                title: "Imperial Emerald Set",
              },

              {
                image:
                  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1974&auto=format&fit=crop",
                title: "Royal Diamond Necklace",
              },

              {
                image:
                  "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1974&auto=format&fit=crop",
                title: "Temple Heritage Bridal",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[36px] border border-white/5 bg-white/5"
              >
                
                <div className="overflow-hidden">
                  
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[650px] w-full object-cover transition duration-[2000ms] group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  
                  <h3
                    className="text-3xl text-white"
                    style={{
                      fontFamily:
                        "var(--font-playfair)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-white/60">
                    Crafted with extraordinary gemstones and timeless artistry.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section className="border-t border-white/5 py-32">
        
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
          
          {/* LEFT CONTENT */}
          <div>
            
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
              Timeless Heritage
            </p>

            <h2
              className="mt-6 text-6xl leading-none text-white"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Designed To Become Future Heirlooms
            </h2>

            <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/65">
              Every high jewellery creation at RR Jewellers reflects the union of heritage craftsmanship and contemporary luxury — designed for generations that appreciate rarity and timeless beauty.
            </p>

            <a
              href="https://wa.me/919346466666?text=Hello%20RR%20Jewellers,%20I%20would%20like%20to%20schedule%20a%20High%20Jewellery%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block rounded-md bg-[#D4AF37] px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-[#F1D27A]"
            >
              Schedule Private Consultation
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="overflow-hidden rounded-[40px] border border-white/5">
            
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1974&auto=format&fit=crop"
              alt="High Jewellery"
              className="h-[750px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}