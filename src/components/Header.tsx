import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-card border-b px-6 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center text-xl font-bold gap-2">
          <Image
            src="/logo.svg"
            alt="BookVault Logo"
            width={32}
            height={32}
            priority
            className="w-8 h-8"
          />
          BookVault
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
