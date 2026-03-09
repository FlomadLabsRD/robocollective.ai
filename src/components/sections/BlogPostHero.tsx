"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import type { BlogPost } from "@/data/blog";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export function BlogPostHero({ post }: { post: BlogPost }) {
    return (
        <section className="relative w-full pt-40 pb-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden flex flex-col justify-end min-h-[60vh]">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00DBFF]/10 rounded-full blur-[120px] opacity-40" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] opacity-20" />
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto w-full">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#00DBFF] transition-colors group">
                        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                        <span className={`${jetbrainsMono.className} text-sm font-bold uppercase tracking-widest`}>Back to Blog</span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#00DBFF] to-indigo-500" />
                    <div className={`${jetbrainsMono.className} flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#00DBFF]`}>
                        <span>{post.category}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="text-neutral-500">{post.date}</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className={`${spaceGrotesk.className} text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8`}
                >
                    {post.title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="w-full h-[1px] bg-gradient-to-r from-[#00DBFF]/50 via-white/10 to-transparent mt-12"
                />
            </div>
        </section>
    );
}
