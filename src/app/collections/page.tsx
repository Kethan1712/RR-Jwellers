import Link from "next/link";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";

const collections = [
  {
    title: "Gold Jewellery",
    subtitle: "Timeless Luxury",
    href: "/collections/gold",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop",
  },

  {
    title: "Bridal Collection",
    subtitle: "Crafted For Celebrations",
    href: "/collections/bridal",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
  },

  {
    title: "Rings & Pendants",
    subtitle: "Elegant Everyday Pieces",
    href: "/collections/rings",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1974&auto=format&fit=crop",
  },

  {
    title: "Silver Collection",
    subtitle: "Traditional Craftsmanship",
    href: "/collections/silver",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#040816] text-white">
      
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pt-40 pb-28">
        
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
          
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
            RR Jewellers
          </p>

          <h1
            className="max-w-4xl text-6xl leading-none text-white lg:text-8xl"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            The Collections
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">
            Explore handcrafted jewellery collections
            designed with timeless elegance, heritage
            craftsmanship, and contemporary luxury.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24">
        
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 lg:grid-cols-1 lg:px-10">
          
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group relative overflow-hidden rounded-[32px] border border-white/5"
            >
              
              {/* Image */}
              <div
                className="h-[420px] bg-cover bg-center transition duration-[2000ms] group-hover:scale-105"
                style={{
                  backgroundImage: `url(${collection.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_60%)]" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 z-10 w-full p-10">
                
                <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                  {collection.subtitle}
                </p>

                <h2
                  className="text-5xl text-white lg:text-6xl"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  {collection.title}
                </h2>

                <div className="mt-8 flex items-center gap-4">
                  
                  <div className="h-[1px] w-14 bg-[#D4AF37]" />

                  <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Explore Collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}