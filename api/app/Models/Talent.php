<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Talent extends Model
{

    protected $table = 'talents';

    protected $fillable = ['nom', 'prenom', 'description', 'img_id', 'category_id'];

    public function image()
    {
        return $this->belongsTo(Image::class, 'img_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
