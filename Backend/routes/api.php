<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

    
    // Contacts Routes
    
    Route::post('create-contact', [ContactController::class, 'createContact']);
    
    Route::post('contacts/{id?}', [ContactController::class, 'getContacts']);
    
    Route::delete('delete-contact/{id}', [ContactController::class, 'deleteContact']);

