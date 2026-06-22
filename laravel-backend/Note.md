# Commands for laravel-backend project
- composer create-project laravel/laravel laravel-backend
- cd laravel-backend/
- nano .env
- php artisan key:generate
- php artisan migrate:fresh --seed
- php artisan make:migration create_products_table

<!-- -  Run the migrations for Category table -->
- php artisan make:migration create_categories_table
-           $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->foreignId('parent_id')->nullable()->constrained('categories'); 
            $table->integer('depth')->default(0);
            $table->integer('position')->default(0);
            $table->string('status')->default('active');
            $table->timestamps();

<!-- -  Run the migrations for Product table -->
- php artisan make:migrate create_products_table
-           $table->id();
            $table->string('name');
            $table->text('description');
            $table->decimal('price', 8, 2);
            $table->integer('stock');
            $table->enum('status', ['available', 'unavailable'])->default('available');
            $table->string('image')->nullable();
            $table->foreignId('category_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->softDeletes();
            $table->timestamps();

<!-- Seeder Table -->
- php artisan make:seeder ProductSeeder
- php artisan make:seeder UserSeeder
- php artisan make:seeder CategorySeeder
- php artisan make:model Category
- php artisan migrate:fresh --seed

<!-- API -->
- php artisan install:api
- php artisan make:controller ProductController --resource
- http://127.0.0.1:8000/api/products
- php artisan route:list