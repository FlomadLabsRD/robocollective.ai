"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, MouseEvent } from "react";

// Product images: short paths under public/images/products/ (e.g. /images/products/d1.png)
const PRODUCT_IMAGE: Record<string, string> = {
    // ── Humanoid Robots ────────────────────────────
    h1:  "/assets/products/Humanoid_G1__BaseEDU__1.png",
    h2:  "/assets/products/Humanoid_H1_1.png",
    h3:  "/assets/products/Humanoid_Oli_1.png",
    h4:  "/assets/products/Humanoid_R1.png",
    h5:  "/assets/products/Humanoid_Mini_Hi_1.png",
  
    // ── Robodogs ───────────────────────────────────
    r1:  "/assets/products/Robodog_Go1_1.png",
    r2:  "/assets/products/Robodog_B2.png",
    r3:  "/assets/products/Robodog_AlienGo_1.png",
    r4:  "/assets/products/Robodog__B2B2-W__1.png",
    r5:  "/assets/products/Robodog__Go2Go2-W__1.png",

    // ── Nimble Drones ──────────────────────────────
    d1:  "/assets/products/flapper-nimble-base-kit_1.png",
    d2:  "/assets/products/flapper-nimble-starter-kit_1.png",
    d3:  "/assets/products/flapper-nimble-lighthouse-bundle_1.png",
    d4:  "/assets/products/base-multi-kit-2x_1.png",
    d5:  "/assets/products/flapper-nimble-swarm-bundlex4_1.png",
    d6:  "/assets/products/crazyradio-2-usb-dongle_1.png",
    d7:  "/assets/products/battery-for-nimble.png",
    d8:  "/assets/products/extra-wing-set-for-nimble_1.png",
    d9:  "/assets/products/base-multi-kit-3x_1.png",
    d10: "/assets/products/lighthouse-base-station.png",
    d11: "/assets/products/lighthouse-support-kit-for-nimble_1.png",
    d12: "/assets/products/24-ghz-transmitter-with-edge-tx_1.png",
    d13: "/assets/products/frsky-receiver.png",
    d14: "/assets/products/set-of-body-shells-for-nimble.png",
  
    // ── Educational ────────────────────────────────
    g1:  "/assets/products/Humanoid_G1__BaseEDU__1.png",
    e1:  "/assets/products/Mini_p_Bipedal_Robot_1.png",
    e2:  "/assets/products/Robotic_Arm__RM65-6F.png",
  
    // ── Industrial ─────────────────────────────────
    i1:  "/assets/products/Robotic_Arm__RM75-6F.png",
    i2:  "/assets/products/Camera_RM-MVQ__1.png",
    i3:  "/assets/products/Heavy_Load_AMR_1.png",
  
    // ── Service ────────────────────────────────────
    s1:  "/assets/products/Hotel_Robot_1.png",
    s2:  "/assets/products/Delivery_Robot__closed_type__1.png",
    s3:  "/assets/products/Disinfectant_Mini_Robot_1.png",
  
    // ── Specialty ──────────────────────────────────
    sp1: "/assets/products/Tron_1_1.png",
    sp2: "/assets/products/Mars_Smartbot_1.png",
  };

// Reuse categories and catalogData from ShopCategories but flatten the data
const categories = [
    { id: "all", title: "All Products", color: "from-neutral-400 to-neutral-600" },
    { id: "humanoid", title: "Humanoid Robots", color: "from-violet-400 to-purple-600" },
    { id: "robodog", title: "Robodogs", color: "from-amber-400 to-orange-600" },
    { id: "industrial", title: "Industrial Robots", color: "from-orange-400 to-red-600" },
    { id: "service", title: "Service Robots", color: "from-purple-400 to-indigo-600" },
    { id: "specialty", title: "Specialty Robots", color: "from-pink-400 to-rose-600" },
    { id: "educational", title: "Educational Robots", color: "from-emerald-400 to-teal-600" },
    { id: "drones", title: "Nimble Drones", color: "from-sky-400 to-blue-600" },
];

