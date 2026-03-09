"use client";

import { motion } from "framer-motion";

export function ShopHero() {
    return (
        <section className="relative h-screen min-h-[600px] max-h-[800px] w-full overflow-hidden bg-black flex items-center justify-center pt-24 px-6 md:px-12 lg:px-24">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black opacity-90" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00DBFF]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5L25 17l-5 3.5zm-10 10V28H0v-2h10v-2.5L15 27l-5 3.5zm20-20V8H0V6h30V3.5L35 7l-5 3.5z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 tracking-tighter leading-none mb-6 p-2">
                        Robotics for
                        <br />
                        Every Reality.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <p className="text-lg md:text-2xl text-neutral-400 font-medium leading-relaxed max-w-2xl mx-auto">
                        Automate, educate, and innovate. Choose a category below to explore our curated selection of advanced robotics.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-32 flex flex-col items-center gap-3"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#00DBFF] font-bold">Select Category</span>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-[#00DBFF]/50 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
