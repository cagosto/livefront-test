import { mockCharacters } from '@/data/mock/charactersList';
import { Character } from '@/interfaces/characters';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Characters from '.';
import userEvent from '@testing-library/user-event';

describe('Characters', () => {
  const charactersData = mockCharacters as Character[];

  const renderComponent = ({
    character = charactersData,
  }: {
    character?: Character[];
  } = {}) => {
    render(<Characters data={character} />);
  };

  it('should filter list', async () => {
    renderComponent();
    const search = screen.getByRole('searchbox');
    const linkList = screen.getAllByRole('link');

    expect(linkList.length).toBe(3);

    const user = userEvent.setup();

    expect(search).toHaveValue('');

    await user.type(search, 'ha');

    await waitFor(() => {
      const filterList = screen.getAllByRole('link');

      expect(filterList.length).toBe(2);
    });

    await user.type(search, 'r');

    await waitFor(() => {
      const filterList = screen.getAllByRole('link');

      expect(filterList.length).toBe(1);
    });

    await user.clear(search);

    await waitFor(() => {
      const filterList = screen.getAllByRole('link');

      expect(filterList.length).toBe(3);
    });
  });
});

