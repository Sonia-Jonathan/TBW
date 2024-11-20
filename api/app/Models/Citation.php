<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Citation extends Model
{
    use HasFactory;

    protected $fillable = [
        'citation',
        'id_video',
        'id_img',
        'id_bg',
    ];

    public function video()
    {
        return $this->belongsTo(Video::class, 'id_video');
    }

    public function img()
    {
        return $this->belongsTo(Image::class, 'id_img');
    }

    public function bg()
    {
        return $this->belongsTo(Image::class, 'id_bg');
    }
}
