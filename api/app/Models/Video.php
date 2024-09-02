<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $table = 'videos';

    // Indiquer les champs remplissables
    protected $fillable = ['src', 'page', 'video_linked', 'img_id'];

    // Définir la relation avec Image
    public function image()
    {
        return $this->belongsTo(Image::class, 'img_id');
    }

    // Définir la relation avec Video pour les vidéos liées
    public function linkedVideos()
    {
        return $this->hasMany(Video::class, 'id', 'video_linked');
    }
}

