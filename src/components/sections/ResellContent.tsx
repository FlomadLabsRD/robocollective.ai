"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Users, Truck, RotateCw, Handshake, CheckCircle2 } from "lucide-react";
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

const resaleSteps = [
    {
        title: "Assess",
        description: "We capture model details, condition, accessories, and history to prepare your listing.",
        icon: <Search className="w-6 h-6 text-emerald-400" />
    },
    {
        title: "Match",
        description: "We promote to verified buyers and select channels for the best fit and price.",
        icon: <Users className="w-6 h-6 text-teal-400" />
    },
    {
        title: "Transfer",
        description: "We coordinate logistics, data wipes if needed, and documentation to close the sale confidently.",
        icon: <Truck className="w-6 h-6 text-green-400" />
    }
];

const resellerBenefits = [
    "Access to a curated catalog of industrial, service, educational, and specialty robots",
    "Reseller pricing and a clear commission structure",
    "Product sheets, technical documentation, and demo materials",
    "Help scoping deployments, pilots, and proof of concept projects",
    "Option to be listed as an official RoboCollective.ai reseller"
];

const resellerAudience = [
    "System integrators and automation consultants",
    "IT and tech service providers",
    "Engineering and industrial supply companies",
    "Agencies working with events, innovation, or experiential tech"
];

export function ResellContent() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. Resale Process */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className={`${spaceGrotesk.className} text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight`}>
                            Resale Process
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl">
                            Fair valuations, vetted buyers, and smooth handoffs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {resaleSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-6">
                                    {step.icon}
                                </div>
                                <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-white mb-3 uppercase`}>
                                    {step.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Rent out your robots */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-neutral-900 p-8 md:p-16"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px]" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 mb-6 border border-emerald-500/30">
                                    <RotateCw className="w-6 h-6" />
                                </div>
                                <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight`}>
                                    Not ready to sell? <br /><span className="text-emerald-400">Rent out your robots</span>
                                </h2>
                                <p className="text-neutral-300 text-lg mb-8 leading-relaxed max-w-xl">
                                    Sometimes it makes more sense to keep a robot in your fleet and let it earn money between projects. If you have platforms that sit idle part of the year, you can list them for rentals on RoboCollective.ai instead of selling them outright.
                                </p>
                                <Link href="/contact" className={`${jetbrainsMono.className} inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black bg-emerald-400 rounded-full hover:bg-white transition-colors duration-300`}>
                                    List your robot for rent <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { title: "1. List your robot", desc: "Share model details, condition, payloads, and where the robot is located. You stay in control of availability, pricing, and what types of use are allowed." },
                                    { title: "2. Match and schedule", desc: "We promote your listing to companies, universities, and event organizers who need short term robotics." },
                                    { title: "3. Support and payout", desc: "We help coordinate logistics, basic onboarding guidance, and return checks. After each completed rental, you receive payment." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-black/50 border border-white/5 rounded-xl p-6">
                                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                        <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 3. Reseller Program */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/20 text-yellow-500 mb-6 border border-yellow-500/30">
                            <Handshake className="w-6 h-6" />
                        </div>
                        <h2 className={`${spaceGrotesk.className} text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight`}>
                            Become a RoboCollective reseller
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
                            If you work with clients who are looking for robotics solutions, you can also join our reseller program. Instead of only reselling your own hardware, you can offer robots from our wider catalog while we support you with specs, sourcing, and delivery.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className={`${jetbrainsMono.className} text-yellow-500 font-bold uppercase tracking-widest text-sm mb-6`}>Who the program is for</h3>
                            <ul className="space-y-4">
                                {resellerAudience.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                                        <span className="text-neutral-300 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className={`${jetbrainsMono.className} text-yellow-500 font-bold uppercase tracking-widest text-sm mb-6`}>What you get</h3>
                            <ul className="space-y-4 mb-8">
                                {resellerBenefits.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-neutral-300 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact" className={`${jetbrainsMono.className} inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black bg-yellow-400 rounded-full hover:bg-white transition-colors duration-300`}>
                                Apply to the reseller program <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
