<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{

    public function getClipsVideo()
    {
        
        // Récupérer la vidéo 1 depuis la base de données
        $video1 = Video::find(2);

        // Vérifier si la vidéo 1 existe
        if (!$video1) {
            return response()->json(['error' => 'La vidéo 1 n\'existe pas.'], 404);
        }
        // Formatter les données de la vidéo 1 selon le format requis
        $formattedVideo[] = [
            'title' => 'Clips',
            'subtitle' => 'A travers le son.',
            'btnTitle' => 'Regarder',
            'btnFunction' => null,
            'page' => 'clips',
            'video' => [
                [
                    'src' => $video1->src,
                    'videosLinked' => $this->getLinkedVideos($video1->video_linked)
                ]
            ]
        ];

        // // Retourner les données formatées de la vidéo 1 en tant que réponse JSON
        return response()->json([$formattedVideo]);
        //response()->json($formattedVideo);
    }

    public function getSeriesVideo()
    {
        
        // Récupérer la vidéo 1 depuis la base de données
        $video1 = Video::find(3);

        // Vérifier si la vidéo 1 existe
        if (!$video1) {
            return response()->json(['error' => 'La vidéo 1 n\'existe pas.'], 404);
        }
        // Formatter les données de la vidéo 1 selon le format requis
        $formattedVideo[] = [
            'title' => 'Series',
            'subtitle' => 'Du jamais vu.',
            'btnTitle' => 'Regarder',
            'btnFunction' => null,
            'page' => 'series',
            'video' => [
                [
                    'src' => $video1->src,
                    'videosLinked' => $this->getLinkedVideos($video1->video_linked)
                ]
            ]
        ];

        // // Retourner les données formatées de la vidéo 1 en tant que réponse JSON
        return response()->json([$formattedVideo]);
        //response()->json($formattedVideo);
    }

    private function getLinkedVideos($videoLinkedIds)
    {
        if (!$videoLinkedIds) {
            return [];
        }

        // Convertir l'array JSON en tableau PHP
        $videoLinkedIds = json_decode($videoLinkedIds, true);

        // Récupérer les URLs des vidéos liées à partir de leurs IDs
        $linkedVideos = [];
        foreach ($videoLinkedIds as $videoId) {
            $linkedVideo = Video::find($videoId);
            if ($linkedVideo) {
                $linkedVideos[] = [
                    'title' => '',
                    'subtitle' => '',
                    'src' => $linkedVideo->src
                ];
            }
        }

        return $linkedVideos;
    }

    public function getArticle1()
    {
        
        // Récupérer la vidéo 1 depuis la base de données
        $video1 = Video::find(1);

        // Vérifier si la vidéo 1 existe
        if (!$video1) {
            return response()->json(['error' => 'La vidéo 1 n\'existe pas.'], 404);
        }
        // Formatter les données de la vidéo 1 selon le format requis
        $formattedVideo[] = [
            'title' => 'Article1',
            'subtitle' => 'Sous-titre article1.',
            'btnTitle' => 'Regarder',
            'link' => 'article1',
            'page'=> json_decode($video1->page, true),
            'video' => 
                [
                    'id'=> $video1->id,
                    'src' => $video1->src,
                ]
            
        ];

        // // Retourner les données formatées de la vidéo 1 en tant que réponse JSON
        return response()->json($formattedVideo);
        //response()->json($formattedVideo);
    }

    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Video $video)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    {
        //
    }
}
