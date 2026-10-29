// Poori site ka text, links aur contact details yahin hain.
// Kuch badalna ho to sirf is file ko edit karo.
export const site = {
  name: "Royal Crown Care",
  tagline: "Your everyday care, inspired by nature.",
  description: "Handcrafted soaps inspired by nature, made for your daily ritual.",
  url: "https://example.com", // deploy ke baad apna domain likho

  // Offer/shipping banner. enabled: true karo aur text likho. Koi offer khud se nahi banaya gaya.
  announcement: { enabled: false, text: "" },

  contact: {
    countryCode: "91",
    whatsapp: "6350547794",
    phone2: "8875649498",
    instagram: "royalcrowncare",
    address: "Jolpa Road, Sangod, Rajasthan",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Shop All", href: "/#shop" },
    { label: "Our Story", href: "/#story" },
    { label: "Ingredients", href: "/#ingredients" },
    { label: "Contact", href: "/#contact" },
  ],

  hero: {
    line1: "Royal Care.",
    line2: "Naturally You.",
    text: "Handcrafted soaps inspired by nature, made for your daily ritual.",
    primaryCta: { label: "Shop Collection", href: "#shop" },
    secondaryCta: { label: "Discover Our Story", href: "#story" },
    image: "/images/hero.jpg",
    imageAlt: "Royal Crown Care De-Tan Soap box and soap with saffron, turmeric and sandalwood",
  },

  highlights: [
    { label: "Thoughtfully Crafted", icon: "Leaf" },
    { label: "Natural Ingredients", icon: "FlaskConical" },
    { label: "Gentle Cleansing", icon: "Sprout" },
    { label: "Made with Care", icon: "Heart" },
  ],

  // cartEnabled: cart banne ke baad true karenge
  shop: { heading: "Discover Your Daily Ritual", cartEnabled: false },

  story: {
    title: "Made with Care.",
    text: "Handmade soaps crafted with nature-inspired ingredients for a gentle, refreshing and nourishing cleanse.",
  },

  // usedIn: sirf wahi soap likho jisme ingredient label par verified ho.
  ingredients: [
    { name: "Neem", icon: "Leaf", usedIn: "Neem & Aloe Vera Soap" },
    { name: "Aloe Vera", icon: "Sprout", usedIn: "Neem & Aloe Vera Soap" },
    { name: "Turmeric", icon: "Sun", usedIn: "De-Tan Soap" },
    { name: "Sandalwood", icon: "TreePine", usedIn: "De-Tan Soap" },
    { name: "Saffron", icon: "Flower2", usedIn: "De-Tan Soap" },
  ],

  thankYou: {
    title: "A Little Thank You.",
    text: "Thank you for choosing Royal Crown Care. Your trust means the world to us.",
    image: "/images/thank-you-card.jpg",
    imageAlt: "Royal Crown Care thank you card",
  },

  // Page ban jaye to ready: true kar do, tab footer mein dikhega.
  policies: [
    { label: "Privacy Policy", href: "/privacy-policy", ready: false },
    { label: "Terms and Conditions", href: "/terms", ready: false },
    { label: "Shipping Policy", href: "/shipping-policy", ready: false },
    { label: "Returns and Refunds", href: "/returns-refunds", ready: false },
  ],
};
