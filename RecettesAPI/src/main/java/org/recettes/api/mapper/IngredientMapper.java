package org.recettes.api.mapper;

import org.recettes.api.dto.response.ingredient.IngredientResponse;
import org.recettes.api.model.Ingredient;

import java.util.List;
import java.util.stream.Collectors;

public class IngredientMapper {

    public static IngredientResponse toResponse(Ingredient ingredient) {
        IngredientResponse response = new IngredientResponse();
        response.setId(ingredient.getIdIngredient());
        response.setNom(ingredient.getNomIngredient());
        return response;
    }

    public static List<IngredientResponse> toResponseList(List<Ingredient> ingredients) {
        return ingredients.stream()
                .map(IngredientMapper::toResponse)
                .collect(Collectors.toList());
    }
}
