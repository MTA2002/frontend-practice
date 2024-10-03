import Contact from "@/components/Contact";
import FQA from "@/components/FQA";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FQA />
      <Pricing />
      <Contact />
    </div>
  );
}
