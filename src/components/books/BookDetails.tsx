'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { GET_BOOK_BY_ID } from '@/lib/graphql/queries/getBookById';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

export default function BookDetails({ id }: { id: string }) {
  const { data, loading } = useQuery(GET_BOOK_BY_ID, {
    variables: { id },
    fetchPolicy: 'cache-first',
  });

  const book = data?.booksCollection?.edges?.[0]?.node;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="space-y-4">
          <Skeleton className="h-96 w-64" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        Book not found.
      </div>
    );
  }

  const imageSrc =
    book.cover && book.cover.trim() !== ''
      ? book.cover
      : '/placeholder-book.jpg';

  return (
    <div className="p-6 flex flex-col items-center gap-6 max-w-xl mx-auto">
      <div className="relative w-64 aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow">
        <Image
          src={imageSrc}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
          priority
        />
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded shadow">
          {book.author}
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center">{book.title}</h1>
      <p className="text-muted-foreground text-center">{book.description}</p>
      <span className="text-xs text-muted-foreground">
        Added:{' '}
        {book.created_at && new Date(book.created_at).toLocaleDateString()}
      </span>
    </div>
  );
}
