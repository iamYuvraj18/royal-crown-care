"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-gold/25 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 lg:h-24 lg:px-8">
        {/* Mobile: hamburger | logo | icons.  Laptop (lg+): logo | links | icons */}
        <button className="p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <Link href="/" aria-label={`${site.name} home`}>
          <Image src="/images/logo.png" alt={site.name} width={700} height={439} className="h-14 w-auto mix-blend-multiply lg:h-[4.5rem]" priority />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          {site.nav.map((l) => (
            <Link key={l.label} href={l.href} className="border-b-2 border-transparent py-1 font-medium transition hover:border-gold">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <button className="p-2" aria-label="Search" title="Coming soon"><Search /></button>
          <button className="p-2" aria-label="Cart" title="Coming soon"><ShoppingBag /></button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-nav" aria-label="Mobile" className="overflow-hidden border-t border-gold/25 lg:hidden"
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <ul className="flex flex-col px-4 py-3">
              {site.nav.map((l) => (
                <li key={l.label}><Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">{l.label}</Link></li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
