<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $video1 = new Video();
        $video1->src = 'https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705?autoPlay=true&background=true&loop=true'; 
        $video1->save();
        $video1->video_linked = [2,2,2]; 
        $video1->save();

        $video2 = new Video();
        $video2->src = 'https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705'; 
        $video2->save();

        //   // Supprimer toutes les vidéos existantes
        //   Video::truncate();

        //   // Réinitialiser l'auto-incrémentation de l'identifiant à 0
        //   DB::statement('ALTER TABLE videos AUTO_INCREMENT = 1');

        // $video3 = new Video();
        // $video3->src = 'URL_DE_VOTRE_VIDEO_3'; 
        // $video3->save();
        // $video3->video_linked = [1, 2, 4]; 
        // $video3->save();
    }
}
