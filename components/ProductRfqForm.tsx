"use client";

import React, { useState } from "react";

interface ProductRfqFormProps {
  productTitle: string;
}

export const ProductRfqForm: React.FC<ProductRfqFormProps> = ({ productTitle }) => {
  const [quantity, setQuantity] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [specs, setSpecs] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you! Your sourcing request for "${productTitle}" has been submitted successfully.\n\nDetails:\n- Quantity: ${quantity}\n- Budget: ${budget || "Not Specified"}\n- Specs: ${specs || "None"}\n\nA Techromz agent will contact you shortly.`
    );
    // Reset form
    setQuantity("");
    setBudget("");
    setSpecs("");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rfq-quantity" className="block text-xs font-bold uppercase text-gray-500 mb-2">
            Order Quantity *
          </label>
          <input
            type="number"
            id="rfq-quantity"
            required
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g. 1000"
            className="w-full text-xs p-3 border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="rfq-budget" className="block text-xs font-bold uppercase text-gray-500 mb-2">
            Target Budget (USD)
          </label>
          <input
            type="text"
            id="rfq-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="e.g. $10,000"
            className="w-full text-xs p-3 border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div>
        <label htmlFor="rfq-specs" className="block text-xs font-bold uppercase text-gray-500 mb-2">
          Customization Requirements
        </label>
        <textarea
          id="rfq-specs"
          rows={3}
          value={specs}
          onChange={(e) => setSpecs(e.target.value)}
          placeholder="Please detail logo branding, packing specs, or quality certification needs..."
          className="w-full text-xs p-3 border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-primary text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Submit RFQ to Verified Suppliers
      </button>
    </form>
  );
};

export default ProductRfqForm;
