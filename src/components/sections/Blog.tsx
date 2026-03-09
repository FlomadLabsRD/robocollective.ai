"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

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

export function Blog() {
    return (
        <section id="case-studies" className="py-24 bg-neutral-950 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <h2 className={`${spaceGrotesk.className} text-4xl lg:text-5xl font-black mb-4 tracking-tight uppercase`}>
                            Read our latest posts
                        </h2>
                        <p className="text-neutral-400 text-lg">
                            Guides & insights for choosing the right robot, delivered with customer research and product direction.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <motion.a
                            key={index}
                            href={post.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group block text-left bg-black border border-white/10 rounded-3xl p-8 hover:border-[#00DBFF]/50 transition-colors duration-300 relative overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#00DBFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className={`${jetbrainsMono.className} flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-[#00DBFF] mb-6`}>
                                    <span>{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="text-neutral-500">{post.date}</span>
                                </div>
                                <h3 className={`${spaceGrotesk.className} text-xl md:text-2xl font-bold mb-4 group-hover:text-[#00DBFF] transition-colors line-clamp-2`}>
                                    {post.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed mb-8 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:text-[#00DBFF] transition-colors">
                                    Read more... <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
