import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharacterInfo from './CharacterInfo'; // Adjust the import path as needed

describe('CharacterInfo', () => {
  it('should render hairline and info props correctly', () => {
    render(<CharacterInfo hairline="House" info="gryffindor" />);

    expect(screen.getByText('House:')).toBeInTheDocument();
    expect(screen.getByText('gryffindor')).toBeInTheDocument();
  });
});
