import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubProductCard from "@/components/SubProductCard";
import { subProducts } from "@/data/subproducts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Format slug to Title Case for display
  const categoryTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Fetch subproducts for this category
  // In a real app, this would hit the Laravel backend: /api/category/${slug}/sub-products
  const categoryProducts = subProducts.filter(p => p.categorySlug === slug);

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Breadcrumbs */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Categories
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 tracking-tight">
            {categoryTitle} Sourcing
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Explore {categoryProducts.length} verified products from global suppliers.
          </p>
        </div>

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categoryProducts.map(product => (
              <SubProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-gray-100 rounded-xl shadow-sm">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">No Sub-Products Found</h3>
            <p className="text-gray-500 mt-1">We are updating our catalog for {categoryTitle}. Check back soon!</p>
          </div>
        )}

      </div>
    </main>
  );
}
