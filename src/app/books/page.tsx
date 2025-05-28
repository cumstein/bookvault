'use client';

import { GET_BOOKS } from '@/lib/graphql/queries/getBooks';
import { useQuery } from '@apollo/client';
import type { BooksQueryData, Book } from '@/lib/graphql/types/book';
import BookCard from '@/components/books/BookCard';
import Loading from './loading';

function BooksPage() {
  const { data, loading, error } = useQuery<BooksQueryData>(GET_BOOKS);

  if (loading) return <Loading />;
  // add error page next 15 wise
  if (error) return <p>Error loading books</p>;
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Vault</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.booksCollection.edges.map(({ node }: { node: Book }) => (
          <BookCard
            key={node.id}
            title={node.title}
            author={node.author}
            cover={node.cover}
          />
        ))}
      </div>
    </section>
  );
}
export default BooksPage;
