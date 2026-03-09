"use client";

import { motion } from "framer-motion";

export function ContactHero() {
    return (
        <section className="relative w-full pt-40 pb-20 px-6 md:px-12 lg:px-24 bg-black overflow-hidden flex flex-col justify-end min-h-[50vh]">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00DBFF]/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-30" />
                <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-[2px] bg-gradient-to-r from-[#00DBFF] to-blue-500" />
                        <span className="text-[#00DBFF] font-mono text-sm tracking-widest uppercase">
                            Get In Touch
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter mb-8 uppercase"
                    >
                        Questions? <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                            We've got <br /> answers.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
                    >
                        We make it easy to find the perfect robot or accessories for your home or business. Whether you're curious about products, orders, shipping, or new innovations, we are here to help.
                    </motion.p>
                </div>
            </div>

            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </section>
    );
}
