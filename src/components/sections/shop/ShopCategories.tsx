"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, MouseEvent, useState, useEffect } from "react";

// Product images: short paths under public/images/products/
const PRODUCT_IMAGE: Record<string, string> = {
  d1: "/images/products/d1.png", d2: "/images/products/d2.png", d3: "/images/products/d3.png",
  d4: "/images/products/d4.png", d5: "/images/products/d5.png", d6: "/images/products/d6.png",
  d7: "/images/products/d7.png", d8: "/images/products/d8.png", d9: "/images/products/d9.png",
  d10: "/images/products/d10.png", d11: "/images/products/d11.png", d12: "/images/products/d12.png",
  d13: "/images/products/d13.png", d14: "/images/products/d14.png",
  g1: "/images/products/g1.png", e1: "/images/products/e1.png", e2: "/images/products/e2.png",
  i1: "/images/products/i1.png", i2: "/images/products/i2.png", i3: "/images/products/i3.png",
  s1: "/images/products/s1.png", s2: "/images/products/s2.png", s3: "/images/products/s3.png",
  sp1: "/images/products/sp1.png", sp2: "/images/products/sp2.png",
};

// --- Categories (Tabs) Data ---
const categories = [
    { id: "drones", title: "Nimble Drones", color: "from-sky-400 to-blue-600" },
    { id: "educational", title: "Educational Robots", color: "from-emerald-400 to-teal-600" },
    { id: "industrial", title: "Industrial Robots", color: "from-orange-400 to-red-600" },
    { id: "service", title: "Service Robots", color: "from-purple-400 to-indigo-600" },
    { id: "specialty", title: "Specialty Robots", color: "from-pink-400 to-rose-600" }
];

// --- Mock Product Data organized by Sub-categories ---
const catalogData: Record<string, { id: string, title: string, products: any[] }[]> = {
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
                { id: "d10", name: "Lighthouse Base Station", description: "Indoor positioning beacons for centimeter-level tracking.", price: "—" },
                { id: "d11", name: "Lighthouse Support Kit", description: "Mounts, plates, and wiring to attach Lighthouse decks securely.", price: "—" },
                { id: "d7", name: "Nimble Battery", description: "Stock up on extra flight packs to extend sorties.", price: "$15" },
                { id: "d8", name: "Wing Set", description: "Replacement wings to keep every airframe ready for flight.", price: "$20" },
                { id: "d12", name: "2.4 GHz Transmitter", description: "EdgeTX handheld transmitter for manual flight and training.", price: "—" },
                { id: "d13", name: "FrSky Receiver", description: "Bind to your preferred transmitter for manual modes.", price: "—" },
                { id: "d14", name: "Nimble Shells", description: "Fresh shells to refresh fleets after heavy use.", price: "—" }
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

// --- Spotlight Main Tab Component ---
function CategoryTab({
    category,
    isActive,
    onClick
}: {
    category: typeof categories[0],
    isActive: boolean,
    onClick: () => void
}) {
    const tabRef = useRef<HTMLButtonElement>(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
        if (!tabRef.current) return;
        const { left, top } = tabRef.current.getBoundingClientRect();
        mouseX.current = clientX - left;
        mouseY.current = clientY - top;
        tabRef.current.style.setProperty("--mouse-x", `${mouseX.current}px`);
        tabRef.current.style.setProperty("--mouse-y", `${mouseY.current}px`);
    };

    return (
        <motion.button
            ref={tabRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
                group relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 flex-1 min-w-[200px]
                ${isActive
                    ? 'bg-neutral-800/80 border-white/20 shadow-lg'
                    : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-600'
                }
            `}
        >
            {/* Spotlight Hover Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 40%)"
                }}
            />

            {/* Glowing Accent Line */}
            <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${category.color} ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'} transition-opacity duration-300`} />

            <div className="relative z-10 flex items-center justify-between">
                <span className={`font-bold ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'} transition-colors duration-300`}>
                    {category.title}
                </span>
            </div>
        </motion.button>
    );
}

// --- Product Card Component ---
function ProductCard({ product, colorClass }: { product: any, colorClass: string }) {
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
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0a0a0a] border border-neutral-800 p-8 h-full min-h-[320px] hover:border-neutral-700 transition-colors duration-500 cursor-pointer"
            >
                {/* Spotlight Hover Effect */}
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.04), transparent 40%)"
                    }}
                />

                <div className="relative z-10 flex flex-col h-full">
                    {PRODUCT_IMAGE[product.id] ? (
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-neutral-900 shrink-0">
                            <img
                                src={PRODUCT_IMAGE[product.id]}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ) : (
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${colorClass} bg-opacity-10`}>
                                <div className="w-4 h-4 rounded-full bg-white opacity-90 shadow-lg" />
                            </div>
                        </div>
                    )}

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

// --- Main Container ---
export function ShopCategories() {
    const [activeMainTab, setActiveMainTab] = useState(categories[0].id);
    const [activeSubTab, setActiveSubTab] = useState("");

    // Initialize sub-tab when main tab changes
    useEffect(() => {
        const subCategories = catalogData[activeMainTab];
        if (subCategories && subCategories.length > 0) {
            setActiveSubTab(subCategories[0].id);
        } else {
            setActiveSubTab(""); // Clear sub-tab if no sub-categories
        }
    }, [activeMainTab]);

    const activeMainCategoryData = categories.find(c => c.id === activeMainTab);
    const subCategories = catalogData[activeMainTab] || [];

    // Get the products for the currently selected sub-category
    const currentSubCategory = subCategories.find(sub => sub.id === activeSubTab);
    const currentProducts = currentSubCategory ? currentSubCategory.products : [];

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* Main Category Tabs Array */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4">
                    {categories.map((category) => (
                        <CategoryTab
                            key={category.id}
                            category={category}
                            isActive={activeMainTab === category.id}
                            onClick={() => setActiveMainTab(category.id)}
                        />
                    ))}
                </div>

                {/* Sub-Category section */}
                {subCategories.length > 0 && (
                    <div className="border border-neutral-800 rounded-2xl bg-neutral-900/40 p-6 backdrop-blur-sm">

                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 justify-between">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                                {activeMainCategoryData?.title}
                            </h2>

                            {/* Sub-category Pills */}
                            <div className="flex flex-wrap gap-2">
                                {subCategories.map((sub) => (
                                    <button
                                        key={sub.id}
                                        onClick={() => setActiveSubTab(sub.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300
                                            ${activeSubTab === sub.id
                                                ? 'bg-white text-black shadow-md'
                                                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                                            }
                                        `}
                                    >
                                        {sub.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Animated Products Display */}
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence mode="popLayout">
                                {currentProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={{ ...product, subCategoryTitle: currentSubCategory?.title }}
                                        colorClass={activeMainCategoryData?.color || "from-neutral-400 to-neutral-600"}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.div>

                    </div>
                )}
            </div>
        </section>
    );
}
