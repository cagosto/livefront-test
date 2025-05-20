import { getAllCharacters } from '@/actions/characters';
import Characters from '@/components/Characters';
import Headline from '@/components/Headline';

export default async function Home() {
  const charactersData = await getAllCharacters();

  return (
    <section className="p-9">
      <Headline type="h2" variant="h1">
        Enter the world of Harry Potter!
      </Headline>
      <hr className="my-4 border-accent" />
      <p>
        Discover the magical world of Harry Potter like never before with
        WizardingIndex.com. Our comprehensive character database brings the
        entire wizarding world to your fingertips - from beloved heroes to
        obscure background characters. Explore detailed profiles, family
        connections, magical abilities, and the unique journey of every witch,
        wizard, magical creature, and Muggle from all seven books and beyond.
        Whether you're a dedicated Potterhead or just beginning your magical
        journey, WizardingIndex.com is your ultimate guide to the rich tapestry
        of characters in J.K. Rowling's enchanting universe.
      </p>
      <Characters data={charactersData.filter((v) => v.actor && v.house)} />
    </section>
  );
}

