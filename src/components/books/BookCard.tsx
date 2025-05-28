'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import type { Book } from '@/lib/graphql/types/book';

function BookCard({ title, author }: Pick<Book, 'title' | 'author'>) {
  return (
    <Card className="rounded-2xl shadow-md overflow-hidden">
      <Image
        src="/placeholder-book.jpg"
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
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
