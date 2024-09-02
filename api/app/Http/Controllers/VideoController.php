<?php 

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function getClipsVideo()
    {
        // Récupérer la vidéo 1 depuis la base de données avec l'image associée
        $video1 = Video::with('image')->find(2);

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
                    'img_video' => [
                        'src' => $video1->image->src,
                        'alt' => $video1->image->alt,
                    ],
                    'videosLinked' => $this->getLinkedVideos($video1->video_linked)
                ]
            ]
        ];

        return response()->json([$formattedVideo]);
    }

    public function getSeriesVideo()
    {
        // Récupérer la vidéo 1 depuis la base de données avec l'image associée
        $video1 = Video::with('image')->find(3);

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
                    'img_video' => [
                        'src' => $video1->image->src,
                        'alt' => $video1->image->alt,
                    ],
                    'videosLinked' => $this->getLinkedVideos($video1->video_linked)
                ]
            ]
        ];

        return response()->json([$formattedVideo]);
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
                    'src' => $linkedVideo->src,
                    'img_video' => [
                        'src' => $linkedVideo->image->src,
                        'alt' => $linkedVideo->image->alt,
                    ]
                ];
            }
        }

        return $linkedVideos;
    }

    public function getArticle1()
    {
        // Récupérer la vidéo 1 depuis la base de données avec l'image associée
        $video1 = Video::with('image')->find(1);

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
            'video' => [
                'id'=> $video1->id,
                'src' => $video1->src,
                'img_video' => [
                    'src' => $video1->image->src,
                    'alt' => $video1->image->alt,
                ]
            ]
        ];

        return response()->json($formattedVideo);
    }

    // Méthodes restantes pour les opérations CRUD
    public function index() {}
    public function create() {}
    public function store(Request $request) {}
    public function show(Video $video) {}
    public function edit(Video $video) {}
    public function update(Request $request, Video $video) {}
    public function destroy(Video $video) {}
}
