import type { Metadata } from 'next';
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/sections/Footer";
import { ContactHero, ContactForm, ContactInfo } from "@/components/sections";

export const metadata: Metadata = {
    title: 'Contact Us | RoboCollective.ai',
    description: 'Get in touch with RoboCollective to find the perfect robot or accessories for your home or business. We are here to help.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black overflow-x-hidden selection:bg-[#00DBFF]/30 selection:text-white pb-32">
            <Nav />
            <ContactHero />

            <section className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-black">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </section>

            <Footer />
        </main>
    );
}
