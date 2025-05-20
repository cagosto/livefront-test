import { mockCharacters } from '@/data/mock/charactersList';
import { Character } from '@/interfaces/characters';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Bio, { BIO_TEST_IDS } from '.';

describe('Bio', () => {
  const bioData = mockCharacters[0] as Character;
  const renderComponent = (bio = bioData) => {
    render(<Bio bio={bio} />);
  };

  it('should render bio correctly', () => {
    renderComponent();

    const houseTitle = screen.getByRole('heading', { level: 3 });
    const img = screen.getByRole('img');
    const holder = screen.getByTestId(BIO_TEST_IDS.holder);

    expect(houseTitle).toHaveTextContent(bioData.house);
    expect(img).toHaveAttribute('alt', bioData.actor);
    expect(holder).toHaveClass('border-red-950');
    expect(
      screen.getByText(bioData.alternate_names.join(', '))
    ).toBeInTheDocument();
    expect(screen.getByText(bioData.species)).toBeInTheDocument();
    expect(screen.getByText(bioData.gender)).toBeInTheDocument();
    expect(screen.getByText(bioData.patronus)).toBeInTheDocument();
    expect(screen.getByText(bioData.wand.core)).toBeInTheDocument();
    expect(screen.getByText(bioData.wand.length)).toBeInTheDocument();
    expect(screen.getByText(bioData.wand.wood)).toBeInTheDocument();
  });

  it('should render bio without wand', () => {
    const bioData = mockCharacters[2] as Character;
    renderComponent(bioData);

    const houseTitle = screen.getByRole('heading', { level: 3 });
    const img = screen.getByRole('img');
    const holder = screen.getByTestId(BIO_TEST_IDS.holder);

    expect(houseTitle).toHaveTextContent(bioData.house);
    expect(img).toHaveAttribute('alt', bioData.actor);
    expect(holder).toHaveClass('border-slate-600');
    expect(screen.queryByText('Alternate Names')).not.toBeInTheDocument();
    expect(screen.getByText(bioData.species)).toBeInTheDocument();
    expect(screen.getByText(bioData.gender)).toBeInTheDocument();
    expect(screen.getByText(bioData.patronus)).toBeInTheDocument();
    expect(screen.queryByText('Core')).not.toBeInTheDocument();
    expect(screen.queryByText('Length')).not.toBeInTheDocument();
    expect(screen.queryByText('Wood')).not.toBeInTheDocument();
  });

  it('should render bio without image', () => {
    const bioData = mockCharacters[1] as Character;
    renderComponent({ ...bioData, image: '' });

    const houseTitle = screen.getByRole('heading', { level: 3 });
    const img = screen.queryByRole('img');
    const holder = screen.getByTestId(BIO_TEST_IDS.holder);

    expect(houseTitle).toHaveTextContent(bioData.house);
    expect(img).not.toBeInTheDocument();
    expect(holder).toHaveClass('border-green-500');
  });
});

