import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BooksPage from '@/app/books/page';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient';

describe('Books Page', () => {
  it('renders loading initially', () => {
    const { getByText } = render(
      <ApolloProvider client={client}>
        <BooksPage />
      </ApolloProvider>
    );
    expect(getByText(/Loading/i)).toBeInTheDocument();
  });
});
