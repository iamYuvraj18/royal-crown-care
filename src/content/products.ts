// Chaaron products yahin hain. Price/stock bhi yahin set karo.
// price: null = price nahi dikhega. inStock: null = stock status nahi dikhega.
// image = card ki photo, gallery = product page ki extra photos.
// ingredients/notes pack ke label se liye gaye hain; badalne se pehle label check karo.
// (Database wale phase mein ye data admin dashboard se aayega.)
export type Product = {
  slug: string;
  name: string;
  size: string;
  image: string;
  gallery: string[];
  ingredients: string[];
  notes: string[];
  description: string;
  price: number | null;
  inStock: boolean | null;
};

const detanIngredients = ["Kesar (Saffron)", "Sandalwood", "Turmeric"];
const neemIngredients = ["Goat Milk Soap Base", "Neem", "Aloe Vera", "Coconut Oil", "Vitamin E", "Glycerine", "Premium Fragrance"];
const neemNotes = [
  "For external use only. Avoid contact with eyes. If irritation occurs, discontinue use. Keep out of reach of children.",
  "Store in a cool, dry place away from direct sunlight and excessive heat. Allow soap to dry between uses.",
  "Best before 24 months from the date of manufacturing.",
];

export const products: Product[] = [
  { slug: "de-tan-soap-100g", name: "De-Tan Soap", size: "100 g", image: "/images/detan-100g.jpg",
    gallery: ["/images/detan-soap.jpg"], ingredients: detanIngredients, notes: [], description: "", price: null, inStock: null },
  { slug: "neem-aloe-vera-soap-75g", name: "Neem & Aloe Vera Soap", size: "75 g", image: "/images/neem-75g.jpg",
    gallery: ["/images/neem-box.jpg"], ingredients: neemIngredients, notes: neemNotes, description: "", price: null, inStock: null },
  { slug: "de-tan-soap-3-pack", name: "De-Tan Soap", size: "3 Pack", image: "/images/detan-3pack.jpg",
    gallery: [], ingredients: detanIngredients, notes: [], description: "Pack of three 100 g soaps.", price: null, inStock: null },
  { slug: "neem-aloe-vera-soap-3-pack", name: "Neem & Aloe Vera Soap", size: "3 Pack", image: "/images/neem-3pack.jpg",
    gallery: [], ingredients: neemIngredients, notes: neemNotes, description: "Pack of three 75 g soaps.", price: null, inStock: null },
];
