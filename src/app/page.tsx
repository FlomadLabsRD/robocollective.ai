import { Hero, HomeProducts, CAIPO, Services, RentResell, Blog, Footer } from "@/components/sections";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <CAIPO />
      <HomeProducts />
      <Services />
      <RentResell />
      <Blog />
      <Footer />
    </main>
  );
}
