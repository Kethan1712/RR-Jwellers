"use client";

import { useEffect, useState } from "react";
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

export default function CollectionPage({
    params,
}: CollectionPageProps) {
    const [category, setCategory] =
        useState("");

    const [products, setProducts] =
        useState<any[]>([]);

    const [sortBy, setSortBy] =
        useState("Newest");

    const [selectedPurity, setSelectedPurity] =
        useState("");

    const [selectedPriceRange, setSelectedPriceRange] =
        useState("");

    useEffect(() => {
        async function loadParams() {
            const resolvedParams =
                await params;

            setCategory(
                resolvedParams.category
            );
        }

        loadParams();
    }, [params]);

    useEffect(() => {
        if (category) {
            fetchProducts();
        }
    }, [
        category,
        sortBy,
        selectedPurity,
        selectedPriceRange,
    ]);

    async function fetchProducts() {
        let query = supabase
            .from("products")
            .select("*")
            .eq("status", "Published");

        if (
            category.toLowerCase() === "gold"
        ) {
            query = query.eq(
                "metal",
                "Gold"
            );
        } else if (
            category.toLowerCase() === "silver"
        ) {
            query = query.eq(
                "metal",
                "Silver"
            );
        } else {
            query = query.ilike(
                "category",
                category
            );
        }

        if (selectedPurity) {
            query = query.eq(
                "purity",
                selectedPurity
            );
        }

        const {
            data,
            error,
        } = await query;

        if (error) {
            console.log(error);

            return;
        }

        let sortedProducts =
            data || [];

        // PRICE FILTER
        if (
            selectedPriceRange ===
            "under-50000"
        ) {
            sortedProducts =
                sortedProducts.filter(
                    (product) =>
                        Number(product.price) <
                        50000
                );
        }

        if (
            selectedPriceRange ===
            "50000-100000"
        ) {
            sortedProducts =
                sortedProducts.filter(
                    (product) =>
                        Number(product.price) >=
                        50000 &&
                        Number(product.price) <=
                        100000
                );
        }

        if (
            selectedPriceRange ===
            "above-100000"
        ) {
            sortedProducts =
                sortedProducts.filter(
                    (product) =>
                        Number(product.price) >
                        100000
                );
        }

        // SORTING
        if (
            sortBy ===
            "Price Low to High"
        ) {
            sortedProducts.sort(
                (a, b) =>
                    Number(a.price) -
                    Number(b.price)
            );
        }

        if (
            sortBy ===
            "Price High to Low"
        ) {
            sortedProducts.sort(
                (a, b) =>
                    Number(b.price) -
                    Number(a.price)
            );
        }

        setProducts(sortedProducts);
    }

    const noProducts =
        products.length === 0;

    return (
        <main className="min-h-screen bg-[#040816] text-white">
            <Navbar />

            {/* Top Space */}
            <div className="h-28" />

            {/* Collections Layout */}
            <section className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-10">

                <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[280px_1fr]">

                    {/* LEFT SIDEBAR */}
                    <aside className="hidden lg:block lg:sticky lg:top-36 lg:h-fit">

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
                                    fontFamily:
                                        "var(--font-playfair)",
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

                                <select
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value)
                                    }
                                    className="w-full border border-white/10 bg-[#0B0E1A] px-5 py-4 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                                >
                                    <option>
                                        Newest
                                    </option>

                                    <option>
                                        Price Low to High
                                    </option>

                                    <option>
                                        Price High to Low
                                    </option>
                                </select>
                            </div>

                            {/* PRICE RANGE */}
                            <div>
                                <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                                    Price Range
                                </h3>

                                <div className="space-y-4">
                                    {[
                                        {
                                            label:
                                                "Under ₹50,000",
                                            value:
                                                "under-50000",
                                        },

                                        {
                                            label:
                                                "₹50,000 - ₹1,00,000",
                                            value:
                                                "50000-100000",
                                        },

                                        {
                                            label:
                                                "Above ₹1,00,000",
                                            value:
                                                "above-100000",
                                        },
                                    ].map((item) => (
                                        <label
                                            key={item.value}
                                            className="flex items-center gap-3 text-sm text-white/70"
                                        >
                                            <input
                                                type="radio"
                                                name="priceRange"
                                                checked={
                                                    selectedPriceRange ===
                                                    item.value
                                                }
                                                onChange={() =>
                                                    setSelectedPriceRange(
                                                        item.value
                                                    )
                                                }
                                                className="h-4 w-4 accent-[#D4AF37]"
                                            />

                                            {item.label}
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
                                <button
                                    onClick={() =>
                                        setSelectedPurity("22K")
                                    }
                                    className={`px-8 py-3 text-xs uppercase tracking-[0.18em]
  ${selectedPurity === "22K"
                                            ? "border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                                            : "border border-white/10 text-white/60"
                                        }`}
                                >
                                    22K
                                </button>

                                <button
                                    onClick={() =>
                                        setSelectedPurity("18K")
                                    }
                                    className={`px-8 py-3 text-xs uppercase tracking-[0.18em]
  ${selectedPurity === "18K"
                                            ? "border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                                            : "border border-white/10 text-white/60"
                                        }`}
                                >
                                    18K
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedPurity("");
                                        setSelectedPriceRange("");
                                        setSortBy("Newest");
                                    }}
                                    className="mt-4 text-xs uppercase tracking-[0.18em] text-white/40 transition hover:text-[#D4AF37]"
                                >
                                    Reset Filters
                                </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* MOBILE FILTER BAR */}
                        <div className="flex gap-4 overflow-x-auto pb-2 lg:hidden">

                            {[
                                "All",
                                "22K",
                                "18K",
                                "Bridal",
                                "Luxury",
                                "Newest",
                            ].map((item) => (
                                <button
                                    key={item}
                                    className="whitespace-nowrap rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#D4AF37]"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                            {noProducts ? (

                                <div className="col-span-full flex min-h-[250px] items-center justify-center rounded-[32px] border border-white/5 bg-white/5">

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

                                products.map((product) => (
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