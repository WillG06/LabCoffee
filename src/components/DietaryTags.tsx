import { Leaf, Sprout, Wheat, Nut, MilkOff } from "lucide-react";

const ICONS: Record<string, { Icon: typeof Leaf; label: string }> = {
  vegan: { Icon: Leaf, label: "Vegan" },
  vegetarian: { Icon: Sprout, label: "Vegetarian" },
  gf: { Icon: Wheat, label: "Gluten-Free" },
  nuts: { Icon: Nut, label: "Contains Nuts" },
  dairy: { Icon: MilkOff, label: "Contains Dairy" },
};

export function DietaryTags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {tags.map((t) => {
        const meta = ICONS[t];
        if (!meta) return null;
        const { Icon, label } = meta;
        return (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-bone px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-ink-soft"
          >
            <Icon className="h-3 w-3" aria-hidden />
            {label}
          </span>
        );
      })}
    </div>
  );
}
