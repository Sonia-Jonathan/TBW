<?php
namespace App\Http\Controllers;

use App\Models\Talent;
use Illuminate\Http\Request;

class TalentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
            // Charger les talents avec les relations image et category
            $allTalents = Talent::with(['image', 'category'])->get();
            
            // Formater les talents
            $allTalentsFormatted[] = $allTalents->map(function ($talent) {
                return [
                    'nom' => $talent->nom,
                    'prenom' => $talent->prenom,
                    'description' => $talent->description,
                    'image' => [
                        'src' => $talent->image->src,
                        'alt' => $talent->image->alt
                    ],
                    'category' => [
                        'nom' => $talent->category->nom
                    ]
                ];
            });

            return response()->json($allTalentsFormatted);

       
    }

    // Méthodes restantes pour les opérations CRUD
    public function create() {}
    public function store(Request $request) {}
    public function show(Talent $talent) {}
    public function edit(Talent $talent) {}
    public function update(Request $request, Talent $talent) {}
    public function destroy(Talent $talent) {}
}
