"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, RefreshCcw, Handshake, List } from "lucide-react";
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export function RentResell() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Rent Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group relative rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 min-h-[400px] flex flex-col justify-end p-8 md:p-12 hover:border-[#00DBFF]/50 transition-colors duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,219,255,0.15),transparent_50%)] z-0 group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

                        <div className="relative z-20">
                            <div className="w-14 h-14 rounded-2xl bg-[#00DBFF]/10 border border-[#00DBFF]/20 flex items-center justify-center mb-6 backdrop-blur-md">
                                <Handshake className="w-7 h-7 text-[#00DBFF]" />
                            </div>
                            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase`}>
                                Rent
                            </h2>
                            <p className="text-neutral-300 text-lg mb-8 max-w-sm leading-relaxed">
                                Deploy advanced hardware for events, temporary projects, or pilot programs without the capital investment.
                            </p>
                            <Link href="/rent" className={`${jetbrainsMono.className} inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black bg-[#00DBFF] rounded-full hover:bg-white transition-colors duration-300`}>
                                See more <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Resell Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group relative rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 min-h-[400px] flex flex-col justify-end p-8 md:p-12 hover:border-emerald-500/50 transition-colors duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_50%)] z-0 group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

                        <div className="relative z-20">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 backdrop-blur-md">
                                <RefreshCcw className="w-7 h-7 text-emerald-500" />
                            </div>
                            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase`}>
                                Resell Program
                            </h2>
                            <p className="text-neutral-300 text-lg mb-8 max-w-sm leading-relaxed">
                                Ready to upgrade? We buy back and refurbish used robotics platforms to keep the ecosystem moving.
                            </p>
                            <Link href="/resell" className={`${jetbrainsMono.className} inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black bg-emerald-500 rounded-full hover:bg-white transition-colors duration-300`}>
                                See more <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* List with us Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group relative rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 min-h-[400px] flex flex-col justify-end p-8 md:p-12 hover:border-amber-500/50 transition-colors duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.1),transparent_50%)] z-0 group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

                        <div className="relative z-20">
                            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 backdrop-blur-md">
                                <List className="w-7 h-7 text-amber-500" />
                            </div>
                            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase`}>
                                List with us
                            </h2>
                            <ul className="text-neutral-300 text-lg mb-8 space-y-2">
                                <li>• Rent your robot.</li>
                                <li>• Sell your robot.</li>
                            </ul>
                            <Link href="/contact" className={`${jetbrainsMono.className} inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black bg-amber-500 rounded-full hover:bg-white transition-colors duration-300`}>
                                Request info and pricing <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
