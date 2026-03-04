"use client";

import { motion, Variants } from "framer-motion";
import { Battery, Weight, Factory, ShoppingCart, Cpu, Wrench, Shield, Zap, ArrowRight, Plane, BookOpen, ConciergeBell, Truck, Activity, User, Dog, Mountain, Box } from "lucide-react";
import Image from "next/image";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
        },
    },
};

const products = [
    {
        title: "Quadruped Robots",
        description: "Agile, multi-terrain quadruped robots for exploration, inspection, and security.",
        icon: <Dog className="w-6 h-6 text-black" />,
        image: "https://www.robocollective.ai/assets/products_shop_images/Robodog_B2.png",
        microCopy: "UNITREE_B2_REV4",
        className: "bg-neutral-900 border-white/5",
        glow: "from-cyan-500/20 to-transparent",
        largeText: true,
        specs: [
            { label: "Terrain", value: "Any", icon: <Mountain className="w-4 h-4 text-neutral-400" /> },
            { label: "Agility", value: "High", icon: <Zap className="w-4 h-4 text-neutral-400" /> },
        ],
    },
    {
        title: "Humanoid Robots",
        description: "Bipedal platforms designed for general-purpose tasks and human environment interaction.",
        icon: <User className="w-6 h-6 text-black" />,
        image: "https://www.robocollective.ai/assets/products_shop_images/Humanoid_H1_1.png",
        microCopy: "BIPEDAL_CTRL_SYS",
        className: "bg-neutral-900 border-white/5",
        glow: "from-blue-500/20 to-transparent",
        specs: [
            { label: "Platform", value: "Bipedal", icon: <Activity className="w-4 h-4 text-neutral-400" /> },
        ],
    },
    {
        title: "Nimble Drones",
        description: "Flapping-wing drones, bundles, and accessories for agile aerial intelligence.",
        icon: <Plane className="w-6 h-6 text-black" />,
        image: "https://www.robocollective.ai/assets/products_shop_images/flapper-nimble-starter-kit_1.png",
        microCopy: "AERIAL_INTEL_ON",
        className: "bg-neutral-900 border-white/5",
        glow: "from-white/10 to-transparent",
        specs: [
            { label: "Flight", value: "45m", icon: <Battery className="w-4 h-4 text-neutral-400" /> },
        ],
    },
    {
        title: "Service Robots",
        description: "Hospitality, delivery, and customer-facing assistants.",
        icon: <ConciergeBell className="w-6 h-6 text-black" />,
        image: "https://www.robocollective.ai/assets/products_shop_images/Robodog__Go2Go2-W__1.png",
        microCopy: "LIDAR_NAV_OK",
        className: "bg-neutral-900 border-white/5",
        glow: "from-emerald-500/10 to-transparent",
        specs: [
            { label: "Autonomy", value: "Lvl 4", icon: <Zap className="w-4 h-4 text-neutral-400" /> },
        ],
    },
    {
        title: "AMRs & Chassis",
        description: "Autonomous mobile robots and versatile bases for heavy load transport.",
        icon: <Truck className="w-6 h-6 text-black" />,
        image: "https://www.robocollective.ai/assets/products_shop_images/Robodog_Go1_1.png",
        microCopy: "OMNI_WHEEL_DRV",
        className: "bg-neutral-900 border-white/5",
        glow: "from-orange-500/15 to-transparent",
        specs: [
            { label: "Mobility", value: "Omni", icon: <Activity className="w-4 h-4 text-neutral-400" /> },
        ],
    },
    {
        title: "Industrial Arms",
        description: "High-precision robotic arms for automation, inspection, and material handling.",
        icon: <Factory className="w-6 h-6 text-black" />,
        image: "https://www.robocollective.ai/assets/products_shop_images/Robotic_Arm__RM65-B.png",
        microCopy: "6_AXIS_PRECISION",
        className: "bg-neutral-900 border-[#00DBFF]/20",
        glow: "from-[#00DBFF]/20 to-transparent",
        specs: [
            { label: "Payload", value: "12kg+", icon: <Weight className="w-4 h-4 text-[#00DBFF]" /> },
        ],
    },
    {
        title: "Educational",
        description: "Kits and companions for classrooms and advanced robotics labs.",
        icon: <BookOpen className="w-6 h-6 text-black" />,
        image: "https://www.robocollective.ai/assets/products_shop_images/Humanoid_G1__BaseEDU__1.png",
        microCopy: "OPEN_API_READY",
        className: "bg-neutral-900 border-white/5",
        glow: "from-purple-500/15 to-transparent",
        specs: [
            { label: "API", value: "Open", icon: <Cpu className="w-4 h-4 text-neutral-400" /> },
        ],
    },
    {
        title: "Accessories",
        description: "Unique platforms, niche applications, and interchangeable sensors.",
        icon: <Wrench className="w-6 h-6 text-black" />,
        microCopy: "UNIVERSAL_MNT",
        className: "bg-neutral-900 border-white/5",
        glow: "from-white/5 to-transparent",
        specs: [
            { label: "Mount", value: "Universal", icon: <Shield className="w-4 h-4 text-neutral-400" /> },
        ],
    }
];

