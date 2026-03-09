"use client";

import { motion } from "framer-motion";
import { HelpCircle, Clock, Zap } from "lucide-react";

const infoBlocks = [
    {
        icon: <HelpCircle className="w-6 h-6 text-[#00DBFF]" />,
        title: "Expert Guidance",
        description: "Choose the right robots and accessories for your specific needs, whether for education, industry, or personal use."
    },
    {
        icon: <Zap className="w-6 h-6 text-[#00DBFF]" />,
        title: "Friendly Support",
        description: "Get quick assistance with technical questions, custom orders, returns, and shipping inquiries."
    },
    {
        icon: <Clock className="w-6 h-6 text-[#00DBFF]" />,
        title: "Fast Response Time",
        description: "Our team of specialists typically reads and responds to inquiries within 24 to 48 business hours."
    }
];

export function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 flex flex-col gap-12"
        >
            <div>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Why Contact Us?</h3>

                <div className="flex flex-col gap-8">
                    {infoBlocks.map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            className="flex gap-4"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                                {block.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-2">{block.title}</h4>
                                <p className="text-neutral-400 leading-relaxed text-sm">
                                    {block.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800/50 relative overflow-hidden group">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00DBFF]/5 rounded-full blur-[40px] group-hover:bg-[#00DBFF]/10 transition-colors duration-500" />

                <h3 className="text-xl font-bold text-white mb-4 relative z-10">What happens next?</h3>
                <ul className="space-y-3 relative z-10">
                    <li className="flex items-start gap-3 text-neutral-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00DBFF] mt-1.5 flex-shrink-0" />
                        <span>You'll receive an automatic confirmation email letting you know we have received your message.</span>
                    </li>
                    <li className="flex items-start gap-3 text-neutral-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00DBFF] mt-1.5 flex-shrink-0" />
                        <span>Your question is routed directly to the appropriate technical specialist or support staff.</span>
                    </li>
                    <li className="flex items-start gap-3 text-neutral-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00DBFF] mt-1.5 flex-shrink-0" />
                        <span>We collaborate to provide you with the most accurate and helpful resolution possible.</span>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
}
