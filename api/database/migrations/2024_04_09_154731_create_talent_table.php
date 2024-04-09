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
        Schema::create('talent', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nom')->nullable(false);
            $table->string('prenom')->nullable(false);
            $table->text('description')->nullable(false);
            $table->integer('img_id')->unsigned()->nullable(false);
            $table->foreign('img_id')->references('id')->on('images');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('talent');
    }
};