const catalogData: Record<string, { id: string, title: string, products: any[] }[]> = {
    humanoid: [
        {
            id: "robots", title: "Humanoid Robots", products: [
                { id: "h1", name: "Humanoid G1 (Base/EDU)", description: "Next-generation bipedal platform with up to 43 DOF, 120 Nm joints, and modular configurations for education and research.", price: "Quote" },
                { id: "h2", name: "Humanoid H1", description: "High-performance full-size humanoid robot with 3D LiDAR, depth cameras, and whole-body motion control for advanced research.", price: "Quote" },
                { id: "h3", name: "Humanoid Oli", description: "Compact humanoid designed for human-robot interaction research and social robotics applications.", price: "Quote" },
                { id: "h4", name: "Humanoid R1", description: "Versatile humanoid platform built for manipulation tasks and real-world deployment in structured environments.", price: "Quote" },
                { id: "h5", name: "Humanoid Mini Hi", description: "Miniature humanoid robot ideal for educational settings, algorithm testing, and lightweight locomotion research.", price: "Quote" },
            ]
        },
    ],
    robodog: [
        {
            id: "robots", title: "Quadruped Robots", products: [
                { id: "r1", name: "Robodog Go1", description: "Agile quadruped robot with AI-powered navigation, ideal for education, research, and inspection tasks.", price: "Quote" },
                { id: "r2", name: "Robodog B2", description: "Industrial-grade quadruped with high payload capacity and rugged all-terrain mobility for demanding environments.", price: "Quote" },
                { id: "r3", name: "Robodog AlienGo", description: "Advanced quadruped research platform with high-DOF legs and full ROS support for locomotion experiments.", price: "Quote" },
                { id: "r4", name: "Robodog (B2/B2-W)", description: "Wheeled-leg hybrid quadruped combining the stability of wheels with the versatility of legged locomotion.", price: "Quote" },
                { id: "r5", name: "Robodog (Go2/Go2-W)", description: "Next-gen Go2 series with enhanced AI, better terrain adaptability, and optional wheeled configuration.", price: "Quote" },
            ]
        },
    ],
    drones: [
        {
            id: "kits", title: "Kits & Bundles", products: [
                { id: "d1", name: "Nimble Base Kit", description: "Flight-ready Nimble drone with charger and spare wings. Perfect for live demos, outreach, and immediate takeoff. Includes charger, spare set of wings, and protective shells; factory tuned hover with minimal setup.", price: "$350" },
                { id: "d2", name: "Nimble Starter Kit", description: "Everything in the base kit plus more wings and shells so teams can experiment longer between maintenance cycles. Extra wing set and body shells included; ready for campus demos and small swarm pilots.", price: "$500" },
                { id: "d3", name: "Nimble Lighthouse Bundle", description: "Complete bundle with Lighthouse deck and base stations for precise indoor positioning and repeatable trajectories. Includes Lighthouse deck and dual base stations; great for swarm coordination and waypoint flight.", price: "$850" }
            ]
        },
        {
            id: "fleets", title: "Scale to Fleets and Teaching Labs", products: [
                { id: "d4", name: "Base Multi Kit (2x)", description: "Two flight-ready Nimbles with spare wings, chargers, and shells so pairs can prototype quickly. Matched pair for mirrored experiments; includes shared tools for fast turnaround.", price: "$650" },
                { id: "d9", name: "Base Multi Kit (3x)", description: "Three drones, spare wings, and chargers for small teams and formation trials. Great starter pack for lab courses; ships with extra wings and shells.", price: "$950" },
                { id: "d5", name: "Nimble Swarm Bundle (x4)", description: "Four Nimbles, Lighthouse positioning gear, radios, and spares for swarm choreographies and indoor fleets. Includes Lighthouse positioning stack; four Crazyradio 2.0 links for multi-operator control.", price: "$1,200" }
            ]
        },
        {
            id: "spares", title: "Accessories and Spares", products: [
                { id: "d6", name: "Crazyradio 2.0", description: "Low-latency radio link for commanding single drones or swarms.", price: "$40" },
                { id: "d10", name: "Lighthouse Base Station", description: "Indoor positioning beacons for centimeter-level tracking." },
                { id: "d11", name: "Lighthouse Support Kit", description: "Mounts, plates, and wiring to attach Lighthouse decks securely." },
                { id: "d7", name: "Nimble Battery", description: "Stock up on extra flight packs to extend sorties.", price: "$15" },
                { id: "d8", name: "Wing Set", description: "Replacement wings to keep every airframe ready for flight.", price: "$20" },
                { id: "d12", name: "2.4 GHz Transmitter", description: "EdgeTX handheld transmitter for manual flight and training." },
                { id: "d13", name: "FrSky Receiver", description: "Bind to your preferred transmitter for manual modes." },
                { id: "d14", name: "Nimble Shells", description: "Fresh shells to refresh fleets after heavy use." }
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

// Flatten all products into a single list and attach image paths
const allProducts = Object.entries(catalogData).flatMap(([categoryId, subCategories]) =>
    subCategories.flatMap(sub =>
        sub.products.map(product => ({
            ...product,
            categoryId,
            colorClass: categories.find(c => c.id === categoryId)?.color || categories[0].color,
            subCategoryTitle: sub.title,
            image: PRODUCT_IMAGE[product.id] ?? null
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

                <div className="relative z-10 flex flex-col h-full">
                    {/* Product image - first thing on card; short paths from /images/products/ */}
                    {(() => {
                        const imgSrc = product.image || PRODUCT_IMAGE[product.id];
                        if (imgSrc) {
                            return (
                                <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden mb-4 bg-neutral-900 flex-shrink-0">
                                    <img
                                        src={imgSrc}
                                        alt={product.name}
                                        width={320}
                                        height={240}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            );
                        }
                        return (
                            <div className="flex items-start mb-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${product.colorClass} bg-opacity-10`}>
                                    <div className="w-4 h-4 rounded-full bg-white opacity-90 shadow-lg" />
                                </div>
                            </div>
                        );
                    })()}

                    <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                            {product.subCategoryTitle}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00DBFF] transition-colors duration-300">
                        {product.name}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed flex-1">
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
