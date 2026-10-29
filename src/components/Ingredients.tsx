import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "@/content/site";

export default function Ingredients() {
  return (
    <section id="ingredients" className="scroll-mt-28 bg-cream/60 pb-12 lg:pb-16">
      <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-5 px-4 lg:gap-8">
        {site.ingredients.map((g, i) => (
          <li key={g.name} className="w-24 text-center lg:w-32">
            <Reveal delay={i * 0.06}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-ivory lg:h-20 lg:w-20">
                <Icon name={g.icon} className="h-7 w-7 text-neem lg:h-8 lg:w-8" strokeWidth={1.5} />
              </div>
              <p className="mt-2 font-medium">{g.name}</p>
              <p className="text-xs text-espresso/70">{g.usedIn}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
