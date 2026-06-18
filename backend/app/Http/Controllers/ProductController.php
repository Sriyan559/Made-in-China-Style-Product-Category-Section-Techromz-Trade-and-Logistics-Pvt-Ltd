<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the products.
     */
    public function index(Request $request)
    {
        $query = Product::query();

        // Handle search by title or category
        if ($request->has('search') && !empty($request->search)) {
            $searchTerm = $request->search;
            $query->where(function ($q) use ($searchTerm) {
                $q->where('title', 'like', '%' . $searchTerm . '%')
                  ->orWhere('category', 'like', '%' . $searchTerm . '%');
            });
        }

        $products = $query->get(['title', 'slug', 'image', 'short_description']);
        return response()->json($products);
    }

    /**
     * Display the specified product by slug.
     */
    public function show($slug)
    {
        $product = Product::where('slug', $slug)->first();

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json([
            'title' => $product->title,
            'slug' => $product->slug,
            'image' => $product->image,
            'long_description' => $product->long_description,
            'features' => $product->features,
        ]);
    }
}
