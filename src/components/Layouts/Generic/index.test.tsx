import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GenericLayout from '.';

describe('GenericLayout', () => {
  it('should render layout', () => {
    const titleCopy = 'Title';
    const messageCopy = 'test message';

    render(<GenericLayout message={messageCopy} title={titleCopy} />);

    const link = screen.getByRole('link');
    const title = screen.getByRole('heading', { level: 2 });
    const message = screen.getByText(messageCopy);

    expect(message).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    expect(title).toHaveTextContent(titleCopy);
  });
});

