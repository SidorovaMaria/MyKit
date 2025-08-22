import React from "react";

const ViewToggle = ({
  value,
  onChange,
}: {
  value: "grid" | "list";
  onChange: (value: "grid" | "list") => void;
}) => {
  const Btn = ({
    view,
    label,
    children,
  }: {
    view: "grid" | "list";
    label: string;
    children: React.ReactNode;
  }) => {
    const active = value === view;
    return (
      <button
        type="button"
        aria-pressed={active}
        onClick={() => onChange(view)}
        className={`px-3 py-1.5 rounded-md border text-sm text-white border-transparent cursor-pointer hover:scale-110
          ${active ? "bg-accent/80 " : "bg-secondary/20 border-white/50 "}`}
        title={label}
      >
        {children}
      </button>
    );
  };
  return (
    <div
      className="inline-flex items-center gap-2"
      role="group"
      aria-label="View mode"
    >
      <Btn view="grid" label="Grid view">
        ▦ Grid
      </Btn>
      <Btn view="list" label="List view">
        ≣ List
      </Btn>
    </div>
  );
};

export default ViewToggle;
