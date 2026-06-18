import React from "react";
import Image from "next/image";
import { SubProduct } from "@/data/subproducts";

interface SubProductCardProps {
  product: SubProduct;
}

export const SubProductCard: React.FC<SubProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden p-2">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <div className="mt-auto">
          <p className="text-lg font-bold text-gray-900">{product.price}</p>
          <p className="text-xs text-gray-500 mt-1">MOQ: {product.moq}</p>
        </div>
      </div>
    </div>
  );
};

export default SubProductCard;
