"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
    goldRate: number;
}

export default function ProductCard({
    product,
    goldRate,
}: ProductCardProps) {
    console.log(product);

    const weight = Number(product.weight || 0);

    const makingPercentage = Number(
        product.making_percentage || 0
    );

    const goldValue =
        weight * goldRate;

    const makingCharges =
        (goldValue * makingPercentage) /
        100;

    const finalPrice =
        goldValue + makingCharges;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[28px] border border-white/5 bg-[#0B0E1A]"
        >
            <div className="absolute left-5 top-5 z-20 rounded-full bg-green-500/90 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                In Stock
            </div>

            <Link href={`/products/${product.id}`}>
                <div className="relative overflow-hidden">
                    <div
                        className="h-[520px] bg-cover bg-center transition duration-[2000ms] group-hover:scale-110"
                        style={{
                            backgroundImage: `url(${product.image})`,
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_60%)]" />
                    </div>
                </div>
            </Link>

            <div className="p-7">
                <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
                    {product.category}
                </p>

                <h3
                    className="text-2xl text-white"
                    style={{
                        fontFamily: "var(--font-playfair)",
                    }}
                >
                    {product.name}
                </h3>

                <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-white/60">
                    {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-white/50">
                            {product.weight}g • {product.purity}
                        </p>

                        <p className="mt-2 text-xl text-white">
                            ₹{finalPrice.toLocaleString("en-IN")}
                        </p>
                    </div>

                    <button className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] transition hover:text-[#F1D27A]">
                        Enquire
                    </button>
                </div>
            </div>
        </motion.div>
    );
}