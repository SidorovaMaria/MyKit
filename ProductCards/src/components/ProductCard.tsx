import React from "react";
import type { clothingCard } from "../data";

const ProductCard = ({ card }: { card: clothingCard }) => {
  return (
    <li
      key={card.id}
      className="w-[250px] h-[280px] bg-background rounded-[20px] relative overflow-hidden transition-all duration-500 shadow-[0_10px_15px_-3px] shadow-white/10 border border-transparent hover:translate-y-[10px]
      hover:shadow-[0_20px_25px_-5px] hover:shadow-white/20 hover:border-white/50  group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50  to-background/60 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 group-hover:animate-shine "></div>
      <div className="absolute inset-[-10px] bg-radial from-[#3a61ed4d] to-[#3a61ed00] opacity-0 transition-opacity duration-500 ease-in group-hover:opacity-100"></div>
      <div className="p-3 h-full flex flex-col gap-0.5 relative z-2">
        <div className="absolute top-[12px] right-[12px] bg-secondary text-white px-2 py-1 rounded-xl font-medium scale-80 opacity-0 transition-all duration-300 ease-in group-hover:scale-100 group-hover:opacity-100 group-hover:z-1">
          {card.tag}
        </div>
        <div className="w-full h-full bg-gradient-to-br from-white to-white rounded-[12px] transition-all duration-500 relative overflow-hidden after:absolute after:inset-0 after:opacity-50 after:bg-repeat group-hover:translate-y-[-2px] group-hover:scale-[1.03] ">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <p className="text-base m-0 font-bold transition-all duration-300 ease group-hover:text-primary group-hover:brightness-125 group-hover:translate-x-[2px]">
            {card.title}
          </p>
          <p className="text-sm opacity-70 m-0  transition-all duration-300 ease group-hover:opacity-100 group-hover:translate-x-[2px]">
            {card.description}
          </p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="transition-all duration-300 ease-in font-bold text-white group-hover:text-accent group-hover:brightness-125 group-hover:translate-x-[2px] group-hover:text-lg">
            {card.price}$
          </div>
          <div className="w-[28px] h-[28px] bg-accent rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-125  transition-all duration-300 ease scale-90 group-hover:scale-100 ">
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
