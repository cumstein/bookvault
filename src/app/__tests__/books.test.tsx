import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import BooksPage from '../books/page';
import { GET_BOOKS } from '@/lib/graphql/queries/getBooks';

const mockBooks = [
  {
    node: {
      id: '1',
      title: 'Test Book',
      author: 'Test Author',
      cover: '/test.jpg',
    },
  },
];

const mocks = [
  {
    request: { query: GET_BOOKS },
    result: {
      data: {
        booksCollection: {
          edges: mockBooks,
        },
      },
    },
  },
];

describe('BooksPage', () => {
  it('shows loading skeletons while loading', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BooksPage />
      </MockedProvider>
    );
    await waitFor(() => {
      expect(
        document.querySelectorAll('[data-slot="skeleton"]').length
      ).toBeGreaterThan(0);
    });
  });

  it('renders book cards when data is loaded', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BooksPage />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText('Test Book')).toBeInTheDocument()
    );
    expect(screen.getByText('Test Author')).toBeInTheDocument();
  });

  it('shows error message on error', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: { query: GET_BOOKS },
            error: new Error('An error occurred'),
          },
        ]}
        addTypename={false}
      >
        <BooksPage />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText(/couldn't load your books/i)).toBeInTheDocument()
    );
  });
});
