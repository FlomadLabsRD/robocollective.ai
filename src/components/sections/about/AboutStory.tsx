"use client";

import { motion } from "framer-motion";

export function AboutStory() {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">

                {/* Left Column - Heading */}
                <div className="w-full md:w-1/3">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Who We Are</h2>
                        <div className="w-20 h-1 bg-[#00DBFF]" />
                    </motion.div>
                </div>

                {/* Right Column - Content text */}
                <div className="w-full md:w-2/3 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                            We are a team of innovators, engineers, and creators passionate about bringing robotics out of the future and into the present. Our founder, <strong className="text-white">John Hazlewood</strong>, started RoboCollective.ai to make robotics practical, accessible, and designed for real people, not just industries or labs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8 border-t border-neutral-800">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-[#00DBFF] font-black uppercase tracking-widest text-sm mb-3">Our Mission</h3>
                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                Free people and teams from repetitive tasks so they can focus on what really matters.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h3 className="text-[#00DBFF] font-black uppercase tracking-widest text-sm mb-3">Our Vision</h3>
                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                A world where everyday robotics naturally fits into home, work, and life.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
