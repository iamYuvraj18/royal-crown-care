import type { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-3xl font-bold italic leading-tight lg:text-4xl">{children}</h2>
      <div className="gold-divider mx-auto mt-3" />
    </div>
  );
}
