package org.recettes.api.service.impl;

import org.recettes.api.dto.request.ingredient.CreateIngredientRequest;
import org.recettes.api.dto.request.ingredient.UpdateIngredientRequest;
import org.recettes.api.dto.response.ingredient.IngredientResponse;
import org.recettes.api.mapper.IngredientMapper;
import org.recettes.api.model.Ingredient;
import org.recettes.api.repository.IngredientRepository;
import org.recettes.api.service.IngredientService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientServiceImpl implements IngredientService {

    private final IngredientRepository repository;

    public IngredientServiceImpl(IngredientRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<IngredientResponse> getAll() {
        return IngredientMapper.toResponseList(repository.findAll());
    }

    @Override
    public IngredientResponse getById(Long id) {
        Ingredient ingredient = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingrédient non trouvé"));
        return IngredientMapper.toResponse(ingredient);
    }

    @Override
    public IngredientResponse create(CreateIngredientRequest request) {
        Ingredient ingredient = new Ingredient();
        ingredient.setNomIngredient(request.getNom());
        return IngredientMapper.toResponse(repository.save(ingredient));
    }

    @Override
    public IngredientResponse update(Long id, UpdateIngredientRequest request) {
        Ingredient ingredient = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingrédient non trouvé"));
        ingredient.setNomIngredient(request.getNom());
        return IngredientMapper.toResponse(repository.save(ingredient));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
