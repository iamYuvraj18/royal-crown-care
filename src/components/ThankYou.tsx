import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { site } from "@/content/site";

export default function ThankYou() {
  const t = site.thankYou;
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 lg:grid-cols-2 lg:gap-14">
        <Reveal className="mx-auto w-full max-w-md">
          {/* Card ka original artwork bina badle dikhaya gaya hai */}
          <Image src={t.image} alt={t.imageAlt} width={1100} height={776} sizes="(min-width:1024px) 448px, 90vw"
            className="h-auto w-full rounded-sm shadow-xl" />
        </Reveal>
        <Reveal delay={0.15} className="text-center lg:text-left">
          <SectionTitle>{t.title}</SectionTitle>
          <p className="mt-5 text-lg leading-relaxed">{t.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
