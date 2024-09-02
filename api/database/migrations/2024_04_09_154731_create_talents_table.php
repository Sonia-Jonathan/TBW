<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('talents', function (Blueprint $table) {
            $table->increments('id'); 
            $table->unsignedInteger('img_id'); 
            $table->foreign('img_id')->references('id')->on('images')->onDelete('cascade');
            $table->unsignedInteger('category_id'); // Ajout du champ category_id
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->string('nom')->nullable(false);
            $table->string('prenom')->nullable(false);
            $table->text('description')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('talents');
    }
};

