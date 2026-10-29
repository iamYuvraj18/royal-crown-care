import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="font-serif text-4xl font-bold italic">Page not found</h1>
      <p className="mt-3">Ye page maujood nahi hai.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-gold-deep px-6 py-3 font-semibold text-ivory">Back to home</Link>
    </div>
  );
}
