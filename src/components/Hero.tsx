import Image from "next/image";
import Link from "next/link";
import { Leaf, ShoppingBag } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/content/site";

export default function Hero() {
  const h = site.hero;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-ivory">
      <Leaf aria-hidden className="float absolute -left-3 top-6 h-16 w-16 text-neem/25 lg:h-24 lg:w-24" style={{ "--r": "20deg" } as React.CSSProperties} />
      <Leaf aria-hidden className="float-slow absolute -right-3 top-28 h-14 w-14 text-neem/25 lg:h-20 lg:w-20" style={{ "--r": "-50deg" } as React.CSSProperties} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-8 lg:py-16">
        {/* Mobile: centered text. Laptop: left-aligned text */}
        <div className="text-center lg:text-left">
          <Reveal>
            <h1 className="font-serif text-4xl font-bold italic leading-tight sm:text-5xl lg:text-6xl">
              {h.line1}<br />{h.line2}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="gold-divider mx-auto my-5 lg:mx-0" />
            <p className="mx-auto max-w-md text-lg leading-relaxed lg:mx-0">{h.text}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link href={h.primaryCta.href} className="inline-flex items-center gap-2 rounded-full bg-gold-deep px-6 py-3 font-semibold text-ivory transition hover:bg-espresso">
              <ShoppingBag size={18} /> {h.primaryCta.label}
            </Link>
            <Link href={h.secondaryCta.href} className="inline-flex items-center rounded-full border border-gold-deep px-6 py-3 font-semibold transition hover:bg-gold/15">
              {h.secondaryCta.label}
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Image src={h.image} alt={h.imageAlt} width={1536} height={730} priority sizes="(min-width:1024px) 60vw, 100vw"
            className="h-auto w-full mix-blend-multiply" />
        </Reveal>
      </div>
    </section>
  );
}
