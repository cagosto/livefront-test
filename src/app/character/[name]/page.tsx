import { getCharacterInfo } from '@/actions/characters';
import Bio from '@/components/Bio';
import Headline from '@/components/Headline';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Harry Potter World | Bio',
};

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const bio = await getCharacterInfo(name);

  if (!bio.name) {
    return redirect('/not-found');
  }

  return (
    <section className="p-9">
      <Headline type="h2" variant="h1">
        {decodeURIComponent(name)} Bio
      </Headline>
      <hr className="my-4 border-accent" />
      <Bio bio={bio} />
    </section>
  );
}

