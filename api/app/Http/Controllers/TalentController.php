<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Talent;
use Illuminate\Http\Request;

class TalentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $allTalents = Talent::findAll();
        $allTalentsFormatted = [];
        foreach ($allTalents as $key => $talent) {
            $imgTalent = Image::find($talent->img_id);
            $formattedTalent[] = [
                'nom' => $talent->nom,
                'prenom' => $talent->prenom,
                'description' => $talent->description,
                'img' => [
                    [
                        'src' => $imgTalent->src,
                        'alt' => $imgTalent->alt
                    ]
                ]
            ];

            array_push($allTalentsFormatted, $formattedTalent);
        }
        return response()->json([$allTalents]);
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
    public function show(Talent $talent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Talent $talent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Talent $talent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Talent $talent)
    {
        //
    }
}
