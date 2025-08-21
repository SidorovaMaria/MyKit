import ProductCard from "./components/ProductCard";
import { clothingCards } from "./data";

function App() {
  return (
    <main className="container mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="font-bold text-3xl">Product Cards - Showcase</h1>
        <p className="text-primary mt-3">
          Explore my collection of beautifully designed product cards, that I
          created to practice React functionality
        </p>
      </header>
      <ul className="flex flex-wrap gap-8 w-full justify-center items-center">
        {clothingCards.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </ul>
    </main>
  );
}

export default App;
