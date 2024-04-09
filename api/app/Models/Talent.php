<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Talent extends Model
{
    // use HasFactory;
    protected $fillable = ['nom', 'prenom', 'description', 'img_id'];

    public function image()
    {
        return $this->belongsTo(Image::class, 'img_id');
    }
}
