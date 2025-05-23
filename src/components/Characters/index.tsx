'use client';

import { Character } from '@/interfaces/characters';
import CharacterItem from './Character';
import { ChangeEvent, useState } from 'react';
import Headline from '../Headline';

interface CharacterProps {
  // List Of Characters to display
  data: Character[];
}
/**
 * List of Characters that can be filtered down.
 */
export default function Characters({ data }: CharacterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="sticky top-0 z-50 bg-primary">
        <div className="flex flex-col sm:flex-row gap-7 sm:gap-5 items-center py-8 justify-center">
          <Headline type="h3" variant="h3">
            Find Your Favorite Character
          </Headline>
          {/* Search */}
          <input
            name="character_search"
            type="search"
            value={searchTerm}
            className="rounded border-2 border-accent bg-secondary text-text outline-0 px-3 py-1"
            onChange={handleChange}
            placeholder="Character Name"
          />
        </div>
      </div>
      {/* Characters List */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3">
        {data
          .filter((v) =>
            v.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((c) => (
            <CharacterItem searchTerm={searchTerm} character={c} key={c.id} />
          ))}
      </div>
    </div>
  );
}

