export default function CardSkeleton({ tags = 3, className = "" }) {
      return (
            <div role="status" className={`space-y-4 shrink-0 text-[var(--color-bl)] px-5 py-5 ${className}`}>
                  {/* Featured Image skeleton */}
                  <div className="w-64 h-48 rounded">
                        <div className="w-full h-full bg-[var(--color-bl)] animate-pulse" />
                  </div>

                  {/* Author Name and Date skeleton */}
                  <div className="w-full flex gap-4 items-center">
                        <div className="h-4 w-40 rounded bg-gray-200 dark:bg-[var(--color-bl)] animate-pulse" />
                        <div className="h-3 w-3 rounded-full bg-gray-200 dark:bg-[var(--color-bl)] animate-pulse" />
                        <div className="h-4 w-28 rounded bg-gray-200 dark:bg-[var(--color-bl)] animate-pulse" />
                  </div>

                  {/* Heading skeleton */}
                  <div className="h-10 w-3/4 sm:w-full rounded bg-gray-200 dark:bg-[var(--color-bl)] animate-pulse" />

                  {/* Excerpt skeleton */}
                  <div className="text-sm font-light space-y-2">
                        <div className="h-3 w-full rounded bg-gray-200 dark:bg-[var(--color-bl)] animate-pulse" />
                        <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-[var(--color-bl)] animate-pulse" />
                  </div>

                  {/* Tags and icon skeleton */}
                  <div className="flex justify-between w-full">
                        <div className="flex flex-wrap gap-2">
                              {Array.from({ length: tags }).map((_, i) => (
                                    <div key={i} className="px-3 py-1 border-[1px] rounded-full tracking-tight leading-none">
                                          <div className="h-3 w-12 rounded bg-gray-200 dark:bg-[var(--color-bl)] animate-pulse" />
                                    </div>
                              ))}
                        </div>
                        <div className="h-6 w-6 rounded bg-gray-200 dark:bg-[var(--color-bl)] animate-pulse" />
                  </div>
            </div>
      );
}
