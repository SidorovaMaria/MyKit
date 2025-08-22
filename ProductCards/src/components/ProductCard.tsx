import type { clothingCard } from "../data";

const ProductCard = ({
  card,
  onTagClick,
}: {
  card: clothingCard;
  onTagClick: (tag: string) => void;
}) => {
  return (
    <li key={card.id} className="card group">
      <div className="card-shine group-hover:opacity-100"></div>
      <div className="p-3 h-full flex flex-col gap-0.5 relative z-2">
        <div
          className="card-tag group-hover:scale-100 group-hover:opacity-100 group-hover:z-1 hover:brightness-150 hover:scale-105"
          onClick={() => onTagClick(card.tag)}
        >
          {card.tag}
        </div>
        <div className="card-image group-hover:translate-y-[-2px] group-hover:scale-[1.03] ">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <p className="card-title group-hover:text-primary group-hover:brightness-125 group-hover:translate-x-[2px]">
            {card.title}
          </p>
          <p className="text-sm opacity-70 m-0 trans-300-ease group-hover:opacity-100 group-hover:translate-x-[2px]">
            {card.description}
          </p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="trans-300-ease font-bold text-white group-hover:text-accent group-hover:brightness-125 group-hover:translate-x-[2px] group-hover:text-lg">
            {card.price.toFixed(2)}$
          </div>
          <div className="w-[28px] h-[28px] bg-accent rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-125 trans-300-ease scale-90 group-hover:scale-100 ">
            <svg
              height="16"
              width="16"
              viewBox="0 0 24 24"
              className="group-hover:animate-pulse hover:animate-none! duration-150 "
            >
              <path
                stroke-width="2"
                stroke="currentColor"
                d="M4 12H20M12 4V20"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
