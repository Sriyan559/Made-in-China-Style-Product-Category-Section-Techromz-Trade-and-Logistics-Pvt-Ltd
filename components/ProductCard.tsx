import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/category/${product.slug}`} className="group flex flex-col items-center cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden flex items-center justify-center p-4">
        <div className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-contain"
            priority={product.id <= 6}
          />
        </div>
      </div>

      {/* Content Block */}
      <div className="w-full pt-3 pb-2 text-center">
        <h3 className="text-xs sm:text-sm text-gray-700 font-medium group-hover:text-primary transition-colors duration-200">
          {product.title}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCard;
