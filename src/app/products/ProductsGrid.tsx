"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, MouseEvent } from "react";

// Reuse categories and catalogData from ShopCategories but flatten the data
const categories = [
    { id: "all", title: "All Products", color: "from-neutral-400 to-neutral-600" },
    { id: "drones", title: "Nimble Drones", color: "from-sky-400 to-blue-600" },
    { id: "educational", title: "Educational Robots", color: "from-emerald-400 to-teal-600" },
    { id: "industrial", title: "Industrial Robots", color: "from-orange-400 to-red-600" },
    { id: "service", title: "Service Robots", color: "from-purple-400 to-indigo-600" },
    { id: "specialty", title: "Specialty Robots", color: "from-pink-400 to-rose-600" }
];

const catalogData: Record<string, { id: string, title: string, products: any[] }[]> = {
    drones: [
        {
            id: "kits", title: "Kits & Bundles", products: [
                { id: "d1", name: "Nimble Base Kit", description: "Flight-ready Nimble drone with charger and spare wings. Perfect for live demos and immediate takeoff.", price: "$350" },
                { id: "d2", name: "Nimble Starter Kit", description: "Everything in the base kit plus more wings and shells so teams can experiment longer.", price: "$500" },
                { id: "d3", name: "Lighthouse Bundle", description: "Complete bundle with Lighthouse deck and base stations for precise indoor positioning.", price: "$850" }
            ]
        },
        {
            id: "fleets", title: "Scale to Fleets", products: [
                { id: "d4", name: "Base Multi Kit (2x)", description: "Two base kits for tandem flight experiments.", price: "$650" },
                { id: "d5", name: "Nimble Swarm Bundle (x4)", description: "Scale to teaching labs with a 4x base kit bundle and unified charging dock.", price: "$1,200" }
            ]
        },
        {
            id: "spares", title: "Spare Parts", products: [
                { id: "d6", name: "Crazyradio 2.0", description: "Low latency long range radio dongle for sending commands.", price: "$40" },
                { id: "d7", name: "Nimble Battery", description: "High capacity LiPo cell for extended flight times.", price: "$15" },
                { id: "d8", name: "Wing Set", description: "Replacement flapping wings, perfectly balanced.", price: "$20" }
            ]
        }
    ],
    educational: [
        {
            id: "robots", title: "Robots", products: [
                { id: "e1", name: "STEM Rover Starter", description: "An introductory autonomous vehicle kit that teaches basic Python programming." },
                { id: "e2", name: "Advanced Research Arm", description: "A highly articulated 6-axis robotic arm with open-source firmware for university research." },
                { id: "g1", name: "Humanoid G1 (Base/EDU)", description: "The Unitree G1 humanoid robot is a next-generation bipedal robotics platform with up to 43 DOF.", href: "/humanoid-g1-base-edu" }
            ]
        },
        {
            id: "bundles", title: "Classroom Bundles", products: [
                { id: "e3", name: "EduBot Classroom Kit (10x)", description: "A comprehensive classroom solution featuring modular robotics components for 10 groups.", price: "$2,499" },
                { id: "e4", name: "Research Lab Starter", description: "Two advanced arms and a central compute node for AI kinematics research.", price: "$6,000" }
            ]
        },
        {
            id: "spares", title: "Spare Parts", products: [
                { id: "e5", name: "Sensor Expansion Pack", description: "Lidar, ultrasonic, and infrared sensors to upgrade basic rovers.", price: "$150" }
            ]
        }
    ],
    industrial: [
        {
            id: "robots", title: "Industrial Arms & Crawlers", products: [
                { id: "i1", name: "HeavyDuty Arm X1", description: "A robust industrial robotic arm capable of precision material handling and welding.", price: "Quote" },
                { id: "i2", name: "Inspection Crawler", description: "Magnetic crawler robot equipped with high-def cameras for pipeline inspections.", price: "Quote" }
            ]
        },
        {
            id: "logistics", title: "Logistics", products: [
                { id: "i3", name: "Logistics Carrier Pro", description: "Autonomous mobile robot (AMR) designed for heavy payload transport in warehouses.", price: "Quote" }
            ]
        }
    ],
    service: [
        {
            id: "hospitality", title: "Hospitality & Delivery", products: [
                { id: "s1", name: "Hospitality Bot-S", description: "Friendly, interactive robot optimized for greeting guests and providing directions.", price: "$8,500" },
                { id: "s2", name: "Delivery Rover Waiter", description: "Multi-tiered autonomous delivery robot designed to serve food and drinks in restaurants.", price: "$6,200" }
            ]
        },
        {
            id: "sanitation", title: "Cleaning & Sanitation", products: [
                { id: "s3", name: "Sanitation Sentinel", description: "Autonomous UV-C disinfecting robot formulated to sanitize hospital rooms safely.", price: "$12,000" }
            ]
        }
    ],
    specialty: [
        {
            id: "marine", title: "Marine Exploration", products: [
                { id: "sp1", name: "AquaBot Submarine", description: "Tethered underwater ROV engineered for deep-sea exploration and marine biology.", price: "$5,400" }
            ]
        },
        {
            id: "space", title: "Extreme Environments", products: [
                { id: "sp2", name: "AstroRover Explorer", description: "Extreme-environment wheeled rover featuring radiation-hardened components.", price: "Quote" }
            ]
        }
    ]
};

