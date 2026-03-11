"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export function ContactForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/embed/45023159.js";
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5"
        >
            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00DBFF]/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10 mb-10">
                    <h2 className="text-3xl font-bold text-white mb-4">Send a Message</h2>
                    <p className="text-neutral-400">
                        Please share the details of your question so we can route you to the right specialist.
                    </p>
                </div>
                <div className="relative z-10">
                    <div
                        className="hs-form-frame"
                        data-region="na1"
                        data-form-id="ec2d8bcf-7b45-40ab-8055-b76d06ec37ff"
                        data-portal-id="45023159"
                    />
                </div>
            </div>
        </motion.div>
    );
}
