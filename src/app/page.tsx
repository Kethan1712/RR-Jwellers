import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/home/hero-section";
import GoldPriceStrip from "@/components/home/gold-price-strip";
import CollectionsGrid from "@/components/home/collections-grid";
import FeaturedProducts from "@/components/home/featured-products";
import BespokeSection from "@/components/home/bespoke-section";
import Testimonials from "@/components/home/testimonials";
import CraftsmanshipSection from "@/components/home/craftsmanship-section";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import Footer from "@/components/layout/footer";

import { supabase } from "@/lib/supabase";

export default async function HomePage() {
    // FETCH FEATURED PRODUCTS
    const { data: featuredProducts, error } =
        await supabase
            .from("products")
            .select("*")
            .eq("featured", true)
            .eq("status", "Published")
            .limit(6);

    // FETCH METAL PRICES
    const { data: metalPrices } =
        await supabase
            .from("metal_prices")
            .select("*")
            .limit(1)
            .single();

    if (error) {
        console.error(
            "Error fetching featured products:",
            error
        );
    }

    return (
        <main className="min-h-screen bg-[#050816] text-white">
            <Navbar />

            <GoldPriceStrip
                goldPrice={
                    metalPrices?.gold_22k || "7450"
                }
                silverPrice={
                    metalPrices?.silver || "98"
                }
            />

            <HeroSection />

            <CollectionsGrid />

            {/* FEATURED PRODUCTS */}
            <FeaturedProducts
                products={featuredProducts || []}
            />

            <BespokeSection />

            <Testimonials />

            <CraftsmanshipSection />

            <WhatsAppButton />

            <Footer />
        </main>
    );
}