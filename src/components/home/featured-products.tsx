"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  weight: number;
  image: string;
  slug?: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({
  products,
}: FeaturedProductsProps) {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">
      
      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
        
        {/* Heading */}
        <div className="mb-20 flex items-end justify-between">
          
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              Featured Collection
            </p>

            <h2
              className="text-5xl text-white lg:text-6xl"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Signature Pieces
            </h2>
          </div>

          <Link
            href="/collections"
            className="hidden border border-[#D4AF37]/20 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:border-[#D4AF37] hover:bg-white/5 lg:block"
          >
            View All
          </Link>
        </div>

        {/* Empty State */}
        {products.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center rounded-[32px] border border-white/5 bg-white/5">
            
            <div className="text-center">
              
              <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                RR Jewellers
              </p>

              <h3
                className="mt-4 text-4xl text-white"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                Coming Soon
              </h3>

              <p className="mt-5 text-white/60">
                Featured products will be added soon.
              </p>
            </div>
          </div>
        ) : (
          /* Product Grid */
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[28px] border border-white/5 bg-[#0B0E1A]"
              >
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  
                  <div
                    className="h-[520px] bg-cover bg-center transition duration-[2000ms] group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_60%)]" />
                  </div>

                  {/* Floating Button */}
                  <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 translate-y-10 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    
                    <a
                      href={`https://wa.me/919346466666?text=I'm interested in ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-md bg-[#D4AF37] py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#F1D27A]"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  
                  <div className="mb-4 flex items-center justify-between">
                    
                    <h3
                      className="text-2xl text-white"
                      style={{
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      {product.name}
                    </h3>

                    <span className="text-sm text-[#D4AF37]">
                      {product.weight}g
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    
                    <p className="text-lg text-white/75">
                      ₹
                      {product.price.toLocaleString(
                        "en-IN"
                      )}
                    </p>

                    <Link
                      href={`/products/${
                        product.slug || product.id
                      }`}
                      className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] transition hover:text-[#F1D27A]"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}