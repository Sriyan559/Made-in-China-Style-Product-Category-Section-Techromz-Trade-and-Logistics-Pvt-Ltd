export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Main Content Area Skeleton */}
      <main className="flex-grow">
        {/* Hero Section Skeleton */}
        <section className="bg-gray-100 py-16 md:py-24 animate-pulse">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="h-6 w-32 bg-gray-300 rounded-full mb-6"></div>
              <div className="h-12 w-3/4 bg-gray-300 rounded-lg mb-4"></div>
              <div className="h-12 w-1/2 bg-gray-300 rounded-lg mb-6"></div>
              <div className="h-4 w-full bg-gray-200 rounded-lg mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded-lg mb-8"></div>
              <div className="flex gap-4">
                <div className="h-12 w-36 bg-gray-300 rounded-lg"></div>
                <div className="h-12 w-48 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Statistics Grid Skeleton */}
        <section className="bg-white border-b border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-4 border-r last:border-0 border-border">
                  <div className="h-10 w-24 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                  <div className="h-3 w-20 bg-gray-100 rounded-lg mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Categories Skeleton */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center animate-pulse">
              <div className="h-8 w-64 bg-gray-300 rounded-lg mx-auto mb-4"></div>
              <div className="h-4 w-96 bg-gray-200 rounded-lg mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1440px]:grid-cols-4 gap-6 md:gap-8">
              {[...Array(8)].map((_, i) => (
                <article key={i} className="flex flex-col bg-white border border-border rounded-xl overflow-hidden shadow-sm animate-pulse">
                  <div className="w-full aspect-[16/10] bg-gray-200"></div>
                  <div className="p-5 flex-grow">
                    <div className="h-3 w-16 bg-gray-200 rounded mb-3"></div>
                    <div className="h-6 w-3/4 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-100 rounded"></div>
                      <div className="h-4 w-full bg-gray-100 rounded"></div>
                      <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="px-5 pb-5 mt-auto">
                    <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
