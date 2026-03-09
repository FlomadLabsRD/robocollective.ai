import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Nav } from "@/components/ui";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoboCollective.ai - Intelligent Digital Operations",
  description: "Buy robots for sale from trusted makers worldwide – delivered, professionally set up, and fully supported. Explore industrial, service, and educational robots at RoboCollective.ai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Adding it here stops Grammarly from breaking your dev console */}
      <body className={`${geistSans.className} bg-black`} suppressHydrationWarning>
        <Nav />
        {children}
      </body>
    </html>
  )
}
