import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

function HomeHeader() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-20 space-y-6 max-w-2xl mx-auto">
      <Image
        src="/logo.svg"
        alt="BookVault Logo"
        width={200}
        height={200}
        priority
      />
      <h1 className="text-5xl font-bold leading-tight">
        Welcome to <span className="text-primary">BookVault</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Your personal book collection powered by GraphQL & Supabase.
      </p>
      <Button
        asChild
        className="relative overflow-hidden px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-[#a69a85] to-white text-black shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:to-[#a69a85] hover:text-[#a69a85] group"
      >
        <Link href="/books" className="flex items-center gap-2">
          <span className="relative z-10 flex items-center gap-2">
            <svg
              className="w-6 h-6 animate-pulse group-hover:animate-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v15l9-2z"
              />
            </svg>
            View Vault
          </span>
          <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </Button>
    </section>
  );
}
export default HomeHeader;
