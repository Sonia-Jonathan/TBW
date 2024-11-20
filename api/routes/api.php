<?php

use App\Http\Controllers\CitationController;
use App\Http\Controllers\TalentController;
use App\Http\Controllers\VideoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/clipsVideo', [VideoController::class, 'getClipsVideo']);
Route::get('/seriesVideo', [VideoController::class, 'getSeriesVideo']);
Route::get('/article1', [VideoController::class, 'getArticle1']);
Route::get('/citations/{id}', [CitationController::class, 'getCitationId']);
Route::get('/talents', [TalentController::class, 'index']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
