import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductRfqForm from "@/components/ProductRfqForm";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  
  if (!product) {
    return {
      title: "Category Not Found - Techromz",
    };
  }

  return {
    title: `${product.title} - Sourcing Category | Techromz Marketplace`,
    description: `Source high-quality ${product.title} from global suppliers on Techromz. ${product.description}`,
  };
}

// Static params generation for static export optimization
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Filter 3 related products
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      
      {/* Mini B2B Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-8 h-8 bg-primary flex items-center justify-center text-white font-extrabold text-lg rounded-lg">T</span>
              <span className="text-lg font-extrabold text-secondary tracking-tight">
                Techromz<span className="text-primary font-normal">Marketplace</span>
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
                Back to Catalog
              </Link>
              <a href="#quote-form" className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors">
                Submit RFQ
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400">Categories</span>
          <span className="text-gray-400">/</span>
          <span className="text-secondary font-semibold">{product.title}</span>
        </nav>

        {/* Dynamic Product Hero Grid */}
        <section className="bg-white border border-border rounded-xl overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0 mb-8">
          {/* Hero Left: Large Image wrapper */}
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[450px] bg-gray-100 border-b lg:border-b-0 lg:border-r border-border">
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          {/* Hero Right: Fast Details & Sourcing Info */}
          <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-red-50 border border-primary/20 text-primary text-xs font-bold rounded-full mb-4">
                Verified Hot Category
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-secondary tracking-tight mb-4">
                {product.title}
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* B2B Sourcing Metrics */}
              <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-border text-xs text-gray-600 mb-6">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold text-secondary">Min. Order:</span>
                  <span className="text-gray-700">500 Pieces</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold text-secondary">FOB Port:</span>
                  <span className="text-gray-700">Ningbo / Shanghai</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold text-secondary">Supply Capacity:</span>
                  <span className="text-gray-700">50,000 Units / Month</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-secondary">Payment Terms:</span>
                  <span className="text-gray-700">L/C, T/T, Western Union</span>
                </div>
              </div>
            </div>

            {/* Direct B2B CTAs */}
            <div className="space-y-3">
              <a 
                href="#quote-form"
                className="flex items-center justify-center w-full py-3 px-4 bg-primary text-white font-bold text-sm rounded-lg hover:bg-red-600 transition-colors shadow-xs"
              >
                Request Quotation (RFQ)
              </a>
              <a 
                href="mailto:sourcing@techromz.com"
                className="flex items-center justify-center w-full py-3 px-4 bg-secondary text-white font-semibold text-sm rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Contact Sourcing Manager
              </a>
            </div>
          </div>
        </section>

        {/* Dynamic Detail Body Layout (Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Left Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Detailed Description */}
            <section className="bg-white border border-border p-6 md:p-8 rounded-xl shadow-2xs">
              <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b border-border">
                Category Sourcing Overview
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {product.longDescription}
              </p>
            </section>

            {/* Feature Cards Grid */}
            <section>
              <h2 className="text-xl font-bold text-secondary mb-6 pl-3 border-l-4 border-primary">
                Technical Specifications & Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-white border border-border rounded-xl shadow-2xs hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-primary/10 text-primary flex items-center justify-center text-xs font-bold rounded-full mt-0.5 shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-semibold text-secondary leading-snug">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Option Section */}
            {product.benefits && product.benefits.length > 0 && (
              <section className="bg-white border border-border p-6 md:p-8 rounded-xl shadow-2xs">
                <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b border-border">
                  Why Choose This Sourcing Option?
                </h2>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600 leading-relaxed font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* In-Page B2B RFQ Form */}
            <section id="quote-form" className="bg-gray-50 border border-border p-6 md:p-8 rounded-xl shadow-2xs">
              <h3 className="text-lg font-bold text-secondary mb-2">Request Quotes for {product.title}</h3>
              <p className="text-xs text-gray-500 mb-6">Specify your design, supply volumes, and port coordinates to trigger competitive quotes.</p>
              
              <ProductRfqForm productTitle={product.title} />
            </section>

          </div>

          {/* Sidebar Sourcing Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Supplier Verification Card */}
            <div className="bg-white border border-border p-5 rounded-xl shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-secondary pb-2 border-b border-border">
                Supplier Compliance
              </h3>
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 border border-green-200 flex items-center justify-center text-xs font-bold">SGS</span>
                  <div>
                    <p className="text-xs font-bold text-secondary">SGS Audited Supplier</p>
                    <p className="text-[10px] text-gray-400">Full verification report available</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center text-xs font-bold">ISO</span>
                  <div>
                    <p className="text-xs font-bold text-secondary">ISO 9001 Certification</p>
                    <p className="text-[10px] text-gray-400">Quality management certified factories</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-red-50 text-primary border border-red-100 flex items-center justify-center text-xs font-bold">B2B</span>
                  <div>
                    <p className="text-xs font-bold text-secondary">Techromz Gold Partner</p>
                    <p className="text-[10px] text-gray-400">Secure Trade & Logistics contract cover</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logistics Advisory Panel */}
            <div className="bg-white border border-border p-5 rounded-xl shadow-2xs space-y-3">
              <h3 className="text-base font-bold text-secondary pb-2 border-b border-border">
                Logistics & Shipping
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Techromz provides consolidated sea freight, customs handling, and air cargo solutions directly to your hub.
              </p>
              <div className="p-3 bg-gray-50 rounded-lg border border-border text-[11px] text-gray-600 space-y-1">
                <p>✈️ Express Air Cargo: 5-7 Days</p>
                <p>🚢 Sea Freight LCL/FCL: 20-30 Days</p>
                <p>🛡️ Cargo Protection: Fully Insured</p>
              </div>
            </div>

          </div>

        </div>

        {/* Related Sourcing Categories (Bonus) */}
        <section className="border-t border-border pt-12">
          <h2 className="text-xl font-extrabold text-secondary mb-8">
            Related Sourcing Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <div 
                key={p.id}
                className="bg-white border border-border rounded-xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-gray-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-secondary mb-1">{p.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{p.description}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <Link 
                    href={`/product/${p.slug}`}
                    className="inline-block text-xs font-semibold text-primary hover:text-red-600 transition-colors"
                  >
                    Explore Category &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-secondary text-gray-400 py-8 border-t border-gray-800 text-xs mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Techromz Trade and Logistics (Pvt) Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">Catalog Home</Link>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
