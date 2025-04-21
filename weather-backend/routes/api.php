<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Example route
Route::middleware('api')->get('/user', function (Request $request) {
    return $request->user();
});

// Weather API route
use App\Http\Controllers\WeatherController;
Route::get('/weather', [WeatherController::class, 'getWeather']);




