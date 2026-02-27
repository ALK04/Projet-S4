package org.recettes.api.service;

import org.recettes.api.dto.request.ingredient.CreateIngredientRequest;
import org.recettes.api.dto.request.ingredient.UpdateIngredientRequest;
import org.recettes.api.dto.response.ingredient.IngredientResponse;

import java.util.List;

public interface IngredientService {
    List<IngredientResponse> getAll();
    IngredientResponse getById(Long id);
    IngredientResponse create(CreateIngredientRequest request);
    IngredientResponse update(Long id, UpdateIngredientRequest request);
    void delete(Long id);
}
