"use client";

import { motion } from "framer-motion";
import { Target, Wrench, HeadphonesIcon } from "lucide-react";
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

const processSteps = [
    {
        title: "Match",
        description: "Tell us your event, demo, or project goals and we will recommend the best robots and payloads.",
        icon: <Target className="w-8 h-8 text-[#00DBFF]" />,
        glowColor: "from-[#00DBFF]/20"
    },
    {
        title: "Prepare",
        description: "We coordinate delivery windows, setup guidance, and any required consumables or accessories.",
        icon: <Wrench className="w-8 h-8 text-blue-500" />,
        glowColor: "from-blue-500/20"
    },
    {
        title: "Support",
        description: "Stay covered with live support during your rental window and easy return logistics afterward.",
        icon: <HeadphonesIcon className="w-8 h-8 text-indigo-500" />,
        glowColor: "from-indigo-500/20"
    }
];

export function RentProcess() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight`}>
                        How rentals work
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00DBFF] to-blue-600 mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group bg-neutral-900 border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-colors duration-500 overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.glowColor} to-transparent opacity-0 group-hover:opacity-100 blur-[40px] transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm">
                                    {step.icon}
                                </div>

                                <div className={`${jetbrainsMono.className} text-sm font-bold text-neutral-500 mb-2`}>
                                    0{index + 1}
                                </div>
                                <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-white mb-4 uppercase`}>
                                    {step.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
