<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function test_products(){
        $products = [
            [
                'name' => 'Wooden Wall Clock',
                'description' => 'A beautiful wooden wall clock.',
                'price' => 29,
                'stock' => 100,
                'category_id' => 1,
                'user_id' => 1,
                'status' => 'available',
            ],
            [
                'name' => 'Gray Vintage Chair',
                'description' => 'A stylish gray vintage chair.',
                'price' => 62,
                'stock' => 50,
                'category_id' => 2,
                'user_id' => 1,
                'status' => 'available',
            ],
            [
                'name' => 'Small Gray Table',
                'description' => 'A stylish small gray table.',
                'price' => 17,
                'stock' => 50,
                'category_id' => 3,
                'user_id' => 1,
                'status' => 'available',
            ],
            [
                'name' => 'Cableknit Shawl',
                'description' => 'A cozy cableknit shawl.',
                'price' => 25,
                'stock' => 99,
                'category_id' => 4,
                'user_id' => 1,
                'status' => 'available',
            ]
        ];

        return $products;
    }

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::insert($this->test_products());
    }
}
