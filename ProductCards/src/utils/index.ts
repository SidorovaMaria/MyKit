import type { AllTags, clothingCard, SortValue } from "../data";

export function sortAndFilterCards({
  products,
  query,
  sort,
  selectedTags,
}: {
  products: clothingCard[];
  query: string;
  sort: SortValue;
  selectedTags: AllTags[];
}) {
  const queryValue = query.trim().toLowerCase();
  const hasTags = selectedTags.length > 0;
  const filteredCards = products.filter((card) => {
    const NameMatch = queryValue
      ? card.title.toLowerCase().includes(queryValue)
      : true;
    const TagMatch = hasTags ? selectedTags.includes(card.tag) : true;

    return NameMatch && TagMatch;
  });

  const sorted = [...filteredCards];
  switch (sort) {
    case "priceLowToHigh":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "priceHighToLow":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "Name(A-Z)":
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "Name(Z-A)":
      sorted.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "relevant":
    default:
      sorted.sort((a, b) => {
        const ai = a.title.toLowerCase().indexOf(queryValue);
        const bi = b.title.toLowerCase().indexOf(queryValue);
        const ap = ai === -1 ? Number.MAX_SAFE_INTEGER : ai;
        const bp = bi === -1 ? Number.MAX_SAFE_INTEGER : bi;
        return ap - bp;
      });
  }
  return sorted;
}

export function getPriceBounds(products: clothingCard[]) {
  let min = Number.POSITIVE_INFINITY;
  let max = 0;
  for (const p of products) {
    if (p.price < min) min = p.price;
    if (p.price > max) max = p.price;
  }
  return { min, max };
}
