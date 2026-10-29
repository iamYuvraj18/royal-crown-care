import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";
import { instaLink, telLink, waLink } from "@/lib/format";

export default function Footer() {
  const c = site.contact;
  const policies = site.policies.filter((p) => p.ready);
  const link = "inline-flex items-center gap-2 transition hover:text-gold";
  return (
    <footer className="bg-neem text-ivory">
      {/* Mobile: sab kuch center mein upar-neeche. Laptop (lg+): ek hi row */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center lg:flex-row lg:flex-wrap lg:justify-between lg:gap-8 lg:px-8 lg:py-8 lg:text-left">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <Image src="/images/logo.png" alt={site.name} width={700} height={439} className="h-16 w-auto rounded bg-ivory px-3 py-1" />
          <p className="text-sm text-ivory/80">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {site.nav.map((l) => <Link key={l.label} href={l.href} className="hover:text-gold">{l.label}</Link>)}
        </nav>
        <ul className="flex flex-col items-center gap-2 text-sm lg:items-start">
          <li><a className={link} href={instaLink()} target="_blank" rel="noopener noreferrer"><Instagram size={18} /> @{c.instagram}</a></li>
          <li><a className={link} href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> {c.whatsapp}</a></li>
          <li><a className={link} href={telLink(c.phone2)}><Phone size={18} /> {c.phone2}</a></li>
          <li className="inline-flex items-center gap-2"><MapPin size={18} className="text-gold" /> {c.address}</li>
        </ul>
      </div>
      <div className="border-t border-gold/40 px-4 py-4 text-center text-xs text-ivory/75">
        {policies.map((p) => <Link key={p.href} href={p.href} className="mx-3 hover:text-gold">{p.label}</Link>)}
        <p className="mt-1">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
