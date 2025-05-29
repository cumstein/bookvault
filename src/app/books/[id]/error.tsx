'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="text-6xl mb-4">😢</div>
      <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
      <p className="text-muted-foreground mb-6">
        We couldn&apos;t load your book. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition"
      >
        Retry
      </button>
    </section>
  );
}
