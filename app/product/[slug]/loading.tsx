import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-background animate-pulse" aria-hidden="true">
      {/* Header Skeleton */}
      <div className="h-16 bg-white border-b border-border flex items-center justify-between px-8">
        <div className="w-32 h-6 bg-gray-200 rounded" />
        <div className="w-24 h-8 bg-gray-200 rounded" />
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        {/* Breadcrumb Skeleton */}
        <div className="w-48 h-4 bg-gray-200 rounded" />

        {/* Hero Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-border rounded-xl overflow-hidden min-h-[450px]">
          <div className="lg:col-span-7 bg-gray-200 min-h-[300px]" />
          <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-32 h-5 bg-gray-200 rounded-full" />
              <div className="w-2/3 h-8 bg-gray-200 rounded" />
              <div className="w-full h-24 bg-gray-200 rounded-lg" />
              <div className="w-full h-28 bg-gray-200 rounded-lg" />
            </div>
            <div className="w-full h-12 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
