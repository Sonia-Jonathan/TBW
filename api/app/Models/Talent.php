<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Talent extends Model
{

    protected $table = 'talents';

    protected $fillable = ['nom', 'prenom', 'description', 'img_id', 'categorie_id'];

    public function image()
    {
        return $this->belongsTo(Image::class, 'img_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'categorie_id');
    }
}
