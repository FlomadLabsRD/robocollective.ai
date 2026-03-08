"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export function ResellHero() {
    return (
        <section className="relative w-full pt-40 pb-20 px-6 md:px-12 lg:px-24 bg-black overflow-hidden flex flex-col justify-end min-h-[60vh]">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] opacity-40" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px] opacity-30" />
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-600" />
                        <span className={`${jetbrainsMono.className} text-emerald-400 text-sm tracking-widest uppercase font-bold flex items-center gap-2`}>
                            <RefreshCcw className="w-4 h-4" />
                            Eco-System Loop
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className={`${spaceGrotesk.className} text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight tracking-tighter mb-8 uppercase`}
                    >
                        Resell <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-400">
                            Robots
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-2xl text-neutral-400 max-w-2xl leading-relaxed mb-10"
                    >
                        Recover capital and move idle robots to trusted buyers. List your underused platforms with a partner who understands specs, compatibility, and ideal buyers across industries.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/contact" className={`${jetbrainsMono.className} inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black bg-emerald-400 rounded-full hover:bg-white transition-colors duration-300`}>
                            Start a resale request <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/shop" className={`${jetbrainsMono.className} inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors duration-300 backdrop-blur-md`}>
                            See active inventory
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </section>
    );
}
