import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 text-center">
      <div className="max-w-md bg-white border border-border p-8 rounded-xl shadow-xs">
        <span className="inline-block text-5xl mb-4" role="img" aria-label="Not Found">
          🔍
        </span>
        <h1 className="text-2xl font-extrabold text-secondary mb-2">
          Category Not Found
        </h1>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          The requested product sourcing category could not be found in our wholesale index. It may have been archived or renamed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-red-600 transition-colors shadow-xs"
        >
          Return to Catalog Home
        </Link>
      </div>
    </div>
  );
}
