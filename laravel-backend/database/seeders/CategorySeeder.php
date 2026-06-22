<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Furniture',
                'slug' => 'furniture',
                'description' => 'Various types of furniture for your home and office.',
                'image' => '', 
                'parent_id' => null,
                'depth' => 0,
                'position' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'Accessories',
                'slug' => 'accessories',
                'description' => 'Various types of accessories for your home and office.',
                'image' => '',
                'parent_id' => null,
                'depth' => 0,
                'position' => 2,
                'status' => 'active',
            ],
            [
                'name' => 'Electronics',
                'slug' => 'electronics',
                'description' => 'Various types of electronics for your home and office.',
                'image' => '',
                'parent_id' => null,
                'depth' => 0,
                'position' => 3,
                'status' => 'active',
            ],
            [
                'name' => 'Software',
                'slug' => 'software',
                'description' => 'Various types of software for your home and office.',
                'image' => '',
                'parent_id' => 1,
                'depth' => 1,
                'position' => 1,
                'status' => 'active',
            ],
        ];

        foreach ($categories as $category) {
            \App\Models\Category::insert($category);
        }
    }
}
