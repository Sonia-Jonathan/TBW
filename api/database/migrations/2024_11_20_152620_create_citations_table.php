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
        Schema::create('citations', function (Blueprint $table) {
            $table->increments('id');
            $table->text('citation');
            $table->unsignedInteger('id_video')->nullable();
            $table->foreign('id_video')->references('id')->on('videos')->onDelete('set null');
            $table->unsignedInteger('id_img')->nullable();
            $table->foreign('id_img')->references('id')->on('images')->onDelete('set null');
            $table->unsignedInteger('id_bg');
            $table->foreign('id_bg')->references('id')->on('images')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('citations');
    }
};
