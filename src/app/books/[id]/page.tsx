import BookDetails from '@/components/books/BookDetails';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BookPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="p-6">
      <Link
        href="/books"
        className="inline-flex items-center gap-2 mb-6 text-[#a69a85] hover:text-primary font-semibold transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Vault
      </Link>
      <BookDetails id={id} />
    </div>
  );
}
