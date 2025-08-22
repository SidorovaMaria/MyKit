export interface clothingCard {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  tag: string;
}
export const clothingCards: clothingCard[] = [
  {
    id: 1,
    title: "Silk Hanfu Dress",
    description:
      "Flowing traditional hanfu made of soft silk with embroidered floral patterns.",
    image: "https://picsum.photos/200/300?random=21",
    price: 129.99,
    tag: "new",
  },
  {
    id: 2,
    title: "Modern Kimono Jacket",
    description:
      "Lightweight kimono-style jacket with minimalist prints for everyday wear.",
    image: "https://picsum.photos/200/300?random=22",
    price: 89.5,
    tag: "popular",
  },
  {
    id: 3,
    title: "Streetwear Yukata",
    description:
      "Urban-inspired yukata with bold geometric patterns, designed for comfort and style.",
    image: "https://picsum.photos/200/300?random=23",
    price: 74.99,
    tag: "bestseller",
  },
  {
    id: 4,
    title: "Cheongsam Midi Dress",
    description:
      "Elegant fitted cheongsam with high collar and subtle side slit, perfect for evening events.",
    image: "https://picsum.photos/200/300?random=24",
    price: 159.0,
    tag: "limited",
  },
  {
    id: 5,
    title: "Oversized Haori Coat",
    description:
      "Contemporary haori coat with wide sleeves and modern fabric blend for layering.",
    image: "https://picsum.photos/200/300?random=25",
    price: 110.0,
    tag: "trending",
  },
  {
    id: 6,
    title: "Embroidered Cheongsam Top",
    description:
      "Short-sleeve cheongsam-inspired blouse with delicate golden embroidery.",
    image: "https://picsum.photos/200/300?random=26",
    price: 68.0,
    tag: "new",
  },
  {
    id: 7,
    title: "Samurai Street Jacket",
    description:
      "Bomber jacket with dragon embroidery and samurai-inspired silhouette.",
    image: "https://picsum.photos/200/300?random=27",
    price: 135.0,
    tag: "limited",
  },
  {
    id: 8,
    title: "Pleated Wrap Skirt",
    description:
      "High-waisted pleated skirt with a side tie, blending modern and traditional design.",
    image: "https://picsum.photos/200/300?random=28",
    price: 54.99,
    tag: "popular",
  },
  {
    id: 9,
    title: "Origami Sleeve Blouse",
    description:
      "Minimalist blouse with origami-inspired folded sleeves for a sculptural look.",
    image: "https://picsum.photos/200/300?random=29",
    price: 72.5,
    tag: "editor’s-pick",
  },
  {
    id: 10,
    title: "Kimono Obi Belt",
    description:
      "Wide sash belt inspired by traditional obi, perfect for accentuating the waist.",
    image: "https://picsum.photos/200/300?random=30",
    price: 34.99,
    tag: "accessory",
  },
  {
    id: 11,
    title: "Dragon Embroidered Hoodie",
    description:
      "Casual oversized hoodie with intricate dragon embroidery on the back.",
    image: "https://picsum.photos/200/300?random=31",
    price: 95.0,
    tag: "trending",
  },
  {
    id: 12,
    title: "Sakura Print Kimono Dress",
    description:
      "Lightweight dress with sakura blossom print, combining kimono sleeves and a modern cut.",
    image: "https://picsum.photos/200/300?random=32",
    price: 120.0,
    tag: "seasonal",
  },
];

export const Sorts = [
  { value: "relevant", label: "Relevant" },
  { value: "priceLowToHigh", label: "Price: Low to High" },
  { value: "priceHighToLow", label: "Price: High to Low" },
  { value: "Name(A-Z)", label: "A-Z" },
  { value: "Name(Z-A)", label: "Z-A" },
] as const;
export type Sort = (typeof Sorts)[number];
export type SortValue = (typeof Sorts)[number]["value"];

export const ALL_TAGS = [...new Set(clothingCards.map((card) => card.tag))];
export type AllTags = (typeof ALL_TAGS)[number];
