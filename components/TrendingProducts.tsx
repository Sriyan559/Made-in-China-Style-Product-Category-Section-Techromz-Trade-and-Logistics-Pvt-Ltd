import React from "react";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export const TrendingProducts: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-16 bg-background"
      aria-labelledby="trending-products-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          title="Selected Trending Products"
          subtitle="Discover the most popular sourcing categories from global suppliers."
        />

        {/* Responsive Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1440px]:grid-cols-4 gap-6 md:gap-8"
          role="region" 
          aria-label="Product Categories Grid"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
