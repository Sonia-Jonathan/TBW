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
        try {
            // Charger tous les talents avec les relations image et category
            $allTalents = Talent::with(['image', 'category'])->get();
            
            // Formater les talents
            $allTalentsFormatted = $allTalents->map(function ($talent) {
                return [
                    'nom' => $talent->nom,
                    'prenom' => $talent->prenom,
                    'description' => $talent->description,
                    'img' => [
                        'src' => $talent->image ? $talent->image->src : null,
                        'alt' => $talent->image ? $talent->image->alt : null,
                    ]
                ];
            });

            // Trier les talents par catégorie
            $talentsGroupedByCategory = $allTalents->groupBy(function ($talent) {
                return $talent->category->name;
            });

            // Formater les talents triés par catégorie
            $formattedResult = $talentsGroupedByCategory->map(function ($talents) {
                return $talents->map(function ($talent) {
                    return [
                        'nom' => $talent->nom,
                        'prenom' => $talent->prenom,
                        'description' => $talent->description,
                        'img' => [
                            'src' => $talent->image ? $talent->image->src : null,
                            'alt' => $talent->image ? $talent->image->alt : null,
                        ]
                    ];
                });
            });

            return response()->json($formattedResult);

        } catch (\Exception $e) {
            // Retourner une réponse d'erreur en cas d'exception
            return response()->json(['error' => 'Erreur interne du serveur'], 500);
        }
    }

    // Méthodes restantes pour les opérations CRUD
    public function create() {}
    public function store(Request $request) {}
    public function show(Talent $talent) {}
    public function edit(Talent $talent) {}
    public function update(Request $request, Talent $talent) {}
    public function destroy(Talent $talent) {}
}
