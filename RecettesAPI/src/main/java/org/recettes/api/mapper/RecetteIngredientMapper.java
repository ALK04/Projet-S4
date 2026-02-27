package org.recettes.api.mapper;

import org.recettes.api.dto.response.recetteingredient.RecetteIngredientResponse;
import org.recettes.api.model.RecetteIngredient;

import java.util.List;
import java.util.stream.Collectors;

public class RecetteIngredientMapper {

    public static RecetteIngredientResponse toResponse(RecetteIngredient entity) {
        RecetteIngredientResponse response = new RecetteIngredientResponse();
        response.setId(entity.getId());

        if (entity.getRecette() != null) {
            response.setRecetteId(entity.getRecette().getIdRecette());
        }

        if (entity.getIngredient() != null) {
            response.setIngredientId(entity.getIngredient().getIdIngredient());
            response.setNomIngredient(entity.getIngredient().getNomIngredient());
        }

        response.setQuantite(entity.getQuantite());
        return response;
    }

    public static List<RecetteIngredientResponse> toResponseList(List<RecetteIngredient> entities) {
        return entities.stream()
                .map(RecetteIngredientMapper::toResponse)
                .collect(Collectors.toList());
    }
}
