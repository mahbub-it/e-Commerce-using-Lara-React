<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Sku;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'stock',
        'status',
        'image',
        'category_id',
        'user_id'
    ];

    // Category relationship
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // SKU relationship
    public function skus()
    {
        return $this->hasOne(Sku::class);
    }
}
