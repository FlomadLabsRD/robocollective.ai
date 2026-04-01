import { notFound } from "next/navigation";
import { catalogData, categories } from "@/data/catalog";
import { getProductDetails } from "@/data/products";
import { ProductHero } from "@/components/sections/product/ProductHero";
import { ProductSpecs } from "@/components/sections/product/ProductSpecs";
import { Footer } from "@/components/sections/Footer";

// Flatten all products from the catalog for lookup
function getAllProducts() {
    return Object.entries(catalogData).flatMap(([categoryId, subs]) =>
        subs.flatMap(sub =>
            sub.products.map(p => ({
                ...p,
                categoryId,
                subCategoryTitle: sub.title,
                colorClass: categories.find(c => c.id === categoryId)?.color ?? "from-neutral-400 to-neutral-600",
                categoryTitle: categories.find(c => c.id === categoryId)?.title ?? "Products",
            }))
        )
    );
}

export async function generateStaticParams() {
    return getAllProducts().map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const all = getAllProducts();
    const product = all.find(p => p.id === id);
    if (!product) return { title: "Product Not Found | RoboCollective.ai" };
    return {
        title: `${product.name} | RoboCollective.ai`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const all = getAllProducts();
    const catalogProduct = all.find(p => p.id === id);

    if (!catalogProduct) notFound();

    const productDetails = getProductDetails(
        id,
        catalogProduct.name,
        catalogProduct.description,
        catalogProduct.categoryTitle,
        catalogProduct.colorClass,
        catalogProduct.price,
    );

    return (
        <main className="bg-black min-h-screen">
            <ProductHero product={productDetails} />
            <ProductSpecs product={productDetails} />
            <Footer />
        </main>
    );
}
