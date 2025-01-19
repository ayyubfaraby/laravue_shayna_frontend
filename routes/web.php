<?php

use Illuminate\Support\Facades\Route;

// Rute untuk menangani semua halaman Vue
Route::get('/{any}', function () {
    return view('app'); // Ganti dengan Blade yang memuat Vue
})->where('any', '.*');