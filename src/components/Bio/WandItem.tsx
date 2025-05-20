interface WandItemProps {
  category: string;
  value: string;
}
export default function WandItem({ category, value }: WandItemProps) {
  return (
    <li>
      <div className="flex flex-row gap-1.5 items-center">
        <span className="font-light text-sm text-accent">{category}:</span>
        <span className="capitalize font-semibold text-sm">{value}</span>
      </div>
    </li>
  );
}

