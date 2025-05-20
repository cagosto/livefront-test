import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import WandItem from './WandItem';

describe('WandItem', () => {
  it('should render category and value props correctly', () => {
    render(<WandItem category="cat" value="val" />);

    expect(screen.getByText('cat:')).toBeInTheDocument();
    expect(screen.getByText('val')).toBeInTheDocument();
  });
});

