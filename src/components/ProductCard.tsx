import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/content/products";
import { formatPrice } from "@/lib/format";
import { site } from "@/content/site";

export default function ProductCard({ product }: { product: Product }) {
  const { name, size, image, price, inStock, slug } = product;
  const canBuy = site.shop.cartEnabled && inStock !== false;
  return (
    <article className="group flex flex-col rounded-2xl border border-transparent bg-cream p-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:p-4">
      <Link href={`/products/${slug}`} aria-label={`View ${name}, ${size}`} className="block overflow-hidden rounded-xl">
        <Image src={image} alt={`${name}, ${size}`} width={600} height={450} sizes="(min-width:1024px) 25vw, 50vw"
          className="aspect-[4/3] w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
      </Link>
      <h3 className="mt-3 font-serif text-base font-bold leading-snug lg:text-lg">{name}</h3>
      <p className="text-sm text-espresso/70">{size}</p>
      {price !== null && <p className="mt-1 font-semibold">{formatPrice(price)}</p>}
      {inStock !== null && <p className={`text-sm ${inStock ? "text-neem" : "text-burgundy"}`}>{inStock ? "In stock" : "Out of stock"}</p>}
      <div className="mt-auto flex flex-col gap-2 pt-4">
        <button disabled={!canBuy} title={canBuy ? undefined : "Cart coming soon"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-deep px-4 py-2 text-sm font-semibold text-ivory transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-60">
          <ShoppingBag size={16} /> Add to Cart
        </button>
        <Link href={`/products/${slug}`} className="rounded-full border border-gold-deep px-4 py-2 text-sm font-semibold transition hover:bg-gold/15">
          View Product
        </Link>
      </div>
    </article>
  );
}
