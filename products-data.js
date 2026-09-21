/* ==========================================================================
   SplendyCraft — Product Catalog
   Seeded from the 9 images already used in the homepage "Our Collections"
   gallery, so the storytelling stays consistent across the site.

   TO ADD A NEW PRODUCT: copy one object below, give it a unique "id",
   and fill in your own copy + image paths. Both products.html and
   product.html read from this single file — no other file needs editing
   to add, remove, or edit a product.

   TO ADD MORE PHOTOS TO A PRODUCT'S GALLERY: add more file paths to that
   product's "images" array, in the order you want them to appear.
   Right now each product only repeats its one existing photo — swap in
   real additional angles/close-ups whenever you have them.

   Material / Dimensions / Color / Craftsmanship / Care / Availability
   below are placeholder sample copy — replace with the real specs for
   each piece before this goes live.
   ========================================================================== */

const SPLENDY_PRODUCTS = [
  {
    id: "sacred-wood-carvings",
    name: "Sacred Wood Carvings",
    category: "Wooden Crafts",
    shortDescription: "Hand-chiseled devotional wood carvings, rendered with temple-town precision.",
    longDescription: "Carved by hand from a single block of seasoned wood, each piece in this collection draws on centuries-old temple carving traditions passed down through generations of artisan families. The deep relief work and fine detailing around the deity's form are entirely tool-worked — no molds, no shortcuts.",
    images: ["./ganesha.png", "./ganesha.png", "./ganesha.png"],
    material: "Solid seasoned teakwood, hand-finished with natural oil",
    dimensions: "Approx. 30cm (H) × 20cm (W) × 12cm (D) — sample spec, confirm per piece",
    color: "Warm natural wood tone with a hand-rubbed matte finish",
    craftsmanship: "Hand-chiseled by temple-town artisans using traditional relief-carving techniques, 40–60 hours of work per piece",
    care: "Dust with a soft dry cloth; keep away from direct sunlight and moisture; avoid chemical cleaners",
    availability: "Made to order — please inquire for current lead time"
  },
  {
    id: "pattachitra-paintings",
    name: "Pattachitra Paintings",
    category: "Wall Art",
    shortDescription: "Traditional Odisha scroll paintings, hand-painted with natural pigments.",
    longDescription: "Pattachitra is one of India's oldest surviving painting traditions, historically used to narrate mythological stories on cloth-based scrolls. Every line here is drawn freehand with a fine squirrel-hair brush, and every color is mixed from natural, mineral, and vegetable sources — a technique unchanged for centuries.",
    images: ["./pattachitra.jpeg", "./pattachitra.jpeg", "./pattachitra.jpeg"],
    material: "Cotton canvas treated with tamarind paste and chalk powder base, natural pigments",
    dimensions: "Approx. 45cm × 30cm — sample spec, confirm per piece",
    color: "Rich earth tones — ochre, indigo, vermillion, and black outlines",
    craftsmanship: "Hand-painted freehand by artisans from Odisha's Raghurajpur heritage village",
    care: "Frame under glass to protect the natural pigments; avoid direct sunlight and humidity",
    availability: "Limited stock — please inquire for availability"
  },
  {
    id: "luxury-bidriware-vases",
    name: "Luxury Bidriware Vases",
    category: "Home Decor",
    shortDescription: "Blackened alloy vases inlaid with fine silver wire, in the Bidriware tradition.",
    longDescription: "Bidriware is a metal handicraft from Bidar, Karnataka, known for its striking contrast of jet-black alloy and gleaming silver inlay. Each vase is cast, engraved by hand, inlaid with pure silver wire, and then oxidized using a local soil mixture that gives the metal its signature deep black finish.",
    images: ["./vase.png", "./vase.png", "./vase.png"],
    material: "Zinc-copper alloy with pure silver inlay, oxidized finish",
    dimensions: "Approx. 25cm (H) × 12cm (dia.) — sample spec, confirm per piece",
    color: "Deep matte black with silver inlay detailing",
    craftsmanship: "Hand-engraved and inlaid by certified Bidriware artisans; oxidization uses a traditional soil-based process",
    care: "Wipe gently with a dry, soft cloth only; avoid water and polish to preserve the oxidized finish",
    availability: "In stock — please inquire for current availability"
  },
  {
    id: "bidriware-decorative-plates",
    name: "Bidriware Decorative Plates",
    category: "Decorative Items",
    shortDescription: "Ornamental Bidriware plates with intricate floral silver inlay work.",
    longDescription: "These decorative plates carry the same Bidriware technique as our vases, reimagined as wall-mountable or display pieces. The floral and geometric inlay patterns are hand-marked and engraved before silver wire is meticulously hammered into each groove.",
    images: ["./plate.png", "./plate.png", "./plate.png"],
    material: "Zinc-copper alloy with pure silver inlay, oxidized finish",
    dimensions: "Approx. 20cm diameter — sample spec, confirm per piece",
    color: "Deep matte black with silver inlay detailing",
    craftsmanship: "Hand-engraved and inlaid by certified Bidriware artisans from Bidar, Karnataka",
    care: "Wipe gently with a dry, soft cloth only; avoid water and polish to preserve the oxidized finish",
    availability: "Made to order — please inquire for current lead time"
  },
  {
    id: "royal-vases",
    name: "Royal Vases",
    category: "Lighting",
    shortDescription: "Statement brass-toned vessels designed to hold their own in any room.",
    longDescription: "Designed as a centerpiece rather than an accessory, this piece brings warmth and old-world grandeur to a room. The form draws on royal court aesthetics, finished by hand to give each piece a subtly one-of-a-kind character.",
    images: ["./lamp.png", "./lamp.png", "./lamp.png"],
    material: "Cast metal with a hand-applied antique brass-tone finish",
    dimensions: "Approx. 35cm (H) × 15cm (dia.) — sample spec, confirm per piece",
    color: "Antique gold / brass tone",
    craftsmanship: "Cast and hand-finished by metal artisans; each piece hand-polished individually",
    care: "Dust regularly with a dry cloth; avoid abrasive cleaners on the finish",
    availability: "In stock — please inquire for current availability"
  },
  {
    id: "madhubani-folk-art",
    name: "Madhubani Folk Art",
    category: "Wall Art",
    shortDescription: "Vivid folk paintings from Bihar, hand-painted in bold natural colors.",
    longDescription: "Madhubani painting originates from the Mithila region of Bihar, traditionally created by women artists using twigs, brushes, and matchsticks in place of formal tools. The bold outlines and nature-inspired motifs — fish, peacocks, the sun, the lotus — carry deep symbolic meaning within the tradition.",
    images: ["./madhubani.jpeg", "./madhubani.jpeg", "./madhubani.jpeg"],
    material: "Handmade paper or cloth base with natural and vegetable dyes",
    dimensions: "Approx. 40cm × 30cm — sample spec, confirm per piece",
    color: "Vibrant multicolor with bold black outlines",
    craftsmanship: "Hand-painted freehand by Mithila-region folk artists",
    care: "Frame under glass; keep away from direct sunlight and moisture",
    availability: "Limited stock — please inquire for availability"
  },
  {
    id: "designer-heritage-sarees",
    name: "Designer Heritage Sarees",
    category: "Textiles & Weaves",
    shortDescription: "Handwoven silk sarees carrying the weight of centuries-old weaving traditions.",
    longDescription: "Woven on traditional handlooms, each saree in this collection can take anywhere from several days to several weeks to complete, depending on the intricacy of the zari work and motifs. The silk is sourced responsibly and woven by artisans whose families have practiced the craft for generations.",
    images: ["./mysore.jpeg", "./mysore.jpeg", "./mysore.jpeg"],
    material: "Pure handwoven mulberry silk with zari (metallic thread) detailing",
    dimensions: "Standard saree length, approx. 5.5 meters — sample spec, confirm per piece",
    color: "Rich jewel tones with gold zari borders",
    craftsmanship: "Handwoven on traditional pit looms by heritage weaving families",
    care: "Dry clean only; store folded in breathable cotton cloth, away from direct light",
    availability: "Made to order — please inquire for current lead time"
  },
  {
    id: "lotus-ceramic-vase",
    name: "Lotus Ceramic Vase",
    category: "Home Decor",
    shortDescription: "Hand-glazed ceramic vase inspired by the lotus, in the Jaipur blue pottery tradition.",
    longDescription: "Jaipur Blue Pottery is unique in that it uses no clay at all — the body is a quartz-based composite, giving it a distinct, glass-like glaze once fired. This piece draws on the lotus motif that runs through much of the region's decorative art, finished in the tradition's signature cobalt-blue palette.",
    images: ["./jaipur blue.jpeg", "./jaipur blue.jpeg", "./jaipur blue.jpeg"],
    material: "Quartz-based ceramic composite with glass glaze",
    dimensions: "Approx. 22cm (H) × 14cm (dia.) — sample spec, confirm per piece",
    color: "Cobalt blue and white",
    craftsmanship: "Hand-molded, hand-painted, and kiln-fired by Jaipur blue pottery artisans",
    care: "Hand wipe only with a soft, dry cloth; fragile — handle with care",
    availability: "In stock — please inquire for current availability"
  },
  {
    id: "sacred-balaji-artwork",
    name: "Sacred Balaji Artwork",
    category: "Temple",
    shortDescription: "Temple-inspired Tanjore artwork of Lord Balaji, finished with gold foil relief.",
    longDescription: "Tanjore painting is a classical South Indian art form recognized for its dense composition, vivid colors, and signature gold-foil relief work. This piece depicts Lord Balaji in the traditional Tanjore style, with hand-embossed gesso work beneath genuine gold foil.",
    images: ["./tanjore.jpeg", "./tanjore.jpeg", "./tanjore.jpeg"],
    material: "Wood base with gesso relief work, 22-karat gold foil, natural stone inlay",
    dimensions: "Approx. 35cm × 27cm — sample spec, confirm per piece",
    color: "Rich gold with deep jewel-tone accents",
    craftsmanship: "Hand-embossed gesso relief and gold foil work by Thanjavur artisans, 20–30 hours per piece",
    care: "Dust gently with a dry, soft brush; avoid direct sunlight and humidity to protect the gold foil",
    availability: "Made to order — please inquire for current lead time"
  }
];
