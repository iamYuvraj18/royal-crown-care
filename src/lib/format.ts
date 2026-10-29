import { site } from "@/content/site";

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const waLink = () => `https://wa.me/${site.contact.countryCode}${site.contact.whatsapp}`;
export const telLink = (n: string) => `tel:+${site.contact.countryCode}${n}`;
export const instaLink = () => `https://instagram.com/${site.contact.instagram}`;
