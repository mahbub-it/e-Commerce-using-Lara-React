<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SettingController;
use App\Models\Product;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/products', [ProductController::class, 'index']);

// API Resource Route for ProductController
Route::apiResource('products', ProductController::class);

// API Resource Route for SettingController
Route::apiResource('settings', SettingController::class);

// SKU routes
Route::get("/products/{product}/sku", function (Request $request) {

    $product = $request->product;
    return Product::find($product)->with('skus')->get();
});
