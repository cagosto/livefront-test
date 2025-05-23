import { Character } from '@/interfaces/characters';
import Image from 'next/image';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Headline from '../Headline';
import Link from 'next/link';

interface CharacterProps {
  // Current Character for display
  character: Character;
  // Search value for Text highlight
  searchTerm: string;
}

/**
 * Individual Character display with details
 */
export default function CharacterItem({
  character,
  searchTerm,
}: CharacterProps) {
  const matches = match(character.name, searchTerm, { insideWords: true });
  const parts = parse(character.name, matches);
  return (
    <Link
      href={`character/${character.name}`}
      className="focus:shadow-accent outline-0 bg-secondary rounded p-2 lg:min-h-[300px] relative overflow-hidden group shadow-sm shadow-white"
    >
      <div className="absolute scale-x-0 bottom-0 top-0 px-4 py-7 bg-accent/80 right-0 left-0 transition group-hover:scale-x-100 origin-right group-hover:origin-left z-10">
        {/* Text highlight */}
        <Headline type="h3" variant="h3">
          {parts.map((parts, index) => (
            <span
              className={`${parts.highlight ? 'font-black' : 'font-normal'}`}
              key={index}
            >
              {parts.text}
            </span>
          ))}
        </Headline>
        <hr className="my-3" />
        {/* Details */}
        <ul className="space-y-2">
          <li>
            <span className="font-black">Actor:</span> {character.actor}
          </li>
          <li>
            <span className="font-black">Wizard:</span>{' '}
            {character.wizard ? 'True' : 'False'}
          </li>
          {character.patronus && (
            <li>
              <span className="font-black">Patronus:</span> {character.patronus}
            </li>
          )}
          {character.alternate_names.length > 1 && (
            <li>
              <span className="font-black">AKA:</span>{' '}
              {character.alternate_names.join(',')}
            </li>
          )}
        </ul>
      </div>

      <Image
        src={character.image || '/images/missing-person.svg'}
        alt={character.actor}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover group-hover:blur-md"
      />
    </Link>
  );
}

