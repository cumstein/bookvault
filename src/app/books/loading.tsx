import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-2xl shadow-md overflow-hidden">
            <Skeleton className="w-full h-48" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full mt-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
