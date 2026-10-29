import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ProductGrid from "@/components/ProductGrid";
import Story from "@/components/Story";
import Ingredients from "@/components/Ingredients";
import ThankYou from "@/components/ThankYou";

// Sections ka order badalna ho to yahan lines upar-neeche kar do.
export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <ProductGrid />
      <Story />
      <Ingredients />
      <ThankYou />
    </>
  );
}
