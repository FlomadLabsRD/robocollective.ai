import { Metadata } from 'next';
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/sections/Footer";
import { ProductHero } from "@/components/sections/product";
import { getProductDetails } from "@/data/products";
import { productById, categories } from "@/data/catalog";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const catalog = productById[id];
    const name = catalog?.name ?? "RoboCollective Product";
    const description = catalog?.description ?? "";
    return {
        title: `${name} | RoboCollective.ai`,
        description,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const catalog = productById[id];

    const name = catalog?.name ?? "Product " + id;
    const description = catalog?.description ?? "Advanced robotic solution designed to meet the highest industry standards.";
    const catColor = catalog?.categoryColor ?? "from-emerald-400 to-teal-600";
    const catTitle = categories.find(c => c.id === catalog?.categoryId)?.title ?? "Robotics Platform";
    const price = catalog?.price;

    const product = getProductDetails(id, name, description, catTitle, catColor, price);

    if (!product) notFound();

    const selectionClass = product.themeColor === "emerald" ? "selection:bg-emerald-500/30"
        : product.themeColor === "sky" ? "selection:bg-sky-500/30"
        : product.themeColor === "orange" ? "selection:bg-orange-500/30"
        : product.themeColor === "purple" ? "selection:bg-purple-500/30"
        : "selection:bg-pink-500/30";

    return (
        <main className={`min-h-screen bg-black overflow-x-hidden ${selectionClass} selection:text-white pb-32`}>
            <Nav />
            <ProductHero product={product} />
            <Footer />
        </main>
    );
}
