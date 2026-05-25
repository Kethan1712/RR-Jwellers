import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";

import ProductCard from "@/components/products/product-card";

import { products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

 const { data: product } =
  await supabase
    .from("products")
    .select("*")
    .eq("id", slug)
    .single();

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <main className="min-h-screen bg-[#040816] text-white">
      
      <Navbar />

      {/* Top Spacing */}
      <div className="h-28" />

      {/* Product Section */}
      <section className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10">
        
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          
          {/* LEFT IMAGES */}
          <div>
            
            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-[32px] border border-white/5">
              
              <div
                className="h-[640px] bg-cover bg-center transition duration-[2500ms] group-hover:scale-105"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
            </div>

            {/* Thumbnail Gallery */}
<div className="mt-5 flex gap-4">
  {[product.image].map((image, index) => (
    <div
      key={index}
      className="group overflow-hidden rounded-[18px] border border-[#D4AF37]/20 transition hover:border-[#D4AF37]/40"
    >
      <img
        src={image}
        alt={product.name}
        className="h-28 w-28 object-cover transition duration-700 group-hover:scale-105"
      />
    </div>
  ))}
</div>
                  
                            </div>

          {/* RIGHT CONTENT */}
          <div className="lg:sticky lg:top-36 lg:h-fit">
            
            {/* Category */}
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
              RR Jewellers Collection
            </p>

            {/* Title */}
            <h1
              className="max-w-xl text-5xl leading-none text-white lg:text-6xl"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              {product.name}
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">
              {product.description}
            </p>

            {/* Product Specs */}
            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-b border-white/5 py-10">
              
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Purity
                </p>

                <p className="mt-3 text-xl text-white">
                  {product.purity}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Weight
                </p>

                <p className="mt-3 text-xl text-white">
                  {product.weight}g
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Metal
                </p>

                <p className="mt-3 capitalize text-xl text-white">
                  {product.metal}
                </p>
              </div>

                          <div>
                              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                                  Availability
                              </p>

                              <p className="mt-3 text-xl text-white">
                                  In Stock
                              </p>
                          </div>
            </div>

            {/* Price */}
            <div className="mt-12">
              
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Approximate Price
              </p>

              <h2 className="mt-4 text-5xl text-white">
                ₹{product.price.toLocaleString("en-IN")}
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="mt-14 flex flex-col gap-5 sm:flex-row">
              
              <a
                href={`https://wa.me/919346466666?text=I'm interested in ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#D4AF37] px-8 py-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-[#F1D27A] hover:-translate-y-1"
              >
                Enquire on WhatsApp
              </a>

              <button className="rounded-md border border-[#D4AF37]/20 bg-white/5 px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition duration-300 hover:border-[#D4AF37] hover:bg-white/10">
                Request Custom Design
              </button>
            </div>

            {/* Trust Notes */}
            <div className="mt-14 space-y-5">
              
              {[
                "BIS Hallmarked Jewellery",
                "Trusted Craftsmanship",
                "Custom Jewellery Available",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  
                  <div className="h-[1px] w-12 bg-[#D4AF37]/50" />

                  <p className="text-sm uppercase tracking-[0.18em] text-white/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Luxury Information Sections */}
            <div className="mt-16 divide-y divide-white/5 border-t border-white/5">
              
              {[
                {
                  title: "Description & Craftsmanship",
                  content:
                    "Every RR Jewellers creation is handcrafted with precision and inspired by timeless South Indian artistry.",
                },

                {
                  title: "Hallmark Assurance",
                  content:
                    "All jewellery pieces are BIS hallmarked and crafted with trusted purity standards.",
                },

                {
                  title: "Jewellery Care",
                  content:
                    "Store in a soft fabric box and avoid exposure to perfumes, chemicals, and moisture.",
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="py-6"
                >
                  
                  <h3 className="text-lg text-white">
                    {section.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-white/5 py-28">
          
          <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
            
            <div className="mb-16">
              
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                More From This Collection
              </p>

              <h2
                className="text-5xl text-white"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                You May Also Like
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
              
              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <WhatsAppButton />
    </main>
  );
}