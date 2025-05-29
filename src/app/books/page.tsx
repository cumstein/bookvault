'use client';

import { GET_BOOKS } from '@/lib/graphql/queries/getBooks';
import { useQuery } from '@apollo/client';
import type { BooksQueryData, Book } from '@/lib/graphql/types/book';
import BookCard from '@/components/books/BookCard';

import Loading from './loading';
import BooksHeader from '@/components/books/BooksHeader';
import Error from './error';

function BooksPage() {
  const { data, loading, error } = useQuery<BooksQueryData>(GET_BOOKS);

  return (
    <section className="p-6">
      <BooksHeader />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error reset={() => window.location.reload()} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.booksCollection.edges.map(({ node }: { node: Book }) => (
            <BookCard
              key={node.id}
              title={node.title}
              author={node.author}
              cover={node.cover}
              id={node.id}
            />
          ))}
        </div>
      )}
    </section>
  );
}
export default BooksPage;
