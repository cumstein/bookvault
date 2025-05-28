import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function Home() {
  return (
    <section className="text-center py-20 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold leading-tight">
        📚 Welcome to <span className="text-primary">BookVault</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Your personal book collection powered by GraphQL & Supabase. i'm awesome
      </p>
      <Button asChild>
        <Link href="/books">📖 View Vault</Link>
      </Button>
    </section>
  );
}
