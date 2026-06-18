import React from "react";
import TrendingProducts from "@/components/TrendingProducts";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <TrendingProducts />
    </main>
  );
}
