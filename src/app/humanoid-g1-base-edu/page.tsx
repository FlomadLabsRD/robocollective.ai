import type { Metadata } from 'next';
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/sections/Footer";
import { ProductHero, ProductFeatures, ProductSpecs } from "@/components/sections/product";
import { getProductDetails } from "@/data/products";

export const metadata: Metadata = {
    title: 'Humanoid G1 (Base/EDU) | RoboCollective.ai',
    description: 'The Unitree G1 humanoid robot is a next-generation bipedal robotics platform combining affordability, agility, and advanced performance up to 43 DOF.',
};

export default function HumanoidG1Page() {
    const product = getProductDetails("g1", "Humanoid G1", "The Unitree G1 humanoid robot...", "Educational Robots", "from-emerald-400 to-teal-600");

    return (
        <main className="min-h-screen bg-black overflow-x-hidden selection:bg-emerald-500/30 selection:text-white pb-32">
            <Nav />
            <ProductHero product={product} />
            <ProductFeatures product={product} />
            <ProductSpecs product={product} />
            <Footer />
        </main>
    );
}
