import { Character } from '@/interfaces/characters';
import Headline from '../Headline';
import Image from 'next/image';
import houseColor, { HouseNames } from '@/utils/houseColor';
import CharacterInfo from './CharacterInfo';
import WandItem from './WandItem';

interface BioProps {
  bio: Character;
}

export enum BIO_TEST_IDS {
  holder = 'test-bio-holder',
}

export default function Bio({ bio }: BioProps) {
  const isEmpty = Object.values(bio.wand).every((v) => v === '' || v === null);

  return (
    <div
      data-testid={BIO_TEST_IDS.holder}
      className={`rounded-2xl bg-secondary border-2 p-6 max-w-lg mx-auto mt-10 shadow-lg ${houseColor(
        bio.house as HouseNames
      )}`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 ">
        <Headline type="h3" variant="h3">
          <span className="block text-base font-light text-accent text-center sm:text-left">
            House
          </span>
          {bio.house}
        </Headline>
        {bio.image && (
          <div
            className={`rounded-full w-20 h-20 overflow-hidden shadow border ${houseColor(
              bio.house as HouseNames
            )}`}
          >
            <Image
              src={bio.image}
              alt={bio.actor}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover group-hover:blur-md"
            />
          </div>
        )}
      </div>

      <hr className="my-4" />
      <div className="grid sm:grid-cols-2 gap-3.5">
        {bio.alternate_names.length > 0 && (
          <CharacterInfo
            hairline="Alternate Names"
            info={bio.alternate_names.join(', ')}
          />
        )}
        {bio.species && <CharacterInfo hairline="Species" info={bio.species} />}
        {bio.gender && <CharacterInfo hairline="Gender" info={bio.gender} />}
        {bio.ancestry && (
          <CharacterInfo hairline="Ancestry" info={bio.ancestry} />
        )}
        {bio.patronus && (
          <CharacterInfo hairline="Patronus" info={bio.patronus} />
        )}
        {!isEmpty && (
          <div className="flex flex-col gap-1.5">
            <p className="text-sm font-light text-accent">Wand:</p>
            <ul className="ml-4 list-disc space-y-2">
              {bio.wand.wood && (
                <WandItem category="Wood" value={bio.wand.wood} />
              )}
              {bio.wand.core && (
                <WandItem category="Core" value={bio.wand.core} />
              )}
              {bio.wand.length && (
                <WandItem category="Length" value={`${bio.wand.length}`} />
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

