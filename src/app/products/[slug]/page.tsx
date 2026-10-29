import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/content/products";
import { formatPrice } from "@/lib/format";

type Props = { params: { slug: string } };

export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));
export const generateMetadata = ({ params }: Props) => {
  const p = products.find((x) => x.slug === params.slug);
  return { title: p ? `${p.name} - ${p.size}` : "Product" };
};

// Basic page. Quantity, Buy Now, related products agle phase mein.
export default function ProductPage({ params }: Props) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 lg:grid-cols-2 lg:px-8 lg:py-16">
      <div className="space-y-3">
        <div className="rounded-2xl bg-white p-3">
          <Image src={p.image} alt={`${p.name}, ${p.size}`} width={1200} height={800} priority className="h-auto w-full" />
        </div>
        {p.gallery.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {p.gallery.map((src, i) => (
              <div key={src} className="rounded-xl bg-white p-2">
                <Image src={src} alt={`${p.name}, ${p.size} photo ${i + 2}`} width={400} height={400} className="aspect-square w-full object-contain" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <Link href="/#shop" className="text-sm underline">Back to shop</Link>
        <h1 className="mt-3 font-serif text-3xl font-bold italic lg:text-4xl">{p.name}</h1>
        <p className="mt-1 text-espresso/70">{p.size}</p>
        {p.price !== null && <p className="mt-3 text-xl font-semibold">{formatPrice(p.price)}</p>}
        {p.description && <p className="mt-4 leading-relaxed">{p.description}</p>}
        <h2 className="mt-6 font-serif text-xl font-bold">Ingredients</h2>
        <p className="mt-1">{p.ingredients.join(", ")}</p>
        {p.notes.length > 0 && (
          <>
            <h2 className="mt-6 font-serif text-xl font-bold">Care and storage</h2>
            <ul className="mt-1 list-disc space-y-1 pl-5">{p.notes.map((n) => <li key={n}>{n}</li>)}</ul>
          </>
        )}
      </div>
    </div>
  );
}
