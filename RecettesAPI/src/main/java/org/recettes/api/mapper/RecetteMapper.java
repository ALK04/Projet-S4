package org.recettes.api.mapper;

import org.recettes.api.dto.response.recette.RecetteResponse;
import org.recettes.api.model.Recette;

public class RecetteMapper {

    public static RecetteResponse toResponse(Recette recette) {
        RecetteResponse response = new RecetteResponse();
        response.setId(recette.getIdRecette());
        response.setTitre(recette.getTitre());
        response.setDescription(recette.getDescription());
        response.setImageUrl(recette.getImageUrl());

        if (recette.getCategorie() != null) {
            response.setCategorieNom(recette.getCategorie().getNomCategorie());
        }
        if (recette.getUtilisateur() != null) {
            response.setUtilisateurNom(recette.getUtilisateur().getNomUtilisateur());
        }
        return response;
    }
}
