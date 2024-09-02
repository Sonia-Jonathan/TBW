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
            // Charger les talents avec les relations image et category
            $allTalents = Talent::with(['category', 'image'])->get();

            // Grouper les talents par catégorie
            $groupedTalents = $allTalents->groupBy('category.name');

            // Formater les données
            $formattedTalents = $groupedTalents->map(function ($talents, $categoryName) {
                return [
                    'categorie' => $categoryName,
                    'talents' => $talents->map(function ($talent) {
                        return [
                            'nom' => $talent->nom,
                            'prenom' => $talent->prenom,
                            'desc' => $talent->description,
                            'img' => [
                                'src' => $talent->image->src,  // Assurez-vous que `src` est le champ correct pour l'URL de l'image
                                'alt' => $talent->image->alt,  // Assurez-vous que `alt` est le champ correct pour le texte alternatif de l'image
                            ],
                        ];
                    })->values()->all(),
                ];
            })->values()->all();

            return response()->json($formattedTalents);
        } catch (\Exception $e) {
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
