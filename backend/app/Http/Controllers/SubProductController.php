<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class SubProductController extends Controller
{
    /**
     * Get sub-products for a specific category (product) slug.
     */
    public function index($slug)
    {
        $product = Product::where('slug', $slug)->first();

        if (!$product) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        // Assuming a hasMany relationship exists, otherwise we use where
        $subProducts = \App\Models\SubProduct::where('product_id', $product->id)->get();

        return response()->json($subProducts);
    }
}
