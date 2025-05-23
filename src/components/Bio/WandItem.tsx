interface WandItemProps {
  // Eyebrow of wand details
  category: string;
  // Wand details
  value: string;
}

/**
 * List item for wand details
 */
export default function WandItem({ category, value }: WandItemProps) {
  return (
    <li>
      <div className="flex flex-row gap-1.5 items-center">
        <span className="font-light text-sm text-text text-shadow-sm">
          {category}:
        </span>
        <span className="capitalize font-semibold text-sm">{value}</span>
      </div>
    </li>
  );
}

