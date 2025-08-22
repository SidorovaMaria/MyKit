import { useEffect, useMemo, useState } from "react";
import ProductCard from "./components/ProductCard";
import { clothingCards, Sorts, type Sort } from "./data";
import { sortAndFilterCards } from "./utils";
import useDebouncedValue from "./hooks/useDebouncedValue";

function App() {
  const [sort, setSort] = useState<Sort>(Sorts[0]);
  const [search, setSearch] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");
    const sort = params.get("sort");
    const selectedTags = params.get("tags");
    if (query) setSearch(query);
    if (sort) {
      const sortOption = Sorts.find((s) => s.value === sort);
      if (sortOption) setSort(sortOption);
    }
    if (selectedTags) {
      if (selectedTags)
        setSelectedTags(new Set(selectedTags.split(",").filter(Boolean)));
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search.trim()) params.set("q", search.trim());
    if (sort.value !== "relevant") params.set("sort", sort.value);
    if (selectedTags.size > 0)
      params.set("tags", Array.from(selectedTags).join(","));

    const q = params.toString();
    const next = q ? `?${q}` : window.location.pathname;
    window.history.replaceState(null, "", next);
  }, [search, sort, selectedTags]);
  const debouncedSearch = useDebouncedValue(search, 300);

  const filteredProducts = useMemo(
    () =>
      sortAndFilterCards({
        products: clothingCards,
        query: debouncedSearch,
        sort: sort.value,
        selectedTags: Array.from(selectedTags),
      }),
    [debouncedSearch, sort, selectedTags]
  );

  return (
    <main className="container mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="font-bold text-3xl">Product Cards - Showcase</h1>
        <p className="text-primary mt-3">
          Explore my collection of beautifully designed product cards, that I
          created to practice React functionality
        </p>
      </header>
      <div className="flex items-center gap-4 m-2">
        <div className="w-full">
          <label htmlFor="search" className="sr-only">
            Search products
          </label>
          <input
            id="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full outline-none border border-primary rounded-xl
            focus:bg-primary/20 p-3 "
          />
        </div>
        <div className="justify-self-end">
          <label htmlFor="sort" className="sr-only">
            Sort products
          </label>
          <select
            id="sort"
            value={sort.value}
            onChange={(e) => {
              const selected = Sorts.find((s) => s.value === e.target.value);
              if (selected) setSort(selected);
            }}
            className="w-full outline-none border border-primary rounded-xl
            focus:bg-primary/20 py-3  text-center"
          >
            {Sorts.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul className="flex flex-wrap gap-8 w-full justify-center items-center">
        {filteredProducts.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </ul>
    </main>
  );
}

export default App;