import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export function BentoProducts() {
    return (
        <section className="py-24 bg-black text-white px-4 md:px-8 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 md:flex md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight">
                            Browse Our <br />
                            <span className="text-[#00DBFF]">Products</span>
                        </h2>
                        <p className="text-neutral-400 text-lg">
                            Explore our interconnected hardware platforms. Designed to deploy individually or synchronize as a unified autonomous workforce. High-quality robots and accessories built for real work.
                        </p>
                    </div>
                    <a href="https://robocollective.ai/shop.html" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#00DBFF] transition-colors mt-8 md:mt-0">
                        View all products <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            initial="initial"
                            className={`
                                group relative rounded-3xl
                                border border-white/5 overflow-hidden
                                transition-all duration-500 ease-out
                                hover:border-white/20
                                flex flex-col min-h-[450px] md:min-h-[500px]
                                ${product.className}
                            `}
                        >
                            {/* Background Grid Pattern */}
                            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

                            {/* Radial Ambient Glow */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0.4 },
                                    hover: { opacity: 0.8 }
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,var(--tw-gradient-stops))] ${product.glow} pointer-events-none z-0`}
                            />

                            {/* Full Card Image Background */}
                            <motion.div
                                className="absolute inset-0 z-0 pointer-events-none"
                                variants={{
                                    initial: { scale: 1 },
                                    hover: { scale: 1.05 }
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {product.image && (
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className={`absolute w-full h-full object-contain ${product.title === "Humanoid Robots" ? "object-right-top scale-[1.25] translate-x-12 -translate-y-8" :
                                            product.title === "Quadruped Robots" ? "object-right scale-[1.1] translate-x-8 translate-y-4" :
                                                "object-right-bottom scale-[1.15] translate-x-8 translate-y-8"
                                            } mix-blend-screen opacity-90 drop-shadow-[0_0_30px_rgba(0,219,255,0.2)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_80%,transparent_100%)]`}
                                    />
                                )}
                            </motion.div>

                            {/* Layered Text Overlays (Reverted layout) */}
                            <motion.div
                                className="relative z-20 p-6 md:p-8 flex flex-col justify-between h-full"
                            >
                                <div className="flex justify-between items-start mb-2 relative">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                        <div className="text-white scale-90">
                                            {product.icon}
                                        </div>
                                    </div>

                                    {/* Active Pulse Dot - Only visible on Hover */}
                                    <motion.div
                                        className="fixed top-6 left-6 md:top-8 md:left-8 z-30"
                                        variants={{
                                            initial: { opacity: 0 },
                                            hover: { opacity: 1 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="relative">
                                            <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                                            <div className="absolute w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                    </motion.div>

                                    <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors transform group-hover:-rotate-45 duration-300" />
                                </div>

                                <div className="mt-auto w-full transition-all duration-500 rounded-2xl p-5 border border-transparent group-hover:bg-black/60 group-hover:backdrop-blur-xl group-hover:border-white/10 group-hover:shadow-2xl">
                                    <h3 className={`${spaceGrotesk.className} ${product.largeText ? 'text-2xl md:text-3xl lg:text-3xl' : 'text-xl md:text-2xl'} font-bold tracking-tight text-white drop-shadow-md`}>
                                        {product.title}
                                    </h3>

                                    {/* Revealable Content */}
                                    <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-4">
                                        <p className="text-neutral-300 text-sm mb-4 leading-relaxed drop-shadow-md">
                                            {product.description}
                                        </p>

                                        {product.specs.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                                {product.specs.map((spec, idx) => (
                                                    <div key={idx} className={`${jetbrainsMono.className} flex items-center gap-1 md:gap-2 bg-black/60 backdrop-blur-md px-2 md:px-3 py-1.5 rounded-full text-[10px] md:text-xs font-medium border border-white/10`}>
                                                        <span className="text-white">{spec.icon}</span>
                                                        <span className="text-neutral-400 hidden sm:inline">{spec.label}: </span><span className="text-white font-bold">{spec.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* View Details CTA Button - Fill on hover */}
                                        <button className={`${jetbrainsMono.className} flex w-fit items-center gap-2 px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#00DBFF] border border-[#00DBFF]/50 rounded-full group-hover:bg-[#00DBFF] group-hover:text-black group-hover:border-[#00DBFF] group-hover:shadow-[0_0_15px_rgba(0,219,255,0.4)] transition-all duration-300`}>
                                            View Details <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {product.microCopy && (
                                <div className={`${jetbrainsMono.className} absolute bottom-4 right-4 text-[9px] md:text-[10px] text-white/30 tracking-widest z-30 uppercase pointer-events-none text-right max-w-[40%]`}>
                                    {product.microCopy}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <a href="https://robocollective.ai/shop.html" className="w-full md:hidden mt-8 py-4 border border-neutral-800 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center block">
                    View all products
                </a>
            </div>
        </section >
    );
}


