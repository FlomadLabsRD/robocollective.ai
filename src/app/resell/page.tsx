import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/sections/Footer";
import { ResellHero } from "@/components/sections/ResellHero";
import { ResellContent } from "@/components/sections/ResellContent";

export default function ResellPage() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      <ResellHero />
      <ResellContent />
      <Footer />
    </main>
  );
}
