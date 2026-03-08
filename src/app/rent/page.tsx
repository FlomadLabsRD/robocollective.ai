import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/sections/Footer";
import { RentHero } from "@/components/sections/RentHero";
import { RentProcess } from "@/components/sections/RentProcess";

export default function RentPage() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      <RentHero />
      <RentProcess />
      <Footer />
    </main>
  );
}
