<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    // Indiquer les champs remplissables
    protected $fillable = ['nom'];

    // Relation inverse avec Talent
    public function talents()
    {
        return $this->hasMany(Talent::class, 'categorie_id');
    }
}

