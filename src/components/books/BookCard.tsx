'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import type { Book } from '@/lib/graphql/types/book';

function BookCard({
  title,
  author,
  cover,
}: Pick<Book, 'title' | 'author' | 'cover'>) {
  const imageSrc =
    cover && cover.trim() !== '' ? cover : '/placeholder-book.jpg';
  return (
    <Card className="rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-white/10">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={250}
        className="w-full aspect-[16/10] object-fit object-center rounded-t-2xl bg-gray-100"
        priority
      />
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{author}</p>
        <Button variant="outline" className="mt-4 w-full">
          Details
        </Button>
      </CardContent>
    </Card>
  );
}
export default BookCard;
