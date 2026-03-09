"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const [isSlowConnection, setIsSlowConnection] = useState(false);

    // Check scroll progress across the whole page to fade out near the bottom
    const { scrollYProgress } = useScroll();
    // Fade out completely when the scroll reaches 75% down the page (before footer)
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0.6, 0.75], [1, 0]);

    useEffect(() => {
        if ("connection" in navigator) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const conn = (navigator as any).connection;
            if (conn.saveData || /2g|3g/.test(conn.effectiveType)) {
                setIsSlowConnection(true);
            }
        }
    }, []);

    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black flex items-end pb-16 pt-32 px-6 md:px-12 lg:px-24">
            {/* 1. Immersive Video Background */}
            <div className="absolute inset-0 z-0">
                {!isSlowConnection ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full opacity-100"
                    >
                        {/* Ensure file name matches exactly: hero-futuristic-quadrup.mp4 */}
                        <source src="/assets/hero.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div
                        className="w-full h-full bg-cover bg-center opacity-70"
                        style={{ backgroundImage: "url('/assets/hero-poster.jpg')" }}
                    />
                )}
                {/* 2. Professional Gradient Mask: Darkens the bottom for left-aligned text readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* 3. Left-Aligned, Bottom-Weighted Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto pb-8">
                <div className="max-w-2xl text-left">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6 uppercase"
                    >
                        The Future of Robotics.
                        <br />
                        <span className="text-[#00DBFF]">Available Today.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-neutral-300 max-w-xl mb-10 font-medium leading-relaxed"
                    >
                        Discover, deploy, and scale the world's most advanced robots. Expertly delivered and fully supported worldwide.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a href="#products" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#00DBFF] text-black font-bold uppercase tracking-wider rounded-none overflow-hidden transition-transform active:scale-95 text-sm md:text-base">
                            <span className="relative z-10">Explore Collection</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                        </a>

                        <a href="/contact" className="px-8 py-4 bg-transparent border border-neutral-600 text-white font-bold uppercase tracking-wider rounded-none hover:bg-white hover:text-black transition-all active:scale-95 text-sm md:text-base">
                            Talk to an Expert
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Industrial Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="fixed right-10 bottom-10 z-50 hidden lg:flex items-center gap-4 rotate-90 origin-right mix-blend-difference text-white"
            >
                {/* Wrap the content in another motion.div that handles the scroll fade */}
                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    className="flex items-center gap-4"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
                    <div className="w-12 h-[1px] bg-white opacity-30" />
                </motion.div>
            </motion.div>
        </section>
    );
}