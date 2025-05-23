import CharacterItem from './Character';
import { Character } from '@/interfaces/characters';
import { render, screen } from '@testing-library/react';
import { mockCharacters } from '@/data/mock/charactersList';
import { describe, expect, it } from 'vitest';

describe('Character', () => {
  const characterData = mockCharacters[0] as Character;

  const renderComponent = ({
    character = characterData,
    searchTerm = '',
  }: {
    character?: Character;
    searchTerm?: string;
  } = {}) => {
    render(<CharacterItem character={character} searchTerm={searchTerm} />);
  };

  it('should render Character', () => {
    renderComponent({ searchTerm: 'Harr' });

    const title = screen.getByRole('heading', { level: 3 });
    const listItems = screen.getAllByRole('listitem');
    const img = screen.getByRole('img');
    const link = screen.getByRole('link');

    expect(title).toHaveTextContent(characterData.name);
    expect(screen.getByText('Harr')).toHaveClass('font-black');
    expect(listItems.length).toBe(4);
    expect(img).toHaveAttribute('alt', characterData.actor);
    expect(link).toHaveAttribute('href', `character/${characterData.name}`);
  });

  it('should render Character with fallback image', () => {
    const data = mockCharacters[0] as Character;
    renderComponent({ searchTerm: 'Harr', character: { ...data, image: '' } });

    const title = screen.getByRole('heading', { level: 3 });
    const listItems = screen.getAllByRole('listitem');
    const img = screen.getByRole('img');

    expect(title).toHaveTextContent(data.name);
    expect(screen.getByText('Harr')).toHaveClass('font-black');
    expect(listItems.length).toBe(4);
    expect(img).toHaveAttribute('src', '/images/missing-person.svg');
    expect(img).toHaveAttribute('alt', data.actor);
  });
});

