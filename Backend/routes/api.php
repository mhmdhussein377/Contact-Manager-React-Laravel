<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

// Contacts Routes

Route::post('create-contact', [ContactController::class, 'createContact']);

Route::get('contacts/{id?}', [ContactController::class, 'getContacts']);

Route::put('update-contact/{id}', [ContactController::class, 'updateContact']);

Route::delete('delete-contact/{id}', [ContactController::class, 'deleteContact']);