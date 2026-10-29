import { Leaf, FlaskConical, Heart, Sprout, Flower2, Sun, TreePine, type LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";

const map: Record<string, LucideIcon> = { Leaf, FlaskConical, Heart, Sprout, Flower2, Sun, TreePine };

export default function Icon({ name, ...props }: { name: string } & ComponentProps<LucideIcon>) {
  const C = map[name] ?? Leaf;
  return <C aria-hidden {...props} />;
}
