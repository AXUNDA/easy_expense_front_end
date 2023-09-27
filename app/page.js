import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main>
      <Nav />

      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
