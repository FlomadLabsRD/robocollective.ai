"use client";

import { motion } from "framer-motion";
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import type { BlogPost } from "@/data/blog";
import { HelpCircle, ChevronRight } from "lucide-react";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export function BlogPostContent({ post }: { post: BlogPost }) {
    return (
        <article className="py-20 bg-black relative">
            <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="prose prose-invert prose-lg max-w-none text-neutral-300 leading-relaxed"
                >
                    {post.content.map((block, index) => {
                        switch (block.type) {
                            case 'h2':
                                return (
                                    <h2 key={index} className={`${spaceGrotesk.className} text-3xl md:text-4xl font-black text-white mt-16 mb-8 uppercase tracking-tight`}>
                                        {block.text}
                                    </h2>
                                );
                            case 'h3':
                                return (
                                    <h3 key={index} className={`${spaceGrotesk.className} text-2xl md:text-3xl font-bold text-white mt-12 mb-6 tracking-tight`}>
                                        {block.text}
                                    </h3>
                                );
                            case 'h4':
                                return (
                                    <h4 key={index} className={`${spaceGrotesk.className} text-xl md:text-2xl font-bold text-[#00DBFF] mt-10 mb-4 tracking-tight`}>
                                        {block.text}
                                    </h4>
                                );
                            case 'p':
                                return (
                                    <p key={index} className="mb-6 text-lg text-neutral-400">
                                        {block.text}
                                    </p>
                                );
                            case 'ol':
                                return (
                                    <ol key={index} className="list-decimal list-outside ml-6 mb-8 space-y-4 text-neutral-400 marker:text-[#00DBFF] marker:font-bold">
                                        {block.items?.map((item, idx) => (
                                            <li key={idx} className="pl-2">{item}</li>
                                        ))}
                                    </ol>
                                );
                            case 'ul':
                                return (
                                    <ul key={index} className="list-none mb-8 space-y-4 text-neutral-400">
                                        {block.items?.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-[#00DBFF] flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                );
                            case 'example':
                                return (
                                    <div key={index} className="bg-neutral-900/50 border-l-2 border-[#00DBFF] p-6 mb-6 rounded-r-xl">
                                        <p className="text-white font-bold mb-1">{block.question}</p>
                                        <p className="text-neutral-400">{block.answer}</p>
                                    </div>
                                );
                            case 'faq':
                                return (
                                    <div key={index} className="bg-neutral-950 border border-white/10 p-6 mb-6 rounded-2xl hover:border-[#00DBFF]/30 transition-colors">
                                        <div className="flex items-start gap-4 mb-3">
                                            <HelpCircle className="w-6 h-6 text-[#00DBFF] flex-shrink-0 mt-0.5" />
                                            <h4 className="text-white font-bold text-lg">{block.question}</h4>
                                        </div>
                                        <div className="pl-10">
                                            <p className="text-neutral-400">{block.answer}</p>
                                        </div>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </motion.div>

                {/* Author / CTA section at the bottom of the article */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-white/10"
                >
                    <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 text-center">
                        <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-white mb-4 uppercase`}>
                            Ready to transform your business?
                        </h3>
                        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                            Connect with our team of specialists to find the perfect robotic solutions for your specific operational needs.
                        </p>
                        <a href="/contact" className={`${jetbrainsMono.className} inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black bg-[#00DBFF] rounded-full hover:bg-white transition-colors duration-300`}>
                            Contact Us
                        </a>
                    </div>
                </motion.div>

            </div>
        </article>
    );
}
