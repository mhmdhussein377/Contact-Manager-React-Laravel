<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login')->name("login");
    Route::post('register', 'register');

    Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
});

Route::group(["middleware" => "jwt.auth"], function() {
    
    // Contacts Routes
    
    Route::post('create-contact', [ContactController::class, 'createContact']);
    
    Route::post('contacts/{id?}', [ContactController::class, 'getContacts']);
    
    Route::put('update-contact/{id}', [ContactController::class, 'updateContact']);
    
    Route::delete('delete-contact/{id}', [ContactController::class, 'deleteContact']);

    //login & signup 
    Route::post("logout", [AuthController::class, "logout"]);
    Route::post("refresh", [AuthController::class, "refresh"]);

});
