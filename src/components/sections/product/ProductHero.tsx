"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ProductDetails } from "@/data/products";

export function ProductHero({ product }: { product: ProductDetails }) {
    const [isHovered, setIsHovered] = useState(false);

    // Dynamic theme colors
    const themeShadowClass = product.themeColor === "emerald" ? "bg-emerald-500/10"
        : product.themeColor === "sky" ? "bg-sky-500/10"
            : product.themeColor === "orange" ? "bg-orange-500/10"
                : product.themeColor === "purple" ? "bg-purple-500/10"
                    : product.themeColor === "pink" ? "bg-pink-500/10" : "bg-emerald-500/10";

    const themeTextClass = product.themeColor === "emerald" ? "text-emerald-400"
        : product.themeColor === "sky" ? "text-sky-400"
            : product.themeColor === "orange" ? "text-orange-400"
                : product.themeColor === "purple" ? "text-purple-400"
                    : product.themeColor === "pink" ? "text-pink-400" : "text-emerald-400";

    const badgeBorderClass = product.themeColor === "emerald" ? "border-emerald-500/30"
        : product.themeColor === "sky" ? "border-sky-500/30"
            : product.themeColor === "orange" ? "border-orange-500/30"
                : product.themeColor === "purple" ? "border-purple-500/30"
                    : product.themeColor === "pink" ? "border-pink-500/30" : "border-emerald-500/30";

    const gradientTextClass = product.themeColor === "emerald" ? "from-emerald-400 to-teal-600"
        : product.themeColor === "sky" ? "from-sky-400 to-blue-600"
            : product.themeColor === "orange" ? "from-orange-400 to-red-600"
                : product.themeColor === "purple" ? "from-purple-400 to-indigo-600"
                    : product.themeColor === "pink" ? "from-pink-400 to-rose-600" : "from-emerald-400 to-teal-600";


    return (
        <section className="relative w-full pt-40 pb-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden flex flex-col justify-end min-h-[60vh]">

            {/* Background Effects */}
            <div className={`absolute inset-0 z-0`}>
                <div className={`absolute top-1/4 right-1/4 w-[800px] h-[800px] ${themeShadowClass} rounded-full blur-[120px] opacity-40 mix-blend-screen`} />
                <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-neutral-600/10 rounded-full blur-[100px] opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay"></div>

                {/* Simulated 3D Environment grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                        transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(2)',
                        transformOrigin: 'bottom'
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Back Navigation */}
                <Link href="/shop" className="inline-flex items-center gap-2 mb-12 text-sm font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors group">
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Shop
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-end">

                    {/* Text Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className={`${themeShadowClass} ${themeTextClass} px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${badgeBorderClass} flex items-center gap-1`}>
                                <Zap className="w-3 h-3" /> {product.badge}
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-6 uppercase"
                        >
                            {product.name} <br />
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientTextClass}`}>
                                {product.subtitle}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-10"
                        >
                            {product.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="/contact" className="inline-block relative overflow-hidden group bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-transform hover:scale-105">
                                <span className="relative z-10">Request a Quote</span>
                                <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                            <Link href="#specs" className={`inline-block px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm text-neutral-300 border border-neutral-700 hover:${badgeBorderClass} hover:${themeShadowClass} transition-colors text-center`}>
                                View Full Specs
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative bottom line */}
            <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent`} />
        </section>
    );
}
