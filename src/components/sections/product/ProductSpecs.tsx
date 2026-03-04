"use client";

import { motion } from "framer-motion";

import { ProductDetails } from "@/data/products";

export function ProductSpecs({ product }: { product: ProductDetails }) {
    const gradientHeaderClass = product.themeColor === "emerald" ? "from-emerald-400 to-teal-600"
        : product.themeColor === "sky" ? "from-sky-400 to-blue-600"
            : product.themeColor === "orange" ? "from-orange-400 to-red-600"
                : product.themeColor === "purple" ? "from-purple-400 to-indigo-600"
                    : "from-pink-400 to-rose-600";

    const hoverBorderClass = product.themeColor === "emerald" ? "group-hover:border-emerald-500/30"
        : product.themeColor === "sky" ? "group-hover:border-sky-500/30"
            : product.themeColor === "orange" ? "group-hover:border-orange-500/30"
                : product.themeColor === "purple" ? "group-hover:border-purple-500/30"
                    : "group-hover:border-pink-500/30";

    const hoverTextClass = product.themeColor === "emerald" ? "group-hover:text-emerald-400"
        : product.themeColor === "sky" ? "group-hover:text-sky-400"
            : product.themeColor === "orange" ? "group-hover:text-orange-400"
                : product.themeColor === "purple" ? "group-hover:text-purple-400"
                    : "group-hover:text-pink-400";

    return (
        <section id="specs" className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

                {/* Header Column */}
                <div className="w-full lg:w-1/3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">
                            Technical <br /> Specifications
                        </h2>
                        <div className={`w-16 h-[2px] bg-gradient-to-r ${gradientHeaderClass} mb-8`} />
                        <p className="text-neutral-400 leading-relaxed max-w-sm">
                            Engineered for high performance, the Unitree G1 defines the modern standard for affordable, robust humanoid research platforms.
                        </p>
                    </motion.div>
                </div>

                {/* Specs Grid */}
                <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {product.specs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative"
                            >
                                <div className={`flex flex-col gap-2 pb-4 border-b border-neutral-800 transition-colors duration-300 ${hoverBorderClass}`}>
                                    <span className={`text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 transition-colors ${hoverTextClass}`}>
                                        {spec.label}
                                    </span>
                                    <span className="text-lg font-bold text-white">
                                        {spec.value}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
