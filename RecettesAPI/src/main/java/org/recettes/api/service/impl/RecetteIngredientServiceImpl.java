package org.recettes.api.service.impl;

import org.recettes.api.dto.request.recetteingredient.CreateRecetteIngredientRequest;
import org.recettes.api.dto.request.recetteingredient.UpdateRecetteIngredientRequest;
import org.recettes.api.dto.response.recetteingredient.RecetteIngredientResponse;
import org.recettes.api.mapper.RecetteIngredientMapper;
import org.recettes.api.model.RecetteIngredient;
import org.recettes.api.model.Ingredient;
import org.recettes.api.model.Recette;
import org.recettes.api.repository.RecetteIngredientRepository;
import org.recettes.api.repository.IngredientRepository;
import org.recettes.api.repository.RecetteRepository;
import org.recettes.api.service.RecetteIngredientService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecetteIngredientServiceImpl implements RecetteIngredientService {

    private final RecetteIngredientRepository repository;
    private final RecetteRepository recetteRepository;
    private final IngredientRepository ingredientRepository;

    public RecetteIngredientServiceImpl(
            RecetteIngredientRepository repository,
            RecetteRepository recetteRepository,
            IngredientRepository ingredientRepository) {
        this.repository = repository;
        this.recetteRepository = recetteRepository;
        this.ingredientRepository = ingredientRepository;
    }

    @Override
    public List<RecetteIngredientResponse> getByRecette(Long recetteId) {
        return RecetteIngredientMapper.toResponseList(repository.findByRecetteIdRecette(recetteId));
    }

    @Override
    public RecetteIngredientResponse getById(Long id) {
        RecetteIngredient entity = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("RecetteIngredient non trouvé"));
        return RecetteIngredientMapper.toResponse(entity);
    }

    @Override
    public RecetteIngredientResponse create(CreateRecetteIngredientRequest request) {
        Recette recette = recetteRepository.findById(request.getRecetteId())
                .orElseThrow(() -> new RuntimeException("Recette non trouvée"));

        Ingredient ingredient = ingredientRepository.findById(request.getIngredientId())
                .orElseThrow(() -> new RuntimeException("Ingrédient non trouvé"));

        RecetteIngredient entity = new RecetteIngredient();
        entity.setRecette(recette);
        entity.setIngredient(ingredient);
        entity.setQuantite(request.getQuantite());

        return RecetteIngredientMapper.toResponse(repository.save(entity));
    }

    @Override
    public RecetteIngredientResponse update(Long id, UpdateRecetteIngredientRequest request) {
        RecetteIngredient entity = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("RecetteIngredient non trouvé"));

        entity.setQuantite(request.getQuantite());

        return RecetteIngredientMapper.toResponse(repository.save(entity));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
