import Quote from './Quote';
import { render, screen } from '@testing-library/react';

describe('Quote', () => {
  it('should render quote provided with author', () => {
    const quote = 'Some Random Quote';
    const author = 'Unknown';

    render(<Quote quote={quote} author={author} />);

    const quoteText = screen.getByText(quote);
    const authorText = screen.getByText(author);

    expect(quoteText).toBeDefined();
    expect(authorText).toBeDefined();
  });
});
