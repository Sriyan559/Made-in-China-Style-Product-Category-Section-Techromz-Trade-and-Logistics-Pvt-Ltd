"use client";

import React from "react";
import TrendingProducts from "@/components/TrendingProducts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Top Banner / Announcement */}
      <div className="bg-secondary text-white text-xs py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center gap-4">
          <span>Techromz Trade and Logistics B2B Portal</span>
          <span className="hidden md:inline text-gray-400">|</span>
          <span className="hidden md:inline text-gray-300">Welcome to Global Sourcing Center</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#help" className="hover:text-primary transition-colors">Help Center</a>
          <a href="#rfq" className="hover:text-primary transition-colors">Submit RFQ</a>
          <a href="#language" className="hover:text-primary transition-colors">English (USD)</a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="w-9 h-9 bg-primary flex items-center justify-center text-white font-extrabold text-xl rounded-lg tracking-wider">T</span>
              <span className="text-xl font-extrabold text-secondary tracking-tight">
                Techromz<span className="text-primary font-normal">Marketplace</span>
              </span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4">
              <form className="relative flex w-full" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Enter keywords, product name, or category..."
                  className="w-full px-5 py-2.5 text-sm border border-border border-r-0 rounded-l-lg bg-gray-50 focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  aria-label="Search products and categories"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-r-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                  aria-label="Search button"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search</span>
                </button>
              </form>
            </div>

            {/* CTA Header Actions */}
            <div className="flex items-center gap-4">
              <a 
                href="#post-rfq" 
                className="hidden lg:inline-flex items-center px-4 py-2 border border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary/5 transition-all"
              >
                Post RFQ
              </a>
              <a 
                href="#signin" 
                className="px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary/90 transition-all shadow-xs"
              >
                Sign In
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Sourcing Navigation */}
      <nav className="bg-white border-b border-border shadow-2xs hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 h-12 text-sm font-semibold text-gray-700">
            <a href="#all" className="text-secondary hover:text-primary flex items-center gap-1.5 py-3 border-b-2 border-transparent hover:border-primary transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              All Categories
            </a>
            <a href="#secured" className="hover:text-primary py-3 border-b-2 border-transparent hover:border-primary transition-all">Secured Trade</a>
            <a href="#customs" className="hover:text-primary py-3 border-b-2 border-transparent hover:border-primary transition-all">Logistics Services</a>
            <a href="#wholesale" className="hover:text-primary py-3 border-b-2 border-transparent hover:border-primary transition-all">Wholesale Hub</a>
            <a href="#exhibitions" className="hover:text-primary py-3 border-b-2 border-transparent hover:border-primary transition-all">Online Expo</a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="bg-linear-to-r from-gray-900 via-gray-800 to-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
          {/* Subtle decorative grid background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                Live Sourcing & Supply Chain
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Source Globally from <br className="hidden sm:inline" />Verified Manufacturers & Suppliers
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl font-light leading-relaxed">
                Connect with vetted suppliers offering customized products, trade assurance, and end-to-end logistics solutions tailored for enterprise sourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#trending" 
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white text-base font-semibold rounded-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-primary/20"
                >
                  Start Sourcing
                </a>
                <a 
                  href="#rfq" 
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-base font-semibold border border-white/20 rounded-lg transition-all"
                >
                  Get Multiple Quotes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Global Statistics Grid */}
        <section className="bg-white border-b border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 border-r last:border-0 border-border">
                <p className="text-3xl font-extrabold text-secondary">5,000+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Product Segments</p>
              </div>
              <div className="p-4 border-r last:border-0 border-border">
                <p className="text-3xl font-extrabold text-secondary">100K+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Verified Sellers</p>
              </div>
              <div className="p-4 border-r last:border-0 border-border">
                <p className="text-3xl font-extrabold text-secondary">220+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Trade Regions</p>
              </div>
              <div className="p-4 border-r last:border-0 border-border">
                <p className="text-3xl font-extrabold text-secondary">24hr</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">RFQ Response Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Categories Section */}
        <div id="trending">
          <TrendingProducts />
        </div>

        {/* Request for Quotation (RFQ) Form Section */}
        <section id="rfq" className="bg-white border-t border-b border-border py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-3">
                Request for Quotation (RFQ)
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Tell us what you need, and we will match you with the right suppliers. Receive competitive bids within 24 hours.
              </p>
            </div>

            <form 
              className="space-y-6 bg-gray-50 border border-border p-6 md:p-8 rounded-xl shadow-xs" 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your sourcing request has been submitted successfully. Techromz agents will contact you shortly.");
              }}
            >
              <div>
                <label htmlFor="product-name" className="block text-sm font-semibold text-secondary mb-2">
                  Product Name or Category *
                </label>
                <input
                  type="text"
                  id="product-name"
                  required
                  placeholder="e.g. Hiking Backpack, Solar Panels"
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-secondary mb-2">
                    Purchase Quantity *
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    required
                    min="1"
                    placeholder="e.g. 500"
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="unit" className="block text-sm font-semibold text-secondary mb-2">
                    Unit Type *
                  </label>
                  <select
                    id="unit"
                    defaultValue="Pieces"
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  >
                    <option>Pieces</option>
                    <option>Sets</option>
                    <option>Units</option>
                    <option>Tons</option>
                    <option>Containers</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-semibold text-secondary mb-2">
                  Detailed Sourcing Specifications (Optional)
                </label>
                <textarea
                  id="requirements"
                  rows={4}
                  placeholder="Describe details such as dimensions, materials, certifications, OEM requests, and destination port..."
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white font-bold text-sm rounded-lg hover:bg-red-600 transition-colors shadow-md hover:shadow-primary/10 w-full md:w-auto"
                >
                  Submit Sourcing Request
                </button>
              </div>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-secondary text-gray-400 py-12 md:py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">About Techromz</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">Who We Are</a></li>
                <li><a href="#carriers" className="hover:text-white transition-colors">Logistics Networks</a></li>
                <li><a href="#press" className="hover:text-white transition-colors">B2B Trade Press</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Strategic Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Sourcing Options</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#categories" className="hover:text-white transition-colors">Categories Catalog</a></li>
                <li><a href="#suppliers" className="hover:text-white transition-colors">Supplier Audit Report</a></li>
                <li><a href="#factory" className="hover:text-white transition-colors">Online Factory Tour</a></li>
                <li><a href="#quotes" className="hover:text-white transition-colors">Instant RFQ Matching</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Help & Support</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#help" className="hover:text-white transition-colors">Sourcing Help Center</a></li>
                <li><a href="#disputes" className="hover:text-white transition-colors">Disputes & Claims</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#fees" className="hover:text-white transition-colors">Logistics Rates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Global Trade Center</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Providing comprehensive B2B global supply chain systems.
              </p>
              <div className="flex gap-4">
                {/* Visual badges for certifications */}
                <span className="px-2 py-1 bg-gray-800 text-[10px] text-gray-300 font-bold border border-gray-700 rounded-sm">ISO 9001</span>
                <span className="px-2 py-1 bg-gray-800 text-[10px] text-gray-300 font-bold border border-gray-700 rounded-sm">SGS Verified</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>© 2026 Techromz Trade and Logistics (Pvt) Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Made-in-China style Floating Right Sticky Sidebar widget */}
      <div 
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-white border border-border rounded-l-xl shadow-xl z-50 flex flex-col items-center divide-y divide-border overflow-hidden"
        role="complementary"
        aria-label="Quick Sourcing Widgets"
      >
        {/* RFQ button */}
        <a 
          href="#rfq"
          className="flex flex-col items-center gap-1 p-3 w-16 text-center hover:bg-gray-50 group focus:outline-none focus:bg-gray-50"
          aria-label="Submit Request for Quotation"
        >
          <svg 
            className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-[10px] font-bold text-gray-700 tracking-tight">RFQ</span>
        </a>

        {/* Help button */}
        <a 
          href="#help"
          className="flex flex-col items-center gap-1 p-3 w-16 text-center hover:bg-gray-50 group focus:outline-none focus:bg-gray-50"
          aria-label="Get customer help"
        >
          <svg 
            className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-[10px] font-bold text-gray-700 tracking-tight">Help</span>
        </a>

        {/* App download button */}
        <a 
          href="#app-download"
          className="flex flex-col items-center gap-1 p-3 w-16 text-center hover:bg-gray-50 group focus:outline-none focus:bg-gray-50"
          aria-label="Download mobile app"
        >
          <svg 
            className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-bold text-gray-700 tracking-tight">APP</span>
        </a>
      </div>

    </div>
  );
}
