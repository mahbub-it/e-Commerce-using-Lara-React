<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Logo and Logo URL
        Setting::create([
            'settings_key' => 'logo_url',
            'settings_value' => 'https://www.dreamwebdev.com/wp-content/uploads/2025/01/cropped-logo.png',
        ]);

        // Copyright Info
        Setting::create([
            'settings_key' => 'copyright_info',
            'settings_value' => 'Copyright © 2026 DreamWebdev. All rights reserved.',
        ]);
    }
}
