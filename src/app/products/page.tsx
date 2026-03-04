import { ShopHero, Footer } from "@/components/sections";
import { ProductsGrid } from "./ProductsGrid";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All Products | RoboCollective.ai",
    description: "Explore our complete catalog of innovative robotics solutions, from educational platforms to heavy-duty industrial arms.",
};

export default function ProductsPage() {
    return (
        <main className="bg-black min-h-screen selection:bg-[#00DBFF]/30 selection:text-white pb-32">
            <ShopHero />
            <ProductsGrid />
            <Footer />
        </main>
    );
}
