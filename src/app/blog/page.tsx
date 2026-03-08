"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Footer } from "@/components/sections";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

const posts = [
    {
        title: "How Robots Help Restaurants Cut Costs: Embracing Restaurant Automation",
        excerpt: "Restaurants streamline delivery, inventory, and customer experience with automation that understands service flow. We break down how robotics paired with predictive staffing keeps food on time and guests delighted.",
        category: "Industry Insights",
        date: "September 25, 2025",
        href: "/blog/how-robots-help-restaurants-cut-costs",
    },
    {
        title: "Robot Rental for Events: Elevate Experiences with Cutting-Edge Robotics",
        excerpt: "Interactive robots forge unforgettable moments whether you are hosting university showcases, grand openings, or entertainment launches. Learn how rental fleets can flex with every venue.",
        category: "Use Cases",
        date: "August 8, 2025",
        href: "/blog/robot-rental-for-events",
    }
];

export default function BlogPage() {
    return (
        <main className="bg-black min-h-screen text-white pt-32 selection:bg-[#00DBFF]/30 selection:text-white">
            {/* Header Section */}
            <section className="relative overflow-hidden mb-16">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00DBFF]/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className={`${spaceGrotesk.className} text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight`}>
                            Guides & <br /><span className="text-[#00DBFF]">Insights</span>
                        </h1>
                        <p className="text-neutral-400 text-lg md:text-xl">
                            Stories, lessons, and proof points from the RoboCollective.ai team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Article Grid Section */}
            <section className="pb-32 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {posts.map((post, index) => (
                            <motion.a
                                key={index}
                                href={post.href}
                                
                                
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                className="group block text-left bg-neutral-950 border border-white/5 rounded-3xl p-8 md:p-12 hover:border-[#00DBFF]/50 transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#00DBFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`${jetbrainsMono.className} flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#00DBFF] mb-6`}>
                                        <span>{post.category}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                        <span className="text-neutral-500">{post.date}</span>
                                    </div>

                                    <h3 className={`${spaceGrotesk.className} text-2xl md:text-3xl font-bold mb-6 group-hover:text-[#00DBFF] transition-colors line-clamp-2 md:line-clamp-3 leading-tight`}>
                                        {post.title}
                                    </h3>

                                    <p className="text-neutral-400 leading-relaxed mb-10 line-clamp-3 md:line-clamp-4 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:text-[#00DBFF] transition-colors mt-auto pt-6 border-t border-white/5 group-hover:border-[#00DBFF]/20">
                                        Read more <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
