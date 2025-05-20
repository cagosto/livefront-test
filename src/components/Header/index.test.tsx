import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('should render logo', () => {
    render(<Header />);
    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Harry Potter World');
  });
});

