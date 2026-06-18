<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'title',
        'image',
        'price',
        'moq',
    ];

    /**
     * Get the parent category (product) that owns the sub-product.
     */
    public function category()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
