<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Setting;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get all settings
        $settings = Setting::all();

        $all_settings = [];

        // Get logo
        $logo = $settings->where('settings_key', 'logo_url')->first();
        $all_settings['logo_url'] = $logo->settings_value;

        // Get copyright info
        $copyright_info = $settings->where('settings_key', 'copyright_info')->first();
        $all_settings['copyright_info'] = $copyright_info->settings_value;

        return $all_settings;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
