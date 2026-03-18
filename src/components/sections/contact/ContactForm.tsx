"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export function ContactForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/v2.js";
        script.async = true;
        script.onload = () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const hbspt = (window as any).hbspt;
            if (hbspt) {
                hbspt.forms.create({
                    region: "na1",
                    portalId: "45023159",
                    formId: "ec2d8bcf-7b45-40ab-8055-b76d06ec37ff",
                    target: "#hubspot-form-container",
                    onFormReady: () => {
                        const style = document.createElement("style");
                        style.innerHTML = `
                            #hubspot-form-container .hs-form fieldset { max-width: 100% !important; }
                            #hubspot-form-container .hs-form .hs-input {
                                width: 100% !important;
                                background-color: #111 !important;
                                border: 1px solid #333 !important;
                                border-radius: 8px !important;
                                color: #fff !important;
                                padding: 12px 16px !important;
                                font-size: 15px !important;
                                outline: none !important;
                            }
                            #hubspot-form-container .hs-form .hs-input:focus {
                                border-color: #00DBFF !important;
                            }
                            #hubspot-form-container .hs-form label {
                                color: #aaa !important;
                                font-size: 14px !important;
                                margin-bottom: 6px !important;
                                display: block !important;
                            }
                            #hubspot-form-container .hs-form .hs-error-msgs label {
                                color: #ff4d4d !important;
                            }
                            #hubspot-form-container .hs-form .hs-button {
                                background-color: #00DBFF !important;
                                color: #000 !important;
                                font-weight: 700 !important;
                                font-size: 15px !important;
                                padding: 14px 32px !important;
                                border-radius: 999px !important;
                                border: none !important;
                                cursor: pointer !important;
                                margin-top: 8px !important;
                                transition: opacity 0.2s !important;
                            }
                            #hubspot-form-container .hs-form .hs-button:hover { opacity: 0.85 !important; }
                            #hubspot-form-container .hs-form .hs-richtext,
                            #hubspot-form-container .hs-form .hs-field-desc {
                                color: #888 !important;
                                font-size: 13px !important;
                            }
                            #hubspot-form-container .submitted-message {
                                color: #00DBFF !important;
                                font-size: 16px !important;
                                font-weight: 600 !important;
                                padding: 16px 0 !important;
                            }
                        `;
                        document.head.appendChild(style);
                    },
                });
            }
        };
        document.body.appendChild(script);
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
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
                    <div id="hubspot-form-container" />
                </div>
            </div>
        </motion.div>
    );
}
