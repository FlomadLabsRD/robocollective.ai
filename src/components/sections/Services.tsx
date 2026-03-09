"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Headphones, Globe } from "lucide-react";
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

const features = [
    {
        title: "Premium Robots",
        description: "We offer high-quality robots and accessories built for real work.",
        icon: <ShieldCheck className="w-8 h-8 text-[#00DBFF]" />,
        glow: "from-[#00DBFF]/20 to-transparent",
    },
    {
        title: "Expert Support",
        description: "Talk to a specialist. We'll help you compare models and plan deployment.",
        icon: <Headphones className="w-8 h-8 text-purple-500" />,
        glow: "from-purple-500/20 to-transparent",
    },
    {
        title: "We Deliver To You",
        description: "Global shipping, customs guidance, and on-site or remote setup.",
        icon: <Globe className="w-8 h-8 text-emerald-500" />,
        glow: "from-emerald-500/20 to-transparent",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
        },
    },
};

export function Services() {
    return (
        <section id="services" className="py-24 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            initial="initial"
                            className="relative group rounded-3xl p-8 border border-white/5 bg-neutral-900/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 flex flex-col items-start"
                        >
                            {/* Radial Glow */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0 },
                                    hover: { opacity: 1 }
                                }}
                                transition={{ duration: 0.5 }}
                                className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] ${feature.glow} pointer-events-none z-0`}
                            />

                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 mix-blend-overlay pointer-events-none z-0" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 shadow-xl backdrop-blur-md">
                                    {feature.icon}
                                </div>
                                <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-white mb-4 tracking-tight`}>
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative Line */}
                            <div className="absolute top-0 right-8 w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
