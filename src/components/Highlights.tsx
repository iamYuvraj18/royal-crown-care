import Icon from "./Icon";
import { site } from "@/content/site";

export default function Highlights() {
  return (
    <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-8 sm:grid-cols-4 lg:py-10">
      {site.highlights.map((h) => (
        <li key={h.label} className="flex flex-col items-center gap-2 text-center text-sm font-medium lg:flex-row lg:justify-center lg:text-base">
          <Icon name={h.icon} className="h-8 w-8 text-gold-deep lg:h-5 lg:w-5" strokeWidth={1.5} />
          {h.label}
        </li>
      ))}
    </ul>
  );
}
