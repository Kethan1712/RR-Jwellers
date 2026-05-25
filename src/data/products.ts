import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",

    slug: "royal-diamond-necklace",

    name: "Royal Diamond Necklace",

    description:
      "An elegant handcrafted diamond necklace designed with timeless luxury and bridal sophistication.",

    category: "necklaces",

    metal: "gold",

    purity: "22K",

    weight: 42,

    price: 245000,

    makingCharges: 12000,

    image: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1974&auto=format&fit=crop",
    ],

    featured: true,

    bestseller: true,

    inStock: true,

    customisable: true,

    tags: ["bridal", "luxury", "diamond"],
  },

  {
    id: "2",

    slug: "heritage-gold-bangles",

    name: "Heritage Gold Bangles",

    description:
      "Traditional gold bangles inspired by timeless South Indian craftsmanship.",

    category: "bangles",

    metal: "gold",

    purity: "22K",

    weight: 28,

    price: 128000,

    image: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1974&auto=format&fit=crop",
    ],

    featured: true,

    inStock: true,

    customisable: false,

    tags: ["traditional", "gold", "bangles"],
  },

  {
    id: "3",

    slug: "bridal-emerald-set",

    name: "Bridal Emerald Set",

    description:
      "A luxurious bridal jewellery set crafted with emerald detailing and heritage elegance.",

    category: "bridal",

    metal: "gold",

    purity: "24K",

    weight: 95,

    price: 480000,

    image: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
    ],

    featured: true,

    bestseller: true,

    inStock: true,

    customisable: true,

    tags: ["bridal", "emerald", "premium"],
  },

  {
    id: "4",

    slug: "silver-temple-pendant",

    name: "Silver Temple Pendant",

    description:
      "A handcrafted silver pendant with traditional temple-inspired detailing.",

    category: "silver",

    metal: "silver",

    purity: "Silver 925",

    weight: 18,

    price: 6800,

    image: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1974&auto=format&fit=crop",
    ],

    featured: false,

    inStock: true,

    customisable: false,

    tags: ["silver", "pendant", "traditional"],
  },

  {
    id: "5",

    slug: "royal-gold-ring",

    name: "Royal Gold Ring",

    description:
      "A handcrafted gold ring designed with timeless elegance and intricate detailing.",

    category: "rings",

    metal: "gold",

    purity: "22K",

    weight: 12,

    price: 54000,

    image: [
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1974&auto=format&fit=crop",
    ],

    featured: true,

    inStock: true,

    customisable: true,

    tags: ["rings", "gold", "luxury"],
  },

  {
    id: "6",

    slug: "heritage-gold-pendant",

    name: "Heritage Gold Pendant",

    description:
      "An elegant pendant inspired by traditional South Indian jewellery craftsmanship.",

    category: "pendants",

    metal: "gold",

    purity: "22K",

    weight: 14,

    price: 62000,

    image: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop",
    ],

    featured: true,

    inStock: true,

    customisable: false,

    tags: ["pendant", "heritage", "gold"],
  },
];