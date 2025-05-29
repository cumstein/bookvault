import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import type { Book } from '@/lib/graphql/types/book';
import Link from 'next/link';

function BookCard({
  title,
  author,
  cover,
  id,
}: Pick<Book, 'title' | 'author' | 'cover' | 'id'>) {
  const imageSrc =
    cover && cover.trim() !== '' ? cover : '/placeholder-book.jpg';
  return (
    <Link
      href={`/books/${id}`}
      className="block group"
      tabIndex={-1}
      aria-label={`View details for ${title}`}
    >
      <Card className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-card via-background to-muted transition-transform hover:scale-105 hover:shadow-2xl dark:hover:shadow-primary/20 group max-w-xs w-full mx-auto cursor-pointer">
        <div className="relative w-full aspect-[3/4] bg-gray-100 dark:bg-gray-800">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-fit object-center transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded shadow">
            {author}
          </div>
        </div>
        <CardContent className="p-4 flex flex-col gap-2">
          <h2 className="text-lg text-center font-bold line-clamp-2">
            {title}
          </h2>
        </CardContent>
      </Card>
    </Link>
  );
}
export default BookCard;
