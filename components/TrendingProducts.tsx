"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

export const TrendingProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/trending-products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error("Backend offline");
        }
      } catch (error) {
        console.warn("Backend fetch failed, using fallback mock data:", error);
        // Fallback mock data with high-quality realistic Unsplash product photos
        setProducts([
          { id: 1, title: "Green Travel", slug: "green-travel", image: "/images/products/scooter.png", short_description: "", long_description: "", features: [] },
          { id: 2, title: "Kitchen Electronics", slug: "kitchen-electronics", image: "/images/products/rice_cooker.png", short_description: "", long_description: "", features: [] },
          { id: 3, title: "Global Holiday Gifts Festival", slug: "gifts", image: "/images/products/holiday_gifts.png", short_description: "", long_description: "", features: [] },
          { id: 4, title: "PV Energy & Clean Metallurgy", slug: "solar", image: "/images/products/solar_panels.png", short_description: "", long_description: "", features: [] },
          { id: 5, title: "Power & Generating Sets", slug: "generators", image: "/images/products/generator.png", short_description: "", long_description: "", features: [] },
          { id: 6, title: "Yiwu One-Stop Sourcing", slug: "yiwu", image: "/images/products/jump_rope.png", short_description: "", long_description: "", features: [] },
          { id: 7, title: "Hiking Backpack", slug: "backpack", image: "/images/products/backpack.png", short_description: "", long_description: "", features: [] },
          { id: 8, title: "Paper Gift Box", slug: "packaging", image: "/images/products/gift_box.png", short_description: "", long_description: "", features: [] },
          { id: 9, title: "Wearable Tech", slug: "wearable-tech", image: "/images/products/smart_watch.png", short_description: "", long_description: "", features: [] },
          { id: 10, title: "Plastic Machinery", slug: "plastic", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop", short_description: "", long_description: "", features: [] },
          { id: 11, title: "Pump & Vacuum Equipment", slug: "pumps", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=400&fit=crop", short_description: "", long_description: "", features: [] },
          { id: 12, title: "Machine Tools", slug: "machine-tools", image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=400&fit=crop", short_description: "", long_description: "", features: [] }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section 
      className="py-10 bg-white"
      aria-labelledby="trending-products-title"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Page Header */}
        <div className="mb-8">
          <h2 id="trending-products-title" className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
            Selected Trending Products
          </h2>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-8">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col items-center">
                <div className="w-full aspect-square bg-gray-100 rounded-md mb-3" />
                <div className="h-3 w-1/2 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        ) : (
          /* Responsive Grid */
          <div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-8"
            role="region" 
            aria-label="Product Categories Grid"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default TrendingProducts;
