import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="group relative flex flex-col justify-between min-h-[340px] bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
      <div>
        {/* Image Container with zoom effect on hover */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 border-b border-border">
          <Image
            src={product.image}
            alt={`${product.title} Category`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            priority={product.id <= 4}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Content Block */}
        <div className="p-5">
          <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-primary mb-1">
            Category
          </span>
          <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-5 pb-5 mt-auto">
        <Link
          href={`/product/${product.slug}`}
          aria-label={`Explore ${product.title} category`}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-secondary bg-gray-50 border border-border rounded-lg group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span>Explore</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
