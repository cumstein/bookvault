import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import ClientProviders from '@/lib/providers/ClientProviders';
import { ThemeProvider } from '@/lib/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Book Vault',
  description: 'A modern GraphQL-powered book collection app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          inter.className +
          ' bg-background text-foreground min-h-screen flex flex-col'
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container mx-auto px-4 py-6">
            <ClientProviders>{children}</ClientProviders>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
