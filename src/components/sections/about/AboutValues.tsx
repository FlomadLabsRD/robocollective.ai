"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutValues() {
    const values = [
        {
            title: "Transparency",
            description: "Clear design, honest communication, and reliability in everything we do.",
        },
        {
            title: "Accessibility",
            description: "Robotics should be useful, affordable, and available to everyone.",
        },
        {
            title: "Responsibility",
            description: "Technology that respects people and the world we share.",
        }
    ];

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-neutral-950">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Values & Vision</h2>
                        <div className="w-20 h-1 bg-[#00DBFF] mb-8" />
                        <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
                            From families to entrepreneurs, our solutions already help people save time, reduce stress, and focus on what matters most. We design personal robotics solutions with care, built around trust, safety, and transparency.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {values.map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="flex flex-col gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#00DBFF] font-bold text-xl">
                                {idx + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-gradient-to-r from-neutral-900 to-black border border-neutral-800 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00DBFF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 max-w-xl">
                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4">What's Next?</h3>
                        <p className="text-neutral-400 text-lg">
                            This is just the beginning of our story. Discover how robotics can enhance your life today and evolve with your future.
                        </p>
                    </div>

                    <Link href="/" className="relative z-10 group flex items-center justify-center gap-3 px-8 py-5 bg-[#00DBFF] text-black font-bold uppercase tracking-wider rounded-none overflow-hidden transition-transform active:scale-95 whitespace-nowrap">
                        <span className="relative z-10">Explore Our Solutions</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                        <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
