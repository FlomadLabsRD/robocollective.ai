"use client";

import { motion } from "framer-motion";
import { Activity, Eye, Layers, ShieldCheck, Cpu, Battery, Cog, Zap, Target } from "lucide-react";
import { ProductDetails } from "@/data/products";

export function ProductFeatures({ product }: { product: ProductDetails }) {
    // Dynamic theme colors
    const themeShadowClass = product.themeColor === "emerald" ? "shadow-[0_0_50px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_80px_rgba(16,185,129,0.2)]"
        : product.themeColor === "sky" ? "shadow-[0_0_50px_rgba(14,165,233,0.1)] group-hover:shadow-[0_0_80px_rgba(14,165,233,0.2)]"
            : product.themeColor === "orange" ? "shadow-[0_0_50px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_80px_rgba(249,115,22,0.2)]"
                : product.themeColor === "purple" ? "shadow-[0_0_50px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_80px_rgba(168,85,247,0.2)]"
                    : "shadow-[0_0_50px_rgba(236,72,153,0.1)] group-hover:shadow-[0_0_80px_rgba(236,72,153,0.2)]";

    const themeTextClass = product.themeColor === "emerald" ? "text-emerald-400"
        : product.themeColor === "sky" ? "text-sky-400"
            : product.themeColor === "orange" ? "text-orange-400"
                : product.themeColor === "purple" ? "text-purple-400"
                    : "text-pink-400";

    const bgOpacityClass = product.themeColor === "emerald" ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
        : product.themeColor === "sky" ? "bg-sky-500/5 text-sky-400 border-sky-500/20"
            : product.themeColor === "orange" ? "bg-orange-500/5 text-orange-400 border-orange-500/20"
                : product.themeColor === "purple" ? "bg-purple-500/5 text-purple-400 border-purple-500/20"
                    : "bg-pink-500/5 text-pink-400 border-pink-500/20";

    const bgDividerClass = product.themeColor === "emerald" ? "bg-emerald-500/30"
        : product.themeColor === "sky" ? "bg-sky-500/30"
            : product.themeColor === "orange" ? "bg-orange-500/30"
                : product.themeColor === "purple" ? "bg-purple-500/30"
                    : "bg-pink-500/30";

    const bgCenterAccentClass = product.themeColor === "emerald" ? "bg-emerald-500/10"
        : product.themeColor === "sky" ? "bg-sky-500/10"
            : product.themeColor === "orange" ? "bg-orange-500/10"
                : product.themeColor === "purple" ? "bg-purple-500/10"
                    : "bg-pink-500/10";

    const bgGradientHoverClass = product.themeColor === "emerald" ? "from-emerald-500/5 to-teal-500/5"
        : product.themeColor === "sky" ? "from-sky-500/5 to-blue-500/5"
            : product.themeColor === "orange" ? "from-orange-500/5 to-red-500/5"
                : product.themeColor === "purple" ? "from-purple-500/5 to-indigo-500/5"
                    : "from-pink-500/5 to-rose-500/5";

    const getIcon = (iconName: string, className: string) => {
        switch (iconName) {
            case 'activity': return <Activity className={className} />;
            case 'eye': return <Eye className={className} />;
            case 'layers': return <Layers className={className} />;
            case 'shield': return <ShieldCheck className={className} />;
            case 'cpu': return <Cpu className={className} />;
            case 'battery': return <Battery className={className} />;
            case 'cog': return <Cog className={className} />;
            case 'zap': return <Zap className={className} />;
            case 'target': return <Target className={className} />;
            default: return <Activity className={className} />;
        }
    };

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col gap-24">
                {product.features.map((feature, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                        >
                            {/* Text Content */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                                        {getIcon(feature.icon, `w-8 h-8 ${themeTextClass}`)}
                                    </div>
                                    <div className={`h-[2px] w-12 ${bgDividerClass}`} />
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-6">
                                    {feature.title}
                                </h3>

                                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                                    {feature.description}
                                </p>

                                <div className={`inline-block px-4 py-2 rounded-full border border-opacity-20 bg-opacity-5 font-mono text-sm tracking-widest uppercase ${bgOpacityClass}`}>
                                    {feature.highlight}
                                </div>
                            </motion.div>

                            {/* Abstract Visual Placeholder for Robot Features */}
                            <motion.div
                                className="w-full lg:w-1/2 relative aspect-square lg:aspect-auto lg:h-[400px]"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <div className="absolute inset-0 bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden group">
                                    {/* Subtle hover environment */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${bgGradientHoverClass} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                    {/* Tech Grid */}
                                    <div
                                        className="absolute inset-0 opacity-10 mix-blend-overlay"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                                            backgroundSize: '20px 20px',
                                        }}
                                    />

                                    {/* Center abstract shape representing the feature */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-48 h-48 rounded-full border ${bgOpacityClass} backdrop-blur-sm flex items-center justify-center relative ${themeShadowClass} transition-shadow duration-700`}>
                                            <div className="w-32 h-32 rounded-full border border-neutral-700/50 flex items-center justify-center relative animate-[spin_10s_linear_infinite]" />
                                            <div className={`w-16 h-16 rounded-full ${bgCenterAccentClass} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
                                        </div>
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-neutral-700" />
                                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-neutral-700" />
                                    <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-neutral-700" />
                                    <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-neutral-700" />
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
