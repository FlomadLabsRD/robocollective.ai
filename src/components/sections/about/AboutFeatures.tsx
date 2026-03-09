"use client";

import { motion } from "framer-motion";

export function AboutFeatures() {
    const features = [
        {
            title: "Smart & Adaptive",
            description: "Robots that learn and adjust to your habits seamlessly in your environment.",
            delay: 0.1
        },
        {
            title: "Easy to Use",
            description: "Simple voice, touch, or gesture controls — absolutely no complicated setup required.",
            delay: 0.2
        },
        {
            title: "Built to Last",
            description: "Modular systems designed with durability in mind to grow alongside your needs.",
            delay: 0.3
        },
        {
            title: "AI-Driven",
            description: "Powered by intelligent, evolving systems that support people in real-world environments.",
            delay: 0.4
        }
    ];

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-neutral-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">What We Build</h2>
                    <div className="w-20 h-1 bg-[#00DBFF]" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: feature.delay }}
                            className="bg-neutral-900/40 border border-neutral-800 p-10 hover:bg-neutral-800/50 transition-colors duration-300 group"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#00DBFF] transition-colors">{feature.title}</h3>
                            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
