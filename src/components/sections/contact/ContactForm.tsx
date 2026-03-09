"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset success message after 3 seconds
            setTimeout(() => {
                setIsSuccess(false);
                // Optionally reset form fields here
            }, 3000);
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5"
        >
            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-3xl p-8 md:p-12 relative overflow-hidden group">

                {/* Subtle Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00DBFF]/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 mb-10">
                    <h2 className="text-3xl font-bold text-white mb-4">Send a Message</h2>
                    <p className="text-neutral-400">
                        Please share the details of your question so we can route you to the right specialist.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div className="relative">
                            <input
                                type="text"
                                id="firstName"
                                required
                                className="peer w-full bg-transparent border-b-2 border-neutral-800 text-white pt-6 pb-2 px-1 focus:outline-none focus:border-[#00DBFF] transition-colors placeholder-transparent"
                                placeholder="First Name"
                            />
                            <label
                                htmlFor="firstName"
                                className="absolute left-1 top-2 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#00DBFF]"
                            >
                                First Name
                            </label>
                        </div>

                        {/* Last Name */}
                        <div className="relative">
                            <input
                                type="text"
                                id="lastName"
                                required
                                className="peer w-full bg-transparent border-b-2 border-neutral-800 text-white pt-6 pb-2 px-1 focus:outline-none focus:border-[#00DBFF] transition-colors placeholder-transparent"
                                placeholder="Last Name"
                            />
                            <label
                                htmlFor="lastName"
                                className="absolute left-1 top-2 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#00DBFF]"
                            >
                                Last Name
                            </label>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            required
                            className="peer w-full bg-transparent border-b-2 border-neutral-800 text-white pt-6 pb-2 px-1 focus:outline-none focus:border-[#00DBFF] transition-colors placeholder-transparent"
                            placeholder="Email Address"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-1 top-2 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#00DBFF]"
                        >
                            Email Address
                        </label>
                    </div>

                    {/* Subject */}
                    <div className="relative">
                        <input
                            type="text"
                            id="subject"
                            required
                            className="peer w-full bg-transparent border-b-2 border-neutral-800 text-white pt-6 pb-2 px-1 focus:outline-none focus:border-[#00DBFF] transition-colors placeholder-transparent"
                            placeholder="Subject"
                        />
                        <label
                            htmlFor="subject"
                            className="absolute left-1 top-2 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#00DBFF]"
                        >
                            Subject (e.g. Orders, Custom Build, Support)
                        </label>
                    </div>

                    {/* Message */}
                    <div className="relative mt-2">
                        <textarea
                            id="message"
                            required
                            rows={5}
                            className="peer w-full bg-neutral-900/50 border border-neutral-800 rounded-xl text-white p-4 focus:outline-none focus:border-[#00DBFF] transition-colors placeholder-transparent resize-none"
                            placeholder="Your Message..."
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-4 top-4 text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-500 peer-focus:-top-6 peer-focus:left-1 peer-focus:text-xs peer-focus:text-[#00DBFF] bg-[#0a0a0a] px-1"
                        >
                            How can we help?
                        </label>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`mt-4 w-full md:w-auto self-end py-4 px-10 rounded-full font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-3 min-w-[200px]
                            ${isSuccess
                                ? 'bg-emerald-500 text-white'
                                : 'bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]'
                            }
                        `}
                    >
                        {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        ) : isSuccess ? (
                            <>
                                <CheckCircle className="w-5 h-5" />
                                Sent Successfully
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send className="w-4 h-4 ml-1" />
                            </>
                        )}
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
}
