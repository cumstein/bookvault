import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="bg-card border-b px-6 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          📚 BookVault
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/books" className="hover:underline">
            Books
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
