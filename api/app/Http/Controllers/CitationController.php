<?php

namespace App\Http\Controllers;

use App\Models\Citation;
use Illuminate\Http\Request;

class CitationController extends Controller
{
    public function getCitationId($id)
    {
        $citation = Citation::with(['video', 'img', 'bg'])->find($id);

        if (!$citation) {
            return response()->json(['error' => 'Citation not found'], 404);
        }
        

        $formattedCitation[]=[
            'id' => $citation->id,
            'citation' => $citation->citation,
            'video' => $citation->video ? [
                'id' => $citation->video->id,
                'src' => $citation->video->src,
            ] : null,
            'img' => $citation->img ? [
                'id' => $citation->img->id,
                'src' => $citation->img->src,
                'alt' => $citation->img->alt,
            ] : null,
            'bg' => [
                'id' => $citation->bg->id,
                'src' => $citation->bg->src,
                'alt' => $citation->bg->alt,
            ],
            'publication_date' => $citation->created_at->format('d/m/Y'),
        ];

        return response()->json($formattedCitation);
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
    public function show(Citation $citation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Citation $citation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Citation $citation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Citation $citation)
    {
        //
    }
}
