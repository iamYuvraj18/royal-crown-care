# Royal Crown Care - Website (Phase 1: Design + Homepage)

## Chalane ka tarika
1. Node.js 18.18 ya naya install karo (nodejs.org)
2. Is folder mein terminal kholo:
   ```
   npm install
   npm run dev
   ```
3. Browser mein http://localhost:3000 kholo

## Kya kahan badalna hai (sab kuch aasaan)
| Kya badalna hai | File |
|---|---|
| Heading, text, buttons, contact number, Instagram, address, announcement bar | `src/content/site.ts` |
| Product ka naam, price, stock, ingredients | `src/content/products.ts` |
| Colours (gold, green, cream...) | `tailwind.config.ts` |
| Sections ka order | `src/app/page.tsx` |
| Photos | `public/images/` (same naam se replace karo) |

## Photos
`public/images/` mein aapki asli photos lagi hain (logo, hero, 4 products, Thank You card). Badalni ho to **same file name** se replace karo:
`logo.png`, `hero.jpg`, `detan-100g.jpg`, `detan-soap.jpg`, `neem-75g.jpg`, `neem-box.jpg`, `detan-3pack.jpg`, `neem-3pack.jpg`, `thank-you-card.jpg`.
Product ki extra photos `products.ts` ke `gallery` mein likhte hain. `neem-back.jpg` (back label) folder mein hai par site par abhi nahi lagi.
Tab icon (favicon) `src/app/icon.png` hai.

## Mobile aur laptop dono
Code "mobile-first" hai (Tailwind). Chhoti screen par **mobile design** dikhta hai, aur `lg:` (1024px+) par **laptop design**:
- Menu: hamburger (mobile) -> full links (laptop)
- Hero: text upar, photo neeche (mobile) -> text left, photo right (laptop)
- Products: 2 columns (mobile) -> 4 columns (laptop)
- Footer: center stack (mobile) -> ek row (laptop)

## Abhi kaam kar raha hai / nahi
- Kaam karta hai: homepage, navigation, product cards, basic product page, WhatsApp/phone/Instagram links, animations (reduced-motion ka dhyan rakha hai)
- Abhi nahi bana: Search, Cart, Add to Cart, Checkout, Razorpay, Supabase, Admin dashboard, policy pages. Ye agle phases mein aayenge. Cart/Search buttons abhi sirf dikhte hain.
- Prices aur stock jaan-boojh kar khali hain; `products.ts` mein khud daalo.
- Neem soap ki ingredients aur care notes uske back label se li gayi hain. Final karne se pehle ek baar check kar lena.
