export interface Book {
  id: string;
  title: string;
  author: string;
  description?: string;
  created_at: string;
  cover: string;
}

export interface BookEdge {
  node: Book;
}

export interface BooksCollection {
  edges: BookEdge[];
}

export interface BooksQueryData {
  booksCollection: BooksCollection;
}
