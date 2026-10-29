import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { products } from "@/content/products";
import { site } from "@/content/site";

export default function ProductGrid() {
  return (
    <section id="shop" className="scroll-mt-28 pb-12 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal><SectionTitle>{site.shop.heading}</SectionTitle></Reveal>
        {/* Mobile: 2 columns (mobile design). Laptop: 4 columns (laptop design) */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          {products.map((p, i) => <Reveal key={p.slug} delay={i * 0.08} className="flex"><div className="flex w-full"><ProductCard product={p} /></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}
