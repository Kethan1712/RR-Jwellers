import { notFound } from "next/navigation";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";

import ProductCard from "@/components/products/product-card";

import { supabase } from "@/lib/supabase";

interface CollectionPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CollectionPage({
  params,
}: CollectionPageProps) {
  const { category } = await params;

  const { data: filteredProducts, error } = await supabase
    .from("products")
    .select("*")
    .eq("status", "Published")
      .or(
          `category.ilike.${category},purity.ilike.${category}`
      )
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
  }

  const noProducts =
  !filteredProducts ||
  filteredProducts.length === 0;

  return (
    <main className="min-h-screen bg-[#040816] text-white">
      <Navbar />

      {/* Top Space */}
      <div className="h-28" />

      {/* Collections Layout */}
      <section className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-10">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[280px_1fr]">
          
          {/* LEFT SIDEBAR */}
          <aside className="sticky top-36 h-fit">
            
            {/* Breadcrumb */}
            <div className="mb-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/40">
              <span>Home</span>

              <span>›</span>

              <span>Collections</span>

              <span>›</span>

              <span className="text-[#D4AF37]">
                The {category} Collection
              </span>
            </div>

            {/* Title */}
            <div className="mb-16">
              <h1
                className="text-5xl leading-none capitalize text-white"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                The {category} Collection
              </h1>

              <p className="mt-5 text-2xl text-[#D4AF37]">
                స్వర్ణ సంకలనం
              </p>

              <div className="mt-8 h-[2px] w-20 bg-[#D4AF37]" />
            </div>

            {/* FILTERS */}
            <div className="space-y-14">
              
              {/* SORT */}
              <div>
                <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Sort By
                </h3>

                <select className="w-full border border-white/10 bg-[#0B0E1A] px-5 py-4 text-sm text-white outline-none transition focus:border-[#D4AF37]">
                  <option>Newest Arrivals</option>

                  <option>Price: Low to High</option>

                  <option>Price: High to Low</option>
                </select>
              </div>

              {/* PRICE RANGE */}
              <div>
                <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Price Range
                </h3>

                <div className="space-y-4">
                  {[
                    "Under ₹50,000",
                    "₹50,000 - ₹1,00,000",
                    "Above ₹1,00,000",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 border border-white/20 bg-transparent accent-[#D4AF37]"
                      />

                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* PURITY */}
              <div>
                <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Purity
                </h3>

                <div className="flex gap-4">
                  <button className="border border-[#D4AF37] bg-[#D4AF37]/10 px-8 py-3 text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
                    22K
                  </button>

                  <button className="border border-white/10 px-8 py-3 text-xs uppercase tracking-[0.18em] text-white/60 transition hover:border-[#D4AF37]/30 hover:text-[#D4AF37]">
                    18K
                  </button>
                </div>
              </div>

              {/* OCCASION */}
              <div>
                <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Occasion
                </h3>

                <div className="space-y-4">
                  {[
                    "Bridal",
                    "Everyday Luxury",
                    "Festive",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-[#D4AF37]"
                      />

                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div>
            
            {/* Product Grid */}
<div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
  
  {noProducts ? (
    
    <div className="col-span-full flex min-h-[400px] items-center justify-center rounded-[32px] border border-white/5 bg-white/5">
      
      <div className="text-center">
        
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
          RR Jewellers
        </p>

        <h2
          className="mt-4 text-4xl text-white"
          style={{
            fontFamily:
              "var(--font-playfair)",
          }}
        >
          Coming Soon
        </h2>

        <p className="mt-5 text-white/60">
          Products will be added to this
          collection soon.
        </p>
      </div>
    </div>

  ) : (

    filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))

  )}
</div>
            {/* Pagination */}
            <div className="mt-24 flex items-center justify-center gap-8 border-t border-white/5 pt-12 text-sm uppercase tracking-[0.18em] text-white/50">
              <button className="transition hover:text-[#D4AF37]">
                ← Previous
              </button>

              <button className="text-[#D4AF37]">
                01
              </button>

              <button className="transition hover:text-[#D4AF37]">
                02
              </button>

              <button className="transition hover:text-[#D4AF37]">
                03
              </button>

              <button className="transition hover:text-[#D4AF37]">
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}