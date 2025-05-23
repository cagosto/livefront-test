interface CharacterInfoProps {
  hairline: string;
  info: string;
}

export default function CharacterInfo({ hairline, info }: CharacterInfoProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-sm font-light text-text text-shadow-sm">{hairline}:</p>
      <p className="font-semibold text-lg capitalize">{info}</p>
    </div>
  );
}

