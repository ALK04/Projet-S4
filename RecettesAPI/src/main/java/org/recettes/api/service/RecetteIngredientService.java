package org.recettes.api.service;

import org.recettes.api.dto.request.recetteingredient.CreateRecetteIngredientRequest;
import org.recettes.api.dto.request.recetteingredient.UpdateRecetteIngredientRequest;
import org.recettes.api.dto.response.recetteingredient.RecetteIngredientResponse;

import java.util.List;

public interface RecetteIngredientService {
    List<RecetteIngredientResponse> getByRecette(Long recetteId);
    RecetteIngredientResponse getById(Long id);
    RecetteIngredientResponse create(CreateRecetteIngredientRequest request);
    RecetteIngredientResponse update(Long id, UpdateRecetteIngredientRequest request);
    void delete(Long id);
}
