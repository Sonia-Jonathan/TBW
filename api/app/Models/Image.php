<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = 'images';

    // Indiquer les champs remplissables
    protected $fillable = ['src', 'alt'];

    // Relation inverse avec Video
    public function videos()
    {
        return $this->hasMany(Video::class, 'img_id');
    }

    // Relation inverse avec Talent
    public function talents()
    {
        return $this->hasMany(Talent::class, 'img_id');
    }
}

