import React from "react";
type Props = {
  tags: string[];
  selected: Set<string>;
  onToggle: (tag: string) => void;
};
const TagChip = ({ tags, selected, onToggle }: Props) => {
  if (tags.length === 0) return null;
  return (
    <div className="flex items-center gap-2 flex-wrap ">
      <span className="text-sm font-bold sr-only">Filter By Tags</span>
      <p className="text-sm font-bold">Filter By Tags:</p>
      {tags.map((tag) => {
        const active = selected.has(tag);
        return (
          <button
            key={tag}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(tag)}
            className={`px-3 py-1 rounded-xl text-sm cursor-pointer hover:scale-110 hover:brightness-125 ${
              active
                ? "bg-primary text-background "
                : "bg-secondary/30 border border-text/30"
            }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default TagChip;
