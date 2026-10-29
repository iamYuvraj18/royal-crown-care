import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { site } from "@/content/site";

export default function Story() {
  return (
    <section id="story" className="scroll-mt-28 bg-cream/60 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Reveal><SectionTitle>{site.story.title}</SectionTitle></Reveal>
        <Reveal delay={0.1}><p className="mt-5 text-lg leading-relaxed">{site.story.text}</p></Reveal>
      </div>
    </section>
  );
}