// Flatten all products into a single list
const allProducts = Object.entries(catalogData).flatMap(([categoryId, subCategories]) =>
    subCategories.flatMap(sub =>
        sub.products.map(product => ({
            ...product,
            categoryId,
            colorClass: categories.find(c => c.id === categoryId)?.color || categories[0].color,
            subCategoryTitle: sub.title
        }))
    )
);

function ProductCard({ product }: { product: any }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
        if (!cardRef.current) return;
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.current = clientX - left;
        mouseY.current = clientY - top;
        cardRef.current.style.setProperty("--mouse-x", `${mouseX.current}px`);
        cardRef.current.style.setProperty("--mouse-y", `${mouseY.current}px`);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex"
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="group w-full relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0a0a0a] border border-neutral-800 p-8 hover:border-neutral-700 transition-colors duration-500 cursor-pointer"
            >
                {/* Spotlight Hover Effect */}
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.04), transparent 40%)"
                    }}
                />

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${product.colorClass} bg-opacity-10`}>
                            <div className="w-4 h-4 rounded-full bg-white opacity-90 shadow-lg" />
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                            {product.subCategoryTitle}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00DBFF] transition-colors duration-300">
                        {product.name}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        {product.description}
                    </p>
                </div>

                <div className="relative z-10 mt-8 flex justify-end">
                    <Link href={product.href || `/products/${product.id}`} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors duration-300">
                        View Details <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export function ProductsGrid() {
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter products based on selected tab
    const filteredProducts = activeFilter === "all"
        ? allProducts
        : allProducts.filter(p => p.categoryId === activeFilter);

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                        Hardware <span className="text-neutral-500">Catalog</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl">
                        Filter by category to explore specific robotics solutions ranging from educational kits to industrial arms.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="sticky top-[80px] z-40 bg-black/80 backdrop-blur-md py-4 px-6 -mx-6 md:px-12 md:-mx-12 lg:px-24 lg:-mx-24 flex flex-wrap items-center gap-3 border-b border-neutral-800 mb-8 shadow-2xl">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border
                                ${activeFilter === category.id
                                    ? `bg-white text-black border-transparent shadow-[0_0_30px_rgba(255,255,255,0.1)]`
                                    : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
                                }
                            `}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="py-20 text-center text-neutral-500">
                        No products found for this category.
                    </div>
                )}
            </div>
        </section>
    );
}
