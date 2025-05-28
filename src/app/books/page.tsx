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
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 flex flex-col items-center gap-2">
        <span className="flex items-center gap-3 justify-center">
          <span className="inline-block animate-bounce">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
                fill="currentColor"
              />
              <rect x="7" y="8" width="10" height="2" rx="1" fill="#fff" />
              <rect x="7" y="12" width="7" height="2" rx="1" fill="#fff" />
            </svg>
          </span>
          <span>
            Welcome to your <span className="text-primary">Vault</span>
          </span>
        </span>
        <span className="text-base md:text-lg font-normal text-muted-foreground mt-2">
          Discover, collect, and manage your favorite books in style.
        </span>
      </h1>
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
