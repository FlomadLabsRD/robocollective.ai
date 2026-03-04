import { Metadata } from 'next';
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/sections/Footer";
import { ProductHero, ProductFeatures, ProductSpecs } from "@/components/sections/product";
import { getProductDetails, productsData } from "@/data/products";
import { notFound } from "next/navigation";

// Since we have a mock products list, we'll try to find the category to pass fallback values
const fallbackCategories = [
    { id: "drones", title: "Nimble Drones", color: "from-sky-400 to-blue-600" },
    { id: "educational", title: "Educational Robots", color: "from-emerald-400 to-teal-600" },
    { id: "industrial", title: "Industrial Robots", color: "from-orange-400 to-red-600" },
    { id: "service", title: "Service Robots", color: "from-purple-400 to-indigo-600" },
    { id: "specialty", title: "Specialty Robots", color: "from-pink-400 to-rose-600" }
];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const product = getProductDetails(id, "RoboCollective Product", "", "Robotics", "from-emerald-400 to-teal-600");
    return {
        title: `${product.name} | RoboCollective.ai`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Helper to get category text for dynamic products
    let catTitle = "Robotics Platform";
    let catColor = "from-emerald-400 to-teal-600";
    let name = "Product " + id;
    let description = "Advanced robotic solution designed to meet the highest industry standards.";

    // We could extract real data from ShopCategories if we exported it, but getProductDetails will fall back
    const product = getProductDetails(id, name, description, catTitle, catColor);

    if (!product) {
        notFound();
    }

    // Dynamic selection color based on theme
    const selectionClass = product.themeColor === "emerald" ? "selection:bg-emerald-500/30"
        : product.themeColor === "sky" ? "selection:bg-sky-500/30"
            : product.themeColor === "orange" ? "selection:bg-orange-500/30"
                : product.themeColor === "purple" ? "selection:bg-purple-500/30"
                    : "selection:bg-pink-500/30";

    return (
        <main className={`min-h-screen bg-black overflow-x-hidden ${selectionClass} selection:text-white pb-32`}>
            <Nav />
            <ProductHero product={product} />
            <ProductFeatures product={product} />
            <ProductSpecs product={product} />
            <Footer />
        </main>
    );
}
