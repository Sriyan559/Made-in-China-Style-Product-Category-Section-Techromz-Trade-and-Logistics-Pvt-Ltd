<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'image',
        'short_description',
        'long_description',
        'features',
        'category',
    ];

    protected $casts = [
        'features' => 'array',
    ];
}
